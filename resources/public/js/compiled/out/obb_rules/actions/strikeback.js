// Compiled by ClojureScript 1.7.228 {}
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
obb_rules.actions.strikeback.calculate_destroyed = (function obb_rules$actions$strikeback$calculate_destroyed(config,p__41238){
var map__41241 = p__41238;
var map__41241__$1 = ((((!((map__41241 == null)))?((((map__41241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41241):map__41241);
var args = map__41241__$1;
var target = cljs.core.get.call(null,map__41241__$1,new cljs.core.Keyword(null,"target","target",253001721));
var attacker = cljs.core.get.call(null,map__41241__$1,new cljs.core.Keyword(null,"attacker","attacker",48869964));
var board = cljs.core.get.call(null,map__41241__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var info = cljs.core.get.call(null,map__41241__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var unused_damage = cljs.core.get.call(null,map__41241__$1,new cljs.core.Keyword(null,"unused-damage","unused-damage",-434036322));
var rebound_target = cljs.core.get.call(null,map__41241__$1,new cljs.core.Keyword(null,"rebound-target","rebound-target",-603961731));
var destroyed = obb_rules.actions.damage_calculator.destroyed.call(null,board,target,attacker);
return destroyed;
});
/**
 * Applies rebound on the board
 */
obb_rules.actions.strikeback.process_strikeback = (function obb_rules$actions$strikeback$process_strikeback(config,p__41243){
var map__41246 = p__41243;
var map__41246__$1 = ((((!((map__41246 == null)))?((((map__41246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41246):map__41246);
var args = map__41246__$1;
var target = cljs.core.get.call(null,map__41246__$1,new cljs.core.Keyword(null,"target","target",253001721));
var attacker = cljs.core.get.call(null,map__41246__$1,new cljs.core.Keyword(null,"attacker","attacker",48869964));
var board = cljs.core.get.call(null,map__41246__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var info = cljs.core.get.call(null,map__41246__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var unused_damage = cljs.core.get.call(null,map__41246__$1,new cljs.core.Keyword(null,"unused-damage","unused-damage",-434036322));
var rebound_target = cljs.core.get.call(null,map__41246__$1,new cljs.core.Keyword(null,"rebound-target","rebound-target",-603961731));
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
var vec__41250 = obb_rules.element.element_coordinate.call(null,target);
var tx = cljs.core.nth.call(null,vec__41250,(0),null);
var ty = cljs.core.nth.call(null,vec__41250,(1),null);
var vec__41251 = obb_rules.element.element_coordinate.call(null,attacker);
var ax = cljs.core.nth.call(null,vec__41251,(0),null);
var ay = cljs.core.nth.call(null,vec__41251,(1),null);
var distance = obb_rules.math.abs.call(null,((tx - ax) + (ty - ay)));
return (distance <= obb_rules.element.element_range.call(null,target));
} else {
return null;
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
obb_rules.actions.strikeback.aplicable_QMARK_ = (function obb_rules$actions$strikeback$aplicable_QMARK_(config,p__41252){
var map__41255 = p__41252;
var map__41255__$1 = ((((!((map__41255 == null)))?((((map__41255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41255):map__41255);
var args = map__41255__$1;
var target = cljs.core.get.call(null,map__41255__$1,new cljs.core.Keyword(null,"target","target",253001721));
var attacker = cljs.core.get.call(null,map__41255__$1,new cljs.core.Keyword(null,"attacker","attacker",48869964));
var board = cljs.core.get.call(null,map__41255__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var info = cljs.core.get.call(null,map__41255__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var and__18358__auto__ = obb_rules.actions.strikeback.in_range_QMARK_.call(null,target,attacker);
if(cljs.core.truth_(and__18358__auto__)){
var and__18358__auto____$1 = obb_rules.actions.strikeback.facing_attacker_QMARK_.call(null,target,attacker);
if(cljs.core.truth_(and__18358__auto____$1)){
return obb_rules.actions.strikeback.direct_attack_QMARK_.call(null,info);
} else {
return and__18358__auto____$1;
}
} else {
return and__18358__auto__;
}
});
/**
 * Refreshes the target to get the actual quantity
 */
obb_rules.actions.strikeback.refresh_target = (function obb_rules$actions$strikeback$refresh_target(p__41257){
var map__41260 = p__41257;
var map__41260__$1 = ((((!((map__41260 == null)))?((((map__41260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41260):map__41260);
var args = map__41260__$1;
var board = cljs.core.get.call(null,map__41260__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var target = cljs.core.get.call(null,map__41260__$1,new cljs.core.Keyword(null,"target","target",253001721));
var target_coordinate = obb_rules.element.element_coordinate.call(null,target);
return cljs.core.assoc.call(null,args,new cljs.core.Keyword(null,"target","target",253001721),obb_rules.board.get_element.call(null,board,target_coordinate));
});
/**
 * Processes the strikeback for the given data
 */
obb_rules.actions.strikeback.process = (function obb_rules$actions$strikeback$process(config,p__41262){
var map__41265 = p__41262;
var map__41265__$1 = ((((!((map__41265 == null)))?((((map__41265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41265):map__41265);
var args = map__41265__$1;
var board = cljs.core.get.call(null,map__41265__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var info = cljs.core.get.call(null,map__41265__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var target = cljs.core.get.call(null,map__41265__$1,new cljs.core.Keyword(null,"target","target",253001721));
var args__$1 = obb_rules.actions.strikeback.refresh_target.call(null,args);
if(cljs.core.truth_(obb_rules.actions.strikeback.aplicable_QMARK_.call(null,config,args__$1))){
return obb_rules.actions.strikeback.process_strikeback.call(null,config,args__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board,info], null);
}
});

//# sourceMappingURL=strikeback.js.map?rel=1458852290141