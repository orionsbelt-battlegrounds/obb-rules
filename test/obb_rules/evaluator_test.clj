(ns obb-rules.evaluator-test
  (:require [obb-rules.evaluator :as evaluator]
            [obb-rules.stash :as stash]
            [obb-rules.board :as board]
            [obb-rules.unit :as unit]
            [obb-rules.game :as game])
  (:use clojure.test obb-rules.board obb-rules.element))

(def rain (unit/get-unit-by-name "rain"))

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

(deftest considers-elements
  (let [
        game (-> (board/create-board)
                 (place-element [1 1] (create-element :p1 rain 10 :south))
                 (place-element [8 8] (create-element :p2 rain 1 :south)))
        [score1 score2] (evaluator/eval-game game)]
    (is (= 40 score1))
    (is (= 4 score2))))
