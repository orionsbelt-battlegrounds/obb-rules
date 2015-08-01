// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.ai.alamo');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.math');
goog.require('obb_rules.element');
goog.require('obb_rules.result');
goog.require('obb_rules.ai.firingsquad');
goog.require('obb_rules.actions.move');
goog.require('obb_rules.game');
goog.require('obb_rules.ai.common');
goog.require('obb_rules.laws');
obb_rules.ai.alamo.element_depth = (5);
if(typeof obb_rules.ai.alamo.actions !== 'undefined'){
} else {
/**
 * Returns a list of actions to apply to the current game
 */
obb_rules.ai.alamo.actions = (function (){var method_table__8018__auto__ = (function (){var G__10560 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10560) : cljs.core.atom.call(null,G__10560));
})();
var prefer_table__8019__auto__ = (function (){var G__10561 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10561) : cljs.core.atom.call(null,G__10561));
})();
var method_cache__8020__auto__ = (function (){var G__10562 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10562) : cljs.core.atom.call(null,G__10562));
})();
var cached_hierarchy__8021__auto__ = (function (){var G__10563 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10563) : cljs.core.atom.call(null,G__10563));
})();
var hierarchy__8022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("obb-rules.ai.alamo","actions"),((function (method_table__8018__auto__,prefer_table__8019__auto__,method_cache__8020__auto__,cached_hierarchy__8021__auto__,hierarchy__8022__auto__){
return (function (game,player){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$deploy,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game)))){
return cljs.core.constant$keyword$deploy;
} else {
return cljs.core.constant$keyword$turn;
}
});})(method_table__8018__auto__,prefer_table__8019__auto__,method_cache__8020__auto__,cached_hierarchy__8021__auto__,hierarchy__8022__auto__))
,cljs.core.constant$keyword$default,hierarchy__8022__auto__,method_table__8018__auto__,prefer_table__8019__auto__,method_cache__8020__auto__,cached_hierarchy__8021__auto__));
})();
}
obb_rules.ai.alamo.actions.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$deploy,(function (game,player){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$auto_DASH_deploy,cljs.core.constant$keyword$firingsquad], null)], null);
}));
/**
 * Utility for debugging
 */
obb_rules.ai.alamo.logger = (function obb_rules$ai$alamo$logger(coll){
cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (option){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1(option),cljs.core.constant$keyword$old_DASH_value.cljs$core$IFn$_invoke$arity$1(option),cljs.core.constant$keyword$cost.cljs$core$IFn$_invoke$arity$1(option),cljs.core.constant$keyword$actions.cljs$core$IFn$_invoke$arity$1(option)], null)], 0));
}),coll);

return coll;
});
/**
 * Takes the best n options for a given element
 */
obb_rules.ai.alamo.take_best = (function obb_rules$ai$alamo$take_best(game,element,n){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(obb_rules.ai.common.option_value_cost_sorter,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,obb_rules.ai.common.attack_options(game,element)),obb_rules.ai.common.rotate_attack_options(game,element)),obb_rules.ai.common.move_attack_options(game,element)),obb_rules.ai.common.move_options(game,element))));
});
/**
 * Gets the other player to play on the given board
 */
obb_rules.ai.alamo.other_player = (function obb_rules$ai$alamo$other_player(board){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(board),cljs.core.constant$keyword$p1)){
return cljs.core.constant$keyword$p2;
} else {
return cljs.core.constant$keyword$p1;
}
});
/**
 * For each option given, will play a bot against it and recalculate
 * option value
 */
obb_rules.ai.alamo.consider_opponent_move = (function obb_rules$ai$alamo$consider_opponent_move(options){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (option){
if(cljs.core.truth_(option)){
var board = cljs.core.constant$keyword$board.cljs$core$IFn$_invoke$arity$1(option);
var player = obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(board);
var counter_player = obb_rules.ai.alamo.other_player(board);
var board__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(obb_rules.game.state.cljs$core$IFn$_invoke$arity$2(board,counter_player),cljs.core.constant$keyword$removed_DASH_elements),cljs.core.constant$keyword$action_DASH_results);
var counter_option = obb_rules.ai.firingsquad.turn_option(board__$1,counter_player);
var counter_board = cljs.core.constant$keyword$board.cljs$core$IFn$_invoke$arity$1(counter_option);
if(cljs.core.truth_(counter_option)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(option,cljs.core.constant$keyword$old_DASH_value,cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1(option)),cljs.core.constant$keyword$value,obb_rules.ai.common.eval_board(counter_board,player));
} else {
return option;
}
} else {
return null;
}
}),options);
});
/**
 * Gathers possible actions for the given element
 */
obb_rules.ai.alamo.gather_element_actions = (function obb_rules$ai$alamo$gather_element_actions(game,all,element){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(all,cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(obb_rules.ai.common.option_value_cost_sorter,obb_rules.ai.alamo.consider_opponent_move(obb_rules.ai.alamo.take_best(game,element,obb_rules.ai.alamo.element_depth))))));
});
/**
 * Given a collection of sorted options, tries to find a good one
 */
obb_rules.ai.alamo.find_one = (function obb_rules$ai$alamo$find_one(player,options){
var joiner = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_rules.ai.common.join_options,player);
var the_one = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(joiner,cljs.core.first(options),cljs.core.rest(options));
return the_one;
});
obb_rules.ai.alamo.actions.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$turn,(function (game,player){
var elements = obb_rules.board.board_elements(game,player);
var gatherer = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_rules.ai.alamo.gather_element_actions,game);
var option = obb_rules.ai.alamo.find_one(player,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(obb_rules.ai.common.option_value_sorter,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(gatherer,cljs.core.PersistentVector.EMPTY,elements)));
if(cljs.core.truth_(option)){
return (option.cljs$core$IFn$_invoke$arity$1 ? option.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$actions) : option.call(null,cljs.core.constant$keyword$actions));
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));
