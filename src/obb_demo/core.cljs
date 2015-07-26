(ns ^:figwheel-always obb-demo.core
  (:require [reagent.core :as reagent]
            [secretary.core :as secretary]
            [obb-demo.state :as state]
            [obb-demo.routes :as routes]
            [obb-rules.game :as game]
            [obb-demo.boardground :as boardground]
            [obb-rules.result :as result]
            [obb-demo.processor :as processor]
            [obb-rules.turn :as turn]
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
  (cond
    (and (= :many-games (state/current-page)))
    (let [games-data (state/get-page-data)
          new-games-data (mapv processor/auto-process-game-data games-data)]
      (state/set-page-data! new-games-data)
      (js/setTimeout (get-tick) 100))

    (and (= :index (state/current-page)))
    (let [game-data (state/get-page-data)
          new-game-data (processor/auto-process-game-data game-data)]
      (state/set-page-data! new-game-data)
      (js/setTimeout (get-tick) (or (:delay game-data) 50)))

    :else
    (js/setTimeout (get-tick) 1000)))


(defn init []
  (secretary/set-config! :prefix "#")
  (secretary/dispatch! "/play")
  (js/setTimeout tick 1000)
  (on-js-reload))

(defonce start
  (init))
