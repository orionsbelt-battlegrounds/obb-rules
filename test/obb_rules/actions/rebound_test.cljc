(ns obb-rules.actions.rebound-test
  (:require [obb-rules.element :as element]
            [obb-rules.result :as result]
            [obb-rules.action :as action]
            [obb-rules.actions.move :as move]
            [obb-rules.board :as board]
            [obb-rules.unit :as unit]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(def rain (unit/get-unit-by-name "rain"))
(def crusader (unit/get-unit-by-name "crusader"))
(def eagle (unit/get-unit-by-name "eagle"))
(def fenix (unit/get-unit-by-name "fenix"))
(def rain-element (element/create-element :p2 rain 10 :south))
(def eagle-element (element/create-element :p1 eagle 10 :south))
(def fenix-element (element/create-element :p1 fenix 10 :south))
(def crusader-element (element/create-element :p1 crusader 10 :south))

(def board1 (board/place-element (board/create-board) [2 2] crusader-element))
(def board-with-eagle (board/place-element (board/create-board) [2 2] eagle-element))
(def board-with-fenix (board/place-element (board/create-board) [2 2] fenix-element))
(def board (board/place-element board1 [2 3] rain-element))

(deftest attack-fenix-direct
  (let [board (-> board-with-fenix
                  (board/place-element [2 4] rain-element))
        attack (action/build-action [:attack [2 2] [2 4]])
        result (attack board :p1)
        info (first (result/info result))]
    (is (result/succeeded? result))
    (is (= "OK" (result/result-message result)))
    (is (= :direct (info :attack-type)))
    (is (= "rain" (info :unit)))
    (is (nil? (board/get-element (result/result-board result) [2 4])))))

(deftest attack-fenix-rebound
  (let [board (-> board-with-fenix
                  (board/place-element [2 4] rain-element)
                  (board/place-element [2 5] rain-element))
        attack (action/build-action [:attack [2 2] [2 4]])
        result (attack board :p1)
        info (result/info result)
        target-info (first info)
        rebound-info (last info)]
    (is (result/succeeded? result))
    (is (= "OK" (result/result-message result)))
    (is (= :direct (target-info :attack-type)))
    (is (= :rebound (rebound-info :attack-type)))
    (is (nil? (board/get-element (result/result-board result) [2 4])))
    (is (nil? (board/get-element (result/result-board result) [2 5])))))
