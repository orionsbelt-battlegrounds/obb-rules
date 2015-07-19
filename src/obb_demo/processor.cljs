(ns obb-demo.processor
  (:require [obb-demo.state :as state]
            [obb-rules.game :as game]
            [obb-rules.stash :as stash]
            [obb-rules.math :as math]
            [obb-rules.game-mode :as game-mode]
            [obb-rules.evaluator :as evaluator]
            [obb-rules.ai.firingsquad :as firingsquad]
            [obb-rules.turn :as turn]
            [obb-rules.result :as result]))

(defn- new-game
  "Creates a new game"
  []
  (game/random)
  #_(-> (stash/create :rain 100
                    :raptor 100
                    :pretorian 40
                    :vector 50
                    :eagle 50
                    :kamikaze 50
                    :fenix 25
                    :crusader 25)
      (game/create)))

(defn deployed-game
  "Creates a deployed game"
  []
  (-> (new-game)
      (turn/process-actions :p1 [[:auto-deploy :firingsquad]])
      (result/result-board)
      (turn/process-actions :p2 [[:auto-deploy :firingsquad]])
      (result/result-board)))

(defn- generate-actions
  "Generates actions to be processed"
  [game-data]
  (let [game (:game game-data)
        turn-num (or (:turn-num game-data) 0)
        player (game/state game)
        actions (firingsquad/actions game player)]
    (println "--" player actions)
    (if (= :final (game/state game))
      {:game (deployed-game)}
      (-> (assoc game-data :actions actions)
          #_(assoc game-data :game game)
          (assoc :turn-num (if (= :final player)
                             turn-num
                             (inc turn-num)))))))

(defn- process-actions
  "Processes actions"
  [game-data]
  (let [actions (:actions game-data)
        game (:game game-data)]
    (if (empty? actions)
      (-> (assoc game-data :game (-> (game-mode/process game)
                                     (dissoc :action-results)))
          (dissoc :actions))
      (if-let [action (:action game-data)]
        (let [player (game/state game)
              result (turn/simulate-actions game player [action])
              new-game (result/result-board result)]
          #_(println player action)
          (if-not (result/succeeded? result)
            (do #_(println result)
                (-> (assoc-in game-data [:game :state] :final)
                    (dissoc :action)
                    (dissoc :actions)))
            (-> (assoc game-data :game new-game)
                (dissoc :action)
                (assoc :actions (rest actions)))))
        (-> (assoc game-data :action (first actions))
            #_(boardground/with-selected-element (nth (first actions) 1))
            #_())))))

(defn- auto-process-game-data
  "Uses the AI the process a game-data"
  [game-data]
  (if (:actions game-data)
    (process-actions game-data)
    (generate-actions game-data)))

