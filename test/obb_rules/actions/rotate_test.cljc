(ns obb-rules.actions.rotate-test
  (:require
    [obb-rules.action :as action]
    [obb-rules.actions.rotate :as rotate]
    [obb-rules.board :as board]
    [obb-rules.element :as element]
    [obb-rules.result :as result]
    [obb-rules.unit :as unit]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(def unit (unit/get-unit-by-name "rain"))

(deftest rotate

  (testing "success"
    (let [action (action/build-action [:rotate [1 1] :north])
          element (element/create-element :p1 unit 10 :south)
          board (board/place-element (board/create-board) [1 1] element)
          result (action board :p1)
          new-board (result/result-board result)
          new-element (board/get-element new-board [1 1])]
      (is (result/succeeded? result))
      (is (= 1 (result/result-cost result)))
      (is (not= element new-element))
      (is (not= board new-board))
      (is (= :north (element/element-direction new-element)))
      (is (= "OK" (result/result-message result)))))

  (testing "failures"

    (testing "coordinate is from another player"
      (let [action (action/build-action [:rotate [1 1] :north])
            element (element/create-element :p2 unit 10 :south)
            board (board/place-element (board/create-board) [1 1] element)
            result (action board :p1)]
        (is (result/failed? result))
        (is (= "NotOwnedElement" (result/result-message result)))))

    (testing "coordinate is frozen"
      (let [action (action/build-action [:rotate [1 1] :north])
            element (-> (element/create-element :p1 unit 10 :south)
                        (element/freeze))
            board (board/place-element (board/create-board) [1 1] element)
            result (action board :p1)]
        (is (result/failed? result))
        (is (= "FrozenElement" (result/result-message result)))))

    (testing "coordinate empty"
      (let [action (action/build-action [:rotate [1 1] :north])
            board (board/create-board)
            result (action board :p1)]
        (is (result/failed? result))
        (is (= "EmptyCoordinate" (result/result-message result)))))))

(deftest consider-player-name
  (let [action (action/build-action [:rotate [1 1] :north])
        element (element/create-element :p1 unit 10 :south)
        board (board/place-element (board/create-board) [1 1] element)
        result (action board "p1")]
    (is (result/succeeded? result))
    (is (= "OK" (result/result-message result)))))

