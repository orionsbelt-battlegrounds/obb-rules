// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
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
obb_rules.actions.deploy.invalid_deploy_zone_QMARK_ = (function obb_rules$actions$deploy$invalid_deploy_zone_QMARK_(player,p__12811){
var vec__12813 = p__12811;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12813,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12813,(1),null);
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(player,cljs.core.constant$keyword$p1))){
return (y < (7));
} else {
return (y > (2));
}
});
/**
 * Checks if the deploy can be made
 */
obb_rules.actions.deploy.deploy_restrictions = (function obb_rules$actions$deploy$deploy_restrictions(player,board,quantity,unit,coordinate,element,stash){
if(cljs.core.not(stash)){
return "NoStashAvailable";
} else {
if(cljs.core.not(obb_rules.game.deploy_QMARK_(board))){
return "StateMismatch";
} else {
if(cljs.core.truth_(obb_rules.actions.deploy.invalid_deploy_zone_QMARK_(player,coordinate))){
return "InvalidDeployZone";
} else {
if(cljs.core.not(obb_rules.stash.available_QMARK_(stash,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(obb_rules.unit.unit_name(unit)),quantity))){
return "InvalidQuantity";
} else {
if(cljs.core.not(obb_rules.board.can_place_element_QMARK_(board,coordinate,element))){
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
var unit_type = obb_rules.unit.unit_name(unit);
var new_stash = obb_rules.stash.retrieve(stash,unit_type,quantity);
var placed_board = obb_rules.board.place_element(board,coordinate,element);
var new_board = obb_rules.board.set_stash(placed_board,player,new_stash);
return obb_rules.result.action_success.cljs$core$IFn$_invoke$arity$2(new_board,(0));
});
/**
 * Gets the default direction for the given player
 */
obb_rules.actions.deploy.default_direction = (function obb_rules$actions$deploy$default_direction(player){
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(player,cljs.core.constant$keyword$p1))){
return cljs.core.constant$keyword$north;
} else {
return cljs.core.constant$keyword$south;
}
});
/**
 * Deploys a unit to the battleground
 */
obb_rules.actions.deploy.build_deploy = (function obb_rules$actions$deploy$build_deploy(p__12814){
var vec__12816 = p__12814;
var quantity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12816,(0),null);
var unit_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12816,(1),null);
var coordinate = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12816,(2),null);
return ((function (vec__12816,quantity,unit_type,coordinate){
return (function obb_rules$actions$deploy$build_deploy_$_deployer(board,player){
var unit = obb_rules.unit.fetch(unit_type);
var element = obb_rules.element.create_element.cljs$core$IFn$_invoke$arity$4(player,unit,quantity,obb_rules.actions.deploy.default_direction(player));
var stash = obb_rules.board.get_stash(board,player);
if(cljs.core.truth_(unit)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Don't know unit type "),cljs.core.str(unit_type)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"unit","unit",2015706702,null)], 0)))].join('')));
}

var temp__4423__auto__ = obb_rules.actions.deploy.deploy_restrictions(player,board,quantity,unit,coordinate,element,stash);
if(cljs.core.truth_(temp__4423__auto__)){
var error = temp__4423__auto__;
return obb_rules.result.action_failed.cljs$core$IFn$_invoke$arity$1(error);
} else {
return obb_rules.actions.deploy.process_deploy(player,board,quantity,unit,coordinate,element,stash);
}
});
;})(vec__12816,quantity,unit_type,coordinate))
});
