// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24991_25003 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24992_25004 = null;
var count__24993_25005 = (0);
var i__24994_25006 = (0);
while(true){
if((i__24994_25006 < count__24993_25005)){
var f_25007 = cljs.core._nth.call(null,chunk__24992_25004,i__24994_25006);
cljs.core.println.call(null,"  ",f_25007);

var G__25008 = seq__24991_25003;
var G__25009 = chunk__24992_25004;
var G__25010 = count__24993_25005;
var G__25011 = (i__24994_25006 + (1));
seq__24991_25003 = G__25008;
chunk__24992_25004 = G__25009;
count__24993_25005 = G__25010;
i__24994_25006 = G__25011;
continue;
} else {
var temp__4425__auto___25012 = cljs.core.seq.call(null,seq__24991_25003);
if(temp__4425__auto___25012){
var seq__24991_25013__$1 = temp__4425__auto___25012;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24991_25013__$1)){
var c__16894__auto___25014 = cljs.core.chunk_first.call(null,seq__24991_25013__$1);
var G__25015 = cljs.core.chunk_rest.call(null,seq__24991_25013__$1);
var G__25016 = c__16894__auto___25014;
var G__25017 = cljs.core.count.call(null,c__16894__auto___25014);
var G__25018 = (0);
seq__24991_25003 = G__25015;
chunk__24992_25004 = G__25016;
count__24993_25005 = G__25017;
i__24994_25006 = G__25018;
continue;
} else {
var f_25019 = cljs.core.first.call(null,seq__24991_25013__$1);
cljs.core.println.call(null,"  ",f_25019);

var G__25020 = cljs.core.next.call(null,seq__24991_25013__$1);
var G__25021 = null;
var G__25022 = (0);
var G__25023 = (0);
seq__24991_25003 = G__25020;
chunk__24992_25004 = G__25021;
count__24993_25005 = G__25022;
i__24994_25006 = G__25023;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25024 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16109__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25024);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25024)))?cljs.core.second.call(null,arglists_25024):arglists_25024));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24995 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24996 = null;
var count__24997 = (0);
var i__24998 = (0);
while(true){
if((i__24998 < count__24997)){
var vec__24999 = cljs.core._nth.call(null,chunk__24996,i__24998);
var name = cljs.core.nth.call(null,vec__24999,(0),null);
var map__25000 = cljs.core.nth.call(null,vec__24999,(1),null);
var map__25000__$1 = ((cljs.core.seq_QMARK_.call(null,map__25000))?cljs.core.apply.call(null,cljs.core.hash_map,map__25000):map__25000);
var doc = cljs.core.get.call(null,map__25000__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25000__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25025 = seq__24995;
var G__25026 = chunk__24996;
var G__25027 = count__24997;
var G__25028 = (i__24998 + (1));
seq__24995 = G__25025;
chunk__24996 = G__25026;
count__24997 = G__25027;
i__24998 = G__25028;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24995);
if(temp__4425__auto__){
var seq__24995__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24995__$1)){
var c__16894__auto__ = cljs.core.chunk_first.call(null,seq__24995__$1);
var G__25029 = cljs.core.chunk_rest.call(null,seq__24995__$1);
var G__25030 = c__16894__auto__;
var G__25031 = cljs.core.count.call(null,c__16894__auto__);
var G__25032 = (0);
seq__24995 = G__25029;
chunk__24996 = G__25030;
count__24997 = G__25031;
i__24998 = G__25032;
continue;
} else {
var vec__25001 = cljs.core.first.call(null,seq__24995__$1);
var name = cljs.core.nth.call(null,vec__25001,(0),null);
var map__25002 = cljs.core.nth.call(null,vec__25001,(1),null);
var map__25002__$1 = ((cljs.core.seq_QMARK_.call(null,map__25002))?cljs.core.apply.call(null,cljs.core.hash_map,map__25002):map__25002);
var doc = cljs.core.get.call(null,map__25002__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25002__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25033 = cljs.core.next.call(null,seq__24995__$1);
var G__25034 = null;
var G__25035 = (0);
var G__25036 = (0);
seq__24995 = G__25033;
chunk__24996 = G__25034;
count__24997 = G__25035;
i__24998 = G__25036;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1436379815772