// Compiled by ClojureScript 1.7.228 {}
goog.provide('obb_demo.views.play');
goog.require('cljs.core');
goog.require('obb_demo.processor');
goog.require('obb_rules.math');
goog.require('obb_rules.serializer.writer');
goog.require('obb_rules.evaluator');
goog.require('obb_demo.boardground');
goog.require('obb_rules.result');
goog.require('obb_rules.game');
goog.require('obb_rules.turn');
goog.require('obb_demo.state');
goog.require('obb_rules.stash');
goog.require('obb_demo.views.power_bar');
/**
 * Prepare the game before deploying
 */
obb_demo.views.play.tune_up = (function obb_demo$views$play$tune_up(game){
return game;
});
/**
 * Gets the current game or creates a new one
 */
obb_demo.views.play.get_game_data = (function obb_demo$views$play$get_game_data(state){
var temp__4655__auto__ = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__4655__auto__)){
var game = temp__4655__auto__;
return game;
} else {
var game = obb_demo.processor.deployed_game.call(null);
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
var current = (function (){var or__18370__auto__ = new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.play.selected_player.call(null,player,new cljs.core.Keyword(null,"p2","p2",905500641)),"Firingsquad"], null)," vs ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.play.selected_player.call(null,player,new cljs.core.Keyword(null,"p1","p1",-936759954)),"Firingsquad"], null)], null);
});
/**
 * Displays the current turn
 */
obb_demo.views.play.game_turn = (function obb_demo$views$play$game_turn(game_data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.nav-pills","ul.nav.nav-pills",1953877445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),"Turn ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.badge","span.badge",-1410699734),new cljs.core.Keyword(null,"turn-num","turn-num",1507722590).cljs$core$IFn$_invoke$arity$1(game_data)], null)], null)], null)], null);
});
obb_demo.views.play.game_as_string = (function obb_demo$views$play$game_as_string(game_data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px"], null)], null),obb_rules.serializer.writer.game__GT_str.call(null,new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(game_data))], null);
});
obb_demo.views.play.render = (function obb_demo$views$play$render(state){
var game_data = obb_demo.views.play.get_game_data.call(null,state);
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(game_data);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-2","div.col-lg-2",664351046),obb_demo.views.play.game_turn.call(null,game_data),obb_demo.views.play.players.call(null,game),obb_demo.views.power_bar.render.call(null,game)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-5","div.col-lg-5",-285124876),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.render,cljs.core.PersistentArrayMap.EMPTY,game_data], null),obb_demo.views.play.game_as_string.call(null,game_data)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-2","div.col-lg-2",664351046),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.panel-title","h3.panel-title",530261929),"Options"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),obb_demo.views.play.restart_game], null),"Restart game"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,obb_demo.views.play.set_speed,(-100))], null),"More speed"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,obb_demo.views.play.set_speed,(100))], null),"Less speed"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.well.well-sm","div.well.well-sm",-921823204),(function (){var or__18370__auto__ = new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return (100);
}
})()," millis per action"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-info","div.panel.panel-info",1850762117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.panel-title","h3.panel-title",530261929),"Preview"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.render,cljs.core.PersistentArrayMap.EMPTY,game_data], null)], null)], null)], null)], null);
});

//# sourceMappingURL=play.js.map?rel=1458852301113