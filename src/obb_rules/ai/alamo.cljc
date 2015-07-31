(ns ^{:added "2.0.0" :author "Pedro Santos"}
  obb-rules.ai.alamo
  "Bot implementation that it's defensive"
  (:require [obb-rules.math :as math]
            [obb-rules.actions.move :as move]
            [obb-rules.element :as element]
            [obb-rules.ai.common :as common]
            [obb-rules.game :as game]
            [obb-rules.ai.firingsquad :as firingsquad]
            [obb-rules.laws :as laws]
            [obb-rules.result :as result]
            [obb-rules.board :as board]))

(def element-depth 10)

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
         (println [(:value option) (:old-value option) (:cost option) (:actions option)])) coll)
  coll)

(defn- take-best
  "Takes the best n options for a given element"
  [game element n]
  (take n
    (-> []
        (into (common/attack-options game element))
        (into (common/rotate-attack-options game element))
        (into (common/move-attack-options game element))
        (into (common/move-options game element))
        (->> (sort-by common/option-value-sorter)))))

(defn- other-player
  "Gets the other player to play on the given board"
  [board]
  (if (= (game/state board) :p1)
    :p2
    :p1))

(defn- consider-opponent-move
  "For each option given, will play a bot against it and recalculate
  option value"
  [options]
  (map (fn [option]
         (when option
           (let [board (:board option)
                 player (game/state board)
                 counter-player (other-player board)
                 board (-> (game/state board counter-player)
                           (dissoc :removed-elements)
                           (dissoc :action-results))
                 counter-option (firingsquad/turn-option board counter-player)
                 counter-board (:board counter-option)]
             (if counter-option
               (-> option
                   (assoc :old-value (:value option))
                   (assoc :value (common/eval-board counter-board player)))
               option))))
       options))

(defn- gather-element-actions
  "Gathers possible actions for the given element"
  [game all element]
  (remove empty?
    (conj all (first (-> (take-best game element element-depth)
                         (consider-opponent-move)
                         (->> (sort-by common/option-value-sorter))
                         #_(logger))))))

(defn- find-one
  "Given a collection of sorted options, tries to find a good one"
  [player options]
  (let [joiner (partial common/join-options player)
        the-one (reduce joiner (first options) (rest options))]
    the-one))

(defmethod actions :turn
  [game player]
  (let [elements (board/board-elements game player)
        gatherer (partial gather-element-actions game)
        option (->> (reduce gatherer [] elements)
                    (sort-by common/option-value-sorter)
                    #_(logger)
                    (find-one player))]
    (if option
      (option :actions)
      [])))
