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
obb_rules.privatize.game = (function (){var method_table__7714__auto__ = (function (){var G__13731 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13731) : cljs.core.atom.call(null,G__13731));
})();
var prefer_table__7715__auto__ = (function (){var G__13732 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13732) : cljs.core.atom.call(null,G__13732));
})();
var method_cache__7716__auto__ = (function (){var G__13733 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13733) : cljs.core.atom.call(null,G__13733));
})();
var cached_hierarchy__7717__auto__ = (function (){var G__13734 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13734) : cljs.core.atom.call(null,G__13734));
})();
var hierarchy__7718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("obb-rules.privatize","game"),((function (method_table__7714__auto__,prefer_table__7715__auto__,method_cache__7716__auto__,cached_hierarchy__7717__auto__,hierarchy__7718__auto__){
return (function() { 
var G__13735__delegate = function (game,player){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game));
};
var G__13735 = function (game,var_args){
var player = null;
if (arguments.length > 1) {
var G__13736__i = 0, G__13736__a = new Array(arguments.length -  1);
while (G__13736__i < G__13736__a.length) {G__13736__a[G__13736__i] = arguments[G__13736__i + 1]; ++G__13736__i;}
  player = new cljs.core.IndexedSeq(G__13736__a,0);
} 
return G__13735__delegate.call(this,game,player);};
G__13735.cljs$lang$maxFixedArity = 1;
G__13735.cljs$lang$applyTo = (function (arglist__13737){
var game = cljs.core.first(arglist__13737);
var player = cljs.core.rest(arglist__13737);
return G__13735__delegate(game,player);
});
G__13735.cljs$core$IFn$_invoke$arity$variadic = G__13735__delegate;
return G__13735;
})()
;})(method_table__7714__auto__,prefer_table__7715__auto__,method_cache__7716__auto__,cached_hierarchy__7717__auto__,hierarchy__7718__auto__))
,cljs.core.constant$keyword$default,hierarchy__7718__auto__,method_table__7714__auto__,prefer_table__7715__auto__,method_cache__7716__auto__,cached_hierarchy__7717__auto__));
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
var G__13738__delegate = function (game,args){
var viewed_by = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
return obb_rules.privatize.remove_elements(obb_rules.privatize.remove_elements(obb_rules.privatize.clear_stash(obb_rules.privatize.clear_stash(game,cljs.core.constant$keyword$p1,viewed_by),cljs.core.constant$keyword$p2,viewed_by),cljs.core.constant$keyword$p1,viewed_by),cljs.core.constant$keyword$p2,viewed_by);
};
var G__13738 = function (game,var_args){
var args = null;
if (arguments.length > 1) {
var G__13739__i = 0, G__13739__a = new Array(arguments.length -  1);
while (G__13739__i < G__13739__a.length) {G__13739__a[G__13739__i] = arguments[G__13739__i + 1]; ++G__13739__i;}
  args = new cljs.core.IndexedSeq(G__13739__a,0);
} 
return G__13738__delegate.call(this,game,args);};
G__13738.cljs$lang$maxFixedArity = 1;
G__13738.cljs$lang$applyTo = (function (arglist__13740){
var game = cljs.core.first(arglist__13740);
var args = cljs.core.rest(arglist__13740);
return G__13738__delegate(game,args);
});
G__13738.cljs$core$IFn$_invoke$arity$variadic = G__13738__delegate;
return G__13738;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$final,(function() { 
var G__13741__delegate = function (board,player){
return board;
};
var G__13741 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__13742__i = 0, G__13742__a = new Array(arguments.length -  1);
while (G__13742__i < G__13742__a.length) {G__13742__a[G__13742__i] = arguments[G__13742__i + 1]; ++G__13742__i;}
  player = new cljs.core.IndexedSeq(G__13742__a,0);
} 
return G__13741__delegate.call(this,board,player);};
G__13741.cljs$lang$maxFixedArity = 1;
G__13741.cljs$lang$applyTo = (function (arglist__13743){
var board = cljs.core.first(arglist__13743);
var player = cljs.core.rest(arglist__13743);
return G__13741__delegate(board,player);
});
G__13741.cljs$core$IFn$_invoke$arity$variadic = G__13741__delegate;
return G__13741;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$p1,(function() { 
var G__13744__delegate = function (board,player){
return board;
};
var G__13744 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__13745__i = 0, G__13745__a = new Array(arguments.length -  1);
while (G__13745__i < G__13745__a.length) {G__13745__a[G__13745__i] = arguments[G__13745__i + 1]; ++G__13745__i;}
  player = new cljs.core.IndexedSeq(G__13745__a,0);
} 
return G__13744__delegate.call(this,board,player);};
G__13744.cljs$lang$maxFixedArity = 1;
G__13744.cljs$lang$applyTo = (function (arglist__13746){
var board = cljs.core.first(arglist__13746);
var player = cljs.core.rest(arglist__13746);
return G__13744__delegate(board,player);
});
G__13744.cljs$core$IFn$_invoke$arity$variadic = G__13744__delegate;
return G__13744;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$p2,(function() { 
var G__13747__delegate = function (board,player){
return board;
};
var G__13747 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__13748__i = 0, G__13748__a = new Array(arguments.length -  1);
while (G__13748__i < G__13748__a.length) {G__13748__a[G__13748__i] = arguments[G__13748__i + 1]; ++G__13748__i;}
  player = new cljs.core.IndexedSeq(G__13748__a,0);
} 
return G__13747__delegate.call(this,board,player);};
G__13747.cljs$lang$maxFixedArity = 1;
G__13747.cljs$lang$applyTo = (function (arglist__13749){
var board = cljs.core.first(arglist__13749);
var player = cljs.core.rest(arglist__13749);
return G__13747__delegate(board,player);
});
G__13747.cljs$core$IFn$_invoke$arity$variadic = G__13747__delegate;
return G__13747;
})()
);
