(ns ^{:added "1.10" :author "Pedro Santos"}
  obb-rules.ai.common
  "Common utilities for ai bots"
  (:require [obb-rules.game :as game]
            [obb-rules.stash :as stash]
            [obb-rules.turn :as turn]
            [obb-rules.laws :as laws]
            [obb-rules.evaluator :as evaluator]
            [obb-rules.result :as result]
            [obb-rules.actions.direction :as dir]
            [obb-rules.actions.move :as move]
            [obb-rules.simplifier :as simplify]
            [obb-rules.element :as element]
            [obb-rules.board :as board]
            [obb-rules.unit :as unit]))

(defn- process
  "Processes an action on a game/board"
  [player board element raw-action next-element]
  (turn/simulate-actions board player [raw-action]))

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
        next-element (board/get-element game next-coordinate)
        origin (element/element-coordinate attacker)
        raw-action [:attack origin next-coordinate]
        player (element/element-player attacker)
        result (process player game attacker raw-action next-element)]
    (cond
      (< (element/element-range attacker) distance)
        targets
      (result/failed? result)
        (recur game attacker targets next-coordinate (+ 1 distance))
      :else
        (let [targets (conj targets (build-target player result raw-action distance))]
          (recur game attacker targets next-coordinate (+ 1 distance))))))

(defn attack-options
  "Returns a collection of possible options for attack
  for the given element"
  [game element]
  (find-targets game element [] (element/element-coordinate element) 1))

(defn- prepend-actions
  "Adds the given actions to the start of the option's actions"
  [new-actions cost option]
  (-> option
      (assoc :actions (into new-actions
                            (option :actions)))
      (assoc :cost (+ cost (option :cost)))))

(defn- rotate-and-attack
  "For a given element, rotates it and attacks"
  [game element dir]
  (let [element (element/element-direction element dir)
        coord (element/element-coordinate element)
        game (board/swap-element game coord element)]
    (map (partial prepend-actions [[:rotate coord dir]] 1)
         (attack-options game element))))

(defn rotate-attack-options
  "Returns a collection of possible options that first rotate and then
  attack"
  [game element]
  (let [coordinate (element/element-coordinate element)
        player (element/element-player element)
        dirs (dir/other (element/element-direction element))
        options (->> (map (partial rotate-and-attack game element) dirs)
                     (flatten)
                     (filter #(seq %1)))]
    options))

(defn move-attack-options
  "Returns a collection of possible options that first move and then
  attack"
  [game element]
  (let [coordinate (element/element-coordinate element)
        player (element/element-player element)
        possible-coords (move/find-all-possible-destinations game element)
        ]
    #_(println possible-coords)
    []))

(defn option-value-sorter
  "Sorts a collection of options based on the value"
  [option]
  (if option
    (- (option :value))
    0))

(defn join-options
  "Joins the given options on the given board, until the cost is possible"
  [player master current-option]
  (if (or (nil? master)
          (>= (master :cost) laws/max-action-points)
          (nil? current-option))
    master
    (let [board (master :board)
          actions (current-option :actions)
          result (turn/simulate-actions board player actions)]
      (if (result/succeeded? result)
        (-> master
            (assoc :board (result/result-board result))
            (assoc :actions (into (master :actions) actions))
            (assoc :cost (+ (master :cost) (current-option :cost))))
        master))))
