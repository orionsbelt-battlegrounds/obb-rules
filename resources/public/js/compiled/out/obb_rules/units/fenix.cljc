(ns ^{:added "1.7"
      :author "Pedro Santos"}
  obb-rules.units.fenix
  "Metadata information for the Fenix unit")

(def metadata
  {:name "fenix"
   :code "f"

   :attack 2500
   :after-attack [[:rebound]]
   :defense 2950
   :range 4
   :value 100

   :type :mechanic
   :category :heavy
   :displacement :air

   :movement-type :normal
   :movement-cost 3})

