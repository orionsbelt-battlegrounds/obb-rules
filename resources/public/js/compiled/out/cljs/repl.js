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
var seq__46174_46188 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46175_46189 = null;
var count__46176_46190 = (0);
var i__46177_46191 = (0);
while(true){
if((i__46177_46191 < count__46176_46190)){
var f_46192 = cljs.core._nth.call(null,chunk__46175_46189,i__46177_46191);
cljs.core.println.call(null,"  ",f_46192);

var G__46193 = seq__46174_46188;
var G__46194 = chunk__46175_46189;
var G__46195 = count__46176_46190;
var G__46196 = (i__46177_46191 + (1));
seq__46174_46188 = G__46193;
chunk__46175_46189 = G__46194;
count__46176_46190 = G__46195;
i__46177_46191 = G__46196;
continue;
} else {
var temp__4657__auto___46197 = cljs.core.seq.call(null,seq__46174_46188);
if(temp__4657__auto___46197){
var seq__46174_46198__$1 = temp__4657__auto___46197;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46174_46198__$1)){
var c__19173__auto___46199 = cljs.core.chunk_first.call(null,seq__46174_46198__$1);
var G__46200 = cljs.core.chunk_rest.call(null,seq__46174_46198__$1);
var G__46201 = c__19173__auto___46199;
var G__46202 = cljs.core.count.call(null,c__19173__auto___46199);
var G__46203 = (0);
seq__46174_46188 = G__46200;
chunk__46175_46189 = G__46201;
count__46176_46190 = G__46202;
i__46177_46191 = G__46203;
continue;
} else {
var f_46204 = cljs.core.first.call(null,seq__46174_46198__$1);
cljs.core.println.call(null,"  ",f_46204);

var G__46205 = cljs.core.next.call(null,seq__46174_46198__$1);
var G__46206 = null;
var G__46207 = (0);
var G__46208 = (0);
seq__46174_46188 = G__46205;
chunk__46175_46189 = G__46206;
count__46176_46190 = G__46207;
i__46177_46191 = G__46208;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_46209 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18370__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_46209);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_46209)))?cljs.core.second.call(null,arglists_46209):arglists_46209));
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
var seq__46178 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46179 = null;
var count__46180 = (0);
var i__46181 = (0);
while(true){
if((i__46181 < count__46180)){
var vec__46182 = cljs.core._nth.call(null,chunk__46179,i__46181);
var name = cljs.core.nth.call(null,vec__46182,(0),null);
var map__46183 = cljs.core.nth.call(null,vec__46182,(1),null);
var map__46183__$1 = ((((!((map__46183 == null)))?((((map__46183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46183):map__46183);
var doc = cljs.core.get.call(null,map__46183__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__46183__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__46210 = seq__46178;
var G__46211 = chunk__46179;
var G__46212 = count__46180;
var G__46213 = (i__46181 + (1));
seq__46178 = G__46210;
chunk__46179 = G__46211;
count__46180 = G__46212;
i__46181 = G__46213;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46178);
if(temp__4657__auto__){
var seq__46178__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46178__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__46178__$1);
var G__46214 = cljs.core.chunk_rest.call(null,seq__46178__$1);
var G__46215 = c__19173__auto__;
var G__46216 = cljs.core.count.call(null,c__19173__auto__);
var G__46217 = (0);
seq__46178 = G__46214;
chunk__46179 = G__46215;
count__46180 = G__46216;
i__46181 = G__46217;
continue;
} else {
var vec__46185 = cljs.core.first.call(null,seq__46178__$1);
var name = cljs.core.nth.call(null,vec__46185,(0),null);
var map__46186 = cljs.core.nth.call(null,vec__46185,(1),null);
var map__46186__$1 = ((((!((map__46186 == null)))?((((map__46186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46186):map__46186);
var doc = cljs.core.get.call(null,map__46186__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__46186__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__46218 = cljs.core.next.call(null,seq__46178__$1);
var G__46219 = null;
var G__46220 = (0);
var G__46221 = (0);
seq__46178 = G__46218;
chunk__46179 = G__46219;
count__46180 = G__46220;
i__46181 = G__46221;
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

//# sourceMappingURL=repl.js.map?rel=1458852301406