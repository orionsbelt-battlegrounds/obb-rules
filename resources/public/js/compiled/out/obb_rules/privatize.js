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
obb_rules.privatize.game = (function (){var method_table__7716__auto__ = (function (){var G__13750 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13750) : cljs.core.atom.call(null,G__13750));
})();
var prefer_table__7717__auto__ = (function (){var G__13751 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13751) : cljs.core.atom.call(null,G__13751));
})();
var method_cache__7718__auto__ = (function (){var G__13752 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13752) : cljs.core.atom.call(null,G__13752));
})();
var cached_hierarchy__7719__auto__ = (function (){var G__13753 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13753) : cljs.core.atom.call(null,G__13753));
})();
var hierarchy__7720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("obb-rules.privatize","game"),((function (method_table__7716__auto__,prefer_table__7717__auto__,method_cache__7718__auto__,cached_hierarchy__7719__auto__,hierarchy__7720__auto__){
return (function() { 
var G__13754__delegate = function (game,player){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game));
};
var G__13754 = function (game,var_args){
var player = null;
if (arguments.length > 1) {
var G__13755__i = 0, G__13755__a = new Array(arguments.length -  1);
while (G__13755__i < G__13755__a.length) {G__13755__a[G__13755__i] = arguments[G__13755__i + 1]; ++G__13755__i;}
  player = new cljs.core.IndexedSeq(G__13755__a,0);
} 
return G__13754__delegate.call(this,game,player);};
G__13754.cljs$lang$maxFixedArity = 1;
G__13754.cljs$lang$applyTo = (function (arglist__13756){
var game = cljs.core.first(arglist__13756);
var player = cljs.core.rest(arglist__13756);
return G__13754__delegate(game,player);
});
G__13754.cljs$core$IFn$_invoke$arity$variadic = G__13754__delegate;
return G__13754;
})()
;})(method_table__7716__auto__,prefer_table__7717__auto__,method_cache__7718__auto__,cached_hierarchy__7719__auto__,hierarchy__7720__auto__))
,cljs.core.constant$keyword$default,hierarchy__7720__auto__,method_table__7716__auto__,prefer_table__7717__auto__,method_cache__7718__auto__,cached_hierarchy__7719__auto__));
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
var G__13757__delegate = function (game,args){
var viewed_by = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
return obb_rules.privatize.remove_elements(obb_rules.privatize.remove_elements(obb_rules.privatize.clear_stash(obb_rules.privatize.clear_stash(game,cljs.core.constant$keyword$p1,viewed_by),cljs.core.constant$keyword$p2,viewed_by),cljs.core.constant$keyword$p1,viewed_by),cljs.core.constant$keyword$p2,viewed_by);
};
var G__13757 = function (game,var_args){
var args = null;
if (arguments.length > 1) {
var G__13758__i = 0, G__13758__a = new Array(arguments.length -  1);
while (G__13758__i < G__13758__a.length) {G__13758__a[G__13758__i] = arguments[G__13758__i + 1]; ++G__13758__i;}
  args = new cljs.core.IndexedSeq(G__13758__a,0);
} 
return G__13757__delegate.call(this,game,args);};
G__13757.cljs$lang$maxFixedArity = 1;
G__13757.cljs$lang$applyTo = (function (arglist__13759){
var game = cljs.core.first(arglist__13759);
var args = cljs.core.rest(arglist__13759);
return G__13757__delegate(game,args);
});
G__13757.cljs$core$IFn$_invoke$arity$variadic = G__13757__delegate;
return G__13757;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$final,(function() { 
var G__13760__delegate = function (board,player){
return board;
};
var G__13760 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__13761__i = 0, G__13761__a = new Array(arguments.length -  1);
while (G__13761__i < G__13761__a.length) {G__13761__a[G__13761__i] = arguments[G__13761__i + 1]; ++G__13761__i;}
  player = new cljs.core.IndexedSeq(G__13761__a,0);
} 
return G__13760__delegate.call(this,board,player);};
G__13760.cljs$lang$maxFixedArity = 1;
G__13760.cljs$lang$applyTo = (function (arglist__13762){
var board = cljs.core.first(arglist__13762);
var player = cljs.core.rest(arglist__13762);
return G__13760__delegate(board,player);
});
G__13760.cljs$core$IFn$_invoke$arity$variadic = G__13760__delegate;
return G__13760;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$p1,(function() { 
var G__13763__delegate = function (board,player){
return board;
};
var G__13763 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__13764__i = 0, G__13764__a = new Array(arguments.length -  1);
while (G__13764__i < G__13764__a.length) {G__13764__a[G__13764__i] = arguments[G__13764__i + 1]; ++G__13764__i;}
  player = new cljs.core.IndexedSeq(G__13764__a,0);
} 
return G__13763__delegate.call(this,board,player);};
G__13763.cljs$lang$maxFixedArity = 1;
G__13763.cljs$lang$applyTo = (function (arglist__13765){
var board = cljs.core.first(arglist__13765);
var player = cljs.core.rest(arglist__13765);
return G__13763__delegate(board,player);
});
G__13763.cljs$core$IFn$_invoke$arity$variadic = G__13763__delegate;
return G__13763;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$p2,(function() { 
var G__13766__delegate = function (board,player){
return board;
};
var G__13766 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__13767__i = 0, G__13767__a = new Array(arguments.length -  1);
while (G__13767__i < G__13767__a.length) {G__13767__a[G__13767__i] = arguments[G__13767__i + 1]; ++G__13767__i;}
  player = new cljs.core.IndexedSeq(G__13767__a,0);
} 
return G__13766__delegate.call(this,board,player);};
G__13766.cljs$lang$maxFixedArity = 1;
G__13766.cljs$lang$applyTo = (function (arglist__13768){
var board = cljs.core.first(arglist__13768);
var player = cljs.core.rest(arglist__13768);
return G__13766__delegate(board,player);
});
G__13766.cljs$core$IFn$_invoke$arity$variadic = G__13766__delegate;
return G__13766;
})()
);
