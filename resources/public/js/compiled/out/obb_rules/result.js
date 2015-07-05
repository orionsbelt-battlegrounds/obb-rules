// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_rules.result');
goog.require('cljs.core');
/**
 * True if the action failed
 */
obb_rules.result.succeeded_QMARK_ = (function obb_rules$result$succeeded_QMARK_(result){
return result.call(null,new cljs.core.Keyword(null,"success","success",1890645906));
});
/**
 * True if the action failed
 */
obb_rules.result.failed_QMARK_ = (function obb_rules$result$failed_QMARK_(result){
return cljs.core.not.call(null,obb_rules.result.succeeded_QMARK_.call(null,result));
});
/**
 * Gets the message of a result
 */
obb_rules.result.result_message = (function obb_rules$result$result_message(result){
return result.call(null,new cljs.core.Keyword(null,"message","message",-406056002));
});
/**
 * Gets the cost of a result
 */
obb_rules.result.result_cost = (function obb_rules$result$result_cost(result){
return result.call(null,new cljs.core.Keyword(null,"cost","cost",-1094861735));
});
/**
 * Gets the board of a result
 */
obb_rules.result.result_board = (function obb_rules$result$result_board(result){
return result.call(null,new cljs.core.Keyword(null,"board","board",-1907017633));
});
/**
 * Gets additional information
 */
obb_rules.result.info = (function obb_rules$result$info(result){
return result.call(null,new cljs.core.Keyword(null,"info","info",-317069002));
});
/**
 * Represents the result of an action
 */
obb_rules.result.action_result = (function obb_rules$result$action_result(success_QMARK_,resulting_board,cost,message,info){
var base = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"success","success",1890645906),success_QMARK_,new cljs.core.Keyword(null,"cost","cost",-1094861735),cost,new cljs.core.Keyword(null,"message","message",-406056002),message], null);
var base_with_board = (cljs.core.truth_(resulting_board)?cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"board","board",-1907017633),resulting_board):base);
var base_with_info = (cljs.core.truth_(info)?cljs.core.assoc.call(null,base_with_board,new cljs.core.Keyword(null,"info","info",-317069002),info):base_with_board);
return base_with_info;
});
/**
 * Represents a successful action
 */
obb_rules.result.action_success = (function obb_rules$result$action_success(){
var G__23086 = arguments.length;
switch (G__23086) {
case 2:
return obb_rules.result.action_success.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return obb_rules.result.action_success.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return obb_rules.result.action_success.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

obb_rules.result.action_success.cljs$core$IFn$_invoke$arity$2 = (function (resulting_board,cost){
return obb_rules.result.action_success.call(null,resulting_board,cost,"OK");
});

obb_rules.result.action_success.cljs$core$IFn$_invoke$arity$3 = (function (resulting_board,cost,message){
return obb_rules.result.action_success.call(null,resulting_board,cost,message,null);
});

obb_rules.result.action_success.cljs$core$IFn$_invoke$arity$4 = (function (resulting_board,cost,message,info){
return obb_rules.result.action_result.call(null,true,resulting_board,cost,message,info);
});

obb_rules.result.action_success.cljs$lang$maxFixedArity = 4;
/**
 * Represents an unsuccessful action
 */
obb_rules.result.action_failed = (function obb_rules$result$action_failed(){
var G__23089 = arguments.length;
switch (G__23089) {
case 1:
return obb_rules.result.action_failed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.result.action_failed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

obb_rules.result.action_failed.cljs$core$IFn$_invoke$arity$1 = (function (message){
return obb_rules.result.action_result.call(null,false,null,(0),message,null);
});

obb_rules.result.action_failed.cljs$core$IFn$_invoke$arity$2 = (function (message,game){
return obb_rules.result.action_result.call(null,false,game,(0),message,null);
});

obb_rules.result.action_failed.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=result.js.map?rel=1436104824011