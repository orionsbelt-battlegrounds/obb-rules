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
obb_rules.privatize.game = (function (){var method_table__7705__auto__ = (function (){var G__13694 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13694) : cljs.core.atom.call(null,G__13694));
})();
var prefer_table__7706__auto__ = (function (){var G__13695 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13695) : cljs.core.atom.call(null,G__13695));
})();
var method_cache__7707__auto__ = (function (){var G__13696 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13696) : cljs.core.atom.call(null,G__13696));
})();
var cached_hierarchy__7708__auto__ = (function (){var G__13697 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13697) : cljs.core.atom.call(null,G__13697));
})();
var hierarchy__7709__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("obb-rules.privatize","game"),((function (method_table__7705__auto__,prefer_table__7706__auto__,method_cache__7707__auto__,cached_hierarchy__7708__auto__,hierarchy__7709__auto__){
return (function() { 
var G__13698__delegate = function (game,player){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game));
};
var G__13698 = function (game,var_args){
var player = null;
if (arguments.length > 1) {
var G__13699__i = 0, G__13699__a = new Array(arguments.length -  1);
while (G__13699__i < G__13699__a.length) {G__13699__a[G__13699__i] = arguments[G__13699__i + 1]; ++G__13699__i;}
  player = new cljs.core.IndexedSeq(G__13699__a,0);
} 
return G__13698__delegate.call(this,game,player);};
G__13698.cljs$lang$maxFixedArity = 1;
G__13698.cljs$lang$applyTo = (function (arglist__13700){
var game = cljs.core.first(arglist__13700);
var player = cljs.core.rest(arglist__13700);
return G__13698__delegate(game,player);
});
G__13698.cljs$core$IFn$_invoke$arity$variadic = G__13698__delegate;
return G__13698;
})()
;})(method_table__7705__auto__,prefer_table__7706__auto__,method_cache__7707__auto__,cached_hierarchy__7708__auto__,hierarchy__7709__auto__))
,cljs.core.constant$keyword$default,hierarchy__7709__auto__,method_table__7705__auto__,prefer_table__7706__auto__,method_cache__7707__auto__,cached_hierarchy__7708__auto__));
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
var G__13701__delegate = function (game,args){
var viewed_by = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
return obb_rules.privatize.remove_elements(obb_rules.privatize.remove_elements(obb_rules.privatize.clear_stash(obb_rules.privatize.clear_stash(game,cljs.core.constant$keyword$p1,viewed_by),cljs.core.constant$keyword$p2,viewed_by),cljs.core.constant$keyword$p1,viewed_by),cljs.core.constant$keyword$p2,viewed_by);
};
var G__13701 = function (game,var_args){
var args = null;
if (arguments.length > 1) {
var G__13702__i = 0, G__13702__a = new Array(arguments.length -  1);
while (G__13702__i < G__13702__a.length) {G__13702__a[G__13702__i] = arguments[G__13702__i + 1]; ++G__13702__i;}
  args = new cljs.core.IndexedSeq(G__13702__a,0);
} 
return G__13701__delegate.call(this,game,args);};
G__13701.cljs$lang$maxFixedArity = 1;
G__13701.cljs$lang$applyTo = (function (arglist__13703){
var game = cljs.core.first(arglist__13703);
var args = cljs.core.rest(arglist__13703);
return G__13701__delegate(game,args);
});
G__13701.cljs$core$IFn$_invoke$arity$variadic = G__13701__delegate;
return G__13701;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$final,(function() { 
var G__13704__delegate = function (board,player){
return board;
};
var G__13704 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__13705__i = 0, G__13705__a = new Array(arguments.length -  1);
while (G__13705__i < G__13705__a.length) {G__13705__a[G__13705__i] = arguments[G__13705__i + 1]; ++G__13705__i;}
  player = new cljs.core.IndexedSeq(G__13705__a,0);
} 
return G__13704__delegate.call(this,board,player);};
G__13704.cljs$lang$maxFixedArity = 1;
G__13704.cljs$lang$applyTo = (function (arglist__13706){
var board = cljs.core.first(arglist__13706);
var player = cljs.core.rest(arglist__13706);
return G__13704__delegate(board,player);
});
G__13704.cljs$core$IFn$_invoke$arity$variadic = G__13704__delegate;
return G__13704;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$p1,(function() { 
var G__13707__delegate = function (board,player){
return board;
};
var G__13707 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__13708__i = 0, G__13708__a = new Array(arguments.length -  1);
while (G__13708__i < G__13708__a.length) {G__13708__a[G__13708__i] = arguments[G__13708__i + 1]; ++G__13708__i;}
  player = new cljs.core.IndexedSeq(G__13708__a,0);
} 
return G__13707__delegate.call(this,board,player);};
G__13707.cljs$lang$maxFixedArity = 1;
G__13707.cljs$lang$applyTo = (function (arglist__13709){
var board = cljs.core.first(arglist__13709);
var player = cljs.core.rest(arglist__13709);
return G__13707__delegate(board,player);
});
G__13707.cljs$core$IFn$_invoke$arity$variadic = G__13707__delegate;
return G__13707;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$p2,(function() { 
var G__13710__delegate = function (board,player){
return board;
};
var G__13710 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__13711__i = 0, G__13711__a = new Array(arguments.length -  1);
while (G__13711__i < G__13711__a.length) {G__13711__a[G__13711__i] = arguments[G__13711__i + 1]; ++G__13711__i;}
  player = new cljs.core.IndexedSeq(G__13711__a,0);
} 
return G__13710__delegate.call(this,board,player);};
G__13710.cljs$lang$maxFixedArity = 1;
G__13710.cljs$lang$applyTo = (function (arglist__13712){
var board = cljs.core.first(arglist__13712);
var player = cljs.core.rest(arglist__13712);
return G__13710__delegate(board,player);
});
G__13710.cljs$core$IFn$_invoke$arity$variadic = G__13710__delegate;
return G__13710;
})()
);
