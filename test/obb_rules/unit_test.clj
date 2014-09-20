(ns obb-rules.unit-test
  (:use clojure.test obb-rules.unit))

(deftest unit
  (testing "get-units"
    (is (= 1 (count (obb-rules.unit/get-units))))))

(run-tests)
