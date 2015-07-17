// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_demo.core');
goog.require('cljs.core');
goog.require('obb_rules.game_mode');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.boardground');
goog.require('obb_demo.routes');
goog.require('obb_rules.result');
goog.require('obb_rules.ai.firingsquad');
goog.require('obb_rules.game');
goog.require('obb_rules.turn');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
cljs.core.enable_console_print_BANG_.call(null);
obb_demo.core.on_js_reload = (function obb_demo$core$on_js_reload(){
cljs.core.println.call(null,"Reloaded...");

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.index.render], null),document.getElementById("app"));
});
obb_demo.core.get_tick = (function obb_demo$core$get_tick(){
return obb_demo.core.tick;
});
/**
 * Generates actions to be processed
 */
obb_demo.core.generate_actions = (function obb_demo$core$generate_actions(game_data){
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(game_data);
var turn_num = (function (){var or__16109__auto__ = new cljs.core.Keyword(null,"turn-num","turn-num",1507722590).cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return (0);
}
})();
var player = obb_rules.game.state.call(null,game);
var actions = obb_rules.ai.firingsquad.actions.call(null,game,player);
cljs.core.println.call(null,"--",player,actions);

return cljs.core.assoc.call(null,cljs.core.assoc.call(null,game_data,new cljs.core.Keyword(null,"actions","actions",-812656882),actions),new cljs.core.Keyword(null,"turn-num","turn-num",1507722590),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"final","final",1157881357),player))?turn_num:(turn_num + (1))));
});
/**
 * Processes actions
 */
obb_demo.core.process_actions = (function obb_demo$core$process_actions(game_data){
var actions = new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(game_data);
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.empty_QMARK_.call(null,actions)){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,game_data,new cljs.core.Keyword(null,"game","game",-441523833),cljs.core.dissoc.call(null,obb_rules.game_mode.process.call(null,game),new cljs.core.Keyword(null,"action-results","action-results",-389719209))),new cljs.core.Keyword(null,"actions","actions",-812656882));
} else {
var temp__4423__auto__ = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(temp__4423__auto__)){
var action = temp__4423__auto__;
var player = obb_rules.game.state.call(null,game);
var result = obb_rules.turn.simulate_actions.call(null,game,player,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null));
var new_game = obb_rules.result.result_board.call(null,result);
if(cljs.core.not.call(null,obb_rules.result.succeeded_QMARK_.call(null,result))){
cljs.core.println.call(null,result);

return game_data;
} else {
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,game_data,new cljs.core.Keyword(null,"game","game",-441523833),new_game),new cljs.core.Keyword(null,"action","action",-811238024)),new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.rest.call(null,actions));
}
} else {
return cljs.core.assoc.call(null,game_data,new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.first.call(null,actions));
}
}
});
/**
 * Processes CPU plays
 */
obb_demo.core.tick = (function obb_demo$core$tick(){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915),obb_demo.state.current_page.call(null))){
var game_data = obb_demo.state.get_page_data.call(null);
var new_game_data = (cljs.core.truth_(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(game_data))?obb_demo.core.process_actions.call(null,game_data):obb_demo.core.generate_actions.call(null,game_data));
obb_demo.state.set_page_data_BANG_.call(null,new_game_data);

return setTimeout(obb_demo.core.get_tick.call(null),(function (){var or__16109__auto__ = new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return (50);
}
})());
} else {
return null;
}
});
obb_demo.core.init = (function obb_demo$core$init(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

secretary.core.dispatch_BANG_.call(null,"/");

setTimeout(obb_demo.core.tick,(1000));

return obb_demo.core.on_js_reload.call(null);
});
if(typeof obb_demo.core.start !== 'undefined'){
} else {
obb_demo.core.start = obb_demo.core.init.call(null);
}

//# sourceMappingURL=core.js.map?rel=1437144376167