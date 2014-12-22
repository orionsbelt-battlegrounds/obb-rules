(ns obb-rules.actions.goto
  "Allows movement from a unit to non-adjacent coordinates.
  Translates itself to the best found path via :move actions."
  ^{:added "1.4" :author "Pedro Santos"}
  (:require [clojure.math.numeric-tower :as math]
            [obb-rules.actions.move :as move]
            [obb-rules.element :as element]
            [obb-rules.laws :as laws]
            [obb-rules.result :as result]
            [obb-rules.board :as board]))

(defn- distance-to
  "Calculates the distance between two coordinates"
  [[xa ya] [xb yb]]
  (math/sqrt
    (+
      (math/expt (- xa xb) 2)
      (math/expt (- ya yb) 2))))

(defn- distance-factor
  "Gives proper weight to the distance between coordinates. It calculates the
  geometric distance to the target. However, if the distance of the current
  coordinate to evaluate is bigger than the distance of the source coordinate,
  it will make the diagonals more valuable. Meaning, going one square behind
  will always be the costest move to make."
  [source target current]
  (let [source-distance (distance-to source target)
        current-distance (distance-to current target)]
    (if (> source-distance current-distance)
      current-distance
      (let [[xa ya] target
            [xb yb] current
            dx (math/abs (- xa xb))
            dy (math/abs (- ya yb))]
        (if (or (= 0 dx) (= 0 dy))
          (+ current-distance 1)
          current-distance)))))

(defn- purge
  "Removes the travelled coords from the given coordinates to handle"
  [possible travelled]
  (remove travelled possible))

(defn- sort-by-distance
  "Sorts the given collection by the distance to a target"
  [coords from target]
  (sort-by (partial distance-factor from target) coords))

(defn- possible-coords
  "Groups the possible coords for the current scenario"
  [board from target travelled]
  (if-let [efrom (board/get-element board from)]
    (-> (move/find-possible-destinations board efrom)
        (sort-by-distance from target)
        (purge travelled))
    []))

(defn- process-move
  "Processes a :move action for the given board"
  [board from best player]
  (let [move-action (move/build-move [from best])]
    (move-action board player)))

(defn- find-path
  "Tries to find a path between two coords"
  [board player from target cost travelled possible]
  (let [possible (or possible (possible-coords board from target travelled))
        best (first possible)]
    (if (not best)
      (result/action-failed "NoRouteToTarget")
      (let [result (process-move board from best player)
           new-board (result/result-board result)
           current-cost (+ cost (result/result-cost result))]
        (cond
          (< laws/max-action-points current-cost)
            (result/action-failed "ActionPointsOverflow")
          (= best target)
            (result/action-success new-board current-cost)
          (result/failed? result)
            result
          :else
            (if-let [result (find-path new-board player best target current-cost (conj travelled best) nil)]
              result
              (recur board player from target cost travelled (rest possible))))))))

(defn- resolve-goto
  "Tries to find the best path between the given coordinates. Fails if can't
  find it, or the :move action would fail for this scenario."
  [from target quantity]
  (fn gotoer [board player]
    (if-let [result (find-path board player from target 0 #{} nil)]
      result
      (result/action-failed "NoPathToTarget"))))

(defn build-goto
  "Builds a goto action on a board"
  [[from to quantity]]
  (if (board/adjacent? from to)
    (move/build-move [from to quantity])
    (resolve-goto from to quantity)))
