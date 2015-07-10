// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__18375__auto___42432 = (function (params__18376__auto__){
if(cljs.core.map_QMARK_.call(null,params__18376__auto__)){
var map__42430 = params__18376__auto__;
var map__42430__$1 = ((cljs.core.seq_QMARK_.call(null,map__42430))?cljs.core.apply.call(null,cljs.core.hash_map,map__42430):map__42430);
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18376__auto__)){
var vec__42431 = params__18376__auto__;
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__18375__auto___42432);

var action__18375__auto___42435 = (function (params__18376__auto__){
if(cljs.core.map_QMARK_.call(null,params__18376__auto__)){
var map__42433 = params__18376__auto__;
var map__42433__$1 = ((cljs.core.seq_QMARK_.call(null,map__42433))?cljs.core.apply.call(null,cljs.core.hash_map,map__42433):map__42433);
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"units","units",-533089095));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18376__auto__)){
var vec__42434 = params__18376__auto__;
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"units","units",-533089095));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/units",action__18375__auto___42435);


//# sourceMappingURL=routes.js.map?rel=1436536084129