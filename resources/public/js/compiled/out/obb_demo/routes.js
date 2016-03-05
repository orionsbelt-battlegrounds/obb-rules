// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__15992__auto___16158 = (function (params__15993__auto__){
if(cljs.core.map_QMARK_(params__15993__auto__)){
var map__16155 = params__15993__auto__;
var map__16155__$1 = ((((!((map__16155 == null)))?((((map__16155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16155):map__16155);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$index);
} else {
if(cljs.core.vector_QMARK_(params__15993__auto__)){
var vec__16157 = params__15993__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$index);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__15992__auto___16158);

var action__15992__auto___16162 = (function (params__15993__auto__){
if(cljs.core.map_QMARK_(params__15993__auto__)){
var map__16159 = params__15993__auto__;
var map__16159__$1 = ((((!((map__16159 == null)))?((((map__16159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16159):map__16159);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$player);
} else {
if(cljs.core.vector_QMARK_(params__15993__auto__)){
var vec__16161 = params__15993__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$player);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/play",action__15992__auto___16162);

var action__15992__auto___16166 = (function (params__15993__auto__){
if(cljs.core.map_QMARK_(params__15993__auto__)){
var map__16163 = params__15993__auto__;
var map__16163__$1 = ((((!((map__16163 == null)))?((((map__16163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16163):map__16163);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$many_DASH_games);
} else {
if(cljs.core.vector_QMARK_(params__15993__auto__)){
var vec__16165 = params__15993__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$many_DASH_games);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/many-games",action__15992__auto___16166);

var action__15992__auto___16170 = (function (params__15993__auto__){
if(cljs.core.map_QMARK_(params__15993__auto__)){
var map__16167 = params__15993__auto__;
var map__16167__$1 = ((((!((map__16167 == null)))?((((map__16167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16167):map__16167);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$units);
} else {
if(cljs.core.vector_QMARK_(params__15993__auto__)){
var vec__16169 = params__15993__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$units);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/units",action__15992__auto___16170);

