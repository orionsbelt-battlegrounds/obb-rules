(ns obb-rules.translator
  (:require [obb-rules.board :as board]
            [obb-rules.simplifier :as simplify]
            [obb-rules.laws :as laws]
            [obb-rules.element :as element]))

(def max-coordinate (+ 1 laws/default-board-w))

(defn- default-focus?
  "Checks if the current given focus is the default one"
  [focus]
  (simplify/name= :p1 focus))

(defn coordinate
  "Translates a coordinate for a given player focus"
  [focus [x y]]
  (if (default-focus? focus)
    [x y]
    [(- max-coordinate x) (- max-coordinate y)]))

(defn direction
  "Translates a direction for a given player focus"
  [focus dir]
  (if (default-focus? focus)
    dir
    (cond
      (= (keyword dir) :south) :north
      (= (keyword dir) :north) :south
      (= (keyword dir) :west) :east
      (= (keyword dir) :east) :west)))

(defn element
  "Translates an element for a given player focus"
  [focus element]
  (if (default-focus? focus)
    element
    (let [dir (element/element-direction element)
          coord (element/element-coordinate element)]
      (-> (element/element-coordinate element (coordinate focus coord))
          (element/element-direction (direction focus dir))))))

(defmulti convert-action (fn [x] (keyword (first x))))
(defmethod convert-action :rotate [action] [:rotate
                                            (coordinate :p2 (get action 1))
                                            (direction :p2 (get action 2))])

(defmethod convert-action :move [action] [:move
                                          (coordinate :p2 (get action 1))
                                          (coordinate :p2 (get action 2))
                                          (get action 3)])

(defmethod convert-action :attack [action] [:attack
                                            (coordinate :p2 (get action 1))
                                            (coordinate :p2 (get action 2))])

(defmethod convert-action :deploy [action] [:deploy
                                            (get action 1)
                                            (get action 2)
                                            (coordinate :p2 (get action 3))])

(defn action
  "Translates an action for a given player focus"
  [focus action]
  (if (default-focus? focus)
    action
    (convert-action action)))

(defn actions
  "Translates all actions for a given player focus"
  [focus actions]
  (map (partial action focus) actions))

(defn- convert-board
  "Converts a board to :p2 focus"
  [board]
  (let [elements (board/elements board)
        translated (into {} (for [[k v] elements]
                              [(coordinate :p2 k) (element :p2 v)]))]
    (board/elements board translated)))

(defn board
  "Translates a full board to a given player focus"
  [focus board]
  (if (default-focus? focus)
    board
    (convert-board board)))
