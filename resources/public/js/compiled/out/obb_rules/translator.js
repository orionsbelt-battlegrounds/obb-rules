// Compiled by ClojureScript 0.0-3308 {}
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
return obb_rules.simplifier.name_EQ_.call(null,new cljs.core.Keyword(null,"p1","p1",-936759954),focus);
});
/**
 * Translates a coordinate for a given player focus
 */
obb_rules.translator.coordinate = (function obb_rules$translator$coordinate(focus,p__23254){
var vec__23256 = p__23254;
var x = cljs.core.nth.call(null,vec__23256,(0),null);
var y = cljs.core.nth.call(null,vec__23256,(1),null);
if(cljs.core.truth_(obb_rules.translator.default_focus_QMARK_.call(null,focus))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(obb_rules.translator.max_coordinate - x),(obb_rules.translator.max_coordinate - y)], null);
}
});
/**
 * Translates a direction for a given player focus
 */
obb_rules.translator.direction = (function obb_rules$translator$direction(focus,dir){
if(cljs.core.truth_(obb_rules.translator.default_focus_QMARK_.call(null,focus))){
return dir;
} else {
if(cljs.core._EQ_.call(null,cljs.core.keyword.call(null,dir),new cljs.core.Keyword(null,"south","south",1586796293))){
return new cljs.core.Keyword(null,"north","north",651323902);
} else {
if(cljs.core._EQ_.call(null,cljs.core.keyword.call(null,dir),new cljs.core.Keyword(null,"north","north",651323902))){
return new cljs.core.Keyword(null,"south","south",1586796293);
} else {
if(cljs.core._EQ_.call(null,cljs.core.keyword.call(null,dir),new cljs.core.Keyword(null,"west","west",708776677))){
return new cljs.core.Keyword(null,"east","east",1189821678);
} else {
if(cljs.core._EQ_.call(null,cljs.core.keyword.call(null,dir),new cljs.core.Keyword(null,"east","east",1189821678))){
return new cljs.core.Keyword(null,"west","west",708776677);
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
if(cljs.core.truth_(obb_rules.translator.default_focus_QMARK_.call(null,focus))){
return element__$1;
} else {
var dir = obb_rules.element.element_direction.call(null,element__$1);
var coord = obb_rules.element.element_coordinate.call(null,element__$1);
return obb_rules.element.element_direction.call(null,obb_rules.element.element_coordinate.call(null,element__$1,obb_rules.translator.coordinate.call(null,focus,coord)),obb_rules.translator.direction.call(null,focus,dir));
}
});
if(typeof obb_rules.translator.convert_action !== 'undefined'){
} else {
obb_rules.translator.convert_action = (function (){var method_table__17004__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17005__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17006__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17007__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17008__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"obb-rules.translator","convert-action"),((function (method_table__17004__auto__,prefer_table__17005__auto__,method_cache__17006__auto__,cached_hierarchy__17007__auto__,hierarchy__17008__auto__){
return (function (x){
return cljs.core.keyword.call(null,cljs.core.first.call(null,x));
});})(method_table__17004__auto__,prefer_table__17005__auto__,method_cache__17006__auto__,cached_hierarchy__17007__auto__,hierarchy__17008__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17008__auto__,method_table__17004__auto__,prefer_table__17005__auto__,method_cache__17006__auto__,cached_hierarchy__17007__auto__));
})();
}
cljs.core._add_method.call(null,obb_rules.translator.convert_action,new cljs.core.Keyword(null,"rotate","rotate",152705015),(function (action){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),obb_rules.translator.coordinate.call(null,new cljs.core.Keyword(null,"p2","p2",905500641),cljs.core.get.call(null,action,(1))),obb_rules.translator.direction.call(null,new cljs.core.Keyword(null,"p2","p2",905500641),cljs.core.get.call(null,action,(2)))], null);
}));
cljs.core._add_method.call(null,obb_rules.translator.convert_action,new cljs.core.Keyword(null,"move","move",-2110884309),(function (action){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move","move",-2110884309),obb_rules.translator.coordinate.call(null,new cljs.core.Keyword(null,"p2","p2",905500641),cljs.core.get.call(null,action,(1))),obb_rules.translator.coordinate.call(null,new cljs.core.Keyword(null,"p2","p2",905500641),cljs.core.get.call(null,action,(2))),cljs.core.get.call(null,action,(3))], null);
}));
cljs.core._add_method.call(null,obb_rules.translator.convert_action,new cljs.core.Keyword(null,"goto","goto",80149757),(function (action){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"goto","goto",80149757),obb_rules.translator.coordinate.call(null,new cljs.core.Keyword(null,"p2","p2",905500641),cljs.core.get.call(null,action,(1))),obb_rules.translator.coordinate.call(null,new cljs.core.Keyword(null,"p2","p2",905500641),cljs.core.get.call(null,action,(2)))], null);
}));
cljs.core._add_method.call(null,obb_rules.translator.convert_action,new cljs.core.Keyword(null,"attack","attack",1957061788),(function (action){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attack","attack",1957061788),obb_rules.translator.coordinate.call(null,new cljs.core.Keyword(null,"p2","p2",905500641),cljs.core.get.call(null,action,(1))),obb_rules.translator.coordinate.call(null,new cljs.core.Keyword(null,"p2","p2",905500641),cljs.core.get.call(null,action,(2)))], null);
}));
cljs.core._add_method.call(null,obb_rules.translator.convert_action,new cljs.core.Keyword(null,"deploy","deploy",-2006774212),(function (action){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deploy","deploy",-2006774212),cljs.core.get.call(null,action,(1)),cljs.core.get.call(null,action,(2)),obb_rules.translator.coordinate.call(null,new cljs.core.Keyword(null,"p2","p2",905500641),cljs.core.get.call(null,action,(3)))], null);
}));
/**
 * Translates an action for a given player focus
 */
obb_rules.translator.action = (function obb_rules$translator$action(focus,action__$1){
if(cljs.core.truth_(obb_rules.translator.default_focus_QMARK_.call(null,focus))){
return action__$1;
} else {
return obb_rules.translator.convert_action.call(null,action__$1);
}
});
/**
 * Translates all actions for a given player focus
 */
obb_rules.translator.actions = (function obb_rules$translator$actions(focus,actions__$1){
return cljs.core.map.call(null,cljs.core.partial.call(null,obb_rules.translator.action,focus),actions__$1);
});
/**
 * Converts a board to :p2 focus
 */
obb_rules.translator.convert_board = (function obb_rules$translator$convert_board(board){
var elements = obb_rules.board.elements.call(null,board);
var translated = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__16863__auto__ = ((function (elements){
return (function obb_rules$translator$convert_board_$_iter__23265(s__23266){
return (new cljs.core.LazySeq(null,((function (elements){
return (function (){
var s__23266__$1 = s__23266;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23266__$1);
if(temp__4425__auto__){
var s__23266__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23266__$2)){
var c__16861__auto__ = cljs.core.chunk_first.call(null,s__23266__$2);
var size__16862__auto__ = cljs.core.count.call(null,c__16861__auto__);
var b__23268 = cljs.core.chunk_buffer.call(null,size__16862__auto__);
if((function (){var i__23267 = (0);
while(true){
if((i__23267 < size__16862__auto__)){
var vec__23271 = cljs.core._nth.call(null,c__16861__auto__,i__23267);
var k = cljs.core.nth.call(null,vec__23271,(0),null);
var v = cljs.core.nth.call(null,vec__23271,(1),null);
cljs.core.chunk_append.call(null,b__23268,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.translator.coordinate.call(null,new cljs.core.Keyword(null,"p2","p2",905500641),k),obb_rules.translator.element.call(null,new cljs.core.Keyword(null,"p2","p2",905500641),v)], null));

var G__23273 = (i__23267 + (1));
i__23267 = G__23273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23268),obb_rules$translator$convert_board_$_iter__23265.call(null,cljs.core.chunk_rest.call(null,s__23266__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23268),null);
}
} else {
var vec__23272 = cljs.core.first.call(null,s__23266__$2);
var k = cljs.core.nth.call(null,vec__23272,(0),null);
var v = cljs.core.nth.call(null,vec__23272,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.translator.coordinate.call(null,new cljs.core.Keyword(null,"p2","p2",905500641),k),obb_rules.translator.element.call(null,new cljs.core.Keyword(null,"p2","p2",905500641),v)], null),obb_rules$translator$convert_board_$_iter__23265.call(null,cljs.core.rest.call(null,s__23266__$2)));
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
return iter__16863__auto__.call(null,elements);
})());
return obb_rules.board.elements.call(null,board,translated);
});
/**
 * Translates a full board to a given player focus
 */
obb_rules.translator.board = (function obb_rules$translator$board(focus,board__$1){
if(cljs.core.truth_(obb_rules.translator.default_focus_QMARK_.call(null,focus))){
return board__$1;
} else {
return obb_rules.translator.convert_board.call(null,board__$1);
}
});

//# sourceMappingURL=translator.js.map?rel=1436104824694