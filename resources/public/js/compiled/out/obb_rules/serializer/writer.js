// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.serializer.writer');
goog.require('cljs.core');
goog.require('obb_rules.game_mode');
goog.require('obb_rules.board');
goog.require('obb_rules.serializer.common');
goog.require('obb_rules.game');
goog.require('clojure.string');
if(typeof obb_rules.serializer.writer.action__GT_str !== 'undefined'){
} else {
/**
 * Translates a raw action to a concise string representation
 */
obb_rules.serializer.writer.action__GT_str = (function (){var method_table__7134__auto__ = (function (){var G__15924 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15924) : cljs.core.atom.call(null,G__15924));
})();
var prefer_table__7135__auto__ = (function (){var G__15925 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15925) : cljs.core.atom.call(null,G__15925));
})();
var method_cache__7136__auto__ = (function (){var G__15926 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15926) : cljs.core.atom.call(null,G__15926));
})();
var cached_hierarchy__7137__auto__ = (function (){var G__15927 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15927) : cljs.core.atom.call(null,G__15927));
})();
var hierarchy__7138__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("obb-rules.serializer.writer","action->str"),((function (method_table__7134__auto__,prefer_table__7135__auto__,method_cache__7136__auto__,cached_hierarchy__7137__auto__,hierarchy__7138__auto__){
return (function (action){
return cljs.core.first(action);
});})(method_table__7134__auto__,prefer_table__7135__auto__,method_cache__7136__auto__,cached_hierarchy__7137__auto__,hierarchy__7138__auto__))
,cljs.core.cst$kw$default,hierarchy__7138__auto__,method_table__7134__auto__,prefer_table__7135__auto__,method_cache__7136__auto__,cached_hierarchy__7137__auto__));
})();
}
obb_rules.serializer.writer.action__GT_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$deploy,(function (p__15928){
var vec__15929 = p__15928;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15929,(0),null);
var quantity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15929,(1),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15929,(2),null);
var vec__15930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15929,(3),null);
var source_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15930,(0),null);
var source_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15930,(1),null);
return [cljs.core.str("d"),cljs.core.str(source_x),cljs.core.str(source_y),cljs.core.str("."),cljs.core.str(quantity),cljs.core.str("."),cljs.core.str(cljs.core.name(unit))].join('');
}));
obb_rules.serializer.writer.action__GT_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attack,(function (p__15931){
var vec__15932 = p__15931;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15932,(0),null);
var vec__15933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15932,(1),null);
var source_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15933,(0),null);
var source_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15933,(1),null);
var vec__15934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15932,(2),null);
var target_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15934,(0),null);
var target_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15934,(1),null);
return [cljs.core.str("a"),cljs.core.str(source_x),cljs.core.str(source_y),cljs.core.str(target_x),cljs.core.str(target_y)].join('');
}));
obb_rules.serializer.writer.action__GT_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$goto,(function (p__15935){
var vec__15936 = p__15935;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15936,(0),null);
var vec__15937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15936,(1),null);
var source_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15937,(0),null);
var source_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15937,(1),null);
var vec__15938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15936,(2),null);
var target_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15938,(0),null);
var target_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15938,(1),null);
return [cljs.core.str("g"),cljs.core.str(source_x),cljs.core.str(source_y),cljs.core.str(target_x),cljs.core.str(target_y)].join('');
}));
obb_rules.serializer.writer.action__GT_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$rotate,(function (p__15939){
var vec__15940 = p__15939;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15940,(0),null);
var vec__15941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15940,(1),null);
var source_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15941,(0),null);
var source_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15941,(1),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15940,(2),null);
return [cljs.core.str("r"),cljs.core.str(source_x),cljs.core.str(source_y),cljs.core.str(cljs.core.first(cljs.core.name(dir)))].join('');
}));
obb_rules.serializer.writer.action__GT_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$move,(function (p__15942){
var vec__15943 = p__15942;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15943,(0),null);
var vec__15944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15943,(1),null);
var source_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15944,(0),null);
var source_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15944,(1),null);
var vec__15945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15943,(2),null);
var target_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15945,(0),null);
var target_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15945,(1),null);
var quantity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15943,(3),null);
return [cljs.core.str("m"),cljs.core.str(source_x),cljs.core.str(source_y),cljs.core.str(target_x),cljs.core.str(target_y),cljs.core.str("."),cljs.core.str(quantity)].join('');
}));
/**
 * Translates a coll of raw actions to a concise string representation
 */
obb_rules.serializer.writer.actions__GT_str = (function obb_rules$serializer$writer$actions__GT_str(actions){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(obb_rules.serializer.common.action_separator,cljs.core.map.cljs$core$IFn$_invoke$arity$2(obb_rules.serializer.writer.action__GT_str,actions));
});
/**
 * Renders a history item to a string
 */
obb_rules.serializer.writer.history_item__GT_str = (function obb_rules$serializer$writer$history_item__GT_str(item){
return [cljs.core.str(cljs.core.name(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(item))),cljs.core.str(obb_rules.serializer.common.action_separator),cljs.core.str(obb_rules.serializer.writer.actions__GT_str(cljs.core.cst$kw$actions.cljs$core$IFn$_invoke$arity$1(item)))].join('');
});
/**
 * Specific stash as a string
 */
obb_rules.serializer.writer.stash__GT_str = (function obb_rules$serializer$writer$stash__GT_str(stash){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(obb_rules.serializer.common.stash_separator,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15948){
var vec__15949 = p__15948;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15949,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15949,(1),null);
return [cljs.core.str(v),cljs.core.str("."),cljs.core.str(cljs.core.name(k))].join('');
}),stash));
});
/**
 * Gets a string that represents the player stash, if any
 */
obb_rules.serializer.writer.player_stash_str = (function obb_rules$serializer$writer$player_stash_str(game,player){
var stash = obb_rules.game.get_stash(game,player);
if(cljs.core.seq(stash)){
return [cljs.core.str("\n"),cljs.core.str(cljs.core.name(player)),cljs.core.str("-stash: "),cljs.core.str(obb_rules.serializer.writer.stash__GT_str(stash))].join('');
} else {
return null;
}
});
/**
 * Gets a string the represents the stash, to be stored on the props
 */
obb_rules.serializer.writer.game_stash_str = (function obb_rules$serializer$writer$game_stash_str(game){
return [cljs.core.str(obb_rules.serializer.writer.player_stash_str(game,cljs.core.cst$kw$p1)),cljs.core.str(obb_rules.serializer.writer.player_stash_str(game,cljs.core.cst$kw$p2))].join('');
});
/**
 * Gets the game properties as a string
 */
obb_rules.serializer.writer.game_props__GT_str = (function obb_rules$serializer$writer$game_props__GT_str(game){
return [cljs.core.str("mode: "),cljs.core.str(cljs.core.name(obb_rules.game.mode.cljs$core$IFn$_invoke$arity$1(game))),cljs.core.str("\nterrain: "),cljs.core.str(cljs.core.name(obb_rules.board.board_terrain.cljs$core$IFn$_invoke$arity$1(game))),cljs.core.str((cljs.core.truth_(obb_rules.game.deploy_QMARK_(game))?obb_rules.serializer.writer.game_stash_str(game):null)),cljs.core.str((cljs.core.truth_(obb_rules.game.first_player(game))?[cljs.core.str("\nfirst-player: "),cljs.core.str(cljs.core.name(obb_rules.game.first_player(game)))].join(''):null)),cljs.core.str("\nstate: "),cljs.core.str(cljs.core.name(obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game))),cljs.core.str((cljs.core.truth_(obb_rules.game.final_QMARK_(game))?[cljs.core.str("\nwinner: "),cljs.core.str(cljs.core.name(obb_rules.game_mode.winner(game)))].join(''):null))].join('');
});
/**
 * Translates a complete game to a concise string representation
 */
obb_rules.serializer.writer.game__GT_str = (function obb_rules$serializer$writer$game__GT_str(game){
var history = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(game);
var deploy_history = cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),history);
var turns_history = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),history);
return [cljs.core.str(obb_rules.serializer.writer.game_props__GT_str(game)),cljs.core.str(obb_rules.serializer.common.context_separator),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(obb_rules.serializer.writer.history_item__GT_str,deploy_history))),cljs.core.str(obb_rules.serializer.common.context_separator),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(obb_rules.serializer.writer.history_item__GT_str,turns_history)))].join('');
});
