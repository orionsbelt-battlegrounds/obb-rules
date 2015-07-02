(ns obb-rules.actions.direction-test
  (:require
    [obb-rules.actions.direction :as direction]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(deftest perpendicular-horiz
  (is (some #{[3 4]} (direction/perpendicular [4 4] :north)))
  (is (some #{[3 4]} (direction/perpendicular [4 4] "north")))
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
  (is (direction/facing? "north" "south"))
  (is (direction/facing? :north "south"))
  (is (direction/facing? :south :north))
  (is (direction/facing? :east :west))
  (is (direction/facing? :west :east)))
  (is (not (direction/facing? :west :south)))

(deftest other
  (is (= [:north :south :west] (direction/other :east)))
  (is (= [:north :east :south] (direction/other :west)))
  (is (= [:north :east :west] (direction/other :south)))
  (is (= [:south :east :west] (direction/other :north))))

(deftest clockwise
  (is (= :east (direction/clockwise :north)))
  (is (= :west (direction/clockwise :south)))
  (is (= :north (direction/clockwise :west)))
  (is (= :south (direction/clockwise :east))))
