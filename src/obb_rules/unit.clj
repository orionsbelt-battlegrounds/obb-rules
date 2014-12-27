(ns obb-rules.unit
  (:require [obb-rules.units.rain]
            [obb-rules.units.nova]
            [obb-rules.units.pretorian]
            [obb-rules.units.raptor]
            [obb-rules.units.worm]
            [obb-rules.units.eagle]
            [obb-rules.units.doomer]
            [obb-rules.units.fenix]
            [obb-rules.units.kahuna]
            [obb-rules.units.panther]
            [obb-rules.units.vector]
            [obb-rules.units.heavy-seeker]
            [obb-rules.units.scarab]
            [obb-rules.units.toxic]
            [obb-rules.units.anubis]
            [obb-rules.units.kamikaze]
            [obb-rules.units.crusader]))

(defn get-units
  "Gets all the available units"
  []
  [obb-rules.units.rain/metadata
   obb-rules.units.nova/metadata
   obb-rules.units.pretorian/metadata
   obb-rules.units.raptor/metadata
   obb-rules.units.toxic/metadata
   obb-rules.units.worm/metadata
   obb-rules.units.vector/metadata
   obb-rules.units.anubis/metadata
   obb-rules.units.eagle/metadata
   obb-rules.units.heavy-seeker/metadata
   obb-rules.units.doomer/metadata
   obb-rules.units.fenix/metadata
   obb-rules.units.kahuna/metadata
   obb-rules.units.panther/metadata
   obb-rules.units.scarab/metadata
   obb-rules.units.kamikaze/metadata
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

(defn fetch
  "Gets a unit"
  [raw]
  (let [identifier (name raw)]
    (or (get-unit-by-name identifier) (get-unit-by-code identifier))))

(defn unit-name "Gets a unit's name" [unit] (unit :name))
(defn unit-code "Gets a unit's code" [unit] (unit :code))
(defn unit-attack "Gets a unit's attack" [unit] (unit :attack))
(defn unit-range "Gets a unit's range" [unit] (unit :range))
(defn unit-defense "Gets a unit's defense" [unit] (unit :defense))
(defn unit-movement-cost "Gets a unit's movement cost" [unit] (unit :movement-cost))
(defn unit-movement-type "Gets a unit's movement type" [unit] (unit :movement-type))
(defn unit-category "Gets a unit's category" [unit] (unit :category))
(defn attack-type "Gets the unit's attack type" [unit] (or (unit :attack-type) :direct))
(defn catapult? "True if the unit has catapult" [unit] (= :catapult (attack-type unit)))

(defn units-by-category
  "Gets all the units for a given category"
  [category]
  (filter (fn [u] (= (unit-category u) category)) (get-units)))
