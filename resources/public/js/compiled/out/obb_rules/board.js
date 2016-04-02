// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.board');
goog.require('cljs.core');
goog.require('obb_rules.math');
goog.require('obb_rules.simplifier');
goog.require('obb_rules.element');
goog.require('obb_rules.unit');
goog.require('obb_rules.laws');
/**
 * Provides a random terrain
 */
obb_rules.board.random_terrain = (function obb_rules$board$random_terrain(){
return cljs.core.rand_nth(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$water,cljs.core.cst$kw$ice,cljs.core.cst$kw$terrest,cljs.core.cst$kw$desert,cljs.core.cst$kw$rock,cljs.core.cst$kw$forest], null));
});
/**
 * Creates an empty board
 */
obb_rules.board.create_board = (function obb_rules$board$create_board(var_args){
var args15217 = [];
var len__7279__auto___15220 = arguments.length;
var i__7280__auto___15221 = (0);
while(true){
if((i__7280__auto___15221 < len__7279__auto___15220)){
args15217.push((arguments[i__7280__auto___15221]));

var G__15222 = (i__7280__auto___15221 + (1));
i__7280__auto___15221 = G__15222;
continue;
} else {
}
break;
}

var G__15219 = args15217.length;
switch (G__15219) {
case 0:
return obb_rules.board.create_board.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return obb_rules.board.create_board.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15217.length)].join('')));

}
});

obb_rules.board.create_board.cljs$core$IFn$_invoke$arity$0 = (function (){
return obb_rules.board.create_board.cljs$core$IFn$_invoke$arity$2(obb_rules.laws.default_board_w,obb_rules.laws.default_board_h);
});

obb_rules.board.create_board.cljs$core$IFn$_invoke$arity$2 = (function (w,h){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,w,cljs.core.cst$kw$height,h,cljs.core.cst$kw$terrain,obb_rules.board.random_terrain(),cljs.core.cst$kw$elements,cljs.core.PersistentArrayMap.EMPTY], null);
});

obb_rules.board.create_board.cljs$lang$maxFixedArity = 2;
/**
 * True if the given element is from the given player
 */
obb_rules.board.element_from_player_QMARK_ = (function obb_rules$board$element_from_player_QMARK_(player,p__15224){
var vec__15226 = p__15224;
var coordinate = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15226,(0),null);
var element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15226,(1),null);
return obb_rules.element.player_QMARK_(element,player);
});
/**
 * Gets the elements belonging to a given player
 */
obb_rules.board.player_elements = (function obb_rules$board$player_elements(board,player){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15227_SHARP_){
return cljs.core.last(p1__15227_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(obb_rules.board.element_from_player_QMARK_,player),(board.cljs$core$IFn$_invoke$arity$1 ? board.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$elements) : board.call(null,cljs.core.cst$kw$elements))));
});
/**
 * Checks whether the given unit is present and belongs to the given player
 */
obb_rules.board.unit_present_QMARK_ = (function obb_rules$board$unit_present_QMARK_(board,player,unit){
return cljs.core.some((function (p1__15228_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(obb_rules.unit.unit_name(obb_rules.element.element_unit(p1__15228_SHARP_)),unit);
}),obb_rules.board.player_elements(board,player));
});
/**
 * Gets the number of board elements
 */
obb_rules.board.board_elements_count = (function obb_rules$board$board_elements_count(var_args){
var args15229 = [];
var len__7279__auto___15232 = arguments.length;
var i__7280__auto___15233 = (0);
while(true){
if((i__7280__auto___15233 < len__7279__auto___15232)){
args15229.push((arguments[i__7280__auto___15233]));

var G__15234 = (i__7280__auto___15233 + (1));
i__7280__auto___15233 = G__15234;
continue;
} else {
}
break;
}

var G__15231 = args15229.length;
switch (G__15231) {
case 1:
return obb_rules.board.board_elements_count.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.board.board_elements_count.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15229.length)].join('')));

}
});

obb_rules.board.board_elements_count.cljs$core$IFn$_invoke$arity$1 = (function (board){
return cljs.core.count((board.cljs$core$IFn$_invoke$arity$1 ? board.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$elements) : board.call(null,cljs.core.cst$kw$elements)));
});

obb_rules.board.board_elements_count.cljs$core$IFn$_invoke$arity$2 = (function (board,player){
return cljs.core.count(obb_rules.board.player_elements(board,player));
});

obb_rules.board.board_elements_count.cljs$lang$maxFixedArity = 2;
/**
 * Checks if a board is empty
 */
obb_rules.board.empty_board_QMARK_ = (function obb_rules$board$empty_board_QMARK_(var_args){
var args15236 = [];
var len__7279__auto___15239 = arguments.length;
var i__7280__auto___15240 = (0);
while(true){
if((i__7280__auto___15240 < len__7279__auto___15239)){
args15236.push((arguments[i__7280__auto___15240]));

var G__15241 = (i__7280__auto___15240 + (1));
i__7280__auto___15240 = G__15241;
continue;
} else {
}
break;
}

var G__15238 = args15236.length;
switch (G__15238) {
case 1:
return obb_rules.board.empty_board_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.board.empty_board_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15236.length)].join('')));

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
var or__6210__auto__ = (board.cljs$core$IFn$_invoke$arity$1 ? board.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$width) : board.call(null,cljs.core.cst$kw$width));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return obb_rules.laws.default_board_w;
}
});
/**
 * Gets a board's height
 */
obb_rules.board.board_height = (function obb_rules$board$board_height(board){
var or__6210__auto__ = (board.cljs$core$IFn$_invoke$arity$1 ? board.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$height) : board.call(null,cljs.core.cst$kw$height));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return obb_rules.laws.default_board_h;
}
});
/**
 * Gets/sets the board's terrain
 */
obb_rules.board.board_terrain = (function obb_rules$board$board_terrain(var_args){
var args15243 = [];
var len__7279__auto___15246 = arguments.length;
var i__7280__auto___15247 = (0);
while(true){
if((i__7280__auto___15247 < len__7279__auto___15246)){
args15243.push((arguments[i__7280__auto___15247]));

var G__15248 = (i__7280__auto___15247 + (1));
i__7280__auto___15247 = G__15248;
continue;
} else {
}
break;
}

var G__15245 = args15243.length;
switch (G__15245) {
case 1:
return obb_rules.board.board_terrain.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.board.board_terrain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15243.length)].join('')));

}
});

obb_rules.board.board_terrain.cljs$core$IFn$_invoke$arity$1 = (function (board){
return (board.cljs$core$IFn$_invoke$arity$1 ? board.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$terrain) : board.call(null,cljs.core.cst$kw$terrain));
});

obb_rules.board.board_terrain.cljs$core$IFn$_invoke$arity$2 = (function (board,new_terrain){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,cljs.core.cst$kw$terrain,new_terrain);
});

obb_rules.board.board_terrain.cljs$lang$maxFixedArity = 2;
/**
 * Gets/sets all the elements
 */
obb_rules.board.elements = (function obb_rules$board$elements(var_args){
var args15250 = [];
var len__7279__auto___15253 = arguments.length;
var i__7280__auto___15254 = (0);
while(true){
if((i__7280__auto___15254 < len__7279__auto___15253)){
args15250.push((arguments[i__7280__auto___15254]));

var G__15255 = (i__7280__auto___15254 + (1));
i__7280__auto___15254 = G__15255;
continue;
} else {
}
break;
}

var G__15252 = args15250.length;
switch (G__15252) {
case 1:
return obb_rules.board.elements.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.board.elements.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15250.length)].join('')));

}
});

obb_rules.board.elements.cljs$core$IFn$_invoke$arity$1 = (function (board){
return (board.cljs$core$IFn$_invoke$arity$1 ? board.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$elements) : board.call(null,cljs.core.cst$kw$elements));
});

obb_rules.board.elements.cljs$core$IFn$_invoke$arity$2 = (function (board,elements){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,cljs.core.cst$kw$elements,elements);
});

obb_rules.board.elements.cljs$lang$maxFixedArity = 2;
/**
 * Gets an element given a coordinate
 */
obb_rules.board.get_element = (function obb_rules$board$get_element(board,coord){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elements,coord], null));
});
/**
 * Gets an element given a coordinate
 */
obb_rules.board.get_element_consider_removed = (function obb_rules$board$get_element_consider_removed(board,coord){
var or__6210__auto__ = obb_rules.board.get_element(board,coord);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$removed_DASH_elements,coord], null));
}
});
/**
 * Checks if a given coord is in the board
 */
obb_rules.board.in_bounds_QMARK_ = (function obb_rules$board$in_bounds_QMARK_(board,p__15257){
var vec__15259 = p__15257;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15259,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15259,(1),null);
return ((x > (0))) && ((y > (0))) && ((x <= (8))) && ((y <= (8)));
});
/**
 * Checks if an element can be placed
 */
obb_rules.board.can_place_element_QMARK_ = (function obb_rules$board$can_place_element_QMARK_(board,coord,elem){
var and__6198__auto__ = obb_rules.board.in_bounds_QMARK_(board,coord);
if(cljs.core.truth_(and__6198__auto__)){
return (obb_rules.board.get_element(board,coord) == null);
} else {
return and__6198__auto__;
}
});
/**
 * Registers that an element was destroyed from a coordinate
 */
obb_rules.board.register_removed_element = (function obb_rules$board$register_removed_element(board,coord,element,destroyed_QMARK_){
if(cljs.core.truth_(destroyed_QMARK_)){
var all_removed = (function (){var or__6210__auto__ = (board.cljs$core$IFn$_invoke$arity$1 ? board.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$removed_DASH_elements) : board.call(null,cljs.core.cst$kw$removed_DASH_elements));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,cljs.core.cst$kw$removed_DASH_elements,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(all_removed,coord,element));
} else {
return board;
}
});
/**
 * Removes an element from the board
 */
obb_rules.board.remove_element = (function obb_rules$board$remove_element(var_args){
var args15260 = [];
var len__7279__auto___15263 = arguments.length;
var i__7280__auto___15264 = (0);
while(true){
if((i__7280__auto___15264 < len__7279__auto___15263)){
args15260.push((arguments[i__7280__auto___15264]));

var G__15265 = (i__7280__auto___15264 + (1));
i__7280__auto___15264 = G__15265;
continue;
} else {
}
break;
}

var G__15262 = args15260.length;
switch (G__15262) {
case 2:
return obb_rules.board.remove_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return obb_rules.board.remove_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15260.length)].join('')));

}
});

obb_rules.board.remove_element.cljs$core$IFn$_invoke$arity$2 = (function (board,coord){
return obb_rules.board.remove_element.cljs$core$IFn$_invoke$arity$3(board,coord,false);
});

obb_rules.board.remove_element.cljs$core$IFn$_invoke$arity$3 = (function (board,coord,destroyed_QMARK_){
var elements = (board.cljs$core$IFn$_invoke$arity$1 ? board.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$elements) : board.call(null,cljs.core.cst$kw$elements));
var new_elements = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(elements,coord);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(obb_rules.board.register_removed_element(board,coord,cljs.core.get.cljs$core$IFn$_invoke$arity$2(elements,coord),destroyed_QMARK_),cljs.core.cst$kw$elements,new_elements);
});

obb_rules.board.remove_element.cljs$lang$maxFixedArity = 3;
/**
 * Swaps a given element for another
 */
obb_rules.board.swap_element = (function obb_rules$board$swap_element(board,coord,new_elem){
var elements = (board.cljs$core$IFn$_invoke$arity$1 ? board.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$elements) : board.call(null,cljs.core.cst$kw$elements));
var element_with_coord = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$2(new_elem,coord);
var new_elements = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(elements,coord,element_with_coord);
obb_rules.element.assert_element(element_with_coord);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,cljs.core.cst$kw$elements,new_elements);
});
/**
 * Places an element on the board
 */
obb_rules.board.place_element = (function obb_rules$board$place_element(board,coord,element){
obb_rules.element.assert_element(element);

if(cljs.core.truth_(obb_rules.board.can_place_element_QMARK_(board,coord,element))){
} else {
throw (new Error("Assert failed: (can-place-element? board coord element)"));
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
obb_rules.board.adjacent_QMARK_ = (function obb_rules$board$adjacent_QMARK_(p__15267,p__15268){
var vec__15271 = p__15267;
var c1x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15271,(0),null);
var c1y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15271,(1),null);
var vec__15272 = p__15268;
var c2x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15272,(0),null);
var c2y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15272,(1),null);
var dx = (c1x - c2x);
var dy = (c1y - c2y);
return (((-2) < dx)) && (((2) > dx)) && (((-2) < dy)) && (((2) > dy));
});
/**
 * Removes a quantity from the board, marking it as move
 */
obb_rules.board.remove_from_element = (function obb_rules$board$remove_from_element(var_args){
var args15273 = [];
var len__7279__auto___15276 = arguments.length;
var i__7280__auto___15277 = (0);
while(true){
if((i__7280__auto___15277 < len__7279__auto___15276)){
args15273.push((arguments[i__7280__auto___15277]));

var G__15278 = (i__7280__auto___15277 + (1));
i__7280__auto___15277 = G__15278;
continue;
} else {
}
break;
}

var G__15275 = args15273.length;
switch (G__15275) {
case 3:
return obb_rules.board.remove_from_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return obb_rules.board.remove_from_element.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15273.length)].join('')));

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
var element = (function (){var or__6210__auto__ = obb_rules.board.get_element(board,coord);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return from_element;
}
})();
var quantity = (function (){var or__6210__auto__ = (0);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1(element);
}
})();
var new_quantity = (quantity + extra_quantity);
var new_element = obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$2(element,new_quantity);
if(cljs.core.truth_(element)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("NoElement-"),cljs.core.str(coord),cljs.core.str(" - "),cljs.core.str(board)].join('')),cljs.core.str("\n"),cljs.core.str("element")].join('')));
}

obb_rules.element.assert_element(new_element);

return obb_rules.board.swap_element(board,coord,new_element);
});
/**
 * Sets the stash for a given player
 */
obb_rules.board.set_stash = (function obb_rules$board$set_stash(board,player,stash){
return cljs.core.assoc_in(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stash,player], null),stash);
});
/**
 * Gets a stash for a given player
 */
obb_rules.board.get_stash = (function obb_rules$board$get_stash(board,player){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stash,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(player)], null));
});
/**
 * True if the given element should be present on an element-focus
 */
obb_rules.board.element_focus_match_QMARK_ = (function obb_rules$board$element_focus_match_QMARK_(player,template_element,some_element){
var template_coord = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(template_element);
var some_coord = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(some_element);
var some_player = obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(some_element);
var or__6210__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(template_coord,some_coord);
if(or__6210__auto__){
return or__6210__auto__;
} else {
var and__6198__auto__ = player;
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = some_player;
if(cljs.core.truth_(and__6198__auto____$1)){
return cljs.core.not(obb_rules.simplifier.name_EQ_(player,some_player));
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
}
});
/**
 * Returns a new board, where the player of the given element only has
 *   the given element. All the opponents elements remain intact.
 */
obb_rules.board.element_focus = (function obb_rules$board$element_focus(board,element){
var player = obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(element);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$elements,cljs.core.reduce_kv(((function (player){
return (function (m,k,v){
if(cljs.core.truth_(obb_rules.board.element_focus_match_QMARK_(player,element,v))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
});})(player))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$elements.cljs$core$IFn$_invoke$arity$1(board)));
});
