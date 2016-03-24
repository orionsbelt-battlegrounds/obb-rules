// Compiled by ClojureScript 1.7.228 {}
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
obb_rules.ai.alamo.actions = (function (){var method_table__19283__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19284__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19285__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19286__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19287__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"obb-rules.ai.alamo","actions"),((function (method_table__19283__auto__,prefer_table__19284__auto__,method_cache__19285__auto__,cached_hierarchy__19286__auto__,hierarchy__19287__auto__){
return (function (game,player){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"deploy","deploy",-2006774212),cljs.core.keyword.call(null,obb_rules.game.state.call(null,game)))){
return new cljs.core.Keyword(null,"deploy","deploy",-2006774212);
} else {
return new cljs.core.Keyword(null,"turn","turn",75759344);
}
});})(method_table__19283__auto__,prefer_table__19284__auto__,method_cache__19285__auto__,cached_hierarchy__19286__auto__,hierarchy__19287__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19287__auto__,method_table__19283__auto__,prefer_table__19284__auto__,method_cache__19285__auto__,cached_hierarchy__19286__auto__));
})();
}
cljs.core._add_method.call(null,obb_rules.ai.alamo.actions,new cljs.core.Keyword(null,"deploy","deploy",-2006774212),(function (game,player){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auto-deploy","auto-deploy",1838692925),new cljs.core.Keyword(null,"firingsquad","firingsquad",-1910418650)], null)], null);
}));
/**
 * Utility for debugging
 */
obb_rules.ai.alamo.final_actions_logger = (function obb_rules$ai$alamo$final_actions_logger(coll){
obb_rules.logger.log.call(null,"## Final actions ~~~~~~~~~");

if(cljs.core.truth_(obb_rules.logger._STAR_verbose_STAR_)){
cljs.core.mapv.call(null,(function (option){
return obb_rules.logger.ai_option.call(null,option);
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
obb_rules.logger.log.call(null,"## Element",obb_rules.element.element_coordinate.call(null,element),"options ~~~~~~~~~");

if(cljs.core.truth_(obb_rules.logger._STAR_verbose_STAR_)){
cljs.core.mapv.call(null,(function (option){
return obb_rules.logger.ai_option.call(null,option);
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
return cljs.core.take.call(null,n,cljs.core.sort_by.call(null,obb_rules.ai.common.option_value_sorter,cljs.core.into.call(null,cljs.core.into.call(null,cljs.core.into.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,obb_rules.ai.common.attack_options.call(null,game,element)),obb_rules.ai.common.rotate_attack_options.call(null,game,element)),obb_rules.ai.common.move_attack_options.call(null,game,element)),obb_rules.ai.common.move_options.call(null,game,element,obb_rules.ai.common.eval_board.call(null,game,obb_rules.element.element_player.call(null,element)),(6)))));
});
/**
 * Gets the other player to play on the given board
 */
obb_rules.ai.alamo.other_player = (function obb_rules$ai$alamo$other_player(board){
if(cljs.core._EQ_.call(null,obb_rules.game.state.call(null,board),new cljs.core.Keyword(null,"p1","p1",-936759954))){
return new cljs.core.Keyword(null,"p2","p2",905500641);
} else {
return new cljs.core.Keyword(null,"p1","p1",-936759954);
}
});
/**
 * Tries to find the element on the new board
 */
obb_rules.ai.alamo.get_element_on_new_board = (function obb_rules$ai$alamo$get_element_on_new_board(element,option,counter_option){
var element_player = obb_rules.element.element_player.call(null,element);
var counter_board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(counter_option);
var element_coord = (function (){var or__18370__auto__ = new cljs.core.Keyword(null,"element-coord","element-coord",1911215117).cljs$core$IFn$_invoke$arity$1(option);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return obb_rules.element.element_coordinate.call(null,element);
}
})();
var counter_element = (function (){var and__18358__auto__ = counter_board;
if(cljs.core.truth_(and__18358__auto__)){
return obb_rules.board.get_element.call(null,counter_board,element_coord);
} else {
return and__18358__auto__;
}
})();
if(cljs.core.truth_((function (){var and__18358__auto__ = counter_element;
if(cljs.core.truth_(and__18358__auto__)){
return cljs.core._EQ_.call(null,element_player,obb_rules.element.element_player.call(null,counter_element));
} else {
return and__18358__auto__;
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
obb_rules.ai.alamo.remove_value = (function obb_rules$ai$alamo$remove_value(p__41833,player,value){
var vec__41835 = p__41833;
var s1 = cljs.core.nth.call(null,vec__41835,(0),null);
var s2 = cljs.core.nth.call(null,vec__41835,(1),null);
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_.call(null,player,new cljs.core.Keyword(null,"p1","p1",-936759954)))){
return obb_rules.ai.common.eval_scores.call(null,player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(s1 + value),s2], null));
} else {
return obb_rules.ai.common.eval_scores.call(null,player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s1,(s2 + value)], null));
}
});
/**
 * Given an option and a counter option will return a new option that is
 *   a merged one
 */
obb_rules.ai.alamo.merge_counter_option = (function obb_rules$ai$alamo$merge_counter_option(element,option,counter_option,element_board,scores,player){
if(cljs.core.truth_((function (){var and__18358__auto__ = option;
if(cljs.core.truth_(and__18358__auto__)){
return counter_option;
} else {
return and__18358__auto__;
}
})())){
var original_value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(option);
var original_quantity = obb_rules.element.element_quantity.call(null,element);
var counter_element = obb_rules.ai.alamo.get_element_on_new_board.call(null,element,option,counter_option);
var counter_quantity = (cljs.core.truth_(counter_element)?obb_rules.element.element_quantity.call(null,counter_element):(0));
var remaining_quantity = (counter_quantity - original_quantity);
var unit_value = obb_rules.unit.unit_value.call(null,obb_rules.element.element_unit.call(null,element));
var total_element_value = (remaining_quantity * unit_value);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,option,new cljs.core.Keyword(null,"old-value","old-value",862546795),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(option)),new cljs.core.Keyword(null,"value","value",305978217),obb_rules.ai.alamo.remove_value.call(null,scores,player,total_element_value));
} else {
return option;
}
});
/**
 * For each option given, will play a bot against it and recalculate
 *   option value
 */
obb_rules.ai.alamo.consider_opponent_move = (function obb_rules$ai$alamo$consider_opponent_move(options,element){
return cljs.core.map.call(null,(function (option){
if(cljs.core.truth_(option)){
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(option);
var player = obb_rules.game.state.call(null,board);
var scores = obb_rules.evaluator.eval_game.call(null,board);
var counter_player = obb_rules.ai.alamo.other_player.call(null,board);
var moved_element = obb_rules.board.get_element.call(null,board,(function (){var or__18370__auto__ = new cljs.core.Keyword(null,"element-coord","element-coord",1911215117).cljs$core$IFn$_invoke$arity$1(option);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return obb_rules.element.element_coordinate.call(null,element);
}
})());
var board__$1 = cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,obb_rules.board.element_focus.call(null,obb_rules.game.state.call(null,board,counter_player),moved_element),new cljs.core.Keyword(null,"removed-elements","removed-elements",1264344662)),new cljs.core.Keyword(null,"action-results","action-results",-389719209));
var counter_option = obb_rules.ai.firingsquad.turn_option.call(null,board__$1,counter_player);
return obb_rules.ai.alamo.merge_counter_option.call(null,element,option,counter_option,board__$1,scores,player);
} else {
return null;
}
}),options);
});
/**
 * Gathers possible actions for the given element
 */
obb_rules.ai.alamo.gather_element_actions = (function obb_rules$ai$alamo$gather_element_actions(game,all,element){
return cljs.core.remove.call(null,cljs.core.empty_QMARK_,cljs.core.conj.call(null,all,cljs.core.first.call(null,obb_rules.ai.alamo.element_options_logger.call(null,cljs.core.sort_by.call(null,obb_rules.ai.common.option_value_sorter,obb_rules.ai.alamo.consider_opponent_move.call(null,obb_rules.ai.alamo.take_best.call(null,game,element,obb_rules.ai.alamo.element_depth),element)),element))));
});
/**
 * Given a collection of sorted options, tries to find a good one
 */
obb_rules.ai.alamo.find_one = (function obb_rules$ai$alamo$find_one(player,options){
var joiner = cljs.core.partial.call(null,obb_rules.ai.common.join_options,player);
var the_one = cljs.core.reduce.call(null,joiner,cljs.core.first.call(null,options),cljs.core.rest.call(null,options));
obb_rules.logger.log.call(null,"## Final ~~~~~~~~~~");

obb_rules.logger.ai_option.call(null,the_one);

return the_one;
});
cljs.core._add_method.call(null,obb_rules.ai.alamo.actions,new cljs.core.Keyword(null,"turn","turn",75759344),(function (game,player){
obb_rules.logger.ai_turn.call(null,"alamo",game);

var elements = obb_rules.board.board_elements.call(null,game,player);
var gatherer = cljs.core.partial.call(null,obb_rules.ai.alamo.gather_element_actions,game);
var option = obb_rules.ai.alamo.find_one.call(null,player,obb_rules.ai.alamo.final_actions_logger.call(null,cljs.core.sort_by.call(null,obb_rules.ai.common.option_value_sorter,cljs.core.reduce.call(null,gatherer,cljs.core.PersistentVector.EMPTY,elements))));
if(cljs.core.truth_(option)){
return option.call(null,new cljs.core.Keyword(null,"actions","actions",-812656882));
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));

//# sourceMappingURL=alamo.js.map?rel=1458852293941