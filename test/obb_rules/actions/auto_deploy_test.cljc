(ns obb-rules.actions.auto-deploy-test
  (:require [obb-rules.actions.auto-deploy :as auto-deploy]
            [obb-rules.game :as game]
            [obb-rules.game-progress :as game-progress]
            [obb-rules.board :as board]
            [obb-rules.stash :as stash]
            [obb-rules.turn :as turn]
            [obb-rules.result :as result]
            [obb-rules.action :as action]
            [obb-rules.generators :as obb-gen]
            [clojure.test.check.generators :as gen]
   #?(:cljs [clojure.test.check :as tc])
    #?(:clj [clojure.test.check.properties :as prop]
       :cljs [clojure.test.check.properties :as prop :include-macros true])
    #?(:clj [clojure.test.check.clojure-test :refer [defspec]]
       :cljs [clojure.test.check.clojure-test :refer-macros [defspec]])
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(defn- process-action
  "Processes an action on the board"
  [board player raw-action]
  (let [action (action/build-action raw-action)]
    (action board player)))

(deftest fails-if-not-deploy-state
  (let [game (-> (game-progress/new-random-game {:mode :annihilation}) (game/state :p1))
        result (process-action game :p1 [:auto-deploy])]
    (is (result/failed? result))
    (is (= "MustBeDeployState" (result/result-message result)))))

(deftest fails-if-no-stash
  (let [board (-> (game-progress/new-random-game {:mode :annihilation}) (board/set-stash :p1 {}))
        result (process-action board :p1 [:auto-deploy])]
    (is (result/failed? result))
    (is (= "NoStash" (result/result-message result)))))

(deftest fails-if-no-template
  (let [board (game-progress/new-random-game {:mode :annihilation})
        result (process-action board :p1 [:auto-deploy :no-template])]
    (is (result/failed? result))
    (is (= "NoTemplate" (result/result-message result)))))

(deftest smoke-success-str
  (let [board (game-progress/new-random-game {:mode :annihilation})
        result (process-action board "p1" ["auto-deploy" "firingsquad"])]
    (is (result/succeeded? result))))

(deftest smoke-success-sym
  (let [board (game-progress/new-random-game {:mode :annihilation})
        result-p2 (process-action board :p2 [:auto-deploy :firingsquad])
        board2 (result/result-board result-p2)
        result-p1 (process-action board2 :p1 [:auto-deploy :firingsquad])]
    (is (result/succeeded? result-p1))
    (is (result/succeeded? result-p2))
    (is (stash/cleared? (board/get-stash (result/result-board result-p1) :p2)))
    (is (stash/cleared? (board/get-stash (result/result-board result-p1) :p1)))))

(defn- checked-auto-deploy-for
  "Auto deploys for both players for the given stash"
  [game-mode stash deploy-template]
  (let [board     (game-progress/new-game {:p1 stash :p2 stash}
                                          {:mode game-mode})
        result-p2 (process-action board :p2 [:auto-deploy deploy-template])
        board2    (result/result-board result-p2)
        result-p1 (process-action board2 :p1 [:auto-deploy deploy-template])]
    (is (result/succeeded? result-p1))
    (is (result/succeeded? result-p2))
    (is (stash/cleared? (board/get-stash (result/result-board result-p1) :p2)))
    (is (stash/cleared? (board/get-stash (result/result-board result-p1) :p1)))
    (result/result-board result-p1)))

(deftest test-check-fail-1
  (let [stash (stash/create "crusader" 47 "nova" 47 "heavy-seeker" 47)]
    (checked-auto-deploy-for :annihilation stash :firingsquad)))

(deftest test-check-fail-2
  (let [stash (stash/create "nova" 1 "heavy-seeker" 1 "crusader" 1 "boozer" 1)]
    (checked-auto-deploy-for :annihilation stash :firingsquad)))

(deftest auto-deploying-in-supernova
  (testing "star unit is deployed even if the max of different units is reached"
    (let [stash (stash/create "rain" 1
                              "crusader" 2
                              "nova" 3
                              "anubis" 4
                              "fenix" 5
                              "boozer" 6
                              "kahuna" 7
                              "heavy-seeker" 8)
          game  (checked-auto-deploy-for :supernova stash :firingsquad)]
      (is (board/unit-present? game :p1 "star"))
      (is (board/unit-present? game :p2 "star")))))

(deftest auto-deploy-history
  (testing "auto-deploy utility actions should not be written to the history.
           Instead, the actual deploy actions should be there"
    (let [stash (stash/create "nova" 1)
          game (checked-auto-deploy-for :annihilation stash :firingsquad)
          history (game/history game)
          item (first history)
          actions (:actions item)]
      (is (not= :auto-deploy  (ffirst actions))))))

(defspec any-random-game-should-be-firing-squad-deployed
  (* obb-gen/scenarions-to-test 1)
  (prop/for-all [raw-stash (obb-gen/stash)]
    (let [stash (stash/create-from-hash (apply hash-map (flatten raw-stash)))]
      (checked-auto-deploy-for :annihilation stash :firingsquad))))
