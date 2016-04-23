(ns obb-rules.game-progress-test
  (:require [obb-rules.game-progress :as game-progress]
            [obb-rules.game :as game]
            [obb-rules.element :as element]
            [obb-rules.unit :as unit]
            [obb-rules.board :as board]
            #?(:clj [clojure.test :refer [deftest testing is]]
               :cljs [cljs.test :refer-macros [deftest testing is]])))

(def rain (unit/get-unit-by-name "rain"))

(def p1-element (element/create-element "p1" rain 20 :south))

(def p2-element (element/create-element "p2" rain 20 :south))

(def running-game (-> (game-progress/new-random-game {:mode :annihilation})
                      (assoc :state "p1")
                      (board/place-element [1 1] p1-element)
                      (board/place-element [1 2] p2-element)
                      (game-progress/next-stage)))

(deftest game-stages
  (testing "switch current player using a string"
    (let [game (-> running-game
                   (assoc :state "p1")
                   (game-progress/next-stage))]
      (is (= :p2 (get game :state)))))

  (testing "switch current player using a keyword"
    (let [game (-> running-game
                   (assoc :state :p1)
                   (game-progress/next-stage))]
      (is (= :p2 (get game :state)))))

  (testing "game is not finished while in deploy state"
    (let [game-on-deploy (game-progress/new-random-game {:mode :annihilation})
          final-game (game-progress/next-stage game-on-deploy)]
      (is (not (game-progress/end-game? game-on-deploy)))
      (is (= :deploy (game/state final-game)))))

  (testing "game is not finished even if it is in deploy state as a string"
    (let [game-on-deploy (-> (game-progress/new-random-game {:mode :annihilation})
                             (assoc :state "deploy"))
          final-game (game-progress/next-stage game-on-deploy)]
      (is (not (game-progress/end-game? game-on-deploy)))
      (is (= "deploy" (game/state final-game))))))



