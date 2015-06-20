(set-env!
 :source-paths #{"src" "test"}
  :dependencies '[[org.clojure/clojure "1.7.0-RC2"]
                  [adzerk/boot-cljs "0.0-3308-0"]
                  [adzerk/boot-test "1.0.4" :scope "test"]
                  [org.clojure/test.check "0.7.0" :score "test"]
                  [boot-cljs-test/node-runner "0.1.0" :scope "test"]
                  [org.clojure/math.numeric-tower "0.0.4"]])

(require '[adzerk.boot-test :refer :all]
         '[boot-cljs-test.node-runner :refer :all]
         '[adzerk.boot-cljs :refer :all])

(task-options!
  pom {:project 'my-project
       :version "0.1.0"}
  jar {:manifest {"Foo" "bar"}})

  (deftask build
  "Build my project."
  []
  (comp (pom) (jar) (install)))


  (deftask cljs-auto-test []
    (comp (watch)
    (speak)
      (cljs-test-node-runner) ;; put it before `cljs` task
      (cljs :source-map true
                    :optimizations :none)
                            (run-cljs-test) ;; put it after `cljs` task
                            ))
