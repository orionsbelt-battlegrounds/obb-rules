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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__45095_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__45095_SHARP_));
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
var seq__45100 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__45101 = null;
var count__45102 = (0);
var i__45103 = (0);
while(true){
if((i__45103 < count__45102)){
var n = cljs.core._nth.call(null,chunk__45101,i__45103);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__45104 = seq__45100;
var G__45105 = chunk__45101;
var G__45106 = count__45102;
var G__45107 = (i__45103 + (1));
seq__45100 = G__45104;
chunk__45101 = G__45105;
count__45102 = G__45106;
i__45103 = G__45107;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45100);
if(temp__4657__auto__){
var seq__45100__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45100__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__45100__$1);
var G__45108 = cljs.core.chunk_rest.call(null,seq__45100__$1);
var G__45109 = c__19173__auto__;
var G__45110 = cljs.core.count.call(null,c__19173__auto__);
var G__45111 = (0);
seq__45100 = G__45108;
chunk__45101 = G__45109;
count__45102 = G__45110;
i__45103 = G__45111;
continue;
} else {
var n = cljs.core.first.call(null,seq__45100__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__45112 = cljs.core.next.call(null,seq__45100__$1);
var G__45113 = null;
var G__45114 = (0);
var G__45115 = (0);
seq__45100 = G__45112;
chunk__45101 = G__45113;
count__45102 = G__45114;
i__45103 = G__45115;
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

var seq__45154_45161 = cljs.core.seq.call(null,deps);
var chunk__45155_45162 = null;
var count__45156_45163 = (0);
var i__45157_45164 = (0);
while(true){
if((i__45157_45164 < count__45156_45163)){
var dep_45165 = cljs.core._nth.call(null,chunk__45155_45162,i__45157_45164);
topo_sort_helper_STAR_.call(null,dep_45165,(depth + (1)),state);

var G__45166 = seq__45154_45161;
var G__45167 = chunk__45155_45162;
var G__45168 = count__45156_45163;
var G__45169 = (i__45157_45164 + (1));
seq__45154_45161 = G__45166;
chunk__45155_45162 = G__45167;
count__45156_45163 = G__45168;
i__45157_45164 = G__45169;
continue;
} else {
var temp__4657__auto___45170 = cljs.core.seq.call(null,seq__45154_45161);
if(temp__4657__auto___45170){
var seq__45154_45171__$1 = temp__4657__auto___45170;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45154_45171__$1)){
var c__19173__auto___45172 = cljs.core.chunk_first.call(null,seq__45154_45171__$1);
var G__45173 = cljs.core.chunk_rest.call(null,seq__45154_45171__$1);
var G__45174 = c__19173__auto___45172;
var G__45175 = cljs.core.count.call(null,c__19173__auto___45172);
var G__45176 = (0);
seq__45154_45161 = G__45173;
chunk__45155_45162 = G__45174;
count__45156_45163 = G__45175;
i__45157_45164 = G__45176;
continue;
} else {
var dep_45177 = cljs.core.first.call(null,seq__45154_45171__$1);
topo_sort_helper_STAR_.call(null,dep_45177,(depth + (1)),state);

var G__45178 = cljs.core.next.call(null,seq__45154_45171__$1);
var G__45179 = null;
var G__45180 = (0);
var G__45181 = (0);
seq__45154_45161 = G__45178;
chunk__45155_45162 = G__45179;
count__45156_45163 = G__45180;
i__45157_45164 = G__45181;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__45158){
var vec__45160 = p__45158;
var x = cljs.core.nth.call(null,vec__45160,(0),null);
var xs = cljs.core.nthnext.call(null,vec__45160,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__45160,x,xs,get_deps__$1){
return (function (p1__45116_SHARP_){
return clojure.set.difference.call(null,p1__45116_SHARP_,x);
});})(vec__45160,x,xs,get_deps__$1))
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
var seq__45194 = cljs.core.seq.call(null,provides);
var chunk__45195 = null;
var count__45196 = (0);
var i__45197 = (0);
while(true){
if((i__45197 < count__45196)){
var prov = cljs.core._nth.call(null,chunk__45195,i__45197);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__45198_45206 = cljs.core.seq.call(null,requires);
var chunk__45199_45207 = null;
var count__45200_45208 = (0);
var i__45201_45209 = (0);
while(true){
if((i__45201_45209 < count__45200_45208)){
var req_45210 = cljs.core._nth.call(null,chunk__45199_45207,i__45201_45209);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45210,prov);

var G__45211 = seq__45198_45206;
var G__45212 = chunk__45199_45207;
var G__45213 = count__45200_45208;
var G__45214 = (i__45201_45209 + (1));
seq__45198_45206 = G__45211;
chunk__45199_45207 = G__45212;
count__45200_45208 = G__45213;
i__45201_45209 = G__45214;
continue;
} else {
var temp__4657__auto___45215 = cljs.core.seq.call(null,seq__45198_45206);
if(temp__4657__auto___45215){
var seq__45198_45216__$1 = temp__4657__auto___45215;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45198_45216__$1)){
var c__19173__auto___45217 = cljs.core.chunk_first.call(null,seq__45198_45216__$1);
var G__45218 = cljs.core.chunk_rest.call(null,seq__45198_45216__$1);
var G__45219 = c__19173__auto___45217;
var G__45220 = cljs.core.count.call(null,c__19173__auto___45217);
var G__45221 = (0);
seq__45198_45206 = G__45218;
chunk__45199_45207 = G__45219;
count__45200_45208 = G__45220;
i__45201_45209 = G__45221;
continue;
} else {
var req_45222 = cljs.core.first.call(null,seq__45198_45216__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45222,prov);

var G__45223 = cljs.core.next.call(null,seq__45198_45216__$1);
var G__45224 = null;
var G__45225 = (0);
var G__45226 = (0);
seq__45198_45206 = G__45223;
chunk__45199_45207 = G__45224;
count__45200_45208 = G__45225;
i__45201_45209 = G__45226;
continue;
}
} else {
}
}
break;
}

var G__45227 = seq__45194;
var G__45228 = chunk__45195;
var G__45229 = count__45196;
var G__45230 = (i__45197 + (1));
seq__45194 = G__45227;
chunk__45195 = G__45228;
count__45196 = G__45229;
i__45197 = G__45230;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45194);
if(temp__4657__auto__){
var seq__45194__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45194__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__45194__$1);
var G__45231 = cljs.core.chunk_rest.call(null,seq__45194__$1);
var G__45232 = c__19173__auto__;
var G__45233 = cljs.core.count.call(null,c__19173__auto__);
var G__45234 = (0);
seq__45194 = G__45231;
chunk__45195 = G__45232;
count__45196 = G__45233;
i__45197 = G__45234;
continue;
} else {
var prov = cljs.core.first.call(null,seq__45194__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__45202_45235 = cljs.core.seq.call(null,requires);
var chunk__45203_45236 = null;
var count__45204_45237 = (0);
var i__45205_45238 = (0);
while(true){
if((i__45205_45238 < count__45204_45237)){
var req_45239 = cljs.core._nth.call(null,chunk__45203_45236,i__45205_45238);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45239,prov);

var G__45240 = seq__45202_45235;
var G__45241 = chunk__45203_45236;
var G__45242 = count__45204_45237;
var G__45243 = (i__45205_45238 + (1));
seq__45202_45235 = G__45240;
chunk__45203_45236 = G__45241;
count__45204_45237 = G__45242;
i__45205_45238 = G__45243;
continue;
} else {
var temp__4657__auto___45244__$1 = cljs.core.seq.call(null,seq__45202_45235);
if(temp__4657__auto___45244__$1){
var seq__45202_45245__$1 = temp__4657__auto___45244__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45202_45245__$1)){
var c__19173__auto___45246 = cljs.core.chunk_first.call(null,seq__45202_45245__$1);
var G__45247 = cljs.core.chunk_rest.call(null,seq__45202_45245__$1);
var G__45248 = c__19173__auto___45246;
var G__45249 = cljs.core.count.call(null,c__19173__auto___45246);
var G__45250 = (0);
seq__45202_45235 = G__45247;
chunk__45203_45236 = G__45248;
count__45204_45237 = G__45249;
i__45205_45238 = G__45250;
continue;
} else {
var req_45251 = cljs.core.first.call(null,seq__45202_45245__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45251,prov);

var G__45252 = cljs.core.next.call(null,seq__45202_45245__$1);
var G__45253 = null;
var G__45254 = (0);
var G__45255 = (0);
seq__45202_45235 = G__45252;
chunk__45203_45236 = G__45253;
count__45204_45237 = G__45254;
i__45205_45238 = G__45255;
continue;
}
} else {
}
}
break;
}

var G__45256 = cljs.core.next.call(null,seq__45194__$1);
var G__45257 = null;
var G__45258 = (0);
var G__45259 = (0);
seq__45194 = G__45256;
chunk__45195 = G__45257;
count__45196 = G__45258;
i__45197 = G__45259;
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
var seq__45264_45268 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__45265_45269 = null;
var count__45266_45270 = (0);
var i__45267_45271 = (0);
while(true){
if((i__45267_45271 < count__45266_45270)){
var ns_45272 = cljs.core._nth.call(null,chunk__45265_45269,i__45267_45271);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_45272);

var G__45273 = seq__45264_45268;
var G__45274 = chunk__45265_45269;
var G__45275 = count__45266_45270;
var G__45276 = (i__45267_45271 + (1));
seq__45264_45268 = G__45273;
chunk__45265_45269 = G__45274;
count__45266_45270 = G__45275;
i__45267_45271 = G__45276;
continue;
} else {
var temp__4657__auto___45277 = cljs.core.seq.call(null,seq__45264_45268);
if(temp__4657__auto___45277){
var seq__45264_45278__$1 = temp__4657__auto___45277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45264_45278__$1)){
var c__19173__auto___45279 = cljs.core.chunk_first.call(null,seq__45264_45278__$1);
var G__45280 = cljs.core.chunk_rest.call(null,seq__45264_45278__$1);
var G__45281 = c__19173__auto___45279;
var G__45282 = cljs.core.count.call(null,c__19173__auto___45279);
var G__45283 = (0);
seq__45264_45268 = G__45280;
chunk__45265_45269 = G__45281;
count__45266_45270 = G__45282;
i__45267_45271 = G__45283;
continue;
} else {
var ns_45284 = cljs.core.first.call(null,seq__45264_45278__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_45284);

var G__45285 = cljs.core.next.call(null,seq__45264_45278__$1);
var G__45286 = null;
var G__45287 = (0);
var G__45288 = (0);
seq__45264_45268 = G__45285;
chunk__45265_45269 = G__45286;
count__45266_45270 = G__45287;
i__45267_45271 = G__45288;
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
var G__45289__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__45289 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45290__i = 0, G__45290__a = new Array(arguments.length -  0);
while (G__45290__i < G__45290__a.length) {G__45290__a[G__45290__i] = arguments[G__45290__i + 0]; ++G__45290__i;}
  args = new cljs.core.IndexedSeq(G__45290__a,0);
} 
return G__45289__delegate.call(this,args);};
G__45289.cljs$lang$maxFixedArity = 0;
G__45289.cljs$lang$applyTo = (function (arglist__45291){
var args = cljs.core.seq(arglist__45291);
return G__45289__delegate(args);
});
G__45289.cljs$core$IFn$_invoke$arity$variadic = G__45289__delegate;
return G__45289;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__45293 = cljs.core._EQ_;
var expr__45294 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__45293.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__45294))){
var path_parts = ((function (pred__45293,expr__45294){
return (function (p1__45292_SHARP_){
return clojure.string.split.call(null,p1__45292_SHARP_,/[\/\\]/);
});})(pred__45293,expr__45294))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__45293,expr__45294){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e45296){if((e45296 instanceof Error)){
var e = e45296;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e45296;

}
}})());
});
;})(path_parts,sep,root,pred__45293,expr__45294))
} else {
if(cljs.core.truth_(pred__45293.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__45294))){
return ((function (pred__45293,expr__45294){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__45293,expr__45294){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__45293,expr__45294))
);

return deferred.addErrback(((function (deferred,pred__45293,expr__45294){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__45293,expr__45294))
);
});
;})(pred__45293,expr__45294))
} else {
return ((function (pred__45293,expr__45294){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__45293,expr__45294))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__45297,callback){
var map__45300 = p__45297;
var map__45300__$1 = ((((!((map__45300 == null)))?((((map__45300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45300):map__45300);
var file_msg = map__45300__$1;
var request_url = cljs.core.get.call(null,map__45300__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__45300,map__45300__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__45300,map__45300__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__21866__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21866__auto__){
return (function (){
var f__21867__auto__ = (function (){var switch__21754__auto__ = ((function (c__21866__auto__){
return (function (state_45324){
var state_val_45325 = (state_45324[(1)]);
if((state_val_45325 === (7))){
var inst_45320 = (state_45324[(2)]);
var state_45324__$1 = state_45324;
var statearr_45326_45346 = state_45324__$1;
(statearr_45326_45346[(2)] = inst_45320);

(statearr_45326_45346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45325 === (1))){
var state_45324__$1 = state_45324;
var statearr_45327_45347 = state_45324__$1;
(statearr_45327_45347[(2)] = null);

(statearr_45327_45347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45325 === (4))){
var inst_45304 = (state_45324[(7)]);
var inst_45304__$1 = (state_45324[(2)]);
var state_45324__$1 = (function (){var statearr_45328 = state_45324;
(statearr_45328[(7)] = inst_45304__$1);

return statearr_45328;
})();
if(cljs.core.truth_(inst_45304__$1)){
var statearr_45329_45348 = state_45324__$1;
(statearr_45329_45348[(1)] = (5));

} else {
var statearr_45330_45349 = state_45324__$1;
(statearr_45330_45349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45325 === (6))){
var state_45324__$1 = state_45324;
var statearr_45331_45350 = state_45324__$1;
(statearr_45331_45350[(2)] = null);

(statearr_45331_45350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45325 === (3))){
var inst_45322 = (state_45324[(2)]);
var state_45324__$1 = state_45324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45324__$1,inst_45322);
} else {
if((state_val_45325 === (2))){
var state_45324__$1 = state_45324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45324__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_45325 === (11))){
var inst_45316 = (state_45324[(2)]);
var state_45324__$1 = (function (){var statearr_45332 = state_45324;
(statearr_45332[(8)] = inst_45316);

return statearr_45332;
})();
var statearr_45333_45351 = state_45324__$1;
(statearr_45333_45351[(2)] = null);

(statearr_45333_45351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45325 === (9))){
var inst_45308 = (state_45324[(9)]);
var inst_45310 = (state_45324[(10)]);
var inst_45312 = inst_45310.call(null,inst_45308);
var state_45324__$1 = state_45324;
var statearr_45334_45352 = state_45324__$1;
(statearr_45334_45352[(2)] = inst_45312);

(statearr_45334_45352[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45325 === (5))){
var inst_45304 = (state_45324[(7)]);
var inst_45306 = figwheel.client.file_reloading.blocking_load.call(null,inst_45304);
var state_45324__$1 = state_45324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45324__$1,(8),inst_45306);
} else {
if((state_val_45325 === (10))){
var inst_45308 = (state_45324[(9)]);
var inst_45314 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_45308);
var state_45324__$1 = state_45324;
var statearr_45335_45353 = state_45324__$1;
(statearr_45335_45353[(2)] = inst_45314);

(statearr_45335_45353[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45325 === (8))){
var inst_45310 = (state_45324[(10)]);
var inst_45304 = (state_45324[(7)]);
var inst_45308 = (state_45324[(2)]);
var inst_45309 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_45310__$1 = cljs.core.get.call(null,inst_45309,inst_45304);
var state_45324__$1 = (function (){var statearr_45336 = state_45324;
(statearr_45336[(9)] = inst_45308);

(statearr_45336[(10)] = inst_45310__$1);

return statearr_45336;
})();
if(cljs.core.truth_(inst_45310__$1)){
var statearr_45337_45354 = state_45324__$1;
(statearr_45337_45354[(1)] = (9));

} else {
var statearr_45338_45355 = state_45324__$1;
(statearr_45338_45355[(1)] = (10));

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
});})(c__21866__auto__))
;
return ((function (switch__21754__auto__,c__21866__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21755__auto__ = null;
var figwheel$client$file_reloading$state_machine__21755__auto____0 = (function (){
var statearr_45342 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45342[(0)] = figwheel$client$file_reloading$state_machine__21755__auto__);

(statearr_45342[(1)] = (1));

return statearr_45342;
});
var figwheel$client$file_reloading$state_machine__21755__auto____1 = (function (state_45324){
while(true){
var ret_value__21756__auto__ = (function (){try{while(true){
var result__21757__auto__ = switch__21754__auto__.call(null,state_45324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21757__auto__;
}
break;
}
}catch (e45343){if((e45343 instanceof Object)){
var ex__21758__auto__ = e45343;
var statearr_45344_45356 = state_45324;
(statearr_45344_45356[(5)] = ex__21758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45357 = state_45324;
state_45324 = G__45357;
continue;
} else {
return ret_value__21756__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21755__auto__ = function(state_45324){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21755__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21755__auto____1.call(this,state_45324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21755__auto____0;
figwheel$client$file_reloading$state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21755__auto____1;
return figwheel$client$file_reloading$state_machine__21755__auto__;
})()
;})(switch__21754__auto__,c__21866__auto__))
})();
var state__21868__auto__ = (function (){var statearr_45345 = f__21867__auto__.call(null);
(statearr_45345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21866__auto__);

return statearr_45345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21868__auto__);
});})(c__21866__auto__))
);

return c__21866__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__45358,callback){
var map__45361 = p__45358;
var map__45361__$1 = ((((!((map__45361 == null)))?((((map__45361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45361):map__45361);
var file_msg = map__45361__$1;
var namespace = cljs.core.get.call(null,map__45361__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__45361,map__45361__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__45361,map__45361__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__45363){
var map__45366 = p__45363;
var map__45366__$1 = ((((!((map__45366 == null)))?((((map__45366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45366):map__45366);
var file_msg = map__45366__$1;
var namespace = cljs.core.get.call(null,map__45366__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__45368,callback){
var map__45371 = p__45368;
var map__45371__$1 = ((((!((map__45371 == null)))?((((map__45371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45371):map__45371);
var file_msg = map__45371__$1;
var request_url = cljs.core.get.call(null,map__45371__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__45371__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__21866__auto___45459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21866__auto___45459,out){
return (function (){
var f__21867__auto__ = (function (){var switch__21754__auto__ = ((function (c__21866__auto___45459,out){
return (function (state_45441){
var state_val_45442 = (state_45441[(1)]);
if((state_val_45442 === (1))){
var inst_45419 = cljs.core.nth.call(null,files,(0),null);
var inst_45420 = cljs.core.nthnext.call(null,files,(1));
var inst_45421 = files;
var state_45441__$1 = (function (){var statearr_45443 = state_45441;
(statearr_45443[(7)] = inst_45419);

(statearr_45443[(8)] = inst_45420);

(statearr_45443[(9)] = inst_45421);

return statearr_45443;
})();
var statearr_45444_45460 = state_45441__$1;
(statearr_45444_45460[(2)] = null);

(statearr_45444_45460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45442 === (2))){
var inst_45421 = (state_45441[(9)]);
var inst_45424 = (state_45441[(10)]);
var inst_45424__$1 = cljs.core.nth.call(null,inst_45421,(0),null);
var inst_45425 = cljs.core.nthnext.call(null,inst_45421,(1));
var inst_45426 = (inst_45424__$1 == null);
var inst_45427 = cljs.core.not.call(null,inst_45426);
var state_45441__$1 = (function (){var statearr_45445 = state_45441;
(statearr_45445[(11)] = inst_45425);

(statearr_45445[(10)] = inst_45424__$1);

return statearr_45445;
})();
if(inst_45427){
var statearr_45446_45461 = state_45441__$1;
(statearr_45446_45461[(1)] = (4));

} else {
var statearr_45447_45462 = state_45441__$1;
(statearr_45447_45462[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45442 === (3))){
var inst_45439 = (state_45441[(2)]);
var state_45441__$1 = state_45441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45441__$1,inst_45439);
} else {
if((state_val_45442 === (4))){
var inst_45424 = (state_45441[(10)]);
var inst_45429 = figwheel.client.file_reloading.reload_js_file.call(null,inst_45424);
var state_45441__$1 = state_45441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45441__$1,(7),inst_45429);
} else {
if((state_val_45442 === (5))){
var inst_45435 = cljs.core.async.close_BANG_.call(null,out);
var state_45441__$1 = state_45441;
var statearr_45448_45463 = state_45441__$1;
(statearr_45448_45463[(2)] = inst_45435);

(statearr_45448_45463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45442 === (6))){
var inst_45437 = (state_45441[(2)]);
var state_45441__$1 = state_45441;
var statearr_45449_45464 = state_45441__$1;
(statearr_45449_45464[(2)] = inst_45437);

(statearr_45449_45464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45442 === (7))){
var inst_45425 = (state_45441[(11)]);
var inst_45431 = (state_45441[(2)]);
var inst_45432 = cljs.core.async.put_BANG_.call(null,out,inst_45431);
var inst_45421 = inst_45425;
var state_45441__$1 = (function (){var statearr_45450 = state_45441;
(statearr_45450[(12)] = inst_45432);

(statearr_45450[(9)] = inst_45421);

return statearr_45450;
})();
var statearr_45451_45465 = state_45441__$1;
(statearr_45451_45465[(2)] = null);

(statearr_45451_45465[(1)] = (2));


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
});})(c__21866__auto___45459,out))
;
return ((function (switch__21754__auto__,c__21866__auto___45459,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21755__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21755__auto____0 = (function (){
var statearr_45455 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45455[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21755__auto__);

(statearr_45455[(1)] = (1));

return statearr_45455;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21755__auto____1 = (function (state_45441){
while(true){
var ret_value__21756__auto__ = (function (){try{while(true){
var result__21757__auto__ = switch__21754__auto__.call(null,state_45441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21757__auto__;
}
break;
}
}catch (e45456){if((e45456 instanceof Object)){
var ex__21758__auto__ = e45456;
var statearr_45457_45466 = state_45441;
(statearr_45457_45466[(5)] = ex__21758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45467 = state_45441;
state_45441 = G__45467;
continue;
} else {
return ret_value__21756__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21755__auto__ = function(state_45441){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21755__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21755__auto____1.call(this,state_45441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21755__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21755__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21755__auto__;
})()
;})(switch__21754__auto__,c__21866__auto___45459,out))
})();
var state__21868__auto__ = (function (){var statearr_45458 = f__21867__auto__.call(null);
(statearr_45458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21866__auto___45459);

return statearr_45458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21868__auto__);
});})(c__21866__auto___45459,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__45468,opts){
var map__45472 = p__45468;
var map__45472__$1 = ((((!((map__45472 == null)))?((((map__45472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45472):map__45472);
var eval_body__$1 = cljs.core.get.call(null,map__45472__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__45472__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e45474){var e = e45474;
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
return (function (p1__45475_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45475_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__45480){
var vec__45481 = p__45480;
var k = cljs.core.nth.call(null,vec__45481,(0),null);
var v = cljs.core.nth.call(null,vec__45481,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__45482){
var vec__45483 = p__45482;
var k = cljs.core.nth.call(null,vec__45483,(0),null);
var v = cljs.core.nth.call(null,vec__45483,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__45487,p__45488){
var map__45735 = p__45487;
var map__45735__$1 = ((((!((map__45735 == null)))?((((map__45735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45735):map__45735);
var opts = map__45735__$1;
var before_jsload = cljs.core.get.call(null,map__45735__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__45735__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__45735__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__45736 = p__45488;
var map__45736__$1 = ((((!((map__45736 == null)))?((((map__45736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45736):map__45736);
var msg = map__45736__$1;
var files = cljs.core.get.call(null,map__45736__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__45736__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__45736__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21866__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21866__auto__,map__45735,map__45735__$1,opts,before_jsload,on_jsload,reload_dependents,map__45736,map__45736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21867__auto__ = (function (){var switch__21754__auto__ = ((function (c__21866__auto__,map__45735,map__45735__$1,opts,before_jsload,on_jsload,reload_dependents,map__45736,map__45736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_45889){
var state_val_45890 = (state_45889[(1)]);
if((state_val_45890 === (7))){
var inst_45751 = (state_45889[(7)]);
var inst_45750 = (state_45889[(8)]);
var inst_45752 = (state_45889[(9)]);
var inst_45753 = (state_45889[(10)]);
var inst_45758 = cljs.core._nth.call(null,inst_45751,inst_45753);
var inst_45759 = figwheel.client.file_reloading.eval_body.call(null,inst_45758,opts);
var inst_45760 = (inst_45753 + (1));
var tmp45891 = inst_45751;
var tmp45892 = inst_45750;
var tmp45893 = inst_45752;
var inst_45750__$1 = tmp45892;
var inst_45751__$1 = tmp45891;
var inst_45752__$1 = tmp45893;
var inst_45753__$1 = inst_45760;
var state_45889__$1 = (function (){var statearr_45894 = state_45889;
(statearr_45894[(7)] = inst_45751__$1);

(statearr_45894[(11)] = inst_45759);

(statearr_45894[(8)] = inst_45750__$1);

(statearr_45894[(9)] = inst_45752__$1);

(statearr_45894[(10)] = inst_45753__$1);

return statearr_45894;
})();
var statearr_45895_45981 = state_45889__$1;
(statearr_45895_45981[(2)] = null);

(statearr_45895_45981[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (20))){
var inst_45793 = (state_45889[(12)]);
var inst_45801 = figwheel.client.file_reloading.sort_files.call(null,inst_45793);
var state_45889__$1 = state_45889;
var statearr_45896_45982 = state_45889__$1;
(statearr_45896_45982[(2)] = inst_45801);

(statearr_45896_45982[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (27))){
var state_45889__$1 = state_45889;
var statearr_45897_45983 = state_45889__$1;
(statearr_45897_45983[(2)] = null);

(statearr_45897_45983[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (1))){
var inst_45742 = (state_45889[(13)]);
var inst_45739 = before_jsload.call(null,files);
var inst_45740 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_45741 = (function (){return ((function (inst_45742,inst_45739,inst_45740,state_val_45890,c__21866__auto__,map__45735,map__45735__$1,opts,before_jsload,on_jsload,reload_dependents,map__45736,map__45736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45484_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45484_SHARP_);
});
;})(inst_45742,inst_45739,inst_45740,state_val_45890,c__21866__auto__,map__45735,map__45735__$1,opts,before_jsload,on_jsload,reload_dependents,map__45736,map__45736__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45742__$1 = cljs.core.filter.call(null,inst_45741,files);
var inst_45743 = cljs.core.not_empty.call(null,inst_45742__$1);
var state_45889__$1 = (function (){var statearr_45898 = state_45889;
(statearr_45898[(14)] = inst_45739);

(statearr_45898[(13)] = inst_45742__$1);

(statearr_45898[(15)] = inst_45740);

return statearr_45898;
})();
if(cljs.core.truth_(inst_45743)){
var statearr_45899_45984 = state_45889__$1;
(statearr_45899_45984[(1)] = (2));

} else {
var statearr_45900_45985 = state_45889__$1;
(statearr_45900_45985[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (24))){
var state_45889__$1 = state_45889;
var statearr_45901_45986 = state_45889__$1;
(statearr_45901_45986[(2)] = null);

(statearr_45901_45986[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (39))){
var inst_45843 = (state_45889[(16)]);
var state_45889__$1 = state_45889;
var statearr_45902_45987 = state_45889__$1;
(statearr_45902_45987[(2)] = inst_45843);

(statearr_45902_45987[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (46))){
var inst_45884 = (state_45889[(2)]);
var state_45889__$1 = state_45889;
var statearr_45903_45988 = state_45889__$1;
(statearr_45903_45988[(2)] = inst_45884);

(statearr_45903_45988[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (4))){
var inst_45787 = (state_45889[(2)]);
var inst_45788 = cljs.core.List.EMPTY;
var inst_45789 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_45788);
var inst_45790 = (function (){return ((function (inst_45787,inst_45788,inst_45789,state_val_45890,c__21866__auto__,map__45735,map__45735__$1,opts,before_jsload,on_jsload,reload_dependents,map__45736,map__45736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45485_SHARP_){
var and__18358__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45485_SHARP_);
if(cljs.core.truth_(and__18358__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45485_SHARP_));
} else {
return and__18358__auto__;
}
});
;})(inst_45787,inst_45788,inst_45789,state_val_45890,c__21866__auto__,map__45735,map__45735__$1,opts,before_jsload,on_jsload,reload_dependents,map__45736,map__45736__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45791 = cljs.core.filter.call(null,inst_45790,files);
var inst_45792 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_45793 = cljs.core.concat.call(null,inst_45791,inst_45792);
var state_45889__$1 = (function (){var statearr_45904 = state_45889;
(statearr_45904[(17)] = inst_45789);

(statearr_45904[(18)] = inst_45787);

(statearr_45904[(12)] = inst_45793);

return statearr_45904;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_45905_45989 = state_45889__$1;
(statearr_45905_45989[(1)] = (16));

} else {
var statearr_45906_45990 = state_45889__$1;
(statearr_45906_45990[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (15))){
var inst_45777 = (state_45889[(2)]);
var state_45889__$1 = state_45889;
var statearr_45907_45991 = state_45889__$1;
(statearr_45907_45991[(2)] = inst_45777);

(statearr_45907_45991[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (21))){
var inst_45803 = (state_45889[(19)]);
var inst_45803__$1 = (state_45889[(2)]);
var inst_45804 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_45803__$1);
var state_45889__$1 = (function (){var statearr_45908 = state_45889;
(statearr_45908[(19)] = inst_45803__$1);

return statearr_45908;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45889__$1,(22),inst_45804);
} else {
if((state_val_45890 === (31))){
var inst_45887 = (state_45889[(2)]);
var state_45889__$1 = state_45889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45889__$1,inst_45887);
} else {
if((state_val_45890 === (32))){
var inst_45843 = (state_45889[(16)]);
var inst_45848 = inst_45843.cljs$lang$protocol_mask$partition0$;
var inst_45849 = (inst_45848 & (64));
var inst_45850 = inst_45843.cljs$core$ISeq$;
var inst_45851 = (inst_45849) || (inst_45850);
var state_45889__$1 = state_45889;
if(cljs.core.truth_(inst_45851)){
var statearr_45909_45992 = state_45889__$1;
(statearr_45909_45992[(1)] = (35));

} else {
var statearr_45910_45993 = state_45889__$1;
(statearr_45910_45993[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (40))){
var inst_45864 = (state_45889[(20)]);
var inst_45863 = (state_45889[(2)]);
var inst_45864__$1 = cljs.core.get.call(null,inst_45863,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_45865 = cljs.core.get.call(null,inst_45863,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_45866 = cljs.core.not_empty.call(null,inst_45864__$1);
var state_45889__$1 = (function (){var statearr_45911 = state_45889;
(statearr_45911[(20)] = inst_45864__$1);

(statearr_45911[(21)] = inst_45865);

return statearr_45911;
})();
if(cljs.core.truth_(inst_45866)){
var statearr_45912_45994 = state_45889__$1;
(statearr_45912_45994[(1)] = (41));

} else {
var statearr_45913_45995 = state_45889__$1;
(statearr_45913_45995[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (33))){
var state_45889__$1 = state_45889;
var statearr_45914_45996 = state_45889__$1;
(statearr_45914_45996[(2)] = false);

(statearr_45914_45996[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (13))){
var inst_45763 = (state_45889[(22)]);
var inst_45767 = cljs.core.chunk_first.call(null,inst_45763);
var inst_45768 = cljs.core.chunk_rest.call(null,inst_45763);
var inst_45769 = cljs.core.count.call(null,inst_45767);
var inst_45750 = inst_45768;
var inst_45751 = inst_45767;
var inst_45752 = inst_45769;
var inst_45753 = (0);
var state_45889__$1 = (function (){var statearr_45915 = state_45889;
(statearr_45915[(7)] = inst_45751);

(statearr_45915[(8)] = inst_45750);

(statearr_45915[(9)] = inst_45752);

(statearr_45915[(10)] = inst_45753);

return statearr_45915;
})();
var statearr_45916_45997 = state_45889__$1;
(statearr_45916_45997[(2)] = null);

(statearr_45916_45997[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (22))){
var inst_45806 = (state_45889[(23)]);
var inst_45807 = (state_45889[(24)]);
var inst_45811 = (state_45889[(25)]);
var inst_45803 = (state_45889[(19)]);
var inst_45806__$1 = (state_45889[(2)]);
var inst_45807__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45806__$1);
var inst_45808 = (function (){var all_files = inst_45803;
var res_SINGLEQUOTE_ = inst_45806__$1;
var res = inst_45807__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_45806,inst_45807,inst_45811,inst_45803,inst_45806__$1,inst_45807__$1,state_val_45890,c__21866__auto__,map__45735,map__45735__$1,opts,before_jsload,on_jsload,reload_dependents,map__45736,map__45736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45486_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__45486_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_45806,inst_45807,inst_45811,inst_45803,inst_45806__$1,inst_45807__$1,state_val_45890,c__21866__auto__,map__45735,map__45735__$1,opts,before_jsload,on_jsload,reload_dependents,map__45736,map__45736__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45809 = cljs.core.filter.call(null,inst_45808,inst_45806__$1);
var inst_45810 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_45811__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45810);
var inst_45812 = cljs.core.not_empty.call(null,inst_45811__$1);
var state_45889__$1 = (function (){var statearr_45917 = state_45889;
(statearr_45917[(23)] = inst_45806__$1);

(statearr_45917[(24)] = inst_45807__$1);

(statearr_45917[(25)] = inst_45811__$1);

(statearr_45917[(26)] = inst_45809);

return statearr_45917;
})();
if(cljs.core.truth_(inst_45812)){
var statearr_45918_45998 = state_45889__$1;
(statearr_45918_45998[(1)] = (23));

} else {
var statearr_45919_45999 = state_45889__$1;
(statearr_45919_45999[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (36))){
var state_45889__$1 = state_45889;
var statearr_45920_46000 = state_45889__$1;
(statearr_45920_46000[(2)] = false);

(statearr_45920_46000[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (41))){
var inst_45864 = (state_45889[(20)]);
var inst_45868 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_45869 = cljs.core.map.call(null,inst_45868,inst_45864);
var inst_45870 = cljs.core.pr_str.call(null,inst_45869);
var inst_45871 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_45870)].join('');
var inst_45872 = figwheel.client.utils.log.call(null,inst_45871);
var state_45889__$1 = state_45889;
var statearr_45921_46001 = state_45889__$1;
(statearr_45921_46001[(2)] = inst_45872);

(statearr_45921_46001[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (43))){
var inst_45865 = (state_45889[(21)]);
var inst_45875 = (state_45889[(2)]);
var inst_45876 = cljs.core.not_empty.call(null,inst_45865);
var state_45889__$1 = (function (){var statearr_45922 = state_45889;
(statearr_45922[(27)] = inst_45875);

return statearr_45922;
})();
if(cljs.core.truth_(inst_45876)){
var statearr_45923_46002 = state_45889__$1;
(statearr_45923_46002[(1)] = (44));

} else {
var statearr_45924_46003 = state_45889__$1;
(statearr_45924_46003[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (29))){
var inst_45843 = (state_45889[(16)]);
var inst_45806 = (state_45889[(23)]);
var inst_45807 = (state_45889[(24)]);
var inst_45811 = (state_45889[(25)]);
var inst_45809 = (state_45889[(26)]);
var inst_45803 = (state_45889[(19)]);
var inst_45839 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_45842 = (function (){var all_files = inst_45803;
var res_SINGLEQUOTE_ = inst_45806;
var res = inst_45807;
var files_not_loaded = inst_45809;
var dependencies_that_loaded = inst_45811;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45843,inst_45806,inst_45807,inst_45811,inst_45809,inst_45803,inst_45839,state_val_45890,c__21866__auto__,map__45735,map__45735__$1,opts,before_jsload,on_jsload,reload_dependents,map__45736,map__45736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45841){
var map__45925 = p__45841;
var map__45925__$1 = ((((!((map__45925 == null)))?((((map__45925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45925):map__45925);
var namespace = cljs.core.get.call(null,map__45925__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45843,inst_45806,inst_45807,inst_45811,inst_45809,inst_45803,inst_45839,state_val_45890,c__21866__auto__,map__45735,map__45735__$1,opts,before_jsload,on_jsload,reload_dependents,map__45736,map__45736__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45843__$1 = cljs.core.group_by.call(null,inst_45842,inst_45809);
var inst_45845 = (inst_45843__$1 == null);
var inst_45846 = cljs.core.not.call(null,inst_45845);
var state_45889__$1 = (function (){var statearr_45927 = state_45889;
(statearr_45927[(16)] = inst_45843__$1);

(statearr_45927[(28)] = inst_45839);

return statearr_45927;
})();
if(inst_45846){
var statearr_45928_46004 = state_45889__$1;
(statearr_45928_46004[(1)] = (32));

} else {
var statearr_45929_46005 = state_45889__$1;
(statearr_45929_46005[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (44))){
var inst_45865 = (state_45889[(21)]);
var inst_45878 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_45865);
var inst_45879 = cljs.core.pr_str.call(null,inst_45878);
var inst_45880 = [cljs.core.str("not required: "),cljs.core.str(inst_45879)].join('');
var inst_45881 = figwheel.client.utils.log.call(null,inst_45880);
var state_45889__$1 = state_45889;
var statearr_45930_46006 = state_45889__$1;
(statearr_45930_46006[(2)] = inst_45881);

(statearr_45930_46006[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (6))){
var inst_45784 = (state_45889[(2)]);
var state_45889__$1 = state_45889;
var statearr_45931_46007 = state_45889__$1;
(statearr_45931_46007[(2)] = inst_45784);

(statearr_45931_46007[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (28))){
var inst_45809 = (state_45889[(26)]);
var inst_45836 = (state_45889[(2)]);
var inst_45837 = cljs.core.not_empty.call(null,inst_45809);
var state_45889__$1 = (function (){var statearr_45932 = state_45889;
(statearr_45932[(29)] = inst_45836);

return statearr_45932;
})();
if(cljs.core.truth_(inst_45837)){
var statearr_45933_46008 = state_45889__$1;
(statearr_45933_46008[(1)] = (29));

} else {
var statearr_45934_46009 = state_45889__$1;
(statearr_45934_46009[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (25))){
var inst_45807 = (state_45889[(24)]);
var inst_45823 = (state_45889[(2)]);
var inst_45824 = cljs.core.not_empty.call(null,inst_45807);
var state_45889__$1 = (function (){var statearr_45935 = state_45889;
(statearr_45935[(30)] = inst_45823);

return statearr_45935;
})();
if(cljs.core.truth_(inst_45824)){
var statearr_45936_46010 = state_45889__$1;
(statearr_45936_46010[(1)] = (26));

} else {
var statearr_45937_46011 = state_45889__$1;
(statearr_45937_46011[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (34))){
var inst_45858 = (state_45889[(2)]);
var state_45889__$1 = state_45889;
if(cljs.core.truth_(inst_45858)){
var statearr_45938_46012 = state_45889__$1;
(statearr_45938_46012[(1)] = (38));

} else {
var statearr_45939_46013 = state_45889__$1;
(statearr_45939_46013[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (17))){
var state_45889__$1 = state_45889;
var statearr_45940_46014 = state_45889__$1;
(statearr_45940_46014[(2)] = recompile_dependents);

(statearr_45940_46014[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (3))){
var state_45889__$1 = state_45889;
var statearr_45941_46015 = state_45889__$1;
(statearr_45941_46015[(2)] = null);

(statearr_45941_46015[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (12))){
var inst_45780 = (state_45889[(2)]);
var state_45889__$1 = state_45889;
var statearr_45942_46016 = state_45889__$1;
(statearr_45942_46016[(2)] = inst_45780);

(statearr_45942_46016[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (2))){
var inst_45742 = (state_45889[(13)]);
var inst_45749 = cljs.core.seq.call(null,inst_45742);
var inst_45750 = inst_45749;
var inst_45751 = null;
var inst_45752 = (0);
var inst_45753 = (0);
var state_45889__$1 = (function (){var statearr_45943 = state_45889;
(statearr_45943[(7)] = inst_45751);

(statearr_45943[(8)] = inst_45750);

(statearr_45943[(9)] = inst_45752);

(statearr_45943[(10)] = inst_45753);

return statearr_45943;
})();
var statearr_45944_46017 = state_45889__$1;
(statearr_45944_46017[(2)] = null);

(statearr_45944_46017[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (23))){
var inst_45806 = (state_45889[(23)]);
var inst_45807 = (state_45889[(24)]);
var inst_45811 = (state_45889[(25)]);
var inst_45809 = (state_45889[(26)]);
var inst_45803 = (state_45889[(19)]);
var inst_45814 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_45816 = (function (){var all_files = inst_45803;
var res_SINGLEQUOTE_ = inst_45806;
var res = inst_45807;
var files_not_loaded = inst_45809;
var dependencies_that_loaded = inst_45811;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45806,inst_45807,inst_45811,inst_45809,inst_45803,inst_45814,state_val_45890,c__21866__auto__,map__45735,map__45735__$1,opts,before_jsload,on_jsload,reload_dependents,map__45736,map__45736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45815){
var map__45945 = p__45815;
var map__45945__$1 = ((((!((map__45945 == null)))?((((map__45945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45945):map__45945);
var request_url = cljs.core.get.call(null,map__45945__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45806,inst_45807,inst_45811,inst_45809,inst_45803,inst_45814,state_val_45890,c__21866__auto__,map__45735,map__45735__$1,opts,before_jsload,on_jsload,reload_dependents,map__45736,map__45736__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45817 = cljs.core.reverse.call(null,inst_45811);
var inst_45818 = cljs.core.map.call(null,inst_45816,inst_45817);
var inst_45819 = cljs.core.pr_str.call(null,inst_45818);
var inst_45820 = figwheel.client.utils.log.call(null,inst_45819);
var state_45889__$1 = (function (){var statearr_45947 = state_45889;
(statearr_45947[(31)] = inst_45814);

return statearr_45947;
})();
var statearr_45948_46018 = state_45889__$1;
(statearr_45948_46018[(2)] = inst_45820);

(statearr_45948_46018[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (35))){
var state_45889__$1 = state_45889;
var statearr_45949_46019 = state_45889__$1;
(statearr_45949_46019[(2)] = true);

(statearr_45949_46019[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (19))){
var inst_45793 = (state_45889[(12)]);
var inst_45799 = figwheel.client.file_reloading.expand_files.call(null,inst_45793);
var state_45889__$1 = state_45889;
var statearr_45950_46020 = state_45889__$1;
(statearr_45950_46020[(2)] = inst_45799);

(statearr_45950_46020[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (11))){
var state_45889__$1 = state_45889;
var statearr_45951_46021 = state_45889__$1;
(statearr_45951_46021[(2)] = null);

(statearr_45951_46021[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (9))){
var inst_45782 = (state_45889[(2)]);
var state_45889__$1 = state_45889;
var statearr_45952_46022 = state_45889__$1;
(statearr_45952_46022[(2)] = inst_45782);

(statearr_45952_46022[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (5))){
var inst_45752 = (state_45889[(9)]);
var inst_45753 = (state_45889[(10)]);
var inst_45755 = (inst_45753 < inst_45752);
var inst_45756 = inst_45755;
var state_45889__$1 = state_45889;
if(cljs.core.truth_(inst_45756)){
var statearr_45953_46023 = state_45889__$1;
(statearr_45953_46023[(1)] = (7));

} else {
var statearr_45954_46024 = state_45889__$1;
(statearr_45954_46024[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (14))){
var inst_45763 = (state_45889[(22)]);
var inst_45772 = cljs.core.first.call(null,inst_45763);
var inst_45773 = figwheel.client.file_reloading.eval_body.call(null,inst_45772,opts);
var inst_45774 = cljs.core.next.call(null,inst_45763);
var inst_45750 = inst_45774;
var inst_45751 = null;
var inst_45752 = (0);
var inst_45753 = (0);
var state_45889__$1 = (function (){var statearr_45955 = state_45889;
(statearr_45955[(32)] = inst_45773);

(statearr_45955[(7)] = inst_45751);

(statearr_45955[(8)] = inst_45750);

(statearr_45955[(9)] = inst_45752);

(statearr_45955[(10)] = inst_45753);

return statearr_45955;
})();
var statearr_45956_46025 = state_45889__$1;
(statearr_45956_46025[(2)] = null);

(statearr_45956_46025[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (45))){
var state_45889__$1 = state_45889;
var statearr_45957_46026 = state_45889__$1;
(statearr_45957_46026[(2)] = null);

(statearr_45957_46026[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (26))){
var inst_45806 = (state_45889[(23)]);
var inst_45807 = (state_45889[(24)]);
var inst_45811 = (state_45889[(25)]);
var inst_45809 = (state_45889[(26)]);
var inst_45803 = (state_45889[(19)]);
var inst_45826 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_45828 = (function (){var all_files = inst_45803;
var res_SINGLEQUOTE_ = inst_45806;
var res = inst_45807;
var files_not_loaded = inst_45809;
var dependencies_that_loaded = inst_45811;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45806,inst_45807,inst_45811,inst_45809,inst_45803,inst_45826,state_val_45890,c__21866__auto__,map__45735,map__45735__$1,opts,before_jsload,on_jsload,reload_dependents,map__45736,map__45736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45827){
var map__45958 = p__45827;
var map__45958__$1 = ((((!((map__45958 == null)))?((((map__45958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45958):map__45958);
var namespace = cljs.core.get.call(null,map__45958__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__45958__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45806,inst_45807,inst_45811,inst_45809,inst_45803,inst_45826,state_val_45890,c__21866__auto__,map__45735,map__45735__$1,opts,before_jsload,on_jsload,reload_dependents,map__45736,map__45736__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45829 = cljs.core.map.call(null,inst_45828,inst_45807);
var inst_45830 = cljs.core.pr_str.call(null,inst_45829);
var inst_45831 = figwheel.client.utils.log.call(null,inst_45830);
var inst_45832 = (function (){var all_files = inst_45803;
var res_SINGLEQUOTE_ = inst_45806;
var res = inst_45807;
var files_not_loaded = inst_45809;
var dependencies_that_loaded = inst_45811;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45806,inst_45807,inst_45811,inst_45809,inst_45803,inst_45826,inst_45828,inst_45829,inst_45830,inst_45831,state_val_45890,c__21866__auto__,map__45735,map__45735__$1,opts,before_jsload,on_jsload,reload_dependents,map__45736,map__45736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45806,inst_45807,inst_45811,inst_45809,inst_45803,inst_45826,inst_45828,inst_45829,inst_45830,inst_45831,state_val_45890,c__21866__auto__,map__45735,map__45735__$1,opts,before_jsload,on_jsload,reload_dependents,map__45736,map__45736__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45833 = setTimeout(inst_45832,(10));
var state_45889__$1 = (function (){var statearr_45960 = state_45889;
(statearr_45960[(33)] = inst_45831);

(statearr_45960[(34)] = inst_45826);

return statearr_45960;
})();
var statearr_45961_46027 = state_45889__$1;
(statearr_45961_46027[(2)] = inst_45833);

(statearr_45961_46027[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (16))){
var state_45889__$1 = state_45889;
var statearr_45962_46028 = state_45889__$1;
(statearr_45962_46028[(2)] = reload_dependents);

(statearr_45962_46028[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (38))){
var inst_45843 = (state_45889[(16)]);
var inst_45860 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45843);
var state_45889__$1 = state_45889;
var statearr_45963_46029 = state_45889__$1;
(statearr_45963_46029[(2)] = inst_45860);

(statearr_45963_46029[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (30))){
var state_45889__$1 = state_45889;
var statearr_45964_46030 = state_45889__$1;
(statearr_45964_46030[(2)] = null);

(statearr_45964_46030[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (10))){
var inst_45763 = (state_45889[(22)]);
var inst_45765 = cljs.core.chunked_seq_QMARK_.call(null,inst_45763);
var state_45889__$1 = state_45889;
if(inst_45765){
var statearr_45965_46031 = state_45889__$1;
(statearr_45965_46031[(1)] = (13));

} else {
var statearr_45966_46032 = state_45889__$1;
(statearr_45966_46032[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (18))){
var inst_45797 = (state_45889[(2)]);
var state_45889__$1 = state_45889;
if(cljs.core.truth_(inst_45797)){
var statearr_45967_46033 = state_45889__$1;
(statearr_45967_46033[(1)] = (19));

} else {
var statearr_45968_46034 = state_45889__$1;
(statearr_45968_46034[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (42))){
var state_45889__$1 = state_45889;
var statearr_45969_46035 = state_45889__$1;
(statearr_45969_46035[(2)] = null);

(statearr_45969_46035[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (37))){
var inst_45855 = (state_45889[(2)]);
var state_45889__$1 = state_45889;
var statearr_45970_46036 = state_45889__$1;
(statearr_45970_46036[(2)] = inst_45855);

(statearr_45970_46036[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45890 === (8))){
var inst_45763 = (state_45889[(22)]);
var inst_45750 = (state_45889[(8)]);
var inst_45763__$1 = cljs.core.seq.call(null,inst_45750);
var state_45889__$1 = (function (){var statearr_45971 = state_45889;
(statearr_45971[(22)] = inst_45763__$1);

return statearr_45971;
})();
if(inst_45763__$1){
var statearr_45972_46037 = state_45889__$1;
(statearr_45972_46037[(1)] = (10));

} else {
var statearr_45973_46038 = state_45889__$1;
(statearr_45973_46038[(1)] = (11));

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
});})(c__21866__auto__,map__45735,map__45735__$1,opts,before_jsload,on_jsload,reload_dependents,map__45736,map__45736__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21754__auto__,c__21866__auto__,map__45735,map__45735__$1,opts,before_jsload,on_jsload,reload_dependents,map__45736,map__45736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21755__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21755__auto____0 = (function (){
var statearr_45977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45977[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21755__auto__);

(statearr_45977[(1)] = (1));

return statearr_45977;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21755__auto____1 = (function (state_45889){
while(true){
var ret_value__21756__auto__ = (function (){try{while(true){
var result__21757__auto__ = switch__21754__auto__.call(null,state_45889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21757__auto__;
}
break;
}
}catch (e45978){if((e45978 instanceof Object)){
var ex__21758__auto__ = e45978;
var statearr_45979_46039 = state_45889;
(statearr_45979_46039[(5)] = ex__21758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46040 = state_45889;
state_45889 = G__46040;
continue;
} else {
return ret_value__21756__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21755__auto__ = function(state_45889){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21755__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21755__auto____1.call(this,state_45889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21755__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21755__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21755__auto__;
})()
;})(switch__21754__auto__,c__21866__auto__,map__45735,map__45735__$1,opts,before_jsload,on_jsload,reload_dependents,map__45736,map__45736__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21868__auto__ = (function (){var statearr_45980 = f__21867__auto__.call(null);
(statearr_45980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21866__auto__);

return statearr_45980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21868__auto__);
});})(c__21866__auto__,map__45735,map__45735__$1,opts,before_jsload,on_jsload,reload_dependents,map__45736,map__45736__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21866__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__46043,link){
var map__46046 = p__46043;
var map__46046__$1 = ((((!((map__46046 == null)))?((((map__46046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46046):map__46046);
var file = cljs.core.get.call(null,map__46046__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__46046,map__46046__$1,file){
return (function (p1__46041_SHARP_,p2__46042_SHARP_){
if(cljs.core._EQ_.call(null,p1__46041_SHARP_,p2__46042_SHARP_)){
return p1__46041_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__46046,map__46046__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__46052){
var map__46053 = p__46052;
var map__46053__$1 = ((((!((map__46053 == null)))?((((map__46053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46053):map__46053);
var match_length = cljs.core.get.call(null,map__46053__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__46053__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__46048_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__46048_SHARP_);
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
var args46055 = [];
var len__19428__auto___46058 = arguments.length;
var i__19429__auto___46059 = (0);
while(true){
if((i__19429__auto___46059 < len__19428__auto___46058)){
args46055.push((arguments[i__19429__auto___46059]));

var G__46060 = (i__19429__auto___46059 + (1));
i__19429__auto___46059 = G__46060;
continue;
} else {
}
break;
}

var G__46057 = args46055.length;
switch (G__46057) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46055.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__46062_SHARP_,p2__46063_SHARP_){
return cljs.core.assoc.call(null,p1__46062_SHARP_,cljs.core.get.call(null,p2__46063_SHARP_,key),p2__46063_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__46064){
var map__46067 = p__46064;
var map__46067__$1 = ((((!((map__46067 == null)))?((((map__46067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46067):map__46067);
var f_data = map__46067__$1;
var file = cljs.core.get.call(null,map__46067__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__46069,files_msg){
var map__46076 = p__46069;
var map__46076__$1 = ((((!((map__46076 == null)))?((((map__46076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46076):map__46076);
var opts = map__46076__$1;
var on_cssload = cljs.core.get.call(null,map__46076__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__46078_46082 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__46079_46083 = null;
var count__46080_46084 = (0);
var i__46081_46085 = (0);
while(true){
if((i__46081_46085 < count__46080_46084)){
var f_46086 = cljs.core._nth.call(null,chunk__46079_46083,i__46081_46085);
figwheel.client.file_reloading.reload_css_file.call(null,f_46086);

var G__46087 = seq__46078_46082;
var G__46088 = chunk__46079_46083;
var G__46089 = count__46080_46084;
var G__46090 = (i__46081_46085 + (1));
seq__46078_46082 = G__46087;
chunk__46079_46083 = G__46088;
count__46080_46084 = G__46089;
i__46081_46085 = G__46090;
continue;
} else {
var temp__4657__auto___46091 = cljs.core.seq.call(null,seq__46078_46082);
if(temp__4657__auto___46091){
var seq__46078_46092__$1 = temp__4657__auto___46091;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46078_46092__$1)){
var c__19173__auto___46093 = cljs.core.chunk_first.call(null,seq__46078_46092__$1);
var G__46094 = cljs.core.chunk_rest.call(null,seq__46078_46092__$1);
var G__46095 = c__19173__auto___46093;
var G__46096 = cljs.core.count.call(null,c__19173__auto___46093);
var G__46097 = (0);
seq__46078_46082 = G__46094;
chunk__46079_46083 = G__46095;
count__46080_46084 = G__46096;
i__46081_46085 = G__46097;
continue;
} else {
var f_46098 = cljs.core.first.call(null,seq__46078_46092__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_46098);

var G__46099 = cljs.core.next.call(null,seq__46078_46092__$1);
var G__46100 = null;
var G__46101 = (0);
var G__46102 = (0);
seq__46078_46082 = G__46099;
chunk__46079_46083 = G__46100;
count__46080_46084 = G__46101;
i__46081_46085 = G__46102;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__46076,map__46076__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__46076,map__46076__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1458852300998