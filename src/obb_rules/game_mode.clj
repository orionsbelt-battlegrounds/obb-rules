(ns obb-rules.game-mode
  (:require [obb-rules.board :as board]
            [obb-rules.stash :as stash]
            [obb-rules.game :as game]))

(defn deploy-completed?
  "True if it's on deploy and completed"
  [game]
  (if-not (game/deploy? game)
    game
    (let [stash1 (game/get-stash game :p1)
          stash2 (game/get-stash game :p2)]
      (and (stash/cleared? stash1) (stash/cleared? stash2)))))

(defn final?
  "Checks if the game is finished"
  [game]
  (and
    (not (= (game/state game) :deploy))
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

(defn- start-game
  "Starts the game"
  [game]
  (game/start-battle game))

(defn process
  "Checks if a given game is finished and updates it's state.
   Returns the given game if not finished"
  [game]
  (cond
    (final? game) (finalize game)
    (deploy-completed? game) (start-game game)
    :else game))
