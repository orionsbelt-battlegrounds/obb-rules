(ns obb-rules.game
  (:require [obb-rules.stash :as stash]
            [obb-rules.result :as result]
            [obb-rules.simplifier :as simplify]
            [obb-rules.board :as board]))

(def version (System/getProperty "obb-rules.version"))

(defn state?
  "Checks if the game is in a given state"
  [game state]
  (let [current-state (game :state)]
    (or
      (nil? current-state)
      (simplify/name= state current-state))))

(defn deploy? "True if in deploy state" [game] (state? game :deploy))
(defn player-turn? "True if player's state" [game player] (state? game player))
(defn get-stash "Gets the player's stash" [game player] (board/get-stash game player))
(defn mode "Gets the game mode" [game] (or (game :mode) :default))

(defn state
  "Gets/Sets the current game's state"
  ([game]
   (game :state))
  ([game new-state]
   (assoc game :state new-state)))

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

(defn start-battle
  "Given a deployed board, starts the battle"
  [game]
  (assert (deploy? game) "Game not in deploy state")
  (assoc game :state (rand-nth [:p1 :p2])))

(defn action-results
  "Provides the actions a results currently aplied on this game
  if any."
  [game]
  (game :action-results))

(defn push-result
  "Stores an action's result"
  [game raw-action result]
  (let [action-results (or (action-results game) [])
        new-results (conj action-results [raw-action result])]
    (assoc game :action-results new-results)))

(defn valid-actions?
  "Returns true if the actions currently applied to the given game
  are all successful."
  [game]
  (every? #(result/succeeded? (last %)) (action-results game)))

