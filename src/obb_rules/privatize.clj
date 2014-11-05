(ns obb-rules.privatize
  "Functions that hide private data on games"
  (:require [obb-rules.game :as game]
            [obb-rules.board :as board]
            [obb-rules.element :as element]))

(defmulti game
  "Privatizes a board"
  (fn [game] (game/state game)))

(defn- remove-element
  "Removes an element if from given player"
  [player board element]
  (if (= player (element/element-player element))
    (board/remove-element board (element/element-coordinate element))
    board))

(defn- remove-elements
  "Remove elements from a specific player"
  [board player]
  (let [elements (board/board-elements board player)
        remover (partial remove-element player)]
    (reduce remover board elements)))

(defmethod game :deploy
  [game]
  (-> game
      (board/set-stash :p1 {})
      (board/set-stash :p2 {})
      (remove-elements :p1)
      (remove-elements :p2)))

(defmethod game :final [board] board)
(defmethod game :p1 [board] board)
(defmethod game :p2 [board] board)

