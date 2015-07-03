(ns obb-rules.test-runner
  (:require [cljs.test :refer-macros [run-tests] :refer [empty-env report]]
            [obb-rules.unit-test]
            [obb-rules.board-test]
            [obb-rules.simplifier-test]
            [obb-rules.translator-test]
            [obb-rules.actions.direction-test]
            [obb-rules.actions.rotate-test]
            [obb-rules.actions.deploy-test]
            [obb-rules.actions.rebound-test]
            [obb-rules.actions.damage-calculator-test]
            [obb-rules.stash-test]
            [obb-rules.game-mode-test]
            [obb-rules.element-test]))

(enable-console-print!)

;; As of CLJS-988's implementation, cljs.test doesn't give us a way to
;; get the test report summary map back from (run-tests) and friends
;; -- (run-tests) always returns nil. So, we have to keep track, very
;; statefully, of the error count ourselves. Delegating to the default
;; implementation of these methods performs the printing.

(def error-count (atom 0))

(defmethod report [::test :pass] [m]
  ((get-method report [:cljs.test/default :pass]) m))

(defmethod report [::test :begin-test-ns] [m]
  ((get-method report [:cljs.test/default :begin-test-ns]) m))

(defmethod report [::test :error] [m]
  (swap! error-count inc)
  ((get-method report [:cljs.test/default :error]) m))

(defmethod report [::test :fail] [m]
  (swap! error-count inc)
  ((get-method report [:cljs.test/default :fail]) m))

(defmethod report [::test :summary] [m]
  ((get-method report [:cljs.test/default :summary]) m))

(defn runner
  []
  (run-tests (empty-env ::test) 'obb-rules.unit-test
                                'obb-rules.element-test
                                'obb-rules.board-test
                                'obb-rules.translator-test
                                'obb-rules.stash-test
                                'obb-rules.game-mode-test
                                'obb-rules.actions.direction-test
                                'obb-rules.actions.rotate-test
                                'obb-rules.actions.deploy-test
                                'obb-rules.actions.damage-calculator-test
                                'obb-rules.actions.rebound-test
                                'obb-rules.simplifier-test)
  ;; The phantomjs test runner expects this variable to be set. See
  ;; phantom/test.js.
  (set! (.-rand_cljc_error_count js/window) @error-count))

(runner)
