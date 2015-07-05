// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.views.index');
goog.require('cljs.core');
goog.require('obb_demo.game');
goog.require('obb_demo.views.layout.header');
goog.require('obb_demo.views.layout.footer');
obb_demo.views.index.render = (function obb_demo$views$index$render(){
var G__13450 = arguments.length;
switch (G__13450) {
case 0:
return obb_demo.views.index.render.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return obb_demo.views.index.render.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

obb_demo.views.index.render.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.index.render,(function (){var G__13451 = obb_demo.game.app_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13451) : cljs.core.deref.call(null,G__13451));
})()], null);
});

obb_demo.views.index.render.cljs$core$IFn$_invoke$arity$1 = (function (game){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.layout.header.render], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$bs_DASH_docs_DASH_section$clearfix,"TODO"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.layout.footer.render], null)], null)], null);
});

obb_demo.views.index.render.cljs$lang$maxFixedArity = 1;
