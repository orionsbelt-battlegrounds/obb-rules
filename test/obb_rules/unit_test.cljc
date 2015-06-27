(ns obb-rules.unit-test
  (:require 
    [obb-rules.unit :as unit]
    [cljs.test :refer-macros [deftest testing is]]))

(deftest unit-smoke
  (testing "get-units"
    (is (= 20 (count (unit/get-units))))))

(comment
(defn- test-unit
  [name code]
  (let [unit (get-unit-by-name name)
        unit-by-code (get-unit-by-code code)]
    (is (= unit unit-by-code))
    (is (= name (unit-name unit)))
    (is (= code (unit-code unit)))
    (is (> (unit-attack unit) 0))
    (is (unit-movement-type unit))
    (is (> (unit-defense unit) 0))))

(defn- verify-unit
  [unit]
  (testing  (test-unit (:name unit) (:code unit))))

(deftest verify-units
  (doseq [unit (get-units)]
    (verify-unit unit)))

(defn- unit-present?
  "Checks if a unit is present"
  [uname coll]
  (some (fn [u] (= (unit-name u) (name uname))) coll))

(deftest units-by-category-test
  (testing "light units"
    (let [units (units-by-category :light)]
      (is units)
      (is (> (count units) 0))
      (is (unit-present? :rain units))
      (is (unit-present? :toxic units))
      (is (not (unit-present? :worm units)))
      (is (not (unit-present? :crusader units)))))

  (testing "medium units"
    (let [units (units-by-category :medium)]
      (is units)
      (is (> (count units) 0))
      (is (unit-present? :worm units))
      (is (not (unit-present? :rain units)))
      (is (not (unit-present? :crusader units)))))

  (testing "heavy units"
    (let [units (units-by-category :heavy)]
      (is units)
      (is (> (count units) 0))
      (is (unit-present? :crusader units))
      (is (not (unit-present? :rain units)))
      (is (not (unit-present? :worm units))))))

(verify-units)
)
