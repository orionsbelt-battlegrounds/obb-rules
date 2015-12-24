// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
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
return obb_rules.turn.simulate_actions.cljs$core$IFn$_invoke$arity$3(board,player,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_action], null));
});
/**
 * Evaluates the socres of p1 and p2
 */
obb_rules.ai.common.eval_scores = (function obb_rules$ai$common$eval_scores(player,p__10648){
var vec__10650 = p__10648;
var score1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10650,(0),null);
var score2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10650,(1),null);
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(player,cljs.core.cst$kw$p1))){
return (score1 - score2);
} else {
return (score2 - score1);
}
});
/**
 * Evaluates a board for a given player
 */
obb_rules.ai.common.eval_board = (function obb_rules$ai$common$eval_board(board,player){
var scores = obb_rules.evaluator.eval_game.cljs$core$IFn$_invoke$arity$1(board);
return obb_rules.ai.common.eval_scores(player,scores);
});
/**
 * Builds a result that represents a successful target
 */
obb_rules.ai.common.build_target = (function obb_rules$ai$common$build_target(player,result,raw_action,distance){
var board = obb_rules.result.result_board(result);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,cljs.core.cst$kw$distance,distance),cljs.core.cst$kw$actions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_action], null)),cljs.core.cst$kw$element_DASH_coord,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(raw_action,(1))),cljs.core.cst$kw$value,obb_rules.ai.common.eval_board(board,player));
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
var raw_action = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attack,origin,next_coordinate], null);
var player = obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(attacker);
var result = obb_rules.ai.common.process(player,game,attacker,raw_action,next_element);
if((obb_rules.element.element_range(attacker) < distance)){
return targets;
} else {
if(cljs.core.truth_(obb_rules.result.failed_QMARK_(result))){
var G__10651 = game;
var G__10652 = attacker;
var G__10653 = targets;
var G__10654 = next_coordinate;
var G__10655 = ((1) + distance);
game = G__10651;
attacker = G__10652;
targets = G__10653;
current_coordinate = G__10654;
distance = G__10655;
continue;
} else {
var targets__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(targets,obb_rules.ai.common.build_target(player,result,raw_action,distance));
var G__10656 = game;
var G__10657 = attacker;
var G__10658 = targets__$1;
var G__10659 = next_coordinate;
var G__10660 = ((1) + distance);
game = G__10656;
attacker = G__10657;
targets = G__10658;
current_coordinate = G__10659;
distance = G__10660;
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.cst$kw$actions.cljs$core$IFn$_invoke$arity$1(option)),(2)),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(option)], null);
}),obb_rules.ai.common.attack_options(game,element)));
});
/**
 * Adds the given actions to the start of the option's actions
 */
obb_rules.ai.common.prepend_actions = (function obb_rules$ai$common$prepend_actions(new_actions,cost,option){
var new_cost = (cost + (option.cljs$core$IFn$_invoke$arity$1 ? option.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$cost) : option.call(null,cljs.core.cst$kw$cost)));
if((obb_rules.laws.max_action_points >= new_cost)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(option,cljs.core.cst$kw$actions,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new_actions,(option.cljs$core$IFn$_invoke$arity$1 ? option.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$actions) : option.call(null,cljs.core.cst$kw$actions)))),cljs.core.cst$kw$cost,new_cost);
} else {
return null;
}
});
/**
 * For a given element, rotates it and attacks
 */
obb_rules.ai.common.rotate_and_attack = (function obb_rules$ai$common$rotate_and_attack(game,element,dir){
var element__$1 = obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$2(element,dir);
var coord = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(element__$1);
var game__$1 = obb_rules.board.swap_element(game,coord,element__$1);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(obb_rules.ai.common.prepend_actions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rotate,coord,dir], null)], null),(1)),obb_rules.ai.common.attack_options(game__$1,element__$1));
});
/**
 * Returns a collection of possible options that first rotate and then
 * attack
 */
obb_rules.ai.common.rotate_attack_options = (function obb_rules$ai$common$rotate_attack_options(game,element){
var coordinate = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(element);
var player = obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(element);
var dirs = obb_rules.actions.direction.other(obb_rules.element.element_direction.cljs$core$IFn$_invoke$arity$1(element));
var options = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (coordinate,player,dirs){
return (function (p1__10661_SHARP_){
return cljs.core.seq(p1__10661_SHARP_);
});})(coordinate,player,dirs))
,cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(obb_rules.ai.common.rotate_and_attack,game,element),dirs)));
return options;
});
/**
 * Applies a goto the given coordinate
 */
obb_rules.ai.common.goto_result = (function obb_rules$ai$common$goto_result(game,element,player,target_coord){
var source_coord = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(element);
var action = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$goto,source_coord,target_coord], null);
var result = obb_rules.turn.simulate_actions.cljs$core$IFn$_invoke$arity$3(game,player,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,result,target_coord], null);
});
/**
 * Builds options from a result
 */
obb_rules.ai.common.build_options = (function obb_rules$ai$common$build_options(p__10662){
var vec__10664 = p__10662;
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10664,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10664,(1),null);
var target_coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10664,(2),null);
if(cljs.core.truth_(obb_rules.result.succeeded_QMARK_(result))){
var previous_cost = cljs.core.cst$kw$cost.cljs$core$IFn$_invoke$arity$1(result);
var game = obb_rules.result.result_board(result);
var element = obb_rules.board.get_element(game,target_coord);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(obb_rules.ai.common.prepend_actions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null),(0)),obb_rules.ai.common.rotate_attack_options(game,element)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(obb_rules.ai.common.prepend_actions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null),(0)),obb_rules.ai.common.attack_options(game,element)));
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
var and__7216__auto__ = (obb_rules.board.get_element(game,coord) == null);
if(and__7216__auto__){
return obb_rules.ai.common.targets_in_range_QMARK_(game,element,coord);
} else {
return and__7216__auto__;
}
}),coords);
});
/**
 * Returns a collection of possible options that move
 * the unit by chance
 */
obb_rules.ai.common.move_options = (function obb_rules$ai$common$move_options(){
var args10665 = [];
var len__8267__auto___10670 = arguments.length;
var i__8268__auto___10671 = (0);
while(true){
if((i__8268__auto___10671 < len__8267__auto___10670)){
args10665.push((arguments[i__8268__auto___10671]));

var G__10672 = (i__8268__auto___10671 + (1));
i__8268__auto___10671 = G__10672;
continue;
} else {
}
break;
}

var G__10667 = args10665.length;
switch (G__10667) {
case 2:
return obb_rules.ai.common.move_options.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return obb_rules.ai.common.move_options.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10665.length)].join('')));

}
});

obb_rules.ai.common.move_options.cljs$core$IFn$_invoke$arity$2 = (function (game,element){
return obb_rules.ai.common.move_options.cljs$core$IFn$_invoke$arity$4(game,element,(-1000),(1));
});

obb_rules.ai.common.move_options.cljs$core$IFn$_invoke$arity$4 = (function (game,element,value,max_options){
var coordinate = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(element);
var unit = obb_rules.element.element_unit(element);
var mov_cost = obb_rules.unit.unit_movement_cost(unit);
var player = obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(element);
var possible_coords = cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),cljs.core.shuffle(obb_rules.actions.move.find_possible_destinations(game,element)));
var run_results = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(obb_rules.ai.common.goto_result,game,element,player);
var actions_and_results = cljs.core.map.cljs$core$IFn$_invoke$arity$2(run_results,possible_coords);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (coordinate,unit,mov_cost,player,possible_coords,run_results,actions_and_results){
return (function (p__10668){
var vec__10669 = p__10668;
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10669,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10669,(1),null);
var target_coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10669,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,cljs.core.cst$kw$distance,(1)),cljs.core.cst$kw$actions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null)),cljs.core.cst$kw$value,value),cljs.core.cst$kw$element_DASH_coord,target_coord),cljs.core.cst$kw$cost,mov_cost);
});})(coordinate,unit,mov_cost,player,possible_coords,run_results,actions_and_results))
,actions_and_results);
});

obb_rules.ai.common.move_options.cljs$lang$maxFixedArity = 4;
/**
 * Returns a collection of possible options that first move and then
 * attack
 */
obb_rules.ai.common.move_attack_options = (function obb_rules$ai$common$move_attack_options(game,element){
var coordinate = obb_rules.element.element_coordinate.cljs$core$IFn$_invoke$arity$1(element);
var player = obb_rules.element.element_player.cljs$core$IFn$_invoke$arity$1(element);
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
var cost_factor = ((obb_rules.laws.max_action_points - cljs.core.cst$kw$cost.cljs$core$IFn$_invoke$arity$1(option)) / (10));
return (- ((option.cljs$core$IFn$_invoke$arity$1 ? option.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$value) : option.call(null,cljs.core.cst$kw$value)) + cost_factor));
} else {
return (0);
}
});
/**
 * Sorts a collection of options based on the value
 */
obb_rules.ai.common.option_value_cost_sorter = (function obb_rules$ai$common$option_value_cost_sorter(option){
if(cljs.core.truth_(option)){
var cost_factor = ((17) + ((100) * (obb_rules.laws.max_action_points - cljs.core.cst$kw$cost.cljs$core$IFn$_invoke$arity$1(option))));
return (- ((option.cljs$core$IFn$_invoke$arity$1 ? option.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$value) : option.call(null,cljs.core.cst$kw$value)) * cost_factor));
} else {
return (0);
}
});
/**
 * Joins the given options on the given board, until the cost is possible
 */
obb_rules.ai.common.join_options = (function obb_rules$ai$common$join_options(player,master,current_option){
if(((master == null)) || ((cljs.core.cst$kw$cost.cljs$core$IFn$_invoke$arity$1(master) >= obb_rules.laws.max_action_points))){
return cljs.core.reduced(master);
} else {
if(((current_option == null)) || (((cljs.core.cst$kw$cost.cljs$core$IFn$_invoke$arity$1(master) + cljs.core.cst$kw$cost.cljs$core$IFn$_invoke$arity$1(current_option)) > obb_rules.laws.max_action_points))){
return master;
} else {
var board = (master.cljs$core$IFn$_invoke$arity$1 ? master.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$board) : master.call(null,cljs.core.cst$kw$board));
var actions = (current_option.cljs$core$IFn$_invoke$arity$1 ? current_option.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$actions) : current_option.call(null,cljs.core.cst$kw$actions));
var result = obb_rules.turn.simulate_actions.cljs$core$IFn$_invoke$arity$3(board,player,actions);
if(cljs.core.truth_(obb_rules.result.succeeded_QMARK_(result))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(master,cljs.core.cst$kw$board,obb_rules.result.result_board(result)),cljs.core.cst$kw$actions,cljs.core.into.cljs$core$IFn$_invoke$arity$2((master.cljs$core$IFn$_invoke$arity$1 ? master.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$actions) : master.call(null,cljs.core.cst$kw$actions)),actions)),cljs.core.cst$kw$cost,((master.cljs$core$IFn$_invoke$arity$1 ? master.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$cost) : master.call(null,cljs.core.cst$kw$cost)) + (current_option.cljs$core$IFn$_invoke$arity$1 ? current_option.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$cost) : current_option.call(null,cljs.core.cst$kw$cost))));
} else {
return master;
}
}
}
});
