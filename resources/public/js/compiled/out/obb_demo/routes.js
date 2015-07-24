// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__13492__auto___13692 = (function (params__13493__auto__){
if(cljs.core.map_QMARK_(params__13493__auto__)){
var map__13690 = params__13493__auto__;
var map__13690__$1 = ((cljs.core.seq_QMARK_(map__13690))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13690):map__13690);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$index);
} else {
if(cljs.core.vector_QMARK_(params__13493__auto__)){
var vec__13691 = params__13493__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$index);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__13492__auto___13692);

var action__13492__auto___13695 = (function (params__13493__auto__){
if(cljs.core.map_QMARK_(params__13493__auto__)){
var map__13693 = params__13493__auto__;
var map__13693__$1 = ((cljs.core.seq_QMARK_(map__13693))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13693):map__13693);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$many_DASH_games);
} else {
if(cljs.core.vector_QMARK_(params__13493__auto__)){
var vec__13694 = params__13493__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$many_DASH_games);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/many-games",action__13492__auto___13695);

var action__13492__auto___13698 = (function (params__13493__auto__){
if(cljs.core.map_QMARK_(params__13493__auto__)){
var map__13696 = params__13493__auto__;
var map__13696__$1 = ((cljs.core.seq_QMARK_(map__13696))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13696):map__13696);
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$units);
} else {
if(cljs.core.vector_QMARK_(params__13493__auto__)){
var vec__13697 = params__13493__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.constant$keyword$units);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/units",action__13492__auto___13698);

