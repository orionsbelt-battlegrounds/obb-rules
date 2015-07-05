// Compiled by ClojureScript 0.0-3308 {}
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
obb_rules.actions.rebound.calculate_destroyed = (function obb_rules$actions$rebound$calculate_destroyed(config,p__23125){
var map__23128 = p__23125;
var map__23128__$1 = ((cljs.core.seq_QMARK_.call(null,map__23128))?cljs.core.apply.call(null,cljs.core.hash_map,map__23128):map__23128);
var args = map__23128__$1;
var attacker = cljs.core.get.call(null,map__23128__$1,new cljs.core.Keyword(null,"attacker","attacker",48869964));
var board = cljs.core.get.call(null,map__23128__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var info = cljs.core.get.call(null,map__23128__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var unused_damage = cljs.core.get.call(null,map__23128__$1,new cljs.core.Keyword(null,"unused-damage","unused-damage",-434036322));
var rebound_target = cljs.core.get.call(null,map__23128__$1,new cljs.core.Keyword(null,"rebound-target","rebound-target",-603961731));
var vec__23129 = obb_rules.actions.damage_calculator.destroyed_with_unused_damage.call(null,board,attacker,rebound_target,unused_damage);
var destroyed = cljs.core.nth.call(null,vec__23129,(0),null);
var _ = cljs.core.nth.call(null,vec__23129,(1),null);
return destroyed;
});
/**
 * Applies rebound on the board
 */
obb_rules.actions.rebound.process_rebound = (function obb_rules$actions$rebound$process_rebound(config,p__23130){
var map__23132 = p__23130;
var map__23132__$1 = ((cljs.core.seq_QMARK_.call(null,map__23132))?cljs.core.apply.call(null,cljs.core.hash_map,map__23132):map__23132);
var args = map__23132__$1;
var attacker = cljs.core.get.call(null,map__23132__$1,new cljs.core.Keyword(null,"attacker","attacker",48869964));
var board = cljs.core.get.call(null,map__23132__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var info = cljs.core.get.call(null,map__23132__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var unused_damage = cljs.core.get.call(null,map__23132__$1,new cljs.core.Keyword(null,"unused-damage","unused-damage",-434036322));
var rebound_target = cljs.core.get.call(null,map__23132__$1,new cljs.core.Keyword(null,"rebound-target","rebound-target",-603961731));
var destroyed = obb_rules.actions.rebound.calculate_destroyed.call(null,config,args);
var rebound_coordinate = obb_rules.element.element_coordinate.call(null,rebound_target);
var board__$1 = obb_rules.board.remove_from_element.call(null,board,rebound_coordinate,destroyed);
var unit_name = obb_rules.unit.unit_name.call(null,obb_rules.element.element_unit.call(null,rebound_target));
var info__$1 = cljs.core.conj.call(null,info,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attack-type","attack-type",-639911421),new cljs.core.Keyword(null,"rebound","rebound",-1472887389),new cljs.core.Keyword(null,"destroyed","destroyed",-427566535),destroyed,new cljs.core.Keyword(null,"unit","unit",375175175),unit_name,new cljs.core.Keyword(null,"target","target",253001721),obb_rules.element.element_player.call(null,rebound_target)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board__$1,info__$1], null);
});
/**
 * Checks if the original target was in fact destroyed
 */
obb_rules.actions.rebound.target_was_destroyed_QMARK_ = (function obb_rules$actions$rebound$target_was_destroyed_QMARK_(board,target){
var coord = obb_rules.element.element_coordinate.call(null,target);
var in_coord = obb_rules.board.get_element.call(null,board,coord);
return (in_coord == null);
});
/**
 * Checks if the rebound can be performed
 */
obb_rules.actions.rebound.aplicable_QMARK_ = (function obb_rules$actions$rebound$aplicable_QMARK_(config,p__23133){
var map__23135 = p__23133;
var map__23135__$1 = ((cljs.core.seq_QMARK_.call(null,map__23135))?cljs.core.apply.call(null,cljs.core.hash_map,map__23135):map__23135);
var args = map__23135__$1;
var target = cljs.core.get.call(null,map__23135__$1,new cljs.core.Keyword(null,"target","target",253001721));
var board = cljs.core.get.call(null,map__23135__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var unused_damage = cljs.core.get.call(null,map__23135__$1,new cljs.core.Keyword(null,"unused-damage","unused-damage",-434036322));
var rebound_target = cljs.core.get.call(null,map__23135__$1,new cljs.core.Keyword(null,"rebound-target","rebound-target",-603961731));
var and__16097__auto__ = (unused_damage >= (0));
if(and__16097__auto__){
var and__16097__auto____$1 = obb_rules.actions.rebound.target_was_destroyed_QMARK_.call(null,board,target);
if(cljs.core.truth_(and__16097__auto____$1)){
return rebound_target;
} else {
return and__16097__auto____$1;
}
} else {
return and__16097__auto__;
}
});
/**
 * Finds the target that will be damaged by rebound
 */
obb_rules.actions.rebound.rebound_target = (function obb_rules$actions$rebound$rebound_target(p__23136){
var map__23138 = p__23136;
var map__23138__$1 = ((cljs.core.seq_QMARK_.call(null,map__23138))?cljs.core.apply.call(null,cljs.core.hash_map,map__23138):map__23138);
var args = map__23138__$1;
var target = cljs.core.get.call(null,map__23138__$1,new cljs.core.Keyword(null,"target","target",253001721));
var attacker = cljs.core.get.call(null,map__23138__$1,new cljs.core.Keyword(null,"attacker","attacker",48869964));
var board = cljs.core.get.call(null,map__23138__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var info = cljs.core.get.call(null,map__23138__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var unused_damage = cljs.core.get.call(null,map__23138__$1,new cljs.core.Keyword(null,"unused-damage","unused-damage",-434036322));
var target_coord = obb_rules.element.element_coordinate.call(null,target);
var attacker_direction = obb_rules.element.element_direction.call(null,attacker);
var rebound_coord = obb_rules.actions.direction.update.call(null,attacker_direction,target_coord);
return obb_rules.board.get_element.call(null,board,rebound_coord);
});
/**
 * Processes the rebound for the given data
 */
obb_rules.actions.rebound.process = (function obb_rules$actions$rebound$process(config,p__23139){
var map__23141 = p__23139;
var map__23141__$1 = ((cljs.core.seq_QMARK_.call(null,map__23141))?cljs.core.apply.call(null,cljs.core.hash_map,map__23141):map__23141);
var args = map__23141__$1;
var board = cljs.core.get.call(null,map__23141__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var info = cljs.core.get.call(null,map__23141__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var args__$1 = cljs.core.assoc.call(null,args,new cljs.core.Keyword(null,"rebound-target","rebound-target",-603961731),obb_rules.actions.rebound.rebound_target.call(null,args));
if(cljs.core.truth_(obb_rules.actions.rebound.aplicable_QMARK_.call(null,config,args__$1))){
return obb_rules.actions.rebound.process_rebound.call(null,config,args__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board,info], null);
}
});

//# sourceMappingURL=rebound.js.map?rel=1436104824156