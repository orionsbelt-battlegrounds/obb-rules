// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.processor');
goog.require('cljs.core');
goog.require('obb_rules.game_mode');
goog.require('obb_rules.math');
goog.require('obb_rules.ai.alamo');
goog.require('obb_rules.evaluator');
goog.require('obb_rules.simplifier');
goog.require('obb_rules.game_progress');
goog.require('obb_rules.result');
goog.require('obb_rules.ai.firingsquad');
goog.require('obb_rules.game');
goog.require('obb_rules.turn');
goog.require('obb_demo.state');
goog.require('obb_rules.stash');
/**
 * Creates a new game
 */
obb_demo.processor.new_game = (function obb_demo$processor$new_game(var_args){
var args__7286__auto__ = [];
var len__7279__auto___16483 = arguments.length;
var i__7280__auto___16484 = (0);
while(true){
if((i__7280__auto___16484 < len__7279__auto___16483)){
args__7286__auto__.push((arguments[i__7280__auto___16484]));

var G__16485 = (i__7280__auto___16484 + (1));
i__7280__auto___16484 = G__16485;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((0) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((0)),(0),null)):null);
return obb_demo.processor.new_game.cljs$core$IFn$_invoke$arity$variadic(argseq__7287__auto__);
});

obb_demo.processor.new_game.cljs$core$IFn$_invoke$arity$variadic = (function (p__16479){
var vec__16480 = p__16479;
var map__16481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16480,(0),null);
var map__16481__$1 = ((((!((map__16481 == null)))?((((map__16481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16481):map__16481);
var options = map__16481__$1;
var args = vec__16480;
return obb_rules.game_progress.new_random_game.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([options], 0));
});

obb_demo.processor.new_game.cljs$lang$maxFixedArity = (0);

obb_demo.processor.new_game.cljs$lang$applyTo = (function (seq16478){
return obb_demo.processor.new_game.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16478));
});
/**
 * Creates a deployed game
 */
obb_demo.processor.deployed_game = (function obb_demo$processor$deployed_game(var_args){
var args__7286__auto__ = [];
var len__7279__auto___16491 = arguments.length;
var i__7280__auto___16492 = (0);
while(true){
if((i__7280__auto___16492 < len__7279__auto___16491)){
args__7286__auto__.push((arguments[i__7280__auto___16492]));

var G__16493 = (i__7280__auto___16492 + (1));
i__7280__auto___16492 = G__16493;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((0) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((0)),(0),null)):null);
return obb_demo.processor.deployed_game.cljs$core$IFn$_invoke$arity$variadic(argseq__7287__auto__);
});

obb_demo.processor.deployed_game.cljs$core$IFn$_invoke$arity$variadic = (function (p__16487){
var vec__16488 = p__16487;
var map__16489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16488,(0),null);
var map__16489__$1 = ((((!((map__16489 == null)))?((((map__16489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16489):map__16489);
var options = map__16489__$1;
var args = vec__16488;
return obb_rules.game.start_battle.cljs$core$IFn$_invoke$arity$2(obb_rules.result.result_board(obb_rules.turn.process_actions(obb_rules.result.result_board(obb_rules.turn.process_actions(obb_demo.processor.new_game.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([options], 0)),cljs.core.cst$kw$p1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$auto_DASH_deploy,cljs.core.cst$kw$firingsquad], null)], null))),cljs.core.cst$kw$p2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$auto_DASH_deploy,cljs.core.cst$kw$firingsquad], null)], null))),cljs.core.cst$kw$p1);
});

obb_demo.processor.deployed_game.cljs$lang$maxFixedArity = (0);

obb_demo.processor.deployed_game.cljs$lang$applyTo = (function (seq16486){
return obb_demo.processor.deployed_game.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16486));
});
/**
 * Gets actions
 */
obb_demo.processor.bot_actions = (function obb_demo$processor$bot_actions(game,player){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p1,player)){
return (obb_rules.ai.firingsquad.actions.cljs$core$IFn$_invoke$arity$2 ? obb_rules.ai.firingsquad.actions.cljs$core$IFn$_invoke$arity$2(game,player) : obb_rules.ai.firingsquad.actions.call(null,game,player));
} else {
return (obb_rules.ai.firingsquad.actions.cljs$core$IFn$_invoke$arity$2 ? obb_rules.ai.firingsquad.actions.cljs$core$IFn$_invoke$arity$2(game,player) : obb_rules.ai.firingsquad.actions.call(null,game,player));
}
});
/**
 * Generates actions to be processed
 */
obb_demo.processor.generate_actions = (function obb_demo$processor$generate_actions(game_data){
var game = cljs.core.cst$kw$game.cljs$core$IFn$_invoke$arity$1(game_data);
var turn_num = (function (){var or__6210__auto__ = cljs.core.cst$kw$turn_DASH_num.cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return (0);
}
})();
var player = obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game);
var actions = (function (){var start__7149__auto__ = cljs.core.system_time();
var ret__7150__auto__ = obb_demo.processor.bot_actions(game,player);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Elapsed time: "),cljs.core.str((cljs.core.system_time() - start__7149__auto__).toFixed((6))),cljs.core.str(" msecs")].join('')], 0));

return ret__7150__auto__;
})();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["--",player,actions], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$final,obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game))){
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$3(game_data,cljs.core.cst$kw$game_DASH_options,obb_rules.game_progress.default_new_game_options);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$game,obb_demo.processor.deployed_game.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([options], 0)),cljs.core.cst$kw$game_DASH_options,options], null);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_data,cljs.core.cst$kw$actions,actions),cljs.core.cst$kw$original_DASH_actions,actions),cljs.core.cst$kw$history,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.get.cljs$core$IFn$_invoke$arity$3(game_data,cljs.core.cst$kw$history,cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(game))),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$player,player,cljs.core.cst$kw$actions,actions], null))),cljs.core.cst$kw$turn_DASH_num,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$final,player))?turn_num:(turn_num + (1))));
}
});
/**
 * Processes actions
 */
obb_demo.processor.process_actions = (function obb_demo$processor$process_actions(game_data){
var actions = cljs.core.cst$kw$actions.cljs$core$IFn$_invoke$arity$1(game_data);
var game = cljs.core.cst$kw$game.cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.empty_QMARK_(actions)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_data,cljs.core.cst$kw$game,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(obb_rules.game_progress.next_stage(game),cljs.core.cst$kw$action_DASH_results)),cljs.core.cst$kw$actions);
} else {
var temp__4655__auto__ = cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(temp__4655__auto__)){
var action = temp__4655__auto__;
var player = obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game);
var result = obb_rules.turn.simulate_actions.cljs$core$IFn$_invoke$arity$4(game,player,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null),true);
var new_game = obb_rules.result.result_board(result);
if(cljs.core.not(obb_rules.result.succeeded_QMARK_(result))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([result], 0));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_data,cljs.core.cst$kw$delay,(100000));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_data,cljs.core.cst$kw$game,new_game),cljs.core.cst$kw$action),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$history], null),cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(game_data)),cljs.core.cst$kw$actions,cljs.core.rest(actions));
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_data,cljs.core.cst$kw$action,cljs.core.first(actions));
}
}
});
/**
 * Uses the AI the process a game-data
 */
obb_demo.processor.auto_process_game_data = (function obb_demo$processor$auto_process_game_data(game_data){
if(cljs.core.truth_(cljs.core.cst$kw$actions.cljs$core$IFn$_invoke$arity$1(game_data))){
return obb_demo.processor.process_actions(game_data);
} else {
return obb_demo.processor.generate_actions(game_data);
}
});
