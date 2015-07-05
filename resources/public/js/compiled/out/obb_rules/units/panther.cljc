(ns ^{:added "1.7"
      :author "Pedro Santos"}
  obb-rules.units.panther
  "Metadata information for the Panther unit")

(def metadata
  {:name "panther"
   :code "p"

   :attack 300
   :after-attack [[:rebound]]
   :defense 300
   :range 1
   :value 11

   :type :mechanic
   :category :light
   :displacement :ground

   :movement-type :all
   :movement-cost 1})

