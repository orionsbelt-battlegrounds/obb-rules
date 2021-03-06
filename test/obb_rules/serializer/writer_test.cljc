(ns obb-rules.serializer.writer-test
  (:require
    [clojure.string :as string]
    [obb-rules.serializer.writer :as writer]
    [obb-rules.stash :as stash]
    [obb-rules.game :as game]
    [obb-rules.game-progress :as game-progress]
    [obb-rules.turn :as turn]
    [obb-rules.result :as result]
    [obb-rules.board :as board]
    #?(:clj [clojure.test :refer [deftest testing is]]
       :cljs [cljs.test :refer-macros [deftest testing is]])))

(deftest action-serializer
  (is (= "a1112" (writer/action->str [:attack [1 1] [1 2]])))
  (is (= "g1112" (writer/action->str [:go-to [1 1] [1 2]])))
  (is (= "d88.10.rain" (writer/action->str [:deploy 10 :rain [8 8]])))
  (is (= "d11.200.crusader" (writer/action->str [:deploy 200 :crusader [1 1]])))
  (is (= "m1716.1" (writer/action->str [:move [1 7] [1 6] 1])))
  (is (= "r11w" (writer/action->str [:rotate [1 1] :west])))
  (is (= "r11n" (writer/action->str [:rotate [1 1] :north])))
  (is (= "r11s" (writer/action->str [:rotate [1 1] :south])))
  (is (= "r11e" (writer/action->str [:rotate [1 1] :east]))))

(deftest actions-serializer
  (is (= "a1112 g1112 r11w"
           (writer/actions->str [[:attack [1 1] [1 2]]
                                 [:go-to [1 1] [1 2]]
                                 [:rotate [1 1] :west]]))))

(deftest complete-game
  (let [game (-> {:p1 (stash/create :kamikaze 1)
                  :p2 (stash/create :kamikaze 1)}
                 (game-progress/new-game {:mode :annihilation
                                          :terrain :ice})
                 (turn/process-board :p1 [:deploy 1 :kamikaze [1 7]])
                 (turn/process-board :p2 [:deploy 1 :kamikaze [1 2]])
                 (game/start-battle :p1)
                 (turn/process-board :p1 [:move [1 7] [1 6] 1]
                                         [:move [1 6] [1 5] 1]
                                         [:move [1 5] [1 4] 1]
                                         [:move [1 4] [1 3] 1]
                                         [:attack [1 3] [1 2]]))]
    (is (= (writer/game->str game)
           (string/join "\n"
                        ["mode: annihilation"
                         "terrain: ice"
                         "first-player: p1"
                         "state: final"
                         "winner: p1"
                         ""
                         "p1 d17.1.kamikaze"
                         "p2 d12.1.kamikaze"
                         ""
                         "p1 m1716.1 m1615.1 m1514.1 m1413.1 a1312"])))))

(deftest add-stash-to-props-if-deploy-state
  (let [game (-> {:p1 (stash/create :kamikaze 1)
                  :p2 (stash/create :kamikaze 1)}
                 (game-progress/new-game {:mode :annihilation
                                          :terrain :ice}))]
    (is (= (writer/game->str game)
           (string/join "\n"
                        ["mode: annihilation"
                         "terrain: ice"
                         "p1-stash: 1.kamikaze"
                         "p2-stash: 1.kamikaze"
                         "state: deploy"
                         ""
                         ""
                         ""
                         ""])))))

(deftest add-stash-to-props-if-player-1-deployed
  (let [game (-> {:p1 (stash/create :kamikaze 1)
                  :p2 (stash/create :kamikaze 1)}
                 (game-progress/new-game {:mode :annihilation
                                          :terrain :ice})
                 (turn/process-board :p1 [:deploy 1 :kamikaze [1 7]]))]
    (is (= (writer/game->str game)
           (string/join "\n"
                        ["mode: annihilation"
                         "terrain: ice"
                         "p2-stash: 1.kamikaze"
                         "state: deploy"
                         ""
                         "p1 d17.1.kamikaze"
                         ""
                         ""])))))

(deftest add-stash-to-props-if-player-2-deployed
  (let [game (-> {:p1 (stash/create :kamikaze 1)
                  :p2 (stash/create :kamikaze 1)}
                 (game-progress/new-game {:mode :annihilation
                                          :terrain :ice})
                 (turn/process-board :p2 [:deploy 1 :kamikaze [1 2]]))]
    (is (= (writer/game->str game)
           (string/join "\n"
                        ["mode: annihilation"
                         "terrain: ice"
                         "p1-stash: 1.kamikaze"
                         "state: deploy"
                         ""
                         "p2 d12.1.kamikaze"
                         ""
                         ""])))))

