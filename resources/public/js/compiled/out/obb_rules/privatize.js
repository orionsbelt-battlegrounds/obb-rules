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
var G__41932__delegate = function (game,player){
return cljs.core.keyword.call(null,obb_rules.game.state.call(null,game));
};
var G__41932 = function (game,var_args){
var player = null;
if (arguments.length > 1) {
var G__41933__i = 0, G__41933__a = new Array(arguments.length -  1);
while (G__41933__i < G__41933__a.length) {G__41933__a[G__41933__i] = arguments[G__41933__i + 1]; ++G__41933__i;}
  player = new cljs.core.IndexedSeq(G__41933__a,0);
} 
return G__41932__delegate.call(this,game,player);};
G__41932.cljs$lang$maxFixedArity = 1;
G__41932.cljs$lang$applyTo = (function (arglist__41934){
var game = cljs.core.first(arglist__41934);
var player = cljs.core.rest(arglist__41934);
return G__41932__delegate(game,player);
});
G__41932.cljs$core$IFn$_invoke$arity$variadic = G__41932__delegate;
return G__41932;
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
var G__41935__delegate = function (game,args){
var viewed_by = cljs.core.keyword.call(null,cljs.core.first.call(null,args));
return obb_rules.privatize.remove_elements.call(null,obb_rules.privatize.remove_elements.call(null,obb_rules.privatize.clear_stash.call(null,obb_rules.privatize.clear_stash.call(null,game,new cljs.core.Keyword(null,"p1","p1",-936759954),viewed_by),new cljs.core.Keyword(null,"p2","p2",905500641),viewed_by),new cljs.core.Keyword(null,"p1","p1",-936759954),viewed_by),new cljs.core.Keyword(null,"p2","p2",905500641),viewed_by);
};
var G__41935 = function (game,var_args){
var args = null;
if (arguments.length > 1) {
var G__41936__i = 0, G__41936__a = new Array(arguments.length -  1);
while (G__41936__i < G__41936__a.length) {G__41936__a[G__41936__i] = arguments[G__41936__i + 1]; ++G__41936__i;}
  args = new cljs.core.IndexedSeq(G__41936__a,0);
} 
return G__41935__delegate.call(this,game,args);};
G__41935.cljs$lang$maxFixedArity = 1;
G__41935.cljs$lang$applyTo = (function (arglist__41937){
var game = cljs.core.first(arglist__41937);
var args = cljs.core.rest(arglist__41937);
return G__41935__delegate(game,args);
});
G__41935.cljs$core$IFn$_invoke$arity$variadic = G__41935__delegate;
return G__41935;
})()
);
cljs.core._add_method.call(null,obb_rules.privatize.game,new cljs.core.Keyword(null,"final","final",1157881357),(function() { 
var G__41938__delegate = function (board,player){
return board;
};
var G__41938 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__41939__i = 0, G__41939__a = new Array(arguments.length -  1);
while (G__41939__i < G__41939__a.length) {G__41939__a[G__41939__i] = arguments[G__41939__i + 1]; ++G__41939__i;}
  player = new cljs.core.IndexedSeq(G__41939__a,0);
} 
return G__41938__delegate.call(this,board,player);};
G__41938.cljs$lang$maxFixedArity = 1;
G__41938.cljs$lang$applyTo = (function (arglist__41940){
var board = cljs.core.first(arglist__41940);
var player = cljs.core.rest(arglist__41940);
return G__41938__delegate(board,player);
});
G__41938.cljs$core$IFn$_invoke$arity$variadic = G__41938__delegate;
return G__41938;
})()
);
cljs.core._add_method.call(null,obb_rules.privatize.game,new cljs.core.Keyword(null,"p1","p1",-936759954),(function() { 
var G__41941__delegate = function (board,player){
return board;
};
var G__41941 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__41942__i = 0, G__41942__a = new Array(arguments.length -  1);
while (G__41942__i < G__41942__a.length) {G__41942__a[G__41942__i] = arguments[G__41942__i + 1]; ++G__41942__i;}
  player = new cljs.core.IndexedSeq(G__41942__a,0);
} 
return G__41941__delegate.call(this,board,player);};
G__41941.cljs$lang$maxFixedArity = 1;
G__41941.cljs$lang$applyTo = (function (arglist__41943){
var board = cljs.core.first(arglist__41943);
var player = cljs.core.rest(arglist__41943);
return G__41941__delegate(board,player);
});
G__41941.cljs$core$IFn$_invoke$arity$variadic = G__41941__delegate;
return G__41941;
})()
);
cljs.core._add_method.call(null,obb_rules.privatize.game,new cljs.core.Keyword(null,"p2","p2",905500641),(function() { 
var G__41944__delegate = function (board,player){
return board;
};
var G__41944 = function (board,var_args){
var player = null;
if (arguments.length > 1) {
var G__41945__i = 0, G__41945__a = new Array(arguments.length -  1);
while (G__41945__i < G__41945__a.length) {G__41945__a[G__41945__i] = arguments[G__41945__i + 1]; ++G__41945__i;}
  player = new cljs.core.IndexedSeq(G__41945__a,0);
} 
return G__41944__delegate.call(this,board,player);};
G__41944.cljs$lang$maxFixedArity = 1;
G__41944.cljs$lang$applyTo = (function (arglist__41946){
var board = cljs.core.first(arglist__41946);
var player = cljs.core.rest(arglist__41946);
return G__41944__delegate(board,player);
});
G__41944.cljs$core$IFn$_invoke$arity$variadic = G__41944__delegate;
return G__41944;
})()
);

//# sourceMappingURL=privatize.js.map?rel=1454263154845