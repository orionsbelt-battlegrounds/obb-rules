(ns obb-demo.views.player
  (:require [obb-demo.state :as state]
            [obb-rules.game :as game]
            [obb-rules.element :as element]
            [obb-rules.actions.move :as move]
            [obb-rules.stash :as stash]
            [obb-rules.host-dependent :as host]
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

(defn- rotate-selected
  "Rotates the selected element"
  [game-data direction]
  (let [game (:game game-data)
        selected-coord (:selected-coord game-data)
        player (element/element-player (:selected-element game-data))
        action [:rotate selected-coord direction]]
    (boardground/register-action game-data game player action selected-coord)))

(defn- reset-turn
  "Resets the actions on the current turn"
  [game-data]
  (state/set-page-data! {:game (dissoc (:original-game game-data) :action-results)
                         :original-game (:original-game game-data)
                         :previous-game (:original-game game-data)
                         :previous-player :p2
                         :action-points 0
                         :turn-num 0}))

(defn- play-turn
  "Resets the actions on the current turn"
  [game-data]
  (let [player :p1
        game (-> (:game game-data)
                 (game-mode/process)
                 (dissoc :action-results))
        turn-num (:turn-num game-data)
        actions (firingsquad/actions game :p2)
        result (turn/process-actions game :p2 actions)]
    (println actions)
    (if (result/succeeded? result)
      (let [new-game (result/result-board result)
            clean-game (dissoc new-game :action-results)]
        (state/set-page-data! {:game clean-game
                               :original-game new-game
                               :previous-game new-game
                               :previous-player :p2
                               :action-points 0
                               :turn-num (+ 1 turn-num)}))
        (println result))))

(defn- rotate-button
  "Rotate button display"
  [game-data direction]
  [:button.btn.btn-default {:disabled (not (:selected-element game-data))
                            :on-click (partial rotate-selected game-data direction)}
   (str "Rotate " direction)])

(defn- selected-element-quantity
  "Gets the quantity of the selected element, or 0 it no element is
  selected"
  [game-data]
  (if-let [element (:selected-element game-data)]
    (element/element-quantity element)
    0))

(defn- parse-ev-quantity
  "Parses the quantity on the given event"
  [ev]
  (let [raw-quantity (-> ev .-target .-value)]
    (if (empty? raw-quantity)
      "0"
      raw-quantity)))

(defn- quantity-changed
  "Runs when the quantity changes"
  [game-data ev]
  (let [total-quantity (element/element-quantity (:selected-element game-data))
        quantity (parse-ev-quantity ev)]
    (if (move/invalid-move-percentage? total-quantity quantity)
      (state/set-page-data! (-> (assoc game-data :selected-quantity-error true)
                                (assoc :selected-quantity quantity)))
      (state/set-page-data! (-> (assoc game-data :selected-quantity quantity)
                                (dissoc :selected-quantity-error))))))


(defn- unit-quantity-picker
  "Specifies the units to move"
  [game-data]
  (let [quantity (:selected-quantity game-data)
        invalid-quantity? (:selected-quantity-error game-data)]
     [:div.panel.panel-default
      [:div.panel-heading
       [:h3.panel-title "Move quantity"]]
      [:div.panel-body
       [(keyword (str "div.form-group" (if invalid-quantity? ".has-error" ".has-success")))
         [:input.form-control {:on-change (partial quantity-changed game-data)
                               :disabled (nil? quantity)
                               :type "text"
                               :value quantity}]
         (when invalid-quantity?
           (let [total-quantity (element/element-quantity (:selected-element game-data))
                 min-quantity (math/ceil (* total-quantity laws/min-move-percentage))
                 max-quantity (math/floor (* total-quantity laws/max-move-percentage))]
            [:p (str "Move must be " min-quantity " to " max-quantity " or " total-quantity)]))]
       ]]
    ))

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
       (unit-quantity-picker game-data)
       (rotate-button game-data :west)
       (rotate-button game-data :east)
       (rotate-button game-data :north)
       (rotate-button game-data :south)
       [:button.btn.btn-default {:on-click (partial reset-turn game-data)} "Reset turn"]]
      [:div.col-lg-5
        [boardground/render {} game-data]]]))
