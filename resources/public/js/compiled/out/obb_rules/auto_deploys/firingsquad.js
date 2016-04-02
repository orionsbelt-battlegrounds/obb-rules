// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.auto_deploys.firingsquad');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.auto_deploys.common');
goog.require('obb_rules.actions.deploy');
goog.require('obb_rules.result');
goog.require('obb_rules.unit');
goog.require('obb_rules.game');
goog.require('obb_rules.stash');
goog.require('obb_rules.translator');
/**
 * Translates on how the given unit is good for a firingsquad
 */
obb_rules.auto_deploys.firingsquad.firing_squad_value = (function obb_rules$auto_deploys$firingsquad$firing_squad_value(p__15671){
var vec__15673 = p__15671;
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15673,(0),null);
var quantity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15673,(1),null);
return (- obb_rules.unit.unit_range(unit));
});
/**
 * From the given stash, finds how may units are first row material
 */
obb_rules.auto_deploys.firingsquad.front_row_units_to_use = (function obb_rules$auto_deploys$firingsquad$front_row_units_to_use(stash){
var long_range_units = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15674_SHARP_){
return (obb_rules.unit.unit_range(cljs.core.first(p1__15674_SHARP_)) > (4));
}),stash);
var number = cljs.core.count(long_range_units);
if((number > (0))){
return number;
} else {
return (1);
}
});
/**
 * Deploys a front row with all units equally distributed
 */
obb_rules.auto_deploys.firingsquad.deploy_front_row = (function obb_rules$auto_deploys$firingsquad$deploy_front_row(board,player,stash){
var lineup = obb_rules.auto_deploys.common.build_lineup(board,stash);
var lineup_quantities = obb_rules.auto_deploys.common.build_lineup_quantities(lineup,stash);
var raw_actions = obb_rules.auto_deploys.common.build_deploy_actions(player,lineup_quantities,(7));
var actions = cljs.core.map.cljs$core$IFn$_invoke$arity$2(obb_rules.actions.deploy.deploy_action,raw_actions);
var board__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,cljs.core.cst$kw$deploy_DASH_actions,raw_actions);
var start_result = obb_rules.result.action_success.cljs$core$IFn$_invoke$arity$2(board__$1,(0));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_rules.auto_deploys.common.do_actions,player),start_result,actions);
});
/**
 * Takes the auto deploy action and adds the actual run deploy actions
 *   on the history
 */
obb_rules.auto_deploys.firingsquad.build_history = (function obb_rules$auto_deploys$firingsquad$build_history(player,result,raw_actions){
var history = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board,cljs.core.cst$kw$history], null));
var deploy_actions = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board,cljs.core.cst$kw$deploy_DASH_actions], null)),raw_actions);
var history__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(history,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$player,player,cljs.core.cst$kw$actions,deploy_actions], null));
var result__$1 = cljs.core.assoc_in(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board,cljs.core.cst$kw$history], null),history__$1);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board], null),cljs.core.dissoc,cljs.core.cst$kw$deploy_DASH_actions);
});
/**
 * Deploys a back row with all the given units
 */
obb_rules.auto_deploys.firingsquad.deploy_back_row = (function obb_rules$auto_deploys$firingsquad$deploy_back_row(result,player,stash){
var raw_actions = obb_rules.auto_deploys.common.build_deploy_actions(player,stash,(8));
var result__$1 = obb_rules.auto_deploys.firingsquad.build_history(player,result,raw_actions);
var actions = cljs.core.map.cljs$core$IFn$_invoke$arity$2(obb_rules.actions.deploy.deploy_action,raw_actions);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_rules.auto_deploys.common.do_actions,player),result__$1,actions);
});
/**
 * Deploys the given stash in a way that will be advantajous for firingsquad
 *   logic
 */
obb_rules.auto_deploys.firingsquad.deploy = (function obb_rules$auto_deploys$firingsquad$deploy(board,player){
var stash = cljs.core.map.cljs$core$IFn$_invoke$arity$2(obb_rules.auto_deploys.common.map_stash_to_units,obb_rules.board.get_stash(board,player));
var ordered_stash = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(obb_rules.auto_deploys.firingsquad.firing_squad_value,stash);
var front_row_units = obb_rules.auto_deploys.firingsquad.front_row_units_to_use(stash);
var back_row_units = (cljs.core.count(ordered_stash) - front_row_units);
return obb_rules.auto_deploys.firingsquad.deploy_back_row(obb_rules.auto_deploys.firingsquad.deploy_front_row(board,player,cljs.core.take.cljs$core$IFn$_invoke$arity$2(front_row_units,ordered_stash)),player,cljs.core.take_last(back_row_units,ordered_stash));
});
