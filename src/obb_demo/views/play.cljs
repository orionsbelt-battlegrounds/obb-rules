(ns obb-demo.views.play
  (:require [obb-demo.state :as state]
            [obb-rules.game :as game]
            [obb-rules.turn :as turn]
            [obb-rules.result :as result]
            [obb-demo.boardground :as boardground]))

(defn- deployed-game
  "Creates a deployed game"
  []

  (-> (game/random)
      (turn/process-actions :p1 [[:auto-deploy :firingsquad]])
      (result/result-board)
      (turn/process-actions :p2 [[:auto-deploy :firingsquad]])
      (result/result-board)))

(defn- get-game-data
  "Gets the current game or creates a new one"
  [state]
  (if-let [game (:index state)]
    game
    (let [game (deployed-game)
          game-data {:game game}]
      (state/set-page-data! game-data))))

(defn render
  [state]
  (let [game-data (get-game-data state)
        game (:game game-data)]
    [:div.row
      [:div.col-lg-5
        [boardground/render {} game]]
      [:div.col-lg-2
        [boardground/render {} game]]]))