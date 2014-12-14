(ns obb-rules.actions.deploy
  (:require [obb-rules.unit :as unit]
            [obb-rules.stash :as stash]
            [obb-rules.simplifier :as simplify]
            [obb-rules.game :as game])
  (:use obb-rules.result obb-rules.board obb-rules.element obb-rules.unit))

(defn- invalid-deploy-zone?
  "Returns true if the coordinate zone is invalid"
  [player [x y]]
  (if (= player :p1)
    (< y 7 )
    (> y 2)))

(defn- deploy-restrictions
  "Checks if the deploy can be made"
  [player board quantity unit coordinate element stash]
  (cond
    (not stash) "NoStashAvailable"
    (not (game/deploy? board)) "StateMismatch"
    (invalid-deploy-zone? player coordinate) "InvalidDeployZone"
    (not (stash/available? stash (keyword (unit-name unit)) quantity)) "InvalidQuantity"
    (not (can-place-element? board coordinate element)) "InvalidPlace"))

(defn- process-deploy
  "Processes a deploy"
  [player board quantity unit coordinate element stash]
  (let [unit-type (keyword (unit-name unit))
        new-stash (stash/retrieve stash unit-type quantity)
        placed-board (place-element board coordinate element)
        new-board (set-stash placed-board player new-stash)]
    (action-success new-board 0)))

(defn- default-direction
  "Gets the default direction for the given player"
  [player]
  (if (simplify/name= player :p1)
    :north
    :south))

(defn build-deploy
  "Deploys a unit to the battleground"
  [[quantity unit-type coordinate]]
  (fn deployer [board player]
    (let [unit (unit/fetch unit-type)
          element (create-element player unit quantity (default-direction player))
          stash (get-stash board player)]
      (assert unit (str "Don't know unit type " unit-type))
      (if-let [error (deploy-restrictions player board quantity unit coordinate element stash)]
        (action-failed error)
        (process-deploy player board quantity unit coordinate element stash)))))

