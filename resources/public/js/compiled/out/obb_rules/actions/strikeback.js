// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_rules.actions.strikeback');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.actions.damage_calculator');
goog.require('obb_rules.actions.direction');
goog.require('obb_rules.element');
goog.require('obb_rules.unit');
/**
 * Calculates the destroyed units by rebound
 */
obb_rules.actions.strikeback.calculate_destroyed = (function obb_rules$actions$strikeback$calculate_destroyed(config,p__32904){
var map__32906 = p__32904;
var map__32906__$1 = ((cljs.core.seq_QMARK_.call(null,map__32906))?cljs.core.apply.call(null,cljs.core.hash_map,map__32906):map__32906);
var args = map__32906__$1;
var target = cljs.core.get.call(null,map__32906__$1,new cljs.core.Keyword(null,"target","target",253001721));
var attacker = cljs.core.get.call(null,map__32906__$1,new cljs.core.Keyword(null,"attacker","attacker",48869964));
var board = cljs.core.get.call(null,map__32906__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var info = cljs.core.get.call(null,map__32906__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var unused_damage = cljs.core.get.call(null,map__32906__$1,new cljs.core.Keyword(null,"unused-damage","unused-damage",-434036322));
var rebound_target = cljs.core.get.call(null,map__32906__$1,new cljs.core.Keyword(null,"rebound-target","rebound-target",-603961731));
var destroyed = obb_rules.actions.damage_calculator.destroyed.call(null,board,target,attacker);
return destroyed;
});
/**
 * Applies rebound on the board
 */
obb_rules.actions.strikeback.process_strikeback = (function obb_rules$actions$strikeback$process_strikeback(config,p__32907){
var map__32909 = p__32907;
var map__32909__$1 = ((cljs.core.seq_QMARK_.call(null,map__32909))?cljs.core.apply.call(null,cljs.core.hash_map,map__32909):map__32909);
var args = map__32909__$1;
var target = cljs.core.get.call(null,map__32909__$1,new cljs.core.Keyword(null,"target","target",253001721));
var attacker = cljs.core.get.call(null,map__32909__$1,new cljs.core.Keyword(null,"attacker","attacker",48869964));
var board = cljs.core.get.call(null,map__32909__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var info = cljs.core.get.call(null,map__32909__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var unused_damage = cljs.core.get.call(null,map__32909__$1,new cljs.core.Keyword(null,"unused-damage","unused-damage",-434036322));
var rebound_target = cljs.core.get.call(null,map__32909__$1,new cljs.core.Keyword(null,"rebound-target","rebound-target",-603961731));
var destroyed = obb_rules.actions.strikeback.calculate_destroyed.call(null,config,args);
var attacker_coordinate = obb_rules.element.element_coordinate.call(null,attacker);
var board__$1 = obb_rules.board.remove_from_element.call(null,board,attacker_coordinate,destroyed);
var unit_name = obb_rules.unit.unit_name.call(null,obb_rules.element.element_unit.call(null,attacker));
var info__$1 = cljs.core.conj.call(null,info,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attack-type","attack-type",-639911421),new cljs.core.Keyword(null,"strikeback","strikeback",833058309),new cljs.core.Keyword(null,"destroyed","destroyed",-427566535),destroyed,new cljs.core.Keyword(null,"unit","unit",375175175),unit_name,new cljs.core.Keyword(null,"target","target",253001721),obb_rules.element.element_player.call(null,attacker)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board__$1,info__$1], null);
});
/**
 * Checks if the attacker is in range of the target
 */
obb_rules.actions.strikeback.in_range_QMARK_ = (function obb_rules$actions$strikeback$in_range_QMARK_(target,attacker){
if(cljs.core.truth_(target)){
var vec__32912 = obb_rules.element.element_coordinate.call(null,target);
var tx = cljs.core.nth.call(null,vec__32912,(0),null);
var ty = cljs.core.nth.call(null,vec__32912,(1),null);
var vec__32913 = obb_rules.element.element_coordinate.call(null,attacker);
var ax = cljs.core.nth.call(null,vec__32913,(0),null);
var ay = cljs.core.nth.call(null,vec__32913,(1),null);
var distance = ((tx - ax) + (ty - ay));
return (distance <= obb_rules.element.element_range.call(null,target));
} else {
return false;
}
});
/**
 * True if the target is facing it's attacker
 */
obb_rules.actions.strikeback.facing_attacker_QMARK_ = (function obb_rules$actions$strikeback$facing_attacker_QMARK_(target,attacker){
return obb_rules.actions.direction.facing_QMARK_.call(null,obb_rules.element.element_direction.call(null,target),obb_rules.element.element_direction.call(null,attacker));
});
/**
 * True if the hit was direct
 */
obb_rules.actions.strikeback.direct_attack_QMARK_ = (function obb_rules$actions$strikeback$direct_attack_QMARK_(info){
var original_info = cljs.core.first.call(null,info);
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"direct","direct",-1775717856),cljs.core.get.call(null,original_info,new cljs.core.Keyword(null,"attack-type","attack-type",-639911421)));
});
/**
 * Checks if the rebound can be performed
 */
obb_rules.actions.strikeback.aplicable_QMARK_ = (function obb_rules$actions$strikeback$aplicable_QMARK_(config,p__32914){
var map__32916 = p__32914;
var map__32916__$1 = ((cljs.core.seq_QMARK_.call(null,map__32916))?cljs.core.apply.call(null,cljs.core.hash_map,map__32916):map__32916);
var args = map__32916__$1;
var target = cljs.core.get.call(null,map__32916__$1,new cljs.core.Keyword(null,"target","target",253001721));
var attacker = cljs.core.get.call(null,map__32916__$1,new cljs.core.Keyword(null,"attacker","attacker",48869964));
var board = cljs.core.get.call(null,map__32916__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var info = cljs.core.get.call(null,map__32916__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var and__16097__auto__ = obb_rules.actions.strikeback.in_range_QMARK_.call(null,target,attacker);
if(cljs.core.truth_(and__16097__auto__)){
var and__16097__auto____$1 = obb_rules.actions.strikeback.facing_attacker_QMARK_.call(null,target,attacker);
if(cljs.core.truth_(and__16097__auto____$1)){
return obb_rules.actions.strikeback.direct_attack_QMARK_.call(null,info);
} else {
return and__16097__auto____$1;
}
} else {
return and__16097__auto__;
}
});
/**
 * Refreshes the target to get the actual quantity
 */
obb_rules.actions.strikeback.refresh_target = (function obb_rules$actions$strikeback$refresh_target(p__32917){
var map__32919 = p__32917;
var map__32919__$1 = ((cljs.core.seq_QMARK_.call(null,map__32919))?cljs.core.apply.call(null,cljs.core.hash_map,map__32919):map__32919);
var args = map__32919__$1;
var board = cljs.core.get.call(null,map__32919__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var target = cljs.core.get.call(null,map__32919__$1,new cljs.core.Keyword(null,"target","target",253001721));
var target_coordinate = obb_rules.element.element_coordinate.call(null,target);
return cljs.core.assoc.call(null,args,new cljs.core.Keyword(null,"target","target",253001721),obb_rules.board.get_element.call(null,board,target_coordinate));
});
/**
 * Processes the strikeback for the given data
 */
obb_rules.actions.strikeback.process = (function obb_rules$actions$strikeback$process(config,p__32920){
var map__32922 = p__32920;
var map__32922__$1 = ((cljs.core.seq_QMARK_.call(null,map__32922))?cljs.core.apply.call(null,cljs.core.hash_map,map__32922):map__32922);
var args = map__32922__$1;
var board = cljs.core.get.call(null,map__32922__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var info = cljs.core.get.call(null,map__32922__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var target = cljs.core.get.call(null,map__32922__$1,new cljs.core.Keyword(null,"target","target",253001721));
var args__$1 = obb_rules.actions.strikeback.refresh_target.call(null,args);
if(cljs.core.truth_(obb_rules.actions.strikeback.aplicable_QMARK_.call(null,config,args__$1))){
return obb_rules.actions.strikeback.process_strikeback.call(null,config,args__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board,info], null);
}
});

//# sourceMappingURL=strikeback.js.map?rel=1436517556712