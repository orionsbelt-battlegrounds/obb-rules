// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('obb_demo.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__28135__delegate = function (x){
if(cljs.core.truth_(obb_demo.core.on_js_reload)){
return cljs.core.apply.call(null,obb_demo.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'obb-demo.core/on-js-reload' is missing");
}
};
var G__28135 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__28136__i = 0, G__28136__a = new Array(arguments.length -  0);
while (G__28136__i < G__28136__a.length) {G__28136__a[G__28136__i] = arguments[G__28136__i + 0]; ++G__28136__i;}
  x = new cljs.core.IndexedSeq(G__28136__a,0);
} 
return G__28135__delegate.call(this,x);};
G__28135.cljs$lang$maxFixedArity = 0;
G__28135.cljs$lang$applyTo = (function (arglist__28137){
var x = cljs.core.seq(arglist__28137);
return G__28135__delegate(x);
});
G__28135.cljs$core$IFn$_invoke$arity$variadic = G__28135__delegate;
return G__28135;
})()
,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1436104832055