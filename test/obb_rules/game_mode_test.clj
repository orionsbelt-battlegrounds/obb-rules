(ns obb-rules.game-mode-test
  (:require [obb-rules.game :as game]
            [obb-rules.board :as board]
            [obb-rules.game-mode :as game-mode]
            [obb-rules.turn :as turn]
            [obb-rules.stash :as stash])
  (:use clojure.test))

(deftest dont-finalize-on-deploy
  (let [game-on-deploy (game/random)
        final-game (game-mode/process game-on-deploy)]
    (is (not (game-mode/final? game-on-deploy)))
    (is (= :deploy (game/state final-game)))))

