(ns obb-rules.element)

(defn create-element
  "Creates an element"
  [player unit quantity direction]
  {:player player
   :unit unit
   :quantity quantity
   :direction direction})

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
