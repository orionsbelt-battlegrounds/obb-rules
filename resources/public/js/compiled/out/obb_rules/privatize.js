// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
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
obb_rules.privatize.game = (function (){var method_table__8018__auto__ = (function (){var G__11112 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11112) : cljs.core.atom.call(null,G__11112));
})();
var prefer_table__8019__auto__ = (function (){var G__11113 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11113) : cljs.core.atom.call(null,G__11113));
})();
var method_cache__8020__auto__ = (function (){var G__11114 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11114) : cljs.core.atom.call(null,G__11114));
})();
var cached_hierarchy__8021__auto__ = (function (){var G__11115 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11115) : cljs.core.atom.call(null,G__11115));
})();
var hierarchy__8022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("obb-rules.privatize","game"),((function (method_table__8018__auto__,prefer_table__8019__auto__,method_cache__8020__auto__,cached_hierarchy__8021__auto__,hierarchy__8022__auto__){
return (function() { 
var G__11116__delegate = function (game,player){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game));
};
var G__11116 = function (game,var_args){
var player = null;
if (arguments.length > 1) {
var G__11117__i = 0, G__11117__a = new Array(arguments.length -  1);
while (G__11117__i < G__11117__a.length) {G__11117__a[G__11117__i] = arguments[G__11117__i + 1]; ++G__11117__i;}
  player = new cljs.core.IndexedSeq(G__11117__a,0);
} 
return G__11116__delegate.call(this,game,player);};
G__11116.cljs$lang$maxFixedArity = 1;
G__11116.cljs$lang$applyTo = (function (arglist__11118){
var game = cljs.core.first(arglist__11118);
var player = cljs.core.rest(arglist__11118);
return G__11116__delegate(game,player);
});
G__11116.cljs$core$IFn$_invoke$arity$variadic = G__11116__delegate;
return G__11116;
})()
;})(method_table__8018__auto__,prefer_table__8019__auto__,method_cache__8020__auto__,cached_hierarchy__8021__auto__,hierarchy__8022__auto__))
,cljs.core.constant$keyword$default,hierarchy__8022__auto__,method_table__8018__auto__,prefer_table__8019__auto__,method_cache__8020__auto__,cached_hierarchy__8021__auto__));
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
var G__11119__delegate = function (game,args){
var viewed_by = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
return obb_rules.privatize.remove_elements(obb_rules.privatize.remove_elements(obb_rules.privatize.clear_stash(obb_rules.privatize.clear_stash(game,cljs.core.constant$keyword$p1,viewed_by),cljs.core.constant$keyword$p2,viewed_by),cljs.core.constant$keyword$p1,viewed_by),cljs.core.constant$keyword$p2,viewed_by);
};
var G__11119 = function (game,var_args){
var args = null;
if (arguments.length > 1) {
var G__11120__i = 0, G__11120__a = new Array(arguments.length -  1);
while (G__11120__i < G__11120__a.length) {G__11120__a[G__11120__i] = arguments[G__11120__i + 1]; ++G__11120__i;}
  args = new cljs.core.IndexedSeq(G__11120__a,0);
} 
return G__11119__delegate.call(this,game,args);};
G__11119.cljs$lang$maxFixedArity = 1;
G__11119.cljs$lang$applyTo = (function (arglist__11121){
var game = cljs.core.first(arglist__11121);
var args = cljs.core.rest(arglist__11121);
return G__11119__delegate(game,args);
});
G__11119.cljs$core$IFn$_invoke$arity$variadic = G__11119__delegate;
return G__11119;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$final,(function() { 
var G__11122__delegate = function (board,player){
return board;
};
var G__11122 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__11123__i = 0, G__11123__a = new Array(arguments.length -  1);
while (G__11123__i < G__11123__a.length) {G__11123__a[G__11123__i] = arguments[G__11123__i + 1]; ++G__11123__i;}
  player = new cljs.core.IndexedSeq(G__11123__a,0);
} 
return G__11122__delegate.call(this,board,player);};
G__11122.cljs$lang$maxFixedArity = 1;
G__11122.cljs$lang$applyTo = (function (arglist__11124){
var board = cljs.core.first(arglist__11124);
var player = cljs.core.rest(arglist__11124);
return G__11122__delegate(board,player);
});
G__11122.cljs$core$IFn$_invoke$arity$variadic = G__11122__delegate;
return G__11122;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$p1,(function() { 
var G__11125__delegate = function (board,player){
return board;
};
var G__11125 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__11126__i = 0, G__11126__a = new Array(arguments.length -  1);
while (G__11126__i < G__11126__a.length) {G__11126__a[G__11126__i] = arguments[G__11126__i + 1]; ++G__11126__i;}
  player = new cljs.core.IndexedSeq(G__11126__a,0);
} 
return G__11125__delegate.call(this,board,player);};
G__11125.cljs$lang$maxFixedArity = 1;
G__11125.cljs$lang$applyTo = (function (arglist__11127){
var board = cljs.core.first(arglist__11127);
var player = cljs.core.rest(arglist__11127);
return G__11125__delegate(board,player);
});
G__11125.cljs$core$IFn$_invoke$arity$variadic = G__11125__delegate;
return G__11125;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$p2,(function() { 
var G__11128__delegate = function (board,player){
return board;
};
var G__11128 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__11129__i = 0, G__11129__a = new Array(arguments.length -  1);
while (G__11129__i < G__11129__a.length) {G__11129__a[G__11129__i] = arguments[G__11129__i + 1]; ++G__11129__i;}
  player = new cljs.core.IndexedSeq(G__11129__a,0);
} 
return G__11128__delegate.call(this,board,player);};
G__11128.cljs$lang$maxFixedArity = 1;
G__11128.cljs$lang$applyTo = (function (arglist__11130){
var board = cljs.core.first(arglist__11130);
var player = cljs.core.rest(arglist__11130);
return G__11128__delegate(board,player);
});
G__11128.cljs$core$IFn$_invoke$arity$variadic = G__11128__delegate;
return G__11128;
})()
);
