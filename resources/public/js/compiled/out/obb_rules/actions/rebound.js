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
obb_rules.actions.rebound.calculate_destroyed = (function obb_rules$actions$rebound$calculate_destroyed(config,p__12100){
var map__12104 = p__12100;
var map__12104__$1 = ((((!((map__12104 == null)))?((((map__12104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12104):map__12104);
var args = map__12104__$1;
var attacker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12104__$1,cljs.core.cst$kw$attacker);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12104__$1,cljs.core.cst$kw$board);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12104__$1,cljs.core.cst$kw$info);
var unused_damage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12104__$1,cljs.core.cst$kw$unused_DASH_damage);
var rebound_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12104__$1,cljs.core.cst$kw$rebound_DASH_target);
var vec__12106 = obb_rules.actions.damage_calculator.destroyed_with_unused_damage.cljs$core$IFn$_invoke$arity$4(board,attacker,rebound_target,unused_damage);
var destroyed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12106,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12106,(1),null);
return destroyed;
});
/**
 * Applies rebound on the board
 */
obb_rules.actions.rebound.process_rebound = (function obb_rules$actions$rebound$process_rebound(config,p__12107){
var map__12110 = p__12107;
var map__12110__$1 = ((((!((map__12110 == null)))?((((map__12110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12110):map__12110);
var args = map__12110__$1;
var attacker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12110__$1,cljs.core.cst$kw$attacker);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12110__$1,cljs.core.cst$kw$board);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12110__$1,cljs.core.cst$kw$info);
var unused_damage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12110__$1,cljs.core.cst$kw$unused_DASH_damage);
var rebound_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12110__$1,cljs.core.cst$kw$rebound_DASH_target);
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
obb_rules.actions.rebound.aplicable_QMARK_ = (function obb_rules$actions$rebound$aplicable_QMARK_(config,p__12112){
var map__12115 = p__12112;
var map__12115__$1 = ((((!((map__12115 == null)))?((((map__12115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12115):map__12115);
var args = map__12115__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12115__$1,cljs.core.cst$kw$target);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12115__$1,cljs.core.cst$kw$board);
var unused_damage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12115__$1,cljs.core.cst$kw$unused_DASH_damage);
var rebound_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12115__$1,cljs.core.cst$kw$rebound_DASH_target);
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
obb_rules.actions.rebound.rebound_target = (function obb_rules$actions$rebound$rebound_target(p__12117){
var map__12120 = p__12117;
var map__12120__$1 = ((((!((map__12120 == null)))?((((map__12120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12120):map__12120);
var args = map__12120__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12120__$1,cljs.core.cst$kw$target);
var attacker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12120__$1,cljs.core.cst$kw$attacker);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12120__$1,cljs.core.cst$kw$board);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12120__$1,cljs.core.cst$kw$info);
var unused_damage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12120__$1,cljs.core.cst$kw$unused_DASH_damage);
var target_coord = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(target);
var attacker_direction = obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$1(attacker);
var rebound_coord = obb_rules.actions.direction.update(attacker_direction,target_coord);
return obb_rules.board.get_element(board,rebound_coord);
});
/**
 * Processes the rebound for the given data
 */
obb_rules.actions.rebound.process = (function obb_rules$actions$rebound$process(config,p__12122){
var map__12125 = p__12122;
var map__12125__$1 = ((((!((map__12125 == null)))?((((map__12125.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12125.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12125):map__12125);
var args = map__12125__$1;
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12125__$1,cljs.core.cst$kw$board);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12125__$1,cljs.core.cst$kw$info);
var args__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(args,cljs.core.cst$kw$rebound_DASH_target,obb_rules.actions.rebound.rebound_target(args));
if(cljs.core.truth_(obb_rules.actions.rebound.aplicable_QMARK_(config,args__$1))){
return obb_rules.actions.rebound.process_rebound(config,args__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board,info], null);
}
});
