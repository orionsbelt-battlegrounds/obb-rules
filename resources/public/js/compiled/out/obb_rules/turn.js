// Compiled by ClojureScript 0.0-3308 {}
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
var raw_action = cljs.core.first.call(null,action_pair);
var action = cljs.core.last.call(null,action_pair);
var result = action.call(null,current_game,player);
var result_game = obb_rules.result.result_board.call(null,result);
if(cljs.core.truth_(obb_rules.result.succeeded_QMARK_.call(null,result))){
return obb_rules.game.push_result.call(null,result_game,raw_action,result);
} else {
return obb_rules.game.push_result.call(null,current_game,raw_action,result);
}
});
/**
 * Applies the actions to a board
 */
obb_rules.turn.apply_actions = (function obb_rules$turn$apply_actions(player,current_game,action_pair){
if(cljs.core.truth_(obb_rules.game.valid_actions_QMARK_.call(null,current_game))){
return obb_rules.turn.continue_apply_actions.call(null,player,current_game,action_pair);
} else {
return current_game;
}
});
/**
 * Gets a collection of raw-action,action pairs
 */
obb_rules.turn.action_pair = (function obb_rules$turn$action_pair(raw_action){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_action,obb_rules.action.build_action.call(null,raw_action)], null);
});
/**
 * Gets the used action points on a turn.
 */
obb_rules.turn.points = (function obb_rules$turn$points(game){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__33155_SHARP_){
return obb_rules.result.result_cost.call(null,p1__33155_SHARP_);
}),cljs.core.map.call(null,(function (p1__33154_SHARP_){
return cljs.core.last.call(null,p1__33154_SHARP_);
}),obb_rules.game.action_results.call(null,game))));
});
/**
 * Creates a result for the given game
 */
obb_rules.turn.create_result = (function obb_rules$turn$create_result(game,total_action_points){
if(cljs.core.not.call(null,obb_rules.game.valid_actions_QMARK_.call(null,game))){
return obb_rules.result.action_failed.call(null,"ActionFailed",game);
} else {
if((total_action_points > obb_rules.laws.max_action_points)){
return obb_rules.result.action_failed.call(null,"ActionPointsOverflow");
} else {
return obb_rules.result.action_success.call(null,obb_rules.action.reset_action_specific_state.call(null,game),total_action_points,"TurnOK");

}
}
});
/**
 * Simulates the given actions
 */
obb_rules.turn.simulate_actions = (function obb_rules$turn$simulate_actions(game,player,raw_actions){
if(cljs.core.seq.call(null,raw_actions)){
var actions = cljs.core.map.call(null,obb_rules.turn.action_pair,raw_actions);
var do_actions = cljs.core.partial.call(null,obb_rules.turn.apply_actions,player);
var final$ = cljs.core.reduce.call(null,do_actions,game,actions);
var action_points = obb_rules.turn.points.call(null,final$);
return obb_rules.turn.create_result.call(null,final$,action_points);
} else {
return obb_rules.result.action_failed.call(null,"NoActions");
}
});
/**
 * Processes the given actions
 */
obb_rules.turn.process_actions = (function obb_rules$turn$process_actions(game,player,raw_actions){
var actions = cljs.core.map.call(null,obb_rules.turn.action_pair,raw_actions);
var do_actions = cljs.core.partial.call(null,obb_rules.turn.apply_actions,player);
var final_state = cljs.core.reduce.call(null,do_actions,game,actions);
var final$ = obb_rules.game_mode.process.call(null,final_state);
var action_points = obb_rules.turn.points.call(null,final$);
return obb_rules.turn.create_result.call(null,final$,action_points);
});
/**
 * Processes the given actions
 */
obb_rules.turn.process = (function obb_rules$turn$process(){
var argseq__17149__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return obb_rules.turn.process.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17149__auto__);
});

obb_rules.turn.process.cljs$core$IFn$_invoke$arity$variadic = (function (game,player,raw_actions){
return obb_rules.turn.process_actions.call(null,game,player,raw_actions);
});

obb_rules.turn.process.cljs$lang$maxFixedArity = (2);

obb_rules.turn.process.cljs$lang$applyTo = (function (seq33156){
var G__33157 = cljs.core.first.call(null,seq33156);
var seq33156__$1 = cljs.core.next.call(null,seq33156);
var G__33158 = cljs.core.first.call(null,seq33156__$1);
var seq33156__$2 = cljs.core.next.call(null,seq33156__$1);
return obb_rules.turn.process.cljs$core$IFn$_invoke$arity$variadic(G__33157,G__33158,seq33156__$2);
});

//# sourceMappingURL=turn.js.map?rel=1436517557665