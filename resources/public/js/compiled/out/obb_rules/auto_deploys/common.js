// Compiled by ClojureScript 0.0-3308 {}
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
obb_rules.auto_deploys.common.map_stash_to_units = (function obb_rules$auto_deploys$common$map_stash_to_units(p__23276){
var vec__23278 = p__23276;
var unit_name = cljs.core.nth.call(null,vec__23278,(0),null);
var quantity = cljs.core.nth.call(null,vec__23278,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.unit.fetch.call(null,unit_name),quantity], null);
});
/**
 * Builds a vector with 8 positions, each with the corresponding unit
 */
obb_rules.auto_deploys.common.build_lineup = (function obb_rules$auto_deploys$common$build_lineup(board,stash){
var squares = obb_rules.board.board_width.call(null,board);
var units = obb_rules.math.ceil.call(null,(squares / cljs.core.count.call(null,stash)));
var grouped = cljs.core.map.call(null,((function (squares,units){
return (function (p1__23279_SHARP_){
return cljs.core.take.call(null,units,cljs.core.repeat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,p1__23279_SHARP_)], null)));
});})(squares,units))
,stash);
var final$ = cljs.core.flatten.call(null,grouped);
return cljs.core.take.call(null,squares,final$);
});
/**
 * Splits the total quantity into the given slots
 */
obb_rules.auto_deploys.common.split_stash = (function obb_rules$auto_deploys$common$split_stash(lineup,p__23281){
var vec__23283 = p__23281;
var unit = cljs.core.nth.call(null,vec__23283,(0),null);
var quantity = cljs.core.nth.call(null,vec__23283,(1),null);
var slots = cljs.core.count.call(null,cljs.core.filter.call(null,((function (vec__23283,unit,quantity){
return (function (p1__23280_SHARP_){
return cljs.core._EQ_.call(null,unit,p1__23280_SHARP_);
});})(vec__23283,unit,quantity))
,lineup));
var fraction = (quantity / slots);
var smallest_parcel_quantity = obb_rules.math.floor.call(null,fraction);
var equal_parcel_slots = (slots - (1));
var biggest = (quantity - (equal_parcel_slots * smallest_parcel_quantity));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [unit,biggest], null)], null),cljs.core.take.call(null,equal_parcel_slots,cljs.core.repeat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [unit,smallest_parcel_quantity], null))));
});
/**
 * Associates the expected quantities with every lineup element
 */
obb_rules.auto_deploys.common.build_lineup_quantities = (function obb_rules$auto_deploys$common$build_lineup_quantities(lineup,stash){
var quantities = cljs.core.map.call(null,cljs.core.partial.call(null,obb_rules.auto_deploys.common.split_stash,lineup),stash);
return cljs.core.apply.call(null,cljs.core.concat,quantities);
});
/**
 * Builds a deploy action command
 */
obb_rules.auto_deploys.common.build_deploy_action = (function obb_rules$auto_deploys$common$build_deploy_action(player,row,idx,p__23284){
var vec__23286 = p__23284;
var u = cljs.core.nth.call(null,vec__23286,(0),null);
var q = cljs.core.nth.call(null,vec__23286,(1),null);
var coordinate = obb_rules.translator.coordinate.call(null,player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(idx + (1)),row], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(q | (0)),obb_rules.unit.unit_name.call(null,u),coordinate], null);
});
/**
 * Builds deploy actions based on the given data
 */
obb_rules.auto_deploys.common.build_deploy_actions = (function obb_rules$auto_deploys$common$build_deploy_actions(player,lineup,row){
return cljs.core.map_indexed.call(null,cljs.core.partial.call(null,obb_rules.auto_deploys.common.build_deploy_action,player,row),lineup);
});
/**
 * Performs the deploy actions
 */
obb_rules.auto_deploys.common.do_actions = (function obb_rules$auto_deploys$common$do_actions(player,result,action){
if(cljs.core.truth_(obb_rules.result.failed_QMARK_.call(null,result))){
return result;
} else {
return action.call(null,obb_rules.result.result_board.call(null,result),player);
}
});

//# sourceMappingURL=common.js.map?rel=1436104824736