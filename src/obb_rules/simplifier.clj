(ns obb-rules.simplifier
  "Simplifies data structures and builds them if necessary"
  (:require [clojure.walk :as w]
            [obb-rules.unit :as unit]))

(declare clean-unit)
(declare build-unit)

(defn name=
  "Compares two vars based on it's name"
  [a b]
  (= (name a) (name b)))

(defn not-name=
  "Compares two vars based on it's name"
  [a b]
  (not (name= a b)))

(defn- resolve-unit
  "Properly simplifies a unit"
  [value]
  (if (string? value)
    value
    (value :name)))

(defn- simplify-if-unit
  "Simplifies a unit object, if it's a unit"
  [[k v]]
  (cond
    (= :unit (keyword k)) [k (resolve-unit v)]
    (map? v) [k (clean-unit v)]
    :else [k v]))

(defn- build-if-unit
  "Builds a unit, if it's a unit"
  [[k v]]
  (cond
    (= :unit (keyword k)) [k (unit/fetch v)]
    (map? v) [k (build-unit v)]
    :else [k v]))

(defn clean-unit
  "Simplifies units, replacing the unit object by its name"
  [obj]
  (w/walk simplify-if-unit identity obj))

(defn build-unit
  "Replaces unit's name/code by the actual unit"
  [obj]
  (w/walk build-if-unit identity obj))

(defn clean-action-results
  "Removes all the board elements from action results"
  [result]
  (let [results (get-in result [:board :action-results])
        new-results (map (fn [[k v]] [k (dissoc v :board)]) results)]
    (assoc-in result [:board :action-results] new-results)))

(defn coordenize
  "Transforms a string in a coordinate"
  [raw]
  (let [beter-raw (-> raw (str) (clojure.string/replace #":" ""))]
    (if-let [parsed (re-matches #"\[(\d+) (\d+)\]" beter-raw)]
      (into [] (map read-string (rest parsed)))
      raw)))

(defn build-coordinate-keys
  "Transforms coordiante strings in coordinates"
  [result]
  (let [elements (get-in result [:board :elements])
        cleaned (reduce (fn [h [k v]] (assoc h (coordenize k) v)) {} elements)]
    (assoc-in result [:board :elements] cleaned)))

(defn clean-coordinate-keys
  "Transforms coordiante keys in strings"
  [result]
  (let [elements (get-in result [:board :elements])
        cleaned (reduce (fn [h [k v]] (assoc h (str k) v)) {} elements)]
    (assoc-in result [:board :elements] cleaned)))

(defn build-result
  "Builds a result"
  [result]
  (-> result
      (build-coordinate-keys)
      (build-unit)))

(defn clean-result
  "Cleans a result"
  [result]
  (-> result
      (clean-action-results)
      (clean-coordinate-keys)
      (clean-unit)))
