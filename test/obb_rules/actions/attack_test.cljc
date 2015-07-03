(ns obb-rules.actions.attack-test
  (:require [obb-rules.element :as element]
            [obb-rules.result :as result]
            [obb-rules.action :as action]
            [obb-rules.board :as board]
            [obb-rules.unit :as unit]
            [obb-rules.turn :as turn]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(def rain (unit/get-unit-by-name "rain"))
(def crusader (unit/get-unit-by-name "crusader"))
(def eagle (unit/get-unit-by-name "eagle"))
(def krill (unit/get-unit-by-name "krill"))
(def scarab (unit/get-unit-by-name "scarab"))
(def fenix (unit/get-unit-by-name "fenix"))
(def rain-element (element/create-element :p2 rain 10 :south))
(def eagle-element (element/create-element :p1 eagle 10 :south))
(def fenix-element (element/create-element :p1 fenix 10 :south))
(def crusader-element (element/create-element :p1 crusader 10 :south))

(def board1 (board/place-element (board/create-board) [2 2] crusader-element))
(def board-with-eagle (board/place-element (board/create-board) [2 2] eagle-element))
(def board-with-fenix (board/place-element (board/create-board) [2 2] fenix-element))
(def board (board/place-element board1 [2 3] rain-element))

(deftest attack-hitpoints
  (let [crusader-element (element/create-element :p1 crusader 1 :south)
        rain-element (element/create-element :p2 rain 1 :north)
        board (board/create-board)
        cboard (board/place-element board [1 1] crusader-element)
        rboard (board/place-element cboard [1 2] rain-element)
        attack (action/build-action [:attack [1 2] [1 1]])]
    (loop [board rboard]
      (let [clean-board (board/swap-element board [1 2] rain-element)
            result (attack clean-board :p2)
            after-attack (result/result-board result)
            crusader-element (board/get-element after-attack [1 1])]
        (if crusader-element
          (recur after-attack)
          (is (nil? crusader-element)))))))

(deftest attack-emtpy-target
  (let [attack (action/build-action [:attack [2 2] [2 3]])
        result (attack board1 :p1)]
    (is (= "EmptyTarget" (result/result-message result)))))

(deftest attack-int-destroyed
  (let [board (-> (board/create-board)
                  (board/place-element [2 6] (element/create-element :p1 krill 50 :north))
                  (board/place-element [2 5] (element/create-element :p2 scarab 50 :south)))
        attack (action/build-action [:attack [2 6] [2 5]])
        result (attack board :p1)]
    (is (integer? (get-in result [:board :elements [2 5] :quantity])))
    (is (empty? (get-in result [:board :removed-elements])))
    (is (result/succeeded? result))))

(deftest attack-using-destroyed-space
  (let [board (-> (board/create-board)
                  (board/place-element [2 6] (element/create-element :p1 eagle 50 :north))
                  (board/place-element [2 5] (element/create-element :p1 krill 50 :north))
                  (board/place-element [2 4] (element/create-element :p2 scarab 1 :south))
                  (board/place-element [2 3] (element/create-element :p2 scarab 1 :south)))
        clear-obstacle-attack [:attack [2 6] [2 4]]
        should-fail-attack [:attack [2 5] [2 3]]
        result (turn/process-actions board :p1 [clear-obstacle-attack should-fail-attack])]
    (is (result/failed? result))
    (is (get-in result [:board :removed-elements]))))

(deftest attack-in-range-target
  (let [board (board/place-element board1 [2 6] (element/create-element :p2 crusader 10 :east))
        attack (action/build-action [:attack [2 2] [2 6]])
        result (attack board :p1)]
    (is (result/succeeded? result))))

(deftest attack-out-of-range-target
  (let [board (board/place-element board1 [3 3] (element/create-element :p2 crusader 10 :east))
        attack (action/build-action [:attack [2 2] [3 3]])
        result (attack board :p1)]
    (is (result/failed? result))
    (is (= "OutOfRange" (result/result-message result)))))

(deftest attack-obstacle
  (let [board (board/place-element board1 [2 3] (element/create-element :p2 crusader 10 :east))
        board2 (board/place-element board [2 4] (element/create-element :p2 crusader 10 :east))
        attack (action/build-action [:attack [2 2] [2 4]])
        result (attack board2 :p1)]
    (is (result/failed? result))
    (is (= "OutOfRange" (result/result-message result)))))

(deftest attack-same-player-target
  (let [board (board/place-element board1 [2 3] (element/create-element :p1 crusader 10 :east))
        attack (action/build-action [:attack [2 2] [2 3]])
        result (attack board :p1)]
    (is (result/failed? result))
    (is (= "SamePlayer" (result/result-message result)))))

(deftest attack-player-name-resolution
  (let [attack (action/build-action [:attack [2 2] [2 3]])
        result (attack board "p1")]
    (is (result/succeeded? result))
    (is (= "OK" (result/result-message result)))))

(deftest attack-player-not-owned
  (let [attack (action/build-action [:attack [2 2] [2 3]])
        result (attack board :p2)]
    (is (result/failed? result))
    (is (= "NotOwnedElement" (result/result-message result)))))

(deftest attack-freeze
  (let [attack (action/build-action [:attack [2 2] [2 3]])
        result (attack board :p1)
        board (result/result-board result)
        result2 (attack board :p1)
        board2 (result/result-board result)
        attacker (board/get-element board2 [2 2])]
    (is (result/succeeded? result))
    (is (result/failed? result2))
    (is (= "FrozenElement" (result/result-message result2)))
    (is (element/frozen? attacker))))

(deftest attack-simple-success
  (let [attack (action/build-action [:attack [2 2] [2 3]])
        result (attack board :p1)]
    (is (result/succeeded? result))))
