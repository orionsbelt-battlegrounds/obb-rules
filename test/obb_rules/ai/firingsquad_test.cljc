(ns obb-rules.ai.firingsquad-test
  (:require [obb-rules.game :as game]
            [obb-rules.turn :as turn]
            [obb-rules.stash :as stash]
            [obb-rules.unit :as unit]
            [obb-rules.element :as element]
            [obb-rules.board :as board]
            [obb-rules.result :as result]
            [obb-rules.ai.firingsquad :as firingsquad]
            [obb-rules.generators :as obb-gen]
            [obb-rules.ai.acts-as-bot-test :as acts-as-bot]
    #?(:cljs [cljs.test.check :as tc])
    #?(:clj [clojure.test.check.generators :as gen]
       :cljs [cljs.test.check.generators :as gen])
    #?(:clj [clojure.test.check.properties :as prop]
       :cljs [cljs.test.check.properties :as prop :include-macros true])
    #?(:clj [clojure.test.check.clojure-test :refer [defspec]]
       :cljs [cljs.test.check.cljs-test :refer-macros [defspec]])
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(deftest deploy-choice
  (acts-as-bot/validate-deploy firingsquad/actions))

(deftest direct-attack
  (acts-as-bot/direct-attack firingsquad/actions))

(deftest direct-attack-double
  (acts-as-bot/direct-attack-double firingsquad/actions))

(deftest rotate-attack
  (acts-as-bot/rotate-attack firingsquad/actions))

(deftest prefer-rotate-attack
  (acts-as-bot/prefer-rotate-attack firingsquad/actions))

(deftest first-blood
  (acts-as-bot/first-blood firingsquad/actions (stash/random)))

(deftest move-and-attack
  (acts-as-bot/move-and-attack firingsquad/actions))

(defspec first-blood-check
  (* obb-gen/scenarions-to-test 1)
  (prop/for-all [raw-stash (obb-gen/stash)]
    (let [stash (stash/create-from-hash (apply hash-map (flatten raw-stash)))]
      (acts-as-bot/first-blood firingsquad/actions stash))))

(deftest complete-game
  (def crusader (unit/get-unit-by-name "crusader"))
  (def quantity 100)

  (let [board (-> (board/create-board)
                  (game/state :p1)
                  (board/place-element [1 7] (element/create-element :p1 crusader quantity :north [1 7]))
                  (board/place-element [2 7] (element/create-element :p1 crusader quantity :north [2 7]))
                  (board/place-element [3 7] (element/create-element :p1 crusader quantity :north [3 7]))

                  (board/place-element [1 2] (element/create-element :p2 crusader quantity :south [1 2]))
                  (board/place-element [2 2] (element/create-element :p2 crusader quantity :south [2 2]))
                  (board/place-element [3 2] (element/create-element :p2 crusader quantity :south [4 2])))

        actions (firingsquad/actions board :p1)
        result (turn/process-actions board :p1 actions)
        game-p1 (result/result-board result)

        actions2 (firingsquad/actions game-p1 :p2)
        result2 (turn/process-actions game-p1 :p2 actions2)
        final-game (result/result-board result2)]

    (is (result/succeeded? result))
    (is (result/succeeded? result2))))
