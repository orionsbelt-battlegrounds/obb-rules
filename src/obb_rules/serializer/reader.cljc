(ns ^{:added "2.1.0"
      :author "Pedro Santos"}
  obb-rules.serializer.reader
  "Loads and processes a game from a serialized text format"
  (:require [clojure.string :as string]
            [obb-rules.serializer.common :as common]
            [obb-rules.game :as game]
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
  (->> (string/split-lines s)
       (mapv str->actions)))

(defn deploy-per-player
  "Given two deploy turns, this fn returns the raw actions for each player"
  [[deploy1 deploy2]]
  (let [first-action (first deploy1)
        [x y] (last first-action)]
    (if (> 6 y) ;; p1 deploys on rows 7 and 8
      [deploy1 deploy2]
      [deploy2 deploy1])))

(defn build-stash
  "Given a collection of raw deploy actions, rebuild the original stash,
  by summing all the quantities"
  [deploy-actions]
  (reduce (fn [stash [_ quantity unit _]]
            (update stash unit #(+ quantity (or % 0))))
          {}
          deploy-actions))

(defn str->game
  "Given a game string, returns the game, fully processed with all the
  give turns"
  [s]
  (let [parts (string/split s (re-pattern common/context-separator))
        attrs (str->attrs (nth parts 0))
        deploy-actions (str->raw-turn-actions (nth parts 1))
        [p1-deploy p2-deploy] (deploy-per-player deploy-actions)
        stash1 (build-stash p1-deploy)
        stash2 (build-stash p2-deploy)
        turn-actions (str->raw-turn-actions (nth parts 2))]
    (prn attrs)
    (prn deploy-actions)
    (prn turn-actions)
    {}))
