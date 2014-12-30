(ns obb-rules.actions.direction
  (:require [obb-rules.simplifier :as simplify]))

(defn offset
  "Returns and adjacent offset of a direction"
  [dir]
  (cond
    (= (keyword dir) :south) [0 1]
    (= (keyword dir) :north) [0 -1]
    (= (keyword dir) :east) [1 0]
    (= (keyword dir) :west) [-1 0]))

(defn update
  "Moves a coord given a direction"
  [dir [x y]]
  (let [[ox oy] (offset dir)]
    [(+ x ox) (+ y oy)]))

(defn perpendicular
  "Gets the perpendicular coords for the given one"
  [coord direction]
  (if (or (simplify/name= direction :south) (simplify/name= direction :north))
    [(update :west coord) (update :east coord)]
    [(update :south coord) (update :north coord)]))
