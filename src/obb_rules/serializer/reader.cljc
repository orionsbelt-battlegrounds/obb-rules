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
            [obb-rules.game-mode :as game-mode]))

(defmulti str->action
  "Converts a action in string format to a raw action"
  (fn [s]
    (first s)))

(defn get-int
  "Given a string, gets the char on the specific position, and returns it
  as an integer"
  [s pos]
  (host/parse-int (str (nth s pos))))

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
  (let [parts (string/split s #"\.")
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

(defn str->attrs
  "Gets the game attributes as a map"
  [s]
  (->> (string/split-lines s)
       (reduce (fn [attrs line]
                 (let [parts (string/split line #":")
                       k (nth parts 0)
                       v (string/trim (nth parts 1))]
                   (assoc attrs (keyword k) (keyword v))))
               {})))

(defn str->raw-turn-actions
  "Given a multi line string with several actions, will return a coll
  of raw turn actions"
  [s]
  (if s
    (->> (string/split-lines s)
         (mapv str->actions))
    []))

(defn deploy-per-player
  "Given two deploy turns, this fn returns the raw actions for each player"
  [deploy-turns]
  (let [deploy1 (first deploy-turns)
        deploy2 (second deploy-turns)
        first-action (first deploy1)
        [x y] (last first-action)]
    (if (and (some? y) (> y 6)) ;; p1 deploys on rows 7 and 8
      [deploy1 deploy2]
      [deploy2 deploy1])))

(defn build-stash-from-deploy
  "Given a collection of raw deploy actions, rebuild the original stash,
  by summing all the quantities"
  [deploy-actions]
  (reduce (fn [stash [_ quantity unit _]]
            (update stash unit #(+ quantity (or % 0))))
          {}
          deploy-actions))

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
  [attrs player deploy-actions]
  (if-let [raw-stash (get attrs (keyword (str (name player) "-stash")) nil)]
    (str->stash (name raw-stash))
    (build-stash-from-deploy deploy-actions)))

(defn process-turns
  "Processes the given turns on the given game"
  [game turns]
  (reduce (fn [game turn]
            (let [curr-player (game/state game)
                  result (turn/process-actions game curr-player turn)]
              (if (result/succeeded? result)
                (:board result)
                (reduced result))))
          game
          turns))

(defn start-battle
  "Starts the game battle and runs turn actions"
  [game attrs turn-actions]
  (if (game/deploy? game)
    game
    (-> game
        (game/start-battle (:first-player attrs))
        (process-turns turn-actions))))

(defn str->game
  "Given a game string, returns the game, fully processed with all the
  given turns"
  [s]
  (let [parts (string/split s (re-pattern common/context-separator))
        attrs (str->attrs (nth parts 0))
        deploy-actions (str->raw-turn-actions (nth parts 1 nil))
        [p1-deploy p2-deploy] (deploy-per-player deploy-actions)
        stash1 (build-stash attrs :p1 p1-deploy)
        stash2 (build-stash attrs :p2 p2-deploy)
        turn-actions (str->raw-turn-actions (nth parts 2 nil))]
    (-> (game/create stash1 stash2)
        (board/board-terrain (:terrain attrs))
        (turn/process-board-actions :p1 p1-deploy)
        (turn/process-board-actions :p2 p2-deploy)
        (start-battle attrs turn-actions))))
