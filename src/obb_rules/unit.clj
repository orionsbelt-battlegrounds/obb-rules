(ns obb-rules.unit
  (:require [obb-rules.units.rain]
            [obb-rules.units.crusader]))

(defn get-units
  "Gets all the available units"
  []
  [obb-rules.units.rain/metadata
   obb-rules.units.crusader/metadata])

(defn- build-units
  [units, selector]
  (reduce #(conj %1 [(%2 selector) %2]) {} units))

(def ^:private units-by-name (delay (build-units (get-units) :name)))
(def ^:private units-by-code (delay (build-units (get-units) :code)))

(defn get-unit-by-code
  "Gets a unit info given it's code"
  [code]
  (@units-by-code code))

(defn get-unit-by-name
  "Gets a unit info given it's name"
  [name]
  (@units-by-name name))

(defn unit-name "Gets a unit's name" [unit] (unit :name))
(defn unit-code "Gets a unit's code" [unit] (unit :code))
(defn unit-attack "Gets a unit's attack" [unit] (unit :attack))
(defn unit-defense "Gets a unit's defense" [unit] (unit :defense))
