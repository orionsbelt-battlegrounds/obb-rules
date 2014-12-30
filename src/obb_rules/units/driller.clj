(ns ^{:added "1.8"
      :author "Pedro Santos"}
  obb-rules.units.driller
  "Metadata information for the Driller unit")

(def metadata
  {:name "driller"
   :code "d"

   :attack 1500
   :after-attack [[:triple]]
   :defense 1500
   :range 1
   :value 32

   :type :mechanic
   :category :medium
   :displacement :ground

   :movement-type :all
   :movement-cost 2})

