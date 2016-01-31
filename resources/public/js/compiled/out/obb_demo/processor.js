// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.processor');
goog.require('cljs.core');
goog.require('obb_rules.game_mode');
goog.require('obb_rules.math');
goog.require('obb_rules.ai.alamo');
goog.require('obb_rules.evaluator');
goog.require('obb_rules.simplifier');
goog.require('obb_rules.result');
goog.require('obb_rules.ai.firingsquad');
goog.require('obb_rules.game');
goog.require('obb_rules.turn');
goog.require('obb_demo.state');
goog.require('obb_rules.stash');
/**
 * Creates a new game
 */
obb_demo.processor.new_game = (function obb_demo$processor$new_game(){
return obb_rules.game.random();
});
/**
 * Creates a deployed game
 */
obb_demo.processor.deployed_game = (function obb_demo$processor$deployed_game(){
return obb_rules.result.result_board(obb_rules.turn.process_actions(obb_rules.result.result_board(obb_rules.turn.process_actions(obb_demo.processor.new_game(),cljs.core.cst$kw$p1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$auto_DASH_deploy,cljs.core.cst$kw$firingsquad], null)], null))),cljs.core.cst$kw$p2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$auto_DASH_deploy,cljs.core.cst$kw$firingsquad], null)], null)));
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
var turn_num = (function (){var or__6142__auto__ = cljs.core.cst$kw$turn_DASH_num.cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return (0);
}
})();
var player = obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game);
var actions = (function (){var start__7070__auto__ = cljs.core.system_time();
var ret__7071__auto__ = obb_demo.processor.bot_actions(game,player);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Elapsed time: "),cljs.core.str((cljs.core.system_time() - start__7070__auto__).toFixed((6))),cljs.core.str(" msecs")].join('')], 0));

return ret__7071__auto__;
})();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["--",player,actions], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$final,obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$game,obb_demo.processor.deployed_game()], null);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_data,cljs.core.cst$kw$actions,actions),cljs.core.cst$kw$original_DASH_actions,actions),cljs.core.cst$kw$turn_DASH_num,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$final,player))?turn_num:(turn_num + (1))));
}
});
/**
 * Processes actions
 */
obb_demo.processor.process_actions = (function obb_demo$processor$process_actions(game_data){
var actions = cljs.core.cst$kw$actions.cljs$core$IFn$_invoke$arity$1(game_data);
var game = cljs.core.cst$kw$game.cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.empty_QMARK_(actions)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_data,cljs.core.cst$kw$game,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(obb_rules.game_mode.process(game),cljs.core.cst$kw$action_DASH_results)),cljs.core.cst$kw$actions);
} else {
var temp__4423__auto__ = cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(temp__4423__auto__)){
var action = temp__4423__auto__;
var player = obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game);
var result = obb_rules.turn.simulate_actions.cljs$core$IFn$_invoke$arity$4(game,player,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null),true);
var new_game = obb_rules.result.result_board(result);
if(cljs.core.not(obb_rules.result.succeeded_QMARK_(result))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([result], 0));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_data,cljs.core.cst$kw$delay,(100000));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_data,cljs.core.cst$kw$game,new_game),cljs.core.cst$kw$action),cljs.core.cst$kw$actions,cljs.core.rest(actions));
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
