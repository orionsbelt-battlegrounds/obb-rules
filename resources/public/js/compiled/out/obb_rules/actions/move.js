// Compiled by ClojureScript 1.7.228 {}
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
if(cljs.core._EQ_.call(null,total_quantity,quantity)){
return false;
} else {
return ((quantity >= (total_quantity * obb_rules.laws.max_move_percentage))) || ((quantity <= (total_quantity * obb_rules.laws.min_move_percentage)));
}
});
/**
 * Restrictions on the move action
 */
obb_rules.actions.move.move_restrictions = (function obb_rules$actions$move$move_restrictions(player,board,efrom,from,eto,to,quantity){
if(cljs.core.not.call(null,obb_rules.game.player_turn_QMARK_.call(null,board,player))){
return "StateMismatch";
} else {
if(cljs.core.not.call(null,obb_rules.board.in_bounds_QMARK_.call(null,board,to))){
return "OutOfBounds";
} else {
if((efrom == null)){
return "EmptyCoordinate";
} else {
if(cljs.core.truth_(obb_rules.element.frozen_QMARK_.call(null,efrom))){
return "FrozenElement";
} else {
if(cljs.core.truth_(obb_rules.element.frozen_QMARK_.call(null,eto))){
return "FrozenElement";
} else {
if(cljs.core.not.call(null,obb_rules.board.adjacent_QMARK_.call(null,from,to))){
return "NotAdjacent";
} else {
if(cljs.core.truth_(obb_rules.actions.move.invalid_move_percentage_QMARK_.call(null,obb_rules.element.element_quantity.call(null,efrom),quantity))){
return "InvalidQuantityPercentage";
} else {
if(cljs.core.not.call(null,obb_rules.actions.move_restrictions.valid_QMARK_.call(null,efrom,from,to))){
return "MovementTypeFail";
} else {
if(cljs.core.truth_((function (){var and__18358__auto__ = eto;
if(cljs.core.truth_(and__18358__auto__)){
return cljs.core.not_EQ_.call(null,obb_rules.element.element_unit.call(null,efrom),obb_rules.element.element_unit.call(null,eto));
} else {
return and__18358__auto__;
}
})())){
return "UnitMismatch";
} else {
if(cljs.core.truth_((function (){var and__18358__auto__ = eto;
if(cljs.core.truth_(and__18358__auto__)){
return obb_rules.simplifier.not_name_EQ_.call(null,player,obb_rules.element.element_player.call(null,eto));
} else {
return and__18358__auto__;
}
})())){
return "NotOwnedElement";
} else {
if(cljs.core.truth_(obb_rules.simplifier.not_name_EQ_.call(null,player,obb_rules.element.element_player.call(null,efrom)))){
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
return ((2) * obb_rules.unit.unit_movement_cost.call(null,unit));
} else {
return obb_rules.unit.unit_movement_cost.call(null,unit);
}
});
/**
 * Checks if the given coordinate is a possible move for the
 *   element on the given board
 */
obb_rules.actions.move.possible_on_board_QMARK_ = (function obb_rules$actions$move$possible_on_board_QMARK_(board,efrom,destination){
return (obb_rules.actions.move.move_restrictions.call(null,obb_rules.element.element_player.call(null,efrom),board,efrom,obb_rules.element.element_coordinate.call(null,efrom),obb_rules.board.get_element_consider_removed.call(null,board,destination),destination,obb_rules.element.element_quantity.call(null,efrom)) == null);
});
/**
 * Returns a collection with possible coordinates to move the given
 *   element on the given board
 */
obb_rules.actions.move.find_possible_destinations = (function obb_rules$actions$move$find_possible_destinations(board,element){
return cljs.core.filter.call(null,cljs.core.partial.call(null,obb_rules.actions.move.possible_on_board_QMARK_,board,element),obb_rules.actions.move_restrictions.possible_destinations.call(null,element));
});
/**
 * Find possible destinations for the given coordinates
 */
obb_rules.actions.move.tier_positions = (function obb_rules$actions$move$tier_positions(board,element,coll){
var all = (function (){var iter__19142__auto__ = (function obb_rules$actions$move$tier_positions_$_iter__41430(s__41431){
return (new cljs.core.LazySeq(null,(function (){
var s__41431__$1 = s__41431;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41431__$1);
if(temp__4657__auto__){
var s__41431__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41431__$2)){
var c__19140__auto__ = cljs.core.chunk_first.call(null,s__41431__$2);
var size__19141__auto__ = cljs.core.count.call(null,c__19140__auto__);
var b__41433 = cljs.core.chunk_buffer.call(null,size__19141__auto__);
if((function (){var i__41432 = (0);
while(true){
if((i__41432 < size__19141__auto__)){
var coord = cljs.core._nth.call(null,c__19140__auto__,i__41432);
var element__$1 = obb_rules.element.element_coordinate.call(null,element,coord);
var coord_pos = obb_rules.actions.move.find_possible_destinations.call(null,board,element__$1);
cljs.core.chunk_append.call(null,b__41433,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY,coord_pos));

var G__41434 = (i__41432 + (1));
i__41432 = G__41434;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41433),obb_rules$actions$move$tier_positions_$_iter__41430.call(null,cljs.core.chunk_rest.call(null,s__41431__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41433),null);
}
} else {
var coord = cljs.core.first.call(null,s__41431__$2);
var element__$1 = obb_rules.element.element_coordinate.call(null,element,coord);
var coord_pos = obb_rules.actions.move.find_possible_destinations.call(null,board,element__$1);
return cljs.core.cons.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY,coord_pos),obb_rules$actions$move$tier_positions_$_iter__41430.call(null,cljs.core.rest.call(null,s__41431__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19142__auto__.call(null,cljs.core.set.call(null,coll));
})();
return cljs.core.apply.call(null,clojure.set.union,all);
});
/**
 * Returns all possible destinations on a complete turn
 */
obb_rules.actions.move.find_all_possible_destinations = (function obb_rules$actions$move$find_all_possible_destinations(var_args){
var args41435 = [];
var len__19428__auto___41438 = arguments.length;
var i__19429__auto___41439 = (0);
while(true){
if((i__19429__auto___41439 < len__19428__auto___41438)){
args41435.push((arguments[i__19429__auto___41439]));

var G__41440 = (i__19429__auto___41439 + (1));
i__19429__auto___41439 = G__41440;
continue;
} else {
}
break;
}

var G__41437 = args41435.length;
switch (G__41437) {
case 2:
return obb_rules.actions.move.find_all_possible_destinations.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 6:
return obb_rules.actions.move.find_all_possible_destinations.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41435.length)].join('')));

}
});

obb_rules.actions.move.find_all_possible_destinations.cljs$core$IFn$_invoke$arity$2 = (function (board,element){
var mov_cost = obb_rules.element.element_cost.call(null,element);
var start_positions = obb_rules.actions.move.find_possible_destinations.call(null,board,element);
var start_set = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,start_positions);
return obb_rules.actions.move.find_all_possible_destinations.call(null,board,element,mov_cost,mov_cost,start_set,start_set);
});

obb_rules.actions.move.find_all_possible_destinations.cljs$core$IFn$_invoke$arity$6 = (function (board,element,mov_cost,curr_cost,curr_coords,all){
while(true){
if(((curr_cost + mov_cost) > obb_rules.laws.max_action_points)){
return cljs.core.disj.call(null,all,obb_rules.element.element_coordinate.call(null,element));
} else {
var current_pos = obb_rules.actions.move.tier_positions.call(null,board,element,curr_coords);
var all__$1 = cljs.core.into.call(null,all,current_pos);
var G__41442 = board;
var G__41443 = element;
var G__41444 = mov_cost;
var G__41445 = (curr_cost + mov_cost);
var G__41446 = current_pos;
var G__41447 = all__$1;
board = G__41442;
element = G__41443;
mov_cost = G__41444;
curr_cost = G__41445;
curr_coords = G__41446;
all = G__41447;
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
return cljs.core.reduce.call(null,(function (container,coord){
var curr_cost = cljs.core.get.call(null,container,coord);
if(((curr_cost == null)) || ((cost < curr_cost))){
return cljs.core.assoc.call(null,container,coord,cost);
} else {
return container;
}
}),coll,coords);
});
/**
 * Returns all possible destinations on a complete turn, including cost
 */
obb_rules.actions.move.find_all_possible_destinations_with_cost = (function obb_rules$actions$move$find_all_possible_destinations_with_cost(var_args){
var args41448 = [];
var len__19428__auto___41451 = arguments.length;
var i__19429__auto___41452 = (0);
while(true){
if((i__19429__auto___41452 < len__19428__auto___41451)){
args41448.push((arguments[i__19429__auto___41452]));

var G__41453 = (i__19429__auto___41452 + (1));
i__19429__auto___41452 = G__41453;
continue;
} else {
}
break;
}

var G__41450 = args41448.length;
switch (G__41450) {
case 2:
return obb_rules.actions.move.find_all_possible_destinations_with_cost.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 6:
return obb_rules.actions.move.find_all_possible_destinations_with_cost.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41448.length)].join('')));

}
});

obb_rules.actions.move.find_all_possible_destinations_with_cost.cljs$core$IFn$_invoke$arity$2 = (function (board,element){
var mov_cost = obb_rules.element.element_cost.call(null,element);
var start_positions = obb_rules.actions.move.find_possible_destinations.call(null,board,element);
var coll = obb_rules.actions.move.coordinate_coll_to_map.call(null,cljs.core.PersistentArrayMap.EMPTY,start_positions,mov_cost);
return obb_rules.actions.move.find_all_possible_destinations_with_cost.call(null,board,element,mov_cost,mov_cost,cljs.core.set.call(null,start_positions),coll);
});

obb_rules.actions.move.find_all_possible_destinations_with_cost.cljs$core$IFn$_invoke$arity$6 = (function (board,element,mov_cost,curr_cost,curr_coords,all){
while(true){
if(((curr_cost + mov_cost) > obb_rules.laws.max_action_points)){
return cljs.core.dissoc.call(null,all,obb_rules.element.element_coordinate.call(null,element));
} else {
var curr_cost__$1 = (curr_cost + mov_cost);
var current_pos = obb_rules.actions.move.tier_positions.call(null,board,element,curr_coords);
var all__$1 = obb_rules.actions.move.coordinate_coll_to_map.call(null,all,current_pos,curr_cost__$1);
var G__41455 = board;
var G__41456 = element;
var G__41457 = mov_cost;
var G__41458 = curr_cost__$1;
var G__41459 = current_pos;
var G__41460 = all__$1;
board = G__41455;
element = G__41456;
mov_cost = G__41457;
curr_cost = G__41458;
curr_coords = G__41459;
all = G__41460;
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
var unit = obb_rules.element.element_unit.call(null,efrom);
var from_quantity = obb_rules.element.element_quantity.call(null,efrom);
var remaining_quantity = (from_quantity - quantity);
var cost = obb_rules.actions.move.movement_cost.call(null,unit,cljs.core.not_EQ_.call(null,(0),remaining_quantity));
var removed_from_board = obb_rules.board.remove_from_element.call(null,board,from,quantity);
var added_to_board = obb_rules.board.add_to_element.call(null,removed_from_board,to,quantity,efrom);
return obb_rules.result.action_success.call(null,added_to_board,cost);
});
/**
 * Tries to get the quantity from the args
 */
obb_rules.actions.move.get_quantity = (function obb_rules$actions$move$get_quantity(quantity,element){
if(cljs.core.truth_(quantity)){
return quantity;
} else {
if(cljs.core.truth_(element)){
return obb_rules.element.element_quantity.call(null,element);
} else {
return (0);

}
}
});
/**
 * Builds a move action on a board
 */
obb_rules.actions.move.build_move = (function obb_rules$actions$move$build_move(p__41461){
var vec__41463 = p__41461;
var from = cljs.core.nth.call(null,vec__41463,(0),null);
var to = cljs.core.nth.call(null,vec__41463,(1),null);
var quantity = cljs.core.nth.call(null,vec__41463,(2),null);
return ((function (vec__41463,from,to,quantity){
return (function obb_rules$actions$move$build_move_$_mover(board,player){
var efrom = obb_rules.board.get_element.call(null,board,from);
var eto = obb_rules.board.get_element_consider_removed.call(null,board,to);
var quantity__$1 = obb_rules.actions.move.get_quantity.call(null,quantity,efrom);
var temp__4655__auto__ = obb_rules.actions.move.move_restrictions.call(null,player,board,efrom,from,eto,to,quantity__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var error = temp__4655__auto__;
return obb_rules.result.action_failed.call(null,error);
} else {
return obb_rules.actions.move.process_move.call(null,board,efrom,from,eto,to,quantity__$1);
}
});
;})(vec__41463,from,to,quantity))
});
/**
 * Removes action specific state from the board
 */
obb_rules.actions.move.reset_action_state = (function obb_rules$actions$move$reset_action_state(board){
var elements = cljs.core.get.call(null,board,new cljs.core.Keyword(null,"elements","elements",657646735));
var cleaned = cljs.core.reduce.call(null,((function (elements){
return (function (h,p__41466){
var vec__41467 = p__41466;
var k = cljs.core.nth.call(null,vec__41467,(0),null);
var v = cljs.core.nth.call(null,vec__41467,(1),null);
return cljs.core.assoc.call(null,h,k,cljs.core.dissoc.call(null,v,new cljs.core.Keyword(null,"frozen","frozen",-1824610372)));
});})(elements))
,cljs.core.PersistentArrayMap.EMPTY,elements);
return cljs.core.assoc.call(null,board,new cljs.core.Keyword(null,"elements","elements",657646735),cleaned);
});

//# sourceMappingURL=move.js.map?rel=1458852291280