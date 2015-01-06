(ns obb-rules.ai.common-test
  (:require [obb-rules.evaluator :as evaluator]
            [obb-rules.stash :as stash]
            [obb-rules.board :as board]
            [obb-rules.unit :as unit]
            [obb-rules.result :as result]
            [obb-rules.turn :as turn]
            [obb-rules.generators :as obb-gen]
            [obb-rules.game :as game]
            [obb-rules.ai.common :as common]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop])
  (:use clojure.test obb-rules.board obb-rules.element
        clojure.test.check
        clojure.test.check.clojure-test))

(def rain (unit/get-unit-by-name "rain"))
(def krill (unit/get-unit-by-name "krill"))
(def vect (unit/get-unit-by-name "vector"))

(deftest get-empty-attack-options
  (let [board (-> (board/create-board)
                  (place-element [2 5] (create-element :p1 rain 1 :north [2 5])))
        options (common/attack-options board (board/get-element board [2 5]))]
    (is (= 0 (count options)))))

(deftest get-direct-attack-options
  (let [board (-> (board/create-board)
                  (place-element [2 5] (create-element :p1 rain 1 :south [2 5]))
                  (place-element [2 6] (create-element :p2 rain 1 :north [2 6])))
        options (common/attack-options board (board/get-element board [2 5]))
        option (first options)]
    (is (= 1 (count options)))
    (is (= 1 (option :distance)))
    (is (< 0 (option :value)))
    (is (= [[:attack [2 5] [2 6]]] (option :actions)))))

(deftest get-distance-attack-options
  (let [board (-> (board/create-board)
                  (place-element [2 5] (create-element :p1 krill 1 :south [2 5]))
                  (place-element [2 7] (create-element :p2 rain 1 :north [2 7])))
        options (common/attack-options board (board/get-element board [2 5]))
        option (first options)]
    (is (= 1 (count options)))
    (is (= 2 (option :distance)))
    (is (< 0 (option :value)))
    (is (= [[:attack [2 5] [2 7]]] (option :actions)))))

(deftest get-no-attack-options
  (let [board (-> (board/create-board)
                  (place-element [2 5] (create-element :p1 krill 1 :south [2 5]))
                  (place-element [2 7] (create-element :p1 rain 1 :north [2 7])))
        options (common/attack-options board (board/get-element board [2 5]))]
    (is (= 0 (count options)))))

(deftest get-attack-options-catapult-obstacles
  (let [board (-> (board/create-board)
                  (place-element [2 1] (create-element :p1 vect 1 :south [2 1]))
                  (place-element [2 2] (create-element :p2 rain 1 :north [2 2]))
                  (place-element [2 4] (create-element :p1 rain 1 :north [2 4]))
                  (place-element [2 5] (create-element :p2 rain 1 :north [2 5])))
        options (common/attack-options board (board/get-element board [2 1]))
        option1 (first options)
        option2 (last options)]
    (is (= 2 (count options)))
    (is (= 1 (option1 :distance)))
    (is (< 0 (option1 :value)))
    (is (= [[:attack [2 1] [2 2]]] (option1 :actions)))
    (is (= 4 (option2 :distance)))
    (is (< 0 (option2 :value)))
    (is (= [[:attack [2 1] [2 5]]] (option2 :actions)))))
