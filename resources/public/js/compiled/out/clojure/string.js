// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
clojure.string.seq_reverse = (function clojure$string$seq_reverse(coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,coll);
});
clojure.string.re_surrogate_pair = (new RegExp("([\\uD800-\\uDBFF])([\\uDC00-\\uDFFF])","g"));
/**
 * Returns s with its characters reversed.
 */
clojure.string.reverse = (function clojure$string$reverse(s){
return s.replace(clojure.string.re_surrogate_pair,"$2$1").split("").reverse().join("");
});
/**
 * Replaces all instance of match with replacement in s.
 * match/replacement can be:
 * 
 * string / string
 * pattern / (string or function of match).
 */
clojure.string.replace = (function clojure$string$replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp((function (){var G__13985 = match;
return goog.string.regExpEscape(G__13985);
})(),"g")),replacement);
} else {
if((match instanceof RegExp)){
return s.replace((new RegExp(match.source,"g")),replacement);
} else {
throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');

}
}
});
/**
 * Replaces the first instance of match with replacement in s.
 * match/replacement can be:
 * 
 * string / string
 * pattern / (string or function of match).
 */
clojure.string.replace_first = (function clojure$string$replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
 * Returns a string of all elements in coll, as returned by (seq coll),
 * separated by an optional separator.
 */
clojure.string.join = (function clojure$string$join(){
var G__13987 = arguments.length;
switch (G__13987) {
case 1:
return clojure.string.join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.string.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.string.join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
var sb = (new goog.string.StringBuffer());
var coll__$1 = cljs.core.seq(coll);
while(true){
if(coll__$1){
var G__13989 = sb.append([cljs.core.str(cljs.core.first(coll__$1))].join(''));
var G__13990 = cljs.core.next(coll__$1);
sb = G__13989;
coll__$1 = G__13990;
continue;
} else {
return sb.toString();
}
break;
}
});

clojure.string.join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
var sb = (new goog.string.StringBuffer());
var coll__$1 = cljs.core.seq(coll);
while(true){
if(coll__$1){
sb.append([cljs.core.str(cljs.core.first(coll__$1))].join(''));

var coll__$2 = cljs.core.next(coll__$1);
if((coll__$2 == null)){
} else {
sb.append(separator);
}

var G__13991 = sb;
var G__13992 = coll__$2;
sb = G__13991;
coll__$1 = G__13992;
continue;
} else {
return sb.toString();
}
break;
}
});

clojure.string.join.cljs$lang$maxFixedArity = 2;
/**
 * Converts string to all upper-case.
 */
clojure.string.upper_case = (function clojure$string$upper_case(s){
return s.toUpperCase();
});
/**
 * Converts string to all lower-case.
 */
clojure.string.lower_case = (function clojure$string$lower_case(s){
return s.toLowerCase();
});
/**
 * Converts first character of the string to upper-case, all other
 * characters to lower-case.
 */
clojure.string.capitalize = (function clojure$string$capitalize(s){
if((cljs.core.count(s) < (2))){
return clojure.string.upper_case(s);
} else {
return [cljs.core.str(clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)))),cljs.core.str(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1))))].join('');
}
});
clojure.string.pop_last_while_empty = (function clojure$string$pop_last_while_empty(v){
var v__$1 = v;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.peek(v__$1))){
var G__13993 = cljs.core.pop(v__$1);
v__$1 = G__13993;
continue;
} else {
return v__$1;
}
break;
}
});
clojure.string.discard_trailing_if_needed = (function clojure$string$discard_trailing_if_needed(limit,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),limit)){
return clojure.string.pop_last_while_empty(v);
} else {
return v;
}
});
clojure.string.split_with_empty_regex = (function clojure$string$split_with_empty_regex(s,limit){
if(((limit <= (0))) || ((limit >= ((2) + cljs.core.count(s))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.cons("",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.seq(s)))),"");
} else {
var pred__14001 = cljs.core._EQ_;
var expr__14002 = limit;
if(cljs.core.truth_((function (){var G__14004 = (1);
var G__14005 = expr__14002;
return (pred__14001.cljs$core$IFn$_invoke$arity$2 ? pred__14001.cljs$core$IFn$_invoke$arity$2(G__14004,G__14005) : pred__14001.call(null,G__14004,G__14005));
})())){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[s],null));
} else {
if(cljs.core.truth_((function (){var G__14006 = (2);
var G__14007 = expr__14002;
return (pred__14001.cljs$core$IFn$_invoke$arity$2 ? pred__14001.cljs$core$IFn$_invoke$arity$2(G__14006,G__14007) : pred__14001.call(null,G__14006,G__14007));
})())){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,["",s],null));
} else {
var c = (limit - (2));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.cons("",cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.seq(s))),(0),c))),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,c));
}
}
}
});
/**
 * Splits string on a regular expression. Optional argument limit is
 * the maximum number of splits. Not lazy. Returns vector of the splits.
 */
clojure.string.split = (function clojure$string$split(){
var G__14009 = arguments.length;
switch (G__14009) {
case 2:
return clojure.string.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.string.split.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.string.split.cljs$core$IFn$_invoke$arity$2 = (function (s,re){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,re,(0));
});

clojure.string.split.cljs$core$IFn$_invoke$arity$3 = (function (s,re,limit){
return clojure.string.discard_trailing_if_needed(limit,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2([cljs.core.str(re)].join(''),"/(?:)/"))?clojure.string.split_with_empty_regex(s,limit):(((limit < (1)))?cljs.core.vec([cljs.core.str(s)].join('').split(re)):(function (){var s__$1 = s;
var limit__$1 = limit;
var parts = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(limit__$1,(1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parts,s__$1);
} else {
var temp__4423__auto__ = cljs.core.re_find(re,s__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
var index = s__$1.indexOf(m);
var G__14011 = s__$1.substring((index + cljs.core.count(m)));
var G__14012 = (limit__$1 - (1));
var G__14013 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parts,s__$1.substring((0),index));
s__$1 = G__14011;
limit__$1 = G__14012;
parts = G__14013;
continue;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parts,s__$1);
}
}
break;
}
})())));
});

clojure.string.split.cljs$lang$maxFixedArity = 3;
/**
 * Splits s on
 * or
 * .
 */
clojure.string.split_lines = (function clojure$string$split_lines(s){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\n|\r\n/);
});
/**
 * Removes whitespace from both ends of string.
 */
clojure.string.trim = (function clojure$string$trim(s){
var G__14015 = s;
return goog.string.trim(G__14015);
});
/**
 * Removes whitespace from the left side of string.
 */
clojure.string.triml = (function clojure$string$triml(s){
var G__14017 = s;
return goog.string.trimLeft(G__14017);
});
/**
 * Removes whitespace from the right side of string.
 */
clojure.string.trimr = (function clojure$string$trimr(s){
var G__14019 = s;
return goog.string.trimRight(G__14019);
});
/**
 * Removes all trailing newline \n or return \r characters from
 * string.  Similar to Perl's chomp.
 */
clojure.string.trim_newline = (function clojure$string$trim_newline(s){
var index = s.length;
while(true){
if((index === (0))){
return "";
} else {
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,(index - (1)));
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ch,"\n")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ch,"\r"))){
var G__14020 = (index - (1));
index = G__14020;
continue;
} else {
return s.substring((0),index);
}
}
break;
}
});
/**
 * True is s is nil, empty, or contains only whitespace.
 */
clojure.string.blank_QMARK_ = (function clojure$string$blank_QMARK_(s){
var G__14022 = s;
return goog.string.isEmptySafe(G__14022);
});
/**
 * Return a new string, using cmap to escape each character ch
 * from s as follows:
 * 
 * If (cmap ch) is nil, append ch to the new string.
 * If (cmap ch) is non-nil, append (str (cmap ch)) instead.
 */
clojure.string.escape = (function clojure$string$escape(s,cmap){
var buffer = (new goog.string.StringBuffer());
var length = s.length;
var index = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(length,index)){
return buffer.toString();
} else {
var ch = s.charAt(index);
var temp__4423__auto___14023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cmap,ch);
if(cljs.core.truth_(temp__4423__auto___14023)){
var replacement_14024 = temp__4423__auto___14023;
buffer.append([cljs.core.str(replacement_14024)].join(''));
} else {
buffer.append(ch);
}

var G__14025 = (index + (1));
index = G__14025;
continue;
}
break;
}
});