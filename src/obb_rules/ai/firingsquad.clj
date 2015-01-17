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
  (conj all (first (-> []
                       (into (common/attack-options game element))
                       (into (common/rotate-attack-options game element))
                       (into (common/move-attack-options game element))
                       (->> (sort-by common/option-value-sorter))))))

(defn- find-one
  "Given a collection of sorted options, tries to find a good one"
  [player options]
  (let [joiner (partial common/join-options player)]
    (reduce joiner (first options) (rest options))))

(defmethod actions :turn
  [game player]
  (let [elements (board/board-elements game player)
        gatherer (partial gather-element-actions game)
        option (->> (reduce gatherer [] elements)
                    (sort-by common/option-value-sorter)
                    (find-one player))]
    (if option
      (option :actions)
      [])))
