(ns obb-rules.unit-test
  (:use clojure.test obb-rules.unit))

(deftest unit
  (testing "get-units"
    (is (= 2 (count (get-units))))))

(defn- test-unit
  [name code]
  (let [unit (get-unit-by-name name)
        unit-by-code (get-unit-by-code code)]
    (is (= unit unit-by-code))
    (is (= name (unit-name unit)))
    (is (= code (unit-code unit)))
    (is (> (unit-attack unit) 0))
    (is (> (unit-defense unit) 0))))

(defn- verify-unit
  [unit]
  (testing  (test-unit (unit :name) (unit :code))))

(deftest verify-units
  (doseq [unit (get-units)]
    (verify-unit unit)))

(verify-units)
(run-tests)
