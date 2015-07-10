(ns obb-demo.views.play
  (:require [obb-demo.state :as state]
            [obb-rules.game :as game]
            [obb-rules.turn :as turn]
            [obb-rules.result :as result]
            [obb-demo.boardground :as boardground]))

(defn render
  [state]
  (let [game (game/random)
        result (turn/process-actions game :p1 [[:auto-deploy :firingsquad]])
        game2 (result/result-board result)
        result2 (turn/process-actions game2 :p2 [[:auto-deploy :firingsquad]])
        game2 (result/result-board result2)]
    [:div.row
      [:div.col-lg-5
        [boardground/render {} game2]]
      [:div.col-lg-3
        [boardground/render {} game2]]
      [:div.col-lg-2
        [boardground/render {} game2]]
      [:div.col-lg-1
        [boardground/render {} game2]]]))
