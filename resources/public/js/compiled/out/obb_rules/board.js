// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.board');
goog.require('cljs.core');
goog.require('obb_rules.math');
goog.require('obb_rules.laws');
goog.require('obb_rules.element');
goog.require('obb_rules.simplifier');
/**
 * Provides a random terrain
 */
obb_rules.board.random_terrain = (function obb_rules$board$random_terrain(){
return cljs.core.rand_nth(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$water,cljs.core.constant$keyword$ice,cljs.core.constant$keyword$terrest,cljs.core.constant$keyword$desert,cljs.core.constant$keyword$rock,cljs.core.constant$keyword$forest], null));
});
/**
 * Creates an empty board
 */
obb_rules.board.create_board = (function obb_rules$board$create_board(){
var args10113 = [];
var len__8238__auto___10116 = arguments.length;
var i__8239__auto___10117 = (0);
while(true){
if((i__8239__auto___10117 < len__8238__auto___10116)){
args10113.push((arguments[i__8239__auto___10117]));

var G__10118 = (i__8239__auto___10117 + (1));
i__8239__auto___10117 = G__10118;
continue;
} else {
}
break;
}

var G__10115 = args10113.length;
switch (G__10115) {
case 0:
return obb_rules.board.create_board.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return obb_rules.board.create_board.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10113.length)].join('')));

}
});

obb_rules.board.create_board.cljs$core$IFn$_invoke$arity$0 = (function (){
return obb_rules.board.create_board.cljs$core$IFn$_invoke$arity$2(obb_rules.laws.default_board_w,obb_rules.laws.default_board_h);
});

obb_rules.board.create_board.cljs$core$IFn$_invoke$arity$2 = (function (w,h){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$width,w,cljs.core.constant$keyword$height,h,cljs.core.constant$keyword$terrain,obb_rules.board.random_terrain(),cljs.core.constant$keyword$elements,cljs.core.PersistentArrayMap.EMPTY], null);
});

obb_rules.board.create_board.cljs$lang$maxFixedArity = 2;
/**
 * True if the given element is from the given player
 */
obb_rules.board.player_element_QMARK_ = (function obb_rules$board$player_element_QMARK_(player,p__10120){
var vec__10122 = p__10120;
var coordinate = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10122,(0),null);
var element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10122,(1),null);
return obb_rules.simplifier.name_EQ_(player,obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(element));
});
/**
 * Gets the elements of a given player
 */
obb_rules.board.board_elements = (function obb_rules$board$board_elements(board,player){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10123_SHARP_){
return cljs.core.last(p1__10123_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_rules.board.player_element_QMARK_,player),(board.cljs$core$IFn$_invoke$arity$1 ? board.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$elements) : board.call(null,cljs.core.constant$keyword$elements))));
});
/**
 * Gets the number of board elements
 */
obb_rules.board.board_elements_count = (function obb_rules$board$board_elements_count(){
var args10124 = [];
var len__8238__auto___10127 = arguments.length;
var i__8239__auto___10128 = (0);
while(true){
if((i__8239__auto___10128 < len__8238__auto___10127)){
args10124.push((arguments[i__8239__auto___10128]));

var G__10129 = (i__8239__auto___10128 + (1));
i__8239__auto___10128 = G__10129;
continue;
} else {
}
break;
}

var G__10126 = args10124.length;
switch (G__10126) {
case 1:
return obb_rules.board.board_elements_count.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.board.board_elements_count.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10124.length)].join('')));

}
});

obb_rules.board.board_elements_count.cljs$core$IFn$_invoke$arity$1 = (function (board){
return cljs.core.count((board.cljs$core$IFn$_invoke$arity$1 ? board.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$elements) : board.call(null,cljs.core.constant$keyword$elements)));
});

obb_rules.board.board_elements_count.cljs$core$IFn$_invoke$arity$2 = (function (board,player){
return cljs.core.count(obb_rules.board.board_elements(board,player));
});

obb_rules.board.board_elements_count.cljs$lang$maxFixedArity = 2;
/**
 * Checks if a board is empty
 */
obb_rules.board.empty_board_QMARK_ = (function obb_rules$board$empty_board_QMARK_(){
var args10131 = [];
var len__8238__auto___10134 = arguments.length;
var i__8239__auto___10135 = (0);
while(true){
if((i__8239__auto___10135 < len__8238__auto___10134)){
args10131.push((arguments[i__8239__auto___10135]));

var G__10136 = (i__8239__auto___10135 + (1));
i__8239__auto___10135 = G__10136;
continue;
} else {
}
break;
}

var G__10133 = args10131.length;
switch (G__10133) {
case 1:
return obb_rules.board.empty_board_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.board.empty_board_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10131.length)].join('')));

}
});

obb_rules.board.empty_board_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (board){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),obb_rules.board.board_elements_count.cljs$core$IFn$_invoke$arity$1(board));
});

obb_rules.board.empty_board_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (board,player){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),obb_rules.board.board_elements_count.cljs$core$IFn$_invoke$arity$2(board,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(player)));
});

obb_rules.board.empty_board_QMARK_.cljs$lang$maxFixedArity = 2;
/**
 * Gets a board's witdh
 */
obb_rules.board.board_width = (function obb_rules$board$board_width(board){
var or__7199__auto__ = (board.cljs$core$IFn$_invoke$arity$1 ? board.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$width) : board.call(null,cljs.core.constant$keyword$width));
if(cljs.core.truth_(or__7199__auto__)){
return or__7199__auto__;
} else {
return obb_rules.laws.default_board_w;
}
});
/**
 * Gets a board's height
 */
obb_rules.board.board_height = (function obb_rules$board$board_height(board){
var or__7199__auto__ = (board.cljs$core$IFn$_invoke$arity$1 ? board.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$height) : board.call(null,cljs.core.constant$keyword$height));
if(cljs.core.truth_(or__7199__auto__)){
return or__7199__auto__;
} else {
return obb_rules.laws.default_board_h;
}
});
/**
 * Gets the board's terrain
 */
obb_rules.board.board_terrain = (function obb_rules$board$board_terrain(board){
return (board.cljs$core$IFn$_invoke$arity$1 ? board.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$terrain) : board.call(null,cljs.core.constant$keyword$terrain));
});
/**
 * Gets/sets all the elements
 */
obb_rules.board.elements = (function obb_rules$board$elements(){
var args10138 = [];
var len__8238__auto___10141 = arguments.length;
var i__8239__auto___10142 = (0);
while(true){
if((i__8239__auto___10142 < len__8238__auto___10141)){
args10138.push((arguments[i__8239__auto___10142]));

var G__10143 = (i__8239__auto___10142 + (1));
i__8239__auto___10142 = G__10143;
continue;
} else {
}
break;
}

var G__10140 = args10138.length;
switch (G__10140) {
case 1:
return obb_rules.board.elements.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.board.elements.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10138.length)].join('')));

}
});

obb_rules.board.elements.cljs$core$IFn$_invoke$arity$1 = (function (board){
return (board.cljs$core$IFn$_invoke$arity$1 ? board.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$elements) : board.call(null,cljs.core.constant$keyword$elements));
});

obb_rules.board.elements.cljs$core$IFn$_invoke$arity$2 = (function (board,elements){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,cljs.core.constant$keyword$elements,elements);
});

obb_rules.board.elements.cljs$lang$maxFixedArity = 2;
/**
 * Gets an element given a coordinate
 */
obb_rules.board.get_element = (function obb_rules$board$get_element(board,coord){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$elements,coord], null));
});
/**
 * Gets an element given a coordinate
 */
obb_rules.board.get_element_consider_removed = (function obb_rules$board$get_element_consider_removed(board,coord){
var or__7199__auto__ = obb_rules.board.get_element(board,coord);
if(cljs.core.truth_(or__7199__auto__)){
return or__7199__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$removed_DASH_elements,coord], null));
}
});
/**
 * Checks if a given coord is in the board
 */
obb_rules.board.in_bounds_QMARK_ = (function obb_rules$board$in_bounds_QMARK_(board,p__10145){
var vec__10147 = p__10145;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10147,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10147,(1),null);
return ((x > (0))) && ((y > (0))) && ((x <= (8))) && ((y <= (8)));
});
/**
 * Checks if an element can be placed
 */
obb_rules.board.can_place_element_QMARK_ = (function obb_rules$board$can_place_element_QMARK_(board,coord,elem){
var and__7187__auto__ = obb_rules.board.in_bounds_QMARK_(board,coord);
if(cljs.core.truth_(and__7187__auto__)){
return (obb_rules.board.get_element(board,coord) == null);
} else {
return and__7187__auto__;
}
});
/**
 * Registers that an element was destroyed from a coordinate
 */
obb_rules.board.register_removed_element = (function obb_rules$board$register_removed_element(board,coord,element,destroyed_QMARK_){
if(cljs.core.truth_(destroyed_QMARK_)){
var all_removed = (function (){var or__7199__auto__ = (board.cljs$core$IFn$_invoke$arity$1 ? board.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$removed_DASH_elements) : board.call(null,cljs.core.constant$keyword$removed_DASH_elements));
if(cljs.core.truth_(or__7199__auto__)){
return or__7199__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,cljs.core.constant$keyword$removed_DASH_elements,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(all_removed,coord,element));
} else {
return board;
}
});
/**
 * Removes an element from the board
 */
obb_rules.board.remove_element = (function obb_rules$board$remove_element(){
var args10148 = [];
var len__8238__auto___10151 = arguments.length;
var i__8239__auto___10152 = (0);
while(true){
if((i__8239__auto___10152 < len__8238__auto___10151)){
args10148.push((arguments[i__8239__auto___10152]));

var G__10153 = (i__8239__auto___10152 + (1));
i__8239__auto___10152 = G__10153;
continue;
} else {
}
break;
}

var G__10150 = args10148.length;
switch (G__10150) {
case 2:
return obb_rules.board.remove_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return obb_rules.board.remove_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10148.length)].join('')));

}
});

obb_rules.board.remove_element.cljs$core$IFn$_invoke$arity$2 = (function (board,coord){
return obb_rules.board.remove_element.cljs$core$IFn$_invoke$arity$3(board,coord,false);
});

obb_rules.board.remove_element.cljs$core$IFn$_invoke$arity$3 = (function (board,coord,destroyed_QMARK_){
var elements = (board.cljs$core$IFn$_invoke$arity$1 ? board.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$elements) : board.call(null,cljs.core.constant$keyword$elements));
var new_elements = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(elements,coord);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(obb_rules.board.register_removed_element(board,coord,cljs.core.get.cljs$core$IFn$_invoke$arity$2(elements,coord),destroyed_QMARK_),cljs.core.constant$keyword$elements,new_elements);
});

obb_rules.board.remove_element.cljs$lang$maxFixedArity = 3;
/**
 * Swaps a given element for another
 */
obb_rules.board.swap_element = (function obb_rules$board$swap_element(board,coord,new_elem){
var elements = (board.cljs$core$IFn$_invoke$arity$1 ? board.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$elements) : board.call(null,cljs.core.constant$keyword$elements));
var element_with_coord = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$2(new_elem,coord);
var new_elements = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(elements,coord,element_with_coord);
obb_rules.element.assert_element(element_with_coord);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,cljs.core.constant$keyword$elements,new_elements);
});
/**
 * Places an element on the board
 */
obb_rules.board.place_element = (function obb_rules$board$place_element(board,coord,element){
obb_rules.element.assert_element(element);

if(cljs.core.truth_(obb_rules.board.can_place_element_QMARK_(board,coord,element))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"can-place-element?","can-place-element?",-436049716,null),new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Symbol(null,"element","element",-680416020,null))], 0)))].join('')));
}

return obb_rules.board.swap_element(board,coord,element);
});
/**
 * Returns true if the board has an element on a given coord
 */
obb_rules.board.has_element_QMARK_ = (function obb_rules$board$has_element_QMARK_(board,coord){
return !((obb_rules.board.get_element(board,coord) == null));
});
/**
 * Checks if two coordinates are adjacent
 */
obb_rules.board.adjacent_QMARK_ = (function obb_rules$board$adjacent_QMARK_(p__10155,p__10156){
var vec__10159 = p__10155;
var c1x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10159,(0),null);
var c1y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10159,(1),null);
var vec__10160 = p__10156;
var c2x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10160,(0),null);
var c2y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10160,(1),null);
var dx = (c1x - c2x);
var dy = (c1y - c2y);
return (((-2) < dx)) && (((2) > dx)) && (((-2) < dy)) && (((2) > dy));
});
/**
 * Removes a quantity from the board, marking it as move
 */
obb_rules.board.remove_from_element = (function obb_rules$board$remove_from_element(){
var args10161 = [];
var len__8238__auto___10164 = arguments.length;
var i__8239__auto___10165 = (0);
while(true){
if((i__8239__auto___10165 < len__8238__auto___10164)){
args10161.push((arguments[i__8239__auto___10165]));

var G__10166 = (i__8239__auto___10165 + (1));
i__8239__auto___10165 = G__10166;
continue;
} else {
}
break;
}

var G__10163 = args10161.length;
switch (G__10163) {
case 3:
return obb_rules.board.remove_from_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return obb_rules.board.remove_from_element.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10161.length)].join('')));

}
});

obb_rules.board.remove_from_element.cljs$core$IFn$_invoke$arity$3 = (function (board,coord,quantity){
return obb_rules.board.remove_from_element.cljs$core$IFn$_invoke$arity$4(board,coord,quantity,false);
});

obb_rules.board.remove_from_element.cljs$core$IFn$_invoke$arity$4 = (function (board,coord,quantity,destroyed_QMARK_){
var element = obb_rules.board.get_element(board,coord);
var new_element = obb_rules.element.remove_quantity(element,quantity);
var remaining_quantity = obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1(new_element);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),remaining_quantity)){
return obb_rules.board.remove_element.cljs$core$IFn$_invoke$arity$3(board,coord,destroyed_QMARK_);
} else {
return obb_rules.board.swap_element(board,coord,new_element);
}
});

obb_rules.board.remove_from_element.cljs$lang$maxFixedArity = 4;
/**
 * Removes a quantity from the board, marking it as destroyed
 */
obb_rules.board.destroy_from_element = (function obb_rules$board$destroy_from_element(board,coord,quantity){
return obb_rules.board.remove_from_element.cljs$core$IFn$_invoke$arity$4(board,coord,quantity,true);
});
/**
 * Adds a quantity to an element
 */
obb_rules.board.add_to_element = (function obb_rules$board$add_to_element(board,coord,extra_quantity,from_element){
var element = (function (){var or__7199__auto__ = obb_rules.board.get_element(board,coord);
if(cljs.core.truth_(or__7199__auto__)){
return or__7199__auto__;
} else {
return from_element;
}
})();
var quantity = (function (){var or__7199__auto__ = (0);
if(cljs.core.truth_(or__7199__auto__)){
return or__7199__auto__;
} else {
return obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1(element);
}
})();
var new_quantity = (quantity + extra_quantity);
var new_element = obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$2(element,new_quantity);
if(cljs.core.truth_(element)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("NoElement-"),cljs.core.str(coord),cljs.core.str(" - "),cljs.core.str(board)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"element","element",-680416020,null)], 0)))].join('')));
}

obb_rules.element.assert_element(new_element);

return obb_rules.board.swap_element(board,coord,new_element);
});
/**
 * Sets the stash for a given player
 */
obb_rules.board.set_stash = (function obb_rules$board$set_stash(board,player,stash){
return cljs.core.assoc_in(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$stash,player], null),stash);
});
/**
 * Gets a stash for a given player
 */
obb_rules.board.get_stash = (function obb_rules$board$get_stash(board,player){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$stash,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(player)], null));
});
/**
 * True if the given element should be present on an element-focus
 */
obb_rules.board.element_focus_match_QMARK_ = (function obb_rules$board$element_focus_match_QMARK_(player,template_element,some_element){
var template_coord = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(template_element);
var some_coord = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(some_element);
var some_player = obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(some_element);
var or__7199__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(template_coord,some_coord);
if(or__7199__auto__){
return or__7199__auto__;
} else {
var and__7187__auto__ = player;
if(cljs.core.truth_(and__7187__auto__)){
var and__7187__auto____$1 = some_player;
if(cljs.core.truth_(and__7187__auto____$1)){
return cljs.core.not(obb_rules.simplifier.name_EQ_(player,some_player));
} else {
return and__7187__auto____$1;
}
} else {
return and__7187__auto__;
}
}
});
/**
 * Returns a new board, where the player of the given element only has
 * the given element. All the opponents elements remain intact.
 */
obb_rules.board.element_focus = (function obb_rules$board$element_focus(board,element){
var player = obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(element);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$elements,cljs.core.reduce_kv(((function (player){
return (function (m,k,v){
if(cljs.core.truth_(obb_rules.board.element_focus_match_QMARK_(player,element,v))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
});})(player))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$elements.cljs$core$IFn$_invoke$arity$1(board)));
});
