// Compiled by ClojureScript 1.7.228 {}
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
obb_rules.board.create_board = (function obb_rules$board$create_board(var_args){
var args41094 = [];
var len__19428__auto___41097 = arguments.length;
var i__19429__auto___41098 = (0);
while(true){
if((i__19429__auto___41098 < len__19428__auto___41097)){
args41094.push((arguments[i__19429__auto___41098]));

var G__41099 = (i__19429__auto___41098 + (1));
i__19429__auto___41098 = G__41099;
continue;
} else {
}
break;
}

var G__41096 = args41094.length;
switch (G__41096) {
case 0:
return obb_rules.board.create_board.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return obb_rules.board.create_board.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41094.length)].join('')));

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
obb_rules.board.player_element_QMARK_ = (function obb_rules$board$player_element_QMARK_(player,p__41101){
var vec__41103 = p__41101;
var coordinate = cljs.core.nth.call(null,vec__41103,(0),null);
var element = cljs.core.nth.call(null,vec__41103,(1),null);
return obb_rules.simplifier.name_EQ_.call(null,player,obb_rules.element.element_player.call(null,element));
});
/**
 * Gets the elements of a given player
 */
obb_rules.board.board_elements = (function obb_rules$board$board_elements(board,player){
return cljs.core.map.call(null,(function (p1__41104_SHARP_){
return cljs.core.last.call(null,p1__41104_SHARP_);
}),cljs.core.filter.call(null,cljs.core.partial.call(null,obb_rules.board.player_element_QMARK_,player),board.call(null,new cljs.core.Keyword(null,"elements","elements",657646735))));
});
/**
 * Gets the number of board elements
 */
obb_rules.board.board_elements_count = (function obb_rules$board$board_elements_count(var_args){
var args41105 = [];
var len__19428__auto___41108 = arguments.length;
var i__19429__auto___41109 = (0);
while(true){
if((i__19429__auto___41109 < len__19428__auto___41108)){
args41105.push((arguments[i__19429__auto___41109]));

var G__41110 = (i__19429__auto___41109 + (1));
i__19429__auto___41109 = G__41110;
continue;
} else {
}
break;
}

var G__41107 = args41105.length;
switch (G__41107) {
case 1:
return obb_rules.board.board_elements_count.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.board.board_elements_count.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41105.length)].join('')));

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
obb_rules.board.empty_board_QMARK_ = (function obb_rules$board$empty_board_QMARK_(var_args){
var args41112 = [];
var len__19428__auto___41115 = arguments.length;
var i__19429__auto___41116 = (0);
while(true){
if((i__19429__auto___41116 < len__19428__auto___41115)){
args41112.push((arguments[i__19429__auto___41116]));

var G__41117 = (i__19429__auto___41116 + (1));
i__19429__auto___41116 = G__41117;
continue;
} else {
}
break;
}

var G__41114 = args41112.length;
switch (G__41114) {
case 1:
return obb_rules.board.empty_board_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.board.empty_board_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41112.length)].join('')));

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
var or__18370__auto__ = board.call(null,new cljs.core.Keyword(null,"width","width",-384071477));
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return obb_rules.laws.default_board_w;
}
});
/**
 * Gets a board's height
 */
obb_rules.board.board_height = (function obb_rules$board$board_height(board){
var or__18370__auto__ = board.call(null,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return obb_rules.laws.default_board_h;
}
});
/**
 * Gets/sets the board's terrain
 */
obb_rules.board.board_terrain = (function obb_rules$board$board_terrain(var_args){
var args41119 = [];
var len__19428__auto___41122 = arguments.length;
var i__19429__auto___41123 = (0);
while(true){
if((i__19429__auto___41123 < len__19428__auto___41122)){
args41119.push((arguments[i__19429__auto___41123]));

var G__41124 = (i__19429__auto___41123 + (1));
i__19429__auto___41123 = G__41124;
continue;
} else {
}
break;
}

var G__41121 = args41119.length;
switch (G__41121) {
case 1:
return obb_rules.board.board_terrain.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.board.board_terrain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41119.length)].join('')));

}
});

obb_rules.board.board_terrain.cljs$core$IFn$_invoke$arity$1 = (function (board){
return board.call(null,new cljs.core.Keyword(null,"terrain","terrain",704966005));
});

obb_rules.board.board_terrain.cljs$core$IFn$_invoke$arity$2 = (function (board,new_terrain){
return cljs.core.assoc.call(null,board,new cljs.core.Keyword(null,"terrain","terrain",704966005),new_terrain);
});

obb_rules.board.board_terrain.cljs$lang$maxFixedArity = 2;
/**
 * Gets/sets all the elements
 */
obb_rules.board.elements = (function obb_rules$board$elements(var_args){
var args41126 = [];
var len__19428__auto___41129 = arguments.length;
var i__19429__auto___41130 = (0);
while(true){
if((i__19429__auto___41130 < len__19428__auto___41129)){
args41126.push((arguments[i__19429__auto___41130]));

var G__41131 = (i__19429__auto___41130 + (1));
i__19429__auto___41130 = G__41131;
continue;
} else {
}
break;
}

var G__41128 = args41126.length;
switch (G__41128) {
case 1:
return obb_rules.board.elements.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.board.elements.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41126.length)].join('')));

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
var or__18370__auto__ = obb_rules.board.get_element.call(null,board,coord);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"removed-elements","removed-elements",1264344662),coord], null));
}
});
/**
 * Checks if a given coord is in the board
 */
obb_rules.board.in_bounds_QMARK_ = (function obb_rules$board$in_bounds_QMARK_(board,p__41133){
var vec__41135 = p__41133;
var x = cljs.core.nth.call(null,vec__41135,(0),null);
var y = cljs.core.nth.call(null,vec__41135,(1),null);
return ((x > (0))) && ((y > (0))) && ((x <= (8))) && ((y <= (8)));
});
/**
 * Checks if an element can be placed
 */
obb_rules.board.can_place_element_QMARK_ = (function obb_rules$board$can_place_element_QMARK_(board,coord,elem){
var and__18358__auto__ = obb_rules.board.in_bounds_QMARK_.call(null,board,coord);
if(cljs.core.truth_(and__18358__auto__)){
return (obb_rules.board.get_element.call(null,board,coord) == null);
} else {
return and__18358__auto__;
}
});
/**
 * Registers that an element was destroyed from a coordinate
 */
obb_rules.board.register_removed_element = (function obb_rules$board$register_removed_element(board,coord,element,destroyed_QMARK_){
if(cljs.core.truth_(destroyed_QMARK_)){
var all_removed = (function (){var or__18370__auto__ = board.call(null,new cljs.core.Keyword(null,"removed-elements","removed-elements",1264344662));
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
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
obb_rules.board.remove_element = (function obb_rules$board$remove_element(var_args){
var args41136 = [];
var len__19428__auto___41139 = arguments.length;
var i__19429__auto___41140 = (0);
while(true){
if((i__19429__auto___41140 < len__19428__auto___41139)){
args41136.push((arguments[i__19429__auto___41140]));

var G__41141 = (i__19429__auto___41140 + (1));
i__19429__auto___41140 = G__41141;
continue;
} else {
}
break;
}

var G__41138 = args41136.length;
switch (G__41138) {
case 2:
return obb_rules.board.remove_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return obb_rules.board.remove_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41136.length)].join('')));

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
obb_rules.board.adjacent_QMARK_ = (function obb_rules$board$adjacent_QMARK_(p__41143,p__41144){
var vec__41147 = p__41143;
var c1x = cljs.core.nth.call(null,vec__41147,(0),null);
var c1y = cljs.core.nth.call(null,vec__41147,(1),null);
var vec__41148 = p__41144;
var c2x = cljs.core.nth.call(null,vec__41148,(0),null);
var c2y = cljs.core.nth.call(null,vec__41148,(1),null);
var dx = (c1x - c2x);
var dy = (c1y - c2y);
return (((-2) < dx)) && (((2) > dx)) && (((-2) < dy)) && (((2) > dy));
});
/**
 * Removes a quantity from the board, marking it as move
 */
obb_rules.board.remove_from_element = (function obb_rules$board$remove_from_element(var_args){
var args41149 = [];
var len__19428__auto___41152 = arguments.length;
var i__19429__auto___41153 = (0);
while(true){
if((i__19429__auto___41153 < len__19428__auto___41152)){
args41149.push((arguments[i__19429__auto___41153]));

var G__41154 = (i__19429__auto___41153 + (1));
i__19429__auto___41153 = G__41154;
continue;
} else {
}
break;
}

var G__41151 = args41149.length;
switch (G__41151) {
case 3:
return obb_rules.board.remove_from_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return obb_rules.board.remove_from_element.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41149.length)].join('')));

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
var element = (function (){var or__18370__auto__ = obb_rules.board.get_element.call(null,board,coord);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return from_element;
}
})();
var quantity = (function (){var or__18370__auto__ = (0);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
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
/**
 * True if the given element should be present on an element-focus
 */
obb_rules.board.element_focus_match_QMARK_ = (function obb_rules$board$element_focus_match_QMARK_(player,template_element,some_element){
var template_coord = obb_rules.element.element_coordinate.call(null,template_element);
var some_coord = obb_rules.element.element_coordinate.call(null,some_element);
var some_player = obb_rules.element.element_player.call(null,some_element);
var or__18370__auto__ = cljs.core._EQ_.call(null,template_coord,some_coord);
if(or__18370__auto__){
return or__18370__auto__;
} else {
var and__18358__auto__ = player;
if(cljs.core.truth_(and__18358__auto__)){
var and__18358__auto____$1 = some_player;
if(cljs.core.truth_(and__18358__auto____$1)){
return cljs.core.not.call(null,obb_rules.simplifier.name_EQ_.call(null,player,some_player));
} else {
return and__18358__auto____$1;
}
} else {
return and__18358__auto__;
}
}
});
/**
 * Returns a new board, where the player of the given element only has
 *   the given element. All the opponents elements remain intact.
 */
obb_rules.board.element_focus = (function obb_rules$board$element_focus(board,element){
var player = obb_rules.element.element_player.call(null,element);
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"elements","elements",657646735),cljs.core.reduce_kv.call(null,((function (player){
return (function (m,k,v){
if(cljs.core.truth_(obb_rules.board.element_focus_match_QMARK_.call(null,player,element,v))){
return cljs.core.assoc.call(null,m,k,v);
} else {
return m;
}
});})(player))
,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(board)));
});

//# sourceMappingURL=board.js.map?rel=1458852289706