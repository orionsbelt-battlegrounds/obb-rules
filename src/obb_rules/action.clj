(ns obb-rules.action
  (:use obb-rules.actions.rotate
        obb-rules.actions.attack
        obb-rules.actions.deploy
        obb-rules.actions.move))

(def ^:private available-actions
  {:rotate build-rotate
   :attack build-attack
   :deploy build-deploy
   :move build-move})

(defn build-action
  "Buidls an action given its code and args"
  [[action-type & action-args]]
  (let [builder (-> (keyword action-type)
                    (available-actions))]
    (assert builder (str "No action builder defined for " action-type))
    (builder action-args)))

(defn reset-action-specific-state
  "Removes action specific state from the board"
  [board]
  (let [elements (get board :elements)
        cleaned (reduce (fn [h [k v]] (assoc h k (dissoc v :frozen))) {} elements)]
    (assoc board :elements cleaned)))
