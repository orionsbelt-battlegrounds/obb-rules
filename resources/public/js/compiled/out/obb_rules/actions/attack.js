// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.actions.attack');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.actions.damage_calculator');
goog.require('obb_rules.actions.direction');
goog.require('obb_rules.simplifier');
goog.require('obb_rules.element');
goog.require('obb_rules.result');
goog.require('obb_rules.unit');
goog.require('obb_rules.game');
goog.require('obb_rules.actions.hooks');
/**
 * Goes to the next coordinate and checks if the target is valid
 */
obb_rules.actions.attack.advance_and_check_target = (function obb_rules$actions$attack$advance_and_check_target(board,attacker,target,current_coordinate,distance,bypassed_element_QMARK_){
while(true){
var unit = obb_rules.element.element_unit(attacker);
var direction = obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$1(attacker);
var next_coordinate = obb_rules.actions.direction.update(direction,current_coordinate);
var next_element = obb_rules.board.get_element_consider_removed(board,next_coordinate);
var may_try_next_QMARK_ = (function (){var or__6800__auto__ = (next_element == null);
if(or__6800__auto__){
return or__6800__auto__;
} else {
return obb_rules.element.catapult_attack_QMARK_(attacker);
}
})();
var bypassed_QMARK_ = (function (){var or__6800__auto__ = bypassed_element_QMARK_;
if(cljs.core.truth_(or__6800__auto__)){
return or__6800__auto__;
} else {
return (cljs.core.some_QMARK_(next_element)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_element,target));
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_element,target)){
if(cljs.core.truth_(bypassed_element_QMARK_)){
return cljs.core.constant$keyword$catapult;
} else {
return cljs.core.constant$keyword$direct;
}
} else {
if((distance >= obb_rules.unit.unit_range(unit))){
return cljs.core.constant$keyword$out_DASH_of_DASH_range;
} else {
if(cljs.core.truth_(may_try_next_QMARK_)){
var G__12673 = board;
var G__12674 = attacker;
var G__12675 = target;
var G__12676 = next_coordinate;
var G__12677 = ((1) + distance);
var G__12678 = bypassed_QMARK_;
board = G__12673;
attacker = G__12674;
target = G__12675;
current_coordinate = G__12676;
distance = G__12677;
bypassed_element_QMARK_ = G__12678;
continue;
} else {
return cljs.core.constant$keyword$out_DASH_of_DASH_range;

}
}
}
break;
}
});
/**
 * Checks if the attack is possible
 */
obb_rules.actions.attack.attack_restrictions = (function obb_rules$actions$attack$attack_restrictions(board,player,attacker,target){
if((attacker == null)){
return "EmptyAttacker";
} else {
if(cljs.core.not(obb_rules.game.player_turn_QMARK_(board,player))){
return "StateMismatch";
} else {
if(cljs.core.truth_(obb_rules.element.frozen_QMARK_(attacker))){
return "FrozenElement";
} else {
if((target == null)){
return "EmptyTarget";
} else {
if(cljs.core.truth_(obb_rules.simplifier.not_name_EQ_(player,obb_rules.element.element_player(attacker)))){
return "NotOwnedElement";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(obb_rules.element.element_player(attacker),obb_rules.element.element_player(target))){
return "SamePlayer";
} else {
return null;
}
}
}
}
}
}
});
/**
 * Checks if the target element is in range
 */
obb_rules.actions.attack.resolve_attack = (function obb_rules$actions$attack$resolve_attack(board,player,attacker,target){
var temp__4423__auto__ = obb_rules.actions.attack.attack_restrictions(board,player,attacker,target);
if(cljs.core.truth_(temp__4423__auto__)){
var error_msg = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,error_msg], null);
} else {
var lock_target = obb_rules.actions.attack.advance_and_check_target(board,attacker,target,obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(attacker),(1),false);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$out_DASH_of_DASH_range,lock_target)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,"OutOfRange"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,lock_target], null);
}
}
});
/**
 * Builds information about the concrete attack, without the side effects
 */
obb_rules.actions.attack.build_basic_attack_info = (function obb_rules$actions$attack$build_basic_attack_info(attack_type,destroyed,target){
var target_unit = obb_rules.element.element_unit(target);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$attack_DASH_type,attack_type,cljs.core.constant$keyword$destroyed,destroyed,cljs.core.constant$keyword$unit,obb_rules.unit.unit_name(target_unit),cljs.core.constant$keyword$target,obb_rules.element.element_player(target)], null)], null);
});
/**
 * Processes registered handlers for after-attack
 */
obb_rules.actions.attack.process_after_attack = (function obb_rules$actions$attack$process_after_attack(board,attacker,target,unused_damage,info){
var G__12681 = cljs.core.constant$keyword$after_DASH_attack;
var G__12682 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$board,board,cljs.core.constant$keyword$attacker,attacker,cljs.core.constant$keyword$target,target,cljs.core.constant$keyword$unused_DASH_damage,unused_damage,cljs.core.constant$keyword$info,info], null);
return (obb_rules.actions.hooks.process.cljs$core$IFn$_invoke$arity$2 ? obb_rules.actions.hooks.process.cljs$core$IFn$_invoke$arity$2(G__12681,G__12682) : obb_rules.actions.hooks.process.call(null,G__12681,G__12682));
});
/**
 * Processes registered handlers for after-hit
 */
obb_rules.actions.attack.process_after_hit = (function obb_rules$actions$attack$process_after_hit(board,attacker,target,unused_damage,info){
var G__12685 = cljs.core.constant$keyword$after_DASH_hit;
var G__12686 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$board,board,cljs.core.constant$keyword$attacker,attacker,cljs.core.constant$keyword$target,target,cljs.core.constant$keyword$unused_DASH_damage,unused_damage,cljs.core.constant$keyword$info,info], null);
return (obb_rules.actions.hooks.process.cljs$core$IFn$_invoke$arity$2 ? obb_rules.actions.hooks.process.cljs$core$IFn$_invoke$arity$2(G__12685,G__12686) : obb_rules.actions.hooks.process.call(null,G__12685,G__12686));
});
/**
 * Processes registered handlers on hooks
 */
obb_rules.actions.attack.process_hooks = (function obb_rules$actions$attack$process_hooks(board,attacker,target,unused_damage,info){
var vec__12688 = obb_rules.actions.attack.process_after_attack(board,attacker,target,unused_damage,info);
var board__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12688,(0),null);
var info__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12688,(1),null);
return obb_rules.actions.attack.process_after_hit(board__$1,attacker,target,unused_damage,info__$1);
});
/**
 * Updates the board with state from this action, that's relevant to next
 * actions on the turn
 */
obb_rules.actions.attack.update_board_state = (function obb_rules$actions$attack$update_board_state(board,attacker,target,destroyed){
var coordinate = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(target);
var attacker_coordinate = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(attacker);
return obb_rules.board.destroy_from_element(obb_rules.board.swap_element(board,attacker_coordinate,obb_rules.element.freeze(attacker)),coordinate,destroyed);
});
/**
 * Processes the attack
 */
obb_rules.actions.attack.process_attack = (function obb_rules$actions$attack$process_attack(board,attacker,target,attack_type){
var vec__12691 = obb_rules.actions.damage_calculator.destroyed_with_unused_damage.cljs$core$IFn$_invoke$arity$3(board,attacker,target);
var destroyed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12691,(0),null);
var unused_damage = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12691,(1),null);
var attacked_board = obb_rules.actions.attack.update_board_state(board,attacker,target,destroyed);
var attack_info = obb_rules.actions.attack.build_basic_attack_info(attack_type,destroyed,target);
var vec__12692 = obb_rules.actions.attack.process_hooks(attacked_board,attacker,target,unused_damage,attack_info);
var final_board = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12692,(0),null);
var final_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12692,(1),null);
return obb_rules.result.action_success.cljs$core$IFn$_invoke$arity$4(final_board,(1),"OK",final_info);
});
/**
 * Builds an attack action on a board
 */
obb_rules.actions.attack.build_attack = (function obb_rules$actions$attack$build_attack(p__12693){
var vec__12697 = p__12693;
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12697,(0),null);
var target_coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12697,(1),null);
return ((function (vec__12697,coord,target_coord){
return (function obb_rules$actions$attack$build_attack_$_attacker(board,player){
var attacker__$1 = obb_rules.board.get_element(board,coord);
var target = obb_rules.board.get_element(board,target_coord);
var vec__12699 = obb_rules.actions.attack.resolve_attack(board,player,attacker__$1,target);
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12699,(0),null);
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12699,(1),null);
if(cljs.core.not(success_QMARK_)){
return obb_rules.result.action_failed.cljs$core$IFn$_invoke$arity$1(info);
} else {
return obb_rules.actions.attack.process_attack(board,attacker__$1,target,info);
}
});
;})(vec__12697,coord,target_coord))
});
