(ns obb-rules.math
  "Generic platform-independent math utils"
  #?(:clj
      (:require [clojure.math.numeric-tower :as math])))

#?(:clj
    (def abs math/abs))

#?(:cljs
    (defn abs [n]
      (js/Math.abs n)))

