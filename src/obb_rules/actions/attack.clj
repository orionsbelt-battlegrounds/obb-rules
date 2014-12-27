(ns obb-rules.actions.attack
  (:require [obb-rules.actions.direction :as dir]
            [obb-rules.element :as element]
            [obb-rules.game :as game]
            [obb-rules.simplifier :as simplify]
            [obb-rules.actions.damage-calculator :as calculator])
  (:use obb-rules.result obb-rules.board obb-rules.element obb-rules.unit))

(defn- advance-and-check-target
  "Goes to the next coordinate and checks if the target is valid"
  [board attacker target current-coordinate distance bypassed-element?]
  (let [unit (element-unit attacker)
        direction (element-direction attacker)
        next-coordinate (dir/update direction current-coordinate)
        next-element (get-element board next-coordinate)
        may-try-next? (or (nil? next-element) (element/catapult-attack? attacker))
        bypassed? (or bypassed-element? (and (some? next-element) (not= next-element target)))]
    (cond
      (= next-element target) (if bypassed-element? :catapult :direct)
      (>= distance (unit-range unit)) :out-of-range
      may-try-next? (recur board attacker target next-coordinate (+ 1 distance) bypassed?)
      :else :out-of-range)))

(defn- attack-restrictions
  "Checks if the attack is possible"
  [board player attacker target]
  (cond
    (nil? attacker) "EmptyAttacker"
    (not (game/player-turn? board player)) "StateMismatch"
    (frozen? attacker) "FrozenElement"
    (nil? target) "EmptyTarget"
    (simplify/not-name= player (element-player attacker)) "NotOwnedElement"
    (= (element-player attacker) (element-player target)) "SamePlayer"))

(defn- resolve-attack
  "Checks if the target element is in range"
  [board player attacker target]
  (if-let [error-msg (attack-restrictions board player attacker target)]
    [false error-msg]
    (let [lock-target (advance-and-check-target board attacker target (element-coordinate attacker) 1 false)]
      (if (= :out-of-range lock-target)
        [false "OutOfRange"]
        [true lock-target]))))

(defn- build-basic-attack-info
  "Builds information about the concrete attack, without the side effects"
  [attack-type destroyed target]
  (let [target-unit (element-unit target)]
    [{:attack-type attack-type
      :destroyed destroyed
      :unit (unit-name target-unit)}]))

(defn- process-after-attack
  "Processes registered handlers for after-attack"
  [board attacker target unused-damage info]
  [board info])

(defn- process-attack
  "Processes the attack"
  [board attacker target attack-type]
  (let [[destroyed unused-damage] (calculator/destroyed-with-unused-damage attacker target)
        attacker-coordinate (element-coordinate attacker)
        coordinate (element-coordinate target)
        frozen-board (swap-element board attacker-coordinate (element/freeze attacker))
        attack-board (remove-from-element frozen-board coordinate destroyed)
        attack-info (build-basic-attack-info attack-type destroyed target)
        [final-board final-info] (process-after-attack attack-board attacker target unused-damage attack-info)]
    (action-success final-board 1 "OK" final-info)))

(defn build-attack
  "Builds an attack action on a board"
  [[coord target-coord]]
  (fn attacker [board player]
    (let [attacker (get-element board coord)
          target (get-element board target-coord)
          [success? info] (resolve-attack board player attacker target)]
      (if-not success?
        (action-failed info)
        (process-attack board attacker target info)))))

