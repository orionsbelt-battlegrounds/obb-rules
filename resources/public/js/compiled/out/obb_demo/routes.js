// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__13529__auto___13706 = (function (params__13530__auto__){
if(cljs.core.map_QMARK_(params__13530__auto__)){
var map__13704 = params__13530__auto__;
var map__13704__$1 = ((cljs.core.seq_QMARK_(map__13704))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13704):map__13704);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$index);
} else {
if(cljs.core.vector_QMARK_(params__13530__auto__)){
var vec__13705 = params__13530__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$index);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__13529__auto___13706);

var action__13529__auto___13709 = (function (params__13530__auto__){
if(cljs.core.map_QMARK_(params__13530__auto__)){
var map__13707 = params__13530__auto__;
var map__13707__$1 = ((cljs.core.seq_QMARK_(map__13707))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13707):map__13707);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$player);
} else {
if(cljs.core.vector_QMARK_(params__13530__auto__)){
var vec__13708 = params__13530__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$player);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/play",action__13529__auto___13709);

var action__13529__auto___13712 = (function (params__13530__auto__){
if(cljs.core.map_QMARK_(params__13530__auto__)){
var map__13710 = params__13530__auto__;
var map__13710__$1 = ((cljs.core.seq_QMARK_(map__13710))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13710):map__13710);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$many_DASH_games);
} else {
if(cljs.core.vector_QMARK_(params__13530__auto__)){
var vec__13711 = params__13530__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$many_DASH_games);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/many-games",action__13529__auto___13712);

var action__13529__auto___13715 = (function (params__13530__auto__){
if(cljs.core.map_QMARK_(params__13530__auto__)){
var map__13713 = params__13530__auto__;
var map__13713__$1 = ((cljs.core.seq_QMARK_(map__13713))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13713):map__13713);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$units);
} else {
if(cljs.core.vector_QMARK_(params__13530__auto__)){
var vec__13714 = params__13530__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$units);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/units",action__13529__auto___13715);

