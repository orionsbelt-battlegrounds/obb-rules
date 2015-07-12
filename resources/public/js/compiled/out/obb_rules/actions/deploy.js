// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_rules.actions.deploy');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.simplifier');
goog.require('obb_rules.element');
goog.require('obb_rules.result');
goog.require('obb_rules.unit');
goog.require('obb_rules.game');
goog.require('obb_rules.stash');
/**
 * Returns true if the coordinate zone is invalid
 */
obb_rules.actions.deploy.invalid_deploy_zone_QMARK_ = (function obb_rules$actions$deploy$invalid_deploy_zone_QMARK_(player,p__33046){
var vec__33048 = p__33046;
var x = cljs.core.nth.call(null,vec__33048,(0),null);
var y = cljs.core.nth.call(null,vec__33048,(1),null);
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_.call(null,player,new cljs.core.Keyword(null,"p1","p1",-936759954)))){
return (y < (7));
} else {
return (y > (2));
}
});
/**
 * Checks if the deploy can be made
 */
obb_rules.actions.deploy.deploy_restrictions = (function obb_rules$actions$deploy$deploy_restrictions(player,board,quantity,unit,coordinate,element,stash){
if(cljs.core.not.call(null,stash)){
return "NoStashAvailable";
} else {
if(cljs.core.not.call(null,obb_rules.game.deploy_QMARK_.call(null,board))){
return "StateMismatch";
} else {
if(cljs.core.truth_(obb_rules.actions.deploy.invalid_deploy_zone_QMARK_.call(null,player,coordinate))){
return "InvalidDeployZone";
} else {
if(cljs.core.not.call(null,obb_rules.stash.available_QMARK_.call(null,stash,cljs.core.keyword.call(null,obb_rules.unit.unit_name.call(null,unit)),quantity))){
return "InvalidQuantity";
} else {
if(cljs.core.not.call(null,obb_rules.board.can_place_element_QMARK_.call(null,board,coordinate,element))){
return "InvalidPlace";
} else {
return null;
}
}
}
}
}
});
/**
 * Processes a deploy
 */
obb_rules.actions.deploy.process_deploy = (function obb_rules$actions$deploy$process_deploy(player,board,quantity,unit,coordinate,element,stash){
var unit_type = obb_rules.unit.unit_name.call(null,unit);
var new_stash = obb_rules.stash.retrieve.call(null,stash,unit_type,quantity);
var placed_board = obb_rules.board.place_element.call(null,board,coordinate,element);
var new_board = obb_rules.board.set_stash.call(null,placed_board,player,new_stash);
return obb_rules.result.action_success.call(null,new_board,(0));
});
/**
 * Gets the default direction for the given player
 */
obb_rules.actions.deploy.default_direction = (function obb_rules$actions$deploy$default_direction(player){
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_.call(null,player,new cljs.core.Keyword(null,"p1","p1",-936759954)))){
return new cljs.core.Keyword(null,"north","north",651323902);
} else {
return new cljs.core.Keyword(null,"south","south",1586796293);
}
});
/**
 * Deploys a unit to the battleground
 */
obb_rules.actions.deploy.build_deploy = (function obb_rules$actions$deploy$build_deploy(p__33049){
var vec__33051 = p__33049;
var quantity = cljs.core.nth.call(null,vec__33051,(0),null);
var unit_type = cljs.core.nth.call(null,vec__33051,(1),null);
var coordinate = cljs.core.nth.call(null,vec__33051,(2),null);
return ((function (vec__33051,quantity,unit_type,coordinate){
return (function obb_rules$actions$deploy$build_deploy_$_deployer(board,player){
var unit = obb_rules.unit.fetch.call(null,unit_type);
var element = obb_rules.element.create_element.call(null,player,unit,quantity,obb_rules.actions.deploy.default_direction.call(null,player));
var stash = obb_rules.board.get_stash.call(null,board,player);
if(cljs.core.truth_(unit)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Don't know unit type "),cljs.core.str(unit_type)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"unit","unit",2015706702,null)))].join('')));
}

var temp__4423__auto__ = obb_rules.actions.deploy.deploy_restrictions.call(null,player,board,quantity,unit,coordinate,element,stash);
if(cljs.core.truth_(temp__4423__auto__)){
var error = temp__4423__auto__;
return obb_rules.result.action_failed.call(null,error);
} else {
return obb_rules.actions.deploy.process_deploy.call(null,player,board,quantity,unit,coordinate,element,stash);
}
});
;})(vec__33051,quantity,unit_type,coordinate))
});

//# sourceMappingURL=deploy.js.map?rel=1436517557246