(ns obb-rules.game-progress
  (:require[obb-rules.stash :as stash]
           [obb-rules.game :as game]
           [obb-rules.game-mode :as game-mode]))

(defn deploy-completed?
  "True if it's on deploy and completed"
  [game]
  (if-not (game/deploy? game)
    game
    (let [stash1 (game/get-stash game :p1)
          stash2 (game/get-stash game :p2)]
      (and (stash/cleared? stash1) (stash/cleared? stash2)))))

(defn end-game?
  "Checks if the game is finished"
  [game]
  (and
   (not (game/deploy? game))
   (game-mode/winner? game)))

(defn- end-game
  "Changes a game to final state"
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

(defn next-stage
  "Moves the game to the next stage based on the current conditions"
  [game]
  (cond
    (end-game? game)           (end-game game)
    (switch-turn-player? game) (switch-turn-player game)
    (deploy-completed? game)   (start-game game)
    :else                      game))



