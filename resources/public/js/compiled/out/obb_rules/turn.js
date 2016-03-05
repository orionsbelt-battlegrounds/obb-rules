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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15214_SHARP_){
return obb_rules.result.result_cost(p1__15214_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15213_SHARP_){
return cljs.core.last(p1__15213_SHARP_);
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
 * Creates a result for the given game
 */
obb_rules.turn.create_result = (function obb_rules$turn$create_result(var_args){
var args15215 = [];
var len__7214__auto___15218 = arguments.length;
var i__7215__auto___15219 = (0);
while(true){
if((i__7215__auto___15219 < len__7214__auto___15218)){
args15215.push((arguments[i__7215__auto___15219]));

var G__15220 = (i__7215__auto___15219 + (1));
i__7215__auto___15219 = G__15220;
continue;
} else {
}
break;
}

var G__15217 = args15215.length;
switch (G__15217) {
case 2:
return obb_rules.turn.create_result.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return obb_rules.turn.create_result.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15215.length)].join('')));

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
return obb_rules.result.action_success.cljs$core$IFn$_invoke$arity$3(obb_rules.turn.reset_action_specific_state(game,cleanup_QMARK_),total_action_points,"TurnOK");

}
}
});

obb_rules.turn.create_result.cljs$lang$maxFixedArity = 3;
/**
 * Simulates the given actions
 */
obb_rules.turn.simulate_actions = (function obb_rules$turn$simulate_actions(var_args){
var args15222 = [];
var len__7214__auto___15225 = arguments.length;
var i__7215__auto___15226 = (0);
while(true){
if((i__7215__auto___15226 < len__7214__auto___15225)){
args15222.push((arguments[i__7215__auto___15226]));

var G__15227 = (i__7215__auto___15226 + (1));
i__7215__auto___15226 = G__15227;
continue;
} else {
}
break;
}

var G__15224 = args15222.length;
switch (G__15224) {
case 3:
return obb_rules.turn.simulate_actions.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return obb_rules.turn.simulate_actions.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15222.length)].join('')));

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
var len__7214__auto___15232 = arguments.length;
var i__7215__auto___15233 = (0);
while(true){
if((i__7215__auto___15233 < len__7214__auto___15232)){
args__7221__auto__.push((arguments[i__7215__auto___15233]));

var G__15234 = (i__7215__auto___15233 + (1));
i__7215__auto___15233 = G__15234;
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

obb_rules.turn.process.cljs$lang$applyTo = (function (seq15229){
var G__15230 = cljs.core.first(seq15229);
var seq15229__$1 = cljs.core.next(seq15229);
var G__15231 = cljs.core.first(seq15229__$1);
var seq15229__$2 = cljs.core.next(seq15229__$1);
return obb_rules.turn.process.cljs$core$IFn$_invoke$arity$variadic(G__15230,G__15231,seq15229__$2);
});
