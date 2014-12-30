(ns ^{:added "1.8"
      :author "Pedro Santos"}
  obb-rules.actions.triple-attack
  "Processes triple attack logic"
  (:require [obb-rules.element :as element]
            [obb-rules.board :as board]
            [obb-rules.unit :as unit]
            [obb-rules.actions.damage-calculator :as calculator]
            [obb-rules.actions.direction :as direction]))

(defn- apply-triple
  "Applies the triple damage to a target"
  [config attacker board info target]
  (if target
    (let [destroyed (calculator/destroyed board attacker target)
          target-coordinate (element/element-coordinate target)
          board (board/remove-from-element board target-coordinate destroyed)
          unit-name (unit/unit-name (element/element-unit target))
          info (conj info {:attack-type :triple :destroyed destroyed :unit unit-name})]
      [board info])
    [board info]))

(defn- process-triple
  "Applies triple on the board"
  [config {attacker :attacker board :board info :info unused-damage :unused-damage targets :triple-targets :as args}]
  (let [targets (get args :triple-targets)
        [board info] (apply-triple config attacker board info (first targets))]
    (apply-triple config attacker board info (second targets))))

(defn- aplicable?
  "Checks if the triple can be performed"
  [config {target :target board :board unused-damage :unused-damage :as args}]
  true)

(defn- triple-targets
  "Finds the target that will be damaged by triple"
  [{target :target attacker :attacker board :board info :info :as args}]
  (let [target-coord (element/element-coordinate target)
        attacker-direction (element/element-direction attacker)
        triple-coords (direction/perpendicular target-coord attacker-direction)]
    [(board/get-element board (first triple-coords))
     (board/get-element board (second triple-coords))]))

(defn process
  "Processes the triple for the given data"
  [config {board :board info :info :as args}]
  (let [args (assoc args :triple-targets (triple-targets args))]
    (if (aplicable? config args)
      (process-triple config args)
      [board info])))

