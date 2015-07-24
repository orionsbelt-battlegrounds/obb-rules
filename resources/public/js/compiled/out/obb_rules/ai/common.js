// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.ai.common');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.actions.direction');
goog.require('obb_rules.math');
goog.require('obb_rules.evaluator');
goog.require('obb_rules.simplifier');
goog.require('obb_rules.element');
goog.require('obb_rules.result');
goog.require('obb_rules.unit');
goog.require('obb_rules.actions.move');
goog.require('obb_rules.game');
goog.require('obb_rules.turn');
goog.require('obb_rules.stash');
goog.require('obb_rules.laws');
/**
 * Processes an action on a game/board
 */
obb_rules.ai.common.process = (function obb_rules$ai$common$process(player,board,element,raw_action,next_element){
return obb_rules.turn.simulate_actions(board,player,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_action], null));
});
/**
 * Evaluates a board for a given player
 */
obb_rules.ai.common.eval_board = (function obb_rules$ai$common$eval_board(board,player){
var vec__13418 = obb_rules.evaluator.eval_game.cljs$core$IFn$_invoke$arity$1(board);
var score1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13418,(0),null);
var score2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13418,(1),null);
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(player,cljs.core.constant$keyword$p1))){
return (score1 - score2);
} else {
return (score2 - score1);
}
});
/**
 * Builds a result that represents a successful target
 */
obb_rules.ai.common.build_target = (function obb_rules$ai$common$build_target(player,result,raw_action,distance){
var board = obb_rules.result.result_board(result);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,cljs.core.constant$keyword$distance,distance),cljs.core.constant$keyword$actions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_action], null)),cljs.core.constant$keyword$value,obb_rules.ai.common.eval_board(board,player));
});
/**
 * Finds possible attack targets for the given element
 */
obb_rules.ai.common.find_targets = (function obb_rules$ai$common$find_targets(game,attacker,targets,current_coordinate,distance){
while(true){
var direction = obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$1(attacker);
var next_coordinate = obb_rules.actions.direction.update(direction,current_coordinate);
var next_element = obb_rules.board.get_element(game,next_coordinate);
var origin = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(attacker);
var raw_action = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$attack,origin,next_coordinate], null);
var player = obb_rules.element.element_player(attacker);
var result = obb_rules.ai.common.process(player,game,attacker,raw_action,next_element);
if((obb_rules.element.element_range(attacker) < distance)){
return targets;
} else {
if(cljs.core.truth_(obb_rules.result.failed_QMARK_(result))){
var G__13419 = game;
var G__13420 = attacker;
var G__13421 = targets;
var G__13422 = next_coordinate;
var G__13423 = ((1) + distance);
game = G__13419;
attacker = G__13420;
targets = G__13421;
current_coordinate = G__13422;
distance = G__13423;
continue;
} else {
var targets__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(targets,obb_rules.ai.common.build_target(player,result,raw_action,distance));
var G__13424 = game;
var G__13425 = attacker;
var G__13426 = targets__$1;
var G__13427 = next_coordinate;
var G__13428 = ((1) + distance);
game = G__13424;
attacker = G__13425;
targets = G__13426;
current_coordinate = G__13427;
distance = G__13428;
continue;

}
}
break;
}
});
/**
 * Returns a collection of possible options for attack
 * for the given element
 */
obb_rules.ai.common.attack_options = (function obb_rules$ai$common$attack_options(game,element){
return obb_rules.ai.common.find_targets(game,element,cljs.core.PersistentVector.EMPTY,obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(element),(1));
});
/**
 * Gets an hash with possible attack coordinates and value of the attack.
 * Thr format is {[1 1] 56}
 */
obb_rules.ai.common.find_possible_attacks = (function obb_rules$ai$common$find_possible_attacks(game,element){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (option){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.constant$keyword$actions.cljs$core$IFn$_invoke$arity$1(option)),(2)),cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1(option)], null);
}),obb_rules.ai.common.attack_options(game,element)));
});
/**
 * Adds the given actions to the start of the option's actions
 */
obb_rules.ai.common.prepend_actions = (function obb_rules$ai$common$prepend_actions(new_actions,cost,option){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(option,cljs.core.constant$keyword$actions,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new_actions,(function (){var G__13431 = cljs.core.constant$keyword$actions;
return (option.cljs$core$IFn$_invoke$arity$1 ? option.cljs$core$IFn$_invoke$arity$1(G__13431) : option.call(null,G__13431));
})())),cljs.core.constant$keyword$cost,(cost + (function (){var G__13432 = cljs.core.constant$keyword$cost;
return (option.cljs$core$IFn$_invoke$arity$1 ? option.cljs$core$IFn$_invoke$arity$1(G__13432) : option.call(null,G__13432));
})()));
});
/**
 * For a given element, rotates it and attacks
 */
obb_rules.ai.common.rotate_and_attack = (function obb_rules$ai$common$rotate_and_attack(game,element,dir){
var element__$1 = obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$2(element,dir);
var coord = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(element__$1);
var game__$1 = obb_rules.board.swap_element(game,coord,element__$1);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(obb_rules.ai.common.prepend_actions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$rotate,coord,dir], null)], null),(1)),obb_rules.ai.common.attack_options(game__$1,element__$1));
});
/**
 * Returns a collection of possible options that first rotate and then
 * attack
 */
obb_rules.ai.common.rotate_attack_options = (function obb_rules$ai$common$rotate_attack_options(game,element){
var coordinate = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(element);
var player = obb_rules.element.element_player(element);
var dirs = obb_rules.actions.direction.other(obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$1(element));
var options = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (coordinate,player,dirs){
return (function (p1__13433_SHARP_){
return cljs.core.seq(p1__13433_SHARP_);
});})(coordinate,player,dirs))
,cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(obb_rules.ai.common.rotate_and_attack,game,element),dirs)));
return options;
});
/**
 * Applies a goto the given coordinate
 */
obb_rules.ai.common.goto_result = (function obb_rules$ai$common$goto_result(game,element,player,target_coord){
var source_coord = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(element);
var action = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$goto,source_coord,target_coord], null);
var result = obb_rules.turn.simulate_actions(game,player,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,result,target_coord], null);
});
/**
 * Builds options from a result
 */
obb_rules.ai.common.build_options = (function obb_rules$ai$common$build_options(p__13434){
var vec__13436 = p__13434;
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13436,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13436,(1),null);
var target_coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13436,(2),null);
if(cljs.core.truth_(obb_rules.result.succeeded_QMARK_(result))){
var game = obb_rules.result.result_board(result);
var element = obb_rules.board.get_element(game,target_coord);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(obb_rules.ai.common.prepend_actions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null),(0)),obb_rules.ai.common.attack_options(game,element));
} else {
return null;
}
});
/**
 * True if there are any targets in range
 */
obb_rules.ai.common.targets_in_range_QMARK_ = (function obb_rules$ai$common$targets_in_range_QMARK_(game,element,coord){
return true;
});
/**
 * Tries to discard coords
 */
obb_rules.ai.common.discard_possible_coords = (function obb_rules$ai$common$discard_possible_coords(game,element,coords){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (coord){
var and__6807__auto__ = (obb_rules.board.get_element(game,coord) == null);
if(and__6807__auto__){
return obb_rules.ai.common.targets_in_range_QMARK_(game,element,coord);
} else {
return and__6807__auto__;
}
}),coords);
});
/**
 * Returns a collection of possible options that move
 * the unit by chance
 */
obb_rules.ai.common.move_options = (function obb_rules$ai$common$move_options(game,element){
var coordinate = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(element);
var unit = obb_rules.element.element_unit(element);
var mov_cost = obb_rules.unit.unit_movement_cost(unit);
var player = obb_rules.element.element_player(element);
var possible_coords = cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),cljs.core.shuffle(obb_rules.actions.move.find_possible_destinations(game,element)));
var run_results = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(obb_rules.ai.common.goto_result,game,element,player);
var actions_and_results = cljs.core.map.cljs$core$IFn$_invoke$arity$2(run_results,possible_coords);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (coordinate,unit,mov_cost,player,possible_coords,run_results,actions_and_results){
return (function (p__13439){
var vec__13440 = p__13439;
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13440,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13440,(1),null);
var target_coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13440,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,cljs.core.constant$keyword$distance,(1)),cljs.core.constant$keyword$actions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null)),cljs.core.constant$keyword$value,(-10000)),cljs.core.constant$keyword$cost,mov_cost);
});})(coordinate,unit,mov_cost,player,possible_coords,run_results,actions_and_results))
,actions_and_results);
});
/**
 * Returns a collection of possible options that first move and then
 * attack
 */
obb_rules.ai.common.move_attack_options = (function obb_rules$ai$common$move_attack_options(game,element){
var coordinate = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(element);
var player = obb_rules.element.element_player(element);
var possible_coords = obb_rules.ai.common.discard_possible_coords(game,element,obb_rules.actions.move.find_all_possible_destinations.cljs$core$IFn$_invoke$arity$2(game,element));
var run_results = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(obb_rules.ai.common.goto_result,game,element,player);
var actions_and_results = cljs.core.map.cljs$core$IFn$_invoke$arity$2(run_results,possible_coords);
var options = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(obb_rules.ai.common.build_options,actions_and_results));
return options;
});
/**
 * Sorts a collection of options based on the value
 */
obb_rules.ai.common.option_value_sorter = (function obb_rules$ai$common$option_value_sorter(option){
if(cljs.core.truth_(option)){
return (- (function (){var G__13442 = cljs.core.constant$keyword$value;
return (option.cljs$core$IFn$_invoke$arity$1 ? option.cljs$core$IFn$_invoke$arity$1(G__13442) : option.call(null,G__13442));
})());
} else {
return (0);
}
});
/**
 * Sorts a collection of options based on the value
 */
obb_rules.ai.common.option_value_cost_sorter = (function obb_rules$ai$common$option_value_cost_sorter(option){
if(cljs.core.truth_(option)){
var cost_factor = ((17) + ((100) * (obb_rules.laws.max_action_points - cljs.core.constant$keyword$cost.cljs$core$IFn$_invoke$arity$1(option))));
return (- ((function (){var G__13444 = cljs.core.constant$keyword$value;
return (option.cljs$core$IFn$_invoke$arity$1 ? option.cljs$core$IFn$_invoke$arity$1(G__13444) : option.call(null,G__13444));
})() * cost_factor));
} else {
return (0);
}
});
/**
 * Joins the given options on the given board, until the cost is possible
 */
obb_rules.ai.common.join_options = (function obb_rules$ai$common$join_options(player,master,current_option){
if(((master == null)) || ((cljs.core.constant$keyword$cost.cljs$core$IFn$_invoke$arity$1(master) >= obb_rules.laws.max_action_points)) || (((cljs.core.constant$keyword$cost.cljs$core$IFn$_invoke$arity$1(master) + cljs.core.constant$keyword$cost.cljs$core$IFn$_invoke$arity$1(current_option)) >= obb_rules.laws.max_action_points)) || ((current_option == null))){
return master;
} else {
var board = (function (){var G__13450 = cljs.core.constant$keyword$board;
return (master.cljs$core$IFn$_invoke$arity$1 ? master.cljs$core$IFn$_invoke$arity$1(G__13450) : master.call(null,G__13450));
})();
var actions = (function (){var G__13451 = cljs.core.constant$keyword$actions;
return (current_option.cljs$core$IFn$_invoke$arity$1 ? current_option.cljs$core$IFn$_invoke$arity$1(G__13451) : current_option.call(null,G__13451));
})();
var result = obb_rules.turn.simulate_actions(board,player,actions);
if(cljs.core.truth_(obb_rules.result.succeeded_QMARK_(result))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(master,cljs.core.constant$keyword$board,obb_rules.result.result_board(result)),cljs.core.constant$keyword$actions,cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__13452 = cljs.core.constant$keyword$actions;
return (master.cljs$core$IFn$_invoke$arity$1 ? master.cljs$core$IFn$_invoke$arity$1(G__13452) : master.call(null,G__13452));
})(),actions)),cljs.core.constant$keyword$cost,((function (){var G__13453 = cljs.core.constant$keyword$cost;
return (master.cljs$core$IFn$_invoke$arity$1 ? master.cljs$core$IFn$_invoke$arity$1(G__13453) : master.call(null,G__13453));
})() + (function (){var G__13454 = cljs.core.constant$keyword$cost;
return (current_option.cljs$core$IFn$_invoke$arity$1 ? current_option.cljs$core$IFn$_invoke$arity$1(G__13454) : current_option.call(null,G__13454));
})()));
} else {
return master;
}
}
});
