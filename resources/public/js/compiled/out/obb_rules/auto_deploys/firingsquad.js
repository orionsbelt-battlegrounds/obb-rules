// Compiled by ClojureScript 0.0-3308 {}
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
obb_rules.auto_deploys.firingsquad.firing_squad_value = (function obb_rules$auto_deploys$firingsquad$firing_squad_value(p__33089){
var vec__33091 = p__33089;
var unit = cljs.core.nth.call(null,vec__33091,(0),null);
var quantity = cljs.core.nth.call(null,vec__33091,(1),null);
return (- obb_rules.unit.unit_range.call(null,unit));
});
/**
 * From the given stash, finds how may units are first row material
 */
obb_rules.auto_deploys.firingsquad.front_row_units_to_use = (function obb_rules$auto_deploys$firingsquad$front_row_units_to_use(stash){
var long_range_units = cljs.core.filter.call(null,(function (p1__33092_SHARP_){
return (obb_rules.unit.unit_range.call(null,cljs.core.first.call(null,p1__33092_SHARP_)) > (4));
}),stash);
var number = cljs.core.count.call(null,long_range_units);
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
var lineup = obb_rules.auto_deploys.common.build_lineup.call(null,board,stash);
var lineup_quantities = obb_rules.auto_deploys.common.build_lineup_quantities.call(null,lineup,stash);
var raw_actions = obb_rules.auto_deploys.common.build_deploy_actions.call(null,player,lineup_quantities,(7));
var actions = cljs.core.map.call(null,obb_rules.actions.deploy.build_deploy,raw_actions);
var start_result = obb_rules.result.action_success.call(null,board,(0));
return cljs.core.reduce.call(null,cljs.core.partial.call(null,obb_rules.auto_deploys.common.do_actions,player),start_result,actions);
});
/**
 * Deploys a back row with all the given units
 */
obb_rules.auto_deploys.firingsquad.deploy_back_row = (function obb_rules$auto_deploys$firingsquad$deploy_back_row(result,player,stash){
var raw_actions = obb_rules.auto_deploys.common.build_deploy_actions.call(null,player,stash,(8));
var actions = cljs.core.map.call(null,obb_rules.actions.deploy.build_deploy,raw_actions);
return cljs.core.reduce.call(null,cljs.core.partial.call(null,obb_rules.auto_deploys.common.do_actions,player),result,actions);
});
/**
 * Deploys the given stash in a way that will be advantajous for firingsquad
 * logic
 */
obb_rules.auto_deploys.firingsquad.deploy = (function obb_rules$auto_deploys$firingsquad$deploy(board,player){
var stash = cljs.core.map.call(null,obb_rules.auto_deploys.common.map_stash_to_units,obb_rules.board.get_stash.call(null,board,player));
var ordered_stash = cljs.core.sort_by.call(null,obb_rules.auto_deploys.firingsquad.firing_squad_value,stash);
var front_row_units = obb_rules.auto_deploys.firingsquad.front_row_units_to_use.call(null,stash);
var back_row_units = (cljs.core.count.call(null,ordered_stash) - front_row_units);
return obb_rules.auto_deploys.firingsquad.deploy_back_row.call(null,obb_rules.auto_deploys.firingsquad.deploy_front_row.call(null,board,player,cljs.core.take.call(null,front_row_units,ordered_stash)),player,cljs.core.take_last.call(null,back_row_units,ordered_stash));
});

//# sourceMappingURL=firingsquad.js.map?rel=1436517557404