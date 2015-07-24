(ns obb-rules.ai.bugs.bug-16
  "https://github.com/orionsbelt-battlegrounds/obb-rules/issues/16"
  (:require
    [obb-rules.unit :as unit]
    [obb-rules.turn :as turn]
    [obb-rules.result :as result]
    [obb-rules.ai.firingsquad :as firingsquad]
    [obb-rules.simplifier :as simplifier]
    #?(:clj [clojure.test :refer [deftest testing is]]
            :cljs [cljs.test :refer-macros [deftest testing is]])))

(def game {:width 8,
           :height 8,
           :terrain :forest,
           :elements
           {[7 1]
            {:player :p2,
             :unit "vector",
             :quantity 50,
             :direction :south,
             :coordinate [7 1],
             :hitpoints 1200},
            [2 8]
            {:player :p1,
             :unit "vector",
             :quantity 50,
             :direction :north,
             :coordinate [2 8],
             :hitpoints 1200},
            [6 7]
            {:player :p1,
             :unit "heavy-seeker",
             :quantity 6,
             :direction :north,
             :coordinate [6 7],
             :hitpoints 2200},
            [7 3]
            {:player :p2,
             :unit "nova",
             :quantity 4,
             :direction :south,
             :coordinate [7 3],
             :hitpoints 1900},
            [8 6]
            {:player :p2,
             :unit "raptor",
             :quantity 100,
             :direction :south,
             :coordinate [8 6],
             :hitpoints 400},
            [4 7]
            {:player :p1,
             :unit "heavy-seeker",
             :quantity 7,
             :direction :north,
             :coordinate [4 7],
             :hitpoints 2200},
            [4 6]
            {:player :p1,
             :unit "heavy-seeker",
             :quantity 6,
             :direction :north,
             :coordinate [4 6],
             :hitpoints 2200},
            [5 7]
            {:player :p1,
             :unit "nova",
             :quantity 6,
             :direction :north,
             :coordinate [5 7],
             :hitpoints 1900},
            [4 8]
            {:player :p1,
             :unit "toxic",
             :quantity 100,
             :direction :north,
             :coordinate [4 8],
             :hitpoints 600},
            [1 8]
            {:player :p1,
             :unit "fenix",
             :quantity 25,
             :direction :north,
             :coordinate [1 8],
             :hitpoints 2950},
            [1 7]
            {:player :p1,
             :unit "nova",
             :quantity 6,
             :direction :north,
             :coordinate [1 7],
             :hitpoints 1900},
            [8 1]
            {:player :p2,
             :unit "fenix",
             :quantity 25,
             :direction :south,
             :coordinate [8 1],
             :hitpoints 2950},
            [5 1]
            {:player :p2,
             :unit "toxic",
             :quantity 100,
             :direction :south,
             :coordinate [5 1],
             :hitpoints 600},
            [6 1]
            {:player :p2,
             :unit "pretorian",
             :quantity 50,
             :direction :south,
             :coordinate [6 1],
             :hitpoints 5550},
            [5 8]
            {:player :p1,
             :unit "raptor",
             :quantity 100,
             :direction :north,
             :coordinate [5 8],
             :hitpoints 400},
            [6 8]
            {:player :p1,
             :unit "scarab",
             :quantity 50,
             :direction :north,
             :coordinate [6 8],
             :hitpoints 2300},
            [2 7]
            {:player :p1,
             :unit "nova",
             :quantity 6,
             :direction :north,
             :coordinate [2 7],
             :hitpoints 1900},
            [3 6]
            {:player :p2,
             :unit "scarab",
             :quantity 44,
             :direction :south,
             :coordinate [3 6],
             :hitpoints 2300},
            [3 8]
            {:player :p1,
             :unit "pretorian",
             :quantity 33,
             :direction :north,
             :coordinate [3 8],
             :hitpoints 5550}},
            :stash {:p2 {}, :p1 {}},
            :state :p1,
            :action-results ()})

(deftest process-turn
  (let [game (simplifier/build-result game)
        actions (firingsquad/actions game :p1)
        result (turn/process-actions game :p1 actions)]
    (is (result/succeeded? result))))
