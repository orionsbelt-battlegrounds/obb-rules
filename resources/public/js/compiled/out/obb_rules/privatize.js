// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
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
obb_rules.privatize.game = (function (){var method_table__8122__auto__ = (function (){var G__11237 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11237) : cljs.core.atom.call(null,G__11237));
})();
var prefer_table__8123__auto__ = (function (){var G__11238 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11238) : cljs.core.atom.call(null,G__11238));
})();
var method_cache__8124__auto__ = (function (){var G__11239 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11239) : cljs.core.atom.call(null,G__11239));
})();
var cached_hierarchy__8125__auto__ = (function (){var G__11240 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11240) : cljs.core.atom.call(null,G__11240));
})();
var hierarchy__8126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("obb-rules.privatize","game"),((function (method_table__8122__auto__,prefer_table__8123__auto__,method_cache__8124__auto__,cached_hierarchy__8125__auto__,hierarchy__8126__auto__){
return (function() { 
var G__11241__delegate = function (game,player){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game));
};
var G__11241 = function (game,var_args){
var player = null;
if (arguments.length > 1) {
var G__11242__i = 0, G__11242__a = new Array(arguments.length -  1);
while (G__11242__i < G__11242__a.length) {G__11242__a[G__11242__i] = arguments[G__11242__i + 1]; ++G__11242__i;}
  player = new cljs.core.IndexedSeq(G__11242__a,0);
} 
return G__11241__delegate.call(this,game,player);};
G__11241.cljs$lang$maxFixedArity = 1;
G__11241.cljs$lang$applyTo = (function (arglist__11243){
var game = cljs.core.first(arglist__11243);
var player = cljs.core.rest(arglist__11243);
return G__11241__delegate(game,player);
});
G__11241.cljs$core$IFn$_invoke$arity$variadic = G__11241__delegate;
return G__11241;
})()
;})(method_table__8122__auto__,prefer_table__8123__auto__,method_cache__8124__auto__,cached_hierarchy__8125__auto__,hierarchy__8126__auto__))
,cljs.core.cst$kw$default,hierarchy__8126__auto__,method_table__8122__auto__,prefer_table__8123__auto__,method_cache__8124__auto__,cached_hierarchy__8125__auto__));
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
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$deploy,(function() { 
var G__11244__delegate = function (game,args){
var viewed_by = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
return obb_rules.privatize.remove_elements(obb_rules.privatize.remove_elements(obb_rules.privatize.clear_stash(obb_rules.privatize.clear_stash(game,cljs.core.cst$kw$p1,viewed_by),cljs.core.cst$kw$p2,viewed_by),cljs.core.cst$kw$p1,viewed_by),cljs.core.cst$kw$p2,viewed_by);
};
var G__11244 = function (game,var_args){
var args = null;
if (arguments.length > 1) {
var G__11245__i = 0, G__11245__a = new Array(arguments.length -  1);
while (G__11245__i < G__11245__a.length) {G__11245__a[G__11245__i] = arguments[G__11245__i + 1]; ++G__11245__i;}
  args = new cljs.core.IndexedSeq(G__11245__a,0);
} 
return G__11244__delegate.call(this,game,args);};
G__11244.cljs$lang$maxFixedArity = 1;
G__11244.cljs$lang$applyTo = (function (arglist__11246){
var game = cljs.core.first(arglist__11246);
var args = cljs.core.rest(arglist__11246);
return G__11244__delegate(game,args);
});
G__11244.cljs$core$IFn$_invoke$arity$variadic = G__11244__delegate;
return G__11244;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$final,(function() { 
var G__11247__delegate = function (board,player){
return board;
};
var G__11247 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__11248__i = 0, G__11248__a = new Array(arguments.length -  1);
while (G__11248__i < G__11248__a.length) {G__11248__a[G__11248__i] = arguments[G__11248__i + 1]; ++G__11248__i;}
  player = new cljs.core.IndexedSeq(G__11248__a,0);
} 
return G__11247__delegate.call(this,board,player);};
G__11247.cljs$lang$maxFixedArity = 1;
G__11247.cljs$lang$applyTo = (function (arglist__11249){
var board = cljs.core.first(arglist__11249);
var player = cljs.core.rest(arglist__11249);
return G__11247__delegate(board,player);
});
G__11247.cljs$core$IFn$_invoke$arity$variadic = G__11247__delegate;
return G__11247;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$p1,(function() { 
var G__11250__delegate = function (board,player){
return board;
};
var G__11250 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__11251__i = 0, G__11251__a = new Array(arguments.length -  1);
while (G__11251__i < G__11251__a.length) {G__11251__a[G__11251__i] = arguments[G__11251__i + 1]; ++G__11251__i;}
  player = new cljs.core.IndexedSeq(G__11251__a,0);
} 
return G__11250__delegate.call(this,board,player);};
G__11250.cljs$lang$maxFixedArity = 1;
G__11250.cljs$lang$applyTo = (function (arglist__11252){
var board = cljs.core.first(arglist__11252);
var player = cljs.core.rest(arglist__11252);
return G__11250__delegate(board,player);
});
G__11250.cljs$core$IFn$_invoke$arity$variadic = G__11250__delegate;
return G__11250;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$p2,(function() { 
var G__11253__delegate = function (board,player){
return board;
};
var G__11253 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__11254__i = 0, G__11254__a = new Array(arguments.length -  1);
while (G__11254__i < G__11254__a.length) {G__11254__a[G__11254__i] = arguments[G__11254__i + 1]; ++G__11254__i;}
  player = new cljs.core.IndexedSeq(G__11254__a,0);
} 
return G__11253__delegate.call(this,board,player);};
G__11253.cljs$lang$maxFixedArity = 1;
G__11253.cljs$lang$applyTo = (function (arglist__11255){
var board = cljs.core.first(arglist__11255);
var player = cljs.core.rest(arglist__11255);
return G__11253__delegate(board,player);
});
G__11253.cljs$core$IFn$_invoke$arity$variadic = G__11253__delegate;
return G__11253;
})()
);
