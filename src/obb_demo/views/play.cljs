(ns obb-demo.views.play
  (:require [obb-demo.state :as state]
            [obb-demo.boardground :as boardground]))

(defn render
  [state]
  [boardground/render (:play state)])
