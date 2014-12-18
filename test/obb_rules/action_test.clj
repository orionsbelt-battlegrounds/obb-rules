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
    (let [result (action board :p1)]
      (is (= true (failed? result))))))

(deftest load-actions

  (testing "load deploy"
    (loader-check [:deploy 100 :rain [8 8]]))
  (testing "load deploy as string"
    (loader-check ["deploy" 100 "rain" [8 8]]))

  (testing "load attack"
    (loader-check [:attack [1 1] [2 2]]))
  (testing "load attack as string"
    (loader-check ["attack" [1 1] [2 2]]))

  (testing "load move"
    (loader-check [:move [1 1] [2 2] 10]))
  (testing "load move as string"
    (loader-check ["move" [1 1] [2 2] 10]))

  (testing "load goto"
    (loader-check [:goto [1 1] [2 2]]))
  (testing "load goto as string"
    (loader-check ["goto" [1 1] [2 2]]))

  (testing "load rotate"
    (loader-check [:rotate [1 1] :south]))
  (testing "load rotate as string"
    (loader-check ["rotate" [1 1] "south"])))
