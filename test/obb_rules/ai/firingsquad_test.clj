(ns obb-rules.ai.firingsquad-test
  (:require [obb-rules.game :as game]
            [obb-rules.turn :as turn]
            [obb-rules.result :as result]
            [obb-rules.ai.firingsquad :as firingsquad]
            [obb-rules.ai.acts-as-bot-test :as acts-as-bot])
  (:use clojure.test))

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
  (acts-as-bot/first-blood firingsquad/actions))
