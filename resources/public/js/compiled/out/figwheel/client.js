// Compiled by ClojureScript 0.0-3308 {}
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
var G__23783__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23783 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23784__i = 0, G__23784__a = new Array(arguments.length -  0);
while (G__23784__i < G__23784__a.length) {G__23784__a[G__23784__i] = arguments[G__23784__i + 0]; ++G__23784__i;}
  args = new cljs.core.IndexedSeq(G__23784__a,0);
} 
return G__23783__delegate.call(this,args);};
G__23783.cljs$lang$maxFixedArity = 0;
G__23783.cljs$lang$applyTo = (function (arglist__23785){
var args = cljs.core.seq(arglist__23785);
return G__23783__delegate(args);
});
G__23783.cljs$core$IFn$_invoke$arity$variadic = G__23783__delegate;
return G__23783;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23786){
var map__23788 = p__23786;
var map__23788__$1 = ((cljs.core.seq_QMARK_.call(null,map__23788))?cljs.core.apply.call(null,cljs.core.hash_map,map__23788):map__23788);
var message = cljs.core.get.call(null,map__23788__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23788__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16109__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16097__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16097__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16097__auto__;
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
var c__19342__auto___23917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___23917,ch){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (c__19342__auto___23917,ch){
return (function (state_23891){
var state_val_23892 = (state_23891[(1)]);
if((state_val_23892 === (7))){
var inst_23887 = (state_23891[(2)]);
var state_23891__$1 = state_23891;
var statearr_23893_23918 = state_23891__$1;
(statearr_23893_23918[(2)] = inst_23887);

(statearr_23893_23918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23892 === (1))){
var state_23891__$1 = state_23891;
var statearr_23894_23919 = state_23891__$1;
(statearr_23894_23919[(2)] = null);

(statearr_23894_23919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23892 === (4))){
var inst_23855 = (state_23891[(7)]);
var inst_23855__$1 = (state_23891[(2)]);
var state_23891__$1 = (function (){var statearr_23895 = state_23891;
(statearr_23895[(7)] = inst_23855__$1);

return statearr_23895;
})();
if(cljs.core.truth_(inst_23855__$1)){
var statearr_23896_23920 = state_23891__$1;
(statearr_23896_23920[(1)] = (5));

} else {
var statearr_23897_23921 = state_23891__$1;
(statearr_23897_23921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23892 === (13))){
var state_23891__$1 = state_23891;
var statearr_23898_23922 = state_23891__$1;
(statearr_23898_23922[(2)] = null);

(statearr_23898_23922[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23892 === (6))){
var state_23891__$1 = state_23891;
var statearr_23899_23923 = state_23891__$1;
(statearr_23899_23923[(2)] = null);

(statearr_23899_23923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23892 === (3))){
var inst_23889 = (state_23891[(2)]);
var state_23891__$1 = state_23891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23891__$1,inst_23889);
} else {
if((state_val_23892 === (12))){
var inst_23862 = (state_23891[(8)]);
var inst_23875 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23862);
var inst_23876 = cljs.core.first.call(null,inst_23875);
var inst_23877 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23876);
var inst_23878 = console.warn("Figwheel: Not loading code with warnings - ",inst_23877);
var state_23891__$1 = state_23891;
var statearr_23900_23924 = state_23891__$1;
(statearr_23900_23924[(2)] = inst_23878);

(statearr_23900_23924[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23892 === (2))){
var state_23891__$1 = state_23891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23891__$1,(4),ch);
} else {
if((state_val_23892 === (11))){
var inst_23871 = (state_23891[(2)]);
var state_23891__$1 = state_23891;
var statearr_23901_23925 = state_23891__$1;
(statearr_23901_23925[(2)] = inst_23871);

(statearr_23901_23925[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23892 === (9))){
var inst_23861 = (state_23891[(9)]);
var inst_23873 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23861,opts);
var state_23891__$1 = state_23891;
if(cljs.core.truth_(inst_23873)){
var statearr_23902_23926 = state_23891__$1;
(statearr_23902_23926[(1)] = (12));

} else {
var statearr_23903_23927 = state_23891__$1;
(statearr_23903_23927[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23892 === (5))){
var inst_23861 = (state_23891[(9)]);
var inst_23855 = (state_23891[(7)]);
var inst_23857 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23858 = (new cljs.core.PersistentArrayMap(null,2,inst_23857,null));
var inst_23859 = (new cljs.core.PersistentHashSet(null,inst_23858,null));
var inst_23860 = figwheel.client.focus_msgs.call(null,inst_23859,inst_23855);
var inst_23861__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23860);
var inst_23862 = cljs.core.first.call(null,inst_23860);
var inst_23863 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23861__$1,opts);
var state_23891__$1 = (function (){var statearr_23904 = state_23891;
(statearr_23904[(8)] = inst_23862);

(statearr_23904[(9)] = inst_23861__$1);

return statearr_23904;
})();
if(cljs.core.truth_(inst_23863)){
var statearr_23905_23928 = state_23891__$1;
(statearr_23905_23928[(1)] = (8));

} else {
var statearr_23906_23929 = state_23891__$1;
(statearr_23906_23929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23892 === (14))){
var inst_23881 = (state_23891[(2)]);
var state_23891__$1 = state_23891;
var statearr_23907_23930 = state_23891__$1;
(statearr_23907_23930[(2)] = inst_23881);

(statearr_23907_23930[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23892 === (10))){
var inst_23883 = (state_23891[(2)]);
var state_23891__$1 = (function (){var statearr_23908 = state_23891;
(statearr_23908[(10)] = inst_23883);

return statearr_23908;
})();
var statearr_23909_23931 = state_23891__$1;
(statearr_23909_23931[(2)] = null);

(statearr_23909_23931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23892 === (8))){
var inst_23862 = (state_23891[(8)]);
var inst_23865 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23866 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23862);
var inst_23867 = cljs.core.async.timeout.call(null,(1000));
var inst_23868 = [inst_23866,inst_23867];
var inst_23869 = (new cljs.core.PersistentVector(null,2,(5),inst_23865,inst_23868,null));
var state_23891__$1 = state_23891;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23891__$1,(11),inst_23869);
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
});})(c__19342__auto___23917,ch))
;
return ((function (switch__19280__auto__,c__19342__auto___23917,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19281__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19281__auto____0 = (function (){
var statearr_23913 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23913[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19281__auto__);

(statearr_23913[(1)] = (1));

return statearr_23913;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19281__auto____1 = (function (state_23891){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_23891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e23914){if((e23914 instanceof Object)){
var ex__19284__auto__ = e23914;
var statearr_23915_23932 = state_23891;
(statearr_23915_23932[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23933 = state_23891;
state_23891 = G__23933;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19281__auto__ = function(state_23891){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19281__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19281__auto____1.call(this,state_23891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19281__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19281__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19281__auto__;
})()
;})(switch__19280__auto__,c__19342__auto___23917,ch))
})();
var state__19344__auto__ = (function (){var statearr_23916 = f__19343__auto__.call(null);
(statearr_23916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___23917);

return statearr_23916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___23917,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23934_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23934_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_23941 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23941){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_23939 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_23940 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_23939,_STAR_print_newline_STAR_23940,base_path_23941){
return (function() { 
var G__23942__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23942 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23943__i = 0, G__23943__a = new Array(arguments.length -  0);
while (G__23943__i < G__23943__a.length) {G__23943__a[G__23943__i] = arguments[G__23943__i + 0]; ++G__23943__i;}
  args = new cljs.core.IndexedSeq(G__23943__a,0);
} 
return G__23942__delegate.call(this,args);};
G__23942.cljs$lang$maxFixedArity = 0;
G__23942.cljs$lang$applyTo = (function (arglist__23944){
var args = cljs.core.seq(arglist__23944);
return G__23942__delegate(args);
});
G__23942.cljs$core$IFn$_invoke$arity$variadic = G__23942__delegate;
return G__23942;
})()
;})(_STAR_print_fn_STAR_23939,_STAR_print_newline_STAR_23940,base_path_23941))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23940;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23939;
}}catch (e23938){if((e23938 instanceof Error)){
var e = e23938;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23941], null));
} else {
var e = e23938;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_23941))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23945){
var map__23950 = p__23945;
var map__23950__$1 = ((cljs.core.seq_QMARK_.call(null,map__23950))?cljs.core.apply.call(null,cljs.core.hash_map,map__23950):map__23950);
var opts = map__23950__$1;
var build_id = cljs.core.get.call(null,map__23950__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__23950,map__23950__$1,opts,build_id){
return (function (p__23951){
var vec__23952 = p__23951;
var map__23953 = cljs.core.nth.call(null,vec__23952,(0),null);
var map__23953__$1 = ((cljs.core.seq_QMARK_.call(null,map__23953))?cljs.core.apply.call(null,cljs.core.hash_map,map__23953):map__23953);
var msg = map__23953__$1;
var msg_name = cljs.core.get.call(null,map__23953__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23952,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__23952,map__23953,map__23953__$1,msg,msg_name,_,map__23950,map__23950__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__23952,map__23953,map__23953__$1,msg,msg_name,_,map__23950,map__23950__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__23950,map__23950__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23957){
var vec__23958 = p__23957;
var map__23959 = cljs.core.nth.call(null,vec__23958,(0),null);
var map__23959__$1 = ((cljs.core.seq_QMARK_.call(null,map__23959))?cljs.core.apply.call(null,cljs.core.hash_map,map__23959):map__23959);
var msg = map__23959__$1;
var msg_name = cljs.core.get.call(null,map__23959__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23958,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__23960){
var map__23968 = p__23960;
var map__23968__$1 = ((cljs.core.seq_QMARK_.call(null,map__23968))?cljs.core.apply.call(null,cljs.core.hash_map,map__23968):map__23968);
var on_compile_warning = cljs.core.get.call(null,map__23968__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__23968__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__23968,map__23968__$1,on_compile_warning,on_compile_fail){
return (function (p__23969){
var vec__23970 = p__23969;
var map__23971 = cljs.core.nth.call(null,vec__23970,(0),null);
var map__23971__$1 = ((cljs.core.seq_QMARK_.call(null,map__23971))?cljs.core.apply.call(null,cljs.core.hash_map,map__23971):map__23971);
var msg = map__23971__$1;
var msg_name = cljs.core.get.call(null,map__23971__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23970,(1));
var pred__23972 = cljs.core._EQ_;
var expr__23973 = msg_name;
if(cljs.core.truth_(pred__23972.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__23973))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__23972.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23973))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__23968,map__23968__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (c__19342__auto__,msg_hist,msg_names,msg){
return (function (state_24174){
var state_val_24175 = (state_24174[(1)]);
if((state_val_24175 === (7))){
var inst_24108 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
var statearr_24176_24217 = state_24174__$1;
(statearr_24176_24217[(2)] = inst_24108);

(statearr_24176_24217[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (20))){
var inst_24136 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24174__$1 = state_24174;
if(cljs.core.truth_(inst_24136)){
var statearr_24177_24218 = state_24174__$1;
(statearr_24177_24218[(1)] = (22));

} else {
var statearr_24178_24219 = state_24174__$1;
(statearr_24178_24219[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (27))){
var inst_24148 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24149 = figwheel.client.heads_up.display_warning.call(null,inst_24148);
var state_24174__$1 = state_24174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24174__$1,(30),inst_24149);
} else {
if((state_val_24175 === (1))){
var inst_24096 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24174__$1 = state_24174;
if(cljs.core.truth_(inst_24096)){
var statearr_24179_24220 = state_24174__$1;
(statearr_24179_24220[(1)] = (2));

} else {
var statearr_24180_24221 = state_24174__$1;
(statearr_24180_24221[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (24))){
var inst_24164 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
var statearr_24181_24222 = state_24174__$1;
(statearr_24181_24222[(2)] = inst_24164);

(statearr_24181_24222[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (4))){
var inst_24172 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24174__$1,inst_24172);
} else {
if((state_val_24175 === (15))){
var inst_24124 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24125 = figwheel.client.format_messages.call(null,inst_24124);
var inst_24126 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24127 = figwheel.client.heads_up.display_error.call(null,inst_24125,inst_24126);
var state_24174__$1 = state_24174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24174__$1,(18),inst_24127);
} else {
if((state_val_24175 === (21))){
var inst_24166 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
var statearr_24182_24223 = state_24174__$1;
(statearr_24182_24223[(2)] = inst_24166);

(statearr_24182_24223[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (31))){
var inst_24155 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24174__$1 = state_24174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24174__$1,(34),inst_24155);
} else {
if((state_val_24175 === (32))){
var state_24174__$1 = state_24174;
var statearr_24183_24224 = state_24174__$1;
(statearr_24183_24224[(2)] = null);

(statearr_24183_24224[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (33))){
var inst_24160 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
var statearr_24184_24225 = state_24174__$1;
(statearr_24184_24225[(2)] = inst_24160);

(statearr_24184_24225[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (13))){
var inst_24114 = (state_24174[(2)]);
var inst_24115 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24116 = figwheel.client.format_messages.call(null,inst_24115);
var inst_24117 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24118 = figwheel.client.heads_up.display_error.call(null,inst_24116,inst_24117);
var state_24174__$1 = (function (){var statearr_24185 = state_24174;
(statearr_24185[(7)] = inst_24114);

return statearr_24185;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24174__$1,(14),inst_24118);
} else {
if((state_val_24175 === (22))){
var inst_24138 = figwheel.client.heads_up.clear.call(null);
var state_24174__$1 = state_24174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24174__$1,(25),inst_24138);
} else {
if((state_val_24175 === (29))){
var inst_24162 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
var statearr_24186_24226 = state_24174__$1;
(statearr_24186_24226[(2)] = inst_24162);

(statearr_24186_24226[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (6))){
var inst_24104 = figwheel.client.heads_up.clear.call(null);
var state_24174__$1 = state_24174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24174__$1,(9),inst_24104);
} else {
if((state_val_24175 === (28))){
var inst_24153 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24174__$1 = state_24174;
if(cljs.core.truth_(inst_24153)){
var statearr_24187_24227 = state_24174__$1;
(statearr_24187_24227[(1)] = (31));

} else {
var statearr_24188_24228 = state_24174__$1;
(statearr_24188_24228[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (25))){
var inst_24140 = (state_24174[(2)]);
var inst_24141 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24142 = figwheel.client.heads_up.display_warning.call(null,inst_24141);
var state_24174__$1 = (function (){var statearr_24189 = state_24174;
(statearr_24189[(8)] = inst_24140);

return statearr_24189;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24174__$1,(26),inst_24142);
} else {
if((state_val_24175 === (34))){
var inst_24157 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
var statearr_24190_24229 = state_24174__$1;
(statearr_24190_24229[(2)] = inst_24157);

(statearr_24190_24229[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (17))){
var inst_24168 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
var statearr_24191_24230 = state_24174__$1;
(statearr_24191_24230[(2)] = inst_24168);

(statearr_24191_24230[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (3))){
var inst_24110 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24174__$1 = state_24174;
if(cljs.core.truth_(inst_24110)){
var statearr_24192_24231 = state_24174__$1;
(statearr_24192_24231[(1)] = (10));

} else {
var statearr_24193_24232 = state_24174__$1;
(statearr_24193_24232[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (12))){
var inst_24170 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
var statearr_24194_24233 = state_24174__$1;
(statearr_24194_24233[(2)] = inst_24170);

(statearr_24194_24233[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (2))){
var inst_24098 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24174__$1 = state_24174;
if(cljs.core.truth_(inst_24098)){
var statearr_24195_24234 = state_24174__$1;
(statearr_24195_24234[(1)] = (5));

} else {
var statearr_24196_24235 = state_24174__$1;
(statearr_24196_24235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (23))){
var inst_24146 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24174__$1 = state_24174;
if(cljs.core.truth_(inst_24146)){
var statearr_24197_24236 = state_24174__$1;
(statearr_24197_24236[(1)] = (27));

} else {
var statearr_24198_24237 = state_24174__$1;
(statearr_24198_24237[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (19))){
var inst_24133 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24134 = figwheel.client.heads_up.append_message.call(null,inst_24133);
var state_24174__$1 = state_24174;
var statearr_24199_24238 = state_24174__$1;
(statearr_24199_24238[(2)] = inst_24134);

(statearr_24199_24238[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (11))){
var inst_24122 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24174__$1 = state_24174;
if(cljs.core.truth_(inst_24122)){
var statearr_24200_24239 = state_24174__$1;
(statearr_24200_24239[(1)] = (15));

} else {
var statearr_24201_24240 = state_24174__$1;
(statearr_24201_24240[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (9))){
var inst_24106 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
var statearr_24202_24241 = state_24174__$1;
(statearr_24202_24241[(2)] = inst_24106);

(statearr_24202_24241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (5))){
var inst_24100 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24174__$1 = state_24174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24174__$1,(8),inst_24100);
} else {
if((state_val_24175 === (14))){
var inst_24120 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
var statearr_24203_24242 = state_24174__$1;
(statearr_24203_24242[(2)] = inst_24120);

(statearr_24203_24242[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (26))){
var inst_24144 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
var statearr_24204_24243 = state_24174__$1;
(statearr_24204_24243[(2)] = inst_24144);

(statearr_24204_24243[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (16))){
var inst_24131 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24174__$1 = state_24174;
if(cljs.core.truth_(inst_24131)){
var statearr_24205_24244 = state_24174__$1;
(statearr_24205_24244[(1)] = (19));

} else {
var statearr_24206_24245 = state_24174__$1;
(statearr_24206_24245[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (30))){
var inst_24151 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
var statearr_24207_24246 = state_24174__$1;
(statearr_24207_24246[(2)] = inst_24151);

(statearr_24207_24246[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (10))){
var inst_24112 = figwheel.client.heads_up.clear.call(null);
var state_24174__$1 = state_24174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24174__$1,(13),inst_24112);
} else {
if((state_val_24175 === (18))){
var inst_24129 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
var statearr_24208_24247 = state_24174__$1;
(statearr_24208_24247[(2)] = inst_24129);

(statearr_24208_24247[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (8))){
var inst_24102 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
var statearr_24209_24248 = state_24174__$1;
(statearr_24209_24248[(2)] = inst_24102);

(statearr_24209_24248[(1)] = (7));


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
});})(c__19342__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19280__auto__,c__19342__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19281__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19281__auto____0 = (function (){
var statearr_24213 = [null,null,null,null,null,null,null,null,null];
(statearr_24213[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19281__auto__);

(statearr_24213[(1)] = (1));

return statearr_24213;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19281__auto____1 = (function (state_24174){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_24174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e24214){if((e24214 instanceof Object)){
var ex__19284__auto__ = e24214;
var statearr_24215_24249 = state_24174;
(statearr_24215_24249[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24250 = state_24174;
state_24174 = G__24250;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19281__auto__ = function(state_24174){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19281__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19281__auto____1.call(this,state_24174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19281__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19281__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19281__auto__;
})()
;})(switch__19280__auto__,c__19342__auto__,msg_hist,msg_names,msg))
})();
var state__19344__auto__ = (function (){var statearr_24216 = f__19343__auto__.call(null);
(statearr_24216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto__);

return statearr_24216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto__,msg_hist,msg_names,msg))
);

return c__19342__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19342__auto___24313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___24313,ch){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (c__19342__auto___24313,ch){
return (function (state_24296){
var state_val_24297 = (state_24296[(1)]);
if((state_val_24297 === (1))){
var state_24296__$1 = state_24296;
var statearr_24298_24314 = state_24296__$1;
(statearr_24298_24314[(2)] = null);

(statearr_24298_24314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24297 === (2))){
var state_24296__$1 = state_24296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24296__$1,(4),ch);
} else {
if((state_val_24297 === (3))){
var inst_24294 = (state_24296[(2)]);
var state_24296__$1 = state_24296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24296__$1,inst_24294);
} else {
if((state_val_24297 === (4))){
var inst_24284 = (state_24296[(7)]);
var inst_24284__$1 = (state_24296[(2)]);
var state_24296__$1 = (function (){var statearr_24299 = state_24296;
(statearr_24299[(7)] = inst_24284__$1);

return statearr_24299;
})();
if(cljs.core.truth_(inst_24284__$1)){
var statearr_24300_24315 = state_24296__$1;
(statearr_24300_24315[(1)] = (5));

} else {
var statearr_24301_24316 = state_24296__$1;
(statearr_24301_24316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24297 === (5))){
var inst_24284 = (state_24296[(7)]);
var inst_24286 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24284);
var state_24296__$1 = state_24296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24296__$1,(8),inst_24286);
} else {
if((state_val_24297 === (6))){
var state_24296__$1 = state_24296;
var statearr_24302_24317 = state_24296__$1;
(statearr_24302_24317[(2)] = null);

(statearr_24302_24317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24297 === (7))){
var inst_24292 = (state_24296[(2)]);
var state_24296__$1 = state_24296;
var statearr_24303_24318 = state_24296__$1;
(statearr_24303_24318[(2)] = inst_24292);

(statearr_24303_24318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24297 === (8))){
var inst_24288 = (state_24296[(2)]);
var state_24296__$1 = (function (){var statearr_24304 = state_24296;
(statearr_24304[(8)] = inst_24288);

return statearr_24304;
})();
var statearr_24305_24319 = state_24296__$1;
(statearr_24305_24319[(2)] = null);

(statearr_24305_24319[(1)] = (2));


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
});})(c__19342__auto___24313,ch))
;
return ((function (switch__19280__auto__,c__19342__auto___24313,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19281__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19281__auto____0 = (function (){
var statearr_24309 = [null,null,null,null,null,null,null,null,null];
(statearr_24309[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19281__auto__);

(statearr_24309[(1)] = (1));

return statearr_24309;
});
var figwheel$client$heads_up_plugin_$_state_machine__19281__auto____1 = (function (state_24296){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_24296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e24310){if((e24310 instanceof Object)){
var ex__19284__auto__ = e24310;
var statearr_24311_24320 = state_24296;
(statearr_24311_24320[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24321 = state_24296;
state_24296 = G__24321;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19281__auto__ = function(state_24296){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19281__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19281__auto____1.call(this,state_24296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19281__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19281__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19281__auto__;
})()
;})(switch__19280__auto__,c__19342__auto___24313,ch))
})();
var state__19344__auto__ = (function (){var statearr_24312 = f__19343__auto__.call(null);
(statearr_24312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___24313);

return statearr_24312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___24313,ch))
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
var c__19342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto__){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (c__19342__auto__){
return (function (state_24342){
var state_val_24343 = (state_24342[(1)]);
if((state_val_24343 === (1))){
var inst_24337 = cljs.core.async.timeout.call(null,(3000));
var state_24342__$1 = state_24342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24342__$1,(2),inst_24337);
} else {
if((state_val_24343 === (2))){
var inst_24339 = (state_24342[(2)]);
var inst_24340 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24342__$1 = (function (){var statearr_24344 = state_24342;
(statearr_24344[(7)] = inst_24339);

return statearr_24344;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24342__$1,inst_24340);
} else {
return null;
}
}
});})(c__19342__auto__))
;
return ((function (switch__19280__auto__,c__19342__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19281__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19281__auto____0 = (function (){
var statearr_24348 = [null,null,null,null,null,null,null,null];
(statearr_24348[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19281__auto__);

(statearr_24348[(1)] = (1));

return statearr_24348;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19281__auto____1 = (function (state_24342){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_24342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e24349){if((e24349 instanceof Object)){
var ex__19284__auto__ = e24349;
var statearr_24350_24352 = state_24342;
(statearr_24350_24352[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24353 = state_24342;
state_24342 = G__24353;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19281__auto__ = function(state_24342){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19281__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19281__auto____1.call(this,state_24342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19281__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19281__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19281__auto__;
})()
;})(switch__19280__auto__,c__19342__auto__))
})();
var state__19344__auto__ = (function (){var statearr_24351 = f__19343__auto__.call(null);
(statearr_24351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto__);

return statearr_24351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto__))
);

return c__19342__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24354){
var map__24360 = p__24354;
var map__24360__$1 = ((cljs.core.seq_QMARK_.call(null,map__24360))?cljs.core.apply.call(null,cljs.core.hash_map,map__24360):map__24360);
var ed = map__24360__$1;
var formatted_exception = cljs.core.get.call(null,map__24360__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24360__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24360__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24361_24365 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24362_24366 = null;
var count__24363_24367 = (0);
var i__24364_24368 = (0);
while(true){
if((i__24364_24368 < count__24363_24367)){
var msg_24369 = cljs.core._nth.call(null,chunk__24362_24366,i__24364_24368);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24369);

var G__24370 = seq__24361_24365;
var G__24371 = chunk__24362_24366;
var G__24372 = count__24363_24367;
var G__24373 = (i__24364_24368 + (1));
seq__24361_24365 = G__24370;
chunk__24362_24366 = G__24371;
count__24363_24367 = G__24372;
i__24364_24368 = G__24373;
continue;
} else {
var temp__4425__auto___24374 = cljs.core.seq.call(null,seq__24361_24365);
if(temp__4425__auto___24374){
var seq__24361_24375__$1 = temp__4425__auto___24374;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24361_24375__$1)){
var c__16894__auto___24376 = cljs.core.chunk_first.call(null,seq__24361_24375__$1);
var G__24377 = cljs.core.chunk_rest.call(null,seq__24361_24375__$1);
var G__24378 = c__16894__auto___24376;
var G__24379 = cljs.core.count.call(null,c__16894__auto___24376);
var G__24380 = (0);
seq__24361_24365 = G__24377;
chunk__24362_24366 = G__24378;
count__24363_24367 = G__24379;
i__24364_24368 = G__24380;
continue;
} else {
var msg_24381 = cljs.core.first.call(null,seq__24361_24375__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24381);

var G__24382 = cljs.core.next.call(null,seq__24361_24375__$1);
var G__24383 = null;
var G__24384 = (0);
var G__24385 = (0);
seq__24361_24365 = G__24382;
chunk__24362_24366 = G__24383;
count__24363_24367 = G__24384;
i__24364_24368 = G__24385;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24386){
var map__24388 = p__24386;
var map__24388__$1 = ((cljs.core.seq_QMARK_.call(null,map__24388))?cljs.core.apply.call(null,cljs.core.hash_map,map__24388):map__24388);
var w = map__24388__$1;
var message = cljs.core.get.call(null,map__24388__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__16097__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16097__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16097__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24395 = cljs.core.seq.call(null,plugins);
var chunk__24396 = null;
var count__24397 = (0);
var i__24398 = (0);
while(true){
if((i__24398 < count__24397)){
var vec__24399 = cljs.core._nth.call(null,chunk__24396,i__24398);
var k = cljs.core.nth.call(null,vec__24399,(0),null);
var plugin = cljs.core.nth.call(null,vec__24399,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24401 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24395,chunk__24396,count__24397,i__24398,pl_24401,vec__24399,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24401.call(null,msg_hist);
});})(seq__24395,chunk__24396,count__24397,i__24398,pl_24401,vec__24399,k,plugin))
);
} else {
}

var G__24402 = seq__24395;
var G__24403 = chunk__24396;
var G__24404 = count__24397;
var G__24405 = (i__24398 + (1));
seq__24395 = G__24402;
chunk__24396 = G__24403;
count__24397 = G__24404;
i__24398 = G__24405;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24395);
if(temp__4425__auto__){
var seq__24395__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24395__$1)){
var c__16894__auto__ = cljs.core.chunk_first.call(null,seq__24395__$1);
var G__24406 = cljs.core.chunk_rest.call(null,seq__24395__$1);
var G__24407 = c__16894__auto__;
var G__24408 = cljs.core.count.call(null,c__16894__auto__);
var G__24409 = (0);
seq__24395 = G__24406;
chunk__24396 = G__24407;
count__24397 = G__24408;
i__24398 = G__24409;
continue;
} else {
var vec__24400 = cljs.core.first.call(null,seq__24395__$1);
var k = cljs.core.nth.call(null,vec__24400,(0),null);
var plugin = cljs.core.nth.call(null,vec__24400,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24410 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24395,chunk__24396,count__24397,i__24398,pl_24410,vec__24400,k,plugin,seq__24395__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24410.call(null,msg_hist);
});})(seq__24395,chunk__24396,count__24397,i__24398,pl_24410,vec__24400,k,plugin,seq__24395__$1,temp__4425__auto__))
);
} else {
}

var G__24411 = cljs.core.next.call(null,seq__24395__$1);
var G__24412 = null;
var G__24413 = (0);
var G__24414 = (0);
seq__24395 = G__24411;
chunk__24396 = G__24412;
count__24397 = G__24413;
i__24398 = G__24414;
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
var G__24416 = arguments.length;
switch (G__24416) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var argseq__17149__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17149__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24419){
var map__24420 = p__24419;
var map__24420__$1 = ((cljs.core.seq_QMARK_.call(null,map__24420))?cljs.core.apply.call(null,cljs.core.hash_map,map__24420):map__24420);
var opts = map__24420__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24418){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24418));
});

//# sourceMappingURL=client.js.map?rel=1436104827248