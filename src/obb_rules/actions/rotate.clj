(ns obb-rules.actions.rotate
  (:use obb-rules.result obb-rules.board obb-rules.element))

(defn- rotate-restrictions
  "Checks for invalid scenarios"
  [player element]
  (cond
    (nil? element) "EmptyCoordinate"
    (not= player (element-player element)) "NotOwnedElement"))

(defn- process-rotate
  "Processes the rotate"
  [board coord elem new-dir]
  (let [new-elem (element-direction elem new-dir)
        new-board (swap-element board coord new-elem)]
    (action-success new-board 1)))

(defn build-rotate
  "Builds a rotate action on a board"
  [[player coord new-direction]]
  (fn [board]
    (let [element (get-element board coord)]
      (if-let [error (rotate-restrictions player element)]
        (action-failed error)
        (process-rotate board coord element new-direction)))))

