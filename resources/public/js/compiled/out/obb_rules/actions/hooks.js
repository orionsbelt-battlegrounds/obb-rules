// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_rules.actions.hooks');
goog.require('cljs.core');
goog.require('obb_rules.element');
goog.require('obb_rules.actions.rebound');
goog.require('obb_rules.actions.triple_attack');
goog.require('obb_rules.actions.strikeback');
obb_rules.actions.hooks.hook_handlers = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rebound","rebound",-1472887389),obb_rules.actions.rebound.process,new cljs.core.Keyword(null,"strikeback","strikeback",833058309),obb_rules.actions.strikeback.process,new cljs.core.Keyword(null,"triple","triple",672002454),obb_rules.actions.triple_attack.process], null);
/**
 * Gets a handler for a hook
 */
obb_rules.actions.hooks.get_handler = (function obb_rules$actions$hooks$get_handler(hook_data){
var handler_name = cljs.core.first.call(null,hook_data);
var handler = cljs.core.get.call(null,obb_rules.actions.hooks.hook_handlers,handler_name);
if(cljs.core.truth_(handler)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No hook handler for "),cljs.core.str(handler_name)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"handler","handler",1444934915,null)))].join('')));
}

return handler;
});
if(typeof obb_rules.actions.hooks.process !== 'undefined'){
} else {
/**
 * Processes the event hooks for the given context
 */
obb_rules.actions.hooks.process = (function (){var method_table__17004__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17005__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17006__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17007__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17008__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"obb-rules.actions.hooks","process"),((function (method_table__17004__auto__,prefer_table__17005__auto__,method_cache__17006__auto__,cached_hierarchy__17007__auto__,hierarchy__17008__auto__){
return (function (event,args){
return cljs.core.keyword.call(null,event);
});})(method_table__17004__auto__,prefer_table__17005__auto__,method_cache__17006__auto__,cached_hierarchy__17007__auto__,hierarchy__17008__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17008__auto__,method_table__17004__auto__,prefer_table__17005__auto__,method_cache__17006__auto__,cached_hierarchy__17007__auto__));
})();
}
cljs.core._add_method.call(null,obb_rules.actions.hooks.process,new cljs.core.Keyword(null,"after-attack","after-attack",-1103058896),(function (event,p__23160){
var map__23161 = p__23160;
var map__23161__$1 = ((cljs.core.seq_QMARK_.call(null,map__23161))?cljs.core.apply.call(null,cljs.core.hash_map,map__23161):map__23161);
var args = map__23161__$1;
var attacker = cljs.core.get.call(null,map__23161__$1,new cljs.core.Keyword(null,"attacker","attacker",48869964));
var board = cljs.core.get.call(null,map__23161__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var info = cljs.core.get.call(null,map__23161__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var temp__4423__auto__ = obb_rules.element.hooks.call(null,attacker,event);
if(cljs.core.truth_(temp__4423__auto__)){
var hooks = temp__4423__auto__;
return obb_rules.actions.hooks.get_handler.call(null,cljs.core.first.call(null,hooks)).call(null,cljs.core.first.call(null,hooks),args);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board,info], null);
}
}));
cljs.core._add_method.call(null,obb_rules.actions.hooks.process,new cljs.core.Keyword(null,"after-hit","after-hit",491119628),(function (event,p__23162){
var map__23163 = p__23162;
var map__23163__$1 = ((cljs.core.seq_QMARK_.call(null,map__23163))?cljs.core.apply.call(null,cljs.core.hash_map,map__23163):map__23163);
var args = map__23163__$1;
var target = cljs.core.get.call(null,map__23163__$1,new cljs.core.Keyword(null,"target","target",253001721));
var board = cljs.core.get.call(null,map__23163__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var info = cljs.core.get.call(null,map__23163__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var temp__4423__auto__ = obb_rules.element.hooks.call(null,target,event);
if(cljs.core.truth_(temp__4423__auto__)){
var hooks = temp__4423__auto__;
return obb_rules.actions.hooks.get_handler.call(null,cljs.core.first.call(null,hooks)).call(null,cljs.core.first.call(null,hooks),args);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board,info], null);
}
}));

//# sourceMappingURL=hooks.js.map?rel=1436104824236