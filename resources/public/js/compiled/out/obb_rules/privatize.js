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
var G__33188__delegate = function (game,player){
return cljs.core.keyword.call(null,obb_rules.game.state.call(null,game));
};
var G__33188 = function (game,var_args){
var player = null;
if (arguments.length > 1) {
var G__33189__i = 0, G__33189__a = new Array(arguments.length -  1);
while (G__33189__i < G__33189__a.length) {G__33189__a[G__33189__i] = arguments[G__33189__i + 1]; ++G__33189__i;}
  player = new cljs.core.IndexedSeq(G__33189__a,0);
} 
return G__33188__delegate.call(this,game,player);};
G__33188.cljs$lang$maxFixedArity = 1;
G__33188.cljs$lang$applyTo = (function (arglist__33190){
var game = cljs.core.first(arglist__33190);
var player = cljs.core.rest(arglist__33190);
return G__33188__delegate(game,player);
});
G__33188.cljs$core$IFn$_invoke$arity$variadic = G__33188__delegate;
return G__33188;
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
var G__33191__delegate = function (game,args){
var viewed_by = cljs.core.keyword.call(null,cljs.core.first.call(null,args));
return obb_rules.privatize.remove_elements.call(null,obb_rules.privatize.remove_elements.call(null,obb_rules.privatize.clear_stash.call(null,obb_rules.privatize.clear_stash.call(null,game,new cljs.core.Keyword(null,"p1","p1",-936759954),viewed_by),new cljs.core.Keyword(null,"p2","p2",905500641),viewed_by),new cljs.core.Keyword(null,"p1","p1",-936759954),viewed_by),new cljs.core.Keyword(null,"p2","p2",905500641),viewed_by);
};
var G__33191 = function (game,var_args){
var args = null;
if (arguments.length > 1) {
var G__33192__i = 0, G__33192__a = new Array(arguments.length -  1);
while (G__33192__i < G__33192__a.length) {G__33192__a[G__33192__i] = arguments[G__33192__i + 1]; ++G__33192__i;}
  args = new cljs.core.IndexedSeq(G__33192__a,0);
} 
return G__33191__delegate.call(this,game,args);};
G__33191.cljs$lang$maxFixedArity = 1;
G__33191.cljs$lang$applyTo = (function (arglist__33193){
var game = cljs.core.first(arglist__33193);
var args = cljs.core.rest(arglist__33193);
return G__33191__delegate(game,args);
});
G__33191.cljs$core$IFn$_invoke$arity$variadic = G__33191__delegate;
return G__33191;
})()
);
cljs.core._add_method.call(null,obb_rules.privatize.game,new cljs.core.Keyword(null,"final","final",1157881357),(function() { 
var G__33194__delegate = function (board,player){
return board;
};
var G__33194 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__33195__i = 0, G__33195__a = new Array(arguments.length -  1);
while (G__33195__i < G__33195__a.length) {G__33195__a[G__33195__i] = arguments[G__33195__i + 1]; ++G__33195__i;}
  player = new cljs.core.IndexedSeq(G__33195__a,0);
} 
return G__33194__delegate.call(this,board,player);};
G__33194.cljs$lang$maxFixedArity = 1;
G__33194.cljs$lang$applyTo = (function (arglist__33196){
var board = cljs.core.first(arglist__33196);
var player = cljs.core.rest(arglist__33196);
return G__33194__delegate(board,player);
});
G__33194.cljs$core$IFn$_invoke$arity$variadic = G__33194__delegate;
return G__33194;
})()
);
cljs.core._add_method.call(null,obb_rules.privatize.game,new cljs.core.Keyword(null,"p1","p1",-936759954),(function() { 
var G__33197__delegate = function (board,player){
return board;
};
var G__33197 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__33198__i = 0, G__33198__a = new Array(arguments.length -  1);
while (G__33198__i < G__33198__a.length) {G__33198__a[G__33198__i] = arguments[G__33198__i + 1]; ++G__33198__i;}
  player = new cljs.core.IndexedSeq(G__33198__a,0);
} 
return G__33197__delegate.call(this,board,player);};
G__33197.cljs$lang$maxFixedArity = 1;
G__33197.cljs$lang$applyTo = (function (arglist__33199){
var board = cljs.core.first(arglist__33199);
var player = cljs.core.rest(arglist__33199);
return G__33197__delegate(board,player);
});
G__33197.cljs$core$IFn$_invoke$arity$variadic = G__33197__delegate;
return G__33197;
})()
);
cljs.core._add_method.call(null,obb_rules.privatize.game,new cljs.core.Keyword(null,"p2","p2",905500641),(function() { 
var G__33200__delegate = function (board,player){
return board;
};
var G__33200 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__33201__i = 0, G__33201__a = new Array(arguments.length -  1);
while (G__33201__i < G__33201__a.length) {G__33201__a[G__33201__i] = arguments[G__33201__i + 1]; ++G__33201__i;}
  player = new cljs.core.IndexedSeq(G__33201__a,0);
} 
return G__33200__delegate.call(this,board,player);};
G__33200.cljs$lang$maxFixedArity = 1;
G__33200.cljs$lang$applyTo = (function (arglist__33202){
var board = cljs.core.first(arglist__33202);
var player = cljs.core.rest(arglist__33202);
return G__33200__delegate(board,player);
});
G__33200.cljs$core$IFn$_invoke$arity$variadic = G__33200__delegate;
return G__33200;
})()
);

//# sourceMappingURL=privatize.js.map?rel=1436517557838