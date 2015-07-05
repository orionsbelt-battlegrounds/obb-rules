(ns figwheel.connect (:require [obb-demo.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "dev", :on-jsload (fn [& x] (if js/obb-demo.core.on-js-reload (apply js/obb-demo.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'obb-demo.core/on-js-reload' is missing"))), :websocket-url "ws://localhost:3449/figwheel-ws"})

