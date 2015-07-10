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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-6","div.col-lg-6",-987495203),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.render,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boardground-style","boardground-style",491580564),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"500px",new cljs.core.Keyword(null,"height","height",1025178622),"500px"], null)], null),game2__$1], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-6","div.col-lg-6",-987495203),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.render,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boardground-style","boardground-style",491580564),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"height","height",1025178622),"200px"], null)], null),game2__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.render,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boardground-style","boardground-style",491580564),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100px",new cljs.core.Keyword(null,"height","height",1025178622),"100px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"20px"], null)], null),game2__$1], null)], null)], null);
});

//# sourceMappingURL=play.js.map?rel=1436536084103