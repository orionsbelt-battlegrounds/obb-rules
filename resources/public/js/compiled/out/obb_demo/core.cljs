(ns ^:figwheel-always obb-demo.core
  (:require [reagent.core :as reagent]
            [obb-demo.game :as game]
            [obb-demo.views.index :as index-view]))

(enable-console-print!)

(defn on-js-reload []
  (println "Reloaded...")
  (reset! game/app-state (game/new-game))
  (reagent/render-component [index-view/render] (. js/document (getElementById "app"))))

(defn init []
  (on-js-reload))

(defonce start
  (init))
