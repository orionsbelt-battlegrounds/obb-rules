(ns obb-demo.views.player
  (:require [obb-demo.state :as state]
            [obb-rules.game :as game]
            [obb-rules.element :as element]
            [obb-rules.actions.move :as move]
            [obb-rules.stash :as stash]
            [obb-rules.simplifier :as simplify]
            [obb-rules.unit :as unit]
            [obb-rules.host-dependent :as host]
            [obb-rules.serializer.writer :as writer]
            [obb-rules.serializer.reader :as reader]
            [obb-demo.processor :as processor]
            [obb-demo.views.power-bar :as power-bar]
            [obb-rules.ai.firingsquad :as firingsquad]
            [obb-rules.ai.alamo :as alamo]
            [obb-rules.math :as math]
            [obb-rules.game-mode :as game-mode]
            [obb-rules.game-progress :as game-progress]
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
                     :history (:history game)
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
  [game-data game]
  (let [player (game/state game)]
    [:div
      [(selected-player player :p2) (or (:bot game-data) "Firingsquad")]
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
  (state/set-page-data! {:game (-> (:original-game game-data)
                                   (dissoc :action-results)
                                   (dissoc :removed-elements))
                         :original-game (:original-game game-data)
                         :previous-game (:original-game game-data)
                         :previous-player :p2
                         :history (:history game-data)
                         :bot (:bot game-data)
                         :action-points 0
                         :turn-num 0}))

(defn- bot-turn
  [game-data game]
  (if (= "Alamo" (:bot game-data))
    (do
      (println "Alamo")
      (alamo/actions game :p2))
    (firingsquad/actions game :p2)))

(defn- play-turn
  "Resets the actions on the current turn"
  [game-data]
  (let [player :p1
        game (-> (:game game-data)
                 (game-progress/next-stage)
                 (dissoc :action-results))
        turn-num (:turn-num game-data)
        actions (time (bot-turn game-data game))
        result (turn/process-actions game :p2 actions)]
    (if (result/succeeded? result)
      (let [new-game (result/result-board result)
            clean-game (dissoc new-game :action-results)]
        (state/set-page-data! {:game clean-game
                               :original-game new-game
                               :previous-game new-game
                               :history (:history clean-game)
                               :previous-player :p2
                               :bot (:bot game-data)
                               :action-points 0
                               :turn-num (+ 1 turn-num)}))
        (println result))))

(defn- rotate-button
  "Rotate button display"
  [game-data direction]
  [:button.btn.btn-default {:disabled (not (:selected-element game-data))
                            :on-click (partial rotate-selected game-data direction)}
   (nth (name direction) 0)])

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

(defn- rotate-panel
  "Rotate options"
  [game-data]
     [:div.panel.panel-default
      [:div.panel-heading
       [:h3.panel-title "Rotate"]]
      [:div.panel-body
       (rotate-button game-data :west)
       (rotate-button game-data :east)
       (rotate-button game-data :north)
       (rotate-button game-data :south)
       ]]
  )

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

(defn- selected-element-info
  "Adds docs"
  [game-data]
  (if-let [element (:selected-element game-data)]
    (let [unit (element/element-unit element)]
     [:div.panel.panel-info {:style {:margin-top "20px"}}
      [:div.panel-heading
       [:h3.panel-title (str "Selected element: " (unit/unit-name unit))]]
      [:div.panel-body
       [:div.row
        [:div.col-lg-4
         [:ul.list-group
          [:li.list-group-item [:span.badge (unit/unit-attack unit)] "Attack"]
          [:li.list-group-item [:span.badge (name (unit/attack-type unit))] "Type"]
          [:li.list-group-item [:span.badge (unit/unit-range unit)] "Range"]
          (when (:after-attack unit)
            [:li.list-group-item [:span.badge (map #(name (first %)) (:after-attack unit))] "Powers"])]]

        [:div.col-lg-4
         [:ul.list-group
          [:li.list-group-item [:span.badge (unit/unit-defense unit)] "Defense"]
          (when (:after-hit unit)
            [:li.list-group-item [:span.badge (map #(name (first %)) (:after-hit unit))] "Powers"])
          [:li.list-group-item [:span.badge (name (unit/unit-category unit))] "Category"]]]

        [:div.col-lg-4
         [:ul.list-group
          [:li.list-group-item [:span.badge (name (unit/unit-movement-type unit))] "Movement"]
          [:li.list-group-item [:span.badge (unit/unit-movement-cost unit)] "Movement cost"]]]

        ]
       ]]
  )))

(defn- set-bot
  "Sets the current bot to play"
  [game-data ev]
  (if (= 0 (-> ev .-target .-selectedIndex))
    (state/set-page-data! (assoc game-data :bot "Firingsquad"))
    (state/set-page-data! (assoc game-data :bot "Alamo"))))

(defn- challenger-selector
  "Selects the bot to play"
  [game-data]
  [:select {:value (or (:bot game-data) "Firingsquad")
            :on-change (partial set-bot game-data)}
   [:option "Firingsquad"]
   [:option "Alamo"]])

(defn- game-str-changed
  "Called then the textarea with the game str is changed by the user"
  [game-data ev]
  (state/set-page-data! (assoc game-data :game-str (-> ev .-target .-value))))

(defn- load-game-str
  "Loads the game from a string on the game data"
  [game-data]
  (let [game-str (:game-str game-data)
        new-game (reader/str->game game-str)]
    (state/set-page-data!
      (-> game-data
          (dissoc :game-str)
          (assoc :game new-game)))))

(defn- game-as-string
  [game-data]
  [:div.row
    [:textarea {:style {:height "500px"}
                :class "form-control"
                :on-change (partial game-str-changed game-data)
                :value (or (:game-str game-data)
                           (writer/game->str (:game game-data)))}]
    [:button.btn.btn-primary {:on-click (partial load-game-str game-data)} "Load"]])

(defn render
  [state]
  (let [game-data (get-game-data state)
        game (:game game-data)]
    [:div
      [:div.well
        [:h4 "Demo"]
        [:p "This is a demo that showcases the gameplay of Orion's Belt against a simple AI.
            It's your turn to play. Perform your actions and then click Play turn."]]
      [:div.row
        [:div.col-lg-2
         (challenger-selector game-data)
         (game-turn game-data)
         (players game-data game)
         (power-bar/render game)
         (action-points game-data)
         [:button.btn.btn-primary {:on-click (partial play-turn game-data)} "Play turn"]
         (unit-quantity-picker game-data)
         (rotate-panel game-data)
         [:button.btn.btn-default {:on-click (partial reset-turn game-data)} "Reset turn"]]
        [:div.col-lg-5
          [boardground/render {} game-data]
          (selected-element-info game-data)]
        [:div.col-lg-5
          (game-as-string game-data)]]]))
