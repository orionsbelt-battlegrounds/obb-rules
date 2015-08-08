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
obb_rules.privatize.game = (function (){var method_table__8093__auto__ = (function (){var G__11208 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11208) : cljs.core.atom.call(null,G__11208));
})();
var prefer_table__8094__auto__ = (function (){var G__11209 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11209) : cljs.core.atom.call(null,G__11209));
})();
var method_cache__8095__auto__ = (function (){var G__11210 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11210) : cljs.core.atom.call(null,G__11210));
})();
var cached_hierarchy__8096__auto__ = (function (){var G__11211 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11211) : cljs.core.atom.call(null,G__11211));
})();
var hierarchy__8097__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("obb-rules.privatize","game"),((function (method_table__8093__auto__,prefer_table__8094__auto__,method_cache__8095__auto__,cached_hierarchy__8096__auto__,hierarchy__8097__auto__){
return (function() { 
var G__11212__delegate = function (game,player){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game));
};
var G__11212 = function (game,var_args){
var player = null;
if (arguments.length > 1) {
var G__11213__i = 0, G__11213__a = new Array(arguments.length -  1);
while (G__11213__i < G__11213__a.length) {G__11213__a[G__11213__i] = arguments[G__11213__i + 1]; ++G__11213__i;}
  player = new cljs.core.IndexedSeq(G__11213__a,0);
} 
return G__11212__delegate.call(this,game,player);};
G__11212.cljs$lang$maxFixedArity = 1;
G__11212.cljs$lang$applyTo = (function (arglist__11214){
var game = cljs.core.first(arglist__11214);
var player = cljs.core.rest(arglist__11214);
return G__11212__delegate(game,player);
});
G__11212.cljs$core$IFn$_invoke$arity$variadic = G__11212__delegate;
return G__11212;
})()
;})(method_table__8093__auto__,prefer_table__8094__auto__,method_cache__8095__auto__,cached_hierarchy__8096__auto__,hierarchy__8097__auto__))
,cljs.core.constant$keyword$default,hierarchy__8097__auto__,method_table__8093__auto__,prefer_table__8094__auto__,method_cache__8095__auto__,cached_hierarchy__8096__auto__));
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
var G__11215__delegate = function (game,args){
var viewed_by = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
return obb_rules.privatize.remove_elements(obb_rules.privatize.remove_elements(obb_rules.privatize.clear_stash(obb_rules.privatize.clear_stash(game,cljs.core.constant$keyword$p1,viewed_by),cljs.core.constant$keyword$p2,viewed_by),cljs.core.constant$keyword$p1,viewed_by),cljs.core.constant$keyword$p2,viewed_by);
};
var G__11215 = function (game,var_args){
var args = null;
if (arguments.length > 1) {
var G__11216__i = 0, G__11216__a = new Array(arguments.length -  1);
while (G__11216__i < G__11216__a.length) {G__11216__a[G__11216__i] = arguments[G__11216__i + 1]; ++G__11216__i;}
  args = new cljs.core.IndexedSeq(G__11216__a,0);
} 
return G__11215__delegate.call(this,game,args);};
G__11215.cljs$lang$maxFixedArity = 1;
G__11215.cljs$lang$applyTo = (function (arglist__11217){
var game = cljs.core.first(arglist__11217);
var args = cljs.core.rest(arglist__11217);
return G__11215__delegate(game,args);
});
G__11215.cljs$core$IFn$_invoke$arity$variadic = G__11215__delegate;
return G__11215;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$final,(function() { 
var G__11218__delegate = function (board,player){
return board;
};
var G__11218 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__11219__i = 0, G__11219__a = new Array(arguments.length -  1);
while (G__11219__i < G__11219__a.length) {G__11219__a[G__11219__i] = arguments[G__11219__i + 1]; ++G__11219__i;}
  player = new cljs.core.IndexedSeq(G__11219__a,0);
} 
return G__11218__delegate.call(this,board,player);};
G__11218.cljs$lang$maxFixedArity = 1;
G__11218.cljs$lang$applyTo = (function (arglist__11220){
var board = cljs.core.first(arglist__11220);
var player = cljs.core.rest(arglist__11220);
return G__11218__delegate(board,player);
});
G__11218.cljs$core$IFn$_invoke$arity$variadic = G__11218__delegate;
return G__11218;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$p1,(function() { 
var G__11221__delegate = function (board,player){
return board;
};
var G__11221 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__11222__i = 0, G__11222__a = new Array(arguments.length -  1);
while (G__11222__i < G__11222__a.length) {G__11222__a[G__11222__i] = arguments[G__11222__i + 1]; ++G__11222__i;}
  player = new cljs.core.IndexedSeq(G__11222__a,0);
} 
return G__11221__delegate.call(this,board,player);};
G__11221.cljs$lang$maxFixedArity = 1;
G__11221.cljs$lang$applyTo = (function (arglist__11223){
var board = cljs.core.first(arglist__11223);
var player = cljs.core.rest(arglist__11223);
return G__11221__delegate(board,player);
});
G__11221.cljs$core$IFn$_invoke$arity$variadic = G__11221__delegate;
return G__11221;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$p2,(function() { 
var G__11224__delegate = function (board,player){
return board;
};
var G__11224 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__11225__i = 0, G__11225__a = new Array(arguments.length -  1);
while (G__11225__i < G__11225__a.length) {G__11225__a[G__11225__i] = arguments[G__11225__i + 1]; ++G__11225__i;}
  player = new cljs.core.IndexedSeq(G__11225__a,0);
} 
return G__11224__delegate.call(this,board,player);};
G__11224.cljs$lang$maxFixedArity = 1;
G__11224.cljs$lang$applyTo = (function (arglist__11226){
var board = cljs.core.first(arglist__11226);
var player = cljs.core.rest(arglist__11226);
return G__11224__delegate(board,player);
});
G__11224.cljs$core$IFn$_invoke$arity$variadic = G__11224__delegate;
return G__11224;
})()
);
