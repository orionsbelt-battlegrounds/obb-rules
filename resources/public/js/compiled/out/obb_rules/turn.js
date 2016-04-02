// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.turn');
goog.require('cljs.core');
goog.require('obb_rules.action');
goog.require('obb_rules.game_progress');
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16003_SHARP_){
return obb_rules.result.result_cost(p1__16003_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16002_SHARP_){
return cljs.core.last(p1__16002_SHARP_);
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
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(obb_rules.turn.history_action_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16006){
var vec__16007 = p__16006;
var raw_action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16007,(0),null);
var action_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16007,(1),null);
return raw_action;
}),cljs.core.cst$kw$action_DASH_results.cljs$core$IFn$_invoke$arity$1(game)));
});
/**
 * Register the processes actions on the game's history
 */
obb_rules.turn.register_history = (function obb_rules$turn$register_history(game,player){
var temp__4655__auto__ = cljs.core.seq(obb_rules.turn.action_results__GT_raw_actions(game));
if(temp__4655__auto__){
var turn_actions = temp__4655__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(game,cljs.core.cst$kw$history,((function (turn_actions,temp__4655__auto__){
return (function (p1__16008_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(p1__16008_SHARP_),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$actions,turn_actions,cljs.core.cst$kw$player,player], null));
});})(turn_actions,temp__4655__auto__))
);
} else {
return game;
}
});
/**
 * Creates a result for the given game
 */
obb_rules.turn.create_result = (function obb_rules$turn$create_result(var_args){
var args16009 = [];
var len__7279__auto___16012 = arguments.length;
var i__7280__auto___16013 = (0);
while(true){
if((i__7280__auto___16013 < len__7279__auto___16012)){
args16009.push((arguments[i__7280__auto___16013]));

var G__16014 = (i__7280__auto___16013 + (1));
i__7280__auto___16013 = G__16014;
continue;
} else {
}
break;
}

var G__16011 = args16009.length;
switch (G__16011) {
case 3:
return obb_rules.turn.create_result.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return obb_rules.turn.create_result.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16009.length)].join('')));

}
});

obb_rules.turn.create_result.cljs$core$IFn$_invoke$arity$3 = (function (game,player,total_action_points){
return obb_rules.turn.create_result.cljs$core$IFn$_invoke$arity$4(game,player,total_action_points,true);
});

obb_rules.turn.create_result.cljs$core$IFn$_invoke$arity$4 = (function (game,player,total_action_points,cleanup_QMARK_){
if(cljs.core.not(obb_rules.game.valid_actions_QMARK_(game))){
return obb_rules.result.action_failed.cljs$core$IFn$_invoke$arity$2("ActionFailed",game);
} else {
if((total_action_points > obb_rules.laws.max_action_points)){
return obb_rules.result.action_failed.cljs$core$IFn$_invoke$arity$1("ActionPointsOverflow");
} else {
return obb_rules.result.action_success.cljs$core$IFn$_invoke$arity$3(obb_rules.turn.reset_action_specific_state(obb_rules.turn.register_history(game,player),cleanup_QMARK_),total_action_points,"TurnOK");

}
}
});

obb_rules.turn.create_result.cljs$lang$maxFixedArity = 4;
/**
 * Simulates the given actions
 */
obb_rules.turn.simulate_actions = (function obb_rules$turn$simulate_actions(var_args){
var args16016 = [];
var len__7279__auto___16019 = arguments.length;
var i__7280__auto___16020 = (0);
while(true){
if((i__7280__auto___16020 < len__7279__auto___16019)){
args16016.push((arguments[i__7280__auto___16020]));

var G__16021 = (i__7280__auto___16020 + (1));
i__7280__auto___16020 = G__16021;
continue;
} else {
}
break;
}

var G__16018 = args16016.length;
switch (G__16018) {
case 3:
return obb_rules.turn.simulate_actions.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return obb_rules.turn.simulate_actions.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16016.length)].join('')));

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
return obb_rules.turn.create_result.cljs$core$IFn$_invoke$arity$4(final$,player,action_points,cleanup_QMARK_);
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
var final$ = obb_rules.game_progress.next_stage(final_state);
var action_points = obb_rules.turn.points(final$);
return obb_rules.turn.create_result.cljs$core$IFn$_invoke$arity$3(final$,player,action_points);
});
/**
 * Processes the given actions, returns only the board if successful
 */
obb_rules.turn.process_board_actions = (function obb_rules$turn$process_board_actions(game,player,raw_actions){
var result = obb_rules.turn.process_actions(game,player,raw_actions);
if(cljs.core.truth_(obb_rules.result.succeeded_QMARK_(result))){
return cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(result);
} else {
return result;
}
});
/**
 * Processes the given actions
 */
obb_rules.turn.process = (function obb_rules$turn$process(var_args){
var args__7286__auto__ = [];
var len__7279__auto___16026 = arguments.length;
var i__7280__auto___16027 = (0);
while(true){
if((i__7280__auto___16027 < len__7279__auto___16026)){
args__7286__auto__.push((arguments[i__7280__auto___16027]));

var G__16028 = (i__7280__auto___16027 + (1));
i__7280__auto___16027 = G__16028;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((2) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((2)),(0),null)):null);
return obb_rules.turn.process.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7287__auto__);
});

obb_rules.turn.process.cljs$core$IFn$_invoke$arity$variadic = (function (game,player,raw_actions){
return obb_rules.turn.process_actions(game,player,raw_actions);
});

obb_rules.turn.process.cljs$lang$maxFixedArity = (2);

obb_rules.turn.process.cljs$lang$applyTo = (function (seq16023){
var G__16024 = cljs.core.first(seq16023);
var seq16023__$1 = cljs.core.next(seq16023);
var G__16025 = cljs.core.first(seq16023__$1);
var seq16023__$2 = cljs.core.next(seq16023__$1);
return obb_rules.turn.process.cljs$core$IFn$_invoke$arity$variadic(G__16024,G__16025,seq16023__$2);
});
/**
 * Processes the given actions, and if the turn succeeded, returns the
 *   new board
 */
obb_rules.turn.process_board = (function obb_rules$turn$process_board(var_args){
var args__7286__auto__ = [];
var len__7279__auto___16032 = arguments.length;
var i__7280__auto___16033 = (0);
while(true){
if((i__7280__auto___16033 < len__7279__auto___16032)){
args__7286__auto__.push((arguments[i__7280__auto___16033]));

var G__16034 = (i__7280__auto___16033 + (1));
i__7280__auto___16033 = G__16034;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((2) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((2)),(0),null)):null);
return obb_rules.turn.process_board.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7287__auto__);
});

obb_rules.turn.process_board.cljs$core$IFn$_invoke$arity$variadic = (function (game,player,raw_actions){
return obb_rules.turn.process_board_actions(game,player,raw_actions);
});

obb_rules.turn.process_board.cljs$lang$maxFixedArity = (2);

obb_rules.turn.process_board.cljs$lang$applyTo = (function (seq16029){
var G__16030 = cljs.core.first(seq16029);
var seq16029__$1 = cljs.core.next(seq16029);
var G__16031 = cljs.core.first(seq16029__$1);
var seq16029__$2 = cljs.core.next(seq16029__$1);
return obb_rules.turn.process_board.cljs$core$IFn$_invoke$arity$variadic(G__16030,G__16031,seq16029__$2);
});
/**
 * Processes history items into the game
 */
obb_rules.turn.process_history = (function obb_rules$turn$process_history(game,history){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (game__$1,history_item){
var curr_player = cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(history_item);
var actions = cljs.core.cst$kw$actions.cljs$core$IFn$_invoke$arity$1(history_item);
var game__$2 = (cljs.core.truth_(obb_rules.game.deploy_QMARK_(game__$1))?game__$1:obb_rules.game.state.cljs$core$IFn$_invoke$arity$2(game__$1,curr_player));
var result = obb_rules.turn.process_actions(game__$2,curr_player,actions);
if(cljs.core.truth_(obb_rules.result.succeeded_QMARK_(result))){
return cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(result);
} else {
return cljs.core.reduced(result);
}
}),game,history);
});
