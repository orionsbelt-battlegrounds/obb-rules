(ns obb-rules.actions.attack
  (:require [obb-rules.actions.direction :as dir])
  (:use obb-rules.result obb-rules.board obb-rules.element obb-rules.unit))

(defn- advance-and-check-target
  "Goes to the next coordinate and checks if the target is valid"
  [board attacker target current-coordinate distance]
  (let [unit (element-unit attacker)
        direction (element-direction attacker)
        next-coordinate (dir/update direction current-coordinate)
        next-element (get-element board next-coordinate)]
    (cond
      (>= distance (unit-range unit)) false
      (nil? next-element) (advance-and-check-target board attacker target next-coordinate (+ 1 distance))
      (= next-element target) true
      :else false)))

(defn- in-range?
  "Checks if the target element is in range"
  [board attacker target]
  (advance-and-check-target board attacker target (element-coordinate attacker) 1))

(defn- attack-restrictions
  "Checks if the attack is possible"
  [board attacker target]
  (cond
    (nil? target) "EmptyTarget"
    (not (in-range? board attacker target)) "OutOfRange"
    (= (element-player attacker) (element-player target)) "SamePlayer"))

(defn- process-attack
  "Processes the attack"
  [board attacker target]
  (action-success board 1))

(defn build-attack
  "Builds an attack action on a board"
  [[coord target-coord]]
  (fn attacker [board player]
    (let [attacker (get-element board coord)
          target (get-element board target-coord)]
      (if-let [error (attack-restrictions board attacker target)]
        (action-failed error)
        (process-attack board attacker target)))))

