// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('obb_demo.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__41927__delegate = function (x){
if(cljs.core.truth_(obb_demo.core.on_js_reload)){
return cljs.core.apply.call(null,obb_demo.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'obb-demo.core/on-js-reload' is missing");
}
};
var G__41927 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__41928__i = 0, G__41928__a = new Array(arguments.length -  0);
while (G__41928__i < G__41928__a.length) {G__41928__a[G__41928__i] = arguments[G__41928__i + 0]; ++G__41928__i;}
  x = new cljs.core.IndexedSeq(G__41928__a,0);
} 
return G__41927__delegate.call(this,x);};
G__41927.cljs$lang$maxFixedArity = 0;
G__41927.cljs$lang$applyTo = (function (arglist__41929){
var x = cljs.core.seq(arglist__41929);
return G__41927__delegate(x);
});
G__41927.cljs$core$IFn$_invoke$arity$variadic = G__41927__delegate;
return G__41927;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1454263154728