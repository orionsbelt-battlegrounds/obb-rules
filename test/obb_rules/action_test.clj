(ns obb-rules.action-test
  (:use clojure.test 
        obb-rules.action
        obb-rules.board
        obb-rules.element
        obb-rules.result
        obb-rules.unit))

(deftest action

  (testing "load rotate"
    (let [rotate (build-action [:rotate :p1 [1 1] :south])
          board (create-board)]
      (is rotate)
      (is (fn? rotate))
      (let [result (rotate board)]
        (is (= true (failed? result)))))))

(run-tests)
