(ns obb-rules.privatize
  "Functions that hide private data on games"
  (:require [obb-rules.game :as game]
            [obb-rules.board :as board]
            [obb-rules.element :as element]))

(defmulti game
  "Privatizes a board"
  (fn [game & player] (keyword (game/state game))))

(defn- remove-element
  "Removes an element from given player"
  [player board element]
  (if (= player (keyword (element/element-player element)))
    (board/remove-element board (element/element-coordinate element))
    board))

(defn- remove-elements
  "Remove elements for a specific player"
  [board player viewed-by]
  (if (= player viewed-by)
    board
    (let [elements (board/board-elements board player)
          remover (partial remove-element player)]
      (reduce remover board elements))))

(defn- clear-stash
  "Clears the stash from for a given player"
  [board player viewed-by]
  (if (= player viewed-by)
    board
    (board/set-stash board player {})))

(defmethod game :deploy
  [game & args]
  (let [viewed-by (keyword (first args))]
    (-> game
        (clear-stash :p1 viewed-by)
        (clear-stash :p2 viewed-by)
        (remove-elements :p1 viewed-by)
        (remove-elements :p2 viewed-by))))

(defmethod game :final [board & player] board)
(defmethod game :p1 [board & player] board)
(defmethod game :p2 [board & player] board)

