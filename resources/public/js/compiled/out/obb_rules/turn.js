// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11981_SHARP_){
return obb_rules.result.result_cost(p1__11981_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11980_SHARP_){
return cljs.core.last(p1__11980_SHARP_);
}),obb_rules.game.action_results(game))));
});
/**
 * Resets state
 */
obb_rules.turn.reset_action_specific_state = (function obb_rules$turn$reset_action_specific_state(game,cleanup_QMARK_){
if(cljs.core.truth_(cleanup_QMARK_)){
return obb_rules.action.reset_action_specific_state(game);
} else {
return game;
}
});
/**
 * Creates a result for the given game
 */
obb_rules.turn.create_result = (function obb_rules$turn$create_result(){
var args11982 = [];
var len__8231__auto___11985 = arguments.length;
var i__8232__auto___11986 = (0);
while(true){
if((i__8232__auto___11986 < len__8231__auto___11985)){
args11982.push((arguments[i__8232__auto___11986]));

var G__11987 = (i__8232__auto___11986 + (1));
i__8232__auto___11986 = G__11987;
continue;
} else {
}
break;
}

var G__11984 = args11982.length;
switch (G__11984) {
case 2:
return obb_rules.turn.create_result.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return obb_rules.turn.create_result.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11982.length)].join('')));

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
obb_rules.turn.simulate_actions = (function obb_rules$turn$simulate_actions(){
var args11989 = [];
var len__8231__auto___11992 = arguments.length;
var i__8232__auto___11993 = (0);
while(true){
if((i__8232__auto___11993 < len__8231__auto___11992)){
args11989.push((arguments[i__8232__auto___11993]));

var G__11994 = (i__8232__auto___11993 + (1));
i__8232__auto___11993 = G__11994;
continue;
} else {
}
break;
}

var G__11991 = args11989.length;
switch (G__11991) {
case 3:
return obb_rules.turn.simulate_actions.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return obb_rules.turn.simulate_actions.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11989.length)].join('')));

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
obb_rules.turn.process = (function obb_rules$turn$process(){
var args__8238__auto__ = [];
var len__8231__auto___11999 = arguments.length;
var i__8232__auto___12000 = (0);
while(true){
if((i__8232__auto___12000 < len__8231__auto___11999)){
args__8238__auto__.push((arguments[i__8232__auto___12000]));

var G__12001 = (i__8232__auto___12000 + (1));
i__8232__auto___12000 = G__12001;
continue;
} else {
}
break;
}

var argseq__8239__auto__ = ((((2) < args__8238__auto__.length))?(new cljs.core.IndexedSeq(args__8238__auto__.slice((2)),(0))):null);
return obb_rules.turn.process.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8239__auto__);
});

obb_rules.turn.process.cljs$core$IFn$_invoke$arity$variadic = (function (game,player,raw_actions){
return obb_rules.turn.process_actions(game,player,raw_actions);
});

obb_rules.turn.process.cljs$lang$maxFixedArity = (2);

obb_rules.turn.process.cljs$lang$applyTo = (function (seq11996){
var G__11997 = cljs.core.first(seq11996);
var seq11996__$1 = cljs.core.next(seq11996);
var G__11998 = cljs.core.first(seq11996__$1);
var seq11996__$2 = cljs.core.next(seq11996__$1);
return obb_rules.turn.process.cljs$core$IFn$_invoke$arity$variadic(G__11997,G__11998,seq11996__$2);
});
