(ns obb-demo.views.many-games
  (:require [obb-demo.state :as state]
            [obb-rules.game :as game]
            [obb-rules.stash :as stash]
            [obb-rules.math :as math]
            [obb-demo.views.power-bar :as power-bar]
            [obb-demo.processor :as processor]
            [obb-rules.evaluator :as evaluator]
            [obb-rules.turn :as turn]
            [obb-rules.result :as result]
            [obb-demo.boardground :as boardground]))

(defn- get-games-data
  "Gets the current games or setups them"
  [state]
  (if-let [datas (:many-games state)]
    datas
    (let [games (take 6 (repeatedly processor/deployed-game))
          datas (mapv (fn [game] {:game game}) games)]
      (state/set-page-data! datas)
      datas)))

(defn- restart-game
  "Generates and restarts a new game"
  []
  (state/set-page-data! nil))

(defn render
  [state]
  (let [datas (get-games-data state)]
    [:div.row
      [:div.col-lg-12
       (for [game-data datas]
        [:div.col-lg-4 {:key (rand-int 10000)}
         (power-bar/render (:game game-data))
         [boardground/render {} game-data]])]]))
