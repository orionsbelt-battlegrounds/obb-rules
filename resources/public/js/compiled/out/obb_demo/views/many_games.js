// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.views.many_games');
goog.require('cljs.core');
goog.require('obb_demo.processor');
goog.require('obb_rules.math');
goog.require('obb_rules.evaluator');
goog.require('obb_demo.boardground');
goog.require('obb_rules.result');
goog.require('obb_rules.game');
goog.require('obb_rules.turn');
goog.require('obb_demo.state');
goog.require('obb_rules.stash');
goog.require('obb_demo.views.power_bar');
/**
 * Gets the current games or setups them
 */
obb_demo.views.many_games.get_games_data = (function obb_demo$views$many_games$get_games_data(state){
var temp__4423__auto__ = cljs.core.constant$keyword$many_DASH_games.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__4423__auto__)){
var datas = temp__4423__auto__;
return datas;
} else {
var games = cljs.core.take.cljs$core$IFn$_invoke$arity$2((6),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(obb_demo.processor.deployed_game));
var datas = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (games,temp__4423__auto__){
return (function (game){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$game,game], null);
});})(games,temp__4423__auto__))
,games);
obb_demo.state.set_page_data_BANG_(datas);

return datas;
}
});
/**
 * Generates and restarts a new game
 */
obb_demo.views.many_games.restart_game = (function obb_demo$views$many_games$restart_game(){
return obb_demo.state.set_page_data_BANG_(null);
});
obb_demo.views.many_games.render = (function obb_demo$views$many_games$render(state){
var datas = obb_demo.views.many_games.get_games_data(state);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_lg_DASH_12,(function (){var iter__7690__auto__ = ((function (datas){
return (function obb_demo$views$many_games$render_$_iter__13823(s__13824){
return (new cljs.core.LazySeq(null,((function (datas){
return (function (){
var s__13824__$1 = s__13824;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13824__$1);
if(temp__4425__auto__){
var s__13824__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13824__$2)){
var c__7688__auto__ = cljs.core.chunk_first(s__13824__$2);
var size__7689__auto__ = cljs.core.count(c__7688__auto__);
var b__13826 = cljs.core.chunk_buffer(size__7689__auto__);
if((function (){var i__13825 = (0);
while(true){
if((i__13825 < size__7689__auto__)){
var game_data = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7688__auto__,i__13825);
cljs.core.chunk_append(b__13826,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_lg_DASH_4,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$key,cljs.core.rand_int((10000))], null),obb_demo.views.power_bar.render(cljs.core.constant$keyword$game.cljs$core$IFn$_invoke$arity$1(game_data)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.render,cljs.core.PersistentArrayMap.EMPTY,game_data], null)], null));

var G__13829 = (i__13825 + (1));
i__13825 = G__13829;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13826),obb_demo$views$many_games$render_$_iter__13823(cljs.core.chunk_rest(s__13824__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13826),null);
}
} else {
var game_data = cljs.core.first(s__13824__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_lg_DASH_4,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$key,cljs.core.rand_int((10000))], null),obb_demo.views.power_bar.render(cljs.core.constant$keyword$game.cljs$core$IFn$_invoke$arity$1(game_data)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.render,cljs.core.PersistentArrayMap.EMPTY,game_data], null)], null),obb_demo$views$many_games$render_$_iter__13823(cljs.core.rest(s__13824__$2)));
}
} else {
return null;
}
break;
}
});})(datas))
,null,null));
});})(datas))
;
return iter__7690__auto__(datas);
})()], null)], null);
});
