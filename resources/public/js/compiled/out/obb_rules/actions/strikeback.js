// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.actions.strikeback');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.actions.damage_calculator');
goog.require('obb_rules.actions.direction');
goog.require('obb_rules.math');
goog.require('obb_rules.element');
goog.require('obb_rules.unit');
/**
 * Calculates the destroyed units by rebound
 */
obb_rules.actions.strikeback.calculate_destroyed = (function obb_rules$actions$strikeback$calculate_destroyed(config,p__12069){
var map__12072 = p__12069;
var map__12072__$1 = ((((!((map__12072 == null)))?((((map__12072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12072):map__12072);
var args = map__12072__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12072__$1,cljs.core.cst$kw$target);
var attacker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12072__$1,cljs.core.cst$kw$attacker);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12072__$1,cljs.core.cst$kw$board);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12072__$1,cljs.core.cst$kw$info);
var unused_damage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12072__$1,cljs.core.cst$kw$unused_DASH_damage);
var rebound_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12072__$1,cljs.core.cst$kw$rebound_DASH_target);
var destroyed = obb_rules.actions.damage_calculator.destroyed(board,target,attacker);
return destroyed;
});
/**
 * Applies rebound on the board
 */
obb_rules.actions.strikeback.process_strikeback = (function obb_rules$actions$strikeback$process_strikeback(config,p__12074){
var map__12077 = p__12074;
var map__12077__$1 = ((((!((map__12077 == null)))?((((map__12077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12077):map__12077);
var args = map__12077__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12077__$1,cljs.core.cst$kw$target);
var attacker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12077__$1,cljs.core.cst$kw$attacker);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12077__$1,cljs.core.cst$kw$board);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12077__$1,cljs.core.cst$kw$info);
var unused_damage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12077__$1,cljs.core.cst$kw$unused_DASH_damage);
var rebound_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12077__$1,cljs.core.cst$kw$rebound_DASH_target);
var destroyed = obb_rules.actions.strikeback.calculate_destroyed(config,args);
var attacker_coordinate = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(attacker);
var board__$1 = obb_rules.board.remove_from_element.cljs$core$IFn$_invoke$arity$3(board,attacker_coordinate,destroyed);
var unit_name = obb_rules.unit.unit_name(obb_rules.element.element_unit(attacker));
var info__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(info,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$attack_DASH_type,cljs.core.cst$kw$strikeback,cljs.core.cst$kw$destroyed,destroyed,cljs.core.cst$kw$unit,unit_name,cljs.core.cst$kw$target,obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(attacker)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board__$1,info__$1], null);
});
/**
 * Checks if the attacker is in range of the target
 */
obb_rules.actions.strikeback.in_range_QMARK_ = (function obb_rules$actions$strikeback$in_range_QMARK_(target,attacker){
if(cljs.core.truth_(target)){
var vec__12081 = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(target);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12081,(0),null);
var ty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12081,(1),null);
var vec__12082 = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(attacker);
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12082,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12082,(1),null);
var distance = obb_rules.math.abs(((tx - ax) + (ty - ay)));
return (distance <= obb_rules.element.element_range(target));
} else {
return null;
}
});
/**
 * True if the target is facing it's attacker
 */
obb_rules.actions.strikeback.facing_attacker_QMARK_ = (function obb_rules$actions$strikeback$facing_attacker_QMARK_(target,attacker){
return obb_rules.actions.direction.facing_QMARK_(obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$1(target),obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$1(attacker));
});
/**
 * True if the hit was direct
 */
obb_rules.actions.strikeback.direct_attack_QMARK_ = (function obb_rules$actions$strikeback$direct_attack_QMARK_(info){
var original_info = cljs.core.first(info);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$direct,cljs.core.get.cljs$core$IFn$_invoke$arity$2(original_info,cljs.core.cst$kw$attack_DASH_type));
});
/**
 * Checks if the rebound can be performed
 */
obb_rules.actions.strikeback.aplicable_QMARK_ = (function obb_rules$actions$strikeback$aplicable_QMARK_(config,p__12083){
var map__12086 = p__12083;
var map__12086__$1 = ((((!((map__12086 == null)))?((((map__12086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12086):map__12086);
var args = map__12086__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12086__$1,cljs.core.cst$kw$target);
var attacker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12086__$1,cljs.core.cst$kw$attacker);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12086__$1,cljs.core.cst$kw$board);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12086__$1,cljs.core.cst$kw$info);
var and__6144__auto__ = obb_rules.actions.strikeback.in_range_QMARK_(target,attacker);
if(cljs.core.truth_(and__6144__auto__)){
var and__6144__auto____$1 = obb_rules.actions.strikeback.facing_attacker_QMARK_(target,attacker);
if(cljs.core.truth_(and__6144__auto____$1)){
return obb_rules.actions.strikeback.direct_attack_QMARK_(info);
} else {
return and__6144__auto____$1;
}
} else {
return and__6144__auto__;
}
});
/**
 * Refreshes the target to get the actual quantity
 */
obb_rules.actions.strikeback.refresh_target = (function obb_rules$actions$strikeback$refresh_target(p__12088){
var map__12091 = p__12088;
var map__12091__$1 = ((((!((map__12091 == null)))?((((map__12091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12091):map__12091);
var args = map__12091__$1;
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12091__$1,cljs.core.cst$kw$board);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12091__$1,cljs.core.cst$kw$target);
var target_coordinate = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(target);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(args,cljs.core.cst$kw$target,obb_rules.board.get_element(board,target_coordinate));
});
/**
 * Processes the strikeback for the given data
 */
obb_rules.actions.strikeback.process = (function obb_rules$actions$strikeback$process(config,p__12093){
var map__12096 = p__12093;
var map__12096__$1 = ((((!((map__12096 == null)))?((((map__12096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12096):map__12096);
var args = map__12096__$1;
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12096__$1,cljs.core.cst$kw$board);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12096__$1,cljs.core.cst$kw$info);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12096__$1,cljs.core.cst$kw$target);
var args__$1 = obb_rules.actions.strikeback.refresh_target(args);
if(cljs.core.truth_(obb_rules.actions.strikeback.aplicable_QMARK_(config,args__$1))){
return obb_rules.actions.strikeback.process_strikeback(config,args__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board,info], null);
}
});
