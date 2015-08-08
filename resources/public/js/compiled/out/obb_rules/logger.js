// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.logger');
goog.require('cljs.core');
goog.require('obb_rules.simplifier');
obb_rules.logger._STAR_verbose_STAR_ = false;
/**
 * Logs the given data
 */
obb_rules.logger.log = (function obb_rules$logger$log(){
var args__8238__auto__ = [];
var len__8231__auto___10559 = arguments.length;
var i__8232__auto___10560 = (0);
while(true){
if((i__8232__auto___10560 < len__8231__auto___10559)){
args__8238__auto__.push((arguments[i__8232__auto___10560]));

var G__10561 = (i__8232__auto___10560 + (1));
i__8232__auto___10560 = G__10561;
continue;
} else {
}
break;
}

var argseq__8239__auto__ = ((((0) < args__8238__auto__.length))?(new cljs.core.IndexedSeq(args__8238__auto__.slice((0)),(0))):null);
return obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(argseq__8239__auto__);
});

obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_(obb_rules.logger._STAR_verbose_STAR_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,args);
} else {
return null;
}
});

obb_rules.logger.log.cljs$lang$maxFixedArity = (0);

obb_rules.logger.log.cljs$lang$applyTo = (function (seq10558){
return obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10558));
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
var args__8238__auto__ = [];
var len__8231__auto___10565 = arguments.length;
var i__8232__auto___10566 = (0);
while(true){
if((i__8232__auto___10566 < len__8231__auto___10565)){
args__8238__auto__.push((arguments[i__8232__auto___10566]));

var G__10567 = (i__8232__auto___10566 + (1));
i__8232__auto___10566 = G__10567;
continue;
} else {
}
break;
}

var argseq__8239__auto__ = ((((2) < args__8238__auto__.length))?(new cljs.core.IndexedSeq(args__8238__auto__.slice((2)),(0))):null);
return obb_rules.logger.with_verbose.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8239__auto__);
});

obb_rules.logger.with_verbose.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("obb-rules.logger","*verbose*","obb-rules.logger/*verbose*",1699165534,null)),cljs.core._conj(cljs.core.List.EMPTY,true)))))),cljs.core.array_seq([body], 0))));
});

obb_rules.logger.with_verbose.cljs$lang$maxFixedArity = (2);

obb_rules.logger.with_verbose.cljs$lang$applyTo = (function (seq10562){
var G__10563 = cljs.core.first(seq10562);
var seq10562__$1 = cljs.core.next(seq10562);
var G__10564 = cljs.core.first(seq10562__$1);
var seq10562__$2 = cljs.core.next(seq10562__$1);
return obb_rules.logger.with_verbose.cljs$core$IFn$_invoke$arity$variadic(G__10563,G__10564,seq10562__$2);
});

obb_rules.logger.with_verbose.cljs$lang$macro = true;
/**
 * Logs an AI option
 */
obb_rules.logger.ai_option = (function obb_rules$logger$ai_option(option){
obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$actions.cljs$core$IFn$_invoke$arity$1(option)], 0));

return obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\tValue:",cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1(option),"(",cljs.core.constant$keyword$old_DASH_value.cljs$core$IFn$_invoke$arity$1(option),")","data",cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(option),"coord",cljs.core.constant$keyword$element_DASH_coord.cljs$core$IFn$_invoke$arity$1(option),"Cost:",cljs.core.constant$keyword$cost.cljs$core$IFn$_invoke$arity$1(option)], 0));
});
