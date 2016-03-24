// Compiled by ClojureScript 1.7.228 {}
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
return obb_rules.turn.simulate_actions.call(null,board,player,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_action], null));
});
/**
 * Evaluates the socres of p1 and p2
 */
obb_rules.ai.common.eval_scores = (function obb_rules$ai$common$eval_scores(player,p__41802){
var vec__41804 = p__41802;
var score1 = cljs.core.nth.call(null,vec__41804,(0),null);
var score2 = cljs.core.nth.call(null,vec__41804,(1),null);
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_.call(null,player,new cljs.core.Keyword(null,"p1","p1",-936759954)))){
return (score1 - score2);
} else {
return (score2 - score1);
}
});
/**
 * Evaluates a board for a given player
 */
obb_rules.ai.common.eval_board = (function obb_rules$ai$common$eval_board(board,player){
var scores = obb_rules.evaluator.eval_game.call(null,board);
return obb_rules.ai.common.eval_scores.call(null,player,scores);
});
/**
 * Builds a result that represents a successful target
 */
obb_rules.ai.common.build_target = (function obb_rules$ai$common$build_target(player,result,raw_action,distance){
var board = obb_rules.result.result_board.call(null,result);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,result,new cljs.core.Keyword(null,"distance","distance",-1671893894),distance),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_action], null)),new cljs.core.Keyword(null,"element-coord","element-coord",1911215117),cljs.core.nth.call(null,raw_action,(1))),new cljs.core.Keyword(null,"value","value",305978217),obb_rules.ai.common.eval_board.call(null,board,player));
});
/**
 * Finds possible attack targets for the given element
 */
obb_rules.ai.common.find_targets = (function obb_rules$ai$common$find_targets(game,attacker,targets,current_coordinate,distance){
while(true){
var direction = obb_rules.element.element_direction.call(null,attacker);
var next_coordinate = obb_rules.actions.direction.update.call(null,direction,current_coordinate);
var next_element = obb_rules.board.get_element.call(null,game,next_coordinate);
var origin = obb_rules.element.element_coordinate.call(null,attacker);
var raw_action = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attack","attack",1957061788),origin,next_coordinate], null);
var player = obb_rules.element.element_player.call(null,attacker);
var result = obb_rules.ai.common.process.call(null,player,game,attacker,raw_action,next_element);
if((obb_rules.element.element_range.call(null,attacker) < distance)){
return targets;
} else {
if(cljs.core.truth_(obb_rules.result.failed_QMARK_.call(null,result))){
var G__41805 = game;
var G__41806 = attacker;
var G__41807 = targets;
var G__41808 = next_coordinate;
var G__41809 = ((1) + distance);
game = G__41805;
attacker = G__41806;
targets = G__41807;
current_coordinate = G__41808;
distance = G__41809;
continue;
} else {
var targets__$1 = cljs.core.conj.call(null,targets,obb_rules.ai.common.build_target.call(null,player,result,raw_action,distance));
var G__41810 = game;
var G__41811 = attacker;
var G__41812 = targets__$1;
var G__41813 = next_coordinate;
var G__41814 = ((1) + distance);
game = G__41810;
attacker = G__41811;
targets = G__41812;
current_coordinate = G__41813;
distance = G__41814;
continue;

}
}
break;
}
});
/**
 * Returns a collection of possible options for attack
 *   for the given element
 */
obb_rules.ai.common.attack_options = (function obb_rules$ai$common$attack_options(game,element){
return obb_rules.ai.common.find_targets.call(null,game,element,cljs.core.PersistentVector.EMPTY,obb_rules.element.element_coordinate.call(null,element),(1));
});
/**
 * Gets an hash with possible attack coordinates and value of the attack.
 *   Thr format is {[1 1] 56}
 */
obb_rules.ai.common.find_possible_attacks = (function obb_rules$ai$common$find_possible_attacks(game,element){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (option){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(option)),(2)),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(option)], null);
}),obb_rules.ai.common.attack_options.call(null,game,element)));
});
/**
 * Adds the given actions to the start of the option's actions
 */
obb_rules.ai.common.prepend_actions = (function obb_rules$ai$common$prepend_actions(new_actions,cost,option){
var new_cost = (cost + option.call(null,new cljs.core.Keyword(null,"cost","cost",-1094861735)));
if((obb_rules.laws.max_action_points >= new_cost)){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,option,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.into.call(null,new_actions,option.call(null,new cljs.core.Keyword(null,"actions","actions",-812656882)))),new cljs.core.Keyword(null,"cost","cost",-1094861735),new_cost);
} else {
return null;
}
});
/**
 * For a given element, rotates it and attacks
 */
obb_rules.ai.common.rotate_and_attack = (function obb_rules$ai$common$rotate_and_attack(game,element,dir){
var element__$1 = obb_rules.element.element_direction.call(null,element,dir);
var coord = obb_rules.element.element_coordinate.call(null,element__$1);
var game__$1 = obb_rules.board.swap_element.call(null,game,coord,element__$1);
return cljs.core.map.call(null,cljs.core.partial.call(null,obb_rules.ai.common.prepend_actions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),coord,dir], null)], null),(1)),obb_rules.ai.common.attack_options.call(null,game__$1,element__$1));
});
/**
 * Returns a collection of possible options that first rotate and then
 *   attack
 */
obb_rules.ai.common.rotate_attack_options = (function obb_rules$ai$common$rotate_attack_options(game,element){
var coordinate = obb_rules.element.element_coordinate.call(null,element);
var player = obb_rules.element.element_player.call(null,element);
var dirs = obb_rules.actions.direction.other.call(null,obb_rules.element.element_direction.call(null,element));
var options = cljs.core.filter.call(null,((function (coordinate,player,dirs){
return (function (p1__41815_SHARP_){
return cljs.core.seq.call(null,p1__41815_SHARP_);
});})(coordinate,player,dirs))
,cljs.core.flatten.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,obb_rules.ai.common.rotate_and_attack,game,element),dirs)));
return options;
});
/**
 * Applies a goto the given coordinate
 */
obb_rules.ai.common.goto_result = (function obb_rules$ai$common$goto_result(game,element,player,target_coord){
var source_coord = obb_rules.element.element_coordinate.call(null,element);
var action = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"goto","goto",80149757),source_coord,target_coord], null);
var result = obb_rules.turn.simulate_actions.call(null,game,player,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,result,target_coord], null);
});
/**
 * Builds options from a result
 */
obb_rules.ai.common.build_options = (function obb_rules$ai$common$build_options(p__41816){
var vec__41818 = p__41816;
var action = cljs.core.nth.call(null,vec__41818,(0),null);
var result = cljs.core.nth.call(null,vec__41818,(1),null);
var target_coord = cljs.core.nth.call(null,vec__41818,(2),null);
if(cljs.core.truth_(obb_rules.result.succeeded_QMARK_.call(null,result))){
var previous_cost = new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(result);
var game = obb_rules.result.result_board.call(null,result);
var element = obb_rules.board.get_element.call(null,game,target_coord);
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,obb_rules.ai.common.prepend_actions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null),(0)),obb_rules.ai.common.rotate_attack_options.call(null,game,element)),cljs.core.map.call(null,cljs.core.partial.call(null,obb_rules.ai.common.prepend_actions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null),(0)),obb_rules.ai.common.attack_options.call(null,game,element)));
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
return cljs.core.filter.call(null,(function (coord){
var and__18358__auto__ = (obb_rules.board.get_element.call(null,game,coord) == null);
if(and__18358__auto__){
return obb_rules.ai.common.targets_in_range_QMARK_.call(null,game,element,coord);
} else {
return and__18358__auto__;
}
}),coords);
});
/**
 * Returns a collection of possible options that move
 *   the unit by chance
 */
obb_rules.ai.common.move_options = (function obb_rules$ai$common$move_options(var_args){
var args41819 = [];
var len__19428__auto___41824 = arguments.length;
var i__19429__auto___41825 = (0);
while(true){
if((i__19429__auto___41825 < len__19428__auto___41824)){
args41819.push((arguments[i__19429__auto___41825]));

var G__41826 = (i__19429__auto___41825 + (1));
i__19429__auto___41825 = G__41826;
continue;
} else {
}
break;
}

var G__41821 = args41819.length;
switch (G__41821) {
case 2:
return obb_rules.ai.common.move_options.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return obb_rules.ai.common.move_options.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41819.length)].join('')));

}
});

obb_rules.ai.common.move_options.cljs$core$IFn$_invoke$arity$2 = (function (game,element){
return obb_rules.ai.common.move_options.call(null,game,element,(-10000000),(1));
});

obb_rules.ai.common.move_options.cljs$core$IFn$_invoke$arity$4 = (function (game,element,value,max_options){
var coordinate = obb_rules.element.element_coordinate.call(null,element);
var unit = obb_rules.element.element_unit.call(null,element);
var mov_cost = obb_rules.unit.unit_movement_cost.call(null,unit);
var player = obb_rules.element.element_player.call(null,element);
var possible_coords = cljs.core.take.call(null,(1),cljs.core.shuffle.call(null,obb_rules.actions.move.find_possible_destinations.call(null,game,element)));
var run_results = cljs.core.partial.call(null,obb_rules.ai.common.goto_result,game,element,player);
var actions_and_results = cljs.core.map.call(null,run_results,possible_coords);
return cljs.core.map.call(null,((function (coordinate,unit,mov_cost,player,possible_coords,run_results,actions_and_results){
return (function (p__41822){
var vec__41823 = p__41822;
var action = cljs.core.nth.call(null,vec__41823,(0),null);
var result = cljs.core.nth.call(null,vec__41823,(1),null);
var target_coord = cljs.core.nth.call(null,vec__41823,(2),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,result,new cljs.core.Keyword(null,"distance","distance",-1671893894),(1)),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null)),new cljs.core.Keyword(null,"value","value",305978217),value),new cljs.core.Keyword(null,"dummy","dummy",2059765854),true),new cljs.core.Keyword(null,"element-coord","element-coord",1911215117),target_coord),new cljs.core.Keyword(null,"cost","cost",-1094861735),mov_cost);
});})(coordinate,unit,mov_cost,player,possible_coords,run_results,actions_and_results))
,actions_and_results);
});

obb_rules.ai.common.move_options.cljs$lang$maxFixedArity = 4;
/**
 * Returns a collection of possible options that first move and then
 *   attack
 */
obb_rules.ai.common.move_attack_options = (function obb_rules$ai$common$move_attack_options(game,element){
var coordinate = obb_rules.element.element_coordinate.call(null,element);
var player = obb_rules.element.element_player.call(null,element);
var possible_coords = obb_rules.ai.common.discard_possible_coords.call(null,game,element,obb_rules.actions.move.find_all_possible_destinations.call(null,game,element));
var run_results = cljs.core.partial.call(null,obb_rules.ai.common.goto_result,game,element,player);
var actions_and_results = cljs.core.map.call(null,run_results,possible_coords);
var options = cljs.core.flatten.call(null,cljs.core.map.call(null,obb_rules.ai.common.build_options,actions_and_results));
return options;
});
/**
 * Sorts a collection of options based on the value
 */
obb_rules.ai.common.option_value_sorter = (function obb_rules$ai$common$option_value_sorter(option){
if(cljs.core.truth_(option)){
var cost_factor = ((obb_rules.laws.max_action_points - new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(option)) / (10));
return (- (option.call(null,new cljs.core.Keyword(null,"value","value",305978217)) + cost_factor));
} else {
return (0);
}
});
/**
 * Sorts a collection of options based on the value
 */
obb_rules.ai.common.option_value_cost_sorter = (function obb_rules$ai$common$option_value_cost_sorter(option){
if(cljs.core.truth_(option)){
var cost_factor = ((17) + ((100) * (obb_rules.laws.max_action_points - new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(option))));
return (- (option.call(null,new cljs.core.Keyword(null,"value","value",305978217)) * cost_factor));
} else {
return (0);
}
});
/**
 * Gets the value of the option, considering that the option will me merged
 *   with another option.
 */
obb_rules.ai.common.value_for_join = (function obb_rules$ai$common$value_for_join(current_option){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dummy","dummy",2059765854).cljs$core$IFn$_invoke$arity$1(current_option))){
return (0);
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(current_option);
}
});
/**
 * Joins the given options on the given board, until the cost is possible
 */
obb_rules.ai.common.join_options = (function obb_rules$ai$common$join_options(player,master,current_option){
if(((master == null)) || ((new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(master) >= obb_rules.laws.max_action_points))){
return cljs.core.reduced.call(null,master);
} else {
if(((current_option == null)) || (((new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(master) + new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(current_option)) > obb_rules.laws.max_action_points))){
return master;
} else {
var board = master.call(null,new cljs.core.Keyword(null,"board","board",-1907017633));
var actions = current_option.call(null,new cljs.core.Keyword(null,"actions","actions",-812656882));
var result = obb_rules.turn.simulate_actions.call(null,board,player,actions);
if(cljs.core.truth_(obb_rules.result.succeeded_QMARK_.call(null,result))){
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,master,new cljs.core.Keyword(null,"board","board",-1907017633),obb_rules.result.result_board.call(null,result)),new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.into.call(null,master.call(null,new cljs.core.Keyword(null,"actions","actions",-812656882)),actions)),new cljs.core.Keyword(null,"value","value",305978217),cljs.core._PLUS_,obb_rules.ai.common.value_for_join.call(null,current_option)),new cljs.core.Keyword(null,"cost","cost",-1094861735),(master.call(null,new cljs.core.Keyword(null,"cost","cost",-1094861735)) + current_option.call(null,new cljs.core.Keyword(null,"cost","cost",-1094861735))));
} else {
return master;
}
}
}
});

//# sourceMappingURL=common.js.map?rel=1458852293679