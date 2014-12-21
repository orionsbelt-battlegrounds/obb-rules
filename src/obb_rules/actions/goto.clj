(ns obb-rules.actions.goto
  "Allows movement from a unit to non-adjacent coordinates.
  Translates itself to the best found path via :move actions."
  ^{:added "1.4" :author "Pedro Santos"}
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

(defn- purge
  "Removes the travelled coords from the given coordinates to handle"
  [possible travelled]
  (remove travelled possible))

(defn- sort-by-distance
  "Sorts the given collection by the distance to a target"
  [coords target]
  (sort-by (partial distance-to target) coords))

(defn- possible-coords
  "Groups the possible coords for the current scenario"
  [board from target travelled]
  (if-let [efrom (board/get-element board from)]
    (-> (move/find-possible-destinations board efrom)
        (sort-by-distance target)
        (purge travelled))
    []))

(defn- process-move
  "Processes a :move action for the given board"
  [board from best player]
  (let [move-action (move/build-move [from best])]
    (move-action board player)))

(defn- find-path
  "Tries to find a path between two coords"
  [board player from target cost travelled]
  (let [possible (possible-coords board from target travelled)
        best (first possible)]
    (if (not best)
      (result/action-failed "NoRouteToTarget")
      (let[result (process-move board from best player)
           new-board (result/result-board result)
           current-cost (+ cost (result/result-cost result))]
        (cond
          (< 6 current-cost)
            (result/action-failed "ActionPointsOverflow")
          (= best target)
            (result/action-success new-board current-cost)
          (result/failed? result)
            result
          :else
            (recur new-board player best target current-cost (conj travelled best)))))))

(defn- resolve-goto
  "Tries to find the best path between the given coordinates. Fails if can't
  find it, or the :move action would fail for this scenario."
  [from target quantity]
  (fn gotoer [board player]
    (if-let [result (find-path board player from target 0 #{})]
      result
      (result/action-failed "NoPathToTarget"))))

(defn build-goto
  "Builds a goto action on a board"
  [[from to quantity]]
  (if (board/adjacent? from to)
    (move/build-move [from to quantity])
    (resolve-goto from to quantity)))
