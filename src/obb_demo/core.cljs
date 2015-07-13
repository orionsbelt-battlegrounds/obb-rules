(ns ^:figwheel-always obb-demo.core
  (:require [reagent.core :as reagent]
            [secretary.core :as secretary]
            [obb-demo.state :as state]
            [obb-demo.routes :as routes]
            [obb-rules.game :as game]
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

(defn- tick
  "Processes CPU plays"
  []
  (when (and (= :index (state/current-page)))
    (let [game-data (state/get-page-data)
          game (:game game-data)
          player (game/state game)
          actions (firingsquad/actions game player)
          result (turn/process-actions game player actions)
          new-game (result/result-board result)]
      #_(println player actions (result/succeeded? result))
      (state/set-page-data! (assoc game-data :game new-game)))
    (js/setTimeout (get-tick) 5000)))


(defn init []
  (secretary/set-config! :prefix "#")
  (secretary/dispatch! "/")
  (js/setTimeout tick 1000)
  (on-js-reload))

(defonce start
  (init))
