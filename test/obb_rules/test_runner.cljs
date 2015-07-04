(ns obb-rules.test-runner
  (:require [cljs.test :refer-macros [run-tests run-all-tests] :refer [empty-env report]]
            [obb-rules.test-requires]))

(enable-console-print!)

(defn runner
  []
  (time (run-all-tests #"obb-rules.*-test")))

(runner)

(defn -main
  [& args]
  (runner))

(set! *main-cli-fn* -main)
