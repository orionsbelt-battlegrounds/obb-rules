(ns obb-rules.actions.move-test
  (:use clojure.test
        obb-rules.action
        obb-rules.actions.move
        obb-rules.board
        obb-rules.element
        obb-rules.result
        obb-rules.unit))

(def rain (get-unit-by-name "rain"))
(def move-down (build-action [:move :p1 [2 2] [2 3] 10]))
(def rain-element (create-element :p1 rain 10 :south))
(def board (place-element (create-board) [2 2] rain-element))

(deftest generic-movement

  (testing "failures"

    (testing "not adjacent"
      (let [move-far (build-action [:move :p1 [2 2] [4 4] 10])
            result (move-far board)]
        (is (failed? result))
        (is (= "NotAdjacent" (result-message result)))))

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

    (testing "coordinate empty"
      (let [action (build-action [:move :p1 [1 1] [1 2] :10])
            board (create-board)
            result (move-down board)]
        (is (failed? result))
        (is (= "EmptyCoordinate" (result-message result)))))))
