// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__16156__auto___16322 = (function (params__16157__auto__){
if(cljs.core.map_QMARK_(params__16157__auto__)){
var map__16319 = params__16157__auto__;
var map__16319__$1 = ((((!((map__16319 == null)))?((((map__16319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16319):map__16319);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$index);
} else {
if(cljs.core.vector_QMARK_(params__16157__auto__)){
var vec__16321 = params__16157__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$index);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__16156__auto___16322);

var action__16156__auto___16326 = (function (params__16157__auto__){
if(cljs.core.map_QMARK_(params__16157__auto__)){
var map__16323 = params__16157__auto__;
var map__16323__$1 = ((((!((map__16323 == null)))?((((map__16323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16323):map__16323);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$player);
} else {
if(cljs.core.vector_QMARK_(params__16157__auto__)){
var vec__16325 = params__16157__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$player);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/play",action__16156__auto___16326);

var action__16156__auto___16330 = (function (params__16157__auto__){
if(cljs.core.map_QMARK_(params__16157__auto__)){
var map__16327 = params__16157__auto__;
var map__16327__$1 = ((((!((map__16327 == null)))?((((map__16327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16327):map__16327);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$many_DASH_games);
} else {
if(cljs.core.vector_QMARK_(params__16157__auto__)){
var vec__16329 = params__16157__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$many_DASH_games);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/many-games",action__16156__auto___16330);

var action__16156__auto___16334 = (function (params__16157__auto__){
if(cljs.core.map_QMARK_(params__16157__auto__)){
var map__16331 = params__16157__auto__;
var map__16331__$1 = ((((!((map__16331 == null)))?((((map__16331.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16331.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16331):map__16331);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$units);
} else {
if(cljs.core.vector_QMARK_(params__16157__auto__)){
var vec__16333 = params__16157__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$units);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/units",action__16156__auto___16334);

