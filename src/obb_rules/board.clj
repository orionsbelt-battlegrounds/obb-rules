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

(defn get-element
  "Gets an element given a coordinate"
  [board coord]
  ((board :elements) coord))

(defn- in-bounds?
  "Checks if a given coord is in the board"
  [board [x y]]
  (let [w (board-width board)
        h (board-height board)]
    (and
      (> x 0)
      (> y 0)
      (<= x w)
      (<= y h))))

(defn can-place-element?
  "Checks if an element can be placed"
  [board coord elem]
  (and
    (in-bounds? board coord)
    (nil? (get-element board coord))))

(defn place-element
  "Places an element on the board"
  [board coord element]
  (assert (can-place-element? board coord element))
  (let [elements (board :elements)
        new-elements (assoc elements coord element)]
    (assoc board :elements new-elements)))

(defn has-element?
  "Returns true if the board has an element on a given coord"
  [board coord]
  (not (nil? (get-element board coord))))
