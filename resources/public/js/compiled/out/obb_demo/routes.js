// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__15745__auto___15911 = (function (params__15746__auto__){
if(cljs.core.map_QMARK_(params__15746__auto__)){
var map__15908 = params__15746__auto__;
var map__15908__$1 = ((((!((map__15908 == null)))?((((map__15908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15908):map__15908);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$index);
} else {
if(cljs.core.vector_QMARK_(params__15746__auto__)){
var vec__15910 = params__15746__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$index);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__15745__auto___15911);

var action__15745__auto___15915 = (function (params__15746__auto__){
if(cljs.core.map_QMARK_(params__15746__auto__)){
var map__15912 = params__15746__auto__;
var map__15912__$1 = ((((!((map__15912 == null)))?((((map__15912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15912):map__15912);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$player);
} else {
if(cljs.core.vector_QMARK_(params__15746__auto__)){
var vec__15914 = params__15746__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$player);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/play",action__15745__auto___15915);

var action__15745__auto___15919 = (function (params__15746__auto__){
if(cljs.core.map_QMARK_(params__15746__auto__)){
var map__15916 = params__15746__auto__;
var map__15916__$1 = ((((!((map__15916 == null)))?((((map__15916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15916):map__15916);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$many_DASH_games);
} else {
if(cljs.core.vector_QMARK_(params__15746__auto__)){
var vec__15918 = params__15746__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$many_DASH_games);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/many-games",action__15745__auto___15919);

var action__15745__auto___15923 = (function (params__15746__auto__){
if(cljs.core.map_QMARK_(params__15746__auto__)){
var map__15920 = params__15746__auto__;
var map__15920__$1 = ((((!((map__15920 == null)))?((((map__15920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15920):map__15920);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$units);
} else {
if(cljs.core.vector_QMARK_(params__15746__auto__)){
var vec__15922 = params__15746__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$units);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/units",action__15745__auto___15923);

