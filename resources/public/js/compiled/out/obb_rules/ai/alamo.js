// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.ai.alamo');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.math');
goog.require('obb_rules.logger');
goog.require('obb_rules.evaluator');
goog.require('obb_rules.simplifier');
goog.require('obb_rules.element');
goog.require('obb_rules.result');
goog.require('obb_rules.ai.firingsquad');
goog.require('obb_rules.unit');
goog.require('obb_rules.actions.move');
goog.require('obb_rules.game');
goog.require('obb_rules.ai.common');
goog.require('obb_rules.laws');
obb_rules.ai.alamo.element_depth = (10);
if(typeof obb_rules.ai.alamo.actions !== 'undefined'){
} else {
/**
 * Returns a list of actions to apply to the current game
 */
obb_rules.ai.alamo.actions = (function (){var method_table__7055__auto__ = (function (){var G__15154 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15154) : cljs.core.atom.call(null,G__15154));
})();
var prefer_table__7056__auto__ = (function (){var G__15155 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15155) : cljs.core.atom.call(null,G__15155));
})();
var method_cache__7057__auto__ = (function (){var G__15156 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15156) : cljs.core.atom.call(null,G__15156));
})();
var cached_hierarchy__7058__auto__ = (function (){var G__15157 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15157) : cljs.core.atom.call(null,G__15157));
})();
var hierarchy__7059__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("obb-rules.ai.alamo","actions"),((function (method_table__7055__auto__,prefer_table__7056__auto__,method_cache__7057__auto__,cached_hierarchy__7058__auto__,hierarchy__7059__auto__){
return (function (game,player){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$deploy,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game)))){
return cljs.core.cst$kw$deploy;
} else {
return cljs.core.cst$kw$turn;
}
});})(method_table__7055__auto__,prefer_table__7056__auto__,method_cache__7057__auto__,cached_hierarchy__7058__auto__,hierarchy__7059__auto__))
,cljs.core.cst$kw$default,hierarchy__7059__auto__,method_table__7055__auto__,prefer_table__7056__auto__,method_cache__7057__auto__,cached_hierarchy__7058__auto__));
})();
}
obb_rules.ai.alamo.actions.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$deploy,(function (game,player){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$auto_DASH_deploy,cljs.core.cst$kw$firingsquad], null)], null);
}));
/**
 * Utility for debugging
 */
obb_rules.ai.alamo.final_actions_logger = (function obb_rules$ai$alamo$final_actions_logger(coll){
obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["## Final actions ~~~~~~~~~"], 0));

if(cljs.core.truth_(obb_rules.logger._STAR_verbose_STAR_)){
cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (option){
return obb_rules.logger.ai_option(option);
}),coll);
} else {
}

return coll;
});
/**
 * Utility for debugging
 */
obb_rules.ai.alamo.element_options_logger = (function obb_rules$ai$alamo$element_options_logger(coll,element){
if(cljs.core.truth_(obb_rules.logger._STAR_verbose_STAR_)){
obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["## Element",obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(element),"options ~~~~~~~~~"], 0));

if(cljs.core.truth_(obb_rules.logger._STAR_verbose_STAR_)){
cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (option){
return obb_rules.logger.ai_option(option);
}),coll);
} else {
}
} else {
}

return coll;
});
/**
 * Takes the best n options for a given element
 */
obb_rules.ai.alamo.take_best = (function obb_rules$ai$alamo$take_best(game,element,n){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(obb_rules.ai.common.option_value_sorter,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,obb_rules.ai.common.attack_options(game,element)),obb_rules.ai.common.rotate_attack_options(game,element)),obb_rules.ai.common.move_attack_options(game,element)),obb_rules.ai.common.move_options.cljs$core$IFn$_invoke$arity$4(game,element,obb_rules.ai.common.eval_board(game,obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(element)),(6)))));
});
/**
 * Gets the other player to play on the given board
 */
obb_rules.ai.alamo.other_player = (function obb_rules$ai$alamo$other_player(board){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(board),cljs.core.cst$kw$p1)){
return cljs.core.cst$kw$p2;
} else {
return cljs.core.cst$kw$p1;
}
});
/**
 * Tries to find the element on the new board
 */
obb_rules.ai.alamo.get_element_on_new_board = (function obb_rules$ai$alamo$get_element_on_new_board(element,option,counter_option){
var element_player = obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(element);
var counter_board = cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(counter_option);
var element_coord = (function (){var or__6142__auto__ = cljs.core.cst$kw$element_DASH_coord.cljs$core$IFn$_invoke$arity$1(option);
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(element);
}
})();
var counter_element = (function (){var and__6130__auto__ = counter_board;
if(cljs.core.truth_(and__6130__auto__)){
return obb_rules.board.get_element(counter_board,element_coord);
} else {
return and__6130__auto__;
}
})();
if(cljs.core.truth_((function (){var and__6130__auto__ = counter_element;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element_player,obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(counter_element));
} else {
return and__6130__auto__;
}
})())){
return counter_element;
} else {
return null;
}
});
/**
 * Given a pair of scores, removes the value given from the correct player
 */
obb_rules.ai.alamo.remove_value = (function obb_rules$ai$alamo$remove_value(p__15158,player,value){
var vec__15160 = p__15158;
var s1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15160,(0),null);
var s2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15160,(1),null);
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(player,cljs.core.cst$kw$p1))){
return obb_rules.ai.common.eval_scores(player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(s1 + value),s2], null));
} else {
return obb_rules.ai.common.eval_scores(player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s1,(s2 + value)], null));
}
});
/**
 * Given an option and a counter option will return a new option that is
 *   a merged one
 */
obb_rules.ai.alamo.merge_counter_option = (function obb_rules$ai$alamo$merge_counter_option(element,option,counter_option,element_board,scores,player){
if(cljs.core.truth_((function (){var and__6130__auto__ = option;
if(cljs.core.truth_(and__6130__auto__)){
return counter_option;
} else {
return and__6130__auto__;
}
})())){
var original_value = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(option);
var original_quantity = obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1(element);
var counter_element = obb_rules.ai.alamo.get_element_on_new_board(element,option,counter_option);
var counter_quantity = (cljs.core.truth_(counter_element)?obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1(counter_element):(0));
var remaining_quantity = (counter_quantity - original_quantity);
var unit_value = obb_rules.unit.unit_value(obb_rules.element.element_unit(element));
var total_element_value = (remaining_quantity * unit_value);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(option,cljs.core.cst$kw$old_DASH_value,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(option)),cljs.core.cst$kw$value,obb_rules.ai.alamo.remove_value(scores,player,total_element_value));
} else {
return option;
}
});
/**
 * For each option given, will play a bot against it and recalculate
 *   option value
 */
obb_rules.ai.alamo.consider_opponent_move = (function obb_rules$ai$alamo$consider_opponent_move(options,element){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (option){
if(cljs.core.truth_(option)){
var board = cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(option);
var player = obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(board);
var scores = obb_rules.evaluator.eval_game.cljs$core$IFn$_invoke$arity$1(board);
var counter_player = obb_rules.ai.alamo.other_player(board);
var moved_element = obb_rules.board.get_element(board,(function (){var or__6142__auto__ = cljs.core.cst$kw$element_DASH_coord.cljs$core$IFn$_invoke$arity$1(option);
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(element);
}
})());
var board__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(obb_rules.board.element_focus(obb_rules.game.state.cljs$core$IFn$_invoke$arity$2(board,counter_player),moved_element),cljs.core.cst$kw$removed_DASH_elements),cljs.core.cst$kw$action_DASH_results);
var counter_option = obb_rules.ai.firingsquad.turn_option(board__$1,counter_player);
return obb_rules.ai.alamo.merge_counter_option(element,option,counter_option,board__$1,scores,player);
} else {
return null;
}
}),options);
});
/**
 * Gathers possible actions for the given element
 */
obb_rules.ai.alamo.gather_element_actions = (function obb_rules$ai$alamo$gather_element_actions(game,all,element){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(all,cljs.core.first(obb_rules.ai.alamo.element_options_logger(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(obb_rules.ai.common.option_value_sorter,obb_rules.ai.alamo.consider_opponent_move(obb_rules.ai.alamo.take_best(game,element,obb_rules.ai.alamo.element_depth),element)),element))));
});
/**
 * Given a collection of sorted options, tries to find a good one
 */
obb_rules.ai.alamo.find_one = (function obb_rules$ai$alamo$find_one(player,options){
var joiner = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_rules.ai.common.join_options,player);
var the_one = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(joiner,cljs.core.first(options),cljs.core.rest(options));
obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["## Final ~~~~~~~~~~"], 0));

obb_rules.logger.ai_option(the_one);

return the_one;
});
obb_rules.ai.alamo.actions.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$turn,(function (game,player){
obb_rules.logger.ai_turn("alamo",game);

var elements = obb_rules.board.board_elements(game,player);
var gatherer = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_rules.ai.alamo.gather_element_actions,game);
var option = obb_rules.ai.alamo.find_one(player,obb_rules.ai.alamo.final_actions_logger(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(obb_rules.ai.common.option_value_sorter,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(gatherer,cljs.core.PersistentVector.EMPTY,elements))));
if(cljs.core.truth_(option)){
return (option.cljs$core$IFn$_invoke$arity$1 ? option.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$actions) : option.call(null,cljs.core.cst$kw$actions));
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));
