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

  :profiles {:production {
                   :global-vars {*warn-on-reflection* false
                                 *assert* false}}
             :dev {:dependencies [[org.clojure/test.check "0.7.0"]
                                  [criterium "0.4.3"]]
                   :global-vars {*warn-on-reflection* false
                                 *assert* true}
                   :plugins [[com.jakemccrary/lein-test-refresh "0.9.0"]
                             [lein-cloverage "1.0.2"]]}}

  )
