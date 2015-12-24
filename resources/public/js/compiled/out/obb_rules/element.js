// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.element');
goog.require('cljs.core');
goog.require('obb_rules.unit');
/**
 * Creates an element
 */
obb_rules.element.create_element = (function obb_rules$element$create_element(){
var args10090 = [];
var len__8267__auto___10093 = arguments.length;
var i__8268__auto___10094 = (0);
while(true){
if((i__8268__auto___10094 < len__8267__auto___10093)){
args10090.push((arguments[i__8268__auto___10094]));

var G__10095 = (i__8268__auto___10094 + (1));
i__8268__auto___10094 = G__10095;
continue;
} else {
}
break;
}

var G__10092 = args10090.length;
switch (G__10092) {
case 4:
return obb_rules.element.create_element.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return obb_rules.element.create_element.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10090.length)].join('')));

}
});

obb_rules.element.create_element.cljs$core$IFn$_invoke$arity$4 = (function (player,unit,quantity,direction){
return obb_rules.element.create_element.cljs$core$IFn$_invoke$arity$5(player,unit,quantity,direction,null);
});

obb_rules.element.create_element.cljs$core$IFn$_invoke$arity$5 = (function (player,unit,quantity,direction,coordinate){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$player,player,cljs.core.cst$kw$unit,unit,cljs.core.cst$kw$quantity,quantity,cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$coordinate,coordinate,cljs.core.cst$kw$hitpoints,obb_rules.unit.unit_defense(unit)], null);
});

obb_rules.element.create_element.cljs$lang$maxFixedArity = 5;
/**
 * Element's player
 */
obb_rules.element.element_player = (function obb_rules$element$element_player(){
var args10097 = [];
var len__8267__auto___10100 = arguments.length;
var i__8268__auto___10101 = (0);
while(true){
if((i__8268__auto___10101 < len__8267__auto___10100)){
args10097.push((arguments[i__8268__auto___10101]));

var G__10102 = (i__8268__auto___10101 + (1));
i__8268__auto___10101 = G__10102;
continue;
} else {
}
break;
}

var G__10099 = args10097.length;
switch (G__10099) {
case 1:
return obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10097.length)].join('')));

}
});

obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1 = (function (element){
return cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(element);
});

obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$2 = (function (element,player){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,cljs.core.cst$kw$player,player);
});

obb_rules.element.element_player.cljs$lang$maxFixedArity = 2;
/**
 * Element's unit
 */
obb_rules.element.element_unit = (function obb_rules$element$element_unit(element){
return (element.cljs$core$IFn$_invoke$arity$1 ? element.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$unit) : element.call(null,cljs.core.cst$kw$unit));
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
var args10104 = [];
var len__8267__auto___10107 = arguments.length;
var i__8268__auto___10108 = (0);
while(true){
if((i__8268__auto___10108 < len__8267__auto___10107)){
args10104.push((arguments[i__8268__auto___10108]));

var G__10109 = (i__8268__auto___10108 + (1));
i__8268__auto___10108 = G__10109;
continue;
} else {
}
break;
}

var G__10106 = args10104.length;
switch (G__10106) {
case 1:
return obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10104.length)].join('')));

}
});

obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$1 = (function (element){
return (element.cljs$core$IFn$_invoke$arity$1 ? element.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$direction) : element.call(null,cljs.core.cst$kw$direction));
});

obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$2 = (function (element,new_direction){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,cljs.core.cst$kw$direction,new_direction);
});

obb_rules.element.element_direction.cljs$lang$maxFixedArity = 2;
/**
 * Gets/Sets element's hitpoints
 */
obb_rules.element.element_hitpoints = (function obb_rules$element$element_hitpoints(){
var args10111 = [];
var len__8267__auto___10114 = arguments.length;
var i__8268__auto___10115 = (0);
while(true){
if((i__8268__auto___10115 < len__8267__auto___10114)){
args10111.push((arguments[i__8268__auto___10115]));

var G__10116 = (i__8268__auto___10115 + (1));
i__8268__auto___10115 = G__10116;
continue;
} else {
}
break;
}

var G__10113 = args10111.length;
switch (G__10113) {
case 1:
return obb_rules.element.element_hitpoints.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.element.element_hitpoints.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10111.length)].join('')));

}
});

obb_rules.element.element_hitpoints.cljs$core$IFn$_invoke$arity$1 = (function (element){
return (element.cljs$core$IFn$_invoke$arity$1 ? element.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hitpoints) : element.call(null,cljs.core.cst$kw$hitpoints));
});

obb_rules.element.element_hitpoints.cljs$core$IFn$_invoke$arity$2 = (function (element,new_hitpoints){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,cljs.core.cst$kw$hitpoints,new_hitpoints);
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
var or__7228__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(specific,specific_type);
if(cljs.core.truth_(or__7228__auto__)){
return or__7228__auto__;
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
return obb_rules.element.get_bonus(source_unit,bonus_type,cljs.core.cst$kw$category,category);
});
/**
 * Gets the displacement bonus on a given context
 */
obb_rules.element.displacement_bonus = (function obb_rules$element$displacement_bonus(bonus_type,source_unit,target_unit){
var displacement = obb_rules.unit.unit_displacement(target_unit);
return obb_rules.element.get_bonus(source_unit,bonus_type,cljs.core.cst$kw$displacement,displacement);
});
/**
 * Gets the type bonus on a given context
 */
obb_rules.element.type_bonus = (function obb_rules$element$type_bonus(bonus_type,source_unit,target_unit){
var unit_type = obb_rules.unit.unit_type(target_unit);
return obb_rules.element.get_bonus(source_unit,bonus_type,cljs.core.cst$kw$type,unit_type);
});
/**
 * Gets the terrain bonus on a given context
 */
obb_rules.element.terrain_bonus = (function obb_rules$element$terrain_bonus(bonus_type,board,unit){
return obb_rules.element.get_bonus(unit,bonus_type,cljs.core.cst$kw$terrain,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,cljs.core.cst$kw$terrain)));
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
var bonus = obb_rules.element.resolve_bonus(cljs.core.cst$kw$attack,board,attacker_unit,defender_unit);
return (attack + bonus);
});
/**
 * Gets the defense of this element for the given target
 */
obb_rules.element.element_defense = (function obb_rules$element$element_defense(board,element,target){
var attacker_unit = obb_rules.element.element_unit(element);
var defender_unit = obb_rules.element.element_unit(target);
var defense = obb_rules.unit.unit_defense(defender_unit);
var bonus = obb_rules.element.resolve_bonus(cljs.core.cst$kw$defense,board,defender_unit,attacker_unit);
return (defense + bonus);
});
/**
 * Gets/Sets element's quantity
 */
obb_rules.element.element_quantity = (function obb_rules$element$element_quantity(){
var args10118 = [];
var len__8267__auto___10121 = arguments.length;
var i__8268__auto___10122 = (0);
while(true){
if((i__8268__auto___10122 < len__8267__auto___10121)){
args10118.push((arguments[i__8268__auto___10122]));

var G__10123 = (i__8268__auto___10122 + (1));
i__8268__auto___10122 = G__10123;
continue;
} else {
}
break;
}

var G__10120 = args10118.length;
switch (G__10120) {
case 1:
return obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10118.length)].join('')));

}
});

obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1 = (function (element){
return (element.cljs$core$IFn$_invoke$arity$1 ? element.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$quantity) : element.call(null,cljs.core.cst$kw$quantity));
});

obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$2 = (function (element,new_quantity){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,cljs.core.cst$kw$quantity,new_quantity);
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(element,cljs.core.cst$kw$hitpoints,defense,cljs.core.array_seq([cljs.core.cst$kw$quantity,(obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1(element) - (1))], 0));
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
var args10125 = [];
var len__8267__auto___10128 = arguments.length;
var i__8268__auto___10129 = (0);
while(true){
if((i__8268__auto___10129 < len__8267__auto___10128)){
args10125.push((arguments[i__8268__auto___10129]));

var G__10130 = (i__8268__auto___10129 + (1));
i__8268__auto___10129 = G__10130;
continue;
} else {
}
break;
}

var G__10127 = args10125.length;
switch (G__10127) {
case 1:
return obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10125.length)].join('')));

}
});

obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1 = (function (element){
if(cljs.core.truth_(element)){
var c = (element.cljs$core$IFn$_invoke$arity$1 ? element.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$coordinate) : element.call(null,cljs.core.cst$kw$coordinate));
if(cljs.core.truth_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("NoCoordinate:"),cljs.core.str(element)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$c], 0)))].join('')));
}

return c;
} else {
return null;
}
});

obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$2 = (function (element,new_coordinate){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,cljs.core.cst$kw$coordinate,new_coordinate);
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
var args__8274__auto__ = [];
var len__8267__auto___10133 = arguments.length;
var i__8268__auto___10134 = (0);
while(true){
if((i__8268__auto___10134 < len__8267__auto___10133)){
args__8274__auto__.push((arguments[i__8268__auto___10134]));

var G__10135 = (i__8268__auto___10134 + (1));
i__8268__auto___10134 = G__10135;
continue;
} else {
}
break;
}

var argseq__8275__auto__ = ((((0) < args__8274__auto__.length))?(new cljs.core.IndexedSeq(args__8274__auto__.slice((0)),(0))):null);
return obb_rules.element.join_elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8275__auto__);
});

obb_rules.element.join_elements.cljs$core$IFn$_invoke$arity$variadic = (function (elements){
var quantities = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (e){
return obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1(e);
}),elements);
var template = cljs.core.first(elements);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(template,cljs.core.cst$kw$quantity,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,quantities));
});

obb_rules.element.join_elements.cljs$lang$maxFixedArity = (0);

obb_rules.element.join_elements.cljs$lang$applyTo = (function (seq10132){
return obb_rules.element.join_elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10132));
});
/**
 * True if the element is frozen
 */
obb_rules.element.frozen_QMARK_ = (function obb_rules$element$frozen_QMARK_(element){
var and__7216__auto__ = element;
if(cljs.core.truth_(and__7216__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,(element.cljs$core$IFn$_invoke$arity$1 ? element.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$frozen) : element.call(null,cljs.core.cst$kw$frozen)));
} else {
return and__7216__auto__;
}
});
/**
 * Freezes the given element
 */
obb_rules.element.freeze = (function obb_rules$element$freeze(element){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,cljs.core.cst$kw$frozen,true);
});
/**
 * Unfreezes an element
 */
obb_rules.element.unfreeze = (function obb_rules$element$unfreeze(element){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(element,cljs.core.cst$kw$frozen);
});
/**
 * Assets that an object acts as an element
 */
obb_rules.element.assert_element = (function obb_rules$element$assert_element(element){
if(cljs.core.truth_(element)){
if(cljs.core.truth_(obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(element))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("NoPlayer-"),cljs.core.str(element)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$element_DASH_player,cljs.core.cst$sym$element)], 0)))].join('')));
}

if(cljs.core.truth_(obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1(element))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("NoQuantity"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$element_DASH_quantity,cljs.core.cst$sym$element)], 0)))].join('')));
}

if(cljs.core.truth_(obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$1(element))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("NoDirection"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$element_DASH_direction,cljs.core.cst$sym$element)], 0)))].join('')));
}

if(cljs.core.truth_(obb_rules.element.element_unit(element))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("NoCoordinate"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$element_DASH_unit,cljs.core.cst$sym$element)], 0)))].join('')));
}
} else {
return null;
}
});
