// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
goog.provide('secretary.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');

secretary.core.IRouteMatches = {};

secretary.core.route_matches = (function secretary$core$route_matches(this$,route){
if((!((this$ == null))) && (!((this$.secretary$core$IRouteMatches$route_matches$arity$2 == null)))){
return this$.secretary$core$IRouteMatches$route_matches$arity$2(this$,route);
} else {
var x__7760__auto__ = (((this$ == null))?null:this$);
var m__7761__auto__ = (secretary.core.route_matches[goog.typeOf(x__7760__auto__)]);
if(!((m__7761__auto__ == null))){
return (m__7761__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7761__auto__.cljs$core$IFn$_invoke$arity$2(this$,route) : m__7761__auto__.call(null,this$,route));
} else {
var m__7761__auto____$1 = (secretary.core.route_matches["_"]);
if(!((m__7761__auto____$1 == null))){
return (m__7761__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7761__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,route) : m__7761__auto____$1.call(null,this$,route));
} else {
throw cljs.core.missing_protocol("IRouteMatches.route-matches",this$);
}
}
}
});


secretary.core.IRouteValue = {};

secretary.core.route_value = (function secretary$core$route_value(this$){
if((!((this$ == null))) && (!((this$.secretary$core$IRouteValue$route_value$arity$1 == null)))){
return this$.secretary$core$IRouteValue$route_value$arity$1(this$);
} else {
var x__7760__auto__ = (((this$ == null))?null:this$);
var m__7761__auto__ = (secretary.core.route_value[goog.typeOf(x__7760__auto__)]);
if(!((m__7761__auto__ == null))){
return (m__7761__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7761__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7761__auto__.call(null,this$));
} else {
var m__7761__auto____$1 = (secretary.core.route_value["_"]);
if(!((m__7761__auto____$1 == null))){
return (m__7761__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7761__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7761__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRouteValue.route-value",this$);
}
}
}
});


secretary.core.IRenderRoute = {};

secretary.core.render_route = (function secretary$core$render_route(){
var args11615 = [];
var len__8163__auto___11618 = arguments.length;
var i__8164__auto___11619 = (0);
while(true){
if((i__8164__auto___11619 < len__8163__auto___11618)){
args11615.push((arguments[i__8164__auto___11619]));

var G__11620 = (i__8164__auto___11619 + (1));
i__8164__auto___11619 = G__11620;
continue;
} else {
}
break;
}

var G__11617 = args11615.length;
switch (G__11617) {
case 1:
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11615.length)].join('')));

}
});

secretary.core.render_route.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.secretary$core$IRenderRoute$render_route$arity$1 == null)))){
return this$.secretary$core$IRenderRoute$render_route$arity$1(this$);
} else {
var x__7760__auto__ = (((this$ == null))?null:this$);
var m__7761__auto__ = (secretary.core.render_route[goog.typeOf(x__7760__auto__)]);
if(!((m__7761__auto__ == null))){
return (m__7761__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7761__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7761__auto__.call(null,this$));
} else {
var m__7761__auto____$1 = (secretary.core.render_route["_"]);
if(!((m__7761__auto____$1 == null))){
return (m__7761__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7761__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7761__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRenderRoute.render-route",this$);
}
}
}
});

secretary.core.render_route.cljs$core$IFn$_invoke$arity$2 = (function (this$,params){
if((!((this$ == null))) && (!((this$.secretary$core$IRenderRoute$render_route$arity$2 == null)))){
return this$.secretary$core$IRenderRoute$render_route$arity$2(this$,params);
} else {
var x__7760__auto__ = (((this$ == null))?null:this$);
var m__7761__auto__ = (secretary.core.render_route[goog.typeOf(x__7760__auto__)]);
if(!((m__7761__auto__ == null))){
return (m__7761__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7761__auto__.cljs$core$IFn$_invoke$arity$2(this$,params) : m__7761__auto__.call(null,this$,params));
} else {
var m__7761__auto____$1 = (secretary.core.render_route["_"]);
if(!((m__7761__auto____$1 == null))){
return (m__7761__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7761__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,params) : m__7761__auto____$1.call(null,this$,params));
} else {
throw cljs.core.missing_protocol("IRenderRoute.render-route",this$);
}
}
}
});

secretary.core.render_route.cljs$lang$maxFixedArity = 2;

secretary.core._STAR_config_STAR_ = (function (){var G__11622 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$prefix,""], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11622) : cljs.core.atom.call(null,G__11622));
})();
/**
 * Gets a value for *config* at path.
 */
secretary.core.get_config = (function secretary$core$get_config(path){
var path__$1 = ((cljs.core.sequential_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(secretary.core._STAR_config_STAR_) : cljs.core.deref.call(null,secretary.core._STAR_config_STAR_)),path__$1);
});
/**
 * Associates a value val for *config* at path.
 */
secretary.core.set_config_BANG_ = (function secretary$core$set_config_BANG_(path,val){
var path__$1 = ((cljs.core.sequential_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_config_STAR_,cljs.core.assoc_in,path__$1,val);
});
secretary.core.encode = encodeURIComponent;
if(typeof secretary.core.encode_pair !== 'undefined'){
} else {
/**
 * Given a key and a value return and encoded key-value pair.
 */
secretary.core.encode_pair = (function (){var method_table__8018__auto__ = (function (){var G__11623 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11623) : cljs.core.atom.call(null,G__11623));
})();
var prefer_table__8019__auto__ = (function (){var G__11624 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11624) : cljs.core.atom.call(null,G__11624));
})();
var method_cache__8020__auto__ = (function (){var G__11625 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11625) : cljs.core.atom.call(null,G__11625));
})();
var cached_hierarchy__8021__auto__ = (function (){var G__11626 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11626) : cljs.core.atom.call(null,G__11626));
})();
var hierarchy__8022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("secretary.core","encode-pair"),((function (method_table__8018__auto__,prefer_table__8019__auto__,method_cache__8020__auto__,cached_hierarchy__8021__auto__,hierarchy__8022__auto__){
return (function (p__11627){
var vec__11628 = p__11627;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11628,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11628,(1),null);
if((cljs.core.sequential_QMARK_(v)) || (cljs.core.set_QMARK_(v))){
return cljs.core.constant$keyword$secretary$core_SLASH_sequential;
} else {
if((function (){var or__7124__auto__ = cljs.core.map_QMARK_(v);
if(or__7124__auto__){
return or__7124__auto__;
} else {
if(!((v == null))){
if(((v.cljs$lang$protocol_mask$partition0$ & (67108864))) || (v.cljs$core$IRecord$)){
return true;
} else {
if((!v.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,v);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,v);
}
}
})()){
return cljs.core.constant$keyword$secretary$core_SLASH_map;
} else {
return null;
}
}
});})(method_table__8018__auto__,prefer_table__8019__auto__,method_cache__8020__auto__,cached_hierarchy__8021__auto__,hierarchy__8022__auto__))
,cljs.core.constant$keyword$default,hierarchy__8022__auto__,method_table__8018__auto__,prefer_table__8019__auto__,method_cache__8020__auto__,cached_hierarchy__8021__auto__));
})();
}
secretary.core.key_index = (function secretary$core$key_index(){
var args11631 = [];
var len__8163__auto___11634 = arguments.length;
var i__8164__auto___11635 = (0);
while(true){
if((i__8164__auto___11635 < len__8163__auto___11634)){
args11631.push((arguments[i__8164__auto___11635]));

var G__11636 = (i__8164__auto___11635 + (1));
i__8164__auto___11635 = G__11636;
continue;
} else {
}
break;
}

var G__11633 = args11631.length;
switch (G__11633) {
case 1:
return secretary.core.key_index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return secretary.core.key_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11631.length)].join('')));

}
});

secretary.core.key_index.cljs$core$IFn$_invoke$arity$1 = (function (k){
return [cljs.core.str(cljs.core.name(k)),cljs.core.str("[]")].join('');
});

secretary.core.key_index.cljs$core$IFn$_invoke$arity$2 = (function (k,index){
return [cljs.core.str(cljs.core.name(k)),cljs.core.str("["),cljs.core.str(index),cljs.core.str("]")].join('');
});

secretary.core.key_index.cljs$lang$maxFixedArity = 2;
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$secretary$core_SLASH_sequential,(function (p__11638){
var vec__11639 = p__11638;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11639,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11639,(1),null);
var encoded = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__11639,k,v){
return (function (i,x){
var pair = ((cljs.core.coll_QMARK_(x))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$2(k,i),x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$1(k),x], null));
return (secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1(pair) : secretary.core.encode_pair.call(null,pair));
});})(vec__11639,k,v))
,v);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",encoded);
}));
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$secretary$core_SLASH_map,(function (p__11640){
var vec__11641 = p__11640;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11641,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11641,(1),null);
var encoded = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__11641,k,v){
return (function (p__11642){
var vec__11643 = p__11642;
var ik = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11643,(0),null);
var iv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11643,(1),null);
var G__11644 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$2(k,cljs.core.name(ik)),iv], null);
return (secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1(G__11644) : secretary.core.encode_pair.call(null,G__11644));
});})(vec__11641,k,v))
,v);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",encoded);
}));
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$default,(function (p__11645){
var vec__11646 = p__11645;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11646,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11646,(1),null);
return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str((function (){var G__11647 = [cljs.core.str(v)].join('');
return (secretary.core.encode.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode.cljs$core$IFn$_invoke$arity$1(G__11647) : secretary.core.encode.call(null,G__11647));
})())].join('');
}));
/**
 * Convert a map of query parameters into url encoded string.
 */
secretary.core.encode_query_params = (function secretary$core$encode_query_params(query_params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.encode_pair,query_params));
});
/**
 * Like js/encodeURIComponent excepts ignore slashes.
 */
secretary.core.encode_uri = (function secretary$core$encode_uri(uri){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.encode,clojure.string.split.cljs$core$IFn$_invoke$arity$2(uri,/\//)));
});
secretary.core.decode = decodeURIComponent;
/**
 * Parse a value from a serialized query-string key index. If the
 * index value is empty 0 is returned, if it's a digit it returns the
 * js/parseInt value, otherwise it returns the extracted index.
 */
secretary.core.parse_path = (function secretary$core$parse_path(path){
var index_re = /\[([^\]]*)\]*/;
var parts = cljs.core.re_seq(index_re,path);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (index_re,parts){
return (function (p__11650){
var vec__11651 = p__11650;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11651,(0),null);
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11651,(1),null);
if(cljs.core.empty_QMARK_(part)){
return (0);
} else {
if(cljs.core.truth_(cljs.core.re_matches(/\d+/,part))){
return parseInt(part);
} else {
return part;

}
}
});})(index_re,parts))
,parts);
});
/**
 * Return a key path for a serialized query-string entry.
 * 
 * Ex.
 * 
 * (key-parse "foo[][a][][b]")
 * ;; => ("foo" 0 "a" 0 "b")
 * 
 */
secretary.core.key_parse = (function secretary$core$key_parse(k){
var re = /([^\[\]]+)((?:\[[^\]]*\])*)?/;
var vec__11653 = cljs.core.re_matches(re,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11653,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11653,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11653,(2),null);
var parsed_path = (cljs.core.truth_(path)?secretary.core.parse_path(path):null);
return cljs.core.cons(key,parsed_path);
});
/**
 * Like assoc-in but numbers in path create vectors instead of maps.
 * 
 * Ex.
 * 
 * (assoc-in-query-params {} ["foo" 0] 1)
 * ;; => {"foo" [1]}
 * 
 * (assoc-in-query-params {} ["foo" 0 "a"] 1)
 * ;; => {"foo" [{"a" 1}]}
 * 
 */
secretary.core.assoc_in_query_params = (function secretary$core$assoc_in_query_params(m,path,v){
var heads = (function (xs){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,_){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((i + (1)),xs);
}),xs);
});
var hs = heads(path);
var m__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (heads,hs){
return (function (m__$1,h){
if((typeof cljs.core.last(h) === 'number') && (!(cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.butlast(h)))))){
return cljs.core.assoc_in(m__$1,cljs.core.butlast(h),cljs.core.PersistentVector.EMPTY);
} else {
return m__$1;
}
});})(heads,hs))
,m,hs);
if((cljs.core.last(path) === (0))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$1,cljs.core.butlast(path),cljs.core.conj,v);
} else {
return cljs.core.assoc_in(m__$1,path,v);
}
});
/**
 * Extract a map of query parameters from a query string.
 */
secretary.core.decode_query_params = (function secretary$core$decode_query_params(query_string){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(query_string,/&/);
var params = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parts){
return (function (m,part){
var vec__11655 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(part,/=/,(2));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11655,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11655,(1),null);
return secretary.core.assoc_in_query_params(m,secretary.core.key_parse(k),(secretary.core.decode.cljs$core$IFn$_invoke$arity$1 ? secretary.core.decode.cljs$core$IFn$_invoke$arity$1(v) : secretary.core.decode.call(null,v)));
});})(parts))
,cljs.core.PersistentArrayMap.EMPTY,parts);
var params__$1 = clojure.walk.keywordize_keys(params);
return params__$1;
});
/**
 * Like re-matches but result is a always vector. If re does not
 * capture matches then it will return a vector of [m m] as if it had a
 * single capture. Other wise it maintains consistent behavior with
 * re-matches.
 */
secretary.core.re_matches_STAR_ = (function secretary$core$re_matches_STAR_(re,s){
var ms = cljs.core.re_matches(re,s);
if(cljs.core.truth_(ms)){
if(cljs.core.sequential_QMARK_(ms)){
return ms;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms,ms], null);
}
} else {
return null;
}
});
secretary.core.re_escape_chars = cljs.core.set("\\.*+|?()[]{}$^");
secretary.core.re_escape = (function secretary$core$re_escape(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,c){
if(cljs.core.truth_((secretary.core.re_escape_chars.cljs$core$IFn$_invoke$arity$1 ? secretary.core.re_escape_chars.cljs$core$IFn$_invoke$arity$1(c) : secretary.core.re_escape_chars.call(null,c)))){
return [cljs.core.str(s__$1),cljs.core.str("\\"),cljs.core.str(c)].join('');
} else {
return [cljs.core.str(s__$1),cljs.core.str(c)].join('');
}
}),"",s);
});
/**
 * Attempt to lex a single token from s with clauses. Each clause is a
 * pair of [regexp action] where action is a function. regexp is
 * expected to begin with ^ and contain a single capture. If the
 * attempt is successful a vector of [s-without-token (action capture)]
 * is returned. Otherwise the result is nil.
 */
secretary.core.lex_STAR_ = (function secretary$core$lex_STAR_(s,clauses){
return cljs.core.some((function (p__11659){
var vec__11660 = p__11659;
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11660,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11660,(1),null);
var temp__4425__auto__ = cljs.core.re_find(re,s);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__11661 = temp__4425__auto__;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11661,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11661,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,cljs.core.count(m)),(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(c) : action.call(null,c))], null);
} else {
return null;
}
}),clauses);
});
/**
 * Return a pair of [regex params]. regex is a compiled regular
 * expression for matching routes. params is a list of route param
 * names (:*, :id, etc.).
 */
secretary.core.lex_route = (function secretary$core$lex_route(s,clauses){
var s__$1 = s;
var pattern = "";
var params = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq(s__$1)){
var vec__11664 = secretary.core.lex_STAR_(s__$1,clauses);
var s__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11664,(0),null);
var vec__11665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11664,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11665,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11665,(1),null);
var G__11666 = s__$2;
var G__11667 = [cljs.core.str(pattern),cljs.core.str(r)].join('');
var G__11668 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,p);
s__$1 = G__11666;
pattern = G__11667;
params = G__11668;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.re_pattern([cljs.core.str("^"),cljs.core.str(pattern),cljs.core.str("$")].join('')),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,params)], null);
}
break;
}
});
/**
 * Given a route return an instance of IRouteMatches.
 */
secretary.core.compile_route = (function secretary$core$compile_route(orig_route){
var clauses = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\*([^\s.:*\/]*)/,(function (v){
var r = "(.*?)";
var p = ((cljs.core.seq(v))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v):cljs.core.constant$keyword$_STAR_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\:([^\s.:*\/]+)/,(function (v){
var r = "([^,;?/]+)";
var p = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^([^:*]+)/,(function (v){
var r = secretary.core.re_escape(v);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null);
})], null)], null);
var vec__11674 = secretary.core.lex_route(orig_route,clauses);
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11674,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11674,(1),null);
if(typeof secretary.core.t11675 !== 'undefined'){
} else {

/**
* @constructor
*/
secretary.core.t11675 = (function (compile_route,orig_route,clauses,vec__11674,re,params,meta11676){
this.compile_route = compile_route;
this.orig_route = orig_route;
this.clauses = clauses;
this.vec__11674 = vec__11674;
this.re = re;
this.params = params;
this.meta11676 = meta11676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
secretary.core.t11675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (clauses,vec__11674,re,params){
return (function (_11677,meta11676__$1){
var self__ = this;
var _11677__$1 = this;
return (new secretary.core.t11675(self__.compile_route,self__.orig_route,self__.clauses,self__.vec__11674,self__.re,self__.params,meta11676__$1));
});})(clauses,vec__11674,re,params))
;

secretary.core.t11675.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (clauses,vec__11674,re,params){
return (function (_11677){
var self__ = this;
var _11677__$1 = this;
return self__.meta11676;
});})(clauses,vec__11674,re,params))
;

secretary.core.t11675.prototype.secretary$core$IRouteValue$ = true;

secretary.core.t11675.prototype.secretary$core$IRouteValue$route_value$arity$1 = ((function (clauses,vec__11674,re,params){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.orig_route;
});})(clauses,vec__11674,re,params))
;

secretary.core.t11675.prototype.secretary$core$IRouteMatches$ = true;

secretary.core.t11675.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = ((function (clauses,vec__11674,re,params){
return (function (_,route){
var self__ = this;
var ___$1 = this;
var temp__4425__auto__ = secretary.core.re_matches_STAR_(self__.re,route);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__11678 = temp__4425__auto__;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11678,(0),null);
var ms = cljs.core.nthnext(vec__11678,(1));
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(self__.params,cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.decode,ms)))], 0));
} else {
return null;
}
});})(clauses,vec__11674,re,params))
;

secretary.core.t11675.getBasis = ((function (clauses,vec__11674,re,params){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"compile-route","compile-route",-1479918120,null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$private,true,cljs.core.constant$keyword$arglists,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"orig-route","orig-route",899103121,null)], null))),cljs.core.constant$keyword$doc,"Given a route return an instance of IRouteMatches."], null)),new cljs.core.Symbol(null,"orig-route","orig-route",899103121,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null),new cljs.core.Symbol(null,"vec__11674","vec__11674",1707418413,null),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"meta11676","meta11676",986534830,null)], null);
});})(clauses,vec__11674,re,params))
;

secretary.core.t11675.cljs$lang$type = true;

secretary.core.t11675.cljs$lang$ctorStr = "secretary.core/t11675";

secretary.core.t11675.cljs$lang$ctorPrWriter = ((function (clauses,vec__11674,re,params){
return (function (this__7703__auto__,writer__7704__auto__,opt__7705__auto__){
return cljs.core._write(writer__7704__auto__,"secretary.core/t11675");
});})(clauses,vec__11674,re,params))
;

secretary.core.__GT_t11675 = ((function (clauses,vec__11674,re,params){
return (function secretary$core$compile_route_$___GT_t11675(compile_route__$1,orig_route__$1,clauses__$1,vec__11674__$1,re__$1,params__$1,meta11676){
return (new secretary.core.t11675(compile_route__$1,orig_route__$1,clauses__$1,vec__11674__$1,re__$1,params__$1,meta11676));
});})(clauses,vec__11674,re,params))
;

}

return (new secretary.core.t11675(secretary$core$compile_route,orig_route,clauses,vec__11674,re,params,cljs.core.PersistentArrayMap.EMPTY));
});
secretary.core.render_route_STAR_ = (function secretary$core$render_route_STAR_(){
var args__8170__auto__ = [];
var len__8163__auto___11682 = arguments.length;
var i__8164__auto___11683 = (0);
while(true){
if((i__8164__auto___11683 < len__8163__auto___11682)){
args__8170__auto__.push((arguments[i__8164__auto___11683]));

var G__11684 = (i__8164__auto___11683 + (1));
i__8164__auto___11683 = G__11684;
continue;
} else {
}
break;
}

var argseq__8171__auto__ = ((((1) < args__8170__auto__.length))?(new cljs.core.IndexedSeq(args__8170__auto__.slice((1)),(0))):null);
return secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8171__auto__);
});

secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,args){
if(((!((obj == null)))?(((false) || (obj.secretary$core$IRenderRoute$))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(secretary.core.IRenderRoute,obj):false)):cljs.core.native_satisfies_QMARK_(secretary.core.IRenderRoute,obj))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route,obj,args);
} else {
return null;
}
});

secretary.core.render_route_STAR_.cljs$lang$maxFixedArity = (1);

secretary.core.render_route_STAR_.cljs$lang$applyTo = (function (seq11679){
var G__11680 = cljs.core.first(seq11679);
var seq11679__$1 = cljs.core.next(seq11679);
return secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__11680,seq11679__$1);
});
secretary.core._STAR_routes_STAR_ = (function (){var G__11685 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11685) : cljs.core.atom.call(null,G__11685));
})();
secretary.core.add_route_BANG_ = (function secretary$core$add_route_BANG_(obj,action){
var obj__$1 = ((typeof obj === 'string')?secretary.core.compile_route(obj):obj);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(secretary.core._STAR_routes_STAR_,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj__$1,action], null));
});
secretary.core.remove_route_BANG_ = (function secretary$core$remove_route_BANG_(obj){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(secretary.core._STAR_routes_STAR_,(function (rs){
return cljs.core.filterv((function (p__11688){
var vec__11689 = p__11688;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11689,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11689,(1),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,obj);
}),rs);
}));
});
secretary.core.reset_routes_BANG_ = (function secretary$core$reset_routes_BANG_(){
var G__11692 = secretary.core._STAR_routes_STAR_;
var G__11693 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11692,G__11693) : cljs.core.reset_BANG_.call(null,G__11692,G__11693));
});
secretary.core.locate_route = (function secretary$core$locate_route(route){
return cljs.core.some((function (p__11696){
var vec__11697 = p__11696;
var compiled_route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11697,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11697,(1),null);
var temp__4425__auto__ = secretary.core.route_matches(compiled_route,route);
if(cljs.core.truth_(temp__4425__auto__)){
var params = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$action,action,cljs.core.constant$keyword$params,params,cljs.core.constant$keyword$route,compiled_route], null);
} else {
return null;
}
}),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(secretary.core._STAR_routes_STAR_) : cljs.core.deref.call(null,secretary.core._STAR_routes_STAR_)));
});
/**
 * Returns original route value as set in defroute when passed a URI path.
 */
secretary.core.locate_route_value = (function secretary$core$locate_route_value(uri){
return secretary.core.route_value(cljs.core.constant$keyword$route.cljs$core$IFn$_invoke$arity$1(secretary.core.locate_route(uri)));
});
secretary.core.prefix = (function secretary$core$prefix(){
return [cljs.core.str(secretary.core.get_config(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$prefix], null)))].join('');
});
secretary.core.uri_without_prefix = (function secretary$core$uri_without_prefix(uri){
return clojure.string.replace(uri,cljs.core.re_pattern([cljs.core.str("^"),cljs.core.str(secretary.core.prefix())].join('')),"");
});
/**
 * Ensures that the uri has a leading slash
 */
secretary.core.uri_with_leading_slash = (function secretary$core$uri_with_leading_slash(uri){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(uri))){
return uri;
} else {
return [cljs.core.str("/"),cljs.core.str(uri)].join('');
}
});
/**
 * Dispatch an action for a given route if it matches the URI path.
 */
secretary.core.dispatch_BANG_ = (function secretary$core$dispatch_BANG_(uri){
var vec__11701 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(secretary.core.uri_without_prefix(uri),/\?/);
var uri_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11701,(0),null);
var query_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11701,(1),null);
var uri_path__$1 = secretary.core.uri_with_leading_slash(uri_path);
var query_params = (cljs.core.truth_(query_string)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$query_DASH_params,secretary.core.decode_query_params(query_string)], null):null);
var map__11702 = secretary.core.locate_route(uri_path__$1);
var map__11702__$1 = ((((!((map__11702 == null)))?((((map__11702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11702):map__11702);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11702__$1,cljs.core.constant$keyword$action);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11702__$1,cljs.core.constant$keyword$params);
var action__$1 = (function (){var or__7124__auto__ = action;
if(cljs.core.truth_(or__7124__auto__)){
return or__7124__auto__;
} else {
return cljs.core.identity;
}
})();
var params__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params,query_params], 0));
return (action__$1.cljs$core$IFn$_invoke$arity$1 ? action__$1.cljs$core$IFn$_invoke$arity$1(params__$1) : action__$1.call(null,params__$1));
});
secretary.core.invalid_params = (function secretary$core$invalid_params(params,validations){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__11706){
var vec__11707 = p__11706;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11707,(0),null);
var validation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11707,(1),null);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,key);
if(cljs.core.truth_(cljs.core.re_matches(validation,value))){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,validation], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),validations));
});
secretary.core.params_valid_QMARK_ = (function secretary$core$params_valid_QMARK_(params,validations){
return cljs.core.empty_QMARK_(secretary.core.invalid_params(params,validations));
});
(secretary.core.IRouteMatches["string"] = true);

(secretary.core.route_matches["string"] = (function (this$,route){
return secretary.core.route_matches(secretary.core.compile_route(this$),route);
}));

RegExp.prototype.secretary$core$IRouteMatches$ = true;

RegExp.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (this$,route){
var this$__$1 = this;
var temp__4425__auto__ = secretary.core.re_matches_STAR_(this$__$1,route);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__11711 = temp__4425__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11711,(0),null);
var ms = cljs.core.nthnext(vec__11711,(1));
return cljs.core.vec(ms);
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$ = true;

cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (p__11708,route){
var vec__11709 = p__11708;
var route_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11709,(0),null);
var validations = cljs.core.nthnext(vec__11709,(1));
var vec__11710 = this;
var route_string__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11710,(0),null);
var validations__$1 = cljs.core.nthnext(vec__11710,(1));
var params = secretary.core.route_matches(secretary.core.compile_route(route_string__$1),route);
if(cljs.core.truth_(secretary.core.params_valid_QMARK_(params,validations__$1))){
return params;
} else {
return null;
}
});
(secretary.core.IRouteValue["string"] = true);

(secretary.core.route_value["string"] = (function (this$){
return secretary.core.route_value(secretary.core.compile_route(this$));
}));

RegExp.prototype.secretary$core$IRouteValue$ = true;

RegExp.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$ = true;

cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (p__11712){
var vec__11713 = p__11712;
var route_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11713,(0),null);
var validations = cljs.core.nthnext(vec__11713,(1));
var vec__11714 = this;
var route_string__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11714,(0),null);
var validations__$1 = cljs.core.nthnext(vec__11714,(1));
return cljs.core.vec(cljs.core.cons(secretary.core.route_value(route_string__$1),validations__$1));
});
(secretary.core.IRenderRoute["string"] = true);

(secretary.core.render_route["string"] = (function() {
var G__11720 = null;
var G__11720__1 = (function (this$){
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.PersistentArrayMap.EMPTY);
});
var G__11720__2 = (function (this$,params){
var map__11715 = params;
var map__11715__$1 = ((((!((map__11715 == null)))?((((map__11715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11715):map__11715);
var m = map__11715__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11715__$1,cljs.core.constant$keyword$query_DASH_params);
var a = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(m) : cljs.core.atom.call(null,m));
var path = this$.replace((new RegExp(":[^\\s.:*/]+|\\*[^\\s.:*/]*","g")),((function (map__11715,map__11715__$1,m,query_params,a){
return (function ($1){
var lookup = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($1,"*"))?$1:cljs.core.subs.cljs$core$IFn$_invoke$arity$2($1,(1))));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a)),lookup);
var replacement = ((cljs.core.sequential_QMARK_(v))?(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc,lookup,cljs.core.next(v));

return secretary.core.encode_uri(cljs.core.first(v));
})()
:(cljs.core.truth_(v)?secretary.core.encode_uri(v):$1));
return replacement;
});})(map__11715,map__11715__$1,m,query_params,a))
);
var path__$1 = [cljs.core.str(secretary.core.get_config(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$prefix], null))),cljs.core.str(path)].join('');
var temp__4423__auto__ = (function (){var and__7112__auto__ = query_params;
if(cljs.core.truth_(and__7112__auto__)){
return secretary.core.encode_query_params(query_params);
} else {
return and__7112__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var query_string = temp__4423__auto__;
return [cljs.core.str(path__$1),cljs.core.str("?"),cljs.core.str(query_string)].join('');
} else {
return path__$1;
}
});
G__11720 = function(this$,params){
switch(arguments.length){
case 1:
return G__11720__1.call(this,this$);
case 2:
return G__11720__2.call(this,this$,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11720.cljs$core$IFn$_invoke$arity$1 = G__11720__1;
G__11720.cljs$core$IFn$_invoke$arity$2 = G__11720__2;
return G__11720;
})()
);

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$ = true;

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$1 = (function (this$){
var this$__$1 = this;
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$2 = (function (p__11717,params){
var vec__11718 = p__11717;
var route_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11718,(0),null);
var validations = cljs.core.nthnext(vec__11718,(1));
var vec__11719 = this;
var route_string__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11719,(0),null);
var validations__$1 = cljs.core.nthnext(vec__11719,(1));
var invalid = secretary.core.invalid_params(params,validations__$1);
if(cljs.core.empty_QMARK_(invalid)){
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(route_string__$1,params);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Could not build route: invalid params",invalid);
}
});
