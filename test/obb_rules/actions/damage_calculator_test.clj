(ns obb-rules.actions.damage-calculator-test
  (:require [obb-rules.actions.damage-calculator :as calculator])
  (:use clojure.test
        midje.sweet
        obb-rules.board
        obb-rules.element
        obb-rules.result
        obb-rules.unit))

(def rain (get-unit-by-name "rain"))
(def crusader (get-unit-by-name "crusader"))
(def rain-element (create-element :p1 rain 10 :south))
(def crusader-element (create-element :p1 crusader 10 :south))

(deftest test-crusader-attack

  (testing "units destroyed"
    (let [destroyed (calculator/destroyed crusader-element rain-element)]
      (is (= 10 destroyed))))

  (testing "actual damage made"
    (let [damage (calculator/damage crusader-element rain-element)]
      (is (= 24000 damage)))))

(deftest test-rain-attack

  (testing "units destroyed"
    (let [destroyed (calculator/destroyed rain-element crusader-element)]
      (is (= 0 destroyed))))

  (testing "actual damage made"
    (let [damage (calculator/damage rain-element crusader-element)]
      (is (= 1200 damage)))))
