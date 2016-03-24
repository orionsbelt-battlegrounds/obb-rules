// Compiled by ClojureScript 1.7.228 {}
goog.provide('obb_rules.actions.move_restrictions');
goog.require('cljs.core');
goog.require('obb_rules.element');
goog.require('obb_rules.unit');
goog.require('obb_rules.actions.direction');
/**
 * Given two adjacent coords, checks if the movement is valid
 */
obb_rules.actions.move_restrictions.front_movement_valid_QMARK_ = (function obb_rules$actions$move_restrictions$front_movement_valid_QMARK_(direction,from,to){
return cljs.core._EQ_.call(null,obb_rules.actions.direction.update.call(null,direction,from),to);
});
/**
 * Given a coordinate, returns all possible adjacent squares
 */
obb_rules.actions.move_restrictions.front_movement_generator = (function obb_rules$actions$move_restrictions$front_movement_generator(direction,from){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.actions.direction.update.call(null,direction,from)], null);
});
/**
 * Given two adjacent coords, checks if the movement is valid
 */
obb_rules.actions.move_restrictions.normal_movement_valid_QMARK_ = (function obb_rules$actions$move_restrictions$normal_movement_valid_QMARK_(direction,p__41351,p__41352){
var vec__41355 = p__41351;
var x1 = cljs.core.nth.call(null,vec__41355,(0),null);
var y1 = cljs.core.nth.call(null,vec__41355,(1),null);
var vec__41356 = p__41352;
var x2 = cljs.core.nth.call(null,vec__41356,(0),null);
var y2 = cljs.core.nth.call(null,vec__41356,(1),null);
return (cljs.core._EQ_.call(null,x1,x2)) || (cljs.core._EQ_.call(null,y1,y2));
});
/**
 * Given a coordinate, returns all possible adjacent squares
 */
obb_rules.actions.move_restrictions.normal_movement_generator = (function obb_rules$actions$move_restrictions$normal_movement_generator(_,p__41357){
var vec__41359 = p__41357;
var x = cljs.core.nth.call(null,vec__41359,(0),null);
var y = cljs.core.nth.call(null,vec__41359,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y], null)], null);
});
/**
 * Given two adjacent coords, checks if the movement is valid
 */
obb_rules.actions.move_restrictions.diagonal_movement_valid_QMARK_ = (function obb_rules$actions$move_restrictions$diagonal_movement_valid_QMARK_(direction,from,to){
return cljs.core.not.call(null,obb_rules.actions.move_restrictions.normal_movement_valid_QMARK_.call(null,direction,from,to));
});
/**
 * Given a coordinate, returns all possible adjacent squares
 */
obb_rules.actions.move_restrictions.diagonal_movement_generator = (function obb_rules$actions$move_restrictions$diagonal_movement_generator(_,p__41360){
var vec__41362 = p__41360;
var x = cljs.core.nth.call(null,vec__41362,(0),null);
var y = cljs.core.nth.call(null,vec__41362,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),(y - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),(y + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y + (1))], null)], null);
});
/**
 * Given a coordinate, returns all possible adjacent squares
 */
obb_rules.actions.move_restrictions.all_movement_generator = (function obb_rules$actions$move_restrictions$all_movement_generator(dir,coord){
return cljs.core.into.call(null,obb_rules.actions.move_restrictions.diagonal_movement_generator.call(null,dir,coord),obb_rules.actions.move_restrictions.normal_movement_generator.call(null,dir,coord));
});
/**
 * Given two adjacent coords, checks if the movement is valid
 */
obb_rules.actions.move_restrictions.all_movement_valid_QMARK_ = (function obb_rules$actions$move_restrictions$all_movement_valid_QMARK_(_,___$1,___$2){
return true;
});
obb_rules.actions.move_restrictions.validators = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"all","all",892129742),obb_rules.actions.move_restrictions.all_movement_valid_QMARK_,new cljs.core.Keyword(null,"normal","normal",-1519123858),obb_rules.actions.move_restrictions.normal_movement_valid_QMARK_,new cljs.core.Keyword(null,"diagonal","diagonal",-1969989146),obb_rules.actions.move_restrictions.diagonal_movement_valid_QMARK_,new cljs.core.Keyword(null,"front","front",-1523508988),obb_rules.actions.move_restrictions.front_movement_valid_QMARK_], null);
obb_rules.actions.move_restrictions.generators = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"all","all",892129742),obb_rules.actions.move_restrictions.all_movement_generator,new cljs.core.Keyword(null,"normal","normal",-1519123858),obb_rules.actions.move_restrictions.normal_movement_generator,new cljs.core.Keyword(null,"diagonal","diagonal",-1969989146),obb_rules.actions.move_restrictions.diagonal_movement_generator,new cljs.core.Keyword(null,"front","front",-1523508988),obb_rules.actions.move_restrictions.front_movement_generator], null);
/**
 * Checks movement restrictions for a given element
 */
obb_rules.actions.move_restrictions.valid_QMARK_ = (function obb_rules$actions$move_restrictions$valid_QMARK_(element,from,to){
var unit = obb_rules.element.element_unit.call(null,element);
var direction = obb_rules.element.element_direction.call(null,element);
var movement_type = obb_rules.unit.unit_movement_type.call(null,unit);
var validator = obb_rules.actions.move_restrictions.validators.call(null,movement_type);
if(cljs.core.truth_(validator)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Can't resolve "),cljs.core.str(movement_type),cljs.core.str(" movement type")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"validator","validator",-325659154,null)))].join('')));
}

return validator.call(null,direction,from,to);
});
/**
 * Returns a collection with the possible destinations based on the element's
 *   movement-type and direction
 */
obb_rules.actions.move_restrictions.possible_destinations = (function obb_rules$actions$move_restrictions$possible_destinations(element){
var unit = obb_rules.element.element_unit.call(null,element);
var direction = obb_rules.element.element_direction.call(null,element);
var from = obb_rules.element.element_coordinate.call(null,element);
var movement_type = obb_rules.unit.unit_movement_type.call(null,unit);
var generator = obb_rules.actions.move_restrictions.generators.call(null,movement_type);
if(cljs.core.truth_(generator)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Can't resolve "),cljs.core.str(movement_type),cljs.core.str(" movement type")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"generator","generator",1067569246,null)))].join('')));
}

return generator.call(null,direction,from);
});

//# sourceMappingURL=move_restrictions.js.map?rel=1458852290906