(ns obb-rules.simplifier-test
  (:require [obb-rules.translator :as translator]
            [obb-rules.simplifier :as simplify]
            [obb-rules.unit :as unit])
  (:use clojure.test obb-rules.element obb-rules.unit obb-rules.board))

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
  (is (= [1 1] (simplify/coordenize ":[1 1]")))
  (is (= [1 1] (simplify/coordenize "::[1 1]"))))

(deftest name=
  (is (simplify/name= :p1 :p1))
  (is (simplify/name= "p1" :p1))
  (is (simplify/name= "p1" "p1")))

