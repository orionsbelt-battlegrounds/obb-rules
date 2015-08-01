// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.boardground');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.element');
goog.require('obb_rules.result');
goog.require('obb_rules.unit');
goog.require('obb_rules.actions.move');
goog.require('obb_rules.game');
goog.require('obb_rules.turn');
goog.require('obb_rules.ai.common');
goog.require('obb_demo.state');
goog.require('obb_rules.laws');
/**
 * Verifies and marks as selected an element on the given coordinate
 */
obb_demo.boardground.with_selected_element = (function obb_demo$boardground$with_selected_element(game_data,coord){
var game = cljs.core.constant$keyword$game.cljs$core$IFn$_invoke$arity$1(game_data);
var element = obb_rules.board.get_element(game,coord);
if(cljs.core.truth_((function (){var and__7112__auto__ = element;
if(cljs.core.truth_(and__7112__auto__)){
return cljs.core.not(obb_rules.element.frozen_QMARK_(element));
} else {
return and__7112__auto__;
}
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_data,cljs.core.constant$keyword$possible_DASH_destinations,obb_rules.actions.move.find_all_possible_destinations_with_cost.cljs$core$IFn$_invoke$arity$2(game,element)),cljs.core.constant$keyword$possible_DASH_attacks,obb_rules.ai.common.find_possible_attacks(game,element)),cljs.core.constant$keyword$selected_DASH_coord,coord),cljs.core.constant$keyword$selected_DASH_element,element),cljs.core.constant$keyword$selected_DASH_quantity,obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1(element)),cljs.core.constant$keyword$previous_DASH_player),cljs.core.constant$keyword$selected_DASH_quantity_DASH_error),cljs.core.constant$keyword$previous_DASH_game);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(game_data,cljs.core.constant$keyword$possible_DASH_destinations),cljs.core.constant$keyword$possible_DASH_attacks),cljs.core.constant$keyword$selected_DASH_coord),cljs.core.constant$keyword$selected_DASH_quantity),cljs.core.constant$keyword$selected_DASH_quantity_DASH_error),cljs.core.constant$keyword$selected_DASH_element);
}
});
/**
 * Calculates the position via left and bottom percentages
 */
obb_demo.boardground.square_position = (function obb_demo$boardground$square_position(x,y){
var x__$1 = (x - (1));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$left,[cljs.core.str((x__$1 * 12.5)),cljs.core.str("%")].join(''),cljs.core.constant$keyword$bottom,[cljs.core.str((((8) - y) * 12.5)),cljs.core.str("%")].join('')], null);
});
/**
 * Gets a char code that represents the element's direction
 */
obb_demo.boardground.direction = (function obb_demo$boardground$direction(element){
var dir = obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$1(element);
return cljs.core.first(cljs.core.name(dir));
});
/**
 * Renders an html element that displays a board element's unit, if present
 * at the given coordinates
 */
obb_demo.boardground.unit_image = (function obb_demo$boardground$unit_image(game,element){
if(cljs.core.truth_(element)){
var unit = obb_rules.element.element_unit(element);
var unit_name = obb_rules.unit.unit_name(unit);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$img$unit,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$src,[cljs.core.str("http://orionsbelt.eu/public/units/"),cljs.core.str(unit_name),cljs.core.str("_"),cljs.core.str(obb_demo.boardground.direction(element)),cljs.core.str(".png")].join('')], null)], null);
} else {
return null;
}
});
/**
 * True if something with the given cost is possible
 */
obb_demo.boardground.possible_cost_QMARK_ = (function obb_demo$boardground$possible_cost_QMARK_(game_data,cost){
var action_points = (function (){var or__7124__auto__ = cljs.core.constant$keyword$action_DASH_points.cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(or__7124__auto__)){
return or__7124__auto__;
} else {
return (0);
}
})();
return (obb_rules.laws.max_action_points >= (action_points + cost));
});
/**
 * Renders an html element that displays a board element's unit, as if
 * the unit could be moved to this square
 */
obb_demo.boardground.possible_move = (function obb_demo$boardground$possible_move(game_data,coord,element){
var cost = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$possible_DASH_destinations.cljs$core$IFn$_invoke$arity$1(game_data),coord);
if(cljs.core.truth_((function (){var and__7112__auto__ = (element == null);
if(and__7112__auto__){
var and__7112__auto____$1 = !((cost == null));
if(and__7112__auto____$1){
var and__7112__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,cljs.core.constant$keyword$overed_DASH_coord.cljs$core$IFn$_invoke$arity$1(game_data));
if(and__7112__auto____$2){
return obb_demo.boardground.possible_cost_QMARK_(game_data,cost);
} else {
return and__7112__auto____$2;
}
} else {
return and__7112__auto____$1;
}
} else {
return and__7112__auto__;
}
})())){
var element__$1 = cljs.core.constant$keyword$selected_DASH_element.cljs$core$IFn$_invoke$arity$1(game_data);
var unit = obb_rules.element.element_unit(element__$1);
var unit_name = obb_rules.unit.unit_name(unit);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$img$unit_DASH_possible_DASH_move,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$src,[cljs.core.str("http://orionsbelt.eu/public/units/"),cljs.core.str(unit_name),cljs.core.str("_"),cljs.core.str(obb_demo.boardground.direction(element__$1)),cljs.core.str(".png")].join('')], null)], null);
} else {
return null;
}
});
/**
 * Renders an html element that displays a board element's unit, as if
 * the unit could be attacked on this square
 */
obb_demo.boardground.possible_attack = (function obb_demo$boardground$possible_attack(game_data,coord,element){
var cost = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$possible_DASH_attacks.cljs$core$IFn$_invoke$arity$1(game_data),coord);
if(cljs.core.truth_((function (){var and__7112__auto__ = !((element == null));
if(and__7112__auto__){
var and__7112__auto____$1 = !((cost == null));
if(and__7112__auto____$1){
var and__7112__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,cljs.core.constant$keyword$overed_DASH_coord.cljs$core$IFn$_invoke$arity$1(game_data));
if(and__7112__auto____$2){
return obb_demo.boardground.possible_cost_QMARK_(game_data,(1));
} else {
return and__7112__auto____$2;
}
} else {
return and__7112__auto____$1;
}
} else {
return and__7112__auto__;
}
})())){
var element__$1 = cljs.core.constant$keyword$selected_DASH_element.cljs$core$IFn$_invoke$arity$1(game_data);
var unit = obb_rules.element.element_unit(element__$1);
var unit_name = obb_rules.unit.unit_name(unit);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$img$unit_DASH_possible_DASH_attack,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$src,"http://orionsbelt.eu/public/battle/target.gif"], null)], null);
} else {
return null;
}
});
/**
 * Returns an enemy indication if the given element is an enemy
 */
obb_demo.boardground.enemy_display = (function obb_demo$boardground$enemy_display(game,element){
if(cljs.core.truth_(element)){
var player = obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(element);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,cljs.core.constant$keyword$p2)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$enemy], null);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Checks if the given element is overed
 */
obb_demo.boardground.overed_QMARK_ = (function obb_demo$boardground$overed_QMARK_(game_data,element){
var and__7112__auto__ = element;
if(cljs.core.truth_(and__7112__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element,cljs.core.constant$keyword$overed_DASH_element.cljs$core$IFn$_invoke$arity$1(game_data));
} else {
return and__7112__auto__;
}
});
/**
 * Checks if the given element is selected
 */
obb_demo.boardground.selected_QMARK_ = (function obb_demo$boardground$selected_QMARK_(game_data,element){
var and__7112__auto__ = element;
if(cljs.core.truth_(and__7112__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element,cljs.core.constant$keyword$selected_DASH_element.cljs$core$IFn$_invoke$arity$1(game_data));
} else {
return and__7112__auto__;
}
});
/**
 * Square addon when given element is selected
 */
obb_demo.boardground.selected_display = (function obb_demo$boardground$selected_display(game_data,element){
if(cljs.core.truth_(obb_demo.boardground.selected_QMARK_(game_data,element))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str("div.selected-"),cljs.core.str(cljs.core.name(obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(element)))].join(''))], null);
} else {
return null;
}
});
/**
 * Display when given coord is a possible movement destination
 */
obb_demo.boardground.possible_destination = (function obb_demo$boardground$possible_destination(game_data,coord){
var temp__4423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$possible_DASH_destinations.cljs$core$IFn$_invoke$arity$1(game_data),coord);
if(cljs.core.truth_(temp__4423__auto__)){
var cost = temp__4423__auto__;
if(cljs.core.truth_(obb_demo.boardground.possible_cost_QMARK_(game_data,cost))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$possible_DASH_destination], null);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Display when given coord is a possible target for an attack
 */
obb_demo.boardground.possible_target = (function obb_demo$boardground$possible_target(game_data,coord){
var temp__4423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$possible_DASH_attacks.cljs$core$IFn$_invoke$arity$1(game_data),coord);
if(cljs.core.truth_(temp__4423__auto__)){
var cost = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$possible_DASH_target], null);
} else {
return null;
}
});
/**
 * Gets a label element for a player
 */
obb_demo.boardground.player_label = (function obb_demo$boardground$player_label(player){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,cljs.core.constant$keyword$p1)){
return cljs.core.constant$keyword$span$label$label_DASH_success;
} else {
return cljs.core.constant$keyword$span$label$label_DASH_info;
}
});
/**
 * Shows element quantity
 */
obb_demo.boardground.element_quantity = (function obb_demo$boardground$element_quantity(game_data,element){
if(cljs.core.truth_((function (){var or__7124__auto__ = obb_demo.boardground.selected_QMARK_(game_data,element);
if(cljs.core.truth_(or__7124__auto__)){
return or__7124__auto__;
} else {
return obb_demo.boardground.overed_QMARK_(game_data,element);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$element_DASH_quantity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.player_label(obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(element)),obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1(element)], null)], null);
} else {
return null;
}
});
/**
 * Gathers coordinates that participated in the action
 */
obb_demo.boardground.action_coords = (function obb_demo$boardground$action_coords(coords,action_result){
var raw_action = cljs.core.first(action_result);
var action_name = cljs.core.first(raw_action);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([action_name], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$move,cljs.core.constant$keyword$goto], null)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coords,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(raw_action,(1))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(raw_action,(2)));
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([action_name], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$rotate,cljs.core.constant$keyword$attack], null)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coords,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(raw_action,(1)));
} else {
return coords;

}
}
});
/**
 * Gathers coordinats that were attacked
 */
obb_demo.boardground.attacked_coords = (function obb_demo$boardground$attacked_coords(coords,action_result){
var raw_action = cljs.core.first(action_result);
var action_name = cljs.core.first(raw_action);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([action_name], true),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$attack], null)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coords,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(raw_action,(2)));
} else {
return coords;

}
});
/**
 * Gets current action-results
 */
obb_demo.boardground.get_action_results = (function obb_demo$boardground$get_action_results(game_data){
var or__7124__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$game,cljs.core.constant$keyword$action_DASH_results], null));
if(cljs.core.truth_(or__7124__auto__)){
return or__7124__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$previous_DASH_game,cljs.core.constant$keyword$action_DASH_results], null));
}
});
/**
 * Indicates if the given coordinate particpated on an action
 */
obb_demo.boardground.action_participant = (function obb_demo$boardground$action_participant(game_data,coord){
var action_results = obb_demo.boardground.get_action_results(game_data);
var actions = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(obb_demo.boardground.action_coords,cljs.core.PersistentVector.EMPTY,action_results);
var did_something_QMARK_ = cljs.core.some(cljs.core.PersistentHashSet.fromArray([coord], true),actions);
if(cljs.core.truth_(did_something_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str("div.action-source.action-source-"),cljs.core.str(cljs.core.name((function (){var or__7124__auto__ = cljs.core.constant$keyword$previous_DASH_player.cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(or__7124__auto__)){
return or__7124__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$game,cljs.core.constant$keyword$state], null));
}
})()))].join(''))], null);
} else {
return null;
}
});
/**
 * Indicates if the given coordinate was attacked
 */
obb_demo.boardground.attacked = (function obb_demo$boardground$attacked(game_data,coord,element){
var action_results = obb_demo.boardground.get_action_results(game_data);
var actions = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(obb_demo.boardground.attacked_coords,cljs.core.PersistentVector.EMPTY,action_results);
var attacked_QMARK_ = cljs.core.some(cljs.core.PersistentHashSet.fromArray([coord], true),actions);
if(cljs.core.truth_(attacked_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$target,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$attacked], null)], null);
} else {
return null;
}
});
/**
 * True if the given data is selected
 */
obb_demo.boardground.selected_coord_QMARK_ = (function obb_demo$boardground$selected_coord_QMARK_(game_data,game,coord,elem){
var and__7112__auto__ = elem;
if(cljs.core.truth_(and__7112__auto__)){
return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(coord,cljs.core.constant$keyword$selected_DASH_coord.cljs$core$IFn$_invoke$arity$1(game_data))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(elem),obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game)));
} else {
return and__7112__auto__;
}
});
/**
 * Checks if click is goto
 */
obb_demo.boardground.goto_QMARK_ = (function obb_demo$boardground$goto_QMARK_(game_data,game,coord,elem){
var and__7112__auto__ = (elem == null);
if(and__7112__auto__){
var and__7112__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$selected_DASH_quantity.cljs$core$IFn$_invoke$arity$1(game_data),obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$selected_DASH_element.cljs$core$IFn$_invoke$arity$1(game_data)));
if(and__7112__auto____$1){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$possible_DASH_destinations.cljs$core$IFn$_invoke$arity$1(game_data),coord);
} else {
return and__7112__auto____$1;
}
} else {
return and__7112__auto__;
}
});
/**
 * Checks if click is move
 */
obb_demo.boardground.move_QMARK_ = (function obb_demo$boardground$move_QMARK_(game_data,game,coord,elem){
var and__7112__auto__ = (elem == null);
if(and__7112__auto__){
var and__7112__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$selected_DASH_quantity.cljs$core$IFn$_invoke$arity$1(game_data),obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$selected_DASH_element.cljs$core$IFn$_invoke$arity$1(game_data)));
if(and__7112__auto____$1){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$possible_DASH_destinations.cljs$core$IFn$_invoke$arity$1(game_data),coord);
} else {
return and__7112__auto____$1;
}
} else {
return and__7112__auto__;
}
});
/**
 * Registers an action
 */
obb_demo.boardground.register_action = (function obb_demo$boardground$register_action(game_data,game,player,action,coord){
var current_actions = cljs.core.constant$keyword$actions.cljs$core$IFn$_invoke$arity$1(game_data);
var result = obb_rules.turn.simulate_actions.cljs$core$IFn$_invoke$arity$3(game,player,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null));
if(cljs.core.truth_(obb_rules.result.succeeded_QMARK_(result))){
return obb_demo.state.set_page_data_BANG_(obb_demo.boardground.with_selected_element(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_data,cljs.core.constant$keyword$game,obb_rules.result.result_board(result)),cljs.core.constant$keyword$action_DASH_points,obb_rules.result.result_cost(result)),cljs.core.constant$keyword$actions,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(action,current_actions)),coord));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([result], 0));
}
});
/**
 * Processes a move action
 */
obb_demo.boardground.process_move = (function obb_demo$boardground$process_move(game_data,game,coord,elem){
var selected_coord = cljs.core.constant$keyword$selected_DASH_coord.cljs$core$IFn$_invoke$arity$1(game_data);
var player = obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$selected_DASH_element.cljs$core$IFn$_invoke$arity$1(game_data));
var quantity = cljs.core.constant$keyword$selected_DASH_quantity.cljs$core$IFn$_invoke$arity$1(game_data);
var action = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$move,selected_coord,coord,quantity], null);
return obb_demo.boardground.register_action(game_data,game,player,action,coord);
});
/**
 * Processes a goto action
 */
obb_demo.boardground.process_goto = (function obb_demo$boardground$process_goto(game_data,game,coord,elem){
var selected_coord = cljs.core.constant$keyword$selected_DASH_coord.cljs$core$IFn$_invoke$arity$1(game_data);
var player = obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$selected_DASH_element.cljs$core$IFn$_invoke$arity$1(game_data));
var action = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$goto,selected_coord,coord], null);
return obb_demo.boardground.register_action(game_data,game,player,action,coord);
});
/**
 * Checks if click is attack
 */
obb_demo.boardground.attack_QMARK_ = (function obb_demo$boardground$attack_QMARK_(game_data,game,coord,elem){
var and__7112__auto__ = !((elem == null));
if(and__7112__auto__){
var and__7112__auto____$1 = cljs.core.not(obb_rules.element.frozen_QMARK_(elem));
if(and__7112__auto____$1){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$possible_DASH_attacks.cljs$core$IFn$_invoke$arity$1(game_data),coord);
} else {
return and__7112__auto____$1;
}
} else {
return and__7112__auto__;
}
});
/**
 * Processes a goto action
 */
obb_demo.boardground.process_attack = (function obb_demo$boardground$process_attack(game_data,game,coord,elem){
var selected_coord = cljs.core.constant$keyword$selected_DASH_coord.cljs$core$IFn$_invoke$arity$1(game_data);
var player = obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$selected_DASH_element.cljs$core$IFn$_invoke$arity$1(game_data));
var action = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$attack,selected_coord,coord], null);
return obb_demo.boardground.register_action(game_data,game,player,action,selected_coord);
});
/**
 * Processes select square
 */
obb_demo.boardground.square_clicked = (function obb_demo$boardground$square_clicked(game_data,game,coord,elem){
if(cljs.core.truth_(obb_demo.boardground.goto_QMARK_(game_data,game,coord,elem))){
return obb_demo.boardground.process_goto(game_data,game,coord,elem);
} else {
if(cljs.core.truth_(obb_demo.boardground.move_QMARK_(game_data,game,coord,elem))){
return obb_demo.boardground.process_move(game_data,game,coord,elem);
} else {
if(cljs.core.truth_(obb_demo.boardground.attack_QMARK_(game_data,game,coord,elem))){
return obb_demo.boardground.process_attack(game_data,game,coord,elem);
} else {
if(cljs.core.truth_(obb_demo.boardground.selected_coord_QMARK_(game_data,game,coord,elem))){
return obb_demo.state.set_page_data_BANG_(obb_demo.boardground.with_selected_element(game_data,coord));
} else {
return obb_demo.state.set_page_data_BANG_(obb_demo.boardground.with_selected_element(game_data,null));

}
}
}
}
});
/**
 * Processes hoverd square
 */
obb_demo.boardground.square_overed = (function obb_demo$boardground$square_overed(game_data,game,coord,elem){
return obb_demo.state.set_page_data_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_data,cljs.core.constant$keyword$overed_DASH_coord,coord),cljs.core.constant$keyword$overed_DASH_element,elem));
});
/**
 * Renders a board square
 */
obb_demo.boardground.square = (function obb_demo$boardground$square(game_data,x,y){
var game = cljs.core.constant$keyword$game.cljs$core$IFn$_invoke$arity$1(game_data);
var coord = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
var element = obb_rules.board.get_element(game,coord);
var square_style = obb_demo.boardground.square_position(x,y);
var square_clicked = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(obb_demo.boardground.square_clicked,game_data,game,coord,cljs.core.array_seq([element], 0));
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$obb_DASH_square,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$on_DASH_click,square_clicked,cljs.core.constant$keyword$on_DASH_touch_DASH_start,square_clicked,cljs.core.constant$keyword$on_DASH_mouse_DASH_over,cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(obb_demo.boardground.square_overed,game_data,game,coord,cljs.core.array_seq([element], 0)),cljs.core.constant$keyword$key,[cljs.core.str(x),cljs.core.str(y)].join(''),cljs.core.constant$keyword$style,square_style], null),obb_demo.boardground.unit_image(game,element),obb_demo.boardground.possible_move(game_data,coord,element),obb_demo.boardground.possible_attack(game_data,coord,element),obb_demo.boardground.selected_display(game_data,element),obb_demo.boardground.possible_destination(game_data,coord),obb_demo.boardground.action_participant(game_data,coord),obb_demo.boardground.attacked(game_data,coord,element),obb_demo.boardground.possible_target(game_data,coord),obb_demo.boardground.element_quantity(game_data,element),obb_demo.boardground.enemy_display(game,element)], null);
});
/**
 * Gets the panel size stype
 */
obb_demo.boardground.boardground_size = (function obb_demo$boardground$boardground_size(options){
return cljs.core.constant$keyword$boardground_DASH_style.cljs$core$IFn$_invoke$arity$1(options);
});
/**
 * Specific preparations
 */
obb_demo.boardground.prepare_game_data = (function obb_demo$boardground$prepare_game_data(game_data){
var game = cljs.core.constant$keyword$game.cljs$core$IFn$_invoke$arity$1(game_data);
var state = obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game);
return game_data;
});
/**
 * Renders the full game's board
 */
obb_demo.boardground.render = (function obb_demo$boardground$render(options,game_data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$obb_DASH_board_DASH_panel,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$style,obb_demo.boardground.boardground_size(options)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$img$obb_DASH_ice,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$src,"img/ice.jpg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$obb_DASH_board,(function (){var iter__7877__auto__ = (function obb_demo$boardground$render_$_iter__10876(s__10877){
return (new cljs.core.LazySeq(null,(function (){
var s__10877__$1 = s__10877;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__10877__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var y = cljs.core.first(xs__4977__auto__);
var iterys__7873__auto__ = ((function (s__10877__$1,y,xs__4977__auto__,temp__4425__auto__){
return (function obb_demo$boardground$render_$_iter__10876_$_iter__10878(s__10879){
return (new cljs.core.LazySeq(null,((function (s__10877__$1,y,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__10879__$1 = s__10879;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__10879__$1);
if(temp__4425__auto____$1){
var s__10879__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10879__$2)){
var c__7875__auto__ = cljs.core.chunk_first(s__10879__$2);
var size__7876__auto__ = cljs.core.count(c__7875__auto__);
var b__10881 = cljs.core.chunk_buffer(size__7876__auto__);
if((function (){var i__10880 = (0);
while(true){
if((i__10880 < size__7876__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7875__auto__,i__10880);
cljs.core.chunk_append(b__10881,obb_demo.boardground.square(obb_demo.boardground.prepare_game_data(game_data),x,y));

var G__10887 = (i__10880 + (1));
i__10880 = G__10887;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10881),obb_demo$boardground$render_$_iter__10876_$_iter__10878(cljs.core.chunk_rest(s__10879__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10881),null);
}
} else {
var x = cljs.core.first(s__10879__$2);
return cljs.core.cons(obb_demo.boardground.square(obb_demo.boardground.prepare_game_data(game_data),x,y),obb_demo$boardground$render_$_iter__10876_$_iter__10878(cljs.core.rest(s__10879__$2)));
}
} else {
return null;
}
break;
}
});})(s__10877__$1,y,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__10877__$1,y,xs__4977__auto__,temp__4425__auto__))
;
var fs__7874__auto__ = cljs.core.seq(iterys__7873__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(9))));
if(fs__7874__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7874__auto__,obb_demo$boardground$render_$_iter__10876(cljs.core.rest(s__10877__$1)));
} else {
var G__10888 = cljs.core.rest(s__10877__$1);
s__10877__$1 = G__10888;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7877__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(9)));
})()], null)], null);
});
