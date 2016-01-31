(ns obb-demo.views.layout.footer)

(defn render
  []
  [:footer
   [:div.row
    [:div.col-lg-12
     [:ul.list-unstyled
      [:li.pull-right [:a {:href "https://github.com/orionsbelt-battlegrounds/obb-rules"} "Source Code"]]
      [:li [:a {:href "#"} "Home"]]]
     [:p "Orion's Belt: chess-like battle system with a powerful twist!"]
     [:p [:a {:href "https://twitter.com/orionsbelt"} "Twitter: @orionsbelt"]]
     [:p "Design: " [:a {:href "http://bootswatch.com/slate/"} "Slate"] "'s theme."]]]])
