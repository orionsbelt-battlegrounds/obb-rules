(ns obb-rules.stash)

(defn create
  "Creates a new stash"
  [& units]
  (apply hash-map units))

(defn how-many?
  "States how many of a unit are present"
  [stash unit]
  (or (stash unit) 0))

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
  (let [current-quantity (stash unit)
        new-quantity (- current-quantity quantity)]
    (assert (>= current-quantity quantity) "InvalidStashQuantity")
    (if (= new-quantity 0)
      (dissoc stash unit)
      (assoc stash unit new-quantity))))
