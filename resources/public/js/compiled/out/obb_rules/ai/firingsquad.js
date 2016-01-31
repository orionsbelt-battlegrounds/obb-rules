// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
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
obb_rules.ai.firingsquad.actions = (function (){var method_table__7069__auto__ = (function (){var G__12355 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12355) : cljs.core.atom.call(null,G__12355));
})();
var prefer_table__7070__auto__ = (function (){var G__12356 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12356) : cljs.core.atom.call(null,G__12356));
})();
var method_cache__7071__auto__ = (function (){var G__12357 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12357) : cljs.core.atom.call(null,G__12357));
})();
var cached_hierarchy__7072__auto__ = (function (){var G__12358 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12358) : cljs.core.atom.call(null,G__12358));
})();
var hierarchy__7073__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("obb-rules.ai.firingsquad","actions"),((function (method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__,hierarchy__7073__auto__){
return (function (game,player){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$deploy,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game)))){
return cljs.core.cst$kw$deploy;
} else {
return cljs.core.cst$kw$turn;
}
});})(method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__,hierarchy__7073__auto__))
,cljs.core.cst$kw$default,hierarchy__7073__auto__,method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__));
})();
}
obb_rules.ai.firingsquad.actions.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$deploy,(function (game,player){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$auto_DASH_deploy,cljs.core.cst$kw$firingsquad], null)], null);
}));
/**
 * Utility for debugging
 */
obb_rules.ai.firingsquad.logger = (function obb_rules$ai$firingsquad$logger(coll){
cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (option){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["firingsquad",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(option),cljs.core.cst$kw$cost.cljs$core$IFn$_invoke$arity$1(option),cljs.core.cst$kw$actions.cljs$core$IFn$_invoke$arity$1(option)], null)], 0));
}),coll);

return coll;
});
/**
 * Gathers possible actions for the given element
 */
obb_rules.ai.firingsquad.gather_element_actions = (function obb_rules$ai$firingsquad$gather_element_actions(game,all,element){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all,cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(obb_rules.ai.common.option_value_cost_sorter,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,obb_rules.ai.common.attack_options(game,element)),obb_rules.ai.common.rotate_attack_options(game,element)),obb_rules.ai.common.move_attack_options(game,element)),obb_rules.ai.common.move_options.cljs$core$IFn$_invoke$arity$2(game,element))))));
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
 * Given a collection of sorted options, tries to group several of them
 *   to find the best one
 */
obb_rules.ai.firingsquad.aggregate_best = (function obb_rules$ai$firingsquad$aggregate_best(player,options){
var joiner = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_rules.ai.common.join_options,player);
return cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(obb_rules.ai.common.option_value_sorter,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (joiner){
return (function (master_option){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(joiner,master_option,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (joiner){
return (function (p1__12359_SHARP_){
return (cljs.core.cst$kw$cost.cljs$core$IFn$_invoke$arity$1(master_option) >= cljs.core.cst$kw$cost.cljs$core$IFn$_invoke$arity$1(p1__12359_SHARP_));
});})(joiner))
,options));
});})(joiner))
,options)));
});
/**
 * Gets the complete option for playing on a specific game
 */
obb_rules.ai.firingsquad.turn_option = (function obb_rules$ai$firingsquad$turn_option(game,player){
var elements = obb_rules.board.board_elements(game,player);
var gatherer = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_rules.ai.firingsquad.gather_element_actions,game);
return obb_rules.ai.firingsquad.aggregate_best(player,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(obb_rules.ai.common.option_value_sorter,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(gatherer,cljs.core.PersistentVector.EMPTY,elements)));
});
obb_rules.ai.firingsquad.actions.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$turn,(function (game,player){
var temp__4655__auto__ = obb_rules.ai.firingsquad.turn_option(game,player);
if(cljs.core.truth_(temp__4655__auto__)){
var option = temp__4655__auto__;
return (option.cljs$core$IFn$_invoke$arity$1 ? option.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$actions) : option.call(null,cljs.core.cst$kw$actions));
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));
