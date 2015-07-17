// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
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
cljs.core.enable_console_print_BANG_();
obb_demo.core.on_js_reload = (function obb_demo$core$on_js_reload(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Reloaded..."], 0));

var G__13676 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.index.render], null);
var G__13677 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__13676,G__13677) : reagent.core.render_component.call(null,G__13676,G__13677));
});
obb_demo.core.get_tick = (function obb_demo$core$get_tick(){
return obb_demo.core.tick;
});
/**
 * Generates actions to be processed
 */
obb_demo.core.generate_actions = (function obb_demo$core$generate_actions(game_data){
var game = cljs.core.constant$keyword$game.cljs$core$IFn$_invoke$arity$1(game_data);
var turn_num = (function (){var or__6810__auto__ = cljs.core.constant$keyword$turn_DASH_num.cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(or__6810__auto__)){
return or__6810__auto__;
} else {
return (0);
}
})();
var player = obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game);
var actions = (function (){var G__13680 = game;
var G__13681 = player;
return (obb_rules.ai.firingsquad.actions.cljs$core$IFn$_invoke$arity$2 ? obb_rules.ai.firingsquad.actions.cljs$core$IFn$_invoke$arity$2(G__13680,G__13681) : obb_rules.ai.firingsquad.actions.call(null,G__13680,G__13681));
})();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["--",player,actions], 0));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_data,cljs.core.constant$keyword$actions,actions),cljs.core.constant$keyword$turn_DASH_num,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$final,player))?turn_num:(turn_num + (1))));
});
/**
 * Processes actions
 */
obb_demo.core.process_actions = (function obb_demo$core$process_actions(game_data){
var actions = cljs.core.constant$keyword$actions.cljs$core$IFn$_invoke$arity$1(game_data);
var game = cljs.core.constant$keyword$game.cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.empty_QMARK_(actions)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_data,cljs.core.constant$keyword$game,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(obb_rules.game_mode.process(game),cljs.core.constant$keyword$action_DASH_results)),cljs.core.constant$keyword$actions);
} else {
var temp__4423__auto__ = cljs.core.constant$keyword$action.cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(temp__4423__auto__)){
var action = temp__4423__auto__;
var player = obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game);
var result = obb_rules.turn.simulate_actions(game,player,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null));
var new_game = obb_rules.result.result_board(result);
if(cljs.core.not(obb_rules.result.succeeded_QMARK_(result))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([result], 0));

return game_data;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_data,cljs.core.constant$keyword$game,new_game),cljs.core.constant$keyword$action),cljs.core.constant$keyword$actions,cljs.core.rest(actions));
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_data,cljs.core.constant$keyword$action,cljs.core.first(actions));
}
}
});
/**
 * Processes CPU plays
 */
obb_demo.core.tick = (function obb_demo$core$tick(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$index,obb_demo.state.current_page())){
var game_data = obb_demo.state.get_page_data();
var new_game_data = (cljs.core.truth_(cljs.core.constant$keyword$actions.cljs$core$IFn$_invoke$arity$1(game_data))?obb_demo.core.process_actions(game_data):obb_demo.core.generate_actions(game_data));
obb_demo.state.set_page_data_BANG_(new_game_data);

var G__13684 = obb_demo.core.get_tick();
var G__13685 = (function (){var or__6810__auto__ = cljs.core.constant$keyword$delay.cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(or__6810__auto__)){
return or__6810__auto__;
} else {
return (50);
}
})();
return setTimeout(G__13684,G__13685);
} else {
return null;
}
});
obb_demo.core.init = (function obb_demo$core$init(){
secretary.core.set_config_BANG_(cljs.core.constant$keyword$prefix,"#");

secretary.core.dispatch_BANG_("/");

var G__13688_13690 = obb_demo.core.tick;
var G__13689_13691 = (1000);
setTimeout(G__13688_13690,G__13689_13691);

return obb_demo.core.on_js_reload();
});
if(typeof obb_demo.core.start !== 'undefined'){
} else {
obb_demo.core.start = obb_demo.core.init();
}
