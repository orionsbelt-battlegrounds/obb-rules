// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.logger');
goog.require('cljs.core');
goog.require('obb_rules.simplifier');
obb_rules.logger._STAR_verbose_STAR_ = false;
/**
 * Logs the given data
 */
obb_rules.logger.log = (function obb_rules$logger$log(var_args){
var args__7286__auto__ = [];
var len__7279__auto___15953 = arguments.length;
var i__7280__auto___15954 = (0);
while(true){
if((i__7280__auto___15954 < len__7279__auto___15953)){
args__7286__auto__.push((arguments[i__7280__auto___15954]));

var G__15955 = (i__7280__auto___15954 + (1));
i__7280__auto___15954 = G__15955;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((0) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((0)),(0),null)):null);
return obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(argseq__7287__auto__);
});

obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_(obb_rules.logger._STAR_verbose_STAR_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,args);
} else {
return null;
}
});

obb_rules.logger.log.cljs$lang$maxFixedArity = (0);

obb_rules.logger.log.cljs$lang$applyTo = (function (seq15952){
return obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15952));
});
/**
 * Logs ai-turn header
 */
obb_rules.logger.ai_turn = (function obb_rules$logger$ai_turn(ai_name,game){
obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["## ~~~~~~~~~~~~~~~~~~~~~~"], 0));

obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["## AI Turn:",ai_name], 0));

obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Game:"], 0));

return obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([obb_rules.simplifier.clean_result(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$board,game], null))], 0));
});
/**
 * Runs the given code in verbose mode
 */
obb_rules.logger.with_verbose = (function obb_rules$logger$with_verbose(var_args){
var args__7286__auto__ = [];
var len__7279__auto___15959 = arguments.length;
var i__7280__auto___15960 = (0);
while(true){
if((i__7280__auto___15960 < len__7279__auto___15959)){
args__7286__auto__.push((arguments[i__7280__auto___15960]));

var G__15961 = (i__7280__auto___15960 + (1));
i__7280__auto___15960 = G__15961;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((2) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((2)),(0),null)):null);
return obb_rules.logger.with_verbose.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7287__auto__);
});

obb_rules.logger.with_verbose.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_binding),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$obb_DASH_rules$logger_SLASH__STAR_verbose_STAR_),cljs.core._conj(cljs.core.List.EMPTY,true)))))),cljs.core.array_seq([body], 0))));
});

obb_rules.logger.with_verbose.cljs$lang$maxFixedArity = (2);

obb_rules.logger.with_verbose.cljs$lang$applyTo = (function (seq15956){
var G__15957 = cljs.core.first(seq15956);
var seq15956__$1 = cljs.core.next(seq15956);
var G__15958 = cljs.core.first(seq15956__$1);
var seq15956__$2 = cljs.core.next(seq15956__$1);
return obb_rules.logger.with_verbose.cljs$core$IFn$_invoke$arity$variadic(G__15957,G__15958,seq15956__$2);
});

obb_rules.logger.with_verbose.cljs$lang$macro = true;
/**
 * Logs an AI option
 */
obb_rules.logger.ai_option = (function obb_rules$logger$ai_option(option){
obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$actions.cljs$core$IFn$_invoke$arity$1(option)], 0));

return obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\tValue:",cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(option),"(",cljs.core.cst$kw$old_DASH_value.cljs$core$IFn$_invoke$arity$1(option),")","Cost:",cljs.core.cst$kw$cost.cljs$core$IFn$_invoke$arity$1(option)], 0));
});