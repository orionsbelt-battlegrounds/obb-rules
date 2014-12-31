(ns ^{:added "1.7"
      :author "Pedro Santos"}
  obb-rules.actions.hooks
  "Hooks on the main actions"
  (:require [obb-rules.element :as element]
            [obb-rules.actions.rebound :as rebound]
            [obb-rules.actions.triple-attack :as triple-attack]
            [obb-rules.actions.strikeback :as strikeback]))

(def hook-handlers {:rebound obb-rules.actions.rebound/process
                    :strikeback obb-rules.actions.strikeback/process
                    :triple obb-rules.actions.triple-attack/process})

(defn- get-handler
  "Gets a handler for a hook"
  [hook-data]
  (let [handler-name (first hook-data)
        handler (get hook-handlers handler-name)]
    (assert handler (str "No hook handler for " handler-name))
    handler))

(defmulti process
  "Processes the event hooks for the given context"
  (fn [event args] (keyword event)))

(defmethod process :after-attack
  [event {attacker :attacker board :board info :info :as args}]
  (if-let [hooks (element/hooks attacker event)]
    ((get-handler (first hooks)) (first hooks) args)
    [board info]))

(defmethod process :after-hit
  [event {target :target board :board info :info :as args}]
  (if-let [hooks (element/hooks target event)]
    ((get-handler (first hooks)) (first hooks) args)
    [board info]))

