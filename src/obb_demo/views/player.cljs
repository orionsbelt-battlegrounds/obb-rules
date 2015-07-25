(ns obb-demo.views.player
  (:require [obb-demo.state :as state]
            [obb-rules.game :as game]
            [obb-rules.stash :as stash]
            [obb-demo.processor :as processor]
            [obb-demo.views.power-bar :as power-bar]
            [obb-rules.ai.firingsquad :as firingsquad]
            [obb-rules.math :as math]
            [obb-rules.game-mode :as game-mode]
            [obb-rules.laws :as laws]
            [obb-rules.evaluator :as evaluator]
            [obb-rules.turn :as turn]
            [obb-rules.result :as result]
            [obb-demo.boardground :as boardground]))

(defn- get-game-data
  "Gets the current game or creates a new one"
  [state]
  (if-let [game (:player state)]
    game
    (let [game (-> (processor/deployed-game)
                   (game/state :p1))
          game-data {:game game
                     :original-game game
                     :action-points 0
                     :turn-num 0}]
      (state/set-page-data! game-data)
      game-data)))

(defn- restart-game
  "Generates and restarts a new game"
  []
  (state/set-page-data! nil))

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
      [(selected-player player :p1) "Player 1"]]))

(defn- game-turn
  "Displays the current turn"
  [game-data]
  [:ul.nav.nav-pills {:style {:margin-bottom "10px"}}
   [:li
    [:a "Turn "
     [:span.badge (:turn-num game-data)]]]])

(defn- action-points
  "Displays the current turn"
  [game-data]
  [:ul.nav.nav-pills {:style {:margin-bottom "10px"}}
   [:li
    [:a "Action Points "
     [:span.badge (- laws/max-action-points (:action-points game-data))]]]])

(defn- reset-turn
  "Resets the actions on the current turn"
  [game-data]
  (state/set-page-data! {:game (dissoc (:original-game game-data) :action-results)
                         :original-game (:original-game game-data)
                         :previous-game (:original-game game-data)
                         :action-points 0
                         :turn-num 0}))

(defn- play-turn
  "Resets the actions on the current turn"
  [game-data]
  (let [player :p1
        game (-> (:game game-data)
                 (game-mode/process)
                 (dissoc :action-results))
        actions (firingsquad/actions game :p2)
        result (turn/process-actions game :p2 actions)]
    (println actions)
    (if (result/succeeded? result)
      (let [new-game (result/result-board result)
            clean-game (dissoc new-game :action-results)]
        (state/set-page-data! {:game clean-game
                               :original-game new-game
                               :previous-game new-game
                               :action-points 0
                               :turn-num 0}))
        (println result))))

(defn render
  [state]
  (let [game-data (get-game-data state)
        game (:game game-data)]
    [:div.row
      [:div.col-lg-2
       (game-turn game-data)
       (players game)
       (power-bar/render game)
       (action-points game-data)
       [:button.btn.btn-primary {:on-click (partial play-turn game-data)} "Play turn"]
       [:button.btn.btn-default {:on-click (partial reset-turn game-data)} "Reset turn"]]
      [:div.col-lg-5
        [boardground/render {} game-data]]]))
