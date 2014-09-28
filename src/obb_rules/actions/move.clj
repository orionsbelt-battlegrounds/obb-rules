(ns obb-rules.actions.move
  (:use obb-rules.result obb-rules.board obb-rules.element obb-rules.unit))

(defn- move-restrictions
  "Restrictions on the move action"
  [player board efrom from eto to]
  (cond
    (not (in-bounds? board to)) "OutOfBounds"
    (nil? efrom) "EmptyCoordinate"
    (not (adjacent? from to)) "NotAdjacent"
    (and eto (not= (element-unit efrom) (element-unit eto))) "UnitMismatch"
    (and eto (not= player (element-player eto))) "NotOwnedElement"
    (not= player (element-player efrom)) "NotOwnedElement"))

(defn movement-cost
  "Specifies a unit movement cost"
  [unit partial-move?]
  (if partial-move?
    (* 2(unit-movement-cost unit))
    (unit-movement-cost unit)))

(defn- process-move
  "Processes the actual move"
  [board efrom from eto to quantity]
  (let [unit (element-unit efrom)
        from-quantity (element-quantity efrom)
        remaining-quantity (- from-quantity quantity)
        cost (movement-cost unit (not= 0 remaining-quantity))
        removed-from-board (remove-from-element board from quantity)
        added-to-board (add-to-element removed-from-board to quantity)]
    (action-success added-to-board cost)))

(defn build-move
  "Builds a move action on a board"
  [[player from to quantity]]
  (fn mover [board]
    (let [efrom (get-element board from)
          eto (get-element board to)]
      (if-let [error (move-restrictions player board efrom from eto to)]
        (action-failed error)
        (process-move board efrom from eto to quantity)))))

