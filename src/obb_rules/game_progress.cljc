(ns ^{:added "3.0.0"
      :author "Joaquim Torres"}
  obb-rules.game-progress
  "Evolving a game through its different stages"

  (:require [obb-rules.stash :as stash]
            [obb-rules.game :as game]
            [obb-rules.player :as player]
            [obb-rules.game-mode :as game-mode]
            [obb-rules.board :as board]))

(def ^:private default-new-game-options {:mode :annihilation})

(defn- merge-new-game-defaults
  "Returns the options with the default values applied for the non-specified options"
  [options]
  (merge default-new-game-options options))

(defn new-game
  "Creates a game for the given stashes.
   stashes is an associative collection in which the keys correspond to the
   players and the values to the corresponding stash."
  [stashes & [{:as options} :as args]]
  (-> (reduce-kv board/set-stash
                 (board/create-board)
                 stashes)
      (cond->
          (some? (:terrain options)) (board/board-terrain (:terrain options)))
      (game/mode (:mode (merge-new-game-defaults options)))
      (game/state :deploy)
      (game-mode/on-new-game)))

(defn new-random-game
  "Creates a game with a random stash. The same stash is user for all players."
  []
  (let [stash (stash/random)]
    (-> (reduce (fn [assigned-stashes player] (assoc assigned-stashes player stash))
                {}
                player/all-players)
        new-game)))

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



