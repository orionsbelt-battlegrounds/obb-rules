// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
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
obb_rules.actions.goto$.distance_to = (function obb_rules$actions$goto$distance_to(p__12895,p__12896){
var vec__12899 = p__12895;
var xa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12899,(0),null);
var ya = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12899,(1),null);
var vec__12900 = p__12896;
var xb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12900,(0),null);
var yb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12900,(1),null);
return obb_rules.math.sqrt((obb_rules.math.expt((xa - xb),(2)) + obb_rules.math.expt((ya - yb),(2))));
});
/**
 * Gives proper weight to the distance between coordinates. It calculates the
 * geometric distance to the target. However, if the distance of the current
 * coordinate to evaluate is bigger than the distance of the source coordinate,
 * it will make the diagonals more valuable. Meaning, going one square behind
 * will always be the costest move to make.
 */
obb_rules.actions.goto$.distance_factor = (function obb_rules$actions$goto$distance_factor(source,target,current){
var source_distance = obb_rules.actions.goto$.distance_to(source,target);
var current_distance = obb_rules.actions.goto$.distance_to(current,target);
if((source_distance > current_distance)){
return current_distance;
} else {
var vec__12903 = target;
var xa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12903,(0),null);
var ya = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12903,(1),null);
var vec__12904 = current;
var xb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12904,(0),null);
var yb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12904,(1),null);
var dx = obb_rules.math.abs((xa - xb));
var dy = obb_rules.math.abs((ya - yb));
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),dx)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),dy))){
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
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(travelled,possible);
});
/**
 * Sorts the given collection by the distance to a target
 */
obb_rules.actions.goto$.sort_by_distance = (function obb_rules$actions$goto$sort_by_distance(coords,from,target){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(obb_rules.actions.goto$.distance_factor,from,target),coords);
});
/**
 * Groups the possible coords for the current scenario
 */
obb_rules.actions.goto$.possible_coords = (function obb_rules$actions$goto$possible_coords(board,from,target,travelled){
var temp__4423__auto__ = obb_rules.board.get_element(board,from);
if(cljs.core.truth_(temp__4423__auto__)){
var efrom = temp__4423__auto__;
return obb_rules.actions.goto$.purge(obb_rules.actions.goto$.sort_by_distance(obb_rules.actions.move.find_possible_destinations(board,efrom),from,target),travelled);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Processes a :move action for the given board
 */
obb_rules.actions.goto$.process_move = (function obb_rules$actions$goto$process_move(board,from,best,player){
var move_action = obb_rules.actions.move.build_move(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,best], null));
var G__12907 = board;
var G__12908 = player;
return (move_action.cljs$core$IFn$_invoke$arity$2 ? move_action.cljs$core$IFn$_invoke$arity$2(G__12907,G__12908) : move_action.call(null,G__12907,G__12908));
});
/**
 * Tries to find a path between two coords
 */
obb_rules.actions.goto$.find_path = (function obb_rules$actions$goto$find_path(board,player,from,target,cost,travelled,possible){
while(true){
var possible__$1 = (function (){var or__6810__auto__ = possible;
if(cljs.core.truth_(or__6810__auto__)){
return or__6810__auto__;
} else {
return obb_rules.actions.goto$.possible_coords(board,from,target,travelled);
}
})();
var best = cljs.core.first(possible__$1);
if(cljs.core.not(best)){
return obb_rules.result.action_failed.cljs$core$IFn$_invoke$arity$1("NoRouteToTarget");
} else {
var result = obb_rules.actions.goto$.process_move(board,from,best,player);
var new_board = obb_rules.result.result_board(result);
var current_cost = (cost + obb_rules.result.result_cost(result));
if((obb_rules.laws.max_action_points < current_cost)){
return obb_rules.result.action_failed.cljs$core$IFn$_invoke$arity$1("ActionPointsOverflow");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(best,target)){
return obb_rules.result.action_success.cljs$core$IFn$_invoke$arity$2(new_board,current_cost);
} else {
if(cljs.core.truth_(obb_rules.result.failed_QMARK_(result))){
return result;
} else {
var temp__4423__auto__ = obb_rules$actions$goto$find_path(new_board,player,best,target,current_cost,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(travelled,best),null);
if(cljs.core.truth_(temp__4423__auto__)){
var result__$1 = temp__4423__auto__;
return result__$1;
} else {
var G__12916 = board;
var G__12917 = player;
var G__12918 = from;
var G__12919 = target;
var G__12920 = cost;
var G__12921 = travelled;
var G__12922 = cljs.core.rest(possible__$1);
board = G__12916;
player = G__12917;
from = G__12918;
target = G__12919;
cost = G__12920;
travelled = G__12921;
possible = G__12922;
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
if(cljs.core.truth_(obb_rules.board.adjacent_QMARK_(from,target))){
var action = obb_rules.actions.move.build_move(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,target,quantity], null));
var result = (function (){var G__12925 = board;
var G__12926 = player;
return (action.cljs$core$IFn$_invoke$arity$2 ? action.cljs$core$IFn$_invoke$arity$2(G__12925,G__12926) : action.call(null,G__12925,G__12926));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("MovementTypeFail",obb_rules.result.result_message(result))){
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
var temp__4423__auto__ = obb_rules.actions.goto$.resolve_adjacent_move(board,player,from,target,quantity);
if(cljs.core.truth_(temp__4423__auto__)){
var adjacent_result = temp__4423__auto__;
return adjacent_result;
} else {
var temp__4423__auto____$1 = obb_rules.actions.goto$.find_path(board,player,from,target,(0),cljs.core.PersistentHashSet.EMPTY,null);
if(cljs.core.truth_(temp__4423__auto____$1)){
var result = temp__4423__auto____$1;
return result;
} else {
return obb_rules.result.action_failed.cljs$core$IFn$_invoke$arity$1("NoPathToTarget");
}
}
});
});
/**
 * Builds a goto action on a board
 */
obb_rules.actions.goto$.build_goto = (function obb_rules$actions$goto$build_goto(p__12927){
var vec__12929 = p__12927;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12929,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12929,(1),null);
var quantity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12929,(2),null);
return obb_rules.actions.goto$.resolve_goto(from,to,quantity);
});