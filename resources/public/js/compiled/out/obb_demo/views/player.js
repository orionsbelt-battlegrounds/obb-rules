// Compiled by ClojureScript 1.7.228 {}
goog.provide('obb_demo.views.player');
goog.require('cljs.core');
goog.require('obb_rules.game_mode');
goog.require('obb_demo.processor');
goog.require('obb_rules.math');
goog.require('obb_rules.serializer.writer');
goog.require('obb_rules.ai.alamo');
goog.require('obb_rules.evaluator');
goog.require('obb_rules.simplifier');
goog.require('obb_rules.element');
goog.require('obb_demo.boardground');
goog.require('obb_rules.result');
goog.require('obb_rules.ai.firingsquad');
goog.require('obb_rules.unit');
goog.require('obb_rules.actions.move');
goog.require('obb_rules.game');
goog.require('obb_rules.turn');
goog.require('obb_rules.serializer.reader');
goog.require('obb_demo.state');
goog.require('obb_rules.host_dependent');
goog.require('obb_rules.stash');
goog.require('obb_rules.laws');
goog.require('obb_demo.views.power_bar');
/**
 * Gets the current game or creates a new one
 */
obb_demo.views.player.get_game_data = (function obb_demo$views$player$get_game_data(state){
var temp__4655__auto__ = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__4655__auto__)){
var game = temp__4655__auto__;
return game;
} else {
var game = obb_rules.game.state.call(null,obb_demo.processor.deployed_game.call(null),new cljs.core.Keyword(null,"p1","p1",-936759954));
var game_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"game","game",-441523833),game,new cljs.core.Keyword(null,"original-game","original-game",1424905517),game,new cljs.core.Keyword(null,"action-points","action-points",-938391256),(0),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"turn-num","turn-num",1507722590),(0)], null);
obb_demo.state.set_page_data_BANG_.call(null,game_data);

return game_data;
}
});
/**
 * Generates and restarts a new game
 */
obb_demo.views.player.restart_game = (function obb_demo$views$player$restart_game(){
return obb_demo.state.set_page_data_BANG_.call(null,null);
});
/**
 * Shows the player
 */
obb_demo.views.player.selected_player = (function obb_demo$views$player$selected_player(current_player,expected){
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
obb_demo.views.player.players = (function obb_demo$views$player$players(game_data,game){
var player = obb_rules.game.state.call(null,game);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.player.selected_player.call(null,player,new cljs.core.Keyword(null,"p2","p2",905500641)),(function (){var or__18370__auto__ = new cljs.core.Keyword(null,"bot","bot",-950896508).cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return "Firingsquad";
}
})()], null)," vs ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.player.selected_player.call(null,player,new cljs.core.Keyword(null,"p1","p1",-936759954)),"Player 1"], null)], null);
});
/**
 * Displays the current turn
 */
obb_demo.views.player.game_turn = (function obb_demo$views$player$game_turn(game_data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.nav-pills","ul.nav.nav-pills",1953877445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),"Turn ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.badge","span.badge",-1410699734),new cljs.core.Keyword(null,"turn-num","turn-num",1507722590).cljs$core$IFn$_invoke$arity$1(game_data)], null)], null)], null)], null);
});
/**
 * Displays the current turn
 */
obb_demo.views.player.action_points = (function obb_demo$views$player$action_points(game_data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.nav-pills","ul.nav.nav-pills",1953877445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),"Action Points ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.badge","span.badge",-1410699734),(obb_rules.laws.max_action_points - new cljs.core.Keyword(null,"action-points","action-points",-938391256).cljs$core$IFn$_invoke$arity$1(game_data))], null)], null)], null)], null);
});
/**
 * Rotates the selected element
 */
obb_demo.views.player.rotate_selected = (function obb_demo$views$player$rotate_selected(game_data,direction){
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(game_data);
var selected_coord = new cljs.core.Keyword(null,"selected-coord","selected-coord",-543869297).cljs$core$IFn$_invoke$arity$1(game_data);
var player = obb_rules.element.element_player.call(null,new cljs.core.Keyword(null,"selected-element","selected-element",1424596130).cljs$core$IFn$_invoke$arity$1(game_data));
var action = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),selected_coord,direction], null);
return obb_demo.boardground.register_action.call(null,game_data,game,player,action,selected_coord);
});
/**
 * Resets the actions on the current turn
 */
obb_demo.views.player.reset_turn = (function obb_demo$views$player$reset_turn(game_data){
return obb_demo.state.set_page_data_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"game","game",-441523833),cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"original-game","original-game",1424905517).cljs$core$IFn$_invoke$arity$1(game_data),new cljs.core.Keyword(null,"action-results","action-results",-389719209)),new cljs.core.Keyword(null,"removed-elements","removed-elements",1264344662)),new cljs.core.Keyword(null,"original-game","original-game",1424905517),new cljs.core.Keyword(null,"original-game","original-game",1424905517).cljs$core$IFn$_invoke$arity$1(game_data),new cljs.core.Keyword(null,"previous-game","previous-game",1171173892),new cljs.core.Keyword(null,"original-game","original-game",1424905517).cljs$core$IFn$_invoke$arity$1(game_data),new cljs.core.Keyword(null,"previous-player","previous-player",2002714327),new cljs.core.Keyword(null,"p2","p2",905500641),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(game_data),new cljs.core.Keyword(null,"bot","bot",-950896508),new cljs.core.Keyword(null,"bot","bot",-950896508).cljs$core$IFn$_invoke$arity$1(game_data),new cljs.core.Keyword(null,"action-points","action-points",-938391256),(0),new cljs.core.Keyword(null,"turn-num","turn-num",1507722590),(0)], null));
});
obb_demo.views.player.bot_turn = (function obb_demo$views$player$bot_turn(game_data,game){
if(cljs.core._EQ_.call(null,"Alamo",new cljs.core.Keyword(null,"bot","bot",-950896508).cljs$core$IFn$_invoke$arity$1(game_data))){
cljs.core.println.call(null,"Alamo");

return obb_rules.ai.alamo.actions.call(null,game,new cljs.core.Keyword(null,"p2","p2",905500641));
} else {
return obb_rules.ai.firingsquad.actions.call(null,game,new cljs.core.Keyword(null,"p2","p2",905500641));
}
});
/**
 * Resets the actions on the current turn
 */
obb_demo.views.player.play_turn = (function obb_demo$views$player$play_turn(game_data){
var player = new cljs.core.Keyword(null,"p1","p1",-936759954);
var game = cljs.core.dissoc.call(null,obb_rules.game_mode.process.call(null,new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(game_data)),new cljs.core.Keyword(null,"action-results","action-results",-389719209));
var turn_num = new cljs.core.Keyword(null,"turn-num","turn-num",1507722590).cljs$core$IFn$_invoke$arity$1(game_data);
var actions = (function (){var start__19298__auto__ = cljs.core.system_time.call(null);
var ret__19299__auto__ = obb_demo.views.player.bot_turn.call(null,game_data,game);
cljs.core.prn.call(null,[cljs.core.str("Elapsed time: "),cljs.core.str((cljs.core.system_time.call(null) - start__19298__auto__).toFixed((6))),cljs.core.str(" msecs")].join(''));

return ret__19299__auto__;
})();
var result = obb_rules.turn.process_actions.call(null,game,new cljs.core.Keyword(null,"p2","p2",905500641),actions);
if(cljs.core.truth_(obb_rules.result.succeeded_QMARK_.call(null,result))){
var new_game = obb_rules.result.result_board.call(null,result);
var clean_game = cljs.core.dissoc.call(null,new_game,new cljs.core.Keyword(null,"action-results","action-results",-389719209));
return obb_demo.state.set_page_data_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"game","game",-441523833),clean_game,new cljs.core.Keyword(null,"original-game","original-game",1424905517),new_game,new cljs.core.Keyword(null,"previous-game","previous-game",1171173892),new_game,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(clean_game),new cljs.core.Keyword(null,"previous-player","previous-player",2002714327),new cljs.core.Keyword(null,"p2","p2",905500641),new cljs.core.Keyword(null,"bot","bot",-950896508),new cljs.core.Keyword(null,"bot","bot",-950896508).cljs$core$IFn$_invoke$arity$1(game_data),new cljs.core.Keyword(null,"action-points","action-points",-938391256),(0),new cljs.core.Keyword(null,"turn-num","turn-num",1507722590),((1) + turn_num)], null));
} else {
return cljs.core.println.call(null,result);
}
});
/**
 * Rotate button display
 */
obb_demo.views.player.rotate_button = (function obb_demo$views$player$rotate_button(game_data,direction){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not.call(null,new cljs.core.Keyword(null,"selected-element","selected-element",1424596130).cljs$core$IFn$_invoke$arity$1(game_data)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,obb_demo.views.player.rotate_selected,game_data,direction)], null),cljs.core.nth.call(null,cljs.core.name.call(null,direction),(0))], null);
});
/**
 * Gets the quantity of the selected element, or 0 it no element is
 *   selected
 */
obb_demo.views.player.selected_element_quantity = (function obb_demo$views$player$selected_element_quantity(game_data){
var temp__4655__auto__ = new cljs.core.Keyword(null,"selected-element","selected-element",1424596130).cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(temp__4655__auto__)){
var element = temp__4655__auto__;
return obb_rules.element.element_quantity.call(null,element);
} else {
return (0);
}
});
/**
 * Parses the quantity on the given event
 */
obb_demo.views.player.parse_ev_quantity = (function obb_demo$views$player$parse_ev_quantity(ev){
var raw_quantity = ev.target.value;
if(cljs.core.empty_QMARK_.call(null,raw_quantity)){
return "0";
} else {
return raw_quantity;
}
});
/**
 * Runs when the quantity changes
 */
obb_demo.views.player.quantity_changed = (function obb_demo$views$player$quantity_changed(game_data,ev){
var total_quantity = obb_rules.element.element_quantity.call(null,new cljs.core.Keyword(null,"selected-element","selected-element",1424596130).cljs$core$IFn$_invoke$arity$1(game_data));
var quantity = obb_demo.views.player.parse_ev_quantity.call(null,ev);
if(cljs.core.truth_(obb_rules.actions.move.invalid_move_percentage_QMARK_.call(null,total_quantity,quantity))){
return obb_demo.state.set_page_data_BANG_.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,game_data,new cljs.core.Keyword(null,"selected-quantity-error","selected-quantity-error",1821000259),true),new cljs.core.Keyword(null,"selected-quantity","selected-quantity",-1303446490),quantity));
} else {
return obb_demo.state.set_page_data_BANG_.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,game_data,new cljs.core.Keyword(null,"selected-quantity","selected-quantity",-1303446490),quantity),new cljs.core.Keyword(null,"selected-quantity-error","selected-quantity-error",1821000259)));
}
});
/**
 * Rotate options
 */
obb_demo.views.player.rotate_panel = (function obb_demo$views$player$rotate_panel(game_data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.panel-title","h3.panel-title",530261929),"Rotate"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),obb_demo.views.player.rotate_button.call(null,game_data,new cljs.core.Keyword(null,"west","west",708776677)),obb_demo.views.player.rotate_button.call(null,game_data,new cljs.core.Keyword(null,"east","east",1189821678)),obb_demo.views.player.rotate_button.call(null,game_data,new cljs.core.Keyword(null,"north","north",651323902)),obb_demo.views.player.rotate_button.call(null,game_data,new cljs.core.Keyword(null,"south","south",1586796293))], null)], null);
});
/**
 * Specifies the units to move
 */
obb_demo.views.player.unit_quantity_picker = (function obb_demo$views$player$unit_quantity_picker(game_data){
var quantity = new cljs.core.Keyword(null,"selected-quantity","selected-quantity",-1303446490).cljs$core$IFn$_invoke$arity$1(game_data);
var invalid_quantity_QMARK_ = new cljs.core.Keyword(null,"selected-quantity-error","selected-quantity-error",1821000259).cljs$core$IFn$_invoke$arity$1(game_data);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.panel-title","h3.panel-title",530261929),"Move quantity"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str("div.form-group"),cljs.core.str((cljs.core.truth_(invalid_quantity_QMARK_)?".has-error":".has-success"))].join('')),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,obb_demo.views.player.quantity_changed,game_data),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(quantity == null),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),quantity], null)], null),(cljs.core.truth_(invalid_quantity_QMARK_)?(function (){var total_quantity = obb_rules.element.element_quantity.call(null,new cljs.core.Keyword(null,"selected-element","selected-element",1424596130).cljs$core$IFn$_invoke$arity$1(game_data));
var min_quantity = obb_rules.math.ceil.call(null,(total_quantity * obb_rules.laws.min_move_percentage));
var max_quantity = obb_rules.math.floor.call(null,(total_quantity * obb_rules.laws.max_move_percentage));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str("Move must be "),cljs.core.str(min_quantity),cljs.core.str(" to "),cljs.core.str(max_quantity),cljs.core.str(" or "),cljs.core.str(total_quantity)].join('')], null);
})():null)], null)], null)], null);
});
/**
 * Adds docs
 */
obb_demo.views.player.selected_element_info = (function obb_demo$views$player$selected_element_info(game_data){
var temp__4655__auto__ = new cljs.core.Keyword(null,"selected-element","selected-element",1424596130).cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(temp__4655__auto__)){
var element = temp__4655__auto__;
var unit = obb_rules.element.element_unit.call(null,element);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-info","div.panel.panel-info",1850762117),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.panel-title","h3.panel-title",530261929),[cljs.core.str("Selected element: "),cljs.core.str(obb_rules.unit.unit_name.call(null,unit))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",-519713955),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",-1445267512),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.badge","span.badge",-1410699734),obb_rules.unit.unit_attack.call(null,unit)], null),"Attack"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.badge","span.badge",-1410699734),cljs.core.name.call(null,obb_rules.unit.attack_type.call(null,unit))], null),"Type"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.badge","span.badge",-1410699734),obb_rules.unit.unit_range.call(null,unit)], null),"Range"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"after-attack","after-attack",-1103058896).cljs$core$IFn$_invoke$arity$1(unit))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.badge","span.badge",-1410699734),cljs.core.map.call(null,((function (unit,element,temp__4655__auto__){
return (function (p1__42144_SHARP_){
return cljs.core.name.call(null,cljs.core.first.call(null,p1__42144_SHARP_));
});})(unit,element,temp__4655__auto__))
,new cljs.core.Keyword(null,"after-attack","after-attack",-1103058896).cljs$core$IFn$_invoke$arity$1(unit))], null),"Powers"], null):null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",-519713955),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",-1445267512),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.badge","span.badge",-1410699734),obb_rules.unit.unit_defense.call(null,unit)], null),"Defense"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"after-hit","after-hit",491119628).cljs$core$IFn$_invoke$arity$1(unit))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.badge","span.badge",-1410699734),cljs.core.map.call(null,((function (unit,element,temp__4655__auto__){
return (function (p1__42145_SHARP_){
return cljs.core.name.call(null,cljs.core.first.call(null,p1__42145_SHARP_));
});})(unit,element,temp__4655__auto__))
,new cljs.core.Keyword(null,"after-hit","after-hit",491119628).cljs$core$IFn$_invoke$arity$1(unit))], null),"Powers"], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.badge","span.badge",-1410699734),cljs.core.name.call(null,obb_rules.unit.unit_category.call(null,unit))], null),"Category"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",-519713955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",-1445267512),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.badge","span.badge",-1410699734),cljs.core.name.call(null,obb_rules.unit.unit_movement_type.call(null,unit))], null),"Movement"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.badge","span.badge",-1410699734),obb_rules.unit.unit_movement_cost.call(null,unit)], null),"Movement cost"], null)], null)], null)], null)], null)], null);
} else {
return null;
}
});
/**
 * Sets the current bot to play
 */
obb_demo.views.player.set_bot = (function obb_demo$views$player$set_bot(game_data,ev){
if(cljs.core._EQ_.call(null,(0),ev.target.selectedIndex)){
return obb_demo.state.set_page_data_BANG_.call(null,cljs.core.assoc.call(null,game_data,new cljs.core.Keyword(null,"bot","bot",-950896508),"Firingsquad"));
} else {
return obb_demo.state.set_page_data_BANG_.call(null,cljs.core.assoc.call(null,game_data,new cljs.core.Keyword(null,"bot","bot",-950896508),"Alamo"));
}
});
/**
 * Selects the bot to play
 */
obb_demo.views.player.challenger_selector = (function obb_demo$views$player$challenger_selector(game_data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18370__auto__ = new cljs.core.Keyword(null,"bot","bot",-950896508).cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return "Firingsquad";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,obb_demo.views.player.set_bot,game_data)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),"Firingsquad"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),"Alamo"], null)], null);
});
/**
 * Called then the textarea with the game str is changed by the user
 */
obb_demo.views.player.game_str_changed = (function obb_demo$views$player$game_str_changed(game_data,ev){
return obb_demo.state.set_page_data_BANG_.call(null,cljs.core.assoc.call(null,game_data,new cljs.core.Keyword(null,"game-str","game-str",-1062899853),ev.target.value));
});
/**
 * Loads the game from a string on the game data
 */
obb_demo.views.player.load_game_str = (function obb_demo$views$player$load_game_str(game_data){
var game_str = new cljs.core.Keyword(null,"game-str","game-str",-1062899853).cljs$core$IFn$_invoke$arity$1(game_data);
var new_game = obb_rules.serializer.reader.str__GT_game.call(null,game_str);
return obb_demo.state.set_page_data_BANG_.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,game_data,new cljs.core.Keyword(null,"game-str","game-str",-1062899853)),new cljs.core.Keyword(null,"game","game",-441523833),new_game));
});
obb_demo.views.player.game_as_string = (function obb_demo$views$player$game_as_string(game_data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px",new cljs.core.Keyword(null,"height","height",1025178622),"500px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,obb_demo.views.player.game_str_changed,game_data),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18370__auto__ = new cljs.core.Keyword(null,"game-str","game-str",-1062899853).cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return obb_rules.serializer.writer.game__GT_str.call(null,new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(game_data));
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,obb_demo.views.player.load_game_str,game_data)], null),"Load"], null)], null);
});
obb_demo.views.player.render = (function obb_demo$views$player$render(state){
var game_data = obb_demo.views.player.get_game_data.call(null,state);
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(game_data);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-2","div.col-lg-2",664351046),obb_demo.views.player.challenger_selector.call(null,game_data),obb_demo.views.player.game_turn.call(null,game_data),obb_demo.views.player.players.call(null,game_data,game),obb_demo.views.power_bar.render.call(null,game),obb_demo.views.player.action_points.call(null,game_data),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,obb_demo.views.player.play_turn,game_data)], null),"Play turn"], null),obb_demo.views.player.unit_quantity_picker.call(null,game_data),obb_demo.views.player.rotate_panel.call(null,game_data),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,obb_demo.views.player.reset_turn,game_data)], null),"Reset turn"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-5","div.col-lg-5",-285124876),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.render,cljs.core.PersistentArrayMap.EMPTY,game_data], null),obb_demo.views.player.selected_element_info.call(null,game_data)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-5","div.col-lg-5",-285124876),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jumbotron","div.jumbotron",-1632448673),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Demo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This is a demo that showcases the gameplay of Orion's Belt against a simple AI."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"It's your turn to play. Perform your actions and then click Play turn."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Would you like to know more?",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://twitter.com/orionsbelt"], null),"Twitter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/orionsbelt-battlegrounds/obb-rules"], null),"Github"], null)], null)], null)], null)], null)], null),obb_demo.views.player.game_as_string.call(null,game_data)], null)], null);
});

//# sourceMappingURL=player.js.map?rel=1458852296550