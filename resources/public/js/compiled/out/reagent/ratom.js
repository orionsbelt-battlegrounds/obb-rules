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
reagent.ratom._running = (function (){var G__14069 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14069) : cljs.core.atom.call(null,G__14069));
})();
}
reagent.ratom.running = (function reagent$ratom$running(){
var G__14071 = reagent.ratom._running;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14071) : cljs.core.deref.call(null,G__14071));
});
reagent.ratom.capture_derefed = (function reagent$ratom$capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_14073 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_14073;
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

reagent.ratom.IReactiveAtom = (function (){var obj14075 = {};
return obj14075;
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
var G__14076 = this$__$1;
return goog.getUid(G__14076);
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
if(cljs.core.truth_((function (){var G__14077 = new_value;
return (self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(G__14077) : self__.validator.call(null,G__14077));
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
return cljs.core._reset_BANG_(a__$1,(function (){var G__14078 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14078) : f.call(null,G__14078));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__14079 = self__.state;
var G__14080 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14079,G__14080) : f.call(null,G__14079,G__14080));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__14081 = self__.state;
var G__14082 = x;
var G__14083 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14081,G__14082,G__14083) : f.call(null,G__14081,G__14082,G__14083));
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
var G__14084_14088 = key;
var G__14085_14089 = this$__$1;
var G__14086_14090 = oldval;
var G__14087_14091 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__14084_14088,G__14085_14089,G__14086_14090,G__14087_14091) : f.call(null,G__14084_14088,G__14085_14089,G__14086_14090,G__14087_14091));

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

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__7398__auto__,writer__7399__auto__,opt__7400__auto__){
return cljs.core._write(writer__7399__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
reagent.ratom.atom = (function reagent$ratom$atom(){
var G__14095 = arguments.length;
switch (G__14095) {
case 1:
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__7870__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7870__auto__);

}
});

reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});

reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__14096){
var map__14097 = p__14096;
var map__14097__$1 = ((cljs.core.seq_QMARK_(map__14097))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14097):map__14097);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14097__$1,cljs.core.constant$keyword$meta);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14097__$1,cljs.core.constant$keyword$validator);
return (new reagent.ratom.RAtom(x,meta,validator,null));
});

reagent.ratom.atom.cljs$lang$applyTo = (function (seq14092){
var G__14093 = cljs.core.first(seq14092);
var seq14092__$1 = cljs.core.next(seq14092);
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic(G__14093,seq14092__$1);
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
return self__.reaction = (((function (){var G__14105 = self__.ratom;
if(G__14105){
var bit__7493__auto__ = (G__14105.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__7493__auto__) || (G__14105.cljs$core$IDeref$)){
return true;
} else {
if((!G__14105.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__14105);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__14105);
}
})())?(function (){var G__14106 = ((function (this$){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__14109 = self__.ratom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14109) : cljs.core.deref.call(null,G__14109));
})(),self__.path);
});})(this$))
;
var G__14107 = cljs.core.constant$keyword$on_DASH_set;
var G__14108 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,cljs.core.PersistentVector.EMPTY))?((function (G__14106,G__14107,this$){
return (function (p1__14100_SHARP_,p2__14099_SHARP_){
var G__14110 = self__.ratom;
var G__14111 = p2__14099_SHARP_;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14110,G__14111) : cljs.core.reset_BANG_.call(null,G__14110,G__14111));
});})(G__14106,G__14107,this$))
:((function (G__14106,G__14107,this$){
return (function (p1__14102_SHARP_,p2__14101_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,p2__14101_SHARP_);
});})(G__14106,G__14107,this$))
);
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__14106,G__14107,G__14108) : reagent.ratom.make_reaction.call(null,G__14106,G__14107,G__14108));
})():(function (){var G__14112 = ((function (this$){
return (function (){
var G__14115 = self__.path;
return (self__.ratom.cljs$core$IFn$_invoke$arity$1 ? self__.ratom.cljs$core$IFn$_invoke$arity$1(G__14115) : self__.ratom.call(null,G__14115));
});})(this$))
;
var G__14113 = cljs.core.constant$keyword$on_DASH_set;
var G__14114 = ((function (G__14112,G__14113,this$){
return (function (p1__14104_SHARP_,p2__14103_SHARP_){
var G__14116 = self__.path;
var G__14117 = p2__14103_SHARP_;
return (self__.ratom.cljs$core$IFn$_invoke$arity$2 ? self__.ratom.cljs$core$IFn$_invoke$arity$2(G__14116,G__14117) : self__.ratom.call(null,G__14116,G__14117));
});})(G__14112,G__14113,this$))
;
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__14112,G__14113,G__14114) : reagent.ratom.make_reaction.call(null,G__14112,G__14113,G__14114));
})());
} else {
return self__.reaction;
}
});

reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_14118 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(this$._reaction());
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_14118;
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

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__7398__auto__,writer__7399__auto__,opt__7400__auto__){
return cljs.core._write(writer__7399__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function reagent$ratom$__GT_RCursor(ratom,path,reaction){
return (new reagent.ratom.RCursor(ratom,path,reaction));
});

reagent.ratom.cursor = (function reagent$ratom$cursor(src,path){
if((function (){var G__14123 = path;
if(G__14123){
var bit__7493__auto__ = (G__14123.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__7493__auto__) || (G__14123.cljs$core$IDeref$)){
return true;
} else {
if((!G__14123.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__14123);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__14123);
}
})()){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Calling cursor with an atom as the second arg is "),cljs.core.str("deprecated, in (cursor "),cljs.core.str(src),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0))),cljs.core.str(")")].join(''));
} else {
}

if((function (){var G__14124 = path;
if(G__14124){
var bit__7493__auto__ = null;
if(cljs.core.truth_((function (){var or__6819__auto__ = bit__7493__auto__;
if(cljs.core.truth_(or__6819__auto__)){
return or__6819__auto__;
} else {
return G__14124.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__14124.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__14124);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__14124);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom, not "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"path","path",1452340359,null))], 0)))].join('')));
}

return (new reagent.ratom.RCursor(path,src,null));
} else {
if((function (){var or__6819__auto__ = (function (){var G__14126 = src;
if(G__14126){
var bit__7493__auto__ = null;
if(cljs.core.truth_((function (){var or__6819__auto__ = bit__7493__auto__;
if(cljs.core.truth_(or__6819__auto__)){
return or__6819__auto__;
} else {
return G__14126.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__14126.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__14126);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__14126);
}
})();
if(or__6819__auto__){
return or__6819__auto__;
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

reagent.ratom.IDisposable = (function (){var obj14128 = {};
return obj14128;
})();

reagent.ratom.dispose_BANG_ = (function reagent$ratom$dispose_BANG_(this$){
if(cljs.core.truth_((function (){var and__6807__auto__ = this$;
if(cljs.core.truth_(and__6807__auto__)){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__6807__auto__;
}
})())){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__7455__auto__ = (((this$ == null))?null:this$);
return (function (){var or__6819__auto__ = (reagent.ratom.dispose_BANG_[(function (){var G__14132 = x__7455__auto__;
return goog.typeOf(G__14132);
})()]);
if(cljs.core.truth_(or__6819__auto__)){
return or__6819__auto__;
} else {
var or__6819__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(cljs.core.truth_(or__6819__auto____$1)){
return or__6819__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj14134 = {};
return obj14134;
})();

reagent.ratom.run = (function reagent$ratom$run(this$){
if(cljs.core.truth_((function (){var and__6807__auto__ = this$;
if(cljs.core.truth_(and__6807__auto__)){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__6807__auto__;
}
})())){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__7455__auto__ = (((this$ == null))?null:this$);
return (function (){var or__6819__auto__ = (reagent.ratom.run[(function (){var G__14138 = x__7455__auto__;
return goog.typeOf(G__14138);
})()]);
if(cljs.core.truth_(or__6819__auto__)){
return or__6819__auto__;
} else {
var or__6819__auto____$1 = (reagent.ratom.run["_"]);
if(cljs.core.truth_(or__6819__auto____$1)){
return or__6819__auto____$1;
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj14140 = {};
return obj14140;
})();

reagent.ratom._update_watching = (function reagent$ratom$_update_watching(this$,derefed){
if(cljs.core.truth_((function (){var and__6807__auto__ = this$;
if(cljs.core.truth_(and__6807__auto__)){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__6807__auto__;
}
})())){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__7455__auto__ = (((this$ == null))?null:this$);
return (function (){var or__6819__auto__ = (reagent.ratom._update_watching[(function (){var G__14144 = x__7455__auto__;
return goog.typeOf(G__14144);
})()]);
if(cljs.core.truth_(or__6819__auto__)){
return or__6819__auto__;
} else {
var or__6819__auto____$1 = (reagent.ratom._update_watching["_"]);
if(cljs.core.truth_(or__6819__auto____$1)){
return or__6819__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function reagent$ratom$_handle_change(k,sender,oldval,newval){
if(cljs.core.truth_((function (){var and__6807__auto__ = k;
if(cljs.core.truth_(and__6807__auto__)){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__6807__auto__;
}
})())){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__7455__auto__ = (((k == null))?null:k);
return (function (){var or__6819__auto__ = (reagent.ratom._handle_change[(function (){var G__14148 = x__7455__auto__;
return goog.typeOf(G__14148);
})()]);
if(cljs.core.truth_(or__6819__auto__)){
return or__6819__auto__;
} else {
var or__6819__auto____$1 = (reagent.ratom._handle_change["_"]);
if(cljs.core.truth_(or__6819__auto____$1)){
return or__6819__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom._peek_at = (function reagent$ratom$_peek_at(this$){
if(cljs.core.truth_((function (){var and__6807__auto__ = this$;
if(cljs.core.truth_(and__6807__auto__)){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1;
} else {
return and__6807__auto__;
}
})())){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1(this$);
} else {
var x__7455__auto__ = (((this$ == null))?null:this$);
return (function (){var or__6819__auto__ = (reagent.ratom._peek_at[(function (){var G__14152 = x__7455__auto__;
return goog.typeOf(G__14152);
})()]);
if(cljs.core.truth_(or__6819__auto__)){
return or__6819__auto__;
} else {
var or__6819__auto____$1 = (reagent.ratom._peek_at["_"]);
if(cljs.core.truth_(or__6819__auto____$1)){
return or__6819__auto____$1;
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
if(cljs.core.truth_((function (){var and__6807__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__6807__auto__)){
return (cljs.core.not(self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__6807__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__6819__auto__ = self__.auto_run;
if(cljs.core.truth_(or__6819__auto__)){
return or__6819__auto__;
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
var seq__14153_14179 = cljs.core.seq(derefed);
var chunk__14154_14180 = null;
var count__14155_14181 = (0);
var i__14156_14182 = (0);
while(true){
if((i__14156_14182 < count__14155_14181)){
var w_14183 = chunk__14154_14180.cljs$core$IIndexed$_nth$arity$2(null,i__14156_14182);
if(cljs.core.contains_QMARK_(self__.watching,w_14183)){
} else {
cljs.core.add_watch(w_14183,this$__$1,reagent.ratom._handle_change);
}

var G__14184 = seq__14153_14179;
var G__14185 = chunk__14154_14180;
var G__14186 = count__14155_14181;
var G__14187 = (i__14156_14182 + (1));
seq__14153_14179 = G__14184;
chunk__14154_14180 = G__14185;
count__14155_14181 = G__14186;
i__14156_14182 = G__14187;
continue;
} else {
var temp__4425__auto___14188 = cljs.core.seq(seq__14153_14179);
if(temp__4425__auto___14188){
var seq__14153_14189__$1 = temp__4425__auto___14188;
if(cljs.core.chunked_seq_QMARK_(seq__14153_14189__$1)){
var c__7604__auto___14190 = cljs.core.chunk_first(seq__14153_14189__$1);
var G__14191 = cljs.core.chunk_rest(seq__14153_14189__$1);
var G__14192 = c__7604__auto___14190;
var G__14193 = cljs.core.count(c__7604__auto___14190);
var G__14194 = (0);
seq__14153_14179 = G__14191;
chunk__14154_14180 = G__14192;
count__14155_14181 = G__14193;
i__14156_14182 = G__14194;
continue;
} else {
var w_14195 = cljs.core.first(seq__14153_14189__$1);
if(cljs.core.contains_QMARK_(self__.watching,w_14195)){
} else {
cljs.core.add_watch(w_14195,this$__$1,reagent.ratom._handle_change);
}

var G__14196 = cljs.core.next(seq__14153_14189__$1);
var G__14197 = null;
var G__14198 = (0);
var G__14199 = (0);
seq__14153_14179 = G__14196;
chunk__14154_14180 = G__14197;
count__14155_14181 = G__14198;
i__14156_14182 = G__14199;
continue;
}
} else {
}
}
break;
}

var seq__14157_14200 = cljs.core.seq(self__.watching);
var chunk__14158_14201 = null;
var count__14159_14202 = (0);
var i__14160_14203 = (0);
while(true){
if((i__14160_14203 < count__14159_14202)){
var w_14204 = chunk__14158_14201.cljs$core$IIndexed$_nth$arity$2(null,i__14160_14203);
if(cljs.core.contains_QMARK_(derefed,w_14204)){
} else {
cljs.core.remove_watch(w_14204,this$__$1);
}

var G__14205 = seq__14157_14200;
var G__14206 = chunk__14158_14201;
var G__14207 = count__14159_14202;
var G__14208 = (i__14160_14203 + (1));
seq__14157_14200 = G__14205;
chunk__14158_14201 = G__14206;
count__14159_14202 = G__14207;
i__14160_14203 = G__14208;
continue;
} else {
var temp__4425__auto___14209 = cljs.core.seq(seq__14157_14200);
if(temp__4425__auto___14209){
var seq__14157_14210__$1 = temp__4425__auto___14209;
if(cljs.core.chunked_seq_QMARK_(seq__14157_14210__$1)){
var c__7604__auto___14211 = cljs.core.chunk_first(seq__14157_14210__$1);
var G__14212 = cljs.core.chunk_rest(seq__14157_14210__$1);
var G__14213 = c__7604__auto___14211;
var G__14214 = cljs.core.count(c__7604__auto___14211);
var G__14215 = (0);
seq__14157_14200 = G__14212;
chunk__14158_14201 = G__14213;
count__14159_14202 = G__14214;
i__14160_14203 = G__14215;
continue;
} else {
var w_14216 = cljs.core.first(seq__14157_14210__$1);
if(cljs.core.contains_QMARK_(derefed,w_14216)){
} else {
cljs.core.remove_watch(w_14216,this$__$1);
}

var G__14217 = cljs.core.next(seq__14157_14210__$1);
var G__14218 = null;
var G__14219 = (0);
var G__14220 = (0);
seq__14157_14200 = G__14217;
chunk__14158_14201 = G__14218;
count__14159_14202 = G__14219;
i__14160_14203 = G__14220;
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
var _STAR_ratom_context_STAR_14161 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(this$__$1);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_14161;
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
var G__14162 = this$__$1;
return goog.getUid(G__14162);
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
var seq__14163_14221 = cljs.core.seq(self__.watching);
var chunk__14164_14222 = null;
var count__14165_14223 = (0);
var i__14166_14224 = (0);
while(true){
if((i__14166_14224 < count__14165_14223)){
var w_14225 = chunk__14164_14222.cljs$core$IIndexed$_nth$arity$2(null,i__14166_14224);
cljs.core.remove_watch(w_14225,this$__$1);

var G__14226 = seq__14163_14221;
var G__14227 = chunk__14164_14222;
var G__14228 = count__14165_14223;
var G__14229 = (i__14166_14224 + (1));
seq__14163_14221 = G__14226;
chunk__14164_14222 = G__14227;
count__14165_14223 = G__14228;
i__14166_14224 = G__14229;
continue;
} else {
var temp__4425__auto___14230 = cljs.core.seq(seq__14163_14221);
if(temp__4425__auto___14230){
var seq__14163_14231__$1 = temp__4425__auto___14230;
if(cljs.core.chunked_seq_QMARK_(seq__14163_14231__$1)){
var c__7604__auto___14232 = cljs.core.chunk_first(seq__14163_14231__$1);
var G__14233 = cljs.core.chunk_rest(seq__14163_14231__$1);
var G__14234 = c__7604__auto___14232;
var G__14235 = cljs.core.count(c__7604__auto___14232);
var G__14236 = (0);
seq__14163_14221 = G__14233;
chunk__14164_14222 = G__14234;
count__14165_14223 = G__14235;
i__14166_14224 = G__14236;
continue;
} else {
var w_14237 = cljs.core.first(seq__14163_14231__$1);
cljs.core.remove_watch(w_14237,this$__$1);

var G__14238 = cljs.core.next(seq__14163_14231__$1);
var G__14239 = null;
var G__14240 = (0);
var G__14241 = (0);
seq__14163_14221 = G__14238;
chunk__14164_14222 = G__14239;
count__14165_14223 = G__14240;
i__14166_14224 = G__14241;
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

var G__14167_14242 = oldval;
var G__14168_14243 = newval;
(self__.on_set.cljs$core$IFn$_invoke$arity$2 ? self__.on_set.cljs$core$IFn$_invoke$arity$2(G__14167_14242,G__14168_14243) : self__.on_set.call(null,G__14167_14242,G__14168_14243));
} else {
}

cljs.core._notify_watches(a__$1,oldval,newval);

return newval;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__14169 = reagent.ratom._peek_at(a__$1);
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__14169) : f__$1.call(null,G__14169));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__14170 = reagent.ratom._peek_at(a__$1);
var G__14171 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__14170,G__14171) : f__$1.call(null,G__14170,G__14171));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__14172 = reagent.ratom._peek_at(a__$1);
var G__14173 = x;
var G__14174 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__14172,G__14173,G__14174) : f__$1.call(null,G__14172,G__14173,G__14174));
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
var G__14175_14244 = key;
var G__14176_14245 = this$__$1;
var G__14177_14246 = oldval;
var G__14178_14247 = newval;
(f__$1.cljs$core$IFn$_invoke$arity$4 ? f__$1.cljs$core$IFn$_invoke$arity$4(G__14175_14244,G__14176_14245,G__14177_14246,G__14178_14247) : f__$1.call(null,G__14175_14244,G__14176_14245,G__14177_14246,G__14178_14247));

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
if(cljs.core.truth_((function (){var or__6819__auto__ = self__.auto_run;
if(cljs.core.truth_(or__6819__auto__)){
return or__6819__auto__;
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
var oldstate_14248 = self__.state;
self__.state = (function (){return (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
})();

if((oldstate_14248 === self__.state)){
} else {
cljs.core._notify_watches(this$__$1,oldstate_14248,self__.state);
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

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__7398__auto__,writer__7399__auto__,opt__7400__auto__){
return cljs.core._write(writer__7399__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

reagent.ratom.make_reaction = (function reagent$ratom$make_reaction(){
var argseq__7859__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7859__auto__);
});

reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__14251){
var map__14252 = p__14251;
var map__14252__$1 = ((cljs.core.seq_QMARK_(map__14252))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14252):map__14252);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14252__$1,cljs.core.constant$keyword$auto_DASH_run);
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14252__$1,cljs.core.constant$keyword$on_DASH_set);
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14252__$1,cljs.core.constant$keyword$on_DASH_dispose);
var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14252__$1,cljs.core.constant$keyword$derefed);
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

reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq14249){
var G__14250 = cljs.core.first(seq14249);
var seq14249__$1 = cljs.core.next(seq14249);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(G__14250,seq14249__$1);
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
if(cljs.core.truth_((function (){var and__6807__auto__ = self__.changed;
if(cljs.core.truth_(and__6807__auto__)){
return cljs.core.some_QMARK_(reagent.ratom._STAR_ratom_context_STAR_);
} else {
return and__6807__auto__;
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

var G__14253_14264 = newval;
(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(G__14253_14264) : self__.callback.call(null,G__14253_14264));

return newval;
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__14254 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14254) : f.call(null,G__14254));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__14255 = self__.state;
var G__14256 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14255,G__14256) : f.call(null,G__14255,G__14256));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__14257 = self__.state;
var G__14258 = x;
var G__14259 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14257,G__14258,G__14259) : f.call(null,G__14257,G__14258,G__14259));
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
var G__14260_14265 = key;
var G__14261_14266 = this$__$1;
var G__14262_14267 = oldval;
var G__14263_14268 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__14260_14265,G__14261_14266,G__14262_14267,G__14263_14268) : f.call(null,G__14260_14265,G__14261_14266,G__14262_14267,G__14263_14268));

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

reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__7398__auto__,writer__7399__auto__,opt__7400__auto__){
return cljs.core._write(writer__7399__auto__,"reagent.ratom/Wrapper");
});

reagent.ratom.__GT_Wrapper = (function reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});

reagent.ratom.make_wrapper = (function reagent$ratom$make_wrapper(value,callback_fn,args){
return (new reagent.ratom.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false,null));
});
