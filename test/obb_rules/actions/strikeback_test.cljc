(ns obb-rules.actions.strikeback-test
  (:require [obb-rules.element :as element]
            [obb-rules.board :as board]
            [obb-rules.action :as action]
            [obb-rules.actions.move :as move]
            [obb-rules.result :as result]
            [obb-rules.unit :as unit]
            [obb-rules.result :as result]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(def rain (unit/get-unit-by-name "rain"))
(def crusader (unit/get-unit-by-name "crusader"))
(def eagle (unit/get-unit-by-name "eagle"))
(def boozer (unit/get-unit-by-name "boozer"))
(def krill (unit/get-unit-by-name "krill"))
(def rain-element (element/create-element :p1 rain 10 :south))
(def eagle-element (element/create-element :p1 eagle 10 :south))
(def krill-element (element/create-element :p2 krill 100 :north))
(def crusader-element (element/create-element :p1 crusader 10 :south))

(def board-with-krill (board/place-element (board/create-board) [8 8] krill-element))

(deftest strikeback-direct
  (let [board (-> board-with-krill
                  (board/place-element [8 7] rain-element))
        attack (action/build-action [:attack [8 7] [8 8]])
        result (attack board :p1)
        info (last (result/info result))]
    (is (result/succeeded? result))
    (is (= "OK" (result/result-message result)))
    (is (= :strikeback (info :attack-type)))
    (is (nil? (board/get-element (result/result-board result) [8 7])))))

(deftest strikeback-out-of-range
  (let [board (-> board-with-krill
                  (board/place-element [8 4] crusader-element))
        attack (action/build-action [:attack [8 4] [8 8]])
        result (attack board :p1)
        info (last (result/info result))]
    (is (result/succeeded? result))
    (is (= 1 (count (result/info result))))
    (is (= "OK" (result/result-message result)))
    (is (= :direct (info :attack-type)))
    (is (board/get-element (result/result-board result) [8 4]))))

(deftest strikeback-out-of-range-bug-23
  (let [board (-> (board/create-board)
                  (board/place-element [6 3] (element/element-direction krill-element :south))
                  (board/place-element [6 7] (element/element-direction crusader-element :north)))
        attack (action/build-action [:attack [6 7] [6 3]])
        result (attack board :p1)
        info (last (result/info result))]
    (is (result/succeeded? result))
    (is (= 1 (count (result/info result))))
    (is (= "OK" (result/result-message result)))
    (is (= :direct (info :attack-type)))
    (is (board/get-element (result/result-board result) [6 7]))))

(deftest strikeback-on-the-side
  (let [crusader-element (element/element-direction crusader-element :east)
        board (-> board-with-krill
                  (board/place-element [7 8] crusader-element))
        attack (action/build-action [:attack [7 8] [8 8]])
        result (attack board :p1)
        info (last (result/info result))]
    (is (result/succeeded? result))
    (is (= 1 (count (result/info result))))
    (is (= "OK" (result/result-message result)))
    (is (= :direct (info :attack-type)))
    (is (board/get-element (result/result-board result) [7 8]))))

(deftest strikeback-catapult
  (let [board (-> board-with-krill
                  (board/place-element [8 6] eagle-element)
                  (board/place-element [8 7] rain-element))
        attack (action/build-action [:attack [8 6] [8 8]])
        result (attack board :p1)
        info (last (result/info result))]
    (is (result/succeeded? result))
    (is (= 1 (count (result/info result))))
    (is (= "OK" (result/result-message result)))
    (is (= :catapult (info :attack-type)))
    (is (board/get-element (result/result-board result) [8 6]))))

(deftest strikeback-remaining-units
  (let [eagle-element (element/element-quantity eagle-element 60)
        board (-> board-with-krill
                  (board/place-element [8 6] eagle-element))
        attack (action/build-action [:attack [8 6] [8 8]])
        result (attack board :p1)
        info (last (result/info result))]
    (is (result/succeeded? result))
    (is (= 2 (count (result/info result))))
    (is (= "OK" (result/result-message result)))
    (is (= :strikeback (info :attack-type)))
    (is (board/get-element (result/result-board result) [8 6]))
    (is (board/get-element (result/result-board result) [8 8]))))
