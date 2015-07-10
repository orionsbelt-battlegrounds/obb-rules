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
obb_rules.actions.triple_attack.process_triple = (function obb_rules$actions$triple_attack$process_triple(config,p__32944){
var map__32947 = p__32944;
var map__32947__$1 = ((cljs.core.seq_QMARK_.call(null,map__32947))?cljs.core.apply.call(null,cljs.core.hash_map,map__32947):map__32947);
var args = map__32947__$1;
var attacker = cljs.core.get.call(null,map__32947__$1,new cljs.core.Keyword(null,"attacker","attacker",48869964));
var board = cljs.core.get.call(null,map__32947__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var info = cljs.core.get.call(null,map__32947__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var unused_damage = cljs.core.get.call(null,map__32947__$1,new cljs.core.Keyword(null,"unused-damage","unused-damage",-434036322));
var targets = cljs.core.get.call(null,map__32947__$1,new cljs.core.Keyword(null,"triple-targets","triple-targets",727566642));
var targets__$1 = cljs.core.get.call(null,args,new cljs.core.Keyword(null,"triple-targets","triple-targets",727566642));
var vec__32948 = obb_rules.actions.triple_attack.apply_triple.call(null,config,attacker,board,info,cljs.core.first.call(null,targets__$1));
var board__$1 = cljs.core.nth.call(null,vec__32948,(0),null);
var info__$1 = cljs.core.nth.call(null,vec__32948,(1),null);
return obb_rules.actions.triple_attack.apply_triple.call(null,config,attacker,board__$1,info__$1,cljs.core.second.call(null,targets__$1));
});
/**
 * Checks if the triple can be performed
 */
obb_rules.actions.triple_attack.aplicable_QMARK_ = (function obb_rules$actions$triple_attack$aplicable_QMARK_(config,p__32949){
var map__32951 = p__32949;
var map__32951__$1 = ((cljs.core.seq_QMARK_.call(null,map__32951))?cljs.core.apply.call(null,cljs.core.hash_map,map__32951):map__32951);
var args = map__32951__$1;
var target = cljs.core.get.call(null,map__32951__$1,new cljs.core.Keyword(null,"target","target",253001721));
var board = cljs.core.get.call(null,map__32951__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var unused_damage = cljs.core.get.call(null,map__32951__$1,new cljs.core.Keyword(null,"unused-damage","unused-damage",-434036322));
return true;
});
/**
 * Finds the target that will be damaged by triple
 */
obb_rules.actions.triple_attack.triple_targets = (function obb_rules$actions$triple_attack$triple_targets(p__32952){
var map__32954 = p__32952;
var map__32954__$1 = ((cljs.core.seq_QMARK_.call(null,map__32954))?cljs.core.apply.call(null,cljs.core.hash_map,map__32954):map__32954);
var args = map__32954__$1;
var target = cljs.core.get.call(null,map__32954__$1,new cljs.core.Keyword(null,"target","target",253001721));
var attacker = cljs.core.get.call(null,map__32954__$1,new cljs.core.Keyword(null,"attacker","attacker",48869964));
var board = cljs.core.get.call(null,map__32954__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var info = cljs.core.get.call(null,map__32954__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var target_coord = obb_rules.element.element_coordinate.call(null,target);
var attacker_direction = obb_rules.element.element_direction.call(null,attacker);
var triple_coords = obb_rules.actions.direction.perpendicular.call(null,target_coord,attacker_direction);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.board.get_element.call(null,board,cljs.core.first.call(null,triple_coords)),obb_rules.board.get_element.call(null,board,cljs.core.second.call(null,triple_coords))], null);
});
/**
 * Processes the triple for the given data
 */
obb_rules.actions.triple_attack.process = (function obb_rules$actions$triple_attack$process(config,p__32955){
var map__32957 = p__32955;
var map__32957__$1 = ((cljs.core.seq_QMARK_.call(null,map__32957))?cljs.core.apply.call(null,cljs.core.hash_map,map__32957):map__32957);
var args = map__32957__$1;
var board = cljs.core.get.call(null,map__32957__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var info = cljs.core.get.call(null,map__32957__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var args__$1 = cljs.core.assoc.call(null,args,new cljs.core.Keyword(null,"triple-targets","triple-targets",727566642),obb_rules.actions.triple_attack.triple_targets.call(null,args));
if(cljs.core.truth_(obb_rules.actions.triple_attack.aplicable_QMARK_.call(null,config,args__$1))){
return obb_rules.actions.triple_attack.process_triple.call(null,config,args__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board,info], null);
}
});

//# sourceMappingURL=triple_attack.js.map?rel=1436517556821