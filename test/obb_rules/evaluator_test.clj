(ns obb-rules.evaluator-test
  (:require [obb-rules.evaluator :as evaluator]
            [obb-rules.stash :as stash]
            [obb-rules.game :as game])
  (:use clojure.test))

(deftest yields-zero-when-no-elements
  (let [game-no-units (-> (game/random) (dissoc :stash))
        [score1 score2] (evaluator/eval-game game-no-units)]
    (is (= 0 score1))
    (is (= 0 score2))))

(deftest considers-stash
  (let [stash (stash/create :rain 1)
        game (game/create stash)
        [score1 score2] (evaluator/eval-game game)]
    (is (= 4 score1))
    (is (= 4 score2))))
