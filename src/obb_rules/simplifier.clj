(ns obb-rules.simplifier
  "Simplifies data structures and builds them if necessary"
  (:require [clojure.walk :as w]
            [obb-rules.unit :as unit]))

(declare clean-unit)
(declare build-unit)

(defn- simplify-if-unit
  "Simplifies a unit object, if it's a unit"
  [[k v]]
  (cond
    (= :unit (keyword k)) [k (v :name)]
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

(defn clean-result
  "Cleans a result"
  [result]
  (-> result
      (clean-action-results)
      (clean-unit)))
