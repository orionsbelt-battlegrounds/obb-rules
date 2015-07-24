// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.actions.hooks');
goog.require('cljs.core');
goog.require('obb_rules.element');
goog.require('obb_rules.actions.rebound');
goog.require('obb_rules.actions.triple_attack');
goog.require('obb_rules.actions.strikeback');
obb_rules.actions.hooks.hook_handlers = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$rebound,obb_rules.actions.rebound.process,cljs.core.constant$keyword$strikeback,obb_rules.actions.strikeback.process,cljs.core.constant$keyword$triple,obb_rules.actions.triple_attack.process], null);
/**
 * Gets a handler for a hook
 */
obb_rules.actions.hooks.get_handler = (function obb_rules$actions$hooks$get_handler(hook_data){
var handler_name = cljs.core.first(hook_data);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(obb_rules.actions.hooks.hook_handlers,handler_name);
if(cljs.core.truth_(handler)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No hook handler for "),cljs.core.str(handler_name)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"handler","handler",1444934915,null)], 0)))].join('')));
}

return handler;
});
if(typeof obb_rules.actions.hooks.process !== 'undefined'){
} else {
/**
 * Processes the event hooks for the given context
 */
obb_rules.actions.hooks.process = (function (){var method_table__7714__auto__ = (function (){var G__12658 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12658) : cljs.core.atom.call(null,G__12658));
})();
var prefer_table__7715__auto__ = (function (){var G__12659 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12659) : cljs.core.atom.call(null,G__12659));
})();
var method_cache__7716__auto__ = (function (){var G__12660 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12660) : cljs.core.atom.call(null,G__12660));
})();
var cached_hierarchy__7717__auto__ = (function (){var G__12661 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12661) : cljs.core.atom.call(null,G__12661));
})();
var hierarchy__7718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("obb-rules.actions.hooks","process"),((function (method_table__7714__auto__,prefer_table__7715__auto__,method_cache__7716__auto__,cached_hierarchy__7717__auto__,hierarchy__7718__auto__){
return (function (event,args){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(event);
});})(method_table__7714__auto__,prefer_table__7715__auto__,method_cache__7716__auto__,cached_hierarchy__7717__auto__,hierarchy__7718__auto__))
,cljs.core.constant$keyword$default,hierarchy__7718__auto__,method_table__7714__auto__,prefer_table__7715__auto__,method_cache__7716__auto__,cached_hierarchy__7717__auto__));
})();
}
obb_rules.actions.hooks.process.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$after_DASH_attack,(function (event,p__12662){
var map__12663 = p__12662;
var map__12663__$1 = ((cljs.core.seq_QMARK_(map__12663))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12663):map__12663);
var args = map__12663__$1;
var attacker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12663__$1,cljs.core.constant$keyword$attacker);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12663__$1,cljs.core.constant$keyword$board);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12663__$1,cljs.core.constant$keyword$info);
var temp__4423__auto__ = obb_rules.element.hooks(attacker,event);
if(cljs.core.truth_(temp__4423__auto__)){
var hooks = temp__4423__auto__;
return obb_rules.actions.hooks.get_handler(cljs.core.first(hooks)).call(null,cljs.core.first(hooks),args);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board,info], null);
}
}));
obb_rules.actions.hooks.process.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$after_DASH_hit,(function (event,p__12664){
var map__12665 = p__12664;
var map__12665__$1 = ((cljs.core.seq_QMARK_(map__12665))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12665):map__12665);
var args = map__12665__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12665__$1,cljs.core.constant$keyword$target);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12665__$1,cljs.core.constant$keyword$board);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12665__$1,cljs.core.constant$keyword$info);
var temp__4423__auto__ = obb_rules.element.hooks(target,event);
if(cljs.core.truth_(temp__4423__auto__)){
var hooks = temp__4423__auto__;
return obb_rules.actions.hooks.get_handler(cljs.core.first(hooks)).call(null,cljs.core.first(hooks),args);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board,info], null);
}
}));
