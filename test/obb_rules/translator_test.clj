(ns obb-rules.translator-test
  (:require [obb-rules.translator :as translator]
            [obb-rules.element :as element])
  (:use clojure.test obb-rules.element obb-rules.unit obb-rules.board))

(def unit :dummy)

(deftest translate-coordinate-test
  (testing ":p1"
    (is (= (translator/coordinate :p1 [8 8]) [8 8]))
    (is (= (translator/coordinate :p1 [2 3]) [2 3]))
    (is (= (translator/coordinate :p1 [1 1]) [1 1])))
  (testing ":p2"
    (is (= (translator/coordinate :p2 [2 3]) [7 6]))
    (is (= (translator/coordinate :p2 [8 8]) [1 1]))
    (is (= (translator/coordinate :p2 [1 8]) [8 1]))
    (is (= (translator/coordinate :p2 [8 1]) [1 8]))
    (is (= (translator/coordinate :p2 [1 1]) [8 8]))))

(deftest translate-direction-test
  (testing ":p1"
    (is (= :north (translator/direction :p1 :north)))
    (is (= :south (translator/direction :p1 :south)))
    (is (= :east (translator/direction :p1 :east)))
    (is (= :west (translator/direction :p1 :west))))
  (testing ":p2"
    (is (= :west (translator/direction :p2 "east")))
    (is (= :west (translator/direction :p2 :east)))
    (is (= :east (translator/direction :p2 :west)))
    (is (= :south (translator/direction :p2 :north)))
    (is (= :north (translator/direction :p2 :south)))))

(deftest translate-element-test
  (testing ":p1"
    (let [element (element/create-element :p1 unit 1 :north [8 8])
          translated (translator/element :p1 element)]
      (is (= element translated))))
  (testing ":p2")
    (let [element (element/create-element :p1 unit 1 :north [8 8])
          expected (element/create-element :p1 unit 1 :south [1 1])
          translated (translator/element :p2 element)]
      (is (= translated expected))
      (is (not= element translated))))

(deftest translate-action-test
  (let [rotate [:rotate [1 1] :north]
        move [:move [1 1] [1 2] 1]
        attack [:attack [1 1] [1 8]]
        deploy [:deploy 10 :rain [1 1]]]
    (testing ":p1"
      (is (= rotate (translator/action :p1 rotate)))
      (is (= move (translator/action :p1 move)))
      (is (= attack (translator/action :p1 attack)))
      (is (= deploy (translator/action :p1 deploy))))
    (testing ":p2"
      (is (= [:rotate [8 8] :south] (translator/action :p2 rotate)))
      (is (= [:move [8 8] [8 7] 1] (translator/action :p2 move)))
      (is (= [:attack [8 8] [8 1]] (translator/action :p2 attack)))
      (is (= [:deploy 10 :rain [8 8]] (translator/action :p2 deploy))))))

(deftest translate-actions-test
  (let [actions [[:move [1 1] [2 2] 1]]]
    (is (= actions (translator/actions :p1 actions)))
    (is (= [[:move [8 8] [7 7] 1]] (translator/actions :p2 actions)))))

(deftest translate-board-test
  (let [e1 (create-element :p1 (get-unit-by-name "rain") 20 :south)
        e2 (create-element :p2 (get-unit-by-name "rain") 20 :north)
        board (-> (create-board)
                  (place-element [1 1] e1)
                  (place-element [2 2] e2))]
    (testing ":p1"
      (is (= board (translator/board :p1 board))))
    (testing ":p2"
      (let [p2-board (translator/board :p2 board)]
        (is (not (get-element p2-board [1 1])))
        (is (not= board p2-board))
        (is (= board (translator/board :p2 p2-board)))))))
