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

(defn hooks
  "Gets the hooks for the given event"
  [element event]
  (let [unit (element-unit element)]
    (unit/event-hooks unit event)))

(defn catapult-attack?
  "True if the element supports catapult"
  [element]
  (let [unit (element-unit element)]
    (unit/catapult? unit)))

(defn element-cost
  "Gets the element's movement cost"
  [element]
  (let [unit (element-unit element)]
    (unit/unit-movement-cost unit)))

(defn element-range
  "Gets the element's range"
  [element]
  (let [unit (element-unit element)]
    (unit/unit-range unit)))

(defn element-direction 
  "Gets/Sets element's direction" 
  ([element] (element :direction))
  ([element new-direction]
   (assoc element :direction new-direction)))

(defn- element-hitpoints
  "Gets/Sets element's hitpoints"
  ([element] (element :hitpoints))
  ([element new-hitpoints]
   (assoc element :hitpoints new-hitpoints)))

(defn- get-bonus
  "Gets bonus"
  [unit bonus-prop bonus-type specific-type]
  (if-let [bonus (unit/unit-bonus unit)]
    (if-let [specific (get-in bonus [bonus-prop bonus-type])]
      (or (get specific specific-type) 0)
      0)
    0))

(defn- category-bonus
  "Gets the category bonus on a given context"
  [bonus-type source-unit target-unit]
  (let [category (unit/unit-category target-unit)]
    (get-bonus source-unit bonus-type :category category)))

(defn- displacement-bonus
  "Gets the displacement bonus on a given context"
  [bonus-type source-unit target-unit]
  (let [displacement (unit/unit-displacement target-unit)]
    (get-bonus source-unit bonus-type :displacement displacement)))

(defn- type-bonus
  "Gets the type bonus on a given context"
  [bonus-type source-unit target-unit]
  (let [unit-type (unit/unit-type target-unit)]
    (get-bonus source-unit bonus-type :type unit-type)))

(defn- terrain-bonus
  "Gets the terrain bonus on a given context"
  [bonus-type board unit]
  (get-bonus unit bonus-type :terrain (keyword (get board :terrain))))

(defn- resolve-bonus
  "Resolves bonus between two units"
  [bonus-type board attacker-unit defender-unit]
  (+ (category-bonus bonus-type attacker-unit defender-unit)
     (terrain-bonus bonus-type board attacker-unit)
     (displacement-bonus bonus-type attacker-unit defender-unit)
     (type-bonus bonus-type attacker-unit defender-unit)))

(defn element-attack
  "Gets the attack of this element for the given target"
  [board element target]
  (let [attacker-unit (element-unit element)
        defender-unit (element-unit target)
        attack (unit/unit-attack attacker-unit)
        bonus (resolve-bonus :attack board attacker-unit defender-unit)]
    (+ attack bonus)))

(defn element-defense
  "Gets the defense of this element for the given target"
  [board element target]
  (let [attacker-unit (element-unit element)
        defender-unit (element-unit target)
        defense (unit/unit-defense defender-unit)
        bonus (resolve-bonus :defense board defender-unit attacker-unit)]
    (+ defense bonus)))

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
  [element percentage]
  (let [unit (element-unit element)
        defense (unit/unit-defense unit)
        hitpoints-to-take (* percentage defense)
        current-hitpoints (element-hitpoints element)
        new-hitpoints (- current-hitpoints hitpoints-to-take)]
    (if (< 0 new-hitpoints)
      (element-hitpoints element new-hitpoints)
      (assoc element :hitpoints defense
                     :quantity (- (element-quantity element) 1)))))

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
     (assert c (str "NoCoordinate:" element))
     c))
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

(defn frozen?
  "True if the element is frozen"
  [element]
  (and
    element
    (= true (element :frozen))))

(defn freeze
  "Freezes the given element"
  [element]
  (assoc element :frozen true))

(defn unfreeze
  "Unfreezes an element"
  [element]
  (dissoc element :frozen))

(defn assert-element
  "Assets that an object acts as an element"
  [element]
  (when element
    (assert (element-player element) (str "NoPlayer-" element))
    (assert (element-quantity element) "NoQuantity")
    (assert (element-direction element) "NoDirection")
    (assert (element-unit element) "NoCoordinate")))
