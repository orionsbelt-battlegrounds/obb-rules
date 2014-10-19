(ns obb-rules.result)

(defn succeeded? "True if the action failed" [result] (result :success))
(defn failed? "True if the action failed" [result] (not (succeeded? result)))
(defn result-message "Gets the message of a result" [result] (result :message))
(defn result-cost "Gets the cost of a result" [result] (result :cost))
(defn result-board "Gets the board of a result" [result] (result :board))

(defn action-result
  "Represents the result of an action"
  [success? resulting-board cost message]
  {:success success?
   :board resulting-board
   :cost cost
   :message message})

(defn action-success
  "Represents a successful action"
  ([resulting-board cost]
   (action-success resulting-board cost "OK"))
  ([resulting-board cost message]
   (action-result true resulting-board cost message)))

(defn action-failed
  "Represents an unsuccessful action"
  ([message]
   (action-result false nil 0 message))
  ([message game]
   (action-result false game 0 message)))

