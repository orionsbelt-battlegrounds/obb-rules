(ns ^{:added "1.10" :author "Pedro Santos"}
  obb-rules.ai.common
  "Common utilities for ai bots"
  (:require [obb-rules.game :as game]
            [obb-rules.stash :as stash]
            [obb-rules.turn :as turn]
            [obb-rules.math :as math]
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

(defn eval-scores
  "Evaluates the socres of p1 and p2"
  [player [score1 score2]]
  (if (simplify/name= player :p1)
    (- score1 score2)
    (- score2 score1)))

(defn eval-board
  "Evaluates a board for a given player"
  [board player]
 (let [scores (evaluator/eval-game board)]
    (eval-scores player scores)))

(defn- build-target
  "Builds a result that represents a successful target"
  [player result raw-action distance]
  (let [board (result/result-board result)]
    (-> result
        (assoc :distance distance)
        (assoc :actions [raw-action])
        (assoc :element-coord (nth raw-action 1))
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

(defn find-possible-attacks
  "Gets an hash with possible attack coordinates and value of the attack.
  Thr format is {[1 1] 56}"
  [game element]
  (->> (attack-options game element)
       (map (fn [option]
              [(nth (first (:actions option)) 2) (:value option)]))
       (into {})))

(defn- prepend-actions
  "Adds the given actions to the start of the option's actions"
  [new-actions cost option]
  (let [new-cost (+ cost (option :cost))]
    (if (>= laws/max-action-points new-cost)
      (-> option
          (assoc :actions (into new-actions
                                (option :actions)))
          (assoc :cost new-cost)))))

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

(defn- go-to-result
  "Applies a go-to the given coordinate"
  [game element player target-coord]
  (let [source-coord (element/element-coordinate element)
        action [:go-to source-coord target-coord]
        result (turn/simulate-actions game player [action])]
    [action result target-coord]))

(defn- build-options
  "Builds options from a result"
  [[action result target-coord]]
  (when (result/succeeded? result)
    (let [previous-cost (:cost result)
          game (result/result-board result)
          element (board/get-element game target-coord)]
      (concat
        ;; add direct attack options
        (map (partial prepend-actions [action] 0)
             (rotate-attack-options game element))
        ;; rotate to other directions and try attack
        (map (partial prepend-actions [action] 0)
             (attack-options game element))))))

(defn- targets-in-range?
  "True if there are any targets in range"
  [game element coord]
  true)

(defn- discard-possible-coords
  "Tries to discard coords"
  [game element coords]
  (filter (fn [coord]
            (and (nil? (board/get-element game coord))
                 (targets-in-range? game element coord))) coords))

(defn move-options
  "Returns a collection of possible options that move
  the unit by chance"
  ([game element]
   (move-options game element -10000000 1))
  ([game element value max-options]
   (let [coordinate (element/element-coordinate element)
         unit (element/element-unit element)
         mov-cost (unit/unit-movement-cost unit)
         player (element/element-player element)
         possible-coords (take 1 (shuffle (move/find-possible-destinations game element)))
         run-results (partial go-to-result game element player)
         actions-and-results (map run-results possible-coords)]
     (map (fn [[action result target-coord]]
             (-> result
                 (assoc :distance 1)
                 (assoc :actions [action])
                 (assoc :value value)
                 (assoc :dummy true)
                 (assoc :element-coord target-coord)
                 (assoc :cost mov-cost)))
          actions-and-results))))

(defn move-attack-options
  "Returns a collection of possible options that first move and then
  attack"
  [game element]
  (let [coordinate (element/element-coordinate element)
        player (element/element-player element)
        possible-coords (->> (move/find-all-possible-destinations game element)
                             (discard-possible-coords game element))
        run-results (partial go-to-result game element player)
        actions-and-results (map run-results possible-coords)
        options (->> (map build-options actions-and-results)
                     (flatten))]
    options))

(defn option-value-sorter
  "Sorts a collection of options based on the value"
  [option]
  (if option
    (let [cost-factor (/ (- laws/max-action-points (:cost option)) 10)]
      (- (+ (option :value) cost-factor)))
    0))

(defn option-value-cost-sorter
  "Sorts a collection of options based on the value"
  [option]
  (if option
    (let [cost-factor (+ 17 (* 100 (- laws/max-action-points (:cost option))))]
      (- (* (option :value) cost-factor)))
    0))

(defn value-for-join
  "Gets the value of the option, considering that the option will me merged
  with another option."
  [current-option]
  (if (:dummy current-option)
    0
    (:value current-option)))

(defn join-options
  "Joins the given options on the given board, until the cost is possible"
  [player master current-option]
  #_(println "master" (:cost master) (:actions master))
  #_(println "current" (:cost current-option) (:actions current-option))
  (if (or (nil? master)
          (>= (:cost master) laws/max-action-points))
    (reduced master)
    (if (or (nil? current-option)
            (> (+ (:cost master) (:cost current-option)) laws/max-action-points))
      master
      (let [board (master :board)
            actions (current-option :actions)
            result (turn/simulate-actions board player actions)]
        (if (result/succeeded? result)
          (-> master
              (assoc :board (result/result-board result))
              (assoc :actions (into (master :actions) actions))
              (update :value + (value-for-join current-option))
              (assoc :cost (+ (master :cost) (current-option :cost))))
          master)))))

(defn aggregate-best
  "Given a collection of sorted options, tries to group several of them
  to find the best one"
  [player options]
  (let [joiner (partial join-options player)]
    (->> options
         (map (fn [master-option]
                (->> options
                     (filter #(>= (:cost master-option) (:cost %)))
                     (reduce joiner master-option))))
         (sort-by option-value-sorter)
         first)))
