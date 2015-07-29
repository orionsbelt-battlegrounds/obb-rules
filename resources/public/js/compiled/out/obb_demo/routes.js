// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__13537__auto___13714 = (function (params__13538__auto__){
if(cljs.core.map_QMARK_(params__13538__auto__)){
var map__13712 = params__13538__auto__;
var map__13712__$1 = ((cljs.core.seq_QMARK_(map__13712))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13712):map__13712);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$index);
} else {
if(cljs.core.vector_QMARK_(params__13538__auto__)){
var vec__13713 = params__13538__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$index);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__13537__auto___13714);

var action__13537__auto___13717 = (function (params__13538__auto__){
if(cljs.core.map_QMARK_(params__13538__auto__)){
var map__13715 = params__13538__auto__;
var map__13715__$1 = ((cljs.core.seq_QMARK_(map__13715))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13715):map__13715);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$player);
} else {
if(cljs.core.vector_QMARK_(params__13538__auto__)){
var vec__13716 = params__13538__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$player);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/play",action__13537__auto___13717);

var action__13537__auto___13720 = (function (params__13538__auto__){
if(cljs.core.map_QMARK_(params__13538__auto__)){
var map__13718 = params__13538__auto__;
var map__13718__$1 = ((cljs.core.seq_QMARK_(map__13718))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13718):map__13718);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$many_DASH_games);
} else {
if(cljs.core.vector_QMARK_(params__13538__auto__)){
var vec__13719 = params__13538__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$many_DASH_games);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/many-games",action__13537__auto___13720);

var action__13537__auto___13723 = (function (params__13538__auto__){
if(cljs.core.map_QMARK_(params__13538__auto__)){
var map__13721 = params__13538__auto__;
var map__13721__$1 = ((cljs.core.seq_QMARK_(map__13721))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13721):map__13721);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$units);
} else {
if(cljs.core.vector_QMARK_(params__13538__auto__)){
var vec__13722 = params__13538__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$units);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/units",action__13537__auto___13723);

