// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__10990__auto___11147 = (function (params__10991__auto__){
if(cljs.core.map_QMARK_(params__10991__auto__)){
var map__11144 = params__10991__auto__;
var map__11144__$1 = ((((!((map__11144 == null)))?((((map__11144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11144):map__11144);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$index);
} else {
if(cljs.core.vector_QMARK_(params__10991__auto__)){
var vec__11146 = params__10991__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$index);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__10990__auto___11147);

var action__10990__auto___11151 = (function (params__10991__auto__){
if(cljs.core.map_QMARK_(params__10991__auto__)){
var map__11148 = params__10991__auto__;
var map__11148__$1 = ((((!((map__11148 == null)))?((((map__11148.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11148.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11148):map__11148);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$player);
} else {
if(cljs.core.vector_QMARK_(params__10991__auto__)){
var vec__11150 = params__10991__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$player);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/play",action__10990__auto___11151);

var action__10990__auto___11155 = (function (params__10991__auto__){
if(cljs.core.map_QMARK_(params__10991__auto__)){
var map__11152 = params__10991__auto__;
var map__11152__$1 = ((((!((map__11152 == null)))?((((map__11152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11152):map__11152);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$many_DASH_games);
} else {
if(cljs.core.vector_QMARK_(params__10991__auto__)){
var vec__11154 = params__10991__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$many_DASH_games);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/many-games",action__10990__auto___11155);

var action__10990__auto___11159 = (function (params__10991__auto__){
if(cljs.core.map_QMARK_(params__10991__auto__)){
var map__11156 = params__10991__auto__;
var map__11156__$1 = ((((!((map__11156 == null)))?((((map__11156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11156):map__11156);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$units);
} else {
if(cljs.core.vector_QMARK_(params__10991__auto__)){
var vec__11158 = params__10991__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$units);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/units",action__10990__auto___11159);

