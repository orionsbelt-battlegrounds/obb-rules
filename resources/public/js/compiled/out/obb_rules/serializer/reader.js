// Compiled by ClojureScript 1.7.228 {}
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
return obb_rules.host_dependent.parse_int.call(null,[cljs.core.str(cljs.core.nth.call(null,s,pos))].join(''));
});
if(typeof obb_rules.serializer.reader.str__GT_action !== 'undefined'){
} else {
/**
 * Converts a action in string format to a raw action
 */
obb_rules.serializer.reader.str__GT_action = (function (){var method_table__19283__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19284__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19285__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19286__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19287__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"obb-rules.serializer.reader","str->action"),((function (method_table__19283__auto__,prefer_table__19284__auto__,method_cache__19285__auto__,cached_hierarchy__19286__auto__,hierarchy__19287__auto__){
return (function (s){
return cljs.core.first.call(null,s);
});})(method_table__19283__auto__,prefer_table__19284__auto__,method_cache__19285__auto__,cached_hierarchy__19286__auto__,hierarchy__19287__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19287__auto__,method_table__19283__auto__,prefer_table__19284__auto__,method_cache__19285__auto__,cached_hierarchy__19286__auto__));
})();
}
cljs.core._add_method.call(null,obb_rules.serializer.reader.str__GT_action,"a",(function (s){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attack","attack",1957061788),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.serializer.reader.get_int.call(null,s,(1)),obb_rules.serializer.reader.get_int.call(null,s,(2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.serializer.reader.get_int.call(null,s,(3)),obb_rules.serializer.reader.get_int.call(null,s,(4))], null)], null);
}));
cljs.core._add_method.call(null,obb_rules.serializer.reader.str__GT_action,"g",(function (s){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"goto","goto",80149757),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.serializer.reader.get_int.call(null,s,(1)),obb_rules.serializer.reader.get_int.call(null,s,(2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.serializer.reader.get_int.call(null,s,(3)),obb_rules.serializer.reader.get_int.call(null,s,(4))], null)], null);
}));
cljs.core._add_method.call(null,obb_rules.serializer.reader.str__GT_action,"m",(function (s){
var parts = clojure.string.split.call(null,s,/\./);
var quantity = obb_rules.host_dependent.parse_int.call(null,cljs.core.nth.call(null,parts,(1)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.serializer.reader.get_int.call(null,s,(1)),obb_rules.serializer.reader.get_int.call(null,s,(2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.serializer.reader.get_int.call(null,s,(3)),obb_rules.serializer.reader.get_int.call(null,s,(4))], null),quantity], null);
}));
cljs.core._add_method.call(null,obb_rules.serializer.reader.str__GT_action,"r",(function (s){
var c = cljs.core.nth.call(null,s,(3));
var dir = (function (){var G__42127 = c;
switch (G__42127) {
case "w":
return new cljs.core.Keyword(null,"west","west",708776677);

break;
case "s":
return new cljs.core.Keyword(null,"south","south",1586796293);

break;
case "e":
return new cljs.core.Keyword(null,"east","east",1189821678);

break;
case "n":
return new cljs.core.Keyword(null,"north","north",651323902);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(c)].join('')));

}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.serializer.reader.get_int.call(null,s,(1)),obb_rules.serializer.reader.get_int.call(null,s,(2))], null),dir], null);
}));
cljs.core._add_method.call(null,obb_rules.serializer.reader.str__GT_action,"d",(function (s){
var parts = clojure.string.split.call(null,s,cljs.core.re_pattern.call(null,obb_rules.serializer.common.in_action_separator));
var quantity = obb_rules.host_dependent.parse_int.call(null,cljs.core.nth.call(null,parts,(1)));
var unit = cljs.core.keyword.call(null,cljs.core.nth.call(null,parts,(2)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deploy","deploy",-2006774212),quantity,unit,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.serializer.reader.get_int.call(null,s,(1)),obb_rules.serializer.reader.get_int.call(null,s,(2))], null)], null);
}));
/**
 * Given a string with several actions, returns a vector with all the
 *   raw actions.
 */
obb_rules.serializer.reader.str__GT_actions = (function obb_rules$serializer$reader$str__GT_actions(s){
return cljs.core.mapv.call(null,obb_rules.serializer.reader.str__GT_action,clojure.string.split.call(null,s,cljs.core.re_pattern.call(null,obb_rules.serializer.common.action_separator)));
});
/**
 * Creates a history item from a string
 */
obb_rules.serializer.reader.str__GT_history_item = (function obb_rules$serializer$reader$str__GT_history_item(s){
var parts = clojure.string.split.call(null,s,cljs.core.re_pattern.call(null,obb_rules.serializer.common.action_separator));
var player = cljs.core.keyword.call(null,cljs.core.first.call(null,parts));
var actions = cljs.core.mapv.call(null,obb_rules.serializer.reader.str__GT_action,cljs.core.rest.call(null,parts));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),player,new cljs.core.Keyword(null,"actions","actions",-812656882),actions], null);
});
/**
 * Parses string representation of an attribute and associates it to
 *   the given attrs map
 */
obb_rules.serializer.reader.gather_attributes = (function obb_rules$serializer$reader$gather_attributes(attrs,line){
var parts = clojure.string.split.call(null,line,cljs.core.re_pattern.call(null,obb_rules.serializer.common.attributes_separator));
var k = cljs.core.nth.call(null,parts,(0));
var v = clojure.string.trim.call(null,cljs.core.nth.call(null,parts,(1)));
return cljs.core.assoc.call(null,attrs,cljs.core.keyword.call(null,k),cljs.core.keyword.call(null,v));
});
/**
 * Splits the given string in lines, and also trims them
 */
obb_rules.serializer.reader.split_lines = (function obb_rules$serializer$reader$split_lines(s){
return cljs.core.map.call(null,clojure.string.trim,clojure.string.split_lines.call(null,s));
});
/**
 * Gets the game attributes as a map
 */
obb_rules.serializer.reader.str__GT_attrs = (function obb_rules$serializer$reader$str__GT_attrs(s){
return cljs.core.reduce.call(null,obb_rules.serializer.reader.gather_attributes,cljs.core.PersistentArrayMap.EMPTY,obb_rules.serializer.reader.split_lines.call(null,s));
});
/**
 * Creates a history from a string
 */
obb_rules.serializer.reader.str__GT_history_items = (function obb_rules$serializer$reader$str__GT_history_items(s){
if(cljs.core.truth_(s)){
return cljs.core.mapv.call(null,obb_rules.serializer.reader.str__GT_history_item,obb_rules.serializer.reader.split_lines.call(null,s));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Given two deploy turns, this fn returns the raw actions for each player
 */
obb_rules.serializer.reader.deploy_per_player = (function obb_rules$serializer$reader$deploy_per_player(deploy_history){
var deploy1 = cljs.core.first.call(null,deploy_history);
var deploy2 = cljs.core.second.call(null,deploy_history);
var player = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(deploy1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"p1","p1",-936759954),player)){
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
var map__42132 = obb_rules.actions.deploy.analyse.call(null,raw_action);
var map__42132__$1 = ((((!((map__42132 == null)))?((((map__42132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42132):map__42132);
var quantity = cljs.core.get.call(null,map__42132__$1,new cljs.core.Keyword(null,"quantity","quantity",-1929050694));
var unit = cljs.core.get.call(null,map__42132__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
return cljs.core.update.call(null,stash,unit,((function (map__42132,map__42132__$1,quantity,unit){
return (function (p1__42129_SHARP_){
return (quantity + (function (){var or__18370__auto__ = p1__42129_SHARP_;
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return (0);
}
})());
});})(map__42132,map__42132__$1,quantity,unit))
);
});
/**
 * Given a collection of raw deploy actions, rebuild the original stash,
 *   by summing all the quantities
 */
obb_rules.serializer.reader.build_stash_from_deploy = (function obb_rules$serializer$reader$build_stash_from_deploy(deploy_history_item){
return cljs.core.reduce.call(null,obb_rules.serializer.reader.add_from_deploy_to_stash,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(deploy_history_item));
});
/**
 * Gets the stash from a stash string
 */
obb_rules.serializer.reader.str__GT_stash = (function obb_rules$serializer$reader$str__GT_stash(raw){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (raw_unit_quantity){
var parts = clojure.string.split.call(null,raw_unit_quantity,/\./);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,cljs.core.nth.call(null,parts,(1))),obb_rules.host_dependent.parse_int.call(null,cljs.core.nth.call(null,parts,(0)))], null);
}),clojure.string.split.call(null,raw,cljs.core.re_pattern.call(null,obb_rules.serializer.common.stash_separator))));
});
/**
 * Gets the stash for the given player
 */
obb_rules.serializer.reader.build_stash = (function obb_rules$serializer$reader$build_stash(attrs,player,deploy_history_item){
var temp__4655__auto__ = cljs.core.get.call(null,attrs,cljs.core.keyword.call(null,[cljs.core.str(cljs.core.name.call(null,player)),cljs.core.str("-stash")].join('')),null);
if(cljs.core.truth_(temp__4655__auto__)){
var raw_stash = temp__4655__auto__;
return obb_rules.serializer.reader.str__GT_stash.call(null,cljs.core.name.call(null,raw_stash));
} else {
return obb_rules.serializer.reader.build_stash_from_deploy.call(null,deploy_history_item);
}
});
/**
 * Starts the game battle and runs turn actions
 */
obb_rules.serializer.reader.start_battle = (function obb_rules$serializer$reader$start_battle(game,attrs,history){
if(cljs.core.truth_(obb_rules.game.deploy_QMARK_.call(null,game))){
return game;
} else {
return obb_rules.turn.process_history.call(null,obb_rules.game.start_battle.call(null,game,new cljs.core.Keyword(null,"first-player","first-player",917418847).cljs$core$IFn$_invoke$arity$1(attrs)),history);
}
});
/**
 * Given a game string, returns the game, fully processed with all the
 *   given turns
 */
obb_rules.serializer.reader.str__GT_game = (function obb_rules$serializer$reader$str__GT_game(s){
var parts = clojure.string.split.call(null,s,cljs.core.re_pattern.call(null,obb_rules.serializer.common.context_separator));
var attrs = obb_rules.serializer.reader.str__GT_attrs.call(null,cljs.core.nth.call(null,parts,(0)));
var deploy_history = obb_rules.serializer.reader.str__GT_history_items.call(null,cljs.core.nth.call(null,parts,(1),null));
var vec__42135 = obb_rules.serializer.reader.deploy_per_player.call(null,deploy_history);
var p1_deploy = cljs.core.nth.call(null,vec__42135,(0),null);
var p2_deploy = cljs.core.nth.call(null,vec__42135,(1),null);
var stash1 = obb_rules.serializer.reader.build_stash.call(null,attrs,new cljs.core.Keyword(null,"p1","p1",-936759954),p1_deploy);
var stash2 = obb_rules.serializer.reader.build_stash.call(null,attrs,new cljs.core.Keyword(null,"p2","p2",905500641),p2_deploy);
var turn_history = obb_rules.serializer.reader.str__GT_history_items.call(null,cljs.core.nth.call(null,parts,(2),null));
return obb_rules.serializer.reader.start_battle.call(null,obb_rules.turn.process_history.call(null,obb_rules.game.new_game.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p1","p1",-936759954),stash1,new cljs.core.Keyword(null,"p2","p2",905500641),stash2], null),attrs),deploy_history),attrs,turn_history);
});

//# sourceMappingURL=reader.js.map?rel=1458852296281