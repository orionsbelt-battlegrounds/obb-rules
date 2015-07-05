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
obb_rules.privatize.game = (function (){var method_table__7695__auto__ = (function (){var G__13467 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13467) : cljs.core.atom.call(null,G__13467));
})();
var prefer_table__7696__auto__ = (function (){var G__13468 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13468) : cljs.core.atom.call(null,G__13468));
})();
var method_cache__7697__auto__ = (function (){var G__13469 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13469) : cljs.core.atom.call(null,G__13469));
})();
var cached_hierarchy__7698__auto__ = (function (){var G__13470 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13470) : cljs.core.atom.call(null,G__13470));
})();
var hierarchy__7699__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("obb-rules.privatize","game"),((function (method_table__7695__auto__,prefer_table__7696__auto__,method_cache__7697__auto__,cached_hierarchy__7698__auto__,hierarchy__7699__auto__){
return (function() { 
var G__13471__delegate = function (game,player){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game));
};
var G__13471 = function (game,var_args){
var player = null;
if (arguments.length > 1) {
var G__13472__i = 0, G__13472__a = new Array(arguments.length -  1);
while (G__13472__i < G__13472__a.length) {G__13472__a[G__13472__i] = arguments[G__13472__i + 1]; ++G__13472__i;}
  player = new cljs.core.IndexedSeq(G__13472__a,0);
} 
return G__13471__delegate.call(this,game,player);};
G__13471.cljs$lang$maxFixedArity = 1;
G__13471.cljs$lang$applyTo = (function (arglist__13473){
var game = cljs.core.first(arglist__13473);
var player = cljs.core.rest(arglist__13473);
return G__13471__delegate(game,player);
});
G__13471.cljs$core$IFn$_invoke$arity$variadic = G__13471__delegate;
return G__13471;
})()
;})(method_table__7695__auto__,prefer_table__7696__auto__,method_cache__7697__auto__,cached_hierarchy__7698__auto__,hierarchy__7699__auto__))
,cljs.core.constant$keyword$default,hierarchy__7699__auto__,method_table__7695__auto__,prefer_table__7696__auto__,method_cache__7697__auto__,cached_hierarchy__7698__auto__));
})();
}
/**
 * Removes an element from given player
 */
obb_rules.privatize.remove_element = (function obb_rules$privatize$remove_element(player,board,element){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(obb_rules.element.element_player(element)))){
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
var G__13474__delegate = function (game,args){
var viewed_by = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
return obb_rules.privatize.remove_elements(obb_rules.privatize.remove_elements(obb_rules.privatize.clear_stash(obb_rules.privatize.clear_stash(game,cljs.core.constant$keyword$p1,viewed_by),cljs.core.constant$keyword$p2,viewed_by),cljs.core.constant$keyword$p1,viewed_by),cljs.core.constant$keyword$p2,viewed_by);
};
var G__13474 = function (game,var_args){
var args = null;
if (arguments.length > 1) {
var G__13475__i = 0, G__13475__a = new Array(arguments.length -  1);
while (G__13475__i < G__13475__a.length) {G__13475__a[G__13475__i] = arguments[G__13475__i + 1]; ++G__13475__i;}
  args = new cljs.core.IndexedSeq(G__13475__a,0);
} 
return G__13474__delegate.call(this,game,args);};
G__13474.cljs$lang$maxFixedArity = 1;
G__13474.cljs$lang$applyTo = (function (arglist__13476){
var game = cljs.core.first(arglist__13476);
var args = cljs.core.rest(arglist__13476);
return G__13474__delegate(game,args);
});
G__13474.cljs$core$IFn$_invoke$arity$variadic = G__13474__delegate;
return G__13474;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$final,(function() { 
var G__13477__delegate = function (board,player){
return board;
};
var G__13477 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__13478__i = 0, G__13478__a = new Array(arguments.length -  1);
while (G__13478__i < G__13478__a.length) {G__13478__a[G__13478__i] = arguments[G__13478__i + 1]; ++G__13478__i;}
  player = new cljs.core.IndexedSeq(G__13478__a,0);
} 
return G__13477__delegate.call(this,board,player);};
G__13477.cljs$lang$maxFixedArity = 1;
G__13477.cljs$lang$applyTo = (function (arglist__13479){
var board = cljs.core.first(arglist__13479);
var player = cljs.core.rest(arglist__13479);
return G__13477__delegate(board,player);
});
G__13477.cljs$core$IFn$_invoke$arity$variadic = G__13477__delegate;
return G__13477;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$p1,(function() { 
var G__13480__delegate = function (board,player){
return board;
};
var G__13480 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__13481__i = 0, G__13481__a = new Array(arguments.length -  1);
while (G__13481__i < G__13481__a.length) {G__13481__a[G__13481__i] = arguments[G__13481__i + 1]; ++G__13481__i;}
  player = new cljs.core.IndexedSeq(G__13481__a,0);
} 
return G__13480__delegate.call(this,board,player);};
G__13480.cljs$lang$maxFixedArity = 1;
G__13480.cljs$lang$applyTo = (function (arglist__13482){
var board = cljs.core.first(arglist__13482);
var player = cljs.core.rest(arglist__13482);
return G__13480__delegate(board,player);
});
G__13480.cljs$core$IFn$_invoke$arity$variadic = G__13480__delegate;
return G__13480;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$p2,(function() { 
var G__13483__delegate = function (board,player){
return board;
};
var G__13483 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__13484__i = 0, G__13484__a = new Array(arguments.length -  1);
while (G__13484__i < G__13484__a.length) {G__13484__a[G__13484__i] = arguments[G__13484__i + 1]; ++G__13484__i;}
  player = new cljs.core.IndexedSeq(G__13484__a,0);
} 
return G__13483__delegate.call(this,board,player);};
G__13483.cljs$lang$maxFixedArity = 1;
G__13483.cljs$lang$applyTo = (function (arglist__13485){
var board = cljs.core.first(arglist__13485);
var player = cljs.core.rest(arglist__13485);
return G__13483__delegate(board,player);
});
G__13483.cljs$core$IFn$_invoke$arity$variadic = G__13483__delegate;
return G__13483;
})()
);
