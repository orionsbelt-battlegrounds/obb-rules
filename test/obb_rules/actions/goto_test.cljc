(ns obb-rules.actions.goto-test
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
(def toxic (unit/get-unit-by-name "toxic"))
(def pretorian (unit/get-unit-by-name "pretorian"))
(def move-down (action/build-action [:move [2 2] [2 3] 10]))
(def rain-element (element/create-element :p1 rain 10 :south))
(def crusader-element (element/create-element :p1 crusader 10 :south))
(def nova-element (element/create-element :p1 nova 10 :south))
(def pretorian-element (element/create-element :p1 pretorian 10 :south))
(def board (board/place-element (board/create-board) [2 2] rain-element))

(deftest simple-coords-move
  (let [move-far (action/build-action [:goto [2 2] [2 5]])
        result (move-far board :p1)]
    (is (result/succeeded? result))
    (is (= 3 (result/result-cost result)))
    (is (= "OK" (result/result-message result)))))

(deftest fails-if-invalid-from
  (let [move-far (action/build-action [:goto [1 1] [8 8]])
        result (move-far board :p1)]
    (is (result/failed? result))
    (is (= "NoRouteToTarget" (result/result-message result)))))

(deftest fail-if-moves-too-far-away
  (let [move-far (action/build-action [:goto [1 1] [8 8]])
        obstacle-board (-> (board/create-board)
                           (board/place-element [1 1] rain-element))
        result (move-far obstacle-board :p1)]
    (is (result/failed? result))
    (is (= "ActionPointsOverflow" (result/result-message result)))))

(deftest simple-coords-move-diagonal
  (let [move-far (action/build-action [:goto [2 2] [6 6]])
        result (move-far board :p1)]
    (is (result/succeeded? result))
    (is (= 4 (result/result-cost result)))
    (is (= "OK" (result/result-message result)))))

(deftest simple-coords-move-direct-obstacle
  (let [move-far (action/build-action [:goto [2 2] [2 5]])
        obstacle-board (board/place-element board [2 3] pretorian-element)
        result (move-far obstacle-board :p1)]
    (is (result/succeeded? result))
    (is (= 3 (result/result-cost result)))
    (is (= "OK" (result/result-message result)))))

(deftest simple-coords-move-3-obstacles
  (let [move-far (action/build-action [:goto [4 4] [4 7]])
        obstacle-board (-> (board/create-board)
                           (board/place-element [4 4] rain-element)
                           (board/place-element [3 6] pretorian-element)
                           (board/place-element [4 6] pretorian-element)
                           (board/place-element [5 6] pretorian-element))
        result (move-far obstacle-board :p1)]
    (is (result/succeeded? result))
    (is (= 5 (result/result-cost result)))
    (is (= "OK" (result/result-message result)))))

(deftest completely-blocked
  (let [move-far (action/build-action [:goto [1 1] [1 3]])
        obstacle-board (-> (board/create-board)
                           (board/place-element [1 1] rain-element)
                           (board/place-element [1 2] pretorian-element)
                           (board/place-element [2 2] pretorian-element)
                           (board/place-element [2 1] pretorian-element))
        result (move-far obstacle-board :p1)]
    (is (result/failed? result))
    (is (= "NoRouteToTarget" (result/result-message result)))))

(deftest completely-blocked-with-interval
  (let [move-far (action/build-action [:goto [1 1] [1 4]])
        obstacle-board (-> (board/create-board)
                           (board/place-element [1 1] rain-element)
                           (board/place-element [2 1] pretorian-element)
                           (board/place-element [2 2] pretorian-element)
                           (board/place-element [1 3] pretorian-element)
                           (board/place-element [2 3] pretorian-element)
                           (board/place-element [3 3] pretorian-element))
        result (move-far obstacle-board :p1)]
    (is (result/failed? result))
    (is (= "NoRouteToTarget" (result/result-message result)))))

(deftest force-try-other-destination-than-best
  (let [move-far (action/build-action [:goto [1 2] [1 4]])
        obstacle-board (-> (board/create-board)
                           (board/place-element [1 2] rain-element)
                           (board/place-element [2 2] pretorian-element)
                           (board/place-element [1 3] pretorian-element)
                           (board/place-element [2 3] pretorian-element)
                           (board/place-element [3 3] pretorian-element))
        result (move-far obstacle-board :p1)]
    (is (result/failed? result))
    (is (= "NoRouteToTarget" (result/result-message result)))))

(deftest out-of-bounds
  (let [move-far (action/build-action [:goto [8 8] [9 9]])
        result (move-far board :p1)]
    (is (result/failed? result))
    (is (= "OutOfBounds" (result/result-message result)))))

(deftest coordinate-is-from-another-player
  (let [action (action/build-action [:goto [1 1] [2 2] 10])
        element (element/create-element :p2 rain 10 :south)
        board (-> (board/create-board)
                  (board/place-element [1 1] (element/create-element :p1 rain 10 :south [1 1]))
                  (board/place-element [2 2] (element/create-element :p2 rain 10 :south [2 2])))
        result (action board :p1)]
    (is (result/failed? result))
    (is (= "NotOwnedElement" (result/result-message result)))))

(deftest target-coordinate-is-from-another-player
  (let [action (action/build-action [:goto [2 2] [3 3] 10])
        element (element/create-element :p2 rain 10 :south)
        new-board (board/place-element board [3 3] element)
        result (action new-board :p1)]
    (is (result/failed? result))
    (is (= "NotOwnedElement" (result/result-message result)))))

(deftest target-coordinate-is-another-unit
  (let [action (action/build-action [:goto [2 2] [3 3] 10])
        element (element/create-element :p1 crusader 10 :south)
        new-board (board/place-element board [3 3] element)
        result (action new-board :p1)]
    (is (result/failed? result))
    (is (= "UnitMismatch" (result/result-message result)))))

(deftest coordinate-empty
  (let [action (action/build-action [:goto [1 1] [1 2]])
        board (board/create-board)
        result (move-down board :p1)]
    (is (result/failed? result))
    (is (= "EmptyCoordinate" (result/result-message result)))))

(deftest resolve-to-goto-even-if-adjacent
  (let [action (action/build-action [:goto [3 3] [4 4] 10])
        element (element/create-element :p1 toxic 10 :south [3 3])
        new-board (board/place-element board [3 3] element)
        result (action new-board :p1)]
    (is (result/succeeded? result))
    (is (= "OK" (result/result-message result)))))

