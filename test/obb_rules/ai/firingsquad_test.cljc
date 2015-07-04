(ns obb-rules.ai.firingsquad-test
  (:require [obb-rules.game :as game]
            [obb-rules.turn :as turn]
            [obb-rules.stash :as stash]
            [obb-rules.result :as result]
            [obb-rules.ai.firingsquad :as firingsquad]
            [obb-rules.generators :as obb-gen]
            [obb-rules.ai.acts-as-bot-test :as acts-as-bot]
    #?(:cljs [cljs.test.check :as tc])
    #?(:clj [clojure.test.check.generators :as gen]
       :cljs [cljs.test.check.generators :as gen])
    #?(:clj [clojure.test.check.properties :as prop]
       :cljs [cljs.test.check.properties :as prop :include-macros true])
    #?(:clj [clojure.test.check.clojure-test :refer [defspec]]
       :cljs [cljs.test.check.cljs-test :refer-macros [defspec]])
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(deftest deploy-choice
  (acts-as-bot/validate-deploy firingsquad/actions))

(deftest direct-attack
  (acts-as-bot/direct-attack firingsquad/actions))

(deftest direct-attack-double
  (acts-as-bot/direct-attack-double firingsquad/actions))

(deftest rotate-attack
  (acts-as-bot/rotate-attack firingsquad/actions))

(deftest prefer-rotate-attack
  (acts-as-bot/prefer-rotate-attack firingsquad/actions))

(deftest first-blood
  (acts-as-bot/first-blood firingsquad/actions (stash/random)))

(deftest move-and-attack
  (acts-as-bot/move-and-attack firingsquad/actions))

(defspec first-blood-check
  (* obb-gen/scenarions-to-test 1)
  (prop/for-all [raw-stash (obb-gen/stash)]
    (let [stash (stash/create-from-hash (apply hash-map (flatten raw-stash)))]
      (acts-as-bot/first-blood firingsquad/actions stash))))
