(ns obb-rules.evaluator-test
  (:require [obb-rules.evaluator :as evaluator]
            [obb-rules.stash :as stash]
            [obb-rules.board :as board]
            [obb-rules.unit :as unit]
            [obb-rules.result :as result]
            [obb-rules.element :as element]
            [obb-rules.turn :as turn]
            [obb-rules.generators :as obb-gen]
            [obb-rules.game :as game]
            [clojure.test.check.generators :as gen]
   #?(:cljs [clojure.test.check :as tc])
    #?(:clj [clojure.test.check.properties :as prop]
       :cljs [clojure.test.check.properties :as prop :include-macros true])
    #?(:clj [clojure.test.check.clojure-test :refer [defspec]]
       :cljs [clojure.test.check.clojure-test :refer-macros [defspec]])
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(def rain (unit/get-unit-by-name "rain"))

(deftest yields-zero-when-no-elements
  (let [game-no-units (-> (game/random) (dissoc :stash))
        [score1 score2] (evaluator/eval-game game-no-units)]
    (is (= 0 score1))
    (is (= 0 score2))))

(deftest considers-stash
  (let [stash (stash/create :rain 1)
        game  (game/new-game {:p1 stash :p2 stash})
        [score1 score2] (evaluator/eval-game game)]
    (is (= 4 score1))
    (is (= 4 score2))))

(deftest considers-elements
  (let [game (-> (board/create-board)
                 (board/place-element [1 1] (element/create-element :p1 rain 10 :south))
                 (board/place-element [8 8] (element/create-element :p2 rain 1 :south)))
        [score1 score2] (evaluator/eval-game game)]
    (is (= 40 score1))
    (is (= 4 score2))))

(defspec any-random-deployable-game-should-be-evaluated
  obb-gen/scenarions-to-test-small
  (prop/for-all [raw-stash (obb-gen/stash)]
    (let [stash (stash/create-from-hash (apply hash-map (flatten raw-stash)))
          game  (game/new-game {:p1 stash :p2 stash})
          [score1 score2] (evaluator/eval-game game)]
      (is (< 0 score1))
      (is (< 0 score2)))))

(defspec any-random-deployed-game-should-be-evaluated-by-value
  obb-gen/scenarions-to-test-small
  (prop/for-all [raw-stash (obb-gen/stash)]
    (let [stash (stash/create-from-hash (apply hash-map (flatten raw-stash)))
          game (-> (game/new-game {:p1 stash :p2 stash})
                   (turn/process :p1 [:auto-deploy :firingsquad])
                   (result/result-board))
          [score1 score2] (evaluator/eval-game game :value)]
      (is (< 0 score1))
      (is (< 0 score2)))))


