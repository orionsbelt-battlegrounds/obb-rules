(ns obb-rules.actions.move
  (:use obb-rules.result obb-rules.board obb-rules.element))

(defn- move-restrictions
  "Restrictions on the move action"
  [player element]
  nil)

(defn build-move
  "Builds a move action on a board"
  [[player coord new-direction]]
  (fn mover [board]
    (let [element (get-element board coord)]
      (if-let [error (move-restrictions player element)]
        (action-failed error)
        (action-failed "NotImplemented")))))

