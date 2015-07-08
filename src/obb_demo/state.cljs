(ns obb-demo.state
  (:require [reagent.core :as reagent]))

(defonce app-state
  (reagent/atom {:page :index}))
  ;(reset! game/app-state (game/new-game))

(defn set-page!
  "Sets the current page to be displayed"
  [page page-fn]
  (reset! app-state {:page page
                     :page-fn page-fn}))
