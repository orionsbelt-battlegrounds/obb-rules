// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.turn');
goog.require('cljs.core');
goog.require('obb_rules.game_mode');
goog.require('obb_rules.action');
goog.require('obb_rules.result');
goog.require('obb_rules.game');
goog.require('obb_rules.laws');
/**
 * Processes an action on a game
 */
obb_rules.turn.continue_apply_actions = (function obb_rules$turn$continue_apply_actions(player,current_game,action_pair){
var raw_action = cljs.core.first(action_pair);
var action = cljs.core.last(action_pair);
var result = (action.cljs$core$IFn$_invoke$arity$2 ? action.cljs$core$IFn$_invoke$arity$2(current_game,player) : action.call(null,current_game,player));
var result_game = obb_rules.result.result_board(result);
if(cljs.core.truth_(obb_rules.result.succeeded_QMARK_(result))){
return obb_rules.game.push_result(result_game,raw_action,result);
} else {
return obb_rules.game.push_result(current_game,raw_action,result);
}
});
/**
 * Applies the actions to a board
 */
obb_rules.turn.apply_actions = (function obb_rules$turn$apply_actions(player,current_game,action_pair){
if(cljs.core.truth_(obb_rules.game.valid_actions_QMARK_(current_game))){
return obb_rules.turn.continue_apply_actions(player,current_game,action_pair);
} else {
return current_game;
}
});
/**
 * Gets a collection of raw-action,action pairs
 */
obb_rules.turn.action_pair = (function obb_rules$turn$action_pair(raw_action){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_action,obb_rules.action.build_action(raw_action)], null);
});
/**
 * Gets the used action points on a turn.
 */
obb_rules.turn.points = (function obb_rules$turn$points(game){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15335_SHARP_){
return obb_rules.result.result_cost(p1__15335_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15334_SHARP_){
return cljs.core.last(p1__15334_SHARP_);
}),obb_rules.game.action_results(game))));
});
/**
 * Resets state
 */
obb_rules.turn.reset_action_specific_state = (function obb_rules$turn$reset_action_specific_state(game,cleanup_QMARK_){
if(cljs.core.truth_(cleanup_QMARK_)){
return clojure.set.rename_keys(obb_rules.action.reset_action_specific_state(game),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$action_DASH_results,cljs.core.cst$kw$previous_DASH_action_DASH_results,cljs.core.cst$kw$removed_DASH_elements,cljs.core.cst$kw$previous_DASH_removed_DASH_elements], null));
} else {
return game;
}
});
/**
 * True if the action should be registered on the history
 */
obb_rules.turn.history_action_QMARK_ = (function obb_rules$turn$history_action_QMARK_(raw_action){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$auto_DASH_deploy,cljs.core.first(raw_action));
});
/**
 * Gets the raw actions performed on the turn
 */
obb_rules.turn.action_results__GT_raw_actions = (function obb_rules$turn$action_results__GT_raw_actions(game){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(obb_rules.turn.history_action_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15338){
var vec__15339 = p__15338;
var raw_action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15339,(0),null);
var action_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15339,(1),null);
return raw_action;
}),cljs.core.cst$kw$action_DASH_results.cljs$core$IFn$_invoke$arity$1(game)));
});
/**
 * Register the processes actions on the game's history
 */
obb_rules.turn.register_history = (function obb_rules$turn$register_history(game){
var temp__4655__auto__ = cljs.core.seq(obb_rules.turn.action_results__GT_raw_actions(game));
if(temp__4655__auto__){
var turn_actions = temp__4655__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(game,cljs.core.cst$kw$history,cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [turn_actions], null));
} else {
return game;
}
});
/**
 * Creates a result for the given game
 */
obb_rules.turn.create_result = (function obb_rules$turn$create_result(var_args){
var args15340 = [];
var len__7214__auto___15343 = arguments.length;
var i__7215__auto___15344 = (0);
while(true){
if((i__7215__auto___15344 < len__7214__auto___15343)){
args15340.push((arguments[i__7215__auto___15344]));

var G__15345 = (i__7215__auto___15344 + (1));
i__7215__auto___15344 = G__15345;
continue;
} else {
}
break;
}

var G__15342 = args15340.length;
switch (G__15342) {
case 2:
return obb_rules.turn.create_result.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return obb_rules.turn.create_result.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15340.length)].join('')));

}
});

obb_rules.turn.create_result.cljs$core$IFn$_invoke$arity$2 = (function (game,total_action_points){
return obb_rules.turn.create_result.cljs$core$IFn$_invoke$arity$3(game,total_action_points,true);
});

obb_rules.turn.create_result.cljs$core$IFn$_invoke$arity$3 = (function (game,total_action_points,cleanup_QMARK_){
if(cljs.core.not(obb_rules.game.valid_actions_QMARK_(game))){
return obb_rules.result.action_failed.cljs$core$IFn$_invoke$arity$2("ActionFailed",game);
} else {
if((total_action_points > obb_rules.laws.max_action_points)){
return obb_rules.result.action_failed.cljs$core$IFn$_invoke$arity$1("ActionPointsOverflow");
} else {
return obb_rules.result.action_success.cljs$core$IFn$_invoke$arity$3(obb_rules.turn.reset_action_specific_state(obb_rules.turn.register_history(game),cleanup_QMARK_),total_action_points,"TurnOK");

}
}
});

obb_rules.turn.create_result.cljs$lang$maxFixedArity = 3;
/**
 * Simulates the given actions
 */
obb_rules.turn.simulate_actions = (function obb_rules$turn$simulate_actions(var_args){
var args15347 = [];
var len__7214__auto___15350 = arguments.length;
var i__7215__auto___15351 = (0);
while(true){
if((i__7215__auto___15351 < len__7214__auto___15350)){
args15347.push((arguments[i__7215__auto___15351]));

var G__15352 = (i__7215__auto___15351 + (1));
i__7215__auto___15351 = G__15352;
continue;
} else {
}
break;
}

var G__15349 = args15347.length;
switch (G__15349) {
case 3:
return obb_rules.turn.simulate_actions.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return obb_rules.turn.simulate_actions.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15347.length)].join('')));

}
});

obb_rules.turn.simulate_actions.cljs$core$IFn$_invoke$arity$3 = (function (game,player,raw_actions){
return obb_rules.turn.simulate_actions.cljs$core$IFn$_invoke$arity$4(game,player,raw_actions,false);
});

obb_rules.turn.simulate_actions.cljs$core$IFn$_invoke$arity$4 = (function (game,player,raw_actions,cleanup_QMARK_){
if(cljs.core.seq(raw_actions)){
var actions = cljs.core.map.cljs$core$IFn$_invoke$arity$2(obb_rules.turn.action_pair,raw_actions);
var do_actions = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_rules.turn.apply_actions,player);
var final$ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(do_actions,game,actions);
var action_points = obb_rules.turn.points(final$);
return obb_rules.turn.create_result.cljs$core$IFn$_invoke$arity$3(final$,action_points,cleanup_QMARK_);
} else {
return obb_rules.result.action_failed.cljs$core$IFn$_invoke$arity$1("NoActions");
}
});

obb_rules.turn.simulate_actions.cljs$lang$maxFixedArity = 4;
/**
 * Processes the given actions
 */
obb_rules.turn.process_actions = (function obb_rules$turn$process_actions(game,player,raw_actions){
var actions = cljs.core.map.cljs$core$IFn$_invoke$arity$2(obb_rules.turn.action_pair,raw_actions);
var do_actions = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_rules.turn.apply_actions,player);
var final_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(do_actions,game,actions);
var final$ = obb_rules.game_mode.process(final_state);
var action_points = obb_rules.turn.points(final$);
return obb_rules.turn.create_result.cljs$core$IFn$_invoke$arity$2(final$,action_points);
});
/**
 * Processes the given actions
 */
obb_rules.turn.process = (function obb_rules$turn$process(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15357 = arguments.length;
var i__7215__auto___15358 = (0);
while(true){
if((i__7215__auto___15358 < len__7214__auto___15357)){
args__7221__auto__.push((arguments[i__7215__auto___15358]));

var G__15359 = (i__7215__auto___15358 + (1));
i__7215__auto___15358 = G__15359;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((2) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((2)),(0))):null);
return obb_rules.turn.process.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7222__auto__);
});

obb_rules.turn.process.cljs$core$IFn$_invoke$arity$variadic = (function (game,player,raw_actions){
return obb_rules.turn.process_actions(game,player,raw_actions);
});

obb_rules.turn.process.cljs$lang$maxFixedArity = (2);

obb_rules.turn.process.cljs$lang$applyTo = (function (seq15354){
var G__15355 = cljs.core.first(seq15354);
var seq15354__$1 = cljs.core.next(seq15354);
var G__15356 = cljs.core.first(seq15354__$1);
var seq15354__$2 = cljs.core.next(seq15354__$1);
return obb_rules.turn.process.cljs$core$IFn$_invoke$arity$variadic(G__15355,G__15356,seq15354__$2);
});
/**
 * Processes the given actions, and if the turn succeeded, returns the
 *   new board
 */
obb_rules.turn.process_board = (function obb_rules$turn$process_board(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15363 = arguments.length;
var i__7215__auto___15364 = (0);
while(true){
if((i__7215__auto___15364 < len__7214__auto___15363)){
args__7221__auto__.push((arguments[i__7215__auto___15364]));

var G__15365 = (i__7215__auto___15364 + (1));
i__7215__auto___15364 = G__15365;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((2) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((2)),(0))):null);
return obb_rules.turn.process_board.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7222__auto__);
});

obb_rules.turn.process_board.cljs$core$IFn$_invoke$arity$variadic = (function (game,player,raw_actions){
var result = obb_rules.turn.process_actions(game,player,raw_actions);
if(cljs.core.truth_(obb_rules.result.succeeded_QMARK_(result))){
return cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(result);
} else {
return result;
}
});

obb_rules.turn.process_board.cljs$lang$maxFixedArity = (2);

obb_rules.turn.process_board.cljs$lang$applyTo = (function (seq15360){
var G__15361 = cljs.core.first(seq15360);
var seq15360__$1 = cljs.core.next(seq15360);
var G__15362 = cljs.core.first(seq15360__$1);
var seq15360__$2 = cljs.core.next(seq15360__$1);
return obb_rules.turn.process_board.cljs$core$IFn$_invoke$arity$variadic(G__15361,G__15362,seq15360__$2);
});
