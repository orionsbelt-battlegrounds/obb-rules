(ns obb-rules.actions.damage-calculator
  (:require [clojure.math.numeric-tower :as math])
  (:use obb-rules.element obb-rules.unit))

(defn distance-factor
  "Gets a distance factor for an attack"
  [attacker target]
    (let [[x1 y1] (element-coordinate attacker)
          [x2 y2] (element-coordinate target)
          distance (math/abs (- (- x1 x2) (- y1 y2)))]
      (if (> distance 3)
        (* 0.25 (- 7 distance))
        1)))

(defn damage
  "Gets the base damage given by a unit to another"
  [attacker-element defender-element]
  (let [attacker-unit (element-unit attacker-element)
        defender-unit (element-unit defender-element)
        attacker-quantity (element-quantity attacker-element)
        attack (unit-attack attacker-unit)
        distance-perc (distance-factor attacker-element defender-element)]
    (int (* attack attacker-quantity distance-perc))))

(defn defense
  "Gets the defense of a given unit from another"
  [attacker-element defender-element]
  (let [unit (element-unit defender-element)]
    (unit-defense unit)))

(defn destroyed
  "Gets how many units an attack will destroy"
  [attacker-element defender-element]
  (let [total-damage (damage attacker-element defender-element)
        total-defense (defense attacker-element defender-element)
        destroyed (/ total-damage total-defense)
        defender-quantity (element-quantity defender-element)]
    (if (> destroyed defender-quantity)
      defender-quantity
      destroyed)))
