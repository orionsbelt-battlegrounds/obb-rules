// Compiled by ClojureScript 1.7.228 {}
goog.provide('obb_rules.game');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.simplifier');
goog.require('obb_rules.result');
goog.require('obb_rules.host_dependent');
goog.require('obb_rules.stash');
obb_rules.game.version = "2.0.0";
/**
 * Checks if the game is in a given state
 */
obb_rules.game.state_QMARK_ = (function obb_rules$game$state_QMARK_(game,state){
var current_state = game.call(null,new cljs.core.Keyword(null,"state","state",-1988618099));
var or__18370__auto__ = (current_state == null);
if(or__18370__auto__){
return or__18370__auto__;
} else {
return obb_rules.simplifier.name_EQ_.call(null,state,current_state);
}
});
/**
 * True if in deploy state
 */
obb_rules.game.deploy_QMARK_ = (function obb_rules$game$deploy_QMARK_(game){
return obb_rules.game.state_QMARK_.call(null,game,new cljs.core.Keyword(null,"deploy","deploy",-2006774212));
});
/**
 * True if the game has ended
 */
obb_rules.game.final_QMARK_ = (function obb_rules$game$final_QMARK_(game){
return obb_rules.game.state_QMARK_.call(null,game,new cljs.core.Keyword(null,"final","final",1157881357));
});
/**
 * True if player's state
 */
obb_rules.game.player_turn_QMARK_ = (function obb_rules$game$player_turn_QMARK_(game,player){
return obb_rules.game.state_QMARK_.call(null,game,player);
});
/**
 * Gets the player's stash
 */
obb_rules.game.get_stash = (function obb_rules$game$get_stash(game,player){
return obb_rules.board.get_stash.call(null,game,player);
});
/**
 * Gets the game mode
 */
obb_rules.game.mode = (function obb_rules$game$mode(game){
var or__18370__auto__ = game.call(null,new cljs.core.Keyword(null,"mode","mode",654403691));
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
});
/**
 * Gets/Sets the current game's state
 */
obb_rules.game.state = (function obb_rules$game$state(var_args){
var args41180 = [];
var len__19428__auto___41183 = arguments.length;
var i__19429__auto___41184 = (0);
while(true){
if((i__19429__auto___41184 < len__19428__auto___41183)){
args41180.push((arguments[i__19429__auto___41184]));

var G__41185 = (i__19429__auto___41184 + (1));
i__19429__auto___41184 = G__41185;
continue;
} else {
}
break;
}

var G__41182 = args41180.length;
switch (G__41182) {
case 1:
return obb_rules.game.state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.game.state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41180.length)].join('')));

}
});

obb_rules.game.state.cljs$core$IFn$_invoke$arity$1 = (function (game){
return game.call(null,new cljs.core.Keyword(null,"state","state",-1988618099));
});

obb_rules.game.state.cljs$core$IFn$_invoke$arity$2 = (function (game,new_state){
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"state","state",-1988618099),new_state);
});

obb_rules.game.state.cljs$lang$maxFixedArity = 2;
/**
 * Creates a game for a given stash
 */
obb_rules.game.create = (function obb_rules$game$create(var_args){
var args41187 = [];
var len__19428__auto___41190 = arguments.length;
var i__19429__auto___41191 = (0);
while(true){
if((i__19429__auto___41191 < len__19428__auto___41190)){
args41187.push((arguments[i__19429__auto___41191]));

var G__41192 = (i__19429__auto___41191 + (1));
i__19429__auto___41191 = G__41192;
continue;
} else {
}
break;
}

var G__41189 = args41187.length;
switch (G__41189) {
case 1:
return obb_rules.game.create.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.game.create.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41187.length)].join('')));

}
});

obb_rules.game.create.cljs$core$IFn$_invoke$arity$1 = (function (stash){
return obb_rules.game.create.call(null,stash,stash);
});

obb_rules.game.create.cljs$core$IFn$_invoke$arity$2 = (function (stash1,stash2){
return cljs.core.assoc.call(null,obb_rules.board.set_stash.call(null,obb_rules.board.set_stash.call(null,obb_rules.board.create_board.call(null),new cljs.core.Keyword(null,"p1","p1",-936759954),stash1),new cljs.core.Keyword(null,"p2","p2",905500641),stash2),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"deploy","deploy",-2006774212));
});

obb_rules.game.create.cljs$lang$maxFixedArity = 2;
/**
 * Creates a game for the given stashes.
 *   stashes is an associative collection in which the keys correspond to the
 *   players and the values to the corresponding stash.
 */
obb_rules.game.new_game = (function obb_rules$game$new_game(var_args){
var args__19435__auto__ = [];
var len__19428__auto___41201 = arguments.length;
var i__19429__auto___41202 = (0);
while(true){
if((i__19429__auto___41202 < len__19428__auto___41201)){
args__19435__auto__.push((arguments[i__19429__auto___41202]));

var G__41203 = (i__19429__auto___41202 + (1));
i__19429__auto___41202 = G__41203;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((1) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((1)),(0))):null);
return obb_rules.game.new_game.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19436__auto__);
});

obb_rules.game.new_game.cljs$core$IFn$_invoke$arity$variadic = (function (stashes,p__41196){
var vec__41197 = p__41196;
var map__41198 = cljs.core.nth.call(null,vec__41197,(0),null);
var map__41198__$1 = ((((!((map__41198 == null)))?((((map__41198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41198):map__41198);
var options = map__41198__$1;
var args = vec__41197;
return obb_rules.game.state.call(null,(function (){var G__41200 = cljs.core.reduce_kv.call(null,((function (vec__41197,map__41198,map__41198__$1,options,args){
return (function (board,player,stash){
return obb_rules.board.set_stash.call(null,board,player,stash);
});})(vec__41197,map__41198,map__41198__$1,options,args))
,obb_rules.board.create_board.call(null),stashes);
if(cljs.core.some_QMARK_.call(null,new cljs.core.Keyword(null,"terrain","terrain",704966005).cljs$core$IFn$_invoke$arity$1(options))){
return obb_rules.board.board_terrain.call(null,G__41200,new cljs.core.Keyword(null,"terrain","terrain",704966005).cljs$core$IFn$_invoke$arity$1(options));
} else {
return G__41200;
}
})(),new cljs.core.Keyword(null,"deploy","deploy",-2006774212));
});

obb_rules.game.new_game.cljs$lang$maxFixedArity = (1);

obb_rules.game.new_game.cljs$lang$applyTo = (function (seq41194){
var G__41195 = cljs.core.first.call(null,seq41194);
var seq41194__$1 = cljs.core.next.call(null,seq41194);
return obb_rules.game.new_game.cljs$core$IFn$_invoke$arity$variadic(G__41195,seq41194__$1);
});
/**
 * Creates a game with random units
 */
obb_rules.game.random = (function obb_rules$game$random(){
var stash = obb_rules.stash.random.call(null);
return obb_rules.game.create.call(null,stash);
});
/**
 * Given a deployed board, starts the battle
 */
obb_rules.game.start_battle = (function obb_rules$game$start_battle(var_args){
var args41204 = [];
var len__19428__auto___41207 = arguments.length;
var i__19429__auto___41208 = (0);
while(true){
if((i__19429__auto___41208 < len__19428__auto___41207)){
args41204.push((arguments[i__19429__auto___41208]));

var G__41209 = (i__19429__auto___41208 + (1));
i__19429__auto___41208 = G__41209;
continue;
} else {
}
break;
}

var G__41206 = args41204.length;
switch (G__41206) {
case 1:
return obb_rules.game.start_battle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.game.start_battle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41204.length)].join('')));

}
});

obb_rules.game.start_battle.cljs$core$IFn$_invoke$arity$1 = (function (game){
if(cljs.core.truth_(obb_rules.game.deploy_QMARK_.call(null,game))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Game not in deploy state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"deploy?","deploy?",-547137015,null),new cljs.core.Symbol(null,"game","game",1199007694,null))))].join('')));
}

return obb_rules.game.start_battle.call(null,game,cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.Keyword(null,"p2","p2",905500641)], null)));
});

obb_rules.game.start_battle.cljs$core$IFn$_invoke$arity$2 = (function (game,first_player){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"state","state",-1988618099),first_player),new cljs.core.Keyword(null,"first-player","first-player",917418847),first_player);
});

obb_rules.game.start_battle.cljs$lang$maxFixedArity = 2;
/**
 * Gets the player that started the game
 */
obb_rules.game.first_player = (function obb_rules$game$first_player(game){
return new cljs.core.Keyword(null,"first-player","first-player",917418847).cljs$core$IFn$_invoke$arity$1(game);
});
/**
 * Provides the actions a results currently aplied on this game
 *   if any.
 */
obb_rules.game.action_results = (function obb_rules$game$action_results(game){
return game.call(null,new cljs.core.Keyword(null,"action-results","action-results",-389719209));
});
/**
 * Stores an action's result
 */
obb_rules.game.push_result = (function obb_rules$game$push_result(game,raw_action,result){
var action_results = (function (){var or__18370__auto__ = obb_rules.game.action_results.call(null,game);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var result__$1 = cljs.core.dissoc.call(null,result,new cljs.core.Keyword(null,"board","board",-1907017633));
var new_results = cljs.core.conj.call(null,action_results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_action,result__$1], null));
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"action-results","action-results",-389719209),new_results);
});
/**
 * Returns true if the actions currently applied to the given game
 *   are all successful.
 */
obb_rules.game.valid_actions_QMARK_ = (function obb_rules$game$valid_actions_QMARK_(game){
return cljs.core.every_QMARK_.call(null,(function (p1__41211_SHARP_){
return obb_rules.result.succeeded_QMARK_.call(null,cljs.core.last.call(null,p1__41211_SHARP_));
}),obb_rules.game.action_results.call(null,game));
});

//# sourceMappingURL=game.js.map?rel=1458852289894