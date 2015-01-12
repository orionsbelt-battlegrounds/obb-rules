(ns obb-rules.generators
  (:require [obb-rules.actions.auto-deploy :as auto-deploy]
            [obb-rules.game :as game]
            [obb-rules.board :as board]
            [obb-rules.stash :as stash]
            [obb-rules.turn :as turn]
            [obb-rules.result :as result]
            [obb-rules.action :as action]
            [obb-rules.unit :as unit]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop])
  (:use clojure.test
        clojure.test.check
        clojure.test.check.clojure-test))

(def scenarions-to-test (read-string (get (System/getenv) "OBB_SCENARIOS_TO_TEST" "10")))
(def scenarions-to-test-small (int (/ scenarions-to-test 10)))

(def unit-names (map #(unit/unit-name %) (unit/get-units)))

(defn- roaster-gen 
  "Generates a collection with distinct random unit names on it"
  [coll]
  (gen/fmap (fn [[shuffled len]] (take len shuffled)) (gen/tuple (gen/shuffle coll) (gen/choose 1 8))))

(defn stash
  "Generates random stash info"
  []
  (gen/fmap (fn [[stash quantity]] (map (fn [name] [name quantity]) stash)) (gen/tuple (roaster-gen unit-names) (gen/choose 1 100))))

