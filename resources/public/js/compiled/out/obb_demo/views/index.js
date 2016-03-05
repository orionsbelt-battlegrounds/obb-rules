// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.views.index');
goog.require('cljs.core');
goog.require('obb_demo.views.many_games');
goog.require('obb_demo.views.layout.footer');
goog.require('obb_demo.views.player');
goog.require('obb_demo.views.layout.header');
goog.require('obb_demo.views.units');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
obb_demo.views.index.current_page = (function obb_demo$views$index$current_page(state){
var page = cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$units,page)){
return obb_demo.views.units.render(state);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$player,page)){
return obb_demo.views.player.render(state);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$many_DASH_games,page)){
return obb_demo.views.many_games.render(state);
} else {
return obb_demo.views.play.render(state);

}
}
}
});
obb_demo.views.index.render = (function obb_demo$views$index$render(var_args){
var args16146 = [];
var len__7214__auto___16149 = arguments.length;
var i__7215__auto___16150 = (0);
while(true){
if((i__7215__auto___16150 < len__7214__auto___16149)){
args16146.push((arguments[i__7215__auto___16150]));

var G__16151 = (i__7215__auto___16150 + (1));
i__7215__auto___16150 = G__16151;
continue;
} else {
}
break;
}

var G__16148 = args16146.length;
switch (G__16148) {
case 0:
return obb_demo.views.index.render.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return obb_demo.views.index.render.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16146.length)].join('')));

}
});

obb_demo.views.index.render.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.index.render,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(obb_demo.state.app_state) : cljs.core.deref.call(null,obb_demo.state.app_state))], null);
});

obb_demo.views.index.render.cljs$core$IFn$_invoke$arity$1 = (function (state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.layout.header.render], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bs_DASH_docs_DASH_section$clearfix,obb_demo.views.index.current_page(state)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.layout.footer.render], null)], null)], null);
});

obb_demo.views.index.render.cljs$lang$maxFixedArity = 1;
