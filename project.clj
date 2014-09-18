(defproject obb-rules3 "0.1.0"
  :description "Orion's Belt battle rules"
  :url "http://example.com/FIXME"

  :license {:name         "The MIT License"
            :url          "file://LICENSE"
            :distribution :repo
            :comments     "Copyright 2011-2014 Pedro Santos All Rights Reserved."}
  :dependencies [[org.clojure/clojure "1.5.1"]]

  :profiles {:dev {:dependencies [[speclj "3.1.0"]]}}
  :plugins [[speclj "3.1.0"]]
  :test-paths ["spec"]

  :eval-in :leiningen ; to recognize spec task
  )
