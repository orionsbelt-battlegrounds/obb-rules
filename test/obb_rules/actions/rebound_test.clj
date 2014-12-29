(ns obb-rules.actions.rebound-test
  (:require [obb-rules.element :as element]
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
(def fenix (get-unit-by-name "fenix"))
(def rain-element (create-element :p2 rain 10 :south))
(def eagle-element (create-element :p1 eagle 10 :south))
(def fenix-element (create-element :p1 fenix 10 :south))
(def crusader-element (create-element :p1 crusader 10 :south))

(def board1 (place-element (create-board) [2 2] crusader-element))
(def board-with-eagle (place-element (create-board) [2 2] eagle-element))
(def board-with-fenix (place-element (create-board) [2 2] fenix-element))
(def board (place-element board1 [2 3] rain-element))

(deftest attack-fenix-direct
  (let [board (-> board-with-fenix
                  (place-element [2 4] rain-element))
        attack (build-action [:attack [2 2] [2 4]])
        result (attack board :p1)
        info (first (result/info result))]
    (is (succeeded? result))
    (is (= "OK" (result-message result)))
    (is (= :direct (info :attack-type)))
    (is (= "rain" (info :unit)))
    (is (nil? (get-element (result-board result) [2 4])))))

(deftest attack-fenix-rebound
  (let [board (-> board-with-fenix
                  (place-element [2 4] rain-element)
                  (place-element [2 5] rain-element))
        attack (build-action [:attack [2 2] [2 4]])
        result (attack board :p1)
        info (result/info result)
        target-info (first info)
        rebound-info (last info)]
    (is (succeeded? result))
    (is (= "OK" (result-message result)))
    (is (= :direct (target-info :attack-type)))
    (is (= :rebound (rebound-info :attack-type)))
    (is (nil? (get-element (result-board result) [2 4])))
    (is (nil? (get-element (result-board result) [2 5])))))
