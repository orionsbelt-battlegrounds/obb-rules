(ns obb-rules.game-test
  (:require [obb-rules.game :as game]
            [obb-rules.game-progress :as game-progress]
            [obb-rules.board :as board]
            [obb-rules.turn :as turn]
            [obb-rules.element :as element]
            [obb-rules.unit :as unit]
            [obb-rules.result :as result]
            [obb-rules.game-mode :as game-mode]
            [obb-rules.game-progress :as game-progress]
            [obb-rules.stash :as stash]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(deftest create-game
  (testing "initial game status"
    (let [game (game-progress/new-random-game {:mode :annihilation})]
      (is (= :deploy (game/state game)))
      (is (= 0 (board/board-elements-count game)))
      (is (not (stash/cleared? game)))))

  (testing "default game mode"
    (is (= :annihilation (-> (game-progress/new-game {} {:mode :annihilation})
                             (game/mode)))))

  (testing "non-default game mode"
    (let [game (game-progress/new-game {} {:mode :supernova})]
      (is (= :supernova (game/mode game))))))

(deftest complete-game-processing
  (let [stash   (stash/create "kamikaze" 1)
        game    (game-progress/new-game {:p1 stash :p2 stash}
                                        {:mode :annihilation})
        result2 (turn/process game :p1 [:deploy 1 :kamikaze [1 7]])
        game2   (result/result-board result2)
        result3 (turn/process game2 :p2 [:deploy 1 :kamikaze [1 2]])
        game3   (result/result-board result3)
        game4   game3]
    (is (not= :deploy (game/state game4)))
    (is (result/succeeded? result2))
    (is (result/succeeded? result3))
    (is (stash/cleared? (game/get-stash game4 :p2)))
    (is (stash/cleared? (game/get-stash game4 :p1)))
    (is (= false (game-progress/end-game? game4)))

    (let [game4 (game/state game4 :p1)
          result (turn/process game4 :p1 [:move [1 7] [1 6] 1]
                                         [:move [1 6] [1 5] 1]
                                         [:move [1 5] [1 4] 1]
                                         [:move [1 4] [1 3] 1]
                                         [:attack [1 3] [1 2]])
          battle (result/result-board result)]
      (is (= 1 (board/board-elements-count battle)))
      (is (result/succeeded? result))
      (is (not (element/frozen? (board/get-element battle [1 3]))))
      (is (= "TurnOK" (result/result-message result)))
      (is (= 5 (result/result-cost result)))

      (let [mode (game/mode battle)]
        (is (= true (game-progress/end-game? battle)))
        (is (= :final (game/state battle)))
        (is (= :annihilation mode))
        (is (= :p1 (game-mode/winner battle)))))))

(deftest ensure-max-action-points
  (testing "building a board"
    (let [e1 (element/create-element :p1 (unit/get-unit-by-name "rain") 20 :south)
          empty-board (board/create-board)
          board1 (board/place-element empty-board [1 1] e1)
          result (turn/process board1 :p1 [:move [1 1] [1 2] 20]
                                          [:move [1 2] [1 1] 20]
                                          [:move [1 1] [1 2] 20]
                                          [:move [1 2] [1 1] 20]
                                          [:move [1 1] [1 2] 20]
                                          [:move [1 2] [1 1] 20]
                                          [:move [1 1] [1 2] 20])]
      (is (= 0 (result/result-cost result)))
      (is (= "ActionPointsOverflow" (result/result-message result)))
      (is (result/failed? result)))))

(deftest ensure-fail-with-failed-action-result
  (testing "building a board"
    (let [e1 (element/create-element :p1 (unit/get-unit-by-name "rain") 20 :south)
          empty-board (board/create-board)
          board1 (board/place-element empty-board [1 1] e1)
          result (turn/process board1 :p1 [:move [1 1] [1 2] 20]
                                          [:move [1 2] [1 1] 20]
                                          [:move [1 1] [8 8] 20]
                                          [:move [1 1] [1 2] 20])]
      (is (= 0 (result/result-cost result)))
      (is (= "ActionFailed" (result/result-message result)))
      (is (result/failed? result)))))

(deftest stash-updating
  (let [game           (game-progress/new-game {:p1 {:rain 1}}
                                               {:mode :annihilation})
        update-fn      stash/add-units
        update-fn-args {:crusader 2}]
    (testing "the result is the same as applying the function directly to the stash"
      (let [actual-game (game/update-stash game :p1 update-fn update-fn-args)]
        (is (= (update-fn (board/get-stash game :p1) update-fn-args)
               (board/get-stash actual-game :p1)))))))
