(ns obb-rules.env-test
  (:require
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(deftest env
  (testing "testing framework"
    (is (= 1 1))))
