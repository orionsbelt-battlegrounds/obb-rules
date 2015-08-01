// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
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
obb_rules.actions.auto_deploy.templates = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$firingsquad,obb_rules.auto_deploys.firingsquad.deploy], null);
/**
 * Checks if the auto deploy can be made
 */
obb_rules.actions.auto_deploy.verify_restrictions = (function obb_rules$actions$auto_deploy$verify_restrictions(board,player,template){
if(cljs.core.not(obb_rules.game.state_QMARK_(board,cljs.core.constant$keyword$deploy))){
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
obb_rules.actions.auto_deploy.build_auto_deploy = (function obb_rules$actions$auto_deploy$build_auto_deploy(p__10444){
var vec__10446 = p__10444;
var raw_template_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10446,(0),null);
var template_name = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(raw_template_name);
return ((function (template_name,vec__10446,raw_template_name){
return (function obb_rules$actions$auto_deploy$build_auto_deploy_$_auto_deployer(board,player){
var temp__4423__auto__ = obb_rules.actions.auto_deploy.verify_restrictions(board,player,template_name);
if(cljs.core.truth_(temp__4423__auto__)){
var error = temp__4423__auto__;
return obb_rules.result.action_failed.cljs$core$IFn$_invoke$arity$1(error);
} else {
return (obb_rules.actions.auto_deploy.templates.cljs$core$IFn$_invoke$arity$1 ? obb_rules.actions.auto_deploy.templates.cljs$core$IFn$_invoke$arity$1(template_name) : obb_rules.actions.auto_deploy.templates.call(null,template_name)).call(null,board,player);
}
});
;})(template_name,vec__10446,raw_template_name))
});
