(ns obb-rules.actions.auto-deploy
  "Auto deploys units to the battleground, based on predefined templates"
  ^{:added "1.5" :author "Pedro Santos"}
  (:require [clojure.math.numeric-tower :as math]
            [obb-rules.result :as result]
            [obb-rules.translator :as translator]
            [obb-rules.actions.deploy :as deploy]
            [obb-rules.stash :as stash]
            [obb-rules.board :as board]
            [obb-rules.unit :as unit]
            [obb-rules.game :as game]))

(defn- firing-squad-value
  "Translates on how the given unit is good for a firingsquad"
  [[unit quantity]]
  (- (unit/unit-range unit)))

(defn- front-row-units-to-use
  "From the given stash, finds how may units are first row material"
  [stash]
  (let [long-range-units (filter #(> (unit/unit-range (first %)) 4) stash)
        number (count long-range-units)]
    (if (> number 0) number 1)))

(defn- map-stash-to-units
  "Provides the given stash, but with translates units"
  [[unit-name quantity]]
  [(unit/fetch unit-name) quantity])

(defn- build-lineup
  "Builds a vector with 8 positions, each with the corresponding unit"
  [board stash]
  (let [units (count stash)
        grouped (map #(take units (repeat [(first %)])) stash)
        final (flatten grouped)]
    (take (board/board-width board) final)))

(defn- split-stash
  "Splits the total quantity into the given slots"
  [lineup [unit quantity]]
  (let [slots (count (filter #(= unit %) lineup))
        fraction (/ quantity slots)
        smallest-parcel-quantity (math/floor fraction)
        equal-parcel-slots (- slots 1)
        biggest (- quantity (* equal-parcel-slots smallest-parcel-quantity))]
    (into [[unit biggest]]
          (take equal-parcel-slots (repeat [unit smallest-parcel-quantity])))))

(defn- build-lineup-quantities
  "Associates the expected quantities with every lineup element"
  [lineup stash]
  (let [quantities (map (partial split-stash lineup) stash)]
    (apply concat quantities)))

(defn- build-deploy-action
  "Builds a deploy action command"
  [player row idx [u q]]
  (let [coordinate (translator/coordinate player [(+ idx 1) row])]
    [(int q) (unit/unit-name u) coordinate]))

(defn- build-deploy-actions
  "Builds deploy actions based on the given data"
  [player lineup row]
  (map-indexed (partial build-deploy-action player row) lineup))

(defn- do-actions
  "Performs the deploy actions"
  [player result action]
  (if (result/failed? result)
    result
    (action (result/result-board result) player)))

(defn- deploy-front-row
  "Deploys a front row with all units equally distributed"
  [board player stash]
  (let [lineup (build-lineup board stash)
        lineup-quantities (build-lineup-quantities lineup stash)
        raw-actions (build-deploy-actions player lineup-quantities 7)
        actions (map deploy/build-deploy raw-actions)
        start-result (result/action-success board 0)]
    (reduce (partial do-actions player) start-result actions)))

(defn- deploy-back-row
  "Deploys a back row with all the given units"
  [result player stash]
  (let [raw-actions (build-deploy-actions player stash 8)
        actions (map deploy/build-deploy raw-actions)]
    (reduce (partial do-actions player) result actions)))

(defn- deploy-firingsquad
  "Deploys the given stash in a way that will be advantajous for firingsquad
  logic"
  [board player]
  (let [stash (map map-stash-to-units (board/get-stash board player))
        ordered-stash (sort-by firing-squad-value stash)
        front-row-units (front-row-units-to-use stash)
        back-row-units (- (count ordered-stash) front-row-units)]
    (-> board
        (deploy-front-row player (take front-row-units ordered-stash))
        (deploy-back-row player (take-last back-row-units ordered-stash)))))

(def templates
  "The supported auto-deploy templates"
  {:firingsquad deploy-firingsquad})

(defn- verify-restrictions
  "Checks if the auto deploy can be made"
  [board player template]
  (cond
    (not (game/state? board :deploy)) "MustBeDeployState"
    (-> (board/get-stash board player) (stash/cleared?)) "NoStash"
    (nil? (templates template)) "NoTemplate"))

(defn build-auto-deploy
  "Creates a action that auto deploys a stash"
  [[raw-template-name]]
  (let [template-name (keyword raw-template-name)]
    (fn auto-deployer [board player]
      (if-let [error (verify-restrictions board player template-name)]
        (result/action-failed error)
        ((templates template-name) board player)))))

