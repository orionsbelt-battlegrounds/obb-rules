// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__13487__auto___13685 = (function (params__13488__auto__){
if(cljs.core.map_QMARK_(params__13488__auto__)){
var map__13683 = params__13488__auto__;
var map__13683__$1 = ((cljs.core.seq_QMARK_(map__13683))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13683):map__13683);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$index);
} else {
if(cljs.core.vector_QMARK_(params__13488__auto__)){
var vec__13684 = params__13488__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$index);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__13487__auto___13685);

var action__13487__auto___13688 = (function (params__13488__auto__){
if(cljs.core.map_QMARK_(params__13488__auto__)){
var map__13686 = params__13488__auto__;
var map__13686__$1 = ((cljs.core.seq_QMARK_(map__13686))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13686):map__13686);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$many_DASH_games);
} else {
if(cljs.core.vector_QMARK_(params__13488__auto__)){
var vec__13687 = params__13488__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$many_DASH_games);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/many-games",action__13487__auto___13688);

var action__13487__auto___13691 = (function (params__13488__auto__){
if(cljs.core.map_QMARK_(params__13488__auto__)){
var map__13689 = params__13488__auto__;
var map__13689__$1 = ((cljs.core.seq_QMARK_(map__13689))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13689):map__13689);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$units);
} else {
if(cljs.core.vector_QMARK_(params__13488__auto__)){
var vec__13690 = params__13488__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$units);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/units",action__13487__auto___13691);

