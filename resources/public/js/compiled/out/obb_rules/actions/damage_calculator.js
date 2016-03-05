// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.actions.damage_calculator');
goog.require('cljs.core');
goog.require('obb_rules.math');
goog.require('obb_rules.element');
goog.require('obb_rules.unit');
/**
 * Gets a distance factor for an attack
 */
obb_rules.actions.damage_calculator.distance_factor = (function obb_rules$actions$damage_calculator$distance_factor(attacker,target){
var vec__14966 = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(attacker);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14966,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14966,(1),null);
var vec__14967 = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(target);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14967,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14967,(1),null);
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
obb_rules.actions.damage_calculator.destroyed_with_unused_damage = (function obb_rules$actions$damage_calculator$destroyed_with_unused_damage(var_args){
var args14968 = [];
var len__7214__auto___14971 = arguments.length;
var i__7215__auto___14972 = (0);
while(true){
if((i__7215__auto___14972 < len__7214__auto___14971)){
args14968.push((arguments[i__7215__auto___14972]));

var G__14973 = (i__7215__auto___14972 + (1));
i__7215__auto___14972 = G__14973;
continue;
} else {
}
break;
}

var G__14970 = args14968.length;
switch (G__14970) {
case 3:
return obb_rules.actions.damage_calculator.destroyed_with_unused_damage.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return obb_rules.actions.damage_calculator.destroyed_with_unused_damage.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14968.length)].join('')));

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
var vec__14976 = obb_rules.actions.damage_calculator.destroyed_with_unused_damage.cljs$core$IFn$_invoke$arity$3(board,attacker_element,defender_element);
var destroyed__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14976,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14976,(1),null);
return destroyed__$1;
});
