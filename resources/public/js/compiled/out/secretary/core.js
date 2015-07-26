// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('secretary.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');

secretary.core.IRouteMatches = (function (){var obj14356 = {};
return obj14356;
})();

secretary.core.route_matches = (function secretary$core$route_matches(this$,route){
if(cljs.core.truth_((function (){var and__6809__auto__ = this$;
if(cljs.core.truth_(and__6809__auto__)){
return this$.secretary$core$IRouteMatches$route_matches$arity$2;
} else {
return and__6809__auto__;
}
})())){
return this$.secretary$core$IRouteMatches$route_matches$arity$2(this$,route);
} else {
var x__7457__auto__ = (((this$ == null))?null:this$);
return (function (){var or__6821__auto__ = (secretary.core.route_matches[(function (){var G__14360 = x__7457__auto__;
return goog.typeOf(G__14360);
})()]);
if(cljs.core.truth_(or__6821__auto__)){
return or__6821__auto__;
} else {
var or__6821__auto____$1 = (secretary.core.route_matches["_"]);
if(cljs.core.truth_(or__6821__auto____$1)){
return or__6821__auto____$1;
} else {
throw cljs.core.missing_protocol("IRouteMatches.route-matches",this$);
}
}
})().call(null,this$,route);
}
});


secretary.core.IRouteValue = (function (){var obj14362 = {};
return obj14362;
})();

secretary.core.route_value = (function secretary$core$route_value(this$){
if(cljs.core.truth_((function (){var and__6809__auto__ = this$;
if(cljs.core.truth_(and__6809__auto__)){
return this$.secretary$core$IRouteValue$route_value$arity$1;
} else {
return and__6809__auto__;
}
})())){
return this$.secretary$core$IRouteValue$route_value$arity$1(this$);
} else {
var x__7457__auto__ = (((this$ == null))?null:this$);
return (function (){var or__6821__auto__ = (secretary.core.route_value[(function (){var G__14366 = x__7457__auto__;
return goog.typeOf(G__14366);
})()]);
if(cljs.core.truth_(or__6821__auto__)){
return or__6821__auto__;
} else {
var or__6821__auto____$1 = (secretary.core.route_value["_"]);
if(cljs.core.truth_(or__6821__auto____$1)){
return or__6821__auto____$1;
} else {
throw cljs.core.missing_protocol("IRouteValue.route-value",this$);
}
}
})().call(null,this$);
}
});


secretary.core.IRenderRoute = (function (){var obj14368 = {};
return obj14368;
})();

secretary.core.render_route = (function secretary$core$render_route(){
var G__14370 = arguments.length;
switch (G__14370) {
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
if(cljs.core.truth_((function (){var and__6809__auto__ = this$;
if(cljs.core.truth_(and__6809__auto__)){
return this$.secretary$core$IRenderRoute$render_route$arity$1;
} else {
return and__6809__auto__;
}
})())){
return this$.secretary$core$IRenderRoute$render_route$arity$1(this$);
} else {
var x__7457__auto__ = (((this$ == null))?null:this$);
return (function (){var or__6821__auto__ = (secretary.core.render_route[(function (){var G__14372 = x__7457__auto__;
return goog.typeOf(G__14372);
})()]);
if(cljs.core.truth_(or__6821__auto__)){
return or__6821__auto__;
} else {
var or__6821__auto____$1 = (secretary.core.render_route["_"]);
if(cljs.core.truth_(or__6821__auto____$1)){
return or__6821__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderRoute.render-route",this$);
}
}
})().call(null,this$);
}
});

secretary.core.render_route.cljs$core$IFn$_invoke$arity$2 = (function (this$,params){
if(cljs.core.truth_((function (){var and__6809__auto__ = this$;
if(cljs.core.truth_(and__6809__auto__)){
return this$.secretary$core$IRenderRoute$render_route$arity$2;
} else {
return and__6809__auto__;
}
})())){
return this$.secretary$core$IRenderRoute$render_route$arity$2(this$,params);
} else {
var x__7457__auto__ = (((this$ == null))?null:this$);
return (function (){var or__6821__auto__ = (secretary.core.render_route[(function (){var G__14374 = x__7457__auto__;
return goog.typeOf(G__14374);
})()]);
if(cljs.core.truth_(or__6821__auto__)){
return or__6821__auto__;
} else {
var or__6821__auto____$1 = (secretary.core.render_route["_"]);
if(cljs.core.truth_(or__6821__auto____$1)){
return or__6821__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderRoute.render-route",this$);
}
}
})().call(null,this$,params);
}
});

secretary.core.render_route.cljs$lang$maxFixedArity = 2;

secretary.core._STAR_config_STAR_ = (function (){var G__14376 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$prefix,""], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14376) : cljs.core.atom.call(null,G__14376));
})();
/**
 * Gets a value for *config* at path.
 */
secretary.core.get_config = (function secretary$core$get_config(path){
var path__$1 = ((cljs.core.sequential_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__14378 = secretary.core._STAR_config_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14378) : cljs.core.deref.call(null,G__14378));
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
secretary.core.encode_pair = (function (){var method_table__7716__auto__ = (function (){var G__14379 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14379) : cljs.core.atom.call(null,G__14379));
})();
var prefer_table__7717__auto__ = (function (){var G__14380 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14380) : cljs.core.atom.call(null,G__14380));
})();
var method_cache__7718__auto__ = (function (){var G__14381 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14381) : cljs.core.atom.call(null,G__14381));
})();
var cached_hierarchy__7719__auto__ = (function (){var G__14382 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14382) : cljs.core.atom.call(null,G__14382));
})();
var hierarchy__7720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("secretary.core","encode-pair"),((function (method_table__7716__auto__,prefer_table__7717__auto__,method_cache__7718__auto__,cached_hierarchy__7719__auto__,hierarchy__7720__auto__){
return (function (p__14383){
var vec__14384 = p__14383;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14384,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14384,(1),null);
if((cljs.core.sequential_QMARK_(v)) || (cljs.core.set_QMARK_(v))){
return cljs.core.constant$keyword$secretary$core_SLASH_sequential;
} else {
if((function (){var or__6821__auto__ = cljs.core.map_QMARK_(v);
if(or__6821__auto__){
return or__6821__auto__;
} else {
var G__14386 = v;
if(G__14386){
var bit__7495__auto__ = (G__14386.cljs$lang$protocol_mask$partition0$ & (67108864));
if((bit__7495__auto__) || (G__14386.cljs$core$IRecord$)){
return true;
} else {
if((!G__14386.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,G__14386);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,G__14386);
}
}
})()){
return cljs.core.constant$keyword$secretary$core_SLASH_map;
} else {
return null;
}
}
});})(method_table__7716__auto__,prefer_table__7717__auto__,method_cache__7718__auto__,cached_hierarchy__7719__auto__,hierarchy__7720__auto__))
,cljs.core.constant$keyword$default,hierarchy__7720__auto__,method_table__7716__auto__,prefer_table__7717__auto__,method_cache__7718__auto__,cached_hierarchy__7719__auto__));
})();
}
secretary.core.key_index = (function secretary$core$key_index(){
var G__14388 = arguments.length;
switch (G__14388) {
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
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$secretary$core_SLASH_sequential,(function (p__14390){
var vec__14391 = p__14390;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14391,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14391,(1),null);
var encoded = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__14391,k,v){
return (function (i,x){
var pair = ((cljs.core.coll_QMARK_(x))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$2(k,i),x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$1(k),x], null));
var G__14392 = pair;
return (secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1(G__14392) : secretary.core.encode_pair.call(null,G__14392));
});})(vec__14391,k,v))
,v);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",encoded);
}));
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$secretary$core_SLASH_map,(function (p__14393){
var vec__14394 = p__14393;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14394,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14394,(1),null);
var encoded = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14394,k,v){
return (function (p__14395){
var vec__14396 = p__14395;
var ik = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14396,(0),null);
var iv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14396,(1),null);
var G__14397 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$2(k,cljs.core.name(ik)),iv], null);
return (secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1(G__14397) : secretary.core.encode_pair.call(null,G__14397));
});})(vec__14394,k,v))
,v);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",encoded);
}));
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$default,(function (p__14398){
var vec__14399 = p__14398;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14399,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14399,(1),null);
return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str((function (){var G__14400 = [cljs.core.str(v)].join('');
return (secretary.core.encode.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode.cljs$core$IFn$_invoke$arity$1(G__14400) : secretary.core.encode.call(null,G__14400));
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
return (function (p__14404){
var vec__14405 = p__14404;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14405,(0),null);
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14405,(1),null);
if(cljs.core.empty_QMARK_(part)){
return (0);
} else {
if(cljs.core.truth_(cljs.core.re_matches(/\d+/,part))){
var G__14406 = part;
return parseInt(G__14406);
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
var vec__14408 = cljs.core.re_matches(re,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14408,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14408,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14408,(2),null);
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
var vec__14411 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(part,/=/,(2));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14411,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14411,(1),null);
return secretary.core.assoc_in_query_params(m,secretary.core.key_parse(k),(function (){var G__14412 = v;
return (secretary.core.decode.cljs$core$IFn$_invoke$arity$1 ? secretary.core.decode.cljs$core$IFn$_invoke$arity$1(G__14412) : secretary.core.decode.call(null,G__14412));
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
if(cljs.core.truth_((function (){var G__14414 = c;
return (secretary.core.re_escape_chars.cljs$core$IFn$_invoke$arity$1 ? secretary.core.re_escape_chars.cljs$core$IFn$_invoke$arity$1(G__14414) : secretary.core.re_escape_chars.call(null,G__14414));
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
return cljs.core.some((function (p__14419){
var vec__14420 = p__14419;
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14420,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14420,(1),null);
var temp__4425__auto__ = cljs.core.re_find(re,s);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__14421 = temp__4425__auto__;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14421,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14421,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,cljs.core.count(m)),(function (){var G__14422 = c;
return (action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(G__14422) : action.call(null,G__14422));
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
var vec__14425 = secretary.core.lex_STAR_(s__$1,clauses);
var s__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14425,(0),null);
var vec__14426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14425,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14426,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14426,(1),null);
var G__14427 = s__$2;
var G__14428 = [cljs.core.str(pattern),cljs.core.str(r)].join('');
var G__14429 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,p);
s__$1 = G__14427;
pattern = G__14428;
params = G__14429;
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
var vec__14435 = secretary.core.lex_route(orig_route,clauses);
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14435,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14435,(1),null);
if(typeof secretary.core.t14436 !== 'undefined'){
} else {

/**
* @constructor
*/
secretary.core.t14436 = (function (compile_route,orig_route,clauses,vec__14435,re,params,meta14437){
this.compile_route = compile_route;
this.orig_route = orig_route;
this.clauses = clauses;
this.vec__14435 = vec__14435;
this.re = re;
this.params = params;
this.meta14437 = meta14437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
secretary.core.t14436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (clauses,vec__14435,re,params){
return (function (_14438,meta14437__$1){
var self__ = this;
var _14438__$1 = this;
return (new secretary.core.t14436(self__.compile_route,self__.orig_route,self__.clauses,self__.vec__14435,self__.re,self__.params,meta14437__$1));
});})(clauses,vec__14435,re,params))
;

secretary.core.t14436.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (clauses,vec__14435,re,params){
return (function (_14438){
var self__ = this;
var _14438__$1 = this;
return self__.meta14437;
});})(clauses,vec__14435,re,params))
;

secretary.core.t14436.prototype.secretary$core$IRouteValue$ = true;

secretary.core.t14436.prototype.secretary$core$IRouteValue$route_value$arity$1 = ((function (clauses,vec__14435,re,params){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.orig_route;
});})(clauses,vec__14435,re,params))
;

secretary.core.t14436.prototype.secretary$core$IRouteMatches$ = true;

secretary.core.t14436.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = ((function (clauses,vec__14435,re,params){
return (function (_,route){
var self__ = this;
var ___$1 = this;
var temp__4425__auto__ = secretary.core.re_matches_STAR_(self__.re,route);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__14439 = temp__4425__auto__;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14439,(0),null);
var ms = cljs.core.nthnext(vec__14439,(1));
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(self__.params,cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.decode,ms)))], 0));
} else {
return null;
}
});})(clauses,vec__14435,re,params))
;

secretary.core.t14436.getBasis = ((function (clauses,vec__14435,re,params){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"compile-route","compile-route",-1479918120,null),new cljs.core.Symbol(null,"orig-route","orig-route",899103121,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null),new cljs.core.Symbol(null,"vec__14435","vec__14435",-1195274847,null),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"meta14437","meta14437",-1627874931,null)], null);
});})(clauses,vec__14435,re,params))
;

secretary.core.t14436.cljs$lang$type = true;

secretary.core.t14436.cljs$lang$ctorStr = "secretary.core/t14436";

secretary.core.t14436.cljs$lang$ctorPrWriter = ((function (clauses,vec__14435,re,params){
return (function (this__7400__auto__,writer__7401__auto__,opt__7402__auto__){
return cljs.core._write(writer__7401__auto__,"secretary.core/t14436");
});})(clauses,vec__14435,re,params))
;

secretary.core.__GT_t14436 = ((function (clauses,vec__14435,re,params){
return (function secretary$core$compile_route_$___GT_t14436(compile_route__$1,orig_route__$1,clauses__$1,vec__14435__$1,re__$1,params__$1,meta14437){
return (new secretary.core.t14436(compile_route__$1,orig_route__$1,clauses__$1,vec__14435__$1,re__$1,params__$1,meta14437));
});})(clauses,vec__14435,re,params))
;

}

return (new secretary.core.t14436(secretary$core$compile_route,orig_route,clauses,vec__14435,re,params,cljs.core.PersistentArrayMap.EMPTY));
});
secretary.core.render_route_STAR_ = (function secretary$core$render_route_STAR_(){
var argseq__7861__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7861__auto__);
});

secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,args){
if((function (){var G__14442 = obj;
if(G__14442){
var bit__7495__auto__ = null;
if(cljs.core.truth_((function (){var or__6821__auto__ = bit__7495__auto__;
if(cljs.core.truth_(or__6821__auto__)){
return or__6821__auto__;
} else {
return G__14442.secretary$core$IRenderRoute$;
}
})())){
return true;
} else {
if((!G__14442.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(secretary.core.IRenderRoute,G__14442);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(secretary.core.IRenderRoute,G__14442);
}
})()){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route,obj,args);
} else {
return null;
}
});

secretary.core.render_route_STAR_.cljs$lang$maxFixedArity = (1);

secretary.core.render_route_STAR_.cljs$lang$applyTo = (function (seq14440){
var G__14441 = cljs.core.first(seq14440);
var seq14440__$1 = cljs.core.next(seq14440);
return secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__14441,seq14440__$1);
});
secretary.core._STAR_routes_STAR_ = (function (){var G__14443 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14443) : cljs.core.atom.call(null,G__14443));
})();
secretary.core.add_route_BANG_ = (function secretary$core$add_route_BANG_(obj,action){
var obj__$1 = ((typeof obj === 'string')?secretary.core.compile_route(obj):obj);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(secretary.core._STAR_routes_STAR_,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj__$1,action], null));
});
secretary.core.remove_route_BANG_ = (function secretary$core$remove_route_BANG_(obj){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(secretary.core._STAR_routes_STAR_,(function (rs){
return cljs.core.filterv((function (p__14446){
var vec__14447 = p__14446;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14447,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14447,(1),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,obj);
}),rs);
}));
});
secretary.core.reset_routes_BANG_ = (function secretary$core$reset_routes_BANG_(){
var G__14450 = secretary.core._STAR_routes_STAR_;
var G__14451 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14450,G__14451) : cljs.core.reset_BANG_.call(null,G__14450,G__14451));
});
secretary.core.locate_route = (function secretary$core$locate_route(route){
return cljs.core.some((function (p__14455){
var vec__14456 = p__14455;
var compiled_route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14456,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14456,(1),null);
var temp__4425__auto__ = secretary.core.route_matches(compiled_route,route);
if(cljs.core.truth_(temp__4425__auto__)){
var params = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$action,action,cljs.core.constant$keyword$params,params,cljs.core.constant$keyword$route,compiled_route], null);
} else {
return null;
}
}),(function (){var G__14457 = secretary.core._STAR_routes_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14457) : cljs.core.deref.call(null,G__14457));
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
var vec__14461 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(secretary.core.uri_without_prefix(uri),/\?/);
var uri_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14461,(0),null);
var query_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14461,(1),null);
var uri_path__$1 = secretary.core.uri_with_leading_slash(uri_path);
var query_params = (cljs.core.truth_(query_string)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$query_DASH_params,secretary.core.decode_query_params(query_string)], null):null);
var map__14462 = secretary.core.locate_route(uri_path__$1);
var map__14462__$1 = ((cljs.core.seq_QMARK_(map__14462))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14462):map__14462);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14462__$1,cljs.core.constant$keyword$action);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14462__$1,cljs.core.constant$keyword$params);
var action__$1 = (function (){var or__6821__auto__ = action;
if(cljs.core.truth_(or__6821__auto__)){
return or__6821__auto__;
} else {
return cljs.core.identity;
}
})();
var params__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params,query_params], 0));
var G__14463 = params__$1;
return (action__$1.cljs$core$IFn$_invoke$arity$1 ? action__$1.cljs$core$IFn$_invoke$arity$1(G__14463) : action__$1.call(null,G__14463));
});
secretary.core.invalid_params = (function secretary$core$invalid_params(params,validations){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__14466){
var vec__14467 = p__14466;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14467,(0),null);
var validation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14467,(1),null);
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
var vec__14471 = temp__4425__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14471,(0),null);
var ms = cljs.core.nthnext(vec__14471,(1));
return cljs.core.vec(ms);
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$ = true;

cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (p__14468,route){
var vec__14469 = p__14468;
var route_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14469,(0),null);
var validations = cljs.core.nthnext(vec__14469,(1));
var vec__14470 = this;
var route_string__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14470,(0),null);
var validations__$1 = cljs.core.nthnext(vec__14470,(1));
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

cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (p__14472){
var vec__14473 = p__14472;
var route_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14473,(0),null);
var validations = cljs.core.nthnext(vec__14473,(1));
var vec__14474 = this;
var route_string__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14474,(0),null);
var validations__$1 = cljs.core.nthnext(vec__14474,(1));
return cljs.core.vec(cljs.core.cons(secretary.core.route_value(route_string__$1),validations__$1));
});
(secretary.core.IRenderRoute["string"] = true);

(secretary.core.render_route["string"] = (function() {
var G__14481 = null;
var G__14481__1 = (function (this$){
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.PersistentArrayMap.EMPTY);
});
var G__14481__2 = (function (this$,params){
var map__14475 = params;
var map__14475__$1 = ((cljs.core.seq_QMARK_(map__14475))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14475):map__14475);
var m = map__14475__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14475__$1,cljs.core.constant$keyword$query_DASH_params);
var a = (function (){var G__14476 = m;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14476) : cljs.core.atom.call(null,G__14476));
})();
var path = this$.replace((new RegExp(":[^\\s.:*/]+|\\*[^\\s.:*/]*","g")),((function (map__14475,map__14475__$1,m,query_params,a){
return (function ($1){
var lookup = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($1,"*"))?$1:cljs.core.subs.cljs$core$IFn$_invoke$arity$2($1,(1))));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__14477 = a;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14477) : cljs.core.deref.call(null,G__14477));
})(),lookup);
var replacement = ((cljs.core.sequential_QMARK_(v))?(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc,lookup,cljs.core.next(v));

return secretary.core.encode_uri(cljs.core.first(v));
})()
:(cljs.core.truth_(v)?secretary.core.encode_uri(v):$1));
return replacement;
});})(map__14475,map__14475__$1,m,query_params,a))
);
var path__$1 = [cljs.core.str(secretary.core.get_config(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$prefix], null))),cljs.core.str(path)].join('');
var temp__4423__auto__ = (function (){var and__6809__auto__ = query_params;
if(cljs.core.truth_(and__6809__auto__)){
return secretary.core.encode_query_params(query_params);
} else {
return and__6809__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var query_string = temp__4423__auto__;
return [cljs.core.str(path__$1),cljs.core.str("?"),cljs.core.str(query_string)].join('');
} else {
return path__$1;
}
});
G__14481 = function(this$,params){
switch(arguments.length){
case 1:
return G__14481__1.call(this,this$);
case 2:
return G__14481__2.call(this,this$,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14481.cljs$core$IFn$_invoke$arity$1 = G__14481__1;
G__14481.cljs$core$IFn$_invoke$arity$2 = G__14481__2;
return G__14481;
})()
);

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$ = true;

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$1 = (function (this$){
var this$__$1 = this;
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$2 = (function (p__14478,params){
var vec__14479 = p__14478;
var route_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14479,(0),null);
var validations = cljs.core.nthnext(vec__14479,(1));
var vec__14480 = this;
var route_string__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14480,(0),null);
var validations__$1 = cljs.core.nthnext(vec__14480,(1));
var invalid = secretary.core.invalid_params(params,validations__$1);
if(cljs.core.empty_QMARK_(invalid)){
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(route_string__$1,params);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Could not build route: invalid params",invalid);
}
});