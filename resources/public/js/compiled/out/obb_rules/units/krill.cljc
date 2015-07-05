(ns ^{:added "1.9"
      :author "Pedro Santos"}
  obb-rules.units.krill)

(def metadata
  {:name "krill"
   :code "kr"

   :attack 1500
   :after-hit [[:strikeback]]
   :defense 1000
   :range 3
   :value 30

   :type :mechanic
   :category :medium
   :displacement :air

   :movement-type :all
   :movement-cost 2})

