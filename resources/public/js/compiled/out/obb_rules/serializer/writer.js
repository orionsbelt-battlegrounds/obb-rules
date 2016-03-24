// Compiled by ClojureScript 1.7.228 {}
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
obb_rules.serializer.writer.action__GT_str = (function (){var method_table__19283__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19284__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19285__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19286__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19287__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"obb-rules.serializer.writer","action->str"),((function (method_table__19283__auto__,prefer_table__19284__auto__,method_cache__19285__auto__,cached_hierarchy__19286__auto__,hierarchy__19287__auto__){
return (function (action){
return cljs.core.first.call(null,action);
});})(method_table__19283__auto__,prefer_table__19284__auto__,method_cache__19285__auto__,cached_hierarchy__19286__auto__,hierarchy__19287__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19287__auto__,method_table__19283__auto__,prefer_table__19284__auto__,method_cache__19285__auto__,cached_hierarchy__19286__auto__));
})();
}
cljs.core._add_method.call(null,obb_rules.serializer.writer.action__GT_str,new cljs.core.Keyword(null,"deploy","deploy",-2006774212),(function (p__41715){
var vec__41716 = p__41715;
var _ = cljs.core.nth.call(null,vec__41716,(0),null);
var quantity = cljs.core.nth.call(null,vec__41716,(1),null);
var unit = cljs.core.nth.call(null,vec__41716,(2),null);
var vec__41717 = cljs.core.nth.call(null,vec__41716,(3),null);
var source_x = cljs.core.nth.call(null,vec__41717,(0),null);
var source_y = cljs.core.nth.call(null,vec__41717,(1),null);
return [cljs.core.str("d"),cljs.core.str(source_x),cljs.core.str(source_y),cljs.core.str("."),cljs.core.str(quantity),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,unit))].join('');
}));
cljs.core._add_method.call(null,obb_rules.serializer.writer.action__GT_str,new cljs.core.Keyword(null,"attack","attack",1957061788),(function (p__41718){
var vec__41719 = p__41718;
var _ = cljs.core.nth.call(null,vec__41719,(0),null);
var vec__41720 = cljs.core.nth.call(null,vec__41719,(1),null);
var source_x = cljs.core.nth.call(null,vec__41720,(0),null);
var source_y = cljs.core.nth.call(null,vec__41720,(1),null);
var vec__41721 = cljs.core.nth.call(null,vec__41719,(2),null);
var target_x = cljs.core.nth.call(null,vec__41721,(0),null);
var target_y = cljs.core.nth.call(null,vec__41721,(1),null);
return [cljs.core.str("a"),cljs.core.str(source_x),cljs.core.str(source_y),cljs.core.str(target_x),cljs.core.str(target_y)].join('');
}));
cljs.core._add_method.call(null,obb_rules.serializer.writer.action__GT_str,new cljs.core.Keyword(null,"goto","goto",80149757),(function (p__41722){
var vec__41723 = p__41722;
var _ = cljs.core.nth.call(null,vec__41723,(0),null);
var vec__41724 = cljs.core.nth.call(null,vec__41723,(1),null);
var source_x = cljs.core.nth.call(null,vec__41724,(0),null);
var source_y = cljs.core.nth.call(null,vec__41724,(1),null);
var vec__41725 = cljs.core.nth.call(null,vec__41723,(2),null);
var target_x = cljs.core.nth.call(null,vec__41725,(0),null);
var target_y = cljs.core.nth.call(null,vec__41725,(1),null);
return [cljs.core.str("g"),cljs.core.str(source_x),cljs.core.str(source_y),cljs.core.str(target_x),cljs.core.str(target_y)].join('');
}));
cljs.core._add_method.call(null,obb_rules.serializer.writer.action__GT_str,new cljs.core.Keyword(null,"rotate","rotate",152705015),(function (p__41726){
var vec__41727 = p__41726;
var _ = cljs.core.nth.call(null,vec__41727,(0),null);
var vec__41728 = cljs.core.nth.call(null,vec__41727,(1),null);
var source_x = cljs.core.nth.call(null,vec__41728,(0),null);
var source_y = cljs.core.nth.call(null,vec__41728,(1),null);
var dir = cljs.core.nth.call(null,vec__41727,(2),null);
return [cljs.core.str("r"),cljs.core.str(source_x),cljs.core.str(source_y),cljs.core.str(cljs.core.first.call(null,cljs.core.name.call(null,dir)))].join('');
}));
cljs.core._add_method.call(null,obb_rules.serializer.writer.action__GT_str,new cljs.core.Keyword(null,"move","move",-2110884309),(function (p__41729){
var vec__41730 = p__41729;
var _ = cljs.core.nth.call(null,vec__41730,(0),null);
var vec__41731 = cljs.core.nth.call(null,vec__41730,(1),null);
var source_x = cljs.core.nth.call(null,vec__41731,(0),null);
var source_y = cljs.core.nth.call(null,vec__41731,(1),null);
var vec__41732 = cljs.core.nth.call(null,vec__41730,(2),null);
var target_x = cljs.core.nth.call(null,vec__41732,(0),null);
var target_y = cljs.core.nth.call(null,vec__41732,(1),null);
var quantity = cljs.core.nth.call(null,vec__41730,(3),null);
return [cljs.core.str("m"),cljs.core.str(source_x),cljs.core.str(source_y),cljs.core.str(target_x),cljs.core.str(target_y),cljs.core.str("."),cljs.core.str(quantity)].join('');
}));
/**
 * Translates a coll of raw actions to a concise string representation
 */
obb_rules.serializer.writer.actions__GT_str = (function obb_rules$serializer$writer$actions__GT_str(actions){
return clojure.string.join.call(null,obb_rules.serializer.common.action_separator,cljs.core.map.call(null,obb_rules.serializer.writer.action__GT_str,actions));
});
/**
 * Renders a history item to a string
 */
obb_rules.serializer.writer.history_item__GT_str = (function obb_rules$serializer$writer$history_item__GT_str(item){
return [cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(item))),cljs.core.str(obb_rules.serializer.common.action_separator),cljs.core.str(obb_rules.serializer.writer.actions__GT_str.call(null,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(item)))].join('');
});
/**
 * Specific stash as a string
 */
obb_rules.serializer.writer.stash__GT_str = (function obb_rules$serializer$writer$stash__GT_str(stash){
return clojure.string.join.call(null,obb_rules.serializer.common.stash_separator,cljs.core.map.call(null,(function (p__41735){
var vec__41736 = p__41735;
var k = cljs.core.nth.call(null,vec__41736,(0),null);
var v = cljs.core.nth.call(null,vec__41736,(1),null);
return [cljs.core.str(v),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,k))].join('');
}),stash));
});
/**
 * Gets a string that represents the player stash, if any
 */
obb_rules.serializer.writer.player_stash_str = (function obb_rules$serializer$writer$player_stash_str(game,player){
var stash = obb_rules.game.get_stash.call(null,game,player);
if(cljs.core.seq.call(null,stash)){
return [cljs.core.str("\n"),cljs.core.str(cljs.core.name.call(null,player)),cljs.core.str("-stash: "),cljs.core.str(obb_rules.serializer.writer.stash__GT_str.call(null,stash))].join('');
} else {
return null;
}
});
/**
 * Gets a string the represents the stash, to be stored on the props
 */
obb_rules.serializer.writer.game_stash_str = (function obb_rules$serializer$writer$game_stash_str(game){
return [cljs.core.str(obb_rules.serializer.writer.player_stash_str.call(null,game,new cljs.core.Keyword(null,"p1","p1",-936759954))),cljs.core.str(obb_rules.serializer.writer.player_stash_str.call(null,game,new cljs.core.Keyword(null,"p2","p2",905500641)))].join('');
});
/**
 * Gets the game properties as a string
 */
obb_rules.serializer.writer.game_props__GT_str = (function obb_rules$serializer$writer$game_props__GT_str(game){
return [cljs.core.str("terrain: "),cljs.core.str(cljs.core.name.call(null,obb_rules.board.board_terrain.call(null,game))),cljs.core.str((cljs.core.truth_(obb_rules.game.deploy_QMARK_.call(null,game))?obb_rules.serializer.writer.game_stash_str.call(null,game):null)),cljs.core.str((cljs.core.truth_(obb_rules.game.first_player.call(null,game))?[cljs.core.str("\nfirst-player: "),cljs.core.str(cljs.core.name.call(null,obb_rules.game.first_player.call(null,game)))].join(''):null)),cljs.core.str("\nstate: "),cljs.core.str(cljs.core.name.call(null,obb_rules.game.state.call(null,game))),cljs.core.str((cljs.core.truth_(obb_rules.game.final_QMARK_.call(null,game))?[cljs.core.str("\nwinner: "),cljs.core.str(cljs.core.name.call(null,obb_rules.game_mode.winner.call(null,game)))].join(''):null))].join('');
});
/**
 * Translates a complete game to a concise string representation
 */
obb_rules.serializer.writer.game__GT_str = (function obb_rules$serializer$writer$game__GT_str(game){
var history = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(game);
var deploy_history = cljs.core.take.call(null,(2),history);
var turns_history = cljs.core.drop.call(null,(2),history);
return [cljs.core.str(obb_rules.serializer.writer.game_props__GT_str.call(null,game)),cljs.core.str(obb_rules.serializer.common.context_separator),cljs.core.str(clojure.string.join.call(null,"\n",cljs.core.map.call(null,obb_rules.serializer.writer.history_item__GT_str,deploy_history))),cljs.core.str(obb_rules.serializer.common.context_separator),cljs.core.str(clojure.string.join.call(null,"\n",cljs.core.map.call(null,obb_rules.serializer.writer.history_item__GT_str,turns_history)))].join('');
});

//# sourceMappingURL=writer.js.map?rel=1458852293175