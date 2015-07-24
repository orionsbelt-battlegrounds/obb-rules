// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.views.play');
goog.require('cljs.core');
goog.require('obb_demo.processor');
goog.require('obb_rules.math');
goog.require('obb_rules.evaluator');
goog.require('obb_demo.boardground');
goog.require('obb_rules.result');
goog.require('obb_rules.game');
goog.require('obb_rules.turn');
goog.require('obb_demo.state');
goog.require('obb_rules.stash');
goog.require('obb_demo.views.power_bar');
/**
 * Prepare the game before deploying
 */
obb_demo.views.play.tune_up = (function obb_demo$views$play$tune_up(game){
return game;
});
/**
 * Gets the current game or creates a new one
 */
obb_demo.views.play.get_game_data = (function obb_demo$views$play$get_game_data(state){
var temp__4423__auto__ = cljs.core.constant$keyword$index.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__4423__auto__)){
var game = temp__4423__auto__;
return game;
} else {
var game = obb_demo.processor.deployed_game();
var game_data = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$game,game], null);
obb_demo.state.set_page_data_BANG_(game_data);

return game_data;
}
});
/**
 * Generates and restarts a new game
 */
obb_demo.views.play.restart_game = (function obb_demo$views$play$restart_game(){
return obb_demo.state.set_page_data_BANG_(null);
});
/**
 * Sets the actions delay speed
 */
obb_demo.views.play.set_speed = (function obb_demo$views$play$set_speed(delay_msecs){
var game_data = obb_demo.state.get_page_data();
var current = (function (){var or__6810__auto__ = cljs.core.constant$keyword$delay.cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(or__6810__auto__)){
return or__6810__auto__;
} else {
return (100);
}
})();
var new_delay = (delay_msecs + current);
if((((1000) >= new_delay)) && ((new_delay >= (50)))){
return obb_demo.state.set_page_data_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_data,cljs.core.constant$keyword$delay,new_delay));
} else {
return null;
}
});
/**
 * Shows the player
 */
obb_demo.views.play.selected_player = (function obb_demo$views$play$selected_player(current_player,expected){
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
obb_demo.views.play.players = (function obb_demo$views$play$players(game){
var player = obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.play.selected_player(player,cljs.core.constant$keyword$p2),"Player 2"], null)," vs ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.play.selected_player(player,cljs.core.constant$keyword$p1),"Player 1"], null)], null);
});
/**
 * Displays the current turn
 */
obb_demo.views.play.game_turn = (function obb_demo$views$play$game_turn(game_data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ul$nav$nav_DASH_pills,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$margin_DASH_bottom,"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,"Turn ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$badge,cljs.core.constant$keyword$turn_DASH_num.cljs$core$IFn$_invoke$arity$1(game_data)], null)], null)], null)], null);
});
obb_demo.views.play.render = (function obb_demo$views$play$render(state){
var game_data = obb_demo.views.play.get_game_data(state);
var game = cljs.core.constant$keyword$game.cljs$core$IFn$_invoke$arity$1(game_data);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_lg_DASH_2,obb_demo.views.play.game_turn(game_data),obb_demo.views.play.players(game),obb_demo.views.power_bar.render(game)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_lg_DASH_5,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.render,cljs.core.PersistentArrayMap.EMPTY,game_data], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_lg_DASH_2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel$panel_DASH_default,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel_DASH_heading,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h3$panel_DASH_title,"Options"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel_DASH_body,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$button$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$on_DASH_click,obb_demo.views.play.restart_game], null),"Restart game"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$button$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_demo.views.play.set_speed,(-100))], null),"More speed"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$button$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_demo.views.play.set_speed,(100))], null),"Less speed"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$well$well_DASH_sm,(function (){var or__6810__auto__ = cljs.core.constant$keyword$delay.cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(or__6810__auto__)){
return or__6810__auto__;
} else {
return (100);
}
})()," millis per action"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel$panel_DASH_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel_DASH_heading,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h3$panel_DASH_title,"Preview"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel_DASH_body,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.render,cljs.core.PersistentArrayMap.EMPTY,game_data], null)], null)], null)], null)], null);
});