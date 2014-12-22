(ns obb-rules.actions.move
  (:require [obb-rules.actions.move-restrictions :as move-restrictions]
            [obb-rules.game :as game]
            [obb-rules.laws :as laws]
            [obb-rules.element :as element]
            [obb-rules.simplifier :as simplify])
  (:use obb-rules.result obb-rules.board obb-rules.element obb-rules.unit))

(defn- invalid-move-percentage?
  "Checks if a quantity to move is invalid"
  [total-quantity quantity]
  (if (= total-quantity quantity)
    false
    (or
      (>= quantity (* total-quantity laws/max-move-percentage))
      (<= quantity (* total-quantity laws/min-move-percentage)))))

(defn- move-restrictions
  "Restrictions on the move action"
  [player board efrom from eto to quantity]
  (cond
    (not (game/player-turn? board player)) "StateMismatch"
    (not (in-bounds? board to)) "OutOfBounds"
    (nil? efrom) "EmptyCoordinate"
    (frozen? efrom) "FrozenElement"
    (frozen? eto) "FrozenElement"
    (not (adjacent? from to)) "NotAdjacent"
    (invalid-move-percentage? (element-quantity efrom) quantity) "InvalidQuantityPercentage"
    (not (move-restrictions/valid? efrom from to)) "MovementTypeFail"
    (and eto (not= (element-unit efrom) (element-unit eto))) "UnitMismatch"
    (and eto (simplify/not-name= player (element-player eto))) "NotOwnedElement"
    (simplify/not-name= player (element-player efrom)) "NotOwnedElement"))

(defn movement-cost
  "Specifies a unit movement cost"
  [unit partial-move?]
  (if partial-move?
    (* 2 (unit-movement-cost unit))
    (unit-movement-cost unit)))

(defn- possible-on-board?
  "Checks if the given coordinate is a possible move for the
  element on the given board"
  [board efrom destination]
  (nil? (move-restrictions
          (element/element-player efrom)
          board
          efrom
          (element/element-coordinate efrom)
          (get-element board destination)
          destination
          (element/element-quantity efrom))))

(defn find-possible-destinations
  "Returns a collection with possible coordinates to move the given
  element on the given board"
  [board element]
  (filter
    (partial possible-on-board? board element)
    (move-restrictions/possible-destinations element)))

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

(defn- get-quantity
  "Tries to get the quantity from the args"
  [quantity element]
  (cond
    quantity quantity
    element (element/element-quantity element)
    :else 0))

(defn build-move
  "Builds a move action on a board"
  [[from to quantity]]
  (fn mover [board player]
    (let [efrom (get-element board from)
          eto (get-element board to)
          quantity (get-quantity quantity efrom)]
      (if-let [error (move-restrictions player board efrom from eto to quantity)]
        (action-failed error)
        (process-move board efrom from eto to quantity)))))

(defn reset-action-state
  "Removes action specific state from the board"
  [board]
  (let [elements (get board :elements)
        cleaned (reduce (fn [h [k v]] (assoc h k (dissoc v :frozen))) {} elements)]
    (assoc board :elements cleaned)))
