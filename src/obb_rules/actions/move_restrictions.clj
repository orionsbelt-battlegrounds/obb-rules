(ns obb-rules.actions.move-restrictions
  (:require [obb-rules.element :as element]
            [obb-rules.unit :as unit]
            [obb-rules.actions.direction :as dir]))

(defn- all-movement-valid?
  "Given two adjacent coords, checks if the movement is valid"
  [_ _ _]
  true)

(defn- front-movement-valid?
  "Given two adjacent coords, checks if the movement is valid"
  [direction from to]
  (= (dir/update direction from) to))

(def ^:private validators
  {:all all-movement-valid?
   :front front-movement-valid?})

(defn valid?
  "Checks movement restrictions for a given element"
  [element from to]
  (let [unit (element/element-unit element)
        direction (element/element-direction element)
        movement-type (unit/unit-movement-type unit)
        validator (validators movement-type)]
    (validator direction from to)))
