// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
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
var current_state = (game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$state) : game.call(null,cljs.core.cst$kw$state));
var or__6156__auto__ = (current_state == null);
if(or__6156__auto__){
return or__6156__auto__;
} else {
return obb_rules.simplifier.name_EQ_(state,current_state);
}
});
/**
 * True if in deploy state
 */
obb_rules.game.deploy_QMARK_ = (function obb_rules$game$deploy_QMARK_(game){
return obb_rules.game.state_QMARK_(game,cljs.core.cst$kw$deploy);
});
/**
 * True if the game has ended
 */
obb_rules.game.final_QMARK_ = (function obb_rules$game$final_QMARK_(game){
return obb_rules.game.state_QMARK_(game,cljs.core.cst$kw$final);
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
var or__6156__auto__ = (game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mode) : game.call(null,cljs.core.cst$kw$mode));
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core.cst$kw$default;
}
});
/**
 * Gets/Sets the current game's state
 */
obb_rules.game.state = (function obb_rules$game$state(var_args){
var args15006 = [];
var len__7214__auto___15009 = arguments.length;
var i__7215__auto___15010 = (0);
while(true){
if((i__7215__auto___15010 < len__7214__auto___15009)){
args15006.push((arguments[i__7215__auto___15010]));

var G__15011 = (i__7215__auto___15010 + (1));
i__7215__auto___15010 = G__15011;
continue;
} else {
}
break;
}

var G__15008 = args15006.length;
switch (G__15008) {
case 1:
return obb_rules.game.state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.game.state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15006.length)].join('')));

}
});

obb_rules.game.state.cljs$core$IFn$_invoke$arity$1 = (function (game){
return (game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$state) : game.call(null,cljs.core.cst$kw$state));
});

obb_rules.game.state.cljs$core$IFn$_invoke$arity$2 = (function (game,new_state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,cljs.core.cst$kw$state,new_state);
});

obb_rules.game.state.cljs$lang$maxFixedArity = 2;
/**
 * Creates a game for a given stash
 */
obb_rules.game.create = (function obb_rules$game$create(var_args){
var args15013 = [];
var len__7214__auto___15016 = arguments.length;
var i__7215__auto___15017 = (0);
while(true){
if((i__7215__auto___15017 < len__7214__auto___15016)){
args15013.push((arguments[i__7215__auto___15017]));

var G__15018 = (i__7215__auto___15017 + (1));
i__7215__auto___15017 = G__15018;
continue;
} else {
}
break;
}

var G__15015 = args15013.length;
switch (G__15015) {
case 1:
return obb_rules.game.create.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.game.create.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15013.length)].join('')));

}
});

obb_rules.game.create.cljs$core$IFn$_invoke$arity$1 = (function (stash){
return obb_rules.game.create.cljs$core$IFn$_invoke$arity$2(stash,stash);
});

obb_rules.game.create.cljs$core$IFn$_invoke$arity$2 = (function (stash1,stash2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(obb_rules.board.set_stash(obb_rules.board.set_stash(obb_rules.board.create_board.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$p1,stash1),cljs.core.cst$kw$p2,stash2),cljs.core.cst$kw$state,cljs.core.cst$kw$deploy);
});

obb_rules.game.create.cljs$lang$maxFixedArity = 2;
/**
 * Creates a game for the given stashes.
 *   stashes is an associative collection in which the keys correspond to the
 *   players and the values to the corresponding stash.
 */
obb_rules.game.new_game = (function obb_rules$game$new_game(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15027 = arguments.length;
var i__7215__auto___15028 = (0);
while(true){
if((i__7215__auto___15028 < len__7214__auto___15027)){
args__7221__auto__.push((arguments[i__7215__auto___15028]));

var G__15029 = (i__7215__auto___15028 + (1));
i__7215__auto___15028 = G__15029;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return obb_rules.game.new_game.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

obb_rules.game.new_game.cljs$core$IFn$_invoke$arity$variadic = (function (stashes,p__15022){
var vec__15023 = p__15022;
var map__15024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15023,(0),null);
var map__15024__$1 = ((((!((map__15024 == null)))?((((map__15024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15024):map__15024);
var options = map__15024__$1;
var args = vec__15023;
return obb_rules.game.state.cljs$core$IFn$_invoke$arity$2((function (){var G__15026 = cljs.core.reduce_kv(((function (vec__15023,map__15024,map__15024__$1,options,args){
return (function (board,player,stash){
return obb_rules.board.set_stash(board,player,stash);
});})(vec__15023,map__15024,map__15024__$1,options,args))
,obb_rules.board.create_board.cljs$core$IFn$_invoke$arity$0(),stashes);
if(cljs.core.some_QMARK_(cljs.core.cst$kw$terrain.cljs$core$IFn$_invoke$arity$1(options))){
return obb_rules.board.board_terrain.cljs$core$IFn$_invoke$arity$2(G__15026,cljs.core.cst$kw$terrain.cljs$core$IFn$_invoke$arity$1(options));
} else {
return G__15026;
}
})(),cljs.core.cst$kw$deploy);
});

obb_rules.game.new_game.cljs$lang$maxFixedArity = (1);

obb_rules.game.new_game.cljs$lang$applyTo = (function (seq15020){
var G__15021 = cljs.core.first(seq15020);
var seq15020__$1 = cljs.core.next(seq15020);
return obb_rules.game.new_game.cljs$core$IFn$_invoke$arity$variadic(G__15021,seq15020__$1);
});
/**
 * Creates a game with random units
 */
obb_rules.game.random = (function obb_rules$game$random(){
var stash = obb_rules.stash.random();
return obb_rules.game.create.cljs$core$IFn$_invoke$arity$1(stash);
});
/**
 * Given a deployed board, starts the battle
 */
obb_rules.game.start_battle = (function obb_rules$game$start_battle(var_args){
var args15030 = [];
var len__7214__auto___15033 = arguments.length;
var i__7215__auto___15034 = (0);
while(true){
if((i__7215__auto___15034 < len__7214__auto___15033)){
args15030.push((arguments[i__7215__auto___15034]));

var G__15035 = (i__7215__auto___15034 + (1));
i__7215__auto___15034 = G__15035;
continue;
} else {
}
break;
}

var G__15032 = args15030.length;
switch (G__15032) {
case 1:
return obb_rules.game.start_battle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.game.start_battle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15030.length)].join('')));

}
});

obb_rules.game.start_battle.cljs$core$IFn$_invoke$arity$1 = (function (game){
if(cljs.core.truth_(obb_rules.game.deploy_QMARK_(game))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Game not in deploy state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$deploy_QMARK_,cljs.core.cst$sym$game)], 0)))].join('')));
}

return obb_rules.game.start_battle.cljs$core$IFn$_invoke$arity$2(game,cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p1,cljs.core.cst$kw$p2], null)));
});

obb_rules.game.start_battle.cljs$core$IFn$_invoke$arity$2 = (function (game,first_player){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,cljs.core.cst$kw$state,first_player),cljs.core.cst$kw$first_DASH_player,first_player);
});

obb_rules.game.start_battle.cljs$lang$maxFixedArity = 2;
/**
 * Gets the player that started the game
 */
obb_rules.game.first_player = (function obb_rules$game$first_player(game){
return cljs.core.cst$kw$first_DASH_player.cljs$core$IFn$_invoke$arity$1(game);
});
/**
 * Provides the actions a results currently aplied on this game
 *   if any.
 */
obb_rules.game.action_results = (function obb_rules$game$action_results(game){
return (game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$action_DASH_results) : game.call(null,cljs.core.cst$kw$action_DASH_results));
});
/**
 * Stores an action's result
 */
obb_rules.game.push_result = (function obb_rules$game$push_result(game,raw_action,result){
var action_results = (function (){var or__6156__auto__ = obb_rules.game.action_results(game);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var result__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(result,cljs.core.cst$kw$board);
var new_results = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(action_results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_action,result__$1], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,cljs.core.cst$kw$action_DASH_results,new_results);
});
/**
 * Returns true if the actions currently applied to the given game
 *   are all successful.
 */
obb_rules.game.valid_actions_QMARK_ = (function obb_rules$game$valid_actions_QMARK_(game){
return cljs.core.every_QMARK_((function (p1__15037_SHARP_){
return obb_rules.result.succeeded_QMARK_(cljs.core.last(p1__15037_SHARP_));
}),obb_rules.game.action_results(game));
});
