(ns obb-rules.actions.auto-deploy
  "Auto deploys units to the battleground, based on predefined templates"
  ^{:added "1.5" :author "Pedro Santos"}
  (:require [obb-rules.result :as result]))

(defn build-auto-deploy
  "Creates a action that auto deploys a stash"
  [[template]]
  (fn auto-deployer [board player]
    (result/action-failed "NotImplemented")))

