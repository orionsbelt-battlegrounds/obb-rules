(ns obb-rules.serializer.reader-test
  (:require
    [obb-rules.serializer.reader :as reader]
    [obb-rules.serializer.writer :as writer]
    [obb-rules.stash :as stash]
    [obb-rules.game :as game]
    [obb-rules.turn :as turn]
    [obb-rules.result :as result]
    [obb-rules.board :as board]
    [obb-rules.generators :as obb-gen]
    [obb-rules.ai.firingsquad :as firingsquad]
    [obb-rules.ai.acts-as-bot-test :as acts-as-bot]
    #?(:clj [clojure.test.check.properties :as prop]
       :cljs [clojure.test.check.properties :as prop :include-macros true])
    #?(:clj [clojure.test.check.clojure-test :refer [defspec]]
       :cljs [clojure.test.check.clojure-test :refer-macros [defspec]])
    #?(:clj [clojure.test :refer [deftest testing is]]
       :cljs [cljs.test :refer-macros [deftest testing is]])))

(deftest action-reader
  (is (= [:attack [1 1] [1 2]] (reader/str->action "a1112")))
  (is (= [:goto [1 1] [1 2]] (reader/str->action "g1112")))
  (is (= [:move [1 7] [1 6] 1] (reader/str->action "m1716.1")))
  (is (= [:rotate [1 1] :west] (reader/str->action "r11w")))
  (is (= [:rotate [1 1] :north] (reader/str->action "r11n")))
  (is (= [:rotate [1 1] :south] (reader/str->action "r11s")))
  (is (= [:rotate [1 1] :east] (reader/str->action "r11e")))
  (is (= [:deploy 10 :rain [8 8]] (reader/str->action "d88.10.rain")))
  (is (= [:deploy 200 :crusader [1 1]] (reader/str->action "d11.200.crusader"))))

(deftest actions-reader
  (is (= (reader/str->actions "a1112 g1112 r11w")
         [[:attack [1 1] [1 2]]
          [:goto [1 1] [1 2]]
          [:rotate [1 1] :west]])))

(deftest attrs-reader
  (is (= {:state :final :winner :p1}
         (reader/str->attrs "state: final\nwinner: p1"))))

(deftest raww-history-reader
  (is (= [{:player :p1 :actions [[:goto [1 2] [2 3]] [:goto [6 2] [5 2]]]}
          {:player :p2 :actions [[:goto [4 7] [2 5]] [:attack [2 5] [2 3]]]}]
         (reader/str->history-items "p1 g1223 g6252\np2 g4725 a2523")))

  (testing "empty"
    (is (= []
           (reader/str->history-items nil)))))

(deftest deploy-per-player
  (let [deploy [{:player :p1 :actions [[:deploy 1 :kamikaze [1 7]]]}
                {:player :p2 :actions [[:deploy 1 :kamikaze [1 2]]]}]
        [p1-deploy p2-deploy] (reader/deploy-per-player deploy)]
    (is (= p1-deploy (first deploy)))
    (is (= p2-deploy (second deploy)))))

(deftest build-stash
  (is (= {:rain 100 :kamikaze 100}
         (reader/build-stash {} :p1
                             {:player :p1 :actions [[:deploy 100 :kamikaze [1 7]]
                                                    [:deploy 100 :rain [2 7]]]}))))

(deftest build-stash-from-str
  (is (= {:rain 100 :kamikaze 100}
         (reader/build-stash {:p1-stash "100.rain 100.kamikaze"}
                             :p1
                             nil))))

(defn test-game
  "Gets a game, serializes it and reloades it, testing if it is the same"
  [game]
  (let [game-str (writer/game->str game)
        loaded-game (reader/str->game game-str)]
    (is (= game loaded-game))))

(deftest complete-game
  (test-game (-> {:p1 (stash/create :kamikaze 1)
                  :p2 (stash/create :kamikaze 1)}
                 game/new-game
                 (board/board-terrain :ice)
                 (turn/process-board :p1 [:deploy 1 :kamikaze [1 7]])
                 (turn/process-board :p2 [:deploy 1 :kamikaze [1 2]])
                 (game/start-battle :p1)
                 (turn/process-board :p1 [:move [1 7] [1 6] 1]
                                         [:move [1 6] [1 5] 1]
                                         [:move [1 5] [1 4] 1]
                                         [:move [1 4] [1 3] 1]
                                         [:attack [1 3] [1 2]]))))

(deftest not-complete-game
  (test-game (-> {:p1 (stash/create :kamikaze 1)
                  :p2 (stash/create :kamikaze 1)}
                 game/new-game
                 (board/board-terrain :ice)
                 (turn/process-board :p1 [:deploy 1 :kamikaze [1 7]])
                 (turn/process-board :p2 [:deploy 1 :kamikaze [1 2]])
                 (game/start-battle :p1)
                 (turn/process-board :p1 [:move [1 7] [1 6] 1]
                                         [:move [1 6] [1 5] 1]
                                         [:move [1 5] [1 4] 1]
                                         [:move [1 4] [1 3] 1]))))

(deftest just-player-1-deployed
  (test-game (-> {:p1 (stash/create :kamikaze 1)
                  :p2 (stash/create :kamikaze 1)}
                 game/new-game
                 (board/board-terrain :ice)
                 (turn/process-board :p1 [:deploy 1 :kamikaze [1 7]]))))

(deftest just-player-2-deployed
  (test-game (-> {:p1 (stash/create :kamikaze 1)
                  :p2 (stash/create :kamikaze 1)}
                 game/new-game
                 (board/board-terrain :ice)
                 (turn/process-board :p2 [:deploy 1 :kamikaze [1 2]]))))

(deftest game-ready-to-start
  (test-game (-> {:p1 (stash/create :kamikaze 1)
                  :p2 (stash/create :kamikaze 1)}
                 game/new-game
                 (board/board-terrain :ice)
                 (turn/process-board :p1 [:deploy 1 :kamikaze [1 7]])
                 (turn/process-board :p2 [:deploy 1 :kamikaze [1 2]])
                 (game/start-battle :p1))))

(defspec first-blood-game-reload
  (* obb-gen/scenarions-to-test 1)
  (prop/for-all [raw-stash (obb-gen/stash)]
    (let [stash (stash/create-from-hash (apply hash-map (flatten raw-stash)))
          result (acts-as-bot/first-blood firingsquad/actions stash)]
      (test-game (:board result)))))

(deftest allow-white-spaces
  (let [game (-> {:p1 (stash/create :kamikaze 1)
                  :p2 (stash/create :kamikaze 1)}
                 game/new-game
                 (board/board-terrain :ice)
                 (turn/process-board :p1 [:deploy 1 :kamikaze [1 7]])
                 (turn/process-board :p2 [:deploy 1 :kamikaze [1 2]])
                 (game/start-battle :p1)
                 (turn/process-board :p1 [:move [1 7] [1 6] 1]
                                         [:move [1 6] [1 5] 1]
                                         [:move [1 5] [1 4] 1]
                                         [:move [1 4] [1 3] 1]
                                         [:attack [1 3] [1 2]]))]
    (is (= game
           (reader/str->game "terrain: ice
                              first-player: p1
                              state: final
                              winner: p1

                              p1 d17.1.kamikaze
                              p2 d12.1.kamikaze

                              p1 m1716.1 m1615.1 m1514.1 m1413.1 a1312")))))

