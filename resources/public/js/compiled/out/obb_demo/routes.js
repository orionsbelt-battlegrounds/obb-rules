// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__12953__auto___13119 = (function (params__12954__auto__){
if(cljs.core.map_QMARK_(params__12954__auto__)){
var map__13116 = params__12954__auto__;
var map__13116__$1 = ((((!((map__13116 == null)))?((((map__13116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13116):map__13116);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$index);
} else {
if(cljs.core.vector_QMARK_(params__12954__auto__)){
var vec__13118 = params__12954__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$index);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__12953__auto___13119);

var action__12953__auto___13123 = (function (params__12954__auto__){
if(cljs.core.map_QMARK_(params__12954__auto__)){
var map__13120 = params__12954__auto__;
var map__13120__$1 = ((((!((map__13120 == null)))?((((map__13120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13120):map__13120);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$player);
} else {
if(cljs.core.vector_QMARK_(params__12954__auto__)){
var vec__13122 = params__12954__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$player);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/play",action__12953__auto___13123);

var action__12953__auto___13127 = (function (params__12954__auto__){
if(cljs.core.map_QMARK_(params__12954__auto__)){
var map__13124 = params__12954__auto__;
var map__13124__$1 = ((((!((map__13124 == null)))?((((map__13124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13124):map__13124);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$many_DASH_games);
} else {
if(cljs.core.vector_QMARK_(params__12954__auto__)){
var vec__13126 = params__12954__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$many_DASH_games);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/many-games",action__12953__auto___13127);

var action__12953__auto___13131 = (function (params__12954__auto__){
if(cljs.core.map_QMARK_(params__12954__auto__)){
var map__13128 = params__12954__auto__;
var map__13128__$1 = ((((!((map__13128 == null)))?((((map__13128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13128):map__13128);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$units);
} else {
if(cljs.core.vector_QMARK_(params__12954__auto__)){
var vec__13130 = params__12954__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$units);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/units",action__12953__auto___13131);

