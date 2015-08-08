// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.logger');
goog.require('cljs.core');
goog.require('obb_rules.simplifier');
obb_rules.logger._STAR_verbose_STAR_ = true;
/**
 * Logs the given data
 */
obb_rules.logger.log = (function obb_rules$logger$log(){
var args__8245__auto__ = [];
var len__8238__auto___10566 = arguments.length;
var i__8239__auto___10567 = (0);
while(true){
if((i__8239__auto___10567 < len__8238__auto___10566)){
args__8245__auto__.push((arguments[i__8239__auto___10567]));

var G__10568 = (i__8239__auto___10567 + (1));
i__8239__auto___10567 = G__10568;
continue;
} else {
}
break;
}

var argseq__8246__auto__ = ((((0) < args__8245__auto__.length))?(new cljs.core.IndexedSeq(args__8245__auto__.slice((0)),(0))):null);
return obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(argseq__8246__auto__);
});

obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_(obb_rules.logger._STAR_verbose_STAR_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,args);
} else {
return null;
}
});

obb_rules.logger.log.cljs$lang$maxFixedArity = (0);

obb_rules.logger.log.cljs$lang$applyTo = (function (seq10565){
return obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10565));
});
/**
 * Logs ai-turn header
 */
obb_rules.logger.ai_turn = (function obb_rules$logger$ai_turn(ai_name,game){
obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["## ~~~~~~~~~~~~~~~~~~~~~~"], 0));

obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["## AI Turn:",ai_name], 0));

obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Game:"], 0));

return obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([obb_rules.simplifier.clean_result(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$board,game], null))], 0));
});
/**
 * Runs the given code in verbose mode
 */
obb_rules.logger.with_verbose = (function obb_rules$logger$with_verbose(){
var args__8245__auto__ = [];
var len__8238__auto___10572 = arguments.length;
var i__8239__auto___10573 = (0);
while(true){
if((i__8239__auto___10573 < len__8238__auto___10572)){
args__8245__auto__.push((arguments[i__8239__auto___10573]));

var G__10574 = (i__8239__auto___10573 + (1));
i__8239__auto___10573 = G__10574;
continue;
} else {
}
break;
}

var argseq__8246__auto__ = ((((2) < args__8245__auto__.length))?(new cljs.core.IndexedSeq(args__8245__auto__.slice((2)),(0))):null);
return obb_rules.logger.with_verbose.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8246__auto__);
});

obb_rules.logger.with_verbose.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("obb-rules.logger","*verbose*","obb-rules.logger/*verbose*",1699165534,null)),cljs.core._conj(cljs.core.List.EMPTY,true)))))),cljs.core.array_seq([body], 0))));
});

obb_rules.logger.with_verbose.cljs$lang$maxFixedArity = (2);

obb_rules.logger.with_verbose.cljs$lang$applyTo = (function (seq10569){
var G__10570 = cljs.core.first(seq10569);
var seq10569__$1 = cljs.core.next(seq10569);
var G__10571 = cljs.core.first(seq10569__$1);
var seq10569__$2 = cljs.core.next(seq10569__$1);
return obb_rules.logger.with_verbose.cljs$core$IFn$_invoke$arity$variadic(G__10570,G__10571,seq10569__$2);
});

obb_rules.logger.with_verbose.cljs$lang$macro = true;
/**
 * Logs an AI option
 */
obb_rules.logger.ai_option = (function obb_rules$logger$ai_option(option){
obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$actions.cljs$core$IFn$_invoke$arity$1(option)], 0));

return obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\tValue:",cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1(option),"(",cljs.core.constant$keyword$old_DASH_value.cljs$core$IFn$_invoke$arity$1(option),")","Cost:",cljs.core.constant$keyword$cost.cljs$core$IFn$_invoke$arity$1(option)], 0));
});
