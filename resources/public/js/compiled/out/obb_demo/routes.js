// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__16513__auto___16679 = (function (params__16514__auto__){
if(cljs.core.map_QMARK_(params__16514__auto__)){
var map__16676 = params__16514__auto__;
var map__16676__$1 = ((((!((map__16676 == null)))?((((map__16676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16676):map__16676);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$index);
} else {
if(cljs.core.vector_QMARK_(params__16514__auto__)){
var vec__16678 = params__16514__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$index);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__16513__auto___16679);

var action__16513__auto___16683 = (function (params__16514__auto__){
if(cljs.core.map_QMARK_(params__16514__auto__)){
var map__16680 = params__16514__auto__;
var map__16680__$1 = ((((!((map__16680 == null)))?((((map__16680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16680):map__16680);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$player);
} else {
if(cljs.core.vector_QMARK_(params__16514__auto__)){
var vec__16682 = params__16514__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$player);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/play",action__16513__auto___16683);

var action__16513__auto___16687 = (function (params__16514__auto__){
if(cljs.core.map_QMARK_(params__16514__auto__)){
var map__16684 = params__16514__auto__;
var map__16684__$1 = ((((!((map__16684 == null)))?((((map__16684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16684):map__16684);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$many_DASH_games);
} else {
if(cljs.core.vector_QMARK_(params__16514__auto__)){
var vec__16686 = params__16514__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$many_DASH_games);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/many-games",action__16513__auto___16687);

var action__16513__auto___16691 = (function (params__16514__auto__){
if(cljs.core.map_QMARK_(params__16514__auto__)){
var map__16688 = params__16514__auto__;
var map__16688__$1 = ((((!((map__16688 == null)))?((((map__16688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16688):map__16688);
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$units);
} else {
if(cljs.core.vector_QMARK_(params__16514__auto__)){
var vec__16690 = params__16514__auto__;
return obb_demo.state.set_page_BANG_(cljs.core.cst$kw$units);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/units",action__16513__auto___16691);

