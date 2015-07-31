// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__13663__auto___13840 = (function (params__13664__auto__){
if(cljs.core.map_QMARK_(params__13664__auto__)){
var map__13838 = params__13664__auto__;
var map__13838__$1 = ((cljs.core.seq_QMARK_(map__13838))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13838):map__13838);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$index);
} else {
if(cljs.core.vector_QMARK_(params__13664__auto__)){
var vec__13839 = params__13664__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$index);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__13663__auto___13840);

var action__13663__auto___13843 = (function (params__13664__auto__){
if(cljs.core.map_QMARK_(params__13664__auto__)){
var map__13841 = params__13664__auto__;
var map__13841__$1 = ((cljs.core.seq_QMARK_(map__13841))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13841):map__13841);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$player);
} else {
if(cljs.core.vector_QMARK_(params__13664__auto__)){
var vec__13842 = params__13664__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$player);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/play",action__13663__auto___13843);

var action__13663__auto___13846 = (function (params__13664__auto__){
if(cljs.core.map_QMARK_(params__13664__auto__)){
var map__13844 = params__13664__auto__;
var map__13844__$1 = ((cljs.core.seq_QMARK_(map__13844))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13844):map__13844);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$many_DASH_games);
} else {
if(cljs.core.vector_QMARK_(params__13664__auto__)){
var vec__13845 = params__13664__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$many_DASH_games);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/many-games",action__13663__auto___13846);

var action__13663__auto___13849 = (function (params__13664__auto__){
if(cljs.core.map_QMARK_(params__13664__auto__)){
var map__13847 = params__13664__auto__;
var map__13847__$1 = ((cljs.core.seq_QMARK_(map__13847))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13847):map__13847);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$units);
} else {
if(cljs.core.vector_QMARK_(params__13664__auto__)){
var vec__13848 = params__13664__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$units);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/units",action__13663__auto___13849);

