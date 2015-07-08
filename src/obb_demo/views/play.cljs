(ns obb-demo.views.play
  (:require [obb-demo.state :as state]
            [obb-demo.views.layout.header :as header]
            [obb-demo.views.layout.footer :as footer]))

(defn render
  [state]
  [:div
   "Working on it..."
   [:p [:img {:src "https://camo.githubusercontent.com/f5fc5f992b37d31fb9b4aeb2d0d2241698779606/68747470733a2f2f7261772e6769746875622e636f6d2f6f72696f6e7362656c742d626174746c6567726f756e64732f626174746c652d656e67696e652d61692f6d61737465722f646f632f53616d706c65426f6172642e6a706567"}]]])

(defn renderer [] render)
