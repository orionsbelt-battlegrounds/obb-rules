(ns obb-rules.actions.direction)

(defn offset
  "Returns and adjacent offset of a direction"
  [dir]
  (cond
    (= dir :south) [0 1]
    (= dir :north) [0 -1]
    (= dir :east) [1 0]
    (= dir :west) [-1 0]
    :else [0 0]))

(defn update
  "Moves a coord given a direction"
  [dir [x y]]
  (let [[ox oy] (offset dir)]
    [(+ x ox) (+ y oy)]))

