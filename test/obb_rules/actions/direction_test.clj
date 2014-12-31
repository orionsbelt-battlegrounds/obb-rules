(ns obb-rules.actions.direction-test
  (:require [obb-rules.actions.direction :as direction])
  (:use clojure.test))

(deftest perpendicular-horiz
  (is (some #{[3 4]} (direction/perpendicular [4 4] :north)))
  (is (some #{[5 4]} (direction/perpendicular [4 4] :north)))
  (is (some #{[3 4]} (direction/perpendicular [4 4] :south)))
  (is (some #{[5 4]} (direction/perpendicular [4 4] :south))))

(deftest perpendicular-vert
  (is (some #{[4 3]} (direction/perpendicular [4 4] :west)))
  (is (some #{[4 5]} (direction/perpendicular [4 4] :west)))
  (is (some #{[4 3]} (direction/perpendicular [4 4] :east)))
  (is (some #{[4 5]} (direction/perpendicular [4 4] :east))))

(deftest facing
  (is (direction/facing? :north :south))
  (is (direction/facing? :south :north))
  (is (direction/facing? :east :west))
  (is (direction/facing? :west :east)))
  (is (not (direction/facing? :west :south)))
