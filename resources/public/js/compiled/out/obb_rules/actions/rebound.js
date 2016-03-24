// Compiled by ClojureScript 1.7.228 {}
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
obb_rules.actions.rebound.calculate_destroyed = (function obb_rules$actions$rebound$calculate_destroyed(config,p__41269){
var map__41273 = p__41269;
var map__41273__$1 = ((((!((map__41273 == null)))?((((map__41273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41273):map__41273);
var args = map__41273__$1;
var attacker = cljs.core.get.call(null,map__41273__$1,new cljs.core.Keyword(null,"attacker","attacker",48869964));
var board = cljs.core.get.call(null,map__41273__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var info = cljs.core.get.call(null,map__41273__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var unused_damage = cljs.core.get.call(null,map__41273__$1,new cljs.core.Keyword(null,"unused-damage","unused-damage",-434036322));
var rebound_target = cljs.core.get.call(null,map__41273__$1,new cljs.core.Keyword(null,"rebound-target","rebound-target",-603961731));
var vec__41275 = obb_rules.actions.damage_calculator.destroyed_with_unused_damage.call(null,board,attacker,rebound_target,unused_damage);
var destroyed = cljs.core.nth.call(null,vec__41275,(0),null);
var _ = cljs.core.nth.call(null,vec__41275,(1),null);
return destroyed;
});
/**
 * Applies rebound on the board
 */
obb_rules.actions.rebound.process_rebound = (function obb_rules$actions$rebound$process_rebound(config,p__41276){
var map__41279 = p__41276;
var map__41279__$1 = ((((!((map__41279 == null)))?((((map__41279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41279):map__41279);
var args = map__41279__$1;
var attacker = cljs.core.get.call(null,map__41279__$1,new cljs.core.Keyword(null,"attacker","attacker",48869964));
var board = cljs.core.get.call(null,map__41279__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var info = cljs.core.get.call(null,map__41279__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var unused_damage = cljs.core.get.call(null,map__41279__$1,new cljs.core.Keyword(null,"unused-damage","unused-damage",-434036322));
var rebound_target = cljs.core.get.call(null,map__41279__$1,new cljs.core.Keyword(null,"rebound-target","rebound-target",-603961731));
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
obb_rules.actions.rebound.aplicable_QMARK_ = (function obb_rules$actions$rebound$aplicable_QMARK_(config,p__41281){
var map__41284 = p__41281;
var map__41284__$1 = ((((!((map__41284 == null)))?((((map__41284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41284):map__41284);
var args = map__41284__$1;
var target = cljs.core.get.call(null,map__41284__$1,new cljs.core.Keyword(null,"target","target",253001721));
var board = cljs.core.get.call(null,map__41284__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var unused_damage = cljs.core.get.call(null,map__41284__$1,new cljs.core.Keyword(null,"unused-damage","unused-damage",-434036322));
var rebound_target = cljs.core.get.call(null,map__41284__$1,new cljs.core.Keyword(null,"rebound-target","rebound-target",-603961731));
var and__18358__auto__ = (unused_damage >= (0));
if(and__18358__auto__){
var and__18358__auto____$1 = obb_rules.actions.rebound.target_was_destroyed_QMARK_.call(null,board,target);
if(cljs.core.truth_(and__18358__auto____$1)){
return rebound_target;
} else {
return and__18358__auto____$1;
}
} else {
return and__18358__auto__;
}
});
/**
 * Finds the target that will be damaged by rebound
 */
obb_rules.actions.rebound.rebound_target = (function obb_rules$actions$rebound$rebound_target(p__41286){
var map__41289 = p__41286;
var map__41289__$1 = ((((!((map__41289 == null)))?((((map__41289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41289):map__41289);
var args = map__41289__$1;
var target = cljs.core.get.call(null,map__41289__$1,new cljs.core.Keyword(null,"target","target",253001721));
var attacker = cljs.core.get.call(null,map__41289__$1,new cljs.core.Keyword(null,"attacker","attacker",48869964));
var board = cljs.core.get.call(null,map__41289__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var info = cljs.core.get.call(null,map__41289__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var unused_damage = cljs.core.get.call(null,map__41289__$1,new cljs.core.Keyword(null,"unused-damage","unused-damage",-434036322));
var target_coord = obb_rules.element.element_coordinate.call(null,target);
var attacker_direction = obb_rules.element.element_direction.call(null,attacker);
var rebound_coord = obb_rules.actions.direction.update.call(null,attacker_direction,target_coord);
return obb_rules.board.get_element.call(null,board,rebound_coord);
});
/**
 * Processes the rebound for the given data
 */
obb_rules.actions.rebound.process = (function obb_rules$actions$rebound$process(config,p__41291){
var map__41294 = p__41291;
var map__41294__$1 = ((((!((map__41294 == null)))?((((map__41294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41294):map__41294);
var args = map__41294__$1;
var board = cljs.core.get.call(null,map__41294__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var info = cljs.core.get.call(null,map__41294__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var args__$1 = cljs.core.assoc.call(null,args,new cljs.core.Keyword(null,"rebound-target","rebound-target",-603961731),obb_rules.actions.rebound.rebound_target.call(null,args));
if(cljs.core.truth_(obb_rules.actions.rebound.aplicable_QMARK_.call(null,config,args__$1))){
return obb_rules.actions.rebound.process_rebound.call(null,config,args__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board,info], null);
}
});

//# sourceMappingURL=rebound.js.map?rel=1458852290243