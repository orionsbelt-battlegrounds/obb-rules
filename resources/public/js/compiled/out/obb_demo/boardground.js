// Compiled by ClojureScript 1.7.228 {}
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
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(game_data);
var element = obb_rules.board.get_element.call(null,game,coord);
if(cljs.core.truth_((function (){var and__18358__auto__ = element;
if(cljs.core.truth_(and__18358__auto__)){
return cljs.core.not.call(null,obb_rules.element.frozen_QMARK_.call(null,element));
} else {
return and__18358__auto__;
}
})())){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,game_data,new cljs.core.Keyword(null,"possible-destinations","possible-destinations",329147117),obb_rules.actions.move.find_all_possible_destinations_with_cost.call(null,game,element)),new cljs.core.Keyword(null,"possible-attacks","possible-attacks",1363937898),obb_rules.ai.common.find_possible_attacks.call(null,game,element)),new cljs.core.Keyword(null,"selected-coord","selected-coord",-543869297),coord),new cljs.core.Keyword(null,"selected-element","selected-element",1424596130),element),new cljs.core.Keyword(null,"selected-quantity","selected-quantity",-1303446490),obb_rules.element.element_quantity.call(null,element)),new cljs.core.Keyword(null,"previous-player","previous-player",2002714327)),new cljs.core.Keyword(null,"selected-quantity-error","selected-quantity-error",1821000259)),new cljs.core.Keyword(null,"previous-game","previous-game",1171173892));
} else {
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,game_data,new cljs.core.Keyword(null,"possible-destinations","possible-destinations",329147117)),new cljs.core.Keyword(null,"possible-attacks","possible-attacks",1363937898)),new cljs.core.Keyword(null,"selected-coord","selected-coord",-543869297)),new cljs.core.Keyword(null,"selected-quantity","selected-quantity",-1303446490)),new cljs.core.Keyword(null,"selected-quantity-error","selected-quantity-error",1821000259)),new cljs.core.Keyword(null,"selected-element","selected-element",1424596130));
}
});
/**
 * Calculates the position via left and bottom percentages
 */
obb_demo.boardground.square_position = (function obb_demo$boardground$square_position(x,y){
var x__$1 = (x - (1));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str((x__$1 * 12.5)),cljs.core.str("%")].join(''),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),[cljs.core.str((((8) - y) * 12.5)),cljs.core.str("%")].join('')], null);
});
/**
 * Gets a char code that represents the element's direction
 */
obb_demo.boardground.direction = (function obb_demo$boardground$direction(element){
var dir = obb_rules.element.element_direction.call(null,element);
return cljs.core.first.call(null,cljs.core.name.call(null,dir));
});
/**
 * Renders an html element that displays a board element's unit, if present
 *   at the given coordinates
 */
obb_demo.boardground.unit_image = (function obb_demo$boardground$unit_image(game,element){
if(cljs.core.truth_(element)){
var unit = obb_rules.element.element_unit.call(null,element);
var unit_name = obb_rules.unit.unit_name.call(null,unit);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.unit","img.unit",-1040155274),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str("http://orionsbelt.eu/public/units/"),cljs.core.str(unit_name),cljs.core.str("_"),cljs.core.str(obb_demo.boardground.direction.call(null,element)),cljs.core.str(".png")].join('')], null)], null);
} else {
return null;
}
});
/**
 * True if something with the given cost is possible
 */
obb_demo.boardground.possible_cost_QMARK_ = (function obb_demo$boardground$possible_cost_QMARK_(game_data,cost){
var action_points = (function (){var or__18370__auto__ = new cljs.core.Keyword(null,"action-points","action-points",-938391256).cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return (0);
}
})();
return (obb_rules.laws.max_action_points >= (action_points + cost));
});
/**
 * Renders an html element that displays a board element's unit, as if
 *   the unit could be moved to this square
 */
obb_demo.boardground.possible_move = (function obb_demo$boardground$possible_move(game_data,coord,element){
var cost = cljs.core.get.call(null,new cljs.core.Keyword(null,"possible-destinations","possible-destinations",329147117).cljs$core$IFn$_invoke$arity$1(game_data),coord);
if(cljs.core.truth_((function (){var and__18358__auto__ = (element == null);
if(and__18358__auto__){
var and__18358__auto____$1 = !((cost == null));
if(and__18358__auto____$1){
var and__18358__auto____$2 = cljs.core._EQ_.call(null,coord,new cljs.core.Keyword(null,"overed-coord","overed-coord",1504839814).cljs$core$IFn$_invoke$arity$1(game_data));
if(and__18358__auto____$2){
return obb_demo.boardground.possible_cost_QMARK_.call(null,game_data,cost);
} else {
return and__18358__auto____$2;
}
} else {
return and__18358__auto____$1;
}
} else {
return and__18358__auto__;
}
})())){
var element__$1 = new cljs.core.Keyword(null,"selected-element","selected-element",1424596130).cljs$core$IFn$_invoke$arity$1(game_data);
var unit = obb_rules.element.element_unit.call(null,element__$1);
var unit_name = obb_rules.unit.unit_name.call(null,unit);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.unit-possible-move","img.unit-possible-move",1684816868),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str("http://orionsbelt.eu/public/units/"),cljs.core.str(unit_name),cljs.core.str("_"),cljs.core.str(obb_demo.boardground.direction.call(null,element__$1)),cljs.core.str(".png")].join('')], null)], null);
} else {
return null;
}
});
/**
 * Renders an html element that displays a board element's unit, as if
 *   the unit could be attacked on this square
 */
obb_demo.boardground.possible_attack = (function obb_demo$boardground$possible_attack(game_data,coord,element){
var cost = cljs.core.get.call(null,new cljs.core.Keyword(null,"possible-attacks","possible-attacks",1363937898).cljs$core$IFn$_invoke$arity$1(game_data),coord);
if(cljs.core.truth_((function (){var and__18358__auto__ = !((element == null));
if(and__18358__auto__){
var and__18358__auto____$1 = !((cost == null));
if(and__18358__auto____$1){
var and__18358__auto____$2 = cljs.core._EQ_.call(null,coord,new cljs.core.Keyword(null,"overed-coord","overed-coord",1504839814).cljs$core$IFn$_invoke$arity$1(game_data));
if(and__18358__auto____$2){
return obb_demo.boardground.possible_cost_QMARK_.call(null,game_data,(1));
} else {
return and__18358__auto____$2;
}
} else {
return and__18358__auto____$1;
}
} else {
return and__18358__auto__;
}
})())){
var element__$1 = new cljs.core.Keyword(null,"selected-element","selected-element",1424596130).cljs$core$IFn$_invoke$arity$1(game_data);
var unit = obb_rules.element.element_unit.call(null,element__$1);
var unit_name = obb_rules.unit.unit_name.call(null,unit);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.unit-possible-attack","img.unit-possible-attack",-930322986),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"http://orionsbelt.eu/public/battle/target.gif"], null)], null);
} else {
return null;
}
});
/**
 * Returns an enemy indication if the given element is an enemy
 */
obb_demo.boardground.enemy_display = (function obb_demo$boardground$enemy_display(game,element){
if(cljs.core.truth_(element)){
var player = obb_rules.element.element_player.call(null,element);
if(cljs.core._EQ_.call(null,player,new cljs.core.Keyword(null,"p2","p2",905500641))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.enemy","div.enemy",-1561343804)], null);
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
var and__18358__auto__ = element;
if(cljs.core.truth_(and__18358__auto__)){
return cljs.core._EQ_.call(null,element,new cljs.core.Keyword(null,"overed-element","overed-element",-1139502943).cljs$core$IFn$_invoke$arity$1(game_data));
} else {
return and__18358__auto__;
}
});
/**
 * Checks if the given element is selected
 */
obb_demo.boardground.selected_QMARK_ = (function obb_demo$boardground$selected_QMARK_(game_data,element){
var and__18358__auto__ = element;
if(cljs.core.truth_(and__18358__auto__)){
return cljs.core._EQ_.call(null,element,new cljs.core.Keyword(null,"selected-element","selected-element",1424596130).cljs$core$IFn$_invoke$arity$1(game_data));
} else {
return and__18358__auto__;
}
});
/**
 * Square addon when given element is selected
 */
obb_demo.boardground.selected_display = (function obb_demo$boardground$selected_display(game_data,element){
if(cljs.core.truth_(obb_demo.boardground.selected_QMARK_.call(null,game_data,element))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str("div.selected-"),cljs.core.str(cljs.core.name.call(null,obb_rules.element.element_player.call(null,element)))].join(''))], null);
} else {
return null;
}
});
/**
 * Display when given coord is a possible movement destination
 */
obb_demo.boardground.possible_destination = (function obb_demo$boardground$possible_destination(game_data,coord){
var temp__4655__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"possible-destinations","possible-destinations",329147117).cljs$core$IFn$_invoke$arity$1(game_data),coord);
if(cljs.core.truth_(temp__4655__auto__)){
var cost = temp__4655__auto__;
if(cljs.core.truth_(obb_demo.boardground.possible_cost_QMARK_.call(null,game_data,cost))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.possible-destination","div.possible-destination",1785305478)], null);
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
var temp__4655__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"possible-attacks","possible-attacks",1363937898).cljs$core$IFn$_invoke$arity$1(game_data),coord);
if(cljs.core.truth_(temp__4655__auto__)){
var cost = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.possible-target","div.possible-target",-352952589)], null);
} else {
return null;
}
});
/**
 * Gets a label element for a player
 */
obb_demo.boardground.player_label = (function obb_demo$boardground$player_label(player){
if(cljs.core._EQ_.call(null,player,new cljs.core.Keyword(null,"p1","p1",-936759954))){
return new cljs.core.Keyword(null,"span.label.label-success","span.label.label-success",-156422062);
} else {
return new cljs.core.Keyword(null,"span.label.label-info","span.label.label-info",-1377012770);
}
});
/**
 * Shows element quantity
 */
obb_demo.boardground.element_quantity = (function obb_demo$boardground$element_quantity(game_data,element){
if(cljs.core.truth_((function (){var or__18370__auto__ = obb_demo.boardground.selected_QMARK_.call(null,game_data,element);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return obb_demo.boardground.overed_QMARK_.call(null,game_data,element);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.element-quantity","div.element-quantity",1861752223),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.player_label.call(null,obb_rules.element.element_player.call(null,element)),obb_rules.element.element_quantity.call(null,element)], null)], null);
} else {
return null;
}
});
/**
 * Gathers coordinates that participated in the action
 */
obb_demo.boardground.action_coords = (function obb_demo$boardground$action_coords(coords,action_result){
var raw_action = cljs.core.first.call(null,action_result);
var action_name = cljs.core.first.call(null,raw_action);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([action_name], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"goto","goto",80149757)], null)))){
return cljs.core.conj.call(null,cljs.core.conj.call(null,coords,cljs.core.nth.call(null,raw_action,(1))),cljs.core.nth.call(null,raw_action,(2)));
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([action_name], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"attack","attack",1957061788)], null)))){
return cljs.core.conj.call(null,coords,cljs.core.nth.call(null,raw_action,(1)));
} else {
return coords;

}
}
});
/**
 * Gathers coordinats that were attacked
 */
obb_demo.boardground.attacked_coords = (function obb_demo$boardground$attacked_coords(coords,action_result){
var raw_action = cljs.core.first.call(null,action_result);
var action_name = cljs.core.first.call(null,raw_action);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([action_name], true),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attack","attack",1957061788)], null)))){
return cljs.core.conj.call(null,coords,cljs.core.nth.call(null,raw_action,(2)));
} else {
return coords;

}
});
/**
 * Gets current action-results
 */
obb_demo.boardground.get_action_results = (function obb_demo$boardground$get_action_results(game_data){
var or__18370__auto__ = cljs.core.get_in.call(null,game_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"action-results","action-results",-389719209)], null));
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
var or__18370__auto____$1 = cljs.core.get_in.call(null,game_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"previous-action-results","previous-action-results",-688633288)], null));
if(cljs.core.truth_(or__18370__auto____$1)){
return or__18370__auto____$1;
} else {
return cljs.core.get_in.call(null,game_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"previous-game","previous-game",1171173892),new cljs.core.Keyword(null,"action-results","action-results",-389719209)], null));
}
}
});
/**
 * Indicates if the given coordinate particpated on an action
 */
obb_demo.boardground.action_participant = (function obb_demo$boardground$action_participant(game_data,coord){
var action_results = obb_demo.boardground.get_action_results.call(null,game_data);
var actions = cljs.core.reduce.call(null,obb_demo.boardground.action_coords,cljs.core.PersistentVector.EMPTY,action_results);
var did_something_QMARK_ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([coord], true),actions);
if(cljs.core.truth_(did_something_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str("div.action-source.action-source-"),cljs.core.str(cljs.core.name.call(null,(function (){var or__18370__auto__ = new cljs.core.Keyword(null,"previous-player","previous-player",2002714327).cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return cljs.core.get_in.call(null,game_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"state","state",-1988618099)], null));
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
var action_results = obb_demo.boardground.get_action_results.call(null,game_data);
var actions = cljs.core.reduce.call(null,obb_demo.boardground.attacked_coords,cljs.core.PersistentVector.EMPTY,action_results);
var attacked_QMARK_ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([coord], true),actions);
if(cljs.core.truth_(attacked_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.target","div.target",602141886),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.attacked","div.attacked",-823037688)], null)], null);
} else {
return null;
}
});
/**
 * True if the given data is selected
 */
obb_demo.boardground.selected_coord_QMARK_ = (function obb_demo$boardground$selected_coord_QMARK_(game_data,game,coord,elem){
var and__18358__auto__ = elem;
if(cljs.core.truth_(and__18358__auto__)){
return (cljs.core.not_EQ_.call(null,coord,new cljs.core.Keyword(null,"selected-coord","selected-coord",-543869297).cljs$core$IFn$_invoke$arity$1(game_data))) && (cljs.core._EQ_.call(null,obb_rules.element.element_player.call(null,elem),obb_rules.game.state.call(null,game)));
} else {
return and__18358__auto__;
}
});
/**
 * Checks if click is goto
 */
obb_demo.boardground.goto_QMARK_ = (function obb_demo$boardground$goto_QMARK_(game_data,game,coord,elem){
var and__18358__auto__ = (elem == null);
if(and__18358__auto__){
var and__18358__auto____$1 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected-quantity","selected-quantity",-1303446490).cljs$core$IFn$_invoke$arity$1(game_data),obb_rules.element.element_quantity.call(null,new cljs.core.Keyword(null,"selected-element","selected-element",1424596130).cljs$core$IFn$_invoke$arity$1(game_data)));
if(and__18358__auto____$1){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"possible-destinations","possible-destinations",329147117).cljs$core$IFn$_invoke$arity$1(game_data),coord);
} else {
return and__18358__auto____$1;
}
} else {
return and__18358__auto__;
}
});
/**
 * Checks if click is move
 */
obb_demo.boardground.move_QMARK_ = (function obb_demo$boardground$move_QMARK_(game_data,game,coord,elem){
var and__18358__auto__ = (elem == null);
if(and__18358__auto__){
var and__18358__auto____$1 = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"selected-quantity","selected-quantity",-1303446490).cljs$core$IFn$_invoke$arity$1(game_data),obb_rules.element.element_quantity.call(null,new cljs.core.Keyword(null,"selected-element","selected-element",1424596130).cljs$core$IFn$_invoke$arity$1(game_data)));
if(and__18358__auto____$1){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"possible-destinations","possible-destinations",329147117).cljs$core$IFn$_invoke$arity$1(game_data),coord);
} else {
return and__18358__auto____$1;
}
} else {
return and__18358__auto__;
}
});
/**
 * Registers an action
 */
obb_demo.boardground.register_action = (function obb_demo$boardground$register_action(game_data,game,player,action,coord){
var current_actions = cljs.core.get.call(null,game_data,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.PersistentVector.EMPTY);
var next_actions = cljs.core.conj.call(null,current_actions,action);
var result = obb_rules.turn.simulate_actions.call(null,game,player,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null));
if(cljs.core.truth_(obb_rules.result.succeeded_QMARK_.call(null,result))){
return obb_demo.state.set_page_data_BANG_.call(null,obb_demo.boardground.with_selected_element.call(null,cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,game_data,new cljs.core.Keyword(null,"game","game",-441523833),obb_rules.result.result_board.call(null,result)),new cljs.core.Keyword(null,"action-points","action-points",-938391256),obb_rules.result.result_cost.call(null,result)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"history","history",-247395220)], null),cljs.core.conj.call(null,cljs.core.vec.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(game_data)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),player,new cljs.core.Keyword(null,"actions","actions",-812656882),next_actions], null))),new cljs.core.Keyword(null,"actions","actions",-812656882),next_actions),coord));
} else {
return cljs.core.println.call(null,result);
}
});
/**
 * Processes a move action
 */
obb_demo.boardground.process_move = (function obb_demo$boardground$process_move(game_data,game,coord,elem){
var selected_coord = new cljs.core.Keyword(null,"selected-coord","selected-coord",-543869297).cljs$core$IFn$_invoke$arity$1(game_data);
var player = obb_rules.element.element_player.call(null,new cljs.core.Keyword(null,"selected-element","selected-element",1424596130).cljs$core$IFn$_invoke$arity$1(game_data));
var quantity = new cljs.core.Keyword(null,"selected-quantity","selected-quantity",-1303446490).cljs$core$IFn$_invoke$arity$1(game_data);
var action = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move","move",-2110884309),selected_coord,coord,quantity], null);
return obb_demo.boardground.register_action.call(null,game_data,game,player,action,coord);
});
/**
 * Processes a goto action
 */
obb_demo.boardground.process_goto = (function obb_demo$boardground$process_goto(game_data,game,coord,elem){
var selected_coord = new cljs.core.Keyword(null,"selected-coord","selected-coord",-543869297).cljs$core$IFn$_invoke$arity$1(game_data);
var player = obb_rules.element.element_player.call(null,new cljs.core.Keyword(null,"selected-element","selected-element",1424596130).cljs$core$IFn$_invoke$arity$1(game_data));
var action = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"goto","goto",80149757),selected_coord,coord], null);
return obb_demo.boardground.register_action.call(null,game_data,game,player,action,coord);
});
/**
 * Checks if click is attack
 */
obb_demo.boardground.attack_QMARK_ = (function obb_demo$boardground$attack_QMARK_(game_data,game,coord,elem){
var and__18358__auto__ = !((elem == null));
if(and__18358__auto__){
var and__18358__auto____$1 = cljs.core.not.call(null,obb_rules.element.frozen_QMARK_.call(null,elem));
if(and__18358__auto____$1){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"possible-attacks","possible-attacks",1363937898).cljs$core$IFn$_invoke$arity$1(game_data),coord);
} else {
return and__18358__auto____$1;
}
} else {
return and__18358__auto__;
}
});
/**
 * Processes a goto action
 */
obb_demo.boardground.process_attack = (function obb_demo$boardground$process_attack(game_data,game,coord,elem){
var selected_coord = new cljs.core.Keyword(null,"selected-coord","selected-coord",-543869297).cljs$core$IFn$_invoke$arity$1(game_data);
var player = obb_rules.element.element_player.call(null,new cljs.core.Keyword(null,"selected-element","selected-element",1424596130).cljs$core$IFn$_invoke$arity$1(game_data));
var action = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attack","attack",1957061788),selected_coord,coord], null);
return obb_demo.boardground.register_action.call(null,game_data,game,player,action,selected_coord);
});
/**
 * Processes select square
 */
obb_demo.boardground.square_clicked = (function obb_demo$boardground$square_clicked(game_data,game,coord,elem){
if(cljs.core.truth_(obb_demo.boardground.goto_QMARK_.call(null,game_data,game,coord,elem))){
return obb_demo.boardground.process_goto.call(null,game_data,game,coord,elem);
} else {
if(cljs.core.truth_(obb_demo.boardground.move_QMARK_.call(null,game_data,game,coord,elem))){
return obb_demo.boardground.process_move.call(null,game_data,game,coord,elem);
} else {
if(cljs.core.truth_(obb_demo.boardground.attack_QMARK_.call(null,game_data,game,coord,elem))){
return obb_demo.boardground.process_attack.call(null,game_data,game,coord,elem);
} else {
if(cljs.core.truth_(obb_demo.boardground.selected_coord_QMARK_.call(null,game_data,game,coord,elem))){
return obb_demo.state.set_page_data_BANG_.call(null,obb_demo.boardground.with_selected_element.call(null,game_data,coord));
} else {
return obb_demo.state.set_page_data_BANG_.call(null,obb_demo.boardground.with_selected_element.call(null,game_data,null));

}
}
}
}
});
/**
 * Processes hoverd square
 */
obb_demo.boardground.square_overed = (function obb_demo$boardground$square_overed(game_data,game,coord,elem){
return obb_demo.state.set_page_data_BANG_.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,game_data,new cljs.core.Keyword(null,"overed-coord","overed-coord",1504839814),coord),new cljs.core.Keyword(null,"overed-element","overed-element",-1139502943),elem));
});
/**
 * Renders a board square
 */
obb_demo.boardground.square = (function obb_demo$boardground$square(game_data,x,y){
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(game_data);
var coord = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
var element = obb_rules.board.get_element.call(null,game,coord);
var square_style = obb_demo.boardground.square_position.call(null,x,y);
var square_clicked = cljs.core.partial.call(null,obb_demo.boardground.square_clicked,game_data,game,coord,element);
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.obb-square","div.obb-square",-422683647),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),square_clicked,new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),square_clicked,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),cljs.core.partial.call(null,obb_demo.boardground.square_overed,game_data,game,coord,element),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(x),cljs.core.str(y)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),square_style], null),obb_demo.boardground.unit_image.call(null,game,element),obb_demo.boardground.possible_move.call(null,game_data,coord,element),obb_demo.boardground.possible_attack.call(null,game_data,coord,element),obb_demo.boardground.selected_display.call(null,game_data,element),obb_demo.boardground.possible_destination.call(null,game_data,coord),obb_demo.boardground.action_participant.call(null,game_data,coord),obb_demo.boardground.attacked.call(null,game_data,coord,element),obb_demo.boardground.possible_target.call(null,game_data,coord),obb_demo.boardground.element_quantity.call(null,game_data,element),obb_demo.boardground.enemy_display.call(null,game,element)], null);
});
/**
 * Gets the panel size stype
 */
obb_demo.boardground.boardground_size = (function obb_demo$boardground$boardground_size(options){
return new cljs.core.Keyword(null,"boardground-style","boardground-style",491580564).cljs$core$IFn$_invoke$arity$1(options);
});
/**
 * Specific preparations
 */
obb_demo.boardground.prepare_game_data = (function obb_demo$boardground$prepare_game_data(game_data){
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(game_data);
var state = obb_rules.game.state.call(null,game);
return game_data;
});
/**
 * Renders the full game's board
 */
obb_demo.boardground.render = (function obb_demo$boardground$render(options,game_data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.obb-board-panel","div.obb-board-panel",-2108101234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),obb_demo.boardground.boardground_size.call(null,options)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.obb-ice","img.obb-ice",-2106967169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/ice.jpg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.obb-board","div.obb-board",764065712),(function (){var iter__19142__auto__ = (function obb_demo$boardground$render_$_iter__42117(s__42118){
return (new cljs.core.LazySeq(null,(function (){
var s__42118__$1 = s__42118;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42118__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var y = cljs.core.first.call(null,xs__5205__auto__);
var iterys__19138__auto__ = ((function (s__42118__$1,y,xs__5205__auto__,temp__4657__auto__){
return (function obb_demo$boardground$render_$_iter__42117_$_iter__42119(s__42120){
return (new cljs.core.LazySeq(null,((function (s__42118__$1,y,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__42120__$1 = s__42120;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__42120__$1);
if(temp__4657__auto____$1){
var s__42120__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42120__$2)){
var c__19140__auto__ = cljs.core.chunk_first.call(null,s__42120__$2);
var size__19141__auto__ = cljs.core.count.call(null,c__19140__auto__);
var b__42122 = cljs.core.chunk_buffer.call(null,size__19141__auto__);
if((function (){var i__42121 = (0);
while(true){
if((i__42121 < size__19141__auto__)){
var x = cljs.core._nth.call(null,c__19140__auto__,i__42121);
cljs.core.chunk_append.call(null,b__42122,obb_demo.boardground.square.call(null,obb_demo.boardground.prepare_game_data.call(null,game_data),x,y));

var G__42123 = (i__42121 + (1));
i__42121 = G__42123;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42122),obb_demo$boardground$render_$_iter__42117_$_iter__42119.call(null,cljs.core.chunk_rest.call(null,s__42120__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42122),null);
}
} else {
var x = cljs.core.first.call(null,s__42120__$2);
return cljs.core.cons.call(null,obb_demo.boardground.square.call(null,obb_demo.boardground.prepare_game_data.call(null,game_data),x,y),obb_demo$boardground$render_$_iter__42117_$_iter__42119.call(null,cljs.core.rest.call(null,s__42120__$2)));
}
} else {
return null;
}
break;
}
});})(s__42118__$1,y,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__42118__$1,y,xs__5205__auto__,temp__4657__auto__))
;
var fs__19139__auto__ = cljs.core.seq.call(null,iterys__19138__auto__.call(null,cljs.core.range.call(null,(1),(9))));
if(fs__19139__auto__){
return cljs.core.concat.call(null,fs__19139__auto__,obb_demo$boardground$render_$_iter__42117.call(null,cljs.core.rest.call(null,s__42118__$1)));
} else {
var G__42124 = cljs.core.rest.call(null,s__42118__$1);
s__42118__$1 = G__42124;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19142__auto__.call(null,cljs.core.range.call(null,(1),(9)));
})()], null)], null);
});

//# sourceMappingURL=boardground.js.map?rel=1458852296117