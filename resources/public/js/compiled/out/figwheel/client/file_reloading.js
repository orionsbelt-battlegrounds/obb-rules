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
return cljs.core.reduce.call(null,(function (p1__24838_SHARP_,p2__24839_SHARP_){
var and__16097__auto__ = p1__24838_SHARP_;
if(cljs.core.truth_(and__16097__auto__)){
return p2__24839_SHARP_;
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__24840){
var map__24841 = p__24840;
var map__24841__$1 = ((cljs.core.seq_QMARK_.call(null,map__24841))?cljs.core.apply.call(null,cljs.core.hash_map,map__24841):map__24841);
var file = cljs.core.get.call(null,map__24841__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__24842){
var map__24843 = p__24842;
var map__24843__$1 = ((cljs.core.seq_QMARK_.call(null,map__24843))?cljs.core.apply.call(null,cljs.core.hash_map,map__24843):map__24843);
var namespace = cljs.core.get.call(null,map__24843__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e24844){if((e24844 instanceof Error)){
var e = e24844;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24844;

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
var G__24846 = arguments.length;
switch (G__24846) {
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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24848,callback){
var map__24850 = p__24848;
var map__24850__$1 = ((cljs.core.seq_QMARK_.call(null,map__24850))?cljs.core.apply.call(null,cljs.core.hash_map,map__24850):map__24850);
var file_msg = map__24850__$1;
var request_url = cljs.core.get.call(null,map__24850__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24850,map__24850__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24850,map__24850__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24851){
var map__24853 = p__24851;
var map__24853__$1 = ((cljs.core.seq_QMARK_.call(null,map__24853))?cljs.core.apply.call(null,cljs.core.hash_map,map__24853):map__24853);
var file_msg = map__24853__$1;
var namespace = cljs.core.get.call(null,map__24853__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__24853__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24854,callback){
var map__24856 = p__24854;
var map__24856__$1 = ((cljs.core.seq_QMARK_.call(null,map__24856))?cljs.core.apply.call(null,cljs.core.hash_map,map__24856):map__24856);
var file_msg = map__24856__$1;
var request_url = cljs.core.get.call(null,map__24856__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24856__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__19342__auto___24943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___24943,out){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (c__19342__auto___24943,out){
return (function (state_24925){
var state_val_24926 = (state_24925[(1)]);
if((state_val_24926 === (1))){
var inst_24903 = cljs.core.nth.call(null,files,(0),null);
var inst_24904 = cljs.core.nthnext.call(null,files,(1));
var inst_24905 = files;
var state_24925__$1 = (function (){var statearr_24927 = state_24925;
(statearr_24927[(7)] = inst_24903);

(statearr_24927[(8)] = inst_24905);

(statearr_24927[(9)] = inst_24904);

return statearr_24927;
})();
var statearr_24928_24944 = state_24925__$1;
(statearr_24928_24944[(2)] = null);

(statearr_24928_24944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24926 === (2))){
var inst_24908 = (state_24925[(10)]);
var inst_24905 = (state_24925[(8)]);
var inst_24908__$1 = cljs.core.nth.call(null,inst_24905,(0),null);
var inst_24909 = cljs.core.nthnext.call(null,inst_24905,(1));
var inst_24910 = (inst_24908__$1 == null);
var inst_24911 = cljs.core.not.call(null,inst_24910);
var state_24925__$1 = (function (){var statearr_24929 = state_24925;
(statearr_24929[(10)] = inst_24908__$1);

(statearr_24929[(11)] = inst_24909);

return statearr_24929;
})();
if(inst_24911){
var statearr_24930_24945 = state_24925__$1;
(statearr_24930_24945[(1)] = (4));

} else {
var statearr_24931_24946 = state_24925__$1;
(statearr_24931_24946[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24926 === (3))){
var inst_24923 = (state_24925[(2)]);
var state_24925__$1 = state_24925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24925__$1,inst_24923);
} else {
if((state_val_24926 === (4))){
var inst_24908 = (state_24925[(10)]);
var inst_24913 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24908);
var state_24925__$1 = state_24925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24925__$1,(7),inst_24913);
} else {
if((state_val_24926 === (5))){
var inst_24919 = cljs.core.async.close_BANG_.call(null,out);
var state_24925__$1 = state_24925;
var statearr_24932_24947 = state_24925__$1;
(statearr_24932_24947[(2)] = inst_24919);

(statearr_24932_24947[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24926 === (6))){
var inst_24921 = (state_24925[(2)]);
var state_24925__$1 = state_24925;
var statearr_24933_24948 = state_24925__$1;
(statearr_24933_24948[(2)] = inst_24921);

(statearr_24933_24948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24926 === (7))){
var inst_24909 = (state_24925[(11)]);
var inst_24915 = (state_24925[(2)]);
var inst_24916 = cljs.core.async.put_BANG_.call(null,out,inst_24915);
var inst_24905 = inst_24909;
var state_24925__$1 = (function (){var statearr_24934 = state_24925;
(statearr_24934[(8)] = inst_24905);

(statearr_24934[(12)] = inst_24916);

return statearr_24934;
})();
var statearr_24935_24949 = state_24925__$1;
(statearr_24935_24949[(2)] = null);

(statearr_24935_24949[(1)] = (2));


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
});})(c__19342__auto___24943,out))
;
return ((function (switch__19280__auto__,c__19342__auto___24943,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19281__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19281__auto____0 = (function (){
var statearr_24939 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24939[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19281__auto__);

(statearr_24939[(1)] = (1));

return statearr_24939;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19281__auto____1 = (function (state_24925){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_24925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e24940){if((e24940 instanceof Object)){
var ex__19284__auto__ = e24940;
var statearr_24941_24950 = state_24925;
(statearr_24941_24950[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24951 = state_24925;
state_24925 = G__24951;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19281__auto__ = function(state_24925){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19281__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19281__auto____1.call(this,state_24925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19281__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19281__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19281__auto__;
})()
;})(switch__19280__auto__,c__19342__auto___24943,out))
})();
var state__19344__auto__ = (function (){var statearr_24942 = f__19343__auto__.call(null);
(statearr_24942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___24943);

return statearr_24942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___24943,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__24952,p__24953){
var map__24956 = p__24952;
var map__24956__$1 = ((cljs.core.seq_QMARK_.call(null,map__24956))?cljs.core.apply.call(null,cljs.core.hash_map,map__24956):map__24956);
var opts = map__24956__$1;
var url_rewriter = cljs.core.get.call(null,map__24956__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__24957 = p__24953;
var map__24957__$1 = ((cljs.core.seq_QMARK_.call(null,map__24957))?cljs.core.apply.call(null,cljs.core.hash_map,map__24957):map__24957);
var file_msg = map__24957__$1;
var file = cljs.core.get.call(null,map__24957__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24958,opts){
var map__24961 = p__24958;
var map__24961__$1 = ((cljs.core.seq_QMARK_.call(null,map__24961))?cljs.core.apply.call(null,cljs.core.hash_map,map__24961):map__24961);
var eval_body__$1 = cljs.core.get.call(null,map__24961__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24961__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e24962){var e = e24962;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24967,p__24968){
var map__25170 = p__24967;
var map__25170__$1 = ((cljs.core.seq_QMARK_.call(null,map__25170))?cljs.core.apply.call(null,cljs.core.hash_map,map__25170):map__25170);
var opts = map__25170__$1;
var before_jsload = cljs.core.get.call(null,map__25170__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25170__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__25170__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__25171 = p__24968;
var map__25171__$1 = ((cljs.core.seq_QMARK_.call(null,map__25171))?cljs.core.apply.call(null,cljs.core.hash_map,map__25171):map__25171);
var msg = map__25171__$1;
var files = cljs.core.get.call(null,map__25171__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto__,map__25170,map__25170__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25171,map__25171__$1,msg,files){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (c__19342__auto__,map__25170,map__25170__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25171,map__25171__$1,msg,files){
return (function (state_25296){
var state_val_25297 = (state_25296[(1)]);
if((state_val_25297 === (7))){
var inst_25186 = (state_25296[(7)]);
var inst_25184 = (state_25296[(8)]);
var inst_25183 = (state_25296[(9)]);
var inst_25185 = (state_25296[(10)]);
var inst_25191 = cljs.core._nth.call(null,inst_25184,inst_25186);
var inst_25192 = figwheel.client.file_reloading.eval_body.call(null,inst_25191,opts);
var inst_25193 = (inst_25186 + (1));
var tmp25298 = inst_25184;
var tmp25299 = inst_25183;
var tmp25300 = inst_25185;
var inst_25183__$1 = tmp25299;
var inst_25184__$1 = tmp25298;
var inst_25185__$1 = tmp25300;
var inst_25186__$1 = inst_25193;
var state_25296__$1 = (function (){var statearr_25301 = state_25296;
(statearr_25301[(7)] = inst_25186__$1);

(statearr_25301[(8)] = inst_25184__$1);

(statearr_25301[(11)] = inst_25192);

(statearr_25301[(9)] = inst_25183__$1);

(statearr_25301[(10)] = inst_25185__$1);

return statearr_25301;
})();
var statearr_25302_25371 = state_25296__$1;
(statearr_25302_25371[(2)] = null);

(statearr_25302_25371[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (20))){
var inst_25228 = (state_25296[(12)]);
var inst_25235 = (state_25296[(13)]);
var inst_25229 = (state_25296[(14)]);
var inst_25232 = (state_25296[(15)]);
var inst_25233 = (state_25296[(16)]);
var inst_25238 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25240 = (function (){var all_files = inst_25228;
var files_SINGLEQUOTE_ = inst_25229;
var res_SINGLEQUOTE_ = inst_25232;
var res = inst_25233;
var files_not_loaded = inst_25235;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25228,inst_25235,inst_25229,inst_25232,inst_25233,inst_25238,state_val_25297,c__19342__auto__,map__25170,map__25170__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25171,map__25171__$1,msg,files){
return (function (p__25239){
var map__25303 = p__25239;
var map__25303__$1 = ((cljs.core.seq_QMARK_.call(null,map__25303))?cljs.core.apply.call(null,cljs.core.hash_map,map__25303):map__25303);
var namespace = cljs.core.get.call(null,map__25303__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25303__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25228,inst_25235,inst_25229,inst_25232,inst_25233,inst_25238,state_val_25297,c__19342__auto__,map__25170,map__25170__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25171,map__25171__$1,msg,files))
})();
var inst_25241 = cljs.core.map.call(null,inst_25240,inst_25233);
var inst_25242 = cljs.core.pr_str.call(null,inst_25241);
var inst_25243 = figwheel.client.utils.log.call(null,inst_25242);
var inst_25244 = (function (){var all_files = inst_25228;
var files_SINGLEQUOTE_ = inst_25229;
var res_SINGLEQUOTE_ = inst_25232;
var res = inst_25233;
var files_not_loaded = inst_25235;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25228,inst_25235,inst_25229,inst_25232,inst_25233,inst_25238,inst_25240,inst_25241,inst_25242,inst_25243,state_val_25297,c__19342__auto__,map__25170,map__25170__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25171,map__25171__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25228,inst_25235,inst_25229,inst_25232,inst_25233,inst_25238,inst_25240,inst_25241,inst_25242,inst_25243,state_val_25297,c__19342__auto__,map__25170,map__25170__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25171,map__25171__$1,msg,files))
})();
var inst_25245 = setTimeout(inst_25244,(10));
var state_25296__$1 = (function (){var statearr_25304 = state_25296;
(statearr_25304[(17)] = inst_25238);

(statearr_25304[(18)] = inst_25243);

return statearr_25304;
})();
var statearr_25305_25372 = state_25296__$1;
(statearr_25305_25372[(2)] = inst_25245);

(statearr_25305_25372[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (27))){
var inst_25255 = (state_25296[(19)]);
var state_25296__$1 = state_25296;
var statearr_25306_25373 = state_25296__$1;
(statearr_25306_25373[(2)] = inst_25255);

(statearr_25306_25373[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (1))){
var inst_25175 = (state_25296[(20)]);
var inst_25172 = before_jsload.call(null,files);
var inst_25173 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25174 = (function (){return ((function (inst_25175,inst_25172,inst_25173,state_val_25297,c__19342__auto__,map__25170,map__25170__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25171,map__25171__$1,msg,files){
return (function (p1__24963_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24963_SHARP_);
});
;})(inst_25175,inst_25172,inst_25173,state_val_25297,c__19342__auto__,map__25170,map__25170__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25171,map__25171__$1,msg,files))
})();
var inst_25175__$1 = cljs.core.filter.call(null,inst_25174,files);
var inst_25176 = cljs.core.not_empty.call(null,inst_25175__$1);
var state_25296__$1 = (function (){var statearr_25307 = state_25296;
(statearr_25307[(21)] = inst_25173);

(statearr_25307[(20)] = inst_25175__$1);

(statearr_25307[(22)] = inst_25172);

return statearr_25307;
})();
if(cljs.core.truth_(inst_25176)){
var statearr_25308_25374 = state_25296__$1;
(statearr_25308_25374[(1)] = (2));

} else {
var statearr_25309_25375 = state_25296__$1;
(statearr_25309_25375[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (24))){
var state_25296__$1 = state_25296;
var statearr_25310_25376 = state_25296__$1;
(statearr_25310_25376[(2)] = null);

(statearr_25310_25376[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (4))){
var inst_25220 = (state_25296[(2)]);
var inst_25221 = (function (){return ((function (inst_25220,state_val_25297,c__19342__auto__,map__25170,map__25170__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25171,map__25171__$1,msg,files){
return (function (p1__24964_SHARP_){
var and__16097__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24964_SHARP_);
if(cljs.core.truth_(and__16097__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24964_SHARP_));
} else {
return and__16097__auto__;
}
});
;})(inst_25220,state_val_25297,c__19342__auto__,map__25170,map__25170__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25171,map__25171__$1,msg,files))
})();
var inst_25222 = cljs.core.filter.call(null,inst_25221,files);
var state_25296__$1 = (function (){var statearr_25311 = state_25296;
(statearr_25311[(23)] = inst_25220);

(statearr_25311[(24)] = inst_25222);

return statearr_25311;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_25312_25377 = state_25296__$1;
(statearr_25312_25377[(1)] = (16));

} else {
var statearr_25313_25378 = state_25296__$1;
(statearr_25313_25378[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (15))){
var inst_25210 = (state_25296[(2)]);
var state_25296__$1 = state_25296;
var statearr_25314_25379 = state_25296__$1;
(statearr_25314_25379[(2)] = inst_25210);

(statearr_25314_25379[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (21))){
var state_25296__$1 = state_25296;
var statearr_25315_25380 = state_25296__$1;
(statearr_25315_25380[(2)] = null);

(statearr_25315_25380[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (31))){
var inst_25263 = (state_25296[(25)]);
var inst_25273 = (state_25296[(2)]);
var inst_25274 = cljs.core.not_empty.call(null,inst_25263);
var state_25296__$1 = (function (){var statearr_25316 = state_25296;
(statearr_25316[(26)] = inst_25273);

return statearr_25316;
})();
if(cljs.core.truth_(inst_25274)){
var statearr_25317_25381 = state_25296__$1;
(statearr_25317_25381[(1)] = (32));

} else {
var statearr_25318_25382 = state_25296__$1;
(statearr_25318_25382[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (32))){
var inst_25263 = (state_25296[(25)]);
var inst_25276 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25263);
var inst_25277 = cljs.core.pr_str.call(null,inst_25276);
var inst_25278 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_25277)].join('');
var inst_25279 = figwheel.client.utils.log.call(null,inst_25278);
var state_25296__$1 = state_25296;
var statearr_25319_25383 = state_25296__$1;
(statearr_25319_25383[(2)] = inst_25279);

(statearr_25319_25383[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (33))){
var state_25296__$1 = state_25296;
var statearr_25320_25384 = state_25296__$1;
(statearr_25320_25384[(2)] = null);

(statearr_25320_25384[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (13))){
var inst_25196 = (state_25296[(27)]);
var inst_25200 = cljs.core.chunk_first.call(null,inst_25196);
var inst_25201 = cljs.core.chunk_rest.call(null,inst_25196);
var inst_25202 = cljs.core.count.call(null,inst_25200);
var inst_25183 = inst_25201;
var inst_25184 = inst_25200;
var inst_25185 = inst_25202;
var inst_25186 = (0);
var state_25296__$1 = (function (){var statearr_25321 = state_25296;
(statearr_25321[(7)] = inst_25186);

(statearr_25321[(8)] = inst_25184);

(statearr_25321[(9)] = inst_25183);

(statearr_25321[(10)] = inst_25185);

return statearr_25321;
})();
var statearr_25322_25385 = state_25296__$1;
(statearr_25322_25385[(2)] = null);

(statearr_25322_25385[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (22))){
var inst_25235 = (state_25296[(13)]);
var inst_25248 = (state_25296[(2)]);
var inst_25249 = cljs.core.not_empty.call(null,inst_25235);
var state_25296__$1 = (function (){var statearr_25323 = state_25296;
(statearr_25323[(28)] = inst_25248);

return statearr_25323;
})();
if(cljs.core.truth_(inst_25249)){
var statearr_25324_25386 = state_25296__$1;
(statearr_25324_25386[(1)] = (23));

} else {
var statearr_25325_25387 = state_25296__$1;
(statearr_25325_25387[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (36))){
var state_25296__$1 = state_25296;
var statearr_25326_25388 = state_25296__$1;
(statearr_25326_25388[(2)] = null);

(statearr_25326_25388[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (29))){
var inst_25262 = (state_25296[(29)]);
var inst_25267 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25262);
var inst_25268 = cljs.core.pr_str.call(null,inst_25267);
var inst_25269 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25268)].join('');
var inst_25270 = figwheel.client.utils.log.call(null,inst_25269);
var state_25296__$1 = state_25296;
var statearr_25327_25389 = state_25296__$1;
(statearr_25327_25389[(2)] = inst_25270);

(statearr_25327_25389[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (6))){
var inst_25217 = (state_25296[(2)]);
var state_25296__$1 = state_25296;
var statearr_25328_25390 = state_25296__$1;
(statearr_25328_25390[(2)] = inst_25217);

(statearr_25328_25390[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (28))){
var inst_25262 = (state_25296[(29)]);
var inst_25261 = (state_25296[(2)]);
var inst_25262__$1 = cljs.core.get.call(null,inst_25261,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25263 = cljs.core.get.call(null,inst_25261,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_25264 = cljs.core.get.call(null,inst_25261,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25265 = cljs.core.not_empty.call(null,inst_25262__$1);
var state_25296__$1 = (function (){var statearr_25329 = state_25296;
(statearr_25329[(30)] = inst_25264);

(statearr_25329[(25)] = inst_25263);

(statearr_25329[(29)] = inst_25262__$1);

return statearr_25329;
})();
if(cljs.core.truth_(inst_25265)){
var statearr_25330_25391 = state_25296__$1;
(statearr_25330_25391[(1)] = (29));

} else {
var statearr_25331_25392 = state_25296__$1;
(statearr_25331_25392[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (25))){
var inst_25294 = (state_25296[(2)]);
var state_25296__$1 = state_25296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25296__$1,inst_25294);
} else {
if((state_val_25297 === (34))){
var inst_25264 = (state_25296[(30)]);
var inst_25282 = (state_25296[(2)]);
var inst_25283 = cljs.core.not_empty.call(null,inst_25264);
var state_25296__$1 = (function (){var statearr_25332 = state_25296;
(statearr_25332[(31)] = inst_25282);

return statearr_25332;
})();
if(cljs.core.truth_(inst_25283)){
var statearr_25333_25393 = state_25296__$1;
(statearr_25333_25393[(1)] = (35));

} else {
var statearr_25334_25394 = state_25296__$1;
(statearr_25334_25394[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (17))){
var inst_25222 = (state_25296[(24)]);
var state_25296__$1 = state_25296;
var statearr_25335_25395 = state_25296__$1;
(statearr_25335_25395[(2)] = inst_25222);

(statearr_25335_25395[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (3))){
var state_25296__$1 = state_25296;
var statearr_25336_25396 = state_25296__$1;
(statearr_25336_25396[(2)] = null);

(statearr_25336_25396[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (12))){
var inst_25213 = (state_25296[(2)]);
var state_25296__$1 = state_25296;
var statearr_25337_25397 = state_25296__$1;
(statearr_25337_25397[(2)] = inst_25213);

(statearr_25337_25397[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (2))){
var inst_25175 = (state_25296[(20)]);
var inst_25182 = cljs.core.seq.call(null,inst_25175);
var inst_25183 = inst_25182;
var inst_25184 = null;
var inst_25185 = (0);
var inst_25186 = (0);
var state_25296__$1 = (function (){var statearr_25338 = state_25296;
(statearr_25338[(7)] = inst_25186);

(statearr_25338[(8)] = inst_25184);

(statearr_25338[(9)] = inst_25183);

(statearr_25338[(10)] = inst_25185);

return statearr_25338;
})();
var statearr_25339_25398 = state_25296__$1;
(statearr_25339_25398[(2)] = null);

(statearr_25339_25398[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (23))){
var inst_25228 = (state_25296[(12)]);
var inst_25235 = (state_25296[(13)]);
var inst_25255 = (state_25296[(19)]);
var inst_25229 = (state_25296[(14)]);
var inst_25232 = (state_25296[(15)]);
var inst_25233 = (state_25296[(16)]);
var inst_25251 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25254 = (function (){var all_files = inst_25228;
var files_SINGLEQUOTE_ = inst_25229;
var res_SINGLEQUOTE_ = inst_25232;
var res = inst_25233;
var files_not_loaded = inst_25235;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25228,inst_25235,inst_25255,inst_25229,inst_25232,inst_25233,inst_25251,state_val_25297,c__19342__auto__,map__25170,map__25170__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25171,map__25171__$1,msg,files){
return (function (p__25253){
var map__25340 = p__25253;
var map__25340__$1 = ((cljs.core.seq_QMARK_.call(null,map__25340))?cljs.core.apply.call(null,cljs.core.hash_map,map__25340):map__25340);
var meta_data = cljs.core.get.call(null,map__25340__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25228,inst_25235,inst_25255,inst_25229,inst_25232,inst_25233,inst_25251,state_val_25297,c__19342__auto__,map__25170,map__25170__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25171,map__25171__$1,msg,files))
})();
var inst_25255__$1 = cljs.core.group_by.call(null,inst_25254,inst_25235);
var inst_25256 = cljs.core.seq_QMARK_.call(null,inst_25255__$1);
var state_25296__$1 = (function (){var statearr_25341 = state_25296;
(statearr_25341[(19)] = inst_25255__$1);

(statearr_25341[(32)] = inst_25251);

return statearr_25341;
})();
if(inst_25256){
var statearr_25342_25399 = state_25296__$1;
(statearr_25342_25399[(1)] = (26));

} else {
var statearr_25343_25400 = state_25296__$1;
(statearr_25343_25400[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (35))){
var inst_25264 = (state_25296[(30)]);
var inst_25285 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25264);
var inst_25286 = cljs.core.pr_str.call(null,inst_25285);
var inst_25287 = [cljs.core.str("not required: "),cljs.core.str(inst_25286)].join('');
var inst_25288 = figwheel.client.utils.log.call(null,inst_25287);
var state_25296__$1 = state_25296;
var statearr_25344_25401 = state_25296__$1;
(statearr_25344_25401[(2)] = inst_25288);

(statearr_25344_25401[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (19))){
var inst_25228 = (state_25296[(12)]);
var inst_25229 = (state_25296[(14)]);
var inst_25232 = (state_25296[(15)]);
var inst_25233 = (state_25296[(16)]);
var inst_25232__$1 = (state_25296[(2)]);
var inst_25233__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25232__$1);
var inst_25234 = (function (){var all_files = inst_25228;
var files_SINGLEQUOTE_ = inst_25229;
var res_SINGLEQUOTE_ = inst_25232__$1;
var res = inst_25233__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_25228,inst_25229,inst_25232,inst_25233,inst_25232__$1,inst_25233__$1,state_val_25297,c__19342__auto__,map__25170,map__25170__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25171,map__25171__$1,msg,files){
return (function (p1__24966_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24966_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_25228,inst_25229,inst_25232,inst_25233,inst_25232__$1,inst_25233__$1,state_val_25297,c__19342__auto__,map__25170,map__25170__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25171,map__25171__$1,msg,files))
})();
var inst_25235 = cljs.core.filter.call(null,inst_25234,inst_25232__$1);
var inst_25236 = cljs.core.not_empty.call(null,inst_25233__$1);
var state_25296__$1 = (function (){var statearr_25345 = state_25296;
(statearr_25345[(13)] = inst_25235);

(statearr_25345[(15)] = inst_25232__$1);

(statearr_25345[(16)] = inst_25233__$1);

return statearr_25345;
})();
if(cljs.core.truth_(inst_25236)){
var statearr_25346_25402 = state_25296__$1;
(statearr_25346_25402[(1)] = (20));

} else {
var statearr_25347_25403 = state_25296__$1;
(statearr_25347_25403[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (11))){
var state_25296__$1 = state_25296;
var statearr_25348_25404 = state_25296__$1;
(statearr_25348_25404[(2)] = null);

(statearr_25348_25404[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (9))){
var inst_25215 = (state_25296[(2)]);
var state_25296__$1 = state_25296;
var statearr_25349_25405 = state_25296__$1;
(statearr_25349_25405[(2)] = inst_25215);

(statearr_25349_25405[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (5))){
var inst_25186 = (state_25296[(7)]);
var inst_25185 = (state_25296[(10)]);
var inst_25188 = (inst_25186 < inst_25185);
var inst_25189 = inst_25188;
var state_25296__$1 = state_25296;
if(cljs.core.truth_(inst_25189)){
var statearr_25350_25406 = state_25296__$1;
(statearr_25350_25406[(1)] = (7));

} else {
var statearr_25351_25407 = state_25296__$1;
(statearr_25351_25407[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (14))){
var inst_25196 = (state_25296[(27)]);
var inst_25205 = cljs.core.first.call(null,inst_25196);
var inst_25206 = figwheel.client.file_reloading.eval_body.call(null,inst_25205,opts);
var inst_25207 = cljs.core.next.call(null,inst_25196);
var inst_25183 = inst_25207;
var inst_25184 = null;
var inst_25185 = (0);
var inst_25186 = (0);
var state_25296__$1 = (function (){var statearr_25352 = state_25296;
(statearr_25352[(7)] = inst_25186);

(statearr_25352[(8)] = inst_25184);

(statearr_25352[(9)] = inst_25183);

(statearr_25352[(10)] = inst_25185);

(statearr_25352[(33)] = inst_25206);

return statearr_25352;
})();
var statearr_25353_25408 = state_25296__$1;
(statearr_25353_25408[(2)] = null);

(statearr_25353_25408[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (26))){
var inst_25255 = (state_25296[(19)]);
var inst_25258 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25255);
var state_25296__$1 = state_25296;
var statearr_25354_25409 = state_25296__$1;
(statearr_25354_25409[(2)] = inst_25258);

(statearr_25354_25409[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (16))){
var inst_25222 = (state_25296[(24)]);
var inst_25224 = (function (){var all_files = inst_25222;
return ((function (all_files,inst_25222,state_val_25297,c__19342__auto__,map__25170,map__25170__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25171,map__25171__$1,msg,files){
return (function (p1__24965_SHARP_){
return cljs.core.update_in.call(null,p1__24965_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_25222,state_val_25297,c__19342__auto__,map__25170,map__25170__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25171,map__25171__$1,msg,files))
})();
var inst_25225 = cljs.core.map.call(null,inst_25224,inst_25222);
var state_25296__$1 = state_25296;
var statearr_25355_25410 = state_25296__$1;
(statearr_25355_25410[(2)] = inst_25225);

(statearr_25355_25410[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (30))){
var state_25296__$1 = state_25296;
var statearr_25356_25411 = state_25296__$1;
(statearr_25356_25411[(2)] = null);

(statearr_25356_25411[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (10))){
var inst_25196 = (state_25296[(27)]);
var inst_25198 = cljs.core.chunked_seq_QMARK_.call(null,inst_25196);
var state_25296__$1 = state_25296;
if(inst_25198){
var statearr_25357_25412 = state_25296__$1;
(statearr_25357_25412[(1)] = (13));

} else {
var statearr_25358_25413 = state_25296__$1;
(statearr_25358_25413[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (18))){
var inst_25228 = (state_25296[(12)]);
var inst_25229 = (state_25296[(14)]);
var inst_25228__$1 = (state_25296[(2)]);
var inst_25229__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_25228__$1);
var inst_25230 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25229__$1);
var state_25296__$1 = (function (){var statearr_25359 = state_25296;
(statearr_25359[(12)] = inst_25228__$1);

(statearr_25359[(14)] = inst_25229__$1);

return statearr_25359;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25296__$1,(19),inst_25230);
} else {
if((state_val_25297 === (37))){
var inst_25291 = (state_25296[(2)]);
var state_25296__$1 = state_25296;
var statearr_25360_25414 = state_25296__$1;
(statearr_25360_25414[(2)] = inst_25291);

(statearr_25360_25414[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25297 === (8))){
var inst_25196 = (state_25296[(27)]);
var inst_25183 = (state_25296[(9)]);
var inst_25196__$1 = cljs.core.seq.call(null,inst_25183);
var state_25296__$1 = (function (){var statearr_25361 = state_25296;
(statearr_25361[(27)] = inst_25196__$1);

return statearr_25361;
})();
if(inst_25196__$1){
var statearr_25362_25415 = state_25296__$1;
(statearr_25362_25415[(1)] = (10));

} else {
var statearr_25363_25416 = state_25296__$1;
(statearr_25363_25416[(1)] = (11));

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
});})(c__19342__auto__,map__25170,map__25170__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25171,map__25171__$1,msg,files))
;
return ((function (switch__19280__auto__,c__19342__auto__,map__25170,map__25170__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25171,map__25171__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19281__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19281__auto____0 = (function (){
var statearr_25367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25367[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19281__auto__);

(statearr_25367[(1)] = (1));

return statearr_25367;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19281__auto____1 = (function (state_25296){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_25296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e25368){if((e25368 instanceof Object)){
var ex__19284__auto__ = e25368;
var statearr_25369_25417 = state_25296;
(statearr_25369_25417[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25418 = state_25296;
state_25296 = G__25418;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19281__auto__ = function(state_25296){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19281__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19281__auto____1.call(this,state_25296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19281__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19281__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19281__auto__;
})()
;})(switch__19280__auto__,c__19342__auto__,map__25170,map__25170__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25171,map__25171__$1,msg,files))
})();
var state__19344__auto__ = (function (){var statearr_25370 = f__19343__auto__.call(null);
(statearr_25370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto__);

return statearr_25370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto__,map__25170,map__25170__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25171,map__25171__$1,msg,files))
);

return c__19342__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25421,link){
var map__25423 = p__25421;
var map__25423__$1 = ((cljs.core.seq_QMARK_.call(null,map__25423))?cljs.core.apply.call(null,cljs.core.hash_map,map__25423):map__25423);
var file = cljs.core.get.call(null,map__25423__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__25423,map__25423__$1,file){
return (function (p1__25419_SHARP_,p2__25420_SHARP_){
if(cljs.core._EQ_.call(null,p1__25419_SHARP_,p2__25420_SHARP_)){
return p1__25419_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__25423,map__25423__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25427){
var map__25428 = p__25427;
var map__25428__$1 = ((cljs.core.seq_QMARK_.call(null,map__25428))?cljs.core.apply.call(null,cljs.core.hash_map,map__25428):map__25428);
var match_length = cljs.core.get.call(null,map__25428__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25428__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25424_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25424_SHARP_);
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
var G__25430 = arguments.length;
switch (G__25430) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25432){
var map__25434 = p__25432;
var map__25434__$1 = ((cljs.core.seq_QMARK_.call(null,map__25434))?cljs.core.apply.call(null,cljs.core.hash_map,map__25434):map__25434);
var f_data = map__25434__$1;
var file = cljs.core.get.call(null,map__25434__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__25434__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
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
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25435,files_msg){
var map__25457 = p__25435;
var map__25457__$1 = ((cljs.core.seq_QMARK_.call(null,map__25457))?cljs.core.apply.call(null,cljs.core.hash_map,map__25457):map__25457);
var opts = map__25457__$1;
var on_cssload = cljs.core.get.call(null,map__25457__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25458_25478 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25459_25479 = null;
var count__25460_25480 = (0);
var i__25461_25481 = (0);
while(true){
if((i__25461_25481 < count__25460_25480)){
var f_25482 = cljs.core._nth.call(null,chunk__25459_25479,i__25461_25481);
figwheel.client.file_reloading.reload_css_file.call(null,f_25482);

var G__25483 = seq__25458_25478;
var G__25484 = chunk__25459_25479;
var G__25485 = count__25460_25480;
var G__25486 = (i__25461_25481 + (1));
seq__25458_25478 = G__25483;
chunk__25459_25479 = G__25484;
count__25460_25480 = G__25485;
i__25461_25481 = G__25486;
continue;
} else {
var temp__4425__auto___25487 = cljs.core.seq.call(null,seq__25458_25478);
if(temp__4425__auto___25487){
var seq__25458_25488__$1 = temp__4425__auto___25487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25458_25488__$1)){
var c__16894__auto___25489 = cljs.core.chunk_first.call(null,seq__25458_25488__$1);
var G__25490 = cljs.core.chunk_rest.call(null,seq__25458_25488__$1);
var G__25491 = c__16894__auto___25489;
var G__25492 = cljs.core.count.call(null,c__16894__auto___25489);
var G__25493 = (0);
seq__25458_25478 = G__25490;
chunk__25459_25479 = G__25491;
count__25460_25480 = G__25492;
i__25461_25481 = G__25493;
continue;
} else {
var f_25494 = cljs.core.first.call(null,seq__25458_25488__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25494);

var G__25495 = cljs.core.next.call(null,seq__25458_25488__$1);
var G__25496 = null;
var G__25497 = (0);
var G__25498 = (0);
seq__25458_25478 = G__25495;
chunk__25459_25479 = G__25496;
count__25460_25480 = G__25497;
i__25461_25481 = G__25498;
continue;
}
} else {
}
}
break;
}

var c__19342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto__,map__25457,map__25457__$1,opts,on_cssload){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (c__19342__auto__,map__25457,map__25457__$1,opts,on_cssload){
return (function (state_25468){
var state_val_25469 = (state_25468[(1)]);
if((state_val_25469 === (1))){
var inst_25462 = cljs.core.async.timeout.call(null,(100));
var state_25468__$1 = state_25468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25468__$1,(2),inst_25462);
} else {
if((state_val_25469 === (2))){
var inst_25464 = (state_25468[(2)]);
var inst_25465 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_25466 = on_cssload.call(null,inst_25465);
var state_25468__$1 = (function (){var statearr_25470 = state_25468;
(statearr_25470[(7)] = inst_25464);

return statearr_25470;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25468__$1,inst_25466);
} else {
return null;
}
}
});})(c__19342__auto__,map__25457,map__25457__$1,opts,on_cssload))
;
return ((function (switch__19280__auto__,c__19342__auto__,map__25457,map__25457__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19281__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19281__auto____0 = (function (){
var statearr_25474 = [null,null,null,null,null,null,null,null];
(statearr_25474[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__19281__auto__);

(statearr_25474[(1)] = (1));

return statearr_25474;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19281__auto____1 = (function (state_25468){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_25468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e25475){if((e25475 instanceof Object)){
var ex__19284__auto__ = e25475;
var statearr_25476_25499 = state_25468;
(statearr_25476_25499[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25500 = state_25468;
state_25468 = G__25500;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__19281__auto__ = function(state_25468){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19281__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19281__auto____1.call(this,state_25468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19281__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19281__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19281__auto__;
})()
;})(switch__19280__auto__,c__19342__auto__,map__25457,map__25457__$1,opts,on_cssload))
})();
var state__19344__auto__ = (function (){var statearr_25477 = f__19343__auto__.call(null);
(statearr_25477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto__);

return statearr_25477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto__,map__25457,map__25457__$1,opts,on_cssload))
);

return c__19342__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1436104828662