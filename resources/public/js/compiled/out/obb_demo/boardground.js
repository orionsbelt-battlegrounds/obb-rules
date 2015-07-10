// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_demo.boardground');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.element');
goog.require('obb_rules.unit');
/**
 * Calculates the position via left and bottom percentages
 */
obb_demo.boardground.square_position = (function obb_demo$boardground$square_position(x,y){
var x__$1 = (x - (1));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str((x__$1 * 12.5)),cljs.core.str("%")].join(''),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),[cljs.core.str((((8) - y) * 12.5)),cljs.core.str("%")].join('')], null);
});
/**
 * Gets a char code that represents the element's direction
 */
obb_demo.boardground.direction = (function obb_demo$boardground$direction(element){
var dir = obb_rules.element.element_direction.call(null,element);
return cljs.core.first.call(null,cljs.core.name.call(null,dir));
});
/**
 * Renders an html element that displays a board element's unit, if present
 * at the given coordinates
 */
obb_demo.boardground.unit_image = (function obb_demo$boardground$unit_image(game,element){
if(cljs.core.truth_(element)){
var unit = obb_rules.element.element_unit.call(null,element);
var unit_name = obb_rules.unit.unit_name.call(null,unit);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.unit","img.unit",-1040155274),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str("http://orionsbelt.eu/public/units/"),cljs.core.str(unit_name),cljs.core.str("_"),cljs.core.str(obb_demo.boardground.direction.call(null,element)),cljs.core.str(".png")].join('')], null)], null);
} else {
return null;
}
});
/**
 * Returns an enemy indication if the given element is an enemy
 */
obb_demo.boardground.enemy_display = (function obb_demo$boardground$enemy_display(game,element){
if(cljs.core.truth_(element)){
var player = obb_rules.element.element_player.call(null,element);
if(cljs.core._EQ_.call(null,player,new cljs.core.Keyword(null,"p2","p2",905500641))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.enemy","div.enemy",-1561343804)], null);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Renders a board square
 */
obb_demo.boardground.square = (function obb_demo$boardground$square(game,x,y){
var element = obb_rules.board.get_element.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.obb-square","div.obb-square",-422683647),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(x),cljs.core.str(y)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),obb_demo.boardground.square_position.call(null,x,y)], null),obb_demo.boardground.unit_image.call(null,game,element),obb_demo.boardground.enemy_display.call(null,game,element)], null);
});
/**
 * Gets the panel size stype
 */
obb_demo.boardground.boardground_size = (function obb_demo$boardground$boardground_size(options){
return new cljs.core.Keyword(null,"boardground-style","boardground-style",491580564).cljs$core$IFn$_invoke$arity$1(options);
});
/**
 * Renders the full game's board
 */
obb_demo.boardground.render = (function obb_demo$boardground$render(options,game){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.obb-board-panel","div.obb-board-panel",-2108101234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),obb_demo.boardground.boardground_size.call(null,options)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.obb-ice","img.obb-ice",-2106967169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/ice.jpg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.obb-board","div.obb-board",764065712),(function (){var iter__16863__auto__ = (function obb_demo$boardground$render_$_iter__47910(s__47911){
return (new cljs.core.LazySeq(null,(function (){
var s__47911__$1 = s__47911;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__47911__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var y = cljs.core.first.call(null,xs__4977__auto__);
var iterys__16859__auto__ = ((function (s__47911__$1,y,xs__4977__auto__,temp__4425__auto__){
return (function obb_demo$boardground$render_$_iter__47910_$_iter__47912(s__47913){
return (new cljs.core.LazySeq(null,((function (s__47911__$1,y,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__47913__$1 = s__47913;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__47913__$1);
if(temp__4425__auto____$1){
var s__47913__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47913__$2)){
var c__16861__auto__ = cljs.core.chunk_first.call(null,s__47913__$2);
var size__16862__auto__ = cljs.core.count.call(null,c__16861__auto__);
var b__47915 = cljs.core.chunk_buffer.call(null,size__16862__auto__);
if((function (){var i__47914 = (0);
while(true){
if((i__47914 < size__16862__auto__)){
var x = cljs.core._nth.call(null,c__16861__auto__,i__47914);
cljs.core.chunk_append.call(null,b__47915,obb_demo.boardground.square.call(null,game,x,y));

var G__47916 = (i__47914 + (1));
i__47914 = G__47916;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47915),obb_demo$boardground$render_$_iter__47910_$_iter__47912.call(null,cljs.core.chunk_rest.call(null,s__47913__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47915),null);
}
} else {
var x = cljs.core.first.call(null,s__47913__$2);
return cljs.core.cons.call(null,obb_demo.boardground.square.call(null,game,x,y),obb_demo$boardground$render_$_iter__47910_$_iter__47912.call(null,cljs.core.rest.call(null,s__47913__$2)));
}
} else {
return null;
}
break;
}
});})(s__47911__$1,y,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__47911__$1,y,xs__4977__auto__,temp__4425__auto__))
;
var fs__16860__auto__ = cljs.core.seq.call(null,iterys__16859__auto__.call(null,cljs.core.range.call(null,(1),(9))));
if(fs__16860__auto__){
return cljs.core.concat.call(null,fs__16860__auto__,obb_demo$boardground$render_$_iter__47910.call(null,cljs.core.rest.call(null,s__47911__$1)));
} else {
var G__47917 = cljs.core.rest.call(null,s__47911__$1);
s__47911__$1 = G__47917;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16863__auto__.call(null,cljs.core.range.call(null,(1),(9)));
})()], null)], null);
});

//# sourceMappingURL=boardground.js.map?rel=1436542485064