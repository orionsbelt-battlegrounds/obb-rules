// Compiled by ClojureScript 1.7.228 {}
goog.provide('obb_rules.logger');
goog.require('cljs.core');
goog.require('obb_rules.simplifier');
obb_rules.logger._STAR_verbose_STAR_ = false;
/**
 * Logs the given data
 */
obb_rules.logger.log = (function obb_rules$logger$log(var_args){
var args__19435__auto__ = [];
var len__19428__auto___41740 = arguments.length;
var i__19429__auto___41741 = (0);
while(true){
if((i__19429__auto___41741 < len__19428__auto___41740)){
args__19435__auto__.push((arguments[i__19429__auto___41741]));

var G__41742 = (i__19429__auto___41741 + (1));
i__19429__auto___41741 = G__41742;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((0) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((0)),(0))):null);
return obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(argseq__19436__auto__);
});

obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_(obb_rules.logger._STAR_verbose_STAR_)){
return cljs.core.apply.call(null,cljs.core.println,args);
} else {
return null;
}
});

obb_rules.logger.log.cljs$lang$maxFixedArity = (0);

obb_rules.logger.log.cljs$lang$applyTo = (function (seq41739){
return obb_rules.logger.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41739));
});
/**
 * Logs ai-turn header
 */
obb_rules.logger.ai_turn = (function obb_rules$logger$ai_turn(ai_name,game){
obb_rules.logger.log.call(null,"## ~~~~~~~~~~~~~~~~~~~~~~");

obb_rules.logger.log.call(null,"## AI Turn:",ai_name);

obb_rules.logger.log.call(null,"Game:");

return obb_rules.logger.log.call(null,obb_rules.simplifier.clean_result.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"board","board",-1907017633),game], null)));
});
/**
 * Runs the given code in verbose mode
 */
obb_rules.logger.with_verbose = (function obb_rules$logger$with_verbose(var_args){
var args__19435__auto__ = [];
var len__19428__auto___41746 = arguments.length;
var i__19429__auto___41747 = (0);
while(true){
if((i__19429__auto___41747 < len__19428__auto___41746)){
args__19435__auto__.push((arguments[i__19429__auto___41747]));

var G__41748 = (i__19429__auto___41747 + (1));
i__19429__auto___41747 = G__41748;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((2) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((2)),(0))):null);
return obb_rules.logger.with_verbose.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19436__auto__);
});

obb_rules.logger.with_verbose.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("obb-rules.logger","*verbose*","obb-rules.logger/*verbose*",1699165534,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))))),body)));
});

obb_rules.logger.with_verbose.cljs$lang$maxFixedArity = (2);

obb_rules.logger.with_verbose.cljs$lang$applyTo = (function (seq41743){
var G__41744 = cljs.core.first.call(null,seq41743);
var seq41743__$1 = cljs.core.next.call(null,seq41743);
var G__41745 = cljs.core.first.call(null,seq41743__$1);
var seq41743__$2 = cljs.core.next.call(null,seq41743__$1);
return obb_rules.logger.with_verbose.cljs$core$IFn$_invoke$arity$variadic(G__41744,G__41745,seq41743__$2);
});

obb_rules.logger.with_verbose.cljs$lang$macro = true;
/**
 * Logs an AI option
 */
obb_rules.logger.ai_option = (function obb_rules$logger$ai_option(option){
obb_rules.logger.log.call(null,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(option));

return obb_rules.logger.log.call(null,"\tValue:",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(option),"(",new cljs.core.Keyword(null,"old-value","old-value",862546795).cljs$core$IFn$_invoke$arity$1(option),")","Cost:",new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(option));
});

//# sourceMappingURL=logger.js.map?rel=1458852293229