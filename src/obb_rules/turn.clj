(ns obb-rules.turn
  (:require [obb-rules.action :as action]
            [obb-rules.result :as result]))

(defn process
  "Processes the given actions"
  [game player & raw-actions]
  (println "---")
  (println raw-actions)
  (let [actions (map action/build-action raw-actions)]
    (reduce (fn action-merger [current-game action]
              (println current-game)
              (println ".")
              (let [result (action current-game player)]
                (println result)
                (result/result-board result)))
            game actions)))
