// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.actions.damage_calculator');
goog.require('cljs.core');
goog.require('obb_rules.math');
goog.require('obb_rules.element');
goog.require('obb_rules.unit');
/**
 * Gets a distance factor for an attack
 */
obb_rules.actions.damage_calculator.distance_factor = (function obb_rules$actions$damage_calculator$distance_factor(attacker,target){
var vec__10195 = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(attacker);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10195,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10195,(1),null);
var vec__10196 = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(target);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10196,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10196,(1),null);
var distance = obb_rules.math.abs(((x1 - x2) - (y1 - y2)));
if((distance > (3))){
return (0.25 * ((7) - distance));
} else {
return (1);
}
});
/**
 * Gets the base damage given by a unit to another
 */
obb_rules.actions.damage_calculator.damage = (function obb_rules$actions$damage_calculator$damage(board,attacker_element,defender_element){
var attacker_quantity = obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1(attacker_element);
var attack = obb_rules.element.element_attack(board,attacker_element,defender_element);
var distance_perc = obb_rules.actions.damage_calculator.distance_factor(attacker_element,defender_element);
return (((attack * attacker_quantity) * distance_perc) | (0));
});
/**
 * Gets the defense of a given unit from another
 */
obb_rules.actions.damage_calculator.defense = (function obb_rules$actions$damage_calculator$defense(board,attacker_element,defender_element){
return obb_rules.element.element_defense(board,attacker_element,defender_element);
});
/**
 * If the given quantity is bigger than 1, then it should be an integer
 */
obb_rules.actions.damage_calculator.quantify = (function obb_rules$actions$damage_calculator$quantify(quantity){
if((quantity > (1))){
return (quantity | (0));
} else {
return quantity;
}
});
/**
 * Gets how many units an attack will destroy
 */
obb_rules.actions.damage_calculator.destroyed_with_unused_damage = (function obb_rules$actions$damage_calculator$destroyed_with_unused_damage(){
var args10197 = [];
var len__8238__auto___10200 = arguments.length;
var i__8239__auto___10201 = (0);
while(true){
if((i__8239__auto___10201 < len__8238__auto___10200)){
args10197.push((arguments[i__8239__auto___10201]));

var G__10202 = (i__8239__auto___10201 + (1));
i__8239__auto___10201 = G__10202;
continue;
} else {
}
break;
}

var G__10199 = args10197.length;
switch (G__10199) {
case 3:
return obb_rules.actions.damage_calculator.destroyed_with_unused_damage.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return obb_rules.actions.damage_calculator.destroyed_with_unused_damage.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10197.length)].join('')));

}
});

obb_rules.actions.damage_calculator.destroyed_with_unused_damage.cljs$core$IFn$_invoke$arity$3 = (function (board,attacker_element,defender_element){
return obb_rules.actions.damage_calculator.destroyed_with_unused_damage.cljs$core$IFn$_invoke$arity$4(board,attacker_element,defender_element,obb_rules.actions.damage_calculator.damage(board,attacker_element,defender_element));
});

obb_rules.actions.damage_calculator.destroyed_with_unused_damage.cljs$core$IFn$_invoke$arity$4 = (function (board,attacker_element,defender_element,total_damage){
var elem_defense = obb_rules.actions.damage_calculator.defense(board,attacker_element,defender_element);
var destroyed = (total_damage / elem_defense);
var defender_quantity = obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1(defender_element);
if((destroyed > defender_quantity)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.actions.damage_calculator.quantify(defender_quantity),(total_damage - (elem_defense * defender_quantity))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.actions.damage_calculator.quantify(destroyed),(0)], null);
}
});

obb_rules.actions.damage_calculator.destroyed_with_unused_damage.cljs$lang$maxFixedArity = 4;
/**
 * Gets how many units an attack will destroy
 */
obb_rules.actions.damage_calculator.destroyed = (function obb_rules$actions$damage_calculator$destroyed(board,attacker_element,defender_element){
var vec__10205 = obb_rules.actions.damage_calculator.destroyed_with_unused_damage.cljs$core$IFn$_invoke$arity$3(board,attacker_element,defender_element);
var destroyed__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10205,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10205,(1),null);
return destroyed__$1;
});
