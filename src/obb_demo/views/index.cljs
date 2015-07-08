(ns obb-demo.views.index
  (:require [obb-demo.state :as state]
            [obb-demo.views.layout.header :as header]
            [obb-demo.views.layout.footer :as footer]))

(defn render
  ([]
   [render @state/app-state])
  ([state]
   [:div
    [header/render]
    [:div.container
     [:div.bs-docs-section.clearfix
      [((:page-fn state))]]
      [footer/render]]]))
