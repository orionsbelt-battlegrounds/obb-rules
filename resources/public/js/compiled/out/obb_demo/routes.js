// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__16141__auto___16307 = (function (params__16142__auto__){
if(cljs.core.map_QMARK_(params__16142__auto__)){
var map__16304 = params__16142__auto__;
var map__16304__$1 = ((((!((map__16304 == null)))?((((map__16304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16304):map__16304);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$index);
} else {
if(cljs.core.vector_QMARK_(params__16142__auto__)){
var vec__16306 = params__16142__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$index);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__16141__auto___16307);

var action__16141__auto___16311 = (function (params__16142__auto__){
if(cljs.core.map_QMARK_(params__16142__auto__)){
var map__16308 = params__16142__auto__;
var map__16308__$1 = ((((!((map__16308 == null)))?((((map__16308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16308):map__16308);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$player);
} else {
if(cljs.core.vector_QMARK_(params__16142__auto__)){
var vec__16310 = params__16142__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$player);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/play",action__16141__auto___16311);

var action__16141__auto___16315 = (function (params__16142__auto__){
if(cljs.core.map_QMARK_(params__16142__auto__)){
var map__16312 = params__16142__auto__;
var map__16312__$1 = ((((!((map__16312 == null)))?((((map__16312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16312):map__16312);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$many_DASH_games);
} else {
if(cljs.core.vector_QMARK_(params__16142__auto__)){
var vec__16314 = params__16142__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$many_DASH_games);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/many-games",action__16141__auto___16315);

var action__16141__auto___16319 = (function (params__16142__auto__){
if(cljs.core.map_QMARK_(params__16142__auto__)){
var map__16316 = params__16142__auto__;
var map__16316__$1 = ((((!((map__16316 == null)))?((((map__16316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16316):map__16316);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$units);
} else {
if(cljs.core.vector_QMARK_(params__16142__auto__)){
var vec__16318 = params__16142__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$units);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/units",action__16141__auto___16319);

