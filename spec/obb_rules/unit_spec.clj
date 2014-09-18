(ns obb-rules.env-spec
  (:require [obb-rules.unit :refer :all])
  (:require [speclj.core :refer :all]))

(describe "unit"

  (describe "get-unit"

    (it "provides rain"
      (should= "rain" ((get-unit "rain") :name)))
    ))

(run-specs)
