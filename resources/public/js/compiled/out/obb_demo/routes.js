// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__18678__auto___32780 = (function (params__18679__auto__){
if(cljs.core.map_QMARK_.call(null,params__18679__auto__)){
var map__32778 = params__18679__auto__;
var map__32778__$1 = ((cljs.core.seq_QMARK_.call(null,map__32778))?cljs.core.apply.call(null,cljs.core.hash_map,map__32778):map__32778);
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18679__auto__)){
var vec__32779 = params__18679__auto__;
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__18678__auto___32780);

var action__18678__auto___32783 = (function (params__18679__auto__){
if(cljs.core.map_QMARK_.call(null,params__18679__auto__)){
var map__32781 = params__18679__auto__;
var map__32781__$1 = ((cljs.core.seq_QMARK_.call(null,map__32781))?cljs.core.apply.call(null,cljs.core.hash_map,map__32781):map__32781);
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"units","units",-533089095));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18679__auto__)){
var vec__32782 = params__18679__auto__;
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"units","units",-533089095));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/units",action__18678__auto___32783);


//# sourceMappingURL=routes.js.map?rel=1436994409084