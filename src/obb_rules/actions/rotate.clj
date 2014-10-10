(ns obb-rules.actions.rotate
  (:require [obb-rules.game :as game])
  (:use obb-rules.result obb-rules.board obb-rules.element))

(defn- rotate-restrictions
  "Checks for invalid scenarios"
  [player board element]
  (cond
    (nil? element) "EmptyCoordinate"
    (not (game/player-turn? board player)) "StateMismatch"
    (frozen? element) "FrozenElement"
    (not= player (element-player element)) "NotOwnedElement"))

(defn- process-rotate
  "Processes the rotate"
  [board coord elem new-dir]
  (let [new-elem (element-direction elem new-dir)
        new-board (swap-element board coord new-elem)]
    (action-success new-board 1)))

(defn build-rotate
  "Builds a rotate action on a board"
  [[coord new-direction]]
  (fn rotator [board player]
    (let [element (get-element board coord)]
      (if-let [error (rotate-restrictions player board element)]
        (action-failed error)
        (process-rotate board coord element new-direction)))))

