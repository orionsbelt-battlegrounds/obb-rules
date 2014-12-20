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

(defn- normal-movement-valid?
  "Given two adjacent coords, checks if the movement is valid"
  [direction [x1 y1] [x2 y2]]
  (or
    (= x1 x2)
    (= y1 y2)))

(defn- diagonal-movement-valid?
  "Given two adjacent coords, checks if the movement is valid"
  [direction from to]
  (not (normal-movement-valid? direction from to)))

(def ^:private validators
  {:all all-movement-valid?
   :normal normal-movement-valid?
   :diagonal diagonal-movement-valid?
   :front front-movement-valid?})

(defn valid?
  "Checks movement restrictions for a given element"
  [element from to]
  (let [unit (element/element-unit element)
        direction (element/element-direction element)
        movement-type (unit/unit-movement-type unit)
        validator (validators movement-type)]
    (assert validator (str "Can't resolve " movement-type " movement type"))
    (validator direction from to)))
