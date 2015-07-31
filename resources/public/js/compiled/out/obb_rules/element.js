// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.element');
goog.require('cljs.core');
goog.require('obb_rules.unit');
/**
 * Creates an element
 */
obb_rules.element.create_element = (function obb_rules$element$create_element(){
var G__12588 = arguments.length;
switch (G__12588) {
case 4:
return obb_rules.element.create_element.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return obb_rules.element.create_element.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

obb_rules.element.create_element.cljs$core$IFn$_invoke$arity$4 = (function (player,unit,quantity,direction){
return obb_rules.element.create_element.cljs$core$IFn$_invoke$arity$5(player,unit,quantity,direction,null);
});

obb_rules.element.create_element.cljs$core$IFn$_invoke$arity$5 = (function (player,unit,quantity,direction,coordinate){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$player,player,cljs.core.constant$keyword$unit,unit,cljs.core.constant$keyword$quantity,quantity,cljs.core.constant$keyword$direction,direction,cljs.core.constant$keyword$coordinate,coordinate,cljs.core.constant$keyword$hitpoints,obb_rules.unit.unit_defense(unit)], null);
});

obb_rules.element.create_element.cljs$lang$maxFixedArity = 5;
/**
 * Element's player
 */
obb_rules.element.element_player = (function obb_rules$element$element_player(){
var G__12591 = arguments.length;
switch (G__12591) {
case 1:
return obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1 = (function (element){
var G__12592 = cljs.core.constant$keyword$player;
return (element.cljs$core$IFn$_invoke$arity$1 ? element.cljs$core$IFn$_invoke$arity$1(G__12592) : element.call(null,G__12592));
});

obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$2 = (function (element,player){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,cljs.core.constant$keyword$player,player);
});

obb_rules.element.element_player.cljs$lang$maxFixedArity = 2;
/**
 * Element's unit
 */
obb_rules.element.element_unit = (function obb_rules$element$element_unit(element){
var G__12595 = cljs.core.constant$keyword$unit;
return (element.cljs$core$IFn$_invoke$arity$1 ? element.cljs$core$IFn$_invoke$arity$1(G__12595) : element.call(null,G__12595));
});
/**
 * Gets the hooks for the given event
 */
obb_rules.element.hooks = (function obb_rules$element$hooks(element,event){
var unit = obb_rules.element.element_unit(element);
return obb_rules.unit.event_hooks(unit,event);
});
/**
 * True if the element supports catapult
 */
obb_rules.element.catapult_attack_QMARK_ = (function obb_rules$element$catapult_attack_QMARK_(element){
var unit = obb_rules.element.element_unit(element);
return obb_rules.unit.catapult_QMARK_(unit);
});
/**
 * Gets the element's movement cost
 */
obb_rules.element.element_cost = (function obb_rules$element$element_cost(element){
var unit = obb_rules.element.element_unit(element);
return obb_rules.unit.unit_movement_cost(unit);
});
/**
 * Gets the element's range
 */
obb_rules.element.element_range = (function obb_rules$element$element_range(element){
var unit = obb_rules.element.element_unit(element);
return obb_rules.unit.unit_range(unit);
});
/**
 * Gets/Sets element's direction
 */
obb_rules.element.element_direction = (function obb_rules$element$element_direction(){
var G__12597 = arguments.length;
switch (G__12597) {
case 1:
return obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$1 = (function (element){
var G__12598 = cljs.core.constant$keyword$direction;
return (element.cljs$core$IFn$_invoke$arity$1 ? element.cljs$core$IFn$_invoke$arity$1(G__12598) : element.call(null,G__12598));
});

obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$2 = (function (element,new_direction){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,cljs.core.constant$keyword$direction,new_direction);
});

obb_rules.element.element_direction.cljs$lang$maxFixedArity = 2;
/**
 * Gets/Sets element's hitpoints
 */
obb_rules.element.element_hitpoints = (function obb_rules$element$element_hitpoints(){
var G__12601 = arguments.length;
switch (G__12601) {
case 1:
return obb_rules.element.element_hitpoints.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.element.element_hitpoints.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

obb_rules.element.element_hitpoints.cljs$core$IFn$_invoke$arity$1 = (function (element){
var G__12602 = cljs.core.constant$keyword$hitpoints;
return (element.cljs$core$IFn$_invoke$arity$1 ? element.cljs$core$IFn$_invoke$arity$1(G__12602) : element.call(null,G__12602));
});

obb_rules.element.element_hitpoints.cljs$core$IFn$_invoke$arity$2 = (function (element,new_hitpoints){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,cljs.core.constant$keyword$hitpoints,new_hitpoints);
});

obb_rules.element.element_hitpoints.cljs$lang$maxFixedArity = 2;
/**
 * Gets bonus
 */
obb_rules.element.get_bonus = (function obb_rules$element$get_bonus(unit,bonus_prop,bonus_type,specific_type){
var temp__4423__auto__ = obb_rules.unit.unit_bonus(unit);
if(cljs.core.truth_(temp__4423__auto__)){
var bonus = temp__4423__auto__;
var temp__4423__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(bonus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bonus_prop,bonus_type], null));
if(cljs.core.truth_(temp__4423__auto____$1)){
var specific = temp__4423__auto____$1;
var or__6938__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(specific,specific_type);
if(cljs.core.truth_(or__6938__auto__)){
return or__6938__auto__;
} else {
return (0);
}
} else {
return (0);
}
} else {
return (0);
}
});
/**
 * Gets the category bonus on a given context
 */
obb_rules.element.category_bonus = (function obb_rules$element$category_bonus(bonus_type,source_unit,target_unit){
var category = obb_rules.unit.unit_category(target_unit);
return obb_rules.element.get_bonus(source_unit,bonus_type,cljs.core.constant$keyword$category,category);
});
/**
 * Gets the displacement bonus on a given context
 */
obb_rules.element.displacement_bonus = (function obb_rules$element$displacement_bonus(bonus_type,source_unit,target_unit){
var displacement = obb_rules.unit.unit_displacement(target_unit);
return obb_rules.element.get_bonus(source_unit,bonus_type,cljs.core.constant$keyword$displacement,displacement);
});
/**
 * Gets the type bonus on a given context
 */
obb_rules.element.type_bonus = (function obb_rules$element$type_bonus(bonus_type,source_unit,target_unit){
var unit_type = obb_rules.unit.unit_type(target_unit);
return obb_rules.element.get_bonus(source_unit,bonus_type,cljs.core.constant$keyword$type,unit_type);
});
/**
 * Gets the terrain bonus on a given context
 */
obb_rules.element.terrain_bonus = (function obb_rules$element$terrain_bonus(bonus_type,board,unit){
return obb_rules.element.get_bonus(unit,bonus_type,cljs.core.constant$keyword$terrain,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,cljs.core.constant$keyword$terrain)));
});
/**
 * Resolves bonus between two units
 */
obb_rules.element.resolve_bonus = (function obb_rules$element$resolve_bonus(bonus_type,board,attacker_unit,defender_unit){
return (((obb_rules.element.category_bonus(bonus_type,attacker_unit,defender_unit) + obb_rules.element.terrain_bonus(bonus_type,board,attacker_unit)) + obb_rules.element.displacement_bonus(bonus_type,attacker_unit,defender_unit)) + obb_rules.element.type_bonus(bonus_type,attacker_unit,defender_unit));
});
/**
 * Gets the attack of this element for the given target
 */
obb_rules.element.element_attack = (function obb_rules$element$element_attack(board,element,target){
var attacker_unit = obb_rules.element.element_unit(element);
var defender_unit = obb_rules.element.element_unit(target);
var attack = obb_rules.unit.unit_attack(attacker_unit);
var bonus = obb_rules.element.resolve_bonus(cljs.core.constant$keyword$attack,board,attacker_unit,defender_unit);
return (attack + bonus);
});
/**
 * Gets the defense of this element for the given target
 */
obb_rules.element.element_defense = (function obb_rules$element$element_defense(board,element,target){
var attacker_unit = obb_rules.element.element_unit(element);
var defender_unit = obb_rules.element.element_unit(target);
var defense = obb_rules.unit.unit_defense(defender_unit);
var bonus = obb_rules.element.resolve_bonus(cljs.core.constant$keyword$defense,board,defender_unit,attacker_unit);
return (defense + bonus);
});
/**
 * Gets/Sets element's quantity
 */
obb_rules.element.element_quantity = (function obb_rules$element$element_quantity(){
var G__12605 = arguments.length;
switch (G__12605) {
case 1:
return obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1 = (function (element){
var G__12606 = cljs.core.constant$keyword$quantity;
return (element.cljs$core$IFn$_invoke$arity$1 ? element.cljs$core$IFn$_invoke$arity$1(G__12606) : element.call(null,G__12606));
});

obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$2 = (function (element,new_quantity){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,cljs.core.constant$keyword$quantity,new_quantity);
});

obb_rules.element.element_quantity.cljs$lang$maxFixedArity = 2;
/**
 * Removes a specific, concrete quantity from the element
 */
obb_rules.element.remove_specific_quantity = (function obb_rules$element$remove_specific_quantity(element,quantity){
var current_quantity = obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1(element);
var remaining_quantity = (current_quantity - quantity);
if(((0) > remaining_quantity)){
return obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$2(element,(0));
} else {
return obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$2(element,remaining_quantity);
}
});
/**
 * Removes part of an element (<1)
 */
obb_rules.element.remove_hitpoints = (function obb_rules$element$remove_hitpoints(element,percentage){
var unit = obb_rules.element.element_unit(element);
var defense = obb_rules.unit.unit_defense(unit);
var hitpoints_to_take = (percentage * defense);
var current_hitpoints = obb_rules.element.element_hitpoints.cljs$core$IFn$_invoke$arity$1(element);
var new_hitpoints = (current_hitpoints - hitpoints_to_take);
if(((0) < new_hitpoints)){
return obb_rules.element.element_hitpoints.cljs$core$IFn$_invoke$arity$2(element,new_hitpoints);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(element,cljs.core.constant$keyword$hitpoints,defense,cljs.core.array_seq([cljs.core.constant$keyword$quantity,(obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1(element) - (1))], 0));
}
});
/**
 * Removes a specified quantity
 */
obb_rules.element.remove_quantity = (function obb_rules$element$remove_quantity(element,quantity){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quantity,(0))){
return element;
} else {
if((quantity >= (1))){
return obb_rules.element.remove_specific_quantity(element,quantity);
} else {
return obb_rules.element.remove_hitpoints(element,quantity);

}
}
});
/**
 * Gets/Sets element's coordinate
 */
obb_rules.element.element_coordinate = (function obb_rules$element$element_coordinate(){
var G__12609 = arguments.length;
switch (G__12609) {
case 1:
return obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1 = (function (element){
var c = (function (){var G__12610 = cljs.core.constant$keyword$coordinate;
return (element.cljs$core$IFn$_invoke$arity$1 ? element.cljs$core$IFn$_invoke$arity$1(G__12610) : element.call(null,G__12610));
})();
if(cljs.core.truth_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("NoCoordinate:"),cljs.core.str(element)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"c","c",-122660552,null)], 0)))].join('')));
}

return c;
});

obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$2 = (function (element,new_coordinate){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,cljs.core.constant$keyword$coordinate,new_coordinate);
});

obb_rules.element.element_coordinate.cljs$lang$maxFixedArity = 2;
/**
 * Checks if several elements can be joined into one
 */
obb_rules.element.can_join_elements_QMARK_ = (function obb_rules$element$can_join_elements_QMARK_(e1,e2){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(e1),obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(e2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(obb_rules.element.element_unit(e1),obb_rules.element.element_unit(e2)));
});
/**
 * Joins several elements
 */
obb_rules.element.join_elements = (function obb_rules$element$join_elements(){
var argseq__7978__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return obb_rules.element.join_elements.cljs$core$IFn$_invoke$arity$variadic(argseq__7978__auto__);
});

obb_rules.element.join_elements.cljs$core$IFn$_invoke$arity$variadic = (function (elements){
var quantities = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (e){
return obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1(e);
}),elements);
var template = cljs.core.first(elements);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(template,cljs.core.constant$keyword$quantity,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,quantities));
});

obb_rules.element.join_elements.cljs$lang$maxFixedArity = (0);

obb_rules.element.join_elements.cljs$lang$applyTo = (function (seq12612){
return obb_rules.element.join_elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12612));
});
/**
 * True if the element is frozen
 */
obb_rules.element.frozen_QMARK_ = (function obb_rules$element$frozen_QMARK_(element){
var and__6926__auto__ = element;
if(cljs.core.truth_(and__6926__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,(function (){var G__12614 = cljs.core.constant$keyword$frozen;
return (element.cljs$core$IFn$_invoke$arity$1 ? element.cljs$core$IFn$_invoke$arity$1(G__12614) : element.call(null,G__12614));
})());
} else {
return and__6926__auto__;
}
});
/**
 * Freezes the given element
 */
obb_rules.element.freeze = (function obb_rules$element$freeze(element){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,cljs.core.constant$keyword$frozen,true);
});
/**
 * Unfreezes an element
 */
obb_rules.element.unfreeze = (function obb_rules$element$unfreeze(element){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(element,cljs.core.constant$keyword$frozen);
});
/**
 * Assets that an object acts as an element
 */
obb_rules.element.assert_element = (function obb_rules$element$assert_element(element){
if(cljs.core.truth_(element)){
if(cljs.core.truth_(obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(element))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("NoPlayer-"),cljs.core.str(element)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"element-player","element-player",-1550501405,null),new cljs.core.Symbol(null,"element","element",-680416020,null))], 0)))].join('')));
}

if(cljs.core.truth_(obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1(element))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("NoQuantity"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"element-quantity","element-quantity",-1681601608,null),new cljs.core.Symbol(null,"element","element",-680416020,null))], 0)))].join('')));
}

if(cljs.core.truth_(obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$1(element))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("NoDirection"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"element-direction","element-direction",1081913393,null),new cljs.core.Symbol(null,"element","element",-680416020,null))], 0)))].join('')));
}

if(cljs.core.truth_(obb_rules.element.element_unit(element))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("NoCoordinate"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"element-unit","element-unit",-1313401972,null),new cljs.core.Symbol(null,"element","element",-680416020,null))], 0)))].join('')));
}
} else {
return null;
}
});
