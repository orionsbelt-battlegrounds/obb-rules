// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('secretary.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');

secretary.core.IRouteMatches = (function (){var obj14330 = {};
return obj14330;
})();

secretary.core.route_matches = (function secretary$core$route_matches(this$,route){
if(cljs.core.truth_((function (){var and__6798__auto__ = this$;
if(cljs.core.truth_(and__6798__auto__)){
return this$.secretary$core$IRouteMatches$route_matches$arity$2;
} else {
return and__6798__auto__;
}
})())){
return this$.secretary$core$IRouteMatches$route_matches$arity$2(this$,route);
} else {
var x__7446__auto__ = (((this$ == null))?null:this$);
return (function (){var or__6810__auto__ = (secretary.core.route_matches[(function (){var G__14334 = x__7446__auto__;
return goog.typeOf(G__14334);
})()]);
if(cljs.core.truth_(or__6810__auto__)){
return or__6810__auto__;
} else {
var or__6810__auto____$1 = (secretary.core.route_matches["_"]);
if(cljs.core.truth_(or__6810__auto____$1)){
return or__6810__auto____$1;
} else {
throw cljs.core.missing_protocol("IRouteMatches.route-matches",this$);
}
}
})().call(null,this$,route);
}
});


secretary.core.IRouteValue = (function (){var obj14336 = {};
return obj14336;
})();

secretary.core.route_value = (function secretary$core$route_value(this$){
if(cljs.core.truth_((function (){var and__6798__auto__ = this$;
if(cljs.core.truth_(and__6798__auto__)){
return this$.secretary$core$IRouteValue$route_value$arity$1;
} else {
return and__6798__auto__;
}
})())){
return this$.secretary$core$IRouteValue$route_value$arity$1(this$);
} else {
var x__7446__auto__ = (((this$ == null))?null:this$);
return (function (){var or__6810__auto__ = (secretary.core.route_value[(function (){var G__14340 = x__7446__auto__;
return goog.typeOf(G__14340);
})()]);
if(cljs.core.truth_(or__6810__auto__)){
return or__6810__auto__;
} else {
var or__6810__auto____$1 = (secretary.core.route_value["_"]);
if(cljs.core.truth_(or__6810__auto____$1)){
return or__6810__auto____$1;
} else {
throw cljs.core.missing_protocol("IRouteValue.route-value",this$);
}
}
})().call(null,this$);
}
});


secretary.core.IRenderRoute = (function (){var obj14342 = {};
return obj14342;
})();

secretary.core.render_route = (function secretary$core$render_route(){
var G__14344 = arguments.length;
switch (G__14344) {
case 1:
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

secretary.core.render_route.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if(cljs.core.truth_((function (){var and__6798__auto__ = this$;
if(cljs.core.truth_(and__6798__auto__)){
return this$.secretary$core$IRenderRoute$render_route$arity$1;
} else {
return and__6798__auto__;
}
})())){
return this$.secretary$core$IRenderRoute$render_route$arity$1(this$);
} else {
var x__7446__auto__ = (((this$ == null))?null:this$);
return (function (){var or__6810__auto__ = (secretary.core.render_route[(function (){var G__14346 = x__7446__auto__;
return goog.typeOf(G__14346);
})()]);
if(cljs.core.truth_(or__6810__auto__)){
return or__6810__auto__;
} else {
var or__6810__auto____$1 = (secretary.core.render_route["_"]);
if(cljs.core.truth_(or__6810__auto____$1)){
return or__6810__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderRoute.render-route",this$);
}
}
})().call(null,this$);
}
});

secretary.core.render_route.cljs$core$IFn$_invoke$arity$2 = (function (this$,params){
if(cljs.core.truth_((function (){var and__6798__auto__ = this$;
if(cljs.core.truth_(and__6798__auto__)){
return this$.secretary$core$IRenderRoute$render_route$arity$2;
} else {
return and__6798__auto__;
}
})())){
return this$.secretary$core$IRenderRoute$render_route$arity$2(this$,params);
} else {
var x__7446__auto__ = (((this$ == null))?null:this$);
return (function (){var or__6810__auto__ = (secretary.core.render_route[(function (){var G__14348 = x__7446__auto__;
return goog.typeOf(G__14348);
})()]);
if(cljs.core.truth_(or__6810__auto__)){
return or__6810__auto__;
} else {
var or__6810__auto____$1 = (secretary.core.render_route["_"]);
if(cljs.core.truth_(or__6810__auto____$1)){
return or__6810__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderRoute.render-route",this$);
}
}
})().call(null,this$,params);
}
});

secretary.core.render_route.cljs$lang$maxFixedArity = 2;

secretary.core._STAR_config_STAR_ = (function (){var G__14350 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$prefix,""], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14350) : cljs.core.atom.call(null,G__14350));
})();
/**
 * Gets a value for *config* at path.
 */
secretary.core.get_config = (function secretary$core$get_config(path){
var path__$1 = ((cljs.core.sequential_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__14352 = secretary.core._STAR_config_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14352) : cljs.core.deref.call(null,G__14352));
})(),path__$1);
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
secretary.core.encode_pair = (function (){var method_table__7705__auto__ = (function (){var G__14353 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14353) : cljs.core.atom.call(null,G__14353));
})();
var prefer_table__7706__auto__ = (function (){var G__14354 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14354) : cljs.core.atom.call(null,G__14354));
})();
var method_cache__7707__auto__ = (function (){var G__14355 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14355) : cljs.core.atom.call(null,G__14355));
})();
var cached_hierarchy__7708__auto__ = (function (){var G__14356 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14356) : cljs.core.atom.call(null,G__14356));
})();
var hierarchy__7709__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("secretary.core","encode-pair"),((function (method_table__7705__auto__,prefer_table__7706__auto__,method_cache__7707__auto__,cached_hierarchy__7708__auto__,hierarchy__7709__auto__){
return (function (p__14357){
var vec__14358 = p__14357;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14358,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14358,(1),null);
if((cljs.core.sequential_QMARK_(v)) || (cljs.core.set_QMARK_(v))){
return cljs.core.constant$keyword$secretary$core_SLASH_sequential;
} else {
if((function (){var or__6810__auto__ = cljs.core.map_QMARK_(v);
if(or__6810__auto__){
return or__6810__auto__;
} else {
var G__14360 = v;
if(G__14360){
var bit__7484__auto__ = (G__14360.cljs$lang$protocol_mask$partition0$ & (67108864));
if((bit__7484__auto__) || (G__14360.cljs$core$IRecord$)){
return true;
} else {
if((!G__14360.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,G__14360);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,G__14360);
}
}
})()){
return cljs.core.constant$keyword$secretary$core_SLASH_map;
} else {
return null;
}
}
});})(method_table__7705__auto__,prefer_table__7706__auto__,method_cache__7707__auto__,cached_hierarchy__7708__auto__,hierarchy__7709__auto__))
,cljs.core.constant$keyword$default,hierarchy__7709__auto__,method_table__7705__auto__,prefer_table__7706__auto__,method_cache__7707__auto__,cached_hierarchy__7708__auto__));
})();
}
secretary.core.key_index = (function secretary$core$key_index(){
var G__14362 = arguments.length;
switch (G__14362) {
case 1:
return secretary.core.key_index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return secretary.core.key_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

secretary.core.key_index.cljs$core$IFn$_invoke$arity$1 = (function (k){
return [cljs.core.str(cljs.core.name(k)),cljs.core.str("[]")].join('');
});

secretary.core.key_index.cljs$core$IFn$_invoke$arity$2 = (function (k,index){
return [cljs.core.str(cljs.core.name(k)),cljs.core.str("["),cljs.core.str(index),cljs.core.str("]")].join('');
});

secretary.core.key_index.cljs$lang$maxFixedArity = 2;
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$secretary$core_SLASH_sequential,(function (p__14364){
var vec__14365 = p__14364;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14365,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14365,(1),null);
var encoded = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__14365,k,v){
return (function (i,x){
var pair = ((cljs.core.coll_QMARK_(x))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$2(k,i),x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$1(k),x], null));
var G__14366 = pair;
return (secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1(G__14366) : secretary.core.encode_pair.call(null,G__14366));
});})(vec__14365,k,v))
,v);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",encoded);
}));
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$secretary$core_SLASH_map,(function (p__14367){
var vec__14368 = p__14367;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14368,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14368,(1),null);
var encoded = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14368,k,v){
return (function (p__14369){
var vec__14370 = p__14369;
var ik = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14370,(0),null);
var iv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14370,(1),null);
var G__14371 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$2(k,cljs.core.name(ik)),iv], null);
return (secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1(G__14371) : secretary.core.encode_pair.call(null,G__14371));
});})(vec__14368,k,v))
,v);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",encoded);
}));
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$default,(function (p__14372){
var vec__14373 = p__14372;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14373,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14373,(1),null);
return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str((function (){var G__14374 = [cljs.core.str(v)].join('');
return (secretary.core.encode.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode.cljs$core$IFn$_invoke$arity$1(G__14374) : secretary.core.encode.call(null,G__14374));
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
return (function (p__14378){
var vec__14379 = p__14378;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14379,(0),null);
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14379,(1),null);
if(cljs.core.empty_QMARK_(part)){
return (0);
} else {
if(cljs.core.truth_(cljs.core.re_matches(/\d+/,part))){
var G__14380 = part;
return parseInt(G__14380);
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
var vec__14382 = cljs.core.re_matches(re,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14382,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14382,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14382,(2),null);
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
var vec__14385 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(part,/=/,(2));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14385,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14385,(1),null);
return secretary.core.assoc_in_query_params(m,secretary.core.key_parse(k),(function (){var G__14386 = v;
return (secretary.core.decode.cljs$core$IFn$_invoke$arity$1 ? secretary.core.decode.cljs$core$IFn$_invoke$arity$1(G__14386) : secretary.core.decode.call(null,G__14386));
})());
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
if(cljs.core.truth_((function (){var G__14388 = c;
return (secretary.core.re_escape_chars.cljs$core$IFn$_invoke$arity$1 ? secretary.core.re_escape_chars.cljs$core$IFn$_invoke$arity$1(G__14388) : secretary.core.re_escape_chars.call(null,G__14388));
})())){
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
return cljs.core.some((function (p__14393){
var vec__14394 = p__14393;
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14394,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14394,(1),null);
var temp__4425__auto__ = cljs.core.re_find(re,s);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__14395 = temp__4425__auto__;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14395,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14395,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,cljs.core.count(m)),(function (){var G__14396 = c;
return (action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(G__14396) : action.call(null,G__14396));
})()], null);
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
var vec__14399 = secretary.core.lex_STAR_(s__$1,clauses);
var s__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14399,(0),null);
var vec__14400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14399,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14400,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14400,(1),null);
var G__14401 = s__$2;
var G__14402 = [cljs.core.str(pattern),cljs.core.str(r)].join('');
var G__14403 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,p);
s__$1 = G__14401;
pattern = G__14402;
params = G__14403;
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
var vec__14409 = secretary.core.lex_route(orig_route,clauses);
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14409,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14409,(1),null);
if(typeof secretary.core.t14410 !== 'undefined'){
} else {

/**
* @constructor
*/
secretary.core.t14410 = (function (compile_route,orig_route,clauses,vec__14409,re,params,meta14411){
this.compile_route = compile_route;
this.orig_route = orig_route;
this.clauses = clauses;
this.vec__14409 = vec__14409;
this.re = re;
this.params = params;
this.meta14411 = meta14411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
secretary.core.t14410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (clauses,vec__14409,re,params){
return (function (_14412,meta14411__$1){
var self__ = this;
var _14412__$1 = this;
return (new secretary.core.t14410(self__.compile_route,self__.orig_route,self__.clauses,self__.vec__14409,self__.re,self__.params,meta14411__$1));
});})(clauses,vec__14409,re,params))
;

secretary.core.t14410.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (clauses,vec__14409,re,params){
return (function (_14412){
var self__ = this;
var _14412__$1 = this;
return self__.meta14411;
});})(clauses,vec__14409,re,params))
;

secretary.core.t14410.prototype.secretary$core$IRouteValue$ = true;

secretary.core.t14410.prototype.secretary$core$IRouteValue$route_value$arity$1 = ((function (clauses,vec__14409,re,params){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.orig_route;
});})(clauses,vec__14409,re,params))
;

secretary.core.t14410.prototype.secretary$core$IRouteMatches$ = true;

secretary.core.t14410.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = ((function (clauses,vec__14409,re,params){
return (function (_,route){
var self__ = this;
var ___$1 = this;
var temp__4425__auto__ = secretary.core.re_matches_STAR_(self__.re,route);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__14413 = temp__4425__auto__;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14413,(0),null);
var ms = cljs.core.nthnext(vec__14413,(1));
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(self__.params,cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.decode,ms)))], 0));
} else {
return null;
}
});})(clauses,vec__14409,re,params))
;

secretary.core.t14410.getBasis = ((function (clauses,vec__14409,re,params){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"compile-route","compile-route",-1479918120,null),new cljs.core.Symbol(null,"orig-route","orig-route",899103121,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null),new cljs.core.Symbol(null,"vec__14409","vec__14409",-2130149518,null),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"meta14411","meta14411",-1345906566,null)], null);
});})(clauses,vec__14409,re,params))
;

secretary.core.t14410.cljs$lang$type = true;

secretary.core.t14410.cljs$lang$ctorStr = "secretary.core/t14410";

secretary.core.t14410.cljs$lang$ctorPrWriter = ((function (clauses,vec__14409,re,params){
return (function (this__7389__auto__,writer__7390__auto__,opt__7391__auto__){
return cljs.core._write(writer__7390__auto__,"secretary.core/t14410");
});})(clauses,vec__14409,re,params))
;

secretary.core.__GT_t14410 = ((function (clauses,vec__14409,re,params){
return (function secretary$core$compile_route_$___GT_t14410(compile_route__$1,orig_route__$1,clauses__$1,vec__14409__$1,re__$1,params__$1,meta14411){
return (new secretary.core.t14410(compile_route__$1,orig_route__$1,clauses__$1,vec__14409__$1,re__$1,params__$1,meta14411));
});})(clauses,vec__14409,re,params))
;

}

return (new secretary.core.t14410(secretary$core$compile_route,orig_route,clauses,vec__14409,re,params,cljs.core.PersistentArrayMap.EMPTY));
});
secretary.core.render_route_STAR_ = (function secretary$core$render_route_STAR_(){
var argseq__7850__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7850__auto__);
});

secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,args){
if((function (){var G__14416 = obj;
if(G__14416){
var bit__7484__auto__ = null;
if(cljs.core.truth_((function (){var or__6810__auto__ = bit__7484__auto__;
if(cljs.core.truth_(or__6810__auto__)){
return or__6810__auto__;
} else {
return G__14416.secretary$core$IRenderRoute$;
}
})())){
return true;
} else {
if((!G__14416.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(secretary.core.IRenderRoute,G__14416);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(secretary.core.IRenderRoute,G__14416);
}
})()){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route,obj,args);
} else {
return null;
}
});

secretary.core.render_route_STAR_.cljs$lang$maxFixedArity = (1);

secretary.core.render_route_STAR_.cljs$lang$applyTo = (function (seq14414){
var G__14415 = cljs.core.first(seq14414);
var seq14414__$1 = cljs.core.next(seq14414);
return secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__14415,seq14414__$1);
});
secretary.core._STAR_routes_STAR_ = (function (){var G__14417 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14417) : cljs.core.atom.call(null,G__14417));
})();
secretary.core.add_route_BANG_ = (function secretary$core$add_route_BANG_(obj,action){
var obj__$1 = ((typeof obj === 'string')?secretary.core.compile_route(obj):obj);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(secretary.core._STAR_routes_STAR_,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj__$1,action], null));
});
secretary.core.remove_route_BANG_ = (function secretary$core$remove_route_BANG_(obj){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(secretary.core._STAR_routes_STAR_,(function (rs){
return cljs.core.filterv((function (p__14420){
var vec__14421 = p__14420;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14421,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14421,(1),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,obj);
}),rs);
}));
});
secretary.core.reset_routes_BANG_ = (function secretary$core$reset_routes_BANG_(){
var G__14424 = secretary.core._STAR_routes_STAR_;
var G__14425 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14424,G__14425) : cljs.core.reset_BANG_.call(null,G__14424,G__14425));
});
secretary.core.locate_route = (function secretary$core$locate_route(route){
return cljs.core.some((function (p__14429){
var vec__14430 = p__14429;
var compiled_route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14430,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14430,(1),null);
var temp__4425__auto__ = secretary.core.route_matches(compiled_route,route);
if(cljs.core.truth_(temp__4425__auto__)){
var params = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$action,action,cljs.core.constant$keyword$params,params,cljs.core.constant$keyword$route,compiled_route], null);
} else {
return null;
}
}),(function (){var G__14431 = secretary.core._STAR_routes_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14431) : cljs.core.deref.call(null,G__14431));
})());
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
var vec__14435 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(secretary.core.uri_without_prefix(uri),/\?/);
var uri_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14435,(0),null);
var query_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14435,(1),null);
var uri_path__$1 = secretary.core.uri_with_leading_slash(uri_path);
var query_params = (cljs.core.truth_(query_string)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$query_DASH_params,secretary.core.decode_query_params(query_string)], null):null);
var map__14436 = secretary.core.locate_route(uri_path__$1);
var map__14436__$1 = ((cljs.core.seq_QMARK_(map__14436))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14436):map__14436);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14436__$1,cljs.core.constant$keyword$action);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14436__$1,cljs.core.constant$keyword$params);
var action__$1 = (function (){var or__6810__auto__ = action;
if(cljs.core.truth_(or__6810__auto__)){
return or__6810__auto__;
} else {
return cljs.core.identity;
}
})();
var params__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params,query_params], 0));
var G__14437 = params__$1;
return (action__$1.cljs$core$IFn$_invoke$arity$1 ? action__$1.cljs$core$IFn$_invoke$arity$1(G__14437) : action__$1.call(null,G__14437));
});
secretary.core.invalid_params = (function secretary$core$invalid_params(params,validations){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__14440){
var vec__14441 = p__14440;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14441,(0),null);
var validation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14441,(1),null);
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
var vec__14445 = temp__4425__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14445,(0),null);
var ms = cljs.core.nthnext(vec__14445,(1));
return cljs.core.vec(ms);
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$ = true;

cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (p__14442,route){
var vec__14443 = p__14442;
var route_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14443,(0),null);
var validations = cljs.core.nthnext(vec__14443,(1));
var vec__14444 = this;
var route_string__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14444,(0),null);
var validations__$1 = cljs.core.nthnext(vec__14444,(1));
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

cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (p__14446){
var vec__14447 = p__14446;
var route_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14447,(0),null);
var validations = cljs.core.nthnext(vec__14447,(1));
var vec__14448 = this;
var route_string__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14448,(0),null);
var validations__$1 = cljs.core.nthnext(vec__14448,(1));
return cljs.core.vec(cljs.core.cons(secretary.core.route_value(route_string__$1),validations__$1));
});
(secretary.core.IRenderRoute["string"] = true);

(secretary.core.render_route["string"] = (function() {
var G__14455 = null;
var G__14455__1 = (function (this$){
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.PersistentArrayMap.EMPTY);
});
var G__14455__2 = (function (this$,params){
var map__14449 = params;
var map__14449__$1 = ((cljs.core.seq_QMARK_(map__14449))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14449):map__14449);
var m = map__14449__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14449__$1,cljs.core.constant$keyword$query_DASH_params);
var a = (function (){var G__14450 = m;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14450) : cljs.core.atom.call(null,G__14450));
})();
var path = this$.replace((new RegExp(":[^\\s.:*/]+|\\*[^\\s.:*/]*","g")),((function (map__14449,map__14449__$1,m,query_params,a){
return (function ($1){
var lookup = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($1,"*"))?$1:cljs.core.subs.cljs$core$IFn$_invoke$arity$2($1,(1))));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__14451 = a;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14451) : cljs.core.deref.call(null,G__14451));
})(),lookup);
var replacement = ((cljs.core.sequential_QMARK_(v))?(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc,lookup,cljs.core.next(v));

return secretary.core.encode_uri(cljs.core.first(v));
})()
:(cljs.core.truth_(v)?secretary.core.encode_uri(v):$1));
return replacement;
});})(map__14449,map__14449__$1,m,query_params,a))
);
var path__$1 = [cljs.core.str(secretary.core.get_config(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$prefix], null))),cljs.core.str(path)].join('');
var temp__4423__auto__ = (function (){var and__6798__auto__ = query_params;
if(cljs.core.truth_(and__6798__auto__)){
return secretary.core.encode_query_params(query_params);
} else {
return and__6798__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var query_string = temp__4423__auto__;
return [cljs.core.str(path__$1),cljs.core.str("?"),cljs.core.str(query_string)].join('');
} else {
return path__$1;
}
});
G__14455 = function(this$,params){
switch(arguments.length){
case 1:
return G__14455__1.call(this,this$);
case 2:
return G__14455__2.call(this,this$,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14455.cljs$core$IFn$_invoke$arity$1 = G__14455__1;
G__14455.cljs$core$IFn$_invoke$arity$2 = G__14455__2;
return G__14455;
})()
);

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$ = true;

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$1 = (function (this$){
var this$__$1 = this;
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$2 = (function (p__14452,params){
var vec__14453 = p__14452;
var route_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14453,(0),null);
var validations = cljs.core.nthnext(vec__14453,(1));
var vec__14454 = this;
var route_string__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14454,(0),null);
var validations__$1 = cljs.core.nthnext(vec__14454,(1));
var invalid = secretary.core.invalid_params(params,validations__$1);
if(cljs.core.empty_QMARK_(invalid)){
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(route_string__$1,params);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Could not build route: invalid params",invalid);
}
});