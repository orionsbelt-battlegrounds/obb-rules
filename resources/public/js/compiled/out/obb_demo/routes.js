// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__15994__auto___16160 = (function (params__15995__auto__){
if(cljs.core.map_QMARK_(params__15995__auto__)){
var map__16157 = params__15995__auto__;
var map__16157__$1 = ((((!((map__16157 == null)))?((((map__16157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16157):map__16157);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$index);
} else {
if(cljs.core.vector_QMARK_(params__15995__auto__)){
var vec__16159 = params__15995__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$index);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__15994__auto___16160);

var action__15994__auto___16164 = (function (params__15995__auto__){
if(cljs.core.map_QMARK_(params__15995__auto__)){
var map__16161 = params__15995__auto__;
var map__16161__$1 = ((((!((map__16161 == null)))?((((map__16161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16161):map__16161);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$player);
} else {
if(cljs.core.vector_QMARK_(params__15995__auto__)){
var vec__16163 = params__15995__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$player);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/play",action__15994__auto___16164);

var action__15994__auto___16168 = (function (params__15995__auto__){
if(cljs.core.map_QMARK_(params__15995__auto__)){
var map__16165 = params__15995__auto__;
var map__16165__$1 = ((((!((map__16165 == null)))?((((map__16165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16165):map__16165);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$many_DASH_games);
} else {
if(cljs.core.vector_QMARK_(params__15995__auto__)){
var vec__16167 = params__15995__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$many_DASH_games);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/many-games",action__15994__auto___16168);

var action__15994__auto___16172 = (function (params__15995__auto__){
if(cljs.core.map_QMARK_(params__15995__auto__)){
var map__16169 = params__15995__auto__;
var map__16169__$1 = ((((!((map__16169 == null)))?((((map__16169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16169):map__16169);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$units);
} else {
if(cljs.core.vector_QMARK_(params__15995__auto__)){
var vec__16171 = params__15995__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$units);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/units",action__15994__auto___16172);

