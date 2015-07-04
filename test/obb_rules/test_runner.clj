(ns obb-rules.test-runner
  (:require [clojure.test :refer [run-tests run-all-tests]]
            [obb-rules.test-requires]))

(defn runner
  []
  (run-all-tests #"obb-rules.*-test"))

(defn -main
  [& args]
  (runner))
