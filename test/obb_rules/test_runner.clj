(ns obb-rules.test-runner
  (:require [clojure.test :refer [run-tests run-all-tests]]
            [clojure.pprint]
            [obb-rules.test-requires]))

(defn runner
  []
  (time (run-all-tests #"obb-rules.*-test")))

(defn prunner
  []
  (time (doall (pmap #(time (run-all-tests %)) [#"obb-rules\.[^\.]*-test"
                                                #"obb-rules\.actions.*-test"]))))

(defn -main
  [& args]
  (runner))
