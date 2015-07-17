(ns ^:figwheel-always obb-demo.core
  (:require [reagent.core :as reagent]
            [secretary.core :as secretary]
            [obb-demo.state :as state]
            [obb-demo.routes :as routes]
            [obb-rules.game :as game]
            [obb-demo.boardground :as boardground]
            [obb-rules.game-mode :as game-mode]
            [obb-rules.result :as result]
            [obb-rules.turn :as turn]
            [obb-rules.ai.firingsquad :as firingsquad]
            [obb-demo.views.index :as index-view]))

(enable-console-print!)

(defn on-js-reload []
  (println "Reloaded...")
  (reagent/render-component [index-view/render] (. js/document (getElementById "app"))))

(declare tick)
(defn- get-tick [] tick)

(defn- generate-actions
  "Generates actions to be processed"
  [game-data]
  (let [game (:game game-data)
        turn-num (or (:turn-num game-data) 0)
        player (game/state game)
        actions (firingsquad/actions game player)]
    (println "--" player actions)
    (-> (assoc game-data :actions actions)
        (assoc :turn-num (if (= :final player)
                           turn-num
                           (inc turn-num))))))

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
          (when-not (result/succeeded? result)
            (println result))
          (-> (assoc game-data :game new-game)
              (dissoc :action)
              (assoc :actions (rest actions))))
        (-> (assoc game-data :action (first actions))
            #_(boardground/with-selected-element (nth (first actions) 1))
            #_())))))

(defn- tick
  "Processes CPU plays"
  []
  (when (and (= :index (state/current-page)))
    (let [game-data (state/get-page-data)
          new-game-data (if (:actions game-data)
                          (process-actions game-data)
                          (generate-actions game-data))]
      (state/set-page-data! new-game-data)
      (js/setTimeout (get-tick) (or (:delay game-data) 50)))))

(defn init []
  (secretary/set-config! :prefix "#")
  (secretary/dispatch! "/")
  (js/setTimeout tick 1000)
  (on-js-reload))

(defonce start
  (init))
