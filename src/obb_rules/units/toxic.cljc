(ns obb-rules.units.toxic)

(def metadata
  {:name "toxic"
   :code "tx"

   :attack 450
   :defense 600
   :range 2
   :value 9

   :bonus {:attack {:type {:organic 1000}}}

   :type :mechanic
   :category :light
   :displacement :air

   :movement-type :normal
   :movement-cost 1})

