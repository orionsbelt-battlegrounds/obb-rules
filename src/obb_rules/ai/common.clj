(ns ^{:added "1.10" :author "Pedro Santos"}
  obb-rules.ai.common
  "Common utilities for ai bots"
  (:require [obb-rules.game :as game]
            [obb-rules.stash :as stash]
            [obb-rules.turn :as turn]
            [obb-rules.evaluator :as evaluator]
            [obb-rules.result :as result]
            [obb-rules.actions.direction :as dir]
            [obb-rules.simplifier :as simplify]
            [obb-rules.element :as element]
            [obb-rules.board :as board]
            [obb-rules.unit :as unit]))

(defn- process
  "Processes an action on a game/board"
  [player board element raw-action]
  (turn/process-actions board player [raw-action]))

(defn- eval-board
  "Evaluates a board for a given player"
  [board player]
  (let [[score1 score2] (evaluator/eval-game board)]
    (if (simplify/name= player :p1)
      (- score1 score2)
      (- score2 score1))))

(defn- build-target
  "Builds a result that represents a successful target"
  [player result raw-action distance]
  (let [board (result/result-board result)]
    (-> result
        (assoc :distance distance)
        (assoc :actions [raw-action])
        (assoc :value (eval-board board player)))))

(defn- find-targets
  "Finds possible attack targets for the given element"
  [game attacker targets current-coordinate distance]
  (let [direction (element/element-direction attacker)
        next-coordinate (dir/update direction current-coordinate)
        origin (element/element-coordinate attacker)
        raw-action [:attack origin next-coordinate]
        player (element/element-player attacker)
        result (process player game attacker raw-action)]
    (if (result/failed? result)
      targets
      (let [targets (conj targets (build-target player result raw-action distance))]
        (recur game attacker targets next-coordinate (+ 1 distance))))))

(defn attack-options
  "Returns a collection of possible options for attack
  for the given element"
  [game element]
  (find-targets game element [] (element/element-coordinate element) 1))
