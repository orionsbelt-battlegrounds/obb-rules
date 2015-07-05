// Compiled by ClojureScript 0.0-3308 {}
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
obb_rules.privatize.game = (function (){var method_table__17004__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17005__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17006__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17007__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17008__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"obb-rules.privatize","game"),((function (method_table__17004__auto__,prefer_table__17005__auto__,method_cache__17006__auto__,cached_hierarchy__17007__auto__,hierarchy__17008__auto__){
return (function() { 
var G__23384__delegate = function (game,player){
return cljs.core.keyword.call(null,obb_rules.game.state.call(null,game));
};
var G__23384 = function (game,var_args){
var player = null;
if (arguments.length > 1) {
var G__23385__i = 0, G__23385__a = new Array(arguments.length -  1);
while (G__23385__i < G__23385__a.length) {G__23385__a[G__23385__i] = arguments[G__23385__i + 1]; ++G__23385__i;}
  player = new cljs.core.IndexedSeq(G__23385__a,0);
} 
return G__23384__delegate.call(this,game,player);};
G__23384.cljs$lang$maxFixedArity = 1;
G__23384.cljs$lang$applyTo = (function (arglist__23386){
var game = cljs.core.first(arglist__23386);
var player = cljs.core.rest(arglist__23386);
return G__23384__delegate(game,player);
});
G__23384.cljs$core$IFn$_invoke$arity$variadic = G__23384__delegate;
return G__23384;
})()
;})(method_table__17004__auto__,prefer_table__17005__auto__,method_cache__17006__auto__,cached_hierarchy__17007__auto__,hierarchy__17008__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17008__auto__,method_table__17004__auto__,prefer_table__17005__auto__,method_cache__17006__auto__,cached_hierarchy__17007__auto__));
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
var G__23387__delegate = function (game,args){
var viewed_by = cljs.core.keyword.call(null,cljs.core.first.call(null,args));
return obb_rules.privatize.remove_elements.call(null,obb_rules.privatize.remove_elements.call(null,obb_rules.privatize.clear_stash.call(null,obb_rules.privatize.clear_stash.call(null,game,new cljs.core.Keyword(null,"p1","p1",-936759954),viewed_by),new cljs.core.Keyword(null,"p2","p2",905500641),viewed_by),new cljs.core.Keyword(null,"p1","p1",-936759954),viewed_by),new cljs.core.Keyword(null,"p2","p2",905500641),viewed_by);
};
var G__23387 = function (game,var_args){
var args = null;
if (arguments.length > 1) {
var G__23388__i = 0, G__23388__a = new Array(arguments.length -  1);
while (G__23388__i < G__23388__a.length) {G__23388__a[G__23388__i] = arguments[G__23388__i + 1]; ++G__23388__i;}
  args = new cljs.core.IndexedSeq(G__23388__a,0);
} 
return G__23387__delegate.call(this,game,args);};
G__23387.cljs$lang$maxFixedArity = 1;
G__23387.cljs$lang$applyTo = (function (arglist__23389){
var game = cljs.core.first(arglist__23389);
var args = cljs.core.rest(arglist__23389);
return G__23387__delegate(game,args);
});
G__23387.cljs$core$IFn$_invoke$arity$variadic = G__23387__delegate;
return G__23387;
})()
);
cljs.core._add_method.call(null,obb_rules.privatize.game,new cljs.core.Keyword(null,"final","final",1157881357),(function() { 
var G__23390__delegate = function (board,player){
return board;
};
var G__23390 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__23391__i = 0, G__23391__a = new Array(arguments.length -  1);
while (G__23391__i < G__23391__a.length) {G__23391__a[G__23391__i] = arguments[G__23391__i + 1]; ++G__23391__i;}
  player = new cljs.core.IndexedSeq(G__23391__a,0);
} 
return G__23390__delegate.call(this,board,player);};
G__23390.cljs$lang$maxFixedArity = 1;
G__23390.cljs$lang$applyTo = (function (arglist__23392){
var board = cljs.core.first(arglist__23392);
var player = cljs.core.rest(arglist__23392);
return G__23390__delegate(board,player);
});
G__23390.cljs$core$IFn$_invoke$arity$variadic = G__23390__delegate;
return G__23390;
})()
);
cljs.core._add_method.call(null,obb_rules.privatize.game,new cljs.core.Keyword(null,"p1","p1",-936759954),(function() { 
var G__23393__delegate = function (board,player){
return board;
};
var G__23393 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__23394__i = 0, G__23394__a = new Array(arguments.length -  1);
while (G__23394__i < G__23394__a.length) {G__23394__a[G__23394__i] = arguments[G__23394__i + 1]; ++G__23394__i;}
  player = new cljs.core.IndexedSeq(G__23394__a,0);
} 
return G__23393__delegate.call(this,board,player);};
G__23393.cljs$lang$maxFixedArity = 1;
G__23393.cljs$lang$applyTo = (function (arglist__23395){
var board = cljs.core.first(arglist__23395);
var player = cljs.core.rest(arglist__23395);
return G__23393__delegate(board,player);
});
G__23393.cljs$core$IFn$_invoke$arity$variadic = G__23393__delegate;
return G__23393;
})()
);
cljs.core._add_method.call(null,obb_rules.privatize.game,new cljs.core.Keyword(null,"p2","p2",905500641),(function() { 
var G__23396__delegate = function (board,player){
return board;
};
var G__23396 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__23397__i = 0, G__23397__a = new Array(arguments.length -  1);
while (G__23397__i < G__23397__a.length) {G__23397__a[G__23397__i] = arguments[G__23397__i + 1]; ++G__23397__i;}
  player = new cljs.core.IndexedSeq(G__23397__a,0);
} 
return G__23396__delegate.call(this,board,player);};
G__23396.cljs$lang$maxFixedArity = 1;
G__23396.cljs$lang$applyTo = (function (arglist__23398){
var board = cljs.core.first(arglist__23398);
var player = cljs.core.rest(arglist__23398);
return G__23396__delegate(board,player);
});
G__23396.cljs$core$IFn$_invoke$arity$variadic = G__23396__delegate;
return G__23396;
})()
);

//# sourceMappingURL=privatize.js.map?rel=1436104825234