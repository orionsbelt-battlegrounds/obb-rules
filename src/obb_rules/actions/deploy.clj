(ns obb-rules.actions.deploy
  (:require [obb-rules.unit :as unit])
  (:use obb-rules.result obb-rules.board obb-rules.element obb-rules.unit))

(defn- deploy-restrictions
  "Checks if the deploy can be made"
  [player board quantity unit coordinate])

(defn- process-deploy
  "Processes a deploy"
  [player board quantity unit coordinate]
  (action-failed "NotImplemented"))

(defn build-deploy
  "Deploys a unit to the battleground"
  [[quantity unit-type coordinate]]
  (fn mover [board player]
    (let [unit (unit/fetch unit-type)]
      (if-let [error (deploy-restrictions player board quantity unit coordinate)]
        (action-failed error)
        (process-deploy board player quantity unit coordinate)))))

