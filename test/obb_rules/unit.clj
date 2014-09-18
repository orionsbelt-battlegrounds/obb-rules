(ns obb-rules.unit
  (:use clojure.test obb-rules.unit))

(testing "unit"
  (testing "get-units"
    (is (= 1 (count (get-units))))))

(run-tests)
