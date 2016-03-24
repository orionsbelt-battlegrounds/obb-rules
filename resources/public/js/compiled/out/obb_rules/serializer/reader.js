// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.serializer.reader');
goog.require('cljs.core');
goog.require('obb_rules.game_mode');
goog.require('obb_rules.board');
goog.require('obb_rules.serializer.common');
goog.require('obb_rules.result');
goog.require('obb_rules.game');
goog.require('obb_rules.turn');
goog.require('obb_rules.actions.deploy');
goog.require('clojure.string');
goog.require('obb_rules.host_dependent');
/**
 * Given a string, gets the char on the specific position, and returns it
 *   as an integer
 */
obb_rules.serializer.reader.get_int = (function obb_rules$serializer$reader$get_int(s,pos){
return obb_rules.host_dependent.parse_int([cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,pos))].join(''));
});
if(typeof obb_rules.serializer.reader.str__GT_action !== 'undefined'){
} else {
/**
 * Converts a action in string format to a raw action
 */
obb_rules.serializer.reader.str__GT_action = (function (){var method_table__7069__auto__ = (function (){var G__16122 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16122) : cljs.core.atom.call(null,G__16122));
})();
var prefer_table__7070__auto__ = (function (){var G__16123 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16123) : cljs.core.atom.call(null,G__16123));
})();
var method_cache__7071__auto__ = (function (){var G__16124 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16124) : cljs.core.atom.call(null,G__16124));
})();
var cached_hierarchy__7072__auto__ = (function (){var G__16125 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16125) : cljs.core.atom.call(null,G__16125));
})();
var hierarchy__7073__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("obb-rules.serializer.reader","str->action"),((function (method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__,hierarchy__7073__auto__){
return (function (s){
return cljs.core.first(s);
});})(method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__,hierarchy__7073__auto__))
,cljs.core.cst$kw$default,hierarchy__7073__auto__,method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__));
})();
}
obb_rules.serializer.reader.str__GT_action.cljs$core$IMultiFn$_add_method$arity$3(null,"a",(function (s){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attack,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.serializer.reader.get_int(s,(1)),obb_rules.serializer.reader.get_int(s,(2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.serializer.reader.get_int(s,(3)),obb_rules.serializer.reader.get_int(s,(4))], null)], null);
}));
obb_rules.serializer.reader.str__GT_action.cljs$core$IMultiFn$_add_method$arity$3(null,"g",(function (s){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$goto,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.serializer.reader.get_int(s,(1)),obb_rules.serializer.reader.get_int(s,(2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.serializer.reader.get_int(s,(3)),obb_rules.serializer.reader.get_int(s,(4))], null)], null);
}));
obb_rules.serializer.reader.str__GT_action.cljs$core$IMultiFn$_add_method$arity$3(null,"m",(function (s){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\./);
var quantity = obb_rules.host_dependent.parse_int(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(parts,(1)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$move,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.serializer.reader.get_int(s,(1)),obb_rules.serializer.reader.get_int(s,(2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.serializer.reader.get_int(s,(3)),obb_rules.serializer.reader.get_int(s,(4))], null),quantity], null);
}));
obb_rules.serializer.reader.str__GT_action.cljs$core$IMultiFn$_add_method$arity$3(null,"r",(function (s){
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(3));
var dir = (function (){var G__16126 = c;
switch (G__16126) {
case "w":
return cljs.core.cst$kw$west;

break;
case "s":
return cljs.core.cst$kw$south;

break;
case "e":
return cljs.core.cst$kw$east;

break;
case "n":
return cljs.core.cst$kw$north;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(c)].join('')));

}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rotate,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.serializer.reader.get_int(s,(1)),obb_rules.serializer.reader.get_int(s,(2))], null),dir], null);
}));
obb_rules.serializer.reader.str__GT_action.cljs$core$IMultiFn$_add_method$arity$3(null,"d",(function (s){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,cljs.core.re_pattern(obb_rules.serializer.common.in_action_separator));
var quantity = obb_rules.host_dependent.parse_int(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(parts,(1)));
var unit = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(parts,(2)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$deploy,quantity,unit,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.serializer.reader.get_int(s,(1)),obb_rules.serializer.reader.get_int(s,(2))], null)], null);
}));
/**
 * Given a string with several actions, returns a vector with all the
 *   raw actions.
 */
obb_rules.serializer.reader.str__GT_actions = (function obb_rules$serializer$reader$str__GT_actions(s){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(obb_rules.serializer.reader.str__GT_action,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,cljs.core.re_pattern(obb_rules.serializer.common.action_separator)));
});
/**
 * Creates a history item from a string
 */
obb_rules.serializer.reader.str__GT_history_item = (function obb_rules$serializer$reader$str__GT_history_item(s){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,cljs.core.re_pattern(obb_rules.serializer.common.action_separator));
var player = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(parts));
var actions = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(obb_rules.serializer.reader.str__GT_action,cljs.core.rest(parts));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$player,player,cljs.core.cst$kw$actions,actions], null);
});
/**
 * Parses string representation of an attribute and associates it to
 *   the given attrs map
 */
obb_rules.serializer.reader.gather_attributes = (function obb_rules$serializer$reader$gather_attributes(attrs,line){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,cljs.core.re_pattern(obb_rules.serializer.common.attributes_separator));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(parts,(0));
var v = clojure.string.trim(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(parts,(1)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v));
});
/**
 * Splits the given string in lines, and also trims them
 */
obb_rules.serializer.reader.split_lines = (function obb_rules$serializer$reader$split_lines(s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split_lines(s));
});
/**
 * Gets the game attributes as a map
 */
obb_rules.serializer.reader.str__GT_attrs = (function obb_rules$serializer$reader$str__GT_attrs(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(obb_rules.serializer.reader.gather_attributes,cljs.core.PersistentArrayMap.EMPTY,obb_rules.serializer.reader.split_lines(s));
});
/**
 * Creates a history from a string
 */
obb_rules.serializer.reader.str__GT_history_items = (function obb_rules$serializer$reader$str__GT_history_items(s){
if(cljs.core.truth_(s)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(obb_rules.serializer.reader.str__GT_history_item,obb_rules.serializer.reader.split_lines(s));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Given two deploy turns, this fn returns the raw actions for each player
 */
obb_rules.serializer.reader.deploy_per_player = (function obb_rules$serializer$reader$deploy_per_player(deploy_history){
var deploy1 = cljs.core.first(deploy_history);
var deploy2 = cljs.core.second(deploy_history);
var player = cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(deploy1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p1,player)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deploy1,deploy2], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deploy2,deploy1], null);
}
});
/**
 * Gets the quantity of a unit deployed on a raw deploy action, and
 *   adds it to the given stash map
 */
obb_rules.serializer.reader.add_from_deploy_to_stash = (function obb_rules$serializer$reader$add_from_deploy_to_stash(stash,raw_action){
var map__16131 = obb_rules.actions.deploy.analyse(raw_action);
var map__16131__$1 = ((((!((map__16131 == null)))?((((map__16131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16131):map__16131);
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16131__$1,cljs.core.cst$kw$quantity);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16131__$1,cljs.core.cst$kw$unit);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(stash,unit,((function (map__16131,map__16131__$1,quantity,unit){
return (function (p1__16128_SHARP_){
return (quantity + (function (){var or__6156__auto__ = p1__16128_SHARP_;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (0);
}
})());
});})(map__16131,map__16131__$1,quantity,unit))
);
});
/**
 * Given a collection of raw deploy actions, rebuild the original stash,
 *   by summing all the quantities
 */
obb_rules.serializer.reader.build_stash_from_deploy = (function obb_rules$serializer$reader$build_stash_from_deploy(deploy_history_item){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(obb_rules.serializer.reader.add_from_deploy_to_stash,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$actions.cljs$core$IFn$_invoke$arity$1(deploy_history_item));
});
/**
 * Gets the stash from a stash string
 */
obb_rules.serializer.reader.str__GT_stash = (function obb_rules$serializer$reader$str__GT_stash(raw){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (raw_unit_quantity){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(raw_unit_quantity,/\./);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(parts,(1))),obb_rules.host_dependent.parse_int(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(parts,(0)))], null);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(raw,cljs.core.re_pattern(obb_rules.serializer.common.stash_separator))));
});
/**
 * Gets the stash for the given player
 */
obb_rules.serializer.reader.build_stash = (function obb_rules$serializer$reader$build_stash(attrs,player,deploy_history_item){
var temp__4655__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.core.name(player)),cljs.core.str("-stash")].join('')),null);
if(cljs.core.truth_(temp__4655__auto__)){
var raw_stash = temp__4655__auto__;
return obb_rules.serializer.reader.str__GT_stash(cljs.core.name(raw_stash));
} else {
return obb_rules.serializer.reader.build_stash_from_deploy(deploy_history_item);
}
});
/**
 * Starts the game battle and runs turn actions
 */
obb_rules.serializer.reader.start_battle = (function obb_rules$serializer$reader$start_battle(game,attrs,history){
if(cljs.core.truth_(obb_rules.game.deploy_QMARK_(game))){
return game;
} else {
return obb_rules.turn.process_history(obb_rules.game.start_battle.cljs$core$IFn$_invoke$arity$2(game,cljs.core.cst$kw$first_DASH_player.cljs$core$IFn$_invoke$arity$1(attrs)),history);
}
});
/**
 * Given a game string, returns the game, fully processed with all the
 *   given turns
 */
obb_rules.serializer.reader.str__GT_game = (function obb_rules$serializer$reader$str__GT_game(s){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,cljs.core.re_pattern(obb_rules.serializer.common.context_separator));
var attrs = obb_rules.serializer.reader.str__GT_attrs(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(parts,(0)));
var deploy_history = obb_rules.serializer.reader.str__GT_history_items(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(parts,(1),null));
var vec__16134 = obb_rules.serializer.reader.deploy_per_player(deploy_history);
var p1_deploy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16134,(0),null);
var p2_deploy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16134,(1),null);
var stash1 = obb_rules.serializer.reader.build_stash(attrs,cljs.core.cst$kw$p1,p1_deploy);
var stash2 = obb_rules.serializer.reader.build_stash(attrs,cljs.core.cst$kw$p2,p2_deploy);
var turn_history = obb_rules.serializer.reader.str__GT_history_items(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(parts,(2),null));
return obb_rules.serializer.reader.start_battle(obb_rules.turn.process_history(obb_rules.game.new_game.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$p1,stash1,cljs.core.cst$kw$p2,stash2], null),cljs.core.array_seq([attrs], 0)),deploy_history),attrs,turn_history);
});
