(ns obb-rules.action
  (:require [obb-rules.actions.rotate :as rotate]
            [obb-rules.actions.attack :as attack]
            [obb-rules.actions.deploy :as deploy]
            [obb-rules.actions.auto-deploy :as auto-deploy]
            [obb-rules.actions.goto :as goto]
            [obb-rules.actions.move :as move]))

(def ^:private available-actions
  {:rotate rotate/build-rotate
   :move move/build-move
   :attack attack/build-attack
   :deploy deploy/build-deploy
   :auto-deploy auto-deploy/build-auto-deploy
   :goto goto/build-goto})

(defn build-action
  "Builds an action given its code and args"
  [[action-type & action-args]]
  (let [builder (-> (keyword action-type)
                    (available-actions))]
    (assert builder (str "No action builder defined for " action-type))
    (builder action-args)))

#_(def build-action (memoize build-action))

(defn reset-action-specific-state
  "Removes action specific state from the board"
  [board]
  (-> board
      (dissoc :removed-elements)
      (move/reset-action-state)))
