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
var G__13844 = x;
return reagent.impl.template.as_element(G__13844);
});
reagent.impl.component.do_render = (function reagent$impl$component$do_render(c){
var _STAR_current_component_STAR_13859 = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.component._STAR_current_component_STAR_ = c;

try{var f = (c["cljsRender"]);
var _ = ((cljs.core.ifn_QMARK_(f))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')))})());
var p = (c["props"]);
var res = ((((c["reagentRender"]) == null))?(function (){var G__13860 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13860) : f.call(null,G__13860));
})():(function (){var argv = (p["argv"]);
var n = cljs.core.count(argv);
var G__13861 = n;
switch (G__13861) {
case (1):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (2):
var G__13862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13862) : f.call(null,G__13862));

break;
case (3):
var G__13863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__13864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13863,G__13864) : f.call(null,G__13863,G__13864));

break;
case (4):
var G__13865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__13866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__13867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13865,G__13866,G__13867) : f.call(null,G__13865,G__13866,G__13867));

break;
case (5):
var G__13868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__13869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__13870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
var G__13871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(4));
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13868,G__13869,G__13870,G__13871) : f.call(null,G__13868,G__13869,G__13870,G__13871));

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
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_13859;
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
var G__13888 = (((key instanceof cljs.core.Keyword))?key.fqn:null);
switch (G__13888) {
case "getDefaultProps":
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("getDefaultProps not supported yet"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)))].join('')));


break;
case "getInitialState":
return ((function (G__13888){
return (function (){
var c = this;
var G__13889 = reagent.impl.component.state_atom(c);
var G__13890 = (function (){var G__13891 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13891) : f.call(null,G__13891));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13889,G__13890) : cljs.core.reset_BANG_.call(null,G__13889,G__13890));
});
;})(G__13888))

break;
case "componentWillReceiveProps":
return ((function (G__13888){
return (function (props){
var c = this;
var G__13892 = c;
var G__13893 = (props["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13892,G__13893) : f.call(null,G__13892,G__13893));
});
;})(G__13888))

break;
case "shouldComponentUpdate":
return ((function (G__13888){
return (function (nextprops,nextstate){
var or__6810__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(cljs.core.truth_(or__6810__auto__)){
return or__6810__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
if((f == null)){
return ((old_argv == null)) || ((new_argv == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_argv,new_argv));
} else {
var G__13894 = c;
var G__13895 = old_argv;
var G__13896 = new_argv;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13894,G__13895,G__13896) : f.call(null,G__13894,G__13895,G__13896));
}
}
});
;})(G__13888))

break;
case "componentWillUpdate":
return ((function (G__13888){
return (function (nextprops){
var c = this;
var G__13897 = c;
var G__13898 = (nextprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13897,G__13898) : f.call(null,G__13897,G__13898));
});
;})(G__13888))

break;
case "componentDidUpdate":
return ((function (G__13888){
return (function (oldprops){
var c = this;
var G__13899 = c;
var G__13900 = (oldprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13899,G__13900) : f.call(null,G__13899,G__13900));
});
;})(G__13888))

break;
case "componentWillMount":
return ((function (G__13888){
return (function (){
var c = this;
(c["cljsMountOrder"] = reagent.impl.batching.next_mount_count());

if((f == null)){
return null;
} else {
var G__13901 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13901) : f.call(null,G__13901));
}
});
;})(G__13888))

break;
case "componentWillUnmount":
return ((function (G__13888){
return (function (){
var c = this;
reagent.impl.batching.dispose(c);

if((f == null)){
return null;
} else {
var G__13902 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13902) : f.call(null,G__13902));
}
});
;})(G__13888))

break;
default:
return null;

}
});
reagent.impl.component.default_wrapper = (function reagent$impl$component$default_wrapper(f){
if(cljs.core.ifn_QMARK_(f)){
return (function() { 
var G__13904__delegate = function (args){
var c = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,c,args);
};
var G__13904 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13905__i = 0, G__13905__a = new Array(arguments.length -  0);
while (G__13905__i < G__13905__a.length) {G__13905__a[G__13905__i] = arguments[G__13905__i + 0]; ++G__13905__i;}
  args = new cljs.core.IndexedSeq(G__13905__a,0);
} 
return G__13904__delegate.call(this,args);};
G__13904.cljs$lang$maxFixedArity = 0;
G__13904.cljs$lang$applyTo = (function (arglist__13906){
var args = cljs.core.seq(arglist__13906);
return G__13904__delegate(args);
});
G__13904.cljs$core$IFn$_invoke$arity$variadic = G__13904__delegate;
return G__13904;
})()
;
} else {
return f;
}
});
reagent.impl.component.dont_wrap = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$cljsRender,null,cljs.core.constant$keyword$reagentRender,null,cljs.core.constant$keyword$render,null,cljs.core.constant$keyword$cljsName,null], null), null);
reagent.impl.component.dont_bind = (function reagent$impl$component$dont_bind(f){
if(cljs.core.fn_QMARK_(f)){
var G__13908 = f;
(G__13908["__reactDontBind"] = true);

return G__13908;
} else {
return f;
}
});
reagent.impl.component.get_wrapper = (function reagent$impl$component$get_wrapper(key,f,name){
if(cljs.core.truth_((function (){var G__13910 = key;
return (reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1(G__13910) : reagent.impl.component.dont_wrap.call(null,G__13910));
})())){
return reagent.impl.component.dont_bind(f);
} else {
var wrap = reagent.impl.component.custom_wrapper(key,f);
if(cljs.core.truth_((function (){var and__6798__auto__ = wrap;
if(cljs.core.truth_(and__6798__auto__)){
return f;
} else {
return and__6798__auto__;
}
})())){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Expected function in "),cljs.core.str(name),cljs.core.str(key),cljs.core.str(" but got "),cljs.core.str(f)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}
} else {
}

var or__6810__auto__ = wrap;
if(cljs.core.truth_(or__6810__auto__)){
return or__6810__auto__;
} else {
return reagent.impl.component.default_wrapper(f);
}
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$shouldComponentUpdate,null,cljs.core.constant$keyword$componentWillMount,null,cljs.core.constant$keyword$componentWillUnmount,null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1(reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__13912 = k;
return (reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1(G__13912) : reagent.impl.component.dash_to_camel.call(null,G__13912));
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
var or__6810__auto__ = (function (){var and__6798__auto__ = cljs.core.fn_QMARK_(f);
if(and__6798__auto__){
var or__6810__auto__ = (f["displayName"]);
if(cljs.core.truth_(or__6810__auto__)){
return or__6810__auto__;
} else {
return (f["name"]);
}
} else {
return and__6798__auto__;
}
})();
if(cljs.core.truth_(or__6810__auto__)){
return or__6810__auto__;
} else {
var or__6810__auto____$1 = (function (){var and__6798__auto__ = (function (){var G__13920 = f;
if(G__13920){
var bit__7477__auto__ = (G__13920.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__7477__auto__) || (G__13920.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})();
if(and__6798__auto__){
return cljs.core.name(f);
} else {
return and__6798__auto__;
}
})();
if(cljs.core.truth_(or__6810__auto____$1)){
return or__6810__auto____$1;
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
var render_fun = (function (){var or__6810__auto__ = cljs.core.constant$keyword$reagentRender.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__6810__auto__)){
return or__6810__auto__;
} else {
return cljs.core.constant$keyword$render.cljs$core$IFn$_invoke$arity$1(fun_map);
}
})();
var _ = ((cljs.core.ifn_QMARK_(render_fun))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Render must be a function, not "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([render_fun], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"render-fun","render-fun",-1209513086,null))], 0)))].join('')))})());
var name = [cljs.core.str((function (){var or__6810__auto__ = cljs.core.constant$keyword$displayName.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__6810__auto__)){
return or__6810__auto__;
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
var G__13922 = o;
(G__13922[cljs.core.name(k)] = v);

return G__13922;
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
var G__13923__delegate = function (args){
return reagent.impl.component.as_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args));
};
var G__13923 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13924__i = 0, G__13924__a = new Array(arguments.length -  0);
while (G__13924__i < G__13924__a.length) {G__13924__a[G__13924__i] = arguments[G__13924__i + 0]; ++G__13924__i;}
  args = new cljs.core.IndexedSeq(G__13924__a,0);
} 
return G__13923__delegate.call(this,args);};
G__13923.cljs$lang$maxFixedArity = 0;
G__13923.cljs$lang$applyTo = (function (arglist__13925){
var args = cljs.core.seq(arglist__13925);
return G__13923__delegate(args);
});
G__13923.cljs$core$IFn$_invoke$arity$variadic = G__13923__delegate;
return G__13923;
})()
;})(spec,res))
;
reagent.impl.util.cache_react_class(f,res);

reagent.impl.util.cache_react_class(res,res);

return f;
});
reagent.impl.component.comp_name = (function reagent$impl$component$comp_name(){
var n = (function (){var G__13927 = reagent.impl.component._STAR_current_component_STAR_;
if((G__13927 == null)){
return null;
} else {
return (G__13927["cljsName"])();
}
})();
if(!(cljs.core.empty_QMARK_(n))){
return [cljs.core.str(" (in "),cljs.core.str(n),cljs.core.str(")")].join('');
} else {
return "";
}

});
reagent.impl.component.shallow_obj_to_map = (function reagent$impl$component$shallow_obj_to_map(o){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7564__auto__ = (function reagent$impl$component$shallow_obj_to_map_$_iter__13934(s__13935){
return (new cljs.core.LazySeq(null,(function (){
var s__13935__$1 = s__13935;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13935__$1);
if(temp__4425__auto__){
var s__13935__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13935__$2)){
var c__7562__auto__ = cljs.core.chunk_first(s__13935__$2);
var size__7563__auto__ = cljs.core.count(c__7562__auto__);
var b__13937 = cljs.core.chunk_buffer(size__7563__auto__);
if((function (){var i__13936 = (0);
while(true){
if((i__13936 < size__7563__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7562__auto__,i__13936);
cljs.core.chunk_append(b__13937,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k])], null));

var G__13940 = (i__13936 + (1));
i__13936 = G__13940;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13937),reagent$impl$component$shallow_obj_to_map_$_iter__13934(cljs.core.chunk_rest(s__13935__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13937),null);
}
} else {
var k = cljs.core.first(s__13935__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k])], null),reagent$impl$component$shallow_obj_to_map_$_iter__13934(cljs.core.rest(s__13935__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7564__auto__(cljs.core.js_keys(o));
})());
});
reagent.impl.component.elem_counter = (0);
reagent.impl.component.reactify_component = (function reagent$impl$component$reactify_component(comp){
return (React["createClass"])({"displayName": "react-wrapper", "render": (function (){
var this$ = this;
return reagent.impl.component.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reagent.impl.component.shallow_obj_to_map((this$["props"])),cljs.core.constant$keyword$_DASH_elem_DASH_count,reagent.impl.component.elem_counter = (reagent.impl.component.elem_counter + (1)))], null));
})});
});