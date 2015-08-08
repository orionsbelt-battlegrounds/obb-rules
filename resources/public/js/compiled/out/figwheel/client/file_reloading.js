// Compiled by ClojureScript 1.7.28 {}
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
return cljs.core.reduce.call(null,(function (p1__36084_SHARP_,p2__36085_SHARP_){
var and__16470__auto__ = p1__36084_SHARP_;
if(cljs.core.truth_(and__16470__auto__)){
return p2__36085_SHARP_;
} else {
return and__16470__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16482__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16482__auto__){
return or__16482__auto__;
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
if(cljs.core.truth_((function (){var or__16482__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16482__auto__){
return or__16482__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16482__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
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
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17376__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17377__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17378__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17379__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17380__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17380__auto__,method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__36086){
var map__36087 = p__36086;
var map__36087__$1 = ((((!((map__36087 == null)))?((((map__36087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36087):map__36087);
var file = cljs.core.get.call(null,map__36087__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__36089){
var map__36090 = p__36089;
var map__36090__$1 = ((((!((map__36090 == null)))?((((map__36090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36090):map__36090);
var namespace = cljs.core.get.call(null,map__36090__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__17376__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17377__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17378__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17379__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17380__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17380__auto__,method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e36092){if((e36092 instanceof Error)){
var e = e36092;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36092;

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
var args36093 = [];
var len__17521__auto___36096 = arguments.length;
var i__17522__auto___36097 = (0);
while(true){
if((i__17522__auto___36097 < len__17521__auto___36096)){
args36093.push((arguments[i__17522__auto___36097]));

var G__36098 = (i__17522__auto___36097 + (1));
i__17522__auto___36097 = G__36098;
continue;
} else {
}
break;
}

var G__36095 = args36093.length;
switch (G__36095) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36093.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36100,callback){
var map__36103 = p__36100;
var map__36103__$1 = ((((!((map__36103 == null)))?((((map__36103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36103):map__36103);
var file_msg = map__36103__$1;
var request_url = cljs.core.get.call(null,map__36103__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36103,map__36103__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36103,map__36103__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36105){
var map__36108 = p__36105;
var map__36108__$1 = ((((!((map__36108 == null)))?((((map__36108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36108):map__36108);
var file_msg = map__36108__$1;
var namespace = cljs.core.get.call(null,map__36108__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__36108__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__16482__auto__ = meta_data;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16470__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16470__auto__){
var or__16482__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
var or__16482__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16482__auto____$1)){
return or__16482__auto____$1;
} else {
var and__16470__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16470__auto____$1){
var or__16482__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16482__auto____$2){
return or__16482__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16470__auto____$1;
}
}
}
} else {
return and__16470__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36110,callback){
var map__36113 = p__36110;
var map__36113__$1 = ((((!((map__36113 == null)))?((((map__36113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36113):map__36113);
var file_msg = map__36113__$1;
var request_url = cljs.core.get.call(null,map__36113__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36113__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20431__auto___36201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20431__auto___36201,out){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (c__20431__auto___36201,out){
return (function (state_36183){
var state_val_36184 = (state_36183[(1)]);
if((state_val_36184 === (1))){
var inst_36161 = cljs.core.nth.call(null,files,(0),null);
var inst_36162 = cljs.core.nthnext.call(null,files,(1));
var inst_36163 = files;
var state_36183__$1 = (function (){var statearr_36185 = state_36183;
(statearr_36185[(7)] = inst_36162);

(statearr_36185[(10)] = inst_36161);

(statearr_36185[(9)] = inst_36163);

return statearr_36185;
})();
var statearr_36186_36202 = state_36183__$1;
(statearr_36186_36202[(2)] = null);

(statearr_36186_36202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (2))){
var inst_36166 = (state_36183[(8)]);
var inst_36163 = (state_36183[(9)]);
var inst_36166__$1 = cljs.core.nth.call(null,inst_36163,(0),null);
var inst_36167 = cljs.core.nthnext.call(null,inst_36163,(1));
var inst_36168 = (inst_36166__$1 == null);
var inst_36169 = cljs.core.not.call(null,inst_36168);
var state_36183__$1 = (function (){var statearr_36187 = state_36183;
(statearr_36187[(8)] = inst_36166__$1);

(statearr_36187[(11)] = inst_36167);

return statearr_36187;
})();
if(inst_36169){
var statearr_36188_36203 = state_36183__$1;
(statearr_36188_36203[(1)] = (4));

} else {
var statearr_36189_36204 = state_36183__$1;
(statearr_36189_36204[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (3))){
var inst_36181 = (state_36183[(2)]);
var state_36183__$1 = state_36183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36183__$1,inst_36181);
} else {
if((state_val_36184 === (4))){
var inst_36166 = (state_36183[(8)]);
var inst_36171 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36166);
var state_36183__$1 = state_36183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36183__$1,(7),inst_36171);
} else {
if((state_val_36184 === (5))){
var inst_36177 = cljs.core.async.close_BANG_.call(null,out);
var state_36183__$1 = state_36183;
var statearr_36190_36205 = state_36183__$1;
(statearr_36190_36205[(2)] = inst_36177);

(statearr_36190_36205[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (6))){
var inst_36179 = (state_36183[(2)]);
var state_36183__$1 = state_36183;
var statearr_36191_36206 = state_36183__$1;
(statearr_36191_36206[(2)] = inst_36179);

(statearr_36191_36206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (7))){
var inst_36167 = (state_36183[(11)]);
var inst_36173 = (state_36183[(2)]);
var inst_36174 = cljs.core.async.put_BANG_.call(null,out,inst_36173);
var inst_36163 = inst_36167;
var state_36183__$1 = (function (){var statearr_36192 = state_36183;
(statearr_36192[(12)] = inst_36174);

(statearr_36192[(9)] = inst_36163);

return statearr_36192;
})();
var statearr_36193_36207 = state_36183__$1;
(statearr_36193_36207[(2)] = null);

(statearr_36193_36207[(1)] = (2));


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
});})(c__20431__auto___36201,out))
;
return ((function (switch__20366__auto__,c__20431__auto___36201,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20367__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20367__auto____0 = (function (){
var statearr_36197 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36197[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20367__auto__);

(statearr_36197[(1)] = (1));

return statearr_36197;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20367__auto____1 = (function (state_36183){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_36183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e36198){if((e36198 instanceof Object)){
var ex__20370__auto__ = e36198;
var statearr_36199_36208 = state_36183;
(statearr_36199_36208[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36209 = state_36183;
state_36183 = G__36209;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20367__auto__ = function(state_36183){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20367__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20367__auto____1.call(this,state_36183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20367__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20367__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20367__auto__;
})()
;})(switch__20366__auto__,c__20431__auto___36201,out))
})();
var state__20433__auto__ = (function (){var statearr_36200 = f__20432__auto__.call(null);
(statearr_36200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto___36201);

return statearr_36200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(c__20431__auto___36201,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__36210,p__36211){
var map__36216 = p__36210;
var map__36216__$1 = ((((!((map__36216 == null)))?((((map__36216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36216):map__36216);
var opts = map__36216__$1;
var url_rewriter = cljs.core.get.call(null,map__36216__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__36217 = p__36211;
var map__36217__$1 = ((((!((map__36217 == null)))?((((map__36217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36217):map__36217);
var file_msg = map__36217__$1;
var file = cljs.core.get.call(null,map__36217__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36220,opts){
var map__36224 = p__36220;
var map__36224__$1 = ((((!((map__36224 == null)))?((((map__36224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36224):map__36224);
var eval_body__$1 = cljs.core.get.call(null,map__36224__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36224__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16470__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16470__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16470__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e36226){var e = e36226;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36231,p__36232){
var map__36460 = p__36231;
var map__36460__$1 = ((((!((map__36460 == null)))?((((map__36460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36460):map__36460);
var opts = map__36460__$1;
var before_jsload = cljs.core.get.call(null,map__36460__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36460__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__36460__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__36461 = p__36232;
var map__36461__$1 = ((((!((map__36461 == null)))?((((map__36461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36461):map__36461);
var msg = map__36461__$1;
var files = cljs.core.get.call(null,map__36461__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__20431__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20431__auto__,map__36460,map__36460__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__36461,map__36461__$1,msg,files){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (c__20431__auto__,map__36460,map__36460__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__36461,map__36461__$1,msg,files){
return (function (state_36602){
var state_val_36603 = (state_36602[(1)]);
if((state_val_36603 === (7))){
var inst_36477 = (state_36602[(7)]);
var inst_36478 = (state_36602[(8)]);
var inst_36476 = (state_36602[(9)]);
var inst_36475 = (state_36602[(10)]);
var inst_36483 = cljs.core._nth.call(null,inst_36476,inst_36478);
var inst_36484 = figwheel.client.file_reloading.eval_body.call(null,inst_36483,opts);
var inst_36485 = (inst_36478 + (1));
var tmp36604 = inst_36477;
var tmp36605 = inst_36476;
var tmp36606 = inst_36475;
var inst_36475__$1 = tmp36606;
var inst_36476__$1 = tmp36605;
var inst_36477__$1 = tmp36604;
var inst_36478__$1 = inst_36485;
var state_36602__$1 = (function (){var statearr_36607 = state_36602;
(statearr_36607[(7)] = inst_36477__$1);

(statearr_36607[(18)] = inst_36484);

(statearr_36607[(8)] = inst_36478__$1);

(statearr_36607[(9)] = inst_36476__$1);

(statearr_36607[(10)] = inst_36475__$1);

return statearr_36607;
})();
var statearr_36608_36687 = state_36602__$1;
(statearr_36608_36687[(2)] = null);

(statearr_36608_36687[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (20))){
var inst_36527 = (state_36602[(11)]);
var inst_36524 = (state_36602[(12)]);
var inst_36525 = (state_36602[(13)]);
var inst_36520 = (state_36602[(14)]);
var inst_36521 = (state_36602[(16)]);
var inst_36530 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36532 = (function (){var all_files = inst_36520;
var files_SINGLEQUOTE_ = inst_36521;
var res_SINGLEQUOTE_ = inst_36524;
var res = inst_36525;
var files_not_loaded = inst_36527;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_36527,inst_36524,inst_36525,inst_36520,inst_36521,inst_36530,state_val_36603,c__20431__auto__,map__36460,map__36460__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__36461,map__36461__$1,msg,files){
return (function (p__36531){
var map__36609 = p__36531;
var map__36609__$1 = ((((!((map__36609 == null)))?((((map__36609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36609):map__36609);
var namespace = cljs.core.get.call(null,map__36609__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36609__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_36527,inst_36524,inst_36525,inst_36520,inst_36521,inst_36530,state_val_36603,c__20431__auto__,map__36460,map__36460__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__36461,map__36461__$1,msg,files))
})();
var inst_36533 = cljs.core.map.call(null,inst_36532,inst_36525);
var inst_36534 = cljs.core.pr_str.call(null,inst_36533);
var inst_36535 = figwheel.client.utils.log.call(null,inst_36534);
var inst_36536 = (function (){var all_files = inst_36520;
var files_SINGLEQUOTE_ = inst_36521;
var res_SINGLEQUOTE_ = inst_36524;
var res = inst_36525;
var files_not_loaded = inst_36527;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_36527,inst_36524,inst_36525,inst_36520,inst_36521,inst_36530,inst_36532,inst_36533,inst_36534,inst_36535,state_val_36603,c__20431__auto__,map__36460,map__36460__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__36461,map__36461__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_36527,inst_36524,inst_36525,inst_36520,inst_36521,inst_36530,inst_36532,inst_36533,inst_36534,inst_36535,state_val_36603,c__20431__auto__,map__36460,map__36460__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__36461,map__36461__$1,msg,files))
})();
var inst_36537 = setTimeout(inst_36536,(10));
var state_36602__$1 = (function (){var statearr_36611 = state_36602;
(statearr_36611[(15)] = inst_36530);

(statearr_36611[(19)] = inst_36535);

return statearr_36611;
})();
var statearr_36612_36688 = state_36602__$1;
(statearr_36612_36688[(2)] = inst_36537);

(statearr_36612_36688[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (27))){
var state_36602__$1 = state_36602;
var statearr_36613_36689 = state_36602__$1;
(statearr_36613_36689[(2)] = false);

(statearr_36613_36689[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (1))){
var inst_36467 = (state_36602[(17)]);
var inst_36464 = before_jsload.call(null,files);
var inst_36465 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36466 = (function (){return ((function (inst_36467,inst_36464,inst_36465,state_val_36603,c__20431__auto__,map__36460,map__36460__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__36461,map__36461__$1,msg,files){
return (function (p1__36227_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36227_SHARP_);
});
;})(inst_36467,inst_36464,inst_36465,state_val_36603,c__20431__auto__,map__36460,map__36460__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__36461,map__36461__$1,msg,files))
})();
var inst_36467__$1 = cljs.core.filter.call(null,inst_36466,files);
var inst_36468 = cljs.core.not_empty.call(null,inst_36467__$1);
var state_36602__$1 = (function (){var statearr_36614 = state_36602;
(statearr_36614[(17)] = inst_36467__$1);

(statearr_36614[(20)] = inst_36465);

(statearr_36614[(21)] = inst_36464);

return statearr_36614;
})();
if(cljs.core.truth_(inst_36468)){
var statearr_36615_36690 = state_36602__$1;
(statearr_36615_36690[(1)] = (2));

} else {
var statearr_36616_36691 = state_36602__$1;
(statearr_36616_36691[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (24))){
var state_36602__$1 = state_36602;
var statearr_36617_36692 = state_36602__$1;
(statearr_36617_36692[(2)] = null);

(statearr_36617_36692[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (39))){
var state_36602__$1 = state_36602;
var statearr_36618_36693 = state_36602__$1;
(statearr_36618_36693[(2)] = null);

(statearr_36618_36693[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (4))){
var inst_36512 = (state_36602[(2)]);
var inst_36513 = (function (){return ((function (inst_36512,state_val_36603,c__20431__auto__,map__36460,map__36460__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__36461,map__36461__$1,msg,files){
return (function (p1__36228_SHARP_){
var and__16470__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36228_SHARP_);
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36228_SHARP_));
} else {
return and__16470__auto__;
}
});
;})(inst_36512,state_val_36603,c__20431__auto__,map__36460,map__36460__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__36461,map__36461__$1,msg,files))
})();
var inst_36514 = cljs.core.filter.call(null,inst_36513,files);
var state_36602__$1 = (function (){var statearr_36619 = state_36602;
(statearr_36619[(22)] = inst_36514);

(statearr_36619[(23)] = inst_36512);

return statearr_36619;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_36620_36694 = state_36602__$1;
(statearr_36620_36694[(1)] = (16));

} else {
var statearr_36621_36695 = state_36602__$1;
(statearr_36621_36695[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (15))){
var inst_36502 = (state_36602[(2)]);
var state_36602__$1 = state_36602;
var statearr_36622_36696 = state_36602__$1;
(statearr_36622_36696[(2)] = inst_36502);

(statearr_36622_36696[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (21))){
var state_36602__$1 = state_36602;
var statearr_36623_36697 = state_36602__$1;
(statearr_36623_36697[(2)] = null);

(statearr_36623_36697[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (31))){
var inst_36559 = (state_36602[(2)]);
var state_36602__$1 = state_36602;
var statearr_36624_36698 = state_36602__$1;
(statearr_36624_36698[(2)] = inst_36559);

(statearr_36624_36698[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (32))){
var inst_36547 = (state_36602[(24)]);
var inst_36564 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36547);
var state_36602__$1 = state_36602;
var statearr_36625_36699 = state_36602__$1;
(statearr_36625_36699[(2)] = inst_36564);

(statearr_36625_36699[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (40))){
var inst_36570 = (state_36602[(25)]);
var inst_36588 = (state_36602[(2)]);
var inst_36589 = cljs.core.not_empty.call(null,inst_36570);
var state_36602__$1 = (function (){var statearr_36626 = state_36602;
(statearr_36626[(26)] = inst_36588);

return statearr_36626;
})();
if(cljs.core.truth_(inst_36589)){
var statearr_36627_36700 = state_36602__$1;
(statearr_36627_36700[(1)] = (41));

} else {
var statearr_36628_36701 = state_36602__$1;
(statearr_36628_36701[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (33))){
var inst_36547 = (state_36602[(24)]);
var state_36602__$1 = state_36602;
var statearr_36629_36702 = state_36602__$1;
(statearr_36629_36702[(2)] = inst_36547);

(statearr_36629_36702[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (13))){
var inst_36488 = (state_36602[(27)]);
var inst_36492 = cljs.core.chunk_first.call(null,inst_36488);
var inst_36493 = cljs.core.chunk_rest.call(null,inst_36488);
var inst_36494 = cljs.core.count.call(null,inst_36492);
var inst_36475 = inst_36493;
var inst_36476 = inst_36492;
var inst_36477 = inst_36494;
var inst_36478 = (0);
var state_36602__$1 = (function (){var statearr_36630 = state_36602;
(statearr_36630[(7)] = inst_36477);

(statearr_36630[(8)] = inst_36478);

(statearr_36630[(9)] = inst_36476);

(statearr_36630[(10)] = inst_36475);

return statearr_36630;
})();
var statearr_36631_36703 = state_36602__$1;
(statearr_36631_36703[(2)] = null);

(statearr_36631_36703[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (22))){
var inst_36527 = (state_36602[(11)]);
var inst_36540 = (state_36602[(2)]);
var inst_36541 = cljs.core.not_empty.call(null,inst_36527);
var state_36602__$1 = (function (){var statearr_36632 = state_36602;
(statearr_36632[(28)] = inst_36540);

return statearr_36632;
})();
if(cljs.core.truth_(inst_36541)){
var statearr_36633_36704 = state_36602__$1;
(statearr_36633_36704[(1)] = (23));

} else {
var statearr_36634_36705 = state_36602__$1;
(statearr_36634_36705[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (36))){
var state_36602__$1 = state_36602;
var statearr_36635_36706 = state_36602__$1;
(statearr_36635_36706[(2)] = null);

(statearr_36635_36706[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (41))){
var inst_36570 = (state_36602[(25)]);
var inst_36591 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36570);
var inst_36592 = cljs.core.pr_str.call(null,inst_36591);
var inst_36593 = [cljs.core.str("not required: "),cljs.core.str(inst_36592)].join('');
var inst_36594 = figwheel.client.utils.log.call(null,inst_36593);
var state_36602__$1 = state_36602;
var statearr_36636_36707 = state_36602__$1;
(statearr_36636_36707[(2)] = inst_36594);

(statearr_36636_36707[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (43))){
var inst_36597 = (state_36602[(2)]);
var state_36602__$1 = state_36602;
var statearr_36637_36708 = state_36602__$1;
(statearr_36637_36708[(2)] = inst_36597);

(statearr_36637_36708[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (29))){
var state_36602__$1 = state_36602;
var statearr_36638_36709 = state_36602__$1;
(statearr_36638_36709[(2)] = true);

(statearr_36638_36709[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (6))){
var inst_36509 = (state_36602[(2)]);
var state_36602__$1 = state_36602;
var statearr_36639_36710 = state_36602__$1;
(statearr_36639_36710[(2)] = inst_36509);

(statearr_36639_36710[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (28))){
var inst_36562 = (state_36602[(2)]);
var state_36602__$1 = state_36602;
if(cljs.core.truth_(inst_36562)){
var statearr_36640_36711 = state_36602__$1;
(statearr_36640_36711[(1)] = (32));

} else {
var statearr_36641_36712 = state_36602__$1;
(statearr_36641_36712[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (25))){
var inst_36600 = (state_36602[(2)]);
var state_36602__$1 = state_36602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36602__$1,inst_36600);
} else {
if((state_val_36603 === (34))){
var inst_36568 = (state_36602[(29)]);
var inst_36567 = (state_36602[(2)]);
var inst_36568__$1 = cljs.core.get.call(null,inst_36567,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36569 = cljs.core.get.call(null,inst_36567,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_36570 = cljs.core.get.call(null,inst_36567,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36571 = cljs.core.not_empty.call(null,inst_36568__$1);
var state_36602__$1 = (function (){var statearr_36642 = state_36602;
(statearr_36642[(30)] = inst_36569);

(statearr_36642[(29)] = inst_36568__$1);

(statearr_36642[(25)] = inst_36570);

return statearr_36642;
})();
if(cljs.core.truth_(inst_36571)){
var statearr_36643_36713 = state_36602__$1;
(statearr_36643_36713[(1)] = (35));

} else {
var statearr_36644_36714 = state_36602__$1;
(statearr_36644_36714[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (17))){
var inst_36514 = (state_36602[(22)]);
var state_36602__$1 = state_36602;
var statearr_36645_36715 = state_36602__$1;
(statearr_36645_36715[(2)] = inst_36514);

(statearr_36645_36715[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (3))){
var state_36602__$1 = state_36602;
var statearr_36646_36716 = state_36602__$1;
(statearr_36646_36716[(2)] = null);

(statearr_36646_36716[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (12))){
var inst_36505 = (state_36602[(2)]);
var state_36602__$1 = state_36602;
var statearr_36647_36717 = state_36602__$1;
(statearr_36647_36717[(2)] = inst_36505);

(statearr_36647_36717[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (2))){
var inst_36467 = (state_36602[(17)]);
var inst_36474 = cljs.core.seq.call(null,inst_36467);
var inst_36475 = inst_36474;
var inst_36476 = null;
var inst_36477 = (0);
var inst_36478 = (0);
var state_36602__$1 = (function (){var statearr_36648 = state_36602;
(statearr_36648[(7)] = inst_36477);

(statearr_36648[(8)] = inst_36478);

(statearr_36648[(9)] = inst_36476);

(statearr_36648[(10)] = inst_36475);

return statearr_36648;
})();
var statearr_36649_36718 = state_36602__$1;
(statearr_36649_36718[(2)] = null);

(statearr_36649_36718[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (23))){
var inst_36547 = (state_36602[(24)]);
var inst_36527 = (state_36602[(11)]);
var inst_36524 = (state_36602[(12)]);
var inst_36525 = (state_36602[(13)]);
var inst_36520 = (state_36602[(14)]);
var inst_36521 = (state_36602[(16)]);
var inst_36543 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36546 = (function (){var all_files = inst_36520;
var files_SINGLEQUOTE_ = inst_36521;
var res_SINGLEQUOTE_ = inst_36524;
var res = inst_36525;
var files_not_loaded = inst_36527;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_36547,inst_36527,inst_36524,inst_36525,inst_36520,inst_36521,inst_36543,state_val_36603,c__20431__auto__,map__36460,map__36460__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__36461,map__36461__$1,msg,files){
return (function (p__36545){
var map__36650 = p__36545;
var map__36650__$1 = ((((!((map__36650 == null)))?((((map__36650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36650):map__36650);
var meta_data = cljs.core.get.call(null,map__36650__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_36547,inst_36527,inst_36524,inst_36525,inst_36520,inst_36521,inst_36543,state_val_36603,c__20431__auto__,map__36460,map__36460__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__36461,map__36461__$1,msg,files))
})();
var inst_36547__$1 = cljs.core.group_by.call(null,inst_36546,inst_36527);
var inst_36549 = (inst_36547__$1 == null);
var inst_36550 = cljs.core.not.call(null,inst_36549);
var state_36602__$1 = (function (){var statearr_36652 = state_36602;
(statearr_36652[(24)] = inst_36547__$1);

(statearr_36652[(31)] = inst_36543);

return statearr_36652;
})();
if(inst_36550){
var statearr_36653_36719 = state_36602__$1;
(statearr_36653_36719[(1)] = (26));

} else {
var statearr_36654_36720 = state_36602__$1;
(statearr_36654_36720[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (35))){
var inst_36568 = (state_36602[(29)]);
var inst_36573 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36568);
var inst_36574 = cljs.core.pr_str.call(null,inst_36573);
var inst_36575 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_36574)].join('');
var inst_36576 = figwheel.client.utils.log.call(null,inst_36575);
var state_36602__$1 = state_36602;
var statearr_36655_36721 = state_36602__$1;
(statearr_36655_36721[(2)] = inst_36576);

(statearr_36655_36721[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (19))){
var inst_36524 = (state_36602[(12)]);
var inst_36525 = (state_36602[(13)]);
var inst_36520 = (state_36602[(14)]);
var inst_36521 = (state_36602[(16)]);
var inst_36524__$1 = (state_36602[(2)]);
var inst_36525__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36524__$1);
var inst_36526 = (function (){var all_files = inst_36520;
var files_SINGLEQUOTE_ = inst_36521;
var res_SINGLEQUOTE_ = inst_36524__$1;
var res = inst_36525__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_36524,inst_36525,inst_36520,inst_36521,inst_36524__$1,inst_36525__$1,state_val_36603,c__20431__auto__,map__36460,map__36460__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__36461,map__36461__$1,msg,files){
return (function (p1__36230_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36230_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_36524,inst_36525,inst_36520,inst_36521,inst_36524__$1,inst_36525__$1,state_val_36603,c__20431__auto__,map__36460,map__36460__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__36461,map__36461__$1,msg,files))
})();
var inst_36527 = cljs.core.filter.call(null,inst_36526,inst_36524__$1);
var inst_36528 = cljs.core.not_empty.call(null,inst_36525__$1);
var state_36602__$1 = (function (){var statearr_36656 = state_36602;
(statearr_36656[(11)] = inst_36527);

(statearr_36656[(12)] = inst_36524__$1);

(statearr_36656[(13)] = inst_36525__$1);

return statearr_36656;
})();
if(cljs.core.truth_(inst_36528)){
var statearr_36657_36722 = state_36602__$1;
(statearr_36657_36722[(1)] = (20));

} else {
var statearr_36658_36723 = state_36602__$1;
(statearr_36658_36723[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (11))){
var state_36602__$1 = state_36602;
var statearr_36659_36724 = state_36602__$1;
(statearr_36659_36724[(2)] = null);

(statearr_36659_36724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (9))){
var inst_36507 = (state_36602[(2)]);
var state_36602__$1 = state_36602;
var statearr_36660_36725 = state_36602__$1;
(statearr_36660_36725[(2)] = inst_36507);

(statearr_36660_36725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (5))){
var inst_36477 = (state_36602[(7)]);
var inst_36478 = (state_36602[(8)]);
var inst_36480 = (inst_36478 < inst_36477);
var inst_36481 = inst_36480;
var state_36602__$1 = state_36602;
if(cljs.core.truth_(inst_36481)){
var statearr_36661_36726 = state_36602__$1;
(statearr_36661_36726[(1)] = (7));

} else {
var statearr_36662_36727 = state_36602__$1;
(statearr_36662_36727[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (14))){
var inst_36488 = (state_36602[(27)]);
var inst_36497 = cljs.core.first.call(null,inst_36488);
var inst_36498 = figwheel.client.file_reloading.eval_body.call(null,inst_36497,opts);
var inst_36499 = cljs.core.next.call(null,inst_36488);
var inst_36475 = inst_36499;
var inst_36476 = null;
var inst_36477 = (0);
var inst_36478 = (0);
var state_36602__$1 = (function (){var statearr_36663 = state_36602;
(statearr_36663[(7)] = inst_36477);

(statearr_36663[(8)] = inst_36478);

(statearr_36663[(9)] = inst_36476);

(statearr_36663[(10)] = inst_36475);

(statearr_36663[(32)] = inst_36498);

return statearr_36663;
})();
var statearr_36664_36728 = state_36602__$1;
(statearr_36664_36728[(2)] = null);

(statearr_36664_36728[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (26))){
var inst_36547 = (state_36602[(24)]);
var inst_36552 = inst_36547.cljs$lang$protocol_mask$partition0$;
var inst_36553 = (inst_36552 & (64));
var inst_36554 = inst_36547.cljs$core$ISeq$;
var inst_36555 = (inst_36553) || (inst_36554);
var state_36602__$1 = state_36602;
if(cljs.core.truth_(inst_36555)){
var statearr_36665_36729 = state_36602__$1;
(statearr_36665_36729[(1)] = (29));

} else {
var statearr_36666_36730 = state_36602__$1;
(statearr_36666_36730[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (16))){
var inst_36514 = (state_36602[(22)]);
var inst_36516 = (function (){var all_files = inst_36514;
return ((function (all_files,inst_36514,state_val_36603,c__20431__auto__,map__36460,map__36460__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__36461,map__36461__$1,msg,files){
return (function (p1__36229_SHARP_){
return cljs.core.update_in.call(null,p1__36229_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_36514,state_val_36603,c__20431__auto__,map__36460,map__36460__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__36461,map__36461__$1,msg,files))
})();
var inst_36517 = cljs.core.map.call(null,inst_36516,inst_36514);
var state_36602__$1 = state_36602;
var statearr_36667_36731 = state_36602__$1;
(statearr_36667_36731[(2)] = inst_36517);

(statearr_36667_36731[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (38))){
var inst_36569 = (state_36602[(30)]);
var inst_36582 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36569);
var inst_36583 = cljs.core.pr_str.call(null,inst_36582);
var inst_36584 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_36583)].join('');
var inst_36585 = figwheel.client.utils.log.call(null,inst_36584);
var state_36602__$1 = state_36602;
var statearr_36668_36732 = state_36602__$1;
(statearr_36668_36732[(2)] = inst_36585);

(statearr_36668_36732[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (30))){
var state_36602__$1 = state_36602;
var statearr_36669_36733 = state_36602__$1;
(statearr_36669_36733[(2)] = false);

(statearr_36669_36733[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (10))){
var inst_36488 = (state_36602[(27)]);
var inst_36490 = cljs.core.chunked_seq_QMARK_.call(null,inst_36488);
var state_36602__$1 = state_36602;
if(inst_36490){
var statearr_36670_36734 = state_36602__$1;
(statearr_36670_36734[(1)] = (13));

} else {
var statearr_36671_36735 = state_36602__$1;
(statearr_36671_36735[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (18))){
var inst_36520 = (state_36602[(14)]);
var inst_36521 = (state_36602[(16)]);
var inst_36520__$1 = (state_36602[(2)]);
var inst_36521__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_36520__$1);
var inst_36522 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36521__$1);
var state_36602__$1 = (function (){var statearr_36672 = state_36602;
(statearr_36672[(14)] = inst_36520__$1);

(statearr_36672[(16)] = inst_36521__$1);

return statearr_36672;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36602__$1,(19),inst_36522);
} else {
if((state_val_36603 === (42))){
var state_36602__$1 = state_36602;
var statearr_36673_36736 = state_36602__$1;
(statearr_36673_36736[(2)] = null);

(statearr_36673_36736[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (37))){
var inst_36569 = (state_36602[(30)]);
var inst_36579 = (state_36602[(2)]);
var inst_36580 = cljs.core.not_empty.call(null,inst_36569);
var state_36602__$1 = (function (){var statearr_36674 = state_36602;
(statearr_36674[(33)] = inst_36579);

return statearr_36674;
})();
if(cljs.core.truth_(inst_36580)){
var statearr_36675_36737 = state_36602__$1;
(statearr_36675_36737[(1)] = (38));

} else {
var statearr_36676_36738 = state_36602__$1;
(statearr_36676_36738[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36603 === (8))){
var inst_36488 = (state_36602[(27)]);
var inst_36475 = (state_36602[(10)]);
var inst_36488__$1 = cljs.core.seq.call(null,inst_36475);
var state_36602__$1 = (function (){var statearr_36677 = state_36602;
(statearr_36677[(27)] = inst_36488__$1);

return statearr_36677;
})();
if(inst_36488__$1){
var statearr_36678_36739 = state_36602__$1;
(statearr_36678_36739[(1)] = (10));

} else {
var statearr_36679_36740 = state_36602__$1;
(statearr_36679_36740[(1)] = (11));

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
}
}
}
}
}
}
});})(c__20431__auto__,map__36460,map__36460__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__36461,map__36461__$1,msg,files))
;
return ((function (switch__20366__auto__,c__20431__auto__,map__36460,map__36460__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__36461,map__36461__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20367__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20367__auto____0 = (function (){
var statearr_36683 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36683[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20367__auto__);

(statearr_36683[(1)] = (1));

return statearr_36683;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20367__auto____1 = (function (state_36602){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_36602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e36684){if((e36684 instanceof Object)){
var ex__20370__auto__ = e36684;
var statearr_36685_36741 = state_36602;
(statearr_36685_36741[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36742 = state_36602;
state_36602 = G__36742;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20367__auto__ = function(state_36602){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20367__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20367__auto____1.call(this,state_36602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20367__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20367__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20367__auto__;
})()
;})(switch__20366__auto__,c__20431__auto__,map__36460,map__36460__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__36461,map__36461__$1,msg,files))
})();
var state__20433__auto__ = (function (){var statearr_36686 = f__20432__auto__.call(null);
(statearr_36686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto__);

return statearr_36686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(c__20431__auto__,map__36460,map__36460__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__36461,map__36461__$1,msg,files))
);

return c__20431__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36745,link){
var map__36748 = p__36745;
var map__36748__$1 = ((((!((map__36748 == null)))?((((map__36748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36748):map__36748);
var file = cljs.core.get.call(null,map__36748__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__36748,map__36748__$1,file){
return (function (p1__36743_SHARP_,p2__36744_SHARP_){
if(cljs.core._EQ_.call(null,p1__36743_SHARP_,p2__36744_SHARP_)){
return p1__36743_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__36748,map__36748__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36754){
var map__36755 = p__36754;
var map__36755__$1 = ((((!((map__36755 == null)))?((((map__36755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36755):map__36755);
var match_length = cljs.core.get.call(null,map__36755__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36755__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36750_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36750_SHARP_);
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
var args36757 = [];
var len__17521__auto___36760 = arguments.length;
var i__17522__auto___36761 = (0);
while(true){
if((i__17522__auto___36761 < len__17521__auto___36760)){
args36757.push((arguments[i__17522__auto___36761]));

var G__36762 = (i__17522__auto___36761 + (1));
i__17522__auto___36761 = G__36762;
continue;
} else {
}
break;
}

var G__36759 = args36757.length;
switch (G__36759) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36757.length)].join('')));

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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__36764){
var map__36767 = p__36764;
var map__36767__$1 = ((((!((map__36767 == null)))?((((map__36767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36767):map__36767);
var f_data = map__36767__$1;
var file = cljs.core.get.call(null,map__36767__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__36767__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16482__auto__ = request_url;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36769,files_msg){
var map__36792 = p__36769;
var map__36792__$1 = ((((!((map__36792 == null)))?((((map__36792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36792):map__36792);
var opts = map__36792__$1;
var on_cssload = cljs.core.get.call(null,map__36792__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__36794_36814 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__36795_36815 = null;
var count__36796_36816 = (0);
var i__36797_36817 = (0);
while(true){
if((i__36797_36817 < count__36796_36816)){
var f_36818 = cljs.core._nth.call(null,chunk__36795_36815,i__36797_36817);
figwheel.client.file_reloading.reload_css_file.call(null,f_36818);

var G__36819 = seq__36794_36814;
var G__36820 = chunk__36795_36815;
var G__36821 = count__36796_36816;
var G__36822 = (i__36797_36817 + (1));
seq__36794_36814 = G__36819;
chunk__36795_36815 = G__36820;
count__36796_36816 = G__36821;
i__36797_36817 = G__36822;
continue;
} else {
var temp__4425__auto___36823 = cljs.core.seq.call(null,seq__36794_36814);
if(temp__4425__auto___36823){
var seq__36794_36824__$1 = temp__4425__auto___36823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36794_36824__$1)){
var c__17266__auto___36825 = cljs.core.chunk_first.call(null,seq__36794_36824__$1);
var G__36826 = cljs.core.chunk_rest.call(null,seq__36794_36824__$1);
var G__36827 = c__17266__auto___36825;
var G__36828 = cljs.core.count.call(null,c__17266__auto___36825);
var G__36829 = (0);
seq__36794_36814 = G__36826;
chunk__36795_36815 = G__36827;
count__36796_36816 = G__36828;
i__36797_36817 = G__36829;
continue;
} else {
var f_36830 = cljs.core.first.call(null,seq__36794_36824__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_36830);

var G__36831 = cljs.core.next.call(null,seq__36794_36824__$1);
var G__36832 = null;
var G__36833 = (0);
var G__36834 = (0);
seq__36794_36814 = G__36831;
chunk__36795_36815 = G__36832;
count__36796_36816 = G__36833;
i__36797_36817 = G__36834;
continue;
}
} else {
}
}
break;
}

var c__20431__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20431__auto__,map__36792,map__36792__$1,opts,on_cssload){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (c__20431__auto__,map__36792,map__36792__$1,opts,on_cssload){
return (function (state_36804){
var state_val_36805 = (state_36804[(1)]);
if((state_val_36805 === (1))){
var inst_36798 = cljs.core.async.timeout.call(null,(100));
var state_36804__$1 = state_36804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36804__$1,(2),inst_36798);
} else {
if((state_val_36805 === (2))){
var inst_36800 = (state_36804[(2)]);
var inst_36801 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_36802 = on_cssload.call(null,inst_36801);
var state_36804__$1 = (function (){var statearr_36806 = state_36804;
(statearr_36806[(7)] = inst_36800);

return statearr_36806;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36804__$1,inst_36802);
} else {
return null;
}
}
});})(c__20431__auto__,map__36792,map__36792__$1,opts,on_cssload))
;
return ((function (switch__20366__auto__,c__20431__auto__,map__36792,map__36792__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20367__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20367__auto____0 = (function (){
var statearr_36810 = [null,null,null,null,null,null,null,null];
(statearr_36810[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__20367__auto__);

(statearr_36810[(1)] = (1));

return statearr_36810;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20367__auto____1 = (function (state_36804){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_36804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e36811){if((e36811 instanceof Object)){
var ex__20370__auto__ = e36811;
var statearr_36812_36835 = state_36804;
(statearr_36812_36835[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36836 = state_36804;
state_36804 = G__36836;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__20367__auto__ = function(state_36804){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20367__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20367__auto____1.call(this,state_36804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__20367__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__20367__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20367__auto__;
})()
;})(switch__20366__auto__,c__20431__auto__,map__36792,map__36792__$1,opts,on_cssload))
})();
var state__20433__auto__ = (function (){var statearr_36813 = f__20432__auto__.call(null);
(statearr_36813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto__);

return statearr_36813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(c__20431__auto__,map__36792,map__36792__$1,opts,on_cssload))
);

return c__20431__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1439049325526