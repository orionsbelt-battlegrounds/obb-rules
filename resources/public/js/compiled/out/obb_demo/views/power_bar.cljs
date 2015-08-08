(ns obb-demo.views.power-bar
  (:require [obb-demo.state :as state]
            [obb-rules.game :as game]
            [obb-rules.stash :as stash]
            [obb-demo.processor :as processor]
            [obb-rules.math :as math]
            [obb-rules.evaluator :as evaluator]
            [obb-rules.turn :as turn]
            [obb-rules.result :as result]
            [obb-demo.boardground :as boardground]))

(defn render
  "Shows each player's power"
  [game]
  (let [[p1 p2] (evaluator/eval-game game)
        total (+ p1 p2)
        p1-perc (math/ceil (* 100 (/ (- total p1) total)))
        p2-perc (- 100 p1-perc)]
    [:div.progress {:style {:margin-top "10px"}}
     [:div.progress-bar.progress-bar-info {:style {:width (str p1-perc "%")}} p1-perc]
     [:div.progress-bar.progress-bar-success {:style {:width (str p2-perc "%")}} p2-perc]]))

