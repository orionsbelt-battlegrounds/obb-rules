// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__10910__auto___11067 = (function (params__10911__auto__){
if(cljs.core.map_QMARK_(params__10911__auto__)){
var map__11064 = params__10911__auto__;
var map__11064__$1 = ((((!((map__11064 == null)))?((((map__11064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11064):map__11064);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$index);
} else {
if(cljs.core.vector_QMARK_(params__10911__auto__)){
var vec__11066 = params__10911__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$index);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__10910__auto___11067);

var action__10910__auto___11071 = (function (params__10911__auto__){
if(cljs.core.map_QMARK_(params__10911__auto__)){
var map__11068 = params__10911__auto__;
var map__11068__$1 = ((((!((map__11068 == null)))?((((map__11068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11068):map__11068);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$player);
} else {
if(cljs.core.vector_QMARK_(params__10911__auto__)){
var vec__11070 = params__10911__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$player);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/play",action__10910__auto___11071);

var action__10910__auto___11075 = (function (params__10911__auto__){
if(cljs.core.map_QMARK_(params__10911__auto__)){
var map__11072 = params__10911__auto__;
var map__11072__$1 = ((((!((map__11072 == null)))?((((map__11072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11072):map__11072);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$many_DASH_games);
} else {
if(cljs.core.vector_QMARK_(params__10911__auto__)){
var vec__11074 = params__10911__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$many_DASH_games);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/many-games",action__10910__auto___11075);

var action__10910__auto___11079 = (function (params__10911__auto__){
if(cljs.core.map_QMARK_(params__10911__auto__)){
var map__11076 = params__10911__auto__;
var map__11076__$1 = ((((!((map__11076 == null)))?((((map__11076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11076):map__11076);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$units);
} else {
if(cljs.core.vector_QMARK_(params__10911__auto__)){
var vec__11078 = params__10911__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$units);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/units",action__10910__auto___11079);

