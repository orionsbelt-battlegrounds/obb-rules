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
var pred__46593 = cljs.core._EQ_;
var expr__46594 = (function (){var or__18370__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e46597){if((e46597 instanceof Error)){
var e = e46597;
return false;
} else {
throw e46597;

}
}})();
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__46593.call(null,"true",expr__46594))){
return true;
} else {
if(cljs.core.truth_(pred__46593.call(null,"false",expr__46594))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__46594)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e46599){if((e46599 instanceof Error)){
var e = e46599;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e46599;

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
var len__19428__auto___46601 = arguments.length;
var i__19429__auto___46602 = (0);
while(true){
if((i__19429__auto___46602 < len__19428__auto___46601)){
args__19435__auto__.push((arguments[i__19429__auto___46602]));

var G__46603 = (i__19429__auto___46602 + (1));
i__19429__auto___46602 = G__46603;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq46600){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46600));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__46604){
var map__46607 = p__46604;
var map__46607__$1 = ((((!((map__46607 == null)))?((((map__46607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46607):map__46607);
var message = cljs.core.get.call(null,map__46607__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__46607__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__21866__auto___46769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21866__auto___46769,ch){
return (function (){
var f__21867__auto__ = (function (){var switch__21754__auto__ = ((function (c__21866__auto___46769,ch){
return (function (state_46738){
var state_val_46739 = (state_46738[(1)]);
if((state_val_46739 === (7))){
var inst_46734 = (state_46738[(2)]);
var state_46738__$1 = state_46738;
var statearr_46740_46770 = state_46738__$1;
(statearr_46740_46770[(2)] = inst_46734);

(statearr_46740_46770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46739 === (1))){
var state_46738__$1 = state_46738;
var statearr_46741_46771 = state_46738__$1;
(statearr_46741_46771[(2)] = null);

(statearr_46741_46771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46739 === (4))){
var inst_46691 = (state_46738[(7)]);
var inst_46691__$1 = (state_46738[(2)]);
var state_46738__$1 = (function (){var statearr_46742 = state_46738;
(statearr_46742[(7)] = inst_46691__$1);

return statearr_46742;
})();
if(cljs.core.truth_(inst_46691__$1)){
var statearr_46743_46772 = state_46738__$1;
(statearr_46743_46772[(1)] = (5));

} else {
var statearr_46744_46773 = state_46738__$1;
(statearr_46744_46773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46739 === (15))){
var inst_46698 = (state_46738[(8)]);
var inst_46713 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46698);
var inst_46714 = cljs.core.first.call(null,inst_46713);
var inst_46715 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_46714);
var inst_46716 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_46715)].join('');
var inst_46717 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_46716);
var state_46738__$1 = state_46738;
var statearr_46745_46774 = state_46738__$1;
(statearr_46745_46774[(2)] = inst_46717);

(statearr_46745_46774[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46739 === (13))){
var inst_46722 = (state_46738[(2)]);
var state_46738__$1 = state_46738;
var statearr_46746_46775 = state_46738__$1;
(statearr_46746_46775[(2)] = inst_46722);

(statearr_46746_46775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46739 === (6))){
var state_46738__$1 = state_46738;
var statearr_46747_46776 = state_46738__$1;
(statearr_46747_46776[(2)] = null);

(statearr_46747_46776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46739 === (17))){
var inst_46720 = (state_46738[(2)]);
var state_46738__$1 = state_46738;
var statearr_46748_46777 = state_46738__$1;
(statearr_46748_46777[(2)] = inst_46720);

(statearr_46748_46777[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46739 === (3))){
var inst_46736 = (state_46738[(2)]);
var state_46738__$1 = state_46738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46738__$1,inst_46736);
} else {
if((state_val_46739 === (12))){
var inst_46697 = (state_46738[(9)]);
var inst_46711 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_46697,opts);
var state_46738__$1 = state_46738;
if(cljs.core.truth_(inst_46711)){
var statearr_46749_46778 = state_46738__$1;
(statearr_46749_46778[(1)] = (15));

} else {
var statearr_46750_46779 = state_46738__$1;
(statearr_46750_46779[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46739 === (2))){
var state_46738__$1 = state_46738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46738__$1,(4),ch);
} else {
if((state_val_46739 === (11))){
var inst_46698 = (state_46738[(8)]);
var inst_46703 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46704 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_46698);
var inst_46705 = cljs.core.async.timeout.call(null,(1000));
var inst_46706 = [inst_46704,inst_46705];
var inst_46707 = (new cljs.core.PersistentVector(null,2,(5),inst_46703,inst_46706,null));
var state_46738__$1 = state_46738;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46738__$1,(14),inst_46707);
} else {
if((state_val_46739 === (9))){
var inst_46698 = (state_46738[(8)]);
var inst_46724 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_46725 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46698);
var inst_46726 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46725);
var inst_46727 = [cljs.core.str("Not loading: "),cljs.core.str(inst_46726)].join('');
var inst_46728 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_46727);
var state_46738__$1 = (function (){var statearr_46751 = state_46738;
(statearr_46751[(10)] = inst_46724);

return statearr_46751;
})();
var statearr_46752_46780 = state_46738__$1;
(statearr_46752_46780[(2)] = inst_46728);

(statearr_46752_46780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46739 === (5))){
var inst_46691 = (state_46738[(7)]);
var inst_46693 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_46694 = (new cljs.core.PersistentArrayMap(null,2,inst_46693,null));
var inst_46695 = (new cljs.core.PersistentHashSet(null,inst_46694,null));
var inst_46696 = figwheel.client.focus_msgs.call(null,inst_46695,inst_46691);
var inst_46697 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_46696);
var inst_46698 = cljs.core.first.call(null,inst_46696);
var inst_46699 = figwheel.client.autoload_QMARK_.call(null);
var state_46738__$1 = (function (){var statearr_46753 = state_46738;
(statearr_46753[(8)] = inst_46698);

(statearr_46753[(9)] = inst_46697);

return statearr_46753;
})();
if(cljs.core.truth_(inst_46699)){
var statearr_46754_46781 = state_46738__$1;
(statearr_46754_46781[(1)] = (8));

} else {
var statearr_46755_46782 = state_46738__$1;
(statearr_46755_46782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46739 === (14))){
var inst_46709 = (state_46738[(2)]);
var state_46738__$1 = state_46738;
var statearr_46756_46783 = state_46738__$1;
(statearr_46756_46783[(2)] = inst_46709);

(statearr_46756_46783[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46739 === (16))){
var state_46738__$1 = state_46738;
var statearr_46757_46784 = state_46738__$1;
(statearr_46757_46784[(2)] = null);

(statearr_46757_46784[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46739 === (10))){
var inst_46730 = (state_46738[(2)]);
var state_46738__$1 = (function (){var statearr_46758 = state_46738;
(statearr_46758[(11)] = inst_46730);

return statearr_46758;
})();
var statearr_46759_46785 = state_46738__$1;
(statearr_46759_46785[(2)] = null);

(statearr_46759_46785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46739 === (8))){
var inst_46697 = (state_46738[(9)]);
var inst_46701 = figwheel.client.reload_file_state_QMARK_.call(null,inst_46697,opts);
var state_46738__$1 = state_46738;
if(cljs.core.truth_(inst_46701)){
var statearr_46760_46786 = state_46738__$1;
(statearr_46760_46786[(1)] = (11));

} else {
var statearr_46761_46787 = state_46738__$1;
(statearr_46761_46787[(1)] = (12));

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
});})(c__21866__auto___46769,ch))
;
return ((function (switch__21754__auto__,c__21866__auto___46769,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21755__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21755__auto____0 = (function (){
var statearr_46765 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46765[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21755__auto__);

(statearr_46765[(1)] = (1));

return statearr_46765;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21755__auto____1 = (function (state_46738){
while(true){
var ret_value__21756__auto__ = (function (){try{while(true){
var result__21757__auto__ = switch__21754__auto__.call(null,state_46738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21757__auto__;
}
break;
}
}catch (e46766){if((e46766 instanceof Object)){
var ex__21758__auto__ = e46766;
var statearr_46767_46788 = state_46738;
(statearr_46767_46788[(5)] = ex__21758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46789 = state_46738;
state_46738 = G__46789;
continue;
} else {
return ret_value__21756__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21755__auto__ = function(state_46738){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21755__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21755__auto____1.call(this,state_46738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21755__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21755__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21755__auto__;
})()
;})(switch__21754__auto__,c__21866__auto___46769,ch))
})();
var state__21868__auto__ = (function (){var statearr_46768 = f__21867__auto__.call(null);
(statearr_46768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21866__auto___46769);

return statearr_46768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21868__auto__);
});})(c__21866__auto___46769,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__46790_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__46790_SHARP_));
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
var base_path_46797 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_46797){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_46795 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_46796 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_46796;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_46795;
}}catch (e46794){if((e46794 instanceof Error)){
var e = e46794;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_46797], null));
} else {
var e = e46794;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_46797))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__46798){
var map__46805 = p__46798;
var map__46805__$1 = ((((!((map__46805 == null)))?((((map__46805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46805):map__46805);
var opts = map__46805__$1;
var build_id = cljs.core.get.call(null,map__46805__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__46805,map__46805__$1,opts,build_id){
return (function (p__46807){
var vec__46808 = p__46807;
var map__46809 = cljs.core.nth.call(null,vec__46808,(0),null);
var map__46809__$1 = ((((!((map__46809 == null)))?((((map__46809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46809):map__46809);
var msg = map__46809__$1;
var msg_name = cljs.core.get.call(null,map__46809__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__46808,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__46808,map__46809,map__46809__$1,msg,msg_name,_,map__46805,map__46805__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__46808,map__46809,map__46809__$1,msg,msg_name,_,map__46805,map__46805__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__46805,map__46805__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__46815){
var vec__46816 = p__46815;
var map__46817 = cljs.core.nth.call(null,vec__46816,(0),null);
var map__46817__$1 = ((((!((map__46817 == null)))?((((map__46817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46817):map__46817);
var msg = map__46817__$1;
var msg_name = cljs.core.get.call(null,map__46817__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__46816,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__46819){
var map__46829 = p__46819;
var map__46829__$1 = ((((!((map__46829 == null)))?((((map__46829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46829):map__46829);
var on_compile_warning = cljs.core.get.call(null,map__46829__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__46829__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__46829,map__46829__$1,on_compile_warning,on_compile_fail){
return (function (p__46831){
var vec__46832 = p__46831;
var map__46833 = cljs.core.nth.call(null,vec__46832,(0),null);
var map__46833__$1 = ((((!((map__46833 == null)))?((((map__46833.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46833.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46833):map__46833);
var msg = map__46833__$1;
var msg_name = cljs.core.get.call(null,map__46833__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__46832,(1));
var pred__46835 = cljs.core._EQ_;
var expr__46836 = msg_name;
if(cljs.core.truth_(pred__46835.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__46836))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__46835.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__46836))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__46829,map__46829__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21866__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21866__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21867__auto__ = (function (){var switch__21754__auto__ = ((function (c__21866__auto__,msg_hist,msg_names,msg){
return (function (state_47052){
var state_val_47053 = (state_47052[(1)]);
if((state_val_47053 === (7))){
var inst_46976 = (state_47052[(2)]);
var state_47052__$1 = state_47052;
if(cljs.core.truth_(inst_46976)){
var statearr_47054_47100 = state_47052__$1;
(statearr_47054_47100[(1)] = (8));

} else {
var statearr_47055_47101 = state_47052__$1;
(statearr_47055_47101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (20))){
var inst_47046 = (state_47052[(2)]);
var state_47052__$1 = state_47052;
var statearr_47056_47102 = state_47052__$1;
(statearr_47056_47102[(2)] = inst_47046);

(statearr_47056_47102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (27))){
var inst_47042 = (state_47052[(2)]);
var state_47052__$1 = state_47052;
var statearr_47057_47103 = state_47052__$1;
(statearr_47057_47103[(2)] = inst_47042);

(statearr_47057_47103[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (1))){
var inst_46969 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_47052__$1 = state_47052;
if(cljs.core.truth_(inst_46969)){
var statearr_47058_47104 = state_47052__$1;
(statearr_47058_47104[(1)] = (2));

} else {
var statearr_47059_47105 = state_47052__$1;
(statearr_47059_47105[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (24))){
var inst_47044 = (state_47052[(2)]);
var state_47052__$1 = state_47052;
var statearr_47060_47106 = state_47052__$1;
(statearr_47060_47106[(2)] = inst_47044);

(statearr_47060_47106[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (4))){
var inst_47050 = (state_47052[(2)]);
var state_47052__$1 = state_47052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47052__$1,inst_47050);
} else {
if((state_val_47053 === (15))){
var inst_47048 = (state_47052[(2)]);
var state_47052__$1 = state_47052;
var statearr_47061_47107 = state_47052__$1;
(statearr_47061_47107[(2)] = inst_47048);

(statearr_47061_47107[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (21))){
var inst_47007 = (state_47052[(2)]);
var state_47052__$1 = state_47052;
var statearr_47062_47108 = state_47052__$1;
(statearr_47062_47108[(2)] = inst_47007);

(statearr_47062_47108[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (31))){
var inst_47031 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_47052__$1 = state_47052;
if(cljs.core.truth_(inst_47031)){
var statearr_47063_47109 = state_47052__$1;
(statearr_47063_47109[(1)] = (34));

} else {
var statearr_47064_47110 = state_47052__$1;
(statearr_47064_47110[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (32))){
var inst_47040 = (state_47052[(2)]);
var state_47052__$1 = state_47052;
var statearr_47065_47111 = state_47052__$1;
(statearr_47065_47111[(2)] = inst_47040);

(statearr_47065_47111[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (33))){
var inst_47029 = (state_47052[(2)]);
var state_47052__$1 = state_47052;
var statearr_47066_47112 = state_47052__$1;
(statearr_47066_47112[(2)] = inst_47029);

(statearr_47066_47112[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (13))){
var inst_46990 = figwheel.client.heads_up.clear.call(null);
var state_47052__$1 = state_47052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47052__$1,(16),inst_46990);
} else {
if((state_val_47053 === (22))){
var inst_47011 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47012 = figwheel.client.heads_up.append_message.call(null,inst_47011);
var state_47052__$1 = state_47052;
var statearr_47067_47113 = state_47052__$1;
(statearr_47067_47113[(2)] = inst_47012);

(statearr_47067_47113[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (36))){
var inst_47038 = (state_47052[(2)]);
var state_47052__$1 = state_47052;
var statearr_47068_47114 = state_47052__$1;
(statearr_47068_47114[(2)] = inst_47038);

(statearr_47068_47114[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (29))){
var inst_47022 = (state_47052[(2)]);
var state_47052__$1 = state_47052;
var statearr_47069_47115 = state_47052__$1;
(statearr_47069_47115[(2)] = inst_47022);

(statearr_47069_47115[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (6))){
var inst_46971 = (state_47052[(7)]);
var state_47052__$1 = state_47052;
var statearr_47070_47116 = state_47052__$1;
(statearr_47070_47116[(2)] = inst_46971);

(statearr_47070_47116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (28))){
var inst_47018 = (state_47052[(2)]);
var inst_47019 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47020 = figwheel.client.heads_up.display_warning.call(null,inst_47019);
var state_47052__$1 = (function (){var statearr_47071 = state_47052;
(statearr_47071[(8)] = inst_47018);

return statearr_47071;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47052__$1,(29),inst_47020);
} else {
if((state_val_47053 === (25))){
var inst_47016 = figwheel.client.heads_up.clear.call(null);
var state_47052__$1 = state_47052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47052__$1,(28),inst_47016);
} else {
if((state_val_47053 === (34))){
var inst_47033 = figwheel.client.heads_up.flash_loaded.call(null);
var state_47052__$1 = state_47052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47052__$1,(37),inst_47033);
} else {
if((state_val_47053 === (17))){
var inst_46998 = (state_47052[(2)]);
var state_47052__$1 = state_47052;
var statearr_47072_47117 = state_47052__$1;
(statearr_47072_47117[(2)] = inst_46998);

(statearr_47072_47117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (3))){
var inst_46988 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_47052__$1 = state_47052;
if(cljs.core.truth_(inst_46988)){
var statearr_47073_47118 = state_47052__$1;
(statearr_47073_47118[(1)] = (13));

} else {
var statearr_47074_47119 = state_47052__$1;
(statearr_47074_47119[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (12))){
var inst_46984 = (state_47052[(2)]);
var state_47052__$1 = state_47052;
var statearr_47075_47120 = state_47052__$1;
(statearr_47075_47120[(2)] = inst_46984);

(statearr_47075_47120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (2))){
var inst_46971 = (state_47052[(7)]);
var inst_46971__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_47052__$1 = (function (){var statearr_47076 = state_47052;
(statearr_47076[(7)] = inst_46971__$1);

return statearr_47076;
})();
if(cljs.core.truth_(inst_46971__$1)){
var statearr_47077_47121 = state_47052__$1;
(statearr_47077_47121[(1)] = (5));

} else {
var statearr_47078_47122 = state_47052__$1;
(statearr_47078_47122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (23))){
var inst_47014 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_47052__$1 = state_47052;
if(cljs.core.truth_(inst_47014)){
var statearr_47079_47123 = state_47052__$1;
(statearr_47079_47123[(1)] = (25));

} else {
var statearr_47080_47124 = state_47052__$1;
(statearr_47080_47124[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (35))){
var state_47052__$1 = state_47052;
var statearr_47081_47125 = state_47052__$1;
(statearr_47081_47125[(2)] = null);

(statearr_47081_47125[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (19))){
var inst_47009 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_47052__$1 = state_47052;
if(cljs.core.truth_(inst_47009)){
var statearr_47082_47126 = state_47052__$1;
(statearr_47082_47126[(1)] = (22));

} else {
var statearr_47083_47127 = state_47052__$1;
(statearr_47083_47127[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (11))){
var inst_46980 = (state_47052[(2)]);
var state_47052__$1 = state_47052;
var statearr_47084_47128 = state_47052__$1;
(statearr_47084_47128[(2)] = inst_46980);

(statearr_47084_47128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (9))){
var inst_46982 = figwheel.client.heads_up.clear.call(null);
var state_47052__$1 = state_47052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47052__$1,(12),inst_46982);
} else {
if((state_val_47053 === (5))){
var inst_46973 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_47052__$1 = state_47052;
var statearr_47085_47129 = state_47052__$1;
(statearr_47085_47129[(2)] = inst_46973);

(statearr_47085_47129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (14))){
var inst_47000 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_47052__$1 = state_47052;
if(cljs.core.truth_(inst_47000)){
var statearr_47086_47130 = state_47052__$1;
(statearr_47086_47130[(1)] = (18));

} else {
var statearr_47087_47131 = state_47052__$1;
(statearr_47087_47131[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (26))){
var inst_47024 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_47052__$1 = state_47052;
if(cljs.core.truth_(inst_47024)){
var statearr_47088_47132 = state_47052__$1;
(statearr_47088_47132[(1)] = (30));

} else {
var statearr_47089_47133 = state_47052__$1;
(statearr_47089_47133[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (16))){
var inst_46992 = (state_47052[(2)]);
var inst_46993 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46994 = figwheel.client.format_messages.call(null,inst_46993);
var inst_46995 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46996 = figwheel.client.heads_up.display_error.call(null,inst_46994,inst_46995);
var state_47052__$1 = (function (){var statearr_47090 = state_47052;
(statearr_47090[(9)] = inst_46992);

return statearr_47090;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47052__$1,(17),inst_46996);
} else {
if((state_val_47053 === (30))){
var inst_47026 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47027 = figwheel.client.heads_up.display_warning.call(null,inst_47026);
var state_47052__$1 = state_47052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47052__$1,(33),inst_47027);
} else {
if((state_val_47053 === (10))){
var inst_46986 = (state_47052[(2)]);
var state_47052__$1 = state_47052;
var statearr_47091_47134 = state_47052__$1;
(statearr_47091_47134[(2)] = inst_46986);

(statearr_47091_47134[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (18))){
var inst_47002 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47003 = figwheel.client.format_messages.call(null,inst_47002);
var inst_47004 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47005 = figwheel.client.heads_up.display_error.call(null,inst_47003,inst_47004);
var state_47052__$1 = state_47052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47052__$1,(21),inst_47005);
} else {
if((state_val_47053 === (37))){
var inst_47035 = (state_47052[(2)]);
var state_47052__$1 = state_47052;
var statearr_47092_47135 = state_47052__$1;
(statearr_47092_47135[(2)] = inst_47035);

(statearr_47092_47135[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (8))){
var inst_46978 = figwheel.client.heads_up.flash_loaded.call(null);
var state_47052__$1 = state_47052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47052__$1,(11),inst_46978);
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
});})(c__21866__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21754__auto__,c__21866__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21755__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21755__auto____0 = (function (){
var statearr_47096 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47096[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21755__auto__);

(statearr_47096[(1)] = (1));

return statearr_47096;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21755__auto____1 = (function (state_47052){
while(true){
var ret_value__21756__auto__ = (function (){try{while(true){
var result__21757__auto__ = switch__21754__auto__.call(null,state_47052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21757__auto__;
}
break;
}
}catch (e47097){if((e47097 instanceof Object)){
var ex__21758__auto__ = e47097;
var statearr_47098_47136 = state_47052;
(statearr_47098_47136[(5)] = ex__21758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47137 = state_47052;
state_47052 = G__47137;
continue;
} else {
return ret_value__21756__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21755__auto__ = function(state_47052){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21755__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21755__auto____1.call(this,state_47052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21755__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21755__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21755__auto__;
})()
;})(switch__21754__auto__,c__21866__auto__,msg_hist,msg_names,msg))
})();
var state__21868__auto__ = (function (){var statearr_47099 = f__21867__auto__.call(null);
(statearr_47099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21866__auto__);

return statearr_47099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21868__auto__);
});})(c__21866__auto__,msg_hist,msg_names,msg))
);

return c__21866__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21866__auto___47200 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21866__auto___47200,ch){
return (function (){
var f__21867__auto__ = (function (){var switch__21754__auto__ = ((function (c__21866__auto___47200,ch){
return (function (state_47183){
var state_val_47184 = (state_47183[(1)]);
if((state_val_47184 === (1))){
var state_47183__$1 = state_47183;
var statearr_47185_47201 = state_47183__$1;
(statearr_47185_47201[(2)] = null);

(statearr_47185_47201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47184 === (2))){
var state_47183__$1 = state_47183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47183__$1,(4),ch);
} else {
if((state_val_47184 === (3))){
var inst_47181 = (state_47183[(2)]);
var state_47183__$1 = state_47183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47183__$1,inst_47181);
} else {
if((state_val_47184 === (4))){
var inst_47171 = (state_47183[(7)]);
var inst_47171__$1 = (state_47183[(2)]);
var state_47183__$1 = (function (){var statearr_47186 = state_47183;
(statearr_47186[(7)] = inst_47171__$1);

return statearr_47186;
})();
if(cljs.core.truth_(inst_47171__$1)){
var statearr_47187_47202 = state_47183__$1;
(statearr_47187_47202[(1)] = (5));

} else {
var statearr_47188_47203 = state_47183__$1;
(statearr_47188_47203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47184 === (5))){
var inst_47171 = (state_47183[(7)]);
var inst_47173 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_47171);
var state_47183__$1 = state_47183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47183__$1,(8),inst_47173);
} else {
if((state_val_47184 === (6))){
var state_47183__$1 = state_47183;
var statearr_47189_47204 = state_47183__$1;
(statearr_47189_47204[(2)] = null);

(statearr_47189_47204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47184 === (7))){
var inst_47179 = (state_47183[(2)]);
var state_47183__$1 = state_47183;
var statearr_47190_47205 = state_47183__$1;
(statearr_47190_47205[(2)] = inst_47179);

(statearr_47190_47205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47184 === (8))){
var inst_47175 = (state_47183[(2)]);
var state_47183__$1 = (function (){var statearr_47191 = state_47183;
(statearr_47191[(8)] = inst_47175);

return statearr_47191;
})();
var statearr_47192_47206 = state_47183__$1;
(statearr_47192_47206[(2)] = null);

(statearr_47192_47206[(1)] = (2));


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
});})(c__21866__auto___47200,ch))
;
return ((function (switch__21754__auto__,c__21866__auto___47200,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21755__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21755__auto____0 = (function (){
var statearr_47196 = [null,null,null,null,null,null,null,null,null];
(statearr_47196[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21755__auto__);

(statearr_47196[(1)] = (1));

return statearr_47196;
});
var figwheel$client$heads_up_plugin_$_state_machine__21755__auto____1 = (function (state_47183){
while(true){
var ret_value__21756__auto__ = (function (){try{while(true){
var result__21757__auto__ = switch__21754__auto__.call(null,state_47183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21757__auto__;
}
break;
}
}catch (e47197){if((e47197 instanceof Object)){
var ex__21758__auto__ = e47197;
var statearr_47198_47207 = state_47183;
(statearr_47198_47207[(5)] = ex__21758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47208 = state_47183;
state_47183 = G__47208;
continue;
} else {
return ret_value__21756__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21755__auto__ = function(state_47183){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21755__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21755__auto____1.call(this,state_47183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21755__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21755__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21755__auto__;
})()
;})(switch__21754__auto__,c__21866__auto___47200,ch))
})();
var state__21868__auto__ = (function (){var statearr_47199 = f__21867__auto__.call(null);
(statearr_47199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21866__auto___47200);

return statearr_47199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21868__auto__);
});})(c__21866__auto___47200,ch))
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
var c__21866__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21866__auto__){
return (function (){
var f__21867__auto__ = (function (){var switch__21754__auto__ = ((function (c__21866__auto__){
return (function (state_47229){
var state_val_47230 = (state_47229[(1)]);
if((state_val_47230 === (1))){
var inst_47224 = cljs.core.async.timeout.call(null,(3000));
var state_47229__$1 = state_47229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47229__$1,(2),inst_47224);
} else {
if((state_val_47230 === (2))){
var inst_47226 = (state_47229[(2)]);
var inst_47227 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_47229__$1 = (function (){var statearr_47231 = state_47229;
(statearr_47231[(7)] = inst_47226);

return statearr_47231;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47229__$1,inst_47227);
} else {
return null;
}
}
});})(c__21866__auto__))
;
return ((function (switch__21754__auto__,c__21866__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21755__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21755__auto____0 = (function (){
var statearr_47235 = [null,null,null,null,null,null,null,null];
(statearr_47235[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21755__auto__);

(statearr_47235[(1)] = (1));

return statearr_47235;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21755__auto____1 = (function (state_47229){
while(true){
var ret_value__21756__auto__ = (function (){try{while(true){
var result__21757__auto__ = switch__21754__auto__.call(null,state_47229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21757__auto__;
}
break;
}
}catch (e47236){if((e47236 instanceof Object)){
var ex__21758__auto__ = e47236;
var statearr_47237_47239 = state_47229;
(statearr_47237_47239[(5)] = ex__21758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47240 = state_47229;
state_47229 = G__47240;
continue;
} else {
return ret_value__21756__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21755__auto__ = function(state_47229){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21755__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21755__auto____1.call(this,state_47229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21755__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21755__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21755__auto__;
})()
;})(switch__21754__auto__,c__21866__auto__))
})();
var state__21868__auto__ = (function (){var statearr_47238 = f__21867__auto__.call(null);
(statearr_47238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21866__auto__);

return statearr_47238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21868__auto__);
});})(c__21866__auto__))
);

return c__21866__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__47241){
var map__47248 = p__47241;
var map__47248__$1 = ((((!((map__47248 == null)))?((((map__47248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47248):map__47248);
var ed = map__47248__$1;
var formatted_exception = cljs.core.get.call(null,map__47248__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__47248__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__47248__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__47250_47254 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__47251_47255 = null;
var count__47252_47256 = (0);
var i__47253_47257 = (0);
while(true){
if((i__47253_47257 < count__47252_47256)){
var msg_47258 = cljs.core._nth.call(null,chunk__47251_47255,i__47253_47257);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_47258);

var G__47259 = seq__47250_47254;
var G__47260 = chunk__47251_47255;
var G__47261 = count__47252_47256;
var G__47262 = (i__47253_47257 + (1));
seq__47250_47254 = G__47259;
chunk__47251_47255 = G__47260;
count__47252_47256 = G__47261;
i__47253_47257 = G__47262;
continue;
} else {
var temp__4657__auto___47263 = cljs.core.seq.call(null,seq__47250_47254);
if(temp__4657__auto___47263){
var seq__47250_47264__$1 = temp__4657__auto___47263;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47250_47264__$1)){
var c__19173__auto___47265 = cljs.core.chunk_first.call(null,seq__47250_47264__$1);
var G__47266 = cljs.core.chunk_rest.call(null,seq__47250_47264__$1);
var G__47267 = c__19173__auto___47265;
var G__47268 = cljs.core.count.call(null,c__19173__auto___47265);
var G__47269 = (0);
seq__47250_47254 = G__47266;
chunk__47251_47255 = G__47267;
count__47252_47256 = G__47268;
i__47253_47257 = G__47269;
continue;
} else {
var msg_47270 = cljs.core.first.call(null,seq__47250_47264__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_47270);

var G__47271 = cljs.core.next.call(null,seq__47250_47264__$1);
var G__47272 = null;
var G__47273 = (0);
var G__47274 = (0);
seq__47250_47254 = G__47271;
chunk__47251_47255 = G__47272;
count__47252_47256 = G__47273;
i__47253_47257 = G__47274;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__47275){
var map__47278 = p__47275;
var map__47278__$1 = ((((!((map__47278 == null)))?((((map__47278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47278):map__47278);
var w = map__47278__$1;
var message = cljs.core.get.call(null,map__47278__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__47286 = cljs.core.seq.call(null,plugins);
var chunk__47287 = null;
var count__47288 = (0);
var i__47289 = (0);
while(true){
if((i__47289 < count__47288)){
var vec__47290 = cljs.core._nth.call(null,chunk__47287,i__47289);
var k = cljs.core.nth.call(null,vec__47290,(0),null);
var plugin = cljs.core.nth.call(null,vec__47290,(1),null);
if(cljs.core.truth_(plugin)){
var pl_47292 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__47286,chunk__47287,count__47288,i__47289,pl_47292,vec__47290,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_47292.call(null,msg_hist);
});})(seq__47286,chunk__47287,count__47288,i__47289,pl_47292,vec__47290,k,plugin))
);
} else {
}

var G__47293 = seq__47286;
var G__47294 = chunk__47287;
var G__47295 = count__47288;
var G__47296 = (i__47289 + (1));
seq__47286 = G__47293;
chunk__47287 = G__47294;
count__47288 = G__47295;
i__47289 = G__47296;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47286);
if(temp__4657__auto__){
var seq__47286__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47286__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__47286__$1);
var G__47297 = cljs.core.chunk_rest.call(null,seq__47286__$1);
var G__47298 = c__19173__auto__;
var G__47299 = cljs.core.count.call(null,c__19173__auto__);
var G__47300 = (0);
seq__47286 = G__47297;
chunk__47287 = G__47298;
count__47288 = G__47299;
i__47289 = G__47300;
continue;
} else {
var vec__47291 = cljs.core.first.call(null,seq__47286__$1);
var k = cljs.core.nth.call(null,vec__47291,(0),null);
var plugin = cljs.core.nth.call(null,vec__47291,(1),null);
if(cljs.core.truth_(plugin)){
var pl_47301 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__47286,chunk__47287,count__47288,i__47289,pl_47301,vec__47291,k,plugin,seq__47286__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_47301.call(null,msg_hist);
});})(seq__47286,chunk__47287,count__47288,i__47289,pl_47301,vec__47291,k,plugin,seq__47286__$1,temp__4657__auto__))
);
} else {
}

var G__47302 = cljs.core.next.call(null,seq__47286__$1);
var G__47303 = null;
var G__47304 = (0);
var G__47305 = (0);
seq__47286 = G__47302;
chunk__47287 = G__47303;
count__47288 = G__47304;
i__47289 = G__47305;
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
var args47306 = [];
var len__19428__auto___47309 = arguments.length;
var i__19429__auto___47310 = (0);
while(true){
if((i__19429__auto___47310 < len__19428__auto___47309)){
args47306.push((arguments[i__19429__auto___47310]));

var G__47311 = (i__19429__auto___47310 + (1));
i__19429__auto___47310 = G__47311;
continue;
} else {
}
break;
}

var G__47308 = args47306.length;
switch (G__47308) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47306.length)].join('')));

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
var len__19428__auto___47317 = arguments.length;
var i__19429__auto___47318 = (0);
while(true){
if((i__19429__auto___47318 < len__19428__auto___47317)){
args__19435__auto__.push((arguments[i__19429__auto___47318]));

var G__47319 = (i__19429__auto___47318 + (1));
i__19429__auto___47318 = G__47319;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((0) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19436__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__47314){
var map__47315 = p__47314;
var map__47315__$1 = ((((!((map__47315 == null)))?((((map__47315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47315):map__47315);
var opts = map__47315__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq47313){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47313));
});

//# sourceMappingURL=client.js.map?rel=1458852302984