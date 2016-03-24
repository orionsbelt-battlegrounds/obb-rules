// Compiled by ClojureScript 1.7.228 {}
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
cljs.core.enable_console_print_BANG_.call(null);
obb_demo.core.on_js_reload = (function obb_demo$core$on_js_reload(){
cljs.core.println.call(null,"Reloaded...");

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.index.render], null),document.getElementById("app"));
});
obb_demo.core.get_tick = (function obb_demo$core$get_tick(){
return obb_demo.core.tick;
});
/**
 * Processes CPU plays
 */
obb_demo.core.tick = (function obb_demo$core$tick(){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"many-games","many-games",1856139136),obb_demo.state.current_page.call(null))){
var games_data = obb_demo.state.get_page_data.call(null);
var new_games_data = cljs.core.mapv.call(null,obb_demo.processor.auto_process_game_data,games_data);
obb_demo.state.set_page_data_BANG_.call(null,new_games_data);

return setTimeout(obb_demo.core.get_tick.call(null),(100));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915),obb_demo.state.current_page.call(null))){
var game_data = obb_demo.state.get_page_data.call(null);
var new_game_data = obb_demo.processor.auto_process_game_data.call(null,game_data);
obb_demo.state.set_page_data_BANG_.call(null,new_game_data);

return setTimeout(obb_demo.core.get_tick.call(null),(function (){var or__18370__auto__ = new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return (50);
}
})());
} else {
return setTimeout(obb_demo.core.get_tick.call(null),(1000));

}
}
});
obb_demo.core.init = (function obb_demo$core$init(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

secretary.core.dispatch_BANG_.call(null,"/play");

setTimeout(obb_demo.core.tick,(1000));

return obb_demo.core.on_js_reload.call(null);
});
if(typeof obb_demo.core.start !== 'undefined'){
} else {
obb_demo.core.start = obb_demo.core.init.call(null);
}

//# sourceMappingURL=core.js.map?rel=1458852301334