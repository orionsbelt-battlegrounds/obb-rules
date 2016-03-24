// Compiled by ClojureScript 1.7.228 {}
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
obb_rules.privatize.game = (function (){var method_table__19283__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19284__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19285__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19286__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19287__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"obb-rules.privatize","game"),((function (method_table__19283__auto__,prefer_table__19284__auto__,method_cache__19285__auto__,cached_hierarchy__19286__auto__,hierarchy__19287__auto__){
return (function() { 
var G__47327__delegate = function (game,player){
return cljs.core.keyword.call(null,obb_rules.game.state.call(null,game));
};
var G__47327 = function (game,var_args){
var player = null;
if (arguments.length > 1) {
var G__47328__i = 0, G__47328__a = new Array(arguments.length -  1);
while (G__47328__i < G__47328__a.length) {G__47328__a[G__47328__i] = arguments[G__47328__i + 1]; ++G__47328__i;}
  player = new cljs.core.IndexedSeq(G__47328__a,0);
} 
return G__47327__delegate.call(this,game,player);};
G__47327.cljs$lang$maxFixedArity = 1;
G__47327.cljs$lang$applyTo = (function (arglist__47329){
var game = cljs.core.first(arglist__47329);
var player = cljs.core.rest(arglist__47329);
return G__47327__delegate(game,player);
});
G__47327.cljs$core$IFn$_invoke$arity$variadic = G__47327__delegate;
return G__47327;
})()
;})(method_table__19283__auto__,prefer_table__19284__auto__,method_cache__19285__auto__,cached_hierarchy__19286__auto__,hierarchy__19287__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19287__auto__,method_table__19283__auto__,prefer_table__19284__auto__,method_cache__19285__auto__,cached_hierarchy__19286__auto__));
})();
}
/**
 * Removes an element from given player
 */
obb_rules.privatize.remove_element = (function obb_rules$privatize$remove_element(player,board,element){
if(cljs.core._EQ_.call(null,player,cljs.core.keyword.call(null,obb_rules.element.element_player.call(null,element)))){
return obb_rules.board.remove_element.call(null,board,obb_rules.element.element_coordinate.call(null,element));
} else {
return board;
}
});
/**
 * Remove elements for a specific player
 */
obb_rules.privatize.remove_elements = (function obb_rules$privatize$remove_elements(board,player,viewed_by){
if(cljs.core._EQ_.call(null,player,viewed_by)){
return board;
} else {
var elements = obb_rules.board.board_elements.call(null,board,player);
var remover = cljs.core.partial.call(null,obb_rules.privatize.remove_element,player);
return cljs.core.reduce.call(null,remover,board,elements);
}
});
/**
 * Clears the stash from for a given player
 */
obb_rules.privatize.clear_stash = (function obb_rules$privatize$clear_stash(board,player,viewed_by){
if(cljs.core._EQ_.call(null,player,viewed_by)){
return board;
} else {
return obb_rules.board.set_stash.call(null,board,player,cljs.core.PersistentArrayMap.EMPTY);
}
});
cljs.core._add_method.call(null,obb_rules.privatize.game,new cljs.core.Keyword(null,"deploy","deploy",-2006774212),(function() { 
var G__47330__delegate = function (game,args){
var viewed_by = cljs.core.keyword.call(null,cljs.core.first.call(null,args));
return obb_rules.privatize.remove_elements.call(null,obb_rules.privatize.remove_elements.call(null,obb_rules.privatize.clear_stash.call(null,obb_rules.privatize.clear_stash.call(null,game,new cljs.core.Keyword(null,"p1","p1",-936759954),viewed_by),new cljs.core.Keyword(null,"p2","p2",905500641),viewed_by),new cljs.core.Keyword(null,"p1","p1",-936759954),viewed_by),new cljs.core.Keyword(null,"p2","p2",905500641),viewed_by);
};
var G__47330 = function (game,var_args){
var args = null;
if (arguments.length > 1) {
var G__47331__i = 0, G__47331__a = new Array(arguments.length -  1);
while (G__47331__i < G__47331__a.length) {G__47331__a[G__47331__i] = arguments[G__47331__i + 1]; ++G__47331__i;}
  args = new cljs.core.IndexedSeq(G__47331__a,0);
} 
return G__47330__delegate.call(this,game,args);};
G__47330.cljs$lang$maxFixedArity = 1;
G__47330.cljs$lang$applyTo = (function (arglist__47332){
var game = cljs.core.first(arglist__47332);
var args = cljs.core.rest(arglist__47332);
return G__47330__delegate(game,args);
});
G__47330.cljs$core$IFn$_invoke$arity$variadic = G__47330__delegate;
return G__47330;
})()
);
cljs.core._add_method.call(null,obb_rules.privatize.game,new cljs.core.Keyword(null,"final","final",1157881357),(function() { 
var G__47333__delegate = function (board,player){
return board;
};
var G__47333 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__47334__i = 0, G__47334__a = new Array(arguments.length -  1);
while (G__47334__i < G__47334__a.length) {G__47334__a[G__47334__i] = arguments[G__47334__i + 1]; ++G__47334__i;}
  player = new cljs.core.IndexedSeq(G__47334__a,0);
} 
return G__47333__delegate.call(this,board,player);};
G__47333.cljs$lang$maxFixedArity = 1;
G__47333.cljs$lang$applyTo = (function (arglist__47335){
var board = cljs.core.first(arglist__47335);
var player = cljs.core.rest(arglist__47335);
return G__47333__delegate(board,player);
});
G__47333.cljs$core$IFn$_invoke$arity$variadic = G__47333__delegate;
return G__47333;
})()
);
cljs.core._add_method.call(null,obb_rules.privatize.game,new cljs.core.Keyword(null,"p1","p1",-936759954),(function() { 
var G__47336__delegate = function (board,player){
return board;
};
var G__47336 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__47337__i = 0, G__47337__a = new Array(arguments.length -  1);
while (G__47337__i < G__47337__a.length) {G__47337__a[G__47337__i] = arguments[G__47337__i + 1]; ++G__47337__i;}
  player = new cljs.core.IndexedSeq(G__47337__a,0);
} 
return G__47336__delegate.call(this,board,player);};
G__47336.cljs$lang$maxFixedArity = 1;
G__47336.cljs$lang$applyTo = (function (arglist__47338){
var board = cljs.core.first(arglist__47338);
var player = cljs.core.rest(arglist__47338);
return G__47336__delegate(board,player);
});
G__47336.cljs$core$IFn$_invoke$arity$variadic = G__47336__delegate;
return G__47336;
})()
);
cljs.core._add_method.call(null,obb_rules.privatize.game,new cljs.core.Keyword(null,"p2","p2",905500641),(function() { 
var G__47339__delegate = function (board,player){
return board;
};
var G__47339 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__47340__i = 0, G__47340__a = new Array(arguments.length -  1);
while (G__47340__i < G__47340__a.length) {G__47340__a[G__47340__i] = arguments[G__47340__i + 1]; ++G__47340__i;}
  player = new cljs.core.IndexedSeq(G__47340__a,0);
} 
return G__47339__delegate.call(this,board,player);};
G__47339.cljs$lang$maxFixedArity = 1;
G__47339.cljs$lang$applyTo = (function (arglist__47341){
var board = cljs.core.first(arglist__47341);
var player = cljs.core.rest(arglist__47341);
return G__47339__delegate(board,player);
});
G__47339.cljs$core$IFn$_invoke$arity$variadic = G__47339__delegate;
return G__47339;
})()
);

//# sourceMappingURL=privatize.js.map?rel=1458852303061