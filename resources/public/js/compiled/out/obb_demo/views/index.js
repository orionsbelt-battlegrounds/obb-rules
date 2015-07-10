// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_demo.views.index');
goog.require('cljs.core');
goog.require('obb_demo.views.layout.footer');
goog.require('obb_demo.views.layout.header');
goog.require('obb_demo.views.units');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
obb_demo.views.index.current_page = (function obb_demo$views$index$current_page(state){
var page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"units","units",-533089095),page)){
return obb_demo.views.units.render.call(null,state);
} else {
return obb_demo.views.play.render.call(null,state);

}
});
obb_demo.views.index.render = (function obb_demo$views$index$render(){
var G__35257 = arguments.length;
switch (G__35257) {
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.index.render,cljs.core.deref.call(null,obb_demo.state.app_state)], null);
});

obb_demo.views.index.render.cljs$core$IFn$_invoke$arity$1 = (function (state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.layout.header.render], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bs-docs-section.clearfix","div.bs-docs-section.clearfix",-1722678423),obb_demo.views.index.current_page.call(null,state)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.layout.footer.render], null)], null)], null);
});

obb_demo.views.index.render.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=index.js.map?rel=1436517561536