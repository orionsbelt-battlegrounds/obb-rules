(ns obb-rules.action
  (:use obb-rules.actions.rotate
        obb-rules.actions.attack
        obb-rules.actions.move))

(def ^:private available-actions
  {:rotate build-rotate
   :attack build-attack
   :move build-move})

(defn build-action
  "Buidls an action given its code and args"
  [[action-type & action-args]]
  (let [builder (available-actions action-type)]
    (assert builder (str "No action builder defined for " action-type))
    (builder action-args)))
