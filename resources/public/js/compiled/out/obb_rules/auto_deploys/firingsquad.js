// Compiled by ClojureScript 1.7.228 {}
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
obb_rules.auto_deploys.firingsquad.firing_squad_value = (function obb_rules$auto_deploys$firingsquad$firing_squad_value(p__41516){
var vec__41518 = p__41516;
var unit = cljs.core.nth.call(null,vec__41518,(0),null);
var quantity = cljs.core.nth.call(null,vec__41518,(1),null);
return (- obb_rules.unit.unit_range.call(null,unit));
});
/**
 * From the given stash, finds how may units are first row material
 */
obb_rules.auto_deploys.firingsquad.front_row_units_to_use = (function obb_rules$auto_deploys$firingsquad$front_row_units_to_use(stash){
var long_range_units = cljs.core.filter.call(null,(function (p1__41519_SHARP_){
return (obb_rules.unit.unit_range.call(null,cljs.core.first.call(null,p1__41519_SHARP_)) > (4));
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
var actions = cljs.core.map.call(null,obb_rules.actions.deploy.deploy_action,raw_actions);
var board__$1 = cljs.core.assoc.call(null,board,new cljs.core.Keyword(null,"deploy-actions","deploy-actions",397011664),raw_actions);
var start_result = obb_rules.result.action_success.call(null,board__$1,(0));
return cljs.core.reduce.call(null,cljs.core.partial.call(null,obb_rules.auto_deploys.common.do_actions,player),start_result,actions);
});
/**
 * Takes the auto deploy action and adds the actual run deploy actions
 *   on the history
 */
obb_rules.auto_deploys.firingsquad.build_history = (function obb_rules$auto_deploys$firingsquad$build_history(player,result,raw_actions){
var history = cljs.core.get_in.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"history","history",-247395220)], null));
var deploy_actions = cljs.core.into.call(null,cljs.core.get_in.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"deploy-actions","deploy-actions",397011664)], null)),raw_actions);
var history__$1 = cljs.core.conj.call(null,history,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),player,new cljs.core.Keyword(null,"actions","actions",-812656882),deploy_actions], null));
var result__$1 = cljs.core.assoc_in.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"history","history",-247395220)], null),history__$1);
return cljs.core.update_in.call(null,result__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"deploy-actions","deploy-actions",397011664));
});
/**
 * Deploys a back row with all the given units
 */
obb_rules.auto_deploys.firingsquad.deploy_back_row = (function obb_rules$auto_deploys$firingsquad$deploy_back_row(result,player,stash){
var raw_actions = obb_rules.auto_deploys.common.build_deploy_actions.call(null,player,stash,(8));
var result__$1 = obb_rules.auto_deploys.firingsquad.build_history.call(null,player,result,raw_actions);
var actions = cljs.core.map.call(null,obb_rules.actions.deploy.deploy_action,raw_actions);
return cljs.core.reduce.call(null,cljs.core.partial.call(null,obb_rules.auto_deploys.common.do_actions,player),result__$1,actions);
});
/**
 * Deploys the given stash in a way that will be advantajous for firingsquad
 *   logic
 */
obb_rules.auto_deploys.firingsquad.deploy = (function obb_rules$auto_deploys$firingsquad$deploy(board,player){
var stash = cljs.core.map.call(null,obb_rules.auto_deploys.common.map_stash_to_units,obb_rules.board.get_stash.call(null,board,player));
var ordered_stash = cljs.core.sort_by.call(null,obb_rules.auto_deploys.firingsquad.firing_squad_value,stash);
var front_row_units = obb_rules.auto_deploys.firingsquad.front_row_units_to_use.call(null,stash);
var back_row_units = (cljs.core.count.call(null,ordered_stash) - front_row_units);
return obb_rules.auto_deploys.firingsquad.deploy_back_row.call(null,obb_rules.auto_deploys.firingsquad.deploy_front_row.call(null,board,player,cljs.core.take.call(null,front_row_units,ordered_stash)),player,cljs.core.take_last.call(null,back_row_units,ordered_stash));
});

//# sourceMappingURL=firingsquad.js.map?rel=1458852291647