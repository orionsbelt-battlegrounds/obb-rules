// Compiled by ClojureScript 0.0-3308 {}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('clojure.string');
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util.extract_props = (function reagent$impl$util$extract_props(v){
var p = cljs.core.nth.call(null,v,(1),null);
if(cljs.core.map_QMARK_.call(null,p)){
return p;
} else {
return null;
}
});
reagent.impl.util.extract_children = (function reagent$impl$util$extract_children(v){
var p = cljs.core.nth.call(null,v,(1),null);
var first_child = ((((p == null)) || (cljs.core.map_QMARK_.call(null,p)))?(2):(1));
if((cljs.core.count.call(null,v) > first_child)){
return cljs.core.subvec.call(null,v,first_child);
} else {
return null;
}
});
reagent.impl.util.get_argv = (function reagent$impl$util$get_argv(c){
return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function reagent$impl$util$get_props(c){
return reagent.impl.util.extract_props.call(null,(c["props"]["argv"]));
});
reagent.impl.util.get_children = (function reagent$impl$util$get_children(c){
return reagent.impl.util.extract_children.call(null,(c["props"]["argv"]));
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
var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (mem){
return (function (arg){
var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),arg);
if(!((v == null))){
return v;
} else {
var ret = f.call(null,arg);
cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function reagent$impl$util$capitalize(s){
if((cljs.core.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1)))),cljs.core.str(cljs.core.subs.call(null,s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function reagent$impl$util$dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var vec__23703 = clojure.string.split.call(null,name_str,/-/);
var start = cljs.core.nth.call(null,vec__23703,(0),null);
var parts = cljs.core.nthnext.call(null,vec__23703,(1));
if(cljs.core.truth_(reagent.impl.util.dont_camel_case.call(null,start))){
return name_str;
} else {
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
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
var G__23705__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__16109__auto___23706 = self__.p;
if(cljs.core.truth_(or__16109__auto___23706)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__23705 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__23707__i = 0, G__23707__a = new Array(arguments.length -  1);
while (G__23707__i < G__23707__a.length) {G__23707__a[G__23707__i] = arguments[G__23707__i + 1]; ++G__23707__i;}
  a = new cljs.core.IndexedSeq(G__23707__a,0);
} 
return G__23705__delegate.call(this,self__,a);};
G__23705.cljs$lang$maxFixedArity = 1;
G__23705.cljs$lang$applyTo = (function (arglist__23708){
var self__ = cljs.core.first(arglist__23708);
var a = cljs.core.rest(arglist__23708);
return G__23705__delegate(self__,a);
});
G__23705.cljs$core$IFn$_invoke$arity$variadic = G__23705__delegate;
return G__23705;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args23704){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args23704)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__23709__delegate = function (a){
var _ = this;
var or__16109__auto___23710 = self__.p;
if(cljs.core.truth_(or__16109__auto___23710)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__23709 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__23711__i = 0, G__23711__a = new Array(arguments.length -  0);
while (G__23711__i < G__23711__a.length) {G__23711__a[G__23711__i] = arguments[G__23711__i + 0]; ++G__23711__i;}
  a = new cljs.core.IndexedSeq(G__23711__a,0);
} 
return G__23709__delegate.call(this,a);};
G__23709.cljs$lang$maxFixedArity = 0;
G__23709.cljs$lang$applyTo = (function (arglist__23712){
var a = cljs.core.seq(arglist__23712);
return G__23709__delegate(a);
});
G__23709.cljs$core$IFn$_invoke$arity$variadic = G__23709__delegate;
return G__23709;
})()
;

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null);
});

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__16688__auto__,writer__16689__auto__,opt__16690__auto__){
return cljs.core._write.call(null,writer__16689__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function reagent$impl$util$__GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.merge_class = (function reagent$impl$util$merge_class(p1,p2){
var class$ = (function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4425__auto__)){
var c1 = temp__4425__auto__;
var temp__4425__auto____$1 = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);
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
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
}
});
reagent.impl.util.merge_style = (function reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4425__auto__)){
var s1 = temp__4425__auto__;
var temp__4425__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4425__auto____$1)){
var s2 = temp__4425__auto____$1;
return cljs.core.merge.call(null,s1,s2);
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
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
reagent.impl.util.merge_props = (function reagent$impl$util$merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_.call(null,p1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1","p1",703771573,null))))].join('')));
}

return reagent.impl.util.merge_style.call(null,p1,reagent.impl.util.merge_class.call(null,p1,cljs.core.merge.call(null,p1,p2)));
}
});
reagent.impl.util._STAR_always_update_STAR_ = false;
if(typeof reagent.impl.util.roots !== 'undefined'){
} else {
reagent.impl.util.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.impl.util.clear_container = (function reagent$impl$util$clear_container(node){
try{return (React["unmountComponentAtNode"])(node);
}catch (e23714){if((e23714 instanceof Object)){
var e = e23714;
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
throw e23714;

}
}});
reagent.impl.util.render_component = (function reagent$impl$util$render_component(comp,container,callback){
try{var _STAR_always_update_STAR_23719 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (React["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_23719){
return (function (){
var _STAR_always_update_STAR_23720 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_23720;
}});})(_STAR_always_update_STAR_23719))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_23719;
}}catch (e23718){if((e23718 instanceof Object)){
var e = e23718;
reagent.impl.util.clear_container.call(null,container);

throw e;
} else {
throw e23718;

}
}});
reagent.impl.util.re_render_component = (function reagent$impl$util$re_render_component(comp,container){
return reagent.impl.util.render_component.call(null,comp,container,null);
});
reagent.impl.util.unmount_component_at_node = (function reagent$impl$util$unmount_component_at_node(container){
cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.dissoc,container);

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function reagent$impl$util$force_update_all(){
var seq__23725_23729 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.impl.util.roots)));
var chunk__23726_23730 = null;
var count__23727_23731 = (0);
var i__23728_23732 = (0);
while(true){
if((i__23728_23732 < count__23727_23731)){
var v_23733 = cljs.core._nth.call(null,chunk__23726_23730,i__23728_23732);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_23733);

var G__23734 = seq__23725_23729;
var G__23735 = chunk__23726_23730;
var G__23736 = count__23727_23731;
var G__23737 = (i__23728_23732 + (1));
seq__23725_23729 = G__23734;
chunk__23726_23730 = G__23735;
count__23727_23731 = G__23736;
i__23728_23732 = G__23737;
continue;
} else {
var temp__4425__auto___23738 = cljs.core.seq.call(null,seq__23725_23729);
if(temp__4425__auto___23738){
var seq__23725_23739__$1 = temp__4425__auto___23738;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23725_23739__$1)){
var c__16894__auto___23740 = cljs.core.chunk_first.call(null,seq__23725_23739__$1);
var G__23741 = cljs.core.chunk_rest.call(null,seq__23725_23739__$1);
var G__23742 = c__16894__auto___23740;
var G__23743 = cljs.core.count.call(null,c__16894__auto___23740);
var G__23744 = (0);
seq__23725_23729 = G__23741;
chunk__23726_23730 = G__23742;
count__23727_23731 = G__23743;
i__23728_23732 = G__23744;
continue;
} else {
var v_23745 = cljs.core.first.call(null,seq__23725_23739__$1);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_23745);

var G__23746 = cljs.core.next.call(null,seq__23725_23739__$1);
var G__23747 = null;
var G__23748 = (0);
var G__23749 = (0);
seq__23725_23729 = G__23746;
chunk__23726_23730 = G__23747;
count__23727_23731 = G__23748;
i__23728_23732 = G__23749;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=util.js.map?rel=1436104826574