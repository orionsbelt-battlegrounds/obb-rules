// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
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
var argseq__7861__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return obb_rules.stash.create.cljs$core$IFn$_invoke$arity$variadic(argseq__7861__auto__);
});

obb_rules.stash.create.cljs$core$IFn$_invoke$arity$variadic = (function (units){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,units);
});

obb_rules.stash.create.cljs$lang$maxFixedArity = (0);

obb_rules.stash.create.cljs$lang$applyTo = (function (seq12670){
return obb_rules.stash.create.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12670));
});
/**
 * Gets the way to access a unit key on the stash
 */
obb_rules.stash.accessorfn = (function obb_rules$stash$accessorfn(stash,unit_name){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(stash,cljs.core.name(unit_name)))){
return cljs.core.name;
} else {
return cljs.core.keyword;
}
});
/**
 * States how many of a unit are present
 */
obb_rules.stash.how_many_QMARK_ = (function obb_rules$stash$how_many_QMARK_(stash,unit){
var or__6821__auto__ = (function (){var G__12674 = obb_rules.stash.accessorfn(stash,unit).call(null,unit);
return (stash.cljs$core$IFn$_invoke$arity$1 ? stash.cljs$core$IFn$_invoke$arity$1(G__12674) : stash.call(null,G__12674));
})();
if(cljs.core.truth_(or__6821__auto__)){
return or__6821__auto__;
} else {
return (0);
}
});
/**
 * Returns true if this stash is empty
 */
obb_rules.stash.cleared_QMARK_ = (function obb_rules$stash$cleared_QMARK_(stash){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(stash));
});
/**
 * Checks if a given quantity is available
 */
obb_rules.stash.available_QMARK_ = (function obb_rules$stash$available_QMARK_(stash,unit,quantity){
return (quantity <= obb_rules.stash.how_many_QMARK_(stash,unit));
});
/**
 * Removes units from stash
 */
obb_rules.stash.retrieve = (function obb_rules$stash$retrieve(stash,unit,quantity){
var access_key = obb_rules.stash.accessorfn(stash,unit);
var unit_key = (function (){var G__12676 = unit;
return (access_key.cljs$core$IFn$_invoke$arity$1 ? access_key.cljs$core$IFn$_invoke$arity$1(G__12676) : access_key.call(null,G__12676));
})();
var current_quantity = obb_rules.stash.how_many_QMARK_(stash,unit_key);
var new_quantity = (current_quantity - quantity);
if((current_quantity >= quantity)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("InvalidStashQuantity"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"current-quantity","current-quantity",-508952045,null),new cljs.core.Symbol(null,"quantity","quantity",-288519167,null))], 0)))].join('')));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_quantity,(0))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(stash,unit_key);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(stash,unit_key,new_quantity);
}
});
/**
 * Returns random units for the given category
 */
obb_rules.stash.random_by_category = (function obb_rules$stash$random_by_category(expected_units,category,quantity){
var units = obb_rules.unit.units_by_category(category);
var with_quantity = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (units){
return (function (u){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.unit.unit_name(u),quantity], null);
});})(units))
,units);
var units_count = cljs.core.count(with_quantity);
var places = cljs.core.take.cljs$core$IFn$_invoke$arity$2(expected_units,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(((function (units,with_quantity,units_count){
return (function (){
return cljs.core.rand_int(units_count);
});})(units,with_quantity,units_count))
)));
var lucky = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(with_quantity),places);
return cljs.core.flatten(lucky);
});
/**
 * Creates a stash randomly populated
 */
obb_rules.stash.random = (function obb_rules$stash$random(){
var lights = obb_rules.stash.random_by_category((2),cljs.core.constant$keyword$light,(100));
var mediums = obb_rules.stash.random_by_category((3),cljs.core.constant$keyword$medium,(50));
var heavies = obb_rules.stash.random_by_category((3),cljs.core.constant$keyword$heavy,(25));
var all = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(lights,mediums,cljs.core.array_seq([heavies], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(obb_rules.stash.create,all);
});