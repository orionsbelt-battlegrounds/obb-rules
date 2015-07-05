(ns obb-demo.views.layout.header)

(defn render
  []
  [:div.navbar.navbar-default.navbar-fixed-top
   [:div.container
    [:div.navbar-header
     [:a.navbar-brand {:href "#"} "Orion's Belt BattleGrounds"]]
    [:ul.nav.navbar-nav.navbar-right
      [:li [:a {:href "https://github.com/orionsbelt-battlegrounds/obb-rules"} "About"]]]]
   ])

