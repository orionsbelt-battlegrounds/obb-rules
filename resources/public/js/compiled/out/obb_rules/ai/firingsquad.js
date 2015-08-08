// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.ai.firingsquad');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.math');
goog.require('obb_rules.element');
goog.require('obb_rules.result');
goog.require('obb_rules.actions.move');
goog.require('obb_rules.game');
goog.require('obb_rules.ai.common');
goog.require('obb_rules.laws');
if(typeof obb_rules.ai.firingsquad.actions !== 'undefined'){
} else {
/**
 * Returns a list of actions to apply to the current game
 */
obb_rules.ai.firingsquad.actions = (function (){var method_table__8086__auto__ = (function (){var G__10634 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10634) : cljs.core.atom.call(null,G__10634));
})();
var prefer_table__8087__auto__ = (function (){var G__10635 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10635) : cljs.core.atom.call(null,G__10635));
})();
var method_cache__8088__auto__ = (function (){var G__10636 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10636) : cljs.core.atom.call(null,G__10636));
})();
var cached_hierarchy__8089__auto__ = (function (){var G__10637 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10637) : cljs.core.atom.call(null,G__10637));
})();
var hierarchy__8090__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("obb-rules.ai.firingsquad","actions"),((function (method_table__8086__auto__,prefer_table__8087__auto__,method_cache__8088__auto__,cached_hierarchy__8089__auto__,hierarchy__8090__auto__){
return (function (game,player){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$deploy,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game)))){
return cljs.core.constant$keyword$deploy;
} else {
return cljs.core.constant$keyword$turn;
}
});})(method_table__8086__auto__,prefer_table__8087__auto__,method_cache__8088__auto__,cached_hierarchy__8089__auto__,hierarchy__8090__auto__))
,cljs.core.constant$keyword$default,hierarchy__8090__auto__,method_table__8086__auto__,prefer_table__8087__auto__,method_cache__8088__auto__,cached_hierarchy__8089__auto__));
})();
}
obb_rules.ai.firingsquad.actions.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$deploy,(function (game,player){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$auto_DASH_deploy,cljs.core.constant$keyword$firingsquad], null)], null);
}));
/**
 * Utility for debugging
 */
obb_rules.ai.firingsquad.logger = (function obb_rules$ai$firingsquad$logger(coll){
cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (option){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["firingsquad",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1(option),cljs.core.constant$keyword$cost.cljs$core$IFn$_invoke$arity$1(option),cljs.core.constant$keyword$actions.cljs$core$IFn$_invoke$arity$1(option)], null)], 0));
}),coll);

return coll;
});
/**
 * Gathers possible actions for the given element
 */
obb_rules.ai.firingsquad.gather_element_actions = (function obb_rules$ai$firingsquad$gather_element_actions(game,all,element){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(all,cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(obb_rules.ai.common.option_value_cost_sorter,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,obb_rules.ai.common.attack_options(game,element)),obb_rules.ai.common.rotate_attack_options(game,element)),obb_rules.ai.common.move_attack_options(game,element)),obb_rules.ai.common.move_options(game,element))))));
});
/**
 * Given a collection of sorted options, tries to find a good one
 */
obb_rules.ai.firingsquad.find_one = (function obb_rules$ai$firingsquad$find_one(player,options){
var joiner = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_rules.ai.common.join_options,player);
var the_one = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(joiner,cljs.core.first(options),cljs.core.rest(options));
return the_one;
});
/**
 * Gets the complete option for playing on a specific game
 */
obb_rules.ai.firingsquad.turn_option = (function obb_rules$ai$firingsquad$turn_option(game,player){
var elements = obb_rules.board.board_elements(game,player);
var gatherer = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_rules.ai.firingsquad.gather_element_actions,game);
return obb_rules.ai.firingsquad.find_one(player,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(obb_rules.ai.common.option_value_sorter,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(gatherer,cljs.core.PersistentVector.EMPTY,elements)));
});
obb_rules.ai.firingsquad.actions.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$turn,(function (game,player){
var temp__4423__auto__ = obb_rules.ai.firingsquad.turn_option(game,player);
if(cljs.core.truth_(temp__4423__auto__)){
var option = temp__4423__auto__;
return (option.cljs$core$IFn$_invoke$arity$1 ? option.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$actions) : option.call(null,cljs.core.constant$keyword$actions));
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));
