(ns obb-rules.stash-test
  (:require [obb-rules.stash :as stash])
  (:use clojure.test
        obb-rules.action
        obb-rules.actions.move
        obb-rules.board
        obb-rules.element
        obb-rules.result
        obb-rules.unit))

(deftest stash-creation
  (testing "creates a stash given some units"
    (is (stash/create :rain 20
                      :crusader 10))))

(deftest stash-access
  (let [s (stash/create "anubis" 20)]

    (testing "is cleared"
      (is (not (stash/cleared? s))))

    (testing "is available"
      (is (stash/available? s "anubis" 10)))

    (testing "is not available"
      (is (not (stash/available? s "anubis" 100))))

    (testing "unit count"
      (is (= 20 (stash/how-many? s :anubis))))

    (testing "get partial unit from stash"
      (let [new-stash (stash/retrieve s "anubis" 10)]
        (is new-stash)
        (is (= 10 (stash/how-many? new-stash "anubis")))))

    (testing "get all unit from stash"
      (let [new-stash (stash/retrieve s "anubis" 20)]
        (is new-stash)
        (is (stash/cleared? new-stash))
        (is (= 0 (stash/how-many? new-stash :anubis)))))))

(deftest random-stash-test
  (testing "random stash"
    (let [stash (stash/random)]
      (is stash))))

(deftest stash-indifferent-access
  (let [stash (stash/create :rain 20
                            "crusader" 10)]
    (is (= 20 (stash/how-many? stash :rain)))
    (is (= 20 (stash/how-many? stash "rain")))
    (is (= 10 (stash/how-many? stash :crusader)))
    (is (= 10 (stash/how-many? stash "crusader")))
    (is (stash/available? stash "rain" 1))
    (is (stash/available? stash :rain 1))
    (is (stash/available? stash "crusader" 1))
    (is (stash/available? stash :crusader 1))))

(deftest stash-retrieve-indifferent-access
  (let [stash (stash/create :rain 20 "crusader" 10)
        stash2 (stash/retrieve stash "rain" 1)
        stash3 (stash/retrieve stash :rain 1)
        stash4 (stash/retrieve stash "crusader" 1)
        stash5 (stash/retrieve stash :crusader 1)]
    (is (= 19 (stash/how-many? stash2 :rain)))
    (is (= 19 (stash/how-many? stash3 "rain")))
    (is (= 9 (stash/how-many? stash4 :crusader)))
    (is (= 9 (stash/how-many? stash5 "crusader")))))

