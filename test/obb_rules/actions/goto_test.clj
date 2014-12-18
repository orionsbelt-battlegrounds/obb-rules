(ns obb-rules.actions.goto-test
  (:use clojure.test
        obb-rules.action
        obb-rules.actions.move
        obb-rules.board
        obb-rules.element
        obb-rules.result
        obb-rules.unit))

(def rain (get-unit-by-name "rain"))
(def crusader (get-unit-by-name "crusader"))
(def nova (get-unit-by-name "nova"))
(def pretorian (get-unit-by-name "pretorian"))
(def move-down (build-action [:move [2 2] [2 3] 10]))
(def rain-element (create-element :p1 rain 10 :south))
(def crusader-element (create-element :p1 crusader 10 :south))
(def nova-element (create-element :p1 nova 10 :south))
(def pretorian-element (create-element :p1 pretorian 10 :south))
(def board (place-element (create-board) [2 2] rain-element))


(deftest out-of-bounds
  (let [move-far (build-action [:goto [8 8] [9 9]])
        result (move-far board :p1)]
    (is (failed? result))
    (is (= "OutOfBounds" (result-message result)))))

(deftest coordinate-is-from-another-player
  (let [action (build-action [:goto [1 1] [2 2] 10])
        element (create-element :p2 rain 10 :south)
        board (place-element (create-board) [1 1] element)
        result (action board :p1)]
    (is (failed? result))
    (is (= "NotOwnedElement" (result-message result)))))

(deftest target-coordinate-is-from-another-player
  (let [action (build-action [:goto [2 2] [3 3] 10])
        element (create-element :p2 rain 10 :south)
        new-board (place-element board [3 3] element)
        result (action new-board :p1)]
    (is (failed? result))
    (is (= "NotOwnedElement" (result-message result)))))

(deftest target-coordinate-is-another-unit
  (let [action (build-action [:goto [2 2] [3 3] 10])
        element (create-element :p1 crusader 10 :south)
        new-board (place-element board [3 3] element)
        result (action new-board :p1)]
    (is (failed? result))
    (is (= "UnitMismatch" (result-message result)))))

(deftest coordinate-empty
  (let [action (build-action [:goto [1 1] [1 2]])
        board (create-board)
        result (move-down board :p1)]
    (is (failed? result))
    (is (= "EmptyCoordinate" (result-message result)))))
