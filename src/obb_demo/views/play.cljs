(ns obb-demo.views.play
  (:require [obb-demo.state :as state]
            [obb-rules.game :as game]
            [obb-rules.stash :as stash]
            [obb-rules.turn :as turn]
            [obb-rules.result :as result]
            [obb-demo.boardground :as boardground]))

(defn- tune-up
  "Prepare the game before deploying"
  [game]
  #_(assoc-in game [:stash :p1] (dissoc (get-in game [:stash :p1]) :crusader))
  game)

(defn- deployed-game
  "Creates a deployed game"
  []
  (-> (stash/create :rain 100
                    :raptor 100
                    :pretorian 40
                    :vector 50
                    :eagle 50
                    :kamikaze 50
                    :fenix 25
                    :crusader 25)
      (game/create)
      (tune-up)
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
      (state/set-page-data! game-data)
      game-data)))

(defn render
  [state]
  (let [game-data (get-game-data state)
        game (:game game-data)]
    [:div.row
      [:div.col-lg-5
        [boardground/render {} game-data]]
      [:div.col-lg-2
        [boardground/render {} game-data]]]))
