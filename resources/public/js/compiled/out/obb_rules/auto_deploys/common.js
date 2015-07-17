// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.auto_deploys.common');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.actions.deploy');
goog.require('obb_rules.math');
goog.require('obb_rules.result');
goog.require('obb_rules.unit');
goog.require('obb_rules.game');
goog.require('obb_rules.stash');
goog.require('obb_rules.translator');
/**
 * Provides the given stash, but with translates units
 */
obb_rules.auto_deploys.common.map_stash_to_units = (function obb_rules$auto_deploys$common$map_stash_to_units(p__12861){
var vec__12863 = p__12861;
var unit_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12863,(0),null);
var quantity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12863,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.unit.fetch(unit_name),quantity], null);
});
/**
 * Builds a vector with 8 positions, each with the corresponding unit
 */
obb_rules.auto_deploys.common.build_lineup = (function obb_rules$auto_deploys$common$build_lineup(board,stash){
var squares = obb_rules.board.board_width(board);
var units = obb_rules.math.ceil((squares / cljs.core.count(stash)));
var grouped = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (squares,units){
return (function (p1__12864_SHARP_){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(units,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(p1__12864_SHARP_)], null)));
});})(squares,units))
,stash);
var final$ = cljs.core.flatten(grouped);
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(squares,final$);
});
/**
 * Splits the total quantity into the given slots
 */
obb_rules.auto_deploys.common.split_stash = (function obb_rules$auto_deploys$common$split_stash(lineup,p__12866){
var vec__12868 = p__12866;
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12868,(0),null);
var quantity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12868,(1),null);
var slots = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__12868,unit,quantity){
return (function (p1__12865_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,p1__12865_SHARP_);
});})(vec__12868,unit,quantity))
,lineup));
var fraction = (quantity / slots);
var smallest_parcel_quantity = obb_rules.math.floor(fraction);
var equal_parcel_slots = (slots - (1));
var biggest = (quantity - (equal_parcel_slots * smallest_parcel_quantity));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [unit,biggest], null)], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2(equal_parcel_slots,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [unit,smallest_parcel_quantity], null))));
});
/**
 * Shuffles the collection
 */
obb_rules.auto_deploys.common.randomize = (function obb_rules$auto_deploys$common$randomize(coll){
if(cljs.core.truth_(coll)){
return cljs.core.shuffle(coll);
} else {
return null;
}
});
/**
 * Associates the expected quantities with every lineup element
 */
obb_rules.auto_deploys.common.build_lineup_quantities = (function obb_rules$auto_deploys$common$build_lineup_quantities(lineup,stash){
var quantities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_rules.auto_deploys.common.split_stash,lineup),stash);
return obb_rules.auto_deploys.common.randomize(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,quantities));
});
/**
 * Builds a deploy action command
 */
obb_rules.auto_deploys.common.build_deploy_action = (function obb_rules$auto_deploys$common$build_deploy_action(player,row,idx,p__12869){
var vec__12871 = p__12869;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12871,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12871,(1),null);
var coordinate = obb_rules.translator.coordinate(player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(idx + (1)),row], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(q | (0)),obb_rules.unit.unit_name(u),coordinate], null);
});
/**
 * Builds deploy actions based on the given data
 */
obb_rules.auto_deploys.common.build_deploy_actions = (function obb_rules$auto_deploys$common$build_deploy_actions(player,lineup,row){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(obb_rules.auto_deploys.common.build_deploy_action,player,row),lineup);
});
/**
 * Performs the deploy actions
 */
obb_rules.auto_deploys.common.do_actions = (function obb_rules$auto_deploys$common$do_actions(player,result,action){
if(cljs.core.truth_(obb_rules.result.failed_QMARK_(result))){
return result;
} else {
var G__12874 = obb_rules.result.result_board(result);
var G__12875 = player;
return (action.cljs$core$IFn$_invoke$arity$2 ? action.cljs$core$IFn$_invoke$arity$2(G__12874,G__12875) : action.call(null,G__12874,G__12875));
}
});
