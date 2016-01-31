(ns obb-demo.views.play
  (:require [obb-demo.state :as state]
            [obb-rules.game :as game]
            [obb-rules.stash :as stash]
            [obb-demo.processor :as processor]
            [obb-demo.views.power-bar :as power-bar]
            [obb-rules.math :as math]
            [obb-rules.evaluator :as evaluator]
            [obb-rules.turn :as turn]
            [obb-rules.result :as result]
            [obb-demo.boardground :as boardground]))

(defn- tune-up
  "Prepare the game before deploying"
  [game]
  #_(assoc-in game [:stash :p1] (dissoc (get-in game [:stash :p1]) :crusader))
  game)

(defn- get-game-data
  "Gets the current game or creates a new one"
  [state]
  (if-let [game (:index state)]
    game
    (let [game (processor/deployed-game)
          game-data {:game game}]
      (state/set-page-data! game-data)
      game-data)))

(defn- restart-game
  "Generates and restarts a new game"
  []
  (state/set-page-data! nil))

(defn- set-speed
  "Sets the actions delay speed"
  [delay-msecs]
  (let [game-data (state/get-page-data)
        current (or (:delay game-data) 100)
        new-delay (+ delay-msecs current)]
    (when (>= 1000 new-delay 50)
      (state/set-page-data! (assoc game-data :delay new-delay)))))

(defn- selected-player
  "Shows the player"
  [current-player expected]
  (if (= current-player expected)
    (if (= :p1 current-player)
      :span.label.label-success
      :span.label.label-info)
  :span.label.label-primary))

(defn- players
  "Displays the players and the current to play"
  [game]
  (let [player (game/state game)]
    [:div
      [(selected-player player :p2) "Firingsquad"]
      " vs "
      [(selected-player player :p1) "Firingsquad"]]))

(defn- game-turn
  "Displays the current turn"
  [game-data]
  [:ul.nav.nav-pills {:style {:margin-bottom "10px"}}
   [:li
    [:a "Turn "
     [:span.badge (:turn-num game-data)]]]])

(defn render
  [state]
  (let [game-data (get-game-data state)
        game (:game game-data)]
    [:div.row
      [:div.col-lg-2
       (game-turn game-data)
       (players game)
       (power-bar/render game)]
      [:div.col-lg-5
        [boardground/render {} game-data]]
      [:div.col-lg-2
       [:div.panel.panel-default
        [:div.panel-heading
         [:h3.panel-title "Options"]]
        [:div.panel-body
         [:button.btn.btn-primary {:on-click restart-game} "Restart game"]
         [:button.btn.btn-primary {:on-click (partial set-speed -100)} "More speed"]
         [:button.btn.btn-primary {:on-click (partial set-speed 100)} "Less speed"]
         [:div.well.well-sm (or (:delay game-data) 100) " millis per action"]
         ]]

       [:div.panel.panel-info
        [:div.panel-heading
         [:h3.panel-title "Preview"]]
        [:div.panel-body
          [boardground/render {} game-data]]]]]))
