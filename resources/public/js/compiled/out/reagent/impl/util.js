// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('clojure.string');
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util.extract_props = (function reagent$impl$util$extract_props(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core.map_QMARK_(p)){
return p;
} else {
return null;
}
});
reagent.impl.util.extract_children = (function reagent$impl$util$extract_children(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
var first_child = ((((p == null)) || (cljs.core.map_QMARK_(p)))?(2):(1));
if((cljs.core.count(v) > first_child)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_child);
} else {
return null;
}
});
reagent.impl.util.get_argv = (function reagent$impl$util$get_argv(c){
return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function reagent$impl$util$get_props(c){
return reagent.impl.util.extract_props((c["props"]["argv"]));
});
reagent.impl.util.get_children = (function reagent$impl$util$get_children(c){
return reagent.impl.util.extract_children((c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent$impl$util$reagent_component_QMARK_(c){
return !(((c["props"]["argv"]) == null));
});
reagent.impl.util.cached_react_class = (function reagent$impl$util$cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function reagent$impl$util$cache_react_class(c,constructor){
return (c["cljsReactClass"] = constructor);
});
reagent.impl.util.memoize_1 = (function reagent$impl$util$memoize_1(f){
var mem = (function (){var G__14297 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14297) : cljs.core.atom.call(null,G__14297));
})();
return ((function (mem){
return (function (arg){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__14298 = mem;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14298) : cljs.core.deref.call(null,G__14298));
})(),arg);
if(!((v == null))){
return v;
} else {
var ret = (function (){var G__14299 = arg;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14299) : f.call(null,G__14299));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function reagent$impl$util$capitalize(s){
if((cljs.core.count(s) < (2))){
return clojure.string.upper_case(s);
} else {
return [cljs.core.str(clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)))),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function reagent$impl$util$dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name(dashed);
var vec__14302 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_str,/-/);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14302,(0),null);
var parts = cljs.core.nthnext(vec__14302,(1));
if(cljs.core.truth_((function (){var G__14303 = start;
return (reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1(G__14303) : reagent.impl.util.dont_camel_case.call(null,G__14303));
})())){
return name_str;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,start,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__14305__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__6821__auto___14306 = self__.p;
if(cljs.core.truth_(or__6821__auto___14306)){
} else {
self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__14305 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__14307__i = 0, G__14307__a = new Array(arguments.length -  1);
while (G__14307__i < G__14307__a.length) {G__14307__a[G__14307__i] = arguments[G__14307__i + 1]; ++G__14307__i;}
  a = new cljs.core.IndexedSeq(G__14307__a,0);
} 
return G__14305__delegate.call(this,self__,a);};
G__14305.cljs$lang$maxFixedArity = 1;
G__14305.cljs$lang$applyTo = (function (arglist__14308){
var self__ = cljs.core.first(arglist__14308);
var a = cljs.core.rest(arglist__14308);
return G__14305__delegate(self__,a);
});
G__14305.cljs$core$IFn$_invoke$arity$variadic = G__14305__delegate;
return G__14305;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args14304){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14304)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__14309__delegate = function (a){
var _ = this;
var or__6821__auto___14310 = self__.p;
if(cljs.core.truth_(or__6821__auto___14310)){
} else {
self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__14309 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__14311__i = 0, G__14311__a = new Array(arguments.length -  0);
while (G__14311__i < G__14311__a.length) {G__14311__a[G__14311__i] = arguments[G__14311__i + 0]; ++G__14311__i;}
  a = new cljs.core.IndexedSeq(G__14311__a,0);
} 
return G__14309__delegate.call(this,a);};
G__14309.cljs$lang$maxFixedArity = 0;
G__14309.cljs$lang$applyTo = (function (arglist__14312){
var a = cljs.core.seq(arglist__14312);
return G__14309__delegate(a);
});
G__14309.cljs$core$IFn$_invoke$arity$variadic = G__14309__delegate;
return G__14309;
})()
;

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null);
});

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__7400__auto__,writer__7401__auto__,opt__7402__auto__){
return cljs.core._write(writer__7401__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function reagent$impl$util$__GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.merge_class = (function reagent$impl$util$merge_class(p1,p2){
var class$ = (function (){var temp__4425__auto__ = cljs.core.constant$keyword$class.cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4425__auto__)){
var c1 = temp__4425__auto__;
var temp__4425__auto____$1 = cljs.core.constant$keyword$class.cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4425__auto____$1)){
var c2 = temp__4425__auto____$1;
return [cljs.core.str(c1),cljs.core.str(" "),cljs.core.str(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.constant$keyword$class,class$);
}
});
reagent.impl.util.merge_style = (function reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__4425__auto__ = cljs.core.constant$keyword$style.cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4425__auto__)){
var s1 = temp__4425__auto__;
var temp__4425__auto____$1 = cljs.core.constant$keyword$style.cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4425__auto____$1)){
var s2 = temp__4425__auto____$1;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s1,s2], 0));
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.constant$keyword$style,style);
}
});
reagent.impl.util.merge_props = (function reagent$impl$util$merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_(p1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1","p1",703771573,null))], 0)))].join('')));
}

return reagent.impl.util.merge_style(p1,reagent.impl.util.merge_class(p1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1,p2], 0))));
}
});
reagent.impl.util._STAR_always_update_STAR_ = false;
if(typeof reagent.impl.util.roots !== 'undefined'){
} else {
reagent.impl.util.roots = (function (){var G__14313 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14313) : cljs.core.atom.call(null,G__14313));
})();
}
reagent.impl.util.clear_container = (function reagent$impl$util$clear_container(node){
try{return (React["unmountComponentAtNode"])(node);
}catch (e14315){if((e14315 instanceof Object)){
var e = e14315;
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Error unmounting:")].join(''));
} else {
}

if(typeof console !== 'undefined'){
return console.log(e);
} else {
return null;
}
} else {
throw e14315;

}
}});
reagent.impl.util.render_component = (function reagent$impl$util$render_component(comp,container,callback){
try{var _STAR_always_update_STAR_14320 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (React["render"])((function (){return (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
})(),container,((function (_STAR_always_update_STAR_14320){
return (function (){
var _STAR_always_update_STAR_14321 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_14321;
}});})(_STAR_always_update_STAR_14320))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_14320;
}}catch (e14319){if((e14319 instanceof Object)){
var e = e14319;
reagent.impl.util.clear_container(container);

throw e;
} else {
throw e14319;

}
}});
reagent.impl.util.re_render_component = (function reagent$impl$util$re_render_component(comp,container){
return reagent.impl.util.render_component(comp,container,null);
});
reagent.impl.util.unmount_component_at_node = (function reagent$impl$util$unmount_component_at_node(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.impl.util.roots,cljs.core.dissoc,container);

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function reagent$impl$util$force_update_all(){
var seq__14327_14332 = cljs.core.seq(cljs.core.vals((function (){var G__14331 = reagent.impl.util.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14331) : cljs.core.deref.call(null,G__14331));
})()));
var chunk__14328_14333 = null;
var count__14329_14334 = (0);
var i__14330_14335 = (0);
while(true){
if((i__14330_14335 < count__14329_14334)){
var v_14336 = chunk__14328_14333.cljs$core$IIndexed$_nth$arity$2(null,i__14330_14335);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.re_render_component,v_14336);

var G__14337 = seq__14327_14332;
var G__14338 = chunk__14328_14333;
var G__14339 = count__14329_14334;
var G__14340 = (i__14330_14335 + (1));
seq__14327_14332 = G__14337;
chunk__14328_14333 = G__14338;
count__14329_14334 = G__14339;
i__14330_14335 = G__14340;
continue;
} else {
var temp__4425__auto___14341 = cljs.core.seq(seq__14327_14332);
if(temp__4425__auto___14341){
var seq__14327_14342__$1 = temp__4425__auto___14341;
if(cljs.core.chunked_seq_QMARK_(seq__14327_14342__$1)){
var c__7606__auto___14343 = cljs.core.chunk_first(seq__14327_14342__$1);
var G__14344 = cljs.core.chunk_rest(seq__14327_14342__$1);
var G__14345 = c__7606__auto___14343;
var G__14346 = cljs.core.count(c__7606__auto___14343);
var G__14347 = (0);
seq__14327_14332 = G__14344;
chunk__14328_14333 = G__14345;
count__14329_14334 = G__14346;
i__14330_14335 = G__14347;
continue;
} else {
var v_14348 = cljs.core.first(seq__14327_14342__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.re_render_component,v_14348);

var G__14349 = cljs.core.next(seq__14327_14342__$1);
var G__14350 = null;
var G__14351 = (0);
var G__14352 = (0);
seq__14327_14332 = G__14349;
chunk__14328_14333 = G__14350;
count__14329_14334 = G__14351;
i__14330_14335 = G__14352;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
