// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.action');
goog.require('cljs.core');
goog.require('obb_rules.actions.deploy');
goog.require('obb_rules.actions.attack');
goog.require('obb_rules.actions.auto_deploy');
goog.require('obb_rules.actions.goto$');
goog.require('obb_rules.actions.move');
goog.require('obb_rules.actions.rotate');
obb_rules.action.available_actions = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$rotate,obb_rules.actions.rotate.build_rotate,cljs.core.constant$keyword$move,obb_rules.actions.move.build_move,cljs.core.constant$keyword$attack,obb_rules.actions.attack.build_attack,cljs.core.constant$keyword$deploy,obb_rules.actions.deploy.build_deploy,cljs.core.constant$keyword$auto_DASH_deploy,obb_rules.actions.auto_deploy.build_auto_deploy,cljs.core.constant$keyword$goto,obb_rules.actions.goto$.build_goto], null);
/**
 * Builds an action given its code and args
 */
obb_rules.action.build_action = (function obb_rules$action$build_action(p__12937){
var vec__12941 = p__12937;
var action_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12941,(0),null);
var action_args = cljs.core.nthnext(vec__12941,(1));
var builder = (function (){var G__12942 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(action_type);
return (obb_rules.action.available_actions.cljs$core$IFn$_invoke$arity$1 ? obb_rules.action.available_actions.cljs$core$IFn$_invoke$arity$1(G__12942) : obb_rules.action.available_actions.call(null,G__12942));
})();
if(cljs.core.truth_(builder)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No action builder defined for "),cljs.core.str(action_type)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"builder","builder",-414730478,null)], 0)))].join('')));
}

var G__12943 = action_args;
return (builder.cljs$core$IFn$_invoke$arity$1 ? builder.cljs$core$IFn$_invoke$arity$1(G__12943) : builder.call(null,G__12943));
});
/**
 * Removes action specific state from the board
 */
obb_rules.action.reset_action_specific_state = (function obb_rules$action$reset_action_specific_state(board){
return obb_rules.actions.move.reset_action_state(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(board,cljs.core.constant$keyword$removed_DASH_elements));
});