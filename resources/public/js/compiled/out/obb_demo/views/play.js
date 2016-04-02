// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.views.play');
goog.require('cljs.core');
goog.require('obb_demo.processor');
goog.require('obb_rules.math');
goog.require('obb_rules.serializer.writer');
goog.require('obb_rules.evaluator');
goog.require('obb_rules.game_progress');
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
var game_data = cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(state);
var game = cljs.core.cst$kw$game.cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(game)){
return game_data;
} else {
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$3(game_data,cljs.core.cst$kw$game_DASH_options,obb_rules.game_progress.default_new_game_options);
var game__$1 = obb_demo.processor.deployed_game.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([options], 0));
var game_data__$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$game,game__$1,cljs.core.cst$kw$game_DASH_options,options], null);
obb_demo.state.set_page_data_BANG_(game_data__$1);

return game_data__$1;
}
});
/**
 * Generates and restarts a new game
 */
obb_demo.views.play.restart_game = (function obb_demo$views$play$restart_game(){
return obb_demo.state.set_page_data_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$game_DASH_options,obb_rules.game_progress.default_new_game_options], null));
});
/**
 * Generates and restarts a new game in supernova mode
 */
obb_demo.views.play.restart_game_supernova = (function obb_demo$views$play$restart_game_supernova(){
return obb_demo.state.set_page_data_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$game_DASH_options,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(obb_rules.game_progress.default_new_game_options,cljs.core.cst$kw$mode,cljs.core.cst$kw$supernova)], null));
});
/**
 * Sets the actions delay speed
 */
obb_demo.views.play.set_speed = (function obb_demo$views$play$set_speed(delay_msecs){
var game_data = obb_demo.state.get_page_data();
var current = (function (){var or__6210__auto__ = cljs.core.cst$kw$delay.cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return (100);
}
})();
var new_delay = (delay_msecs + current);
if((((1000) >= new_delay)) && ((new_delay >= (50)))){
return obb_demo.state.set_page_data_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_data,cljs.core.cst$kw$delay,new_delay));
} else {
return null;
}
});
/**
 * Shows the player
 */
obb_demo.views.play.selected_player = (function obb_demo$views$play$selected_player(current_player,expected){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_player,expected)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p1,current_player)){
return cljs.core.cst$kw$span$label$label_DASH_success;
} else {
return cljs.core.cst$kw$span$label$label_DASH_info;
}
} else {
return cljs.core.cst$kw$span$label$label_DASH_primary;
}
});
/**
 * Displays the players and the current to play
 */
obb_demo.views.play.players = (function obb_demo$views$play$players(game){
var player = obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.play.selected_player(player,cljs.core.cst$kw$p2),"Firingsquad"], null)," vs ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.play.selected_player(player,cljs.core.cst$kw$p1),"Firingsquad"], null)], null);
});
/**
 * Displays the current turn
 */
obb_demo.views.play.game_turn = (function obb_demo$views$play$game_turn(game_data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$nav$nav_DASH_pills,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,"Turn ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$badge,cljs.core.cst$kw$turn_DASH_num.cljs$core$IFn$_invoke$arity$1(game_data)], null)], null)], null)], null);
});
obb_demo.views.play.game_as_string = (function obb_demo$views$play$game_as_string(game_data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"10px"], null)], null),obb_rules.serializer.writer.game__GT_str(cljs.core.cst$kw$game.cljs$core$IFn$_invoke$arity$1(game_data))], null);
});
obb_demo.views.play.render = (function obb_demo$views$play$render(state){
var game_data = obb_demo.views.play.get_game_data(state);
var game = cljs.core.cst$kw$game.cljs$core$IFn$_invoke$arity$1(game_data);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_2,obb_demo.views.play.game_turn(game_data),obb_demo.views.play.players(game),obb_demo.views.power_bar.render(game)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_5,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.render,cljs.core.PersistentArrayMap.EMPTY,game_data], null),obb_demo.views.play.game_as_string(game_data)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$panel$panel_DASH_default,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$panel_DASH_heading,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$panel_DASH_title,"Options"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$panel_DASH_body,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,obb_demo.views.play.restart_game], null),"Restart (annihilation)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,obb_demo.views.play.restart_game_supernova], null),"Restart (supernova)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_demo.views.play.set_speed,(-100))], null),"More speed"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_demo.views.play.set_speed,(100))], null),"Less speed"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$well$well_DASH_sm,(function (){var or__6210__auto__ = cljs.core.cst$kw$delay.cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return (100);
}
})()," millis per action"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$panel$panel_DASH_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$panel_DASH_heading,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$panel_DASH_title,"Preview"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$panel_DASH_body,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.render,cljs.core.PersistentArrayMap.EMPTY,game_data], null)], null)], null)], null)], null);
});
