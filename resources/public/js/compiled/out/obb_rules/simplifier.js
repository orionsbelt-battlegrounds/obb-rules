// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.simplifier');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('obb_rules.host_dependent');
goog.require('obb_rules.unit');
/**
 * Compares two vars based on it's name
 */
obb_rules.simplifier.name_EQ_ = (function obb_rules$simplifier$name_EQ_(a,b){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(a),cljs.core.name(b)));
});
/**
 * Compares two vars based on it's name
 */
obb_rules.simplifier.not_name_EQ_ = (function obb_rules$simplifier$not_name_EQ_(a,b){
return cljs.core.not(obb_rules.simplifier.name_EQ_(a,b));
});
/**
 * Properly simplifies a unit
 */
obb_rules.simplifier.resolve_unit = (function obb_rules$simplifier$resolve_unit(value){
if(typeof value === 'string'){
return value;
} else {
return obb_rules.unit.unit_name(value);
}
});
/**
 * Simplifies a unit object, if it's a unit
 */
obb_rules.simplifier.simplify_if_unit = (function obb_rules$simplifier$simplify_if_unit(p__15139){
var vec__15141 = p__15139;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15141,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15141,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unit,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,obb_rules.simplifier.resolve_unit(v)], null);
} else {
if(cljs.core.map_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(obb_rules.simplifier.clean_unit.cljs$core$IFn$_invoke$arity$1 ? obb_rules.simplifier.clean_unit.cljs$core$IFn$_invoke$arity$1(v) : obb_rules.simplifier.clean_unit.call(null,v))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);

}
}
});
/**
 * Builds a unit, if it's a unit
 */
obb_rules.simplifier.build_if_unit = (function obb_rules$simplifier$build_if_unit(p__15142){
var vec__15144 = p__15142;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15144,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15144,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unit,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,obb_rules.unit.fetch(v)], null);
} else {
if(cljs.core.map_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(obb_rules.simplifier.build_unit.cljs$core$IFn$_invoke$arity$1 ? obb_rules.simplifier.build_unit.cljs$core$IFn$_invoke$arity$1(v) : obb_rules.simplifier.build_unit.call(null,v))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);

}
}
});
/**
 * Simplifies units, replacing the unit object by its name
 */
obb_rules.simplifier.clean_unit = (function obb_rules$simplifier$clean_unit(obj){
return clojure.walk.walk(obb_rules.simplifier.simplify_if_unit,cljs.core.identity,obj);
});
/**
 * Replaces unit's name/code by the actual unit
 */
obb_rules.simplifier.build_unit = (function obb_rules$simplifier$build_unit(obj){
return clojure.walk.walk(obb_rules.simplifier.build_if_unit,cljs.core.identity,obj);
});
/**
 * Removes all the board elements from action results
 */
obb_rules.simplifier.clean_action_results = (function obb_rules$simplifier$clean_action_results(result){
var results = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board,cljs.core.cst$kw$action_DASH_results], null));
var new_results = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (results){
return (function (p__15147){
var vec__15148 = p__15147;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15148,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15148,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$kw$board)], null);
});})(results))
,results);
return cljs.core.assoc_in(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board,cljs.core.cst$kw$action_DASH_results], null),new_results);
});
/**
 * Transforms a string in a coordinate
 */
obb_rules.simplifier.coordenize = (function obb_rules$simplifier$coordenize(raw){
var beter_raw = (function (){var G__15152 = [cljs.core.str(raw)].join('');
var G__15153 = /:/;
var G__15154 = "";
return (clojure.string.replace.cljs$core$IFn$_invoke$arity$3 ? clojure.string.replace.cljs$core$IFn$_invoke$arity$3(G__15152,G__15153,G__15154) : clojure.string.replace.call(null,G__15152,G__15153,G__15154));
})();
var temp__4655__auto__ = cljs.core.re_matches(/\[(\d+) (\d+)\]/,beter_raw);
if(cljs.core.truth_(temp__4655__auto__)){
var parsed = temp__4655__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(obb_rules.host_dependent.parse_int,cljs.core.rest(parsed)));
} else {
return raw;
}
});
/**
 * Transforms coordiante strings in coordinates
 */
obb_rules.simplifier.build_coordinate_keys = (function obb_rules$simplifier$build_coordinate_keys(result){
var elements = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board,cljs.core.cst$kw$elements], null));
var cleaned = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (elements){
return (function (h,p__15157){
var vec__15158 = p__15157;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15158,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15158,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(h,obb_rules.simplifier.coordenize(k),v);
});})(elements))
,cljs.core.PersistentArrayMap.EMPTY,elements);
return cljs.core.assoc_in(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board,cljs.core.cst$kw$elements], null),cleaned);
});
/**
 * Transforms coordiante keys in strings
 */
obb_rules.simplifier.clean_coordinate_keys = (function obb_rules$simplifier$clean_coordinate_keys(result){
var elements = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board,cljs.core.cst$kw$elements], null));
var cleaned = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (elements){
return (function (h,p__15161){
var vec__15162 = p__15161;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15162,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15162,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(h,[cljs.core.str(k)].join(''),v);
});})(elements))
,cljs.core.PersistentArrayMap.EMPTY,elements);
return cljs.core.assoc_in(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board,cljs.core.cst$kw$elements], null),cleaned);
});
/**
 * Builds a result
 */
obb_rules.simplifier.build_result = (function obb_rules$simplifier$build_result(result){
return obb_rules.simplifier.build_unit(obb_rules.simplifier.build_coordinate_keys(result));
});
/**
 * Cleans a result
 */
obb_rules.simplifier.clean_result = (function obb_rules$simplifier$clean_result(result){
return obb_rules.simplifier.clean_unit(obb_rules.simplifier.clean_coordinate_keys(obb_rules.simplifier.clean_action_results(result)));
});
