(defproject obb-rules "2.0.0"
  :description "Orion's Belt battle rules"
  :url "https://github.com/orionsbelt-battlegrounds/obb-rules"

  :license {:name         "The MIT License"
            :url          "file://LICENSE"
            :distribution :repo
            :comments     "Copyright 2011-2014 Pedro Santos All Rights Reserved."}

  :dependencies [[org.clojure/test.check "0.8.0"]
                 [org.clojure/math.numeric-tower "0.0.4"]
                 [org.clojure/tools.namespace "0.2.11"]
                 [org.clojure/clojure "1.8.0-alpha2"]
                 [org.clojure/tools.nrepl "0.2.10"]
                 [criterium "0.4.3"]
                 [reagent "0.5.0"]
                 [secretary "1.2.3"]
                 [org.clojure/clojurescript "1.7.28"]]

  :jvm-opts ["-XX:+TieredCompilation"]

  :scm {:name "git"
        :url "git@github.com:orionsbelt-battlegrounds/obb-rules.git"}

  :profiles {

     ;;
     ;; Main profile for the Clojure/JVM
     ;;

     :clj {

       :plugins [[com.jakemccrary/lein-test-refresh "0.10.0"]
                 [lein-cloverage "1.0.2"]]

       :main obb-rules.test-runner}

     ;;
     ;; Main profile for ClojureScript dev
     ;;

     :cljs-dev {

       :plugins [[lein-cljsbuild "1.0.6"]
                 [lein-figwheel "0.3.7"]]

       :figwheel {:css-dirs ["resources/public/css"]}

       :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

       :cljsbuild {
                   :builds [{:id "dev"
                             :figwheel {:on-jsload "obb-demo.core/on-js-reload"}
                             :source-paths ["src"]
                             :compiler {:main obb-demo.core
                                        :figwheel true
                                        :recompile-dependents true
                                        :asset-path "js/compiled/out"
                                        :output-to "resources/public/js/compiled/obb.js"
                                        :output-dir "resources/public/js/compiled/out"
                                        :source-map-timestamp true}}]}}


     ;;
     ;; Main profile for ClojureScript production
     ;;

     :cljs-prd {

       :plugins [[lein-cljsbuild "1.0.6"]]

       :cljsbuild {
                   :builds [{:id "prd"
                             :source-paths ["src"]
                             :compiler {:main obb-demo.core
                                        :asset-path "js/compiled/out"
                                        :output-to "resources/public/js/compiled/obb.js"
                                        :output-dir "resources/public/js/compiled/out"
                                        :optimizations :advanced
                                        :source-map-timestamp true}}]}}



     ;;
     ;; Main profile for ClojureScript/Browser
     ;;

     :cljs-browser {

       :plugins [[lein-cljsbuild "1.0.6"]]

       :cljsbuild {
                   :test-commands {"test" ["phantomjs" "phantom/test.js" "test.html"]}
                   :builds [{:id "test"
                             :source-paths ["src/obb_rules" "test"]
                             :compiler {:output-to "build/test/out.js"
                                        :output-dir "build/test/out"
                                        :cache-anlysis true
                                        :main obb-rules.test-runner
                                        :optimizations :advanced}}]}}

     ;;
     ;; Main profile for ClojureScript/Nodejs
     ;;

     :cljs-node {

       :plugins [[lein-cljsbuild "1.0.6"]]

       :cljsbuild {
                   :test-commands {"test" ["node"  "build/test/out-node.js"]}
                   :builds [{:id "test"
                             :source-paths ["src/obb_rules" "test"]
                             :compiler {:output-to "build/test/out-node.js"
                                        :output-dir "build/test/out-node"
                                        :main obb-rules.test-runner
                                        :target :nodejs
                                        :language-in :ecmascript5
                                        :language-out :ecmascript5
                                        :optimizations :advanced}}]}}})
