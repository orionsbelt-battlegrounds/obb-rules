// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.processor');
goog.require('obb_demo.boardground');
goog.require('obb_demo.routes');
goog.require('obb_rules.result');
goog.require('obb_rules.game');
goog.require('obb_rules.turn');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
cljs.core.enable_console_print_BANG_();
obb_demo.core.on_js_reload = (function obb_demo$core$on_js_reload(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Reloaded..."], 0));

var G__13702 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.index.render], null);
var G__13703 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__13702,G__13703) : reagent.core.render_component.call(null,G__13702,G__13703));
});
obb_demo.core.get_tick = (function obb_demo$core$get_tick(){
return obb_demo.core.tick;
});
/**
 * Processes CPU plays
 */
obb_demo.core.tick = (function obb_demo$core$tick(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$many_DASH_games,obb_demo.state.current_page())){
var games_data_13712 = obb_demo.state.get_page_data();
var new_games_data_13713 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(obb_demo.processor.auto_process_game_data,games_data_13712);
obb_demo.state.set_page_data_BANG_(new_games_data_13713);

var G__13708_13714 = obb_demo.core.get_tick();
var G__13709_13715 = (100);
setTimeout(G__13708_13714,G__13709_13715);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$index,obb_demo.state.current_page())){
var game_data = obb_demo.state.get_page_data();
var new_game_data = obb_demo.processor.auto_process_game_data(game_data);
obb_demo.state.set_page_data_BANG_(new_game_data);

var G__13710 = obb_demo.core.get_tick();
var G__13711 = (function (){var or__6810__auto__ = cljs.core.constant$keyword$delay.cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(or__6810__auto__)){
return or__6810__auto__;
} else {
return (50);
}
})();
return setTimeout(G__13710,G__13711);
} else {
return null;
}
});
obb_demo.core.init = (function obb_demo$core$init(){
secretary.core.set_config_BANG_(cljs.core.constant$keyword$prefix,"#");

secretary.core.dispatch_BANG_("/");

var G__13718_13720 = obb_demo.core.tick;
var G__13719_13721 = (1000);
setTimeout(G__13718_13720,G__13719_13721);

return obb_demo.core.on_js_reload();
});
if(typeof obb_demo.core.start !== 'undefined'){
} else {
obb_demo.core.start = obb_demo.core.init();
}
