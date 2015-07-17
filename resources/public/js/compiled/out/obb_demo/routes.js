// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__18691__auto___23812 = (function (params__18692__auto__){
if(cljs.core.map_QMARK_.call(null,params__18692__auto__)){
var map__23810 = params__18692__auto__;
var map__23810__$1 = ((cljs.core.seq_QMARK_.call(null,map__23810))?cljs.core.apply.call(null,cljs.core.hash_map,map__23810):map__23810);
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18692__auto__)){
var vec__23811 = params__18692__auto__;
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__18691__auto___23812);

var action__18691__auto___23815 = (function (params__18692__auto__){
if(cljs.core.map_QMARK_.call(null,params__18692__auto__)){
var map__23813 = params__18692__auto__;
var map__23813__$1 = ((cljs.core.seq_QMARK_.call(null,map__23813))?cljs.core.apply.call(null,cljs.core.hash_map,map__23813):map__23813);
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"units","units",-533089095));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18692__auto__)){
var vec__23814 = params__18692__auto__;
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"units","units",-533089095));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/units",action__18691__auto___23815);


//# sourceMappingURL=routes.js.map?rel=1437120999995