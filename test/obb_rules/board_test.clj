(ns obb-rules.board-test
  (:require [obb-rules.laws :as laws])
  (:use clojure.test obb-rules.board obb-rules.element obb-rules.unit))

(def unit (get-unit-by-name "rain"))
(def dummy-element (create-element :p1 unit 20 :south))

(deftest board
  (testing "create-board"
    (let [board (create-board 8 9)]
      (is board)
      (is (empty-board? board))
      (is (= 0 (board-elements-count board)))
      (is (board-terrain board))
      (is (= false (has-element? board [1 1])))
      (is (= 9 (board-height board)))
      (is (= 8 (board-width board)))))

  (testing "building a board"
    (let [e1 (create-element :p1 (get-unit-by-name "rain") 20 :south)
          e2 (create-element :p2 (get-unit-by-name "rain") 20 :north)
          empty-board (create-board)
          board1 (place-element empty-board [1 1] e1)
          board2 (place-element board1 [2 2] e2)]
      (is (= 2 (board-elements-count board2)))))

  (testing "out of bounds"
    (let [board (create-board)
          element (create-element :p2 (get-unit-by-name "rain") 20 :north)]
      (is (= false (can-place-element? board [-1 9] element)))))

  (testing "managing elements"
    (let [board (create-board 8 8)
          element dummy-element]

      (testing "operations with coordinate"
        (let [new-board (place-element board [1 1] element)]
          (is (= 1 (board-elements-count new-board)))
          (let [fetched-element (get-element new-board [1 1])]
            (is (= [1 1] (element-coordinate fetched-element)))
            (is (= true (has-element? new-board [1 1])))
            (is (= 1 (board-elements-count new-board)))))))))

(deftest adjacent
  (testing "adjacent"
    (is (adjacent? [2 2] [1 1]))
    (is (adjacent? [2 2] [1 2]))
    (is (adjacent? [2 2] [1 3]))
    (is (adjacent? [2 2] [2 1]))
    (is (adjacent? [2 2] [2 2]))
    (is (adjacent? [2 2] [2 3]))
    (is (adjacent? [2 2] [3 1]))
    (is (adjacent? [2 2] [3 2]))
    (is (adjacent? [2 2] [3 3])))
  (testing "not adjacent"
    (is (not (adjacent? [2 2] [4 4])))))

(deftest default-board-size
  (is (= laws/default-board-w (board-width {})))
  (is (= laws/default-board-h (board-height {}))))
