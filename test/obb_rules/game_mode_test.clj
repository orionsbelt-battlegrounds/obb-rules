(ns obb-rules.game-mode-test
  (:require [obb-rules.game :as game]
            [obb-rules.board :as board]
            [obb-rules.game-mode :as game-mode]
            [obb-rules.turn :as turn]
            [obb-rules.element :as element]
            [obb-rules.stash :as stash])
  (:use clojure.test))

(def p1-element (element/create-element "p1" :dummy 20 :south))
(def p2-element (element/create-element "p2" :dummy 20 :south))
(def running-game (-> (game/random)
                  (assoc :state "p1")
                  (board/place-element [1 1] p1-element)
                  (board/place-element [1 2] p2-element)
                  (game-mode/process)))

(deftest toogle-state-player-str
  (let [game (-> running-game
                 (assoc :state "p1")
                 (game-mode/process))]
    (is (= :p2 (get game :state)))))

(deftest toogle-state-player-keyword
  (let [game (-> running-game
                 (assoc :state :p1)
                 (game-mode/process))]
    (is (= :p2 (get game :state)))))

(deftest toogle-state-player-keyword-inverted
  (let [game (-> running-game
                 (assoc :state :p2)
                 (game-mode/process))]
    (is (= :p1 (get game :state)))))

(deftest dont-finalize-on-deploy
  (let [game-on-deploy (game/random)
        final-game (game-mode/process game-on-deploy)]
    (is (not (game-mode/final? game-on-deploy)))
    (is (= :deploy (game/state final-game)))))

(deftest dont-finalize-on-deploy-str
  (let [game-on-deploy (-> (game/random) (assoc :state "deploy"))
        final-game (game-mode/process game-on-deploy)]
    (is (not (game-mode/final? game-on-deploy)))
    (is (= "deploy" (game/state final-game)))))

