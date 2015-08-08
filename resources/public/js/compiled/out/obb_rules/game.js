// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.game');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.simplifier');
goog.require('obb_rules.result');
goog.require('obb_rules.host_dependent');
goog.require('obb_rules.stash');
obb_rules.game.version = "2.0.0";
/**
 * Checks if the game is in a given state
 */
obb_rules.game.state_QMARK_ = (function obb_rules$game$state_QMARK_(game,state){
var current_state = (game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$state) : game.call(null,cljs.core.constant$keyword$state));
var or__7199__auto__ = (current_state == null);
if(or__7199__auto__){
return or__7199__auto__;
} else {
return obb_rules.simplifier.name_EQ_(state,current_state);
}
});
/**
 * True if in deploy state
 */
obb_rules.game.deploy_QMARK_ = (function obb_rules$game$deploy_QMARK_(game){
return obb_rules.game.state_QMARK_(game,cljs.core.constant$keyword$deploy);
});
/**
 * True if player's state
 */
obb_rules.game.player_turn_QMARK_ = (function obb_rules$game$player_turn_QMARK_(game,player){
return obb_rules.game.state_QMARK_(game,player);
});
/**
 * Gets the player's stash
 */
obb_rules.game.get_stash = (function obb_rules$game$get_stash(game,player){
return obb_rules.board.get_stash(game,player);
});
/**
 * Gets the game mode
 */
obb_rules.game.mode = (function obb_rules$game$mode(game){
var or__7199__auto__ = (game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$mode) : game.call(null,cljs.core.constant$keyword$mode));
if(cljs.core.truth_(or__7199__auto__)){
return or__7199__auto__;
} else {
return cljs.core.constant$keyword$default;
}
});
/**
 * Gets/Sets the current game's state
 */
obb_rules.game.state = (function obb_rules$game$state(){
var args10314 = [];
var len__8238__auto___10317 = arguments.length;
var i__8239__auto___10318 = (0);
while(true){
if((i__8239__auto___10318 < len__8238__auto___10317)){
args10314.push((arguments[i__8239__auto___10318]));

var G__10319 = (i__8239__auto___10318 + (1));
i__8239__auto___10318 = G__10319;
continue;
} else {
}
break;
}

var G__10316 = args10314.length;
switch (G__10316) {
case 1:
return obb_rules.game.state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.game.state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10314.length)].join('')));

}
});

obb_rules.game.state.cljs$core$IFn$_invoke$arity$1 = (function (game){
return (game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$state) : game.call(null,cljs.core.constant$keyword$state));
});

obb_rules.game.state.cljs$core$IFn$_invoke$arity$2 = (function (game,new_state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,cljs.core.constant$keyword$state,new_state);
});

obb_rules.game.state.cljs$lang$maxFixedArity = 2;
/**
 * Creates a game for a given stash
 */
obb_rules.game.create = (function obb_rules$game$create(stash){
var board = obb_rules.board.create_board.cljs$core$IFn$_invoke$arity$0();
var board1 = obb_rules.board.set_stash(board,cljs.core.constant$keyword$p1,stash);
var board2 = obb_rules.board.set_stash(board1,cljs.core.constant$keyword$p2,stash);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board2,cljs.core.constant$keyword$state,cljs.core.constant$keyword$deploy);
});
/**
 * Creates a game with random units
 */
obb_rules.game.random = (function obb_rules$game$random(){
var stash = obb_rules.stash.random();
return obb_rules.game.create(stash);
});
/**
 * Given a deployed board, starts the battle
 */
obb_rules.game.start_battle = (function obb_rules$game$start_battle(game){
if(cljs.core.truth_(obb_rules.game.deploy_QMARK_(game))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Game not in deploy state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"deploy?","deploy?",-547137015,null),new cljs.core.Symbol(null,"game","game",1199007694,null))], 0)))].join('')));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,cljs.core.constant$keyword$state,cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p1,cljs.core.constant$keyword$p2], null)));
});
/**
 * Provides the actions a results currently aplied on this game
 * if any.
 */
obb_rules.game.action_results = (function obb_rules$game$action_results(game){
return (game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$action_DASH_results) : game.call(null,cljs.core.constant$keyword$action_DASH_results));
});
/**
 * Stores an action's result
 */
obb_rules.game.push_result = (function obb_rules$game$push_result(game,raw_action,result){
var action_results = (function (){var or__7199__auto__ = obb_rules.game.action_results(game);
if(cljs.core.truth_(or__7199__auto__)){
return or__7199__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var new_results = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(action_results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_action,result], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,cljs.core.constant$keyword$action_DASH_results,new_results);
});
/**
 * Returns true if the actions currently applied to the given game
 * are all successful.
 */
obb_rules.game.valid_actions_QMARK_ = (function obb_rules$game$valid_actions_QMARK_(game){
return cljs.core.every_QMARK_((function (p1__10321_SHARP_){
return obb_rules.result.succeeded_QMARK_(cljs.core.last(p1__10321_SHARP_));
}),obb_rules.game.action_results(game));
});
