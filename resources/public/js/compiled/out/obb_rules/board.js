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
var args10038 = [];
var len__8163__auto___10041 = arguments.length;
var i__8164__auto___10042 = (0);
while(true){
if((i__8164__auto___10042 < len__8163__auto___10041)){
args10038.push((arguments[i__8164__auto___10042]));

var G__10043 = (i__8164__auto___10042 + (1));
i__8164__auto___10042 = G__10043;
continue;
} else {
}
break;
}

var G__10040 = args10038.length;
switch (G__10040) {
case 0:
return obb_rules.board.create_board.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return obb_rules.board.create_board.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10038.length)].join('')));

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
obb_rules.board.player_element_QMARK_ = (function obb_rules$board$player_element_QMARK_(player,p__10045){
var vec__10047 = p__10045;
var coordinate = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10047,(0),null);
var element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10047,(1),null);
return obb_rules.simplifier.name_EQ_(player,obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(element));
});
/**
 * Gets the elements of a given player
 */
obb_rules.board.board_elements = (function obb_rules$board$board_elements(board,player){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10048_SHARP_){
return cljs.core.last(p1__10048_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_rules.board.player_element_QMARK_,player),(board.cljs$core$IFn$_invoke$arity$1 ? board.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$elements) : board.call(null,cljs.core.constant$keyword$elements))));
});
/**
 * Gets the number of board elements
 */
obb_rules.board.board_elements_count = (function obb_rules$board$board_elements_count(){
var args10049 = [];
var len__8163__auto___10052 = arguments.length;
var i__8164__auto___10053 = (0);
while(true){
if((i__8164__auto___10053 < len__8163__auto___10052)){
args10049.push((arguments[i__8164__auto___10053]));

var G__10054 = (i__8164__auto___10053 + (1));
i__8164__auto___10053 = G__10054;
continue;
} else {
}
break;
}

var G__10051 = args10049.length;
switch (G__10051) {
case 1:
return obb_rules.board.board_elements_count.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.board.board_elements_count.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10049.length)].join('')));

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
var args10056 = [];
var len__8163__auto___10059 = arguments.length;
var i__8164__auto___10060 = (0);
while(true){
if((i__8164__auto___10060 < len__8163__auto___10059)){
args10056.push((arguments[i__8164__auto___10060]));

var G__10061 = (i__8164__auto___10060 + (1));
i__8164__auto___10060 = G__10061;
continue;
} else {
}
break;
}

var G__10058 = args10056.length;
switch (G__10058) {
case 1:
return obb_rules.board.empty_board_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.board.empty_board_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10056.length)].join('')));

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
var or__7124__auto__ = (board.cljs$core$IFn$_invoke$arity$1 ? board.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$width) : board.call(null,cljs.core.constant$keyword$width));
if(cljs.core.truth_(or__7124__auto__)){
return or__7124__auto__;
} else {
return obb_rules.laws.default_board_w;
}
});
/**
 * Gets a board's height
 */
obb_rules.board.board_height = (function obb_rules$board$board_height(board){
var or__7124__auto__ = (board.cljs$core$IFn$_invoke$arity$1 ? board.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$height) : board.call(null,cljs.core.constant$keyword$height));
if(cljs.core.truth_(or__7124__auto__)){
return or__7124__auto__;
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
var args10063 = [];
var len__8163__auto___10066 = arguments.length;
var i__8164__auto___10067 = (0);
while(true){
if((i__8164__auto___10067 < len__8163__auto___10066)){
args10063.push((arguments[i__8164__auto___10067]));

var G__10068 = (i__8164__auto___10067 + (1));
i__8164__auto___10067 = G__10068;
continue;
} else {
}
break;
}

var G__10065 = args10063.length;
switch (G__10065) {
case 1:
return obb_rules.board.elements.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.board.elements.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10063.length)].join('')));

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
var or__7124__auto__ = obb_rules.board.get_element(board,coord);
if(cljs.core.truth_(or__7124__auto__)){
return or__7124__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$removed_DASH_elements,coord], null));
}
});
/**
 * Checks if a given coord is in the board
 */
obb_rules.board.in_bounds_QMARK_ = (function obb_rules$board$in_bounds_QMARK_(board,p__10070){
var vec__10072 = p__10070;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10072,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10072,(1),null);
return ((x > (0))) && ((y > (0))) && ((x <= (8))) && ((y <= (8)));
});
/**
 * Checks if an element can be placed
 */
obb_rules.board.can_place_element_QMARK_ = (function obb_rules$board$can_place_element_QMARK_(board,coord,elem){
var and__7112__auto__ = obb_rules.board.in_bounds_QMARK_(board,coord);
if(cljs.core.truth_(and__7112__auto__)){
return (obb_rules.board.get_element(board,coord) == null);
} else {
return and__7112__auto__;
}
});
/**
 * Registers that an element was destroyed from a coordinate
 */
obb_rules.board.register_removed_element = (function obb_rules$board$register_removed_element(board,coord,element,destroyed_QMARK_){
if(cljs.core.truth_(destroyed_QMARK_)){
var all_removed = (function (){var or__7124__auto__ = (board.cljs$core$IFn$_invoke$arity$1 ? board.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$removed_DASH_elements) : board.call(null,cljs.core.constant$keyword$removed_DASH_elements));
if(cljs.core.truth_(or__7124__auto__)){
return or__7124__auto__;
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
var args10073 = [];
var len__8163__auto___10076 = arguments.length;
var i__8164__auto___10077 = (0);
while(true){
if((i__8164__auto___10077 < len__8163__auto___10076)){
args10073.push((arguments[i__8164__auto___10077]));

var G__10078 = (i__8164__auto___10077 + (1));
i__8164__auto___10077 = G__10078;
continue;
} else {
}
break;
}

var G__10075 = args10073.length;
switch (G__10075) {
case 2:
return obb_rules.board.remove_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return obb_rules.board.remove_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10073.length)].join('')));

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
obb_rules.board.adjacent_QMARK_ = (function obb_rules$board$adjacent_QMARK_(p__10080,p__10081){
var vec__10084 = p__10080;
var c1x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10084,(0),null);
var c1y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10084,(1),null);
var vec__10085 = p__10081;
var c2x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10085,(0),null);
var c2y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10085,(1),null);
var dx = (c1x - c2x);
var dy = (c1y - c2y);
return (((-2) < dx)) && (((2) > dx)) && (((-2) < dy)) && (((2) > dy));
});
/**
 * Removes a quantity from the board, marking it as move
 */
obb_rules.board.remove_from_element = (function obb_rules$board$remove_from_element(){
var args10086 = [];
var len__8163__auto___10089 = arguments.length;
var i__8164__auto___10090 = (0);
while(true){
if((i__8164__auto___10090 < len__8163__auto___10089)){
args10086.push((arguments[i__8164__auto___10090]));

var G__10091 = (i__8164__auto___10090 + (1));
i__8164__auto___10090 = G__10091;
continue;
} else {
}
break;
}

var G__10088 = args10086.length;
switch (G__10088) {
case 3:
return obb_rules.board.remove_from_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return obb_rules.board.remove_from_element.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10086.length)].join('')));

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
var element = (function (){var or__7124__auto__ = obb_rules.board.get_element(board,coord);
if(cljs.core.truth_(or__7124__auto__)){
return or__7124__auto__;
} else {
return from_element;
}
})();
var quantity = (function (){var or__7124__auto__ = (0);
if(cljs.core.truth_(or__7124__auto__)){
return or__7124__auto__;
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
