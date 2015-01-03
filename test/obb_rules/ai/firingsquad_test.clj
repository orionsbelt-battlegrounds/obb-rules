(ns obb-rules.ai.firingsquad-test
  (:require [obb-rules.game :as game]
            [obb-rules.turn :as turn]
            [obb-rules.result :as result]
            [obb-rules.ai.firingsquad :as firingsquad]
            [obb-rules.ai.acts-as-bot-test :as acts-as-bot])
  (:use clojure.test))

(deftest deploy-choice
  (acts-as-bot/validate-deploy firingsquad/actions))

