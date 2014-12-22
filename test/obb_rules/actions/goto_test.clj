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

(deftest simple-coords-move
  (let [move-far (build-action [:goto [2 2] [2 5]])
        result (move-far board :p1)]
    (is (succeeded? result))
    (is (= 3 (result-cost result)))
    (is (= "OK" (result-message result)))))

(deftest fails-if-invalid-from
  (let [move-far (build-action [:goto [1 1] [8 8]])
        result (move-far board :p1)]
    (is (failed? result))
    (is (= "NoRouteToTarget" (result-message result)))))

(deftest fail-if-moves-too-far-away
  (let [move-far (build-action [:goto [1 1] [8 8]])
        obstacle-board (-> (create-board)
                           (place-element [1 1] rain-element))
        result (move-far obstacle-board :p1)]
    (is (failed? result))
    (is (= "ActionPointsOverflow" (result-message result)))))

(deftest simple-coords-move-diagonal
  (let [move-far (build-action [:goto [2 2] [6 6]])
        result (move-far board :p1)]
    (is (succeeded? result))
    (is (= 4 (result-cost result)))
    (is (= "OK" (result-message result)))))

(deftest simple-coords-move-direct-obstacle
  (let [move-far (build-action [:goto [2 2] [2 5]])
        obstacle-board (place-element board [2 3] pretorian-element)
        result (move-far obstacle-board :p1)]
    (is (succeeded? result))
    (is (= 3 (result-cost result)))
    (is (= "OK" (result-message result)))))

(deftest simple-coords-move-3-obstacles
  (let [move-far (build-action [:goto [4 4] [4 7]])
        obstacle-board (-> (create-board)
                           (place-element [4 4] rain-element)
                           (place-element [3 6] pretorian-element)
                           (place-element [4 6] pretorian-element)
                           (place-element [5 6] pretorian-element))
        result (move-far obstacle-board :p1)]
    (is (succeeded? result))
    (is (= 5 (result-cost result)))
    (is (= "OK" (result-message result)))))

(deftest completely-blocked
  (let [move-far (build-action [:goto [1 1] [1 3]])
        obstacle-board (-> (create-board)
                           (place-element [1 1] rain-element)
                           (place-element [1 2] pretorian-element)
                           (place-element [2 2] pretorian-element)
                           (place-element [2 1] pretorian-element))
        result (move-far obstacle-board :p1)]
    (is (failed? result))
    (is (= "NoRouteToTarget" (result-message result)))))

(deftest completely-blocked-with-interval
  (let [move-far (build-action [:goto [1 1] [1 4]])
        obstacle-board (-> (create-board)
                           (place-element [1 1] rain-element)
                           (place-element [2 1] pretorian-element)
                           (place-element [2 2] pretorian-element)
                           (place-element [1 3] pretorian-element)
                           (place-element [2 3] pretorian-element)
                           (place-element [3 3] pretorian-element))
        result (move-far obstacle-board :p1)]
    (is (failed? result))
    (is (= "NoRouteToTarget" (result-message result)))))

(deftest force-try-other-destination-than-best
  (let [move-far (build-action [:goto [1 2] [1 4]])
        obstacle-board (-> (create-board)
                           (place-element [1 2] rain-element)
                           (place-element [2 2] pretorian-element)
                           (place-element [1 3] pretorian-element)
                           (place-element [2 3] pretorian-element)
                           (place-element [3 3] pretorian-element))
        result (move-far obstacle-board :p1)]
    (is (failed? result))
    (is (= "NoRouteToTarget" (result-message result)))))

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
