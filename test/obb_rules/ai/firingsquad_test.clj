(ns obb-rules.ai.firingsquad-test
  (:require [obb-rules.game :as game]
            [obb-rules.turn :as turn]
            [obb-rules.result :as result]
            [obb-rules.ai.firingsquad :as bot])
  (:use clojure.test))

(deftest deploy-choice
  (let [game (game/random)
        actions (bot/actions game)
        result (turn/process-actions game :p1 actions)]
    (is (result/succeeded? result))))

