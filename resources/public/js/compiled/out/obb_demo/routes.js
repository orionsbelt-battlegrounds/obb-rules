// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__18375__auto___35263 = (function (params__18376__auto__){
if(cljs.core.map_QMARK_.call(null,params__18376__auto__)){
var map__35261 = params__18376__auto__;
var map__35261__$1 = ((cljs.core.seq_QMARK_.call(null,map__35261))?cljs.core.apply.call(null,cljs.core.hash_map,map__35261):map__35261);
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18376__auto__)){
var vec__35262 = params__18376__auto__;
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__18375__auto___35263);

var action__18375__auto___35266 = (function (params__18376__auto__){
if(cljs.core.map_QMARK_.call(null,params__18376__auto__)){
var map__35264 = params__18376__auto__;
var map__35264__$1 = ((cljs.core.seq_QMARK_.call(null,map__35264))?cljs.core.apply.call(null,cljs.core.hash_map,map__35264):map__35264);
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"units","units",-533089095));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18376__auto__)){
var vec__35265 = params__18376__auto__;
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"units","units",-533089095));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/units",action__18375__auto___35266);


//# sourceMappingURL=routes.js.map?rel=1436517561549