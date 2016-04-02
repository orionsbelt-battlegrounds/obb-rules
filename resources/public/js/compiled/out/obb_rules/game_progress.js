// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.game_progress');
goog.require('cljs.core');
goog.require('obb_rules.game_mode');
goog.require('obb_rules.board');
goog.require('obb_rules.player');
goog.require('obb_rules.game');
goog.require('obb_rules.stash');
obb_rules.game_progress.default_new_game_options = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mode,cljs.core.cst$kw$annihilation], null);
/**
 * Returns the options with the default values applied for the non-specified options
 */
obb_rules.game_progress.merge_new_game_defaults = (function obb_rules$game_progress$merge_new_game_defaults(options){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([obb_rules.game_progress.default_new_game_options,options], 0));
});
/**
 * Creates a game for the given stashes.
 * stashes is an associative collection in which the keys correspond to the
 * players and the values to the corresponding stash.
 */
obb_rules.game_progress.new_game = (function obb_rules$game_progress$new_game(var_args){
var args__7286__auto__ = [];
var len__7279__auto___15989 = arguments.length;
var i__7280__auto___15990 = (0);
while(true){
if((i__7280__auto___15990 < len__7279__auto___15989)){
args__7286__auto__.push((arguments[i__7280__auto___15990]));

var G__15991 = (i__7280__auto___15990 + (1));
i__7280__auto___15990 = G__15991;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return obb_rules.game_progress.new_game.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

obb_rules.game_progress.new_game.cljs$core$IFn$_invoke$arity$variadic = (function (stashes,p__15982){
var vec__15983 = p__15982;
var map__15984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15983,(0),null);
var map__15984__$1 = ((((!((map__15984 == null)))?((((map__15984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15984):map__15984);
var options = map__15984__$1;
var args = vec__15983;
var G__15987 = obb_rules.game.state.cljs$core$IFn$_invoke$arity$2(obb_rules.game.mode.cljs$core$IFn$_invoke$arity$2((function (){var G__15988 = cljs.core.reduce_kv(obb_rules.board.set_stash,obb_rules.board.create_board.cljs$core$IFn$_invoke$arity$0(),stashes);
if(cljs.core.some_QMARK_(cljs.core.cst$kw$terrain.cljs$core$IFn$_invoke$arity$1(options))){
return obb_rules.board.board_terrain.cljs$core$IFn$_invoke$arity$2(G__15988,cljs.core.cst$kw$terrain.cljs$core$IFn$_invoke$arity$1(options));
} else {
return G__15988;
}
})(),cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(obb_rules.game_progress.merge_new_game_defaults(options))),cljs.core.cst$kw$deploy);
return (obb_rules.game_mode.on_new_game.cljs$core$IFn$_invoke$arity$1 ? obb_rules.game_mode.on_new_game.cljs$core$IFn$_invoke$arity$1(G__15987) : obb_rules.game_mode.on_new_game.call(null,G__15987));
});

obb_rules.game_progress.new_game.cljs$lang$maxFixedArity = (1);

obb_rules.game_progress.new_game.cljs$lang$applyTo = (function (seq15980){
var G__15981 = cljs.core.first(seq15980);
var seq15980__$1 = cljs.core.next(seq15980);
return obb_rules.game_progress.new_game.cljs$core$IFn$_invoke$arity$variadic(G__15981,seq15980__$1);
});
/**
 * Creates a game with a random stash. The same stash is user for all players.
 */
obb_rules.game_progress.new_random_game = (function obb_rules$game_progress$new_random_game(var_args){
var args__7286__auto__ = [];
var len__7279__auto___15997 = arguments.length;
var i__7280__auto___15998 = (0);
while(true){
if((i__7280__auto___15998 < len__7279__auto___15997)){
args__7286__auto__.push((arguments[i__7280__auto___15998]));

var G__15999 = (i__7280__auto___15998 + (1));
i__7280__auto___15998 = G__15999;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((0) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((0)),(0),null)):null);
return obb_rules.game_progress.new_random_game.cljs$core$IFn$_invoke$arity$variadic(argseq__7287__auto__);
});

obb_rules.game_progress.new_random_game.cljs$core$IFn$_invoke$arity$variadic = (function (p__15993){
var vec__15994 = p__15993;
var map__15995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15994,(0),null);
var map__15995__$1 = ((((!((map__15995 == null)))?((((map__15995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15995):map__15995);
var options = map__15995__$1;
var args = vec__15994;
var stash = obb_rules.stash.random();
return obb_rules.game_progress.new_game.cljs$core$IFn$_invoke$arity$variadic(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (stash,vec__15994,map__15995,map__15995__$1,options,args){
return (function (assigned_stashes,player){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(assigned_stashes,player,stash);
});})(stash,vec__15994,map__15995,map__15995__$1,options,args))
,cljs.core.PersistentArrayMap.EMPTY,obb_rules.player.all_players),cljs.core.array_seq([options], 0));
});

obb_rules.game_progress.new_random_game.cljs$lang$maxFixedArity = (0);

obb_rules.game_progress.new_random_game.cljs$lang$applyTo = (function (seq15992){
return obb_rules.game_progress.new_random_game.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15992));
});
/**
 * True if it's on deploy and completed
 */
obb_rules.game_progress.deploy_completed_QMARK_ = (function obb_rules$game_progress$deploy_completed_QMARK_(game){
if(cljs.core.not(obb_rules.game.deploy_QMARK_(game))){
return game;
} else {
var stash1 = obb_rules.game.get_stash(game,cljs.core.cst$kw$p1);
var stash2 = obb_rules.game.get_stash(game,cljs.core.cst$kw$p2);
var and__6198__auto__ = obb_rules.stash.cleared_QMARK_(stash1);
if(cljs.core.truth_(and__6198__auto__)){
return obb_rules.stash.cleared_QMARK_(stash2);
} else {
return and__6198__auto__;
}
}
});
/**
 * Checks if the game is finished
 */
obb_rules.game_progress.end_game_QMARK_ = (function obb_rules$game_progress$end_game_QMARK_(game){
var and__6198__auto__ = cljs.core.not(obb_rules.game.deploy_QMARK_(game));
if(and__6198__auto__){
return obb_rules.game_mode.winner_QMARK_(game);
} else {
return and__6198__auto__;
}
});
/**
 * Changes a game to final state
 */
obb_rules.game_progress.end_game = (function obb_rules$game_progress$end_game(game){
return obb_rules.game.state.cljs$core$IFn$_invoke$arity$2(game,cljs.core.cst$kw$final);
});
/**
 * Starts the game
 */
obb_rules.game_progress.start_game = (function obb_rules$game_progress$start_game(game){
return obb_rules.game.start_battle.cljs$core$IFn$_invoke$arity$1(game);
});
/**
 * Checks if the game is in a state where a player switch should be done
 */
obb_rules.game_progress.switch_turn_player_QMARK_ = (function obb_rules$game_progress$switch_turn_player_QMARK_(game){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$p2,null,cljs.core.cst$kw$p1,null], null), null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$state) : game.call(null,cljs.core.cst$kw$state)))], null));
});
/**
 * Toggles the player to play
 */
obb_rules.game_progress.switch_turn_player = (function obb_rules$game_progress$switch_turn_player(game){
var current_player = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$state) : game.call(null,cljs.core.cst$kw$state)));
var next_player = cljs.core.first(cljs.core.disj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$p2,null,cljs.core.cst$kw$p1,null], null), null),current_player));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,cljs.core.cst$kw$state,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(next_player));
});
/**
 * Moves the game to the next stage based on the current conditions
 */
obb_rules.game_progress.next_stage = (function obb_rules$game_progress$next_stage(game){
if(cljs.core.truth_(obb_rules.game_progress.end_game_QMARK_(game))){
return obb_rules.game_progress.end_game(game);
} else {
if(cljs.core.truth_(obb_rules.game_progress.switch_turn_player_QMARK_(game))){
return obb_rules.game_progress.switch_turn_player(game);
} else {
if(cljs.core.truth_(obb_rules.game_progress.deploy_completed_QMARK_(game))){
return obb_rules.game_progress.start_game(game);
} else {
return game;

}
}
}
});
