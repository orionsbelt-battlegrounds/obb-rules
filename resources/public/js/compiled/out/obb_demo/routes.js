// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__18694__auto___30526 = (function (params__18695__auto__){
if(cljs.core.map_QMARK_.call(null,params__18695__auto__)){
var map__30524 = params__18695__auto__;
var map__30524__$1 = ((cljs.core.seq_QMARK_.call(null,map__30524))?cljs.core.apply.call(null,cljs.core.hash_map,map__30524):map__30524);
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18695__auto__)){
var vec__30525 = params__18695__auto__;
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__18694__auto___30526);

var action__18694__auto___30529 = (function (params__18695__auto__){
if(cljs.core.map_QMARK_.call(null,params__18695__auto__)){
var map__30527 = params__18695__auto__;
var map__30527__$1 = ((cljs.core.seq_QMARK_.call(null,map__30527))?cljs.core.apply.call(null,cljs.core.hash_map,map__30527):map__30527);
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"units","units",-533089095));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18695__auto__)){
var vec__30528 = params__18695__auto__;
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"units","units",-533089095));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/units",action__18694__auto___30529);


//# sourceMappingURL=routes.js.map?rel=1437140578692