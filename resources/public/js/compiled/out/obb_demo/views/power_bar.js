// Compiled by ClojureScript 1.7.228 {}
goog.provide('obb_demo.views.power_bar');
goog.require('cljs.core');
goog.require('obb_demo.processor');
goog.require('obb_rules.math');
goog.require('obb_rules.evaluator');
goog.require('obb_demo.boardground');
goog.require('obb_rules.result');
goog.require('obb_rules.game');
goog.require('obb_rules.turn');
goog.require('obb_demo.state');
goog.require('obb_rules.stash');
/**
 * Shows each player's power
 */
obb_demo.views.power_bar.render = (function obb_demo$views$power_bar$render(game){
var vec__42141 = obb_rules.evaluator.eval_game.call(null,game);
var p1 = cljs.core.nth.call(null,vec__42141,(0),null);
var p2 = cljs.core.nth.call(null,vec__42141,(1),null);
var total = (p1 + p2);
var p1_perc = obb_rules.math.ceil.call(null,((100) * ((total - p1) / total)));
var p2_perc = ((100) - p1_perc);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress","div.progress",169531213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress-bar.progress-bar-info","div.progress-bar.progress-bar-info",-685166036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(p1_perc),cljs.core.str("%")].join('')], null)], null),p1_perc], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress-bar.progress-bar-success","div.progress-bar.progress-bar-success",546317099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(p2_perc),cljs.core.str("%")].join('')], null)], null),p2_perc], null)], null);
});

//# sourceMappingURL=power_bar.js.map?rel=1458852296420