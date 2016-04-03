(ns obb-rules.game
  (:require [obb-rules.stash :as stash]
            [obb-rules.result :as result]
            [obb-rules.simplifier :as simplify]
            [obb-rules.host-dependent :as host]
            [obb-rules.player :as player]
            [obb-rules.board :as board]))

(def version "3.0.0")

(def ^:private available-modes #{:annihilation :supernova})

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

(defn state
  "Gets/Sets the current game's state"
  ([game]
   (game :state))
  ([game new-state]
   (assoc game :state new-state)))

(defn- valid-mode?
  "Checks if the given mode is one of the supported modes"
  [mode]
  (contains? available-modes mode))

(defn mode
  "Gets or sets the game mode"
  ([game]
   (:mode game))
  ([game mode]
   (assert (valid-mode? mode) "Unknown mode")
   (assoc game :mode mode)))

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
  "Provides the actions results currently applied on this game
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

(defn update-stash
  "Updates the specified player's stash by applying f to the stash and the given args"
  [game player f & f-args]
  (let [stash (board/get-stash game player)]
    (board/set-stash game player (apply f stash f-args))))

(defn history
  "Gets the game history"
  [game]
  (:history game))
