// Compiled by ClojureScript 0.0-3308 {}
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
return cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"ice","ice",-415533543),new cljs.core.Keyword(null,"terrest","terrest",1919162097),new cljs.core.Keyword(null,"desert","desert",-559764082),new cljs.core.Keyword(null,"rock","rock",946709275),new cljs.core.Keyword(null,"forest","forest",278860306)], null));
});
/**
 * Creates an empty board
 */
obb_rules.board.create_board = (function obb_rules$board$create_board(){
var G__23046 = arguments.length;
switch (G__23046) {
case 0:
return obb_rules.board.create_board.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return obb_rules.board.create_board.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

obb_rules.board.create_board.cljs$core$IFn$_invoke$arity$0 = (function (){
return obb_rules.board.create_board.call(null,obb_rules.laws.default_board_w,obb_rules.laws.default_board_h);
});

obb_rules.board.create_board.cljs$core$IFn$_invoke$arity$2 = (function (w,h){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"terrain","terrain",704966005),obb_rules.board.random_terrain.call(null),new cljs.core.Keyword(null,"elements","elements",657646735),cljs.core.PersistentArrayMap.EMPTY], null);
});

obb_rules.board.create_board.cljs$lang$maxFixedArity = 2;
/**
 * True if the given element is from the given player
 */
obb_rules.board.player_element_QMARK_ = (function obb_rules$board$player_element_QMARK_(player,p__23048){
var vec__23050 = p__23048;
var coordinate = cljs.core.nth.call(null,vec__23050,(0),null);
var element = cljs.core.nth.call(null,vec__23050,(1),null);
return obb_rules.simplifier.name_EQ_.call(null,player,obb_rules.element.element_player.call(null,element));
});
/**
 * Gets the elements of a given player
 */
obb_rules.board.board_elements = (function obb_rules$board$board_elements(board,player){
return cljs.core.map.call(null,(function (p1__23051_SHARP_){
return cljs.core.last.call(null,p1__23051_SHARP_);
}),cljs.core.filter.call(null,cljs.core.partial.call(null,obb_rules.board.player_element_QMARK_,player),board.call(null,new cljs.core.Keyword(null,"elements","elements",657646735))));
});
/**
 * Gets the number of board elements
 */
obb_rules.board.board_elements_count = (function obb_rules$board$board_elements_count(){
var G__23053 = arguments.length;
switch (G__23053) {
case 1:
return obb_rules.board.board_elements_count.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.board.board_elements_count.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

obb_rules.board.board_elements_count.cljs$core$IFn$_invoke$arity$1 = (function (board){
return cljs.core.count.call(null,board.call(null,new cljs.core.Keyword(null,"elements","elements",657646735)));
});

obb_rules.board.board_elements_count.cljs$core$IFn$_invoke$arity$2 = (function (board,player){
return cljs.core.count.call(null,obb_rules.board.board_elements.call(null,board,player));
});

obb_rules.board.board_elements_count.cljs$lang$maxFixedArity = 2;
/**
 * Checks if a board is empty
 */
obb_rules.board.empty_board_QMARK_ = (function obb_rules$board$empty_board_QMARK_(){
var G__23056 = arguments.length;
switch (G__23056) {
case 1:
return obb_rules.board.empty_board_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.board.empty_board_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

obb_rules.board.empty_board_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (board){
return cljs.core._EQ_.call(null,(0),obb_rules.board.board_elements_count.call(null,board));
});

obb_rules.board.empty_board_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (board,player){
return cljs.core._EQ_.call(null,(0),obb_rules.board.board_elements_count.call(null,board,cljs.core.keyword.call(null,player)));
});

obb_rules.board.empty_board_QMARK_.cljs$lang$maxFixedArity = 2;
/**
 * Gets a board's witdh
 */
obb_rules.board.board_width = (function obb_rules$board$board_width(board){
var or__16109__auto__ = board.call(null,new cljs.core.Keyword(null,"width","width",-384071477));
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return obb_rules.laws.default_board_w;
}
});
/**
 * Gets a board's height
 */
obb_rules.board.board_height = (function obb_rules$board$board_height(board){
var or__16109__auto__ = board.call(null,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return obb_rules.laws.default_board_h;
}
});
/**
 * Gets the board's terrain
 */
obb_rules.board.board_terrain = (function obb_rules$board$board_terrain(board){
return board.call(null,new cljs.core.Keyword(null,"terrain","terrain",704966005));
});
/**
 * Gets/sets all the elements
 */
obb_rules.board.elements = (function obb_rules$board$elements(){
var G__23059 = arguments.length;
switch (G__23059) {
case 1:
return obb_rules.board.elements.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.board.elements.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

obb_rules.board.elements.cljs$core$IFn$_invoke$arity$1 = (function (board){
return board.call(null,new cljs.core.Keyword(null,"elements","elements",657646735));
});

obb_rules.board.elements.cljs$core$IFn$_invoke$arity$2 = (function (board,elements){
return cljs.core.assoc.call(null,board,new cljs.core.Keyword(null,"elements","elements",657646735),elements);
});

obb_rules.board.elements.cljs$lang$maxFixedArity = 2;
/**
 * Gets an element given a coordinate
 */
obb_rules.board.get_element = (function obb_rules$board$get_element(board,coord){
return cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735),coord], null));
});
/**
 * Gets an element given a coordinate
 */
obb_rules.board.get_element_consider_removed = (function obb_rules$board$get_element_consider_removed(board,coord){
var or__16109__auto__ = obb_rules.board.get_element.call(null,board,coord);
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"removed-elements","removed-elements",1264344662),coord], null));
}
});
/**
 * Checks if a given coord is in the board
 */
obb_rules.board.in_bounds_QMARK_ = (function obb_rules$board$in_bounds_QMARK_(board,p__23061){
var vec__23063 = p__23061;
var x = cljs.core.nth.call(null,vec__23063,(0),null);
var y = cljs.core.nth.call(null,vec__23063,(1),null);
var w = obb_rules.board.board_width.call(null,board);
var h = obb_rules.board.board_height.call(null,board);
return ((x > (0))) && ((y > (0))) && ((x <= w)) && ((y <= h));
});
/**
 * Checks if an element can be placed
 */
obb_rules.board.can_place_element_QMARK_ = (function obb_rules$board$can_place_element_QMARK_(board,coord,elem){
var and__16097__auto__ = obb_rules.board.in_bounds_QMARK_.call(null,board,coord);
if(cljs.core.truth_(and__16097__auto__)){
return (obb_rules.board.get_element.call(null,board,coord) == null);
} else {
return and__16097__auto__;
}
});
/**
 * Registers that an element was destroyed from a coordinate
 */
obb_rules.board.register_removed_element = (function obb_rules$board$register_removed_element(board,coord,element,destroyed_QMARK_){
if(cljs.core.truth_(destroyed_QMARK_)){
var all_removed = (function (){var or__16109__auto__ = board.call(null,new cljs.core.Keyword(null,"removed-elements","removed-elements",1264344662));
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,board,new cljs.core.Keyword(null,"removed-elements","removed-elements",1264344662),cljs.core.assoc.call(null,all_removed,coord,element));
} else {
return board;
}
});
/**
 * Removes an element from the board
 */
obb_rules.board.remove_element = (function obb_rules$board$remove_element(){
var G__23065 = arguments.length;
switch (G__23065) {
case 2:
return obb_rules.board.remove_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return obb_rules.board.remove_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

obb_rules.board.remove_element.cljs$core$IFn$_invoke$arity$2 = (function (board,coord){
return obb_rules.board.remove_element.call(null,board,coord,false);
});

obb_rules.board.remove_element.cljs$core$IFn$_invoke$arity$3 = (function (board,coord,destroyed_QMARK_){
var elements = board.call(null,new cljs.core.Keyword(null,"elements","elements",657646735));
var new_elements = cljs.core.dissoc.call(null,elements,coord);
return cljs.core.assoc.call(null,obb_rules.board.register_removed_element.call(null,board,coord,cljs.core.get.call(null,elements,coord),destroyed_QMARK_),new cljs.core.Keyword(null,"elements","elements",657646735),new_elements);
});

obb_rules.board.remove_element.cljs$lang$maxFixedArity = 3;
/**
 * Swaps a given element for another
 */
obb_rules.board.swap_element = (function obb_rules$board$swap_element(board,coord,new_elem){
var elements = board.call(null,new cljs.core.Keyword(null,"elements","elements",657646735));
var element_with_coord = obb_rules.element.element_coordinate.call(null,new_elem,coord);
var new_elements = cljs.core.assoc.call(null,elements,coord,element_with_coord);
obb_rules.element.assert_element.call(null,element_with_coord);

return cljs.core.assoc.call(null,board,new cljs.core.Keyword(null,"elements","elements",657646735),new_elements);
});
/**
 * Places an element on the board
 */
obb_rules.board.place_element = (function obb_rules$board$place_element(board,coord,element){
obb_rules.element.assert_element.call(null,element);

if(cljs.core.truth_(obb_rules.board.can_place_element_QMARK_.call(null,board,coord,element))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"can-place-element?","can-place-element?",-436049716,null),new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Symbol(null,"element","element",-680416020,null))))].join('')));
}

return obb_rules.board.swap_element.call(null,board,coord,element);
});
/**
 * Returns true if the board has an element on a given coord
 */
obb_rules.board.has_element_QMARK_ = (function obb_rules$board$has_element_QMARK_(board,coord){
return !((obb_rules.board.get_element.call(null,board,coord) == null));
});
/**
 * Checks if two coordinates are adjacent
 */
obb_rules.board.adjacent_QMARK_ = (function obb_rules$board$adjacent_QMARK_(p__23067,p__23068){
var vec__23071 = p__23067;
var c1x = cljs.core.nth.call(null,vec__23071,(0),null);
var c1y = cljs.core.nth.call(null,vec__23071,(1),null);
var vec__23072 = p__23068;
var c2x = cljs.core.nth.call(null,vec__23072,(0),null);
var c2y = cljs.core.nth.call(null,vec__23072,(1),null);
return (((2) > obb_rules.math.abs.call(null,(c1x - c2x)))) && (((2) > obb_rules.math.abs.call(null,(c1y - c2y))));
});
/**
 * Removes a quantity from the board, marking it as move
 */
obb_rules.board.remove_from_element = (function obb_rules$board$remove_from_element(){
var G__23074 = arguments.length;
switch (G__23074) {
case 3:
return obb_rules.board.remove_from_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return obb_rules.board.remove_from_element.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

obb_rules.board.remove_from_element.cljs$core$IFn$_invoke$arity$3 = (function (board,coord,quantity){
return obb_rules.board.remove_from_element.call(null,board,coord,quantity,false);
});

obb_rules.board.remove_from_element.cljs$core$IFn$_invoke$arity$4 = (function (board,coord,quantity,destroyed_QMARK_){
var element = obb_rules.board.get_element.call(null,board,coord);
var new_element = obb_rules.element.remove_quantity.call(null,element,quantity);
var remaining_quantity = obb_rules.element.element_quantity.call(null,new_element);
if(cljs.core._EQ_.call(null,(0),remaining_quantity)){
return obb_rules.board.remove_element.call(null,board,coord,destroyed_QMARK_);
} else {
return obb_rules.board.swap_element.call(null,board,coord,new_element);
}
});

obb_rules.board.remove_from_element.cljs$lang$maxFixedArity = 4;
/**
 * Removes a quantity from the board, marking it as destroyed
 */
obb_rules.board.destroy_from_element = (function obb_rules$board$destroy_from_element(board,coord,quantity){
return obb_rules.board.remove_from_element.call(null,board,coord,quantity,true);
});
/**
 * Adds a quantity to an element
 */
obb_rules.board.add_to_element = (function obb_rules$board$add_to_element(board,coord,extra_quantity,from_element){
var element = (function (){var or__16109__auto__ = obb_rules.board.get_element.call(null,board,coord);
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return from_element;
}
})();
var quantity = (function (){var or__16109__auto__ = (0);
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return obb_rules.element.element_quantity.call(null,element);
}
})();
var new_quantity = (quantity + extra_quantity);
var new_element = obb_rules.element.element_quantity.call(null,element,new_quantity);
if(cljs.core.truth_(element)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("NoElement-"),cljs.core.str(coord),cljs.core.str(" - "),cljs.core.str(board)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"element","element",-680416020,null)))].join('')));
}

obb_rules.element.assert_element.call(null,new_element);

return obb_rules.board.swap_element.call(null,board,coord,new_element);
});
/**
 * Sets the stash for a given player
 */
obb_rules.board.set_stash = (function obb_rules$board$set_stash(board,player,stash){
return cljs.core.assoc_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stash","stash",1808320309),player], null),stash);
});
/**
 * Gets a stash for a given player
 */
obb_rules.board.get_stash = (function obb_rules$board$get_stash(board,player){
return cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stash","stash",1808320309),cljs.core.keyword.call(null,player)], null));
});

//# sourceMappingURL=board.js.map?rel=1436104823924