(ns obb-rules.ai.acts-as-bot-test
  (:require [obb-rules.game :as game]
            [obb-rules.turn :as turn]
            [obb-rules.board :as board]
            [obb-rules.element :as element]
            [obb-rules.unit :as unit]
            [obb-rules.result :as result]
            [clojure.test.check.generators :as gen]
   #?(:cljs [clojure.test.check :as tc])
    #?(:clj [clojure.test.check.properties :as prop]
       :cljs [clojure.test.check.properties :as prop :include-macros true])
    #?(:clj [clojure.test.check.clojure-test :refer [defspec]]
       :cljs [clojure.test.check.clojure-test :refer-macros [defspec]])
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))


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
                  (board/place-element [2 5] (element/create-element :p1 rain 1 :south [2 5]))
                  (board/place-element [2 6] (element/create-element :p2 rain 1 :north [2 6])))
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
                  (board/place-element [2 5] (element/create-element :p1 rain 10 :south [2 5]))
                  (board/place-element [2 6] (element/create-element :p2 rain 10 :north [2 6]))
                  (board/place-element [3 5] (element/create-element :p1 rain 10 :south [3 5]))
                  (board/place-element [3 6] (element/create-element :p2 rain 10 :north [3 6])))
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
                  (board/place-element [2 5] (element/create-element :p1 rain 1 :south [2 5]))
                  (board/place-element [3 5] (element/create-element :p2 rain 1 :north [3 5])))
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
                  (board/place-element [2 5] (element/create-element :p1 rain 1 :south [2 5]))
                  (board/place-element [2 6] (element/create-element :p2 rain 1 :south [2 6]))
                  (board/place-element [3 5] (element/create-element :p2 kamikaze 1 :north [3 5])))
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
        actions2 (botfn game :p1)
        result3 (turn/process-actions game :p1 actions2)]
    (is (result/succeeded? result))
    (is (result/succeeded? result2))
    (is (result/succeeded? result3))))

(defn move-and-attack
  "Moves and attacks"
  [botfn]
  (let [board (-> (board/create-board)
                  (game/state :p1)
                  (board/place-element [2 5] (element/create-element :p1 rain 1 :south [2 5]))
                  (board/place-element [5 5] (element/create-element :p2 kamikaze 1 :north [5 5])))
        actions (botfn board :p1)
        result (turn/process-actions board :p1 actions)
        final-game (result/result-board result)]
    (is (result/succeeded? result))
    (is (not (board/get-element final-game [5 5])))))

(defn seek-and-destroy
  "The seek part"
  [botfn]
  (let [board (-> (board/create-board)
                  (game/state :p1)
                  (board/place-element [2 5] (element/create-element :p1 rain 1 :south [2 5]))
                  (board/place-element [5 5] (element/create-element :p1 kamikaze 1 :north [5 5])))
        actions (botfn board :p1)
        result (turn/process-actions board :p1 actions)
        final-game (result/result-board result)]
    (is (result/succeeded? result))))
