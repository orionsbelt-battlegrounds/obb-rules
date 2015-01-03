(ns ^{:added "1.10" :author "Pedro Santos"}
  obb-rules.ai.firingsquad
  "Firingsquad bot implementation"
  (:require [clojure.math.numeric-tower :as math]
            [obb-rules.actions.move :as move]
            [obb-rules.element :as element]
            [obb-rules.laws :as laws]
            [obb-rules.result :as result]
            [obb-rules.board :as board]))

(defn actions
  "Returns a list of actions to apply to the current game"
  [game]
  [[:auto-deploy :firingsquad]])
