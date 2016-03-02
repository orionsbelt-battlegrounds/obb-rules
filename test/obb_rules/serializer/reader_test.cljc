(ns obb-rules.serializer.reader-test
  (:require
    [obb-rules.serializer.reader :as reader]
    [obb-rules.stash :as stash]
    [obb-rules.game :as game]
    [obb-rules.turn :as turn]
    [obb-rules.result :as result]
    [obb-rules.board :as board]
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

#_(deftest actions-serializer
  (is (= "a1112 g1112 r11w"
           (writer/actions->str [[:attack [1 1] [1 2]]
                                 [:goto [1 1] [1 2]]
                                 [:rotate [1 1] :west]]))))

#_(deftest complete-game
  (let [game (-> (stash/create "kamikaze" 1)
                 game/create
                 (turn/process-board :p1 [:deploy 1 :kamikaze [1 7]])
                 (turn/process-board :p2 [:deploy 1 :kamikaze [1 2]])
                 (game/state :p1)
                 (turn/process-board :p1 [:move [1 7] [1 6] 1]
                                         [:move [1 6] [1 5] 1]
                                         [:move [1 5] [1 4] 1]
                                         [:move [1 4] [1 3] 1]
                                         [:attack [1 3] [1 2]]))]
    (is (= (writer/game->str game)
"state: final
winner: p1

d17.1.kamikaze
d12.1.kamikaze

m1716.1 m1615.1 m1514.1 m1413.1 a1312"))))

