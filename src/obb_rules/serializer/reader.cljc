(ns ^{:added "2.1.0"
      :author "Pedro Santos"}
  obb-rules.serializer.reader
  "Loads and processes a game from a serialized text format"
  (:require [clojure.string :as string]
            [obb-rules.serializer.common :as common]
            [obb-rules.game :as game]
            [obb-rules.result :as result]
            [obb-rules.board :as board]
            [obb-rules.turn :as turn]
            [obb-rules.host-dependent :as host]
            [obb-rules.actions.deploy :as deploy-action]
            [obb-rules.game-mode :as game-mode]))

(defn- get-int
  "Given a string, gets the char on the specific position, and returns it
  as an integer"
  [s pos]
  (host/parse-int (str (nth s pos))))

(defmulti str->action
  "Converts a action in string format to a raw action"
  (fn [s]
    (first s)))

(defmethod str->action \a
  [s]
  [:attack [(get-int s 1) (get-int s 2)]
           [(get-int s 3) (get-int s 4)]])

(defmethod str->action \g
  [s]
  [:goto [(get-int s 1) (get-int s 2)]
         [(get-int s 3) (get-int s 4)]])

(defmethod str->action \m
  [s]
  (let [parts (string/split s #"\.")
        quantity (host/parse-int (nth parts 1))]
    [:move [(get-int s 1) (get-int s 2)]
           [(get-int s 3) (get-int s 4)]
           quantity]))

(defmethod str->action \r
  [s]
  (let [c (nth s 3)
        dir (case c
              \w :west
              \s :south
              \e :east
              \n :north)]
    [:rotate [(get-int s 1) (get-int s 2)] dir]))

(defmethod str->action \d
  [s]
  (let [parts (string/split s (re-pattern common/in-action-separator))
        quantity (host/parse-int (nth parts 1))
        unit (keyword (nth parts 2))]
    [:deploy quantity
             unit
             [(get-int s 1) (get-int s 2)]]))

(defn str->actions
  "Given a string with several actions, returns a vector with all the
  raw actions."
  [s]
  (->> (string/split s (re-pattern common/action-separator))
       (mapv str->action)))

(defn str->history-item
  "Creates a history item from a string"
  [s]
  (let [parts (string/split s (re-pattern common/action-separator))
        player (keyword (first parts))
        actions (mapv str->action (rest parts))]
    {:player player :actions actions}))

(defn- gather-attributes
  "Returns the given attribute bag with the raw attribute added"
  [attrs line]
  (let [parts (string/split line (re-pattern common/attributes-separator))
        k (nth parts 0)
        v (string/trim (nth parts 1))]
    (assoc attrs (keyword k) (keyword v))))

(defn- split-lines
  "Splits the given string in lines, and also trims them"
  [s]
  (->> (string/split-lines s)
       (map string/trim)))

(defn str->attrs
  "Gets the game attributes as a map"
  [s]
  (->> (split-lines s)
       (reduce gather-attributes {})))

(defn str->history-items
  "Creates a history from a string"
  [s]
  (if s
    (->> (split-lines s)
         (mapv str->history-item))
    []))

(defn deploy-per-player
  "Given two deploy turns, this fn returns the raw actions for each player"
  [deploy-history]
  (let [deploy1 (first deploy-history)
        deploy2 (second deploy-history)
        player (:player deploy1)]
    (if (= :p1 player)
      [deploy1 deploy2]
      [deploy2 deploy1])))

(defn- add-from-deploy-to-stash
  "Gets the quantity of a unit deployed on a raw deploy action, and
  adds it to the given stash map"
  [stash raw-unit]
  (let [{:keys [quantity unit]} (deploy-action/analyse raw-unit)]
    (update stash unit #(+ quantity (or % 0)))))

(defn build-stash-from-deploy
  "Given a collection of raw deploy actions, rebuild the original stash,
  by summing all the quantities"
  [deploy-history-item]
  (reduce add-from-deploy-to-stash {} (:actions deploy-history-item)))

(defn str->stash
  "Gets the stash from a stash string"
  [raw]
  (->> (string/split raw (re-pattern common/stash-separator))
       (map (fn [raw-unit-quantity]
              (let [parts (string/split raw-unit-quantity #"\.")]
                [(keyword (nth parts 1)) (host/parse-int (nth parts 0))])))
       (into {})))

(defn build-stash
  "Gets the stash for the given player"
  [attrs player deploy-history-item]
  (if-let [raw-stash (get attrs (keyword (str (name player) "-stash")) nil)]
    (str->stash (name raw-stash))
    (build-stash-from-deploy deploy-history-item)))

(defn start-battle
  "Starts the game battle and runs turn actions"
  [game attrs history]
  (if (game/deploy? game)
    game
    (-> game
        (game/start-battle (:first-player attrs))
        (turn/process-history history))))

(defn str->game
  "Given a game string, returns the game, fully processed with all the
  given turns"
  [s]
  (let [parts (string/split s (re-pattern common/context-separator))
        attrs (str->attrs (nth parts 0))
        deploy-history (str->history-items (nth parts 1 nil))
        [p1-deploy p2-deploy] (deploy-per-player deploy-history)
        stash1 (build-stash attrs :p1 p1-deploy)
        stash2 (build-stash attrs :p2 p2-deploy)
        turn-history (str->history-items (nth parts 2 nil))]
    (-> (game/create stash1 stash2)
        (board/board-terrain (:terrain attrs))
        (turn/process-history deploy-history)
        (start-battle attrs turn-history))))
