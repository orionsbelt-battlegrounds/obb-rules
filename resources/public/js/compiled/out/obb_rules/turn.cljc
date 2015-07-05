(ns obb-rules.turn
  (:require [obb-rules.action :as action]
            [obb-rules.game :as game]
            [obb-rules.laws :as laws]
            [obb-rules.game-mode :as game-mode]
            [obb-rules.result :as result]))

(defn- continue-apply-actions
  "Processes an action on a game"
  [player current-game action-pair]
  (let [raw-action (first action-pair)
        action (last action-pair)
        result (action current-game player)
        result-game (result/result-board result)]
    (if (result/succeeded? result)
      (game/push-result result-game raw-action result)
      (game/push-result current-game raw-action result))))

(defn- apply-actions
  "Applies the actions to a board"
  [player current-game action-pair]
  (if (game/valid-actions? current-game)
    (continue-apply-actions player current-game action-pair)
    current-game))

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
  (cond
    (not (game/valid-actions? game))
      (result/action-failed "ActionFailed" game)
    (> total-action-points laws/max-action-points)
      (result/action-failed "ActionPointsOverflow")
    :else
      (-> game
          (action/reset-action-specific-state)
          (result/action-success total-action-points "TurnOK"))))

(defn simulate-actions
  "Simulates the given actions"
  [game player raw-actions]
  (if (seq raw-actions)
    (let [actions (map action-pair raw-actions)
          do-actions (partial apply-actions player)
          final (reduce do-actions game actions)
          action-points (points final)]
      (create-result final action-points))
    (result/action-failed "NoActions")))

(defn process-actions
  "Processes the given actions"
  [game player raw-actions]
  (let [actions (map action-pair raw-actions)
        do-actions (partial apply-actions player)
        final-state (reduce do-actions game actions)
        final (game-mode/process final-state)
        action-points (points final)]
    (create-result final action-points)))

(defn process
  "Processes the given actions"
  [game player & raw-actions]
  (process-actions game player raw-actions))

