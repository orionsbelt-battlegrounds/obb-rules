(ns obb-rules.actions.damage-calculator-test
  (:require
    [obb-rules.actions.damage-calculator :as calculator]
    [obb-rules.board :as board]
    [obb-rules.element :as element]
    [obb-rules.result :as result]
    [obb-rules.unit :as unit]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(def board (board/create-board))
(def rain (unit/get-unit-by-name "rain"))
(def crusader (unit/get-unit-by-name "crusader"))
(def rain-element (element/create-element :p1 rain 10 :south [1 1]))
(def crusader-element (element/create-element :p1 crusader 10 :south [1 2]))

(deftest range-factor

  (defn- test-range
    [c1 c2 expected-factor]
    (let [board (board/place-element board c1 (element/create-element :p1 crusader 10 :south))
          board2 (board/place-element board c2 (element/create-element :p2 crusader 10 :south))
          e1 (board/get-element board2 c1)
          e2 (board/get-element board2 c2)
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
      (is (= 6 (int destroyed)))))

  (testing "actual damage made"
    (let [damage (calculator/damage board rain-element crusader-element)]
      (is (= 13200 damage)))))
