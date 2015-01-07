(ns ^{:added "1.10" :author "Pedro Santos"}
  obb-rules.ai.firingsquad
  "Firingsquad bot implementation"
  (:require [clojure.math.numeric-tower :as math]
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

(defn- gather-element-actions
  "Gathers possible actions for the given element"
  [game all element]
  (into all (common/attack-options game element)))

(defmethod actions :turn
  [game player]
  (let [elements (board/board-elements game player)
        gatherer (partial gather-element-actions game)
        joiner (partial common/join-options player)
        root-result (result/action-success game 0)
        actions (->> (reduce gatherer [] elements)
                     (sort-by common/option-value-sorter)
                     #_(reduce joiner [] root-result))]
    (println (map #(:value %) actions))
    (:actions (first actions))))
