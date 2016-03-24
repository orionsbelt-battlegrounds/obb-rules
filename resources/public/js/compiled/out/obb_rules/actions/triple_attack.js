// Compiled by ClojureScript 1.7.228 {}
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
return obb_rules.simplifier.not_name_EQ_.call(null,obb_rules.element.element_player.call(null,attacker),obb_rules.element.element_player.call(null,target));
});
/**
 * Applies the triple damage to a target
 */
obb_rules.actions.triple_attack.apply_triple = (function obb_rules$actions$triple_attack$apply_triple(config,attacker,board,info,target){
if(cljs.core.truth_((function (){var and__18358__auto__ = target;
if(cljs.core.truth_(and__18358__auto__)){
return obb_rules.actions.triple_attack.different_players_QMARK_.call(null,attacker,target);
} else {
return and__18358__auto__;
}
})())){
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
obb_rules.actions.triple_attack.process_triple = (function obb_rules$actions$triple_attack$process_triple(config,p__41298){
var map__41302 = p__41298;
var map__41302__$1 = ((((!((map__41302 == null)))?((((map__41302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41302):map__41302);
var args = map__41302__$1;
var attacker = cljs.core.get.call(null,map__41302__$1,new cljs.core.Keyword(null,"attacker","attacker",48869964));
var board = cljs.core.get.call(null,map__41302__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var info = cljs.core.get.call(null,map__41302__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var unused_damage = cljs.core.get.call(null,map__41302__$1,new cljs.core.Keyword(null,"unused-damage","unused-damage",-434036322));
var targets = cljs.core.get.call(null,map__41302__$1,new cljs.core.Keyword(null,"triple-targets","triple-targets",727566642));
var targets__$1 = cljs.core.get.call(null,args,new cljs.core.Keyword(null,"triple-targets","triple-targets",727566642));
var vec__41304 = obb_rules.actions.triple_attack.apply_triple.call(null,config,attacker,board,info,cljs.core.first.call(null,targets__$1));
var board__$1 = cljs.core.nth.call(null,vec__41304,(0),null);
var info__$1 = cljs.core.nth.call(null,vec__41304,(1),null);
return obb_rules.actions.triple_attack.apply_triple.call(null,config,attacker,board__$1,info__$1,cljs.core.second.call(null,targets__$1));
});
/**
 * Checks if the triple can be performed
 */
obb_rules.actions.triple_attack.aplicable_QMARK_ = (function obb_rules$actions$triple_attack$aplicable_QMARK_(config,p__41305){
var map__41308 = p__41305;
var map__41308__$1 = ((((!((map__41308 == null)))?((((map__41308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41308):map__41308);
var args = map__41308__$1;
var target = cljs.core.get.call(null,map__41308__$1,new cljs.core.Keyword(null,"target","target",253001721));
var board = cljs.core.get.call(null,map__41308__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var unused_damage = cljs.core.get.call(null,map__41308__$1,new cljs.core.Keyword(null,"unused-damage","unused-damage",-434036322));
return true;
});
/**
 * Finds the target that will be damaged by triple
 */
obb_rules.actions.triple_attack.triple_targets = (function obb_rules$actions$triple_attack$triple_targets(p__41310){
var map__41313 = p__41310;
var map__41313__$1 = ((((!((map__41313 == null)))?((((map__41313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41313):map__41313);
var args = map__41313__$1;
var target = cljs.core.get.call(null,map__41313__$1,new cljs.core.Keyword(null,"target","target",253001721));
var attacker = cljs.core.get.call(null,map__41313__$1,new cljs.core.Keyword(null,"attacker","attacker",48869964));
var board = cljs.core.get.call(null,map__41313__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var info = cljs.core.get.call(null,map__41313__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var target_coord = obb_rules.element.element_coordinate.call(null,target);
var attacker_direction = obb_rules.element.element_direction.call(null,attacker);
var triple_coords = obb_rules.actions.direction.perpendicular.call(null,target_coord,attacker_direction);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.board.get_element.call(null,board,cljs.core.first.call(null,triple_coords)),obb_rules.board.get_element.call(null,board,cljs.core.second.call(null,triple_coords))], null);
});
/**
 * Processes the triple for the given data
 */
obb_rules.actions.triple_attack.process = (function obb_rules$actions$triple_attack$process(config,p__41315){
var map__41318 = p__41315;
var map__41318__$1 = ((((!((map__41318 == null)))?((((map__41318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41318):map__41318);
var args = map__41318__$1;
var board = cljs.core.get.call(null,map__41318__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var info = cljs.core.get.call(null,map__41318__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var args__$1 = cljs.core.assoc.call(null,args,new cljs.core.Keyword(null,"triple-targets","triple-targets",727566642),obb_rules.actions.triple_attack.triple_targets.call(null,args));
if(cljs.core.truth_(obb_rules.actions.triple_attack.aplicable_QMARK_.call(null,config,args__$1))){
return obb_rules.actions.triple_attack.process_triple.call(null,config,args__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board,info], null);
}
});

//# sourceMappingURL=triple_attack.js.map?rel=1458852290422