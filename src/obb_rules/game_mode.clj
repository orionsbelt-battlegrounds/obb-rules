(ns obb-rules.game-mode
  (:require [obb-rules.board :as board]
            [obb-rules.game :as game]))

(defn final?
  "Checks if the game is finished"
  [game]
  (and
    (not (= game/state :deploy))
    (or
      (board/empty-board? game :p1)
      (board/empty-board? game :p2))))

(defn winner
  "Gets the winner of the given game"
  [game]
  (cond
    (board/empty-board? game :p1) :p2
    (board/empty-board? game :p2) :p1
    :else :none))

(defn- finalize
  "Marks a game as final"
  [game]
  (game/state game :final))

(defn process
  "Checks if a given game is finished and updates it's state.
   Returns the given game if not finished"
  [game]
  (if (final? game)
    (finalize game)
    game))
