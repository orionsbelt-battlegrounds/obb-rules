(ns obb-rules.actions.triple-attack-test
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
(def driller (get-unit-by-name "driller"))
(def rain-element (create-element :p2 rain 10 :south))
(def eagle-element (create-element :p1 eagle 10 :south))
(def driller-element (create-element :p1 driller 10 :south))
(def crusader-element (create-element :p1 crusader 10 :south))

(def board1 (place-element (create-board) [2 2] crusader-element))
(def board-with-eagle (place-element (create-board) [2 2] eagle-element))
(def board-with-driller (place-element (create-board) [2 2] driller-element))
(def board (place-element board1 [2 3] rain-element))

(deftest attack-driller-direct
  (let [board (-> board-with-driller
                  (place-element [2 3] rain-element))
        attack (build-action [:attack [2 2] [2 3]])
        result (attack board :p1)
        info (first (result/info result))]
    (is (succeeded? result))
    (is (= "OK" (result-message result)))
    (is (= :direct (info :attack-type)))
    (is (= "rain" (info :unit)))
    (is (nil? (get-element (result-board result) [2 4])))))

(deftest attack-driller-triple
  (let [board (-> board-with-driller
                  (place-element [1 3] rain-element)
                  (place-element [2 3] rain-element)
                  (place-element [3 3] rain-element))
        attack (build-action [:attack [2 2] [2 3]])
        result (attack board :p1)
        info (result/info result)
        target-info (first info)
        triple-1-info (second info)
        triple-2-info (last info)]
    (is (succeeded? result))
    (is (= "OK" (result-message result)))
    (is (= :direct (target-info :attack-type)))
    (is (= :triple (triple-1-info :attack-type)))
    (is (= :triple (triple-2-info :attack-type)))
    (is (nil? (get-element (result-board result) [1 3])))
    (is (nil? (get-element (result-board result) [2 3])))
    (is (nil? (get-element (result-board result) [3 3])))))

(deftest attack-driller-triple-partial
  (let [board (-> board-with-driller
                  (place-element [2 3] rain-element)
                  (place-element [3 3] rain-element))
        attack (build-action [:attack [2 2] [2 3]])
        result (attack board :p1)
        info (result/info result)
        target-info (first info)
        triple-1-info (second info)
        triple-2-info (last info)]
    (is (succeeded? result))
    (is (= "OK" (result-message result)))
    (is (= :direct (target-info :attack-type)))
    (is (= :triple (triple-1-info :attack-type)))
    (is (= :triple (triple-2-info :attack-type)))
    (is (nil? (get-element (result-board result) [2 3])))
    (is (nil? (get-element (result-board result) [3 3])))))
