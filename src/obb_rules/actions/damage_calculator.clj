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
  [board attacker-element defender-element]
  (let [attacker-quantity (element-quantity attacker-element)
        attack (element-attack board attacker-element defender-element)
        distance-perc (distance-factor attacker-element defender-element)]
    (int (* attack attacker-quantity distance-perc))))

(defn defense
  "Gets the defense of a given unit from another"
  [board attacker-element defender-element]
  (element-defense board attacker-element defender-element))

(defn destroyed-with-unused-damage
  "Gets how many units an attack will destroy"
  ([board attacker-element defender-element]
   (destroyed-with-unused-damage board
                                 attacker-element
                                 defender-element
                                 (damage board attacker-element defender-element)))
  ([board attacker-element defender-element total-damage]
   (let [elem-defense (defense board attacker-element defender-element)
         destroyed (/ total-damage elem-defense)
         defender-quantity (element-quantity defender-element)]
     (if (> destroyed defender-quantity)
       [defender-quantity (- total-damage (* elem-defense defender-quantity))]
       [destroyed 0]))))

(defn destroyed
  "Gets how many units an attack will destroy"
  [board attacker-element defender-element]
  (let [[destroyed _] (destroyed-with-unused-damage board attacker-element defender-element)]
    destroyed))
