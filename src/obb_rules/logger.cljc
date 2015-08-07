(ns ^{:added "2.0.0" :author "Pedro Santos"}
  obb-rules.logger
  "Specific logger that can be turned on and off"
  (:require [obb-rules.simplifier :as simplify]))

(def ^:dynamic *verbose* true)

#?(:clj
  (defmacro log
    "Logs the given data"
    [& args]
    `(when *verbose*
      (println ~@args))))

#?(:cljs
  (defn log
    "Logs the given data"
    [& args]
    (when *verbose*
      (apply println args))))

(defn ai-turn
  "Logs ai-turn header"
  [ai-name game]
  (log "## ~~~~~~~~~~~~~~~~~~~~~~")
  (log "## AI Turn:" ai-name)
  (log "Game:")
  (log (simplify/clean-result {:board game})))

(defmacro with-verbose
  "Runs the given code in verbose mode"
  [& body]
  `(binding [*verbose* true]
    ~@body))

(defn ai-option
  "Logs an AI option"
  [option]
  (log (:actions option))
  (log "\tValue:" (:value option)
       "(" (:old-value option) ")"
       "data" (:data option)
       "coord" (:element-coord option)
       "Cost:" (:cost option)))
