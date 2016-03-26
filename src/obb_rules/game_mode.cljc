(ns obb-rules.game-mode
  (:require [obb-rules.board :as board]
            [obb-rules.stash :as stash]
            [obb-rules.player :as player]
            [obb-rules.game :as game]))

(defn- star-unit?
  "Checks whether the given player still has the star unit"
  [game player]
  (board/unit-present? game player "star"))

(defmulti filter-winners
  "Filter the list of players that meet conditions to win the game"
  (fn [game] (game/mode game)))

(defmethod filter-winners :annihilation
  [game]
  (filter #(not (board/empty-board? game %))
          player/all-players))

(defmethod filter-winners :supernova
  [game]
  (filter #(star-unit? game %)
          player/all-players))

(defn winner
  "Gets the winner of the given game"
  [game]
  (let [[first & others :as candidates] (filter-winners game)]
    (cond
      (empty? candidates) :draw
      (empty? others)     first
      :else               :none)))

(defn winner?
  "Checks if there is already a winner"
  [game]
  (not= (winner game) :none))

(defn- add-star-units
  [game]
  (reduce #(game/update-stash %1 %2 stash/add-units {:star 1})
          game
          player/all-players))

(defmulti on-new-game
  "Hook to run mode specific preparation on game creation"
  (fn [game] (game/mode game)))

(defmethod on-new-game :supernova
  [game]
  (add-star-units game))

(defmethod on-new-game :annihilation [game] game)
