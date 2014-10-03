(ns obb-rules.actions.attack-test
  (:use clojure.test
        midje.sweet
        obb-rules.action
        obb-rules.actions.move
        obb-rules.board
        obb-rules.element
        obb-rules.result
        obb-rules.unit))

(def rain (get-unit-by-name "rain"))
(def crusader (get-unit-by-name "crusader"))
(def rain-element (create-element :p1 rain 10 :south))
(def crusader-element (create-element :p2 crusader 10 :south))

(def board1 (place-element (create-board) [2 2] crusader-element))
(def board (place-element board1 [2 3] rain-element))

(deftest test-attack

  (testing "simple success"
    (let [attack (build-action [:attack :p1 [2 2] [2 3]])
          result (attack board)]
      (is (succeeded? result)))))
