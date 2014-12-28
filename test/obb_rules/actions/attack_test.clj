(ns obb-rules.actions.attack-test
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

(deftest attack-hitpoints
  (let [crusader-element (create-element :p1 crusader 1 :south)
        rain-element (create-element :p2 rain 1 :north)
        board (create-board)
        cboard (place-element board [1 1] crusader-element)
        rboard (place-element cboard [1 2] rain-element)
        attack (build-action [:attack [1 2] [1 1]])]
    (loop [board rboard]
      (let [clean-board (swap-element board [1 2] rain-element)
            result (attack clean-board :p2)
            after-attack (result-board result)
            crusader-element (get-element after-attack [1 1])]
        (if crusader-element
          (recur after-attack)
          (is (nil? crusader-element)))))))

(deftest attack-emtpy-target
  (let [attack (build-action [:attack [2 2] [2 3]])
        result (attack board1 :p1)]
    (is (= "EmptyTarget" (result-message result)))))

(deftest attack-in-range-target
  (let [board (place-element board1 [2 6] (create-element :p2 crusader 10 :east))
        attack (build-action [:attack [2 2] [2 6]])
        result (attack board :p1)]
    (is (succeeded? result))))

(deftest attack-out-of-range-target
  (let [board (place-element board1 [3 3] (create-element :p2 crusader 10 :east))
        attack (build-action [:attack [2 2] [3 3]])
        result (attack board :p1)]
    (is (failed? result))
    (is (= "OutOfRange" (result-message result)))))

(deftest attack-obstacle
  (let [board (place-element board1 [2 3] (create-element :p2 crusader 10 :east))
        board2 (place-element board [2 4] (create-element :p2 crusader 10 :east))
        attack (build-action [:attack [2 2] [2 4]])
        result (attack board2 :p1)]
    (is (failed? result))
    (is (= "OutOfRange" (result-message result)))))

(deftest attack-same-player-target
  (let [board (place-element board1 [2 3] (create-element :p1 crusader 10 :east))
        attack (build-action [:attack [2 2] [2 3]])
        result (attack board :p1)]
    (is (failed? result))
    (is (= "SamePlayer" (result-message result)))))

(deftest attack-player-name-resolution
  (let [attack (build-action [:attack [2 2] [2 3]])
        result (attack board "p1")]
    (is (succeeded? result))
    (is (= "OK" (result-message result)))))

(deftest attack-player-not-owned
  (let [attack (build-action [:attack [2 2] [2 3]])
        result (attack board :p2)]
    (is (failed? result))
    (is (= "NotOwnedElement" (result-message result)))))

(deftest attack-freeze
  (let [attack (build-action [:attack [2 2] [2 3]])
        result (attack board :p1)
        board (result-board result)
        result2 (attack board :p1)
        board2 (result-board result)
        attacker (get-element board2 [2 2])]
    (is (succeeded? result))
    (is (failed? result2))
    (is (= "FrozenElement" (result-message result2)))
    (is (element/frozen? attacker))))

(deftest attack-simple-success
  (let [attack (build-action [:attack [2 2] [2 3]])
        result (attack board :p1)]
    (is (succeeded? result))))
