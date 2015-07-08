(ns ^:figwheel-always obb-demo.routes
  (:require [reagent.core :as reagent]
            [secretary.core :as secretary]
            [obb-demo.state :as state]
            [obb-demo.views.index :as index-view]
            [obb-demo.views.units :as units-view]
            [obb-demo.views.play :as play-view]))

(secretary/defroute "/" []
  (state/set-page! :index play-view/renderer))

(secretary/defroute "/units" []
  (state/set-page! :units units-view/renderer))
