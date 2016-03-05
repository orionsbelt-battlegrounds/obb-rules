// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.result');
goog.require('cljs.core');
/**
 * True if the action failed
 */
obb_rules.result.succeeded_QMARK_ = (function obb_rules$result$succeeded_QMARK_(result){
return (result.cljs$core$IFn$_invoke$arity$1 ? result.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$success) : result.call(null,cljs.core.cst$kw$success));
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
return (result.cljs$core$IFn$_invoke$arity$1 ? result.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$message) : result.call(null,cljs.core.cst$kw$message));
});
/**
 * Gets the cost of a result
 */
obb_rules.result.result_cost = (function obb_rules$result$result_cost(result){
return (result.cljs$core$IFn$_invoke$arity$1 ? result.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$cost) : result.call(null,cljs.core.cst$kw$cost));
});
/**
 * Gets the board of a result
 */
obb_rules.result.result_board = (function obb_rules$result$result_board(result){
return (result.cljs$core$IFn$_invoke$arity$1 ? result.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$board) : result.call(null,cljs.core.cst$kw$board));
});
/**
 * Gets additional information
 */
obb_rules.result.info = (function obb_rules$result$info(result){
return (result.cljs$core$IFn$_invoke$arity$1 ? result.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info) : result.call(null,cljs.core.cst$kw$info));
});
/**
 * Represents the result of an action
 */
obb_rules.result.action_result = (function obb_rules$result$action_result(success_QMARK_,resulting_board,cost,message,info){
var base = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$success,success_QMARK_,cljs.core.cst$kw$cost,cost,cljs.core.cst$kw$message,message], null);
var base_with_board = (cljs.core.truth_(resulting_board)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base,cljs.core.cst$kw$board,resulting_board):base);
var base_with_info = (cljs.core.truth_(info)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base_with_board,cljs.core.cst$kw$info,info):base_with_board);
return base_with_info;
});
/**
 * Represents a successful action
 */
obb_rules.result.action_success = (function obb_rules$result$action_success(var_args){
var args14853 = [];
var len__7214__auto___14856 = arguments.length;
var i__7215__auto___14857 = (0);
while(true){
if((i__7215__auto___14857 < len__7214__auto___14856)){
args14853.push((arguments[i__7215__auto___14857]));

var G__14858 = (i__7215__auto___14857 + (1));
i__7215__auto___14857 = G__14858;
continue;
} else {
}
break;
}

var G__14855 = args14853.length;
switch (G__14855) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14853.length)].join('')));

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
obb_rules.result.action_failed = (function obb_rules$result$action_failed(var_args){
var args14860 = [];
var len__7214__auto___14863 = arguments.length;
var i__7215__auto___14864 = (0);
while(true){
if((i__7215__auto___14864 < len__7214__auto___14863)){
args14860.push((arguments[i__7215__auto___14864]));

var G__14865 = (i__7215__auto___14864 + (1));
i__7215__auto___14864 = G__14865;
continue;
} else {
}
break;
}

var G__14862 = args14860.length;
switch (G__14862) {
case 1:
return obb_rules.result.action_failed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return obb_rules.result.action_failed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14860.length)].join('')));

}
});

obb_rules.result.action_failed.cljs$core$IFn$_invoke$arity$1 = (function (message){
return obb_rules.result.action_result(false,null,(0),message,null);
});

obb_rules.result.action_failed.cljs$core$IFn$_invoke$arity$2 = (function (message,game){
return obb_rules.result.action_result(false,game,(0),message,null);
});

obb_rules.result.action_failed.cljs$lang$maxFixedArity = 2;
