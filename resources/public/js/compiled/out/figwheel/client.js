// Compiled by ClojureScript 1.7.28 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34985__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34986__i = 0, G__34986__a = new Array(arguments.length -  0);
while (G__34986__i < G__34986__a.length) {G__34986__a[G__34986__i] = arguments[G__34986__i + 0]; ++G__34986__i;}
  args = new cljs.core.IndexedSeq(G__34986__a,0);
} 
return G__34985__delegate.call(this,args);};
G__34985.cljs$lang$maxFixedArity = 0;
G__34985.cljs$lang$applyTo = (function (arglist__34987){
var args = cljs.core.seq(arglist__34987);
return G__34985__delegate(args);
});
G__34985.cljs$core$IFn$_invoke$arity$variadic = G__34985__delegate;
return G__34985;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34988){
var map__34991 = p__34988;
var map__34991__$1 = ((((!((map__34991 == null)))?((((map__34991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34991):map__34991);
var message = cljs.core.get.call(null,map__34991__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34991__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16482__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16470__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16470__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16470__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20431__auto___35121 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20431__auto___35121,ch){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (c__20431__auto___35121,ch){
return (function (state_35095){
var state_val_35096 = (state_35095[(1)]);
if((state_val_35096 === (7))){
var inst_35091 = (state_35095[(2)]);
var state_35095__$1 = state_35095;
var statearr_35097_35122 = state_35095__$1;
(statearr_35097_35122[(2)] = inst_35091);

(statearr_35097_35122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35096 === (1))){
var state_35095__$1 = state_35095;
var statearr_35098_35123 = state_35095__$1;
(statearr_35098_35123[(2)] = null);

(statearr_35098_35123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35096 === (4))){
var inst_35059 = (state_35095[(7)]);
var inst_35059__$1 = (state_35095[(2)]);
var state_35095__$1 = (function (){var statearr_35099 = state_35095;
(statearr_35099[(7)] = inst_35059__$1);

return statearr_35099;
})();
if(cljs.core.truth_(inst_35059__$1)){
var statearr_35100_35124 = state_35095__$1;
(statearr_35100_35124[(1)] = (5));

} else {
var statearr_35101_35125 = state_35095__$1;
(statearr_35101_35125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35096 === (13))){
var state_35095__$1 = state_35095;
var statearr_35102_35126 = state_35095__$1;
(statearr_35102_35126[(2)] = null);

(statearr_35102_35126[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35096 === (6))){
var state_35095__$1 = state_35095;
var statearr_35103_35127 = state_35095__$1;
(statearr_35103_35127[(2)] = null);

(statearr_35103_35127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35096 === (3))){
var inst_35093 = (state_35095[(2)]);
var state_35095__$1 = state_35095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35095__$1,inst_35093);
} else {
if((state_val_35096 === (12))){
var inst_35066 = (state_35095[(8)]);
var inst_35079 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35066);
var inst_35080 = cljs.core.first.call(null,inst_35079);
var inst_35081 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35080);
var inst_35082 = console.warn("Figwheel: Not loading code with warnings - ",inst_35081);
var state_35095__$1 = state_35095;
var statearr_35104_35128 = state_35095__$1;
(statearr_35104_35128[(2)] = inst_35082);

(statearr_35104_35128[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35096 === (2))){
var state_35095__$1 = state_35095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35095__$1,(4),ch);
} else {
if((state_val_35096 === (11))){
var inst_35075 = (state_35095[(2)]);
var state_35095__$1 = state_35095;
var statearr_35105_35129 = state_35095__$1;
(statearr_35105_35129[(2)] = inst_35075);

(statearr_35105_35129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35096 === (9))){
var inst_35065 = (state_35095[(9)]);
var inst_35077 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35065,opts);
var state_35095__$1 = state_35095;
if(cljs.core.truth_(inst_35077)){
var statearr_35106_35130 = state_35095__$1;
(statearr_35106_35130[(1)] = (12));

} else {
var statearr_35107_35131 = state_35095__$1;
(statearr_35107_35131[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35096 === (5))){
var inst_35065 = (state_35095[(9)]);
var inst_35059 = (state_35095[(7)]);
var inst_35061 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35062 = (new cljs.core.PersistentArrayMap(null,2,inst_35061,null));
var inst_35063 = (new cljs.core.PersistentHashSet(null,inst_35062,null));
var inst_35064 = figwheel.client.focus_msgs.call(null,inst_35063,inst_35059);
var inst_35065__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35064);
var inst_35066 = cljs.core.first.call(null,inst_35064);
var inst_35067 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35065__$1,opts);
var state_35095__$1 = (function (){var statearr_35108 = state_35095;
(statearr_35108[(9)] = inst_35065__$1);

(statearr_35108[(8)] = inst_35066);

return statearr_35108;
})();
if(cljs.core.truth_(inst_35067)){
var statearr_35109_35132 = state_35095__$1;
(statearr_35109_35132[(1)] = (8));

} else {
var statearr_35110_35133 = state_35095__$1;
(statearr_35110_35133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35096 === (14))){
var inst_35085 = (state_35095[(2)]);
var state_35095__$1 = state_35095;
var statearr_35111_35134 = state_35095__$1;
(statearr_35111_35134[(2)] = inst_35085);

(statearr_35111_35134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35096 === (10))){
var inst_35087 = (state_35095[(2)]);
var state_35095__$1 = (function (){var statearr_35112 = state_35095;
(statearr_35112[(10)] = inst_35087);

return statearr_35112;
})();
var statearr_35113_35135 = state_35095__$1;
(statearr_35113_35135[(2)] = null);

(statearr_35113_35135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35096 === (8))){
var inst_35066 = (state_35095[(8)]);
var inst_35069 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35070 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35066);
var inst_35071 = cljs.core.async.timeout.call(null,(1000));
var inst_35072 = [inst_35070,inst_35071];
var inst_35073 = (new cljs.core.PersistentVector(null,2,(5),inst_35069,inst_35072,null));
var state_35095__$1 = state_35095;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35095__$1,(11),inst_35073);
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
}
}
}
});})(c__20431__auto___35121,ch))
;
return ((function (switch__20366__auto__,c__20431__auto___35121,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20367__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20367__auto____0 = (function (){
var statearr_35117 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35117[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20367__auto__);

(statearr_35117[(1)] = (1));

return statearr_35117;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20367__auto____1 = (function (state_35095){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_35095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e35118){if((e35118 instanceof Object)){
var ex__20370__auto__ = e35118;
var statearr_35119_35136 = state_35095;
(statearr_35119_35136[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35137 = state_35095;
state_35095 = G__35137;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20367__auto__ = function(state_35095){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20367__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20367__auto____1.call(this,state_35095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20367__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20367__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20367__auto__;
})()
;})(switch__20366__auto__,c__20431__auto___35121,ch))
})();
var state__20433__auto__ = (function (){var statearr_35120 = f__20432__auto__.call(null);
(statearr_35120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto___35121);

return statearr_35120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(c__20431__auto___35121,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35138_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35138_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_35145 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35145){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_35143 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_35144 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_35143,_STAR_print_newline_STAR_35144,base_path_35145){
return (function() { 
var G__35146__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__35146 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35147__i = 0, G__35147__a = new Array(arguments.length -  0);
while (G__35147__i < G__35147__a.length) {G__35147__a[G__35147__i] = arguments[G__35147__i + 0]; ++G__35147__i;}
  args = new cljs.core.IndexedSeq(G__35147__a,0);
} 
return G__35146__delegate.call(this,args);};
G__35146.cljs$lang$maxFixedArity = 0;
G__35146.cljs$lang$applyTo = (function (arglist__35148){
var args = cljs.core.seq(arglist__35148);
return G__35146__delegate(args);
});
G__35146.cljs$core$IFn$_invoke$arity$variadic = G__35146__delegate;
return G__35146;
})()
;})(_STAR_print_fn_STAR_35143,_STAR_print_newline_STAR_35144,base_path_35145))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_35144;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_35143;
}}catch (e35142){if((e35142 instanceof Error)){
var e = e35142;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35145], null));
} else {
var e = e35142;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_35145))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35149){
var map__35156 = p__35149;
var map__35156__$1 = ((((!((map__35156 == null)))?((((map__35156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35156):map__35156);
var opts = map__35156__$1;
var build_id = cljs.core.get.call(null,map__35156__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35156,map__35156__$1,opts,build_id){
return (function (p__35158){
var vec__35159 = p__35158;
var map__35160 = cljs.core.nth.call(null,vec__35159,(0),null);
var map__35160__$1 = ((((!((map__35160 == null)))?((((map__35160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35160):map__35160);
var msg = map__35160__$1;
var msg_name = cljs.core.get.call(null,map__35160__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__35159,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35159,map__35160,map__35160__$1,msg,msg_name,_,map__35156,map__35156__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35159,map__35160,map__35160__$1,msg,msg_name,_,map__35156,map__35156__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35156,map__35156__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35166){
var vec__35167 = p__35166;
var map__35168 = cljs.core.nth.call(null,vec__35167,(0),null);
var map__35168__$1 = ((((!((map__35168 == null)))?((((map__35168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35168):map__35168);
var msg = map__35168__$1;
var msg_name = cljs.core.get.call(null,map__35168__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__35167,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35170){
var map__35180 = p__35170;
var map__35180__$1 = ((((!((map__35180 == null)))?((((map__35180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35180):map__35180);
var on_compile_warning = cljs.core.get.call(null,map__35180__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35180__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35180,map__35180__$1,on_compile_warning,on_compile_fail){
return (function (p__35182){
var vec__35183 = p__35182;
var map__35184 = cljs.core.nth.call(null,vec__35183,(0),null);
var map__35184__$1 = ((((!((map__35184 == null)))?((((map__35184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35184):map__35184);
var msg = map__35184__$1;
var msg_name = cljs.core.get.call(null,map__35184__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__35183,(1));
var pred__35186 = cljs.core._EQ_;
var expr__35187 = msg_name;
if(cljs.core.truth_(pred__35186.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35187))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35186.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35187))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35180,map__35180__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20431__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20431__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (c__20431__auto__,msg_hist,msg_names,msg){
return (function (state_35388){
var state_val_35389 = (state_35388[(1)]);
if((state_val_35389 === (7))){
var inst_35322 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
var statearr_35390_35431 = state_35388__$1;
(statearr_35390_35431[(2)] = inst_35322);

(statearr_35390_35431[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (20))){
var inst_35350 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35388__$1 = state_35388;
if(cljs.core.truth_(inst_35350)){
var statearr_35391_35432 = state_35388__$1;
(statearr_35391_35432[(1)] = (22));

} else {
var statearr_35392_35433 = state_35388__$1;
(statearr_35392_35433[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (27))){
var inst_35362 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35363 = figwheel.client.heads_up.display_warning.call(null,inst_35362);
var state_35388__$1 = state_35388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35388__$1,(30),inst_35363);
} else {
if((state_val_35389 === (1))){
var inst_35310 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35388__$1 = state_35388;
if(cljs.core.truth_(inst_35310)){
var statearr_35393_35434 = state_35388__$1;
(statearr_35393_35434[(1)] = (2));

} else {
var statearr_35394_35435 = state_35388__$1;
(statearr_35394_35435[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (24))){
var inst_35378 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
var statearr_35395_35436 = state_35388__$1;
(statearr_35395_35436[(2)] = inst_35378);

(statearr_35395_35436[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (4))){
var inst_35386 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35388__$1,inst_35386);
} else {
if((state_val_35389 === (15))){
var inst_35338 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35339 = figwheel.client.format_messages.call(null,inst_35338);
var inst_35340 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35341 = figwheel.client.heads_up.display_error.call(null,inst_35339,inst_35340);
var state_35388__$1 = state_35388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35388__$1,(18),inst_35341);
} else {
if((state_val_35389 === (21))){
var inst_35380 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
var statearr_35396_35437 = state_35388__$1;
(statearr_35396_35437[(2)] = inst_35380);

(statearr_35396_35437[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (31))){
var inst_35369 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35388__$1 = state_35388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35388__$1,(34),inst_35369);
} else {
if((state_val_35389 === (32))){
var state_35388__$1 = state_35388;
var statearr_35397_35438 = state_35388__$1;
(statearr_35397_35438[(2)] = null);

(statearr_35397_35438[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (33))){
var inst_35374 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
var statearr_35398_35439 = state_35388__$1;
(statearr_35398_35439[(2)] = inst_35374);

(statearr_35398_35439[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (13))){
var inst_35328 = (state_35388[(2)]);
var inst_35329 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35330 = figwheel.client.format_messages.call(null,inst_35329);
var inst_35331 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35332 = figwheel.client.heads_up.display_error.call(null,inst_35330,inst_35331);
var state_35388__$1 = (function (){var statearr_35399 = state_35388;
(statearr_35399[(7)] = inst_35328);

return statearr_35399;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35388__$1,(14),inst_35332);
} else {
if((state_val_35389 === (22))){
var inst_35352 = figwheel.client.heads_up.clear.call(null);
var state_35388__$1 = state_35388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35388__$1,(25),inst_35352);
} else {
if((state_val_35389 === (29))){
var inst_35376 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
var statearr_35400_35440 = state_35388__$1;
(statearr_35400_35440[(2)] = inst_35376);

(statearr_35400_35440[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (6))){
var inst_35318 = figwheel.client.heads_up.clear.call(null);
var state_35388__$1 = state_35388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35388__$1,(9),inst_35318);
} else {
if((state_val_35389 === (28))){
var inst_35367 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35388__$1 = state_35388;
if(cljs.core.truth_(inst_35367)){
var statearr_35401_35441 = state_35388__$1;
(statearr_35401_35441[(1)] = (31));

} else {
var statearr_35402_35442 = state_35388__$1;
(statearr_35402_35442[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (25))){
var inst_35354 = (state_35388[(2)]);
var inst_35355 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35356 = figwheel.client.heads_up.display_warning.call(null,inst_35355);
var state_35388__$1 = (function (){var statearr_35403 = state_35388;
(statearr_35403[(8)] = inst_35354);

return statearr_35403;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35388__$1,(26),inst_35356);
} else {
if((state_val_35389 === (34))){
var inst_35371 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
var statearr_35404_35443 = state_35388__$1;
(statearr_35404_35443[(2)] = inst_35371);

(statearr_35404_35443[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (17))){
var inst_35382 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
var statearr_35405_35444 = state_35388__$1;
(statearr_35405_35444[(2)] = inst_35382);

(statearr_35405_35444[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (3))){
var inst_35324 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35388__$1 = state_35388;
if(cljs.core.truth_(inst_35324)){
var statearr_35406_35445 = state_35388__$1;
(statearr_35406_35445[(1)] = (10));

} else {
var statearr_35407_35446 = state_35388__$1;
(statearr_35407_35446[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (12))){
var inst_35384 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
var statearr_35408_35447 = state_35388__$1;
(statearr_35408_35447[(2)] = inst_35384);

(statearr_35408_35447[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (2))){
var inst_35312 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35388__$1 = state_35388;
if(cljs.core.truth_(inst_35312)){
var statearr_35409_35448 = state_35388__$1;
(statearr_35409_35448[(1)] = (5));

} else {
var statearr_35410_35449 = state_35388__$1;
(statearr_35410_35449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (23))){
var inst_35360 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35388__$1 = state_35388;
if(cljs.core.truth_(inst_35360)){
var statearr_35411_35450 = state_35388__$1;
(statearr_35411_35450[(1)] = (27));

} else {
var statearr_35412_35451 = state_35388__$1;
(statearr_35412_35451[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (19))){
var inst_35347 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35348 = figwheel.client.heads_up.append_message.call(null,inst_35347);
var state_35388__$1 = state_35388;
var statearr_35413_35452 = state_35388__$1;
(statearr_35413_35452[(2)] = inst_35348);

(statearr_35413_35452[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (11))){
var inst_35336 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35388__$1 = state_35388;
if(cljs.core.truth_(inst_35336)){
var statearr_35414_35453 = state_35388__$1;
(statearr_35414_35453[(1)] = (15));

} else {
var statearr_35415_35454 = state_35388__$1;
(statearr_35415_35454[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (9))){
var inst_35320 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
var statearr_35416_35455 = state_35388__$1;
(statearr_35416_35455[(2)] = inst_35320);

(statearr_35416_35455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (5))){
var inst_35314 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35388__$1 = state_35388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35388__$1,(8),inst_35314);
} else {
if((state_val_35389 === (14))){
var inst_35334 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
var statearr_35417_35456 = state_35388__$1;
(statearr_35417_35456[(2)] = inst_35334);

(statearr_35417_35456[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (26))){
var inst_35358 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
var statearr_35418_35457 = state_35388__$1;
(statearr_35418_35457[(2)] = inst_35358);

(statearr_35418_35457[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (16))){
var inst_35345 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35388__$1 = state_35388;
if(cljs.core.truth_(inst_35345)){
var statearr_35419_35458 = state_35388__$1;
(statearr_35419_35458[(1)] = (19));

} else {
var statearr_35420_35459 = state_35388__$1;
(statearr_35420_35459[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (30))){
var inst_35365 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
var statearr_35421_35460 = state_35388__$1;
(statearr_35421_35460[(2)] = inst_35365);

(statearr_35421_35460[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (10))){
var inst_35326 = figwheel.client.heads_up.clear.call(null);
var state_35388__$1 = state_35388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35388__$1,(13),inst_35326);
} else {
if((state_val_35389 === (18))){
var inst_35343 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
var statearr_35422_35461 = state_35388__$1;
(statearr_35422_35461[(2)] = inst_35343);

(statearr_35422_35461[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (8))){
var inst_35316 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
var statearr_35423_35462 = state_35388__$1;
(statearr_35423_35462[(2)] = inst_35316);

(statearr_35423_35462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
});})(c__20431__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20366__auto__,c__20431__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20367__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20367__auto____0 = (function (){
var statearr_35427 = [null,null,null,null,null,null,null,null,null];
(statearr_35427[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20367__auto__);

(statearr_35427[(1)] = (1));

return statearr_35427;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20367__auto____1 = (function (state_35388){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_35388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e35428){if((e35428 instanceof Object)){
var ex__20370__auto__ = e35428;
var statearr_35429_35463 = state_35388;
(statearr_35429_35463[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35464 = state_35388;
state_35388 = G__35464;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20367__auto__ = function(state_35388){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20367__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20367__auto____1.call(this,state_35388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20367__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20367__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20367__auto__;
})()
;})(switch__20366__auto__,c__20431__auto__,msg_hist,msg_names,msg))
})();
var state__20433__auto__ = (function (){var statearr_35430 = f__20432__auto__.call(null);
(statearr_35430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto__);

return statearr_35430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(c__20431__auto__,msg_hist,msg_names,msg))
);

return c__20431__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20431__auto___35527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20431__auto___35527,ch){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (c__20431__auto___35527,ch){
return (function (state_35510){
var state_val_35511 = (state_35510[(1)]);
if((state_val_35511 === (1))){
var state_35510__$1 = state_35510;
var statearr_35512_35528 = state_35510__$1;
(statearr_35512_35528[(2)] = null);

(statearr_35512_35528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35511 === (2))){
var state_35510__$1 = state_35510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35510__$1,(4),ch);
} else {
if((state_val_35511 === (3))){
var inst_35508 = (state_35510[(2)]);
var state_35510__$1 = state_35510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35510__$1,inst_35508);
} else {
if((state_val_35511 === (4))){
var inst_35498 = (state_35510[(7)]);
var inst_35498__$1 = (state_35510[(2)]);
var state_35510__$1 = (function (){var statearr_35513 = state_35510;
(statearr_35513[(7)] = inst_35498__$1);

return statearr_35513;
})();
if(cljs.core.truth_(inst_35498__$1)){
var statearr_35514_35529 = state_35510__$1;
(statearr_35514_35529[(1)] = (5));

} else {
var statearr_35515_35530 = state_35510__$1;
(statearr_35515_35530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35511 === (5))){
var inst_35498 = (state_35510[(7)]);
var inst_35500 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35498);
var state_35510__$1 = state_35510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35510__$1,(8),inst_35500);
} else {
if((state_val_35511 === (6))){
var state_35510__$1 = state_35510;
var statearr_35516_35531 = state_35510__$1;
(statearr_35516_35531[(2)] = null);

(statearr_35516_35531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35511 === (7))){
var inst_35506 = (state_35510[(2)]);
var state_35510__$1 = state_35510;
var statearr_35517_35532 = state_35510__$1;
(statearr_35517_35532[(2)] = inst_35506);

(statearr_35517_35532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35511 === (8))){
var inst_35502 = (state_35510[(2)]);
var state_35510__$1 = (function (){var statearr_35518 = state_35510;
(statearr_35518[(8)] = inst_35502);

return statearr_35518;
})();
var statearr_35519_35533 = state_35510__$1;
(statearr_35519_35533[(2)] = null);

(statearr_35519_35533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__20431__auto___35527,ch))
;
return ((function (switch__20366__auto__,c__20431__auto___35527,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20367__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20367__auto____0 = (function (){
var statearr_35523 = [null,null,null,null,null,null,null,null,null];
(statearr_35523[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20367__auto__);

(statearr_35523[(1)] = (1));

return statearr_35523;
});
var figwheel$client$heads_up_plugin_$_state_machine__20367__auto____1 = (function (state_35510){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_35510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e35524){if((e35524 instanceof Object)){
var ex__20370__auto__ = e35524;
var statearr_35525_35534 = state_35510;
(statearr_35525_35534[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35535 = state_35510;
state_35510 = G__35535;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20367__auto__ = function(state_35510){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20367__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20367__auto____1.call(this,state_35510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20367__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20367__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20367__auto__;
})()
;})(switch__20366__auto__,c__20431__auto___35527,ch))
})();
var state__20433__auto__ = (function (){var statearr_35526 = f__20432__auto__.call(null);
(statearr_35526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto___35527);

return statearr_35526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(c__20431__auto___35527,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20431__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20431__auto__){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (c__20431__auto__){
return (function (state_35556){
var state_val_35557 = (state_35556[(1)]);
if((state_val_35557 === (1))){
var inst_35551 = cljs.core.async.timeout.call(null,(3000));
var state_35556__$1 = state_35556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35556__$1,(2),inst_35551);
} else {
if((state_val_35557 === (2))){
var inst_35553 = (state_35556[(2)]);
var inst_35554 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35556__$1 = (function (){var statearr_35558 = state_35556;
(statearr_35558[(7)] = inst_35553);

return statearr_35558;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35556__$1,inst_35554);
} else {
return null;
}
}
});})(c__20431__auto__))
;
return ((function (switch__20366__auto__,c__20431__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20367__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20367__auto____0 = (function (){
var statearr_35562 = [null,null,null,null,null,null,null,null];
(statearr_35562[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20367__auto__);

(statearr_35562[(1)] = (1));

return statearr_35562;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20367__auto____1 = (function (state_35556){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_35556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e35563){if((e35563 instanceof Object)){
var ex__20370__auto__ = e35563;
var statearr_35564_35566 = state_35556;
(statearr_35564_35566[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35567 = state_35556;
state_35556 = G__35567;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20367__auto__ = function(state_35556){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20367__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20367__auto____1.call(this,state_35556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20367__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20367__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20367__auto__;
})()
;})(switch__20366__auto__,c__20431__auto__))
})();
var state__20433__auto__ = (function (){var statearr_35565 = f__20432__auto__.call(null);
(statearr_35565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto__);

return statearr_35565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(c__20431__auto__))
);

return c__20431__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35568){
var map__35575 = p__35568;
var map__35575__$1 = ((((!((map__35575 == null)))?((((map__35575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35575):map__35575);
var ed = map__35575__$1;
var formatted_exception = cljs.core.get.call(null,map__35575__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35575__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35575__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35577_35581 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35578_35582 = null;
var count__35579_35583 = (0);
var i__35580_35584 = (0);
while(true){
if((i__35580_35584 < count__35579_35583)){
var msg_35585 = cljs.core._nth.call(null,chunk__35578_35582,i__35580_35584);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35585);

var G__35586 = seq__35577_35581;
var G__35587 = chunk__35578_35582;
var G__35588 = count__35579_35583;
var G__35589 = (i__35580_35584 + (1));
seq__35577_35581 = G__35586;
chunk__35578_35582 = G__35587;
count__35579_35583 = G__35588;
i__35580_35584 = G__35589;
continue;
} else {
var temp__4425__auto___35590 = cljs.core.seq.call(null,seq__35577_35581);
if(temp__4425__auto___35590){
var seq__35577_35591__$1 = temp__4425__auto___35590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35577_35591__$1)){
var c__17266__auto___35592 = cljs.core.chunk_first.call(null,seq__35577_35591__$1);
var G__35593 = cljs.core.chunk_rest.call(null,seq__35577_35591__$1);
var G__35594 = c__17266__auto___35592;
var G__35595 = cljs.core.count.call(null,c__17266__auto___35592);
var G__35596 = (0);
seq__35577_35581 = G__35593;
chunk__35578_35582 = G__35594;
count__35579_35583 = G__35595;
i__35580_35584 = G__35596;
continue;
} else {
var msg_35597 = cljs.core.first.call(null,seq__35577_35591__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35597);

var G__35598 = cljs.core.next.call(null,seq__35577_35591__$1);
var G__35599 = null;
var G__35600 = (0);
var G__35601 = (0);
seq__35577_35581 = G__35598;
chunk__35578_35582 = G__35599;
count__35579_35583 = G__35600;
i__35580_35584 = G__35601;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35602){
var map__35605 = p__35602;
var map__35605__$1 = ((((!((map__35605 == null)))?((((map__35605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35605):map__35605);
var w = map__35605__$1;
var message = cljs.core.get.call(null,map__35605__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16470__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16470__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16470__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35613 = cljs.core.seq.call(null,plugins);
var chunk__35614 = null;
var count__35615 = (0);
var i__35616 = (0);
while(true){
if((i__35616 < count__35615)){
var vec__35617 = cljs.core._nth.call(null,chunk__35614,i__35616);
var k = cljs.core.nth.call(null,vec__35617,(0),null);
var plugin = cljs.core.nth.call(null,vec__35617,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35619 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35613,chunk__35614,count__35615,i__35616,pl_35619,vec__35617,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35619.call(null,msg_hist);
});})(seq__35613,chunk__35614,count__35615,i__35616,pl_35619,vec__35617,k,plugin))
);
} else {
}

var G__35620 = seq__35613;
var G__35621 = chunk__35614;
var G__35622 = count__35615;
var G__35623 = (i__35616 + (1));
seq__35613 = G__35620;
chunk__35614 = G__35621;
count__35615 = G__35622;
i__35616 = G__35623;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__35613);
if(temp__4425__auto__){
var seq__35613__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35613__$1)){
var c__17266__auto__ = cljs.core.chunk_first.call(null,seq__35613__$1);
var G__35624 = cljs.core.chunk_rest.call(null,seq__35613__$1);
var G__35625 = c__17266__auto__;
var G__35626 = cljs.core.count.call(null,c__17266__auto__);
var G__35627 = (0);
seq__35613 = G__35624;
chunk__35614 = G__35625;
count__35615 = G__35626;
i__35616 = G__35627;
continue;
} else {
var vec__35618 = cljs.core.first.call(null,seq__35613__$1);
var k = cljs.core.nth.call(null,vec__35618,(0),null);
var plugin = cljs.core.nth.call(null,vec__35618,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35628 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35613,chunk__35614,count__35615,i__35616,pl_35628,vec__35618,k,plugin,seq__35613__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35628.call(null,msg_hist);
});})(seq__35613,chunk__35614,count__35615,i__35616,pl_35628,vec__35618,k,plugin,seq__35613__$1,temp__4425__auto__))
);
} else {
}

var G__35629 = cljs.core.next.call(null,seq__35613__$1);
var G__35630 = null;
var G__35631 = (0);
var G__35632 = (0);
seq__35613 = G__35629;
chunk__35614 = G__35630;
count__35615 = G__35631;
i__35616 = G__35632;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var args35633 = [];
var len__17521__auto___35636 = arguments.length;
var i__17522__auto___35637 = (0);
while(true){
if((i__17522__auto___35637 < len__17521__auto___35636)){
args35633.push((arguments[i__17522__auto___35637]));

var G__35638 = (i__17522__auto___35637 + (1));
i__17522__auto___35637 = G__35638;
continue;
} else {
}
break;
}

var G__35635 = args35633.length;
switch (G__35635) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35633.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var args__17528__auto__ = [];
var len__17521__auto___35644 = arguments.length;
var i__17522__auto___35645 = (0);
while(true){
if((i__17522__auto___35645 < len__17521__auto___35644)){
args__17528__auto__.push((arguments[i__17522__auto___35645]));

var G__35646 = (i__17522__auto___35645 + (1));
i__17522__auto___35645 = G__35646;
continue;
} else {
}
break;
}

var argseq__17529__auto__ = ((((0) < args__17528__auto__.length))?(new cljs.core.IndexedSeq(args__17528__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17529__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35641){
var map__35642 = p__35641;
var map__35642__$1 = ((((!((map__35642 == null)))?((((map__35642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35642):map__35642);
var opts = map__35642__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35640){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35640));
});

//# sourceMappingURL=client.js.map?rel=1439049324377