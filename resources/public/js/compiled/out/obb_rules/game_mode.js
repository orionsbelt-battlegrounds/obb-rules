// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.game_mode');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.stash');
goog.require('obb_rules.player');
goog.require('obb_rules.game');
/**
 * Checks whether the given player still has the star unit
 */
obb_rules.game_mode.star_unit_QMARK_ = (function obb_rules$game_mode$star_unit_QMARK_(game,player){
return obb_rules.board.unit_present_QMARK_(game,player,"star");
});
if(typeof obb_rules.game_mode.filter_winners !== 'undefined'){
} else {
/**
 * Filter the list of players that meet conditions to win the game
 */
obb_rules.game_mode.filter_winners = (function (){var method_table__7134__auto__ = (function (){var G__15908 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15908) : cljs.core.atom.call(null,G__15908));
})();
var prefer_table__7135__auto__ = (function (){var G__15909 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15909) : cljs.core.atom.call(null,G__15909));
})();
var method_cache__7136__auto__ = (function (){var G__15910 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15910) : cljs.core.atom.call(null,G__15910));
})();
var cached_hierarchy__7137__auto__ = (function (){var G__15911 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15911) : cljs.core.atom.call(null,G__15911));
})();
var hierarchy__7138__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("obb-rules.game-mode","filter-winners"),((function (method_table__7134__auto__,prefer_table__7135__auto__,method_cache__7136__auto__,cached_hierarchy__7137__auto__,hierarchy__7138__auto__){
return (function (game){
return obb_rules.game.mode.cljs$core$IFn$_invoke$arity$1(game);
});})(method_table__7134__auto__,prefer_table__7135__auto__,method_cache__7136__auto__,cached_hierarchy__7137__auto__,hierarchy__7138__auto__))
,cljs.core.cst$kw$default,hierarchy__7138__auto__,method_table__7134__auto__,prefer_table__7135__auto__,method_cache__7136__auto__,cached_hierarchy__7137__auto__));
})();
}
obb_rules.game_mode.filter_winners.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$annihilation,(function (game){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15912_SHARP_){
return cljs.core.not(obb_rules.board.empty_board_QMARK_.cljs$core$IFn$_invoke$arity$2(game,p1__15912_SHARP_));
}),obb_rules.player.all_players);
}));
obb_rules.game_mode.filter_winners.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$supernova,(function (game){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15913_SHARP_){
return obb_rules.game_mode.star_unit_QMARK_(game,p1__15913_SHARP_);
}),obb_rules.player.all_players);
}));
/**
 * Gets the winner of the given game
 */
obb_rules.game_mode.winner = (function obb_rules$game_mode$winner(game){
var vec__15915 = (obb_rules.game_mode.filter_winners.cljs$core$IFn$_invoke$arity$1 ? obb_rules.game_mode.filter_winners.cljs$core$IFn$_invoke$arity$1(game) : obb_rules.game_mode.filter_winners.call(null,game));
var first = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15915,(0),null);
var others = cljs.core.nthnext(vec__15915,(1));
var candidates = vec__15915;
if(cljs.core.empty_QMARK_(candidates)){
return cljs.core.cst$kw$draw;
} else {
if(cljs.core.empty_QMARK_(others)){
return first;
} else {
return cljs.core.cst$kw$none;

}
}
});
/**
 * Checks if there is already a winner
 */
obb_rules.game_mode.winner_QMARK_ = (function obb_rules$game_mode$winner_QMARK_(game){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(obb_rules.game_mode.winner(game),cljs.core.cst$kw$none);
});
obb_rules.game_mode.add_star_units = (function obb_rules$game_mode$add_star_units(game){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__15916_SHARP_,p2__15917_SHARP_){
return obb_rules.game.update_stash.cljs$core$IFn$_invoke$arity$variadic(p1__15916_SHARP_,p2__15917_SHARP_,obb_rules.stash.add_units,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$star,(1)], null)], 0));
}),game,obb_rules.player.all_players);
});
if(typeof obb_rules.game_mode.on_new_game !== 'undefined'){
} else {
/**
 * Hook to run mode specific preparation on game creation
 */
obb_rules.game_mode.on_new_game = (function (){var method_table__7134__auto__ = (function (){var G__15918 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15918) : cljs.core.atom.call(null,G__15918));
})();
var prefer_table__7135__auto__ = (function (){var G__15919 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15919) : cljs.core.atom.call(null,G__15919));
})();
var method_cache__7136__auto__ = (function (){var G__15920 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15920) : cljs.core.atom.call(null,G__15920));
})();
var cached_hierarchy__7137__auto__ = (function (){var G__15921 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15921) : cljs.core.atom.call(null,G__15921));
})();
var hierarchy__7138__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("obb-rules.game-mode","on-new-game"),((function (method_table__7134__auto__,prefer_table__7135__auto__,method_cache__7136__auto__,cached_hierarchy__7137__auto__,hierarchy__7138__auto__){
return (function (game){
return obb_rules.game.mode.cljs$core$IFn$_invoke$arity$1(game);
});})(method_table__7134__auto__,prefer_table__7135__auto__,method_cache__7136__auto__,cached_hierarchy__7137__auto__,hierarchy__7138__auto__))
,cljs.core.cst$kw$default,hierarchy__7138__auto__,method_table__7134__auto__,prefer_table__7135__auto__,method_cache__7136__auto__,cached_hierarchy__7137__auto__));
})();
}
obb_rules.game_mode.on_new_game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$supernova,(function (game){
return obb_rules.game_mode.add_star_units(game);
}));
obb_rules.game_mode.on_new_game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$annihilation,(function (game){
return game;
}));
