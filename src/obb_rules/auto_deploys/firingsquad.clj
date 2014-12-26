(ns ^{:added "1.5" :author "Pedro Santos"}
  obb-rules.auto-deploys.firingsquad
  "Logic for an auto-deploy that will benefit a firingsquad"
  (:require [clojure.math.numeric-tower :as math]
            [obb-rules.result :as result]
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
        actions (map deploy/build-deploy raw-actions)
        start-result (result/action-success board 0)]
    (reduce (partial common/do-actions player) start-result actions)))

(defn- deploy-back-row
  "Deploys a back row with all the given units"
  [result player stash]
  (let [raw-actions (common/build-deploy-actions player stash 8)
        actions (map deploy/build-deploy raw-actions)]
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

