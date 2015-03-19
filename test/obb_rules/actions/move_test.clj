(ns obb-rules.actions.move-test
  (:require [obb-rules.turn :as turn])
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
(def panther (get-unit-by-name "panther"))
(def eagle (get-unit-by-name "eagle"))
(def krill (get-unit-by-name "krill"))
(def scarab (get-unit-by-name "scarab"))
(def move-down (build-action [:move [2 2] [2 3] 10]))
(def rain-element (create-element :p1 rain 10 :south))
(def crusader-element (create-element :p1 crusader 10 :south))
(def nova-element (create-element :p1 nova 10 :south))
(def pretorian-element (create-element :p1 pretorian 10 :south))
(def board (place-element (create-board) [2 2] rain-element))

(defn- test-complete-move-action
  "Tests a movement outcome"
  [board old-coord new-coord expected-success? move-action]
  (let [move (build-action [move-action old-coord new-coord])
        result (move board :p1)
        efrom (get-element board old-coord)
        possible-moves (find-possible-destinations board efrom)]
    (if expected-success?
      (do
        (is (succeeded? result))
        (if (succeeded? result)
          (let [new-board (result-board result)
                new-element (get-element new-board new-coord)
                old-element (get-element new-board old-coord)]
            (is (some #(= new-coord %) possible-moves))
            (is (not old-element))
            (is new-element)
            (assert-element new-element))))
      (do
        (is (not (some #(= new-coord %) possible-moves)))
        (is (failed? result))))))

(defn- test-complete-move
  "Tests a movement using the :move and :goto actions"
  [board old-coord new-coord expected-success?]
  (test-complete-move-action board old-coord new-coord expected-success? :move)
  (test-complete-move-action board old-coord new-coord expected-success? :goto))

(deftest front-movement-east
  (let [element (element-direction crusader-element :east)
        board (place-element (create-board) [2 2] element)]
    (test-complete-move board [2 2] [1 1] false)
    (test-complete-move board [2 2] [1 2] false)
    (test-complete-move board [2 2] [1 3] false)
    (test-complete-move board [2 2] [2 1] false)
    (test-complete-move board [2 2] [2 3] false)
    (test-complete-move board [2 2] [3 1] false)
    (test-complete-move board [2 2] [3 2] true)
    (test-complete-move board [2 2] [3 3] false)))

(deftest front-movement-north
  (let [element (element-direction crusader-element :west)
        board (place-element (create-board) [2 2] element)]
    (test-complete-move board [2 2] [1 1] false)
    (test-complete-move board [2 2] [1 2] true)
    (test-complete-move board [2 2] [1 3] false)
    (test-complete-move board [2 2] [2 1] false)
    (test-complete-move board [2 2] [2 3] false)
    (test-complete-move board [2 2] [3 1] false)
    (test-complete-move board [2 2] [3 2] false)
    (test-complete-move board [2 2] [3 3] false)))

(deftest front-movement-south
  (let [board (place-element (create-board) [2 2] crusader-element)]
    (test-complete-move board [2 2] [1 1] false)
    (test-complete-move board [2 2] [1 2] false)
    (test-complete-move board [2 2] [1 3] false)
    (test-complete-move board [2 2] [2 1] false)
    (test-complete-move board [2 2] [2 3] true)
    (test-complete-move board [2 2] [3 1] false)
    (test-complete-move board [2 2] [3 2] false)
    (test-complete-move board [2 2] [3 3] false)))

(deftest front-movement-north
  (let [element (element-direction crusader-element :north)
        board (place-element (create-board) [2 2] element)]
    (test-complete-move board [2 2] [1 1] false)
    (test-complete-move board [2 2] [1 2] false)
    (test-complete-move board [2 2] [1 3] false)
    (test-complete-move board [2 2] [2 1] true)
    (test-complete-move board [2 2] [2 3] false)
    (test-complete-move board [2 2] [3 1] false)
    (test-complete-move board [2 2] [3 2] false)
    (test-complete-move board [2 2] [3 3] false)))

(deftest normal-movement
  (let [board (place-element (create-board) [2 2] nova-element)]
    (test-complete-move board [2 2] [1 1] false)
    (test-complete-move board [2 2] [1 2] true)
    (test-complete-move board [2 2] [1 3] false)
    (test-complete-move board [2 2] [2 1] true)
    (test-complete-move board [2 2] [2 3] true)
    (test-complete-move board [2 2] [3 1] false)
    (test-complete-move board [2 2] [3 2] true)
    (test-complete-move board [2 2] [3 3] false)))

(deftest diagonal-movement
  (let [board (place-element (create-board) [2 2] pretorian-element)]
    (test-complete-move board [2 2] [1 1] true)
    (test-complete-move board [2 2] [1 2] false)
    (test-complete-move board [2 2] [1 3] true)
    (test-complete-move board [2 2] [2 1] false)
    (test-complete-move board [2 2] [2 3] false)
    (test-complete-move board [2 2] [3 1] true)
    (test-complete-move board [2 2] [3 2] false)
    (test-complete-move board [2 2] [3 3] true)))

(deftest all-movement
  (test-complete-move board [2 2] [1 1] true)
  (test-complete-move board [2 2] [1 2] true)
  (test-complete-move board [2 2] [1 3] true)
  (test-complete-move board [2 2] [2 1] true)
  (test-complete-move board [2 2] [2 3] true)
  (test-complete-move board [2 2] [3 1] true)
  (test-complete-move board [2 2] [3 2] true)
  (test-complete-move board [2 2] [3 3] true))

(deftest allow-default-quantity
  (let [old-coord [2 2]
        new-coord [1 2]
        move (build-action [:move old-coord new-coord])
        result (move board :p1)
        new-board (result-board result)
        new-element (get-element new-board new-coord)]
    (is (succeeded? result))
    (is new-element)
    (is (= 10 (element-quantity new-element)))))

(deftest partial-movement

  (testing "partial-movement"
    (let [old-coord [2 2]
          new-coord [1 2]
          move (build-action [:move old-coord new-coord 4])
          result (move board :p1)
          new-board (result-board result)
          new-element (get-element new-board new-coord)
          old-element (get-element new-board old-coord)]
      (is (succeeded? result))
      (is old-element)
      (is new-element)
      (is (= 2 (result-cost result)))
      (is (= 4 (element-quantity new-element)))
      (is (= 6 (element-quantity old-element))))))

(deftest cost
  (testing "full move cost"
    (is (= 2 (movement-cost rain true)))
    (is (= 1 (movement-cost rain false)))))

(deftest should-support-key-string-on-player
  (let [action (build-action [:move [1 1] [2 2] 10])
        element (create-element "p1" rain 10 :south)
        board (place-element (create-board) [1 1] element)
        result (action board :p1)]
    (is (succeeded? result))
    (is (= "OK" (result-message result)))))

(deftest generic-movement

  (testing "failures"

    (testing "fails if quantity is not the minimum percentage"
      (let [old-coord [2 2]
            new-coord [1 2]
            move (build-action [:move old-coord new-coord 1])
            result (move board :p1)]
        (is (failed? result))
        (is (= "InvalidQuantityPercentage" (result-message result)))))

    (testing "fails if quantity is not the maximum percentage"
      (let [old-coord [2 2]
            new-coord [1 2]
            move (build-action [:move old-coord new-coord 9])
            result (move board :p1)]
        (is (failed? result))
        (is (= "InvalidQuantityPercentage" (result-message result)))))

    (testing "not adjacent"
      (let [move-far (build-action [:move [2 2] [4 4] 10])
            result (move-far board :p1)]
        (is (failed? result))
        (is (= "NotAdjacent" (result-message result)))))

    (testing "out of bounds"
      (let [move-far (build-action [:move [8 8] [9 9] 10])
            result (move-far board :p1)]
        (is (failed? result))
        (is (= "OutOfBounds" (result-message result)))))

    (testing "coordinate is from another player"
      (let [action (build-action [:move [1 1] [2 2] 10])
            element (create-element :p2 rain 10 :south)
            board (place-element (create-board) [1 1] element)
            result (action board :p1)]
        (is (failed? result))
        (is (= "NotOwnedElement" (result-message result)))))

    (testing "target coordinate is from another player"
      (let [action (build-action [:move [2 2] [3 3] 10])
            element (create-element :p2 rain 10 :south)
            new-board (place-element board [3 3] element)
            result (action new-board :p1)]
        (is (failed? result))
        (is (= "NotOwnedElement" (result-message result)))))

    (testing "target coordinate is another unit"
      (let [action (build-action [:move [2 2] [3 3] 10])
            element (create-element :p1 crusader 10 :south)
            new-board (place-element board [3 3] element)
            result (action new-board :p1)]
        (is (failed? result))
        (is (= "UnitMismatch" (result-message result)))))

    (testing "target element is frozen"
      (let [action (build-action [:move [2 2] [3 3] 10])
            element (-> (create-element :p1 rain 10 :south)
                        (freeze))
            new-board (place-element board [3 3] element)
            result (action new-board :p1)]
        (is (failed? result))
        (is (= "FrozenElement" (result-message result)))))

    (testing "from element is frozen"
      (let [action (build-action [:move [2 2] [3 3] 10])
            new-board (place-element (create-board) [2 2] (-> rain-element freeze))
            result (action new-board :p1)]
        (is (failed? result))
        (is (= "FrozenElement" (result-message result)))))

    (testing "coordinate empty"
      (let [action (build-action [:move [1 1] [1 2] :10])
            board (create-board)
            result (move-down board :p1)]
        (is (failed? result))
        (is (= "EmptyCoordinate" (result-message result)))))))

(deftest find-all-possible-destinations-crusader
  (let [board (create-board)
        element (create-element :p1 crusader 1 :south [1 1])
        all (find-all-possible-destinations board element)]
    (is all)
    (is (= 1 (count all)))
    (is (= [1 2] (first all)))))

(deftest find-all-possible-destinations-with-cost-crusader
  (let [board (create-board)
        element (create-element :p1 crusader 1 :south [1 1])
        all (find-all-possible-destinations-with-cost board element)]
    (is all)
    (is (= 1 (count all)))
    (is (= 4 (get all [1 2])))))

(deftest find-all-possible-destinations-pretorian
  (let [board (create-board)
        element (create-element :p1 pretorian 10 :south [1 1])
        all (find-all-possible-destinations board element)]
    (is all)
    (is (= 7 (count all)))
    (is (some #{[3 1] [2 2] [4 2] [2 4] [4 4] [1 3] [3 3]} all))))

(deftest find-all-possible-destinations-rain
  (let [board (create-board)
        element (create-element :p1 rain 10 :south [4 4])
        all (find-all-possible-destinations board element)]
    (is all)
    (is (= 63 (count all)))))

(deftest find-all-possible-destinations-with-cost-rain
  (let [board (create-board)
        element (create-element :p1 rain 10 :south [4 4])
        all (find-all-possible-destinations-with-cost board element)]
    (is all)
    (is (= 63 (count all)))))

(deftest move-using-destroyed-space
  (let [board (-> (create-board)
                  (place-element [2 6] (create-element :p1 eagle 50 :north))
                  (place-element [2 5] (create-element :p1 krill 50 :north))
                  (place-element [2 4] (create-element :p2 scarab 1 :south))
                  (place-element [2 3] (create-element :p2 scarab 1 :south)))
        clear-obstacle-attack [:attack [2 6] [2 4]]
        should-fail-move [:move [2 5] [2 4]]
        result (turn/process-actions board :p1 [clear-obstacle-attack should-fail-move])]
    (is (failed? result))))

(deftest move-using-previous-occupied-space
  (let [board (-> (create-board)
                  (place-element [8 4] (create-element :p1 panther 100 :north))
                  (place-element [7 4] (create-element :p1 nova 25 :north)))
        move1 [:move [7 4] [7 5]]
        move2 [:move [8 4] [7 4]]
        result (turn/process-actions board :p1 [move1 move2])]
    (is (succeeded? result))
    (is (= "TurnOK" (:message result)))))

