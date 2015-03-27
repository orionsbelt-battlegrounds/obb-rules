(ns obb-rules.actions.auto-deploy-test
  (:require [obb-rules.actions.auto-deploy :as auto-deploy]
            [obb-rules.game :as game]
            [obb-rules.board :as board]
            [obb-rules.stash :as stash]
            [obb-rules.turn :as turn]
            [obb-rules.result :as result]
            [obb-rules.action :as action]
            [obb-rules.generators :as obb-gen]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop])
  (:use clojure.test
        clojure.test.check
        clojure.test.check.clojure-test))

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

(defn- auto-deploy-for
  "Auto deploys for both players for the given stash"
  [stash deploy-template]
  (let [board (game/create stash)
        result-p2 (process-action board :p2 [:auto-deploy deploy-template])
        board2 (result/result-board result-p2)
        result-p1 (process-action board2 :p1 [:auto-deploy deploy-template])]
    (is (result/succeeded? result-p1))
    (is (result/succeeded? result-p2))
    (is (stash/cleared? (board/get-stash (result/result-board result-p1) :p2)))
    (is (stash/cleared? (board/get-stash (result/result-board result-p1) :p1)))))

(deftest test-check-fail-1
  (let [stash (stash/create "crusader" 47 "nova" 47 "heavy-seeker" 47)]
    (auto-deploy-for stash :firingsquad)))

(deftest test-check-fail-2
  (let [stash (stash/create "nova" 1 "heavy-seeker" 1 "crusader" 1 "boozer" 1)]
    (auto-deploy-for stash :firingsquad)))

(defspec any-random-game-should-be-firing-squad-deployed
  (* obb-gen/scenarions-to-test 1)
  (prop/for-all [raw-stash (obb-gen/stash)]
    (let [stash (stash/create-from-hash (apply hash-map (flatten raw-stash)))]
      (auto-deploy-for stash :firingsquad))))

