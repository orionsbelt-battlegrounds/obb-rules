(ns obb-demo.boardground
  "Represents an OBB board game")

(defn square-position
  "Calculates the position via left and bottom percentages"
  [x y]
  (let [x (- x 1)]
    {:left (str (* x 12.5) "%")
     :bottom (str (* (- 8 y) 12.5) "%")}))

(defn- square
  "Renders a board square"
  [game x y]
  [:div.obb-square {:key (str x y) :style (square-position x y)}
   x y])

(defn render
  "Renders the full game's board"
  [game]
  [:div.obb-board-panel
    [:div.obb-board
     (for [y (range 1 9)
           x (range 1 9)]
       (square game x y))]])
