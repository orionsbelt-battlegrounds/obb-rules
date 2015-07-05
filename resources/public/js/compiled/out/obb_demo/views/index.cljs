(ns obb-demo.views.index
  (:require [obb-demo.game :as game]
            [obb-demo.views.layout.header :as header]
            [obb-demo.views.layout.footer :as footer]))

(defn render
  ([]
   [render @game/app-state])
  ([game]
   [:div
    [header/render]
    [:div.container
     [:div.bs-docs-section.clearfix
      "TODO"]
      [footer/render]]]))
