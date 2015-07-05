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
    (not (= (keyword (game/state game)) :deploy))
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

(defn- switch-turn-player?
  "Checks if the game is in a state where a player switch should be done"
  [game]
  (some #{:p1 :p2} [(keyword (game :state))]))

(defn- switch-turn-player
  "Toggles the player to play"
  [game]
  (let [current-player (keyword (game :state))
        next-player (first (disj #{:p1 :p2} current-player))]
    (assoc game :state (keyword next-player))))

(defn process
  "Checks the current game's state and acts based on it"
  [game]
  (cond
    (final? game) (finalize game)
    (switch-turn-player? game) (switch-turn-player game)
    (deploy-completed? game) (start-game game)
    :else game))
