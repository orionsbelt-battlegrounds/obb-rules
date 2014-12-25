(ns obb-rules.stash
  (:require [obb-rules.unit :as unit]))

(defn create-from-hash
  "Creates a new stash from the given hash"
  [unit-hash]
  unit-hash)

(defn create
  "Creates a new stash"
  [& units]
  (apply hash-map units))

(defn- accessorfn
  "Gets the way to access a unit key on the stash"
  [stash unit-name]
  (if (get stash (name unit-name))
    name
    keyword))

(defn how-many?
  "States how many of a unit are present"
  [stash unit]
  (or (stash ((accessorfn stash unit) unit)) 0))

(defn cleared?
  "Returns true if this stash is empty"
  [stash]
  (= 0 (count stash)))

(defn available?
  "Checks if a given quantity is available"
  [stash unit quantity]
  (<= quantity (how-many? stash unit)))

(defn retrieve
  "Removes units from stash"
  [stash unit quantity]
  (let [access-key (accessorfn stash unit)
        unit-key (access-key unit)
        current-quantity (how-many? stash unit-key)
        new-quantity (- current-quantity quantity)]
    (assert (>= current-quantity quantity) "InvalidStashQuantity")
    (if (= new-quantity 0)
      (dissoc stash unit-key)
      (assoc stash unit-key new-quantity))))

(defn- random-by-category
  "Returns random units for the given category"
  [expected-units category quantity]
  (let [units (unit/units-by-category category)
        with-quantity (map (fn [u] [(unit/unit-name u)  quantity]) units)
        units-count (count with-quantity)
        places (take expected-units (distinct (repeatedly #(rand-int units-count))))
        lucky (map (vec with-quantity) places)]
    (flatten lucky)))

(defn random
  "Creates a stash randomly populated"
  []
  (let [lights (random-by-category 2 :light 100)
        mediums (random-by-category 3 :medium 50)
        heavies (random-by-category 3 :heavy 25)
        all (concat lights mediums heavies)]
    (apply create all)))
