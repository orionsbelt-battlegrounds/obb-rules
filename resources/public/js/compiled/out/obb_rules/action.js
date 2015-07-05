// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_rules.action');
goog.require('cljs.core');
goog.require('obb_rules.actions.deploy');
goog.require('obb_rules.actions.attack');
goog.require('obb_rules.actions.auto_deploy');
goog.require('obb_rules.actions.goto$');
goog.require('obb_rules.actions.move');
goog.require('obb_rules.actions.rotate');
obb_rules.action.available_actions = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"rotate","rotate",152705015),obb_rules.actions.rotate.build_rotate,new cljs.core.Keyword(null,"move","move",-2110884309),obb_rules.actions.move.build_move,new cljs.core.Keyword(null,"attack","attack",1957061788),obb_rules.actions.attack.build_attack,new cljs.core.Keyword(null,"deploy","deploy",-2006774212),obb_rules.actions.deploy.build_deploy,new cljs.core.Keyword(null,"auto-deploy","auto-deploy",1838692925),obb_rules.actions.auto_deploy.build_auto_deploy,new cljs.core.Keyword(null,"goto","goto",80149757),obb_rules.actions.goto$.build_goto], null);
/**
 * Builds an action given its code and args
 */
obb_rules.action.build_action = (function obb_rules$action$build_action(p__23327){
var vec__23329 = p__23327;
var action_type = cljs.core.nth.call(null,vec__23329,(0),null);
var action_args = cljs.core.nthnext.call(null,vec__23329,(1));
var builder = obb_rules.action.available_actions.call(null,cljs.core.keyword.call(null,action_type));
if(cljs.core.truth_(builder)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No action builder defined for "),cljs.core.str(action_type)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"builder","builder",-414730478,null)))].join('')));
}

return builder.call(null,action_args);
});
/**
 * Removes action specific state from the board
 */
obb_rules.action.reset_action_specific_state = (function obb_rules$action$reset_action_specific_state(board){
return obb_rules.actions.move.reset_action_state.call(null,cljs.core.dissoc.call(null,board,new cljs.core.Keyword(null,"removed-elements","removed-elements",1264344662)));
});

//# sourceMappingURL=action.js.map?rel=1436104824922