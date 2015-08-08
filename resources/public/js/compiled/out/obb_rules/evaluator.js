// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
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
return (function (p__12006){
var vec__12007 = p__12006;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12007,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12007,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.unit.fetch(k),v], null);
});})(stash))
,stash);
}
});
/**
 * Sums the value/quantity of the given units
 */
obb_rules.evaluator.sum_value = (function obb_rules$evaluator$sum_value(acc,p__12008){
var vec__12010 = p__12008;
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12010,(0),null);
var quantity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12010,(1),null);
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
var args12011 = [];
var len__8231__auto___12014 = arguments.length;
var i__8232__auto___12015 = (0);
while(true){
if((i__8232__auto___12015 < len__8231__auto___12014)){
args12011.push((arguments[i__8232__auto___12015]));

var G__12016 = (i__8232__auto___12015 + (1));
i__8232__auto___12015 = G__12016;
continue;
} else {
}
break;
}

var G__12013 = args12011.length;
switch (G__12013) {
case 1:
return obb_rules.evaluator.eval_game.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.evaluator.eval_game.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12011.length)].join('')));

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
