(ns obb-rules.actions.damage-calculator
  (:use obb-rules.element obb-rules.unit))

(defn damage
  "Gets the base damage given by a unit to another"
  [attacker-element defender-element]
  (let [attacker-unit (element-unit attacker-element)
        defender-unit (element-unit defender-element)
        attacker-quantity (element-quantity attacker-element)
        attack (unit-attack attacker-unit)]
    (* attack attacker-quantity)))

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
      (int destroyed))))
