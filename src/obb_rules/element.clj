(ns obb-rules.element
  (:require [obb-rules.unit :as unit]))

(defn create-element
  "Creates an element"
  ([player unit quantity direction]
   (create-element player unit quantity direction nil))
  ([player unit quantity direction coordinate]
  {:player player
   :unit unit
   :quantity quantity
   :direction direction
   :coordinate coordinate
   :hitpoints (unit/unit-defense unit)}))

(defn element-player "Element's player" [element] (element :player))
(defn element-unit "Element's unit" [element] (element :unit))

(defn element-direction 
  "Gets/Sets element's direction" 
  ([element] (element :direction))
  ([element new-direction]
   (assoc element :direction new-direction)))

(defn element-quantity
  "Gets/Sets element's quantity"
  ([element] (element :quantity))
  ([element new-quantity]
   (assoc element :quantity new-quantity)))

(defn- remove-specific-quantity
  "Removes a specific, concrete quantity from the element"
  [element quantity]
  (let [current-quantity (element-quantity element)
        remaining-quantity (- current-quantity quantity)]
    (if (> 0 remaining-quantity)
      (element-quantity element 0)
      (element-quantity element remaining-quantity))))

(defn- remove-hitpoints
  "Removes part of an element (<1)"
  [element percentage])

(defn remove-quantity
  "Removes a specified quantity"
  [element quantity]
  (cond
    (= quantity 0) element
    (>= quantity 1) (remove-specific-quantity element quantity)
    :else (remove-hitpoints element quantity)))

(defn element-coordinate
  "Gets/Sets element's coordinate"
  ([element]
   (let [c (element :coordinate)]
     (assert c "NoCoordinate")
     (element :coordinate)))
  ([element new-coordinate]
   (assoc element :coordinate new-coordinate)))

(defn can-join-elements?
  "Checks if several elements can be joined into one"
  [e1 e2]
  (and
    (= (element-player e1) (element-player e2))
    (= (element-unit e1) (element-unit e2))))

(defn join-elements
  "Joins several elements"
  [& elements]
  (let [quantities (map (fn [e] (element-quantity e)) elements)
        template (first elements)]
    (assoc template :quantity (apply + quantities))))

