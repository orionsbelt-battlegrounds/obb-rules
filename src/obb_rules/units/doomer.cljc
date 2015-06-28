(ns ^{:added "1.7"
      :author "Pedro Santos"}
  obb-rules.units.doomer
  "Metadata information for the Doomer unit")

(def metadata
  {:name "doomer"
   :code "doo"

   :attack 6000
   :attack-type :catapult
   :after-attack [[:rebound]]
   :defense 500
   :range 3
   :value 68

   :type :mechanic
   :category :heavy
   :displacement :air

   :movement-type :diagonal
   :movement-cost 3})

