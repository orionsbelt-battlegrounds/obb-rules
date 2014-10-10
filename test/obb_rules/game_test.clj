(ns obb-rules.game-test
  (:require [obb-rules.game :as game]
            [obb-rules.board :as board]
            [obb-rules.stash :as stash])
  (:use clojure.test))

(deftest create-game
  (let [game (game/random)]
    (is game)
    (is (= :deploy (game/state game)))
    (is (= 0 (board/board-elements-count game)))
    (is (not (stash/cleared? game)))))
