(ns obb-rules.game
  (:require [obb-rules.stash :as stash]
            [obb-rules.board :as board]))

(defn state
  "Gets the current game's state"
  [game]
  (game :state))

(defn create
  "Creates a game for a given stash"
  [stash]
  (let [board (board/create-board)
        board1 (board/set-stash board :p1 stash)
        board2 (board/set-stash board1 :p2 stash)]
    (assoc board2 :state :deploy)))

(defn random
  "Creates a game with random units"
  []
  (let [stash (stash/random)]
    (create stash)))
