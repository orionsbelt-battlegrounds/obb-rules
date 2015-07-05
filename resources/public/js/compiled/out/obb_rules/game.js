// Compiled by ClojureScript 0.0-3308 {}
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
var current_state = game.call(null,new cljs.core.Keyword(null,"state","state",-1988618099));
var or__16109__auto__ = (current_state == null);
if(or__16109__auto__){
return or__16109__auto__;
} else {
return obb_rules.simplifier.name_EQ_.call(null,state,current_state);
}
});
/**
 * True if in deploy state
 */
obb_rules.game.deploy_QMARK_ = (function obb_rules$game$deploy_QMARK_(game){
return obb_rules.game.state_QMARK_.call(null,game,new cljs.core.Keyword(null,"deploy","deploy",-2006774212));
});
/**
 * True if player's state
 */
obb_rules.game.player_turn_QMARK_ = (function obb_rules$game$player_turn_QMARK_(game,player){
return obb_rules.game.state_QMARK_.call(null,game,player);
});
/**
 * Gets the player's stash
 */
obb_rules.game.get_stash = (function obb_rules$game$get_stash(game,player){
return obb_rules.board.get_stash.call(null,game,player);
});
/**
 * Gets the game mode
 */
obb_rules.game.mode = (function obb_rules$game$mode(game){
var or__16109__auto__ = game.call(null,new cljs.core.Keyword(null,"mode","mode",654403691));
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
});
/**
 * Gets/Sets the current game's state
 */
obb_rules.game.state = (function obb_rules$game$state(){
var G__23170 = arguments.length;
switch (G__23170) {
case 1:
return obb_rules.game.state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.game.state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

obb_rules.game.state.cljs$core$IFn$_invoke$arity$1 = (function (game){
return game.call(null,new cljs.core.Keyword(null,"state","state",-1988618099));
});

obb_rules.game.state.cljs$core$IFn$_invoke$arity$2 = (function (game,new_state){
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"state","state",-1988618099),new_state);
});

obb_rules.game.state.cljs$lang$maxFixedArity = 2;
/**
 * Creates a game for a given stash
 */
obb_rules.game.create = (function obb_rules$game$create(stash){
var board = obb_rules.board.create_board.call(null);
var board1 = obb_rules.board.set_stash.call(null,board,new cljs.core.Keyword(null,"p1","p1",-936759954),stash);
var board2 = obb_rules.board.set_stash.call(null,board1,new cljs.core.Keyword(null,"p2","p2",905500641),stash);
return cljs.core.assoc.call(null,board2,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"deploy","deploy",-2006774212));
});
/**
 * Creates a game with random units
 */
obb_rules.game.random = (function obb_rules$game$random(){
var stash = obb_rules.stash.random.call(null);
return obb_rules.game.create.call(null,stash);
});
/**
 * Given a deployed board, starts the battle
 */
obb_rules.game.start_battle = (function obb_rules$game$start_battle(game){
if(cljs.core.truth_(obb_rules.game.deploy_QMARK_.call(null,game))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Game not in deploy state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"deploy?","deploy?",-547137015,null),new cljs.core.Symbol(null,"game","game",1199007694,null))))].join('')));
}

return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.Keyword(null,"p2","p2",905500641)], null)));
});
/**
 * Provides the actions a results currently aplied on this game
 * if any.
 */
obb_rules.game.action_results = (function obb_rules$game$action_results(game){
return game.call(null,new cljs.core.Keyword(null,"action-results","action-results",-389719209));
});
/**
 * Stores an action's result
 */
obb_rules.game.push_result = (function obb_rules$game$push_result(game,raw_action,result){
var action_results = (function (){var or__16109__auto__ = obb_rules.game.action_results.call(null,game);
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var new_results = cljs.core.conj.call(null,action_results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_action,result], null));
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"action-results","action-results",-389719209),new_results);
});
/**
 * Returns true if the actions currently applied to the given game
 * are all successful.
 */
obb_rules.game.valid_actions_QMARK_ = (function obb_rules$game$valid_actions_QMARK_(game){
return cljs.core.every_QMARK_.call(null,(function (p1__23172_SHARP_){
return obb_rules.result.succeeded_QMARK_.call(null,cljs.core.last.call(null,p1__23172_SHARP_));
}),obb_rules.game.action_results.call(null,game));
});

//# sourceMappingURL=game.js.map?rel=1436104824306