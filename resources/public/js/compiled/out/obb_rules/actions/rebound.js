// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.actions.rebound');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.actions.damage_calculator');
goog.require('obb_rules.actions.direction');
goog.require('obb_rules.element');
goog.require('obb_rules.unit');
/**
 * Calculates the destroyed units by rebound
 */
obb_rules.actions.rebound.calculate_destroyed = (function obb_rules$actions$rebound$calculate_destroyed(config,p__15131){
var map__15135 = p__15131;
var map__15135__$1 = ((((!((map__15135 == null)))?((((map__15135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15135):map__15135);
var args = map__15135__$1;
var attacker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15135__$1,cljs.core.cst$kw$attacker);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15135__$1,cljs.core.cst$kw$board);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15135__$1,cljs.core.cst$kw$info);
var unused_damage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15135__$1,cljs.core.cst$kw$unused_DASH_damage);
var rebound_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15135__$1,cljs.core.cst$kw$rebound_DASH_target);
var vec__15137 = obb_rules.actions.damage_calculator.destroyed_with_unused_damage.cljs$core$IFn$_invoke$arity$4(board,attacker,rebound_target,unused_damage);
var destroyed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15137,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15137,(1),null);
return destroyed;
});
/**
 * Applies rebound on the board
 */
obb_rules.actions.rebound.process_rebound = (function obb_rules$actions$rebound$process_rebound(config,p__15138){
var map__15141 = p__15138;
var map__15141__$1 = ((((!((map__15141 == null)))?((((map__15141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15141):map__15141);
var args = map__15141__$1;
var attacker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15141__$1,cljs.core.cst$kw$attacker);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15141__$1,cljs.core.cst$kw$board);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15141__$1,cljs.core.cst$kw$info);
var unused_damage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15141__$1,cljs.core.cst$kw$unused_DASH_damage);
var rebound_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15141__$1,cljs.core.cst$kw$rebound_DASH_target);
var destroyed = obb_rules.actions.rebound.calculate_destroyed(config,args);
var rebound_coordinate = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(rebound_target);
var board__$1 = obb_rules.board.remove_from_element.cljs$core$IFn$_invoke$arity$3(board,rebound_coordinate,destroyed);
var unit_name = obb_rules.unit.unit_name(obb_rules.element.element_unit(rebound_target));
var info__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(info,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$attack_DASH_type,cljs.core.cst$kw$rebound,cljs.core.cst$kw$destroyed,destroyed,cljs.core.cst$kw$unit,unit_name,cljs.core.cst$kw$target,obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(rebound_target)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board__$1,info__$1], null);
});
/**
 * Checks if the original target was in fact destroyed
 */
obb_rules.actions.rebound.target_was_destroyed_QMARK_ = (function obb_rules$actions$rebound$target_was_destroyed_QMARK_(board,target){
var coord = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(target);
var in_coord = obb_rules.board.get_element(board,coord);
return (in_coord == null);
});
/**
 * Checks if the rebound can be performed
 */
obb_rules.actions.rebound.aplicable_QMARK_ = (function obb_rules$actions$rebound$aplicable_QMARK_(config,p__15143){
var map__15146 = p__15143;
var map__15146__$1 = ((((!((map__15146 == null)))?((((map__15146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15146):map__15146);
var args = map__15146__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15146__$1,cljs.core.cst$kw$target);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15146__$1,cljs.core.cst$kw$board);
var unused_damage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15146__$1,cljs.core.cst$kw$unused_DASH_damage);
var rebound_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15146__$1,cljs.core.cst$kw$rebound_DASH_target);
var and__6144__auto__ = (unused_damage >= (0));
if(and__6144__auto__){
var and__6144__auto____$1 = obb_rules.actions.rebound.target_was_destroyed_QMARK_(board,target);
if(cljs.core.truth_(and__6144__auto____$1)){
return rebound_target;
} else {
return and__6144__auto____$1;
}
} else {
return and__6144__auto__;
}
});
/**
 * Finds the target that will be damaged by rebound
 */
obb_rules.actions.rebound.rebound_target = (function obb_rules$actions$rebound$rebound_target(p__15148){
var map__15151 = p__15148;
var map__15151__$1 = ((((!((map__15151 == null)))?((((map__15151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15151):map__15151);
var args = map__15151__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15151__$1,cljs.core.cst$kw$target);
var attacker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15151__$1,cljs.core.cst$kw$attacker);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15151__$1,cljs.core.cst$kw$board);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15151__$1,cljs.core.cst$kw$info);
var unused_damage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15151__$1,cljs.core.cst$kw$unused_DASH_damage);
var target_coord = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(target);
var attacker_direction = obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$1(attacker);
var rebound_coord = obb_rules.actions.direction.update(attacker_direction,target_coord);
return obb_rules.board.get_element(board,rebound_coord);
});
/**
 * Processes the rebound for the given data
 */
obb_rules.actions.rebound.process = (function obb_rules$actions$rebound$process(config,p__15153){
var map__15156 = p__15153;
var map__15156__$1 = ((((!((map__15156 == null)))?((((map__15156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15156):map__15156);
var args = map__15156__$1;
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15156__$1,cljs.core.cst$kw$board);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15156__$1,cljs.core.cst$kw$info);
var args__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(args,cljs.core.cst$kw$rebound_DASH_target,obb_rules.actions.rebound.rebound_target(args));
if(cljs.core.truth_(obb_rules.actions.rebound.aplicable_QMARK_(config,args__$1))){
return obb_rules.actions.rebound.process_rebound(config,args__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board,info], null);
}
});
