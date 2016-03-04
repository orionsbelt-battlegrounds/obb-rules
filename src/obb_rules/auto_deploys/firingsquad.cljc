(ns ^{:added "1.5" :author "Pedro Santos"}
  obb-rules.auto-deploys.firingsquad
  "Logic for an auto-deploy that will benefit a firingsquad"
  (:require [obb-rules.result :as result]
            [obb-rules.translator :as translator]
            [obb-rules.actions.deploy :as deploy]
            [obb-rules.stash :as stash]
            [obb-rules.board :as board]
            [obb-rules.auto-deploys.common :as common]
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

(defn- deploy-front-row
  "Deploys a front row with all units equally distributed"
  [board player stash]
  (let [lineup (common/build-lineup board stash)
        lineup-quantities (common/build-lineup-quantities lineup stash)
        raw-actions (common/build-deploy-actions player lineup-quantities 7)
        actions (map deploy/deploy-action raw-actions)
        board (assoc board :deploy-actions raw-actions)
        start-result (result/action-success board 0)]
    (reduce (partial common/do-actions player) start-result actions)))

(defn build-history
  "Takes the auto deploy action and adds the actual run deploy actions
  on the history"
  [result raw-actions]
  (let [history (get-in result [:board :history])
        deploy-actions (into (get-in result [:board :deploy-actions]) raw-actions)
        history (concat history [deploy-actions])
        result (assoc-in result [:board :history] history)]
    (update-in result [:board] dissoc :deploy-actions)))

(defn- deploy-back-row
  "Deploys a back row with all the given units"
  [result player stash]
  (let [raw-actions (common/build-deploy-actions player stash 8)
        result (build-history result raw-actions)
        actions (map deploy/deploy-action raw-actions)]
    (reduce (partial common/do-actions player) result actions)))

(defn deploy
  "Deploys the given stash in a way that will be advantajous for firingsquad
  logic"
  [board player]
  (let [stash (map common/map-stash-to-units (board/get-stash board player))
        ordered-stash (sort-by firing-squad-value stash)
        front-row-units (front-row-units-to-use stash)
        back-row-units (- (count ordered-stash) front-row-units)]
    (-> board
        (deploy-front-row player (take front-row-units ordered-stash))
        (deploy-back-row player (take-last back-row-units ordered-stash)))))

