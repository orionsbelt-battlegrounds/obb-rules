(ns obb-rules.actions.bonus-test
  (:require [obb-rules.actions.damage-calculator :as calculator]
            [obb-rules.board :as board])
  (:use clojure.test obb-rules.unit obb-rules.element obb-rules.board))

(def rain (get-unit-by-name "rain"))
(def anubis (get-unit-by-name "anubis"))
(def rain-element (create-element :p1 rain 1 :south [1 1]))
(def eagle (get-unit-by-name "eagle"))
(def eagle-element (create-element :p2 eagle 10 :south [1 2]))
(def crusader (get-unit-by-name "crusader"))
(def crusader-element (create-element :p2 crusader 10 :south [1 2]))

(deftest rain-no-damage-on-medium
  (let [board (-> (create-board)
                  (place-element [1 1] rain-element)
                  (place-element [1 2] eagle-element))]
    (is (= 120 (calculator/damage board rain-element eagle-element)))))

(deftest rain-damage-on-heavy
  (let [board (-> (create-board)
                  (place-element [1 1] rain-element)
                  (place-element [1 2] crusader-element))]
    (is (= 1320 (calculator/damage board rain-element crusader-element)))))

(deftest anubis-base-defense-on-medium
  (let [board (-> (create-board)
                  (place-element [1 2] (create-element :p1 anubis 1 :south [1 2]))
                  (place-element [1 1] (create-element :p2 eagle 1 :south [1 1])))]
    (is (= 500 (calculator/defense board (board/get-element board [1 1])
                                         (board/get-element board [1 2]))))))

(deftest anubis-base-defense-on-heavy
  (let [board (-> (create-board)
                  (place-element [1 2] (create-element :p1 anubis 1 :south [1 2]))
                  (place-element [1 1] (create-element :p2 crusader 1 :south [1 1])))]
    (is (= 2100 (calculator/defense board (board/get-element board [1 1])
                                          (board/get-element board [1 2]))))))
