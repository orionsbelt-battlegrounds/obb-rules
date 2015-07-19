// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__13487__auto___13687 = (function (params__13488__auto__){
if(cljs.core.map_QMARK_(params__13488__auto__)){
var map__13685 = params__13488__auto__;
var map__13685__$1 = ((cljs.core.seq_QMARK_(map__13685))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13685):map__13685);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$index);
} else {
if(cljs.core.vector_QMARK_(params__13488__auto__)){
var vec__13686 = params__13488__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$index);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__13487__auto___13687);

var action__13487__auto___13690 = (function (params__13488__auto__){
if(cljs.core.map_QMARK_(params__13488__auto__)){
var map__13688 = params__13488__auto__;
var map__13688__$1 = ((cljs.core.seq_QMARK_(map__13688))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13688):map__13688);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$many_DASH_games);
} else {
if(cljs.core.vector_QMARK_(params__13488__auto__)){
var vec__13689 = params__13488__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$many_DASH_games);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/many-games",action__13487__auto___13690);

var action__13487__auto___13693 = (function (params__13488__auto__){
if(cljs.core.map_QMARK_(params__13488__auto__)){
var map__13691 = params__13488__auto__;
var map__13691__$1 = ((cljs.core.seq_QMARK_(map__13691))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13691):map__13691);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$units);
} else {
if(cljs.core.vector_QMARK_(params__13488__auto__)){
var vec__13692 = params__13488__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$units);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/units",action__13487__auto___13693);

