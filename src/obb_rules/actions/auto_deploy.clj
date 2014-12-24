(ns obb-rules.actions.auto-deploy
  "Auto deploys units to the battleground, based on predefined templates"
  ^{:added "1.5" :author "Pedro Santos"}
  (:require [clojure.math.numeric-tower :as math]
            [obb-rules.result :as result]
            [obb-rules.translator :as translator]
            [obb-rules.actions.deploy :as deploy]
            [obb-rules.stash :as stash]
            [obb-rules.board :as board]
            [obb-rules.unit :as unit]
            [obb-rules.auto-deploys.firingsquad :as firingsquad]
            [obb-rules.game :as game]))

(def templates
  "The supported auto-deploy templates"
  {:firingsquad firingsquad/deploy})

(defn- verify-restrictions
  "Checks if the auto deploy can be made"
  [board player template]
  (cond
    (not (game/state? board :deploy)) "MustBeDeployState"
    (-> (board/get-stash board player) (stash/cleared?)) "NoStash"
    (nil? (templates template)) "NoTemplate"))

(defn build-auto-deploy
  "Creates a action that auto deploys a stash"
  [[raw-template-name]]
  (let [template-name (keyword raw-template-name)]
    (fn auto-deployer [board player]
      (if-let [error (verify-restrictions board player template-name)]
        (result/action-failed error)
        ((templates template-name) board player)))))

