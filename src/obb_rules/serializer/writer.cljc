(ns ^{:added "2.1.0"
      :author "Pedro Santos"}
  obb-rules.serializer.writer
  "Writes a game and actions to a text format"
  (:require [obb-rules.game :as game]
            [obb-rules.game-mode :as game-mode]))

(def ^:const context-separator
  "This marker separates each context of the dumped game
  (properties, deploy, turns,...)"
  "\n\n")

(def ^:const action-separator
  "This marker separates each action in a collection of actions"
  " ")

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

(defmethod action->str :goto
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
       (clojure.string/join action-separator)))

(defn game-props->str
  "Gets the game properties as a string"
  [game]
  (str "state: " (name (game/state game))
       (when (game/final? game) (str "\nwinner: " (name (game-mode/winner game))))))

(defn game->str
  "Translates a complete game to a concise string representation"
  [game]
  (let [history (:history game)
        deploy-history (take 2 history)
        turns-history (drop 2 history)]
    (str (game-props->str game)
         context-separator
         (clojure.string/join "\n" (map actions->str deploy-history))
         context-separator
         (clojure.string/join "\n" (map actions->str turns-history)))))
