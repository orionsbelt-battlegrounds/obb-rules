(ns ^{:added "2.1.0"
      :author "Pedro Santos"}
  obb-rules.serializer.writer
  "Writes a game and actions to a text format")

(defmulti action->str
  "Translates a raw action to a concise string representation"
  (fn [action]
    (first action)))

(defmethod action->str :deploy
  [[_ quantity unit [source-x source-y]]]
  (str "d" source-x source-y "." quantity "." (name unit)))

(defmethod action->str :attack
  [[_ [source-x source-y] [target-x target-y]]]
  (str "a" source-x source-y target-x target-y))

(defmethod action->str :goto
  [[_ [source-x source-y] [target-x target-y]]]
  (str "g" source-x source-y target-x target-y))

(defmethod action->str :rotate
  [[_ [source-x source-y] dir]]
  (str "r" source-x source-y (first (name dir))))
