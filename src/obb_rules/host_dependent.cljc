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

(defn scenarios-to-test []
  (parse-int (get-env "OBB_SCENARIOS_TO_TEST" "1")))

#?(:clj
    (def parallel-map
      "Tries to run a map in parallel"
      pmap))

#?(:cljs
    (def parallel-map
      "Tries to run a map in parallel"
      map))
