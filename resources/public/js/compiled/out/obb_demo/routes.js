// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__18691__auto___36532 = (function (params__18692__auto__){
if(cljs.core.map_QMARK_.call(null,params__18692__auto__)){
var map__36530 = params__18692__auto__;
var map__36530__$1 = ((cljs.core.seq_QMARK_.call(null,map__36530))?cljs.core.apply.call(null,cljs.core.hash_map,map__36530):map__36530);
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18692__auto__)){
var vec__36531 = params__18692__auto__;
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__18691__auto___36532);

var action__18691__auto___36535 = (function (params__18692__auto__){
if(cljs.core.map_QMARK_.call(null,params__18692__auto__)){
var map__36533 = params__18692__auto__;
var map__36533__$1 = ((cljs.core.seq_QMARK_.call(null,map__36533))?cljs.core.apply.call(null,cljs.core.hash_map,map__36533):map__36533);
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"units","units",-533089095));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18692__auto__)){
var vec__36534 = params__18692__auto__;
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"units","units",-533089095));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/units",action__18691__auto___36535);


//# sourceMappingURL=routes.js.map?rel=1437132464636