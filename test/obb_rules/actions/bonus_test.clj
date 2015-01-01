(ns obb-rules.actions.bonus-test
  (:require [obb-rules.actions.damage-calculator :as calculator])
  (:use clojure.test obb-rules.unit obb-rules.element obb-rules.board))

(def rain (get-unit-by-name "rain"))
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
