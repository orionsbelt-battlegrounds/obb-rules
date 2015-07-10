// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_rules.ai.common');
goog.require('cljs.core');
goog.require('obb_rules.board');
goog.require('obb_rules.actions.direction');
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
 * Evaluates a board for a given player
 */
obb_rules.ai.common.eval_board = (function obb_rules$ai$common$eval_board(board,player){
var vec__33162 = obb_rules.evaluator.eval_game.call(null,board);
var score1 = cljs.core.nth.call(null,vec__33162,(0),null);
var score2 = cljs.core.nth.call(null,vec__33162,(1),null);
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_.call(null,player,new cljs.core.Keyword(null,"p1","p1",-936759954)))){
return (score1 - score2);
} else {
return (score2 - score1);
}
});
/**
 * Builds a result that represents a successful target
 */
obb_rules.ai.common.build_target = (function obb_rules$ai$common$build_target(player,result,raw_action,distance){
var board = obb_rules.result.result_board.call(null,result);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,result,new cljs.core.Keyword(null,"distance","distance",-1671893894),distance),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_action], null)),new cljs.core.Keyword(null,"value","value",305978217),obb_rules.ai.common.eval_board.call(null,board,player));
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
var G__33163 = game;
var G__33164 = attacker;
var G__33165 = targets;
var G__33166 = next_coordinate;
var G__33167 = ((1) + distance);
game = G__33163;
attacker = G__33164;
targets = G__33165;
current_coordinate = G__33166;
distance = G__33167;
continue;
} else {
var targets__$1 = cljs.core.conj.call(null,targets,obb_rules.ai.common.build_target.call(null,player,result,raw_action,distance));
var G__33168 = game;
var G__33169 = attacker;
var G__33170 = targets__$1;
var G__33171 = next_coordinate;
var G__33172 = ((1) + distance);
game = G__33168;
attacker = G__33169;
targets = G__33170;
current_coordinate = G__33171;
distance = G__33172;
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
return obb_rules.ai.common.find_targets.call(null,game,element,cljs.core.PersistentVector.EMPTY,obb_rules.element.element_coordinate.call(null,element),(1));
});
/**
 * Adds the given actions to the start of the option's actions
 */
obb_rules.ai.common.prepend_actions = (function obb_rules$ai$common$prepend_actions(new_actions,cost,option){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,option,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.into.call(null,new_actions,option.call(null,new cljs.core.Keyword(null,"actions","actions",-812656882)))),new cljs.core.Keyword(null,"cost","cost",-1094861735),(cost + option.call(null,new cljs.core.Keyword(null,"cost","cost",-1094861735))));
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
 * attack
 */
obb_rules.ai.common.rotate_attack_options = (function obb_rules$ai$common$rotate_attack_options(game,element){
var coordinate = obb_rules.element.element_coordinate.call(null,element);
var player = obb_rules.element.element_player.call(null,element);
var dirs = obb_rules.actions.direction.other.call(null,obb_rules.element.element_direction.call(null,element));
var options = cljs.core.filter.call(null,((function (coordinate,player,dirs){
return (function (p1__33173_SHARP_){
return cljs.core.seq.call(null,p1__33173_SHARP_);
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
obb_rules.ai.common.build_options = (function obb_rules$ai$common$build_options(p__33174){
var vec__33176 = p__33174;
var action = cljs.core.nth.call(null,vec__33176,(0),null);
var result = cljs.core.nth.call(null,vec__33176,(1),null);
var target_coord = cljs.core.nth.call(null,vec__33176,(2),null);
if(cljs.core.truth_(obb_rules.result.succeeded_QMARK_.call(null,result))){
var game = obb_rules.result.result_board.call(null,result);
var element = obb_rules.board.get_element.call(null,game,target_coord);
return cljs.core.map.call(null,cljs.core.partial.call(null,obb_rules.ai.common.prepend_actions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null),obb_rules.result.result_cost.call(null,result)),obb_rules.ai.common.attack_options.call(null,game,element));
} else {
return null;
}
});
/**
 * Predicate that returns true if an option has a positive value
 */
obb_rules.ai.common.valuable_options = (function obb_rules$ai$common$valuable_options(option){
var and__16097__auto__ = option;
if(cljs.core.truth_(and__16097__auto__)){
return ((0) < option.call(null,new cljs.core.Keyword(null,"value","value",305978217)));
} else {
return and__16097__auto__;
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
var and__16097__auto__ = (obb_rules.board.get_element.call(null,game,coord) == null);
if(and__16097__auto__){
return obb_rules.ai.common.targets_in_range_QMARK_.call(null,game,element,coord);
} else {
return and__16097__auto__;
}
}),coords);
});
/**
 * Returns a collection of possible options that first move and then
 * attack
 */
obb_rules.ai.common.move_attack_options = (function obb_rules$ai$common$move_attack_options(game,element){
var coordinate = obb_rules.element.element_coordinate.call(null,element);
var player = obb_rules.element.element_player.call(null,element);
var possible_coords = obb_rules.ai.common.discard_possible_coords.call(null,game,element,obb_rules.actions.move.find_all_possible_destinations.call(null,game,element));
var run_results = cljs.core.partial.call(null,obb_rules.ai.common.goto_result,game,element,player);
var actions_and_results = cljs.core.map.call(null,run_results,possible_coords);
var options = cljs.core.filter.call(null,obb_rules.ai.common.valuable_options,cljs.core.flatten.call(null,cljs.core.map.call(null,obb_rules.ai.common.build_options,actions_and_results)));
return options;
});
/**
 * Sorts a collection of options based on the value
 */
obb_rules.ai.common.option_value_sorter = (function obb_rules$ai$common$option_value_sorter(option){
if(cljs.core.truth_(option)){
return (- option.call(null,new cljs.core.Keyword(null,"value","value",305978217)));
} else {
return (0);
}
});
/**
 * Joins the given options on the given board, until the cost is possible
 */
obb_rules.ai.common.join_options = (function obb_rules$ai$common$join_options(player,master,current_option){
if(((master == null)) || ((master.call(null,new cljs.core.Keyword(null,"cost","cost",-1094861735)) >= obb_rules.laws.max_action_points)) || ((current_option == null))){
return master;
} else {
var board = master.call(null,new cljs.core.Keyword(null,"board","board",-1907017633));
var actions = current_option.call(null,new cljs.core.Keyword(null,"actions","actions",-812656882));
var result = obb_rules.turn.simulate_actions.call(null,board,player,actions);
if(cljs.core.truth_(obb_rules.result.succeeded_QMARK_.call(null,result))){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,master,new cljs.core.Keyword(null,"board","board",-1907017633),obb_rules.result.result_board.call(null,result)),new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.into.call(null,master.call(null,new cljs.core.Keyword(null,"actions","actions",-812656882)),actions)),new cljs.core.Keyword(null,"cost","cost",-1094861735),(master.call(null,new cljs.core.Keyword(null,"cost","cost",-1094861735)) + current_option.call(null,new cljs.core.Keyword(null,"cost","cost",-1094861735))));
} else {
return master;
}
}
});

//# sourceMappingURL=common.js.map?rel=1436517557752