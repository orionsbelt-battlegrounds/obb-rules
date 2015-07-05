// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_rules.simplifier');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('obb_rules.host_dependent');
goog.require('obb_rules.unit');
/**
 * Compares two vars based on it's name
 */
obb_rules.simplifier.name_EQ_ = (function obb_rules$simplifier$name_EQ_(a,b){
return cljs.core._EQ_.call(null,cljs.core.name.call(null,a),cljs.core.name.call(null,b));
});
/**
 * Compares two vars based on it's name
 */
obb_rules.simplifier.not_name_EQ_ = (function obb_rules$simplifier$not_name_EQ_(a,b){
return cljs.core.not.call(null,obb_rules.simplifier.name_EQ_.call(null,a,b));
});
/**
 * Properly simplifies a unit
 */
obb_rules.simplifier.resolve_unit = (function obb_rules$simplifier$resolve_unit(value){
if(typeof value === 'string'){
return value;
} else {
return obb_rules.unit.unit_name.call(null,value);
}
});
/**
 * Simplifies a unit object, if it's a unit
 */
obb_rules.simplifier.simplify_if_unit = (function obb_rules$simplifier$simplify_if_unit(p__23003){
var vec__23005 = p__23003;
var k = cljs.core.nth.call(null,vec__23005,(0),null);
var v = cljs.core.nth.call(null,vec__23005,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"unit","unit",375175175),cljs.core.keyword.call(null,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,obb_rules.simplifier.resolve_unit.call(null,v)], null);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,obb_rules.simplifier.clean_unit.call(null,v)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);

}
}
});
/**
 * Builds a unit, if it's a unit
 */
obb_rules.simplifier.build_if_unit = (function obb_rules$simplifier$build_if_unit(p__23006){
var vec__23008 = p__23006;
var k = cljs.core.nth.call(null,vec__23008,(0),null);
var v = cljs.core.nth.call(null,vec__23008,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"unit","unit",375175175),cljs.core.keyword.call(null,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,obb_rules.unit.fetch.call(null,v)], null);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,obb_rules.simplifier.build_unit.call(null,v)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);

}
}
});
/**
 * Simplifies units, replacing the unit object by its name
 */
obb_rules.simplifier.clean_unit = (function obb_rules$simplifier$clean_unit(obj){
return clojure.walk.walk.call(null,obb_rules.simplifier.simplify_if_unit,cljs.core.identity,obj);
});
/**
 * Replaces unit's name/code by the actual unit
 */
obb_rules.simplifier.build_unit = (function obb_rules$simplifier$build_unit(obj){
return clojure.walk.walk.call(null,obb_rules.simplifier.build_if_unit,cljs.core.identity,obj);
});
/**
 * Removes all the board elements from action results
 */
obb_rules.simplifier.clean_action_results = (function obb_rules$simplifier$clean_action_results(result){
var results = cljs.core.get_in.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"action-results","action-results",-389719209)], null));
var new_results = cljs.core.map.call(null,((function (results){
return (function (p__23011){
var vec__23012 = p__23011;
var k = cljs.core.nth.call(null,vec__23012,(0),null);
var v = cljs.core.nth.call(null,vec__23012,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.dissoc.call(null,v,new cljs.core.Keyword(null,"board","board",-1907017633))], null);
});})(results))
,results);
return cljs.core.assoc_in.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"action-results","action-results",-389719209)], null),new_results);
});
/**
 * Transforms a string in a coordinate
 */
obb_rules.simplifier.coordenize = (function obb_rules$simplifier$coordenize(raw){
var beter_raw = clojure.string.replace.call(null,[cljs.core.str(raw)].join(''),/:/,"");
var temp__4423__auto__ = cljs.core.re_matches.call(null,/\[(\d+) (\d+)\]/,beter_raw);
if(cljs.core.truth_(temp__4423__auto__)){
var parsed = temp__4423__auto__;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,obb_rules.host_dependent.parse_int,cljs.core.rest.call(null,parsed)));
} else {
return raw;
}
});
/**
 * Transforms coordiante strings in coordinates
 */
obb_rules.simplifier.build_coordinate_keys = (function obb_rules$simplifier$build_coordinate_keys(result){
var elements = cljs.core.get_in.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"elements","elements",657646735)], null));
var cleaned = cljs.core.reduce.call(null,((function (elements){
return (function (h,p__23015){
var vec__23016 = p__23015;
var k = cljs.core.nth.call(null,vec__23016,(0),null);
var v = cljs.core.nth.call(null,vec__23016,(1),null);
return cljs.core.assoc.call(null,h,obb_rules.simplifier.coordenize.call(null,k),v);
});})(elements))
,cljs.core.PersistentArrayMap.EMPTY,elements);
return cljs.core.assoc_in.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"elements","elements",657646735)], null),cleaned);
});
/**
 * Transforms coordiante keys in strings
 */
obb_rules.simplifier.clean_coordinate_keys = (function obb_rules$simplifier$clean_coordinate_keys(result){
var elements = cljs.core.get_in.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"elements","elements",657646735)], null));
var cleaned = cljs.core.reduce.call(null,((function (elements){
return (function (h,p__23019){
var vec__23020 = p__23019;
var k = cljs.core.nth.call(null,vec__23020,(0),null);
var v = cljs.core.nth.call(null,vec__23020,(1),null);
return cljs.core.assoc.call(null,h,[cljs.core.str(k)].join(''),v);
});})(elements))
,cljs.core.PersistentArrayMap.EMPTY,elements);
return cljs.core.assoc_in.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"elements","elements",657646735)], null),cleaned);
});
/**
 * Builds a result
 */
obb_rules.simplifier.build_result = (function obb_rules$simplifier$build_result(result){
return obb_rules.simplifier.build_unit.call(null,obb_rules.simplifier.build_coordinate_keys.call(null,result));
});
/**
 * Cleans a result
 */
obb_rules.simplifier.clean_result = (function obb_rules$simplifier$clean_result(result){
return obb_rules.simplifier.clean_unit.call(null,obb_rules.simplifier.clean_coordinate_keys.call(null,obb_rules.simplifier.clean_action_results.call(null,result)));
});

//# sourceMappingURL=simplifier.js.map?rel=1436104823666