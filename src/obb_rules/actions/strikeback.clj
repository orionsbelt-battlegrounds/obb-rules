(ns ^{:added "1.9"
      :author "Pedro Santos"}
  obb-rules.actions.strikeback
  "Processes strikeback logic"
  (:require [obb-rules.element :as element]
            [obb-rules.board :as board]
            [obb-rules.unit :as unit]
            [obb-rules.actions.damage-calculator :as calculator]
            [obb-rules.actions.direction :as direction]))

(defn- calculate-destroyed
  "Calculates the destroyed units by rebound"
  [config {target :target attacker :attacker board :board info :info unused-damage :unused-damage rebound-target :rebound-target :as args}]
  (let [destroyed (calculator/destroyed board target attacker)]
    destroyed))

(defn- process-strikeback
  "Applies rebound on the board"
  [config {target :target attacker :attacker board :board info :info unused-damage :unused-damage rebound-target :rebound-target :as args}]
  (let [destroyed (calculate-destroyed config args)
        attacker-coordinate (element/element-coordinate attacker)
        board (board/remove-from-element board attacker-coordinate destroyed)
        unit-name (unit/unit-name (element/element-unit attacker))
        info (conj info {:attack-type :strikeback :destroyed destroyed :unit unit-name :target (element/element-player attacker)})]
    [board info]))

(defn- aplicable?
  "Checks if the rebound can be performed"
  [config {target :target board :board unused-damage :unused-damage rebound-target :rebound-target :as args}]
  (and
    true))

(defn process
  "Processes the strikeback for the given data"
  [config {board :board info :info :as args}]
  (println "here")
  (if (aplicable? config args)
    (process-strikeback config args)
    [board info]))

