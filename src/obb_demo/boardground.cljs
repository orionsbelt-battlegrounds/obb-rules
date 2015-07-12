(ns obb-demo.boardground
  "Represents an OBB board game"
  (:require [obb-rules.board :as board]
            [obb-rules.element :as element]
            [obb-rules.unit :as unit]))

(defn with-selected-element
  "Verifies and marks as selected an element on the given coordinate"
  [game-data x y]
  (let [game (:game game-data)
        coord [x y]]
    (-> game-data
        (assoc :selected-coord coord)
        (assoc :selected-element (board/get-element game coord)))))

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

(defn- selected-display
  "Square addon when given element is selected"
  [game-data element]
  (if (= element (:selected-element game-data))
    [(keyword (str "div.selected-" (name (element/element-player element))))]))

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
     (enemy-display game element)]))

(defn- boardground-size
  "Gets the panel size stype"
  [options]
  (or (:boardground-style options)
      #_{:width "500px"
       :height "500px"}))

(defn render
  "Renders the full game's board"
  [options game-data]
  [:div.obb-board-panel {:style (boardground-size options)}
   [:img.obb-ice {:src "img/ice.jpg"}]
   [:div.obb-board
    (for [y (range 1 9)
          x (range 1 9)]
      (square (with-selected-element game-data 1 7) x y))]])
