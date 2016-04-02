// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.game');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.player');
goog.require('obb_rules.simplifier');
goog.require('obb_rules.result');
goog.require('obb_rules.host_dependent');
goog.require('obb_rules.stash');
obb_rules.game.version = "3.0.0";
obb_rules.game.available_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$supernova,null,cljs.core.cst$kw$annihilation,null], null), null);
/**
 * Checks if the game is in a given state
 */
obb_rules.game.state_QMARK_ = (function obb_rules$game$state_QMARK_(game,state){
var current_state = (game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$state) : game.call(null,cljs.core.cst$kw$state));
var or__6210__auto__ = (current_state == null);
if(or__6210__auto__){
return or__6210__auto__;
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
 * Gets/Sets the current game's state
 */
obb_rules.game.state = (function obb_rules$game$state(var_args){
var args15428 = [];
var len__7279__auto___15431 = arguments.length;
var i__7280__auto___15432 = (0);
while(true){
if((i__7280__auto___15432 < len__7279__auto___15431)){
args15428.push((arguments[i__7280__auto___15432]));

var G__15433 = (i__7280__auto___15432 + (1));
i__7280__auto___15432 = G__15433;
continue;
} else {
}
break;
}

var G__15430 = args15428.length;
switch (G__15430) {
case 1:
return obb_rules.game.state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.game.state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15428.length)].join('')));

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
 * Checks if the given mode is one of the supported modes
 */
obb_rules.game.valid_mode_QMARK_ = (function obb_rules$game$valid_mode_QMARK_(mode){
return cljs.core.contains_QMARK_(obb_rules.game.available_modes,mode);
});
/**
 * Gets or sets the game mode
 */
obb_rules.game.mode = (function obb_rules$game$mode(var_args){
var args15435 = [];
var len__7279__auto___15438 = arguments.length;
var i__7280__auto___15439 = (0);
while(true){
if((i__7280__auto___15439 < len__7279__auto___15438)){
args15435.push((arguments[i__7280__auto___15439]));

var G__15440 = (i__7280__auto___15439 + (1));
i__7280__auto___15439 = G__15440;
continue;
} else {
}
break;
}

var G__15437 = args15435.length;
switch (G__15437) {
case 1:
return obb_rules.game.mode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.game.mode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15435.length)].join('')));

}
});

obb_rules.game.mode.cljs$core$IFn$_invoke$arity$1 = (function (game){
return cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(game);
});

obb_rules.game.mode.cljs$core$IFn$_invoke$arity$2 = (function (game,mode){
if(cljs.core.truth_(obb_rules.game.valid_mode_QMARK_(mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown mode"),cljs.core.str("\n"),cljs.core.str("(valid-mode? mode)")].join('')));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,cljs.core.cst$kw$mode,mode);
});

obb_rules.game.mode.cljs$lang$maxFixedArity = 2;
/**
 * Given a deployed board, starts the battle
 */
obb_rules.game.start_battle = (function obb_rules$game$start_battle(var_args){
var args15442 = [];
var len__7279__auto___15445 = arguments.length;
var i__7280__auto___15446 = (0);
while(true){
if((i__7280__auto___15446 < len__7279__auto___15445)){
args15442.push((arguments[i__7280__auto___15446]));

var G__15447 = (i__7280__auto___15446 + (1));
i__7280__auto___15446 = G__15447;
continue;
} else {
}
break;
}

var G__15444 = args15442.length;
switch (G__15444) {
case 1:
return obb_rules.game.start_battle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.game.start_battle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15442.length)].join('')));

}
});

obb_rules.game.start_battle.cljs$core$IFn$_invoke$arity$1 = (function (game){
if(cljs.core.truth_(obb_rules.game.deploy_QMARK_(game))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Game not in deploy state"),cljs.core.str("\n"),cljs.core.str("(deploy? game)")].join('')));
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
 * Provides the actions results currently applied on this game
 *   if any.
 */
obb_rules.game.action_results = (function obb_rules$game$action_results(game){
return (game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$action_DASH_results) : game.call(null,cljs.core.cst$kw$action_DASH_results));
});
/**
 * Stores an action's result
 */
obb_rules.game.push_result = (function obb_rules$game$push_result(game,raw_action,result){
var action_results = (function (){var or__6210__auto__ = obb_rules.game.action_results(game);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
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
return cljs.core.every_QMARK_((function (p1__15449_SHARP_){
return obb_rules.result.succeeded_QMARK_(cljs.core.last(p1__15449_SHARP_));
}),obb_rules.game.action_results(game));
});
/**
 * Updates the specified player's stash by applying f to the stash and the given args
 */
obb_rules.game.update_stash = (function obb_rules$game$update_stash(var_args){
var args__7286__auto__ = [];
var len__7279__auto___15454 = arguments.length;
var i__7280__auto___15455 = (0);
while(true){
if((i__7280__auto___15455 < len__7279__auto___15454)){
args__7286__auto__.push((arguments[i__7280__auto___15455]));

var G__15456 = (i__7280__auto___15455 + (1));
i__7280__auto___15455 = G__15456;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((3) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((3)),(0),null)):null);
return obb_rules.game.update_stash.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7287__auto__);
});

obb_rules.game.update_stash.cljs$core$IFn$_invoke$arity$variadic = (function (game,player,f,f_args){
var stash = obb_rules.board.get_stash(game,player);
return obb_rules.board.set_stash(game,player,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,stash,f_args));
});

obb_rules.game.update_stash.cljs$lang$maxFixedArity = (3);

obb_rules.game.update_stash.cljs$lang$applyTo = (function (seq15450){
var G__15451 = cljs.core.first(seq15450);
var seq15450__$1 = cljs.core.next(seq15450);
var G__15452 = cljs.core.first(seq15450__$1);
var seq15450__$2 = cljs.core.next(seq15450__$1);
var G__15453 = cljs.core.first(seq15450__$2);
var seq15450__$3 = cljs.core.next(seq15450__$2);
return obb_rules.game.update_stash.cljs$core$IFn$_invoke$arity$variadic(G__15451,G__15452,G__15453,seq15450__$3);
});
