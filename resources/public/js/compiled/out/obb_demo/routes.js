// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__18694__auto___31054 = (function (params__18695__auto__){
if(cljs.core.map_QMARK_.call(null,params__18695__auto__)){
var map__31052 = params__18695__auto__;
var map__31052__$1 = ((cljs.core.seq_QMARK_.call(null,map__31052))?cljs.core.apply.call(null,cljs.core.hash_map,map__31052):map__31052);
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18695__auto__)){
var vec__31053 = params__18695__auto__;
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__18694__auto___31054);

var action__18694__auto___31057 = (function (params__18695__auto__){
if(cljs.core.map_QMARK_.call(null,params__18695__auto__)){
var map__31055 = params__18695__auto__;
var map__31055__$1 = ((cljs.core.seq_QMARK_.call(null,map__31055))?cljs.core.apply.call(null,cljs.core.hash_map,map__31055):map__31055);
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"units","units",-533089095));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18695__auto__)){
var vec__31056 = params__18695__auto__;
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"units","units",-533089095));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/units",action__18694__auto___31057);


//# sourceMappingURL=routes.js.map?rel=1437139796829