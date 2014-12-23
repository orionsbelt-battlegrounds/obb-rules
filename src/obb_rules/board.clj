(ns obb-rules.board
  (:use obb-rules.element)
  (:require [clojure.math.numeric-tower :as math]
            [obb-rules.laws :as laws]
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
  (simplify/name= player (element-player element)))

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
  ((board :elements) coord))

(defn in-bounds?
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

(defn remove-element
  "Removes an element from the board"
  [board coord]
  (let [elements (board :elements)
        new-elements (dissoc elements coord)]
    (assoc board :elements new-elements)))

(defn swap-element
  "Swaps a given element for another"
  [board coord new-elem]
  (let [elements (board :elements)
        element-with-coord (element-coordinate new-elem coord)
        new-elements (assoc elements coord element-with-coord)]
    (assert-element element-with-coord)
    (assoc board :elements new-elements)))

(defn place-element
  "Places an element on the board"
  [board coord element]
  (assert-element element)
  (assert (can-place-element? board coord element))
  (swap-element board coord element))

(defn has-element?
  "Returns true if the board has an element on a given coord"
  [board coord]
  (not (nil? (get-element board coord))))

(defn adjacent?
  "Checks if two coordinates are adjacent"
  [[c1x c1y] [c2x c2y]]
  (and
    (> 2 (math/abs (- c1x c2x)))
    (> 2 (math/abs (- c1y c2y)))))

(defn remove-from-element
  "Removes a quantity from the board"
  [board coord quantity]
  (let [element (get-element board coord)
        new-element (remove-quantity element quantity)
        remaining-quantity (element-quantity new-element)]
    (if (= 0 remaining-quantity)
      (remove-element board coord)
      (swap-element board coord new-element))))

(defn add-to-element
  "Adds a quantity to an element"
  [board coord extra-quantity from-element]
  (let [element (or (get-element board coord) from-element)
        quantity (or 0 (element-quantity element))
        new-quantity (+ quantity extra-quantity)
        new-element (element-quantity element new-quantity)]
    (assert element (str "NoElement-" coord " - " board))
    (assert-element new-element)
    (swap-element board coord new-element)))

(defn set-stash
  "Sets the stash for a given player"
  [board player stash]
  (assoc-in board [:stash player] stash))

(defn get-stash
  "Gets a stash for a given player"
  [board player]
  (get-in board [:stash (keyword player)]))
