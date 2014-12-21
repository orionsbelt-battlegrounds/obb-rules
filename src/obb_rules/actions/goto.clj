(ns obb-rules.actions.goto
  "Allows movement from a unit to non-adjacent coordinates.
  Translates itself to the best found path via :move actions."
  (:require [clojure.math.numeric-tower :as math]
            [obb-rules.actions.move :as move]
            [obb-rules.element :as element]
            [obb-rules.result :as result]
            [obb-rules.board :as board]))

(defn- distance-to
  "Calculates the straight distance between two coordinates"
  [[xa ya] [xb yb]]
  (math/sqrt
    (+
      (math/expt (- xa xb) 2)
      (math/expt (- ya yb) 2))))

(defn- sort-by-distance
  "Sorts the given collection by the distance to a target"
  [coords target]
  (sort-by (partial distance-to target) coords))

(defn- find-path
  "Tries to find a path between two coords"
  [board player from target cost]
  (let [efrom (board/get-element board from)
        possible-coords (-> (move/find-possible-destinations board efrom)
                            (sort-by-distance target))
        best (first possible-coords)
        move-action (move/build-move [(element/element-coordinate efrom) best])
        result (move-action board player)
        new-board (result/result-board result)
        current-cost (+ cost (result/result-cost result))]
    (cond
      (= best target)
        (result/action-success new-board current-cost)
      :else
        (recur new-board player best target current-cost))))

(defn- resolve-goto
  "Tries to find the best path between the given coordinates. Fails if can't
  find it, or the :move action would fail for this scenario."
  [from target quantity]
  (fn gotoer [board player]
    (if-let [result (find-path board player from target 0)]
      result
      (result/action-failed "NoPathToTarget"))))

(defn build-goto
  "Builds a goto action on a board"
  [[from to quantity]]
  (if (board/adjacent? from to)
    (move/build-move [from to quantity])
    (resolve-goto from to quantity)))
