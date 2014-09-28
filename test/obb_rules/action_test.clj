(ns obb-rules.action-test
  (:use clojure.test 
        obb-rules.action
        obb-rules.board
        obb-rules.element
        obb-rules.result
        obb-rules.unit))

(defn- loader-check
  "Checks if an action is recognized"
  [raw-action]
  (let [action (build-action raw-action)
        board (create-board)]
    (is action)
    (is (fn? action))
    (let [result (action board)]
      (is (= true (failed? result))))))

(deftest load-actions

  (testing "load move"
    (loader-check [:move :p1 [1 1] [2 2] 10]))

  (testing "load rotate"
    (loader-check [:rotate :p1 [1 1] :south])))

(run-tests)
