(ns obb-rules.env-spec
  (:require [obb-rules.unit :refer :all])
  (:require [speclj.core :refer :all]))

(describe "unit"

  (describe "get-units"
    (it "should have the correct units"
      (should= 1 (count (get-units)))))

  (describe "get-unit-by-code"
    (it "provides rain"
      (should= "rain" ((get-unit-by-code "r") :name))))

  (describe "get-unit-by-name"
    (it "provides rain"
      (should= "rain" ((get-unit-by-name "rain") :name)))))

(run-specs)
