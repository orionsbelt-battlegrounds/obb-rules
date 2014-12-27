(ns obb-rules.result)

(defn succeeded? "True if the action failed" [result] (result :success))
(defn failed? "True if the action failed" [result] (not (succeeded? result)))
(defn result-message "Gets the message of a result" [result] (result :message))
(defn result-cost "Gets the cost of a result" [result] (result :cost))
(defn result-board "Gets the board of a result" [result] (result :board))
(defn info "Gets additional information" [result] (result :info))

(defn action-result
  "Represents the result of an action"
  [success? resulting-board cost message info]
  (let [base {:success success? :cost cost :message message}
        base-with-board (if resulting-board (assoc base :board resulting-board) base)
        base-with-info (if info (assoc base-with-board :info info) base-with-board)]
    base-with-info))

(defn action-success
  "Represents a successful action"
  ([resulting-board cost]
   (action-success resulting-board cost "OK"))
  ([resulting-board cost message]
   (action-success resulting-board cost message nil))
  ([resulting-board cost message info]
   (action-result true resulting-board cost message info)))

(defn action-failed
  "Represents an unsuccessful action"
  ([message]
   (action-result false nil 0 message nil))
  ([message game]
   (action-result false game 0 message nil)))

