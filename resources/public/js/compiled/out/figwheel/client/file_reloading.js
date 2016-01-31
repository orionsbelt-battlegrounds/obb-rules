// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18370__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18370__auto__){
return or__18370__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18370__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__38977_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__38977_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__38982 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__38983 = null;
var count__38984 = (0);
var i__38985 = (0);
while(true){
if((i__38985 < count__38984)){
var n = cljs.core._nth.call(null,chunk__38983,i__38985);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38986 = seq__38982;
var G__38987 = chunk__38983;
var G__38988 = count__38984;
var G__38989 = (i__38985 + (1));
seq__38982 = G__38986;
chunk__38983 = G__38987;
count__38984 = G__38988;
i__38985 = G__38989;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38982);
if(temp__4657__auto__){
var seq__38982__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38982__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__38982__$1);
var G__38990 = cljs.core.chunk_rest.call(null,seq__38982__$1);
var G__38991 = c__19173__auto__;
var G__38992 = cljs.core.count.call(null,c__19173__auto__);
var G__38993 = (0);
seq__38982 = G__38990;
chunk__38983 = G__38991;
count__38984 = G__38992;
i__38985 = G__38993;
continue;
} else {
var n = cljs.core.first.call(null,seq__38982__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38994 = cljs.core.next.call(null,seq__38982__$1);
var G__38995 = null;
var G__38996 = (0);
var G__38997 = (0);
seq__38982 = G__38994;
chunk__38983 = G__38995;
count__38984 = G__38996;
i__38985 = G__38997;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__39036_39043 = cljs.core.seq.call(null,deps);
var chunk__39037_39044 = null;
var count__39038_39045 = (0);
var i__39039_39046 = (0);
while(true){
if((i__39039_39046 < count__39038_39045)){
var dep_39047 = cljs.core._nth.call(null,chunk__39037_39044,i__39039_39046);
topo_sort_helper_STAR_.call(null,dep_39047,(depth + (1)),state);

var G__39048 = seq__39036_39043;
var G__39049 = chunk__39037_39044;
var G__39050 = count__39038_39045;
var G__39051 = (i__39039_39046 + (1));
seq__39036_39043 = G__39048;
chunk__39037_39044 = G__39049;
count__39038_39045 = G__39050;
i__39039_39046 = G__39051;
continue;
} else {
var temp__4657__auto___39052 = cljs.core.seq.call(null,seq__39036_39043);
if(temp__4657__auto___39052){
var seq__39036_39053__$1 = temp__4657__auto___39052;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39036_39053__$1)){
var c__19173__auto___39054 = cljs.core.chunk_first.call(null,seq__39036_39053__$1);
var G__39055 = cljs.core.chunk_rest.call(null,seq__39036_39053__$1);
var G__39056 = c__19173__auto___39054;
var G__39057 = cljs.core.count.call(null,c__19173__auto___39054);
var G__39058 = (0);
seq__39036_39043 = G__39055;
chunk__39037_39044 = G__39056;
count__39038_39045 = G__39057;
i__39039_39046 = G__39058;
continue;
} else {
var dep_39059 = cljs.core.first.call(null,seq__39036_39053__$1);
topo_sort_helper_STAR_.call(null,dep_39059,(depth + (1)),state);

var G__39060 = cljs.core.next.call(null,seq__39036_39053__$1);
var G__39061 = null;
var G__39062 = (0);
var G__39063 = (0);
seq__39036_39043 = G__39060;
chunk__39037_39044 = G__39061;
count__39038_39045 = G__39062;
i__39039_39046 = G__39063;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__39040){
var vec__39042 = p__39040;
var x = cljs.core.nth.call(null,vec__39042,(0),null);
var xs = cljs.core.nthnext.call(null,vec__39042,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__39042,x,xs,get_deps__$1){
return (function (p1__38998_SHARP_){
return clojure.set.difference.call(null,p1__38998_SHARP_,x);
});})(vec__39042,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__39076 = cljs.core.seq.call(null,provides);
var chunk__39077 = null;
var count__39078 = (0);
var i__39079 = (0);
while(true){
if((i__39079 < count__39078)){
var prov = cljs.core._nth.call(null,chunk__39077,i__39079);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39080_39088 = cljs.core.seq.call(null,requires);
var chunk__39081_39089 = null;
var count__39082_39090 = (0);
var i__39083_39091 = (0);
while(true){
if((i__39083_39091 < count__39082_39090)){
var req_39092 = cljs.core._nth.call(null,chunk__39081_39089,i__39083_39091);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39092,prov);

var G__39093 = seq__39080_39088;
var G__39094 = chunk__39081_39089;
var G__39095 = count__39082_39090;
var G__39096 = (i__39083_39091 + (1));
seq__39080_39088 = G__39093;
chunk__39081_39089 = G__39094;
count__39082_39090 = G__39095;
i__39083_39091 = G__39096;
continue;
} else {
var temp__4657__auto___39097 = cljs.core.seq.call(null,seq__39080_39088);
if(temp__4657__auto___39097){
var seq__39080_39098__$1 = temp__4657__auto___39097;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39080_39098__$1)){
var c__19173__auto___39099 = cljs.core.chunk_first.call(null,seq__39080_39098__$1);
var G__39100 = cljs.core.chunk_rest.call(null,seq__39080_39098__$1);
var G__39101 = c__19173__auto___39099;
var G__39102 = cljs.core.count.call(null,c__19173__auto___39099);
var G__39103 = (0);
seq__39080_39088 = G__39100;
chunk__39081_39089 = G__39101;
count__39082_39090 = G__39102;
i__39083_39091 = G__39103;
continue;
} else {
var req_39104 = cljs.core.first.call(null,seq__39080_39098__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39104,prov);

var G__39105 = cljs.core.next.call(null,seq__39080_39098__$1);
var G__39106 = null;
var G__39107 = (0);
var G__39108 = (0);
seq__39080_39088 = G__39105;
chunk__39081_39089 = G__39106;
count__39082_39090 = G__39107;
i__39083_39091 = G__39108;
continue;
}
} else {
}
}
break;
}

var G__39109 = seq__39076;
var G__39110 = chunk__39077;
var G__39111 = count__39078;
var G__39112 = (i__39079 + (1));
seq__39076 = G__39109;
chunk__39077 = G__39110;
count__39078 = G__39111;
i__39079 = G__39112;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39076);
if(temp__4657__auto__){
var seq__39076__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39076__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__39076__$1);
var G__39113 = cljs.core.chunk_rest.call(null,seq__39076__$1);
var G__39114 = c__19173__auto__;
var G__39115 = cljs.core.count.call(null,c__19173__auto__);
var G__39116 = (0);
seq__39076 = G__39113;
chunk__39077 = G__39114;
count__39078 = G__39115;
i__39079 = G__39116;
continue;
} else {
var prov = cljs.core.first.call(null,seq__39076__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39084_39117 = cljs.core.seq.call(null,requires);
var chunk__39085_39118 = null;
var count__39086_39119 = (0);
var i__39087_39120 = (0);
while(true){
if((i__39087_39120 < count__39086_39119)){
var req_39121 = cljs.core._nth.call(null,chunk__39085_39118,i__39087_39120);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39121,prov);

var G__39122 = seq__39084_39117;
var G__39123 = chunk__39085_39118;
var G__39124 = count__39086_39119;
var G__39125 = (i__39087_39120 + (1));
seq__39084_39117 = G__39122;
chunk__39085_39118 = G__39123;
count__39086_39119 = G__39124;
i__39087_39120 = G__39125;
continue;
} else {
var temp__4657__auto___39126__$1 = cljs.core.seq.call(null,seq__39084_39117);
if(temp__4657__auto___39126__$1){
var seq__39084_39127__$1 = temp__4657__auto___39126__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39084_39127__$1)){
var c__19173__auto___39128 = cljs.core.chunk_first.call(null,seq__39084_39127__$1);
var G__39129 = cljs.core.chunk_rest.call(null,seq__39084_39127__$1);
var G__39130 = c__19173__auto___39128;
var G__39131 = cljs.core.count.call(null,c__19173__auto___39128);
var G__39132 = (0);
seq__39084_39117 = G__39129;
chunk__39085_39118 = G__39130;
count__39086_39119 = G__39131;
i__39087_39120 = G__39132;
continue;
} else {
var req_39133 = cljs.core.first.call(null,seq__39084_39127__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39133,prov);

var G__39134 = cljs.core.next.call(null,seq__39084_39127__$1);
var G__39135 = null;
var G__39136 = (0);
var G__39137 = (0);
seq__39084_39117 = G__39134;
chunk__39085_39118 = G__39135;
count__39086_39119 = G__39136;
i__39087_39120 = G__39137;
continue;
}
} else {
}
}
break;
}

var G__39138 = cljs.core.next.call(null,seq__39076__$1);
var G__39139 = null;
var G__39140 = (0);
var G__39141 = (0);
seq__39076 = G__39138;
chunk__39077 = G__39139;
count__39078 = G__39140;
i__39079 = G__39141;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__39146_39150 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__39147_39151 = null;
var count__39148_39152 = (0);
var i__39149_39153 = (0);
while(true){
if((i__39149_39153 < count__39148_39152)){
var ns_39154 = cljs.core._nth.call(null,chunk__39147_39151,i__39149_39153);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39154);

var G__39155 = seq__39146_39150;
var G__39156 = chunk__39147_39151;
var G__39157 = count__39148_39152;
var G__39158 = (i__39149_39153 + (1));
seq__39146_39150 = G__39155;
chunk__39147_39151 = G__39156;
count__39148_39152 = G__39157;
i__39149_39153 = G__39158;
continue;
} else {
var temp__4657__auto___39159 = cljs.core.seq.call(null,seq__39146_39150);
if(temp__4657__auto___39159){
var seq__39146_39160__$1 = temp__4657__auto___39159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39146_39160__$1)){
var c__19173__auto___39161 = cljs.core.chunk_first.call(null,seq__39146_39160__$1);
var G__39162 = cljs.core.chunk_rest.call(null,seq__39146_39160__$1);
var G__39163 = c__19173__auto___39161;
var G__39164 = cljs.core.count.call(null,c__19173__auto___39161);
var G__39165 = (0);
seq__39146_39150 = G__39162;
chunk__39147_39151 = G__39163;
count__39148_39152 = G__39164;
i__39149_39153 = G__39165;
continue;
} else {
var ns_39166 = cljs.core.first.call(null,seq__39146_39160__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39166);

var G__39167 = cljs.core.next.call(null,seq__39146_39160__$1);
var G__39168 = null;
var G__39169 = (0);
var G__39170 = (0);
seq__39146_39150 = G__39167;
chunk__39147_39151 = G__39168;
count__39148_39152 = G__39169;
i__39149_39153 = G__39170;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18370__auto__ = goog.require__;
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__39171__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__39171 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39172__i = 0, G__39172__a = new Array(arguments.length -  0);
while (G__39172__i < G__39172__a.length) {G__39172__a[G__39172__i] = arguments[G__39172__i + 0]; ++G__39172__i;}
  args = new cljs.core.IndexedSeq(G__39172__a,0);
} 
return G__39171__delegate.call(this,args);};
G__39171.cljs$lang$maxFixedArity = 0;
G__39171.cljs$lang$applyTo = (function (arglist__39173){
var args = cljs.core.seq(arglist__39173);
return G__39171__delegate(args);
});
G__39171.cljs$core$IFn$_invoke$arity$variadic = G__39171__delegate;
return G__39171;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__39175 = cljs.core._EQ_;
var expr__39176 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__39175.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39176))){
var path_parts = ((function (pred__39175,expr__39176){
return (function (p1__39174_SHARP_){
return clojure.string.split.call(null,p1__39174_SHARP_,/[\/\\]/);
});})(pred__39175,expr__39176))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__39175,expr__39176){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e39178){if((e39178 instanceof Error)){
var e = e39178;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39178;

}
}})());
});
;})(path_parts,sep,root,pred__39175,expr__39176))
} else {
if(cljs.core.truth_(pred__39175.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__39176))){
return ((function (pred__39175,expr__39176){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__39175,expr__39176){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__39175,expr__39176))
);

return deferred.addErrback(((function (deferred,pred__39175,expr__39176){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__39175,expr__39176))
);
});
;})(pred__39175,expr__39176))
} else {
return ((function (pred__39175,expr__39176){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__39175,expr__39176))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__39179,callback){
var map__39182 = p__39179;
var map__39182__$1 = ((((!((map__39182 == null)))?((((map__39182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39182):map__39182);
var file_msg = map__39182__$1;
var request_url = cljs.core.get.call(null,map__39182__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__39182,map__39182__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__39182,map__39182__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__21794__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21794__auto__){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (c__21794__auto__){
return (function (state_39206){
var state_val_39207 = (state_39206[(1)]);
if((state_val_39207 === (7))){
var inst_39202 = (state_39206[(2)]);
var state_39206__$1 = state_39206;
var statearr_39208_39228 = state_39206__$1;
(statearr_39208_39228[(2)] = inst_39202);

(statearr_39208_39228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (1))){
var state_39206__$1 = state_39206;
var statearr_39209_39229 = state_39206__$1;
(statearr_39209_39229[(2)] = null);

(statearr_39209_39229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (4))){
var inst_39186 = (state_39206[(7)]);
var inst_39186__$1 = (state_39206[(2)]);
var state_39206__$1 = (function (){var statearr_39210 = state_39206;
(statearr_39210[(7)] = inst_39186__$1);

return statearr_39210;
})();
if(cljs.core.truth_(inst_39186__$1)){
var statearr_39211_39230 = state_39206__$1;
(statearr_39211_39230[(1)] = (5));

} else {
var statearr_39212_39231 = state_39206__$1;
(statearr_39212_39231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (6))){
var state_39206__$1 = state_39206;
var statearr_39213_39232 = state_39206__$1;
(statearr_39213_39232[(2)] = null);

(statearr_39213_39232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (3))){
var inst_39204 = (state_39206[(2)]);
var state_39206__$1 = state_39206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39206__$1,inst_39204);
} else {
if((state_val_39207 === (2))){
var state_39206__$1 = state_39206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39206__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_39207 === (11))){
var inst_39198 = (state_39206[(2)]);
var state_39206__$1 = (function (){var statearr_39214 = state_39206;
(statearr_39214[(8)] = inst_39198);

return statearr_39214;
})();
var statearr_39215_39233 = state_39206__$1;
(statearr_39215_39233[(2)] = null);

(statearr_39215_39233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (9))){
var inst_39192 = (state_39206[(9)]);
var inst_39190 = (state_39206[(10)]);
var inst_39194 = inst_39192.call(null,inst_39190);
var state_39206__$1 = state_39206;
var statearr_39216_39234 = state_39206__$1;
(statearr_39216_39234[(2)] = inst_39194);

(statearr_39216_39234[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (5))){
var inst_39186 = (state_39206[(7)]);
var inst_39188 = figwheel.client.file_reloading.blocking_load.call(null,inst_39186);
var state_39206__$1 = state_39206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39206__$1,(8),inst_39188);
} else {
if((state_val_39207 === (10))){
var inst_39190 = (state_39206[(10)]);
var inst_39196 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_39190);
var state_39206__$1 = state_39206;
var statearr_39217_39235 = state_39206__$1;
(statearr_39217_39235[(2)] = inst_39196);

(statearr_39217_39235[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (8))){
var inst_39192 = (state_39206[(9)]);
var inst_39186 = (state_39206[(7)]);
var inst_39190 = (state_39206[(2)]);
var inst_39191 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_39192__$1 = cljs.core.get.call(null,inst_39191,inst_39186);
var state_39206__$1 = (function (){var statearr_39218 = state_39206;
(statearr_39218[(9)] = inst_39192__$1);

(statearr_39218[(10)] = inst_39190);

return statearr_39218;
})();
if(cljs.core.truth_(inst_39192__$1)){
var statearr_39219_39236 = state_39206__$1;
(statearr_39219_39236[(1)] = (9));

} else {
var statearr_39220_39237 = state_39206__$1;
(statearr_39220_39237[(1)] = (10));

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
});})(c__21794__auto__))
;
return ((function (switch__21682__auto__,c__21794__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21683__auto__ = null;
var figwheel$client$file_reloading$state_machine__21683__auto____0 = (function (){
var statearr_39224 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39224[(0)] = figwheel$client$file_reloading$state_machine__21683__auto__);

(statearr_39224[(1)] = (1));

return statearr_39224;
});
var figwheel$client$file_reloading$state_machine__21683__auto____1 = (function (state_39206){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_39206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e39225){if((e39225 instanceof Object)){
var ex__21686__auto__ = e39225;
var statearr_39226_39238 = state_39206;
(statearr_39226_39238[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39239 = state_39206;
state_39206 = G__39239;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21683__auto__ = function(state_39206){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21683__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21683__auto____1.call(this,state_39206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21683__auto____0;
figwheel$client$file_reloading$state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21683__auto____1;
return figwheel$client$file_reloading$state_machine__21683__auto__;
})()
;})(switch__21682__auto__,c__21794__auto__))
})();
var state__21796__auto__ = (function (){var statearr_39227 = f__21795__auto__.call(null);
(statearr_39227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto__);

return statearr_39227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(c__21794__auto__))
);

return c__21794__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__39240,callback){
var map__39243 = p__39240;
var map__39243__$1 = ((((!((map__39243 == null)))?((((map__39243.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39243.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39243):map__39243);
var file_msg = map__39243__$1;
var namespace = cljs.core.get.call(null,map__39243__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__39243,map__39243__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__39243,map__39243__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__39245){
var map__39248 = p__39245;
var map__39248__$1 = ((((!((map__39248 == null)))?((((map__39248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39248):map__39248);
var file_msg = map__39248__$1;
var namespace = cljs.core.get.call(null,map__39248__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18358__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18358__auto__){
var or__18370__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
var or__18370__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18370__auto____$1)){
return or__18370__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18358__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__39250,callback){
var map__39253 = p__39250;
var map__39253__$1 = ((((!((map__39253 == null)))?((((map__39253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39253):map__39253);
var file_msg = map__39253__$1;
var request_url = cljs.core.get.call(null,map__39253__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__39253__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21794__auto___39341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21794__auto___39341,out){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (c__21794__auto___39341,out){
return (function (state_39323){
var state_val_39324 = (state_39323[(1)]);
if((state_val_39324 === (1))){
var inst_39301 = cljs.core.nth.call(null,files,(0),null);
var inst_39302 = cljs.core.nthnext.call(null,files,(1));
var inst_39303 = files;
var state_39323__$1 = (function (){var statearr_39325 = state_39323;
(statearr_39325[(7)] = inst_39303);

(statearr_39325[(8)] = inst_39301);

(statearr_39325[(9)] = inst_39302);

return statearr_39325;
})();
var statearr_39326_39342 = state_39323__$1;
(statearr_39326_39342[(2)] = null);

(statearr_39326_39342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39324 === (2))){
var inst_39303 = (state_39323[(7)]);
var inst_39306 = (state_39323[(10)]);
var inst_39306__$1 = cljs.core.nth.call(null,inst_39303,(0),null);
var inst_39307 = cljs.core.nthnext.call(null,inst_39303,(1));
var inst_39308 = (inst_39306__$1 == null);
var inst_39309 = cljs.core.not.call(null,inst_39308);
var state_39323__$1 = (function (){var statearr_39327 = state_39323;
(statearr_39327[(10)] = inst_39306__$1);

(statearr_39327[(11)] = inst_39307);

return statearr_39327;
})();
if(inst_39309){
var statearr_39328_39343 = state_39323__$1;
(statearr_39328_39343[(1)] = (4));

} else {
var statearr_39329_39344 = state_39323__$1;
(statearr_39329_39344[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39324 === (3))){
var inst_39321 = (state_39323[(2)]);
var state_39323__$1 = state_39323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39323__$1,inst_39321);
} else {
if((state_val_39324 === (4))){
var inst_39306 = (state_39323[(10)]);
var inst_39311 = figwheel.client.file_reloading.reload_js_file.call(null,inst_39306);
var state_39323__$1 = state_39323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39323__$1,(7),inst_39311);
} else {
if((state_val_39324 === (5))){
var inst_39317 = cljs.core.async.close_BANG_.call(null,out);
var state_39323__$1 = state_39323;
var statearr_39330_39345 = state_39323__$1;
(statearr_39330_39345[(2)] = inst_39317);

(statearr_39330_39345[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39324 === (6))){
var inst_39319 = (state_39323[(2)]);
var state_39323__$1 = state_39323;
var statearr_39331_39346 = state_39323__$1;
(statearr_39331_39346[(2)] = inst_39319);

(statearr_39331_39346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39324 === (7))){
var inst_39307 = (state_39323[(11)]);
var inst_39313 = (state_39323[(2)]);
var inst_39314 = cljs.core.async.put_BANG_.call(null,out,inst_39313);
var inst_39303 = inst_39307;
var state_39323__$1 = (function (){var statearr_39332 = state_39323;
(statearr_39332[(7)] = inst_39303);

(statearr_39332[(12)] = inst_39314);

return statearr_39332;
})();
var statearr_39333_39347 = state_39323__$1;
(statearr_39333_39347[(2)] = null);

(statearr_39333_39347[(1)] = (2));


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
});})(c__21794__auto___39341,out))
;
return ((function (switch__21682__auto__,c__21794__auto___39341,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21683__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21683__auto____0 = (function (){
var statearr_39337 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39337[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21683__auto__);

(statearr_39337[(1)] = (1));

return statearr_39337;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21683__auto____1 = (function (state_39323){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_39323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e39338){if((e39338 instanceof Object)){
var ex__21686__auto__ = e39338;
var statearr_39339_39348 = state_39323;
(statearr_39339_39348[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39349 = state_39323;
state_39323 = G__39349;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21683__auto__ = function(state_39323){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21683__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21683__auto____1.call(this,state_39323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21683__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21683__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21683__auto__;
})()
;})(switch__21682__auto__,c__21794__auto___39341,out))
})();
var state__21796__auto__ = (function (){var statearr_39340 = f__21795__auto__.call(null);
(statearr_39340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto___39341);

return statearr_39340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(c__21794__auto___39341,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__39350,opts){
var map__39354 = p__39350;
var map__39354__$1 = ((((!((map__39354 == null)))?((((map__39354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39354):map__39354);
var eval_body__$1 = cljs.core.get.call(null,map__39354__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__39354__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18358__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18358__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18358__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e39356){var e = e39356;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__39357_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39357_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__39362){
var vec__39363 = p__39362;
var k = cljs.core.nth.call(null,vec__39363,(0),null);
var v = cljs.core.nth.call(null,vec__39363,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__39364){
var vec__39365 = p__39364;
var k = cljs.core.nth.call(null,vec__39365,(0),null);
var v = cljs.core.nth.call(null,vec__39365,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__39369,p__39370){
var map__39617 = p__39369;
var map__39617__$1 = ((((!((map__39617 == null)))?((((map__39617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39617):map__39617);
var opts = map__39617__$1;
var before_jsload = cljs.core.get.call(null,map__39617__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__39617__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__39617__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__39618 = p__39370;
var map__39618__$1 = ((((!((map__39618 == null)))?((((map__39618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39618):map__39618);
var msg = map__39618__$1;
var files = cljs.core.get.call(null,map__39618__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__39618__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__39618__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21794__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21794__auto__,map__39617,map__39617__$1,opts,before_jsload,on_jsload,reload_dependents,map__39618,map__39618__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (c__21794__auto__,map__39617,map__39617__$1,opts,before_jsload,on_jsload,reload_dependents,map__39618,map__39618__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_39771){
var state_val_39772 = (state_39771[(1)]);
if((state_val_39772 === (7))){
var inst_39633 = (state_39771[(7)]);
var inst_39635 = (state_39771[(8)]);
var inst_39632 = (state_39771[(9)]);
var inst_39634 = (state_39771[(10)]);
var inst_39640 = cljs.core._nth.call(null,inst_39633,inst_39635);
var inst_39641 = figwheel.client.file_reloading.eval_body.call(null,inst_39640,opts);
var inst_39642 = (inst_39635 + (1));
var tmp39773 = inst_39633;
var tmp39774 = inst_39632;
var tmp39775 = inst_39634;
var inst_39632__$1 = tmp39774;
var inst_39633__$1 = tmp39773;
var inst_39634__$1 = tmp39775;
var inst_39635__$1 = inst_39642;
var state_39771__$1 = (function (){var statearr_39776 = state_39771;
(statearr_39776[(7)] = inst_39633__$1);

(statearr_39776[(11)] = inst_39641);

(statearr_39776[(8)] = inst_39635__$1);

(statearr_39776[(9)] = inst_39632__$1);

(statearr_39776[(10)] = inst_39634__$1);

return statearr_39776;
})();
var statearr_39777_39863 = state_39771__$1;
(statearr_39777_39863[(2)] = null);

(statearr_39777_39863[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (20))){
var inst_39675 = (state_39771[(12)]);
var inst_39683 = figwheel.client.file_reloading.sort_files.call(null,inst_39675);
var state_39771__$1 = state_39771;
var statearr_39778_39864 = state_39771__$1;
(statearr_39778_39864[(2)] = inst_39683);

(statearr_39778_39864[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (27))){
var state_39771__$1 = state_39771;
var statearr_39779_39865 = state_39771__$1;
(statearr_39779_39865[(2)] = null);

(statearr_39779_39865[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (1))){
var inst_39624 = (state_39771[(13)]);
var inst_39621 = before_jsload.call(null,files);
var inst_39622 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_39623 = (function (){return ((function (inst_39624,inst_39621,inst_39622,state_val_39772,c__21794__auto__,map__39617,map__39617__$1,opts,before_jsload,on_jsload,reload_dependents,map__39618,map__39618__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39366_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39366_SHARP_);
});
;})(inst_39624,inst_39621,inst_39622,state_val_39772,c__21794__auto__,map__39617,map__39617__$1,opts,before_jsload,on_jsload,reload_dependents,map__39618,map__39618__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39624__$1 = cljs.core.filter.call(null,inst_39623,files);
var inst_39625 = cljs.core.not_empty.call(null,inst_39624__$1);
var state_39771__$1 = (function (){var statearr_39780 = state_39771;
(statearr_39780[(14)] = inst_39621);

(statearr_39780[(13)] = inst_39624__$1);

(statearr_39780[(15)] = inst_39622);

return statearr_39780;
})();
if(cljs.core.truth_(inst_39625)){
var statearr_39781_39866 = state_39771__$1;
(statearr_39781_39866[(1)] = (2));

} else {
var statearr_39782_39867 = state_39771__$1;
(statearr_39782_39867[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (24))){
var state_39771__$1 = state_39771;
var statearr_39783_39868 = state_39771__$1;
(statearr_39783_39868[(2)] = null);

(statearr_39783_39868[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (39))){
var inst_39725 = (state_39771[(16)]);
var state_39771__$1 = state_39771;
var statearr_39784_39869 = state_39771__$1;
(statearr_39784_39869[(2)] = inst_39725);

(statearr_39784_39869[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (46))){
var inst_39766 = (state_39771[(2)]);
var state_39771__$1 = state_39771;
var statearr_39785_39870 = state_39771__$1;
(statearr_39785_39870[(2)] = inst_39766);

(statearr_39785_39870[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (4))){
var inst_39669 = (state_39771[(2)]);
var inst_39670 = cljs.core.List.EMPTY;
var inst_39671 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_39670);
var inst_39672 = (function (){return ((function (inst_39669,inst_39670,inst_39671,state_val_39772,c__21794__auto__,map__39617,map__39617__$1,opts,before_jsload,on_jsload,reload_dependents,map__39618,map__39618__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39367_SHARP_){
var and__18358__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39367_SHARP_);
if(cljs.core.truth_(and__18358__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39367_SHARP_));
} else {
return and__18358__auto__;
}
});
;})(inst_39669,inst_39670,inst_39671,state_val_39772,c__21794__auto__,map__39617,map__39617__$1,opts,before_jsload,on_jsload,reload_dependents,map__39618,map__39618__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39673 = cljs.core.filter.call(null,inst_39672,files);
var inst_39674 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_39675 = cljs.core.concat.call(null,inst_39673,inst_39674);
var state_39771__$1 = (function (){var statearr_39786 = state_39771;
(statearr_39786[(12)] = inst_39675);

(statearr_39786[(17)] = inst_39671);

(statearr_39786[(18)] = inst_39669);

return statearr_39786;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_39787_39871 = state_39771__$1;
(statearr_39787_39871[(1)] = (16));

} else {
var statearr_39788_39872 = state_39771__$1;
(statearr_39788_39872[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (15))){
var inst_39659 = (state_39771[(2)]);
var state_39771__$1 = state_39771;
var statearr_39789_39873 = state_39771__$1;
(statearr_39789_39873[(2)] = inst_39659);

(statearr_39789_39873[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (21))){
var inst_39685 = (state_39771[(19)]);
var inst_39685__$1 = (state_39771[(2)]);
var inst_39686 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_39685__$1);
var state_39771__$1 = (function (){var statearr_39790 = state_39771;
(statearr_39790[(19)] = inst_39685__$1);

return statearr_39790;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39771__$1,(22),inst_39686);
} else {
if((state_val_39772 === (31))){
var inst_39769 = (state_39771[(2)]);
var state_39771__$1 = state_39771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39771__$1,inst_39769);
} else {
if((state_val_39772 === (32))){
var inst_39725 = (state_39771[(16)]);
var inst_39730 = inst_39725.cljs$lang$protocol_mask$partition0$;
var inst_39731 = (inst_39730 & (64));
var inst_39732 = inst_39725.cljs$core$ISeq$;
var inst_39733 = (inst_39731) || (inst_39732);
var state_39771__$1 = state_39771;
if(cljs.core.truth_(inst_39733)){
var statearr_39791_39874 = state_39771__$1;
(statearr_39791_39874[(1)] = (35));

} else {
var statearr_39792_39875 = state_39771__$1;
(statearr_39792_39875[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (40))){
var inst_39746 = (state_39771[(20)]);
var inst_39745 = (state_39771[(2)]);
var inst_39746__$1 = cljs.core.get.call(null,inst_39745,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_39747 = cljs.core.get.call(null,inst_39745,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_39748 = cljs.core.not_empty.call(null,inst_39746__$1);
var state_39771__$1 = (function (){var statearr_39793 = state_39771;
(statearr_39793[(21)] = inst_39747);

(statearr_39793[(20)] = inst_39746__$1);

return statearr_39793;
})();
if(cljs.core.truth_(inst_39748)){
var statearr_39794_39876 = state_39771__$1;
(statearr_39794_39876[(1)] = (41));

} else {
var statearr_39795_39877 = state_39771__$1;
(statearr_39795_39877[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (33))){
var state_39771__$1 = state_39771;
var statearr_39796_39878 = state_39771__$1;
(statearr_39796_39878[(2)] = false);

(statearr_39796_39878[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (13))){
var inst_39645 = (state_39771[(22)]);
var inst_39649 = cljs.core.chunk_first.call(null,inst_39645);
var inst_39650 = cljs.core.chunk_rest.call(null,inst_39645);
var inst_39651 = cljs.core.count.call(null,inst_39649);
var inst_39632 = inst_39650;
var inst_39633 = inst_39649;
var inst_39634 = inst_39651;
var inst_39635 = (0);
var state_39771__$1 = (function (){var statearr_39797 = state_39771;
(statearr_39797[(7)] = inst_39633);

(statearr_39797[(8)] = inst_39635);

(statearr_39797[(9)] = inst_39632);

(statearr_39797[(10)] = inst_39634);

return statearr_39797;
})();
var statearr_39798_39879 = state_39771__$1;
(statearr_39798_39879[(2)] = null);

(statearr_39798_39879[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (22))){
var inst_39688 = (state_39771[(23)]);
var inst_39685 = (state_39771[(19)]);
var inst_39693 = (state_39771[(24)]);
var inst_39689 = (state_39771[(25)]);
var inst_39688__$1 = (state_39771[(2)]);
var inst_39689__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39688__$1);
var inst_39690 = (function (){var all_files = inst_39685;
var res_SINGLEQUOTE_ = inst_39688__$1;
var res = inst_39689__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_39688,inst_39685,inst_39693,inst_39689,inst_39688__$1,inst_39689__$1,state_val_39772,c__21794__auto__,map__39617,map__39617__$1,opts,before_jsload,on_jsload,reload_dependents,map__39618,map__39618__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39368_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__39368_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_39688,inst_39685,inst_39693,inst_39689,inst_39688__$1,inst_39689__$1,state_val_39772,c__21794__auto__,map__39617,map__39617__$1,opts,before_jsload,on_jsload,reload_dependents,map__39618,map__39618__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39691 = cljs.core.filter.call(null,inst_39690,inst_39688__$1);
var inst_39692 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_39693__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39692);
var inst_39694 = cljs.core.not_empty.call(null,inst_39693__$1);
var state_39771__$1 = (function (){var statearr_39799 = state_39771;
(statearr_39799[(26)] = inst_39691);

(statearr_39799[(23)] = inst_39688__$1);

(statearr_39799[(24)] = inst_39693__$1);

(statearr_39799[(25)] = inst_39689__$1);

return statearr_39799;
})();
if(cljs.core.truth_(inst_39694)){
var statearr_39800_39880 = state_39771__$1;
(statearr_39800_39880[(1)] = (23));

} else {
var statearr_39801_39881 = state_39771__$1;
(statearr_39801_39881[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (36))){
var state_39771__$1 = state_39771;
var statearr_39802_39882 = state_39771__$1;
(statearr_39802_39882[(2)] = false);

(statearr_39802_39882[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (41))){
var inst_39746 = (state_39771[(20)]);
var inst_39750 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_39751 = cljs.core.map.call(null,inst_39750,inst_39746);
var inst_39752 = cljs.core.pr_str.call(null,inst_39751);
var inst_39753 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_39752)].join('');
var inst_39754 = figwheel.client.utils.log.call(null,inst_39753);
var state_39771__$1 = state_39771;
var statearr_39803_39883 = state_39771__$1;
(statearr_39803_39883[(2)] = inst_39754);

(statearr_39803_39883[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (43))){
var inst_39747 = (state_39771[(21)]);
var inst_39757 = (state_39771[(2)]);
var inst_39758 = cljs.core.not_empty.call(null,inst_39747);
var state_39771__$1 = (function (){var statearr_39804 = state_39771;
(statearr_39804[(27)] = inst_39757);

return statearr_39804;
})();
if(cljs.core.truth_(inst_39758)){
var statearr_39805_39884 = state_39771__$1;
(statearr_39805_39884[(1)] = (44));

} else {
var statearr_39806_39885 = state_39771__$1;
(statearr_39806_39885[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (29))){
var inst_39691 = (state_39771[(26)]);
var inst_39725 = (state_39771[(16)]);
var inst_39688 = (state_39771[(23)]);
var inst_39685 = (state_39771[(19)]);
var inst_39693 = (state_39771[(24)]);
var inst_39689 = (state_39771[(25)]);
var inst_39721 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_39724 = (function (){var all_files = inst_39685;
var res_SINGLEQUOTE_ = inst_39688;
var res = inst_39689;
var files_not_loaded = inst_39691;
var dependencies_that_loaded = inst_39693;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39691,inst_39725,inst_39688,inst_39685,inst_39693,inst_39689,inst_39721,state_val_39772,c__21794__auto__,map__39617,map__39617__$1,opts,before_jsload,on_jsload,reload_dependents,map__39618,map__39618__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39723){
var map__39807 = p__39723;
var map__39807__$1 = ((((!((map__39807 == null)))?((((map__39807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39807):map__39807);
var namespace = cljs.core.get.call(null,map__39807__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39691,inst_39725,inst_39688,inst_39685,inst_39693,inst_39689,inst_39721,state_val_39772,c__21794__auto__,map__39617,map__39617__$1,opts,before_jsload,on_jsload,reload_dependents,map__39618,map__39618__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39725__$1 = cljs.core.group_by.call(null,inst_39724,inst_39691);
var inst_39727 = (inst_39725__$1 == null);
var inst_39728 = cljs.core.not.call(null,inst_39727);
var state_39771__$1 = (function (){var statearr_39809 = state_39771;
(statearr_39809[(16)] = inst_39725__$1);

(statearr_39809[(28)] = inst_39721);

return statearr_39809;
})();
if(inst_39728){
var statearr_39810_39886 = state_39771__$1;
(statearr_39810_39886[(1)] = (32));

} else {
var statearr_39811_39887 = state_39771__$1;
(statearr_39811_39887[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (44))){
var inst_39747 = (state_39771[(21)]);
var inst_39760 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39747);
var inst_39761 = cljs.core.pr_str.call(null,inst_39760);
var inst_39762 = [cljs.core.str("not required: "),cljs.core.str(inst_39761)].join('');
var inst_39763 = figwheel.client.utils.log.call(null,inst_39762);
var state_39771__$1 = state_39771;
var statearr_39812_39888 = state_39771__$1;
(statearr_39812_39888[(2)] = inst_39763);

(statearr_39812_39888[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (6))){
var inst_39666 = (state_39771[(2)]);
var state_39771__$1 = state_39771;
var statearr_39813_39889 = state_39771__$1;
(statearr_39813_39889[(2)] = inst_39666);

(statearr_39813_39889[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (28))){
var inst_39691 = (state_39771[(26)]);
var inst_39718 = (state_39771[(2)]);
var inst_39719 = cljs.core.not_empty.call(null,inst_39691);
var state_39771__$1 = (function (){var statearr_39814 = state_39771;
(statearr_39814[(29)] = inst_39718);

return statearr_39814;
})();
if(cljs.core.truth_(inst_39719)){
var statearr_39815_39890 = state_39771__$1;
(statearr_39815_39890[(1)] = (29));

} else {
var statearr_39816_39891 = state_39771__$1;
(statearr_39816_39891[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (25))){
var inst_39689 = (state_39771[(25)]);
var inst_39705 = (state_39771[(2)]);
var inst_39706 = cljs.core.not_empty.call(null,inst_39689);
var state_39771__$1 = (function (){var statearr_39817 = state_39771;
(statearr_39817[(30)] = inst_39705);

return statearr_39817;
})();
if(cljs.core.truth_(inst_39706)){
var statearr_39818_39892 = state_39771__$1;
(statearr_39818_39892[(1)] = (26));

} else {
var statearr_39819_39893 = state_39771__$1;
(statearr_39819_39893[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (34))){
var inst_39740 = (state_39771[(2)]);
var state_39771__$1 = state_39771;
if(cljs.core.truth_(inst_39740)){
var statearr_39820_39894 = state_39771__$1;
(statearr_39820_39894[(1)] = (38));

} else {
var statearr_39821_39895 = state_39771__$1;
(statearr_39821_39895[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (17))){
var state_39771__$1 = state_39771;
var statearr_39822_39896 = state_39771__$1;
(statearr_39822_39896[(2)] = recompile_dependents);

(statearr_39822_39896[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (3))){
var state_39771__$1 = state_39771;
var statearr_39823_39897 = state_39771__$1;
(statearr_39823_39897[(2)] = null);

(statearr_39823_39897[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (12))){
var inst_39662 = (state_39771[(2)]);
var state_39771__$1 = state_39771;
var statearr_39824_39898 = state_39771__$1;
(statearr_39824_39898[(2)] = inst_39662);

(statearr_39824_39898[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (2))){
var inst_39624 = (state_39771[(13)]);
var inst_39631 = cljs.core.seq.call(null,inst_39624);
var inst_39632 = inst_39631;
var inst_39633 = null;
var inst_39634 = (0);
var inst_39635 = (0);
var state_39771__$1 = (function (){var statearr_39825 = state_39771;
(statearr_39825[(7)] = inst_39633);

(statearr_39825[(8)] = inst_39635);

(statearr_39825[(9)] = inst_39632);

(statearr_39825[(10)] = inst_39634);

return statearr_39825;
})();
var statearr_39826_39899 = state_39771__$1;
(statearr_39826_39899[(2)] = null);

(statearr_39826_39899[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (23))){
var inst_39691 = (state_39771[(26)]);
var inst_39688 = (state_39771[(23)]);
var inst_39685 = (state_39771[(19)]);
var inst_39693 = (state_39771[(24)]);
var inst_39689 = (state_39771[(25)]);
var inst_39696 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_39698 = (function (){var all_files = inst_39685;
var res_SINGLEQUOTE_ = inst_39688;
var res = inst_39689;
var files_not_loaded = inst_39691;
var dependencies_that_loaded = inst_39693;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39691,inst_39688,inst_39685,inst_39693,inst_39689,inst_39696,state_val_39772,c__21794__auto__,map__39617,map__39617__$1,opts,before_jsload,on_jsload,reload_dependents,map__39618,map__39618__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39697){
var map__39827 = p__39697;
var map__39827__$1 = ((((!((map__39827 == null)))?((((map__39827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39827):map__39827);
var request_url = cljs.core.get.call(null,map__39827__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39691,inst_39688,inst_39685,inst_39693,inst_39689,inst_39696,state_val_39772,c__21794__auto__,map__39617,map__39617__$1,opts,before_jsload,on_jsload,reload_dependents,map__39618,map__39618__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39699 = cljs.core.reverse.call(null,inst_39693);
var inst_39700 = cljs.core.map.call(null,inst_39698,inst_39699);
var inst_39701 = cljs.core.pr_str.call(null,inst_39700);
var inst_39702 = figwheel.client.utils.log.call(null,inst_39701);
var state_39771__$1 = (function (){var statearr_39829 = state_39771;
(statearr_39829[(31)] = inst_39696);

return statearr_39829;
})();
var statearr_39830_39900 = state_39771__$1;
(statearr_39830_39900[(2)] = inst_39702);

(statearr_39830_39900[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (35))){
var state_39771__$1 = state_39771;
var statearr_39831_39901 = state_39771__$1;
(statearr_39831_39901[(2)] = true);

(statearr_39831_39901[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (19))){
var inst_39675 = (state_39771[(12)]);
var inst_39681 = figwheel.client.file_reloading.expand_files.call(null,inst_39675);
var state_39771__$1 = state_39771;
var statearr_39832_39902 = state_39771__$1;
(statearr_39832_39902[(2)] = inst_39681);

(statearr_39832_39902[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (11))){
var state_39771__$1 = state_39771;
var statearr_39833_39903 = state_39771__$1;
(statearr_39833_39903[(2)] = null);

(statearr_39833_39903[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (9))){
var inst_39664 = (state_39771[(2)]);
var state_39771__$1 = state_39771;
var statearr_39834_39904 = state_39771__$1;
(statearr_39834_39904[(2)] = inst_39664);

(statearr_39834_39904[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (5))){
var inst_39635 = (state_39771[(8)]);
var inst_39634 = (state_39771[(10)]);
var inst_39637 = (inst_39635 < inst_39634);
var inst_39638 = inst_39637;
var state_39771__$1 = state_39771;
if(cljs.core.truth_(inst_39638)){
var statearr_39835_39905 = state_39771__$1;
(statearr_39835_39905[(1)] = (7));

} else {
var statearr_39836_39906 = state_39771__$1;
(statearr_39836_39906[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (14))){
var inst_39645 = (state_39771[(22)]);
var inst_39654 = cljs.core.first.call(null,inst_39645);
var inst_39655 = figwheel.client.file_reloading.eval_body.call(null,inst_39654,opts);
var inst_39656 = cljs.core.next.call(null,inst_39645);
var inst_39632 = inst_39656;
var inst_39633 = null;
var inst_39634 = (0);
var inst_39635 = (0);
var state_39771__$1 = (function (){var statearr_39837 = state_39771;
(statearr_39837[(7)] = inst_39633);

(statearr_39837[(32)] = inst_39655);

(statearr_39837[(8)] = inst_39635);

(statearr_39837[(9)] = inst_39632);

(statearr_39837[(10)] = inst_39634);

return statearr_39837;
})();
var statearr_39838_39907 = state_39771__$1;
(statearr_39838_39907[(2)] = null);

(statearr_39838_39907[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (45))){
var state_39771__$1 = state_39771;
var statearr_39839_39908 = state_39771__$1;
(statearr_39839_39908[(2)] = null);

(statearr_39839_39908[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (26))){
var inst_39691 = (state_39771[(26)]);
var inst_39688 = (state_39771[(23)]);
var inst_39685 = (state_39771[(19)]);
var inst_39693 = (state_39771[(24)]);
var inst_39689 = (state_39771[(25)]);
var inst_39708 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_39710 = (function (){var all_files = inst_39685;
var res_SINGLEQUOTE_ = inst_39688;
var res = inst_39689;
var files_not_loaded = inst_39691;
var dependencies_that_loaded = inst_39693;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39691,inst_39688,inst_39685,inst_39693,inst_39689,inst_39708,state_val_39772,c__21794__auto__,map__39617,map__39617__$1,opts,before_jsload,on_jsload,reload_dependents,map__39618,map__39618__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39709){
var map__39840 = p__39709;
var map__39840__$1 = ((((!((map__39840 == null)))?((((map__39840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39840):map__39840);
var namespace = cljs.core.get.call(null,map__39840__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__39840__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39691,inst_39688,inst_39685,inst_39693,inst_39689,inst_39708,state_val_39772,c__21794__auto__,map__39617,map__39617__$1,opts,before_jsload,on_jsload,reload_dependents,map__39618,map__39618__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39711 = cljs.core.map.call(null,inst_39710,inst_39689);
var inst_39712 = cljs.core.pr_str.call(null,inst_39711);
var inst_39713 = figwheel.client.utils.log.call(null,inst_39712);
var inst_39714 = (function (){var all_files = inst_39685;
var res_SINGLEQUOTE_ = inst_39688;
var res = inst_39689;
var files_not_loaded = inst_39691;
var dependencies_that_loaded = inst_39693;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39691,inst_39688,inst_39685,inst_39693,inst_39689,inst_39708,inst_39710,inst_39711,inst_39712,inst_39713,state_val_39772,c__21794__auto__,map__39617,map__39617__$1,opts,before_jsload,on_jsload,reload_dependents,map__39618,map__39618__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39691,inst_39688,inst_39685,inst_39693,inst_39689,inst_39708,inst_39710,inst_39711,inst_39712,inst_39713,state_val_39772,c__21794__auto__,map__39617,map__39617__$1,opts,before_jsload,on_jsload,reload_dependents,map__39618,map__39618__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39715 = setTimeout(inst_39714,(10));
var state_39771__$1 = (function (){var statearr_39842 = state_39771;
(statearr_39842[(33)] = inst_39708);

(statearr_39842[(34)] = inst_39713);

return statearr_39842;
})();
var statearr_39843_39909 = state_39771__$1;
(statearr_39843_39909[(2)] = inst_39715);

(statearr_39843_39909[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (16))){
var state_39771__$1 = state_39771;
var statearr_39844_39910 = state_39771__$1;
(statearr_39844_39910[(2)] = reload_dependents);

(statearr_39844_39910[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (38))){
var inst_39725 = (state_39771[(16)]);
var inst_39742 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39725);
var state_39771__$1 = state_39771;
var statearr_39845_39911 = state_39771__$1;
(statearr_39845_39911[(2)] = inst_39742);

(statearr_39845_39911[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (30))){
var state_39771__$1 = state_39771;
var statearr_39846_39912 = state_39771__$1;
(statearr_39846_39912[(2)] = null);

(statearr_39846_39912[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (10))){
var inst_39645 = (state_39771[(22)]);
var inst_39647 = cljs.core.chunked_seq_QMARK_.call(null,inst_39645);
var state_39771__$1 = state_39771;
if(inst_39647){
var statearr_39847_39913 = state_39771__$1;
(statearr_39847_39913[(1)] = (13));

} else {
var statearr_39848_39914 = state_39771__$1;
(statearr_39848_39914[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (18))){
var inst_39679 = (state_39771[(2)]);
var state_39771__$1 = state_39771;
if(cljs.core.truth_(inst_39679)){
var statearr_39849_39915 = state_39771__$1;
(statearr_39849_39915[(1)] = (19));

} else {
var statearr_39850_39916 = state_39771__$1;
(statearr_39850_39916[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (42))){
var state_39771__$1 = state_39771;
var statearr_39851_39917 = state_39771__$1;
(statearr_39851_39917[(2)] = null);

(statearr_39851_39917[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (37))){
var inst_39737 = (state_39771[(2)]);
var state_39771__$1 = state_39771;
var statearr_39852_39918 = state_39771__$1;
(statearr_39852_39918[(2)] = inst_39737);

(statearr_39852_39918[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39772 === (8))){
var inst_39645 = (state_39771[(22)]);
var inst_39632 = (state_39771[(9)]);
var inst_39645__$1 = cljs.core.seq.call(null,inst_39632);
var state_39771__$1 = (function (){var statearr_39853 = state_39771;
(statearr_39853[(22)] = inst_39645__$1);

return statearr_39853;
})();
if(inst_39645__$1){
var statearr_39854_39919 = state_39771__$1;
(statearr_39854_39919[(1)] = (10));

} else {
var statearr_39855_39920 = state_39771__$1;
(statearr_39855_39920[(1)] = (11));

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
}
}
}
});})(c__21794__auto__,map__39617,map__39617__$1,opts,before_jsload,on_jsload,reload_dependents,map__39618,map__39618__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21682__auto__,c__21794__auto__,map__39617,map__39617__$1,opts,before_jsload,on_jsload,reload_dependents,map__39618,map__39618__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21683__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21683__auto____0 = (function (){
var statearr_39859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39859[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21683__auto__);

(statearr_39859[(1)] = (1));

return statearr_39859;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21683__auto____1 = (function (state_39771){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_39771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e39860){if((e39860 instanceof Object)){
var ex__21686__auto__ = e39860;
var statearr_39861_39921 = state_39771;
(statearr_39861_39921[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39922 = state_39771;
state_39771 = G__39922;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21683__auto__ = function(state_39771){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21683__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21683__auto____1.call(this,state_39771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21683__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21683__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21683__auto__;
})()
;})(switch__21682__auto__,c__21794__auto__,map__39617,map__39617__$1,opts,before_jsload,on_jsload,reload_dependents,map__39618,map__39618__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21796__auto__ = (function (){var statearr_39862 = f__21795__auto__.call(null);
(statearr_39862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto__);

return statearr_39862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(c__21794__auto__,map__39617,map__39617__$1,opts,before_jsload,on_jsload,reload_dependents,map__39618,map__39618__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21794__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__39925,link){
var map__39928 = p__39925;
var map__39928__$1 = ((((!((map__39928 == null)))?((((map__39928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39928):map__39928);
var file = cljs.core.get.call(null,map__39928__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__39928,map__39928__$1,file){
return (function (p1__39923_SHARP_,p2__39924_SHARP_){
if(cljs.core._EQ_.call(null,p1__39923_SHARP_,p2__39924_SHARP_)){
return p1__39923_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__39928,map__39928__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__39934){
var map__39935 = p__39934;
var map__39935__$1 = ((((!((map__39935 == null)))?((((map__39935.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39935.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39935):map__39935);
var match_length = cljs.core.get.call(null,map__39935__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__39935__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__39930_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__39930_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
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
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args39937 = [];
var len__19428__auto___39940 = arguments.length;
var i__19429__auto___39941 = (0);
while(true){
if((i__19429__auto___39941 < len__19428__auto___39940)){
args39937.push((arguments[i__19429__auto___39941]));

var G__39942 = (i__19429__auto___39941 + (1));
i__19429__auto___39941 = G__39942;
continue;
} else {
}
break;
}

var G__39939 = args39937.length;
switch (G__39939) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39937.length)].join('')));

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
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__39944_SHARP_,p2__39945_SHARP_){
return cljs.core.assoc.call(null,p1__39944_SHARP_,cljs.core.get.call(null,p2__39945_SHARP_,key),p2__39945_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__39946){
var map__39949 = p__39946;
var map__39949__$1 = ((((!((map__39949 == null)))?((((map__39949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39949):map__39949);
var f_data = map__39949__$1;
var file = cljs.core.get.call(null,map__39949__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__39951,files_msg){
var map__39958 = p__39951;
var map__39958__$1 = ((((!((map__39958 == null)))?((((map__39958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39958):map__39958);
var opts = map__39958__$1;
var on_cssload = cljs.core.get.call(null,map__39958__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__39960_39964 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__39961_39965 = null;
var count__39962_39966 = (0);
var i__39963_39967 = (0);
while(true){
if((i__39963_39967 < count__39962_39966)){
var f_39968 = cljs.core._nth.call(null,chunk__39961_39965,i__39963_39967);
figwheel.client.file_reloading.reload_css_file.call(null,f_39968);

var G__39969 = seq__39960_39964;
var G__39970 = chunk__39961_39965;
var G__39971 = count__39962_39966;
var G__39972 = (i__39963_39967 + (1));
seq__39960_39964 = G__39969;
chunk__39961_39965 = G__39970;
count__39962_39966 = G__39971;
i__39963_39967 = G__39972;
continue;
} else {
var temp__4657__auto___39973 = cljs.core.seq.call(null,seq__39960_39964);
if(temp__4657__auto___39973){
var seq__39960_39974__$1 = temp__4657__auto___39973;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39960_39974__$1)){
var c__19173__auto___39975 = cljs.core.chunk_first.call(null,seq__39960_39974__$1);
var G__39976 = cljs.core.chunk_rest.call(null,seq__39960_39974__$1);
var G__39977 = c__19173__auto___39975;
var G__39978 = cljs.core.count.call(null,c__19173__auto___39975);
var G__39979 = (0);
seq__39960_39964 = G__39976;
chunk__39961_39965 = G__39977;
count__39962_39966 = G__39978;
i__39963_39967 = G__39979;
continue;
} else {
var f_39980 = cljs.core.first.call(null,seq__39960_39974__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_39980);

var G__39981 = cljs.core.next.call(null,seq__39960_39974__$1);
var G__39982 = null;
var G__39983 = (0);
var G__39984 = (0);
seq__39960_39964 = G__39981;
chunk__39961_39965 = G__39982;
count__39962_39966 = G__39983;
i__39963_39967 = G__39984;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__39958,map__39958__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__39958,map__39958__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1454263148601