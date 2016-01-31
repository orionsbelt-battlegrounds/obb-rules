// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
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
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__40475 = cljs.core._EQ_;
var expr__40476 = (function (){var or__18370__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e40479){if((e40479 instanceof Error)){
var e = e40479;
return false;
} else {
throw e40479;

}
}})();
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__40475.call(null,"true",expr__40476))){
return true;
} else {
if(cljs.core.truth_(pred__40475.call(null,"false",expr__40476))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__40476)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e40481){if((e40481 instanceof Error)){
var e = e40481;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e40481;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19435__auto__ = [];
var len__19428__auto___40483 = arguments.length;
var i__19429__auto___40484 = (0);
while(true){
if((i__19429__auto___40484 < len__19428__auto___40483)){
args__19435__auto__.push((arguments[i__19429__auto___40484]));

var G__40485 = (i__19429__auto___40484 + (1));
i__19429__auto___40484 = G__40485;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((0) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19436__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq40482){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40482));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__40486){
var map__40489 = p__40486;
var map__40489__$1 = ((((!((map__40489 == null)))?((((map__40489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40489):map__40489);
var message = cljs.core.get.call(null,map__40489__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__40489__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18370__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18358__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18358__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18358__auto__;
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
var c__21794__auto___40651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21794__auto___40651,ch){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (c__21794__auto___40651,ch){
return (function (state_40620){
var state_val_40621 = (state_40620[(1)]);
if((state_val_40621 === (7))){
var inst_40616 = (state_40620[(2)]);
var state_40620__$1 = state_40620;
var statearr_40622_40652 = state_40620__$1;
(statearr_40622_40652[(2)] = inst_40616);

(statearr_40622_40652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (1))){
var state_40620__$1 = state_40620;
var statearr_40623_40653 = state_40620__$1;
(statearr_40623_40653[(2)] = null);

(statearr_40623_40653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (4))){
var inst_40573 = (state_40620[(7)]);
var inst_40573__$1 = (state_40620[(2)]);
var state_40620__$1 = (function (){var statearr_40624 = state_40620;
(statearr_40624[(7)] = inst_40573__$1);

return statearr_40624;
})();
if(cljs.core.truth_(inst_40573__$1)){
var statearr_40625_40654 = state_40620__$1;
(statearr_40625_40654[(1)] = (5));

} else {
var statearr_40626_40655 = state_40620__$1;
(statearr_40626_40655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (15))){
var inst_40580 = (state_40620[(8)]);
var inst_40595 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40580);
var inst_40596 = cljs.core.first.call(null,inst_40595);
var inst_40597 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_40596);
var inst_40598 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_40597)].join('');
var inst_40599 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_40598);
var state_40620__$1 = state_40620;
var statearr_40627_40656 = state_40620__$1;
(statearr_40627_40656[(2)] = inst_40599);

(statearr_40627_40656[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (13))){
var inst_40604 = (state_40620[(2)]);
var state_40620__$1 = state_40620;
var statearr_40628_40657 = state_40620__$1;
(statearr_40628_40657[(2)] = inst_40604);

(statearr_40628_40657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (6))){
var state_40620__$1 = state_40620;
var statearr_40629_40658 = state_40620__$1;
(statearr_40629_40658[(2)] = null);

(statearr_40629_40658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (17))){
var inst_40602 = (state_40620[(2)]);
var state_40620__$1 = state_40620;
var statearr_40630_40659 = state_40620__$1;
(statearr_40630_40659[(2)] = inst_40602);

(statearr_40630_40659[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (3))){
var inst_40618 = (state_40620[(2)]);
var state_40620__$1 = state_40620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40620__$1,inst_40618);
} else {
if((state_val_40621 === (12))){
var inst_40579 = (state_40620[(9)]);
var inst_40593 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_40579,opts);
var state_40620__$1 = state_40620;
if(cljs.core.truth_(inst_40593)){
var statearr_40631_40660 = state_40620__$1;
(statearr_40631_40660[(1)] = (15));

} else {
var statearr_40632_40661 = state_40620__$1;
(statearr_40632_40661[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (2))){
var state_40620__$1 = state_40620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40620__$1,(4),ch);
} else {
if((state_val_40621 === (11))){
var inst_40580 = (state_40620[(8)]);
var inst_40585 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40586 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_40580);
var inst_40587 = cljs.core.async.timeout.call(null,(1000));
var inst_40588 = [inst_40586,inst_40587];
var inst_40589 = (new cljs.core.PersistentVector(null,2,(5),inst_40585,inst_40588,null));
var state_40620__$1 = state_40620;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40620__$1,(14),inst_40589);
} else {
if((state_val_40621 === (9))){
var inst_40580 = (state_40620[(8)]);
var inst_40606 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_40607 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40580);
var inst_40608 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40607);
var inst_40609 = [cljs.core.str("Not loading: "),cljs.core.str(inst_40608)].join('');
var inst_40610 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_40609);
var state_40620__$1 = (function (){var statearr_40633 = state_40620;
(statearr_40633[(10)] = inst_40606);

return statearr_40633;
})();
var statearr_40634_40662 = state_40620__$1;
(statearr_40634_40662[(2)] = inst_40610);

(statearr_40634_40662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (5))){
var inst_40573 = (state_40620[(7)]);
var inst_40575 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_40576 = (new cljs.core.PersistentArrayMap(null,2,inst_40575,null));
var inst_40577 = (new cljs.core.PersistentHashSet(null,inst_40576,null));
var inst_40578 = figwheel.client.focus_msgs.call(null,inst_40577,inst_40573);
var inst_40579 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_40578);
var inst_40580 = cljs.core.first.call(null,inst_40578);
var inst_40581 = figwheel.client.autoload_QMARK_.call(null);
var state_40620__$1 = (function (){var statearr_40635 = state_40620;
(statearr_40635[(8)] = inst_40580);

(statearr_40635[(9)] = inst_40579);

return statearr_40635;
})();
if(cljs.core.truth_(inst_40581)){
var statearr_40636_40663 = state_40620__$1;
(statearr_40636_40663[(1)] = (8));

} else {
var statearr_40637_40664 = state_40620__$1;
(statearr_40637_40664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (14))){
var inst_40591 = (state_40620[(2)]);
var state_40620__$1 = state_40620;
var statearr_40638_40665 = state_40620__$1;
(statearr_40638_40665[(2)] = inst_40591);

(statearr_40638_40665[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (16))){
var state_40620__$1 = state_40620;
var statearr_40639_40666 = state_40620__$1;
(statearr_40639_40666[(2)] = null);

(statearr_40639_40666[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (10))){
var inst_40612 = (state_40620[(2)]);
var state_40620__$1 = (function (){var statearr_40640 = state_40620;
(statearr_40640[(11)] = inst_40612);

return statearr_40640;
})();
var statearr_40641_40667 = state_40620__$1;
(statearr_40641_40667[(2)] = null);

(statearr_40641_40667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (8))){
var inst_40579 = (state_40620[(9)]);
var inst_40583 = figwheel.client.reload_file_state_QMARK_.call(null,inst_40579,opts);
var state_40620__$1 = state_40620;
if(cljs.core.truth_(inst_40583)){
var statearr_40642_40668 = state_40620__$1;
(statearr_40642_40668[(1)] = (11));

} else {
var statearr_40643_40669 = state_40620__$1;
(statearr_40643_40669[(1)] = (12));

}

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
});})(c__21794__auto___40651,ch))
;
return ((function (switch__21682__auto__,c__21794__auto___40651,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21683__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21683__auto____0 = (function (){
var statearr_40647 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40647[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21683__auto__);

(statearr_40647[(1)] = (1));

return statearr_40647;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21683__auto____1 = (function (state_40620){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_40620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e40648){if((e40648 instanceof Object)){
var ex__21686__auto__ = e40648;
var statearr_40649_40670 = state_40620;
(statearr_40649_40670[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40671 = state_40620;
state_40620 = G__40671;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21683__auto__ = function(state_40620){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21683__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21683__auto____1.call(this,state_40620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21683__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21683__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21683__auto__;
})()
;})(switch__21682__auto__,c__21794__auto___40651,ch))
})();
var state__21796__auto__ = (function (){var statearr_40650 = f__21795__auto__.call(null);
(statearr_40650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto___40651);

return statearr_40650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(c__21794__auto___40651,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__40672_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__40672_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_40679 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_40679){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_40677 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_40678 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40678;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40677;
}}catch (e40676){if((e40676 instanceof Error)){
var e = e40676;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_40679], null));
} else {
var e = e40676;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_40679))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__40680){
var map__40687 = p__40680;
var map__40687__$1 = ((((!((map__40687 == null)))?((((map__40687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40687):map__40687);
var opts = map__40687__$1;
var build_id = cljs.core.get.call(null,map__40687__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__40687,map__40687__$1,opts,build_id){
return (function (p__40689){
var vec__40690 = p__40689;
var map__40691 = cljs.core.nth.call(null,vec__40690,(0),null);
var map__40691__$1 = ((((!((map__40691 == null)))?((((map__40691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40691):map__40691);
var msg = map__40691__$1;
var msg_name = cljs.core.get.call(null,map__40691__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40690,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__40690,map__40691,map__40691__$1,msg,msg_name,_,map__40687,map__40687__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__40690,map__40691,map__40691__$1,msg,msg_name,_,map__40687,map__40687__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__40687,map__40687__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__40697){
var vec__40698 = p__40697;
var map__40699 = cljs.core.nth.call(null,vec__40698,(0),null);
var map__40699__$1 = ((((!((map__40699 == null)))?((((map__40699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40699):map__40699);
var msg = map__40699__$1;
var msg_name = cljs.core.get.call(null,map__40699__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40698,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__40701){
var map__40711 = p__40701;
var map__40711__$1 = ((((!((map__40711 == null)))?((((map__40711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40711):map__40711);
var on_compile_warning = cljs.core.get.call(null,map__40711__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__40711__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__40711,map__40711__$1,on_compile_warning,on_compile_fail){
return (function (p__40713){
var vec__40714 = p__40713;
var map__40715 = cljs.core.nth.call(null,vec__40714,(0),null);
var map__40715__$1 = ((((!((map__40715 == null)))?((((map__40715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40715):map__40715);
var msg = map__40715__$1;
var msg_name = cljs.core.get.call(null,map__40715__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40714,(1));
var pred__40717 = cljs.core._EQ_;
var expr__40718 = msg_name;
if(cljs.core.truth_(pred__40717.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__40718))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__40717.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__40718))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__40711,map__40711__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21794__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21794__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (c__21794__auto__,msg_hist,msg_names,msg){
return (function (state_40934){
var state_val_40935 = (state_40934[(1)]);
if((state_val_40935 === (7))){
var inst_40858 = (state_40934[(2)]);
var state_40934__$1 = state_40934;
if(cljs.core.truth_(inst_40858)){
var statearr_40936_40982 = state_40934__$1;
(statearr_40936_40982[(1)] = (8));

} else {
var statearr_40937_40983 = state_40934__$1;
(statearr_40937_40983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40935 === (20))){
var inst_40928 = (state_40934[(2)]);
var state_40934__$1 = state_40934;
var statearr_40938_40984 = state_40934__$1;
(statearr_40938_40984[(2)] = inst_40928);

(statearr_40938_40984[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40935 === (27))){
var inst_40924 = (state_40934[(2)]);
var state_40934__$1 = state_40934;
var statearr_40939_40985 = state_40934__$1;
(statearr_40939_40985[(2)] = inst_40924);

(statearr_40939_40985[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40935 === (1))){
var inst_40851 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_40934__$1 = state_40934;
if(cljs.core.truth_(inst_40851)){
var statearr_40940_40986 = state_40934__$1;
(statearr_40940_40986[(1)] = (2));

} else {
var statearr_40941_40987 = state_40934__$1;
(statearr_40941_40987[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40935 === (24))){
var inst_40926 = (state_40934[(2)]);
var state_40934__$1 = state_40934;
var statearr_40942_40988 = state_40934__$1;
(statearr_40942_40988[(2)] = inst_40926);

(statearr_40942_40988[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40935 === (4))){
var inst_40932 = (state_40934[(2)]);
var state_40934__$1 = state_40934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40934__$1,inst_40932);
} else {
if((state_val_40935 === (15))){
var inst_40930 = (state_40934[(2)]);
var state_40934__$1 = state_40934;
var statearr_40943_40989 = state_40934__$1;
(statearr_40943_40989[(2)] = inst_40930);

(statearr_40943_40989[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40935 === (21))){
var inst_40889 = (state_40934[(2)]);
var state_40934__$1 = state_40934;
var statearr_40944_40990 = state_40934__$1;
(statearr_40944_40990[(2)] = inst_40889);

(statearr_40944_40990[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40935 === (31))){
var inst_40913 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_40934__$1 = state_40934;
if(cljs.core.truth_(inst_40913)){
var statearr_40945_40991 = state_40934__$1;
(statearr_40945_40991[(1)] = (34));

} else {
var statearr_40946_40992 = state_40934__$1;
(statearr_40946_40992[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40935 === (32))){
var inst_40922 = (state_40934[(2)]);
var state_40934__$1 = state_40934;
var statearr_40947_40993 = state_40934__$1;
(statearr_40947_40993[(2)] = inst_40922);

(statearr_40947_40993[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40935 === (33))){
var inst_40911 = (state_40934[(2)]);
var state_40934__$1 = state_40934;
var statearr_40948_40994 = state_40934__$1;
(statearr_40948_40994[(2)] = inst_40911);

(statearr_40948_40994[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40935 === (13))){
var inst_40872 = figwheel.client.heads_up.clear.call(null);
var state_40934__$1 = state_40934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40934__$1,(16),inst_40872);
} else {
if((state_val_40935 === (22))){
var inst_40893 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40894 = figwheel.client.heads_up.append_message.call(null,inst_40893);
var state_40934__$1 = state_40934;
var statearr_40949_40995 = state_40934__$1;
(statearr_40949_40995[(2)] = inst_40894);

(statearr_40949_40995[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40935 === (36))){
var inst_40920 = (state_40934[(2)]);
var state_40934__$1 = state_40934;
var statearr_40950_40996 = state_40934__$1;
(statearr_40950_40996[(2)] = inst_40920);

(statearr_40950_40996[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40935 === (29))){
var inst_40904 = (state_40934[(2)]);
var state_40934__$1 = state_40934;
var statearr_40951_40997 = state_40934__$1;
(statearr_40951_40997[(2)] = inst_40904);

(statearr_40951_40997[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40935 === (6))){
var inst_40853 = (state_40934[(7)]);
var state_40934__$1 = state_40934;
var statearr_40952_40998 = state_40934__$1;
(statearr_40952_40998[(2)] = inst_40853);

(statearr_40952_40998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40935 === (28))){
var inst_40900 = (state_40934[(2)]);
var inst_40901 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40902 = figwheel.client.heads_up.display_warning.call(null,inst_40901);
var state_40934__$1 = (function (){var statearr_40953 = state_40934;
(statearr_40953[(8)] = inst_40900);

return statearr_40953;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40934__$1,(29),inst_40902);
} else {
if((state_val_40935 === (25))){
var inst_40898 = figwheel.client.heads_up.clear.call(null);
var state_40934__$1 = state_40934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40934__$1,(28),inst_40898);
} else {
if((state_val_40935 === (34))){
var inst_40915 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40934__$1 = state_40934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40934__$1,(37),inst_40915);
} else {
if((state_val_40935 === (17))){
var inst_40880 = (state_40934[(2)]);
var state_40934__$1 = state_40934;
var statearr_40954_40999 = state_40934__$1;
(statearr_40954_40999[(2)] = inst_40880);

(statearr_40954_40999[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40935 === (3))){
var inst_40870 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_40934__$1 = state_40934;
if(cljs.core.truth_(inst_40870)){
var statearr_40955_41000 = state_40934__$1;
(statearr_40955_41000[(1)] = (13));

} else {
var statearr_40956_41001 = state_40934__$1;
(statearr_40956_41001[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40935 === (12))){
var inst_40866 = (state_40934[(2)]);
var state_40934__$1 = state_40934;
var statearr_40957_41002 = state_40934__$1;
(statearr_40957_41002[(2)] = inst_40866);

(statearr_40957_41002[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40935 === (2))){
var inst_40853 = (state_40934[(7)]);
var inst_40853__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_40934__$1 = (function (){var statearr_40958 = state_40934;
(statearr_40958[(7)] = inst_40853__$1);

return statearr_40958;
})();
if(cljs.core.truth_(inst_40853__$1)){
var statearr_40959_41003 = state_40934__$1;
(statearr_40959_41003[(1)] = (5));

} else {
var statearr_40960_41004 = state_40934__$1;
(statearr_40960_41004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40935 === (23))){
var inst_40896 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_40934__$1 = state_40934;
if(cljs.core.truth_(inst_40896)){
var statearr_40961_41005 = state_40934__$1;
(statearr_40961_41005[(1)] = (25));

} else {
var statearr_40962_41006 = state_40934__$1;
(statearr_40962_41006[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40935 === (35))){
var state_40934__$1 = state_40934;
var statearr_40963_41007 = state_40934__$1;
(statearr_40963_41007[(2)] = null);

(statearr_40963_41007[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40935 === (19))){
var inst_40891 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_40934__$1 = state_40934;
if(cljs.core.truth_(inst_40891)){
var statearr_40964_41008 = state_40934__$1;
(statearr_40964_41008[(1)] = (22));

} else {
var statearr_40965_41009 = state_40934__$1;
(statearr_40965_41009[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40935 === (11))){
var inst_40862 = (state_40934[(2)]);
var state_40934__$1 = state_40934;
var statearr_40966_41010 = state_40934__$1;
(statearr_40966_41010[(2)] = inst_40862);

(statearr_40966_41010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40935 === (9))){
var inst_40864 = figwheel.client.heads_up.clear.call(null);
var state_40934__$1 = state_40934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40934__$1,(12),inst_40864);
} else {
if((state_val_40935 === (5))){
var inst_40855 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_40934__$1 = state_40934;
var statearr_40967_41011 = state_40934__$1;
(statearr_40967_41011[(2)] = inst_40855);

(statearr_40967_41011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40935 === (14))){
var inst_40882 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_40934__$1 = state_40934;
if(cljs.core.truth_(inst_40882)){
var statearr_40968_41012 = state_40934__$1;
(statearr_40968_41012[(1)] = (18));

} else {
var statearr_40969_41013 = state_40934__$1;
(statearr_40969_41013[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40935 === (26))){
var inst_40906 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_40934__$1 = state_40934;
if(cljs.core.truth_(inst_40906)){
var statearr_40970_41014 = state_40934__$1;
(statearr_40970_41014[(1)] = (30));

} else {
var statearr_40971_41015 = state_40934__$1;
(statearr_40971_41015[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40935 === (16))){
var inst_40874 = (state_40934[(2)]);
var inst_40875 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40876 = figwheel.client.format_messages.call(null,inst_40875);
var inst_40877 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40878 = figwheel.client.heads_up.display_error.call(null,inst_40876,inst_40877);
var state_40934__$1 = (function (){var statearr_40972 = state_40934;
(statearr_40972[(9)] = inst_40874);

return statearr_40972;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40934__$1,(17),inst_40878);
} else {
if((state_val_40935 === (30))){
var inst_40908 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40909 = figwheel.client.heads_up.display_warning.call(null,inst_40908);
var state_40934__$1 = state_40934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40934__$1,(33),inst_40909);
} else {
if((state_val_40935 === (10))){
var inst_40868 = (state_40934[(2)]);
var state_40934__$1 = state_40934;
var statearr_40973_41016 = state_40934__$1;
(statearr_40973_41016[(2)] = inst_40868);

(statearr_40973_41016[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40935 === (18))){
var inst_40884 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40885 = figwheel.client.format_messages.call(null,inst_40884);
var inst_40886 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40887 = figwheel.client.heads_up.display_error.call(null,inst_40885,inst_40886);
var state_40934__$1 = state_40934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40934__$1,(21),inst_40887);
} else {
if((state_val_40935 === (37))){
var inst_40917 = (state_40934[(2)]);
var state_40934__$1 = state_40934;
var statearr_40974_41017 = state_40934__$1;
(statearr_40974_41017[(2)] = inst_40917);

(statearr_40974_41017[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40935 === (8))){
var inst_40860 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40934__$1 = state_40934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40934__$1,(11),inst_40860);
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
}
}
}
});})(c__21794__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21682__auto__,c__21794__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21683__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21683__auto____0 = (function (){
var statearr_40978 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40978[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21683__auto__);

(statearr_40978[(1)] = (1));

return statearr_40978;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21683__auto____1 = (function (state_40934){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_40934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e40979){if((e40979 instanceof Object)){
var ex__21686__auto__ = e40979;
var statearr_40980_41018 = state_40934;
(statearr_40980_41018[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41019 = state_40934;
state_40934 = G__41019;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21683__auto__ = function(state_40934){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21683__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21683__auto____1.call(this,state_40934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21683__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21683__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21683__auto__;
})()
;})(switch__21682__auto__,c__21794__auto__,msg_hist,msg_names,msg))
})();
var state__21796__auto__ = (function (){var statearr_40981 = f__21795__auto__.call(null);
(statearr_40981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto__);

return statearr_40981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(c__21794__auto__,msg_hist,msg_names,msg))
);

return c__21794__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21794__auto___41082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21794__auto___41082,ch){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (c__21794__auto___41082,ch){
return (function (state_41065){
var state_val_41066 = (state_41065[(1)]);
if((state_val_41066 === (1))){
var state_41065__$1 = state_41065;
var statearr_41067_41083 = state_41065__$1;
(statearr_41067_41083[(2)] = null);

(statearr_41067_41083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (2))){
var state_41065__$1 = state_41065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41065__$1,(4),ch);
} else {
if((state_val_41066 === (3))){
var inst_41063 = (state_41065[(2)]);
var state_41065__$1 = state_41065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41065__$1,inst_41063);
} else {
if((state_val_41066 === (4))){
var inst_41053 = (state_41065[(7)]);
var inst_41053__$1 = (state_41065[(2)]);
var state_41065__$1 = (function (){var statearr_41068 = state_41065;
(statearr_41068[(7)] = inst_41053__$1);

return statearr_41068;
})();
if(cljs.core.truth_(inst_41053__$1)){
var statearr_41069_41084 = state_41065__$1;
(statearr_41069_41084[(1)] = (5));

} else {
var statearr_41070_41085 = state_41065__$1;
(statearr_41070_41085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (5))){
var inst_41053 = (state_41065[(7)]);
var inst_41055 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_41053);
var state_41065__$1 = state_41065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41065__$1,(8),inst_41055);
} else {
if((state_val_41066 === (6))){
var state_41065__$1 = state_41065;
var statearr_41071_41086 = state_41065__$1;
(statearr_41071_41086[(2)] = null);

(statearr_41071_41086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (7))){
var inst_41061 = (state_41065[(2)]);
var state_41065__$1 = state_41065;
var statearr_41072_41087 = state_41065__$1;
(statearr_41072_41087[(2)] = inst_41061);

(statearr_41072_41087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (8))){
var inst_41057 = (state_41065[(2)]);
var state_41065__$1 = (function (){var statearr_41073 = state_41065;
(statearr_41073[(8)] = inst_41057);

return statearr_41073;
})();
var statearr_41074_41088 = state_41065__$1;
(statearr_41074_41088[(2)] = null);

(statearr_41074_41088[(1)] = (2));


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
});})(c__21794__auto___41082,ch))
;
return ((function (switch__21682__auto__,c__21794__auto___41082,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21683__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21683__auto____0 = (function (){
var statearr_41078 = [null,null,null,null,null,null,null,null,null];
(statearr_41078[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21683__auto__);

(statearr_41078[(1)] = (1));

return statearr_41078;
});
var figwheel$client$heads_up_plugin_$_state_machine__21683__auto____1 = (function (state_41065){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_41065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e41079){if((e41079 instanceof Object)){
var ex__21686__auto__ = e41079;
var statearr_41080_41089 = state_41065;
(statearr_41080_41089[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41090 = state_41065;
state_41065 = G__41090;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21683__auto__ = function(state_41065){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21683__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21683__auto____1.call(this,state_41065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21683__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21683__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21683__auto__;
})()
;})(switch__21682__auto__,c__21794__auto___41082,ch))
})();
var state__21796__auto__ = (function (){var statearr_41081 = f__21795__auto__.call(null);
(statearr_41081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto___41082);

return statearr_41081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(c__21794__auto___41082,ch))
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
var c__21794__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21794__auto__){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (c__21794__auto__){
return (function (state_41111){
var state_val_41112 = (state_41111[(1)]);
if((state_val_41112 === (1))){
var inst_41106 = cljs.core.async.timeout.call(null,(3000));
var state_41111__$1 = state_41111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41111__$1,(2),inst_41106);
} else {
if((state_val_41112 === (2))){
var inst_41108 = (state_41111[(2)]);
var inst_41109 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_41111__$1 = (function (){var statearr_41113 = state_41111;
(statearr_41113[(7)] = inst_41108);

return statearr_41113;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41111__$1,inst_41109);
} else {
return null;
}
}
});})(c__21794__auto__))
;
return ((function (switch__21682__auto__,c__21794__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21683__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21683__auto____0 = (function (){
var statearr_41117 = [null,null,null,null,null,null,null,null];
(statearr_41117[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21683__auto__);

(statearr_41117[(1)] = (1));

return statearr_41117;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21683__auto____1 = (function (state_41111){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_41111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e41118){if((e41118 instanceof Object)){
var ex__21686__auto__ = e41118;
var statearr_41119_41121 = state_41111;
(statearr_41119_41121[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41122 = state_41111;
state_41111 = G__41122;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21683__auto__ = function(state_41111){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21683__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21683__auto____1.call(this,state_41111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21683__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21683__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21683__auto__;
})()
;})(switch__21682__auto__,c__21794__auto__))
})();
var state__21796__auto__ = (function (){var statearr_41120 = f__21795__auto__.call(null);
(statearr_41120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto__);

return statearr_41120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(c__21794__auto__))
);

return c__21794__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__41123){
var map__41130 = p__41123;
var map__41130__$1 = ((((!((map__41130 == null)))?((((map__41130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41130):map__41130);
var ed = map__41130__$1;
var formatted_exception = cljs.core.get.call(null,map__41130__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__41130__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__41130__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__41132_41136 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__41133_41137 = null;
var count__41134_41138 = (0);
var i__41135_41139 = (0);
while(true){
if((i__41135_41139 < count__41134_41138)){
var msg_41140 = cljs.core._nth.call(null,chunk__41133_41137,i__41135_41139);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41140);

var G__41141 = seq__41132_41136;
var G__41142 = chunk__41133_41137;
var G__41143 = count__41134_41138;
var G__41144 = (i__41135_41139 + (1));
seq__41132_41136 = G__41141;
chunk__41133_41137 = G__41142;
count__41134_41138 = G__41143;
i__41135_41139 = G__41144;
continue;
} else {
var temp__4657__auto___41145 = cljs.core.seq.call(null,seq__41132_41136);
if(temp__4657__auto___41145){
var seq__41132_41146__$1 = temp__4657__auto___41145;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41132_41146__$1)){
var c__19173__auto___41147 = cljs.core.chunk_first.call(null,seq__41132_41146__$1);
var G__41148 = cljs.core.chunk_rest.call(null,seq__41132_41146__$1);
var G__41149 = c__19173__auto___41147;
var G__41150 = cljs.core.count.call(null,c__19173__auto___41147);
var G__41151 = (0);
seq__41132_41136 = G__41148;
chunk__41133_41137 = G__41149;
count__41134_41138 = G__41150;
i__41135_41139 = G__41151;
continue;
} else {
var msg_41152 = cljs.core.first.call(null,seq__41132_41146__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41152);

var G__41153 = cljs.core.next.call(null,seq__41132_41146__$1);
var G__41154 = null;
var G__41155 = (0);
var G__41156 = (0);
seq__41132_41136 = G__41153;
chunk__41133_41137 = G__41154;
count__41134_41138 = G__41155;
i__41135_41139 = G__41156;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__41157){
var map__41160 = p__41157;
var map__41160__$1 = ((((!((map__41160 == null)))?((((map__41160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41160):map__41160);
var w = map__41160__$1;
var message = cljs.core.get.call(null,map__41160__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__18358__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18358__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18358__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__41168 = cljs.core.seq.call(null,plugins);
var chunk__41169 = null;
var count__41170 = (0);
var i__41171 = (0);
while(true){
if((i__41171 < count__41170)){
var vec__41172 = cljs.core._nth.call(null,chunk__41169,i__41171);
var k = cljs.core.nth.call(null,vec__41172,(0),null);
var plugin = cljs.core.nth.call(null,vec__41172,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41174 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41168,chunk__41169,count__41170,i__41171,pl_41174,vec__41172,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_41174.call(null,msg_hist);
});})(seq__41168,chunk__41169,count__41170,i__41171,pl_41174,vec__41172,k,plugin))
);
} else {
}

var G__41175 = seq__41168;
var G__41176 = chunk__41169;
var G__41177 = count__41170;
var G__41178 = (i__41171 + (1));
seq__41168 = G__41175;
chunk__41169 = G__41176;
count__41170 = G__41177;
i__41171 = G__41178;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41168);
if(temp__4657__auto__){
var seq__41168__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41168__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__41168__$1);
var G__41179 = cljs.core.chunk_rest.call(null,seq__41168__$1);
var G__41180 = c__19173__auto__;
var G__41181 = cljs.core.count.call(null,c__19173__auto__);
var G__41182 = (0);
seq__41168 = G__41179;
chunk__41169 = G__41180;
count__41170 = G__41181;
i__41171 = G__41182;
continue;
} else {
var vec__41173 = cljs.core.first.call(null,seq__41168__$1);
var k = cljs.core.nth.call(null,vec__41173,(0),null);
var plugin = cljs.core.nth.call(null,vec__41173,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41183 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41168,chunk__41169,count__41170,i__41171,pl_41183,vec__41173,k,plugin,seq__41168__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_41183.call(null,msg_hist);
});})(seq__41168,chunk__41169,count__41170,i__41171,pl_41183,vec__41173,k,plugin,seq__41168__$1,temp__4657__auto__))
);
} else {
}

var G__41184 = cljs.core.next.call(null,seq__41168__$1);
var G__41185 = null;
var G__41186 = (0);
var G__41187 = (0);
seq__41168 = G__41184;
chunk__41169 = G__41185;
count__41170 = G__41186;
i__41171 = G__41187;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args41188 = [];
var len__19428__auto___41191 = arguments.length;
var i__19429__auto___41192 = (0);
while(true){
if((i__19429__auto___41192 < len__19428__auto___41191)){
args41188.push((arguments[i__19429__auto___41192]));

var G__41193 = (i__19429__auto___41192 + (1));
i__19429__auto___41192 = G__41193;
continue;
} else {
}
break;
}

var G__41190 = args41188.length;
switch (G__41190) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41188.length)].join('')));

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
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19435__auto__ = [];
var len__19428__auto___41199 = arguments.length;
var i__19429__auto___41200 = (0);
while(true){
if((i__19429__auto___41200 < len__19428__auto___41199)){
args__19435__auto__.push((arguments[i__19429__auto___41200]));

var G__41201 = (i__19429__auto___41200 + (1));
i__19429__auto___41200 = G__41201;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((0) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19436__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__41196){
var map__41197 = p__41196;
var map__41197__$1 = ((((!((map__41197 == null)))?((((map__41197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41197):map__41197);
var opts = map__41197__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq41195){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41195));
});

//# sourceMappingURL=client.js.map?rel=1454263150736