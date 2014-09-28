(ns obb-rules.actions.move-test
  (:use clojure.test
        obb-rules.action
        obb-rules.actions.move
        obb-rules.board
        obb-rules.element
        obb-rules.result
        obb-rules.unit))

(def rain (get-unit-by-name "rain"))
(def crusader (get-unit-by-name "crusader"))
(def move-down (build-action [:move :p1 [2 2] [2 3] 10]))
(def rain-element (create-element :p1 rain 10 :south))
(def board (place-element (create-board) [2 2] rain-element))

(defn- test-complete-move
  [board old-coord new-coord]
  (let [move (build-action [:move :p1 old-coord new-coord 10])
        result (move board)
        new-board (result-board result)
        new-element (get-element new-board new-coord)
        old-element (get-element new-board old-coord)]
    (is (succeeded? result))
    (is (not old-element))
    (is new-element)))

(deftest all-movement

  (testing "all movement complete"
    (test-complete-move board [2 2] [1 1])
    (test-complete-move board [2 2] [1 2])
    (test-complete-move board [2 2] [1 3])
    (test-complete-move board [2 2] [2 1])
    (test-complete-move board [2 2] [2 3])
    (test-complete-move board [2 2] [3 1])
    (test-complete-move board [2 2] [3 2])
    (test-complete-move board [2 2] [3 3])))

(deftest cost
  (testing "full move cost"
    (is (= 2 (movement-cost rain true)))
    (is (= 1 (movement-cost rain false)))))

(deftest generic-movement

  (testing "failures"

    (testing "not adjacent"
      (let [move-far (build-action [:move :p1 [2 2] [4 4] 10])
            result (move-far board)]
        (is (failed? result))
        (is (= "NotAdjacent" (result-message result)))))

    (testing "out of bounds"
      (let [move-far (build-action [:move :p1 [8 8] [9 9] 10])
            result (move-far board)]
        (is (failed? result))
        (is (= "OutOfBounds" (result-message result)))))

    (testing "coordinate is from another player"
      (let [action (build-action [:move :p1 [1 1] [2 2] 10])
            element (create-element :p2 rain 10 :south)
            board (place-element (create-board) [1 1] element)
            result (action board)]
        (is (failed? result))
        (is (= "NotOwnedElement" (result-message result)))))

    (testing "target coordinate is from another player"
      (let [action (build-action [:move :p1 [2 2] [3 3] 10])
            element (create-element :p2 rain 10 :south)
            new-board (place-element board [3 3] element)
            result (action new-board)]
        (is (failed? result))
        (is (= "NotOwnedElement" (result-message result)))))

    (testing "target coordinate is another unit"
      (let [action (build-action [:move :p1 [2 2] [3 3] 10])
            element (create-element :p1 crusader 10 :south)
            new-board (place-element board [3 3] element)
            result (action new-board)]
        (is (failed? result))
        (is (= "UnitMismatch" (result-message result)))))

    (testing "coordinate empty"
      (let [action (build-action [:move :p1 [1 1] [1 2] :10])
            board (create-board)
            result (move-down board)]
        (is (failed? result))
        (is (= "EmptyCoordinate" (result-message result)))))))
