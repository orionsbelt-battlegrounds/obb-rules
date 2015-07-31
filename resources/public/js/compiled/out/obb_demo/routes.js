// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__13665__auto___13842 = (function (params__13666__auto__){
if(cljs.core.map_QMARK_(params__13666__auto__)){
var map__13840 = params__13666__auto__;
var map__13840__$1 = ((cljs.core.seq_QMARK_(map__13840))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13840):map__13840);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$index);
} else {
if(cljs.core.vector_QMARK_(params__13666__auto__)){
var vec__13841 = params__13666__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$index);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__13665__auto___13842);

var action__13665__auto___13845 = (function (params__13666__auto__){
if(cljs.core.map_QMARK_(params__13666__auto__)){
var map__13843 = params__13666__auto__;
var map__13843__$1 = ((cljs.core.seq_QMARK_(map__13843))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13843):map__13843);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$player);
} else {
if(cljs.core.vector_QMARK_(params__13666__auto__)){
var vec__13844 = params__13666__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$player);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/play",action__13665__auto___13845);

var action__13665__auto___13848 = (function (params__13666__auto__){
if(cljs.core.map_QMARK_(params__13666__auto__)){
var map__13846 = params__13666__auto__;
var map__13846__$1 = ((cljs.core.seq_QMARK_(map__13846))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13846):map__13846);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$many_DASH_games);
} else {
if(cljs.core.vector_QMARK_(params__13666__auto__)){
var vec__13847 = params__13666__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$many_DASH_games);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/many-games",action__13665__auto___13848);

var action__13665__auto___13851 = (function (params__13666__auto__){
if(cljs.core.map_QMARK_(params__13666__auto__)){
var map__13849 = params__13666__auto__;
var map__13849__$1 = ((cljs.core.seq_QMARK_(map__13849))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13849):map__13849);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$units);
} else {
if(cljs.core.vector_QMARK_(params__13666__auto__)){
var vec__13850 = params__13666__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$units);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/units",action__13665__auto___13851);

