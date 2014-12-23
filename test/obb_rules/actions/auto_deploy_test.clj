(ns obb-rules.actions.auto-deploy-test
  (:require [obb-rules.actions.auto-deploy :as auto-deploy]
            [obb-rules.game :as game]
            [obb-rules.board :as board]
            [obb-rules.stash :as stash]
            [obb-rules.result :as result]
            [obb-rules.action :as action])
  (:use clojure.test))

(defn- process-action
  "Processes an action on the board"
  [board player raw-action]
  (let [action (action/build-action raw-action)]
    (action board player)))

(deftest fails-if-not-deploy-state
  (let [game (-> (game/random) (game/state :p1))
        result (process-action game :p1 [:auto-deploy])]
    (is (result/failed? result))
    (is (= "MustBeDeployState" (result/result-message result)))))

(deftest fails-if-no-stash
  (let [board (-> (game/random) (board/set-stash :p1 {}))
        result (process-action board :p1 [:auto-deploy])]
    (is (result/failed? result))
    (is (= "NoStash" (result/result-message result)))))

(deftest fails-if-no-template
  (let [board (game/random)
        result (process-action board :p1 [:auto-deploy :no-template])]
    (is (result/failed? result))
    (is (= "NoTemplate" (result/result-message result)))))

(deftest smoke-success-str
  (let [board (game/random)
        result (process-action board "p1" ["auto-deploy" "firingsquad"])]
    (is (result/succeeded? result))))

(deftest smoke-success-sym
  (let [board (game/random)
        result-p2 (process-action board :p2 [:auto-deploy :firingsquad])
        board2 (result/result-board result-p2)
        result-p1 (process-action board2 :p1 [:auto-deploy :firingsquad])]
    (is (result/succeeded? result-p1))
    (is (result/succeeded? result-p2))
    (is (stash/cleared? (board/get-stash (result/result-board result-p1) :p2)))
    (is (stash/cleared? (board/get-stash (result/result-board result-p1) :p1)))))
