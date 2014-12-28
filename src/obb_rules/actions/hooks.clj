(ns ^{:added "1.7"
      :author "Pedro Santos"}
  obb-rules.actions.hooks
  "Hooks on the main actions"
  (:require [obb-rules.element :as element]))

(defn process
  "Processes the given hooks"
  [event {attacker :attacker board :board info :info :as args}]
  (if-let [hooks (element/hooks attacker event)]
    [board info]
    [board info]))

