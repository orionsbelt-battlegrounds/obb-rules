(ns obb-rules.translator-test
  (:require [obb-rules.translator :as translator]
            [obb-rules.element :as element])
  (:use clojure.test))

(def unit :dummy)

(deftest translate-coordinate-test
  (testing ":p1"
    (is (= (translator/coordinate :p1 [8 8]) [8 8]))
    (is (= (translator/coordinate :p1 [2 3]) [2 3]))
    (is (= (translator/coordinate :p1 [1 1]) [1 1])))
  (testing ":p2"
    (is (= (translator/coordinate :p2 [2 3]) [7 6]))
    (is (= (translator/coordinate :p2 [8 8]) [1 1]))
    (is (= (translator/coordinate :p2 [1 8]) [8 1]))
    (is (= (translator/coordinate :p2 [8 1]) [1 8]))
    (is (= (translator/coordinate :p2 [1 1]) [8 8]))))

(deftest translate-direction-test
  (testing ":p1"
    (is (= :north (translator/direction :p1 :north)))
    (is (= :south (translator/direction :p1 :south)))
    (is (= :east (translator/direction :p1 :east)))
    (is (= :west (translator/direction :p1 :west))))
  (testing ":p2"
    (is (= :west (translator/direction :p2 "east")))
    (is (= :west (translator/direction :p2 :east)))
    (is (= :east (translator/direction :p2 :west)))
    (is (= :south (translator/direction :p2 :north)))
    (is (= :north (translator/direction :p2 :south)))))

(deftest translate-element-test
  (testing ":p1"
    (let [element (element/create-element :p1 unit 1 :north [8 8])
          translated (translator/element :p1 element)]
      (is (= element translated))))
  (testing ":p2")
    (let [element (element/create-element :p1 unit 1 :north [8 8])
          expected (element/create-element :p1 unit 1 :south [1 1])
          translated (translator/element :p2 element)]
      (is (= translated expected))
      (is (not= element translated))))
