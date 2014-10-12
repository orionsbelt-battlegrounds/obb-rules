(ns obb-rules.turn
  (:require [obb-rules.action :as action]
            [obb-rules.result :as result]))

(defn- apply-actions
  "Applies the actions to a board"
  [player current-game action]
  (let [result (action current-game player)]
    (result/result-board result)))

(defn process
  "Processes the given actions"
  [game player & raw-actions]
  (let [actions (map action/build-action raw-actions)
        do-actions (partial apply-actions player)]
    (reduce do-actions game actions)))
