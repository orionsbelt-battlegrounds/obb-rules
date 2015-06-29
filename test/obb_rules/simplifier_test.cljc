(ns obb-rules.simplifier-test
  (:require
    [obb-rules.simplifier :as simplify]
    [obb-rules.unit :as unit]
    ;[obb-rules.element :as element]
    ;[obb-rules.board :as board]
    #?(:clj [clojure.test :refer [deftest testing is]]
       :cljs [cljs.test :refer-macros [deftest testing is]])))

(deftest simplify-unit
  (let [simplified (simplify/clean-unit {:unit (unit/fetch :rain)})]
    (is (= "rain" (simplified :unit)))))

(deftest simplify-unit-inner
  (let [simplified (simplify/clean-unit {:outer {:unit (unit/fetch :rain)}})]
    (is (= "rain" (get-in simplified [:outer :unit])))))

(deftest simplify-unit-already-simplified
  (let [simplified (simplify/clean-unit {:outer {:unit "rain"}})]
    (is (= "rain" (get-in simplified [:outer :unit])))))

(deftest build-unit
  (let [built (simplify/build-unit {:unit "rain"})]
    (is (= (unit/fetch :rain) (built :unit)))))

(deftest build-unit-inner
  (let [built (simplify/build-unit {:outer {:unit "rain"}})]
    (is (= (unit/fetch :rain) (get-in built [:outer :unit])))))

(deftest clean-action-results
  (let [simplified (simplify/clean-action-results {:board {:action-results [[[:action] {:board {:test 1}}]]}})
        action-results (get-in simplified [:board :action-results])
        action-result (first action-results)
        result (second action-result)]
    (is (nil? (result :board)))))

(deftest clean-results
  (let [simplified (simplify/clean-result {:board {:action-results [[[:action] {:board {:test 1}}]]}})
        action-results (get-in simplified [:board :action-results])
        action-result (first action-results)
        result (second action-result)]
    (is (nil? (result :board)))))

(deftest clean-coordinate-keys
  (let [simplified (simplify/clean-coordinate-keys {:board {:elements {[1 2] {:a 1}}}})]
    (is (get-in simplified [:board :elements "[1 2]"]))))

(deftest build-coordinate-keys
  (let [built (simplify/build-coordinate-keys {:board {:elements {":[1 2]" {:a 1}}}})]
    (is (get-in built [:board :elements [1 2]]))))

(deftest coordenize-test
  (is (= [1 1] (simplify/coordenize "[1 1]")))
  (is (= [7 4] (simplify/coordenize ":[7 4]")))
  (is (= [5 5] (simplify/coordenize "::[5 5]"))))

(deftest name=
  (is (simplify/name= :p1 :p1))
  (is (simplify/name= "p1" :p1))
  (is (simplify/name= "p1" "p1")))
