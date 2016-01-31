(ns obb-demo.boardground
  "Represents an OBB board game"
  (:require [obb-rules.board :as board]
            [obb-rules.actions.move :as move]
            [obb-rules.game :as game]
            [obb-rules.laws :as laws]
            [obb-rules.turn :as turn]
            [obb-rules.result :as result]
            [obb-rules.ai.common :as ai]
            [obb-demo.state :as state]
            [obb-rules.element :as element]
            [obb-rules.unit :as unit]))

(defn with-selected-element
  "Verifies and marks as selected an element on the given coordinate"
  [game-data coord]
  (let [game (:game game-data)
        element (board/get-element game coord)]
    (if (and element (not (element/frozen? element)))
      (-> game-data
          (assoc :possible-destinations (move/find-all-possible-destinations-with-cost game element))
          (assoc :possible-attacks (ai/find-possible-attacks game element))
          (assoc :selected-coord coord)
          (assoc :selected-element element)
          (assoc :selected-quantity (element/element-quantity element))
          (dissoc :previous-player)
          (dissoc :selected-quantity-error)
          (dissoc :previous-game))
      (-> game-data
          (dissoc :possible-destinations)
          (dissoc :possible-attacks)
          (dissoc :selected-coord)
          (dissoc :selected-quantity)
          (dissoc :selected-quantity-error)
          (dissoc :selected-element)))))

(defn- square-position
  "Calculates the position via left and bottom percentages"
  [x y]
  (let [x (- x 1)]
    {:left (str (* x 12.5) "%")
     :bottom (str (* (- 8 y) 12.5) "%")}))

(defn- direction
  "Gets a char code that represents the element's direction"
  [element]
  (let [dir (element/element-direction element)]
    (first (name dir))))

(defn- unit-image
  "Renders an html element that displays a board element's unit, if present
  at the given coordinates"
  [game element]
  (when element
    (let [unit (element/element-unit element)
          unit-name (unit/unit-name unit)]
      [:img.unit {:src (str "http://orionsbelt.eu/public/units/" unit-name  "_" (direction element) ".png")}])))

(defn- possible-cost?
  "True if something with the given cost is possible"
  [game-data cost]
  (let [action-points (or (:action-points game-data) 0)]
    (>= laws/max-action-points (+ action-points cost))))

(defn- possible-move
  "Renders an html element that displays a board element's unit, as if
  the unit could be moved to this square"
  [game-data coord element]
  (let [cost (get (:possible-destinations game-data) coord)]
    (if (and (nil? element)
             (not (nil? cost))
             (= coord (:overed-coord game-data))
             (possible-cost? game-data cost))
      (let [element (:selected-element game-data)
            unit (element/element-unit element)
            unit-name (unit/unit-name unit)]
        [:img.unit-possible-move {:src (str "http://orionsbelt.eu/public/units/" unit-name  "_" (direction element) ".png")}]))))

(defn- possible-attack
  "Renders an html element that displays a board element's unit, as if
  the unit could be attacked on this square"
  [game-data coord element]
  (let [cost (get (:possible-attacks game-data) coord)]
    (if (and (not (nil? element))
             (not (nil? cost))
             (= coord (:overed-coord game-data))
             (possible-cost? game-data 1))
      (let [element (:selected-element game-data)
            unit (element/element-unit element)
            unit-name (unit/unit-name unit)]
        [:img.unit-possible-attack {:src "http://orionsbelt.eu/public/battle/target.gif"}]))))

(defn- enemy-display
  "Returns an enemy indication if the given element is an enemy"
  [game element]
  (when element
    (let [player (element/element-player element)]
      (if (= player :p2)
        [:div.enemy]))))

(defn overed?
  "Checks if the given element is overed"
  [game-data element]
  (and element (= element (:overed-element game-data))))

(defn selected?
  "Checks if the given element is selected"
  [game-data element]
  (and element (= element (:selected-element game-data))))

(defn- selected-display
  "Square addon when given element is selected"
  [game-data element]
  (if (selected? game-data element)
    [(keyword (str "div.selected-" (name (element/element-player element))))]))

(defn- possible-destination
  "Display when given coord is a possible movement destination"
  [game-data coord]
  (if-let [cost (get (:possible-destinations game-data) coord)]
    (when (possible-cost? game-data cost)
      [:div.possible-destination
       #_[(keyword (str "span.label.label-"
                      (cond
                        (> cost 4) "danger"
                        (> cost 2) "warning"
                        :else "success")))
        cost]])))

(defn- possible-target
  "Display when given coord is a possible target for an attack"
  [game-data coord]
  (if-let [cost (get (:possible-attacks game-data) coord)]
    [:div.possible-target]))

(defn- player-label
  "Gets a label element for a player"
  [player]
  (if (= player :p1)
    :span.label.label-success
    :span.label.label-info))

(defn- element-quantity
  "Shows element quantity"
  [game-data element]
  (if (or (selected? game-data element)
          (overed? game-data element))
    [:div.element-quantity
     [(player-label (element/element-player element))
      (element/element-quantity element)]]))

(defn- action-coords
  "Gathers coordinates that participated in the action"
  [coords action-result]
  (let [raw-action (first action-result)
        action-name (first raw-action)]
    (cond
      (some #{action-name} [:move :goto]) (-> coords
                                              (conj (nth raw-action 1))
                                              (conj (nth raw-action 2)))
      (some #{action-name} [:rotate :attack]) (-> coords
                                              (conj (nth raw-action 1))
                                              #_(conj (nth raw-action 2)))
      :else coords)))

(defn- attacked-coords
  "Gathers coordinats that were attacked"
  [coords action-result]
  (let [raw-action (first action-result)
        action-name (first raw-action)]
    (cond
      (some #{action-name} [:attack]) (conj coords (nth raw-action 2))
      :else coords)))

(defn- get-action-results
  "Gets current action-results"
  [game-data]
  (or (get-in game-data [:game :action-results])
      (get-in game-data [:game :previous-action-results])
      (get-in game-data [:previous-game :action-results])))

(defn- action-participant
  "Indicates if the given coordinate particpated on an action"
  [game-data coord]
  (let [action-results (get-action-results game-data)
        actions (reduce action-coords [] action-results)
        did-something? (some #{coord} actions)]
  (when did-something?
    [(keyword (str "div.action-source.action-source-"
                   (name (or (:previous-player game-data)
                              (get-in game-data [:game :state])))))])))

(defn- attacked
  "Indicates if the given coordinate was attacked"
  [game-data coord element]
  (let [action-results (get-action-results game-data)
        actions (reduce attacked-coords [] action-results)
        attacked? (some #{coord} actions)]
    (when attacked?
      [:div.target
       [:div.attacked]])))

(defn- selected-coord?
  "True if the given data is selected"
  [game-data game coord elem]
  (and elem
       (not= coord (:selected-coord game-data))
       (= (element/element-player elem) (game/state game))))

(defn- goto?
  "Checks if click is goto"
  [game-data game coord elem]
  (and (nil? elem)
       (= (:selected-quantity game-data) (element/element-quantity (:selected-element game-data)))
       (get (:possible-destinations game-data) coord)))

(defn- move?
  "Checks if click is move"
  [game-data game coord elem]
  (and (nil? elem)
       (not= (:selected-quantity game-data) (element/element-quantity (:selected-element game-data)))
       (get (:possible-destinations game-data) coord)))

(defn register-action
  "Registers an action"
  [game-data game player action coord]
  (let [current-actions (:actions game-data)
        result (turn/simulate-actions game player [action])]
    (if (result/succeeded? result)
      (state/set-page-data! (-> game-data
                                (assoc :game (result/result-board result))
                                (assoc :action-points (+ (result/result-cost result)))
                                (assoc :actions (conj action current-actions))
                                (with-selected-element coord)))
      (println result))))

(defn- process-move
  "Processes a move action"
  [game-data game coord elem]
  (let [selected-coord (:selected-coord game-data)
        player (element/element-player (:selected-element game-data))
        quantity (:selected-quantity game-data)
        action [:move selected-coord coord quantity]]
    (register-action game-data game player action coord)))

(defn- process-goto
  "Processes a goto action"
  [game-data game coord elem]
  (let [selected-coord (:selected-coord game-data)
        player (element/element-player (:selected-element game-data))
        action [:goto selected-coord coord]]
    (register-action game-data game player action coord)))

(defn- attack?
  "Checks if click is attack"
  [game-data game coord elem]
  (and (not (nil? elem))
       (not (element/frozen? elem))
       (get (:possible-attacks game-data) coord)))

(defn- process-attack
  "Processes a goto action"
  [game-data game coord elem]
  (let [selected-coord (:selected-coord game-data)
        player (element/element-player (:selected-element game-data))
        action [:attack selected-coord coord]]
    (register-action game-data game player action selected-coord)))

(defn- square-clicked
  "Processes select square"
  [game-data game coord elem]
  (cond
    (goto? game-data game coord elem)
      (process-goto game-data game coord elem)
    (move? game-data game coord elem)
      (process-move game-data game coord elem)
    (attack? game-data game coord elem)
      (process-attack game-data game coord elem)
    (selected-coord? game-data game coord elem)
      (state/set-page-data! (with-selected-element game-data coord))
    :else
      (state/set-page-data! (with-selected-element game-data nil))))

(defn- square-overed
  "Processes hoverd square"
  [game-data game coord elem]
  (state/set-page-data! (-> (assoc game-data :overed-coord coord)
                            (assoc :overed-element elem))))

(defn- square
  "Renders a board square"
  [game-data x y]
  (let [game (:game game-data)
        coord [x y]
        element (board/get-element game coord)
        square-style (square-position x y)
        square-clicked (partial square-clicked game-data game coord element)]
    [:div.obb-square {:on-click square-clicked
                      :on-touch-start square-clicked
                      :on-mouse-over (partial square-overed game-data game coord element)
                      :key (str x y) :style square-style}
     (unit-image game element)
     (possible-move game-data coord element)
     (possible-attack game-data coord element)
     (selected-display game-data element)
     (possible-destination game-data coord)
     (action-participant game-data coord)
     (attacked game-data coord element)
     (possible-target game-data coord)
     (element-quantity game-data element)
     (enemy-display game element)]))

(defn- boardground-size
  "Gets the panel size stype"
  [options]
  (or (:boardground-style options)
      #_{:width "500px"
       :height "500px"}))

(defn- prepare-game-data
  "Specific preparations"
  [game-data]
  (let [game (:game game-data)
        state (game/state game)]
    game-data
    #_(with-selected-element game-data (if (= state :p1) [4 7] [4 2]))))

(defn render
  "Renders the full game's board"
  [options game-data]
  [:div.obb-board-panel {:style (boardground-size options)}
   [:img.obb-ice {:src "img/ice.jpg"}]
   [:div.obb-board
    (for [y (range 1 9)
          x (range 1 9)]
      (square (prepare-game-data game-data) x y))]])
