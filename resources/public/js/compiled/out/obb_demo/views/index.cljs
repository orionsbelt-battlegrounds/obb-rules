(ns obb-demo.views.index
  (:require [obb-demo.state :as state]
            [obb-demo.views.units :as units-view]
            [obb-demo.views.many-games :as many-games-view]
            [obb-demo.views.play :as play-view]
            [obb-demo.views.player :as player-view]
            [obb-demo.views.layout.header :as header]
            [obb-demo.views.layout.footer :as footer]))

(defn- current-page [state]
  (let [page (:page state)]
    (cond
      (= :units page) (units-view/render state)
      (= :player page) (player-view/render state)
      (= :many-games page) (many-games-view/render state)
      :else (play-view/render state))))

(defn render
  ([]
   [render @state/app-state])
  ([state]
   [:div
    [header/render]
    [:div.container
     [:div.bs-docs-section.clearfix
      (current-page state)]
      [footer/render]]]))
