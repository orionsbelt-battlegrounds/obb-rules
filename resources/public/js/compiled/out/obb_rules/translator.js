// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.translator');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.simplifier');
goog.require('obb_rules.laws');
goog.require('obb_rules.element');
obb_rules.translator.max_coordinate = ((1) + obb_rules.laws.default_board_w);
/**
 * Checks if the current given focus is the default one
 */
obb_rules.translator.default_focus_QMARK_ = (function obb_rules$translator$default_focus_QMARK_(focus){
return obb_rules.simplifier.name_EQ_(cljs.core.cst$kw$p1,focus);
});
/**
 * Translates a coordinate for a given player focus
 */
obb_rules.translator.coordinate = (function obb_rules$translator$coordinate(focus,p__15434){
var vec__15436 = p__15434;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15436,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15436,(1),null);
if(cljs.core.truth_(obb_rules.translator.default_focus_QMARK_(focus))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(obb_rules.translator.max_coordinate - x),(obb_rules.translator.max_coordinate - y)], null);
}
});
/**
 * Translates a direction for a given player focus
 */
obb_rules.translator.direction = (function obb_rules$translator$direction(focus,dir){
if(cljs.core.truth_(obb_rules.translator.default_focus_QMARK_(focus))){
return dir;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(dir),cljs.core.cst$kw$south)){
return cljs.core.cst$kw$north;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(dir),cljs.core.cst$kw$north)){
return cljs.core.cst$kw$south;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(dir),cljs.core.cst$kw$west)){
return cljs.core.cst$kw$east;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(dir),cljs.core.cst$kw$east)){
return cljs.core.cst$kw$west;
} else {
return null;
}
}
}
}
}
});
/**
 * Translates an element for a given player focus
 */
obb_rules.translator.element = (function obb_rules$translator$element(focus,element__$1){
if(cljs.core.truth_(obb_rules.translator.default_focus_QMARK_(focus))){
return element__$1;
} else {
var dir = obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$1(element__$1);
var coord = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(element__$1);
return obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$2(obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$2(element__$1,obb_rules.translator.coordinate(focus,coord)),obb_rules.translator.direction(focus,dir));
}
});
if(typeof obb_rules.translator.convert_action !== 'undefined'){
} else {
obb_rules.translator.convert_action = (function (){var method_table__7069__auto__ = (function (){var G__15437 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15437) : cljs.core.atom.call(null,G__15437));
})();
var prefer_table__7070__auto__ = (function (){var G__15438 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15438) : cljs.core.atom.call(null,G__15438));
})();
var method_cache__7071__auto__ = (function (){var G__15439 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15439) : cljs.core.atom.call(null,G__15439));
})();
var cached_hierarchy__7072__auto__ = (function (){var G__15440 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15440) : cljs.core.atom.call(null,G__15440));
})();
var hierarchy__7073__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("obb-rules.translator","convert-action"),((function (method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__,hierarchy__7073__auto__){
return (function (x){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(x));
});})(method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__,hierarchy__7073__auto__))
,cljs.core.cst$kw$default,hierarchy__7073__auto__,method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__));
})();
}
obb_rules.translator.convert_action.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$rotate,(function (action){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rotate,obb_rules.translator.coordinate(cljs.core.cst$kw$p2,cljs.core.get.cljs$core$IFn$_invoke$arity$2(action,(1))),obb_rules.translator.direction(cljs.core.cst$kw$p2,cljs.core.get.cljs$core$IFn$_invoke$arity$2(action,(2)))], null);
}));
obb_rules.translator.convert_action.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$move,(function (action){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$move,obb_rules.translator.coordinate(cljs.core.cst$kw$p2,cljs.core.get.cljs$core$IFn$_invoke$arity$2(action,(1))),obb_rules.translator.coordinate(cljs.core.cst$kw$p2,cljs.core.get.cljs$core$IFn$_invoke$arity$2(action,(2))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(action,(3))], null);
}));
obb_rules.translator.convert_action.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$goto,(function (action){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$goto,obb_rules.translator.coordinate(cljs.core.cst$kw$p2,cljs.core.get.cljs$core$IFn$_invoke$arity$2(action,(1))),obb_rules.translator.coordinate(cljs.core.cst$kw$p2,cljs.core.get.cljs$core$IFn$_invoke$arity$2(action,(2)))], null);
}));
obb_rules.translator.convert_action.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attack,(function (action){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attack,obb_rules.translator.coordinate(cljs.core.cst$kw$p2,cljs.core.get.cljs$core$IFn$_invoke$arity$2(action,(1))),obb_rules.translator.coordinate(cljs.core.cst$kw$p2,cljs.core.get.cljs$core$IFn$_invoke$arity$2(action,(2)))], null);
}));
obb_rules.translator.convert_action.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$deploy,(function (action){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$deploy,cljs.core.get.cljs$core$IFn$_invoke$arity$2(action,(1)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(action,(2)),obb_rules.translator.coordinate(cljs.core.cst$kw$p2,cljs.core.get.cljs$core$IFn$_invoke$arity$2(action,(3)))], null);
}));
/**
 * Translates an action for a given player focus
 */
obb_rules.translator.action = (function obb_rules$translator$action(focus,action__$1){
if(cljs.core.truth_(obb_rules.translator.default_focus_QMARK_(focus))){
return action__$1;
} else {
return (obb_rules.translator.convert_action.cljs$core$IFn$_invoke$arity$1 ? obb_rules.translator.convert_action.cljs$core$IFn$_invoke$arity$1(action__$1) : obb_rules.translator.convert_action.call(null,action__$1));
}
});
/**
 * Translates all actions for a given player focus
 */
obb_rules.translator.actions = (function obb_rules$translator$actions(focus,actions__$1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_rules.translator.action,focus),actions__$1);
});
/**
 * Converts a board to :p2 focus
 */
obb_rules.translator.convert_board = (function obb_rules$translator$convert_board(board){
var elements = obb_rules.board.elements.cljs$core$IFn$_invoke$arity$1(board);
var translated = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__6928__auto__ = ((function (elements){
return (function obb_rules$translator$convert_board_$_iter__15451(s__15452){
return (new cljs.core.LazySeq(null,((function (elements){
return (function (){
var s__15452__$1 = s__15452;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15452__$1);
if(temp__4657__auto__){
var s__15452__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15452__$2)){
var c__6926__auto__ = cljs.core.chunk_first(s__15452__$2);
var size__6927__auto__ = cljs.core.count(c__6926__auto__);
var b__15454 = cljs.core.chunk_buffer(size__6927__auto__);
if((function (){var i__15453 = (0);
while(true){
if((i__15453 < size__6927__auto__)){
var vec__15459 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6926__auto__,i__15453);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15459,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15459,(1),null);
cljs.core.chunk_append(b__15454,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.translator.coordinate(cljs.core.cst$kw$p2,k),obb_rules.translator.element(cljs.core.cst$kw$p2,v)], null));

var G__15461 = (i__15453 + (1));
i__15453 = G__15461;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15454),obb_rules$translator$convert_board_$_iter__15451(cljs.core.chunk_rest(s__15452__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15454),null);
}
} else {
var vec__15460 = cljs.core.first(s__15452__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15460,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15460,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.translator.coordinate(cljs.core.cst$kw$p2,k),obb_rules.translator.element(cljs.core.cst$kw$p2,v)], null),obb_rules$translator$convert_board_$_iter__15451(cljs.core.rest(s__15452__$2)));
}
} else {
return null;
}
break;
}
});})(elements))
,null,null));
});})(elements))
;
return iter__6928__auto__(elements);
})());
return obb_rules.board.elements.cljs$core$IFn$_invoke$arity$2(board,translated);
});
/**
 * Translates a full board to a given player focus
 */
obb_rules.translator.board = (function obb_rules$translator$board(focus,board__$1){
if(cljs.core.truth_(obb_rules.translator.default_focus_QMARK_(focus))){
return board__$1;
} else {
return obb_rules.translator.convert_board(board__$1);
}
});
