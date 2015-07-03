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

;;
;; ClojureScript Javascript implementation
;;

#?(:cljs
    (defn abs [n]
      (js/Math.abs n)))

#?(:cljs
    (defn sqrt [n]
      (js/Math.sqrt n)))

#?(:cljs
    (defn expt [base exponent]
      (js/Math.pow base exponent)))

