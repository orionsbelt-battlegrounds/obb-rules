// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
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
obb_rules.actions.strikeback.calculate_destroyed = (function obb_rules$actions$strikeback$calculate_destroyed(config,p__11947){
var map__11950 = p__11947;
var map__11950__$1 = ((((!((map__11950 == null)))?((((map__11950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11950):map__11950);
var args = map__11950__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11950__$1,cljs.core.constant$keyword$target);
var attacker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11950__$1,cljs.core.constant$keyword$attacker);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11950__$1,cljs.core.constant$keyword$board);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11950__$1,cljs.core.constant$keyword$info);
var unused_damage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11950__$1,cljs.core.constant$keyword$unused_DASH_damage);
var rebound_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11950__$1,cljs.core.constant$keyword$rebound_DASH_target);
var destroyed = obb_rules.actions.damage_calculator.destroyed(board,target,attacker);
return destroyed;
});
/**
 * Applies rebound on the board
 */
obb_rules.actions.strikeback.process_strikeback = (function obb_rules$actions$strikeback$process_strikeback(config,p__11952){
var map__11955 = p__11952;
var map__11955__$1 = ((((!((map__11955 == null)))?((((map__11955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11955):map__11955);
var args = map__11955__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11955__$1,cljs.core.constant$keyword$target);
var attacker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11955__$1,cljs.core.constant$keyword$attacker);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11955__$1,cljs.core.constant$keyword$board);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11955__$1,cljs.core.constant$keyword$info);
var unused_damage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11955__$1,cljs.core.constant$keyword$unused_DASH_damage);
var rebound_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11955__$1,cljs.core.constant$keyword$rebound_DASH_target);
var destroyed = obb_rules.actions.strikeback.calculate_destroyed(config,args);
var attacker_coordinate = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(attacker);
var board__$1 = obb_rules.board.remove_from_element.cljs$core$IFn$_invoke$arity$3(board,attacker_coordinate,destroyed);
var unit_name = obb_rules.unit.unit_name(obb_rules.element.element_unit(attacker));
var info__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(info,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$attack_DASH_type,cljs.core.constant$keyword$strikeback,cljs.core.constant$keyword$destroyed,destroyed,cljs.core.constant$keyword$unit,unit_name,cljs.core.constant$keyword$target,obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(attacker)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board__$1,info__$1], null);
});
/**
 * Checks if the attacker is in range of the target
 */
obb_rules.actions.strikeback.in_range_QMARK_ = (function obb_rules$actions$strikeback$in_range_QMARK_(target,attacker){
if(cljs.core.truth_(target)){
var vec__11959 = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(target);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11959,(0),null);
var ty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11959,(1),null);
var vec__11960 = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(attacker);
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11960,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11960,(1),null);
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
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$direct,cljs.core.get.cljs$core$IFn$_invoke$arity$2(original_info,cljs.core.constant$keyword$attack_DASH_type));
});
/**
 * Checks if the rebound can be performed
 */
obb_rules.actions.strikeback.aplicable_QMARK_ = (function obb_rules$actions$strikeback$aplicable_QMARK_(config,p__11961){
var map__11964 = p__11961;
var map__11964__$1 = ((((!((map__11964 == null)))?((((map__11964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11964):map__11964);
var args = map__11964__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11964__$1,cljs.core.constant$keyword$target);
var attacker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11964__$1,cljs.core.constant$keyword$attacker);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11964__$1,cljs.core.constant$keyword$board);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11964__$1,cljs.core.constant$keyword$info);
var and__7180__auto__ = obb_rules.actions.strikeback.in_range_QMARK_(target,attacker);
if(cljs.core.truth_(and__7180__auto__)){
var and__7180__auto____$1 = obb_rules.actions.strikeback.facing_attacker_QMARK_(target,attacker);
if(cljs.core.truth_(and__7180__auto____$1)){
return obb_rules.actions.strikeback.direct_attack_QMARK_(info);
} else {
return and__7180__auto____$1;
}
} else {
return and__7180__auto__;
}
});
/**
 * Refreshes the target to get the actual quantity
 */
obb_rules.actions.strikeback.refresh_target = (function obb_rules$actions$strikeback$refresh_target(p__11966){
var map__11969 = p__11966;
var map__11969__$1 = ((((!((map__11969 == null)))?((((map__11969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11969):map__11969);
var args = map__11969__$1;
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11969__$1,cljs.core.constant$keyword$board);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11969__$1,cljs.core.constant$keyword$target);
var target_coordinate = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(target);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(args,cljs.core.constant$keyword$target,obb_rules.board.get_element(board,target_coordinate));
});
/**
 * Processes the strikeback for the given data
 */
obb_rules.actions.strikeback.process = (function obb_rules$actions$strikeback$process(config,p__11971){
var map__11974 = p__11971;
var map__11974__$1 = ((((!((map__11974 == null)))?((((map__11974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11974):map__11974);
var args = map__11974__$1;
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11974__$1,cljs.core.constant$keyword$board);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11974__$1,cljs.core.constant$keyword$info);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11974__$1,cljs.core.constant$keyword$target);
var args__$1 = obb_rules.actions.strikeback.refresh_target(args);
if(cljs.core.truth_(obb_rules.actions.strikeback.aplicable_QMARK_(config,args__$1))){
return obb_rules.actions.strikeback.process_strikeback(config,args__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board,info], null);
}
});
