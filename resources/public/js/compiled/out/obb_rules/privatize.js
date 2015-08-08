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
obb_rules.privatize.game = (function (){var method_table__8086__auto__ = (function (){var G__11192 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11192) : cljs.core.atom.call(null,G__11192));
})();
var prefer_table__8087__auto__ = (function (){var G__11193 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11193) : cljs.core.atom.call(null,G__11193));
})();
var method_cache__8088__auto__ = (function (){var G__11194 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11194) : cljs.core.atom.call(null,G__11194));
})();
var cached_hierarchy__8089__auto__ = (function (){var G__11195 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11195) : cljs.core.atom.call(null,G__11195));
})();
var hierarchy__8090__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("obb-rules.privatize","game"),((function (method_table__8086__auto__,prefer_table__8087__auto__,method_cache__8088__auto__,cached_hierarchy__8089__auto__,hierarchy__8090__auto__){
return (function() { 
var G__11196__delegate = function (game,player){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game));
};
var G__11196 = function (game,var_args){
var player = null;
if (arguments.length > 1) {
var G__11197__i = 0, G__11197__a = new Array(arguments.length -  1);
while (G__11197__i < G__11197__a.length) {G__11197__a[G__11197__i] = arguments[G__11197__i + 1]; ++G__11197__i;}
  player = new cljs.core.IndexedSeq(G__11197__a,0);
} 
return G__11196__delegate.call(this,game,player);};
G__11196.cljs$lang$maxFixedArity = 1;
G__11196.cljs$lang$applyTo = (function (arglist__11198){
var game = cljs.core.first(arglist__11198);
var player = cljs.core.rest(arglist__11198);
return G__11196__delegate(game,player);
});
G__11196.cljs$core$IFn$_invoke$arity$variadic = G__11196__delegate;
return G__11196;
})()
;})(method_table__8086__auto__,prefer_table__8087__auto__,method_cache__8088__auto__,cached_hierarchy__8089__auto__,hierarchy__8090__auto__))
,cljs.core.constant$keyword$default,hierarchy__8090__auto__,method_table__8086__auto__,prefer_table__8087__auto__,method_cache__8088__auto__,cached_hierarchy__8089__auto__));
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
var G__11199__delegate = function (game,args){
var viewed_by = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
return obb_rules.privatize.remove_elements(obb_rules.privatize.remove_elements(obb_rules.privatize.clear_stash(obb_rules.privatize.clear_stash(game,cljs.core.constant$keyword$p1,viewed_by),cljs.core.constant$keyword$p2,viewed_by),cljs.core.constant$keyword$p1,viewed_by),cljs.core.constant$keyword$p2,viewed_by);
};
var G__11199 = function (game,var_args){
var args = null;
if (arguments.length > 1) {
var G__11200__i = 0, G__11200__a = new Array(arguments.length -  1);
while (G__11200__i < G__11200__a.length) {G__11200__a[G__11200__i] = arguments[G__11200__i + 1]; ++G__11200__i;}
  args = new cljs.core.IndexedSeq(G__11200__a,0);
} 
return G__11199__delegate.call(this,game,args);};
G__11199.cljs$lang$maxFixedArity = 1;
G__11199.cljs$lang$applyTo = (function (arglist__11201){
var game = cljs.core.first(arglist__11201);
var args = cljs.core.rest(arglist__11201);
return G__11199__delegate(game,args);
});
G__11199.cljs$core$IFn$_invoke$arity$variadic = G__11199__delegate;
return G__11199;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$final,(function() { 
var G__11202__delegate = function (board,player){
return board;
};
var G__11202 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__11203__i = 0, G__11203__a = new Array(arguments.length -  1);
while (G__11203__i < G__11203__a.length) {G__11203__a[G__11203__i] = arguments[G__11203__i + 1]; ++G__11203__i;}
  player = new cljs.core.IndexedSeq(G__11203__a,0);
} 
return G__11202__delegate.call(this,board,player);};
G__11202.cljs$lang$maxFixedArity = 1;
G__11202.cljs$lang$applyTo = (function (arglist__11204){
var board = cljs.core.first(arglist__11204);
var player = cljs.core.rest(arglist__11204);
return G__11202__delegate(board,player);
});
G__11202.cljs$core$IFn$_invoke$arity$variadic = G__11202__delegate;
return G__11202;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$p1,(function() { 
var G__11205__delegate = function (board,player){
return board;
};
var G__11205 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__11206__i = 0, G__11206__a = new Array(arguments.length -  1);
while (G__11206__i < G__11206__a.length) {G__11206__a[G__11206__i] = arguments[G__11206__i + 1]; ++G__11206__i;}
  player = new cljs.core.IndexedSeq(G__11206__a,0);
} 
return G__11205__delegate.call(this,board,player);};
G__11205.cljs$lang$maxFixedArity = 1;
G__11205.cljs$lang$applyTo = (function (arglist__11207){
var board = cljs.core.first(arglist__11207);
var player = cljs.core.rest(arglist__11207);
return G__11205__delegate(board,player);
});
G__11205.cljs$core$IFn$_invoke$arity$variadic = G__11205__delegate;
return G__11205;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$p2,(function() { 
var G__11208__delegate = function (board,player){
return board;
};
var G__11208 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__11209__i = 0, G__11209__a = new Array(arguments.length -  1);
while (G__11209__i < G__11209__a.length) {G__11209__a[G__11209__i] = arguments[G__11209__i + 1]; ++G__11209__i;}
  player = new cljs.core.IndexedSeq(G__11209__a,0);
} 
return G__11208__delegate.call(this,board,player);};
G__11208.cljs$lang$maxFixedArity = 1;
G__11208.cljs$lang$applyTo = (function (arglist__11210){
var board = cljs.core.first(arglist__11210);
var player = cljs.core.rest(arglist__11210);
return G__11208__delegate(board,player);
});
G__11208.cljs$core$IFn$_invoke$arity$variadic = G__11208__delegate;
return G__11208;
})()
);
