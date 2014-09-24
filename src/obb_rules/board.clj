(ns obb-rules.board)

(defn create-board
  "Creates an empty board"
  ([] (create-board 8 8))
  ([w h]
  {:width w
   :height h
   :elements {}}))

(defn board-elements-count
  "Gets the number of board elements"
  [board]
  (count (board :elements)))

(defn empty-board?
  "Checks if a board is empty"
  [board]
  (= 0 (board-elements-count board)))

(defn board-width "Gets a board's witdh" [board] (board :width))
(defn board-height "Gets a board's height" [board] (board :height))

(defn place-element
  "Places an element on the board"
  ([board x y element]
   (place-element board [x y] element))
  ([board coord element]
   (let [elements (board :elements)
         new-elements (assoc elements coord element)]
     (assoc board :elements new-elements))))

(defn get-element
  "Gets an element given a coordinate"
  ([board x y]
   (get-element board [x y]))
  ([board coord]
   ((board :elements) coord)))

(defn has-element?
  "Returns true if the board has an element on a given coord"
  ([board x y]
   (has-element? board [x y]))
  ([board coord]
   (not (nil? (get-element board coord)))))
