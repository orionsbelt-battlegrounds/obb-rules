(ns obb-rules.math
  "Generic platform-independent math utils"
  #?(:clj
      (:require [clojure.math.numeric-tower :as math])))


;;
;; Clojure JVM implementation
;;

#?(:clj
    (def abs math/abs))

#?(:clj
    (def sqrt math/sqrt))

#?(:clj
    (def expt math/expt))

#?(:clj
    (def ceil math/ceil))

#?(:clj
    (def floor math/floor))

;;
;; ClojureScript Javascript implementation
;;

#?(:cljs
    (defn abs [n]
      (js/Math.abs n)))

#?(:cljs
    (defn ceil [n]
      (js/Math.ceil n)))

#?(:cljs
    (defn floor [n]
      (js/Math.floor n)))

#?(:cljs
    (defn sqrt [n]
      (js/Math.sqrt n)))

#?(:cljs
    (defn expt [base exponent]
      (js/Math.pow base exponent)))

