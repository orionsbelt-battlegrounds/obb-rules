// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_rules.actions.triple_attack');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.actions.damage_calculator');
goog.require('obb_rules.actions.direction');
goog.require('obb_rules.element');
goog.require('obb_rules.unit');
/**
 * Applies the triple damage to a target
 */
obb_rules.actions.triple_attack.apply_triple = (function obb_rules$actions$triple_attack$apply_triple(config,attacker,board,info,target){
if(cljs.core.truth_(target)){
var destroyed = obb_rules.actions.damage_calculator.destroyed.call(null,board,attacker,target);
var target_coordinate = obb_rules.element.element_coordinate.call(null,target);
var board__$1 = obb_rules.board.remove_from_element.call(null,board,target_coordinate,destroyed);
var unit_name = obb_rules.unit.unit_name.call(null,obb_rules.element.element_unit.call(null,target));
var info__$1 = cljs.core.conj.call(null,info,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attack-type","attack-type",-639911421),new cljs.core.Keyword(null,"triple","triple",672002454),new cljs.core.Keyword(null,"destroyed","destroyed",-427566535),destroyed,new cljs.core.Keyword(null,"unit","unit",375175175),unit_name,new cljs.core.Keyword(null,"target","target",253001721),obb_rules.element.element_player.call(null,target)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board__$1,info__$1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board,info], null);
}
});
/**
 * Applies triple on the board
 */
obb_rules.actions.triple_attack.process_triple = (function obb_rules$actions$triple_attack$process_triple(config,p__23144){
var map__23147 = p__23144;
var map__23147__$1 = ((cljs.core.seq_QMARK_.call(null,map__23147))?cljs.core.apply.call(null,cljs.core.hash_map,map__23147):map__23147);
var args = map__23147__$1;
var attacker = cljs.core.get.call(null,map__23147__$1,new cljs.core.Keyword(null,"attacker","attacker",48869964));
var board = cljs.core.get.call(null,map__23147__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var info = cljs.core.get.call(null,map__23147__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var unused_damage = cljs.core.get.call(null,map__23147__$1,new cljs.core.Keyword(null,"unused-damage","unused-damage",-434036322));
var targets = cljs.core.get.call(null,map__23147__$1,new cljs.core.Keyword(null,"triple-targets","triple-targets",727566642));
var targets__$1 = cljs.core.get.call(null,args,new cljs.core.Keyword(null,"triple-targets","triple-targets",727566642));
var vec__23148 = obb_rules.actions.triple_attack.apply_triple.call(null,config,attacker,board,info,cljs.core.first.call(null,targets__$1));
var board__$1 = cljs.core.nth.call(null,vec__23148,(0),null);
var info__$1 = cljs.core.nth.call(null,vec__23148,(1),null);
return obb_rules.actions.triple_attack.apply_triple.call(null,config,attacker,board__$1,info__$1,cljs.core.second.call(null,targets__$1));
});
/**
 * Checks if the triple can be performed
 */
obb_rules.actions.triple_attack.aplicable_QMARK_ = (function obb_rules$actions$triple_attack$aplicable_QMARK_(config,p__23149){
var map__23151 = p__23149;
var map__23151__$1 = ((cljs.core.seq_QMARK_.call(null,map__23151))?cljs.core.apply.call(null,cljs.core.hash_map,map__23151):map__23151);
var args = map__23151__$1;
var target = cljs.core.get.call(null,map__23151__$1,new cljs.core.Keyword(null,"target","target",253001721));
var board = cljs.core.get.call(null,map__23151__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var unused_damage = cljs.core.get.call(null,map__23151__$1,new cljs.core.Keyword(null,"unused-damage","unused-damage",-434036322));
return true;
});
/**
 * Finds the target that will be damaged by triple
 */
obb_rules.actions.triple_attack.triple_targets = (function obb_rules$actions$triple_attack$triple_targets(p__23152){
var map__23154 = p__23152;
var map__23154__$1 = ((cljs.core.seq_QMARK_.call(null,map__23154))?cljs.core.apply.call(null,cljs.core.hash_map,map__23154):map__23154);
var args = map__23154__$1;
var target = cljs.core.get.call(null,map__23154__$1,new cljs.core.Keyword(null,"target","target",253001721));
var attacker = cljs.core.get.call(null,map__23154__$1,new cljs.core.Keyword(null,"attacker","attacker",48869964));
var board = cljs.core.get.call(null,map__23154__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var info = cljs.core.get.call(null,map__23154__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var target_coord = obb_rules.element.element_coordinate.call(null,target);
var attacker_direction = obb_rules.element.element_direction.call(null,attacker);
var triple_coords = obb_rules.actions.direction.perpendicular.call(null,target_coord,attacker_direction);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.board.get_element.call(null,board,cljs.core.first.call(null,triple_coords)),obb_rules.board.get_element.call(null,board,cljs.core.second.call(null,triple_coords))], null);
});
/**
 * Processes the triple for the given data
 */
obb_rules.actions.triple_attack.process = (function obb_rules$actions$triple_attack$process(config,p__23155){
var map__23157 = p__23155;
var map__23157__$1 = ((cljs.core.seq_QMARK_.call(null,map__23157))?cljs.core.apply.call(null,cljs.core.hash_map,map__23157):map__23157);
var args = map__23157__$1;
var board = cljs.core.get.call(null,map__23157__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var info = cljs.core.get.call(null,map__23157__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var args__$1 = cljs.core.assoc.call(null,args,new cljs.core.Keyword(null,"triple-targets","triple-targets",727566642),obb_rules.actions.triple_attack.triple_targets.call(null,args));
if(cljs.core.truth_(obb_rules.actions.triple_attack.aplicable_QMARK_.call(null,config,args__$1))){
return obb_rules.actions.triple_attack.process_triple.call(null,config,args__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board,info], null);
}
});

//# sourceMappingURL=triple_attack.js.map?rel=1436104824202