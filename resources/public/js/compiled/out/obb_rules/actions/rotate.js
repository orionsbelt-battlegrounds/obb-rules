// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.actions.rotate');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.simplifier');
goog.require('obb_rules.element');
goog.require('obb_rules.result');
goog.require('obb_rules.game');
/**
 * Checks for invalid scenarios
 */
obb_rules.actions.rotate.rotate_restrictions = (function obb_rules$actions$rotate$rotate_restrictions(player,board,element){
if((element == null)){
return "EmptyCoordinate";
} else {
if(cljs.core.not(obb_rules.game.player_turn_QMARK_(board,player))){
return "StateMismatch";
} else {
if(cljs.core.truth_(obb_rules.element.frozen_QMARK_(element))){
return "FrozenElement";
} else {
if(cljs.core.truth_(obb_rules.simplifier.not_name_EQ_(player,obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(element)))){
return "NotOwnedElement";
} else {
return null;
}
}
}
}
});
/**
 * Processes the rotate
 */
obb_rules.actions.rotate.process_rotate = (function obb_rules$actions$rotate$process_rotate(board,coord,elem,new_dir){
var new_elem = obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$2(elem,new_dir);
var new_board = obb_rules.board.swap_element(board,coord,new_elem);
return obb_rules.result.action_success.cljs$core$IFn$_invoke$arity$2(new_board,(1));
});
/**
 * Builds a rotate action on a board
 */
obb_rules.actions.rotate.build_rotate = (function obb_rules$actions$rotate$build_rotate(p__12289){
var vec__12291 = p__12289;
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12291,(0),null);
var new_direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12291,(1),null);
return ((function (vec__12291,coord,new_direction){
return (function obb_rules$actions$rotate$build_rotate_$_rotator(board,player){
var element = obb_rules.board.get_element(board,coord);
var temp__4655__auto__ = obb_rules.actions.rotate.rotate_restrictions(player,board,element);
if(cljs.core.truth_(temp__4655__auto__)){
var error = temp__4655__auto__;
return obb_rules.result.action_failed.cljs$core$IFn$_invoke$arity$1(error);
} else {
return obb_rules.actions.rotate.process_rotate(board,coord,element,new_direction);
}
});
;})(vec__12291,coord,new_direction))
});
