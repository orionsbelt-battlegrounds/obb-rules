(ns ^:figwheel-always obb-demo.core
  (:require [reagent.core :as reagent]
            [secretary.core :as secretary]
            [obb-demo.game :as game]
            [obb-demo.routes :as routes]
            [obb-demo.views.index :as index-view]))

(enable-console-print!)

(defn on-js-reload []
  (println "Reloaded...")
  (reagent/render-component [index-view/render] (. js/document (getElementById "app"))))

(defn init []
  (secretary/set-config! :prefix "#")
  (secretary/dispatch! "/")
  (on-js-reload))

(defonce start
  (init))
