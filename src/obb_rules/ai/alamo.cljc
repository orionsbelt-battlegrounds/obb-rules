(ns ^{:added "2.0.0" :author "Pedro Santos"}
  obb-rules.ai.alamo
  "Bot implementation that it's defensive"
  (:require [obb-rules.math :as math]
            [obb-rules.actions.move :as move]
            [obb-rules.element :as element]
            [obb-rules.ai.common :as common]
            [obb-rules.logger :as logger]
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

(defn- final-actions-logger
  "Utility for debugging"
  [coll]
  (logger/log "## Final actions ~~~~~~~~~")
  (when logger/*verbose*
    (mapv (fn [option]
            (logger/ai-option option))
          coll))
  coll)

(defn- element-options-logger
  "Utility for debugging"
  [coll element]
  (when logger/*verbose*
    (logger/log "## Element" (element/element-coordinate element) "options ~~~~~~~~~")
    (when logger/*verbose*
      (mapv (fn [option]
              (logger/ai-option option))
            coll)))
  coll)

(defn- take-best
  "Takes the best n options for a given element"
  [game element n]
  (take n
    (-> []
        (into (common/attack-options game element))
        #_(into (common/rotate-attack-options game element))
        (into (common/move-attack-options game element))
        #_(into (common/move-options game element))
        (->> (sort-by common/option-value-cost-sorter)))))

(defn- other-player
  "Gets the other player to play on the given board"
  [board]
  (if (= (game/state board) :p1)
    :p2
    :p1))

(defn- get-element-on-new-board
  "Tries to find the element on the new board"
  [element option counter-option]
  (let [element-player (element/element-player element)
        counter-board (:board counter-option)
        element-coord (or (:element-coord option) (element/element-coordinate element))
        counter-element (and counter-board (board/get-element counter-board element-coord))]
    (when (and counter-element (= element-player (element/element-player counter-element)))
      counter-element)))

(defn- merge-counter-option
  "Given an option and a counter option will return a new option that is
  a merged one"
  [element option counter-option element-board]
  (if (and option counter-option)
    (let [original-value (:value option)
          original-quantity (element/element-quantity element)
          counter-element (get-element-on-new-board element option counter-option)
          counter-quantity (if counter-element (element/element-quantity counter-element) 0)
          percentage (/ counter-quantity original-quantity)]
      (-> option
          #_(assoc :data {:percentage percentage
                        :_counter-element? (boolean counter-element)
                        :counter-actions (:actions counter-option)
                        :original-quantity original-quantity
                        :counter-quantity counter-quantity})
          (assoc :old-value (:value option))
          (assoc :value (math/ceil (- original-value (* original-value (- 1 percentage)))))))
    option))

(defn- consider-opponent-move
  "For each option given, will play a bot against it and recalculate
  option value"
  [options element]
  (map (fn [option]
         (when option
           (let [board (:board option)
                 player (game/state board)
                 counter-player (other-player board)
                 moved-element (board/get-element board (or (:element-coord option) (element/element-coordinate element)))
                 board (-> (game/state board counter-player)
                           (board/element-focus moved-element)
                           (dissoc :removed-elements)
                           (dissoc :action-results))
                 counter-option (firingsquad/turn-option board counter-player)]
             (merge-counter-option element option counter-option board))))
       options))

(defn- gather-element-actions
  "Gathers possible actions for the given element"
  [game all element]
  (remove empty?
    (conj all (first (-> (take-best game element element-depth)
                         (consider-opponent-move element)
                         (->> (sort-by common/option-value-cost-sorter))
                         (element-options-logger element))))))

(defn- find-one
  "Given a collection of sorted options, tries to find a good one"
  [player options]
  (let [joiner (partial common/join-options player)
        the-one (reduce joiner (first options) (rest options))]
    (logger/log "## Final ~~~~~~~~~~")
    (logger/ai-option the-one)
    the-one))

(defmethod actions :turn
  [game player]
  (logger/ai-turn "alamo" game)
  (let [elements (board/board-elements game player)
        gatherer (partial gather-element-actions game)
        option (->> (reduce gatherer [] elements)
                    (sort-by common/option-value-sorter)
                    (final-actions-logger)
                    (find-one player))]
    (if option
      (option :actions)
      [])))
