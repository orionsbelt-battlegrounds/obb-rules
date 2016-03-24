// Compiled by ClojureScript 1.7.228 {}
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
reagent.impl.util.cache_react_class = (function reagent$impl$util$cache_react_class(c,constructor$){
return (c["cljsReactClass"] = constructor$);
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
var vec__41613 = clojure.string.split.call(null,name_str,/-/);
var start = cljs.core.nth.call(null,vec__41613,(0),null);
var parts = cljs.core.nthnext.call(null,vec__41613,(1));
if(cljs.core.truth_(reagent.impl.util.dont_camel_case.call(null,start))){
return name_str;
} else {
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__41615__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__18370__auto___41616 = self__.p;
if(cljs.core.truth_(or__18370__auto___41616)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__41615 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__41617__i = 0, G__41617__a = new Array(arguments.length -  1);
while (G__41617__i < G__41617__a.length) {G__41617__a[G__41617__i] = arguments[G__41617__i + 1]; ++G__41617__i;}
  a = new cljs.core.IndexedSeq(G__41617__a,0);
} 
return G__41615__delegate.call(this,self__,a);};
G__41615.cljs$lang$maxFixedArity = 1;
G__41615.cljs$lang$applyTo = (function (arglist__41618){
var self__ = cljs.core.first(arglist__41618);
var a = cljs.core.rest(arglist__41618);
return G__41615__delegate(self__,a);
});
G__41615.cljs$core$IFn$_invoke$arity$variadic = G__41615__delegate;
return G__41615;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args41614){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args41614)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__41619__delegate = function (a){
var _ = this;
var or__18370__auto___41620 = self__.p;
if(cljs.core.truth_(or__18370__auto___41620)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__41619 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__41621__i = 0, G__41621__a = new Array(arguments.length -  0);
while (G__41621__i < G__41621__a.length) {G__41621__a[G__41621__i] = arguments[G__41621__i + 0]; ++G__41621__i;}
  a = new cljs.core.IndexedSeq(G__41621__a,0);
} 
return G__41619__delegate.call(this,a);};
G__41619.cljs$lang$maxFixedArity = 0;
G__41619.cljs$lang$applyTo = (function (arglist__41622){
var a = cljs.core.seq(arglist__41622);
return G__41619__delegate(a);
});
G__41619.cljs$core$IFn$_invoke$arity$variadic = G__41619__delegate;
return G__41619;
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),cljs.core.with_meta(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function reagent$impl$util$__GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.merge_class = (function reagent$impl$util$merge_class(p1,p2){
var class$ = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4657__auto__)){
var c1 = temp__4657__auto__;
var temp__4657__auto____$1 = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4657__auto____$1)){
var c2 = temp__4657__auto____$1;
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
var style = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4657__auto__)){
var s1 = temp__4657__auto__;
var temp__4657__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4657__auto____$1)){
var s2 = temp__4657__auto____$1;
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
var G__41624 = node;
if((G__41624 == null)){
return null;
} else {
return (G__41624["innerHTML"] = "");
}
});
reagent.impl.util.render_component = (function reagent$impl$util$render_component(comp,container,callback){
var rendered = cljs.core.volatile_BANG_.call(null,null);
try{var _STAR_always_update_STAR_41627 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return cljs.core.vreset_BANG_.call(null,rendered,(React["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_41627,rendered){
return (function (){
var _STAR_always_update_STAR_41628 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_41628;
}});})(_STAR_always_update_STAR_41627,rendered))
));
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_41627;
}}finally {if(cljs.core.truth_(cljs.core.deref.call(null,rendered))){
} else {
reagent.impl.util.clear_container.call(null,container);
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
var seq__41633_41637 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.impl.util.roots)));
var chunk__41634_41638 = null;
var count__41635_41639 = (0);
var i__41636_41640 = (0);
while(true){
if((i__41636_41640 < count__41635_41639)){
var v_41641 = cljs.core._nth.call(null,chunk__41634_41638,i__41636_41640);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_41641);

var G__41642 = seq__41633_41637;
var G__41643 = chunk__41634_41638;
var G__41644 = count__41635_41639;
var G__41645 = (i__41636_41640 + (1));
seq__41633_41637 = G__41642;
chunk__41634_41638 = G__41643;
count__41635_41639 = G__41644;
i__41636_41640 = G__41645;
continue;
} else {
var temp__4657__auto___41646 = cljs.core.seq.call(null,seq__41633_41637);
if(temp__4657__auto___41646){
var seq__41633_41647__$1 = temp__4657__auto___41646;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41633_41647__$1)){
var c__19173__auto___41648 = cljs.core.chunk_first.call(null,seq__41633_41647__$1);
var G__41649 = cljs.core.chunk_rest.call(null,seq__41633_41647__$1);
var G__41650 = c__19173__auto___41648;
var G__41651 = cljs.core.count.call(null,c__19173__auto___41648);
var G__41652 = (0);
seq__41633_41637 = G__41649;
chunk__41634_41638 = G__41650;
count__41635_41639 = G__41651;
i__41636_41640 = G__41652;
continue;
} else {
var v_41653 = cljs.core.first.call(null,seq__41633_41647__$1);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_41653);

var G__41654 = cljs.core.next.call(null,seq__41633_41647__$1);
var G__41655 = null;
var G__41656 = (0);
var G__41657 = (0);
seq__41633_41637 = G__41654;
chunk__41634_41638 = G__41655;
count__41635_41639 = G__41656;
i__41636_41640 = G__41657;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
reagent.impl.util.force_update = (function reagent$impl$util$force_update(comp,deep){
if(cljs.core.truth_(deep)){
var _STAR_always_update_STAR_41659 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (comp["forceUpdate"])();
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_41659;
}} else {
return (comp["forceUpdate"])();
}
});

//# sourceMappingURL=util.js.map?rel=1458852292309