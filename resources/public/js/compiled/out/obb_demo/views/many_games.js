// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
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
var temp__4655__auto__ = cljs.core.cst$kw$many_DASH_games.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__4655__auto__)){
var datas = temp__4655__auto__;
return datas;
} else {
var games = cljs.core.take.cljs$core$IFn$_invoke$arity$2((6),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(obb_demo.processor.deployed_game));
var datas = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (games,temp__4655__auto__){
return (function (game){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$game,game], null);
});})(games,temp__4655__auto__))
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_12,(function (){var iter__6928__auto__ = ((function (datas){
return (function obb_demo$views$many_games$render_$_iter__16137(s__16138){
return (new cljs.core.LazySeq(null,((function (datas){
return (function (){
var s__16138__$1 = s__16138;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__16138__$1);
if(temp__4657__auto__){
var s__16138__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16138__$2)){
var c__6926__auto__ = cljs.core.chunk_first(s__16138__$2);
var size__6927__auto__ = cljs.core.count(c__6926__auto__);
var b__16140 = cljs.core.chunk_buffer(size__6927__auto__);
if((function (){var i__16139 = (0);
while(true){
if((i__16139 < size__6927__auto__)){
var game_data = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6926__auto__,i__16139);
cljs.core.chunk_append(b__16140,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_4,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.rand_int((10000))], null),obb_demo.views.power_bar.render(cljs.core.cst$kw$game.cljs$core$IFn$_invoke$arity$1(game_data)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.render,cljs.core.PersistentArrayMap.EMPTY,game_data], null)], null));

var G__16143 = (i__16139 + (1));
i__16139 = G__16143;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16140),obb_demo$views$many_games$render_$_iter__16137(cljs.core.chunk_rest(s__16138__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16140),null);
}
} else {
var game_data = cljs.core.first(s__16138__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_4,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.rand_int((10000))], null),obb_demo.views.power_bar.render(cljs.core.cst$kw$game.cljs$core$IFn$_invoke$arity$1(game_data)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.render,cljs.core.PersistentArrayMap.EMPTY,game_data], null)], null),obb_demo$views$many_games$render_$_iter__16137(cljs.core.rest(s__16138__$2)));
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
return iter__6928__auto__(datas);
})()], null)], null);
});
