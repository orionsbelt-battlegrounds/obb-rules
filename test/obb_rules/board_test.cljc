(ns obb-rules.board-test
  (:require
    [obb-rules.laws :as laws]
    [obb-rules.board :as board]
    [obb-rules.element :as element]
    [obb-rules.unit :as unit]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(def unit (unit/get-unit-by-name "rain"))
(def dummy-element (element/create-element :p1 unit 20 :south))

(deftest board
  (testing "create-board"
    (let [board (board/create-board 8 9)]
      (is board)
      (is (board/empty-board? board))
      (is (= 0 (board/board-elements-count board)))
      (is (board/board-terrain board))
      (is (= false (board/has-element? board [1 1])))
      (is (= 9 (board/board-height board)))
      (is (= 8 (board/board-width board)))))

  (testing "building a board"
    (let [e1 (element/create-element :p1 (unit/get-unit-by-name "rain") 20 :south)
          e2 (element/create-element :p2 (unit/get-unit-by-name "rain") 20 :north)
          empty-board (board/create-board)
          board1 (board/place-element empty-board [1 1] e1)
          board2 (board/place-element board1 [2 2] e2)]
      (is (= 2 (board/board-elements-count board2)))))

  (testing "out of bounds"
    (let [board (board/create-board)
          element (element/create-element :p2 (unit/get-unit-by-name "rain") 20 :north)]
      (is (= false (board/can-place-element? board [-1 9] element)))))

  (testing "managing elements"
    (let [board (board/create-board 8 8)
          element dummy-element]

      (testing "operations with coordinate"
        (let [new-board (board/place-element board [1 1] element)]
          (is (= 1 (board/board-elements-count new-board)))
          (let [fetched-element (board/get-element new-board [1 1])]
            (is (= [1 1] (element/element-coordinate fetched-element)))
            (is (= true (board/has-element? new-board [1 1])))
            (is (= 1 (board/board-elements-count new-board)))))))))

(deftest adjacent
  (testing "adjacent"
    (is (board/adjacent? [2 2] [1 1]))
    (is (board/adjacent? [2 2] [1 2]))
    (is (board/adjacent? [2 2] [1 3]))
    (is (board/adjacent? [2 2] [2 1]))
    (is (board/adjacent? [2 2] [2 2]))
    (is (board/adjacent? [2 2] [2 3]))
    (is (board/adjacent? [2 2] [3 1]))
    (is (board/adjacent? [2 2] [3 2]))
    (is (board/adjacent? [2 2] [3 3])))
  (testing "not board/adjacent"
    (is (not (board/adjacent? [2 2] [4 4])))))

(deftest default-board-size
  (is (= laws/default-board-w (board/board-width {})))
  (is (= laws/default-board-h (board/board-height {}))))

