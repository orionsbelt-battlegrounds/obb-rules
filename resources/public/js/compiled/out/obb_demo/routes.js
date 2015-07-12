// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__18376__auto___35549 = (function (params__18377__auto__){
if(cljs.core.map_QMARK_.call(null,params__18377__auto__)){
var map__35547 = params__18377__auto__;
var map__35547__$1 = ((cljs.core.seq_QMARK_.call(null,map__35547))?cljs.core.apply.call(null,cljs.core.hash_map,map__35547):map__35547);
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18377__auto__)){
var vec__35548 = params__18377__auto__;
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__18376__auto___35549);

var action__18376__auto___35552 = (function (params__18377__auto__){
if(cljs.core.map_QMARK_.call(null,params__18377__auto__)){
var map__35550 = params__18377__auto__;
var map__35550__$1 = ((cljs.core.seq_QMARK_.call(null,map__35550))?cljs.core.apply.call(null,cljs.core.hash_map,map__35550):map__35550);
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"units","units",-533089095));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18377__auto__)){
var vec__35551 = params__18377__auto__;
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"units","units",-533089095));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/units",action__18376__auto___35552);


//# sourceMappingURL=routes.js.map?rel=1436720935070