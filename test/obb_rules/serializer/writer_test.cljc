(ns obb-rules.serializer.writer-test
  (:require
    [obb-rules.serializer.writer :as writer]
    #?(:clj [clojure.test :refer [deftest testing is]]
       :cljs [cljs.test :refer-macros [deftest testing is]])))

(deftest actions-serializer
  (is (= "a1112" (writer/action->str [:attack [1 1] [1 2]])))
  (is (= "g1112" (writer/action->str [:goto [1 1] [1 2]])))
  (is (= "d88.10.rain" (writer/action->str [:deploy 10 :rain [8 8]])))
  (is (= "d11.200.crusader" (writer/action->str [:deploy 200 :crusader [1 1]])))
  (is (= "r11w" (writer/action->str [:rotate [1 1] :west])))
  (is (= "r11n" (writer/action->str [:rotate [1 1] :north])))
  (is (= "r11s" (writer/action->str [:rotate [1 1] :south])))
  (is (= "r11e" (writer/action->str [:rotate [1 1] :east]))))
