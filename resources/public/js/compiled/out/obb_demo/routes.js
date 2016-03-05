// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__15863__auto___16029 = (function (params__15864__auto__){
if(cljs.core.map_QMARK_(params__15864__auto__)){
var map__16026 = params__15864__auto__;
var map__16026__$1 = ((((!((map__16026 == null)))?((((map__16026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16026):map__16026);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$index);
} else {
if(cljs.core.vector_QMARK_(params__15864__auto__)){
var vec__16028 = params__15864__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$index);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__15863__auto___16029);

var action__15863__auto___16033 = (function (params__15864__auto__){
if(cljs.core.map_QMARK_(params__15864__auto__)){
var map__16030 = params__15864__auto__;
var map__16030__$1 = ((((!((map__16030 == null)))?((((map__16030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16030):map__16030);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$player);
} else {
if(cljs.core.vector_QMARK_(params__15864__auto__)){
var vec__16032 = params__15864__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$player);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/play",action__15863__auto___16033);

var action__15863__auto___16037 = (function (params__15864__auto__){
if(cljs.core.map_QMARK_(params__15864__auto__)){
var map__16034 = params__15864__auto__;
var map__16034__$1 = ((((!((map__16034 == null)))?((((map__16034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16034):map__16034);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$many_DASH_games);
} else {
if(cljs.core.vector_QMARK_(params__15864__auto__)){
var vec__16036 = params__15864__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$many_DASH_games);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/many-games",action__15863__auto___16037);

var action__15863__auto___16041 = (function (params__15864__auto__){
if(cljs.core.map_QMARK_(params__15864__auto__)){
var map__16038 = params__15864__auto__;
var map__16038__$1 = ((((!((map__16038 == null)))?((((map__16038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16038):map__16038);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$units);
} else {
if(cljs.core.vector_QMARK_(params__15864__auto__)){
var vec__16040 = params__15864__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$units);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/units",action__15863__auto___16041);

