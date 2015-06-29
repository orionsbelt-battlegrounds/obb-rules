(ns obb-rules.host-dependent
  "Host dependent utilities")

#?(:clj
    (defn parse-int [raw] (Integer. raw)))

#?(:cljs
    (defn parse-int [raw] (js/parseInt raw)))
