(ns ^{:added "1.7"
      :author "Pedro Santos"}
  obb-rules.actions.rebound
  "Processes rebound logic"
  (:require [obb-rules.element :as element]
            [obb-rules.board :as board]
            [obb-rules.actions.damage-calculator :as calculator]
            [obb-rules.actions.direction :as direction]))

(defn- process-rebound
  "Applies rebound on the board"
  [config {attacker :attacker board :board info :info unused-damage :unused-damage rebound-target :rebound-target :as args}]
  (let [[destroyed _] (calculator/destroyed-with-unused-damage board
                                                               attacker
                                                               rebound-target
                                                               unused-damage)]
    (println "----- " destroyed " d " unused-damage))
  [board info]
  )

(defn- target-was-destroyed?
  "Checks if the original target was in fact destroyed"
  [board target]
  (let [coord (element/element-coordinate target)
        in-coord (board/get-element board coord)]
    (nil? in-coord)))

(defn- aplicable?
  "Checks if the rebound can be performed"
  [config {target :target board :board unused-damage :unused-damage rebound-target :rebound-target :as args}]
  (and
    (>= unused-damage 0)
    (target-was-destroyed? board target)
    rebound-target))

(defn- rebound-target
  "Finds the target that will be damaged by rebound"
  [{target :target attacker :attacker board :board info :info unused-damage :unused-damage :as args}]
  (let [target-coord (element/element-coordinate target)
        attacker-direction (element/element-direction attacker)
        rebound-coord (direction/update attacker-direction target-coord)]
    (board/get-element board rebound-coord)))

(defn process
  "Processes the rebound for the given data"
  [config {board :board info :info :as args}]
  (let [args (assoc args :rebound-target (rebound-target args))]
    (println args)
    (if (aplicable? config args)
      (process-rebound config args)
      [board info])))

