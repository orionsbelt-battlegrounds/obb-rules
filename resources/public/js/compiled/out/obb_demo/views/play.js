// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_demo.views.play');
goog.require('cljs.core');
goog.require('obb_demo.boardground');
goog.require('obb_rules.result');
goog.require('obb_rules.game');
goog.require('obb_rules.turn');
goog.require('obb_demo.state');
goog.require('obb_rules.stash');
/**
 * Prepare the game before deploying
 */
obb_demo.views.play.tune_up = (function obb_demo$views$play$tune_up(game){
return game;
});
/**
 * Creates a deployed game
 */
obb_demo.views.play.deployed_game = (function obb_demo$views$play$deployed_game(){
return obb_rules.result.result_board.call(null,obb_rules.turn.process_actions.call(null,obb_rules.result.result_board.call(null,obb_rules.turn.process_actions.call(null,obb_demo.views.play.tune_up.call(null,obb_rules.game.create.call(null,obb_rules.stash.create.call(null,new cljs.core.Keyword(null,"rain","rain",166635710),(100),new cljs.core.Keyword(null,"raptor","raptor",-2126104330),(100),new cljs.core.Keyword(null,"pretorian","pretorian",1043101965),(40),new cljs.core.Keyword(null,"vector","vector",1902966158),(50),new cljs.core.Keyword(null,"eagle","eagle",965459808),(50),new cljs.core.Keyword(null,"kamikaze","kamikaze",10684521),(50),new cljs.core.Keyword(null,"fenix","fenix",1325106245),(25),new cljs.core.Keyword(null,"crusader","crusader",-1459511144),(25)))),new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auto-deploy","auto-deploy",1838692925),new cljs.core.Keyword(null,"firingsquad","firingsquad",-1910418650)], null)], null))),new cljs.core.Keyword(null,"p2","p2",905500641),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auto-deploy","auto-deploy",1838692925),new cljs.core.Keyword(null,"firingsquad","firingsquad",-1910418650)], null)], null)));
});
/**
 * Gets the current game or creates a new one
 */
obb_demo.views.play.get_game_data = (function obb_demo$views$play$get_game_data(state){
var temp__4423__auto__ = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__4423__auto__)){
var game = temp__4423__auto__;
return game;
} else {
var game = obb_demo.views.play.deployed_game.call(null);
var game_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game","game",-441523833),game], null);
obb_demo.state.set_page_data_BANG_.call(null,game_data);

return game_data;
}
});
/**
 * Generates and restarts a new game
 */
obb_demo.views.play.restart_game = (function obb_demo$views$play$restart_game(){
return obb_demo.state.set_page_data_BANG_.call(null,null);
});
/**
 * Sets the actions delay speed
 */
obb_demo.views.play.set_speed = (function obb_demo$views$play$set_speed(delay_msecs){
var game_data = obb_demo.state.get_page_data.call(null);
var current = (function (){var or__16109__auto__ = new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return (100);
}
})();
var new_delay = (delay_msecs + current);
if((((1000) >= new_delay)) && ((new_delay >= (50)))){
return obb_demo.state.set_page_data_BANG_.call(null,cljs.core.assoc.call(null,game_data,new cljs.core.Keyword(null,"delay","delay",-574225219),new_delay));
} else {
return null;
}
});
obb_demo.views.play.render = (function obb_demo$views$play$render(state){
var game_data = obb_demo.views.play.get_game_data.call(null,state);
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(game_data);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-5","div.col-lg-5",-285124876),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.render,cljs.core.PersistentArrayMap.EMPTY,game_data], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-2","div.col-lg-2",664351046),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.panel-title","h3.panel-title",530261929),"Options"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),obb_demo.views.play.restart_game], null),"Restart game"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,obb_demo.views.play.set_speed,(-100))], null),"More speed"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,obb_demo.views.play.set_speed,(100))], null),"Less speed"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.well.well-sm","div.well.well-sm",-921823204),(function (){var or__16109__auto__ = new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return (100);
}
})()," millis per action"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-info","div.panel.panel-info",1850762117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.panel-title","h3.panel-title",530261929),"Preview"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.render,cljs.core.PersistentArrayMap.EMPTY,game_data], null)], null)], null)], null)], null);
});

//# sourceMappingURL=play.js.map?rel=1437134309235