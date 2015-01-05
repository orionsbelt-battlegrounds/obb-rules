(ns ^{:added "1.10" :author "Pedro Santos"}
  obb-rules.ai.common
  "Common utilities for ai bots"
  (:require [obb-rules.game :as game]
            [obb-rules.stash :as stash]
            [obb-rules.turn :as turn]
            [obb-rules.result :as result]
            [obb-rules.actions.direction :as dir]
            [obb-rules.element :as element]
            [obb-rules.board :as board]
            [obb-rules.unit :as unit]))

(defn- process
  "Processes an action on a game/board"
  [board element raw-action]
  (let [player (element/element-player element)]
    (turn/process-actions board player [raw-action])))

(defn- build-target
  "Builds a result that represents a successful target"
  [result raw-action])

(defn- find-targets
  "Finds possible attack targets for the given element"
  [game attacker targets current-coordinate distance]
  (let [unit (element/element-unit attacker)
        direction (element/element-direction attacker)
        next-coordinate (dir/update direction current-coordinate)
        origin (element/element-coordinate attacker)
        next-element (board/get-element game next-coordinate)
        raw-action [:attack origin next-coordinate]
        result (process game attacker raw-action)]
    (if (result/failed? result)
      targets
      (conj targets (build-target result raw-action)))))

(defn attack-options
  "Returns a collection of possible options for attack
  for the given element"
  [game element]
  (find-targets game element [] (element/element-coordinate element) 0))
