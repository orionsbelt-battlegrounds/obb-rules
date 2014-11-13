(defproject obb-rules "1.3.1"
  :description "Orion's Belt battle rules"
  :url "https://github.com/orionsbelt-battlegrounds/obb-rules"

  :license {:name         "The MIT License"
            :url          "file://LICENSE"
            :distribution :repo
            :comments     "Copyright 2011-2014 Pedro Santos All Rights Reserved."}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/math.numeric-tower "0.0.4"]]
  :source-paths ["src"]
  :test-paths ["test"]

  :scm {:name "git"
        :url "git@github.com:orionsbelt-battlegrounds/obb-rules.git"}

  :profiles {:dev 
             {:dependencies [[midje "1.6.3"]]
              :plugins [[com.jakemccrary/lein-test-refresh "0.5.4"]
                        [lein-cloverage "1.0.2"]
                        [lein-midje "3.0.0"]]}}

  )
