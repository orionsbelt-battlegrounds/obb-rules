(ns obb-rules.turn
  (:require [obb-rules.action :as action]
            [obb-rules.result :as result]))

(defn process
  "Processes the given actions"
  [game player & raw-actions]
  (let [actions (map action/build-action raw-actions)]
    (reduce (fn action-merger [current-game action]
              (let [result (action current-game player)]
                (result/result-board result)))
            game actions)))
