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

(def ^:const stash-separator
  "This marker separates each stash unit/quantity in a stash coll"
  " ")

(def ^:const attributes-separator
  "This marker separates key from value on the attributes"
  ":")

(def ^:const in-action-separator
  "This markers separates data in an action"
  "\\.")
