(ns obb-rules.auto-deploys.common
  "Common utilities for auto deploy logic"
  ^{:added "1.5" :author "Pedro Santos"}
  (:require [clojure.math.numeric-tower :as math]
            [obb-rules.result :as result]
            [obb-rules.translator :as translator]
            [obb-rules.actions.deploy :as deploy]
            [obb-rules.stash :as stash]
            [obb-rules.board :as board]
            [obb-rules.unit :as unit]
            [obb-rules.game :as game]))

(defn map-stash-to-units
  "Provides the given stash, but with translates units"
  [[unit-name quantity]]
  [(unit/fetch unit-name) quantity])

(defn build-lineup
  "Builds a vector with 8 positions, each with the corresponding unit"
  [board stash]
  (let [squares (board/board-width board)
        units (math/ceil (/ squares  (count stash)))
        grouped (map #(take units (repeat [(first %)])) stash)
        final (flatten grouped)]
    (take squares final)))

(defn- split-stash
  "Splits the total quantity into the given slots"
  [lineup [unit quantity]]
  (let [slots (count (filter #(= unit %) lineup))
        fraction (/ quantity slots)
        smallest-parcel-quantity (math/floor fraction)
        equal-parcel-slots (- slots 1)
        biggest (- quantity (* equal-parcel-slots smallest-parcel-quantity))]
    (into [[unit biggest]]
          (take equal-parcel-slots (repeat [unit smallest-parcel-quantity])))))

(defn build-lineup-quantities
  "Associates the expected quantities with every lineup element"
  [lineup stash]
  (let [quantities (map (partial split-stash lineup) stash)]
    (apply concat quantities)))

(defn- build-deploy-action
  "Builds a deploy action command"
  [player row idx [u q]]
  (let [coordinate (translator/coordinate player [(+ idx 1) row])]
    [(int q) (unit/unit-name u) coordinate]))

(defn build-deploy-actions
  "Builds deploy actions based on the given data"
  [player lineup row]
  (map-indexed (partial build-deploy-action player row) lineup))

(defn do-actions
  "Performs the deploy actions"
  [player result action]
  (if (result/failed? result)
    result
    (action (result/result-board result) player)))

