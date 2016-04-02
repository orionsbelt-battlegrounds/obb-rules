// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.actions.auto_deploy');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.actions.deploy');
goog.require('obb_rules.auto_deploys.firingsquad');
goog.require('obb_rules.math');
goog.require('obb_rules.result');
goog.require('obb_rules.unit');
goog.require('obb_rules.game');
goog.require('obb_rules.stash');
goog.require('obb_rules.translator');
/**
 * The supported auto-deploy templates
 */
obb_rules.actions.auto_deploy.templates = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$firingsquad,obb_rules.auto_deploys.firingsquad.deploy], null);
/**
 * Checks if the auto deploy can be made
 */
obb_rules.actions.auto_deploy.verify_restrictions = (function obb_rules$actions$auto_deploy$verify_restrictions(board,player,template){
if(cljs.core.not(obb_rules.game.state_QMARK_(board,cljs.core.cst$kw$deploy))){
return "MustBeDeployState";
} else {
if(cljs.core.truth_(obb_rules.stash.cleared_QMARK_(obb_rules.board.get_stash(board,player)))){
return "NoStash";
} else {
if(((obb_rules.actions.auto_deploy.templates.cljs$core$IFn$_invoke$arity$1 ? obb_rules.actions.auto_deploy.templates.cljs$core$IFn$_invoke$arity$1(template) : obb_rules.actions.auto_deploy.templates.call(null,template)) == null)){
return "NoTemplate";
} else {
return null;
}
}
}
});
/**
 * Creates a action that auto deploys a stash
 */
obb_rules.actions.auto_deploy.build_auto_deploy = (function obb_rules$actions$auto_deploy$build_auto_deploy(p__15677){
var vec__15679 = p__15677;
var raw_template_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15679,(0),null);
var template_name = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(raw_template_name);
return ((function (template_name,vec__15679,raw_template_name){
return (function obb_rules$actions$auto_deploy$build_auto_deploy_$_auto_deployer(board,player){
var temp__4655__auto__ = obb_rules.actions.auto_deploy.verify_restrictions(board,player,template_name);
if(cljs.core.truth_(temp__4655__auto__)){
var error = temp__4655__auto__;
return obb_rules.result.action_failed.cljs$core$IFn$_invoke$arity$1(error);
} else {
return (obb_rules.actions.auto_deploy.templates.cljs$core$IFn$_invoke$arity$1 ? obb_rules.actions.auto_deploy.templates.cljs$core$IFn$_invoke$arity$1(template_name) : obb_rules.actions.auto_deploy.templates.call(null,template_name)).call(null,board,player);
}
});
;})(template_name,vec__15679,raw_template_name))
});
