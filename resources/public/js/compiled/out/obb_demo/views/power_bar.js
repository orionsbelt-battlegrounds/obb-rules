// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
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
var vec__15976 = obb_rules.evaluator.eval_game.cljs$core$IFn$_invoke$arity$1(game);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15976,(0),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15976,(1),null);
var total = (p1 + p2);
var p1_perc = obb_rules.math.ceil(((100) * ((total - p1) / total)));
var p2_perc = ((100) - p1_perc);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$progress,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$progress_DASH_bar$progress_DASH_bar_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,[cljs.core.str(p1_perc),cljs.core.str("%")].join('')], null)], null),p1_perc], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$progress_DASH_bar$progress_DASH_bar_DASH_success,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,[cljs.core.str(p2_perc),cljs.core.str("%")].join('')], null)], null),p2_perc], null)], null);
});
