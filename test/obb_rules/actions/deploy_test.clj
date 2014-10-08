(ns obb-rules.actions.deploy-test
  (:require [obb-rules.stash :as stash]
            [obb-rules.board :as board]
            [obb-rules.action :as action])
  (:use clojure.test
        midje.sweet
        obb-rules.action
        obb-rules.actions.move
        obb-rules.board
        obb-rules.element
        obb-rules.result
        obb-rules.unit))

(deftest basic-deploy
  (testing "simple example"
    (let [stash (stash/create :rain 10)
          board (board/set-stash (create-board) :p1 stash)
          deploy (action/build-action [:deploy 10 :rain [8 8]])
          result (deploy board :p1)
          final-board (result-board result)
          final-stash (board/get-stash final-board :p1)]
      (is (succeeded? result))
      (is (= 0 (stash/how-many? final-stash :rain)))
      (is (get-element final-board [8 8])))))
