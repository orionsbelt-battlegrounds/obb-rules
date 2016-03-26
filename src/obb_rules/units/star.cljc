(ns ^{:added "3.0.0"
      :author "Joaquim Torres"}
    obb-rules.units.star
    "Metadata for the Star unit")

(def metadata
  {:name "star"
   :code "st"

   :attack 1
   :defense 10000
   :range 1
   :value 50000

   :type :mechanic
   :category :special
   :displacement :air

   :movement-type :all
   :movement-cost 1})
