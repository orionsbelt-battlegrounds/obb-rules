// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
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
var seq__40056_40070 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40057_40071 = null;
var count__40058_40072 = (0);
var i__40059_40073 = (0);
while(true){
if((i__40059_40073 < count__40058_40072)){
var f_40074 = cljs.core._nth.call(null,chunk__40057_40071,i__40059_40073);
cljs.core.println.call(null,"  ",f_40074);

var G__40075 = seq__40056_40070;
var G__40076 = chunk__40057_40071;
var G__40077 = count__40058_40072;
var G__40078 = (i__40059_40073 + (1));
seq__40056_40070 = G__40075;
chunk__40057_40071 = G__40076;
count__40058_40072 = G__40077;
i__40059_40073 = G__40078;
continue;
} else {
var temp__4657__auto___40079 = cljs.core.seq.call(null,seq__40056_40070);
if(temp__4657__auto___40079){
var seq__40056_40080__$1 = temp__4657__auto___40079;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40056_40080__$1)){
var c__19173__auto___40081 = cljs.core.chunk_first.call(null,seq__40056_40080__$1);
var G__40082 = cljs.core.chunk_rest.call(null,seq__40056_40080__$1);
var G__40083 = c__19173__auto___40081;
var G__40084 = cljs.core.count.call(null,c__19173__auto___40081);
var G__40085 = (0);
seq__40056_40070 = G__40082;
chunk__40057_40071 = G__40083;
count__40058_40072 = G__40084;
i__40059_40073 = G__40085;
continue;
} else {
var f_40086 = cljs.core.first.call(null,seq__40056_40080__$1);
cljs.core.println.call(null,"  ",f_40086);

var G__40087 = cljs.core.next.call(null,seq__40056_40080__$1);
var G__40088 = null;
var G__40089 = (0);
var G__40090 = (0);
seq__40056_40070 = G__40087;
chunk__40057_40071 = G__40088;
count__40058_40072 = G__40089;
i__40059_40073 = G__40090;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40091 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18370__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_40091);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_40091)))?cljs.core.second.call(null,arglists_40091):arglists_40091));
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
var seq__40060 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40061 = null;
var count__40062 = (0);
var i__40063 = (0);
while(true){
if((i__40063 < count__40062)){
var vec__40064 = cljs.core._nth.call(null,chunk__40061,i__40063);
var name = cljs.core.nth.call(null,vec__40064,(0),null);
var map__40065 = cljs.core.nth.call(null,vec__40064,(1),null);
var map__40065__$1 = ((((!((map__40065 == null)))?((((map__40065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40065):map__40065);
var doc = cljs.core.get.call(null,map__40065__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__40065__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__40092 = seq__40060;
var G__40093 = chunk__40061;
var G__40094 = count__40062;
var G__40095 = (i__40063 + (1));
seq__40060 = G__40092;
chunk__40061 = G__40093;
count__40062 = G__40094;
i__40063 = G__40095;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40060);
if(temp__4657__auto__){
var seq__40060__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40060__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__40060__$1);
var G__40096 = cljs.core.chunk_rest.call(null,seq__40060__$1);
var G__40097 = c__19173__auto__;
var G__40098 = cljs.core.count.call(null,c__19173__auto__);
var G__40099 = (0);
seq__40060 = G__40096;
chunk__40061 = G__40097;
count__40062 = G__40098;
i__40063 = G__40099;
continue;
} else {
var vec__40067 = cljs.core.first.call(null,seq__40060__$1);
var name = cljs.core.nth.call(null,vec__40067,(0),null);
var map__40068 = cljs.core.nth.call(null,vec__40067,(1),null);
var map__40068__$1 = ((((!((map__40068 == null)))?((((map__40068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40068):map__40068);
var doc = cljs.core.get.call(null,map__40068__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__40068__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__40100 = cljs.core.next.call(null,seq__40060__$1);
var G__40101 = null;
var G__40102 = (0);
var G__40103 = (0);
seq__40060 = G__40100;
chunk__40061 = G__40101;
count__40062 = G__40102;
i__40063 = G__40103;
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

//# sourceMappingURL=repl.js.map?rel=1454263149045