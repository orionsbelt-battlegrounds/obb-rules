// Compiled by ClojureScript 1.7.228 {}
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
if(cljs.core.not.call(null,obb_rules.game.player_turn_QMARK_.call(null,board,player))){
return "StateMismatch";
} else {
if(cljs.core.truth_(obb_rules.element.frozen_QMARK_.call(null,element))){
return "FrozenElement";
} else {
if(cljs.core.truth_(obb_rules.simplifier.not_name_EQ_.call(null,player,obb_rules.element.element_player.call(null,element)))){
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
var new_elem = obb_rules.element.element_direction.call(null,elem,new_dir);
var new_board = obb_rules.board.swap_element.call(null,board,coord,new_elem);
return obb_rules.result.action_success.call(null,new_board,(1));
});
/**
 * Builds a rotate action on a board
 */
obb_rules.actions.rotate.build_rotate = (function obb_rules$actions$rotate$build_rotate(p__41549){
var vec__41551 = p__41549;
var coord = cljs.core.nth.call(null,vec__41551,(0),null);
var new_direction = cljs.core.nth.call(null,vec__41551,(1),null);
return ((function (vec__41551,coord,new_direction){
return (function obb_rules$actions$rotate$build_rotate_$_rotator(board,player){
var element = obb_rules.board.get_element.call(null,board,coord);
var temp__4655__auto__ = obb_rules.actions.rotate.rotate_restrictions.call(null,player,board,element);
if(cljs.core.truth_(temp__4655__auto__)){
var error = temp__4655__auto__;
return obb_rules.result.action_failed.call(null,error);
} else {
return obb_rules.actions.rotate.process_rotate.call(null,board,coord,element,new_direction);
}
});
;})(vec__41551,coord,new_direction))
});

//# sourceMappingURL=rotate.js.map?rel=1458852291846