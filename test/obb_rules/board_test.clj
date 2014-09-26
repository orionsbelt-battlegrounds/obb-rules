(ns obb-rules.board-test
  (:use clojure.test obb-rules.board))

(def dummy-element :dummy-element)

(deftest board
  (testing "create-board"
    (let [board (create-board 8 9)]
      (is board)
      (is (empty-board? board))
      (is (= 0 (board-elements-count board)))
      (is (= false (has-element? board [1 1])))
      (is (= 9 (board-height board)))
      (is (= 8 (board-width board)))))

  (testing "managing elements"
    (let [board (create-board 8 8)
          element dummy-element]

      (testing "operations with coordinate"
        (let [new-board (place-element board [1 1] element)]
          (is (= 1 (board-elements-count new-board)))
          (let [fetched-element (get-element new-board [1 1])]
            (is (= fetched-element element))
            (is (= true (has-element? new-board [1 1])))
            (is (= 1 (board-elements-count new-board)))))))))

(run-tests)
