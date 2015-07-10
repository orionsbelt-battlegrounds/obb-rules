// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__34587_SHARP_,p2__34588_SHARP_){
var and__16097__auto__ = p1__34587_SHARP_;
if(cljs.core.truth_(and__16097__auto__)){
return p2__34588_SHARP_;
} else {
return and__16097__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16109__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16109__auto__){
return or__16109__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16109__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16109__auto__){
return or__16109__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16109__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17004__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17005__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17006__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17007__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17008__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17008__auto__,method_table__17004__auto__,prefer_table__17005__auto__,method_cache__17006__auto__,cached_hierarchy__17007__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__34589){
var map__34590 = p__34589;
var map__34590__$1 = ((cljs.core.seq_QMARK_.call(null,map__34590))?cljs.core.apply.call(null,cljs.core.hash_map,map__34590):map__34590);
var file = cljs.core.get.call(null,map__34590__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__34591){
var map__34592 = p__34591;
var map__34592__$1 = ((cljs.core.seq_QMARK_.call(null,map__34592))?cljs.core.apply.call(null,cljs.core.hash_map,map__34592):map__34592);
var namespace = cljs.core.get.call(null,map__34592__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__17004__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17005__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17006__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17007__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17008__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17008__auto__,method_table__17004__auto__,prefer_table__17005__auto__,method_cache__17006__auto__,cached_hierarchy__17007__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e34593){if((e34593 instanceof Error)){
var e = e34593;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34593;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__34595 = arguments.length;
switch (G__34595) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34597,callback){
var map__34599 = p__34597;
var map__34599__$1 = ((cljs.core.seq_QMARK_.call(null,map__34599))?cljs.core.apply.call(null,cljs.core.hash_map,map__34599):map__34599);
var file_msg = map__34599__$1;
var request_url = cljs.core.get.call(null,map__34599__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34599,map__34599__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34599,map__34599__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34600){
var map__34602 = p__34600;
var map__34602__$1 = ((cljs.core.seq_QMARK_.call(null,map__34602))?cljs.core.apply.call(null,cljs.core.hash_map,map__34602):map__34602);
var file_msg = map__34602__$1;
var namespace = cljs.core.get.call(null,map__34602__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__34602__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__16109__auto__ = meta_data;
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16097__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16097__auto__){
var or__16109__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
var or__16109__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16109__auto____$1)){
return or__16109__auto____$1;
} else {
var and__16097__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16097__auto____$1){
var or__16109__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16109__auto____$2){
return or__16109__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16097__auto____$1;
}
}
}
} else {
return and__16097__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34603,callback){
var map__34605 = p__34603;
var map__34605__$1 = ((cljs.core.seq_QMARK_.call(null,map__34605))?cljs.core.apply.call(null,cljs.core.hash_map,map__34605):map__34605);
var file_msg = map__34605__$1;
var request_url = cljs.core.get.call(null,map__34605__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34605__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19453__auto___34692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto___34692,out){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (c__19453__auto___34692,out){
return (function (state_34674){
var state_val_34675 = (state_34674[(1)]);
if((state_val_34675 === (1))){
var inst_34652 = cljs.core.nth.call(null,files,(0),null);
var inst_34653 = cljs.core.nthnext.call(null,files,(1));
var inst_34654 = files;
var state_34674__$1 = (function (){var statearr_34676 = state_34674;
(statearr_34676[(7)] = inst_34654);

(statearr_34676[(8)] = inst_34653);

(statearr_34676[(9)] = inst_34652);

return statearr_34676;
})();
var statearr_34677_34693 = state_34674__$1;
(statearr_34677_34693[(2)] = null);

(statearr_34677_34693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (2))){
var inst_34657 = (state_34674[(10)]);
var inst_34654 = (state_34674[(7)]);
var inst_34657__$1 = cljs.core.nth.call(null,inst_34654,(0),null);
var inst_34658 = cljs.core.nthnext.call(null,inst_34654,(1));
var inst_34659 = (inst_34657__$1 == null);
var inst_34660 = cljs.core.not.call(null,inst_34659);
var state_34674__$1 = (function (){var statearr_34678 = state_34674;
(statearr_34678[(10)] = inst_34657__$1);

(statearr_34678[(11)] = inst_34658);

return statearr_34678;
})();
if(inst_34660){
var statearr_34679_34694 = state_34674__$1;
(statearr_34679_34694[(1)] = (4));

} else {
var statearr_34680_34695 = state_34674__$1;
(statearr_34680_34695[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (3))){
var inst_34672 = (state_34674[(2)]);
var state_34674__$1 = state_34674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34674__$1,inst_34672);
} else {
if((state_val_34675 === (4))){
var inst_34657 = (state_34674[(10)]);
var inst_34662 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34657);
var state_34674__$1 = state_34674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34674__$1,(7),inst_34662);
} else {
if((state_val_34675 === (5))){
var inst_34668 = cljs.core.async.close_BANG_.call(null,out);
var state_34674__$1 = state_34674;
var statearr_34681_34696 = state_34674__$1;
(statearr_34681_34696[(2)] = inst_34668);

(statearr_34681_34696[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (6))){
var inst_34670 = (state_34674[(2)]);
var state_34674__$1 = state_34674;
var statearr_34682_34697 = state_34674__$1;
(statearr_34682_34697[(2)] = inst_34670);

(statearr_34682_34697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (7))){
var inst_34658 = (state_34674[(11)]);
var inst_34664 = (state_34674[(2)]);
var inst_34665 = cljs.core.async.put_BANG_.call(null,out,inst_34664);
var inst_34654 = inst_34658;
var state_34674__$1 = (function (){var statearr_34683 = state_34674;
(statearr_34683[(12)] = inst_34665);

(statearr_34683[(7)] = inst_34654);

return statearr_34683;
})();
var statearr_34684_34698 = state_34674__$1;
(statearr_34684_34698[(2)] = null);

(statearr_34684_34698[(1)] = (2));


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
});})(c__19453__auto___34692,out))
;
return ((function (switch__19391__auto__,c__19453__auto___34692,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19392__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19392__auto____0 = (function (){
var statearr_34688 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34688[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19392__auto__);

(statearr_34688[(1)] = (1));

return statearr_34688;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19392__auto____1 = (function (state_34674){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_34674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e34689){if((e34689 instanceof Object)){
var ex__19395__auto__ = e34689;
var statearr_34690_34699 = state_34674;
(statearr_34690_34699[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34700 = state_34674;
state_34674 = G__34700;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19392__auto__ = function(state_34674){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19392__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19392__auto____1.call(this,state_34674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19392__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19392__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19392__auto__;
})()
;})(switch__19391__auto__,c__19453__auto___34692,out))
})();
var state__19455__auto__ = (function (){var statearr_34691 = f__19454__auto__.call(null);
(statearr_34691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto___34692);

return statearr_34691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto___34692,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__34701,p__34702){
var map__34705 = p__34701;
var map__34705__$1 = ((cljs.core.seq_QMARK_.call(null,map__34705))?cljs.core.apply.call(null,cljs.core.hash_map,map__34705):map__34705);
var opts = map__34705__$1;
var url_rewriter = cljs.core.get.call(null,map__34705__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__34706 = p__34702;
var map__34706__$1 = ((cljs.core.seq_QMARK_.call(null,map__34706))?cljs.core.apply.call(null,cljs.core.hash_map,map__34706):map__34706);
var file_msg = map__34706__$1;
var file = cljs.core.get.call(null,map__34706__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34707,opts){
var map__34710 = p__34707;
var map__34710__$1 = ((cljs.core.seq_QMARK_.call(null,map__34710))?cljs.core.apply.call(null,cljs.core.hash_map,map__34710):map__34710);
var eval_body__$1 = cljs.core.get.call(null,map__34710__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34710__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16097__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16097__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16097__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34711){var e = e34711;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34716,p__34717){
var map__34919 = p__34716;
var map__34919__$1 = ((cljs.core.seq_QMARK_.call(null,map__34919))?cljs.core.apply.call(null,cljs.core.hash_map,map__34919):map__34919);
var opts = map__34919__$1;
var before_jsload = cljs.core.get.call(null,map__34919__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34919__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__34919__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__34920 = p__34717;
var map__34920__$1 = ((cljs.core.seq_QMARK_.call(null,map__34920))?cljs.core.apply.call(null,cljs.core.hash_map,map__34920):map__34920);
var msg = map__34920__$1;
var files = cljs.core.get.call(null,map__34920__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto__,map__34919,map__34919__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34920,map__34920__$1,msg,files){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (c__19453__auto__,map__34919,map__34919__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34920,map__34920__$1,msg,files){
return (function (state_35045){
var state_val_35046 = (state_35045[(1)]);
if((state_val_35046 === (7))){
var inst_34934 = (state_35045[(7)]);
var inst_34933 = (state_35045[(8)]);
var inst_34935 = (state_35045[(9)]);
var inst_34932 = (state_35045[(10)]);
var inst_34940 = cljs.core._nth.call(null,inst_34933,inst_34935);
var inst_34941 = figwheel.client.file_reloading.eval_body.call(null,inst_34940,opts);
var inst_34942 = (inst_34935 + (1));
var tmp35047 = inst_34934;
var tmp35048 = inst_34933;
var tmp35049 = inst_34932;
var inst_34932__$1 = tmp35049;
var inst_34933__$1 = tmp35048;
var inst_34934__$1 = tmp35047;
var inst_34935__$1 = inst_34942;
var state_35045__$1 = (function (){var statearr_35050 = state_35045;
(statearr_35050[(7)] = inst_34934__$1);

(statearr_35050[(11)] = inst_34941);

(statearr_35050[(8)] = inst_34933__$1);

(statearr_35050[(9)] = inst_34935__$1);

(statearr_35050[(10)] = inst_34932__$1);

return statearr_35050;
})();
var statearr_35051_35120 = state_35045__$1;
(statearr_35051_35120[(2)] = null);

(statearr_35051_35120[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (20))){
var inst_34977 = (state_35045[(12)]);
var inst_34981 = (state_35045[(13)]);
var inst_34982 = (state_35045[(14)]);
var inst_34978 = (state_35045[(15)]);
var inst_34984 = (state_35045[(16)]);
var inst_34987 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34989 = (function (){var all_files = inst_34977;
var files_SINGLEQUOTE_ = inst_34978;
var res_SINGLEQUOTE_ = inst_34981;
var res = inst_34982;
var files_not_loaded = inst_34984;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_34977,inst_34981,inst_34982,inst_34978,inst_34984,inst_34987,state_val_35046,c__19453__auto__,map__34919,map__34919__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34920,map__34920__$1,msg,files){
return (function (p__34988){
var map__35052 = p__34988;
var map__35052__$1 = ((cljs.core.seq_QMARK_.call(null,map__35052))?cljs.core.apply.call(null,cljs.core.hash_map,map__35052):map__35052);
var namespace = cljs.core.get.call(null,map__35052__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35052__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_34977,inst_34981,inst_34982,inst_34978,inst_34984,inst_34987,state_val_35046,c__19453__auto__,map__34919,map__34919__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34920,map__34920__$1,msg,files))
})();
var inst_34990 = cljs.core.map.call(null,inst_34989,inst_34982);
var inst_34991 = cljs.core.pr_str.call(null,inst_34990);
var inst_34992 = figwheel.client.utils.log.call(null,inst_34991);
var inst_34993 = (function (){var all_files = inst_34977;
var files_SINGLEQUOTE_ = inst_34978;
var res_SINGLEQUOTE_ = inst_34981;
var res = inst_34982;
var files_not_loaded = inst_34984;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_34977,inst_34981,inst_34982,inst_34978,inst_34984,inst_34987,inst_34989,inst_34990,inst_34991,inst_34992,state_val_35046,c__19453__auto__,map__34919,map__34919__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34920,map__34920__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_34977,inst_34981,inst_34982,inst_34978,inst_34984,inst_34987,inst_34989,inst_34990,inst_34991,inst_34992,state_val_35046,c__19453__auto__,map__34919,map__34919__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34920,map__34920__$1,msg,files))
})();
var inst_34994 = setTimeout(inst_34993,(10));
var state_35045__$1 = (function (){var statearr_35053 = state_35045;
(statearr_35053[(17)] = inst_34992);

(statearr_35053[(18)] = inst_34987);

return statearr_35053;
})();
var statearr_35054_35121 = state_35045__$1;
(statearr_35054_35121[(2)] = inst_34994);

(statearr_35054_35121[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (27))){
var inst_35004 = (state_35045[(19)]);
var state_35045__$1 = state_35045;
var statearr_35055_35122 = state_35045__$1;
(statearr_35055_35122[(2)] = inst_35004);

(statearr_35055_35122[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (1))){
var inst_34924 = (state_35045[(20)]);
var inst_34921 = before_jsload.call(null,files);
var inst_34922 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34923 = (function (){return ((function (inst_34924,inst_34921,inst_34922,state_val_35046,c__19453__auto__,map__34919,map__34919__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34920,map__34920__$1,msg,files){
return (function (p1__34712_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34712_SHARP_);
});
;})(inst_34924,inst_34921,inst_34922,state_val_35046,c__19453__auto__,map__34919,map__34919__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34920,map__34920__$1,msg,files))
})();
var inst_34924__$1 = cljs.core.filter.call(null,inst_34923,files);
var inst_34925 = cljs.core.not_empty.call(null,inst_34924__$1);
var state_35045__$1 = (function (){var statearr_35056 = state_35045;
(statearr_35056[(20)] = inst_34924__$1);

(statearr_35056[(21)] = inst_34921);

(statearr_35056[(22)] = inst_34922);

return statearr_35056;
})();
if(cljs.core.truth_(inst_34925)){
var statearr_35057_35123 = state_35045__$1;
(statearr_35057_35123[(1)] = (2));

} else {
var statearr_35058_35124 = state_35045__$1;
(statearr_35058_35124[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (24))){
var state_35045__$1 = state_35045;
var statearr_35059_35125 = state_35045__$1;
(statearr_35059_35125[(2)] = null);

(statearr_35059_35125[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (4))){
var inst_34969 = (state_35045[(2)]);
var inst_34970 = (function (){return ((function (inst_34969,state_val_35046,c__19453__auto__,map__34919,map__34919__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34920,map__34920__$1,msg,files){
return (function (p1__34713_SHARP_){
var and__16097__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34713_SHARP_);
if(cljs.core.truth_(and__16097__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34713_SHARP_));
} else {
return and__16097__auto__;
}
});
;})(inst_34969,state_val_35046,c__19453__auto__,map__34919,map__34919__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34920,map__34920__$1,msg,files))
})();
var inst_34971 = cljs.core.filter.call(null,inst_34970,files);
var state_35045__$1 = (function (){var statearr_35060 = state_35045;
(statearr_35060[(23)] = inst_34971);

(statearr_35060[(24)] = inst_34969);

return statearr_35060;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_35061_35126 = state_35045__$1;
(statearr_35061_35126[(1)] = (16));

} else {
var statearr_35062_35127 = state_35045__$1;
(statearr_35062_35127[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (15))){
var inst_34959 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
var statearr_35063_35128 = state_35045__$1;
(statearr_35063_35128[(2)] = inst_34959);

(statearr_35063_35128[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (21))){
var state_35045__$1 = state_35045;
var statearr_35064_35129 = state_35045__$1;
(statearr_35064_35129[(2)] = null);

(statearr_35064_35129[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (31))){
var inst_35012 = (state_35045[(25)]);
var inst_35022 = (state_35045[(2)]);
var inst_35023 = cljs.core.not_empty.call(null,inst_35012);
var state_35045__$1 = (function (){var statearr_35065 = state_35045;
(statearr_35065[(26)] = inst_35022);

return statearr_35065;
})();
if(cljs.core.truth_(inst_35023)){
var statearr_35066_35130 = state_35045__$1;
(statearr_35066_35130[(1)] = (32));

} else {
var statearr_35067_35131 = state_35045__$1;
(statearr_35067_35131[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (32))){
var inst_35012 = (state_35045[(25)]);
var inst_35025 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35012);
var inst_35026 = cljs.core.pr_str.call(null,inst_35025);
var inst_35027 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_35026)].join('');
var inst_35028 = figwheel.client.utils.log.call(null,inst_35027);
var state_35045__$1 = state_35045;
var statearr_35068_35132 = state_35045__$1;
(statearr_35068_35132[(2)] = inst_35028);

(statearr_35068_35132[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (33))){
var state_35045__$1 = state_35045;
var statearr_35069_35133 = state_35045__$1;
(statearr_35069_35133[(2)] = null);

(statearr_35069_35133[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (13))){
var inst_34945 = (state_35045[(27)]);
var inst_34949 = cljs.core.chunk_first.call(null,inst_34945);
var inst_34950 = cljs.core.chunk_rest.call(null,inst_34945);
var inst_34951 = cljs.core.count.call(null,inst_34949);
var inst_34932 = inst_34950;
var inst_34933 = inst_34949;
var inst_34934 = inst_34951;
var inst_34935 = (0);
var state_35045__$1 = (function (){var statearr_35070 = state_35045;
(statearr_35070[(7)] = inst_34934);

(statearr_35070[(8)] = inst_34933);

(statearr_35070[(9)] = inst_34935);

(statearr_35070[(10)] = inst_34932);

return statearr_35070;
})();
var statearr_35071_35134 = state_35045__$1;
(statearr_35071_35134[(2)] = null);

(statearr_35071_35134[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (22))){
var inst_34984 = (state_35045[(16)]);
var inst_34997 = (state_35045[(2)]);
var inst_34998 = cljs.core.not_empty.call(null,inst_34984);
var state_35045__$1 = (function (){var statearr_35072 = state_35045;
(statearr_35072[(28)] = inst_34997);

return statearr_35072;
})();
if(cljs.core.truth_(inst_34998)){
var statearr_35073_35135 = state_35045__$1;
(statearr_35073_35135[(1)] = (23));

} else {
var statearr_35074_35136 = state_35045__$1;
(statearr_35074_35136[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (36))){
var state_35045__$1 = state_35045;
var statearr_35075_35137 = state_35045__$1;
(statearr_35075_35137[(2)] = null);

(statearr_35075_35137[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (29))){
var inst_35011 = (state_35045[(29)]);
var inst_35016 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35011);
var inst_35017 = cljs.core.pr_str.call(null,inst_35016);
var inst_35018 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35017)].join('');
var inst_35019 = figwheel.client.utils.log.call(null,inst_35018);
var state_35045__$1 = state_35045;
var statearr_35076_35138 = state_35045__$1;
(statearr_35076_35138[(2)] = inst_35019);

(statearr_35076_35138[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (6))){
var inst_34966 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
var statearr_35077_35139 = state_35045__$1;
(statearr_35077_35139[(2)] = inst_34966);

(statearr_35077_35139[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (28))){
var inst_35011 = (state_35045[(29)]);
var inst_35010 = (state_35045[(2)]);
var inst_35011__$1 = cljs.core.get.call(null,inst_35010,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35012 = cljs.core.get.call(null,inst_35010,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_35013 = cljs.core.get.call(null,inst_35010,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35014 = cljs.core.not_empty.call(null,inst_35011__$1);
var state_35045__$1 = (function (){var statearr_35078 = state_35045;
(statearr_35078[(30)] = inst_35013);

(statearr_35078[(25)] = inst_35012);

(statearr_35078[(29)] = inst_35011__$1);

return statearr_35078;
})();
if(cljs.core.truth_(inst_35014)){
var statearr_35079_35140 = state_35045__$1;
(statearr_35079_35140[(1)] = (29));

} else {
var statearr_35080_35141 = state_35045__$1;
(statearr_35080_35141[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (25))){
var inst_35043 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35045__$1,inst_35043);
} else {
if((state_val_35046 === (34))){
var inst_35013 = (state_35045[(30)]);
var inst_35031 = (state_35045[(2)]);
var inst_35032 = cljs.core.not_empty.call(null,inst_35013);
var state_35045__$1 = (function (){var statearr_35081 = state_35045;
(statearr_35081[(31)] = inst_35031);

return statearr_35081;
})();
if(cljs.core.truth_(inst_35032)){
var statearr_35082_35142 = state_35045__$1;
(statearr_35082_35142[(1)] = (35));

} else {
var statearr_35083_35143 = state_35045__$1;
(statearr_35083_35143[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (17))){
var inst_34971 = (state_35045[(23)]);
var state_35045__$1 = state_35045;
var statearr_35084_35144 = state_35045__$1;
(statearr_35084_35144[(2)] = inst_34971);

(statearr_35084_35144[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (3))){
var state_35045__$1 = state_35045;
var statearr_35085_35145 = state_35045__$1;
(statearr_35085_35145[(2)] = null);

(statearr_35085_35145[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (12))){
var inst_34962 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
var statearr_35086_35146 = state_35045__$1;
(statearr_35086_35146[(2)] = inst_34962);

(statearr_35086_35146[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (2))){
var inst_34924 = (state_35045[(20)]);
var inst_34931 = cljs.core.seq.call(null,inst_34924);
var inst_34932 = inst_34931;
var inst_34933 = null;
var inst_34934 = (0);
var inst_34935 = (0);
var state_35045__$1 = (function (){var statearr_35087 = state_35045;
(statearr_35087[(7)] = inst_34934);

(statearr_35087[(8)] = inst_34933);

(statearr_35087[(9)] = inst_34935);

(statearr_35087[(10)] = inst_34932);

return statearr_35087;
})();
var statearr_35088_35147 = state_35045__$1;
(statearr_35088_35147[(2)] = null);

(statearr_35088_35147[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (23))){
var inst_35004 = (state_35045[(19)]);
var inst_34977 = (state_35045[(12)]);
var inst_34981 = (state_35045[(13)]);
var inst_34982 = (state_35045[(14)]);
var inst_34978 = (state_35045[(15)]);
var inst_34984 = (state_35045[(16)]);
var inst_35000 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35003 = (function (){var all_files = inst_34977;
var files_SINGLEQUOTE_ = inst_34978;
var res_SINGLEQUOTE_ = inst_34981;
var res = inst_34982;
var files_not_loaded = inst_34984;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35004,inst_34977,inst_34981,inst_34982,inst_34978,inst_34984,inst_35000,state_val_35046,c__19453__auto__,map__34919,map__34919__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34920,map__34920__$1,msg,files){
return (function (p__35002){
var map__35089 = p__35002;
var map__35089__$1 = ((cljs.core.seq_QMARK_.call(null,map__35089))?cljs.core.apply.call(null,cljs.core.hash_map,map__35089):map__35089);
var meta_data = cljs.core.get.call(null,map__35089__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35004,inst_34977,inst_34981,inst_34982,inst_34978,inst_34984,inst_35000,state_val_35046,c__19453__auto__,map__34919,map__34919__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34920,map__34920__$1,msg,files))
})();
var inst_35004__$1 = cljs.core.group_by.call(null,inst_35003,inst_34984);
var inst_35005 = cljs.core.seq_QMARK_.call(null,inst_35004__$1);
var state_35045__$1 = (function (){var statearr_35090 = state_35045;
(statearr_35090[(19)] = inst_35004__$1);

(statearr_35090[(32)] = inst_35000);

return statearr_35090;
})();
if(inst_35005){
var statearr_35091_35148 = state_35045__$1;
(statearr_35091_35148[(1)] = (26));

} else {
var statearr_35092_35149 = state_35045__$1;
(statearr_35092_35149[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (35))){
var inst_35013 = (state_35045[(30)]);
var inst_35034 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35013);
var inst_35035 = cljs.core.pr_str.call(null,inst_35034);
var inst_35036 = [cljs.core.str("not required: "),cljs.core.str(inst_35035)].join('');
var inst_35037 = figwheel.client.utils.log.call(null,inst_35036);
var state_35045__$1 = state_35045;
var statearr_35093_35150 = state_35045__$1;
(statearr_35093_35150[(2)] = inst_35037);

(statearr_35093_35150[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (19))){
var inst_34977 = (state_35045[(12)]);
var inst_34981 = (state_35045[(13)]);
var inst_34982 = (state_35045[(14)]);
var inst_34978 = (state_35045[(15)]);
var inst_34981__$1 = (state_35045[(2)]);
var inst_34982__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34981__$1);
var inst_34983 = (function (){var all_files = inst_34977;
var files_SINGLEQUOTE_ = inst_34978;
var res_SINGLEQUOTE_ = inst_34981__$1;
var res = inst_34982__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_34977,inst_34981,inst_34982,inst_34978,inst_34981__$1,inst_34982__$1,state_val_35046,c__19453__auto__,map__34919,map__34919__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34920,map__34920__$1,msg,files){
return (function (p1__34715_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34715_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_34977,inst_34981,inst_34982,inst_34978,inst_34981__$1,inst_34982__$1,state_val_35046,c__19453__auto__,map__34919,map__34919__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34920,map__34920__$1,msg,files))
})();
var inst_34984 = cljs.core.filter.call(null,inst_34983,inst_34981__$1);
var inst_34985 = cljs.core.not_empty.call(null,inst_34982__$1);
var state_35045__$1 = (function (){var statearr_35094 = state_35045;
(statearr_35094[(13)] = inst_34981__$1);

(statearr_35094[(14)] = inst_34982__$1);

(statearr_35094[(16)] = inst_34984);

return statearr_35094;
})();
if(cljs.core.truth_(inst_34985)){
var statearr_35095_35151 = state_35045__$1;
(statearr_35095_35151[(1)] = (20));

} else {
var statearr_35096_35152 = state_35045__$1;
(statearr_35096_35152[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (11))){
var state_35045__$1 = state_35045;
var statearr_35097_35153 = state_35045__$1;
(statearr_35097_35153[(2)] = null);

(statearr_35097_35153[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (9))){
var inst_34964 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
var statearr_35098_35154 = state_35045__$1;
(statearr_35098_35154[(2)] = inst_34964);

(statearr_35098_35154[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (5))){
var inst_34934 = (state_35045[(7)]);
var inst_34935 = (state_35045[(9)]);
var inst_34937 = (inst_34935 < inst_34934);
var inst_34938 = inst_34937;
var state_35045__$1 = state_35045;
if(cljs.core.truth_(inst_34938)){
var statearr_35099_35155 = state_35045__$1;
(statearr_35099_35155[(1)] = (7));

} else {
var statearr_35100_35156 = state_35045__$1;
(statearr_35100_35156[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (14))){
var inst_34945 = (state_35045[(27)]);
var inst_34954 = cljs.core.first.call(null,inst_34945);
var inst_34955 = figwheel.client.file_reloading.eval_body.call(null,inst_34954,opts);
var inst_34956 = cljs.core.next.call(null,inst_34945);
var inst_34932 = inst_34956;
var inst_34933 = null;
var inst_34934 = (0);
var inst_34935 = (0);
var state_35045__$1 = (function (){var statearr_35101 = state_35045;
(statearr_35101[(7)] = inst_34934);

(statearr_35101[(8)] = inst_34933);

(statearr_35101[(33)] = inst_34955);

(statearr_35101[(9)] = inst_34935);

(statearr_35101[(10)] = inst_34932);

return statearr_35101;
})();
var statearr_35102_35157 = state_35045__$1;
(statearr_35102_35157[(2)] = null);

(statearr_35102_35157[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (26))){
var inst_35004 = (state_35045[(19)]);
var inst_35007 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35004);
var state_35045__$1 = state_35045;
var statearr_35103_35158 = state_35045__$1;
(statearr_35103_35158[(2)] = inst_35007);

(statearr_35103_35158[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (16))){
var inst_34971 = (state_35045[(23)]);
var inst_34973 = (function (){var all_files = inst_34971;
return ((function (all_files,inst_34971,state_val_35046,c__19453__auto__,map__34919,map__34919__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34920,map__34920__$1,msg,files){
return (function (p1__34714_SHARP_){
return cljs.core.update_in.call(null,p1__34714_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_34971,state_val_35046,c__19453__auto__,map__34919,map__34919__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34920,map__34920__$1,msg,files))
})();
var inst_34974 = cljs.core.map.call(null,inst_34973,inst_34971);
var state_35045__$1 = state_35045;
var statearr_35104_35159 = state_35045__$1;
(statearr_35104_35159[(2)] = inst_34974);

(statearr_35104_35159[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (30))){
var state_35045__$1 = state_35045;
var statearr_35105_35160 = state_35045__$1;
(statearr_35105_35160[(2)] = null);

(statearr_35105_35160[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (10))){
var inst_34945 = (state_35045[(27)]);
var inst_34947 = cljs.core.chunked_seq_QMARK_.call(null,inst_34945);
var state_35045__$1 = state_35045;
if(inst_34947){
var statearr_35106_35161 = state_35045__$1;
(statearr_35106_35161[(1)] = (13));

} else {
var statearr_35107_35162 = state_35045__$1;
(statearr_35107_35162[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (18))){
var inst_34977 = (state_35045[(12)]);
var inst_34978 = (state_35045[(15)]);
var inst_34977__$1 = (state_35045[(2)]);
var inst_34978__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_34977__$1);
var inst_34979 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34978__$1);
var state_35045__$1 = (function (){var statearr_35108 = state_35045;
(statearr_35108[(12)] = inst_34977__$1);

(statearr_35108[(15)] = inst_34978__$1);

return statearr_35108;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35045__$1,(19),inst_34979);
} else {
if((state_val_35046 === (37))){
var inst_35040 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
var statearr_35109_35163 = state_35045__$1;
(statearr_35109_35163[(2)] = inst_35040);

(statearr_35109_35163[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (8))){
var inst_34932 = (state_35045[(10)]);
var inst_34945 = (state_35045[(27)]);
var inst_34945__$1 = cljs.core.seq.call(null,inst_34932);
var state_35045__$1 = (function (){var statearr_35110 = state_35045;
(statearr_35110[(27)] = inst_34945__$1);

return statearr_35110;
})();
if(inst_34945__$1){
var statearr_35111_35164 = state_35045__$1;
(statearr_35111_35164[(1)] = (10));

} else {
var statearr_35112_35165 = state_35045__$1;
(statearr_35112_35165[(1)] = (11));

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
});})(c__19453__auto__,map__34919,map__34919__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34920,map__34920__$1,msg,files))
;
return ((function (switch__19391__auto__,c__19453__auto__,map__34919,map__34919__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34920,map__34920__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19392__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19392__auto____0 = (function (){
var statearr_35116 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35116[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19392__auto__);

(statearr_35116[(1)] = (1));

return statearr_35116;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19392__auto____1 = (function (state_35045){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_35045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e35117){if((e35117 instanceof Object)){
var ex__19395__auto__ = e35117;
var statearr_35118_35166 = state_35045;
(statearr_35118_35166[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35167 = state_35045;
state_35045 = G__35167;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19392__auto__ = function(state_35045){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19392__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19392__auto____1.call(this,state_35045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19392__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19392__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19392__auto__;
})()
;})(switch__19391__auto__,c__19453__auto__,map__34919,map__34919__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34920,map__34920__$1,msg,files))
})();
var state__19455__auto__ = (function (){var statearr_35119 = f__19454__auto__.call(null);
(statearr_35119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto__);

return statearr_35119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto__,map__34919,map__34919__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34920,map__34920__$1,msg,files))
);

return c__19453__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35170,link){
var map__35172 = p__35170;
var map__35172__$1 = ((cljs.core.seq_QMARK_.call(null,map__35172))?cljs.core.apply.call(null,cljs.core.hash_map,map__35172):map__35172);
var file = cljs.core.get.call(null,map__35172__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__35172,map__35172__$1,file){
return (function (p1__35168_SHARP_,p2__35169_SHARP_){
if(cljs.core._EQ_.call(null,p1__35168_SHARP_,p2__35169_SHARP_)){
return p1__35168_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__35172,map__35172__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35176){
var map__35177 = p__35176;
var map__35177__$1 = ((cljs.core.seq_QMARK_.call(null,map__35177))?cljs.core.apply.call(null,cljs.core.hash_map,map__35177):map__35177);
var match_length = cljs.core.get.call(null,map__35177__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35177__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35173_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35173_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__35179 = arguments.length;
switch (G__35179) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__35181){
var map__35183 = p__35181;
var map__35183__$1 = ((cljs.core.seq_QMARK_.call(null,map__35183))?cljs.core.apply.call(null,cljs.core.hash_map,map__35183):map__35183);
var f_data = map__35183__$1;
var file = cljs.core.get.call(null,map__35183__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__35183__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16109__auto__ = request_url;
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35184,files_msg){
var map__35206 = p__35184;
var map__35206__$1 = ((cljs.core.seq_QMARK_.call(null,map__35206))?cljs.core.apply.call(null,cljs.core.hash_map,map__35206):map__35206);
var opts = map__35206__$1;
var on_cssload = cljs.core.get.call(null,map__35206__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35207_35227 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__35208_35228 = null;
var count__35209_35229 = (0);
var i__35210_35230 = (0);
while(true){
if((i__35210_35230 < count__35209_35229)){
var f_35231 = cljs.core._nth.call(null,chunk__35208_35228,i__35210_35230);
figwheel.client.file_reloading.reload_css_file.call(null,f_35231);

var G__35232 = seq__35207_35227;
var G__35233 = chunk__35208_35228;
var G__35234 = count__35209_35229;
var G__35235 = (i__35210_35230 + (1));
seq__35207_35227 = G__35232;
chunk__35208_35228 = G__35233;
count__35209_35229 = G__35234;
i__35210_35230 = G__35235;
continue;
} else {
var temp__4425__auto___35236 = cljs.core.seq.call(null,seq__35207_35227);
if(temp__4425__auto___35236){
var seq__35207_35237__$1 = temp__4425__auto___35236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35207_35237__$1)){
var c__16894__auto___35238 = cljs.core.chunk_first.call(null,seq__35207_35237__$1);
var G__35239 = cljs.core.chunk_rest.call(null,seq__35207_35237__$1);
var G__35240 = c__16894__auto___35238;
var G__35241 = cljs.core.count.call(null,c__16894__auto___35238);
var G__35242 = (0);
seq__35207_35227 = G__35239;
chunk__35208_35228 = G__35240;
count__35209_35229 = G__35241;
i__35210_35230 = G__35242;
continue;
} else {
var f_35243 = cljs.core.first.call(null,seq__35207_35237__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35243);

var G__35244 = cljs.core.next.call(null,seq__35207_35237__$1);
var G__35245 = null;
var G__35246 = (0);
var G__35247 = (0);
seq__35207_35227 = G__35244;
chunk__35208_35228 = G__35245;
count__35209_35229 = G__35246;
i__35210_35230 = G__35247;
continue;
}
} else {
}
}
break;
}

var c__19453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto__,map__35206,map__35206__$1,opts,on_cssload){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (c__19453__auto__,map__35206,map__35206__$1,opts,on_cssload){
return (function (state_35217){
var state_val_35218 = (state_35217[(1)]);
if((state_val_35218 === (1))){
var inst_35211 = cljs.core.async.timeout.call(null,(100));
var state_35217__$1 = state_35217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35217__$1,(2),inst_35211);
} else {
if((state_val_35218 === (2))){
var inst_35213 = (state_35217[(2)]);
var inst_35214 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_35215 = on_cssload.call(null,inst_35214);
var state_35217__$1 = (function (){var statearr_35219 = state_35217;
(statearr_35219[(7)] = inst_35213);

return statearr_35219;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35217__$1,inst_35215);
} else {
return null;
}
}
});})(c__19453__auto__,map__35206,map__35206__$1,opts,on_cssload))
;
return ((function (switch__19391__auto__,c__19453__auto__,map__35206,map__35206__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19392__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19392__auto____0 = (function (){
var statearr_35223 = [null,null,null,null,null,null,null,null];
(statearr_35223[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__19392__auto__);

(statearr_35223[(1)] = (1));

return statearr_35223;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19392__auto____1 = (function (state_35217){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_35217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e35224){if((e35224 instanceof Object)){
var ex__19395__auto__ = e35224;
var statearr_35225_35248 = state_35217;
(statearr_35225_35248[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35249 = state_35217;
state_35217 = G__35249;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__19392__auto__ = function(state_35217){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19392__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19392__auto____1.call(this,state_35217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19392__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19392__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19392__auto__;
})()
;})(switch__19391__auto__,c__19453__auto__,map__35206,map__35206__$1,opts,on_cssload))
})();
var state__19455__auto__ = (function (){var statearr_35226 = f__19454__auto__.call(null);
(statearr_35226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto__);

return statearr_35226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto__,map__35206,map__35206__$1,opts,on_cssload))
);

return c__19453__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1436517561202