// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.actions.move');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.simplifier');
goog.require('obb_rules.element');
goog.require('obb_rules.result');
goog.require('obb_rules.actions.move_restrictions');
goog.require('obb_rules.unit');
goog.require('obb_rules.game');
goog.require('clojure.set');
goog.require('obb_rules.laws');
/**
 * Checks if a quantity to move is invalid
 */
obb_rules.actions.move.invalid_move_percentage_QMARK_ = (function obb_rules$actions$move$invalid_move_percentage_QMARK_(total_quantity,quantity){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(total_quantity,quantity)){
return false;
} else {
return ((quantity >= (total_quantity * obb_rules.laws.max_move_percentage))) || ((quantity <= (total_quantity * obb_rules.laws.min_move_percentage)));
}
});
/**
 * Restrictions on the move action
 */
obb_rules.actions.move.move_restrictions = (function obb_rules$actions$move$move_restrictions(player,board,efrom,from,eto,to,quantity){
if(cljs.core.not(obb_rules.game.player_turn_QMARK_(board,player))){
return "StateMismatch";
} else {
if(cljs.core.not(obb_rules.board.in_bounds_QMARK_(board,to))){
return "OutOfBounds";
} else {
if((efrom == null)){
return "EmptyCoordinate";
} else {
if(cljs.core.truth_(obb_rules.element.frozen_QMARK_(efrom))){
return "FrozenElement";
} else {
if(cljs.core.truth_(obb_rules.element.frozen_QMARK_(eto))){
return "FrozenElement";
} else {
if(cljs.core.not(obb_rules.board.adjacent_QMARK_(from,to))){
return "NotAdjacent";
} else {
if(cljs.core.truth_(obb_rules.actions.move.invalid_move_percentage_QMARK_(obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1(efrom),quantity))){
return "InvalidQuantityPercentage";
} else {
if(cljs.core.not(obb_rules.actions.move_restrictions.valid_QMARK_(efrom,from,to))){
return "MovementTypeFail";
} else {
if(cljs.core.truth_((function (){var and__6144__auto__ = eto;
if(cljs.core.truth_(and__6144__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(obb_rules.element.element_unit(efrom),obb_rules.element.element_unit(eto));
} else {
return and__6144__auto__;
}
})())){
return "UnitMismatch";
} else {
if(cljs.core.truth_((function (){var and__6144__auto__ = eto;
if(cljs.core.truth_(and__6144__auto__)){
return obb_rules.simplifier.not_name_EQ_(player,obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(eto));
} else {
return and__6144__auto__;
}
})())){
return "NotOwnedElement";
} else {
if(cljs.core.truth_(obb_rules.simplifier.not_name_EQ_(player,obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(efrom)))){
return "NotOwnedElement";
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
/**
 * Specifies a unit movement cost
 */
obb_rules.actions.move.movement_cost = (function obb_rules$actions$move$movement_cost(unit,partial_move_QMARK_){
if(cljs.core.truth_(partial_move_QMARK_)){
return ((2) * obb_rules.unit.unit_movement_cost(unit));
} else {
return obb_rules.unit.unit_movement_cost(unit);
}
});
/**
 * Checks if the given coordinate is a possible move for the
 *   element on the given board
 */
obb_rules.actions.move.possible_on_board_QMARK_ = (function obb_rules$actions$move$possible_on_board_QMARK_(board,efrom,destination){
return (obb_rules.actions.move.move_restrictions(obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(efrom),board,efrom,obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(efrom),obb_rules.board.get_element_consider_removed(board,destination),destination,obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1(efrom)) == null);
});
/**
 * Returns a collection with possible coordinates to move the given
 *   element on the given board
 */
obb_rules.actions.move.find_possible_destinations = (function obb_rules$actions$move$find_possible_destinations(board,element){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(obb_rules.actions.move.possible_on_board_QMARK_,board,element),obb_rules.actions.move_restrictions.possible_destinations(element));
});
/**
 * Find possible destinations for the given coordinates
 */
obb_rules.actions.move.tier_positions = (function obb_rules$actions$move$tier_positions(board,element,coll){
var all = (function (){var iter__6928__auto__ = (function obb_rules$actions$move$tier_positions_$_iter__15241(s__15242){
return (new cljs.core.LazySeq(null,(function (){
var s__15242__$1 = s__15242;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15242__$1);
if(temp__4657__auto__){
var s__15242__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15242__$2)){
var c__6926__auto__ = cljs.core.chunk_first(s__15242__$2);
var size__6927__auto__ = cljs.core.count(c__6926__auto__);
var b__15244 = cljs.core.chunk_buffer(size__6927__auto__);
if((function (){var i__15243 = (0);
while(true){
if((i__15243 < size__6927__auto__)){
var coord = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6926__auto__,i__15243);
var element__$1 = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$2(element,coord);
var coord_pos = obb_rules.actions.move.find_possible_destinations(board,element__$1);
cljs.core.chunk_append(b__15244,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY,coord_pos));

var G__15247 = (i__15243 + (1));
i__15243 = G__15247;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15244),obb_rules$actions$move$tier_positions_$_iter__15241(cljs.core.chunk_rest(s__15242__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15244),null);
}
} else {
var coord = cljs.core.first(s__15242__$2);
var element__$1 = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$2(element,coord);
var coord_pos = obb_rules.actions.move.find_possible_destinations(board,element__$1);
return cljs.core.cons(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY,coord_pos),obb_rules$actions$move$tier_positions_$_iter__15241(cljs.core.rest(s__15242__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6928__auto__(cljs.core.set(coll));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,all);
});
/**
 * Returns all possible destinations on a complete turn
 */
obb_rules.actions.move.find_all_possible_destinations = (function obb_rules$actions$move$find_all_possible_destinations(var_args){
var args15248 = [];
var len__7214__auto___15251 = arguments.length;
var i__7215__auto___15252 = (0);
while(true){
if((i__7215__auto___15252 < len__7214__auto___15251)){
args15248.push((arguments[i__7215__auto___15252]));

var G__15253 = (i__7215__auto___15252 + (1));
i__7215__auto___15252 = G__15253;
continue;
} else {
}
break;
}

var G__15250 = args15248.length;
switch (G__15250) {
case 2:
return obb_rules.actions.move.find_all_possible_destinations.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 6:
return obb_rules.actions.move.find_all_possible_destinations.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15248.length)].join('')));

}
});

obb_rules.actions.move.find_all_possible_destinations.cljs$core$IFn$_invoke$arity$2 = (function (board,element){
var mov_cost = obb_rules.element.element_cost(element);
var start_positions = obb_rules.actions.move.find_possible_destinations(board,element);
var start_set = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,start_positions);
return obb_rules.actions.move.find_all_possible_destinations.cljs$core$IFn$_invoke$arity$6(board,element,mov_cost,mov_cost,start_set,start_set);
});

obb_rules.actions.move.find_all_possible_destinations.cljs$core$IFn$_invoke$arity$6 = (function (board,element,mov_cost,curr_cost,curr_coords,all){
while(true){
if(((curr_cost + mov_cost) > obb_rules.laws.max_action_points)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(all,obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(element));
} else {
var current_pos = obb_rules.actions.move.tier_positions(board,element,curr_coords);
var all__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(all,current_pos);
var G__15255 = board;
var G__15256 = element;
var G__15257 = mov_cost;
var G__15258 = (curr_cost + mov_cost);
var G__15259 = current_pos;
var G__15260 = all__$1;
board = G__15255;
element = G__15256;
mov_cost = G__15257;
curr_cost = G__15258;
curr_coords = G__15259;
all = G__15260;
continue;
}
break;
}
});

obb_rules.actions.move.find_all_possible_destinations.cljs$lang$maxFixedArity = 6;
/**
 * Adds coordinate info with cost to the given map
 */
obb_rules.actions.move.coordinate_coll_to_map = (function obb_rules$actions$move$coordinate_coll_to_map(coll,coords,cost){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (container,coord){
var curr_cost = cljs.core.get.cljs$core$IFn$_invoke$arity$2(container,coord);
if(((curr_cost == null)) || ((cost < curr_cost))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(container,coord,cost);
} else {
return container;
}
}),coll,coords);
});
/**
 * Returns all possible destinations on a complete turn, including cost
 */
obb_rules.actions.move.find_all_possible_destinations_with_cost = (function obb_rules$actions$move$find_all_possible_destinations_with_cost(var_args){
var args15261 = [];
var len__7214__auto___15264 = arguments.length;
var i__7215__auto___15265 = (0);
while(true){
if((i__7215__auto___15265 < len__7214__auto___15264)){
args15261.push((arguments[i__7215__auto___15265]));

var G__15266 = (i__7215__auto___15265 + (1));
i__7215__auto___15265 = G__15266;
continue;
} else {
}
break;
}

var G__15263 = args15261.length;
switch (G__15263) {
case 2:
return obb_rules.actions.move.find_all_possible_destinations_with_cost.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 6:
return obb_rules.actions.move.find_all_possible_destinations_with_cost.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15261.length)].join('')));

}
});

obb_rules.actions.move.find_all_possible_destinations_with_cost.cljs$core$IFn$_invoke$arity$2 = (function (board,element){
var mov_cost = obb_rules.element.element_cost(element);
var start_positions = obb_rules.actions.move.find_possible_destinations(board,element);
var coll = obb_rules.actions.move.coordinate_coll_to_map(cljs.core.PersistentArrayMap.EMPTY,start_positions,mov_cost);
return obb_rules.actions.move.find_all_possible_destinations_with_cost.cljs$core$IFn$_invoke$arity$6(board,element,mov_cost,mov_cost,cljs.core.set(start_positions),coll);
});

obb_rules.actions.move.find_all_possible_destinations_with_cost.cljs$core$IFn$_invoke$arity$6 = (function (board,element,mov_cost,curr_cost,curr_coords,all){
while(true){
if(((curr_cost + mov_cost) > obb_rules.laws.max_action_points)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(all,obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(element));
} else {
var curr_cost__$1 = (curr_cost + mov_cost);
var current_pos = obb_rules.actions.move.tier_positions(board,element,curr_coords);
var all__$1 = obb_rules.actions.move.coordinate_coll_to_map(all,current_pos,curr_cost__$1);
var G__15268 = board;
var G__15269 = element;
var G__15270 = mov_cost;
var G__15271 = curr_cost__$1;
var G__15272 = current_pos;
var G__15273 = all__$1;
board = G__15268;
element = G__15269;
mov_cost = G__15270;
curr_cost = G__15271;
curr_coords = G__15272;
all = G__15273;
continue;
}
break;
}
});

obb_rules.actions.move.find_all_possible_destinations_with_cost.cljs$lang$maxFixedArity = 6;
/**
 * Processes the actual move
 */
obb_rules.actions.move.process_move = (function obb_rules$actions$move$process_move(board,efrom,from,eto,to,quantity){
var unit = obb_rules.element.element_unit(efrom);
var from_quantity = obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1(efrom);
var remaining_quantity = (from_quantity - quantity);
var cost = obb_rules.actions.move.movement_cost(unit,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),remaining_quantity));
var removed_from_board = obb_rules.board.remove_from_element.cljs$core$IFn$_invoke$arity$3(board,from,quantity);
var added_to_board = obb_rules.board.add_to_element(removed_from_board,to,quantity,efrom);
return obb_rules.result.action_success.cljs$core$IFn$_invoke$arity$2(added_to_board,cost);
});
/**
 * Tries to get the quantity from the args
 */
obb_rules.actions.move.get_quantity = (function obb_rules$actions$move$get_quantity(quantity,element){
if(cljs.core.truth_(quantity)){
return quantity;
} else {
if(cljs.core.truth_(element)){
return obb_rules.element.element_quantity.cljs$core$IFn$_invoke$arity$1(element);
} else {
return (0);

}
}
});
/**
 * Builds a move action on a board
 */
obb_rules.actions.move.build_move = (function obb_rules$actions$move$build_move(p__15274){
var vec__15276 = p__15274;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15276,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15276,(1),null);
var quantity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15276,(2),null);
return ((function (vec__15276,from,to,quantity){
return (function obb_rules$actions$move$build_move_$_mover(board,player){
var efrom = obb_rules.board.get_element(board,from);
var eto = obb_rules.board.get_element_consider_removed(board,to);
var quantity__$1 = obb_rules.actions.move.get_quantity(quantity,efrom);
var temp__4655__auto__ = obb_rules.actions.move.move_restrictions(player,board,efrom,from,eto,to,quantity__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var error = temp__4655__auto__;
return obb_rules.result.action_failed.cljs$core$IFn$_invoke$arity$1(error);
} else {
return obb_rules.actions.move.process_move(board,efrom,from,eto,to,quantity__$1);
}
});
;})(vec__15276,from,to,quantity))
});
/**
 * Removes action specific state from the board
 */
obb_rules.actions.move.reset_action_state = (function obb_rules$actions$move$reset_action_state(board){
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,cljs.core.cst$kw$elements);
var cleaned = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (elements){
return (function (h,p__15279){
var vec__15280 = p__15279;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15280,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15280,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(h,k,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$kw$frozen));
});})(elements))
,cljs.core.PersistentArrayMap.EMPTY,elements);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,cljs.core.cst$kw$elements,cleaned);
});
