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
obb_rules.privatize.game = (function (){var method_table__7705__auto__ = (function (){var G__13724 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13724) : cljs.core.atom.call(null,G__13724));
})();
var prefer_table__7706__auto__ = (function (){var G__13725 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13725) : cljs.core.atom.call(null,G__13725));
})();
var method_cache__7707__auto__ = (function (){var G__13726 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13726) : cljs.core.atom.call(null,G__13726));
})();
var cached_hierarchy__7708__auto__ = (function (){var G__13727 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13727) : cljs.core.atom.call(null,G__13727));
})();
var hierarchy__7709__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("obb-rules.privatize","game"),((function (method_table__7705__auto__,prefer_table__7706__auto__,method_cache__7707__auto__,cached_hierarchy__7708__auto__,hierarchy__7709__auto__){
return (function() { 
var G__13728__delegate = function (game,player){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game));
};
var G__13728 = function (game,var_args){
var player = null;
if (arguments.length > 1) {
var G__13729__i = 0, G__13729__a = new Array(arguments.length -  1);
while (G__13729__i < G__13729__a.length) {G__13729__a[G__13729__i] = arguments[G__13729__i + 1]; ++G__13729__i;}
  player = new cljs.core.IndexedSeq(G__13729__a,0);
} 
return G__13728__delegate.call(this,game,player);};
G__13728.cljs$lang$maxFixedArity = 1;
G__13728.cljs$lang$applyTo = (function (arglist__13730){
var game = cljs.core.first(arglist__13730);
var player = cljs.core.rest(arglist__13730);
return G__13728__delegate(game,player);
});
G__13728.cljs$core$IFn$_invoke$arity$variadic = G__13728__delegate;
return G__13728;
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
var G__13731__delegate = function (game,args){
var viewed_by = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
return obb_rules.privatize.remove_elements(obb_rules.privatize.remove_elements(obb_rules.privatize.clear_stash(obb_rules.privatize.clear_stash(game,cljs.core.constant$keyword$p1,viewed_by),cljs.core.constant$keyword$p2,viewed_by),cljs.core.constant$keyword$p1,viewed_by),cljs.core.constant$keyword$p2,viewed_by);
};
var G__13731 = function (game,var_args){
var args = null;
if (arguments.length > 1) {
var G__13732__i = 0, G__13732__a = new Array(arguments.length -  1);
while (G__13732__i < G__13732__a.length) {G__13732__a[G__13732__i] = arguments[G__13732__i + 1]; ++G__13732__i;}
  args = new cljs.core.IndexedSeq(G__13732__a,0);
} 
return G__13731__delegate.call(this,game,args);};
G__13731.cljs$lang$maxFixedArity = 1;
G__13731.cljs$lang$applyTo = (function (arglist__13733){
var game = cljs.core.first(arglist__13733);
var args = cljs.core.rest(arglist__13733);
return G__13731__delegate(game,args);
});
G__13731.cljs$core$IFn$_invoke$arity$variadic = G__13731__delegate;
return G__13731;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$final,(function() { 
var G__13734__delegate = function (board,player){
return board;
};
var G__13734 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__13735__i = 0, G__13735__a = new Array(arguments.length -  1);
while (G__13735__i < G__13735__a.length) {G__13735__a[G__13735__i] = arguments[G__13735__i + 1]; ++G__13735__i;}
  player = new cljs.core.IndexedSeq(G__13735__a,0);
} 
return G__13734__delegate.call(this,board,player);};
G__13734.cljs$lang$maxFixedArity = 1;
G__13734.cljs$lang$applyTo = (function (arglist__13736){
var board = cljs.core.first(arglist__13736);
var player = cljs.core.rest(arglist__13736);
return G__13734__delegate(board,player);
});
G__13734.cljs$core$IFn$_invoke$arity$variadic = G__13734__delegate;
return G__13734;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$p1,(function() { 
var G__13737__delegate = function (board,player){
return board;
};
var G__13737 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__13738__i = 0, G__13738__a = new Array(arguments.length -  1);
while (G__13738__i < G__13738__a.length) {G__13738__a[G__13738__i] = arguments[G__13738__i + 1]; ++G__13738__i;}
  player = new cljs.core.IndexedSeq(G__13738__a,0);
} 
return G__13737__delegate.call(this,board,player);};
G__13737.cljs$lang$maxFixedArity = 1;
G__13737.cljs$lang$applyTo = (function (arglist__13739){
var board = cljs.core.first(arglist__13739);
var player = cljs.core.rest(arglist__13739);
return G__13737__delegate(board,player);
});
G__13737.cljs$core$IFn$_invoke$arity$variadic = G__13737__delegate;
return G__13737;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$p2,(function() { 
var G__13740__delegate = function (board,player){
return board;
};
var G__13740 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__13741__i = 0, G__13741__a = new Array(arguments.length -  1);
while (G__13741__i < G__13741__a.length) {G__13741__a[G__13741__i] = arguments[G__13741__i + 1]; ++G__13741__i;}
  player = new cljs.core.IndexedSeq(G__13741__a,0);
} 
return G__13740__delegate.call(this,board,player);};
G__13740.cljs$lang$maxFixedArity = 1;
G__13740.cljs$lang$applyTo = (function (arglist__13742){
var board = cljs.core.first(arglist__13742);
var player = cljs.core.rest(arglist__13742);
return G__13740__delegate(board,player);
});
G__13740.cljs$core$IFn$_invoke$arity$variadic = G__13740__delegate;
return G__13740;
})()
);
