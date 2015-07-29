// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.privatize');
goog.require('cljs.core');
goog.require('obb_rules.game');
goog.require('obb_rules.board');
goog.require('obb_rules.element');
if(typeof obb_rules.privatize.game !== 'undefined'){
} else {
/**
 * Privatizes a board
 */
obb_rules.privatize.game = (function (){var method_table__7720__auto__ = (function (){var G__13758 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13758) : cljs.core.atom.call(null,G__13758));
})();
var prefer_table__7721__auto__ = (function (){var G__13759 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13759) : cljs.core.atom.call(null,G__13759));
})();
var method_cache__7722__auto__ = (function (){var G__13760 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13760) : cljs.core.atom.call(null,G__13760));
})();
var cached_hierarchy__7723__auto__ = (function (){var G__13761 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13761) : cljs.core.atom.call(null,G__13761));
})();
var hierarchy__7724__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("obb-rules.privatize","game"),((function (method_table__7720__auto__,prefer_table__7721__auto__,method_cache__7722__auto__,cached_hierarchy__7723__auto__,hierarchy__7724__auto__){
return (function() { 
var G__13762__delegate = function (game,player){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game));
};
var G__13762 = function (game,var_args){
var player = null;
if (arguments.length > 1) {
var G__13763__i = 0, G__13763__a = new Array(arguments.length -  1);
while (G__13763__i < G__13763__a.length) {G__13763__a[G__13763__i] = arguments[G__13763__i + 1]; ++G__13763__i;}
  player = new cljs.core.IndexedSeq(G__13763__a,0);
} 
return G__13762__delegate.call(this,game,player);};
G__13762.cljs$lang$maxFixedArity = 1;
G__13762.cljs$lang$applyTo = (function (arglist__13764){
var game = cljs.core.first(arglist__13764);
var player = cljs.core.rest(arglist__13764);
return G__13762__delegate(game,player);
});
G__13762.cljs$core$IFn$_invoke$arity$variadic = G__13762__delegate;
return G__13762;
})()
;})(method_table__7720__auto__,prefer_table__7721__auto__,method_cache__7722__auto__,cached_hierarchy__7723__auto__,hierarchy__7724__auto__))
,cljs.core.constant$keyword$default,hierarchy__7724__auto__,method_table__7720__auto__,prefer_table__7721__auto__,method_cache__7722__auto__,cached_hierarchy__7723__auto__));
})();
}
/**
 * Removes an element from given player
 */
obb_rules.privatize.remove_element = (function obb_rules$privatize$remove_element(player,board,element){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(element)))){
return obb_rules.board.remove_element.cljs$core$IFn$_invoke$arity$2(board,obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(element));
} else {
return board;
}
});
/**
 * Remove elements for a specific player
 */
obb_rules.privatize.remove_elements = (function obb_rules$privatize$remove_elements(board,player,viewed_by){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,viewed_by)){
return board;
} else {
var elements = obb_rules.board.board_elements(board,player);
var remover = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_rules.privatize.remove_element,player);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(remover,board,elements);
}
});
/**
 * Clears the stash from for a given player
 */
obb_rules.privatize.clear_stash = (function obb_rules$privatize$clear_stash(board,player,viewed_by){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,viewed_by)){
return board;
} else {
return obb_rules.board.set_stash(board,player,cljs.core.PersistentArrayMap.EMPTY);
}
});
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$deploy,(function() { 
var G__13765__delegate = function (game,args){
var viewed_by = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
return obb_rules.privatize.remove_elements(obb_rules.privatize.remove_elements(obb_rules.privatize.clear_stash(obb_rules.privatize.clear_stash(game,cljs.core.constant$keyword$p1,viewed_by),cljs.core.constant$keyword$p2,viewed_by),cljs.core.constant$keyword$p1,viewed_by),cljs.core.constant$keyword$p2,viewed_by);
};
var G__13765 = function (game,var_args){
var args = null;
if (arguments.length > 1) {
var G__13766__i = 0, G__13766__a = new Array(arguments.length -  1);
while (G__13766__i < G__13766__a.length) {G__13766__a[G__13766__i] = arguments[G__13766__i + 1]; ++G__13766__i;}
  args = new cljs.core.IndexedSeq(G__13766__a,0);
} 
return G__13765__delegate.call(this,game,args);};
G__13765.cljs$lang$maxFixedArity = 1;
G__13765.cljs$lang$applyTo = (function (arglist__13767){
var game = cljs.core.first(arglist__13767);
var args = cljs.core.rest(arglist__13767);
return G__13765__delegate(game,args);
});
G__13765.cljs$core$IFn$_invoke$arity$variadic = G__13765__delegate;
return G__13765;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$final,(function() { 
var G__13768__delegate = function (board,player){
return board;
};
var G__13768 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__13769__i = 0, G__13769__a = new Array(arguments.length -  1);
while (G__13769__i < G__13769__a.length) {G__13769__a[G__13769__i] = arguments[G__13769__i + 1]; ++G__13769__i;}
  player = new cljs.core.IndexedSeq(G__13769__a,0);
} 
return G__13768__delegate.call(this,board,player);};
G__13768.cljs$lang$maxFixedArity = 1;
G__13768.cljs$lang$applyTo = (function (arglist__13770){
var board = cljs.core.first(arglist__13770);
var player = cljs.core.rest(arglist__13770);
return G__13768__delegate(board,player);
});
G__13768.cljs$core$IFn$_invoke$arity$variadic = G__13768__delegate;
return G__13768;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$p1,(function() { 
var G__13771__delegate = function (board,player){
return board;
};
var G__13771 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__13772__i = 0, G__13772__a = new Array(arguments.length -  1);
while (G__13772__i < G__13772__a.length) {G__13772__a[G__13772__i] = arguments[G__13772__i + 1]; ++G__13772__i;}
  player = new cljs.core.IndexedSeq(G__13772__a,0);
} 
return G__13771__delegate.call(this,board,player);};
G__13771.cljs$lang$maxFixedArity = 1;
G__13771.cljs$lang$applyTo = (function (arglist__13773){
var board = cljs.core.first(arglist__13773);
var player = cljs.core.rest(arglist__13773);
return G__13771__delegate(board,player);
});
G__13771.cljs$core$IFn$_invoke$arity$variadic = G__13771__delegate;
return G__13771;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$p2,(function() { 
var G__13774__delegate = function (board,player){
return board;
};
var G__13774 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__13775__i = 0, G__13775__a = new Array(arguments.length -  1);
while (G__13775__i < G__13775__a.length) {G__13775__a[G__13775__i] = arguments[G__13775__i + 1]; ++G__13775__i;}
  player = new cljs.core.IndexedSeq(G__13775__a,0);
} 
return G__13774__delegate.call(this,board,player);};
G__13774.cljs$lang$maxFixedArity = 1;
G__13774.cljs$lang$applyTo = (function (arglist__13776){
var board = cljs.core.first(arglist__13776);
var player = cljs.core.rest(arglist__13776);
return G__13774__delegate(board,player);
});
G__13774.cljs$core$IFn$_invoke$arity$variadic = G__13774__delegate;
return G__13774;
})()
);
