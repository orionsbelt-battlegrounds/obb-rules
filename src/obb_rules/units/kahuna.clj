(ns ^{:added "1.7"
      :author "Pedro Santos"}
  obb-rules.units.kahuna
  "Metadata information for the Kahuna unit")

(def metadata
  {:name "kahuna"
   :code "kh"

   :attack 1000
   :after-attack [[:rebound]]
   :defense 1300
   :range 2
   :value 42

   :type :mechanic
   :category :medium
   :displacement :ground

   :movement-type :all
   :movement-cost 2})

