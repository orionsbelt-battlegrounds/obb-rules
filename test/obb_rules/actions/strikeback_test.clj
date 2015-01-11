(ns obb-rules.actions.strikeback-test
  (:require [obb-rules.element :as element]
            [obb-rules.board :as board]
            [obb-rules.result :as result])
  (:use clojure.test
        obb-rules.action
        obb-rules.actions.move
        obb-rules.board
        obb-rules.element
        obb-rules.result
        obb-rules.unit))

(def rain (get-unit-by-name "rain"))
(def crusader (get-unit-by-name "crusader"))
(def eagle (get-unit-by-name "eagle"))
(def boozer (get-unit-by-name "boozer"))
(def krill (get-unit-by-name "krill"))
(def rain-element (create-element :p1 rain 10 :south))
(def eagle-element (create-element :p1 eagle 10 :south))
(def krill-element (create-element :p2 krill 100 :north))
(def crusader-element (create-element :p1 crusader 10 :south))

(def board-with-krill (place-element (create-board) [8 8] krill-element))

(deftest strikeback-direct
  (let [board (-> board-with-krill
                  (place-element [8 7] rain-element))
        attack (build-action [:attack [8 7] [8 8]])
        result (attack board :p1)
        info (last (result/info result))]
    (is (succeeded? result))
    (is (= "OK" (result-message result)))
    (is (= :strikeback (info :attack-type)))
    (is (nil? (get-element (result-board result) [8 7])))))

(deftest strikeback-out-of-range
  (let [board (-> board-with-krill
                  (place-element [8 4] crusader-element))
        attack (build-action [:attack [8 4] [8 8]])
        result (attack board :p1)
        info (last (result/info result))]
    (is (succeeded? result))
    (is (= 1 (count (result/info result))))
    (is (= "OK" (result-message result)))
    (is (= :direct (info :attack-type)))
    (is (get-element (result-board result) [8 4]))))

(deftest strikeback-on-the-side
  (let [crusader-element (element/element-direction crusader-element :east)
        board (-> board-with-krill
                  (place-element [7 8] crusader-element))
        attack (build-action [:attack [7 8] [8 8]])
        result (attack board :p1)
        info (last (result/info result))]
    (is (succeeded? result))
    (is (= 1 (count (result/info result))))
    (is (= "OK" (result-message result)))
    (is (= :direct (info :attack-type)))
    (is (get-element (result-board result) [7 8]))))

(deftest strikeback-catapult
  (let [board (-> board-with-krill
                  (place-element [8 6] eagle-element)
                  (place-element [8 7] rain-element))
        attack (build-action [:attack [8 6] [8 8]])
        result (attack board :p1)
        info (last (result/info result))]
    (is (succeeded? result))
    (is (= 1 (count (result/info result))))
    (is (= "OK" (result-message result)))
    (is (= :catapult (info :attack-type)))
    (is (get-element (result-board result) [8 6]))))

(deftest strikeback-remaining-units
  (let [eagle-element (element/element-quantity eagle-element 60)
        board (-> board-with-krill
                  (place-element [8 6] eagle-element))
        attack (build-action [:attack [8 6] [8 8]])
        result (attack board :p1)
        info (last (result/info result))]
    (is (succeeded? result))
    (is (= 2 (count (result/info result))))
    (is (= "OK" (result-message result)))
    (is (= :strikeback (info :attack-type)))
    (is (get-element (result-board result) [8 6]))
    (is (get-element (result-board result) [8 8]))))
