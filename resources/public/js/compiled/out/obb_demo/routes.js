// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__11035__auto___11192 = (function (params__11036__auto__){
if(cljs.core.map_QMARK_(params__11036__auto__)){
var map__11189 = params__11036__auto__;
var map__11189__$1 = ((((!((map__11189 == null)))?((((map__11189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11189):map__11189);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$index);
} else {
if(cljs.core.vector_QMARK_(params__11036__auto__)){
var vec__11191 = params__11036__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$index);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__11035__auto___11192);

var action__11035__auto___11196 = (function (params__11036__auto__){
if(cljs.core.map_QMARK_(params__11036__auto__)){
var map__11193 = params__11036__auto__;
var map__11193__$1 = ((((!((map__11193 == null)))?((((map__11193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11193):map__11193);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$player);
} else {
if(cljs.core.vector_QMARK_(params__11036__auto__)){
var vec__11195 = params__11036__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$player);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/play",action__11035__auto___11196);

var action__11035__auto___11200 = (function (params__11036__auto__){
if(cljs.core.map_QMARK_(params__11036__auto__)){
var map__11197 = params__11036__auto__;
var map__11197__$1 = ((((!((map__11197 == null)))?((((map__11197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11197):map__11197);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$many_DASH_games);
} else {
if(cljs.core.vector_QMARK_(params__11036__auto__)){
var vec__11199 = params__11036__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$many_DASH_games);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/many-games",action__11035__auto___11200);

var action__11035__auto___11204 = (function (params__11036__auto__){
if(cljs.core.map_QMARK_(params__11036__auto__)){
var map__11201 = params__11036__auto__;
var map__11201__$1 = ((((!((map__11201 == null)))?((((map__11201.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11201.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11201):map__11201);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$units);
} else {
if(cljs.core.vector_QMARK_(params__11036__auto__)){
var vec__11203 = params__11036__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$units);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/units",action__11035__auto___11204);

