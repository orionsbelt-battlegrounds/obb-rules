(ns obb-demo.views.units
  (:require [obb-rules.unit :as unit]))

(defn render
  [state]
  (let [units (unit/gather-units)]
    [:div
      [:h1 "units 2"]
      [:ul
        (for [unit units]
          [:li (unit/unit-name unit)])]]))
