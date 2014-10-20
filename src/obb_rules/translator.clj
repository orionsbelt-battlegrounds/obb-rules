(ns obb-rules.translator
  (:require [obb-rules.board :as board]
            [obb-rules.element :as element]))

(def max-coordinate (+ 1 board/default-board-w))

(defn coordinate
  "Translates a coordinate for a given player focus"
  [focus [x y]]
  (if (= :p1 focus)
    [x y]
    [(- max-coordinate x) (- max-coordinate y)]))

(defn direction
  "Translates a direction for a given player focus"
  [focus dir]
  (if (= :p1 focus)
    dir
    (cond
      (= (keyword dir) :south) :north
      (= (keyword dir) :north) :south
      (= (keyword dir) :west) :east
      (= (keyword dir) :east) :west)))

(defn element
  "Translates an element for a given player focus"
  [focus element]
  (if (= :p1 focus)
    element
    (let [dir (element/element-direction element)
          coord (element/element-coordinate element)]
      (-> (element/element-coordinate element (coordinate focus coord))
          (element/element-direction (direction focus dir))))))
