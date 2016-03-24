// Compiled by ClojureScript 1.7.228 {}
goog.provide('obb_rules.element');
goog.require('cljs.core');
goog.require('obb_rules.unit');
/**
 * Creates an element
 */
obb_rules.element.create_element = (function obb_rules$element$create_element(var_args){
var args41042 = [];
var len__19428__auto___41045 = arguments.length;
var i__19429__auto___41046 = (0);
while(true){
if((i__19429__auto___41046 < len__19428__auto___41045)){
args41042.push((arguments[i__19429__auto___41046]));

var G__41047 = (i__19429__auto___41046 + (1));
i__19429__auto___41046 = G__41047;
continue;
} else {
}
break;
}

var G__41044 = args41042.length;
switch (G__41044) {
case 4:
return obb_rules.element.create_element.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return obb_rules.element.create_element.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41042.length)].join('')));

}
});

obb_rules.element.create_element.cljs$core$IFn$_invoke$arity$4 = (function (player,unit,quantity,direction){
return obb_rules.element.create_element.call(null,player,unit,quantity,direction,null);
});

obb_rules.element.create_element.cljs$core$IFn$_invoke$arity$5 = (function (player,unit,quantity,direction,coordinate){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"player","player",-97687400),player,new cljs.core.Keyword(null,"unit","unit",375175175),unit,new cljs.core.Keyword(null,"quantity","quantity",-1929050694),quantity,new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),coordinate,new cljs.core.Keyword(null,"hitpoints","hitpoints",-575579159),obb_rules.unit.unit_defense.call(null,unit)], null);
});

obb_rules.element.create_element.cljs$lang$maxFixedArity = 5;
/**
 * Element's player
 */
obb_rules.element.element_player = (function obb_rules$element$element_player(var_args){
var args41049 = [];
var len__19428__auto___41052 = arguments.length;
var i__19429__auto___41053 = (0);
while(true){
if((i__19429__auto___41053 < len__19428__auto___41052)){
args41049.push((arguments[i__19429__auto___41053]));

var G__41054 = (i__19429__auto___41053 + (1));
i__19429__auto___41053 = G__41054;
continue;
} else {
}
break;
}

var G__41051 = args41049.length;
switch (G__41051) {
case 1:
return obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41049.length)].join('')));

}
});

obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1 = (function (element){
return new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(element);
});

obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$2 = (function (element,player){
return cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"player","player",-97687400),player);
});

obb_rules.element.element_player.cljs$lang$maxFixedArity = 2;
/**
 * Element's unit
 */
obb_rules.element.element_unit = (function obb_rules$element$element_unit(element){
return element.call(null,new cljs.core.Keyword(null,"unit","unit",375175175));
});
/**
 * Gets the hooks for the given event
 */
obb_rules.element.hooks = (function obb_rules$element$hooks(element,event){
var unit = obb_rules.element.element_unit.call(null,element);
return obb_rules.unit.event_hooks.call(null,unit,event);
});
/**
 * True if the element supports catapult
 */
obb_rules.element.catapult_attack_QMARK_ = (function obb_rules$element$catapult_attack_QMARK_(element){
var unit = obb_rules.element.element_unit.call(null,element);
return obb_rules.unit.catapult_QMARK_.call(null,unit);
});
/**
 * Gets the element's movement cost
 */
obb_rules.element.element_cost = (function obb_rules$element$element_cost(element){
var unit = obb_rules.element.element_unit.call(null,element);
return obb_rules.unit.unit_movement_cost.call(null,unit);
});
/**
 * Gets the element's range
 */
obb_rules.element.element_range = (function obb_rules$element$element_range(element){
var unit = obb_rules.element.element_unit.call(null,element);
return obb_rules.unit.unit_range.call(null,unit);
});
/**
 * Gets/Sets element's direction
 */
obb_rules.element.element_direction = (function obb_rules$element$element_direction(var_args){
var args41056 = [];
var len__19428__auto___41059 = arguments.length;
var i__19429__auto___41060 = (0);
while(true){
if((i__19429__auto___41060 < len__19428__auto___41059)){
args41056.push((arguments[i__19429__auto___41060]));

var G__41061 = (i__19429__auto___41060 + (1));
i__19429__auto___41060 = G__41061;
continue;
} else {
}
break;
}

var G__41058 = args41056.length;
switch (G__41058) {
case 1:
return obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41056.length)].join('')));

}
});

obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$1 = (function (element){
return element.call(null,new cljs.core.Keyword(null,"direction","direction",-633359395));
});

obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$2 = (function (element,new_direction){
return cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"direction","direction",-633359395),new_direction);
});

obb_rules.element.element_direction.cljs$lang$maxFixedArity = 2;
/**
 * Gets/Sets element's hitpoints
 */
obb_rules.element.element_hitpoints = (function obb_rules$element$element_hitpoints(var_args){
var args41063 = [];
var len__19428__auto___41066 = arguments.length;
var i__19429__auto___41067 = (0);
while(true){
if((i__19429__auto___41067 < len__19428__auto___41066)){
args41063.push((arguments[i__19429__auto___41067]));

var G__41068 = (i__19429__auto___41067 + (1));
i__19429__auto___41067 = G__41068;
continue;
} else {
}
break;
}

var G__41065 = args41063.length;
switch (G__41065) {
case 1:
return obb_rules.element.element_hitpoints.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.element.element_hitpoints.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41063.length)].join('')));

}
});

obb_rules.element.element_hitpoints.cljs$core$IFn$_invoke$arity$1 = (function (element){
return element.call(null,new cljs.core.Keyword(null,"hitpoints","hitpoints",-575579159));
});

obb_rules.element.element_hitpoints.cljs$core$IFn$_invoke$arity$2 = (function (element,new_hitpoints){
return cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"hitpoints","hitpoints",-575579159),new_hitpoints);
});

obb_rules.element.element_hitpoints.cljs$lang$maxFixedArity = 2;
/**
 * Gets bonus
 */
obb_rules.element.get_bonus = (function obb_rules$element$get_bonus(unit,bonus_prop,bonus_type,specific_type){
var temp__4655__auto__ = obb_rules.unit.unit_bonus.call(null,unit);
if(cljs.core.truth_(temp__4655__auto__)){
var bonus = temp__4655__auto__;
var temp__4655__auto____$1 = cljs.core.get_in.call(null,bonus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bonus_prop,bonus_type], null));
if(cljs.core.truth_(temp__4655__auto____$1)){
var specific = temp__4655__auto____$1;
var or__18370__auto__ = cljs.core.get.call(null,specific,specific_type);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
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
var category = obb_rules.unit.unit_category.call(null,target_unit);
return obb_rules.element.get_bonus.call(null,source_unit,bonus_type,new cljs.core.Keyword(null,"category","category",-593092832),category);
});
/**
 * Gets the displacement bonus on a given context
 */
obb_rules.element.displacement_bonus = (function obb_rules$element$displacement_bonus(bonus_type,source_unit,target_unit){
var displacement = obb_rules.unit.unit_displacement.call(null,target_unit);
return obb_rules.element.get_bonus.call(null,source_unit,bonus_type,new cljs.core.Keyword(null,"displacement","displacement",-1309600669),displacement);
});
/**
 * Gets the type bonus on a given context
 */
obb_rules.element.type_bonus = (function obb_rules$element$type_bonus(bonus_type,source_unit,target_unit){
var unit_type = obb_rules.unit.unit_type.call(null,target_unit);
return obb_rules.element.get_bonus.call(null,source_unit,bonus_type,new cljs.core.Keyword(null,"type","type",1174270348),unit_type);
});
/**
 * Gets the terrain bonus on a given context
 */
obb_rules.element.terrain_bonus = (function obb_rules$element$terrain_bonus(bonus_type,board,unit){
return obb_rules.element.get_bonus.call(null,unit,bonus_type,new cljs.core.Keyword(null,"terrain","terrain",704966005),cljs.core.keyword.call(null,cljs.core.get.call(null,board,new cljs.core.Keyword(null,"terrain","terrain",704966005))));
});
/**
 * Resolves bonus between two units
 */
obb_rules.element.resolve_bonus = (function obb_rules$element$resolve_bonus(bonus_type,board,attacker_unit,defender_unit){
return (((obb_rules.element.category_bonus.call(null,bonus_type,attacker_unit,defender_unit) + obb_rules.element.terrain_bonus.call(null,bonus_type,board,attacker_unit)) + obb_rules.element.displacement_bonus.call(null,bonus_type,attacker_unit,defender_unit)) + obb_rules.element.type_bonus.call(null,bonus_type,attacker_unit,defender_unit));
});
/**
 * Gets the attack of this element for the given target
 */
obb_rules.element.element_attack = (function obb_rules$element$element_attack(board,element,target){
var attacker_unit = obb_rules.element.element_unit.call(null,element);
var defender_unit = obb_rules.element.element_unit.call(null,target);
var attack = obb_rules.unit.unit_attack.call(null,attacker_unit);
var bonus = obb_rules.element.resolve_bonus.call(null,new cljs.core.Keyword(null,"attack","attack",1957061788),board,attacker_unit,defender_unit);
return (attack + bonus);
});
/**
 * Gets the defense of this element for the given target
 */
obb_rules.element.element_defense = (function obb_rules$element$element_defense(board,element,target){
var attacker_unit = obb_rules.element.element_unit.call(null,element);
var defender_unit = obb_rules.element.element_unit.call(null,target);
var defense = obb_rules.unit.unit_defense.call(null,defender_unit);
var bonus = obb_rules.element.resolve_bonus.call(null,new cljs.core.Keyword(null,"defense","defense",1755014992),board,defender_unit,attacker_unit);
return (defense + bonus);
});
/**
 * Gets/Sets element's quantity
 */
obb_rules.element.element_quantity = (function obb_rules$element$element_quantity(var_args){
var args41070 = [];
var len__19428__auto___41073 = arguments.length;
var i__19429__auto___41074 = (0);
while(true){
if((i__19429__auto___41074 < len__19428__auto___41073)){
args41070.push((arguments[i__19429__auto___41074]));

var G__41075 = (i__19429__auto___41074 + (1));
i__19429__auto___41074 = G__41075;
continue;
} else {
}
break;
}

var G__41072 = args41070.length;
switch (G__41072) {
case 1:
return obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41070.length)].join('')));

}
});

obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1 = (function (element){
return element.call(null,new cljs.core.Keyword(null,"quantity","quantity",-1929050694));
});

obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$2 = (function (element,new_quantity){
return cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"quantity","quantity",-1929050694),new_quantity);
});

obb_rules.element.element_quantity.cljs$lang$maxFixedArity = 2;
/**
 * Removes a specific, concrete quantity from the element
 */
obb_rules.element.remove_specific_quantity = (function obb_rules$element$remove_specific_quantity(element,quantity){
var current_quantity = obb_rules.element.element_quantity.call(null,element);
var remaining_quantity = (current_quantity - quantity);
if(((0) > remaining_quantity)){
return obb_rules.element.element_quantity.call(null,element,(0));
} else {
return obb_rules.element.element_quantity.call(null,element,remaining_quantity);
}
});
/**
 * Removes part of an element (<1)
 */
obb_rules.element.remove_hitpoints = (function obb_rules$element$remove_hitpoints(element,percentage){
var unit = obb_rules.element.element_unit.call(null,element);
var defense = obb_rules.unit.unit_defense.call(null,unit);
var hitpoints_to_take = (percentage * defense);
var current_hitpoints = obb_rules.element.element_hitpoints.call(null,element);
var new_hitpoints = (current_hitpoints - hitpoints_to_take);
if(((0) < new_hitpoints)){
return obb_rules.element.element_hitpoints.call(null,element,new_hitpoints);
} else {
return cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"hitpoints","hitpoints",-575579159),defense,new cljs.core.Keyword(null,"quantity","quantity",-1929050694),(obb_rules.element.element_quantity.call(null,element) - (1)));
}
});
/**
 * Removes a specified quantity
 */
obb_rules.element.remove_quantity = (function obb_rules$element$remove_quantity(element,quantity){
if(cljs.core._EQ_.call(null,quantity,(0))){
return element;
} else {
if((quantity >= (1))){
return obb_rules.element.remove_specific_quantity.call(null,element,quantity);
} else {
return obb_rules.element.remove_hitpoints.call(null,element,quantity);

}
}
});
/**
 * Gets/Sets element's coordinate
 */
obb_rules.element.element_coordinate = (function obb_rules$element$element_coordinate(var_args){
var args41077 = [];
var len__19428__auto___41080 = arguments.length;
var i__19429__auto___41081 = (0);
while(true){
if((i__19429__auto___41081 < len__19428__auto___41080)){
args41077.push((arguments[i__19429__auto___41081]));

var G__41082 = (i__19429__auto___41081 + (1));
i__19429__auto___41081 = G__41082;
continue;
} else {
}
break;
}

var G__41079 = args41077.length;
switch (G__41079) {
case 1:
return obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41077.length)].join('')));

}
});

obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1 = (function (element){
if(cljs.core.truth_(element)){
var c = element.call(null,new cljs.core.Keyword(null,"coordinate","coordinate",-112811209));
if(cljs.core.truth_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("NoCoordinate:"),cljs.core.str(element)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"c","c",-122660552,null)))].join('')));
}

return c;
} else {
return null;
}
});

obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$2 = (function (element,new_coordinate){
return cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),new_coordinate);
});

obb_rules.element.element_coordinate.cljs$lang$maxFixedArity = 2;
/**
 * Checks if several elements can be joined into one
 */
obb_rules.element.can_join_elements_QMARK_ = (function obb_rules$element$can_join_elements_QMARK_(e1,e2){
return (cljs.core._EQ_.call(null,obb_rules.element.element_player.call(null,e1),obb_rules.element.element_player.call(null,e2))) && (cljs.core._EQ_.call(null,obb_rules.element.element_unit.call(null,e1),obb_rules.element.element_unit.call(null,e2)));
});
/**
 * Joins several elements
 */
obb_rules.element.join_elements = (function obb_rules$element$join_elements(var_args){
var args__19435__auto__ = [];
var len__19428__auto___41085 = arguments.length;
var i__19429__auto___41086 = (0);
while(true){
if((i__19429__auto___41086 < len__19428__auto___41085)){
args__19435__auto__.push((arguments[i__19429__auto___41086]));

var G__41087 = (i__19429__auto___41086 + (1));
i__19429__auto___41086 = G__41087;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((0) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((0)),(0))):null);
return obb_rules.element.join_elements.cljs$core$IFn$_invoke$arity$variadic(argseq__19436__auto__);
});

obb_rules.element.join_elements.cljs$core$IFn$_invoke$arity$variadic = (function (elements){
var quantities = cljs.core.map.call(null,(function (e){
return obb_rules.element.element_quantity.call(null,e);
}),elements);
var template = cljs.core.first.call(null,elements);
return cljs.core.assoc.call(null,template,new cljs.core.Keyword(null,"quantity","quantity",-1929050694),cljs.core.apply.call(null,cljs.core._PLUS_,quantities));
});

obb_rules.element.join_elements.cljs$lang$maxFixedArity = (0);

obb_rules.element.join_elements.cljs$lang$applyTo = (function (seq41084){
return obb_rules.element.join_elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41084));
});
/**
 * True if the element is frozen
 */
obb_rules.element.frozen_QMARK_ = (function obb_rules$element$frozen_QMARK_(element){
var and__18358__auto__ = element;
if(cljs.core.truth_(and__18358__auto__)){
return cljs.core._EQ_.call(null,true,element.call(null,new cljs.core.Keyword(null,"frozen","frozen",-1824610372)));
} else {
return and__18358__auto__;
}
});
/**
 * Freezes the given element
 */
obb_rules.element.freeze = (function obb_rules$element$freeze(element){
return cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"frozen","frozen",-1824610372),true);
});
/**
 * Unfreezes an element
 */
obb_rules.element.unfreeze = (function obb_rules$element$unfreeze(element){
return cljs.core.dissoc.call(null,element,new cljs.core.Keyword(null,"frozen","frozen",-1824610372));
});
/**
 * Assets that an object acts as an element
 */
obb_rules.element.assert_element = (function obb_rules$element$assert_element(element){
if(cljs.core.truth_(element)){
if(cljs.core.truth_(obb_rules.element.element_player.call(null,element))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("NoPlayer-"),cljs.core.str(element)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"element-player","element-player",-1550501405,null),new cljs.core.Symbol(null,"element","element",-680416020,null))))].join('')));
}

if(cljs.core.truth_(obb_rules.element.element_quantity.call(null,element))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("NoQuantity"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"element-quantity","element-quantity",-1681601608,null),new cljs.core.Symbol(null,"element","element",-680416020,null))))].join('')));
}

if(cljs.core.truth_(obb_rules.element.element_direction.call(null,element))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("NoDirection"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"element-direction","element-direction",1081913393,null),new cljs.core.Symbol(null,"element","element",-680416020,null))))].join('')));
}

if(cljs.core.truth_(obb_rules.element.element_unit.call(null,element))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("NoCoordinate"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"element-unit","element-unit",-1313401972,null),new cljs.core.Symbol(null,"element","element",-680416020,null))))].join('')));
}
} else {
return null;
}
});

//# sourceMappingURL=element.js.map?rel=1458852289327