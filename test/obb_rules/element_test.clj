(ns obb-rules.element-test
  (:use clojure.test obb-rules.element obb-rules.unit))

(def unit (get-unit-by-name "rain"))
(def player :p1)

(deftest element
  (testing "geters"
    (let [e (create-element player unit 20 :south)]
      (is (= player (element-player e)))
      (is (= unit (element-unit e)))
      (is (= :south (element-direction e)))
      (is (= 20 (element-quantity e)))))

  (testing "change quantity"
    (let [e (create-element player unit 20 :south)
          e2 (element-quantity e 100)]
      (is (= 100 (element-quantity e2)))))

  (testing "setting coordinate"
    (let [e (create-element player unit 20 :south)
          e2 (element-coordinate e [3 4])]
      (is (= [3 4] (element-coordinate e2)))))

  (testing "change direction"
    (let [e (create-element player unit 20 :south)
          e2 (element-direction e :east)]
      (is (= :east (element-direction e2)))))

  (testing "join-elements"
    (testing "can-join-elements? fails for different units"
      (let [e1 (create-element player unit 20 :south)
            e2 (create-element  player (get-unit-by-name "crusader") 20 :south)]
        (is (= false (can-join-elements? e1 e2)))))

    (testing "can-join-elements? fails for different players"
      (let [e1 (create-element player unit 20 :south)
            e2 (create-element :other-player unit 20 :south)]
        (is (= false (can-join-elements? e1 e2)))))

    (testing "join simple elements"
      (let [e1 (create-element player unit 20 :south)
            e2 (create-element player unit 20 :south)
            joined (join-elements e1 e2)]
        (is (= true (can-join-elements? e1 e2)))
        (is (= 40 (element-quantity joined))))))

  (testing "create-element"
    (is (create-element player unit 10 :north))))
