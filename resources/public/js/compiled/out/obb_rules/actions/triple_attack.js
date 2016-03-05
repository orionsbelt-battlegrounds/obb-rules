// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.actions.triple_attack');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.actions.damage_calculator');
goog.require('obb_rules.actions.direction');
goog.require('obb_rules.simplifier');
goog.require('obb_rules.element');
goog.require('obb_rules.unit');
/**
 * True if the elements are from different players
 */
obb_rules.actions.triple_attack.different_players_QMARK_ = (function obb_rules$actions$triple_attack$different_players_QMARK_(attacker,target){
return obb_rules.simplifier.not_name_EQ_(obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(attacker),obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(target));
});
/**
 * Applies the triple damage to a target
 */
obb_rules.actions.triple_attack.apply_triple = (function obb_rules$actions$triple_attack$apply_triple(config,attacker,board,info,target){
if(cljs.core.truth_((function (){var and__6144__auto__ = target;
if(cljs.core.truth_(and__6144__auto__)){
return obb_rules.actions.triple_attack.different_players_QMARK_(attacker,target);
} else {
return and__6144__auto__;
}
})())){
var destroyed = obb_rules.actions.damage_calculator.destroyed(board,attacker,target);
var target_coordinate = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(target);
var board__$1 = obb_rules.board.remove_from_element.cljs$core$IFn$_invoke$arity$3(board,target_coordinate,destroyed);
var unit_name = obb_rules.unit.unit_name(obb_rules.element.element_unit(target));
var info__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(info,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$attack_DASH_type,cljs.core.cst$kw$triple,cljs.core.cst$kw$destroyed,destroyed,cljs.core.cst$kw$unit,unit_name,cljs.core.cst$kw$target,obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(target)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board__$1,info__$1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board,info], null);
}
});
/**
 * Applies triple on the board
 */
obb_rules.actions.triple_attack.process_triple = (function obb_rules$actions$triple_attack$process_triple(config,p__15160){
var map__15164 = p__15160;
var map__15164__$1 = ((((!((map__15164 == null)))?((((map__15164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15164):map__15164);
var args = map__15164__$1;
var attacker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15164__$1,cljs.core.cst$kw$attacker);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15164__$1,cljs.core.cst$kw$board);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15164__$1,cljs.core.cst$kw$info);
var unused_damage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15164__$1,cljs.core.cst$kw$unused_DASH_damage);
var targets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15164__$1,cljs.core.cst$kw$triple_DASH_targets);
var targets__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(args,cljs.core.cst$kw$triple_DASH_targets);
var vec__15166 = obb_rules.actions.triple_attack.apply_triple(config,attacker,board,info,cljs.core.first(targets__$1));
var board__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15166,(0),null);
var info__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15166,(1),null);
return obb_rules.actions.triple_attack.apply_triple(config,attacker,board__$1,info__$1,cljs.core.second(targets__$1));
});
/**
 * Checks if the triple can be performed
 */
obb_rules.actions.triple_attack.aplicable_QMARK_ = (function obb_rules$actions$triple_attack$aplicable_QMARK_(config,p__15167){
var map__15170 = p__15167;
var map__15170__$1 = ((((!((map__15170 == null)))?((((map__15170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15170):map__15170);
var args = map__15170__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15170__$1,cljs.core.cst$kw$target);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15170__$1,cljs.core.cst$kw$board);
var unused_damage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15170__$1,cljs.core.cst$kw$unused_DASH_damage);
return true;
});
/**
 * Finds the target that will be damaged by triple
 */
obb_rules.actions.triple_attack.triple_targets = (function obb_rules$actions$triple_attack$triple_targets(p__15172){
var map__15175 = p__15172;
var map__15175__$1 = ((((!((map__15175 == null)))?((((map__15175.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15175.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15175):map__15175);
var args = map__15175__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15175__$1,cljs.core.cst$kw$target);
var attacker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15175__$1,cljs.core.cst$kw$attacker);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15175__$1,cljs.core.cst$kw$board);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15175__$1,cljs.core.cst$kw$info);
var target_coord = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(target);
var attacker_direction = obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$1(attacker);
var triple_coords = obb_rules.actions.direction.perpendicular(target_coord,attacker_direction);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.board.get_element(board,cljs.core.first(triple_coords)),obb_rules.board.get_element(board,cljs.core.second(triple_coords))], null);
});
/**
 * Processes the triple for the given data
 */
obb_rules.actions.triple_attack.process = (function obb_rules$actions$triple_attack$process(config,p__15177){
var map__15180 = p__15177;
var map__15180__$1 = ((((!((map__15180 == null)))?((((map__15180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15180):map__15180);
var args = map__15180__$1;
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15180__$1,cljs.core.cst$kw$board);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15180__$1,cljs.core.cst$kw$info);
var args__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(args,cljs.core.cst$kw$triple_DASH_targets,obb_rules.actions.triple_attack.triple_targets(args));
if(cljs.core.truth_(obb_rules.actions.triple_attack.aplicable_QMARK_(config,args__$1))){
return obb_rules.actions.triple_attack.process_triple(config,args__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board,info], null);
}
});
