(ns obb-rules.actions.triple-attack-test
  (:require [obb-rules.element :as element]
            [obb-rules.result :as result]
            [obb-rules.action :as action]
            [obb-rules.board :as board]
            [obb-rules.unit :as unit]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(def rain (unit/get-unit-by-name "rain"))
(def crusader (unit/get-unit-by-name "crusader"))
(def eagle (unit/get-unit-by-name "eagle"))
(def driller (unit/get-unit-by-name "driller"))
(def rain-element (element/create-element :p2 rain 10 :south))
(def eagle-element (element/create-element :p1 eagle 10 :south))
(def driller-element (element/create-element :p1 driller 10 :south))
(def crusader-element (element/create-element :p1 crusader 10 :south))

(def board1 (board/place-element (board/create-board) [2 2] crusader-element))
(def board-with-eagle (board/place-element (board/create-board) [2 2] eagle-element))
(def board-with-driller (board/place-element (board/create-board) [2 2] driller-element))
(def board (board/place-element board1 [2 3] rain-element))

(deftest attack-driller-direct
  (let [board (-> board-with-driller
                  (board/place-element [2 3] rain-element))
        attack (action/build-action [:attack [2 2] [2 3]])
        result (attack board :p1)
        info (first (result/info result))]
    (is (result/succeeded? result))
    (is (= "OK" (result/result-message result)))
    (is (= :direct (info :attack-type)))
    (is (= "rain" (info :unit)))
    (is (nil? (board/get-element (result/result-board result) [2 4])))))

(deftest attack-driller-triple
  (let [board (-> board-with-driller
                  (board/place-element [1 3] rain-element)
                  (board/place-element [2 3] rain-element)
                  (board/place-element [3 3] rain-element))
        attack (action/build-action [:attack [2 2] [2 3]])
        result (attack board :p1)
        info (result/info result)
        target-info (first info)
        triple-1-info (second info)
        triple-2-info (last info)]
    (is (result/succeeded? result))
    (is (= "OK" (result/result-message result)))
    (is (= :direct (target-info :attack-type)))
    (is (= :triple (triple-1-info :attack-type)))
    (is (= :triple (triple-2-info :attack-type)))
    (is (nil? (board/get-element (result/result-board result) [1 3])))
    (is (nil? (board/get-element (result/result-board result) [2 3])))
    (is (nil? (board/get-element (result/result-board result) [3 3])))))

(deftest attack-driller-triple-partial
  (let [board (-> board-with-driller
                  (board/place-element [2 3] rain-element)
                  (board/place-element [3 3] rain-element))
        attack (action/build-action [:attack [2 2] [2 3]])
        result (attack board :p1)
        info (result/info result)
        target-info (first info)
        triple-1-info (second info)
        triple-2-info (last info)]
    (is (result/succeeded? result))
    (is (= "OK" (result/result-message result)))
    (is (= :direct (target-info :attack-type)))
    (is (= :triple (triple-1-info :attack-type)))
    (is (= :triple (triple-2-info :attack-type)))
    (is (nil? (board/get-element (result/result-board result) [2 3])))
    (is (nil? (board/get-element (result/result-board result) [3 3])))))

(deftest attack-driller-friendly
  (let [board (-> board-with-driller
                  (board/place-element [1 3] rain-element)
                  (board/place-element [2 3] rain-element)
                  (board/place-element [3 3] (element/element-player rain-element :p1)))
        attack (action/build-action [:attack [2 2] [2 3]])
        result (attack board :p1)]
    (is (result/succeeded? result))
    (is (board/get-element (result/result-board result) [3 3]))))

