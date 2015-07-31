// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.component.state_atom = (function reagent$impl$component$state_atom(this$){
var sa = (this$["cljsState"]);
if(!((sa == null))){
return sa;
} else {
return (this$["cljsState"] = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
reagent.impl.component.as_element = (function reagent$impl$component$as_element(x){
var G__14004 = x;
return reagent.impl.template.as_element(G__14004);
});
reagent.impl.component.do_render = (function reagent$impl$component$do_render(c){
var _STAR_current_component_STAR_14019 = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.component._STAR_current_component_STAR_ = c;

try{var f = (c["cljsRender"]);
var _ = ((cljs.core.ifn_QMARK_(f))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')))})());
var p = (c["props"]);
var res = ((((c["reagentRender"]) == null))?(function (){var G__14020 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14020) : f.call(null,G__14020));
})():(function (){var argv = (p["argv"]);
var n = cljs.core.count(argv);
var G__14021 = n;
switch (G__14021) {
case (1):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (2):
var G__14022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14022) : f.call(null,G__14022));

break;
case (3):
var G__14023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__14024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14023,G__14024) : f.call(null,G__14023,G__14024));

break;
case (4):
var G__14025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__14026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__14027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14025,G__14026,G__14027) : f.call(null,G__14025,G__14026,G__14027));

break;
case (5):
var G__14028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__14029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__14030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
var G__14031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(4));
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__14028,G__14029,G__14030,G__14031) : f.call(null,G__14028,G__14029,G__14030,G__14031));

break;
default:
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(argv,(1)));

}
})());
if(cljs.core.vector_QMARK_(res)){
return reagent.impl.component.as_element(res);
} else {
if(cljs.core.ifn_QMARK_(res)){
(c["cljsRender"] = res);

return reagent$impl$component$do_render(c);
} else {
return res;
}
}
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_14019;
}});
reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$render,(function (){
var c = this;
if(cljs.core.not(reagent.impl.component._STAR_non_reactive_STAR_)){
return reagent.impl.batching.run_reactively(c,((function (c){
return (function (){
return reagent.impl.component.do_render(c);
});})(c))
);
} else {
return reagent.impl.component.do_render(c);
}
})], null);
reagent.impl.component.custom_wrapper = (function reagent$impl$component$custom_wrapper(key,f){
var G__14048 = (((key instanceof cljs.core.Keyword))?key.fqn:null);
switch (G__14048) {
case "getDefaultProps":
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("getDefaultProps not supported yet"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)))].join('')));


break;
case "getInitialState":
return ((function (G__14048){
return (function (){
var c = this;
var G__14049 = reagent.impl.component.state_atom(c);
var G__14050 = (function (){var G__14051 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14051) : f.call(null,G__14051));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14049,G__14050) : cljs.core.reset_BANG_.call(null,G__14049,G__14050));
});
;})(G__14048))

break;
case "componentWillReceiveProps":
return ((function (G__14048){
return (function (props){
var c = this;
var G__14052 = c;
var G__14053 = (props["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14052,G__14053) : f.call(null,G__14052,G__14053));
});
;})(G__14048))

break;
case "shouldComponentUpdate":
return ((function (G__14048){
return (function (nextprops,nextstate){
var or__6936__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(cljs.core.truth_(or__6936__auto__)){
return or__6936__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
if((f == null)){
return ((old_argv == null)) || ((new_argv == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_argv,new_argv));
} else {
var G__14054 = c;
var G__14055 = old_argv;
var G__14056 = new_argv;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14054,G__14055,G__14056) : f.call(null,G__14054,G__14055,G__14056));
}
}
});
;})(G__14048))

break;
case "componentWillUpdate":
return ((function (G__14048){
return (function (nextprops){
var c = this;
var G__14057 = c;
var G__14058 = (nextprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14057,G__14058) : f.call(null,G__14057,G__14058));
});
;})(G__14048))

break;
case "componentDidUpdate":
return ((function (G__14048){
return (function (oldprops){
var c = this;
var G__14059 = c;
var G__14060 = (oldprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14059,G__14060) : f.call(null,G__14059,G__14060));
});
;})(G__14048))

break;
case "componentWillMount":
return ((function (G__14048){
return (function (){
var c = this;
(c["cljsMountOrder"] = reagent.impl.batching.next_mount_count());

if((f == null)){
return null;
} else {
var G__14061 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14061) : f.call(null,G__14061));
}
});
;})(G__14048))

break;
case "componentWillUnmount":
return ((function (G__14048){
return (function (){
var c = this;
reagent.impl.batching.dispose(c);

if((f == null)){
return null;
} else {
var G__14062 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14062) : f.call(null,G__14062));
}
});
;})(G__14048))

break;
default:
return null;

}
});
reagent.impl.component.default_wrapper = (function reagent$impl$component$default_wrapper(f){
if(cljs.core.ifn_QMARK_(f)){
return (function() { 
var G__14064__delegate = function (args){
var c = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,c,args);
};
var G__14064 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14065__i = 0, G__14065__a = new Array(arguments.length -  0);
while (G__14065__i < G__14065__a.length) {G__14065__a[G__14065__i] = arguments[G__14065__i + 0]; ++G__14065__i;}
  args = new cljs.core.IndexedSeq(G__14065__a,0);
} 
return G__14064__delegate.call(this,args);};
G__14064.cljs$lang$maxFixedArity = 0;
G__14064.cljs$lang$applyTo = (function (arglist__14066){
var args = cljs.core.seq(arglist__14066);
return G__14064__delegate(args);
});
G__14064.cljs$core$IFn$_invoke$arity$variadic = G__14064__delegate;
return G__14064;
})()
;
} else {
return f;
}
});
reagent.impl.component.dont_wrap = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$cljsRender,null,cljs.core.constant$keyword$reagentRender,null,cljs.core.constant$keyword$render,null,cljs.core.constant$keyword$cljsName,null], null), null);
reagent.impl.component.dont_bind = (function reagent$impl$component$dont_bind(f){
if(cljs.core.fn_QMARK_(f)){
var G__14068 = f;
(G__14068["__reactDontBind"] = true);

return G__14068;
} else {
return f;
}
});
reagent.impl.component.get_wrapper = (function reagent$impl$component$get_wrapper(key,f,name){
if(cljs.core.truth_((function (){var G__14070 = key;
return (reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1(G__14070) : reagent.impl.component.dont_wrap.call(null,G__14070));
})())){
return reagent.impl.component.dont_bind(f);
} else {
var wrap = reagent.impl.component.custom_wrapper(key,f);
if(cljs.core.truth_((function (){var and__6924__auto__ = wrap;
if(cljs.core.truth_(and__6924__auto__)){
return f;
} else {
return and__6924__auto__;
}
})())){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Expected function in "),cljs.core.str(name),cljs.core.str(key),cljs.core.str(" but got "),cljs.core.str(f)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}
} else {
}

var or__6936__auto__ = wrap;
if(cljs.core.truth_(or__6936__auto__)){
return or__6936__auto__;
} else {
return reagent.impl.component.default_wrapper(f);
}
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$shouldComponentUpdate,null,cljs.core.constant$keyword$componentWillMount,null,cljs.core.constant$keyword$componentWillUnmount,null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1(reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__14072 = k;
return (reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1(G__14072) : reagent.impl.component.dash_to_camel.call(null,G__14072));
})()),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.impl.component.obligatory,fun_map], 0));
});
reagent.impl.component.add_render = (function reagent$impl$component$add_render(fun_map,render_f,name){
var fm = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fun_map,cljs.core.constant$keyword$cljsRender,render_f,cljs.core.array_seq([cljs.core.constant$keyword$render,cljs.core.constant$keyword$render.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.static_fns)], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fm,cljs.core.constant$keyword$cljsName,((function (fm){
return (function (){
return name;
});})(fm))
);

});
reagent.impl.component.fun_name = (function reagent$impl$component$fun_name(f){
var or__6936__auto__ = (function (){var and__6924__auto__ = cljs.core.fn_QMARK_(f);
if(and__6924__auto__){
var or__6936__auto__ = (f["displayName"]);
if(cljs.core.truth_(or__6936__auto__)){
return or__6936__auto__;
} else {
return (f["name"]);
}
} else {
return and__6924__auto__;
}
})();
if(cljs.core.truth_(or__6936__auto__)){
return or__6936__auto__;
} else {
var or__6936__auto____$1 = (function (){var and__6924__auto__ = (function (){var G__14080 = f;
if(G__14080){
var bit__7603__auto__ = (G__14080.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__7603__auto__) || (G__14080.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})();
if(and__6924__auto__){
return cljs.core.name(f);
} else {
return and__6924__auto__;
}
})();
if(cljs.core.truth_(or__6936__auto____$1)){
return or__6936__auto____$1;
} else {
var m = cljs.core.meta(f);
if(cljs.core.map_QMARK_(m)){
return cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
});
reagent.impl.component.wrap_funs = (function reagent$impl$component$wrap_funs(fmap){
var fun_map = (function (){var temp__4427__auto__ = cljs.core.constant$keyword$componentFunction.cljs$core$IFn$_invoke$arity$1(fmap);
if((temp__4427__auto__ == null)){
return fmap;
} else {
var cf = temp__4427__auto__;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fmap,cljs.core.constant$keyword$reagentRender,cf),cljs.core.constant$keyword$componentFunction);
}
})();
var render_fun = (function (){var or__6936__auto__ = cljs.core.constant$keyword$reagentRender.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__6936__auto__)){
return or__6936__auto__;
} else {
return cljs.core.constant$keyword$render.cljs$core$IFn$_invoke$arity$1(fun_map);
}
})();
var _ = ((cljs.core.ifn_QMARK_(render_fun))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Render must be a function, not "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([render_fun], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"render-fun","render-fun",-1209513086,null))], 0)))].join('')))})());
var name = [cljs.core.str((function (){var or__6936__auto__ = cljs.core.constant$keyword$displayName.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__6936__auto__)){
return or__6936__auto__;
} else {
return reagent.impl.component.fun_name(render_fun);
}
})())].join('');
var name_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_(name))?[cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"))].join(''):name);
var fmap__$1 = reagent.impl.component.add_render(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fun_map,cljs.core.constant$keyword$displayName,name_SINGLEQUOTE_),render_fun,name_SINGLEQUOTE_);
return cljs.core.reduce_kv(((function (fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1){
return (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,reagent.impl.component.get_wrapper(k,v,name_SINGLEQUOTE_));
});})(fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1))
,cljs.core.PersistentArrayMap.EMPTY,fmap__$1);
});
reagent.impl.component.map_to_js = (function reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv((function (o,k,v){
var G__14082 = o;
(G__14082[cljs.core.name(k)] = v);

return G__14082;
}),{},m);
});
reagent.impl.component.cljsify = (function reagent$impl$component$cljsify(body){
return reagent.impl.component.map_to_js(reagent.impl.component.wrap_funs(reagent.impl.component.add_obligatory(reagent.impl.component.camelify_map_keys(body))));
});
reagent.impl.component.create_class = (function reagent$impl$component$create_class(body){
if(cljs.core.map_QMARK_(body)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"body","body",-408674142,null))], 0)))].join('')));
}

var spec = reagent.impl.component.cljsify(body);
var res = (React["createClass"])(spec);
var f = ((function (spec,res){
return (function() { 
var G__14083__delegate = function (args){
return reagent.impl.component.as_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args));
};
var G__14083 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14084__i = 0, G__14084__a = new Array(arguments.length -  0);
while (G__14084__i < G__14084__a.length) {G__14084__a[G__14084__i] = arguments[G__14084__i + 0]; ++G__14084__i;}
  args = new cljs.core.IndexedSeq(G__14084__a,0);
} 
return G__14083__delegate.call(this,args);};
G__14083.cljs$lang$maxFixedArity = 0;
G__14083.cljs$lang$applyTo = (function (arglist__14085){
var args = cljs.core.seq(arglist__14085);
return G__14083__delegate(args);
});
G__14083.cljs$core$IFn$_invoke$arity$variadic = G__14083__delegate;
return G__14083;
})()
;})(spec,res))
;
reagent.impl.util.cache_react_class(f,res);

reagent.impl.util.cache_react_class(res,res);

return f;
});
reagent.impl.component.comp_name = (function reagent$impl$component$comp_name(){
var n = (function (){var G__14087 = reagent.impl.component._STAR_current_component_STAR_;
if((G__14087 == null)){
return null;
} else {
return (G__14087["cljsName"])();
}
})();
if(!(cljs.core.empty_QMARK_(n))){
return [cljs.core.str(" (in "),cljs.core.str(n),cljs.core.str(")")].join('');
} else {
return "";
}

});
reagent.impl.component.shallow_obj_to_map = (function reagent$impl$component$shallow_obj_to_map(o){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7690__auto__ = (function reagent$impl$component$shallow_obj_to_map_$_iter__14094(s__14095){
return (new cljs.core.LazySeq(null,(function (){
var s__14095__$1 = s__14095;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__14095__$1);
if(temp__4425__auto__){
var s__14095__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14095__$2)){
var c__7688__auto__ = cljs.core.chunk_first(s__14095__$2);
var size__7689__auto__ = cljs.core.count(c__7688__auto__);
var b__14097 = cljs.core.chunk_buffer(size__7689__auto__);
if((function (){var i__14096 = (0);
while(true){
if((i__14096 < size__7689__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7688__auto__,i__14096);
cljs.core.chunk_append(b__14097,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k])], null));

var G__14100 = (i__14096 + (1));
i__14096 = G__14100;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14097),reagent$impl$component$shallow_obj_to_map_$_iter__14094(cljs.core.chunk_rest(s__14095__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14097),null);
}
} else {
var k = cljs.core.first(s__14095__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k])], null),reagent$impl$component$shallow_obj_to_map_$_iter__14094(cljs.core.rest(s__14095__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7690__auto__(cljs.core.js_keys(o));
})());
});
reagent.impl.component.elem_counter = (0);
reagent.impl.component.reactify_component = (function reagent$impl$component$reactify_component(comp){
return (React["createClass"])({"displayName": "react-wrapper", "render": (function (){
var this$ = this;
return reagent.impl.component.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reagent.impl.component.shallow_obj_to_map((this$["props"])),cljs.core.constant$keyword$_DASH_elem_DASH_count,reagent.impl.component.elem_counter = (reagent.impl.component.elem_counter + (1)))], null));
})});
});
