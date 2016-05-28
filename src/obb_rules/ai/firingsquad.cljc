(ns ^{:added "1.10" :author "Pedro Santos"}
  obb-rules.ai.firingsquad
  "Firingsquad bot implementation"
  (:require [obb-rules.math :as math]
            [obb-rules.actions.move :as move]
            [obb-rules.element :as element]
            [obb-rules.ai.common :as common]
            [obb-rules.game :as game]
            [obb-rules.laws :as laws]
            [obb-rules.result :as result]
            [obb-rules.board :as board]))

(defmulti actions
  "Returns a list of actions to apply to the current game"
  (fn [game player]
    (if (= :deploy (keyword (game/state game)))
      :deploy
      :turn)))

(defmethod actions :deploy
  [game player]
  [[:auto-deploy :firingsquad]])

(defn- logger
  "Utility for debugging"
  [coll]
  (mapv (fn [option]
          (println "firingsquad" [(:value option) (:cost option) (:actions option)])) coll)
  coll)

(defn- gather-element-actions
  "Gathers possible actions for the given element"
  [game all element]
  (remove empty?
    (concat all (take 3 (-> []
                           (into (common/attack-options game element))
                           (into (common/rotate-attack-options game element))
                           (into (common/move-attack-options game element))
                           (into (common/move-options game element))
                           (->> (sort-by common/option-value-cost-sorter)))))))

(defn turn-option
  "Gets the complete option for playing on a specific game"
  [game player]
  (let [elements (board/player-elements game player)
          gatherer (partial gather-element-actions game)]
    (->> (reduce gatherer [] elements)
         (sort-by common/option-value-sorter)
         #_(logger)
         (common/aggregate-best player))))

(defmethod actions :turn
  [game player]
  (if-let [option (turn-option game player)]
    (option :actions)
    []))
