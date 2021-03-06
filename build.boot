(set-env!
 :source-paths   #{"src"}
 :resource-paths #{"html"}
 :dependencies '[[adzerk/boot-cljs      "0.0-3308-0"]
                 [adzerk/boot-cljs-repl "0.1.10-SNAPSHOT"]
                 [adzerk/boot-reload    "0.2.6"]
                 [boot-cljs-test/node-runner "0.1.0" ]
                 [adzerk/boot-test "1.0.4" :scope "test"]
                 [org.clojure/clojurescript "0.0-3308"]
                 [org.clojure/clojure "1.7.0-RC2"]
                 [org.clojure/math.numeric-tower "0.0.4"]
                 [org.clojure/test.check "0.7.0" :scope "test"]
                 [pandeiro/boot-http "0.3.0" :scope "test"]])

(require
 '[adzerk.boot-cljs      :refer :all]
 '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
 '[adzerk.boot-test :refer [test]]
 '[boot-cljs-test.node-runner :refer :all]
 '[adzerk.boot-reload    :refer [reload]]
 '[pandeiro.http         :refer [serve]])

(deftask dev-cljs []
  (set-env! :source-paths #{"src" "test"})
  (comp #_(serve :dir "target/")
        (watch)
        (speak)
        (reload :on-jsload 'app.core/main)
        (cljs-repl)
        (cljs-test-node-runner :namespaces '[obb-rules.unit-test])
        (cljs :source-map true :optimizations :none)
        (run-cljs-test)))

(deftask test-cljs []
  (set-env! :source-paths #{"src""test"})
  (comp (speak)
        (cljs-test-node-runner :namespaces '[obb-rules.unit-test])
        (cljs :source-map true :optimizations :none)
        (run-cljs-test)))

(deftask test-clj []
  (set-env! :source-paths #{"src" "test"})
  (comp (test))))

(deftask build-cljs []
  (set-env! :source-paths #{"src"})
  (comp (cljs :optimizations :advanced)))
