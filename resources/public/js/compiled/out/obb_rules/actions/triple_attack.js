// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
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
if(cljs.core.truth_((function (){var and__6813__auto__ = target;
if(cljs.core.truth_(and__6813__auto__)){
return obb_rules.actions.triple_attack.different_players_QMARK_(attacker,target);
} else {
return and__6813__auto__;
}
})())){
var destroyed = obb_rules.actions.damage_calculator.destroyed(board,attacker,target);
var target_coordinate = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(target);
var board__$1 = obb_rules.board.remove_from_element.cljs$core$IFn$_invoke$arity$3(board,target_coordinate,destroyed);
var unit_name = obb_rules.unit.unit_name(obb_rules.element.element_unit(target));
var info__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(info,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$attack_DASH_type,cljs.core.constant$keyword$triple,cljs.core.constant$keyword$destroyed,destroyed,cljs.core.constant$keyword$unit,unit_name,cljs.core.constant$keyword$target,obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(target)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board__$1,info__$1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board,info], null);
}
});
/**
 * Applies triple on the board
 */
obb_rules.actions.triple_attack.process_triple = (function obb_rules$actions$triple_attack$process_triple(config,p__12650){
var map__12653 = p__12650;
var map__12653__$1 = ((cljs.core.seq_QMARK_(map__12653))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12653):map__12653);
var args = map__12653__$1;
var attacker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12653__$1,cljs.core.constant$keyword$attacker);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12653__$1,cljs.core.constant$keyword$board);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12653__$1,cljs.core.constant$keyword$info);
var unused_damage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12653__$1,cljs.core.constant$keyword$unused_DASH_damage);
var targets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12653__$1,cljs.core.constant$keyword$triple_DASH_targets);
var targets__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(args,cljs.core.constant$keyword$triple_DASH_targets);
var vec__12654 = obb_rules.actions.triple_attack.apply_triple(config,attacker,board,info,cljs.core.first(targets__$1));
var board__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12654,(0),null);
var info__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12654,(1),null);
return obb_rules.actions.triple_attack.apply_triple(config,attacker,board__$1,info__$1,cljs.core.second(targets__$1));
});
/**
 * Checks if the triple can be performed
 */
obb_rules.actions.triple_attack.aplicable_QMARK_ = (function obb_rules$actions$triple_attack$aplicable_QMARK_(config,p__12655){
var map__12657 = p__12655;
var map__12657__$1 = ((cljs.core.seq_QMARK_(map__12657))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12657):map__12657);
var args = map__12657__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12657__$1,cljs.core.constant$keyword$target);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12657__$1,cljs.core.constant$keyword$board);
var unused_damage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12657__$1,cljs.core.constant$keyword$unused_DASH_damage);
return true;
});
/**
 * Finds the target that will be damaged by triple
 */
obb_rules.actions.triple_attack.triple_targets = (function obb_rules$actions$triple_attack$triple_targets(p__12658){
var map__12660 = p__12658;
var map__12660__$1 = ((cljs.core.seq_QMARK_(map__12660))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12660):map__12660);
var args = map__12660__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12660__$1,cljs.core.constant$keyword$target);
var attacker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12660__$1,cljs.core.constant$keyword$attacker);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12660__$1,cljs.core.constant$keyword$board);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12660__$1,cljs.core.constant$keyword$info);
var target_coord = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(target);
var attacker_direction = obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$1(attacker);
var triple_coords = obb_rules.actions.direction.perpendicular(target_coord,attacker_direction);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.board.get_element(board,cljs.core.first(triple_coords)),obb_rules.board.get_element(board,cljs.core.second(triple_coords))], null);
});
/**
 * Processes the triple for the given data
 */
obb_rules.actions.triple_attack.process = (function obb_rules$actions$triple_attack$process(config,p__12661){
var map__12663 = p__12661;
var map__12663__$1 = ((cljs.core.seq_QMARK_(map__12663))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12663):map__12663);
var args = map__12663__$1;
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12663__$1,cljs.core.constant$keyword$board);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12663__$1,cljs.core.constant$keyword$info);
var args__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(args,cljs.core.constant$keyword$triple_DASH_targets,obb_rules.actions.triple_attack.triple_targets(args));
if(cljs.core.truth_(obb_rules.actions.triple_attack.aplicable_QMARK_(config,args__$1))){
return obb_rules.actions.triple_attack.process_triple(config,args__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board,info], null);
}
});
