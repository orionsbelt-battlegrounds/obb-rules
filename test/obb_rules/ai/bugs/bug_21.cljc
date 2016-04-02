(ns obb-rules.ai.bugs.bug-21
  "https://github.com/orionsbelt-battlegrounds/obb-rules/issues/21"
  (:require
    [obb-rules.unit :as unit]
    [obb-rules.turn :as turn]
    [obb-rules.game :as game]
    [obb-rules.board :as board]
    [obb-rules.result :as result]
    [obb-rules.ai.firingsquad :as firingsquad]
    [obb-rules.ai.alamo :as alamo]
    [obb-rules.simplifier :as simplifier]
    #?(:clj [clojure.test :refer [deftest testing is]]
            :cljs [cljs.test :refer-macros [deftest testing is]])))

(def game {:width 8,
           :mode :annihilation,
           :height 8,
           :terrain :terrest,
           :elements
           {[8 7]
            {:player :p1,
             :unit "heavy-seeker",
             :quantity 8,
             :direction :north,
             :coordinate [8 7],
             :hitpoints 2200},
            [7 1]
            {:player :p2,
             :unit "toxic",
             :quantity 100,
             :direction :south,
             :coordinate [7 1],
             :hitpoints 600},
            [4 3]
            {:player :p2,
             :unit "boozer",
             :quantity 8,
             :direction :south,
             :coordinate [4 3],
             :hitpoints 2800},
            [2 2]
            {:player :p2,
             :unit "heavy-seeker",
             :quantity 4,
             :direction :south,
             :coordinate [2 2],
             :hitpoints 2200},
            [7 7]
            {:player :p1,
             :unit "boozer",
             :quantity 6,
             :direction :north,
             :coordinate [7 7],
             :hitpoints 2800},
            [2 8]
            {:player :p1,
             :unit "toxic",
             :quantity 100,
             :direction :north,
             :coordinate [2 8],
             :hitpoints 600},
            [7 2]
            {:player :p2,
             :unit "boozer",
             :quantity 5,
             :direction :south,
             :coordinate [7 2],
             :hitpoints 2800},
            [6 6]
            {:player :p2,
             :unit "kamikaze",
             :quantity 50,
             :direction :south,
             :coordinate [6 6],
             :hitpoints 1},
            [8 2]
            {:player :p2,
             :unit "heavy-seeker",
             :quantity 5,
             :direction :south,
             :coordinate [8 2],
             :hitpoints 2200},
            [1 8]
            {:player :p1,
             :unit "worm",
             :quantity 50,
             :direction :north,
             :coordinate [1 8],
             :hitpoints 1200},
            [1 7]
            {:player :p1,
             :unit "boozer",
             :quantity 2,
             :direction :north,
             :coordinate [1 7],
             :hitpoints 2800},
            [8 1]
            {:player :p2,
             :unit "worm",
             :quantity 50,
             :direction :south,
             :coordinate [8 1],
             :hitpoints 1200},
            [6 1]
            {:player :p2,
             :unit "kahuna",
             :quantity 50,
             :direction :south,
             :coordinate [6 1],
             :hitpoints 1300},
            [2 7]
            {:player :p1,
             :unit "heavy-seeker",
             :quantity 8,
             :direction :north,
             :coordinate [2 7],
             :hitpoints 2200},
            [3 8]
            {:player :p1,
             :unit "kahuna",
             :quantity 50,
             :direction :north,
             :coordinate [3 8],
             :hitpoints 1300},
            [1 2]
            {:player :p2,
             :unit "nova",
             :quantity 7,
             :direction :south,
             :coordinate [1 2],
             :hitpoints 1900},
            [3 2]
            {:player :p2,
             :unit "boozer",
             :quantity 2,
             :direction :south,
             :coordinate [3 2],
             :hitpoints 2800}},
            :stash {:p2 {}, :p1 {}},
            :state :p1,
            :board {:elements {}, :action-results ()}})

(deftest process-turn
  (testing "p1"
    (let [game (simplifier/build-result game)
          actions (alamo/actions game :p1)
          result (turn/process-actions game :p1 actions)
          game (result/result-board result)]
      (is (result/succeeded? result))
      (is (nil? (board/get-element game [6 6])))))

  (testing "p2"
    (let [game (-> (simplifier/build-result game) (game/state :p2))
          actions (alamo/actions game :p2)
          result (turn/process-actions game :p2 actions)
          game (result/result-board result)]
      (is (result/succeeded? result)))))
