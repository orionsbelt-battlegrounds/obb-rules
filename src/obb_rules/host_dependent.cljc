(ns obb-rules.host-dependent
  "Host dependent utilities")

#?(:clj
    (defn parse-int [raw] (Integer. raw)))

#?(:cljs
    (defn parse-int [raw] (js/parseInt raw)))

#?(:clj
    (defn get-env [var-name default-value]
      (get (System/getenv) var-name default-value)))

#?(:cljs
    (defn get-env [var-name default-value]
      default-value))
