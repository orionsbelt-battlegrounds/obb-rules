(ns ^{:added "2.1.0"
      :author "Pedro Santos"}
  obb-rules.serializer.common
  "Gets shared logic and consts for the reader and the writer")

(def ^:const context-separator
  "This marker separates each context of the dumped game
  (properties, deploy, turns,...)"
  "\n\n")

(def ^:const action-separator
  "This marker separates each action in a collection of actions"
  " ")
