(ns obb-rules.actions.deploy-test
  (:require [obb-rules.stash :as stash]
            [obb-rules.board :as board]
            [obb-rules.element :as element]
            [obb-rules.action :as action])
  (:use clojure.test
        obb-rules.action
        obb-rules.actions.move
        obb-rules.board
        obb-rules.element
        obb-rules.result
        obb-rules.unit))

(deftest basic-deploy
  (testing "simple example"
    (let [stash (stash/create "rain" 10)
          board (board/set-stash (create-board) :p1 stash)
          deploy (action/build-action [:deploy 10 :rain [8 8]])
          result (deploy board :p1)
          final-board (result-board result)
          final-stash (board/get-stash final-board :p1)]
      (is (succeeded? result))
      (is (= 0 (stash/how-many? final-stash "rain")))
      (is (get-element final-board [8 8])))))

(deftest test-direction
  (testing "p1"
    (let [stash (stash/create "rain" 10)
          board (board/set-stash (create-board) :p1 stash)
          deploy (action/build-action [:deploy 10 :rain [8 8]])
          result (deploy board :p1)
          final-board (result-board result)
          element (get-element final-board [8 8])]
      (is (succeeded? result))
      (is (= :north (element/element-direction element)))))
  (testing "p2"
    (let [stash (stash/create "rain" 10)
          board (board/set-stash (create-board) :p2 stash)
          deploy (action/build-action [:deploy 10 :rain [1 1]])
          result (deploy board :p2)
          final-board (result-board result)
          element (get-element final-board [1 1])]
      (is (succeeded? result))
      (is (= :south (element/element-direction element))))))

(deftest test-strings-for-keywords
  (testing "simple example"
    (let [stash (stash/create :rain 10)
          board (board/set-stash (create-board) :p1 stash)
          deploy (action/build-action ["deploy" 100 "rain" [8 8]])
          result (deploy board :p1)]
      (is (failed? result))
      (is (= "InvalidQuantity" (result-message result))))))

(deftest test-fail-invalid-quantity
  (testing "simple example"
    (let [stash (stash/create :rain 10)
          board (board/set-stash (create-board) :p1 stash)
          deploy (action/build-action [:deploy 100 :rain [8 8]])
          result (deploy board :p1)]
      (is (failed? result))
      (is (= "InvalidQuantity" (result-message result))))))

(deftest test-fail-stash-from-another-player
  (let [stash (stash/create :rain 10)
        board (board/set-stash (create-board) :p1 stash)
        deploy (action/build-action [:deploy 10 :rain [8 8]])
        result (deploy board :p2)]
    (is (failed? result))
    (is (= "NoStashAvailable" (result-message result)))))

(deftest test-fail-p2-position
  (let [stash (stash/create :rain 10)
        board (board/set-stash (create-board) :p2 stash)
        deploy (action/build-action [:deploy 10 :rain [8 8]])
        result (deploy board :p2)]
    (is (failed? result))
    (is (= "InvalidDeployZone" (result-message result)))))

(deftest test-fail-p1-position
  (let [stash (stash/create :rain 10)
        board (board/set-stash (create-board) :p1 stash)
        deploy (action/build-action [:deploy 10 :rain [1 1]])
        result (deploy board :p1)]
    (is (failed? result))
    (is (= "InvalidDeployZone" (result-message result)))))

(deftest fail-if-no-stash
  (let [board (create-board)
        deploy (action/build-action [:deploy 10 :rain [8 8]])
        result (deploy board :p1)]
    (is (failed? result))
    (is (= "NoStashAvailable" (result-message result)))))
