(ns obb-rules.units.pretorian)

(def metadata
  {:name "pretorian"
   :code "h"

   :attack 450
   :after-hit [[:strikeback]]
   :defense 5550
   :range 3
   :value 48

   :type :mechanic
   :category :medium
   :displacement :air

   :movement-type :diagonal
   :movement-cost 2})

