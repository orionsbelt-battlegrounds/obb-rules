(defproject obb-rules "2.0.0"
  :description "Orion's Belt battle rules"
  :url "https://github.com/orionsbelt-battlegrounds/obb-rules"

  :license {:name         "The MIT License"
            :url          "file://LICENSE"
            :distribution :repo
            :comments     "Copyright 2011-2014 Pedro Santos All Rights Reserved."}

  :jvm-opts ["-XX:+TieredCompilation" "-XX:TieredStopAtLevel=1"]

  :scm {:name "git"
        :url "git@github.com:orionsbelt-battlegrounds/obb-rules.git"}

  :profiles {

     ;;
     ;; Main profile for the Clojure/JVM
     ;;

     :clj {

       :dependencies [[org.clojure/clojure "1.7.0"]
                      [org.clojure/test.check "0.7.0"]
                      [org.clojure/math.numeric-tower "0.0.4"]]

       :plugins [[com.jakemccrary/lein-test-refresh "0.9.0"]
                 [lein-cloverage "1.0.2"]]

       :main obb-rules.test-runner}

     ;;
     ;; Main profile for ClojureScript/Browser
     ;;

     :cljs-browser {

       :dependencies [[org.clojure/test.check "0.7.0"]
                      [org.clojure/math.numeric-tower "0.0.4"]
                      [org.clojure/clojure "1.7.0"]
                      [org.clojure/clojurescript "0.0-3308" :exclusions [org.apache.ant/ant]]]

       :plugins [[lein-cljsbuild "1.0.6"]]

       :cljsbuild {
                   :test-commands
                     {"test" ["phantomjs"
                              "phantom/test.js"
                               "test.html"]}
                   :builds [{:id "test"
                             :source-paths ["src" "test"]
                             :compiler {:output-to "build/test/out.js"
                                        :output-dir "build/test/out"
                                        :cache-anlysis true
                                        :main obb-rules.test-runner
                                        :optimizations :advanced}}]}}
     ;;
     ;; Main profile for ClojureScript/Nodejs
     ;;

     :cljs-node {

       :dependencies [[org.clojure/test.check "0.7.0"]
                      [org.clojure/math.numeric-tower "0.0.4"]
                      [org.clojure/clojure "1.7.0"]
                      [org.clojure/clojurescript "0.0-3308" :exclusions [org.apache.ant/ant]]]

       :plugins [[lein-cljsbuild "1.0.6"]]

       :cljsbuild {
                   :test-commands {"test" ["node"  "build/test/out-node.js"]}
                   :builds [{:id "test"
                             :source-paths ["src" "test"]
                             :compiler {:output-to "build/test/out-node.js"
                                        :output-dir "build/test/out-node"
                                        :main obb-rules.test-runner
                                        :target :nodejs
                                        :language-in :ecmascript5
                                        :language-out :ecmascript5
                                        :optimizations :advanced}}]}}})
