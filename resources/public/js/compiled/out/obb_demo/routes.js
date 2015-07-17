// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__18693__auto___30593 = (function (params__18694__auto__){
if(cljs.core.map_QMARK_.call(null,params__18694__auto__)){
var map__30591 = params__18694__auto__;
var map__30591__$1 = ((cljs.core.seq_QMARK_.call(null,map__30591))?cljs.core.apply.call(null,cljs.core.hash_map,map__30591):map__30591);
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18694__auto__)){
var vec__30592 = params__18694__auto__;
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__18693__auto___30593);

var action__18693__auto___30596 = (function (params__18694__auto__){
if(cljs.core.map_QMARK_.call(null,params__18694__auto__)){
var map__30594 = params__18694__auto__;
var map__30594__$1 = ((cljs.core.seq_QMARK_.call(null,map__30594))?cljs.core.apply.call(null,cljs.core.hash_map,map__30594):map__30594);
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"units","units",-533089095));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18694__auto__)){
var vec__30595 = params__18694__auto__;
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"units","units",-533089095));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/units",action__18693__auto___30596);


//# sourceMappingURL=routes.js.map?rel=1437143112798