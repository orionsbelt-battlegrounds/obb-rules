// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
if(typeof reagent.ratom.debug !== 'undefined'){
} else {
reagent.ratom.debug = false;
}
if(typeof reagent.ratom._running !== 'undefined'){
} else {
reagent.ratom._running = (function (){var G__14062 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14062) : cljs.core.atom.call(null,G__14062));
})();
}
reagent.ratom.running = (function reagent$ratom$running(){
var G__14064 = reagent.ratom._running;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14064) : cljs.core.deref.call(null,G__14064));
});
reagent.ratom.capture_derefed = (function reagent$ratom$capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_14066 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_14066;
}});
reagent.ratom.captured = (function reagent$ratom$captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function reagent$ratom$notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

reagent.ratom.IReactiveAtom = (function (){var obj14068 = {};
return obj14068;
})();


/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,"#<Atom: ");

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__14069 = this$__$1;
return goog.getUid(G__14069);
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_((function (){var G__14070 = new_value;
return (self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(G__14070) : self__.validator.call(null,G__14070));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))], 0)))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches(a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__14071 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14071) : f.call(null,G__14071));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__14072 = self__.state;
var G__14073 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14072,G__14073) : f.call(null,G__14072,G__14073));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__14074 = self__.state;
var G__14075 = x;
var G__14076 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14074,G__14075,G__14076) : f.call(null,G__14074,G__14075,G__14076));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
var G__14077_14081 = key;
var G__14078_14082 = this$__$1;
var G__14079_14083 = oldval;
var G__14080_14084 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__14077_14081,G__14078_14082,G__14079_14083,G__14080_14084) : f.call(null,G__14077_14081,G__14078_14082,G__14079_14083,G__14080_14084));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

return self__.state;
});

reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null)], null);
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__7389__auto__,writer__7390__auto__,opt__7391__auto__){
return cljs.core._write(writer__7390__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
reagent.ratom.atom = (function reagent$ratom$atom(){
var G__14088 = arguments.length;
switch (G__14088) {
case 1:
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__7861__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7861__auto__);

}
});

reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});

reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__14089){
var map__14090 = p__14089;
var map__14090__$1 = ((cljs.core.seq_QMARK_(map__14090))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14090):map__14090);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14090__$1,cljs.core.constant$keyword$meta);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14090__$1,cljs.core.constant$keyword$validator);
return (new reagent.ratom.RAtom(x,meta,validator,null));
});

reagent.ratom.atom.cljs$lang$applyTo = (function (seq14085){
var G__14086 = cljs.core.first(seq14085);
var seq14085__$1 = cljs.core.next(seq14085);
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic(G__14086,seq14085__$1);
});

reagent.ratom.atom.cljs$lang$maxFixedArity = (1);

/**
* @constructor
*/
reagent.ratom.RCursor = (function (ratom,path,reaction){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype._reaction = (function (){
var self__ = this;
var this$ = this;
if((self__.reaction == null)){
return self__.reaction = (((function (){var G__14098 = self__.ratom;
if(G__14098){
var bit__7484__auto__ = (G__14098.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__7484__auto__) || (G__14098.cljs$core$IDeref$)){
return true;
} else {
if((!G__14098.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__14098);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__14098);
}
})())?(function (){var G__14099 = ((function (this$){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__14102 = self__.ratom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14102) : cljs.core.deref.call(null,G__14102));
})(),self__.path);
});})(this$))
;
var G__14100 = cljs.core.constant$keyword$on_DASH_set;
var G__14101 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,cljs.core.PersistentVector.EMPTY))?((function (G__14099,G__14100,this$){
return (function (p1__14093_SHARP_,p2__14092_SHARP_){
var G__14103 = self__.ratom;
var G__14104 = p2__14092_SHARP_;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14103,G__14104) : cljs.core.reset_BANG_.call(null,G__14103,G__14104));
});})(G__14099,G__14100,this$))
:((function (G__14099,G__14100,this$){
return (function (p1__14095_SHARP_,p2__14094_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,p2__14094_SHARP_);
});})(G__14099,G__14100,this$))
);
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__14099,G__14100,G__14101) : reagent.ratom.make_reaction.call(null,G__14099,G__14100,G__14101));
})():(function (){var G__14105 = ((function (this$){
return (function (){
var G__14108 = self__.path;
return (self__.ratom.cljs$core$IFn$_invoke$arity$1 ? self__.ratom.cljs$core$IFn$_invoke$arity$1(G__14108) : self__.ratom.call(null,G__14108));
});})(this$))
;
var G__14106 = cljs.core.constant$keyword$on_DASH_set;
var G__14107 = ((function (G__14105,G__14106,this$){
return (function (p1__14097_SHARP_,p2__14096_SHARP_){
var G__14109 = self__.path;
var G__14110 = p2__14096_SHARP_;
return (self__.ratom.cljs$core$IFn$_invoke$arity$2 ? self__.ratom.cljs$core$IFn$_invoke$arity$2(G__14109,G__14110) : self__.ratom.call(null,G__14109,G__14110));
});})(G__14105,G__14106,this$))
;
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__14105,G__14106,G__14107) : reagent.ratom.make_reaction.call(null,G__14105,G__14106,G__14107));
})());
} else {
return self__.reaction;
}
});

reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_14111 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(this$._reaction());
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_14111;
}});

reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,[cljs.core.str("#<Cursor: "),cljs.core.str(self__.path),cljs.core.str(" ")].join(''));

cljs.core.pr_writer(a__$1._peek(),writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,other.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.ratom,other.ratom));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1._reaction(),new_value);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$2(a__$1._reaction(),f);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$3(a__$1._reaction(),f,x);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$4(a__$1._reaction(),f,x,y);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$5(a__$1._reaction(),f,x,y,more);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches(this$__$1._reaction(),oldval,newval);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch(this$__$1._reaction(),key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch(this$__$1._reaction(),key);
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._deref(this$__$1._reaction());
});

reagent.ratom.RCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ratom","ratom",1514010260,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reaction","reaction",2131401315,null)], null);
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__7389__auto__,writer__7390__auto__,opt__7391__auto__){
return cljs.core._write(writer__7390__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function reagent$ratom$__GT_RCursor(ratom,path,reaction){
return (new reagent.ratom.RCursor(ratom,path,reaction));
});

reagent.ratom.cursor = (function reagent$ratom$cursor(src,path){
if((function (){var G__14116 = path;
if(G__14116){
var bit__7484__auto__ = (G__14116.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__7484__auto__) || (G__14116.cljs$core$IDeref$)){
return true;
} else {
if((!G__14116.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__14116);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__14116);
}
})()){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Calling cursor with an atom as the second arg is "),cljs.core.str("deprecated, in (cursor "),cljs.core.str(src),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0))),cljs.core.str(")")].join(''));
} else {
}

if((function (){var G__14117 = path;
if(G__14117){
var bit__7484__auto__ = null;
if(cljs.core.truth_((function (){var or__6810__auto__ = bit__7484__auto__;
if(cljs.core.truth_(or__6810__auto__)){
return or__6810__auto__;
} else {
return G__14117.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__14117.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__14117);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__14117);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom, not "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"path","path",1452340359,null))], 0)))].join('')));
}

return (new reagent.ratom.RCursor(path,src,null));
} else {
if((function (){var or__6810__auto__ = (function (){var G__14119 = src;
if(G__14119){
var bit__7484__auto__ = null;
if(cljs.core.truth_((function (){var or__6810__auto__ = bit__7484__auto__;
if(cljs.core.truth_(or__6810__auto__)){
return or__6810__auto__;
} else {
return G__14119.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__14119.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__14119);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__14119);
}
})();
if(or__6810__auto__){
return or__6810__auto__;
} else {
return (cljs.core.ifn_QMARK_(src)) && (!(cljs.core.vector_QMARK_(src)));
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom or a function, not "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"src","src",-10544524,null)))))], 0)))].join('')));
}

return (new reagent.ratom.RCursor(src,path,null));
}
});

reagent.ratom.IDisposable = (function (){var obj14121 = {};
return obj14121;
})();

reagent.ratom.dispose_BANG_ = (function reagent$ratom$dispose_BANG_(this$){
if(cljs.core.truth_((function (){var and__6798__auto__ = this$;
if(cljs.core.truth_(and__6798__auto__)){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__6798__auto__;
}
})())){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__7446__auto__ = (((this$ == null))?null:this$);
return (function (){var or__6810__auto__ = (reagent.ratom.dispose_BANG_[(function (){var G__14125 = x__7446__auto__;
return goog.typeOf(G__14125);
})()]);
if(cljs.core.truth_(or__6810__auto__)){
return or__6810__auto__;
} else {
var or__6810__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(cljs.core.truth_(or__6810__auto____$1)){
return or__6810__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj14127 = {};
return obj14127;
})();

reagent.ratom.run = (function reagent$ratom$run(this$){
if(cljs.core.truth_((function (){var and__6798__auto__ = this$;
if(cljs.core.truth_(and__6798__auto__)){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__6798__auto__;
}
})())){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__7446__auto__ = (((this$ == null))?null:this$);
return (function (){var or__6810__auto__ = (reagent.ratom.run[(function (){var G__14131 = x__7446__auto__;
return goog.typeOf(G__14131);
})()]);
if(cljs.core.truth_(or__6810__auto__)){
return or__6810__auto__;
} else {
var or__6810__auto____$1 = (reagent.ratom.run["_"]);
if(cljs.core.truth_(or__6810__auto____$1)){
return or__6810__auto____$1;
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj14133 = {};
return obj14133;
})();

reagent.ratom._update_watching = (function reagent$ratom$_update_watching(this$,derefed){
if(cljs.core.truth_((function (){var and__6798__auto__ = this$;
if(cljs.core.truth_(and__6798__auto__)){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__6798__auto__;
}
})())){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__7446__auto__ = (((this$ == null))?null:this$);
return (function (){var or__6810__auto__ = (reagent.ratom._update_watching[(function (){var G__14137 = x__7446__auto__;
return goog.typeOf(G__14137);
})()]);
if(cljs.core.truth_(or__6810__auto__)){
return or__6810__auto__;
} else {
var or__6810__auto____$1 = (reagent.ratom._update_watching["_"]);
if(cljs.core.truth_(or__6810__auto____$1)){
return or__6810__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function reagent$ratom$_handle_change(k,sender,oldval,newval){
if(cljs.core.truth_((function (){var and__6798__auto__ = k;
if(cljs.core.truth_(and__6798__auto__)){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__6798__auto__;
}
})())){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__7446__auto__ = (((k == null))?null:k);
return (function (){var or__6810__auto__ = (reagent.ratom._handle_change[(function (){var G__14141 = x__7446__auto__;
return goog.typeOf(G__14141);
})()]);
if(cljs.core.truth_(or__6810__auto__)){
return or__6810__auto__;
} else {
var or__6810__auto____$1 = (reagent.ratom._handle_change["_"]);
if(cljs.core.truth_(or__6810__auto____$1)){
return or__6810__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom._peek_at = (function reagent$ratom$_peek_at(this$){
if(cljs.core.truth_((function (){var and__6798__auto__ = this$;
if(cljs.core.truth_(and__6798__auto__)){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1;
} else {
return and__6798__auto__;
}
})())){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1(this$);
} else {
var x__7446__auto__ = (((this$ == null))?null:this$);
return (function (){var or__6810__auto__ = (reagent.ratom._peek_at[(function (){var G__14145 = x__7446__auto__;
return goog.typeOf(G__14145);
})()]);
if(cljs.core.truth_(or__6810__auto__)){
return or__6810__auto__;
} else {
var or__6810__auto____$1 = (reagent.ratom._peek_at["_"]);
if(cljs.core.truth_(or__6810__auto____$1)){
return or__6810__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-peek-at",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__6798__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__6798__auto__)){
return (cljs.core.not(self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__6798__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__6810__auto__ = self__.auto_run;
if(cljs.core.truth_(or__6810__auto__)){
return or__6810__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__14146_14172 = cljs.core.seq(derefed);
var chunk__14147_14173 = null;
var count__14148_14174 = (0);
var i__14149_14175 = (0);
while(true){
if((i__14149_14175 < count__14148_14174)){
var w_14176 = chunk__14147_14173.cljs$core$IIndexed$_nth$arity$2(null,i__14149_14175);
if(cljs.core.contains_QMARK_(self__.watching,w_14176)){
} else {
cljs.core.add_watch(w_14176,this$__$1,reagent.ratom._handle_change);
}

var G__14177 = seq__14146_14172;
var G__14178 = chunk__14147_14173;
var G__14179 = count__14148_14174;
var G__14180 = (i__14149_14175 + (1));
seq__14146_14172 = G__14177;
chunk__14147_14173 = G__14178;
count__14148_14174 = G__14179;
i__14149_14175 = G__14180;
continue;
} else {
var temp__4425__auto___14181 = cljs.core.seq(seq__14146_14172);
if(temp__4425__auto___14181){
var seq__14146_14182__$1 = temp__4425__auto___14181;
if(cljs.core.chunked_seq_QMARK_(seq__14146_14182__$1)){
var c__7595__auto___14183 = cljs.core.chunk_first(seq__14146_14182__$1);
var G__14184 = cljs.core.chunk_rest(seq__14146_14182__$1);
var G__14185 = c__7595__auto___14183;
var G__14186 = cljs.core.count(c__7595__auto___14183);
var G__14187 = (0);
seq__14146_14172 = G__14184;
chunk__14147_14173 = G__14185;
count__14148_14174 = G__14186;
i__14149_14175 = G__14187;
continue;
} else {
var w_14188 = cljs.core.first(seq__14146_14182__$1);
if(cljs.core.contains_QMARK_(self__.watching,w_14188)){
} else {
cljs.core.add_watch(w_14188,this$__$1,reagent.ratom._handle_change);
}

var G__14189 = cljs.core.next(seq__14146_14182__$1);
var G__14190 = null;
var G__14191 = (0);
var G__14192 = (0);
seq__14146_14172 = G__14189;
chunk__14147_14173 = G__14190;
count__14148_14174 = G__14191;
i__14149_14175 = G__14192;
continue;
}
} else {
}
}
break;
}

var seq__14150_14193 = cljs.core.seq(self__.watching);
var chunk__14151_14194 = null;
var count__14152_14195 = (0);
var i__14153_14196 = (0);
while(true){
if((i__14153_14196 < count__14152_14195)){
var w_14197 = chunk__14151_14194.cljs$core$IIndexed$_nth$arity$2(null,i__14153_14196);
if(cljs.core.contains_QMARK_(derefed,w_14197)){
} else {
cljs.core.remove_watch(w_14197,this$__$1);
}

var G__14198 = seq__14150_14193;
var G__14199 = chunk__14151_14194;
var G__14200 = count__14152_14195;
var G__14201 = (i__14153_14196 + (1));
seq__14150_14193 = G__14198;
chunk__14151_14194 = G__14199;
count__14152_14195 = G__14200;
i__14153_14196 = G__14201;
continue;
} else {
var temp__4425__auto___14202 = cljs.core.seq(seq__14150_14193);
if(temp__4425__auto___14202){
var seq__14150_14203__$1 = temp__4425__auto___14202;
if(cljs.core.chunked_seq_QMARK_(seq__14150_14203__$1)){
var c__7595__auto___14204 = cljs.core.chunk_first(seq__14150_14203__$1);
var G__14205 = cljs.core.chunk_rest(seq__14150_14203__$1);
var G__14206 = c__7595__auto___14204;
var G__14207 = cljs.core.count(c__7595__auto___14204);
var G__14208 = (0);
seq__14150_14193 = G__14205;
chunk__14151_14194 = G__14206;
count__14152_14195 = G__14207;
i__14153_14196 = G__14208;
continue;
} else {
var w_14209 = cljs.core.first(seq__14150_14203__$1);
if(cljs.core.contains_QMARK_(derefed,w_14209)){
} else {
cljs.core.remove_watch(w_14209,this$__$1);
}

var G__14210 = cljs.core.next(seq__14150_14203__$1);
var G__14211 = null;
var G__14212 = (0);
var G__14213 = (0);
seq__14150_14193 = G__14210;
chunk__14151_14194 = G__14211;
count__14152_14195 = G__14212;
i__14153_14196 = G__14213;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_peek_at$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not(self__.dirty_QMARK_)){
return self__.state;
} else {
var _STAR_ratom_context_STAR_14154 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(this$__$1);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_14154;
}}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write(writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash(this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__14155 = this$__$1;
return goog.getUid(G__14155);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__14156_14214 = cljs.core.seq(self__.watching);
var chunk__14157_14215 = null;
var count__14158_14216 = (0);
var i__14159_14217 = (0);
while(true){
if((i__14159_14217 < count__14158_14216)){
var w_14218 = chunk__14157_14215.cljs$core$IIndexed$_nth$arity$2(null,i__14159_14217);
cljs.core.remove_watch(w_14218,this$__$1);

var G__14219 = seq__14156_14214;
var G__14220 = chunk__14157_14215;
var G__14221 = count__14158_14216;
var G__14222 = (i__14159_14217 + (1));
seq__14156_14214 = G__14219;
chunk__14157_14215 = G__14220;
count__14158_14216 = G__14221;
i__14159_14217 = G__14222;
continue;
} else {
var temp__4425__auto___14223 = cljs.core.seq(seq__14156_14214);
if(temp__4425__auto___14223){
var seq__14156_14224__$1 = temp__4425__auto___14223;
if(cljs.core.chunked_seq_QMARK_(seq__14156_14224__$1)){
var c__7595__auto___14225 = cljs.core.chunk_first(seq__14156_14224__$1);
var G__14226 = cljs.core.chunk_rest(seq__14156_14224__$1);
var G__14227 = c__7595__auto___14225;
var G__14228 = cljs.core.count(c__7595__auto___14225);
var G__14229 = (0);
seq__14156_14214 = G__14226;
chunk__14157_14215 = G__14227;
count__14158_14216 = G__14228;
i__14159_14217 = G__14229;
continue;
} else {
var w_14230 = cljs.core.first(seq__14156_14224__$1);
cljs.core.remove_watch(w_14230,this$__$1);

var G__14231 = cljs.core.next(seq__14156_14224__$1);
var G__14232 = null;
var G__14233 = (0);
var G__14234 = (0);
seq__14156_14214 = G__14231;
chunk__14157_14215 = G__14232;
count__14158_14216 = G__14233;
i__14159_14217 = G__14234;
continue;
}
} else {
}
}
break;
}

self__.watching = null;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return (self__.on_dispose.cljs$core$IFn$_invoke$arity$0 ? self__.on_dispose.cljs$core$IFn$_invoke$arity$0() : self__.on_dispose.call(null));
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
var oldval = self__.state;
self__.state = newval;

if(cljs.core.truth_(self__.on_set)){
self__.dirty_QMARK_ = true;

var G__14160_14235 = oldval;
var G__14161_14236 = newval;
(self__.on_set.cljs$core$IFn$_invoke$arity$2 ? self__.on_set.cljs$core$IFn$_invoke$arity$2(G__14160_14235,G__14161_14236) : self__.on_set.call(null,G__14160_14235,G__14161_14236));
} else {
}

cljs.core._notify_watches(a__$1,oldval,newval);

return newval;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__14162 = reagent.ratom._peek_at(a__$1);
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__14162) : f__$1.call(null,G__14162));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__14163 = reagent.ratom._peek_at(a__$1);
var G__14164 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__14163,G__14164) : f__$1.call(null,G__14163,G__14164));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__14165 = reagent.ratom._peek_at(a__$1);
var G__14166 = x;
var G__14167 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__14165,G__14166,G__14167) : f__$1.call(null,G__14165,G__14166,G__14167));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,reagent.ratom._peek_at(a__$1),x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed(self__.f,this$__$1);
var derefed = reagent.ratom.captured(this$__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(derefed,self__.watching)){
reagent.ratom._update_watching(this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

cljs.core._notify_watches(this$__$1,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f__$1){
var G__14168_14237 = key;
var G__14169_14238 = this$__$1;
var G__14170_14239 = oldval;
var G__14171_14240 = newval;
(f__$1.cljs$core$IFn$_invoke$arity$4 ? f__$1.cljs$core$IFn$_invoke$arity$4(G__14168_14237,G__14169_14238,G__14170_14239,G__14171_14240) : f__$1.call(null,G__14168_14237,G__14169_14238,G__14170_14239,G__14171_14240));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);

if((cljs.core.empty_QMARK_(self__.watches)) && (cljs.core.not(self__.auto_run))){
return reagent.ratom.dispose_BANG_(this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var or__6810__auto__ = self__.auto_run;
if(cljs.core.truth_(or__6810__auto__)){
return or__6810__auto__;
} else {
return cljs.core.some_QMARK_(reagent.ratom._STAR_ratom_context_STAR_);
}
})())){
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run(this$__$1);
} else {
return self__.state;
}
} else {
if(cljs.core.truth_(self__.dirty_QMARK_)){
var oldstate_14241 = self__.state;
self__.state = (function (){return (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
})();

if((oldstate_14241 === self__.state)){
} else {
cljs.core._notify_watches(this$__$1,oldstate_14241,self__.state);
}
} else {
}

return self__.state;
}
});

reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"dirty?","dirty?",-419314319,null),new cljs.core.Symbol(null,"active?","active?",2100031303,null),new cljs.core.Symbol(null,"watching","watching",1947648227,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"on-set","on-set",1499578057,null),new cljs.core.Symbol(null,"on-dispose","on-dispose",-549129409,null)], null);
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__7389__auto__,writer__7390__auto__,opt__7391__auto__){
return cljs.core._write(writer__7390__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

reagent.ratom.make_reaction = (function reagent$ratom$make_reaction(){
var argseq__7850__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7850__auto__);
});

reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__14244){
var map__14245 = p__14244;
var map__14245__$1 = ((cljs.core.seq_QMARK_(map__14245))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14245):map__14245);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14245__$1,cljs.core.constant$keyword$auto_DASH_run);
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14245__$1,cljs.core.constant$keyword$on_DASH_set);
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14245__$1,cljs.core.constant$keyword$on_DASH_dispose);
var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14245__$1,cljs.core.constant$keyword$derefed);
var runner = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,null,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

reaction.reagent$ratom$IComputedImpl$_update_watching$arity$2(null,derefed);
}

return reaction;
});

reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1);

reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq14242){
var G__14243 = cljs.core.first(seq14242);
var seq14242__$1 = cljs.core.next(seq14242);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(G__14243,seq14242__$1);
});

/**
* @constructor
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
})
reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__6798__auto__ = self__.changed;
if(cljs.core.truth_(and__6798__auto__)){
return cljs.core.some_QMARK_(reagent.ratom._STAR_ratom_context_STAR_);
} else {
return and__6798__auto__;
}
})())){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("derefing stale wrap: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([this$__$1], 0)))].join(''));
} else {
}
} else {
}


return self__.state;
});

reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if((self__.watches == null)){
} else {
cljs.core._notify_watches(this$__$1,oldval,newval);
}

var G__14246_14257 = newval;
(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(G__14246_14257) : self__.callback.call(null,G__14246_14257));

return newval;
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__14247 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14247) : f.call(null,G__14247));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__14248 = self__.state;
var G__14249 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14248,G__14249) : f.call(null,G__14248,G__14249));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__14250 = self__.state;
var G__14251 = x;
var G__14252 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14250,G__14251,G__14252) : f.call(null,G__14250,G__14251,G__14252));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.ratom.Wrapper)) && (cljs.core.not(self__.changed)) && (cljs.core.not(other.changed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.state,other.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.callback,other.callback));
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
var G__14253_14258 = key;
var G__14254_14259 = this$__$1;
var G__14255_14260 = oldval;
var G__14256_14261 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__14253_14258,G__14254_14259,G__14255_14260,G__14256_14261) : f.call(null,G__14253_14258,G__14254_14259,G__14255_14260,G__14256_14261));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
cljs.core._write(writer,"#<wrap: ");

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.Wrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"callback","callback",935395299,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null)], null);
});

reagent.ratom.Wrapper.cljs$lang$type = true;

reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper";

reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__7389__auto__,writer__7390__auto__,opt__7391__auto__){
return cljs.core._write(writer__7390__auto__,"reagent.ratom/Wrapper");
});

reagent.ratom.__GT_Wrapper = (function reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});

reagent.ratom.make_wrapper = (function reagent$ratom$make_wrapper(value,callback_fn,args){
return (new reagent.ratom.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false,null));
});
