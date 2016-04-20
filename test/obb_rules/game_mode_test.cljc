(ns obb-rules.game-mode-test
  (:require
    [obb-rules.game :as game]
    [obb-rules.game-progress :as game-progress]
    [obb-rules.board :as board]
    [obb-rules.game-mode :as game-mode]
    [obb-rules.unit :as unit]
    [obb-rules.element :as element]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(def star (unit/get-unit-by-name "star"))
(def rain (unit/get-unit-by-name "rain"))

(def p1-elem (element/create-element :p1 rain 10 :north))
(def p2-elem (element/create-element :p2 rain 20 :south))
(def p1-star (element/create-element :p1 star 1 :north))
(def p2-star (element/create-element :p2 star 1 :south))

(deftest annihilation-winner
  (let [game-with-empty-board (game-progress/new-game {} {:mode :annihilation})]
    (testing "draw when all players have an empty board"
      (is (= :draw (game-mode/winner game-with-empty-board))))
    (let [game-with-empty-p1 (-> (game-progress/new-game {} {:mode :annihilation})
                                 (board/place-element [1 2] p2-elem))
          winner             (game-mode/winner game-with-empty-p1)]
      (testing "the winner is returned"
        (is (= :p2 winner)))
      (testing "the winner does not have an empty board"
        (is (not (board/empty-board? game-with-empty-p1 winner))))
      (testing "the loser has an empty board"
        (is (board/empty-board? game-with-empty-p1 :p1))))))

(deftest supernova-winner
  (let [game-with-no-stars (-> (game-progress/new-game {} {:mode :supernova})
                               (board/place-element [1 2] p1-elem)
                               (board/place-element [7 1] p2-elem))]
    (testing "draw when all players have lost their star unit"
      (is (= :draw (game-mode/winner game-with-no-stars))))
    (let [game   (-> (game-progress/new-game {} {:mode :supernova})
                     (board/place-element [1 1] p1-star))
          winner (game-mode/winner game)]
      (testing "the winner is returned"
        (is (= :p1 winner)))
      (testing "the winner has the star unit"
        (is (board/unit-present? game winner "star")))
      (testing "the loser does not have the star unit"
        (is (not (board/unit-present? game :p2 "star")))))))

(deftest supernova-on-new-game
  (testing "star unit is automatically added to the stash"
    (let [game           {:stash {:p1 {} :p2 {}} :mode :supernova}
          resulting-game (game-mode/on-new-game game)]
      (is (empty? (board/get-stash game :p1)))
      (is (empty? (board/get-stash game :p2)))
      (is (not-empty (board/get-stash resulting-game :p1)))
      (is (not-empty (board/get-stash resulting-game :p2))))))
