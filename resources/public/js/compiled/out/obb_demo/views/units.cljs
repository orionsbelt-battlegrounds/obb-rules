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
    [:ul
     [:li "Attack: " (unit/unit-attack unit)]
     [:li "Attack Type: " (name (unit/attack-type unit))]
     [:li "After Attack: " (map #(name (first %)) (:after-attack unit))]
     [:li "Range: " (unit/unit-range unit)]
     [:li]
     [:li "Defense: " (unit/unit-defense unit)]
     [:li "After hit: " (map #(name (first %)) (:after-hit unit))]
     [:li]
     [:li "Movement Type: " (name (unit/unit-movement-type unit))]
     [:li "Movement Cost: " (unit/unit-movement-cost unit)]
     [:li]
     [:li "Type: " (name (unit/unit-type unit))]
     [:li "Category: " (name (unit/unit-category unit))]
     [:li "Displacement: " (name (unit/unit-displacement unit))]
     [:li]
     [:li "Value: " (unit/unit-value unit)]
     ]]])

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
     [unit-info-panel (unit/fetch (or (:units state) :rain))]]]])
