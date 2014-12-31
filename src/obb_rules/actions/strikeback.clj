(ns ^{:added "1.9"
      :author "Pedro Santos"}
  obb-rules.actions.strikeback
  "Processes strikeback logic"
  (:require [obb-rules.element :as element]
            [obb-rules.board :as board]
            [obb-rules.unit :as unit]
            [obb-rules.actions.direction :as direction]
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

(defn- in-range?
  "Checks if the attacker is in range of the target"
  [target attacker]
  (let [[tx ty] (element/element-coordinate target)
        [ax ay] (element/element-coordinate attacker)
        distance (+ (- tx ax) (- ty ay))]
    (<= distance (element/element-range target))))

(defn- facing-attacker?
  "True if the target is facing it's attacker"
  [target attacker]
  (direction/facing? (element/element-direction target)
                     (element/element-direction attacker)))

(defn- direct-attack?
  "True if the hit was direct"
  [info]
  (let [original-info (first info)]
    (= :direct (get original-info :attack-type))))

(defn- aplicable?
  "Checks if the rebound can be performed"
  [config {target :target attacker :attacker board :board info :info :as args}]
  (and
    (in-range? target attacker)
    (facing-attacker? target attacker)
    (direct-attack? info)))

(defn- refresh-target
  "Refreshes the target to get the actual quantity"
  [{board :board target :target :as args}]
  (let [target-coordinate (element/element-coordinate target)]
    (assoc args :target (board/get-element board target-coordinate))))

(defn process
  "Processes the strikeback for the given data"
  [config {board :board info :info target :target :as args}]
  (let [args (refresh-target args)]
    (if (aplicable? config args)
      (process-strikeback config args)
      [board info])))

