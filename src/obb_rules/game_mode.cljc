(ns obb-rules.game-mode
  (:require [obb-rules.board :as board]
            [obb-rules.stash :as stash]
            [obb-rules.player :as player]))

(defn winner
  "Gets the winner of the given game"
  [game]
  (let [[first & others :as players-with-units] (filter
                                                 #(not (board/empty-board? game %))
                                                 player/all-players)]
    (cond
      (empty? players-with-units) :draw
      (empty? others)             first
      :else                       :none)))

(defn winner?
  "Checks if there is already a winner"
  [game]
  (not= (winner game) :none))

