(ns obb-rules.actions.move-test
  (:require
    [obb-rules.turn :as turn]
    [obb-rules.action :as action]
    [obb-rules.actions.move :as move]
    [obb-rules.board :as board]
    [obb-rules.element :as element]
    [obb-rules.result :as result]
    [obb-rules.unit :as unit]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(def rain (unit/get-unit-by-name "rain"))
(def crusader (unit/get-unit-by-name "crusader"))
(def nova (unit/get-unit-by-name "nova"))
(def pretorian (unit/get-unit-by-name "pretorian"))
(def panther (unit/get-unit-by-name "panther"))
(def eagle (unit/get-unit-by-name "eagle"))
(def krill (unit/get-unit-by-name "krill"))
(def scarab (unit/get-unit-by-name "scarab"))
(def move-down (action/build-action [:move [2 2] [2 3] 10]))
(def rain-element (element/create-element :p1 rain 10 :south))
(def crusader-element (element/create-element :p1 crusader 10 :south))
(def nova-element (element/create-element :p1 nova 10 :south))
(def pretorian-element (element/create-element :p1 pretorian 10 :south))
(def board (board/place-element (board/create-board) [2 2] rain-element))

(defn- test-complete-move-action
  "Tests a movement outcome"
  [board old-coord new-coord expected-success? move-action]
  (let [move (action/build-action [move-action old-coord new-coord])
        result (move board :p1)
        efrom (board/get-element board old-coord)
        possible-moves (move/find-possible-destinations board efrom)]
    (if expected-success?
      (do
        (is (result/succeeded? result))
        (if (result/succeeded? result)
          (let [new-board (result/result-board result)
                new-element (board/get-element new-board new-coord)
                old-element (board/get-element new-board old-coord)]
            (is (some #(= new-coord %) possible-moves))
            (is (not old-element))
            (is new-element)
            (element/assert-element new-element))))
      (do
        (is (not (some #(= new-coord %) possible-moves)))
        (is (result/failed? result))))))

(defn- test-complete-move
  "Tests a movement using the :move and :goto actions"
  [board old-coord new-coord expected-success?]
  (test-complete-move-action board old-coord new-coord expected-success? :move)
  (test-complete-move-action board old-coord new-coord expected-success? :goto))

(deftest front-movement-east
  (let [element (element/element-direction crusader-element :east)
        board (board/place-element (board/create-board) [2 2] element)]
    (test-complete-move board [2 2] [1 1] false)
    (test-complete-move board [2 2] [1 2] false)
    (test-complete-move board [2 2] [1 3] false)
    (test-complete-move board [2 2] [2 1] false)
    (test-complete-move board [2 2] [2 3] false)
    (test-complete-move board [2 2] [3 1] false)
    (test-complete-move board [2 2] [3 2] true)
    (test-complete-move board [2 2] [3 3] false)))

(deftest front-movement-north
  (let [element (element/element-direction crusader-element :west)
        board (board/place-element (board/create-board) [2 2] element)]
    (test-complete-move board [2 2] [1 1] false)
    (test-complete-move board [2 2] [1 2] true)
    (test-complete-move board [2 2] [1 3] false)
    (test-complete-move board [2 2] [2 1] false)
    (test-complete-move board [2 2] [2 3] false)
    (test-complete-move board [2 2] [3 1] false)
    (test-complete-move board [2 2] [3 2] false)
    (test-complete-move board [2 2] [3 3] false)))

(deftest front-movement-south
  (let [board (board/place-element (board/create-board) [2 2] crusader-element)]
    (test-complete-move board [2 2] [1 1] false)
    (test-complete-move board [2 2] [1 2] false)
    (test-complete-move board [2 2] [1 3] false)
    (test-complete-move board [2 2] [2 1] false)
    (test-complete-move board [2 2] [2 3] true)
    (test-complete-move board [2 2] [3 1] false)
    (test-complete-move board [2 2] [3 2] false)
    (test-complete-move board [2 2] [3 3] false)))

(deftest front-movement-north
  (let [element (element/element-direction crusader-element :north)
        board (board/place-element (board/create-board) [2 2] element)]
    (test-complete-move board [2 2] [1 1] false)
    (test-complete-move board [2 2] [1 2] false)
    (test-complete-move board [2 2] [1 3] false)
    (test-complete-move board [2 2] [2 1] true)
    (test-complete-move board [2 2] [2 3] false)
    (test-complete-move board [2 2] [3 1] false)
    (test-complete-move board [2 2] [3 2] false)
    (test-complete-move board [2 2] [3 3] false)))

(deftest normal-movement
  (let [board (board/place-element (board/create-board) [2 2] nova-element)]
    (test-complete-move board [2 2] [1 1] false)
    (test-complete-move board [2 2] [1 2] true)
    (test-complete-move board [2 2] [1 3] false)
    (test-complete-move board [2 2] [2 1] true)
    (test-complete-move board [2 2] [2 3] true)
    (test-complete-move board [2 2] [3 1] false)
    (test-complete-move board [2 2] [3 2] true)
    (test-complete-move board [2 2] [3 3] false)))

(deftest diagonal-movement
  (let [board (board/place-element (board/create-board) [2 2] pretorian-element)]
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
        move (action/build-action [:move old-coord new-coord])
        result (move board :p1)
        new-board (result/result-board result)
        new-element (board/get-element new-board new-coord)]
    (is (result/succeeded? result))
    (is new-element)
    (is (= 10 (element/element-quantity new-element)))))

(deftest partial-movement

  (testing "partial-movement"
    (let [old-coord [2 2]
          new-coord [1 2]
          move (action/build-action [:move old-coord new-coord 4])
          result (move board :p1)
          new-board (result/result-board result)
          new-element (board/get-element new-board new-coord)
          old-element (board/get-element new-board old-coord)]
      (is (result/succeeded? result))
      (is old-element)
      (is new-element)
      (is (= 2 (result/result-cost result)))
      (is (= 4 (element/element-quantity new-element)))
      (is (= 6 (element/element-quantity old-element))))))

(deftest cost
  (testing "full move cost"
    (is (= 2 (move/movement-cost rain true)))
    (is (= 1 (move/movement-cost rain false)))))

(deftest should-support-key-string-on-player
  (let [action (action/build-action [:move [1 1] [2 2] 10])
        element (element/create-element "p1" rain 10 :south)
        board (board/place-element (board/create-board) [1 1] element)
        result (action board :p1)]
    (is (result/succeeded? result))
    (is (= "OK" (result/result-message result)))))

(deftest generic-movement

  (testing "failures"

    (testing "fails if quantity is not the minimum percentage"
      (let [old-coord [2 2]
            new-coord [1 2]
            move (action/build-action [:move old-coord new-coord 1])
            result (move board :p1)]
        (is (result/failed? result))
        (is (= "InvalidQuantityPercentage" (result/result-message result)))))

    (testing "fails if quantity is not the maximum percentage"
      (let [old-coord [2 2]
            new-coord [1 2]
            move (action/build-action [:move old-coord new-coord 9])
            result (move board :p1)]
        (is (result/failed? result))
        (is (= "InvalidQuantityPercentage" (result/result-message result)))))

    (testing "not adjacent"
      (let [move-far (action/build-action [:move [2 2] [4 4] 10])
            result (move-far board :p1)]
        (is (result/failed? result))
        (is (= "NotAdjacent" (result/result-message result)))))

    (testing "out of bounds"
      (let [move-far (action/build-action [:move [8 8] [9 9] 10])
            result (move-far board :p1)]
        (is (result/failed? result))
        (is (= "OutOfBounds" (result/result-message result)))))

    (testing "coordinate is from another player"
      (let [action (action/build-action [:move [1 1] [2 2] 10])
            element (element/create-element :p2 rain 10 :south)
            board (board/place-element (board/create-board) [1 1] element)
            result (action board :p1)]
        (is (result/failed? result))
        (is (= "NotOwnedElement" (result/result-message result)))))

    (testing "target coordinate is from another player"
      (let [action (action/build-action [:move [2 2] [3 3] 10])
            element (element/create-element :p2 rain 10 :south)
            new-board (board/place-element board [3 3] element)
            result (action new-board :p1)]
        (is (result/failed? result))
        (is (= "NotOwnedElement" (result/result-message result)))))

    (testing "target coordinate is another unit"
      (let [action (action/build-action [:move [2 2] [3 3] 10])
            element (element/create-element :p1 crusader 10 :south)
            new-board (board/place-element board [3 3] element)
            result (action new-board :p1)]
        (is (result/failed? result))
        (is (= "UnitMismatch" (result/result-message result)))))

    (testing "target element is frozen"
      (let [action (action/build-action [:move [2 2] [3 3] 10])
            element (-> (element/create-element :p1 rain 10 :south)
                        (element/freeze))
            new-board (board/place-element board [3 3] element)
            result (action new-board :p1)]
        (is (result/failed? result))
        (is (= "FrozenElement" (result/result-message result)))))

    (testing "from element is frozen"
      (let [action (action/build-action [:move [2 2] [3 3] 10])
            new-board (board/place-element (board/create-board) [2 2] (-> rain-element element/freeze))
            result (action new-board :p1)]
        (is (result/failed? result))
        (is (= "FrozenElement" (result/result-message result)))))

    (testing "coordinate empty"
      (let [action (action/build-action [:move [1 1] [1 2] :10])
            board (board/create-board)
            result (move-down board :p1)]
        (is (result/failed? result))
        (is (= "EmptyCoordinate" (result/result-message result)))))))

(deftest find-all-possible-destinations-crusader
  (let [board (board/create-board)
        element (element/create-element :p1 crusader 1 :south [1 1])
        all (move/find-all-possible-destinations board element)]
    (is all)
    (is (= 1 (count all)))
    (is (= [1 2] (first all)))))

(deftest find-all-possible-destinations-with-cost-crusader
  (let [board (board/create-board)
        element (element/create-element :p1 crusader 1 :south [1 1])
        all (move/find-all-possible-destinations-with-cost board element)]
    (is all)
    (is (= 1 (count all)))
    (is (= 4 (get all [1 2])))))

(deftest find-all-possible-destinations-pretorian
  (let [board (board/create-board)
        element (element/create-element :p1 pretorian 10 :south [1 1])
        all (move/find-all-possible-destinations board element)]
    (is all)
    (is (= 7 (count all)))
    (is (some #{[3 1] [2 2] [4 2] [2 4] [4 4] [1 3] [3 3]} all))))

(deftest find-all-possible-destinations-with-cost-pretorian
  (let [board (board/create-board)
        element (element/create-element :p1 pretorian 10 :south [1 1])
        all (move/find-all-possible-destinations-with-cost board element)]
    (is all)
    (is (= 7 (count all)))
    (is (= 2 (get all [2 2])))
    (is (= 4 (get all [1 3])))
    (is (= 4 (get all [3 1])))
    (is (= 4 (get all [3 3])))
    (is (= 6 (get all [4 2])))
    (is (= 6 (get all [4 4])))
    (is (= 6 (get all [2 4])))))

(deftest find-all-possible-destinations-rain
  (let [board (board/create-board)
        element (element/create-element :p1 rain 10 :south [4 4])
        all (move/find-all-possible-destinations board element)]
    (is all)
    (is (= 63 (count all)))))

(deftest find-all-possible-destinations-with-cost-rain
  (let [board (board/create-board)
        element (element/create-element :p1 rain 10 :south [4 4])
        all (move/find-all-possible-destinations-with-cost board element)]
    (is all)
    (is (= 63 (count all)))))

(deftest move-using-destroyed-space
  (let [board (-> (board/create-board)
                  (board/place-element [2 6] (element/create-element :p1 eagle 50 :north))
                  (board/place-element [2 5] (element/create-element :p1 krill 50 :north))
                  (board/place-element [2 4] (element/create-element :p2 scarab 1 :south))
                  (board/place-element [2 3] (element/create-element :p2 scarab 1 :south)))
        clear-obstacle-attack [:attack [2 6] [2 4]]
        should-fail-move [:move [2 5] [2 4]]
        result (turn/process-actions board :p1 [clear-obstacle-attack should-fail-move])]
    (is (result/failed? result))))

(deftest move-using-previous-occupied-space
  (let [board (-> (board/create-board)
                  (board/place-element [8 4] (element/create-element :p1 panther 100 :north))
                  (board/place-element [7 4] (element/create-element :p1 nova 25 :north)))
        move1 [:move [7 4] [7 5]]
        move2 [:move [8 4] [7 4]]
        result (turn/process-actions board :p1 [move1 move2])]
    (is (result/succeeded? result))
    (is (= "TurnOK" (:message result)))))

