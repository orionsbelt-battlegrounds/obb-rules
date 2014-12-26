(ns obb-rules.actions.attack
  (:require [obb-rules.actions.direction :as dir]
            [obb-rules.element :as element]
            [obb-rules.game :as game]
            [obb-rules.simplifier :as simplify]
            [obb-rules.actions.damage-calculator :as calculator])
  (:use obb-rules.result obb-rules.board obb-rules.element obb-rules.unit))

(defn- advance-and-check-target
  "Goes to the next coordinate and checks if the target is valid"
  [board attacker target current-coordinate distance]
  (let [unit (element-unit attacker)
        direction (element-direction attacker)
        next-coordinate (dir/update direction current-coordinate)
        next-element (get-element board next-coordinate)
        may-try-next? (or (nil? next-element) (element/catapult-attack? attacker))]
    (cond
      (= next-element target) true
      (>= distance (unit-range unit)) false
      may-try-next? (recur board attacker target next-coordinate (+ 1 distance))
      :else false)))

(defn- in-range?
  "Checks if the target element is in range"
  [board attacker target]
  (advance-and-check-target board attacker target (element-coordinate attacker) 1))

(defn- attack-restrictions
  "Checks if the attack is possible"
  [board player attacker target]
  (cond
    (nil? attacker) "EmptyAttacker"
    (not (game/player-turn? board player)) "StateMismatch"
    (frozen? attacker) "FrozenElement"
    (nil? target) "EmptyTarget"
    (simplify/not-name= player (element-player attacker)) "NotOwnedElement"
    (not (in-range? board attacker target)) "OutOfRange"
    (= (element-player attacker) (element-player target)) "SamePlayer"))

(defn- process-attack
  "Processes the attack"
  [board attacker target]
  (let [destroyed (calculator/destroyed attacker target)
        attacker-coordinate (element-coordinate attacker)
        coordinate (element-coordinate target)
        frozen-board (swap-element board attacker-coordinate (element/freeze attacker))]
    (action-success (remove-from-element frozen-board coordinate destroyed) 1)))

(defn build-attack
  "Builds an attack action on a board"
  [[coord target-coord]]
  (fn attacker [board player]
    (let [attacker (get-element board coord)
          target (get-element board target-coord)]
      (if-let [error (attack-restrictions board player attacker target)]
        (action-failed error)
        (process-attack board attacker target)))))

