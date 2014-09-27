(ns obb-rules.result)

(defn succeeded? "True if the action failed" [result] (result :success))
(defn failed? "True if the action failed" [result] (not (succeeded? result)))

(defn action-result
  "Represents the result of an action"
  [success? resulting-board cost message]
  {:success success?
   :board resulting-board
   :cost cost
   :message message})

(defn action-success
  "Represents a successful action"
  [resulting-board cost]
  (action-result true resulting-board cost "OK"))

(defn action-failed
  "Represents an unsuccessful action"
  [message]
  (action-result false nil 0 message))

