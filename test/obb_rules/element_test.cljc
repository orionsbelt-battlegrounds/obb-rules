(ns obb-rules.element-test
  (:require
    [obb-rules.element :as element]
    [obb-rules.unit :as unit]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(def unit (unit/get-unit-by-name "rain"))
(def player :p1)

(deftest element
  (testing "geters"
    (let [e (element/create-element player unit 20 :south)]
      (is (= player (element/element-player e)))
      (is (= unit (element/element-unit e)))
      (is (= :south (element/element-direction e)))
      (is (= 20 (element/element-quantity e)))))

  (testing "change quantity"
    (let [e (element/create-element player unit 20 :south)
          e2 (element/element-quantity e 100)]
      (is (= 100 (element/element-quantity e2)))))

  (testing "setting coordinate"
    (let [e (element/create-element player unit 20 :south)
          e2 (element/element-coordinate e [3 4])]
      (is (= [3 4] (element/element-coordinate e2)))))

  (testing "change direction"
    (let [e (element/create-element player unit 20 :south)
          e2 (element/element-direction e :east)]
      (is (= :east (element/element-direction e2)))))

  (testing "join-elements"
    (testing "can-join-elements? fails for different units"
      (let [e1 (element/create-element player unit 20 :south)
            e2 (element/create-element  player (unit/get-unit-by-name "crusader") 20 :south)]
        (is (= false (element/can-join-elements? e1 e2)))))

    (testing "can-join-elements? fails for different players"
      (let [e1 (element/create-element player unit 20 :south)
            e2 (element/create-element :other-player unit 20 :south)]
        (is (= false (element/can-join-elements? e1 e2)))))

    (testing "join simple elements"
      (let [e1 (element/create-element player unit 20 :south)
            e2 (element/create-element player unit 20 :south)
            joined (element/join-elements e1 e2)]
        (is (= true (element/can-join-elements? e1 e2)))
        (is (= 40 (element/element-quantity joined))))))

  (testing "create-element"
    (is (element/create-element player unit 10 :north))))

