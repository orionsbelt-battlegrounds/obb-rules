// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.boardground');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.element');
goog.require('obb_rules.result');
goog.require('obb_rules.unit');
goog.require('obb_rules.actions.move');
goog.require('obb_rules.game');
goog.require('obb_rules.ai.common');
/**
 * Verifies and marks as selected an element on the given coordinate
 */
obb_demo.boardground.with_selected_element = (function obb_demo$boardground$with_selected_element(game_data,coord){
var game = cljs.core.constant$keyword$game.cljs$core$IFn$_invoke$arity$1(game_data);
var element = obb_rules.board.get_element(game,coord);
if(cljs.core.truth_(element)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_data,cljs.core.constant$keyword$possible_DASH_attacks,obb_rules.ai.common.find_possible_attacks(game,element)),cljs.core.constant$keyword$selected_DASH_coord,coord),cljs.core.constant$keyword$selected_DASH_element,element);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(game_data,cljs.core.constant$keyword$possible_DASH_destinations),cljs.core.constant$keyword$possible_DASH_attacks),cljs.core.constant$keyword$selected_DASH_coord),cljs.core.constant$keyword$selected_DASH_element);
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
 * Returns an enemy indication if the given element is an enemy
 */
obb_demo.boardground.enemy_display = (function obb_demo$boardground$enemy_display(game,element){
if(cljs.core.truth_(element)){
var player = obb_rules.element.element_player(element);
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
 * Checks if the given element is selected
 */
obb_demo.boardground.selected_QMARK_ = (function obb_demo$boardground$selected_QMARK_(game_data,element){
var and__6798__auto__ = element;
if(cljs.core.truth_(and__6798__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element,cljs.core.constant$keyword$selected_DASH_element.cljs$core$IFn$_invoke$arity$1(game_data));
} else {
return and__6798__auto__;
}
});
/**
 * Square addon when given element is selected
 */
obb_demo.boardground.selected_display = (function obb_demo$boardground$selected_display(game_data,element){
if(cljs.core.truth_(obb_demo.boardground.selected_QMARK_(game_data,element))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str("div.selected-"),cljs.core.str(cljs.core.name(obb_rules.element.element_player(element)))].join(''))], null);
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
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$possible_DASH_destination], null);
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
if(cljs.core.truth_(element)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$element_DASH_quantity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.player_label(obb_rules.element.element_player(element)),obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1(element)], null)], null);
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
 * Indicates if the given coordinate particpated on an action
 */
obb_demo.boardground.action_participant = (function obb_demo$boardground$action_participant(game_data,coord){
var action_results = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$game,cljs.core.constant$keyword$action_DASH_results], null));
var actions = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(obb_demo.boardground.action_coords,cljs.core.PersistentVector.EMPTY,action_results);
var did_something_QMARK_ = cljs.core.some(cljs.core.PersistentHashSet.fromArray([coord], true),actions);
if(cljs.core.truth_(did_something_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str("div.action-source.action-source-"),cljs.core.str(cljs.core.name(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$game,cljs.core.constant$keyword$state], null))))].join(''))], null);
} else {
return null;
}
});
/**
 * Indicates if the given coordinate was attacked
 */
obb_demo.boardground.attacked = (function obb_demo$boardground$attacked(game_data,coord,element){
var action_results = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$game,cljs.core.constant$keyword$action_DASH_results], null));
var actions = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(obb_demo.boardground.attacked_coords,cljs.core.PersistentVector.EMPTY,action_results);
var attacked_QMARK_ = cljs.core.some(cljs.core.PersistentHashSet.fromArray([coord], true),actions);
if(cljs.core.truth_(attacked_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$target,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$attacked], null)], null);
} else {
return null;
}
});
/**
 * Renders a board square
 */
obb_demo.boardground.square = (function obb_demo$boardground$square(game_data,x,y){
var game = cljs.core.constant$keyword$game.cljs$core$IFn$_invoke$arity$1(game_data);
var coord = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
var element = obb_rules.board.get_element(game,coord);
var square_style = obb_demo.boardground.square_position(x,y);
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$obb_DASH_square,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$key,[cljs.core.str(x),cljs.core.str(y)].join(''),cljs.core.constant$keyword$style,square_style], null),obb_demo.boardground.unit_image(game,element),obb_demo.boardground.selected_display(game_data,element),obb_demo.boardground.possible_destination(game_data,coord),obb_demo.boardground.action_participant(game_data,coord),obb_demo.boardground.attacked(game_data,coord,element),obb_demo.boardground.possible_target(game_data,coord),obb_demo.boardground.element_quantity(game_data,element),obb_demo.boardground.enemy_display(game,element)], null);
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$obb_DASH_board_DASH_panel,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$style,obb_demo.boardground.boardground_size(options)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$img$obb_DASH_ice,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$src,"img/ice.jpg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$obb_DASH_board,(function (){var iter__7564__auto__ = (function obb_demo$boardground$render_$_iter__13463(s__13464){
return (new cljs.core.LazySeq(null,(function (){
var s__13464__$1 = s__13464;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13464__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var y = cljs.core.first(xs__4977__auto__);
var iterys__7560__auto__ = ((function (s__13464__$1,y,xs__4977__auto__,temp__4425__auto__){
return (function obb_demo$boardground$render_$_iter__13463_$_iter__13465(s__13466){
return (new cljs.core.LazySeq(null,((function (s__13464__$1,y,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__13466__$1 = s__13466;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__13466__$1);
if(temp__4425__auto____$1){
var s__13466__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13466__$2)){
var c__7562__auto__ = cljs.core.chunk_first(s__13466__$2);
var size__7563__auto__ = cljs.core.count(c__7562__auto__);
var b__13468 = cljs.core.chunk_buffer(size__7563__auto__);
if((function (){var i__13467 = (0);
while(true){
if((i__13467 < size__7563__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7562__auto__,i__13467);
cljs.core.chunk_append(b__13468,obb_demo.boardground.square(obb_demo.boardground.prepare_game_data(game_data),x,y));

var G__13474 = (i__13467 + (1));
i__13467 = G__13474;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13468),obb_demo$boardground$render_$_iter__13463_$_iter__13465(cljs.core.chunk_rest(s__13466__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13468),null);
}
} else {
var x = cljs.core.first(s__13466__$2);
return cljs.core.cons(obb_demo.boardground.square(obb_demo.boardground.prepare_game_data(game_data),x,y),obb_demo$boardground$render_$_iter__13463_$_iter__13465(cljs.core.rest(s__13466__$2)));
}
} else {
return null;
}
break;
}
});})(s__13464__$1,y,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__13464__$1,y,xs__4977__auto__,temp__4425__auto__))
;
var fs__7561__auto__ = cljs.core.seq(iterys__7560__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(9))));
if(fs__7561__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7561__auto__,obb_demo$boardground$render_$_iter__13463(cljs.core.rest(s__13464__$1)));
} else {
var G__13475 = cljs.core.rest(s__13464__$1);
s__13464__$1 = G__13475;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7564__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(9)));
})()], null)], null);
});
