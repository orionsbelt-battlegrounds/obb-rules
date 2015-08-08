// Compiled by ClojureScript 1.7.28 {}
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
var seq__36044_36048 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36045_36049 = null;
var count__36046_36050 = (0);
var i__36047_36051 = (0);
while(true){
if((i__36047_36051 < count__36046_36050)){
var f_36052 = cljs.core._nth.call(null,chunk__36045_36049,i__36047_36051);
cljs.core.println.call(null,"  ",f_36052);

var G__36053 = seq__36044_36048;
var G__36054 = chunk__36045_36049;
var G__36055 = count__36046_36050;
var G__36056 = (i__36047_36051 + (1));
seq__36044_36048 = G__36053;
chunk__36045_36049 = G__36054;
count__36046_36050 = G__36055;
i__36047_36051 = G__36056;
continue;
} else {
var temp__4425__auto___36057 = cljs.core.seq.call(null,seq__36044_36048);
if(temp__4425__auto___36057){
var seq__36044_36058__$1 = temp__4425__auto___36057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36044_36058__$1)){
var c__17266__auto___36059 = cljs.core.chunk_first.call(null,seq__36044_36058__$1);
var G__36060 = cljs.core.chunk_rest.call(null,seq__36044_36058__$1);
var G__36061 = c__17266__auto___36059;
var G__36062 = cljs.core.count.call(null,c__17266__auto___36059);
var G__36063 = (0);
seq__36044_36048 = G__36060;
chunk__36045_36049 = G__36061;
count__36046_36050 = G__36062;
i__36047_36051 = G__36063;
continue;
} else {
var f_36064 = cljs.core.first.call(null,seq__36044_36058__$1);
cljs.core.println.call(null,"  ",f_36064);

var G__36065 = cljs.core.next.call(null,seq__36044_36058__$1);
var G__36066 = null;
var G__36067 = (0);
var G__36068 = (0);
seq__36044_36048 = G__36065;
chunk__36045_36049 = G__36066;
count__36046_36050 = G__36067;
i__36047_36051 = G__36068;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36069 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16482__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36069);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36069)))?cljs.core.second.call(null,arglists_36069):arglists_36069));
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
var seq__36034 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36035 = null;
var count__36036 = (0);
var i__36037 = (0);
while(true){
if((i__36037 < count__36036)){
var vec__36038 = cljs.core._nth.call(null,chunk__36035,i__36037);
var name = cljs.core.nth.call(null,vec__36038,(0),null);
var map__36039 = cljs.core.nth.call(null,vec__36038,(1),null);
var map__36039__$1 = ((((!((map__36039 == null)))?((((map__36039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36039):map__36039);
var doc = cljs.core.get.call(null,map__36039__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__36039__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__36070 = seq__36034;
var G__36071 = chunk__36035;
var G__36072 = count__36036;
var G__36073 = (i__36037 + (1));
seq__36034 = G__36070;
chunk__36035 = G__36071;
count__36036 = G__36072;
i__36037 = G__36073;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36034);
if(temp__4425__auto__){
var seq__36034__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36034__$1)){
var c__17266__auto__ = cljs.core.chunk_first.call(null,seq__36034__$1);
var G__36074 = cljs.core.chunk_rest.call(null,seq__36034__$1);
var G__36075 = c__17266__auto__;
var G__36076 = cljs.core.count.call(null,c__17266__auto__);
var G__36077 = (0);
seq__36034 = G__36074;
chunk__36035 = G__36075;
count__36036 = G__36076;
i__36037 = G__36077;
continue;
} else {
var vec__36041 = cljs.core.first.call(null,seq__36034__$1);
var name = cljs.core.nth.call(null,vec__36041,(0),null);
var map__36042 = cljs.core.nth.call(null,vec__36041,(1),null);
var map__36042__$1 = ((((!((map__36042 == null)))?((((map__36042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36042):map__36042);
var doc = cljs.core.get.call(null,map__36042__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__36042__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__36078 = cljs.core.next.call(null,seq__36034__$1);
var G__36079 = null;
var G__36080 = (0);
var G__36081 = (0);
seq__36034 = G__36078;
chunk__36035 = G__36079;
count__36036 = G__36080;
i__36037 = G__36081;
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

//# sourceMappingURL=repl.js.map?rel=1439049325066