(ns obb-demo.views.units
  (:require [obb-rules.unit :as unit]
            [obb-demo.state :as state]))

(defn- unit-info-panel
  "Writes info about a unit"
  [unit]
  [:div.panel.panel-info
   [:div.panel-heading
    [:h3.panel-title (unit/unit-name unit)]]
   [:div.panel-body
    "waza"]])

(defn- units-panel
  "Writes a panel with units by category"
  [category]
  [:div.panel.panel-primary
   [:div.panel-heading
    [:h3.panel-title (name category)]]
   [:div.panel-body
    [:ul.units
      (for [unit (unit/units-by-category category)]
        (let [unit-name (unit/unit-name unit)
              url (str "http://orionsbelt.eu/public/units/" unit-name  "_n.png")]
           [:li {:key unit-name}
            [:img {:src url
                   :on-click #(state/set-page-data! unit-name)
                   :alt unit-name}]]))]]])

(defn- units-ul []
  [:div
   [units-panel :light]
   [units-panel :medium]
   [units-panel :heavy]])

(defn render
  [state]
  [:div
   [:div.row
    [:div.col-lg-4
     [units-ul]]
    [:div.col-lg-8
     [unit-info-panel (unit/fetch (or (:page-data state) :rain))]]]])
