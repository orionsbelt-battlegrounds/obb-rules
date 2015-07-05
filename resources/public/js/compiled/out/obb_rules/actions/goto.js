// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_rules.actions.goto$');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.math');
goog.require('obb_rules.element');
goog.require('obb_rules.result');
goog.require('obb_rules.actions.move');
goog.require('obb_rules.laws');
/**
 * Calculates the distance between two coordinates
 */
obb_rules.actions.goto$.distance_to = (function obb_rules$actions$goto$distance_to(p__23300,p__23301){
var vec__23304 = p__23300;
var xa = cljs.core.nth.call(null,vec__23304,(0),null);
var ya = cljs.core.nth.call(null,vec__23304,(1),null);
var vec__23305 = p__23301;
var xb = cljs.core.nth.call(null,vec__23305,(0),null);
var yb = cljs.core.nth.call(null,vec__23305,(1),null);
return obb_rules.math.sqrt.call(null,(obb_rules.math.expt.call(null,(xa - xb),(2)) + obb_rules.math.expt.call(null,(ya - yb),(2))));
});
/**
 * Gives proper weight to the distance between coordinates. It calculates the
 * geometric distance to the target. However, if the distance of the current
 * coordinate to evaluate is bigger than the distance of the source coordinate,
 * it will make the diagonals more valuable. Meaning, going one square behind
 * will always be the costest move to make.
 */
obb_rules.actions.goto$.distance_factor = (function obb_rules$actions$goto$distance_factor(source,target,current){
var source_distance = obb_rules.actions.goto$.distance_to.call(null,source,target);
var current_distance = obb_rules.actions.goto$.distance_to.call(null,current,target);
if((source_distance > current_distance)){
return current_distance;
} else {
var vec__23308 = target;
var xa = cljs.core.nth.call(null,vec__23308,(0),null);
var ya = cljs.core.nth.call(null,vec__23308,(1),null);
var vec__23309 = current;
var xb = cljs.core.nth.call(null,vec__23309,(0),null);
var yb = cljs.core.nth.call(null,vec__23309,(1),null);
var dx = obb_rules.math.abs.call(null,(xa - xb));
var dy = obb_rules.math.abs.call(null,(ya - yb));
if((cljs.core._EQ_.call(null,(0),dx)) || (cljs.core._EQ_.call(null,(0),dy))){
return (current_distance + (1));
} else {
return current_distance;
}
}
});
/**
 * Removes the travelled coords from the given coordinates to handle
 */
obb_rules.actions.goto$.purge = (function obb_rules$actions$goto$purge(possible,travelled){
return cljs.core.remove.call(null,travelled,possible);
});
/**
 * Sorts the given collection by the distance to a target
 */
obb_rules.actions.goto$.sort_by_distance = (function obb_rules$actions$goto$sort_by_distance(coords,from,target){
return cljs.core.sort_by.call(null,cljs.core.partial.call(null,obb_rules.actions.goto$.distance_factor,from,target),coords);
});
/**
 * Groups the possible coords for the current scenario
 */
obb_rules.actions.goto$.possible_coords = (function obb_rules$actions$goto$possible_coords(board,from,target,travelled){
var temp__4423__auto__ = obb_rules.board.get_element.call(null,board,from);
if(cljs.core.truth_(temp__4423__auto__)){
var efrom = temp__4423__auto__;
return obb_rules.actions.goto$.purge.call(null,obb_rules.actions.goto$.sort_by_distance.call(null,obb_rules.actions.move.find_possible_destinations.call(null,board,efrom),from,target),travelled);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Processes a :move action for the given board
 */
obb_rules.actions.goto$.process_move = (function obb_rules$actions$goto$process_move(board,from,best,player){
var move_action = obb_rules.actions.move.build_move.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,best], null));
return move_action.call(null,board,player);
});
/**
 * Tries to find a path between two coords
 */
obb_rules.actions.goto$.find_path = (function obb_rules$actions$goto$find_path(board,player,from,target,cost,travelled,possible){
while(true){
var possible__$1 = (function (){var or__16109__auto__ = possible;
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return obb_rules.actions.goto$.possible_coords.call(null,board,from,target,travelled);
}
})();
var best = cljs.core.first.call(null,possible__$1);
if(cljs.core.not.call(null,best)){
return obb_rules.result.action_failed.call(null,"NoRouteToTarget");
} else {
var result = obb_rules.actions.goto$.process_move.call(null,board,from,best,player);
var new_board = obb_rules.result.result_board.call(null,result);
var current_cost = (cost + obb_rules.result.result_cost.call(null,result));
if((obb_rules.laws.max_action_points < current_cost)){
return obb_rules.result.action_failed.call(null,"ActionPointsOverflow");
} else {
if(cljs.core._EQ_.call(null,best,target)){
return obb_rules.result.action_success.call(null,new_board,current_cost);
} else {
if(cljs.core.truth_(obb_rules.result.failed_QMARK_.call(null,result))){
return result;
} else {
var temp__4423__auto__ = obb_rules$actions$goto$find_path.call(null,new_board,player,best,target,current_cost,cljs.core.conj.call(null,travelled,best),null);
if(cljs.core.truth_(temp__4423__auto__)){
var result__$1 = temp__4423__auto__;
return result__$1;
} else {
var G__23310 = board;
var G__23311 = player;
var G__23312 = from;
var G__23313 = target;
var G__23314 = cost;
var G__23315 = travelled;
var G__23316 = cljs.core.rest.call(null,possible__$1);
board = G__23310;
player = G__23311;
from = G__23312;
target = G__23313;
cost = G__23314;
travelled = G__23315;
possible = G__23316;
continue;
}

}
}
}
}
break;
}
});
/**
 * Id the target is adjacent to the source, tries to run a :move action.
 */
obb_rules.actions.goto$.resolve_adjacent_move = (function obb_rules$actions$goto$resolve_adjacent_move(board,player,from,target,quantity){
if(cljs.core.truth_(obb_rules.board.adjacent_QMARK_.call(null,from,target))){
var action = obb_rules.actions.move.build_move.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,target,quantity], null));
var result = action.call(null,board,player);
if(cljs.core._EQ_.call(null,"MovementTypeFail",obb_rules.result.result_message.call(null,result))){
return null;
} else {
return result;
}
} else {
return null;
}
});
/**
 * Tries to find the best path between the given coordinates. Fails if can't
 * find it, or the :move action would fail for this scenario.
 */
obb_rules.actions.goto$.resolve_goto = (function obb_rules$actions$goto$resolve_goto(from,target,quantity){
return (function obb_rules$actions$goto$resolve_goto_$_gotoer(board,player){
var temp__4423__auto__ = obb_rules.actions.goto$.resolve_adjacent_move.call(null,board,player,from,target,quantity);
if(cljs.core.truth_(temp__4423__auto__)){
var adjacent_result = temp__4423__auto__;
return adjacent_result;
} else {
var temp__4423__auto____$1 = obb_rules.actions.goto$.find_path.call(null,board,player,from,target,(0),cljs.core.PersistentHashSet.EMPTY,null);
if(cljs.core.truth_(temp__4423__auto____$1)){
var result = temp__4423__auto____$1;
return result;
} else {
return obb_rules.result.action_failed.call(null,"NoPathToTarget");
}
}
});
});
/**
 * Builds a goto action on a board
 */
obb_rules.actions.goto$.build_goto = (function obb_rules$actions$goto$build_goto(p__23317){
var vec__23319 = p__23317;
var from = cljs.core.nth.call(null,vec__23319,(0),null);
var to = cljs.core.nth.call(null,vec__23319,(1),null);
var quantity = cljs.core.nth.call(null,vec__23319,(2),null);
return obb_rules.actions.goto$.resolve_goto.call(null,from,to,quantity);
});

//# sourceMappingURL=goto.js.map?rel=1436104824876