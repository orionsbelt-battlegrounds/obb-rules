(ns obb-rules.actions.goto
  "Allows movement from a unit to non-adjacent coordinates.
  Translates itself to the best found path via :move actions."
  (:require [obb-rules.actions.move :as move]))

(defn build-goto
  "Builds a goto action on a board"
  [args]
  (move/build-move args))
