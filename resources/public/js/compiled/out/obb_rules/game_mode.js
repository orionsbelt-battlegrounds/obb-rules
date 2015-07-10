// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_rules.game_mode');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.stash');
goog.require('obb_rules.game');
/**
 * True if it's on deploy and completed
 */
obb_rules.game_mode.deploy_completed_QMARK_ = (function obb_rules$game_mode$deploy_completed_QMARK_(game){
if(cljs.core.not.call(null,obb_rules.game.deploy_QMARK_.call(null,game))){
return game;
} else {
var stash1 = obb_rules.game.get_stash.call(null,game,new cljs.core.Keyword(null,"p1","p1",-936759954));
var stash2 = obb_rules.game.get_stash.call(null,game,new cljs.core.Keyword(null,"p2","p2",905500641));
var and__16097__auto__ = obb_rules.stash.cleared_QMARK_.call(null,stash1);
if(cljs.core.truth_(and__16097__auto__)){
return obb_rules.stash.cleared_QMARK_.call(null,stash2);
} else {
return and__16097__auto__;
}
}
});
/**
 * Checks if the game is finished
 */
obb_rules.game_mode.final_QMARK_ = (function obb_rules$game_mode$final_QMARK_(game){
var and__16097__auto__ = !(cljs.core._EQ_.call(null,cljs.core.keyword.call(null,obb_rules.game.state.call(null,game)),new cljs.core.Keyword(null,"deploy","deploy",-2006774212)));
if(and__16097__auto__){
var or__16109__auto__ = obb_rules.board.empty_board_QMARK_.call(null,game,new cljs.core.Keyword(null,"p1","p1",-936759954));
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return obb_rules.board.empty_board_QMARK_.call(null,game,new cljs.core.Keyword(null,"p2","p2",905500641));
}
} else {
return and__16097__auto__;
}
});
/**
 * Gets the winner of the given game
 */
obb_rules.game_mode.winner = (function obb_rules$game_mode$winner(game){
if(cljs.core.truth_(obb_rules.board.empty_board_QMARK_.call(null,game,new cljs.core.Keyword(null,"p1","p1",-936759954)))){
return new cljs.core.Keyword(null,"p2","p2",905500641);
} else {
if(cljs.core.truth_(obb_rules.board.empty_board_QMARK_.call(null,game,new cljs.core.Keyword(null,"p2","p2",905500641)))){
return new cljs.core.Keyword(null,"p1","p1",-936759954);
} else {
return new cljs.core.Keyword(null,"none","none",1333468478);

}
}
});
/**
 * Marks a game as final
 */
obb_rules.game_mode.finalize = (function obb_rules$game_mode$finalize(game){
return obb_rules.game.state.call(null,game,new cljs.core.Keyword(null,"final","final",1157881357));
});
/**
 * Starts the game
 */
obb_rules.game_mode.start_game = (function obb_rules$game_mode$start_game(game){
return obb_rules.game.start_battle.call(null,game);
});
/**
 * Checks if the game is in a state where a player switch should be done
 */
obb_rules.game_mode.switch_turn_player_QMARK_ = (function obb_rules$game_mode$switch_turn_player_QMARK_(game){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p2","p2",905500641),null,new cljs.core.Keyword(null,"p1","p1",-936759954),null], null), null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,game.call(null,new cljs.core.Keyword(null,"state","state",-1988618099)))], null));
});
/**
 * Toggles the player to play
 */
obb_rules.game_mode.switch_turn_player = (function obb_rules$game_mode$switch_turn_player(game){
var current_player = cljs.core.keyword.call(null,game.call(null,new cljs.core.Keyword(null,"state","state",-1988618099)));
var next_player = cljs.core.first.call(null,cljs.core.disj.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p2","p2",905500641),null,new cljs.core.Keyword(null,"p1","p1",-936759954),null], null), null),current_player));
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.keyword.call(null,next_player));
});
/**
 * Checks the current game's state and acts based on it
 */
obb_rules.game_mode.process = (function obb_rules$game_mode$process(game){
if(cljs.core.truth_(obb_rules.game_mode.final_QMARK_.call(null,game))){
return obb_rules.game_mode.finalize.call(null,game);
} else {
if(cljs.core.truth_(obb_rules.game_mode.switch_turn_player_QMARK_.call(null,game))){
return obb_rules.game_mode.switch_turn_player.call(null,game);
} else {
if(cljs.core.truth_(obb_rules.game_mode.deploy_completed_QMARK_.call(null,game))){
return obb_rules.game_mode.start_game.call(null,game);
} else {
return game;

}
}
}
});

//# sourceMappingURL=game_mode.js.map?rel=1436517557617