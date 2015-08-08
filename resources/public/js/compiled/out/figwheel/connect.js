// Compiled by ClojureScript 1.7.28 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('obb_demo.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__39953__delegate = function (x){
if(cljs.core.truth_(obb_demo.core.on_js_reload)){
return cljs.core.apply.call(null,obb_demo.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'obb-demo.core/on-js-reload' is missing");
}
};
var G__39953 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__39954__i = 0, G__39954__a = new Array(arguments.length -  0);
while (G__39954__i < G__39954__a.length) {G__39954__a[G__39954__i] = arguments[G__39954__i + 0]; ++G__39954__i;}
  x = new cljs.core.IndexedSeq(G__39954__a,0);
} 
return G__39953__delegate.call(this,x);};
G__39953.cljs$lang$maxFixedArity = 0;
G__39953.cljs$lang$applyTo = (function (arglist__39955){
var x = cljs.core.seq(arglist__39955);
return G__39953__delegate(x);
});
G__39953.cljs$core$IFn$_invoke$arity$variadic = G__39953__delegate;
return G__39953;
})()
,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1439049328586