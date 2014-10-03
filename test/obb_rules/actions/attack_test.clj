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
(def rain-element (create-element :p2 rain 10 :south))
(def crusader-element (create-element :p1 crusader 10 :south))

(def board1 (place-element (create-board) [2 2] crusader-element))
(def board (place-element board1 [2 3] rain-element))

(deftest test-attack

  (testing "emtpy target"
    (let [attack (build-action [:attack :p1 [2 2] [2 3]])
          result (attack board1)]
      (is (= "EmptyTarget" (result-message result)))))

  (testing "in range target"
    (let [board (place-element board1 [2 6] (create-element :p2 crusader 10 :east))
          attack (build-action [:attack :p1 [2 2] [2 6]])
          result (attack board)]
      (is (succeeded? result))))

  (testing "out of range target"
    (let [board (place-element board1 [3 3] (create-element :p2 crusader 10 :east))
          attack (build-action [:attack :p1 [2 2] [3 3]])
          result (attack board)]
      (is (failed? result))
      (is (= "OutOfRange" (result-message result)))))

  (testing "obstacle"
    (let [board (place-element board1 [2 3] (create-element :p2 crusader 10 :east))
          board2 (place-element board [2 4] (create-element :p2 crusader 10 :east))
          attack (build-action [:attack :p1 [2 2] [2 4]])
          result (attack board2)]
      (is (failed? result))
      (is (= "OutOfRange" (result-message result)))))

  (testing "same player target"
    (let [board (place-element board1 [2 3] (create-element :p1 crusader 10 :east))
          attack (build-action [:attack :p1 [2 2] [2 3]])
          result (attack board)]
      (is (failed? result))
      (is (= "SamePlayer" (result-message result)))))

  (testing "simple success"
    (let [attack (build-action [:attack :p1 [2 2] [2 3]])
          result (attack board)]
      (is (succeeded? result)))))
