(ns obb-demo.boardground
  "Represents an OBB board game"
  (:require [obb-rules.board :as board]
            [obb-rules.element :as element]
            [obb-rules.unit :as unit]))

(defn square-position
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
  [game x y]
  (if-let [element (board/get-element game [x y])]
    (let [unit (element/element-unit element)
          unit-name (unit/unit-name unit)]
      [:img {:src (str "http://orionsbelt.eu/public/units/" unit-name  "_" (direction element) ".png")}])))

(defn- square
  "Renders a board square"
  [game x y]
  [:div.obb-square {:key (str x y) :style (square-position x y)}
   (unit-image game x y)])

(defn render
  "Renders the full game's board"
  [game]
  [:div.obb-board-panel
   [:img.obb-ice {:src "img/ice.jpg"}]
   [:div.obb-board
    (for [y (range 1 9)
          x (range 1 9)]
      (square game x y))]])
