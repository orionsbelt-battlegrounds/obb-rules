(ns obb-rules.actions.move-restrictions
  (:require [obb-rules.element :as element]
            [obb-rules.unit :as unit]
            [obb-rules.actions.direction :as dir]))

(defn- front-movement-valid?
  "Given two adjacent coords, checks if the movement is valid"
  [direction from to]
  (= (dir/update direction from) to))

(defn- front-movement-generator
  "Given a coordinate, returns all possible adjacent squares"
  [direction from]
  [(dir/update direction from)])

(defn- normal-movement-valid?
  "Given two adjacent coords, checks if the movement is valid"
  [direction [x1 y1] [x2 y2]]
  (or
    (= x1 x2)
    (= y1 y2)))

(defn- normal-movement-generator
  "Given a coordinate, returns all possible adjacent squares"
  [_ [x y]]
  [[x (- y 1)]
   [x (+ y 1)]
   [(+ x 1) y]
   [(- x 1) y]])

(defn- diagonal-movement-valid?
  "Given two adjacent coords, checks if the movement is valid"
  [direction from to]
  (not (normal-movement-valid? direction from to)))

(defn- diagonal-movement-generator
  "Given a coordinate, returns all possible adjacent squares"
  [_ [x y]]
  [[(- x 1) (- y 1)]
   [(- x 1) (+ y 1)]
   [(+ x 1) (- y 1)]
   [(+ x 1) (+ y 1)]])

(defn- all-movement-generator
  "Given a coordinate, returns all possible adjacent squares"
  [dir coord]
  (into
    (diagonal-movement-generator dir coord)
    (normal-movement-generator dir coord)))

(defn- all-movement-valid?
  "Given two adjacent coords, checks if the movement is valid"
  [_ _ _]
  true)

(def ^:private validators
  {:all all-movement-valid?
   :normal normal-movement-valid?
   :diagonal diagonal-movement-valid?
   :front front-movement-valid?})

(def ^:private generators
  {:all all-movement-generator
   :normal normal-movement-generator
   :diagonal diagonal-movement-generator
   :front front-movement-generator})

(defn valid?
  "Checks movement restrictions for a given element"
  [element from to]
  (let [unit (element/element-unit element)
        direction (element/element-direction element)
        movement-type (unit/unit-movement-type unit)
        validator (validators movement-type)]
    (assert validator (str "Can't resolve " movement-type " movement type"))
    (validator direction from to)))

(defn possible-destinations
  "Returns a collection with the possible destinations based on the element's
  movement-type and direction"
  [element]
  (let [unit (element/element-unit element)
        direction (element/element-direction element)
        from (element/element-coordinate element)
        movement-type (unit/unit-movement-type unit)
        generator (generators movement-type)]
    (assert generator (str "Can't resolve " movement-type " movement type"))
    (generator direction from)))
