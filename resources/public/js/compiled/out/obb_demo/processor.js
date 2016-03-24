// Compiled by ClojureScript 1.7.228 {}
goog.provide('obb_demo.processor');
goog.require('cljs.core');
goog.require('obb_rules.game_mode');
goog.require('obb_rules.math');
goog.require('obb_rules.ai.alamo');
goog.require('obb_rules.evaluator');
goog.require('obb_rules.simplifier');
goog.require('obb_rules.result');
goog.require('obb_rules.ai.firingsquad');
goog.require('obb_rules.game');
goog.require('obb_rules.turn');
goog.require('obb_demo.state');
goog.require('obb_rules.stash');
/**
 * Creates a new game
 */
obb_demo.processor.new_game = (function obb_demo$processor$new_game(){
return obb_rules.game.random.call(null);
});
/**
 * Creates a deployed game
 */
obb_demo.processor.deployed_game = (function obb_demo$processor$deployed_game(){
return obb_rules.game.start_battle.call(null,obb_rules.result.result_board.call(null,obb_rules.turn.process_actions.call(null,obb_rules.result.result_board.call(null,obb_rules.turn.process_actions.call(null,obb_demo.processor.new_game.call(null),new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auto-deploy","auto-deploy",1838692925),new cljs.core.Keyword(null,"firingsquad","firingsquad",-1910418650)], null)], null))),new cljs.core.Keyword(null,"p2","p2",905500641),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auto-deploy","auto-deploy",1838692925),new cljs.core.Keyword(null,"firingsquad","firingsquad",-1910418650)], null)], null))),new cljs.core.Keyword(null,"p1","p1",-936759954));
});
/**
 * Gets actions
 */
obb_demo.processor.bot_actions = (function obb_demo$processor$bot_actions(game,player){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"p1","p1",-936759954),player)){
return obb_rules.ai.firingsquad.actions.call(null,game,player);
} else {
return obb_rules.ai.firingsquad.actions.call(null,game,player);
}
});
/**
 * Generates actions to be processed
 */
obb_demo.processor.generate_actions = (function obb_demo$processor$generate_actions(game_data){
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(game_data);
var turn_num = (function (){var or__18370__auto__ = new cljs.core.Keyword(null,"turn-num","turn-num",1507722590).cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return (0);
}
})();
var player = obb_rules.game.state.call(null,game);
var actions = (function (){var start__19298__auto__ = cljs.core.system_time.call(null);
var ret__19299__auto__ = obb_demo.processor.bot_actions.call(null,game,player);
cljs.core.prn.call(null,[cljs.core.str("Elapsed time: "),cljs.core.str((cljs.core.system_time.call(null) - start__19298__auto__).toFixed((6))),cljs.core.str(" msecs")].join(''));

return ret__19299__auto__;
})();
cljs.core.println.call(null,"--",player,actions);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"final","final",1157881357),obb_rules.game.state.call(null,game))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game","game",-441523833),obb_demo.processor.deployed_game.call(null)], null);
} else {
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,game_data,new cljs.core.Keyword(null,"actions","actions",-812656882),actions),new cljs.core.Keyword(null,"original-actions","original-actions",2002612771),actions),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.get.call(null,game_data,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(game))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),player,new cljs.core.Keyword(null,"actions","actions",-812656882),actions], null))),new cljs.core.Keyword(null,"turn-num","turn-num",1507722590),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"final","final",1157881357),player))?turn_num:(turn_num + (1))));
}
});
/**
 * Processes actions
 */
obb_demo.processor.process_actions = (function obb_demo$processor$process_actions(game_data){
var actions = new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(game_data);
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.empty_QMARK_.call(null,actions)){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,game_data,new cljs.core.Keyword(null,"game","game",-441523833),cljs.core.dissoc.call(null,obb_rules.game_mode.process.call(null,game),new cljs.core.Keyword(null,"action-results","action-results",-389719209))),new cljs.core.Keyword(null,"actions","actions",-812656882));
} else {
var temp__4655__auto__ = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(game_data);
if(cljs.core.truth_(temp__4655__auto__)){
var action = temp__4655__auto__;
var player = obb_rules.game.state.call(null,game);
var result = obb_rules.turn.simulate_actions.call(null,game,player,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null),true);
var new_game = obb_rules.result.result_board.call(null,result);
if(cljs.core.not.call(null,obb_rules.result.succeeded_QMARK_.call(null,result))){
cljs.core.println.call(null,result);

return cljs.core.assoc.call(null,game_data,new cljs.core.Keyword(null,"delay","delay",-574225219),(100000));
} else {
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,game_data,new cljs.core.Keyword(null,"game","game",-441523833),new_game),new cljs.core.Keyword(null,"action","action",-811238024)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"history","history",-247395220)], null),new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(game_data)),new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.rest.call(null,actions));
}
} else {
return cljs.core.assoc.call(null,game_data,new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.first.call(null,actions));
}
}
});
/**
 * Uses the AI the process a game-data
 */
obb_demo.processor.auto_process_game_data = (function obb_demo$processor$auto_process_game_data(game_data){
if(cljs.core.truth_(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(game_data))){
return obb_demo.processor.process_actions.call(null,game_data);
} else {
return obb_demo.processor.generate_actions.call(null,game_data);
}
});

//# sourceMappingURL=processor.js.map?rel=1458852296405