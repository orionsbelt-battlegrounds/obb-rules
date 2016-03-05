// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.serializer.writer');
goog.require('cljs.core');
goog.require('obb_rules.game');
goog.require('obb_rules.game_mode');
/**
 * This marker separates each context of the dumped game
 *   (properties, deploy, turns,...)
 */
obb_rules.serializer.writer.context_separator = "\n\n";
/**
 * This marker separates each action in a collection of actions
 */
obb_rules.serializer.writer.action_separator = " ";
if(typeof obb_rules.serializer.writer.action__GT_str !== 'undefined'){
} else {
/**
 * Translates a raw action to a concise string representation
 */
obb_rules.serializer.writer.action__GT_str = (function (){var method_table__7069__auto__ = (function (){var G__14889 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14889) : cljs.core.atom.call(null,G__14889));
})();
var prefer_table__7070__auto__ = (function (){var G__14890 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14890) : cljs.core.atom.call(null,G__14890));
})();
var method_cache__7071__auto__ = (function (){var G__14891 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14891) : cljs.core.atom.call(null,G__14891));
})();
var cached_hierarchy__7072__auto__ = (function (){var G__14892 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14892) : cljs.core.atom.call(null,G__14892));
})();
var hierarchy__7073__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("obb-rules.serializer.writer","action->str"),((function (method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__,hierarchy__7073__auto__){
return (function (action){
return cljs.core.first(action);
});})(method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__,hierarchy__7073__auto__))
,cljs.core.cst$kw$default,hierarchy__7073__auto__,method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__));
})();
}
obb_rules.serializer.writer.action__GT_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$deploy,(function (p__14893){
var vec__14894 = p__14893;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14894,(0),null);
var quantity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14894,(1),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14894,(2),null);
var vec__14895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14894,(3),null);
var source_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14895,(0),null);
var source_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14895,(1),null);
return [cljs.core.str("d"),cljs.core.str(source_x),cljs.core.str(source_y),cljs.core.str("."),cljs.core.str(quantity),cljs.core.str("."),cljs.core.str(cljs.core.name(unit))].join('');
}));
obb_rules.serializer.writer.action__GT_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attack,(function (p__14896){
var vec__14897 = p__14896;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14897,(0),null);
var vec__14898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14897,(1),null);
var source_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14898,(0),null);
var source_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14898,(1),null);
var vec__14899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14897,(2),null);
var target_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14899,(0),null);
var target_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14899,(1),null);
return [cljs.core.str("a"),cljs.core.str(source_x),cljs.core.str(source_y),cljs.core.str(target_x),cljs.core.str(target_y)].join('');
}));
obb_rules.serializer.writer.action__GT_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$goto,(function (p__14900){
var vec__14901 = p__14900;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14901,(0),null);
var vec__14902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14901,(1),null);
var source_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14902,(0),null);
var source_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14902,(1),null);
var vec__14903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14901,(2),null);
var target_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14903,(0),null);
var target_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14903,(1),null);
return [cljs.core.str("g"),cljs.core.str(source_x),cljs.core.str(source_y),cljs.core.str(target_x),cljs.core.str(target_y)].join('');
}));
obb_rules.serializer.writer.action__GT_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$rotate,(function (p__14904){
var vec__14905 = p__14904;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14905,(0),null);
var vec__14906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14905,(1),null);
var source_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14906,(0),null);
var source_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14906,(1),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14905,(2),null);
return [cljs.core.str("r"),cljs.core.str(source_x),cljs.core.str(source_y),cljs.core.str(cljs.core.first(cljs.core.name(dir)))].join('');
}));
obb_rules.serializer.writer.action__GT_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$move,(function (p__14907){
var vec__14908 = p__14907;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14908,(0),null);
var vec__14909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14908,(1),null);
var source_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14909,(0),null);
var source_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14909,(1),null);
var vec__14910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14908,(2),null);
var target_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14910,(0),null);
var target_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14910,(1),null);
var quantity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14908,(3),null);
return [cljs.core.str("m"),cljs.core.str(source_x),cljs.core.str(source_y),cljs.core.str(target_x),cljs.core.str(target_y),cljs.core.str("."),cljs.core.str(quantity)].join('');
}));
/**
 * Translates a coll of raw actions to a concise string representation
 */
obb_rules.serializer.writer.actions__GT_str = (function obb_rules$serializer$writer$actions__GT_str(actions){
var G__14913 = obb_rules.serializer.writer.action_separator;
var G__14914 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(obb_rules.serializer.writer.action__GT_str,actions);
return (clojure.string.join.cljs$core$IFn$_invoke$arity$2 ? clojure.string.join.cljs$core$IFn$_invoke$arity$2(G__14913,G__14914) : clojure.string.join.call(null,G__14913,G__14914));
});
/**
 * Gets the game properties as a string
 */
obb_rules.serializer.writer.game_props__GT_str = (function obb_rules$serializer$writer$game_props__GT_str(game){
return [cljs.core.str("state: "),cljs.core.str(cljs.core.name(obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game))),cljs.core.str((cljs.core.truth_(obb_rules.game.final_QMARK_(game))?[cljs.core.str("\nwinner: "),cljs.core.str(cljs.core.name(obb_rules.game_mode.winner(game)))].join(''):null))].join('');
});
/**
 * Translates a complete game to a concise string representation
 */
obb_rules.serializer.writer.game__GT_str = (function obb_rules$serializer$writer$game__GT_str(game){
var history = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(game);
var deploy_history = cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),history);
var turns_history = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),history);
return [cljs.core.str(obb_rules.serializer.writer.game_props__GT_str(game)),cljs.core.str(obb_rules.serializer.writer.context_separator),cljs.core.str((function (){var G__14919 = "\n";
var G__14920 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(obb_rules.serializer.writer.actions__GT_str,deploy_history);
return (clojure.string.join.cljs$core$IFn$_invoke$arity$2 ? clojure.string.join.cljs$core$IFn$_invoke$arity$2(G__14919,G__14920) : clojure.string.join.call(null,G__14919,G__14920));
})()),cljs.core.str(obb_rules.serializer.writer.context_separator),cljs.core.str((function (){var G__14921 = "\n";
var G__14922 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(obb_rules.serializer.writer.actions__GT_str,turns_history);
return (clojure.string.join.cljs$core$IFn$_invoke$arity$2 ? clojure.string.join.cljs$core$IFn$_invoke$arity$2(G__14921,G__14922) : clojure.string.join.call(null,G__14921,G__14922));
})())].join('');
});
