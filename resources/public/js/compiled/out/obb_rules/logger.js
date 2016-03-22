// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.logger');
goog.require('cljs.core');
goog.require('obb_rules.simplifier');
obb_rules.logger._STAR_verbose_STAR_ = false;
/**
 * Logs the given data
 */
obb_rules.logger.log = (function obb_rules$logger$log(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15124 = arguments.length;
var i__7215__auto___15125 = (0);
while(true){
if((i__7215__auto___15125 < len__7214__auto___15124)){
args__7221__auto__.push((arguments[i__7215__auto___15125]));

var G__15126 = (i__7215__auto___15125 + (1));
i__7215__auto___15125 = G__15126;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_(obb_rules.logger._STAR_verbose_STAR_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,args);
} else {
return null;
}
});

obb_rules.logger.log.cljs$lang$maxFixedArity = (0);

obb_rules.logger.log.cljs$lang$applyTo = (function (seq15123){
return obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15123));
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
var args__7221__auto__ = [];
var len__7214__auto___15130 = arguments.length;
var i__7215__auto___15131 = (0);
while(true){
if((i__7215__auto___15131 < len__7214__auto___15130)){
args__7221__auto__.push((arguments[i__7215__auto___15131]));

var G__15132 = (i__7215__auto___15131 + (1));
i__7215__auto___15131 = G__15132;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((2) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((2)),(0))):null);
return obb_rules.logger.with_verbose.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7222__auto__);
});

obb_rules.logger.with_verbose.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_binding),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$obb_DASH_rules$logger_SLASH__STAR_verbose_STAR_),cljs.core._conj(cljs.core.List.EMPTY,true)))))),cljs.core.array_seq([body], 0))));
});

obb_rules.logger.with_verbose.cljs$lang$maxFixedArity = (2);

obb_rules.logger.with_verbose.cljs$lang$applyTo = (function (seq15127){
var G__15128 = cljs.core.first(seq15127);
var seq15127__$1 = cljs.core.next(seq15127);
var G__15129 = cljs.core.first(seq15127__$1);
var seq15127__$2 = cljs.core.next(seq15127__$1);
return obb_rules.logger.with_verbose.cljs$core$IFn$_invoke$arity$variadic(G__15128,G__15129,seq15127__$2);
});

obb_rules.logger.with_verbose.cljs$lang$macro = true;
/**
 * Logs an AI option
 */
obb_rules.logger.ai_option = (function obb_rules$logger$ai_option(option){
obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$actions.cljs$core$IFn$_invoke$arity$1(option)], 0));

return obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\tValue:",cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(option),"(",cljs.core.cst$kw$old_DASH_value.cljs$core$IFn$_invoke$arity$1(option),")","Cost:",cljs.core.cst$kw$cost.cljs$core$IFn$_invoke$arity$1(option)], 0));
});
