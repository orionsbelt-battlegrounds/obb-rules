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
var seq__24790_24802 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24791_24803 = null;
var count__24792_24804 = (0);
var i__24793_24805 = (0);
while(true){
if((i__24793_24805 < count__24792_24804)){
var f_24806 = cljs.core._nth.call(null,chunk__24791_24803,i__24793_24805);
cljs.core.println.call(null,"  ",f_24806);

var G__24807 = seq__24790_24802;
var G__24808 = chunk__24791_24803;
var G__24809 = count__24792_24804;
var G__24810 = (i__24793_24805 + (1));
seq__24790_24802 = G__24807;
chunk__24791_24803 = G__24808;
count__24792_24804 = G__24809;
i__24793_24805 = G__24810;
continue;
} else {
var temp__4425__auto___24811 = cljs.core.seq.call(null,seq__24790_24802);
if(temp__4425__auto___24811){
var seq__24790_24812__$1 = temp__4425__auto___24811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24790_24812__$1)){
var c__16894__auto___24813 = cljs.core.chunk_first.call(null,seq__24790_24812__$1);
var G__24814 = cljs.core.chunk_rest.call(null,seq__24790_24812__$1);
var G__24815 = c__16894__auto___24813;
var G__24816 = cljs.core.count.call(null,c__16894__auto___24813);
var G__24817 = (0);
seq__24790_24802 = G__24814;
chunk__24791_24803 = G__24815;
count__24792_24804 = G__24816;
i__24793_24805 = G__24817;
continue;
} else {
var f_24818 = cljs.core.first.call(null,seq__24790_24812__$1);
cljs.core.println.call(null,"  ",f_24818);

var G__24819 = cljs.core.next.call(null,seq__24790_24812__$1);
var G__24820 = null;
var G__24821 = (0);
var G__24822 = (0);
seq__24790_24802 = G__24819;
chunk__24791_24803 = G__24820;
count__24792_24804 = G__24821;
i__24793_24805 = G__24822;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24823 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16109__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24823);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24823)))?cljs.core.second.call(null,arglists_24823):arglists_24823));
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
var seq__24794 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24795 = null;
var count__24796 = (0);
var i__24797 = (0);
while(true){
if((i__24797 < count__24796)){
var vec__24798 = cljs.core._nth.call(null,chunk__24795,i__24797);
var name = cljs.core.nth.call(null,vec__24798,(0),null);
var map__24799 = cljs.core.nth.call(null,vec__24798,(1),null);
var map__24799__$1 = ((cljs.core.seq_QMARK_.call(null,map__24799))?cljs.core.apply.call(null,cljs.core.hash_map,map__24799):map__24799);
var doc = cljs.core.get.call(null,map__24799__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24799__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24824 = seq__24794;
var G__24825 = chunk__24795;
var G__24826 = count__24796;
var G__24827 = (i__24797 + (1));
seq__24794 = G__24824;
chunk__24795 = G__24825;
count__24796 = G__24826;
i__24797 = G__24827;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24794);
if(temp__4425__auto__){
var seq__24794__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24794__$1)){
var c__16894__auto__ = cljs.core.chunk_first.call(null,seq__24794__$1);
var G__24828 = cljs.core.chunk_rest.call(null,seq__24794__$1);
var G__24829 = c__16894__auto__;
var G__24830 = cljs.core.count.call(null,c__16894__auto__);
var G__24831 = (0);
seq__24794 = G__24828;
chunk__24795 = G__24829;
count__24796 = G__24830;
i__24797 = G__24831;
continue;
} else {
var vec__24800 = cljs.core.first.call(null,seq__24794__$1);
var name = cljs.core.nth.call(null,vec__24800,(0),null);
var map__24801 = cljs.core.nth.call(null,vec__24800,(1),null);
var map__24801__$1 = ((cljs.core.seq_QMARK_.call(null,map__24801))?cljs.core.apply.call(null,cljs.core.hash_map,map__24801):map__24801);
var doc = cljs.core.get.call(null,map__24801__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24801__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24832 = cljs.core.next.call(null,seq__24794__$1);
var G__24833 = null;
var G__24834 = (0);
var G__24835 = (0);
seq__24794 = G__24832;
chunk__24795 = G__24833;
count__24796 = G__24834;
i__24797 = G__24835;
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

//# sourceMappingURL=repl.js.map?rel=1436104828098