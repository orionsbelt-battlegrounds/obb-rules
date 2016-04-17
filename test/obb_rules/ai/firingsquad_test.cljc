(ns obb-rules.ai.firingsquad-test
  (:require [obb-rules.game :as game]
            [obb-rules.game-progress :as game-progress]
            [obb-rules.turn :as turn]
            [obb-rules.stash :as stash]
            [obb-rules.unit :as unit]
            [obb-rules.element :as element]
            [obb-rules.simplifier :as simplifier]
            [obb-rules.board :as board]
            [obb-rules.result :as result]
            [obb-rules.ai.firingsquad :as firingsquad]
            [obb-rules.generators :as obb-gen]
            [obb-rules.ai.acts-as-bot-test :as acts-as-bot]
            [clojure.test.check.generators :as gen]
   #?(:cljs [clojure.test.check :as tc])
    #?(:clj [clojure.test.check.properties :as prop]
       :cljs [clojure.test.check.properties :as prop :include-macros true])
    #?(:clj [clojure.test.check.clojure-test :refer [defspec]]
       :cljs [clojure.test.check.clojure-test :refer-macros [defspec]])
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(deftest deploy-choice
  (acts-as-bot/validate-deploy firingsquad/actions))

(deftest direct-attack
  (acts-as-bot/direct-attack firingsquad/actions))

(deftest direct-attack-double
  (acts-as-bot/direct-attack-double firingsquad/actions))

(deftest rotate-attack
  (acts-as-bot/rotate-attack firingsquad/actions))

(deftest prefer-rotate-attack
  (acts-as-bot/prefer-rotate-attack firingsquad/actions))

(deftest first-blood
  (acts-as-bot/first-blood firingsquad/actions (stash/random)))

(deftest move-and-attack
  (acts-as-bot/move-and-attack firingsquad/actions))

(deftest seek-and-destroy
  (acts-as-bot/seek-and-destroy firingsquad/actions))

(deftest prefer-the-star
  (acts-as-bot/prefer-the-star firingsquad/actions))

(defspec first-blood-check
  (* obb-gen/scenarions-to-test 1)
  (prop/for-all [raw-stash (obb-gen/stash)]
    (let [stash (stash/create-from-hash (apply hash-map (flatten raw-stash)))]
      (acts-as-bot/first-blood firingsquad/actions stash))))

(def crusader (unit/get-unit-by-name "crusader"))
(def quantity 100)

(deftest complete-game
  (let [board (-> (game-progress/new-game {} {:mode :annihilation})
                  (game/state :p1)
                  (board/place-element [1 7] (element/create-element :p1 crusader quantity :north [1 7]))
                  (board/place-element [2 7] (element/create-element :p1 crusader quantity :north [2 7]))
                  (board/place-element [3 7] (element/create-element :p1 crusader quantity :north [3 7]))

                  (board/place-element [1 2] (element/create-element :p2 crusader quantity :south [1 2]))
                  (board/place-element [2 2] (element/create-element :p2 crusader quantity :south [2 2]))
                  (board/place-element [3 2] (element/create-element :p2 crusader quantity :south [3 2])))

        actions (firingsquad/actions board :p1)
        result (turn/process-actions board :p1 actions)
        game-p1 (result/result-board result)

        actions2 (firingsquad/actions game-p1 :p2)
        result2 (turn/process-actions game-p1 :p2 actions2)
        final-game (result/result-board result2)]

    (is (result/succeeded? result))
    (is (result/succeeded? result2))))

(deftest firingsquad-vs-firingsquad
  (println "Running" obb-gen/scenarions-to-test "firingsquad vs firingsquad")
  (dotimes [x obb-gen/scenarions-to-test]
    (time
     (let [game (-> (game-progress/new-random-game {:mode :annihilation})
                     (turn/process-actions :p1 [[:auto-deploy :firingsquad]])
                     (result/result-board)
                     (turn/process-actions :p2 [[:auto-deploy :firingsquad]])
                     (result/result-board))]
        (loop [current-game game
               counter 1]
          (let [player (game/state current-game)
                actions (firingsquad/actions current-game player)
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

(defn- crusader-vs-crusader
  []
  (-> (game-progress/new-game {} {:mode :annihilation})
      (game/state :p1)
      (board/place-element [1 7] (element/create-element :p1 crusader quantity :north [1 7]))
      (board/place-element [2 7] (element/create-element :p1 crusader quantity :north [2 7]))
      (board/place-element [3 7] (element/create-element :p1 crusader quantity :north [3 7]))
      (board/place-element [4 7] (element/create-element :p1 crusader quantity :north [4 7]))
      (board/place-element [5 7] (element/create-element :p1 crusader quantity :north [5 7]))
      (board/place-element [6 7] (element/create-element :p1 crusader quantity :north [6 7]))
      (board/place-element [7 7] (element/create-element :p1 crusader quantity :north [7 7]))
      (board/place-element [8 7] (element/create-element :p1 crusader quantity :north [8 7]))

      (board/place-element [1 2] (element/create-element :p2 crusader quantity :south [1 2]))
      (board/place-element [2 2] (element/create-element :p2 crusader quantity :south [2 2]))
      (board/place-element [3 2] (element/create-element :p2 crusader quantity :south [3 2]))
      (board/place-element [4 2] (element/create-element :p2 crusader quantity :south [4 2]))
      (board/place-element [5 2] (element/create-element :p2 crusader quantity :south [5 2]))
      (board/place-element [6 2] (element/create-element :p2 crusader quantity :south [6 2]))
      (board/place-element [7 2] (element/create-element :p2 crusader quantity :south [7 2]))
      (board/place-element [8 2] (element/create-element :p2 crusader quantity :south [8 2]))))

(deftest chooses-firing-round
  (let [board (crusader-vs-crusader)
        actions (firingsquad/actions board :p1)
        result (turn/process-actions board :p1 actions)
        game-p1 (result/result-board result)]
    (is (= 6 (count actions))
    (is (result/succeeded? result)))))

