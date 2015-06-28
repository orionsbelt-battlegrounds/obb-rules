(defproject obb-rules "1.13.0"
  :description "Orion's Belt battle rules"
  :url "https://github.com/orionsbelt-battlegrounds/obb-rules"

  :license {:name         "The MIT License"
            :url          "file://LICENSE"
            :distribution :repo
            :comments     "Copyright 2011-2014 Pedro Santos All Rights Reserved."}

  :dependencies [[org.clojure/clojure "1.7.0-RC2"]
                 [org.clojure/math.numeric-tower "0.0.4"]]

  :source-paths ["src"]
  :test-paths ["test"]

  :scm {:name "git"
        :url "git@github.com:orionsbelt-battlegrounds/obb-rules.git"}

  :cljsbuild {
              :test-commands
                {"test" ["phantomjs"
                         "phantom/test.js"
                          "test.html"]}
              :builds [{:id "prod"
                        :source-paths ["src"]
                        :compiler {:output-to "resources/public/js/main.js"
                                   :optimizations :whitespace
                                   :pretty-print true}}
                       {:id "test"
                        :source-paths ["src" "test"]
                        :compiler {:output-to "build/test/out.js"
                        :output-dir "build/test/out"
                        :cache-anlysis true
                        :main obb-rules.test-runner
                        :optimizations :none}}]}

  :profiles {:production {
                          :global-vars {*warn-on-reflection* false
                                        *assert* false}}
             :cljs {:dependencies [[org.clojure/test.check "0.7.0"]
                                   [org.clojure/clojurescript "0.0-3308" :exclusions [org.apache.ant/ant]]]
                    :plugins [[lein-cljsbuild "1.0.6"]]
                    }
             :dev {:dependencies [[org.clojure/test.check "0.7.0"]
                                  [criterium "0.4.3"]]
                   :global-vars {*warn-on-reflection* false
                                 *assert* true}
                   :plugins [[com.jakemccrary/lein-test-refresh "0.9.0"]
                             [lein-cloverage "1.0.2"]]}}

  )
