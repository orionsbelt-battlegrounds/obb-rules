(ns obb-rules.privatize-test
  (:require [obb-rules.game :as game]
            [obb-rules.board :as board]
            [obb-rules.privatize :as privatize]
            [obb-rules.turn :as turn]
            [obb-rules.element :as element]
            [obb-rules.stash :as stash])
  (:use clojure.test))

(def deploy-game (game/random))
(def final-board (assoc deploy-game :state :final))
(def p1-board (assoc deploy-game :state :p1))
(def p2-board (assoc deploy-game :state :p2))

(deftest privatize-dont-do-final-state
  (is (= final-board (privatize/game final-board))))

(deftest privatize-dont-do-p1-state
  (is (= p1-board (privatize/game p1-board))))

(deftest privatize-dont-do-p2-state
  (is (= p2-board (privatize/game p2-board))))
