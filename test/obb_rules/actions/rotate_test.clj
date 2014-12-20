(ns obb-rules.actions.rotate-test
  (:use clojure.test
        obb-rules.action
        obb-rules.actions.rotate
        obb-rules.board
        obb-rules.element
        obb-rules.result
        obb-rules.unit))

(def unit (get-unit-by-name "rain"))

(deftest rotate

  (testing "success"
    (let [action (build-action [:rotate [1 1] :north])
          element (create-element :p1 unit 10 :south)
          board (place-element (create-board) [1 1] element)
          result (action board :p1)
          new-board (result-board result)
          new-element (get-element new-board [1 1])]
      (is (succeeded? result))
      (is (= 1 (result-cost result)))
      (is (not= element new-element))
      (is (not= board new-board))
      (is (= :north (element-direction new-element)))
      (is (= "OK" (result-message result)))))

  (testing "failures"

    (testing "coordinate is from another player"
      (let [action (build-action [:rotate [1 1] :north])
            element (create-element :p2 unit 10 :south)
            board (place-element (create-board) [1 1] element)
            result (action board :p1)]
        (is (failed? result))
        (is (= "NotOwnedElement" (result-message result)))))

    (testing "coordinate is frozen"
      (let [action (build-action [:rotate [1 1] :north])
            element (-> (create-element :p1 unit 10 :south)
                        (freeze))
            board (place-element (create-board) [1 1] element)
            result (action board :p1)]
        (is (failed? result))
        (is (= "FrozenElement" (result-message result)))))

    (testing "coordinate empty"
      (let [action (build-action [:rotate [1 1] :north])
            board (create-board)
            result (action board :p1)]
        (is (failed? result))
        (is (= "EmptyCoordinate" (result-message result)))))))

(deftest consider-player-name
  (let [action (build-action [:rotate [1 1] :north])
        element (create-element :p1 unit 10 :south)
        board (place-element (create-board) [1 1] element)
        result (action board "p1")]
    (is (succeeded? result))
    (is (= "OK" (result-message result)))))

