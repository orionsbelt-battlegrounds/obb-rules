(ns obb-rules.actions.move
  (:require [obb-rules.actions.move-restrictions :as move-restrictions]
            [obb-rules.game :as game])
  (:use obb-rules.result obb-rules.board obb-rules.element obb-rules.unit))

(def ^:private min-move-percentage 0.2)
(def ^:private max-move-percentage (- 1 min-move-percentage))

(defn- invalid-move-percentage?
  "Checks if a quantity to move is invalid"
  [total-quantity quantity]
  (if (= total-quantity quantity)
    false
    (or
      (>= quantity (* total-quantity max-move-percentage))
      (<= quantity (* total-quantity min-move-percentage)))))

(defn- move-restrictions
  "Restrictions on the move action"
  [player board efrom from eto to quantity]
  (cond
    (not (game/player-turn? board player)) "StateMismatch"
    (not (in-bounds? board to)) "OutOfBounds"
    (nil? efrom) "EmptyCoordinate"
    (frozen? efrom) "FrozenElement"
    (not (adjacent? from to)) "NotAdjacent"
    (invalid-move-percentage? (element-quantity efrom) quantity) "InvalidQuantityPercentage"
    (not (move-restrictions/valid? efrom from to)) "MovementTypeFail"
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
        added-to-board (add-to-element removed-from-board to quantity efrom)]
    (action-success added-to-board cost)))

(defn build-move
  "Builds a move action on a board"
  [[from to quantity]]
  (fn mover [board player]
    (let [efrom (get-element board from)
          eto (get-element board to)]
      (if-let [error (move-restrictions player board efrom from eto to quantity)]
        (action-failed error)
        (process-move board efrom from eto to quantity)))))

