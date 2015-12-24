// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
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
obb_rules.auto_deploys.firingsquad.firing_squad_value = (function obb_rules$auto_deploys$firingsquad$firing_squad_value(p__10542){
var vec__10544 = p__10542;
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10544,(0),null);
var quantity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10544,(1),null);
return (- obb_rules.unit.unit_range(unit));
});
/**
 * From the given stash, finds how may units are first row material
 */
obb_rules.auto_deploys.firingsquad.front_row_units_to_use = (function obb_rules$auto_deploys$firingsquad$front_row_units_to_use(stash){
var long_range_units = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__10545_SHARP_){
return (obb_rules.unit.unit_range(cljs.core.first(p1__10545_SHARP_)) > (4));
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
var actions = cljs.core.map.cljs$core$IFn$_invoke$arity$2(obb_rules.actions.deploy.build_deploy,raw_actions);
var start_result = obb_rules.result.action_success.cljs$core$IFn$_invoke$arity$2(board,(0));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_rules.auto_deploys.common.do_actions,player),start_result,actions);
});
/**
 * Deploys a back row with all the given units
 */
obb_rules.auto_deploys.firingsquad.deploy_back_row = (function obb_rules$auto_deploys$firingsquad$deploy_back_row(result,player,stash){
var raw_actions = obb_rules.auto_deploys.common.build_deploy_actions(player,stash,(8));
var actions = cljs.core.map.cljs$core$IFn$_invoke$arity$2(obb_rules.actions.deploy.build_deploy,raw_actions);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_rules.auto_deploys.common.do_actions,player),result,actions);
});
/**
 * Deploys the given stash in a way that will be advantajous for firingsquad
 * logic
 */
obb_rules.auto_deploys.firingsquad.deploy = (function obb_rules$auto_deploys$firingsquad$deploy(board,player){
var stash = cljs.core.map.cljs$core$IFn$_invoke$arity$2(obb_rules.auto_deploys.common.map_stash_to_units,obb_rules.board.get_stash(board,player));
var ordered_stash = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(obb_rules.auto_deploys.firingsquad.firing_squad_value,stash);
var front_row_units = obb_rules.auto_deploys.firingsquad.front_row_units_to_use(stash);
var back_row_units = (cljs.core.count(ordered_stash) - front_row_units);
return obb_rules.auto_deploys.firingsquad.deploy_back_row(obb_rules.auto_deploys.firingsquad.deploy_front_row(board,player,cljs.core.take.cljs$core$IFn$_invoke$arity$2(front_row_units,ordered_stash)),player,cljs.core.take_last(back_row_units,ordered_stash));
});
