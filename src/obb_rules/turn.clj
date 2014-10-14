(ns obb-rules.turn
  (:require [obb-rules.action :as action]
            [obb-rules.game :as game]
            [obb-rules.game-mode :as game-mode]
            [obb-rules.result :as result]))

(def max-action-points 6)

(defn- apply-actions
  "Applies the actions to a board"
  [player current-game action-pair]
  (let [raw-action (first action-pair)
        action (last action-pair)
        result (action current-game player)
        result-game (result/result-board result)]
    (game/push-result result-game raw-action result)))

(defn- action-pair
  "Gets a collection of raw-action,action pairs"
  [raw-action]
  [raw-action (action/build-action raw-action)])

(defn- points
  "Gets the used action points on a turn."
  [game]
  (->> (map #(last %) (game/action-results game))
       (map #(result/result-cost %))
       (reduce +)))

(defn- create-result
  "Creates a result for the given game"
  [game total-action-points]
  (if (> total-action-points max-action-points)
    (result/action-failed "ActionPointsOverflow")
    (result/action-success game total-action-points)))

(defn process
  "Processes the given actions"
  [game player & raw-actions]
  (let [actions (map action-pair raw-actions)
        do-actions (partial apply-actions player)
        final-state (reduce do-actions game actions)
        final (game-mode/process final-state)
        action-points (points final)]
    (create-result final action-points)))
