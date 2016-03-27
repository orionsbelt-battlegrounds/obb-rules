(ns obb-demo.processor
  (:require [obb-demo.state :as state]
            [obb-rules.game :as game]
            [obb-rules.game-progress :as game-progress]
            [obb-rules.stash :as stash]
            [obb-rules.math :as math]
            [obb-rules.simplifier :as simplifier]
            [obb-rules.game-mode :as game-mode]
            [obb-rules.evaluator :as evaluator]
            [obb-rules.ai.firingsquad :as firingsquad]
            [obb-rules.ai.alamo :as alamo]
            [obb-rules.turn :as turn]
            [obb-rules.result :as result]))

(defn- new-game
  "Creates a new game"
  [& [{:as options} :as args]]
  (game-progress/new-random-game options)
  #_(-> {:p1 (stash/create :rain 100
                           :raptor 100
                           :pretorian 40
                           :vector 40
                           :eagle 50
                           :kamikaze 50
                           :fenix 25
                           :crusader 25)
         :p2 (stash/create :rain 100
                           :raptor 100
                           :pretorian 40
                           :vector 40
                           :eagle 50
                           :kamikaze 50
                           :fenix 25
                           :crusader 25)}
      (game-progress/new-game)))

(defn deployed-game
  "Creates a deployed game"
  [& [{:as options} :as args]]
  (-> (new-game options)
      (turn/process-actions :p1 [[:auto-deploy :firingsquad]])
      (result/result-board)
      (turn/process-actions :p2 [[:auto-deploy :firingsquad]])
      (result/result-board)
      (game/start-battle :p1)))

(defn- bot-actions
  "Gets actions"
  [game player]
  ;; (alamo/actions game player)
  (if (= :p1 player)
    (firingsquad/actions game player)
    (firingsquad/actions game player)))

(defn- generate-actions
  "Generates actions to be processed"
  [game-data]
  (let [game (:game game-data)
        turn-num (or (:turn-num game-data) 0)
        player (game/state game)
        actions (time (bot-actions game player))]
    #_(println "game" (simplifier/clean-result {:board game}))
    (println "--" player actions)
    (if (= :final (game/state game))
      {:game (deployed-game {:mode (get game-data :mode :annihilation)})}
      (-> (assoc game-data :actions actions)
          (assoc :original-actions actions)
          (assoc :history (conj (vec (get game-data :history (:history game)))
                                {:player player :actions actions}))
          (assoc :turn-num (if (= :final player)
                             turn-num
                             (inc turn-num)))))))

(defn- process-actions
  "Processes actions"
  [game-data]
  (let [actions (:actions game-data)
        game (:game game-data)]
    (if (empty? actions)
      (-> (assoc game-data :game (-> (game-progress/next-stage game)
                                     (dissoc :action-results)))
          (dissoc :actions))
      (if-let [action (:action game-data)]
        (let [player (game/state game)
              result (turn/simulate-actions game player [action] true)
              new-game (result/result-board result)]
          #_(println player action)
          (if-not (result/succeeded? result)
            (do (println result)
                (assoc game-data :delay 100000)
                #_(-> (assoc-in game-data [:game :state] :final)
                    (dissoc :action)
                    (dissoc :actions)))
            (-> (assoc game-data :game new-game)
                (dissoc :action)
                (assoc-in [:game :history] (:history game-data))
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

