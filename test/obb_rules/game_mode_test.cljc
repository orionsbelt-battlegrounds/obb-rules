(ns obb-rules.game-mode-test
  (:require
    [obb-rules.game :as game]
    [obb-rules.board :as board]
    [obb-rules.game-mode :as game-mode]
    [obb-rules.element :as element]
    [obb-rules.unit :as unit]
    [obb-rules.stash :as stash]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(def rain (unit/get-unit-by-name "rain"))
(def p1-element (element/create-element "p1" rain 20 :south))
(def p2-element (element/create-element "p2" rain 20 :south))
(def running-game (-> (game/random)
                      (assoc :state "p1")
                      (board/place-element [1 1] p1-element)
                      (board/place-element [1 2] p2-element)
                      (game-mode/process)))

(deftest game-processing
  (testing "switch current player using a string"
    (let [game (-> running-game
                   (assoc :state "p1")
                   (game-mode/process))]
      (is (= :p2 (get game :state)))))

  (testing "switch current player using a keyword"
    (let [game (-> running-game
                   (assoc :state :p1)
                   (game-mode/process))]
      (is (= :p2 (get game :state)))))

  (testing "game is not finished while in deploy state"
    (let [game-on-deploy (game/random)
          final-game (game-mode/process game-on-deploy)]
      (is (not (game-mode/final? game-on-deploy)))
      (is (= :deploy (game/state final-game)))))

  (testing "game is not finished even if it is in deploy state as a string"
    (let [game-on-deploy (-> (game/random) (assoc :state "deploy"))
          final-game (game-mode/process game-on-deploy)]
      (is (not (game-mode/final? game-on-deploy)))
      (is (= "deploy" (game/state final-game))))))
