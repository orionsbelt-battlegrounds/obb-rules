(ns obb-rules.unit
  (:require [obb-rules.units.rain :refer [metadata]]))

(defn- unit-name-to-symbol
  [name]
  (symbol (str "obb-rules.units." name "/metadata")))

(defn get-unit
  "Gets a unit info given it's name"
  [name]
  (clojure.core/find-var (unit-name-to-symbol name)))

