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

(defn other
  "Given a direction, returns all the other possible directions"
  [dir]
  (cond (simplify/name= dir :north) [:south :east :west]
        (simplify/name= dir :south) [:north :east :west]
        (simplify/name= dir :west) [:north :east :south]
        (simplify/name= dir :east) [:north :south :west]))

(defn facing?
  "True if the two given directions are facing each other"
  [dir1 dir2]
  (cond
    (simplify/name= dir1 :north) (simplify/name= dir2 :south)
    (simplify/name= dir1 :south) (simplify/name= dir2 :north)
    (simplify/name= dir1 :east) (simplify/name= dir2 :west)
    (simplify/name= dir1 :west) (simplify/name= dir2 :east)))

(defn clockwise
  "Gets the direction achieved rotating the given direction clockwise"
  [dir]
  (cond
    (simplify/name= dir :north) :east
    (simplify/name= dir :south) :west
    (simplify/name= dir :west) :north
    (simplify/name= dir :east) :south))
