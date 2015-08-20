(ns obb-rules.generators
  (:require [obb-rules.game :as game]
            [obb-rules.board :as board]
            [obb-rules.stash :as stash]
            [obb-rules.turn :as turn]
            [obb-rules.result :as result]
            [obb-rules.action :as action]
            [obb-rules.host-dependent :as host]
            [obb-rules.unit :as unit]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]
   #?(:cljs [clojure.test.check :as tc])
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(def scenarions-to-test (host/scenarios-to-test))
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

