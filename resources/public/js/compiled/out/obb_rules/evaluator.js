// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.evaluator');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.element');
goog.require('obb_rules.unit');
goog.require('obb_rules.game');
goog.require('obb_rules.stash');
obb_rules.evaluator.default_evaluator = cljs.core.constant$keyword$value;
/**
 * Gets the units from the game that belong to the given player.
 * Also returns the quantities
 */
obb_rules.evaluator.get_units = (function obb_rules$evaluator$get_units(game,player){
var stash = obb_rules.game.get_stash(game,player);
if(cljs.core.truth_(obb_rules.stash.cleared_QMARK_(stash))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (stash){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.element.element_unit(e),obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1(e)], null);
});})(stash))
,obb_rules.board.board_elements(game,player));
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (stash){
return (function (p__13076){
var vec__13077 = p__13076;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13077,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13077,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.unit.fetch(k),v], null);
});})(stash))
,stash);
}
});
/**
 * Sums the value/quantity of the given units
 */
obb_rules.evaluator.sum_value = (function obb_rules$evaluator$sum_value(acc,p__13078){
var vec__13080 = p__13078;
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13080,(0),null);
var quantity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13080,(1),null);
return (acc + (quantity * obb_rules.unit.unit_value(unit)));
});
/**
 * Calculates the score for the given units on the given game
 */
obb_rules.evaluator.get_score = (function obb_rules$evaluator$get_score(game,units){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(obb_rules.evaluator.sum_value,(0),units);
});
/**
 * Evaluates a game for the participant players
 */
obb_rules.evaluator.eval_game = (function obb_rules$evaluator$eval_game(){
var G__13082 = arguments.length;
switch (G__13082) {
case 1:
return obb_rules.evaluator.eval_game.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.evaluator.eval_game.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

obb_rules.evaluator.eval_game.cljs$core$IFn$_invoke$arity$1 = (function (game){
return obb_rules.evaluator.eval_game.cljs$core$IFn$_invoke$arity$2(game,obb_rules.evaluator.default_evaluator);
});

obb_rules.evaluator.eval_game.cljs$core$IFn$_invoke$arity$2 = (function (game,mode){
var p1_units = obb_rules.evaluator.get_units(game,cljs.core.constant$keyword$p1);
var p2_units = obb_rules.evaluator.get_units(game,cljs.core.constant$keyword$p2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.evaluator.get_score(game,p1_units),obb_rules.evaluator.get_score(game,p2_units)], null);
});

obb_rules.evaluator.eval_game.cljs$lang$maxFixedArity = 2;
