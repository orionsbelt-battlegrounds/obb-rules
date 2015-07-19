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
obb_rules.privatize.game = (function (){var method_table__7705__auto__ = (function (){var G__13726 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13726) : cljs.core.atom.call(null,G__13726));
})();
var prefer_table__7706__auto__ = (function (){var G__13727 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13727) : cljs.core.atom.call(null,G__13727));
})();
var method_cache__7707__auto__ = (function (){var G__13728 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13728) : cljs.core.atom.call(null,G__13728));
})();
var cached_hierarchy__7708__auto__ = (function (){var G__13729 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13729) : cljs.core.atom.call(null,G__13729));
})();
var hierarchy__7709__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("obb-rules.privatize","game"),((function (method_table__7705__auto__,prefer_table__7706__auto__,method_cache__7707__auto__,cached_hierarchy__7708__auto__,hierarchy__7709__auto__){
return (function() { 
var G__13730__delegate = function (game,player){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game));
};
var G__13730 = function (game,var_args){
var player = null;
if (arguments.length > 1) {
var G__13731__i = 0, G__13731__a = new Array(arguments.length -  1);
while (G__13731__i < G__13731__a.length) {G__13731__a[G__13731__i] = arguments[G__13731__i + 1]; ++G__13731__i;}
  player = new cljs.core.IndexedSeq(G__13731__a,0);
} 
return G__13730__delegate.call(this,game,player);};
G__13730.cljs$lang$maxFixedArity = 1;
G__13730.cljs$lang$applyTo = (function (arglist__13732){
var game = cljs.core.first(arglist__13732);
var player = cljs.core.rest(arglist__13732);
return G__13730__delegate(game,player);
});
G__13730.cljs$core$IFn$_invoke$arity$variadic = G__13730__delegate;
return G__13730;
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
var G__13733__delegate = function (game,args){
var viewed_by = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
return obb_rules.privatize.remove_elements(obb_rules.privatize.remove_elements(obb_rules.privatize.clear_stash(obb_rules.privatize.clear_stash(game,cljs.core.constant$keyword$p1,viewed_by),cljs.core.constant$keyword$p2,viewed_by),cljs.core.constant$keyword$p1,viewed_by),cljs.core.constant$keyword$p2,viewed_by);
};
var G__13733 = function (game,var_args){
var args = null;
if (arguments.length > 1) {
var G__13734__i = 0, G__13734__a = new Array(arguments.length -  1);
while (G__13734__i < G__13734__a.length) {G__13734__a[G__13734__i] = arguments[G__13734__i + 1]; ++G__13734__i;}
  args = new cljs.core.IndexedSeq(G__13734__a,0);
} 
return G__13733__delegate.call(this,game,args);};
G__13733.cljs$lang$maxFixedArity = 1;
G__13733.cljs$lang$applyTo = (function (arglist__13735){
var game = cljs.core.first(arglist__13735);
var args = cljs.core.rest(arglist__13735);
return G__13733__delegate(game,args);
});
G__13733.cljs$core$IFn$_invoke$arity$variadic = G__13733__delegate;
return G__13733;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$final,(function() { 
var G__13736__delegate = function (board,player){
return board;
};
var G__13736 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__13737__i = 0, G__13737__a = new Array(arguments.length -  1);
while (G__13737__i < G__13737__a.length) {G__13737__a[G__13737__i] = arguments[G__13737__i + 1]; ++G__13737__i;}
  player = new cljs.core.IndexedSeq(G__13737__a,0);
} 
return G__13736__delegate.call(this,board,player);};
G__13736.cljs$lang$maxFixedArity = 1;
G__13736.cljs$lang$applyTo = (function (arglist__13738){
var board = cljs.core.first(arglist__13738);
var player = cljs.core.rest(arglist__13738);
return G__13736__delegate(board,player);
});
G__13736.cljs$core$IFn$_invoke$arity$variadic = G__13736__delegate;
return G__13736;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$p1,(function() { 
var G__13739__delegate = function (board,player){
return board;
};
var G__13739 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__13740__i = 0, G__13740__a = new Array(arguments.length -  1);
while (G__13740__i < G__13740__a.length) {G__13740__a[G__13740__i] = arguments[G__13740__i + 1]; ++G__13740__i;}
  player = new cljs.core.IndexedSeq(G__13740__a,0);
} 
return G__13739__delegate.call(this,board,player);};
G__13739.cljs$lang$maxFixedArity = 1;
G__13739.cljs$lang$applyTo = (function (arglist__13741){
var board = cljs.core.first(arglist__13741);
var player = cljs.core.rest(arglist__13741);
return G__13739__delegate(board,player);
});
G__13739.cljs$core$IFn$_invoke$arity$variadic = G__13739__delegate;
return G__13739;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$p2,(function() { 
var G__13742__delegate = function (board,player){
return board;
};
var G__13742 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__13743__i = 0, G__13743__a = new Array(arguments.length -  1);
while (G__13743__i < G__13743__a.length) {G__13743__a[G__13743__i] = arguments[G__13743__i + 1]; ++G__13743__i;}
  player = new cljs.core.IndexedSeq(G__13743__a,0);
} 
return G__13742__delegate.call(this,board,player);};
G__13742.cljs$lang$maxFixedArity = 1;
G__13742.cljs$lang$applyTo = (function (arglist__13744){
var board = cljs.core.first(arglist__13744);
var player = cljs.core.rest(arglist__13744);
return G__13742__delegate(board,player);
});
G__13742.cljs$core$IFn$_invoke$arity$variadic = G__13742__delegate;
return G__13742;
})()
);
