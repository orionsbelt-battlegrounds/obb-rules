// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('obb_demo.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__28336__delegate = function (x){
if(cljs.core.truth_(obb_demo.core.on_js_reload)){
return cljs.core.apply.call(null,obb_demo.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'obb-demo.core/on-js-reload' is missing");
}
};
var G__28336 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__28337__i = 0, G__28337__a = new Array(arguments.length -  0);
while (G__28337__i < G__28337__a.length) {G__28337__a[G__28337__i] = arguments[G__28337__i + 0]; ++G__28337__i;}
  x = new cljs.core.IndexedSeq(G__28337__a,0);
} 
return G__28336__delegate.call(this,x);};
G__28336.cljs$lang$maxFixedArity = 0;
G__28336.cljs$lang$applyTo = (function (arglist__28338){
var x = cljs.core.seq(arglist__28338);
return G__28336__delegate(x);
});
G__28336.cljs$core$IFn$_invoke$arity$variadic = G__28336__delegate;
return G__28336;
})()
,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1436379819850