(ns obb-rules.actions.rotate
  (:require [obb-rules.game :as game]
            [obb-rules.simplifier :as simplify]
            [obb-rules.result :as result]
            [obb-rules.board :as board]
            [obb-rules.element :as element]))

(defn- rotate-restrictions
  "Checks for invalid scenarios"
  [player board element]
  (cond
    (nil? element) "EmptyCoordinate"
    (not (game/player-turn? board player)) "StateMismatch"
    (element/frozen? element) "FrozenElement"
    (simplify/not-name= player (element/element-player element)) "NotOwnedElement"))

(defn- process-rotate
  "Processes the rotate"
  [board coord elem new-dir]
  (let [new-elem (element/element-direction elem new-dir)
        new-board (board/swap-element board coord new-elem)]
    (result/action-success new-board 1)))

(defn build-rotate
  "Builds a rotate action on a board"
  [[coord new-direction]]
  (fn rotator [board player]
    (let [element (board/get-element board coord)]
      (if-let [error (rotate-restrictions player board element)]
        (result/action-failed error)
        (process-rotate board coord element new-direction)))))

