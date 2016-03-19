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

(defn- reset-action-specific-state
  "Resets state"
  [game cleanup?]
  (if cleanup?
    (-> (action/reset-action-specific-state game)
        (clojure.set/rename-keys {:action-results :previous-action-results
                                  :removed-elements :previous-removed-elements}))
    game))

(defn- history-action?
  "True if the action should be registered on the history"
  [raw-action]
  (not= :auto-deploy (first raw-action)))

(defn action-results->raw-actions
  "Gets the raw actions performed on the turn"
  [game]
  (->> (:action-results game)
       (map (fn [[raw-action action-result]]
              raw-action))
       (filter history-action?)))

(defn- register-history
  "Register the processes actions on the game's history"
  [game player]
  (if-let [turn-actions (seq (action-results->raw-actions game))]
    (update game :history #(conj (vec %) {:actions turn-actions
                                          :player player}))
    game))

(defn- create-result
  "Creates a result for the given game"
  ([game player total-action-points]
   (create-result game player total-action-points true))
  ([game player total-action-points cleanup?]
   (cond
     (not (game/valid-actions? game))
       (result/action-failed "ActionFailed" game)
     (> total-action-points laws/max-action-points)
       (result/action-failed "ActionPointsOverflow")
     :else
       (-> game
           (register-history player)
           (reset-action-specific-state cleanup?)
           (result/action-success total-action-points "TurnOK")))))

(defn simulate-actions
  "Simulates the given actions"
  ([game player raw-actions]
   (simulate-actions game player raw-actions false))
  ([game player raw-actions cleanup?]
   (if (seq raw-actions)
     (let [actions (map action-pair raw-actions)
           do-actions (partial apply-actions player)
           final (reduce do-actions game actions)
           action-points (points final)]
       (create-result final player action-points cleanup?))
     (result/action-failed "NoActions"))))

(defn process-actions
  "Processes the given actions"
  [game player raw-actions]
  (let [actions (map action-pair raw-actions)
        do-actions (partial apply-actions player)
        final-state (reduce do-actions game actions)
        final (game-mode/process final-state)
        action-points (points final)]
    (create-result final player action-points)))

(defn process-board-actions
  "Processes the given actions, returns only the board if successful"
  [game player raw-actions]
  (let [result (process-actions game player raw-actions)]
    (if (result/succeeded? result)
      (:board result)
      result)))

(defn process
  "Processes the given actions"
  [game player & raw-actions]
  (process-actions game player raw-actions))

(defn process-board
  "Processes the given actions, and if the turn succeeded, returns the
  new board"
  [game player & raw-actions]
  (process-board-actions game player raw-actions))

(defn process-history
  "Processes history items into the game"
  [game history]
  (reduce (fn [game history-item]
            (let [curr-player (:player history-item)
                  actions (:actions history-item)
                  game (if (game/deploy? game) game (game/state game curr-player))
                  result (process-actions game curr-player actions)]
              (if (result/succeeded? result)
                (:board result)
                (reduced result))))
          game
          history))
