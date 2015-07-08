(ns obb-demo.state
  (:require [reagent.core :as reagent]))

(defonce app-state
  (reagent/atom {}))

(defn set-page!
  "Sets the current page to be displayed"
  [page page-fn]
  (reset! app-state {:page page
                     :page-fn page-fn}))

(defn set-page-data!
  "Sets data for the current page"
  [data]
  (swap! app-state assoc :page-data data))

