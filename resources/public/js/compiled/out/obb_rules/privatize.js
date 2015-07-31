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
obb_rules.privatize.game = (function (){var method_table__7833__auto__ = (function (){var G__13886 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13886) : cljs.core.atom.call(null,G__13886));
})();
var prefer_table__7834__auto__ = (function (){var G__13887 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13887) : cljs.core.atom.call(null,G__13887));
})();
var method_cache__7835__auto__ = (function (){var G__13888 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13888) : cljs.core.atom.call(null,G__13888));
})();
var cached_hierarchy__7836__auto__ = (function (){var G__13889 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13889) : cljs.core.atom.call(null,G__13889));
})();
var hierarchy__7837__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("obb-rules.privatize","game"),((function (method_table__7833__auto__,prefer_table__7834__auto__,method_cache__7835__auto__,cached_hierarchy__7836__auto__,hierarchy__7837__auto__){
return (function() { 
var G__13890__delegate = function (game,player){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(obb_rules.game.state.cljs$core$IFn$_invoke$arity$1(game));
};
var G__13890 = function (game,var_args){
var player = null;
if (arguments.length > 1) {
var G__13891__i = 0, G__13891__a = new Array(arguments.length -  1);
while (G__13891__i < G__13891__a.length) {G__13891__a[G__13891__i] = arguments[G__13891__i + 1]; ++G__13891__i;}
  player = new cljs.core.IndexedSeq(G__13891__a,0);
} 
return G__13890__delegate.call(this,game,player);};
G__13890.cljs$lang$maxFixedArity = 1;
G__13890.cljs$lang$applyTo = (function (arglist__13892){
var game = cljs.core.first(arglist__13892);
var player = cljs.core.rest(arglist__13892);
return G__13890__delegate(game,player);
});
G__13890.cljs$core$IFn$_invoke$arity$variadic = G__13890__delegate;
return G__13890;
})()
;})(method_table__7833__auto__,prefer_table__7834__auto__,method_cache__7835__auto__,cached_hierarchy__7836__auto__,hierarchy__7837__auto__))
,cljs.core.constant$keyword$default,hierarchy__7837__auto__,method_table__7833__auto__,prefer_table__7834__auto__,method_cache__7835__auto__,cached_hierarchy__7836__auto__));
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
var G__13893__delegate = function (game,args){
var viewed_by = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
return obb_rules.privatize.remove_elements(obb_rules.privatize.remove_elements(obb_rules.privatize.clear_stash(obb_rules.privatize.clear_stash(game,cljs.core.constant$keyword$p1,viewed_by),cljs.core.constant$keyword$p2,viewed_by),cljs.core.constant$keyword$p1,viewed_by),cljs.core.constant$keyword$p2,viewed_by);
};
var G__13893 = function (game,var_args){
var args = null;
if (arguments.length > 1) {
var G__13894__i = 0, G__13894__a = new Array(arguments.length -  1);
while (G__13894__i < G__13894__a.length) {G__13894__a[G__13894__i] = arguments[G__13894__i + 1]; ++G__13894__i;}
  args = new cljs.core.IndexedSeq(G__13894__a,0);
} 
return G__13893__delegate.call(this,game,args);};
G__13893.cljs$lang$maxFixedArity = 1;
G__13893.cljs$lang$applyTo = (function (arglist__13895){
var game = cljs.core.first(arglist__13895);
var args = cljs.core.rest(arglist__13895);
return G__13893__delegate(game,args);
});
G__13893.cljs$core$IFn$_invoke$arity$variadic = G__13893__delegate;
return G__13893;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$final,(function() { 
var G__13896__delegate = function (board,player){
return board;
};
var G__13896 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__13897__i = 0, G__13897__a = new Array(arguments.length -  1);
while (G__13897__i < G__13897__a.length) {G__13897__a[G__13897__i] = arguments[G__13897__i + 1]; ++G__13897__i;}
  player = new cljs.core.IndexedSeq(G__13897__a,0);
} 
return G__13896__delegate.call(this,board,player);};
G__13896.cljs$lang$maxFixedArity = 1;
G__13896.cljs$lang$applyTo = (function (arglist__13898){
var board = cljs.core.first(arglist__13898);
var player = cljs.core.rest(arglist__13898);
return G__13896__delegate(board,player);
});
G__13896.cljs$core$IFn$_invoke$arity$variadic = G__13896__delegate;
return G__13896;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$p1,(function() { 
var G__13899__delegate = function (board,player){
return board;
};
var G__13899 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__13900__i = 0, G__13900__a = new Array(arguments.length -  1);
while (G__13900__i < G__13900__a.length) {G__13900__a[G__13900__i] = arguments[G__13900__i + 1]; ++G__13900__i;}
  player = new cljs.core.IndexedSeq(G__13900__a,0);
} 
return G__13899__delegate.call(this,board,player);};
G__13899.cljs$lang$maxFixedArity = 1;
G__13899.cljs$lang$applyTo = (function (arglist__13901){
var board = cljs.core.first(arglist__13901);
var player = cljs.core.rest(arglist__13901);
return G__13899__delegate(board,player);
});
G__13899.cljs$core$IFn$_invoke$arity$variadic = G__13899__delegate;
return G__13899;
})()
);
obb_rules.privatize.game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$p2,(function() { 
var G__13902__delegate = function (board,player){
return board;
};
var G__13902 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__13903__i = 0, G__13903__a = new Array(arguments.length -  1);
while (G__13903__i < G__13903__a.length) {G__13903__a[G__13903__i] = arguments[G__13903__i + 1]; ++G__13903__i;}
  player = new cljs.core.IndexedSeq(G__13903__a,0);
} 
return G__13902__delegate.call(this,board,player);};
G__13902.cljs$lang$maxFixedArity = 1;
G__13902.cljs$lang$applyTo = (function (arglist__13904){
var board = cljs.core.first(arglist__13904);
var player = cljs.core.rest(arglist__13904);
return G__13902__delegate(board,player);
});
G__13902.cljs$core$IFn$_invoke$arity$variadic = G__13902__delegate;
return G__13902;
})()
);
