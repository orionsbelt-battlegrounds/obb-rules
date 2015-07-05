// Compiled by ClojureScript 0.0-3308 {}
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
obb_rules.actions.auto_deploy.templates = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"firingsquad","firingsquad",-1910418650),obb_rules.auto_deploys.firingsquad.deploy], null);
/**
 * Checks if the auto deploy can be made
 */
obb_rules.actions.auto_deploy.verify_restrictions = (function obb_rules$actions$auto_deploy$verify_restrictions(board,player,template){
if(cljs.core.not.call(null,obb_rules.game.state_QMARK_.call(null,board,new cljs.core.Keyword(null,"deploy","deploy",-2006774212)))){
return "MustBeDeployState";
} else {
if(cljs.core.truth_(obb_rules.stash.cleared_QMARK_.call(null,obb_rules.board.get_stash.call(null,board,player)))){
return "NoStash";
} else {
if((obb_rules.actions.auto_deploy.templates.call(null,template) == null)){
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
obb_rules.actions.auto_deploy.build_auto_deploy = (function obb_rules$actions$auto_deploy$build_auto_deploy(p__23295){
var vec__23297 = p__23295;
var raw_template_name = cljs.core.nth.call(null,vec__23297,(0),null);
var template_name = cljs.core.keyword.call(null,raw_template_name);
return ((function (template_name,vec__23297,raw_template_name){
return (function obb_rules$actions$auto_deploy$build_auto_deploy_$_auto_deployer(board,player){
var temp__4423__auto__ = obb_rules.actions.auto_deploy.verify_restrictions.call(null,board,player,template_name);
if(cljs.core.truth_(temp__4423__auto__)){
var error = temp__4423__auto__;
return obb_rules.result.action_failed.call(null,error);
} else {
return obb_rules.actions.auto_deploy.templates.call(null,template_name).call(null,board,player);
}
});
;})(template_name,vec__23297,raw_template_name))
});

//# sourceMappingURL=auto_deploy.js.map?rel=1436104824795