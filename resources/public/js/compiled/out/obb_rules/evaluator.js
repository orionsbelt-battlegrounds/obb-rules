// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_rules.evaluator');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.element');
goog.require('obb_rules.unit');
goog.require('obb_rules.game');
goog.require('obb_rules.stash');
obb_rules.evaluator.default_evaluator = new cljs.core.Keyword(null,"value","value",305978217);
/**
 * Gets the units from the game that belong to the given player.
 * Also returns the quantities
 */
obb_rules.evaluator.get_units = (function obb_rules$evaluator$get_units(game,player){
var stash = obb_rules.game.get_stash.call(null,game,player);
if(cljs.core.truth_(obb_rules.stash.cleared_QMARK_.call(null,stash))){
return cljs.core.map.call(null,((function (stash){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.element.element_unit.call(null,e),obb_rules.element.element_quantity.call(null,e)], null);
});})(stash))
,obb_rules.board.board_elements.call(null,game,player));
} else {
return cljs.core.map.call(null,((function (stash){
return (function (p__33138){
var vec__33139 = p__33138;
var k = cljs.core.nth.call(null,vec__33139,(0),null);
var v = cljs.core.nth.call(null,vec__33139,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.unit.fetch.call(null,k),v], null);
});})(stash))
,stash);
}
});
/**
 * Sums the value/quantity of the given units
 */
obb_rules.evaluator.sum_value = (function obb_rules$evaluator$sum_value(acc,p__33140){
var vec__33142 = p__33140;
var unit = cljs.core.nth.call(null,vec__33142,(0),null);
var quantity = cljs.core.nth.call(null,vec__33142,(1),null);
return (acc + (quantity * obb_rules.unit.unit_value.call(null,unit)));
});
/**
 * Calculates the score for the given units on the given game
 */
obb_rules.evaluator.get_score = (function obb_rules$evaluator$get_score(game,units){
return cljs.core.reduce.call(null,obb_rules.evaluator.sum_value,(0),units);
});
/**
 * Evaluates a game for the participant players
 */
obb_rules.evaluator.eval_game = (function obb_rules$evaluator$eval_game(){
var G__33144 = arguments.length;
switch (G__33144) {
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
return obb_rules.evaluator.eval_game.call(null,game,obb_rules.evaluator.default_evaluator);
});

obb_rules.evaluator.eval_game.cljs$core$IFn$_invoke$arity$2 = (function (game,mode){
var p1_units = obb_rules.evaluator.get_units.call(null,game,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2_units = obb_rules.evaluator.get_units.call(null,game,new cljs.core.Keyword(null,"p2","p2",905500641));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.evaluator.get_score.call(null,game,p1_units),obb_rules.evaluator.get_score.call(null,game,p2_units)], null);
});

obb_rules.evaluator.eval_game.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=evaluator.js.map?rel=1436517557584