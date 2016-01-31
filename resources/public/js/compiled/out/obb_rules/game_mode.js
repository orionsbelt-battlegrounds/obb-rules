// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.game_mode');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.stash');
goog.require('obb_rules.game');
/**
 * True if it's on deploy and completed
 */
obb_rules.game_mode.deploy_completed_QMARK_ = (function obb_rules$game_mode$deploy_completed_QMARK_(game){
if(cljs.core.not(obb_rules.game.deploy_QMARK_(game))){
return game;
} else {
var stash1 = obb_rules.game.get_stash(game,cljs.core.cst$kw$p1);
var stash2 = obb_rules.game.get_stash(game,cljs.core.cst$kw$p2);
var and__6144__auto__ = obb_rules.stash.cleared_QMARK_(stash1);
if(cljs.core.truth_(and__6144__auto__)){
return obb_rules.stash.cleared_QMARK_(stash2);
} else {
return and__6144__auto__;
}
}
});
/**
 * Checks if the game is finished
 */
obb_rules.game_mode.final_QMARK_ = (function obb_rules$game_mode$final_QMARK_(game){
var and__6144__auto__ = !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game)),cljs.core.cst$kw$deploy));
if(and__6144__auto__){
var or__6156__auto__ = obb_rules.board.empty_board_QMARK_.cljs$core$IFn$_invoke$arity$2(game,cljs.core.cst$kw$p1);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return obb_rules.board.empty_board_QMARK_.cljs$core$IFn$_invoke$arity$2(game,cljs.core.cst$kw$p2);
}
} else {
return and__6144__auto__;
}
});
/**
 * Gets the winner of the given game
 */
obb_rules.game_mode.winner = (function obb_rules$game_mode$winner(game){
if(cljs.core.truth_(obb_rules.board.empty_board_QMARK_.cljs$core$IFn$_invoke$arity$2(game,cljs.core.cst$kw$p1))){
return cljs.core.cst$kw$p2;
} else {
if(cljs.core.truth_(obb_rules.board.empty_board_QMARK_.cljs$core$IFn$_invoke$arity$2(game,cljs.core.cst$kw$p2))){
return cljs.core.cst$kw$p1;
} else {
return cljs.core.cst$kw$none;

}
}
});
/**
 * Marks a game as final
 */
obb_rules.game_mode.finalize = (function obb_rules$game_mode$finalize(game){
return obb_rules.game.state.cljs$core$IFn$_invoke$arity$2(game,cljs.core.cst$kw$final);
});
/**
 * Starts the game
 */
obb_rules.game_mode.start_game = (function obb_rules$game_mode$start_game(game){
return obb_rules.game.start_battle(game);
});
/**
 * Checks if the game is in a state where a player switch should be done
 */
obb_rules.game_mode.switch_turn_player_QMARK_ = (function obb_rules$game_mode$switch_turn_player_QMARK_(game){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$p2,null,cljs.core.cst$kw$p1,null], null), null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$state) : game.call(null,cljs.core.cst$kw$state)))], null));
});
/**
 * Toggles the player to play
 */
obb_rules.game_mode.switch_turn_player = (function obb_rules$game_mode$switch_turn_player(game){
var current_player = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$state) : game.call(null,cljs.core.cst$kw$state)));
var next_player = cljs.core.first(cljs.core.disj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$p2,null,cljs.core.cst$kw$p1,null], null), null),current_player));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,cljs.core.cst$kw$state,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(next_player));
});
/**
 * Checks the current game's state and acts based on it
 */
obb_rules.game_mode.process = (function obb_rules$game_mode$process(game){
if(cljs.core.truth_(obb_rules.game_mode.final_QMARK_(game))){
return obb_rules.game_mode.finalize(game);
} else {
if(cljs.core.truth_(obb_rules.game_mode.switch_turn_player_QMARK_(game))){
return obb_rules.game_mode.switch_turn_player(game);
} else {
if(cljs.core.truth_(obb_rules.game_mode.deploy_completed_QMARK_(game))){
return obb_rules.game_mode.start_game(game);
} else {
return game;

}
}
}
});
