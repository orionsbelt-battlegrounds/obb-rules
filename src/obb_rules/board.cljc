(ns obb-rules.board
  (:require [obb-rules.math :as math]
            [obb-rules.laws :as laws]
            [obb-rules.element :as element]
            [obb-rules.simplifier :as simplify]))

(defn- random-terrain
  "Provides a random terrain"
  []
  (rand-nth [:water :ice :terrest
             :desert :rock :forest]))

(defn create-board
  "Creates an empty board"
  ([] (create-board laws/default-board-w laws/default-board-h))
  ([w h]
  {:width w
   :height h
   :terrain (random-terrain)
   :elements {}}))

(defn- player-element?
  "True if the given element is from the given player"
  [player [coordinate element]]
  (simplify/name= player (element/element-player element)))

(defn board-elements
  "Gets the elements of a given player"
  [board player]
  (->> (board :elements)
       (filter (partial player-element? player))
       (map #(last %))))

(defn board-elements-count
  "Gets the number of board elements"
  ([board]
   (count (board :elements)))
  ([board player]
   (count (board-elements board player))))

(defn empty-board?
  "Checks if a board is empty"
  ([board]
   (= 0 (board-elements-count board)))
  ([board player]
   (= 0 (board-elements-count board (keyword player)))))

(defn board-width "Gets a board's witdh" [board] (or (board :width) laws/default-board-w))
(defn board-height "Gets a board's height" [board] (or (board :height) laws/default-board-h))
(defn board-terrain "Gets the board's terrain" [board] (board :terrain))

(defn elements
  "Gets/sets all the elements"
  ([board]
   (board :elements))
  ([board elements]
   (assoc board :elements elements)))

(defn get-element
  "Gets an element given a coordinate"
  [board coord]
  (get-in board [:elements coord]))

(defn get-element-consider-removed
  "Gets an element given a coordinate"
  [board coord]
  (or (get-element board coord)
      (get-in board [:removed-elements coord])))

(defn in-bounds?
  "Checks if a given coord is in the board"
  [board [^Integer x ^Integer y]]
  (and
    (> x 0)
    (> y 0)
    (<= x 8)
    (<= y 8)))

(defn can-place-element?
  "Checks if an element can be placed"
  [board coord elem]
  (and
    (in-bounds? board coord)
    (nil? (get-element board coord))))

(defn- register-removed-element
  "Registers that an element was destroyed from a coordinate"
  [board coord element destroyed?]
  (if destroyed?
    (let [all-removed (or (board :removed-elements) {})]
      (assoc board :removed-elements (assoc all-removed coord element)))
    board))

(defn remove-element
  "Removes an element from the board"
  ([board coord]
   (remove-element board coord false))
  ([board coord destroyed?]
   (let [elements (board :elements)
         new-elements (dissoc elements coord)]
     (-> board
         (register-removed-element coord (get elements coord) destroyed?)
         (assoc :elements new-elements)))))

(defn swap-element
  "Swaps a given element for another"
  [board coord new-elem]
  (let [elements (board :elements)
        element-with-coord (element/element-coordinate new-elem coord)
        new-elements (assoc elements coord element-with-coord)]
    (element/assert-element element-with-coord)
    (assoc board :elements new-elements)))

(defn place-element
  "Places an element on the board"
  [board coord element]
  (element/assert-element element)
  (assert (can-place-element? board coord element))
  (swap-element board coord element))

(defn has-element?
  "Returns true if the board has an element on a given coord"
  [board coord]
  (not (nil? (get-element board coord))))

(defn adjacent?
  "Checks if two coordinates are adjacent"
  [[^Integer c1x ^Integer c1y] [^Integer c2x ^Integer  c2y]]
  (let [dx (- c1x c2x)
        dy (- c1y c2y)]
    (and
      (< -2 dx)
      (> 2 dx)
      (< -2 dy)
      (> 2 dy))))

(defn remove-from-element
  "Removes a quantity from the board, marking it as move"
  ([board coord quantity]
   (remove-from-element board coord quantity false))
  ([board coord quantity destroyed?]
   (let [element (get-element board coord)
         new-element (element/remove-quantity element quantity)
         remaining-quantity (element/element-quantity new-element)]
     (if (= 0 remaining-quantity)
       (remove-element board coord destroyed?)
       (swap-element board coord new-element)))))

(defn destroy-from-element
  "Removes a quantity from the board, marking it as destroyed"
  [board coord quantity]
  (remove-from-element board coord quantity true))

(defn add-to-element
  "Adds a quantity to an element"
  [board coord extra-quantity from-element]
  (let [element (or (get-element board coord) from-element)
        quantity (or 0 (element/element-quantity element))
        new-quantity (+ quantity extra-quantity)
        new-element (element/element-quantity element new-quantity)]
    (assert element (str "NoElement-" coord " - " board))
    (element/assert-element new-element)
    (swap-element board coord new-element)))

(defn set-stash
  "Sets the stash for a given player"
  [board player stash]
  (assoc-in board [:stash player] stash))

(defn get-stash
  "Gets a stash for a given player"
  [board player]
  (get-in board [:stash (keyword player)]))
