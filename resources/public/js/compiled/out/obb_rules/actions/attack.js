// Compiled by ClojureScript 0.0-3308 {}
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
var unit = obb_rules.element.element_unit.call(null,attacker);
var direction = obb_rules.element.element_direction.call(null,attacker);
var next_coordinate = obb_rules.actions.direction.update.call(null,direction,current_coordinate);
var next_element = obb_rules.board.get_element_consider_removed.call(null,board,next_coordinate);
var may_try_next_QMARK_ = (function (){var or__16109__auto__ = (next_element == null);
if(or__16109__auto__){
return or__16109__auto__;
} else {
return obb_rules.element.catapult_attack_QMARK_.call(null,attacker);
}
})();
var bypassed_QMARK_ = (function (){var or__16109__auto__ = bypassed_element_QMARK_;
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return (cljs.core.some_QMARK_.call(null,next_element)) && (cljs.core.not_EQ_.call(null,next_element,target));
}
})();
if(cljs.core._EQ_.call(null,next_element,target)){
if(cljs.core.truth_(bypassed_element_QMARK_)){
return new cljs.core.Keyword(null,"catapult","catapult",-369050119);
} else {
return new cljs.core.Keyword(null,"direct","direct",-1775717856);
}
} else {
if((distance >= obb_rules.unit.unit_range.call(null,unit))){
return new cljs.core.Keyword(null,"out-of-range","out-of-range",692318589);
} else {
if(cljs.core.truth_(may_try_next_QMARK_)){
var G__32975 = board;
var G__32976 = attacker;
var G__32977 = target;
var G__32978 = next_coordinate;
var G__32979 = ((1) + distance);
var G__32980 = bypassed_QMARK_;
board = G__32975;
attacker = G__32976;
target = G__32977;
current_coordinate = G__32978;
distance = G__32979;
bypassed_element_QMARK_ = G__32980;
continue;
} else {
return new cljs.core.Keyword(null,"out-of-range","out-of-range",692318589);

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
if(cljs.core.not.call(null,obb_rules.game.player_turn_QMARK_.call(null,board,player))){
return "StateMismatch";
} else {
if(cljs.core.truth_(obb_rules.element.frozen_QMARK_.call(null,attacker))){
return "FrozenElement";
} else {
if((target == null)){
return "EmptyTarget";
} else {
if(cljs.core.truth_(obb_rules.simplifier.not_name_EQ_.call(null,player,obb_rules.element.element_player.call(null,attacker)))){
return "NotOwnedElement";
} else {
if(cljs.core._EQ_.call(null,obb_rules.element.element_player.call(null,attacker),obb_rules.element.element_player.call(null,target))){
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
var temp__4423__auto__ = obb_rules.actions.attack.attack_restrictions.call(null,board,player,attacker,target);
if(cljs.core.truth_(temp__4423__auto__)){
var error_msg = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,error_msg], null);
} else {
var lock_target = obb_rules.actions.attack.advance_and_check_target.call(null,board,attacker,target,obb_rules.element.element_coordinate.call(null,attacker),(1),false);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"out-of-range","out-of-range",692318589),lock_target)){
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
var target_unit = obb_rules.element.element_unit.call(null,target);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attack-type","attack-type",-639911421),attack_type,new cljs.core.Keyword(null,"destroyed","destroyed",-427566535),destroyed,new cljs.core.Keyword(null,"unit","unit",375175175),obb_rules.unit.unit_name.call(null,target_unit),new cljs.core.Keyword(null,"target","target",253001721),obb_rules.element.element_player.call(null,target)], null)], null);
});
/**
 * Processes registered handlers for after-attack
 */
obb_rules.actions.attack.process_after_attack = (function obb_rules$actions$attack$process_after_attack(board,attacker,target,unused_damage,info){
return obb_rules.actions.hooks.process.call(null,new cljs.core.Keyword(null,"after-attack","after-attack",-1103058896),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"board","board",-1907017633),board,new cljs.core.Keyword(null,"attacker","attacker",48869964),attacker,new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"unused-damage","unused-damage",-434036322),unused_damage,new cljs.core.Keyword(null,"info","info",-317069002),info], null));
});
/**
 * Processes registered handlers for after-hit
 */
obb_rules.actions.attack.process_after_hit = (function obb_rules$actions$attack$process_after_hit(board,attacker,target,unused_damage,info){
return obb_rules.actions.hooks.process.call(null,new cljs.core.Keyword(null,"after-hit","after-hit",491119628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"board","board",-1907017633),board,new cljs.core.Keyword(null,"attacker","attacker",48869964),attacker,new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"unused-damage","unused-damage",-434036322),unused_damage,new cljs.core.Keyword(null,"info","info",-317069002),info], null));
});
/**
 * Processes registered handlers on hooks
 */
obb_rules.actions.attack.process_hooks = (function obb_rules$actions$attack$process_hooks(board,attacker,target,unused_damage,info){
var vec__32982 = obb_rules.actions.attack.process_after_attack.call(null,board,attacker,target,unused_damage,info);
var board__$1 = cljs.core.nth.call(null,vec__32982,(0),null);
var info__$1 = cljs.core.nth.call(null,vec__32982,(1),null);
return obb_rules.actions.attack.process_after_hit.call(null,board__$1,attacker,target,unused_damage,info__$1);
});
/**
 * Updates the board with state from this action, that's relevant to next
 * actions on the turn
 */
obb_rules.actions.attack.update_board_state = (function obb_rules$actions$attack$update_board_state(board,attacker,target,destroyed){
var coordinate = obb_rules.element.element_coordinate.call(null,target);
var attacker_coordinate = obb_rules.element.element_coordinate.call(null,attacker);
return obb_rules.board.destroy_from_element.call(null,obb_rules.board.swap_element.call(null,board,attacker_coordinate,obb_rules.element.freeze.call(null,attacker)),coordinate,destroyed);
});
/**
 * Processes the attack
 */
obb_rules.actions.attack.process_attack = (function obb_rules$actions$attack$process_attack(board,attacker,target,attack_type){
var vec__32985 = obb_rules.actions.damage_calculator.destroyed_with_unused_damage.call(null,board,attacker,target);
var destroyed = cljs.core.nth.call(null,vec__32985,(0),null);
var unused_damage = cljs.core.nth.call(null,vec__32985,(1),null);
var attacked_board = obb_rules.actions.attack.update_board_state.call(null,board,attacker,target,destroyed);
var attack_info = obb_rules.actions.attack.build_basic_attack_info.call(null,attack_type,destroyed,target);
var vec__32986 = obb_rules.actions.attack.process_hooks.call(null,attacked_board,attacker,target,unused_damage,attack_info);
var final_board = cljs.core.nth.call(null,vec__32986,(0),null);
var final_info = cljs.core.nth.call(null,vec__32986,(1),null);
return obb_rules.result.action_success.call(null,final_board,(1),"OK",final_info);
});
/**
 * Builds an attack action on a board
 */
obb_rules.actions.attack.build_attack = (function obb_rules$actions$attack$build_attack(p__32987){
var vec__32991 = p__32987;
var coord = cljs.core.nth.call(null,vec__32991,(0),null);
var target_coord = cljs.core.nth.call(null,vec__32991,(1),null);
return ((function (vec__32991,coord,target_coord){
return (function obb_rules$actions$attack$build_attack_$_attacker(board,player){
var attacker__$1 = obb_rules.board.get_element.call(null,board,coord);
var target = obb_rules.board.get_element.call(null,board,target_coord);
var vec__32993 = obb_rules.actions.attack.resolve_attack.call(null,board,player,attacker__$1,target);
var success_QMARK_ = cljs.core.nth.call(null,vec__32993,(0),null);
var info = cljs.core.nth.call(null,vec__32993,(1),null);
if(cljs.core.not.call(null,success_QMARK_)){
return obb_rules.result.action_failed.call(null,info);
} else {
return obb_rules.actions.attack.process_attack.call(null,board,attacker__$1,target,info);
}
});
;})(vec__32991,coord,target_coord))
});

//# sourceMappingURL=attack.js.map?rel=1436517557005