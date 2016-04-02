// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.actions.move_restrictions');
goog.require('cljs.core');
goog.require('obb_rules.element');
goog.require('obb_rules.unit');
goog.require('obb_rules.actions.direction');
/**
 * Given two adjacent coords, checks if the movement is valid
 */
obb_rules.actions.move_restrictions.front_movement_valid_QMARK_ = (function obb_rules$actions$move_restrictions$front_movement_valid_QMARK_(direction,from,to){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(obb_rules.actions.direction.update(direction,from),to);
});
/**
 * Given a coordinate, returns all possible adjacent squares
 */
obb_rules.actions.move_restrictions.front_movement_generator = (function obb_rules$actions$move_restrictions$front_movement_generator(direction,from){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.actions.direction.update(direction,from)], null);
});
/**
 * Given two adjacent coords, checks if the movement is valid
 */
obb_rules.actions.move_restrictions.normal_movement_valid_QMARK_ = (function obb_rules$actions$move_restrictions$normal_movement_valid_QMARK_(direction,p__15488,p__15489){
var vec__15492 = p__15488;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15492,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15492,(1),null);
var vec__15493 = p__15489;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15493,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15493,(1),null);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,x2)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y1,y2));
});
/**
 * Given a coordinate, returns all possible adjacent squares
 */
obb_rules.actions.move_restrictions.normal_movement_generator = (function obb_rules$actions$move_restrictions$normal_movement_generator(_,p__15494){
var vec__15496 = p__15494;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15496,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15496,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y], null)], null);
});
/**
 * Given two adjacent coords, checks if the movement is valid
 */
obb_rules.actions.move_restrictions.diagonal_movement_valid_QMARK_ = (function obb_rules$actions$move_restrictions$diagonal_movement_valid_QMARK_(direction,from,to){
return cljs.core.not(obb_rules.actions.move_restrictions.normal_movement_valid_QMARK_(direction,from,to));
});
/**
 * Given a coordinate, returns all possible adjacent squares
 */
obb_rules.actions.move_restrictions.diagonal_movement_generator = (function obb_rules$actions$move_restrictions$diagonal_movement_generator(_,p__15497){
var vec__15499 = p__15497;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15499,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15499,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),(y - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),(y + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y + (1))], null)], null);
});
/**
 * Given a coordinate, returns all possible adjacent squares
 */
obb_rules.actions.move_restrictions.all_movement_generator = (function obb_rules$actions$move_restrictions$all_movement_generator(dir,coord){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(obb_rules.actions.move_restrictions.diagonal_movement_generator(dir,coord),obb_rules.actions.move_restrictions.normal_movement_generator(dir,coord));
});
/**
 * Given two adjacent coords, checks if the movement is valid
 */
obb_rules.actions.move_restrictions.all_movement_valid_QMARK_ = (function obb_rules$actions$move_restrictions$all_movement_valid_QMARK_(_,___$1,___$2){
return true;
});
obb_rules.actions.move_restrictions.validators = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$all,obb_rules.actions.move_restrictions.all_movement_valid_QMARK_,cljs.core.cst$kw$normal,obb_rules.actions.move_restrictions.normal_movement_valid_QMARK_,cljs.core.cst$kw$diagonal,obb_rules.actions.move_restrictions.diagonal_movement_valid_QMARK_,cljs.core.cst$kw$front,obb_rules.actions.move_restrictions.front_movement_valid_QMARK_], null);
obb_rules.actions.move_restrictions.generators = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$all,obb_rules.actions.move_restrictions.all_movement_generator,cljs.core.cst$kw$normal,obb_rules.actions.move_restrictions.normal_movement_generator,cljs.core.cst$kw$diagonal,obb_rules.actions.move_restrictions.diagonal_movement_generator,cljs.core.cst$kw$front,obb_rules.actions.move_restrictions.front_movement_generator], null);
/**
 * Checks movement restrictions for a given element
 */
obb_rules.actions.move_restrictions.valid_QMARK_ = (function obb_rules$actions$move_restrictions$valid_QMARK_(element,from,to){
var unit = obb_rules.element.element_unit(element);
var direction = obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$1(element);
var movement_type = obb_rules.unit.unit_movement_type(unit);
var validator = (obb_rules.actions.move_restrictions.validators.cljs$core$IFn$_invoke$arity$1 ? obb_rules.actions.move_restrictions.validators.cljs$core$IFn$_invoke$arity$1(movement_type) : obb_rules.actions.move_restrictions.validators.call(null,movement_type));
if(cljs.core.truth_(validator)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Can't resolve "),cljs.core.str(movement_type),cljs.core.str(" movement type")].join('')),cljs.core.str("\n"),cljs.core.str("validator")].join('')));
}

return (validator.cljs$core$IFn$_invoke$arity$3 ? validator.cljs$core$IFn$_invoke$arity$3(direction,from,to) : validator.call(null,direction,from,to));
});
/**
 * Returns a collection with the possible destinations based on the element's
 *   movement-type and direction
 */
obb_rules.actions.move_restrictions.possible_destinations = (function obb_rules$actions$move_restrictions$possible_destinations(element){
var unit = obb_rules.element.element_unit(element);
var direction = obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$1(element);
var from = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(element);
var movement_type = obb_rules.unit.unit_movement_type(unit);
var generator = (obb_rules.actions.move_restrictions.generators.cljs$core$IFn$_invoke$arity$1 ? obb_rules.actions.move_restrictions.generators.cljs$core$IFn$_invoke$arity$1(movement_type) : obb_rules.actions.move_restrictions.generators.call(null,movement_type));
if(cljs.core.truth_(generator)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Can't resolve "),cljs.core.str(movement_type),cljs.core.str(" movement type")].join('')),cljs.core.str("\n"),cljs.core.str("generator")].join('')));
}

return (generator.cljs$core$IFn$_invoke$arity$2 ? generator.cljs$core$IFn$_invoke$arity$2(direction,from) : generator.call(null,direction,from));
});
