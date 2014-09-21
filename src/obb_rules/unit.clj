(ns obb-rules.unit
  (:require [obb-rules.units.rain]
            [obb-rules.units.crusader]))

(defn- unit-name-to-symbol
  [name]
  (symbol (str "obb-rules.units." name "/metadata")))

(defn get-unit-by-name
  "Gets a unit info given it's name"
  [name]
  (clojure.core/find-var (unit-name-to-symbol name)))

(defn get-unit-by-code
  "Gets a unit info given it's code"
  [code]
  (get-unit-by-name "rain"))


(defn get-units
  "Gets all the available units"
  []
  [(get-unit-by-name "rain")
   ;(get-unit-by-name "crusader")])
   ])

