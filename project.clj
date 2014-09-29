(defproject obb-rules "0.1.0"
  :description "Orion's Belt battle rules"
  :url "http://example.com/FIXME"

  :license {:name         "The MIT License"
            :url          "file://LICENSE"
            :distribution :repo
            :comments     "Copyright 2011-2014 Pedro Santos All Rights Reserved."}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/math.numeric-tower "0.0.4"]]
  :source-paths ["src"]
  :test-paths ["test"]

  :profiles {:dev 
             {:dependencies [[midje "1.6.3"]]
              :plugins [[com.jakemccrary/lein-test-refresh "0.5.2"]
                        [lein-cloverage "1.0.2"]
                        [lein-midje "3.0.0"]]}}

  )
