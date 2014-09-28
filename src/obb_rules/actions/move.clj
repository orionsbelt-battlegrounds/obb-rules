(ns obb-rules.actions.move
  (:use obb-rules.result obb-rules.board obb-rules.element))

(defn- move-restrictions
  "Restrictions on the move action"
  [player board efrom from eto to]
  (cond
    (not (in-bounds? board to)) "OutOfBounds"
    (nil? efrom) "EmptyCoordinate"
    (not (adjacent? from to)) "NotAdjacent"
    (and eto (not= player (element-player eto))) "NotOwnedElement"
    (not= player (element-player efrom)) "NotOwnedElement"))

(defn build-move
  "Builds a move action on a board"
  [[player from to quantity]]
  (fn mover [board]
    (let [efrom (get-element board from)
          eto (get-element board to)]
      (if-let [error (move-restrictions player board efrom from eto to)]
        (action-failed error)
        (action-failed "NotImplemented")))))

