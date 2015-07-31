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
obb_rules.privatize.game = (function (){var method_table__7831__auto__ = (function (){var G__13884 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13884) : cljs.core.atom.call(null,G__13884));
})();
var prefer_table__7832__auto__ = (function (){var G__13885 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13885) : cljs.core.atom.call(null,G__13885));
})();
var method_cache__7833__auto__ = (function (){var G__13886 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13886) : cljs.core.atom.call(null,G__13886));
})();
var cached_hierarchy__7834__auto__ = (function (){var G__13887 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13887) : cljs.core.atom.call(null,G__13887));
})();
var hierarchy__7835__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("obb-rules.privatize","game"),((function (method_table__7831__auto__,prefer_table__7832__auto__,method_cache__7833__auto__,cached_hierarchy__7834__auto__,hierarchy__7835__auto__){
return (function() { 
var G__13888__delegate = function (game,player){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game));
};
var G__13888 = function (game,var_args){
var player = null;
if (arguments.length > 1) {
var G__13889__i = 0, G__13889__a = new Array(arguments.length -  1);
while (G__13889__i < G__13889__a.length) {G__13889__a[G__13889__i] = arguments[G__13889__i + 1]; ++G__13889__i;}
  player = new cljs.core.IndexedSeq(G__13889__a,0);
} 
return G__13888__delegate.call(this,game,player);};
G__13888.cljs$lang$maxFixedArity = 1;
G__13888.cljs$lang$applyTo = (function (arglist__13890){
var game = cljs.core.first(arglist__13890);
var player = cljs.core.rest(arglist__13890);
return G__13888__delegate(game,player);
});
G__13888.cljs$core$IFn$_invoke$arity$variadic = G__13888__delegate;
return G__13888;
})()
;})(method_table__7831__auto__,prefer_table__7832__auto__,method_cache__7833__auto__,cached_hierarchy__7834__auto__,hierarchy__7835__auto__))
,cljs.core.constant$keyword$default,hierarchy__7835__auto__,method_table__7831__auto__,prefer_table__7832__auto__,method_cache__7833__auto__,cached_hierarchy__7834__auto__));
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
var G__13891__delegate = function (game,args){
var viewed_by = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
return obb_rules.privatize.remove_elements(obb_rules.privatize.remove_elements(obb_rules.privatize.clear_stash(obb_rules.privatize.clear_stash(game,cljs.core.constant$keyword$p1,viewed_by),cljs.core.constant$keyword$p2,viewed_by),cljs.core.constant$keyword$p1,viewed_by),cljs.core.constant$keyword$p2,viewed_by);
};
var G__13891 = function (game,var_args){
var args = null;
if (arguments.length > 1) {
var G__13892__i = 0, G__13892__a = new Array(arguments.length -  1);
while (G__13892__i < G__13892__a.length) {G__13892__a[G__13892__i] = arguments[G__13892__i + 1]; ++G__13892__i;}
  args = new cljs.core.IndexedSeq(G__13892__a,0);
} 
return G__13891__delegate.call(this,game,args);};
G__13891.cljs$lang$maxFixedArity = 1;
G__13891.cljs$lang$applyTo = (function (arglist__13893){
var game = cljs.core.first(arglist__13893);
var args = cljs.core.rest(arglist__13893);
return G__13891__delegate(game,args);
});
G__13891.cljs$core$IFn$_invoke$arity$variadic = G__13891__delegate;
return G__13891;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$final,(function() { 
var G__13894__delegate = function (board,player){
return board;
};
var G__13894 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__13895__i = 0, G__13895__a = new Array(arguments.length -  1);
while (G__13895__i < G__13895__a.length) {G__13895__a[G__13895__i] = arguments[G__13895__i + 1]; ++G__13895__i;}
  player = new cljs.core.IndexedSeq(G__13895__a,0);
} 
return G__13894__delegate.call(this,board,player);};
G__13894.cljs$lang$maxFixedArity = 1;
G__13894.cljs$lang$applyTo = (function (arglist__13896){
var board = cljs.core.first(arglist__13896);
var player = cljs.core.rest(arglist__13896);
return G__13894__delegate(board,player);
});
G__13894.cljs$core$IFn$_invoke$arity$variadic = G__13894__delegate;
return G__13894;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$p1,(function() { 
var G__13897__delegate = function (board,player){
return board;
};
var G__13897 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__13898__i = 0, G__13898__a = new Array(arguments.length -  1);
while (G__13898__i < G__13898__a.length) {G__13898__a[G__13898__i] = arguments[G__13898__i + 1]; ++G__13898__i;}
  player = new cljs.core.IndexedSeq(G__13898__a,0);
} 
return G__13897__delegate.call(this,board,player);};
G__13897.cljs$lang$maxFixedArity = 1;
G__13897.cljs$lang$applyTo = (function (arglist__13899){
var board = cljs.core.first(arglist__13899);
var player = cljs.core.rest(arglist__13899);
return G__13897__delegate(board,player);
});
G__13897.cljs$core$IFn$_invoke$arity$variadic = G__13897__delegate;
return G__13897;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$p2,(function() { 
var G__13900__delegate = function (board,player){
return board;
};
var G__13900 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__13901__i = 0, G__13901__a = new Array(arguments.length -  1);
while (G__13901__i < G__13901__a.length) {G__13901__a[G__13901__i] = arguments[G__13901__i + 1]; ++G__13901__i;}
  player = new cljs.core.IndexedSeq(G__13901__a,0);
} 
return G__13900__delegate.call(this,board,player);};
G__13900.cljs$lang$maxFixedArity = 1;
G__13900.cljs$lang$applyTo = (function (arglist__13902){
var board = cljs.core.first(arglist__13902);
var player = cljs.core.rest(arglist__13902);
return G__13900__delegate(board,player);
});
G__13900.cljs$core$IFn$_invoke$arity$variadic = G__13900__delegate;
return G__13900;
})()
);
