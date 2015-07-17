// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_demo.views.play');
goog.require('cljs.core');
goog.require('obb_rules.math');
goog.require('obb_rules.evaluator');
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
/**
 * Shows the player
 */
obb_demo.views.play.selected_player = (function obb_demo$views$play$selected_player(current_player,expected){
if(cljs.core._EQ_.call(null,current_player,expected)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"p1","p1",-936759954),current_player)){
return new cljs.core.Keyword(null,"span.label.label-success","span.label.label-success",-156422062);
} else {
return new cljs.core.Keyword(null,"span.label.label-info","span.label.label-info",-1377012770);
}
} else {
return new cljs.core.Keyword(null,"span.label.label-primary","span.label.label-primary",120832457);
}
});
/**
 * Displays the players and the current to play
 */
obb_demo.views.play.players = (function obb_demo$views$play$players(game){
var player = obb_rules.game.state.call(null,game);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.play.selected_player.call(null,player,new cljs.core.Keyword(null,"p2","p2",905500641)),"Player 2"], null)," vs ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.play.selected_player.call(null,player,new cljs.core.Keyword(null,"p1","p1",-936759954)),"Player 1"], null)], null);
});
/**
 * Shows each player's power
 */
obb_demo.views.play.power_bar = (function obb_demo$views$play$power_bar(game){
var vec__31044 = obb_rules.evaluator.eval_game.call(null,game);
var p1 = cljs.core.nth.call(null,vec__31044,(0),null);
var p2 = cljs.core.nth.call(null,vec__31044,(1),null);
var total = (p1 + p2);
var p1_perc = obb_rules.math.ceil.call(null,((100) * ((total - p1) / total)));
var p2_perc = ((100) - p1_perc);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress","div.progress",169531213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress-bar.progress-bar-info","div.progress-bar.progress-bar-info",-685166036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(p1_perc),cljs.core.str("%")].join('')], null)], null),p1_perc], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress-bar.progress-bar-success","div.progress-bar.progress-bar-success",546317099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(p2_perc),cljs.core.str("%")].join('')], null)], null),p2_perc], null)], null);
});
obb_demo.views.play.render = (function obb_demo$views$play$render(state){
var game_data = obb_demo.views.play.get_game_data.call(null,state);
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(game_data);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-2","div.col-lg-2",664351046),obb_demo.views.play.players.call(null,game),obb_demo.views.play.power_bar.call(null,game)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-5","div.col-lg-5",-285124876),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.render,cljs.core.PersistentArrayMap.EMPTY,game_data], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-2","div.col-lg-2",664351046),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.panel-title","h3.panel-title",530261929),"Options"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),obb_demo.views.play.restart_game], null),"Restart game"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,obb_demo.views.play.set_speed,(-100))], null),"More speed"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,obb_demo.views.play.set_speed,(100))], null),"Less speed"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.well.well-sm","div.well.well-sm",-921823204),(function (){var or__16109__auto__ = new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return (100);
}
})()," millis per action"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-info","div.panel.panel-info",1850762117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.panel-title","h3.panel-title",530261929),"Preview"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.render,cljs.core.PersistentArrayMap.EMPTY,game_data], null)], null)], null)], null)], null);
});

//# sourceMappingURL=play.js.map?rel=1437139796792