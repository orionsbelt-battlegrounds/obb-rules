(ns ^{:added "1.9"
      :author "Pedro Santos"}
  obb-rules.units.boozer
  "Metadata information for the Boozer unit")

(def metadata
  {:name "boozer"
   :code "bz"

   :attack 3200
   :after-hit [[:strikeback]]
   :defense 2800
   :range 5
   :value 68

   :bonus {:attack {:displacement {:air 4000}}}

   :type :mechanic
   :category :heavy
   :displacement :ground

   :movement-type :front
   :movement-cost 4})

