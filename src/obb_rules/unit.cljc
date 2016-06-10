(ns obb-rules.unit
  (:require
    #?(:clj [clojure.spec :as s]
       :cljs [cljs.spec :as s])
            [obb-rules.units.rain]
            [obb-rules.units.nova]
            [obb-rules.units.pretorian]
            [obb-rules.units.raptor]
            [obb-rules.units.worm]
            [obb-rules.units.eagle]
            [obb-rules.units.boozer]
            [obb-rules.units.doomer]
            [obb-rules.units.driller]
            [obb-rules.units.krill]
            [obb-rules.units.fenix]
            [obb-rules.units.kahuna]
            [obb-rules.units.panther]
            [obb-rules.units.vector]
            [obb-rules.units.heavy-seeker]
            [obb-rules.units.scarab]
            [obb-rules.units.toxic]
            [obb-rules.units.anubis]
            [obb-rules.units.kamikaze]
            [obb-rules.units.crusader]
            [obb-rules.units.star]))

(s/def ::unit
  (s/keys :req-un [::name ::code ::type ::category
                   ::displacement ::movement-type ::movement-cost
                   ::value ::attack ::defense ::range]
          :opt-un [::attack-type ::after-attack ::bonus]))

(s/def ::name (s/and string? #(<= 3 (count %) 15)))
(s/def ::code (s/and string? #(<= 1 (count %) 3)))
(s/def ::attack (s/and integer? pos? #(<= 1 % 6000)))
(s/def ::defense (s/and integer? pos? #(<= 1 % 10000)))
(s/def ::value (s/and integer? pos? #(or (<= 1 % 100) (= % 50000))))
(s/def ::type #{:mechanic :organic})
(s/def ::attack-type (s/nilable #{:direct :catapult}))
(s/def ::category #{:light :medium :heavy :special})
(s/def ::displacement #{:air :ground})
(s/def ::movement-type #{:normal :diagonal :front :all})
(s/def ::movement-cost (s/and integer? #(<= 1 % 6)))
(s/def ::range (s/and integer? #(<= 1 % 7)))

(s/def ::after-attack-hook-data #{:rebound :triple})
(s/def ::after-attack-hook (s/tuple ::after-attack-hook-data))
(s/def ::after-attack (s/coll-of ::after-attack-hook []))

(s/def ::bonus (s/nilable (s/keys :opt-un [:obb-rules.unit.bonus/attack
                                           :obb-rules.unit.bonus/defense])))
(s/def :obb-rules.unit.bonus/attack (s/keys :opt-un [:obb-rules.unit.bonus/category
                                                     :obb-rules.unit.bonus/type]))
(s/def :obb-rules.unit.bonus/defense (s/keys :opt-un [:obb-rules.unit.bonus/category
                                                      :obb-rules.unit.bonus/type]))
(s/def :obb-rules.unit.bonus/category (s/map-of ::category integer?))
(s/def :obb-rules.unit.bonus/type (s/map-of ::type integer?))

(defrecord ^{:doc "Represents a combat unit"} CombatUnit
  [^String name
   ^String code
   ^long value
   ^long attack
   attack-type
   ^long range
   ^long defense
   bonus
   type
   category
   displacement
   movement-type
   movement-cost])

(defn gather-units
  "Gets all the available units"
  []
  (mapv #(map->CombatUnit %)
    [obb-rules.units.rain/metadata
     obb-rules.units.nova/metadata
     obb-rules.units.pretorian/metadata
     obb-rules.units.raptor/metadata
     obb-rules.units.toxic/metadata
     obb-rules.units.worm/metadata
     obb-rules.units.vector/metadata
     obb-rules.units.anubis/metadata
     obb-rules.units.boozer/metadata
     obb-rules.units.eagle/metadata
     obb-rules.units.heavy-seeker/metadata
     obb-rules.units.doomer/metadata
     obb-rules.units.fenix/metadata
     obb-rules.units.driller/metadata
     obb-rules.units.krill/metadata
     obb-rules.units.kahuna/metadata
     obb-rules.units.panther/metadata
     obb-rules.units.scarab/metadata
     obb-rules.units.kamikaze/metadata
     obb-rules.units.crusader/metadata
     obb-rules.units.star/metadata]))

(def get-units (memoize gather-units))

(defn- build-units
  [units selector]
  (reduce #(conj %1 [(selector %2) %2]) {} units))

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

(defn unit-name "Gets a unit's name" [unit] (:name unit))
(defn unit-code "Gets a unit's code" [unit] (:code unit))
(defn unit-attack "Gets a unit's attack" [unit] (:attack unit))
(defn unit-bonus "Gets a unit's bonus" [unit] (:bonus unit))
(defn unit-range "Gets a unit's range" [unit] (:range unit))
(defn unit-defense "Gets a unit's defense" [unit] (:defense unit))
(defn unit-movement-cost "Gets a unit's movement cost" [unit] (:movement-cost unit))
(defn unit-movement-type "Gets a unit's movement type" [unit] (:movement-type unit))
(defn unit-category "Gets a unit's category" [unit] (:category unit))
(defn unit-displacement "Gets a unit's displacement" [unit] (:displacement unit))
(defn unit-type "Gets a unit's type" [unit] (:type unit))
(defn unit-value "Gets a unit's hardcore value" [unit] (or (:value unit) 0))
(defn attack-type "Gets the unit's attack type" [unit] (or (:attack-type unit) :direct))
(defn event-hooks "Gets the hooks for an event" [unit event] (event unit))
(defn catapult? "True if the unit has catapult" [unit] (= :catapult (attack-type unit)))

(defn units-by-category
  "Gets all the units for a given category"
  [category]
  (filter (fn [u] (= (unit-category u) category)) (get-units)))
