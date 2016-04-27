(ns ^{:added "2.1.0"
      :author "Pedro Santos"}
  obb-rules.serializer.writer
  "Writes a game and actions to a text format"
  (:require [clojure.string :as string]
            [obb-rules.game :as game]
            [obb-rules.board :as board]
            [obb-rules.serializer.common :as common]
            [obb-rules.game-mode :as game-mode]))

(defmulti action->str
  "Translates a raw action to a concise string representation"
  (fn [action]
    (first action)))

(defmethod action->str :deploy
  [[_ quantity unit [source-x source-y]]]
  (str "d" source-x source-y "." quantity "." (name unit)))

(defmethod action->str :attack
  [[_ [source-x source-y] [target-x target-y]]]
  (str "a" source-x source-y target-x target-y))

(defmethod action->str :go-to
  [[_ [source-x source-y] [target-x target-y]]]
  (str "g" source-x source-y target-x target-y))

(defmethod action->str :rotate
  [[_ [source-x source-y] dir]]
  (str "r" source-x source-y (first (name dir))))

(defmethod action->str :move
  [[_ [source-x source-y] [target-x target-y] quantity]]
  (str "m" source-x source-y target-x target-y "." quantity))

(defn actions->str
  "Translates a coll of raw actions to a concise string representation"
  [actions]
  (->> actions
       (map action->str)
       (clojure.string/join common/action-separator)))

(defn history-item->str
  "Renders a history item to a string"
  [item]
  (str (name (:player item))
       common/action-separator
       (actions->str (:actions item))))

(defn stash->str
  "Specific stash as a string"
  [stash]
  (->> stash
       (map (fn [[k v]]
              (str v "." (name k))))
       (string/join common/stash-separator)))

(defn player-stash-str
  "Gets a string that represents the player stash, if any"
  [game player]
  (let [stash (game/get-stash game player)]
    (if (seq stash)
      (str "\n" (name player) "-stash: " (stash->str stash)))))

(defn game-stash-str
  "Gets a string the represents the stash, to be stored on the props"
  [game]
  (str (player-stash-str game :p1)
       (player-stash-str game :p2)))

(defn game-props->str
  "Gets the game properties as a string"
  [game]

  (str "mode: " (name (game/mode game))
       "\nterrain: " (name (board/board-terrain game))
       (when (game/deploy? game) (game-stash-str game))
       (when (game/first-player game) (str "\nfirst-player: " (name (game/first-player game))))
       "\nstate: " (name (game/state game))
       (when (game/final? game) (str "\nwinner: " (name (game-mode/winner game))))))

(defn game->str
  "Translates a complete game to a concise string representation"
  [game]
  (let [history (:history game)
        deploy-history (take 2 history)
        turns-history (drop 2 history)]
    (str (game-props->str game)
         common/context-separator
         (clojure.string/join "\n" (map history-item->str deploy-history))
         common/context-separator
         (clojure.string/join "\n" (map history-item->str turns-history)))))
