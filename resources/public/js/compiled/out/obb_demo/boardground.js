// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_demo.boardground');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.element');
goog.require('obb_rules.unit');
goog.require('obb_rules.actions.move');
goog.require('obb_rules.game');
goog.require('obb_rules.ai.common');
/**
 * Verifies and marks as selected an element on the given coordinate
 */
obb_demo.boardground.with_selected_element = (function obb_demo$boardground$with_selected_element(game_data,coord){
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(game_data);
var element = obb_rules.board.get_element.call(null,game,coord);
if(cljs.core.truth_(element)){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,game_data,new cljs.core.Keyword(null,"possible-destinations","possible-destinations",329147117),obb_rules.actions.move.find_all_possible_destinations_with_cost.call(null,game,element)),new cljs.core.Keyword(null,"possible-attacks","possible-attacks",1363937898),obb_rules.ai.common.find_possible_attacks.call(null,game,element)),new cljs.core.Keyword(null,"selected-coord","selected-coord",-543869297),coord),new cljs.core.Keyword(null,"selected-element","selected-element",1424596130),element);
} else {
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,game_data,new cljs.core.Keyword(null,"possible-destinations","possible-destinations",329147117)),new cljs.core.Keyword(null,"attack-options","attack-options",1013903302)),new cljs.core.Keyword(null,"selected-coord","selected-coord",-543869297)),new cljs.core.Keyword(null,"selected-element","selected-element",1424596130));
}
});
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
 * Checks if the given element is selected
 */
obb_demo.boardground.selected_QMARK_ = (function obb_demo$boardground$selected_QMARK_(game_data,element){
var and__16097__auto__ = element;
if(cljs.core.truth_(and__16097__auto__)){
return cljs.core._EQ_.call(null,element,new cljs.core.Keyword(null,"selected-element","selected-element",1424596130).cljs$core$IFn$_invoke$arity$1(game_data));
} else {
return and__16097__auto__;
}
});
/**
 * Square addon when given element is selected
 */
obb_demo.boardground.selected_display = (function obb_demo$boardground$selected_display(game_data,element){
if(cljs.core.truth_(obb_demo.boardground.selected_QMARK_.call(null,game_data,element))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str("div.selected-"),cljs.core.str(cljs.core.name.call(null,obb_rules.element.element_player.call(null,element)))].join(''))], null);
} else {
return null;
}
});
/**
 * Display when given coord is a possible movement destination
 */
obb_demo.boardground.possible_destination = (function obb_demo$boardground$possible_destination(game_data,coord){
var temp__4423__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"possible-destinations","possible-destinations",329147117).cljs$core$IFn$_invoke$arity$1(game_data),coord);
if(cljs.core.truth_(temp__4423__auto__)){
var cost = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.possible-destination","div.possible-destination",1785305478)], null);
} else {
return null;
}
});
/**
 * Display when given coord is a possible target for an attack
 */
obb_demo.boardground.possible_target = (function obb_demo$boardground$possible_target(game_data,coord){
var temp__4423__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"possible-attacks","possible-attacks",1363937898).cljs$core$IFn$_invoke$arity$1(game_data),coord);
if(cljs.core.truth_(temp__4423__auto__)){
var cost = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.possible-target","div.possible-target",-352952589)], null);
} else {
return null;
}
});
/**
 * Shows element quantity
 */
obb_demo.boardground.element_quantity = (function obb_demo$boardground$element_quantity(game_data,element){
if(cljs.core.truth_(obb_demo.boardground.selected_QMARK_.call(null,game_data,element))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.element-quantity","div.element-quantity",1861752223),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label.label-default","span.label.label-default",-277664003),obb_rules.element.element_quantity.call(null,element)], null)], null);
} else {
return null;
}
});
/**
 * Renders a board square
 */
obb_demo.boardground.square = (function obb_demo$boardground$square(game_data,x,y){
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(game_data);
var coord = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
var element = obb_rules.board.get_element.call(null,game,coord);
var square_style = obb_demo.boardground.square_position.call(null,x,y);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.obb-square","div.obb-square",-422683647),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(x),cljs.core.str(y)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),square_style], null),obb_demo.boardground.unit_image.call(null,game,element),obb_demo.boardground.selected_display.call(null,game_data,element),obb_demo.boardground.possible_destination.call(null,game_data,coord),obb_demo.boardground.possible_target.call(null,game_data,coord),obb_demo.boardground.element_quantity.call(null,game_data,element),obb_demo.boardground.enemy_display.call(null,game,element)], null);
});
/**
 * Gets the panel size stype
 */
obb_demo.boardground.boardground_size = (function obb_demo$boardground$boardground_size(options){
return new cljs.core.Keyword(null,"boardground-style","boardground-style",491580564).cljs$core$IFn$_invoke$arity$1(options);
});
/**
 * Specific preparations
 */
obb_demo.boardground.prepare_game_data = (function obb_demo$boardground$prepare_game_data(game_data){
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(game_data);
var state = obb_rules.game.state.call(null,game);
return obb_demo.boardground.with_selected_element.call(null,game_data,((cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"p1","p1",-936759954)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(7)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(2)], null)));
});
/**
 * Renders the full game's board
 */
obb_demo.boardground.render = (function obb_demo$boardground$render(options,game_data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.obb-board-panel","div.obb-board-panel",-2108101234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),obb_demo.boardground.boardground_size.call(null,options)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.obb-ice","img.obb-ice",-2106967169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/ice.jpg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.obb-board","div.obb-board",764065712),(function (){var iter__16863__auto__ = (function obb_demo$boardground$render_$_iter__35528(s__35529){
return (new cljs.core.LazySeq(null,(function (){
var s__35529__$1 = s__35529;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__35529__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var y = cljs.core.first.call(null,xs__4977__auto__);
var iterys__16859__auto__ = ((function (s__35529__$1,y,xs__4977__auto__,temp__4425__auto__){
return (function obb_demo$boardground$render_$_iter__35528_$_iter__35530(s__35531){
return (new cljs.core.LazySeq(null,((function (s__35529__$1,y,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__35531__$1 = s__35531;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__35531__$1);
if(temp__4425__auto____$1){
var s__35531__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35531__$2)){
var c__16861__auto__ = cljs.core.chunk_first.call(null,s__35531__$2);
var size__16862__auto__ = cljs.core.count.call(null,c__16861__auto__);
var b__35533 = cljs.core.chunk_buffer.call(null,size__16862__auto__);
if((function (){var i__35532 = (0);
while(true){
if((i__35532 < size__16862__auto__)){
var x = cljs.core._nth.call(null,c__16861__auto__,i__35532);
cljs.core.chunk_append.call(null,b__35533,obb_demo.boardground.square.call(null,obb_demo.boardground.prepare_game_data.call(null,game_data),x,y));

var G__35534 = (i__35532 + (1));
i__35532 = G__35534;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35533),obb_demo$boardground$render_$_iter__35528_$_iter__35530.call(null,cljs.core.chunk_rest.call(null,s__35531__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35533),null);
}
} else {
var x = cljs.core.first.call(null,s__35531__$2);
return cljs.core.cons.call(null,obb_demo.boardground.square.call(null,obb_demo.boardground.prepare_game_data.call(null,game_data),x,y),obb_demo$boardground$render_$_iter__35528_$_iter__35530.call(null,cljs.core.rest.call(null,s__35531__$2)));
}
} else {
return null;
}
break;
}
});})(s__35529__$1,y,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__35529__$1,y,xs__4977__auto__,temp__4425__auto__))
;
var fs__16860__auto__ = cljs.core.seq.call(null,iterys__16859__auto__.call(null,cljs.core.range.call(null,(1),(9))));
if(fs__16860__auto__){
return cljs.core.concat.call(null,fs__16860__auto__,obb_demo$boardground$render_$_iter__35528.call(null,cljs.core.rest.call(null,s__35529__$1)));
} else {
var G__35535 = cljs.core.rest.call(null,s__35529__$1);
s__35529__$1 = G__35535;
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

//# sourceMappingURL=boardground.js.map?rel=1436720934989