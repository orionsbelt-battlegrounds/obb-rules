// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.result');
goog.require('cljs.core');
/**
 * True if the action failed
 */
obb_rules.result.succeeded_QMARK_ = (function obb_rules$result$succeeded_QMARK_(result){
return (result.cljs$core$IFn$_invoke$arity$1 ? result.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$success) : result.call(null,cljs.core.constant$keyword$success));
});
/**
 * True if the action failed
 */
obb_rules.result.failed_QMARK_ = (function obb_rules$result$failed_QMARK_(result){
return cljs.core.not(obb_rules.result.succeeded_QMARK_(result));
});
/**
 * Gets the message of a result
 */
obb_rules.result.result_message = (function obb_rules$result$result_message(result){
return (result.cljs$core$IFn$_invoke$arity$1 ? result.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$message) : result.call(null,cljs.core.constant$keyword$message));
});
/**
 * Gets the cost of a result
 */
obb_rules.result.result_cost = (function obb_rules$result$result_cost(result){
return (result.cljs$core$IFn$_invoke$arity$1 ? result.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$cost) : result.call(null,cljs.core.constant$keyword$cost));
});
/**
 * Gets the board of a result
 */
obb_rules.result.result_board = (function obb_rules$result$result_board(result){
return (result.cljs$core$IFn$_invoke$arity$1 ? result.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$board) : result.call(null,cljs.core.constant$keyword$board));
});
/**
 * Gets additional information
 */
obb_rules.result.info = (function obb_rules$result$info(result){
return (result.cljs$core$IFn$_invoke$arity$1 ? result.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$info) : result.call(null,cljs.core.constant$keyword$info));
});
/**
 * Represents the result of an action
 */
obb_rules.result.action_result = (function obb_rules$result$action_result(success_QMARK_,resulting_board,cost,message,info){
var base = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$success,success_QMARK_,cljs.core.constant$keyword$cost,cost,cljs.core.constant$keyword$message,message], null);
var base_with_board = (cljs.core.truth_(resulting_board)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base,cljs.core.constant$keyword$board,resulting_board):base);
var base_with_info = (cljs.core.truth_(info)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base_with_board,cljs.core.constant$keyword$info,info):base_with_board);
return base_with_info;
});
/**
 * Represents a successful action
 */
obb_rules.result.action_success = (function obb_rules$result$action_success(){
var args10170 = [];
var len__8231__auto___10173 = arguments.length;
var i__8232__auto___10174 = (0);
while(true){
if((i__8232__auto___10174 < len__8231__auto___10173)){
args10170.push((arguments[i__8232__auto___10174]));

var G__10175 = (i__8232__auto___10174 + (1));
i__8232__auto___10174 = G__10175;
continue;
} else {
}
break;
}

var G__10172 = args10170.length;
switch (G__10172) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10170.length)].join('')));

}
});

obb_rules.result.action_success.cljs$core$IFn$_invoke$arity$2 = (function (resulting_board,cost){
return obb_rules.result.action_success.cljs$core$IFn$_invoke$arity$3(resulting_board,cost,"OK");
});

obb_rules.result.action_success.cljs$core$IFn$_invoke$arity$3 = (function (resulting_board,cost,message){
return obb_rules.result.action_success.cljs$core$IFn$_invoke$arity$4(resulting_board,cost,message,null);
});

obb_rules.result.action_success.cljs$core$IFn$_invoke$arity$4 = (function (resulting_board,cost,message,info){
return obb_rules.result.action_result(true,resulting_board,cost,message,info);
});

obb_rules.result.action_success.cljs$lang$maxFixedArity = 4;
/**
 * Represents an unsuccessful action
 */
obb_rules.result.action_failed = (function obb_rules$result$action_failed(){
var args10177 = [];
var len__8231__auto___10180 = arguments.length;
var i__8232__auto___10181 = (0);
while(true){
if((i__8232__auto___10181 < len__8231__auto___10180)){
args10177.push((arguments[i__8232__auto___10181]));

var G__10182 = (i__8232__auto___10181 + (1));
i__8232__auto___10181 = G__10182;
continue;
} else {
}
break;
}

var G__10179 = args10177.length;
switch (G__10179) {
case 1:
return obb_rules.result.action_failed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.result.action_failed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10177.length)].join('')));

}
});

obb_rules.result.action_failed.cljs$core$IFn$_invoke$arity$1 = (function (message){
return obb_rules.result.action_result(false,null,(0),message,null);
});

obb_rules.result.action_failed.cljs$core$IFn$_invoke$arity$2 = (function (message,game){
return obb_rules.result.action_result(false,game,(0),message,null);
});

obb_rules.result.action_failed.cljs$lang$maxFixedArity = 2;
