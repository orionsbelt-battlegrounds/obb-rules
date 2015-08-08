// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__11006__auto___11163 = (function (params__11007__auto__){
if(cljs.core.map_QMARK_(params__11007__auto__)){
var map__11160 = params__11007__auto__;
var map__11160__$1 = ((((!((map__11160 == null)))?((((map__11160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11160):map__11160);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$index);
} else {
if(cljs.core.vector_QMARK_(params__11007__auto__)){
var vec__11162 = params__11007__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$index);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__11006__auto___11163);

var action__11006__auto___11167 = (function (params__11007__auto__){
if(cljs.core.map_QMARK_(params__11007__auto__)){
var map__11164 = params__11007__auto__;
var map__11164__$1 = ((((!((map__11164 == null)))?((((map__11164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11164):map__11164);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$player);
} else {
if(cljs.core.vector_QMARK_(params__11007__auto__)){
var vec__11166 = params__11007__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$player);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/play",action__11006__auto___11167);

var action__11006__auto___11171 = (function (params__11007__auto__){
if(cljs.core.map_QMARK_(params__11007__auto__)){
var map__11168 = params__11007__auto__;
var map__11168__$1 = ((((!((map__11168 == null)))?((((map__11168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11168):map__11168);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$many_DASH_games);
} else {
if(cljs.core.vector_QMARK_(params__11007__auto__)){
var vec__11170 = params__11007__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$many_DASH_games);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/many-games",action__11006__auto___11171);

var action__11006__auto___11175 = (function (params__11007__auto__){
if(cljs.core.map_QMARK_(params__11007__auto__)){
var map__11172 = params__11007__auto__;
var map__11172__$1 = ((((!((map__11172 == null)))?((((map__11172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11172):map__11172);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$units);
} else {
if(cljs.core.vector_QMARK_(params__11007__auto__)){
var vec__11174 = params__11007__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$units);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/units",action__11006__auto___11175);

