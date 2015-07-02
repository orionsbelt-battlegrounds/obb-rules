(ns obb-rules.actions.deploy-test
  (:require
    [obb-rules.stash :as stash]
    [obb-rules.board :as board]
    [obb-rules.element :as element]
    [obb-rules.action :as action]
    [obb-rules.unit :as unit]
    [obb-rules.action :as action]
    [obb-rules.actions.move :as move]
    [obb-rules.result :as result]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(deftest basic-deploy
  (testing "simple example"
    (let [stash (stash/create "rain" 10)
          board (board/set-stash (board/create-board) :p1 stash)
          deploy (action/build-action [:deploy 10 :rain [8 8]])
          result (deploy board :p1)
          final-board (result/result-board result)
          final-stash (board/get-stash final-board :p1)]
      (is (result/succeeded? result))
      (is (= 0 (stash/how-many? final-stash "rain")))
      (is (board/get-element final-board [8 8])))))

(deftest test-direction
  (testing "p1"
    (let [stash (stash/create "rain" 10)
          board (board/set-stash (board/create-board) :p1 stash)
          deploy (action/build-action [:deploy 10 :rain [8 8]])
          result (deploy board :p1)
          final-board (result/result-board result)
          element (board/get-element final-board [8 8])]
      (is (result/succeeded? result))
      (is (= :north (element/element-direction element)))))
  (testing "p2"
    (let [stash (stash/create "rain" 10)
          board (board/set-stash (board/create-board) :p2 stash)
          deploy (action/build-action [:deploy 10 :rain [1 1]])
          result (deploy board :p2)
          final-board (result/result-board result)
          element (board/get-element final-board [1 1])]
      (is (result/succeeded? result))
      (is (= :south (element/element-direction element))))))

(deftest test-strings-for-keywords
  (testing "simple example"
    (let [stash (stash/create :rain 10)
          board (board/set-stash (board/create-board) :p1 stash)
          deploy (action/build-action ["deploy" 100 "rain" [8 8]])
          result (deploy board :p1)]
      (is (result/failed? result))
      (is (= "InvalidQuantity" (result/result-message result))))))

(deftest test-fail-invalid-quantity
  (testing "simple example"
    (let [stash (stash/create :rain 10)
          board (board/set-stash (board/create-board) :p1 stash)
          deploy (action/build-action [:deploy 100 :rain [8 8]])
          result (deploy board :p1)]
      (is (result/failed? result))
      (is (= "InvalidQuantity" (result/result-message result))))))

(deftest test-fail-stash-from-another-player
  (let [stash (stash/create :rain 10)
        board (board/set-stash (board/create-board) :p1 stash)
        deploy (action/build-action [:deploy 10 :rain [8 8]])
        result (deploy board :p2)]
    (is (result/failed? result))
    (is (= "NoStashAvailable" (result/result-message result)))))

(deftest test-fail-p2-position
  (let [stash (stash/create :rain 10)
        board (board/set-stash (board/create-board) :p2 stash)
        deploy (action/build-action [:deploy 10 :rain [8 8]])
        result (deploy board :p2)]
    (is (result/failed? result))
    (is (= "InvalidDeployZone" (result/result-message result)))))

(deftest test-fail-p1-position
  (let [stash (stash/create :rain 10)
        board (board/set-stash (board/create-board) :p1 stash)
        deploy (action/build-action [:deploy 10 :rain [1 1]])
        result (deploy board :p1)]
    (is (result/failed? result))
    (is (= "InvalidDeployZone" (result/result-message result)))))

(deftest fail-if-no-stash
  (let [board (board/create-board)
        deploy (action/build-action [:deploy 10 :rain [8 8]])
        result (deploy board :p1)]
    (is (result/failed? result))
    (is (= "NoStashAvailable" (result/result-message result)))))
