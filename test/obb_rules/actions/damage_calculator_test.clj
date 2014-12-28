(ns obb-rules.actions.damage-calculator-test
  (:require [obb-rules.actions.damage-calculator :as calculator])
  (:use clojure.test
        obb-rules.board
        obb-rules.element
        obb-rules.result
        obb-rules.unit))

(def board (create-board))
(def rain (get-unit-by-name "rain"))
(def crusader (get-unit-by-name "crusader"))
(def rain-element (create-element :p1 rain 10 :south [1 1]))
(def crusader-element (create-element :p1 crusader 10 :south [1 2]))

(deftest range-factor

  (defn- test-range
    [c1 c2 expected-factor]
    (let [board (place-element (create-board) c1 (create-element :p1 crusader 10 :south))
          board2 (place-element board c2 (create-element :p2 crusader 10 :south))
          e1 (get-element board2 c1)
          e2 (get-element board2 c2)
          damage (calculator/damage board e1 e2)
          factor (calculator/distance-factor e1 e2)]
      (is (> damage 0))
      (is (= factor expected-factor))
      damage))

  (testing "range attenuation"
    (is (= 24000 (test-range [1 1] [1 2] 1)))
    (is (= 24000 (test-range [1 1] [1 3] 1)))
    (is (= 24000 (test-range [1 1] [1 4] 1 )))
    (is (= 18000 (test-range [1 1] [1 5] 0.75)))
    (is (= 12000 (test-range [1 1] [1 6] 0.50)))
    (is (= 6000  (test-range [1 1] [1 7] 0.25)))))

(deftest test-crusader-attack

  (testing "units destroyed"
    (let [destroyed (calculator/destroyed board crusader-element rain-element)]
      (is (= 10 destroyed))))

  (testing "actual damage made"
    (let [damage (calculator/damage board crusader-element rain-element)]
      (is (= 24000 damage)))))

(deftest test-rain-attack

  (testing "units destroyed"
    (let [destroyed (calculator/destroyed board rain-element crusader-element)]
      (is (= 0 (int destroyed)))))

  (testing "actual damage made"
    (let [damage (calculator/damage board rain-element crusader-element)]
      (is (= 1200 damage)))))
