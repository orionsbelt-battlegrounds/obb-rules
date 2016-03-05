// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.action');
goog.require('cljs.core');
goog.require('obb_rules.actions.deploy');
goog.require('obb_rules.actions.attack');
goog.require('obb_rules.actions.auto_deploy');
goog.require('obb_rules.actions.goto$');
goog.require('obb_rules.actions.move');
goog.require('obb_rules.actions.rotate');
obb_rules.action.available_actions = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$rotate,obb_rules.actions.rotate.build_rotate,cljs.core.cst$kw$move,obb_rules.actions.move.build_move,cljs.core.cst$kw$attack,obb_rules.actions.attack.build_attack,cljs.core.cst$kw$deploy,obb_rules.actions.deploy.build_deploy,cljs.core.cst$kw$auto_DASH_deploy,obb_rules.actions.auto_deploy.build_auto_deploy,cljs.core.cst$kw$goto,obb_rules.actions.goto$.build_goto], null);
/**
 * Builds an action given its code and args
 */
obb_rules.action.build_action = (function obb_rules$action$build_action(p__15204){
var vec__15207 = p__15204;
var action_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15207,(0),null);
var action_args = cljs.core.nthnext(vec__15207,(1));
var builder = (function (){var G__15208 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(action_type);
return (obb_rules.action.available_actions.cljs$core$IFn$_invoke$arity$1 ? obb_rules.action.available_actions.cljs$core$IFn$_invoke$arity$1(G__15208) : obb_rules.action.available_actions.call(null,G__15208));
})();
if(cljs.core.truth_(builder)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No action builder defined for "),cljs.core.str(action_type)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$builder], 0)))].join('')));
}

return (builder.cljs$core$IFn$_invoke$arity$1 ? builder.cljs$core$IFn$_invoke$arity$1(action_args) : builder.call(null,action_args));
});
/**
 * Removes action specific state from the board
 */
obb_rules.action.reset_action_specific_state = (function obb_rules$action$reset_action_specific_state(board){
return obb_rules.actions.move.reset_action_state(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(board,cljs.core.cst$kw$removed_DASH_elements));
});
