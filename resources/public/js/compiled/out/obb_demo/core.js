// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_demo.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.game');
goog.require('obb_demo.routes');
goog.require('obb_demo.views.index');
cljs.core.enable_console_print_BANG_.call(null);
obb_demo.core.on_js_reload = (function obb_demo$core$on_js_reload(){
cljs.core.println.call(null,"Reloaded...");

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.index.render], null),document.getElementById("app"));
});
obb_demo.core.init = (function obb_demo$core$init(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

secretary.core.dispatch_BANG_.call(null,"/");

return obb_demo.core.on_js_reload.call(null);
});
if(typeof obb_demo.core.start !== 'undefined'){
} else {
obb_demo.core.start = obb_demo.core.init.call(null);
}

//# sourceMappingURL=core.js.map?rel=1436542485134