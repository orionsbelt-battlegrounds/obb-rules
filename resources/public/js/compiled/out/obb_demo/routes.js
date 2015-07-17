// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__13487__auto___13664 = (function (params__13488__auto__){
if(cljs.core.map_QMARK_(params__13488__auto__)){
var map__13662 = params__13488__auto__;
var map__13662__$1 = ((cljs.core.seq_QMARK_(map__13662))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13662):map__13662);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$index);
} else {
if(cljs.core.vector_QMARK_(params__13488__auto__)){
var vec__13663 = params__13488__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$index);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__13487__auto___13664);

var action__13487__auto___13667 = (function (params__13488__auto__){
if(cljs.core.map_QMARK_(params__13488__auto__)){
var map__13665 = params__13488__auto__;
var map__13665__$1 = ((cljs.core.seq_QMARK_(map__13665))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13665):map__13665);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$units);
} else {
if(cljs.core.vector_QMARK_(params__13488__auto__)){
var vec__13666 = params__13488__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$units);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/units",action__13487__auto___13667);

