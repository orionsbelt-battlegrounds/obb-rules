// Compiled by ClojureScript 1.7.228 {}
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
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__41768_SHARP_){
return obb_rules.result.result_cost.call(null,p1__41768_SHARP_);
}),cljs.core.map.call(null,(function (p1__41767_SHARP_){
return cljs.core.last.call(null,p1__41767_SHARP_);
}),obb_rules.game.action_results.call(null,game))));
});
/**
 * Resets state
 */
obb_rules.turn.reset_action_specific_state = (function obb_rules$turn$reset_action_specific_state(game,cleanup_QMARK_){
if(cljs.core.truth_(cleanup_QMARK_)){
return clojure.set.rename_keys.call(null,obb_rules.action.reset_action_specific_state.call(null,game),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action-results","action-results",-389719209),new cljs.core.Keyword(null,"previous-action-results","previous-action-results",-688633288),new cljs.core.Keyword(null,"removed-elements","removed-elements",1264344662),new cljs.core.Keyword(null,"previous-removed-elements","previous-removed-elements",1143174708)], null));
} else {
return game;
}
});
/**
 * True if the action should be registered on the history
 */
obb_rules.turn.history_action_QMARK_ = (function obb_rules$turn$history_action_QMARK_(raw_action){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"auto-deploy","auto-deploy",1838692925),cljs.core.first.call(null,raw_action));
});
/**
 * Gets the raw actions performed on the turn
 */
obb_rules.turn.action_results__GT_raw_actions = (function obb_rules$turn$action_results__GT_raw_actions(game){
return cljs.core.filter.call(null,obb_rules.turn.history_action_QMARK_,cljs.core.map.call(null,(function (p__41771){
var vec__41772 = p__41771;
var raw_action = cljs.core.nth.call(null,vec__41772,(0),null);
var action_result = cljs.core.nth.call(null,vec__41772,(1),null);
return raw_action;
}),new cljs.core.Keyword(null,"action-results","action-results",-389719209).cljs$core$IFn$_invoke$arity$1(game)));
});
/**
 * Register the processes actions on the game's history
 */
obb_rules.turn.register_history = (function obb_rules$turn$register_history(game,player){
var temp__4655__auto__ = cljs.core.seq.call(null,obb_rules.turn.action_results__GT_raw_actions.call(null,game));
if(temp__4655__auto__){
var turn_actions = temp__4655__auto__;
return cljs.core.update.call(null,game,new cljs.core.Keyword(null,"history","history",-247395220),((function (turn_actions,temp__4655__auto__){
return (function (p1__41773_SHARP_){
return cljs.core.conj.call(null,cljs.core.vec.call(null,p1__41773_SHARP_),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actions","actions",-812656882),turn_actions,new cljs.core.Keyword(null,"player","player",-97687400),player], null));
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
var args41774 = [];
var len__19428__auto___41777 = arguments.length;
var i__19429__auto___41778 = (0);
while(true){
if((i__19429__auto___41778 < len__19428__auto___41777)){
args41774.push((arguments[i__19429__auto___41778]));

var G__41779 = (i__19429__auto___41778 + (1));
i__19429__auto___41778 = G__41779;
continue;
} else {
}
break;
}

var G__41776 = args41774.length;
switch (G__41776) {
case 3:
return obb_rules.turn.create_result.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return obb_rules.turn.create_result.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41774.length)].join('')));

}
});

obb_rules.turn.create_result.cljs$core$IFn$_invoke$arity$3 = (function (game,player,total_action_points){
return obb_rules.turn.create_result.call(null,game,player,total_action_points,true);
});

obb_rules.turn.create_result.cljs$core$IFn$_invoke$arity$4 = (function (game,player,total_action_points,cleanup_QMARK_){
if(cljs.core.not.call(null,obb_rules.game.valid_actions_QMARK_.call(null,game))){
return obb_rules.result.action_failed.call(null,"ActionFailed",game);
} else {
if((total_action_points > obb_rules.laws.max_action_points)){
return obb_rules.result.action_failed.call(null,"ActionPointsOverflow");
} else {
return obb_rules.result.action_success.call(null,obb_rules.turn.reset_action_specific_state.call(null,obb_rules.turn.register_history.call(null,game,player),cleanup_QMARK_),total_action_points,"TurnOK");

}
}
});

obb_rules.turn.create_result.cljs$lang$maxFixedArity = 4;
/**
 * Simulates the given actions
 */
obb_rules.turn.simulate_actions = (function obb_rules$turn$simulate_actions(var_args){
var args41781 = [];
var len__19428__auto___41784 = arguments.length;
var i__19429__auto___41785 = (0);
while(true){
if((i__19429__auto___41785 < len__19428__auto___41784)){
args41781.push((arguments[i__19429__auto___41785]));

var G__41786 = (i__19429__auto___41785 + (1));
i__19429__auto___41785 = G__41786;
continue;
} else {
}
break;
}

var G__41783 = args41781.length;
switch (G__41783) {
case 3:
return obb_rules.turn.simulate_actions.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return obb_rules.turn.simulate_actions.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41781.length)].join('')));

}
});

obb_rules.turn.simulate_actions.cljs$core$IFn$_invoke$arity$3 = (function (game,player,raw_actions){
return obb_rules.turn.simulate_actions.call(null,game,player,raw_actions,false);
});

obb_rules.turn.simulate_actions.cljs$core$IFn$_invoke$arity$4 = (function (game,player,raw_actions,cleanup_QMARK_){
if(cljs.core.seq.call(null,raw_actions)){
var actions = cljs.core.map.call(null,obb_rules.turn.action_pair,raw_actions);
var do_actions = cljs.core.partial.call(null,obb_rules.turn.apply_actions,player);
var final$ = cljs.core.reduce.call(null,do_actions,game,actions);
var action_points = obb_rules.turn.points.call(null,final$);
return obb_rules.turn.create_result.call(null,final$,player,action_points,cleanup_QMARK_);
} else {
return obb_rules.result.action_failed.call(null,"NoActions");
}
});

obb_rules.turn.simulate_actions.cljs$lang$maxFixedArity = 4;
/**
 * Processes the given actions
 */
obb_rules.turn.process_actions = (function obb_rules$turn$process_actions(game,player,raw_actions){
var actions = cljs.core.map.call(null,obb_rules.turn.action_pair,raw_actions);
var do_actions = cljs.core.partial.call(null,obb_rules.turn.apply_actions,player);
var final_state = cljs.core.reduce.call(null,do_actions,game,actions);
var final$ = obb_rules.game_mode.process.call(null,final_state);
var action_points = obb_rules.turn.points.call(null,final$);
return obb_rules.turn.create_result.call(null,final$,player,action_points);
});
/**
 * Processes the given actions, returns only the board if successful
 */
obb_rules.turn.process_board_actions = (function obb_rules$turn$process_board_actions(game,player,raw_actions){
var result = obb_rules.turn.process_actions.call(null,game,player,raw_actions);
if(cljs.core.truth_(obb_rules.result.succeeded_QMARK_.call(null,result))){
return new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(result);
} else {
return result;
}
});
/**
 * Processes the given actions
 */
obb_rules.turn.process = (function obb_rules$turn$process(var_args){
var args__19435__auto__ = [];
var len__19428__auto___41791 = arguments.length;
var i__19429__auto___41792 = (0);
while(true){
if((i__19429__auto___41792 < len__19428__auto___41791)){
args__19435__auto__.push((arguments[i__19429__auto___41792]));

var G__41793 = (i__19429__auto___41792 + (1));
i__19429__auto___41792 = G__41793;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((2) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((2)),(0))):null);
return obb_rules.turn.process.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19436__auto__);
});

obb_rules.turn.process.cljs$core$IFn$_invoke$arity$variadic = (function (game,player,raw_actions){
return obb_rules.turn.process_actions.call(null,game,player,raw_actions);
});

obb_rules.turn.process.cljs$lang$maxFixedArity = (2);

obb_rules.turn.process.cljs$lang$applyTo = (function (seq41788){
var G__41789 = cljs.core.first.call(null,seq41788);
var seq41788__$1 = cljs.core.next.call(null,seq41788);
var G__41790 = cljs.core.first.call(null,seq41788__$1);
var seq41788__$2 = cljs.core.next.call(null,seq41788__$1);
return obb_rules.turn.process.cljs$core$IFn$_invoke$arity$variadic(G__41789,G__41790,seq41788__$2);
});
/**
 * Processes the given actions, and if the turn succeeded, returns the
 *   new board
 */
obb_rules.turn.process_board = (function obb_rules$turn$process_board(var_args){
var args__19435__auto__ = [];
var len__19428__auto___41797 = arguments.length;
var i__19429__auto___41798 = (0);
while(true){
if((i__19429__auto___41798 < len__19428__auto___41797)){
args__19435__auto__.push((arguments[i__19429__auto___41798]));

var G__41799 = (i__19429__auto___41798 + (1));
i__19429__auto___41798 = G__41799;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((2) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((2)),(0))):null);
return obb_rules.turn.process_board.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19436__auto__);
});

obb_rules.turn.process_board.cljs$core$IFn$_invoke$arity$variadic = (function (game,player,raw_actions){
return obb_rules.turn.process_board_actions.call(null,game,player,raw_actions);
});

obb_rules.turn.process_board.cljs$lang$maxFixedArity = (2);

obb_rules.turn.process_board.cljs$lang$applyTo = (function (seq41794){
var G__41795 = cljs.core.first.call(null,seq41794);
var seq41794__$1 = cljs.core.next.call(null,seq41794);
var G__41796 = cljs.core.first.call(null,seq41794__$1);
var seq41794__$2 = cljs.core.next.call(null,seq41794__$1);
return obb_rules.turn.process_board.cljs$core$IFn$_invoke$arity$variadic(G__41795,G__41796,seq41794__$2);
});
/**
 * Processes history items into the game
 */
obb_rules.turn.process_history = (function obb_rules$turn$process_history(game,history){
return cljs.core.reduce.call(null,(function (game__$1,history_item){
var curr_player = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(history_item);
var actions = new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(history_item);
var game__$2 = (cljs.core.truth_(obb_rules.game.deploy_QMARK_.call(null,game__$1))?game__$1:obb_rules.game.state.call(null,game__$1,curr_player));
var result = obb_rules.turn.process_actions.call(null,game__$2,curr_player,actions);
if(cljs.core.truth_(obb_rules.result.succeeded_QMARK_.call(null,result))){
return new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(result);
} else {
return cljs.core.reduced.call(null,result);
}
}),game,history);
});

//# sourceMappingURL=turn.js.map?rel=1458852293459