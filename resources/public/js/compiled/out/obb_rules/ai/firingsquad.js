// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_rules.ai.firingsquad');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.math');
goog.require('obb_rules.element');
goog.require('obb_rules.result');
goog.require('obb_rules.actions.move');
goog.require('obb_rules.game');
goog.require('obb_rules.ai.common');
goog.require('obb_rules.laws');
if(typeof obb_rules.ai.firingsquad.actions !== 'undefined'){
} else {
/**
 * Returns a list of actions to apply to the current game
 */
obb_rules.ai.firingsquad.actions = (function (){var method_table__17004__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17005__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17006__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17007__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17008__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"obb-rules.ai.firingsquad","actions"),((function (method_table__17004__auto__,prefer_table__17005__auto__,method_cache__17006__auto__,cached_hierarchy__17007__auto__,hierarchy__17008__auto__){
return (function (game,player){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"deploy","deploy",-2006774212),cljs.core.keyword.call(null,obb_rules.game.state.call(null,game)))){
return new cljs.core.Keyword(null,"deploy","deploy",-2006774212);
} else {
return new cljs.core.Keyword(null,"turn","turn",75759344);
}
});})(method_table__17004__auto__,prefer_table__17005__auto__,method_cache__17006__auto__,cached_hierarchy__17007__auto__,hierarchy__17008__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17008__auto__,method_table__17004__auto__,prefer_table__17005__auto__,method_cache__17006__auto__,cached_hierarchy__17007__auto__));
})();
}
cljs.core._add_method.call(null,obb_rules.ai.firingsquad.actions,new cljs.core.Keyword(null,"deploy","deploy",-2006774212),(function (game,player){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auto-deploy","auto-deploy",1838692925),new cljs.core.Keyword(null,"firingsquad","firingsquad",-1910418650)], null)], null);
}));
/**
 * Utility for debugging
 */
obb_rules.ai.firingsquad.logger = (function obb_rules$ai$firingsquad$logger(coll){
return coll;
});
/**
 * Gathers possible actions for the given element
 */
obb_rules.ai.firingsquad.gather_element_actions = (function obb_rules$ai$firingsquad$gather_element_actions(game,all,element){
return obb_rules.ai.firingsquad.logger.call(null,cljs.core.remove.call(null,cljs.core.empty_QMARK_,cljs.core.conj.call(null,all,cljs.core.first.call(null,cljs.core.sort_by.call(null,obb_rules.ai.common.option_value_sorter,cljs.core.into.call(null,cljs.core.into.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,obb_rules.ai.common.attack_options.call(null,game,element)),obb_rules.ai.common.rotate_attack_options.call(null,game,element)),obb_rules.ai.common.move_attack_options.call(null,game,element)))))));
});
/**
 * Given a collection of sorted options, tries to find a good one
 */
obb_rules.ai.firingsquad.find_one = (function obb_rules$ai$firingsquad$find_one(player,options){
var joiner = cljs.core.partial.call(null,obb_rules.ai.common.join_options,player);
var the_one = cljs.core.reduce.call(null,joiner,cljs.core.first.call(null,options),cljs.core.rest.call(null,options));
return the_one;
});
cljs.core._add_method.call(null,obb_rules.ai.firingsquad.actions,new cljs.core.Keyword(null,"turn","turn",75759344),(function (game,player){
var elements = obb_rules.board.board_elements.call(null,game,player);
var gatherer = cljs.core.partial.call(null,obb_rules.ai.firingsquad.gather_element_actions,game);
var option = obb_rules.ai.firingsquad.find_one.call(null,player,cljs.core.sort_by.call(null,obb_rules.ai.common.option_value_sorter,cljs.core.reduce.call(null,gatherer,cljs.core.PersistentVector.EMPTY,elements)));
if(cljs.core.truth_(option)){
return option.call(null,new cljs.core.Keyword(null,"actions","actions",-812656882));
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));

//# sourceMappingURL=firingsquad.js.map?rel=1437120999866