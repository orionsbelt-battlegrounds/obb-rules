(ns obb-rules.unit-test
  (:use clojure.test obb-rules.unit))

(deftest unit
  (testing "get-units"
    (is (= 1 (count (get-units))))))

(defn- test-unit
  [name code]
  (is (= name ((get-unit-by-name name) :name)))
  (is (= code ((get-unit-by-name name) :code))))

(defn- verify-unit
  [unit]
  (deftest unit-tester (test-unit (unit :name) (unit :code))))

(defn- verify-units []
  (doseq [unit (get-units)]
    (verify-unit unit)))

(verify-units)
(run-tests)
