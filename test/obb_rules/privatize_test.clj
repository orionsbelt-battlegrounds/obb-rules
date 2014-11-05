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
(def p1-element (element/create-element :p1 :unit 20 :north [1 1]))
(def partial-deploy-game (-> deploy-game
                             (board/place-element [1 1] p1-element)))

(deftest privatize-hides-all
  (let [privatized (privatize/game deploy-game)
        stash1 (game/get-stash privatized :p1)
        stash2 (game/get-stash privatized :p2)]
    (is (not= privatized deploy-game))
    (is (stash/cleared? stash1))
    (is (stash/cleared? stash2))
    (is (board/empty-board? privatized :p1))
    (is (board/empty-board? privatized :p2))
    (is (game/state privatized))))

(deftest privatize-hides-elements
  (let [privatized (privatize/game partial-deploy-game)]
    (is (board/empty-board? privatized :p1))
    (is (board/empty-board? privatized :p2))))

(deftest privatize-dont-do-final-state
  (is (= final-board (privatize/game final-board))))

(deftest privatize-dont-do-p1-state
  (is (= p1-board (privatize/game p1-board))))

(deftest privatize-dont-do-p2-state
  (is (= p2-board (privatize/game p2-board))))
