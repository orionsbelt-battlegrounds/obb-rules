// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.views.player');
goog.require('cljs.core');
goog.require('obb_rules.game_mode');
goog.require('obb_demo.processor');
goog.require('obb_rules.math');
goog.require('obb_rules.ai.alamo');
goog.require('obb_rules.evaluator');
goog.require('obb_rules.simplifier');
goog.require('obb_rules.element');
goog.require('obb_demo.boardground');
goog.require('obb_rules.result');
goog.require('obb_rules.ai.firingsquad');
goog.require('obb_rules.unit');
goog.require('obb_rules.actions.move');
goog.require('obb_rules.game');
goog.require('obb_rules.turn');
goog.require('obb_demo.state');
goog.require('obb_rules.host_dependent');
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
obb_demo.views.player.players = (function obb_demo$views$player$players(game_data,game){
var player = obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.player.selected_player(player,cljs.core.constant$keyword$p2),(function (){var or__6936__auto__ = cljs.core.constant$keyword$bot.cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(or__6936__auto__)){
return or__6936__auto__;
} else {
return "Firingsquad";
}
})()], null)," vs ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.player.selected_player(player,cljs.core.constant$keyword$p1),"Player 1"], null)], null);
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
 * Rotates the selected element
 */
obb_demo.views.player.rotate_selected = (function obb_demo$views$player$rotate_selected(game_data,direction){
var game = cljs.core.constant$keyword$game.cljs$core$IFn$_invoke$arity$1(game_data);
var selected_coord = cljs.core.constant$keyword$selected_DASH_coord.cljs$core$IFn$_invoke$arity$1(game_data);
var player = obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$selected_DASH_element.cljs$core$IFn$_invoke$arity$1(game_data));
var action = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$rotate,selected_coord,direction], null);
return obb_demo.boardground.register_action(game_data,game,player,action,selected_coord);
});
/**
 * Resets the actions on the current turn
 */
obb_demo.views.player.reset_turn = (function obb_demo$views$player$reset_turn(game_data){
return obb_demo.state.set_page_data_BANG_(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$game,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$original_DASH_game.cljs$core$IFn$_invoke$arity$1(game_data),cljs.core.constant$keyword$action_DASH_results),cljs.core.constant$keyword$removed_DASH_elements),cljs.core.constant$keyword$original_DASH_game,cljs.core.constant$keyword$original_DASH_game.cljs$core$IFn$_invoke$arity$1(game_data),cljs.core.constant$keyword$previous_DASH_game,cljs.core.constant$keyword$original_DASH_game.cljs$core$IFn$_invoke$arity$1(game_data),cljs.core.constant$keyword$previous_DASH_player,cljs.core.constant$keyword$p2,cljs.core.constant$keyword$bot,cljs.core.constant$keyword$bot.cljs$core$IFn$_invoke$arity$1(game_data),cljs.core.constant$keyword$action_DASH_points,(0),cljs.core.constant$keyword$turn_DASH_num,(0)], null));
});
obb_demo.views.player.bot_turn = (function obb_demo$views$player$bot_turn(game_data,game){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Alamo",cljs.core.constant$keyword$bot.cljs$core$IFn$_invoke$arity$1(game_data))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Alamo"], 0));

var G__13646 = game;
var G__13647 = cljs.core.constant$keyword$p2;
return (obb_rules.ai.alamo.actions.cljs$core$IFn$_invoke$arity$2 ? obb_rules.ai.alamo.actions.cljs$core$IFn$_invoke$arity$2(G__13646,G__13647) : obb_rules.ai.alamo.actions.call(null,G__13646,G__13647));
} else {
var G__13648 = game;
var G__13649 = cljs.core.constant$keyword$p2;
return (obb_rules.ai.firingsquad.actions.cljs$core$IFn$_invoke$arity$2 ? obb_rules.ai.firingsquad.actions.cljs$core$IFn$_invoke$arity$2(G__13648,G__13649) : obb_rules.ai.firingsquad.actions.call(null,G__13648,G__13649));
}
});
/**
 * Resets the actions on the current turn
 */
obb_demo.views.player.play_turn = (function obb_demo$views$player$play_turn(game_data){
var player = cljs.core.constant$keyword$p1;
var game = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(obb_rules.game_mode.process(cljs.core.constant$keyword$game.cljs$core$IFn$_invoke$arity$1(game_data)),cljs.core.constant$keyword$action_DASH_results);
var turn_num = cljs.core.constant$keyword$turn_DASH_num.cljs$core$IFn$_invoke$arity$1(game_data);
var actions = (function (){var start__7846__auto__ = (new Date()).getTime();
var ret__7847__auto__ = obb_demo.views.player.bot_turn(game_data,game);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Elapsed time: "),cljs.core.str(((new Date()).getTime() - start__7846__auto__)),cljs.core.str(" msecs")].join('')], 0));

return ret__7847__auto__;
})();
var result = obb_rules.turn.process_actions(game,cljs.core.constant$keyword$p2,actions);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([actions], 0));

if(cljs.core.truth_(obb_rules.result.succeeded_QMARK_(result))){
var new_game = obb_rules.result.result_board(result);
var clean_game = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_game,cljs.core.constant$keyword$action_DASH_results);
return obb_demo.state.set_page_data_BANG_(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$game,clean_game,cljs.core.constant$keyword$original_DASH_game,new_game,cljs.core.constant$keyword$previous_DASH_game,new_game,cljs.core.constant$keyword$previous_DASH_player,cljs.core.constant$keyword$p2,cljs.core.constant$keyword$bot,cljs.core.constant$keyword$bot.cljs$core$IFn$_invoke$arity$1(game_data),cljs.core.constant$keyword$action_DASH_points,(0),cljs.core.constant$keyword$turn_DASH_num,((1) + turn_num)], null));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([result], 0));
}
});
/**
 * Rotate button display
 */
obb_demo.views.player.rotate_button = (function obb_demo$views$player$rotate_button(game_data,direction){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$button$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$disabled,cljs.core.not(cljs.core.constant$keyword$selected_DASH_element.cljs$core$IFn$_invoke$arity$1(game_data)),cljs.core.constant$keyword$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(obb_demo.views.player.rotate_selected,game_data,direction)], null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.name(direction),(0))], null);
});
/**
 * Gets the quantity of the selected element, or 0 it no element is
 * selected
 */
obb_demo.views.player.selected_element_quantity = (function obb_demo$views$player$selected_element_quantity(game_data){
var temp__4423__auto__ = cljs.core.constant$keyword$selected_DASH_element.cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(temp__4423__auto__)){
var element = temp__4423__auto__;
return obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1(element);
} else {
return (0);
}
});
/**
 * Parses the quantity on the given event
 */
obb_demo.views.player.parse_ev_quantity = (function obb_demo$views$player$parse_ev_quantity(ev){
var raw_quantity = ev.target.value;
if(cljs.core.empty_QMARK_(raw_quantity)){
return "0";
} else {
return raw_quantity;
}
});
/**
 * Runs when the quantity changes
 */
obb_demo.views.player.quantity_changed = (function obb_demo$views$player$quantity_changed(game_data,ev){
var total_quantity = obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$selected_DASH_element.cljs$core$IFn$_invoke$arity$1(game_data));
var quantity = obb_demo.views.player.parse_ev_quantity(ev);
if(cljs.core.truth_(obb_rules.actions.move.invalid_move_percentage_QMARK_(total_quantity,quantity))){
return obb_demo.state.set_page_data_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_data,cljs.core.constant$keyword$selected_DASH_quantity_DASH_error,true),cljs.core.constant$keyword$selected_DASH_quantity,quantity));
} else {
return obb_demo.state.set_page_data_BANG_(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_data,cljs.core.constant$keyword$selected_DASH_quantity,quantity),cljs.core.constant$keyword$selected_DASH_quantity_DASH_error));
}
});
/**
 * Rotate options
 */
obb_demo.views.player.rotate_panel = (function obb_demo$views$player$rotate_panel(game_data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel$panel_DASH_default,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel_DASH_heading,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h3$panel_DASH_title,"Rotate"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel_DASH_body,obb_demo.views.player.rotate_button(game_data,cljs.core.constant$keyword$west),obb_demo.views.player.rotate_button(game_data,cljs.core.constant$keyword$east),obb_demo.views.player.rotate_button(game_data,cljs.core.constant$keyword$north),obb_demo.views.player.rotate_button(game_data,cljs.core.constant$keyword$south)], null)], null);
});
/**
 * Specifies the units to move
 */
obb_demo.views.player.unit_quantity_picker = (function obb_demo$views$player$unit_quantity_picker(game_data){
var quantity = cljs.core.constant$keyword$selected_DASH_quantity.cljs$core$IFn$_invoke$arity$1(game_data);
var invalid_quantity_QMARK_ = cljs.core.constant$keyword$selected_DASH_quantity_DASH_error.cljs$core$IFn$_invoke$arity$1(game_data);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel$panel_DASH_default,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel_DASH_heading,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h3$panel_DASH_title,"Move quantity"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel_DASH_body,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str("div.form-group"),cljs.core.str((cljs.core.truth_(invalid_quantity_QMARK_)?".has-error":".has-success"))].join('')),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_demo.views.player.quantity_changed,game_data),cljs.core.constant$keyword$disabled,(quantity == null),cljs.core.constant$keyword$type,"text",cljs.core.constant$keyword$value,quantity], null)], null),(cljs.core.truth_(invalid_quantity_QMARK_)?(function (){var total_quantity = obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$selected_DASH_element.cljs$core$IFn$_invoke$arity$1(game_data));
var min_quantity = obb_rules.math.ceil((total_quantity * obb_rules.laws.min_move_percentage));
var max_quantity = obb_rules.math.floor((total_quantity * obb_rules.laws.max_move_percentage));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,[cljs.core.str("Move must be "),cljs.core.str(min_quantity),cljs.core.str(" to "),cljs.core.str(max_quantity),cljs.core.str(" or "),cljs.core.str(total_quantity)].join('')], null);
})():null)], null)], null)], null);
});
/**
 * Adds docs
 */
obb_demo.views.player.selected_element_info = (function obb_demo$views$player$selected_element_info(game_data){
var temp__4423__auto__ = cljs.core.constant$keyword$selected_DASH_element.cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(temp__4423__auto__)){
var element = temp__4423__auto__;
var unit = obb_rules.element.element_unit(element);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel$panel_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$margin_DASH_top,"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel_DASH_heading,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h3$panel_DASH_title,[cljs.core.str("Selected element: "),cljs.core.str(obb_rules.unit.unit_name(unit))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel_DASH_body,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_lg_DASH_4,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ul$list_DASH_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li$list_DASH_group_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$badge,obb_rules.unit.unit_attack(unit)], null),"Attack"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li$list_DASH_group_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$badge,cljs.core.name(obb_rules.unit.attack_type(unit))], null),"Type"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li$list_DASH_group_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$badge,obb_rules.unit.unit_range(unit)], null),"Range"], null),(cljs.core.truth_(cljs.core.constant$keyword$after_DASH_attack.cljs$core$IFn$_invoke$arity$1(unit))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li$list_DASH_group_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$badge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (unit,element,temp__4423__auto__){
return (function (p1__13650_SHARP_){
return cljs.core.name(cljs.core.first(p1__13650_SHARP_));
});})(unit,element,temp__4423__auto__))
,cljs.core.constant$keyword$after_DASH_attack.cljs$core$IFn$_invoke$arity$1(unit))], null),"Powers"], null):null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_lg_DASH_4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ul$list_DASH_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li$list_DASH_group_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$badge,obb_rules.unit.unit_defense(unit)], null),"Defense"], null),(cljs.core.truth_(cljs.core.constant$keyword$after_DASH_hit.cljs$core$IFn$_invoke$arity$1(unit))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li$list_DASH_group_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$badge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (unit,element,temp__4423__auto__){
return (function (p1__13651_SHARP_){
return cljs.core.name(cljs.core.first(p1__13651_SHARP_));
});})(unit,element,temp__4423__auto__))
,cljs.core.constant$keyword$after_DASH_hit.cljs$core$IFn$_invoke$arity$1(unit))], null),"Powers"], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li$list_DASH_group_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$badge,cljs.core.name(obb_rules.unit.unit_category(unit))], null),"Category"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_lg_DASH_4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ul$list_DASH_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li$list_DASH_group_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$badge,cljs.core.name(obb_rules.unit.unit_movement_type(unit))], null),"Movement"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li$list_DASH_group_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$badge,obb_rules.unit.unit_movement_cost(unit)], null),"Movement cost"], null)], null)], null)], null)], null)], null);
} else {
return null;
}
});
/**
 * Sets the current bot to play
 */
obb_demo.views.player.set_bot = (function obb_demo$views$player$set_bot(game_data,ev){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),ev.target.selectedIndex)){
return obb_demo.state.set_page_data_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_data,cljs.core.constant$keyword$bot,"Firingsquad"));
} else {
return obb_demo.state.set_page_data_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_data,cljs.core.constant$keyword$bot,"Alamo"));
}
});
/**
 * Selects the bot to play
 */
obb_demo.views.player.challenger_selector = (function obb_demo$views$player$challenger_selector(game_data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$value,(function (){var or__6936__auto__ = cljs.core.constant$keyword$bot.cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(or__6936__auto__)){
return or__6936__auto__;
} else {
return "Firingsquad";
}
})(),cljs.core.constant$keyword$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_demo.views.player.set_bot,game_data)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$option,"Firingsquad"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$option,"Alamo"], null)], null);
});
obb_demo.views.player.render = (function obb_demo$views$player$render(state){
var game_data = obb_demo.views.player.get_game_data(state);
var game = cljs.core.constant$keyword$game.cljs$core$IFn$_invoke$arity$1(game_data);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_lg_DASH_2,obb_demo.views.player.challenger_selector(game_data),obb_demo.views.player.game_turn(game_data),obb_demo.views.player.players(game_data,game),obb_demo.views.power_bar.render(game),obb_demo.views.player.action_points(game_data),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$button$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_demo.views.player.play_turn,game_data)], null),"Play turn"], null),obb_demo.views.player.unit_quantity_picker(game_data),obb_demo.views.player.rotate_panel(game_data),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$button$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_demo.views.player.reset_turn,game_data)], null),"Reset turn"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_lg_DASH_5,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.render,cljs.core.PersistentArrayMap.EMPTY,game_data], null),obb_demo.views.player.selected_element_info(game_data)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_lg_DASH_5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$jumbotron,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h1,"Demo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"This is a demo that showcases the gameplay of Orion's Belt against a simple AI."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"It's your turn to play. Perform your actions and then click Play turn."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Would you like to know more?",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ul,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,"https://twitter.com/orionsbelt"], null),"Twitter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,"https://github.com/orionsbelt-battlegrounds/obb-rules"], null),"Github"], null)], null)], null)], null)], null)], null)], null)], null);
});
