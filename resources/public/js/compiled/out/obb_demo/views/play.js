// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_demo.views.play');
goog.require('cljs.core');
goog.require('obb_demo.boardground');
goog.require('obb_rules.result');
goog.require('obb_rules.game');
goog.require('obb_rules.turn');
goog.require('obb_demo.state');
obb_demo.views.play.render = (function obb_demo$views$play$render(state){
var game = obb_rules.game.random.call(null);
var result = obb_rules.turn.process_actions.call(null,game,new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auto-deploy","auto-deploy",1838692925),new cljs.core.Keyword(null,"firingsquad","firingsquad",-1910418650)], null)], null));
var game2 = obb_rules.result.result_board.call(null,result);
var result2 = obb_rules.turn.process_actions.call(null,game2,new cljs.core.Keyword(null,"p2","p2",905500641),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auto-deploy","auto-deploy",1838692925),new cljs.core.Keyword(null,"firingsquad","firingsquad",-1910418650)], null)], null));
var game2__$1 = obb_rules.result.result_board.call(null,result2);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-5","div.col-lg-5",-285124876),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.render,cljs.core.PersistentArrayMap.EMPTY,game2__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-3","div.col-lg-3",-657060001),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.render,cljs.core.PersistentArrayMap.EMPTY,game2__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-2","div.col-lg-2",664351046),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.render,cljs.core.PersistentArrayMap.EMPTY,game2__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-1","div.col-lg-1",-1562742805),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.render,cljs.core.PersistentArrayMap.EMPTY,game2__$1], null)], null)], null);
});

//# sourceMappingURL=play.js.map?rel=1436542485085