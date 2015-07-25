// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.views.player');
goog.require('cljs.core');
goog.require('obb_rules.game_mode');
goog.require('obb_demo.processor');
goog.require('obb_rules.math');
goog.require('obb_rules.evaluator');
goog.require('obb_demo.boardground');
goog.require('obb_rules.result');
goog.require('obb_rules.ai.firingsquad');
goog.require('obb_rules.game');
goog.require('obb_rules.turn');
goog.require('obb_demo.state');
goog.require('obb_rules.stash');
goog.require('obb_rules.laws');
goog.require('obb_demo.views.power_bar');
/**
 * Gets the current game or creates a new one
 */
obb_demo.views.player.get_game_data = (function obb_demo$views$player$get_game_data(state){
var temp__4423__auto__ = cljs.core.constant$keyword$player.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__4423__auto__)){
var game = temp__4423__auto__;
return game;
} else {
var game = obb_rules.game.state.cljs$core$IFn$_invoke$arity$2(obb_demo.processor.deployed_game(),cljs.core.constant$keyword$p1);
var game_data = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$game,game,cljs.core.constant$keyword$original_DASH_game,game,cljs.core.constant$keyword$action_DASH_points,(0),cljs.core.constant$keyword$turn_DASH_num,(0)], null);
obb_demo.state.set_page_data_BANG_(game_data);

return game_data;
}
});
/**
 * Generates and restarts a new game
 */
obb_demo.views.player.restart_game = (function obb_demo$views$player$restart_game(){
return obb_demo.state.set_page_data_BANG_(null);
});
/**
 * Shows the player
 */
obb_demo.views.player.selected_player = (function obb_demo$views$player$selected_player(current_player,expected){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_player,expected)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$p1,current_player)){
return cljs.core.constant$keyword$span$label$label_DASH_success;
} else {
return cljs.core.constant$keyword$span$label$label_DASH_info;
}
} else {
return cljs.core.constant$keyword$span$label$label_DASH_primary;
}
});
/**
 * Displays the players and the current to play
 */
obb_demo.views.player.players = (function obb_demo$views$player$players(game){
var player = obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.player.selected_player(player,cljs.core.constant$keyword$p2),"Firingsquad"], null)," vs ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.player.selected_player(player,cljs.core.constant$keyword$p1),"Player 1"], null)], null);
});
/**
 * Displays the current turn
 */
obb_demo.views.player.game_turn = (function obb_demo$views$player$game_turn(game_data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ul$nav$nav_DASH_pills,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$margin_DASH_bottom,"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,"Turn ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$badge,cljs.core.constant$keyword$turn_DASH_num.cljs$core$IFn$_invoke$arity$1(game_data)], null)], null)], null)], null);
});
/**
 * Displays the current turn
 */
obb_demo.views.player.action_points = (function obb_demo$views$player$action_points(game_data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ul$nav$nav_DASH_pills,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$margin_DASH_bottom,"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,"Action Points ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$badge,(obb_rules.laws.max_action_points - cljs.core.constant$keyword$action_DASH_points.cljs$core$IFn$_invoke$arity$1(game_data))], null)], null)], null)], null);
});
/**
 * Resets the actions on the current turn
 */
obb_demo.views.player.reset_turn = (function obb_demo$views$player$reset_turn(game_data){
return obb_demo.state.set_page_data_BANG_(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$game,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$original_DASH_game.cljs$core$IFn$_invoke$arity$1(game_data),cljs.core.constant$keyword$action_DASH_results),cljs.core.constant$keyword$original_DASH_game,cljs.core.constant$keyword$original_DASH_game.cljs$core$IFn$_invoke$arity$1(game_data),cljs.core.constant$keyword$previous_DASH_game,cljs.core.constant$keyword$original_DASH_game.cljs$core$IFn$_invoke$arity$1(game_data),cljs.core.constant$keyword$previous_DASH_player,cljs.core.constant$keyword$p2,cljs.core.constant$keyword$action_DASH_points,(0),cljs.core.constant$keyword$turn_DASH_num,(0)], null));
});
/**
 * Resets the actions on the current turn
 */
obb_demo.views.player.play_turn = (function obb_demo$views$player$play_turn(game_data){
var player = cljs.core.constant$keyword$p1;
var game = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(obb_rules.game_mode.process(cljs.core.constant$keyword$game.cljs$core$IFn$_invoke$arity$1(game_data)),cljs.core.constant$keyword$action_DASH_results);
var actions = (function (){var G__13516 = game;
var G__13517 = cljs.core.constant$keyword$p2;
return (obb_rules.ai.firingsquad.actions.cljs$core$IFn$_invoke$arity$2 ? obb_rules.ai.firingsquad.actions.cljs$core$IFn$_invoke$arity$2(G__13516,G__13517) : obb_rules.ai.firingsquad.actions.call(null,G__13516,G__13517));
})();
var result = obb_rules.turn.process_actions(game,cljs.core.constant$keyword$p2,actions);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([actions], 0));

if(cljs.core.truth_(obb_rules.result.succeeded_QMARK_(result))){
var new_game = obb_rules.result.result_board(result);
var clean_game = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_game,cljs.core.constant$keyword$action_DASH_results);
return obb_demo.state.set_page_data_BANG_(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$game,clean_game,cljs.core.constant$keyword$original_DASH_game,new_game,cljs.core.constant$keyword$previous_DASH_game,new_game,cljs.core.constant$keyword$previous_DASH_player,cljs.core.constant$keyword$p2,cljs.core.constant$keyword$action_DASH_points,(0),cljs.core.constant$keyword$turn_DASH_num,(0)], null));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([result], 0));
}
});
obb_demo.views.player.render = (function obb_demo$views$player$render(state){
var game_data = obb_demo.views.player.get_game_data(state);
var game = cljs.core.constant$keyword$game.cljs$core$IFn$_invoke$arity$1(game_data);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_lg_DASH_2,obb_demo.views.player.game_turn(game_data),obb_demo.views.player.players(game),obb_demo.views.power_bar.render(game),obb_demo.views.player.action_points(game_data),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$button$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_demo.views.player.play_turn,game_data)], null),"Play turn"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$button$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_demo.views.player.reset_turn,game_data)], null),"Reset turn"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_lg_DASH_5,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.render,cljs.core.PersistentArrayMap.EMPTY,game_data], null)], null)], null);
});
