(ns obb-rules.ai.acts-as-bot-test
  (:require [obb-rules.game :as game]
            [obb-rules.turn :as turn]
            [obb-rules.board :as board]
            [obb-rules.unit :as unit]
            [obb-rules.result :as result])
  (:use clojure.test obb-rules.board obb-rules.element))

(def rain (unit/get-unit-by-name "rain"))
(def kamikaze (unit/get-unit-by-name "kamikaze"))
(def krill (unit/get-unit-by-name "krill"))
(def vect (unit/get-unit-by-name "vector"))

(defn validate-deploy
  "Applies a bot function to a deployable game"
  [botfn]
  (let [game (game/random)
        actions (botfn game :p1)
        result (turn/process-actions game :p1 actions)]
    (is (result/succeeded? result))))

(defn direct-attack
  "Simple direct attack"
  [botfn]
  (let [board (-> (board/create-board)
                  (game/state :p1)
                  (place-element [2 5] (create-element :p1 rain 1 :south [2 5]))
                  (place-element [2 6] (create-element :p2 rain 1 :north [2 6])))
        actions (botfn board :p1)
        result (turn/process-actions board :p1 actions)
        final-game (result/result-board result)]
    (is (result/succeeded? result))
    (is (board/empty-board? final-game :p2))))

(defn direct-attack-double
  "Must select two actions"
  [botfn]
  (let [board (-> (board/create-board)
                  (game/state :p1)
                  (place-element [2 5] (create-element :p1 rain 1 :south [2 5]))
                  (place-element [2 6] (create-element :p2 rain 1 :north [2 6]))
                  (place-element [3 5] (create-element :p1 rain 5 :south [3 5]))
                  (place-element [3 6] (create-element :p2 rain 5 :north [3 6])))
        actions (botfn board :p1)
        result (turn/process-actions board :p1 actions)
        final-game (result/result-board result)]
    (is (result/succeeded? result))
    (is (board/empty-board? final-game :p2))))

(defn rotate-attack
  "Rotates to attack"
  [botfn]
  (let [board (-> (board/create-board)
                  (game/state :p1)
                  (place-element [2 5] (create-element :p1 rain 1 :south [2 5]))
                  (place-element [3 5] (create-element :p2 rain 1 :north [3 5])))
        actions (botfn board :p1)
        result (turn/process-actions board :p1 actions)
        final-game (result/result-board result)]
    (is (result/succeeded? result))
    (is (board/empty-board? final-game :p2))))

(defn prefer-rotate-attack
  "Scenario where preferes rotates to attack"
  [botfn]
  (let [board (-> (board/create-board)
                  (game/state :p1)
                  (place-element [2 5] (create-element :p1 rain 1 :south [2 5]))
                  (place-element [2 6] (create-element :p2 rain 1 :south [2 6]))
                  (place-element [3 5] (create-element :p2 kamikaze 1 :north [3 5])))
        actions (botfn board :p1)
        result (turn/process-actions board :p1 actions)
        final-game (result/result-board result)]
    (is (result/succeeded? result))
    (is (board/get-element final-game [2 6]))
    (is (not (board/get-element final-game [3 5])))))

(defn first-blood
  "Deploy and attack"
  [botfn stash]
  (let [board (game/create stash)
        actions (botfn board :p1)
        result (turn/process-actions board :p1 actions)
        result2 (turn/process-actions (result/result-board result) :p2 actions)
        game (game/state (result/result-board result2) :p1)
        actions2 (botfn game :p1)]
    (is (result/succeeded? result))))
