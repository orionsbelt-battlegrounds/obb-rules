(ns obb-rules.game
  (:require [obb-rules.stash :as stash]
            [obb-rules.result :as result]
            [obb-rules.simplifier :as simplify]
            [obb-rules.host-dependent :as host]
            [obb-rules.board :as board]))

(def version "3.0.0")

(def all-players [:p1 :p2])

(def ^:private available-modes #{:annihilation :supernova})

(def ^:private default-create-options {:mode :annihilation})

(defn state?
  "Checks if the game is in a given state"
  [game state]
  (let [current-state (game :state)]
    (or
      (nil? current-state)
      (simplify/name= state current-state))))

(defn deploy? "True if in deploy state" [game] (state? game :deploy))
(defn final? "True if the game has ended" [game] (state? game :final))
(defn player-turn? "True if player's state" [game player] (state? game player))
(defn get-stash "Gets the player's stash" [game player] (board/get-stash game player))

(defn mode
  "Gets the game mode"
  [game]
  (:mode game))

(defn state
  "Gets/Sets the current game's state"
  ([game]
   (game :state))
  ([game new-state]
   (assoc game :state new-state)))

(defn- merge-create-defaults
  "Returns the options with the default values applied for the non-specified options"
  [options]
  (merge default-create-options options))

(defn- valid-mode?
  "Checks if the given mode is one of the supported modes"
  [mode]
  (contains? available-modes mode))

(defn- choose-mode
  "Sets the game in the given mode"
  [game mode]
  (assert (valid-mode? mode) "Unknown mode")
  (assoc game :mode mode))

(defn new-game
  "Creates a game for the given stashes.
  stashes is an associative collection in which the keys correspond to the
  players and the values to the corresponding stash."
  [stashes & [{:as options} :as args]]
  (-> (reduce-kv (fn [board player stash] (board/set-stash board player stash))
                 (board/create-board)
                 stashes)
      (cond->
        (some? (:terrain options)) (board/board-terrain (:terrain options)))
      (choose-mode (:mode (merge-create-defaults options)))
      (state :deploy)))

(defn random
  "Creates a game with a random stash. The same stash is user for all players."
  []
  (let [stash (stash/random)]
    (-> (reduce (fn [assigned-stashes player] (assoc assigned-stashes player stash))
                {}
                all-players)
        new-game)))

(defn start-battle
  "Given a deployed board, starts the battle"
  ([game]
   (assert (deploy? game) "Game not in deploy state")
   (start-battle game (rand-nth [:p1 :p2])))
  ([game first-player]
   (-> game
       (assoc :state first-player)
       (assoc :first-player first-player))))

(defn first-player
  "Gets the player that started the game"
  [game]
  (:first-player game))

(defn action-results
  "Provides the actions a results currently aplied on this game
  if any."
  [game]
  (game :action-results))

(defn push-result
  "Stores an action's result"
  [game raw-action result]
  (let [action-results (or (action-results game) [])
        result (dissoc result :board)
        new-results (conj action-results [raw-action result])]
    (assoc game :action-results new-results)))

(defn valid-actions?
  "Returns true if the actions currently applied to the given game
  are all successful."
  [game]
  (every? #(result/succeeded? (last %)) (action-results game)))
