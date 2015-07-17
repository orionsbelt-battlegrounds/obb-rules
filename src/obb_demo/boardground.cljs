(ns obb-demo.boardground
  "Represents an OBB board game"
  (:require [obb-rules.board :as board]
            [obb-rules.actions.move :as move]
            [obb-rules.game :as game]
            [obb-rules.ai.common :as ai]
            [obb-rules.element :as element]
            [obb-rules.unit :as unit]))

(defn with-selected-element
  "Verifies and marks as selected an element on the given coordinate"
  [game-data coord]
  (let [game (:game game-data)
        element (board/get-element game coord)]
    (if element
      (-> game-data
          #_(assoc :possible-destinations (move/find-all-possible-destinations-with-cost game element))
          (assoc :possible-attacks (ai/find-possible-attacks game element))
          (assoc :selected-coord coord)
          (assoc :selected-element element))
      (-> game-data
          (dissoc :possible-destinations)
          (dissoc :possible-attacks)
          (dissoc :selected-coord)
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

(defn- enemy-display
  "Returns an enemy indication if the given element is an enemy"
  [game element]
  (when element
    (let [player (element/element-player element)]
      (if (= player :p2)
        [:div.enemy]))))

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
    [:div.possible-destination
     #_[(keyword (str "span.label.label-"
                    (cond
                      (> cost 4) "danger"
                      (> cost 2) "warning"
                      :else "success")))
      cost]]))

(defn- possible-target
  "Display when given coord is a possible target for an attack"
  [game-data coord]
  (if-let [cost (get (:possible-attacks game-data) coord)]
    [:div.possible-target]))

(defn- element-quantity
  "Shows element quantity"
  [game-data element]
  (if (selected? game-data element)
    [:div.element-quantity
     [:span.label.label-default (element/element-quantity element)]]))

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

(defn- action-participant
  "Indicates if the given coordinate particpated on an action"
  [game-data coord]
  (let [action-results (get-in game-data [:game :action-results])
        actions (reduce action-coords [] action-results)
        did-something? (some #{coord} actions)]
  (when did-something?
    [(keyword (str "div.action-source.action-source-"
                   (name (get-in game-data [:game :state]))))])))

(defn- square
  "Renders a board square"
  [game-data x y]
  (let [game (:game game-data)
        coord [x y]
        element (board/get-element game coord)
        square-style (square-position x y)]
    [:div.obb-square {:key (str x y) :style square-style}
     (unit-image game element)
     (selected-display game-data element)
     (possible-destination game-data coord)
     (action-participant game-data coord)
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
