// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.actions.hooks');
goog.require('cljs.core');
goog.require('obb_rules.element');
goog.require('obb_rules.actions.rebound');
goog.require('obb_rules.actions.triple_attack');
goog.require('obb_rules.actions.strikeback');
obb_rules.actions.hooks.hook_handlers = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$rebound,obb_rules.actions.rebound.process,cljs.core.cst$kw$strikeback,obb_rules.actions.strikeback.process,cljs.core.cst$kw$triple,obb_rules.actions.triple_attack.process], null);
/**
 * Gets a handler for a hook
 */
obb_rules.actions.hooks.get_handler = (function obb_rules$actions$hooks$get_handler(hook_data){
var handler_name = cljs.core.first(hook_data);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(obb_rules.actions.hooks.hook_handlers,handler_name);
if(cljs.core.truth_(handler)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No hook handler for "),cljs.core.str(handler_name)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$handler], 0)))].join('')));
}

return handler;
});
if(typeof obb_rules.actions.hooks.process !== 'undefined'){
} else {
/**
 * Processes the event hooks for the given context
 */
obb_rules.actions.hooks.process = (function (){var method_table__7055__auto__ = (function (){var G__14945 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14945) : cljs.core.atom.call(null,G__14945));
})();
var prefer_table__7056__auto__ = (function (){var G__14946 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14946) : cljs.core.atom.call(null,G__14946));
})();
var method_cache__7057__auto__ = (function (){var G__14947 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14947) : cljs.core.atom.call(null,G__14947));
})();
var cached_hierarchy__7058__auto__ = (function (){var G__14948 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14948) : cljs.core.atom.call(null,G__14948));
})();
var hierarchy__7059__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("obb-rules.actions.hooks","process"),((function (method_table__7055__auto__,prefer_table__7056__auto__,method_cache__7057__auto__,cached_hierarchy__7058__auto__,hierarchy__7059__auto__){
return (function (event,args){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(event);
});})(method_table__7055__auto__,prefer_table__7056__auto__,method_cache__7057__auto__,cached_hierarchy__7058__auto__,hierarchy__7059__auto__))
,cljs.core.cst$kw$default,hierarchy__7059__auto__,method_table__7055__auto__,prefer_table__7056__auto__,method_cache__7057__auto__,cached_hierarchy__7058__auto__));
})();
}
obb_rules.actions.hooks.process.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$after_DASH_attack,(function (event,p__14949){
var map__14950 = p__14949;
var map__14950__$1 = ((((!((map__14950 == null)))?((((map__14950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14950):map__14950);
var args = map__14950__$1;
var attacker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14950__$1,cljs.core.cst$kw$attacker);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14950__$1,cljs.core.cst$kw$board);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14950__$1,cljs.core.cst$kw$info);
var temp__4423__auto__ = obb_rules.element.hooks(attacker,event);
if(cljs.core.truth_(temp__4423__auto__)){
var hooks = temp__4423__auto__;
return obb_rules.actions.hooks.get_handler(cljs.core.first(hooks)).call(null,cljs.core.first(hooks),args);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board,info], null);
}
}));
obb_rules.actions.hooks.process.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$after_DASH_hit,(function (event,p__14952){
var map__14953 = p__14952;
var map__14953__$1 = ((((!((map__14953 == null)))?((((map__14953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14953):map__14953);
var args = map__14953__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14953__$1,cljs.core.cst$kw$target);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14953__$1,cljs.core.cst$kw$board);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14953__$1,cljs.core.cst$kw$info);
var temp__4423__auto__ = obb_rules.element.hooks(target,event);
if(cljs.core.truth_(temp__4423__auto__)){
var hooks = temp__4423__auto__;
return obb_rules.actions.hooks.get_handler(cljs.core.first(hooks)).call(null,cljs.core.first(hooks),args);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board,info], null);
}
}));
