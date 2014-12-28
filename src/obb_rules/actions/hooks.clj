(ns ^{:added "1.7"
      :author "Pedro Santos"}
  obb-rules.actions.hooks
  "Hooks on the main actions"
  (:require [obb-rules.element :as element]
            [obb-rules.actions.rebound :as rebound]))

(def hook-handlers {:rebound rebound/process})

(defn- get-handler
  "Gets a handler for a hook"
  [hook-data]
  (let [handler-name (first hook-data)
        handler (get hook-handlers handler-name)]
    (assert handler (str "No hook handler for " handler-name))
    handler))

(defn process
  "Processes the given hooks"
  [event {attacker :attacker board :board info :info :as args}]
  (if-let [hooks (element/hooks attacker event)]
    ((get-handler (first hooks)) (first hooks) args)
    [board info]))

