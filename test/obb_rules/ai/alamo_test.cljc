(ns obb-rules.ai.alamo-test
  (:require [obb-rules.game :as game]
            [obb-rules.turn :as turn]
            [obb-rules.stash :as stash]
            [obb-rules.unit :as unit]
            [obb-rules.element :as element]
            [obb-rules.simplifier :as simplifier]
            [obb-rules.board :as board]
            [obb-rules.result :as result]
            [obb-rules.ai.alamo :as alamo]
            [obb-rules.generators :as obb-gen]
            [obb-rules.ai.acts-as-bot-test :as acts-as-bot]
    #?(:cljs [cljs.test.check :as tc])
    #?(:clj [clojure.test.check.generators :as gen]
       :cljs [cljs.test.check.generators :as gen])
    #?(:clj [clojure.test.check.properties :as prop]
       :cljs [cljs.test.check.properties :as prop :include-macros true])
    #?(:clj [clojure.test.check.clojure-test :refer [defspec]]
       :cljs [cljs.test.check.cljs-test :refer-macros [defspec]])
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(deftest deploy-choice
  (acts-as-bot/validate-deploy alamo/actions))

(deftest direct-attack
  (acts-as-bot/direct-attack alamo/actions))

(deftest direct-attack-double
  (acts-as-bot/direct-attack-double alamo/actions))

(deftest rotate-attack
  (acts-as-bot/rotate-attack alamo/actions))

(deftest prefer-rotate-attack
  (acts-as-bot/prefer-rotate-attack alamo/actions))

(deftest first-blood
  (acts-as-bot/first-blood alamo/actions (stash/random)))

(deftest move-and-attack
  (acts-as-bot/move-and-attack alamo/actions))

(deftest seek-and-destroy
  (acts-as-bot/seek-and-destroy alamo/actions))

(def crusader (unit/get-unit-by-name "crusader"))
(def crusader-element-p2 (element/create-element :p2 crusader 25 :south))
(def doomer (unit/get-unit-by-name "doomer"))
(def doomer-element-p2 (element/create-element :p2 doomer 25 :south))
(def kamikaze (unit/get-unit-by-name "kamikaze"))
(def kamikaze-element-p1 (element/create-element :p1 kamikaze 100 :north))

(deftest chooses-the-most-defensive-option
  (let [board (-> (board/create-board)
                  (game/state :p1)
                  (board/place-element [2 2] crusader-element-p2)
                  (board/place-element [2 3] doomer-element-p2)
                  (board/place-element [7 6] (element/element-quantity doomer-element-p2 2))
                  (board/place-element [7 7] kamikaze-element-p1))
        actions (alamo/actions board :p1)
        result (turn/process-actions board :p1 actions)
        game (result/result-board result)]
    (is (result/succeeded? result))
    (is (board/get-element game [2 3]))))

(deftest alamo-vs-alamo
  (println "Running" obb-gen/scenarions-to-test "alamo vs alamo")
  (dotimes [x obb-gen/scenarions-to-test]
    (time
      (let [game (-> (game/random)
                     (turn/process-actions :p1 [[:auto-deploy :firingsquad]])
                     (result/result-board)
                     (turn/process-actions :p2 [[:auto-deploy :firingsquad]])
                     (result/result-board))]
        (loop [current-game game
               counter 1]
          (let [player (game/state current-game)
                actions (alamo/actions current-game player)
                result (turn/process-actions current-game player actions)
                next-game (:board result)]
            #_(println counter)
            (is (result/succeeded? result))
            (if (and (result/succeeded? result)
                     (< counter 200)
                     (not= :final (game/state next-game)))
              (recur (dissoc next-game :action-results) (+ 1 counter))
              (if (result/succeeded? result)
                (println "** Game" x ":" counter "turns")
                (do
                  (println "--" player)
                  (println actions)
                  (println (simplifier/clean-result result)))))))))))
