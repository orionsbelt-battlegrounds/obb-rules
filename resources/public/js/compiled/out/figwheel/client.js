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
var G__33706__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__33706 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33707__i = 0, G__33707__a = new Array(arguments.length -  0);
while (G__33707__i < G__33707__a.length) {G__33707__a[G__33707__i] = arguments[G__33707__i + 0]; ++G__33707__i;}
  args = new cljs.core.IndexedSeq(G__33707__a,0);
} 
return G__33706__delegate.call(this,args);};
G__33706.cljs$lang$maxFixedArity = 0;
G__33706.cljs$lang$applyTo = (function (arglist__33708){
var args = cljs.core.seq(arglist__33708);
return G__33706__delegate(args);
});
G__33706.cljs$core$IFn$_invoke$arity$variadic = G__33706__delegate;
return G__33706;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__33709){
var map__33711 = p__33709;
var map__33711__$1 = ((cljs.core.seq_QMARK_.call(null,map__33711))?cljs.core.apply.call(null,cljs.core.hash_map,map__33711):map__33711);
var message = cljs.core.get.call(null,map__33711__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__33711__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__19453__auto___33840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto___33840,ch){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (c__19453__auto___33840,ch){
return (function (state_33814){
var state_val_33815 = (state_33814[(1)]);
if((state_val_33815 === (7))){
var inst_33810 = (state_33814[(2)]);
var state_33814__$1 = state_33814;
var statearr_33816_33841 = state_33814__$1;
(statearr_33816_33841[(2)] = inst_33810);

(statearr_33816_33841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (1))){
var state_33814__$1 = state_33814;
var statearr_33817_33842 = state_33814__$1;
(statearr_33817_33842[(2)] = null);

(statearr_33817_33842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (4))){
var inst_33778 = (state_33814[(7)]);
var inst_33778__$1 = (state_33814[(2)]);
var state_33814__$1 = (function (){var statearr_33818 = state_33814;
(statearr_33818[(7)] = inst_33778__$1);

return statearr_33818;
})();
if(cljs.core.truth_(inst_33778__$1)){
var statearr_33819_33843 = state_33814__$1;
(statearr_33819_33843[(1)] = (5));

} else {
var statearr_33820_33844 = state_33814__$1;
(statearr_33820_33844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (13))){
var state_33814__$1 = state_33814;
var statearr_33821_33845 = state_33814__$1;
(statearr_33821_33845[(2)] = null);

(statearr_33821_33845[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (6))){
var state_33814__$1 = state_33814;
var statearr_33822_33846 = state_33814__$1;
(statearr_33822_33846[(2)] = null);

(statearr_33822_33846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (3))){
var inst_33812 = (state_33814[(2)]);
var state_33814__$1 = state_33814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33814__$1,inst_33812);
} else {
if((state_val_33815 === (12))){
var inst_33785 = (state_33814[(8)]);
var inst_33798 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33785);
var inst_33799 = cljs.core.first.call(null,inst_33798);
var inst_33800 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33799);
var inst_33801 = console.warn("Figwheel: Not loading code with warnings - ",inst_33800);
var state_33814__$1 = state_33814;
var statearr_33823_33847 = state_33814__$1;
(statearr_33823_33847[(2)] = inst_33801);

(statearr_33823_33847[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (2))){
var state_33814__$1 = state_33814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33814__$1,(4),ch);
} else {
if((state_val_33815 === (11))){
var inst_33794 = (state_33814[(2)]);
var state_33814__$1 = state_33814;
var statearr_33824_33848 = state_33814__$1;
(statearr_33824_33848[(2)] = inst_33794);

(statearr_33824_33848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (9))){
var inst_33784 = (state_33814[(9)]);
var inst_33796 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33784,opts);
var state_33814__$1 = state_33814;
if(cljs.core.truth_(inst_33796)){
var statearr_33825_33849 = state_33814__$1;
(statearr_33825_33849[(1)] = (12));

} else {
var statearr_33826_33850 = state_33814__$1;
(statearr_33826_33850[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (5))){
var inst_33784 = (state_33814[(9)]);
var inst_33778 = (state_33814[(7)]);
var inst_33780 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33781 = (new cljs.core.PersistentArrayMap(null,2,inst_33780,null));
var inst_33782 = (new cljs.core.PersistentHashSet(null,inst_33781,null));
var inst_33783 = figwheel.client.focus_msgs.call(null,inst_33782,inst_33778);
var inst_33784__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33783);
var inst_33785 = cljs.core.first.call(null,inst_33783);
var inst_33786 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33784__$1,opts);
var state_33814__$1 = (function (){var statearr_33827 = state_33814;
(statearr_33827[(9)] = inst_33784__$1);

(statearr_33827[(8)] = inst_33785);

return statearr_33827;
})();
if(cljs.core.truth_(inst_33786)){
var statearr_33828_33851 = state_33814__$1;
(statearr_33828_33851[(1)] = (8));

} else {
var statearr_33829_33852 = state_33814__$1;
(statearr_33829_33852[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (14))){
var inst_33804 = (state_33814[(2)]);
var state_33814__$1 = state_33814;
var statearr_33830_33853 = state_33814__$1;
(statearr_33830_33853[(2)] = inst_33804);

(statearr_33830_33853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (10))){
var inst_33806 = (state_33814[(2)]);
var state_33814__$1 = (function (){var statearr_33831 = state_33814;
(statearr_33831[(10)] = inst_33806);

return statearr_33831;
})();
var statearr_33832_33854 = state_33814__$1;
(statearr_33832_33854[(2)] = null);

(statearr_33832_33854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (8))){
var inst_33785 = (state_33814[(8)]);
var inst_33788 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33789 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33785);
var inst_33790 = cljs.core.async.timeout.call(null,(1000));
var inst_33791 = [inst_33789,inst_33790];
var inst_33792 = (new cljs.core.PersistentVector(null,2,(5),inst_33788,inst_33791,null));
var state_33814__$1 = state_33814;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33814__$1,(11),inst_33792);
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
});})(c__19453__auto___33840,ch))
;
return ((function (switch__19391__auto__,c__19453__auto___33840,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19392__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19392__auto____0 = (function (){
var statearr_33836 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33836[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19392__auto__);

(statearr_33836[(1)] = (1));

return statearr_33836;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19392__auto____1 = (function (state_33814){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_33814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e33837){if((e33837 instanceof Object)){
var ex__19395__auto__ = e33837;
var statearr_33838_33855 = state_33814;
(statearr_33838_33855[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33856 = state_33814;
state_33814 = G__33856;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19392__auto__ = function(state_33814){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19392__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19392__auto____1.call(this,state_33814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19392__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19392__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19392__auto__;
})()
;})(switch__19391__auto__,c__19453__auto___33840,ch))
})();
var state__19455__auto__ = (function (){var statearr_33839 = f__19454__auto__.call(null);
(statearr_33839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto___33840);

return statearr_33839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto___33840,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33857_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33857_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_33864 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_33864){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_33862 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_33863 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_33862,_STAR_print_newline_STAR_33863,base_path_33864){
return (function() { 
var G__33865__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__33865 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33866__i = 0, G__33866__a = new Array(arguments.length -  0);
while (G__33866__i < G__33866__a.length) {G__33866__a[G__33866__i] = arguments[G__33866__i + 0]; ++G__33866__i;}
  args = new cljs.core.IndexedSeq(G__33866__a,0);
} 
return G__33865__delegate.call(this,args);};
G__33865.cljs$lang$maxFixedArity = 0;
G__33865.cljs$lang$applyTo = (function (arglist__33867){
var args = cljs.core.seq(arglist__33867);
return G__33865__delegate(args);
});
G__33865.cljs$core$IFn$_invoke$arity$variadic = G__33865__delegate;
return G__33865;
})()
;})(_STAR_print_fn_STAR_33862,_STAR_print_newline_STAR_33863,base_path_33864))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33863;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33862;
}}catch (e33861){if((e33861 instanceof Error)){
var e = e33861;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33864], null));
} else {
var e = e33861;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_33864))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__33868){
var map__33873 = p__33868;
var map__33873__$1 = ((cljs.core.seq_QMARK_.call(null,map__33873))?cljs.core.apply.call(null,cljs.core.hash_map,map__33873):map__33873);
var opts = map__33873__$1;
var build_id = cljs.core.get.call(null,map__33873__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__33873,map__33873__$1,opts,build_id){
return (function (p__33874){
var vec__33875 = p__33874;
var map__33876 = cljs.core.nth.call(null,vec__33875,(0),null);
var map__33876__$1 = ((cljs.core.seq_QMARK_.call(null,map__33876))?cljs.core.apply.call(null,cljs.core.hash_map,map__33876):map__33876);
var msg = map__33876__$1;
var msg_name = cljs.core.get.call(null,map__33876__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33875,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__33875,map__33876,map__33876__$1,msg,msg_name,_,map__33873,map__33873__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__33875,map__33876,map__33876__$1,msg,msg_name,_,map__33873,map__33873__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__33873,map__33873__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__33880){
var vec__33881 = p__33880;
var map__33882 = cljs.core.nth.call(null,vec__33881,(0),null);
var map__33882__$1 = ((cljs.core.seq_QMARK_.call(null,map__33882))?cljs.core.apply.call(null,cljs.core.hash_map,map__33882):map__33882);
var msg = map__33882__$1;
var msg_name = cljs.core.get.call(null,map__33882__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33881,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__33883){
var map__33891 = p__33883;
var map__33891__$1 = ((cljs.core.seq_QMARK_.call(null,map__33891))?cljs.core.apply.call(null,cljs.core.hash_map,map__33891):map__33891);
var on_compile_warning = cljs.core.get.call(null,map__33891__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__33891__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__33891,map__33891__$1,on_compile_warning,on_compile_fail){
return (function (p__33892){
var vec__33893 = p__33892;
var map__33894 = cljs.core.nth.call(null,vec__33893,(0),null);
var map__33894__$1 = ((cljs.core.seq_QMARK_.call(null,map__33894))?cljs.core.apply.call(null,cljs.core.hash_map,map__33894):map__33894);
var msg = map__33894__$1;
var msg_name = cljs.core.get.call(null,map__33894__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33893,(1));
var pred__33895 = cljs.core._EQ_;
var expr__33896 = msg_name;
if(cljs.core.truth_(pred__33895.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33896))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33895.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33896))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__33891,map__33891__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (c__19453__auto__,msg_hist,msg_names,msg){
return (function (state_34097){
var state_val_34098 = (state_34097[(1)]);
if((state_val_34098 === (7))){
var inst_34031 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
var statearr_34099_34140 = state_34097__$1;
(statearr_34099_34140[(2)] = inst_34031);

(statearr_34099_34140[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (20))){
var inst_34059 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34097__$1 = state_34097;
if(cljs.core.truth_(inst_34059)){
var statearr_34100_34141 = state_34097__$1;
(statearr_34100_34141[(1)] = (22));

} else {
var statearr_34101_34142 = state_34097__$1;
(statearr_34101_34142[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (27))){
var inst_34071 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34072 = figwheel.client.heads_up.display_warning.call(null,inst_34071);
var state_34097__$1 = state_34097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34097__$1,(30),inst_34072);
} else {
if((state_val_34098 === (1))){
var inst_34019 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34097__$1 = state_34097;
if(cljs.core.truth_(inst_34019)){
var statearr_34102_34143 = state_34097__$1;
(statearr_34102_34143[(1)] = (2));

} else {
var statearr_34103_34144 = state_34097__$1;
(statearr_34103_34144[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (24))){
var inst_34087 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
var statearr_34104_34145 = state_34097__$1;
(statearr_34104_34145[(2)] = inst_34087);

(statearr_34104_34145[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (4))){
var inst_34095 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34097__$1,inst_34095);
} else {
if((state_val_34098 === (15))){
var inst_34047 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34048 = figwheel.client.format_messages.call(null,inst_34047);
var inst_34049 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34050 = figwheel.client.heads_up.display_error.call(null,inst_34048,inst_34049);
var state_34097__$1 = state_34097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34097__$1,(18),inst_34050);
} else {
if((state_val_34098 === (21))){
var inst_34089 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
var statearr_34105_34146 = state_34097__$1;
(statearr_34105_34146[(2)] = inst_34089);

(statearr_34105_34146[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (31))){
var inst_34078 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34097__$1 = state_34097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34097__$1,(34),inst_34078);
} else {
if((state_val_34098 === (32))){
var state_34097__$1 = state_34097;
var statearr_34106_34147 = state_34097__$1;
(statearr_34106_34147[(2)] = null);

(statearr_34106_34147[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (33))){
var inst_34083 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
var statearr_34107_34148 = state_34097__$1;
(statearr_34107_34148[(2)] = inst_34083);

(statearr_34107_34148[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (13))){
var inst_34037 = (state_34097[(2)]);
var inst_34038 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34039 = figwheel.client.format_messages.call(null,inst_34038);
var inst_34040 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34041 = figwheel.client.heads_up.display_error.call(null,inst_34039,inst_34040);
var state_34097__$1 = (function (){var statearr_34108 = state_34097;
(statearr_34108[(7)] = inst_34037);

return statearr_34108;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34097__$1,(14),inst_34041);
} else {
if((state_val_34098 === (22))){
var inst_34061 = figwheel.client.heads_up.clear.call(null);
var state_34097__$1 = state_34097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34097__$1,(25),inst_34061);
} else {
if((state_val_34098 === (29))){
var inst_34085 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
var statearr_34109_34149 = state_34097__$1;
(statearr_34109_34149[(2)] = inst_34085);

(statearr_34109_34149[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (6))){
var inst_34027 = figwheel.client.heads_up.clear.call(null);
var state_34097__$1 = state_34097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34097__$1,(9),inst_34027);
} else {
if((state_val_34098 === (28))){
var inst_34076 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34097__$1 = state_34097;
if(cljs.core.truth_(inst_34076)){
var statearr_34110_34150 = state_34097__$1;
(statearr_34110_34150[(1)] = (31));

} else {
var statearr_34111_34151 = state_34097__$1;
(statearr_34111_34151[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (25))){
var inst_34063 = (state_34097[(2)]);
var inst_34064 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34065 = figwheel.client.heads_up.display_warning.call(null,inst_34064);
var state_34097__$1 = (function (){var statearr_34112 = state_34097;
(statearr_34112[(8)] = inst_34063);

return statearr_34112;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34097__$1,(26),inst_34065);
} else {
if((state_val_34098 === (34))){
var inst_34080 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
var statearr_34113_34152 = state_34097__$1;
(statearr_34113_34152[(2)] = inst_34080);

(statearr_34113_34152[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (17))){
var inst_34091 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
var statearr_34114_34153 = state_34097__$1;
(statearr_34114_34153[(2)] = inst_34091);

(statearr_34114_34153[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (3))){
var inst_34033 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34097__$1 = state_34097;
if(cljs.core.truth_(inst_34033)){
var statearr_34115_34154 = state_34097__$1;
(statearr_34115_34154[(1)] = (10));

} else {
var statearr_34116_34155 = state_34097__$1;
(statearr_34116_34155[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (12))){
var inst_34093 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
var statearr_34117_34156 = state_34097__$1;
(statearr_34117_34156[(2)] = inst_34093);

(statearr_34117_34156[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (2))){
var inst_34021 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34097__$1 = state_34097;
if(cljs.core.truth_(inst_34021)){
var statearr_34118_34157 = state_34097__$1;
(statearr_34118_34157[(1)] = (5));

} else {
var statearr_34119_34158 = state_34097__$1;
(statearr_34119_34158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (23))){
var inst_34069 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34097__$1 = state_34097;
if(cljs.core.truth_(inst_34069)){
var statearr_34120_34159 = state_34097__$1;
(statearr_34120_34159[(1)] = (27));

} else {
var statearr_34121_34160 = state_34097__$1;
(statearr_34121_34160[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (19))){
var inst_34056 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34057 = figwheel.client.heads_up.append_message.call(null,inst_34056);
var state_34097__$1 = state_34097;
var statearr_34122_34161 = state_34097__$1;
(statearr_34122_34161[(2)] = inst_34057);

(statearr_34122_34161[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (11))){
var inst_34045 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34097__$1 = state_34097;
if(cljs.core.truth_(inst_34045)){
var statearr_34123_34162 = state_34097__$1;
(statearr_34123_34162[(1)] = (15));

} else {
var statearr_34124_34163 = state_34097__$1;
(statearr_34124_34163[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (9))){
var inst_34029 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
var statearr_34125_34164 = state_34097__$1;
(statearr_34125_34164[(2)] = inst_34029);

(statearr_34125_34164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (5))){
var inst_34023 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34097__$1 = state_34097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34097__$1,(8),inst_34023);
} else {
if((state_val_34098 === (14))){
var inst_34043 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
var statearr_34126_34165 = state_34097__$1;
(statearr_34126_34165[(2)] = inst_34043);

(statearr_34126_34165[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (26))){
var inst_34067 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
var statearr_34127_34166 = state_34097__$1;
(statearr_34127_34166[(2)] = inst_34067);

(statearr_34127_34166[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (16))){
var inst_34054 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34097__$1 = state_34097;
if(cljs.core.truth_(inst_34054)){
var statearr_34128_34167 = state_34097__$1;
(statearr_34128_34167[(1)] = (19));

} else {
var statearr_34129_34168 = state_34097__$1;
(statearr_34129_34168[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (30))){
var inst_34074 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
var statearr_34130_34169 = state_34097__$1;
(statearr_34130_34169[(2)] = inst_34074);

(statearr_34130_34169[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (10))){
var inst_34035 = figwheel.client.heads_up.clear.call(null);
var state_34097__$1 = state_34097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34097__$1,(13),inst_34035);
} else {
if((state_val_34098 === (18))){
var inst_34052 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
var statearr_34131_34170 = state_34097__$1;
(statearr_34131_34170[(2)] = inst_34052);

(statearr_34131_34170[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (8))){
var inst_34025 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
var statearr_34132_34171 = state_34097__$1;
(statearr_34132_34171[(2)] = inst_34025);

(statearr_34132_34171[(1)] = (7));


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
});})(c__19453__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19391__auto__,c__19453__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19392__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19392__auto____0 = (function (){
var statearr_34136 = [null,null,null,null,null,null,null,null,null];
(statearr_34136[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19392__auto__);

(statearr_34136[(1)] = (1));

return statearr_34136;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19392__auto____1 = (function (state_34097){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_34097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e34137){if((e34137 instanceof Object)){
var ex__19395__auto__ = e34137;
var statearr_34138_34172 = state_34097;
(statearr_34138_34172[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34173 = state_34097;
state_34097 = G__34173;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19392__auto__ = function(state_34097){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19392__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19392__auto____1.call(this,state_34097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19392__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19392__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19392__auto__;
})()
;})(switch__19391__auto__,c__19453__auto__,msg_hist,msg_names,msg))
})();
var state__19455__auto__ = (function (){var statearr_34139 = f__19454__auto__.call(null);
(statearr_34139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto__);

return statearr_34139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto__,msg_hist,msg_names,msg))
);

return c__19453__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19453__auto___34236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto___34236,ch){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (c__19453__auto___34236,ch){
return (function (state_34219){
var state_val_34220 = (state_34219[(1)]);
if((state_val_34220 === (1))){
var state_34219__$1 = state_34219;
var statearr_34221_34237 = state_34219__$1;
(statearr_34221_34237[(2)] = null);

(statearr_34221_34237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (2))){
var state_34219__$1 = state_34219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34219__$1,(4),ch);
} else {
if((state_val_34220 === (3))){
var inst_34217 = (state_34219[(2)]);
var state_34219__$1 = state_34219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34219__$1,inst_34217);
} else {
if((state_val_34220 === (4))){
var inst_34207 = (state_34219[(7)]);
var inst_34207__$1 = (state_34219[(2)]);
var state_34219__$1 = (function (){var statearr_34222 = state_34219;
(statearr_34222[(7)] = inst_34207__$1);

return statearr_34222;
})();
if(cljs.core.truth_(inst_34207__$1)){
var statearr_34223_34238 = state_34219__$1;
(statearr_34223_34238[(1)] = (5));

} else {
var statearr_34224_34239 = state_34219__$1;
(statearr_34224_34239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (5))){
var inst_34207 = (state_34219[(7)]);
var inst_34209 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34207);
var state_34219__$1 = state_34219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34219__$1,(8),inst_34209);
} else {
if((state_val_34220 === (6))){
var state_34219__$1 = state_34219;
var statearr_34225_34240 = state_34219__$1;
(statearr_34225_34240[(2)] = null);

(statearr_34225_34240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (7))){
var inst_34215 = (state_34219[(2)]);
var state_34219__$1 = state_34219;
var statearr_34226_34241 = state_34219__$1;
(statearr_34226_34241[(2)] = inst_34215);

(statearr_34226_34241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (8))){
var inst_34211 = (state_34219[(2)]);
var state_34219__$1 = (function (){var statearr_34227 = state_34219;
(statearr_34227[(8)] = inst_34211);

return statearr_34227;
})();
var statearr_34228_34242 = state_34219__$1;
(statearr_34228_34242[(2)] = null);

(statearr_34228_34242[(1)] = (2));


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
});})(c__19453__auto___34236,ch))
;
return ((function (switch__19391__auto__,c__19453__auto___34236,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19392__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19392__auto____0 = (function (){
var statearr_34232 = [null,null,null,null,null,null,null,null,null];
(statearr_34232[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19392__auto__);

(statearr_34232[(1)] = (1));

return statearr_34232;
});
var figwheel$client$heads_up_plugin_$_state_machine__19392__auto____1 = (function (state_34219){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_34219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e34233){if((e34233 instanceof Object)){
var ex__19395__auto__ = e34233;
var statearr_34234_34243 = state_34219;
(statearr_34234_34243[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34244 = state_34219;
state_34219 = G__34244;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19392__auto__ = function(state_34219){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19392__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19392__auto____1.call(this,state_34219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19392__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19392__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19392__auto__;
})()
;})(switch__19391__auto__,c__19453__auto___34236,ch))
})();
var state__19455__auto__ = (function (){var statearr_34235 = f__19454__auto__.call(null);
(statearr_34235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto___34236);

return statearr_34235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto___34236,ch))
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
var c__19453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto__){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (c__19453__auto__){
return (function (state_34265){
var state_val_34266 = (state_34265[(1)]);
if((state_val_34266 === (1))){
var inst_34260 = cljs.core.async.timeout.call(null,(3000));
var state_34265__$1 = state_34265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34265__$1,(2),inst_34260);
} else {
if((state_val_34266 === (2))){
var inst_34262 = (state_34265[(2)]);
var inst_34263 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34265__$1 = (function (){var statearr_34267 = state_34265;
(statearr_34267[(7)] = inst_34262);

return statearr_34267;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34265__$1,inst_34263);
} else {
return null;
}
}
});})(c__19453__auto__))
;
return ((function (switch__19391__auto__,c__19453__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19392__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19392__auto____0 = (function (){
var statearr_34271 = [null,null,null,null,null,null,null,null];
(statearr_34271[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19392__auto__);

(statearr_34271[(1)] = (1));

return statearr_34271;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19392__auto____1 = (function (state_34265){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_34265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e34272){if((e34272 instanceof Object)){
var ex__19395__auto__ = e34272;
var statearr_34273_34275 = state_34265;
(statearr_34273_34275[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34276 = state_34265;
state_34265 = G__34276;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19392__auto__ = function(state_34265){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19392__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19392__auto____1.call(this,state_34265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19392__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19392__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19392__auto__;
})()
;})(switch__19391__auto__,c__19453__auto__))
})();
var state__19455__auto__ = (function (){var statearr_34274 = f__19454__auto__.call(null);
(statearr_34274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto__);

return statearr_34274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto__))
);

return c__19453__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34277){
var map__34283 = p__34277;
var map__34283__$1 = ((cljs.core.seq_QMARK_.call(null,map__34283))?cljs.core.apply.call(null,cljs.core.hash_map,map__34283):map__34283);
var ed = map__34283__$1;
var formatted_exception = cljs.core.get.call(null,map__34283__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__34283__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__34283__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__34284_34288 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__34285_34289 = null;
var count__34286_34290 = (0);
var i__34287_34291 = (0);
while(true){
if((i__34287_34291 < count__34286_34290)){
var msg_34292 = cljs.core._nth.call(null,chunk__34285_34289,i__34287_34291);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34292);

var G__34293 = seq__34284_34288;
var G__34294 = chunk__34285_34289;
var G__34295 = count__34286_34290;
var G__34296 = (i__34287_34291 + (1));
seq__34284_34288 = G__34293;
chunk__34285_34289 = G__34294;
count__34286_34290 = G__34295;
i__34287_34291 = G__34296;
continue;
} else {
var temp__4425__auto___34297 = cljs.core.seq.call(null,seq__34284_34288);
if(temp__4425__auto___34297){
var seq__34284_34298__$1 = temp__4425__auto___34297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34284_34298__$1)){
var c__16894__auto___34299 = cljs.core.chunk_first.call(null,seq__34284_34298__$1);
var G__34300 = cljs.core.chunk_rest.call(null,seq__34284_34298__$1);
var G__34301 = c__16894__auto___34299;
var G__34302 = cljs.core.count.call(null,c__16894__auto___34299);
var G__34303 = (0);
seq__34284_34288 = G__34300;
chunk__34285_34289 = G__34301;
count__34286_34290 = G__34302;
i__34287_34291 = G__34303;
continue;
} else {
var msg_34304 = cljs.core.first.call(null,seq__34284_34298__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34304);

var G__34305 = cljs.core.next.call(null,seq__34284_34298__$1);
var G__34306 = null;
var G__34307 = (0);
var G__34308 = (0);
seq__34284_34288 = G__34305;
chunk__34285_34289 = G__34306;
count__34286_34290 = G__34307;
i__34287_34291 = G__34308;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34309){
var map__34311 = p__34309;
var map__34311__$1 = ((cljs.core.seq_QMARK_.call(null,map__34311))?cljs.core.apply.call(null,cljs.core.hash_map,map__34311):map__34311);
var w = map__34311__$1;
var message = cljs.core.get.call(null,map__34311__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__34318 = cljs.core.seq.call(null,plugins);
var chunk__34319 = null;
var count__34320 = (0);
var i__34321 = (0);
while(true){
if((i__34321 < count__34320)){
var vec__34322 = cljs.core._nth.call(null,chunk__34319,i__34321);
var k = cljs.core.nth.call(null,vec__34322,(0),null);
var plugin = cljs.core.nth.call(null,vec__34322,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34324 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34318,chunk__34319,count__34320,i__34321,pl_34324,vec__34322,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34324.call(null,msg_hist);
});})(seq__34318,chunk__34319,count__34320,i__34321,pl_34324,vec__34322,k,plugin))
);
} else {
}

var G__34325 = seq__34318;
var G__34326 = chunk__34319;
var G__34327 = count__34320;
var G__34328 = (i__34321 + (1));
seq__34318 = G__34325;
chunk__34319 = G__34326;
count__34320 = G__34327;
i__34321 = G__34328;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__34318);
if(temp__4425__auto__){
var seq__34318__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34318__$1)){
var c__16894__auto__ = cljs.core.chunk_first.call(null,seq__34318__$1);
var G__34329 = cljs.core.chunk_rest.call(null,seq__34318__$1);
var G__34330 = c__16894__auto__;
var G__34331 = cljs.core.count.call(null,c__16894__auto__);
var G__34332 = (0);
seq__34318 = G__34329;
chunk__34319 = G__34330;
count__34320 = G__34331;
i__34321 = G__34332;
continue;
} else {
var vec__34323 = cljs.core.first.call(null,seq__34318__$1);
var k = cljs.core.nth.call(null,vec__34323,(0),null);
var plugin = cljs.core.nth.call(null,vec__34323,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34333 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34318,chunk__34319,count__34320,i__34321,pl_34333,vec__34323,k,plugin,seq__34318__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34333.call(null,msg_hist);
});})(seq__34318,chunk__34319,count__34320,i__34321,pl_34333,vec__34323,k,plugin,seq__34318__$1,temp__4425__auto__))
);
} else {
}

var G__34334 = cljs.core.next.call(null,seq__34318__$1);
var G__34335 = null;
var G__34336 = (0);
var G__34337 = (0);
seq__34318 = G__34334;
chunk__34319 = G__34335;
count__34320 = G__34336;
i__34321 = G__34337;
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
var G__34339 = arguments.length;
switch (G__34339) {
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

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34342){
var map__34343 = p__34342;
var map__34343__$1 = ((cljs.core.seq_QMARK_.call(null,map__34343))?cljs.core.apply.call(null,cljs.core.hash_map,map__34343):map__34343);
var opts = map__34343__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34341){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34341));
});

//# sourceMappingURL=client.js.map?rel=1436517560331