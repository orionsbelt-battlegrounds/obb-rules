(ns obb-rules.ai.acts-as-bot-test
  (:require [obb-rules.game :as game]
            [obb-rules.turn :as turn]
            [obb-rules.result :as result])
  (:use clojure.test))

(defn validate-deploy
  "Applies a bot function to a deployable game"
  [botfn]
  (let [game (game/random)
        actions (botfn game)
        result (turn/process-actions game :p1 actions)]
    (is (result/succeeded? result))))
