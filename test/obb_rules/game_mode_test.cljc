(ns obb-rules.game-mode-test
  (:require
    [obb-rules.game :as game]
    [obb-rules.board :as board]
    [obb-rules.game-mode :as game-mode]
    [obb-rules.unit :as unit]
    [obb-rules.element :as element]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(def rain (unit/get-unit-by-name "rain"))

(def p2-element (element/create-element "p2" rain 20 :south))

(def game-with-empty-board (game/new-game {}))

(deftest annihilation-winner
  (testing "draw when all players have an empty board"
     (is (= :draw (game-mode/winner game-with-empty-board))))
  (let [game-with-empty-p1 (-> (game/new-game {})
                               (board/place-element [1 2] p2-element))
        winner             (game-mode/winner game-with-empty-p1)]
    (testing "the winner is returned"
      (is (= :p2 winner)))
    (testing "the winner does not have an empty board"
      (is (not (board/empty-board? game-with-empty-p1 winner))))
    (testing "the loser has an empty board"
      (is (board/empty-board? game-with-empty-p1 :p1)))))
