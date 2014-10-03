(ns obb-rules.actions.attack
  (:use obb-rules.result obb-rules.board obb-rules.element))

(defn- attack-restrictions
  "Checks if the attack is possible"
  [board attacker target]
  nil)

(defn- process-attack
  "Processes the attack"
  [board attacker target]
  (action-success board 1))

(defn build-attack
  "Builds an attack action on a board"
  [[player coord target-coord]]
  (fn attacker [board]
    (let [attacker (get-element board coord)
          target (get-element board target-coord)]
      (if-let [error (attack-restrictions player attacker target)]
        (action-failed error)
        (process-attack board attacker target)))))

