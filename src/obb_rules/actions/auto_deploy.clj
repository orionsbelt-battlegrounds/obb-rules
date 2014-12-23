(ns obb-rules.actions.auto-deploy
  "Auto deploys units to the battleground, based on predefined templates"
  ^{:added "1.5" :author "Pedro Santos"}
  (:require [obb-rules.result :as result]
            [obb-rules.stash :as stash]
            [obb-rules.board :as board]
            [obb-rules.game :as game]))

(defn- verify-restrictions
  "Checks if the auto deploy can be made"
  [board player]
  (cond
    (not (game/state? board :deploy)) "MustBeDeployState"
    (-> (board/get-stash board player) (stash/cleared?)) "NoStash"))

(defn build-auto-deploy
  "Creates a action that auto deploys a stash"
  [[template]]
  (fn auto-deployer [board player]
    (if-let [error (verify-restrictions board player)]
      (result/action-failed error)
      (result/action-failed "NotImplemented"))))

