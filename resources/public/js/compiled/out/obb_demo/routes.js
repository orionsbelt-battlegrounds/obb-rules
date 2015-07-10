// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__18375__auto___47929 = (function (params__18376__auto__){
if(cljs.core.map_QMARK_.call(null,params__18376__auto__)){
var map__47927 = params__18376__auto__;
var map__47927__$1 = ((cljs.core.seq_QMARK_.call(null,map__47927))?cljs.core.apply.call(null,cljs.core.hash_map,map__47927):map__47927);
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18376__auto__)){
var vec__47928 = params__18376__auto__;
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__18375__auto___47929);

var action__18375__auto___47932 = (function (params__18376__auto__){
if(cljs.core.map_QMARK_.call(null,params__18376__auto__)){
var map__47930 = params__18376__auto__;
var map__47930__$1 = ((cljs.core.seq_QMARK_.call(null,map__47930))?cljs.core.apply.call(null,cljs.core.hash_map,map__47930):map__47930);
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"units","units",-533089095));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18376__auto__)){
var vec__47931 = params__18376__auto__;
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"units","units",-533089095));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/units",action__18375__auto___47932);


//# sourceMappingURL=routes.js.map?rel=1436542485119