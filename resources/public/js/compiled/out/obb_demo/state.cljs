(ns obb-demo.state
  (:require [reagent.core :as reagent]))

(defonce app-state
  (reagent/atom {}))

(defn set-page!
  "Sets the current page to be displayed"
  [page]
  (swap! app-state assoc :page page))

(defn current-page
  "Gets the current page"
  []
  (:page @app-state))

(defn set-page-data!
  "Sets data for the current page"
  [data]
  (swap! app-state assoc (current-page) data))

(defn get-page-data
  "Gets the data of the current page"
  []
  (get @app-state (current-page)))

