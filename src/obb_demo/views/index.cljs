(ns obb-demo.views.index
  (:require [obb-demo.game :as game]))

(defn render
  ([]
   [render @game/app-state])
  ([game]
   [:h1 "Orion's Belt BattleGrounds"]))
