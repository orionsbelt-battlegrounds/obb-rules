(ns obb-rules.privatize
  "Functions that hide private data on games"
  (:require [obb-rules.game :as game]))

(defmulti game
  "Privatizes a board"
  (fn [game] (game/state game)))

(defmethod game :final [board] board)
(defmethod game :p1 [board] board)
(defmethod game :p2 [board] board)

