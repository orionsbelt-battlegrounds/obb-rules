// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_rules.stash');
goog.require('cljs.core');
goog.require('obb_rules.unit');
/**
 * Creates a new stash from the given hash
 */
obb_rules.stash.create_from_hash = (function obb_rules$stash$create_from_hash(unit_hash){
return unit_hash;
});
/**
 * Creates a new stash
 */
obb_rules.stash.create = (function obb_rules$stash$create(){
var argseq__17149__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return obb_rules.stash.create.cljs$core$IFn$_invoke$arity$variadic(argseq__17149__auto__);
});

obb_rules.stash.create.cljs$core$IFn$_invoke$arity$variadic = (function (units){
return cljs.core.apply.call(null,cljs.core.hash_map,units);
});

obb_rules.stash.create.cljs$lang$maxFixedArity = (0);

obb_rules.stash.create.cljs$lang$applyTo = (function (seq32966){
return obb_rules.stash.create.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32966));
});
/**
 * Gets the way to access a unit key on the stash
 */
obb_rules.stash.accessorfn = (function obb_rules$stash$accessorfn(stash,unit_name){
if(cljs.core.truth_(cljs.core.get.call(null,stash,cljs.core.name.call(null,unit_name)))){
return cljs.core.name;
} else {
return cljs.core.keyword;
}
});
/**
 * States how many of a unit are present
 */
obb_rules.stash.how_many_QMARK_ = (function obb_rules$stash$how_many_QMARK_(stash,unit){
var or__16109__auto__ = stash.call(null,obb_rules.stash.accessorfn.call(null,stash,unit).call(null,unit));
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return (0);
}
});
/**
 * Returns true if this stash is empty
 */
obb_rules.stash.cleared_QMARK_ = (function obb_rules$stash$cleared_QMARK_(stash){
return cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,stash));
});
/**
 * Checks if a given quantity is available
 */
obb_rules.stash.available_QMARK_ = (function obb_rules$stash$available_QMARK_(stash,unit,quantity){
return (quantity <= obb_rules.stash.how_many_QMARK_.call(null,stash,unit));
});
/**
 * Removes units from stash
 */
obb_rules.stash.retrieve = (function obb_rules$stash$retrieve(stash,unit,quantity){
var access_key = obb_rules.stash.accessorfn.call(null,stash,unit);
var unit_key = access_key.call(null,unit);
var current_quantity = obb_rules.stash.how_many_QMARK_.call(null,stash,unit_key);
var new_quantity = (current_quantity - quantity);
if((current_quantity >= quantity)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("InvalidStashQuantity"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"current-quantity","current-quantity",-508952045,null),new cljs.core.Symbol(null,"quantity","quantity",-288519167,null))))].join('')));
}

if(cljs.core._EQ_.call(null,new_quantity,(0))){
return cljs.core.dissoc.call(null,stash,unit_key);
} else {
return cljs.core.assoc.call(null,stash,unit_key,new_quantity);
}
});
/**
 * Returns random units for the given category
 */
obb_rules.stash.random_by_category = (function obb_rules$stash$random_by_category(expected_units,category,quantity){
var units = obb_rules.unit.units_by_category.call(null,category);
var with_quantity = cljs.core.map.call(null,((function (units){
return (function (u){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.unit.unit_name.call(null,u),quantity], null);
});})(units))
,units);
var units_count = cljs.core.count.call(null,with_quantity);
var places = cljs.core.take.call(null,expected_units,cljs.core.distinct.call(null,cljs.core.repeatedly.call(null,((function (units,with_quantity,units_count){
return (function (){
return cljs.core.rand_int.call(null,units_count);
});})(units,with_quantity,units_count))
)));
var lucky = cljs.core.map.call(null,cljs.core.vec.call(null,with_quantity),places);
return cljs.core.flatten.call(null,lucky);
});
/**
 * Creates a stash randomly populated
 */
obb_rules.stash.random = (function obb_rules$stash$random(){
var lights = obb_rules.stash.random_by_category.call(null,(2),new cljs.core.Keyword(null,"light","light",1918998747),(100));
var mediums = obb_rules.stash.random_by_category.call(null,(3),new cljs.core.Keyword(null,"medium","medium",-1864319384),(50));
var heavies = obb_rules.stash.random_by_category.call(null,(3),new cljs.core.Keyword(null,"heavy","heavy",2126165008),(25));
var all = cljs.core.concat.call(null,lights,mediums,heavies);
return cljs.core.apply.call(null,obb_rules.stash.create,all);
});

//# sourceMappingURL=stash.js.map?rel=1436517556893