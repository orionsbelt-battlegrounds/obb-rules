// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.state');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof obb_demo.state.app_state !== 'undefined'){
} else {
obb_demo.state.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Sets the current page to be displayed
 */
obb_demo.state.set_page_BANG_ = (function obb_demo$state$set_page_BANG_(page){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(obb_demo.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,page);
});
/**
 * Gets the current page
 */
obb_demo.state.current_page = (function obb_demo$state$current_page(){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(obb_demo.state.app_state) : cljs.core.deref.call(null,obb_demo.state.app_state)));
});
/**
 * Sets data for the current page
 */
obb_demo.state.set_page_data_BANG_ = (function obb_demo$state$set_page_data_BANG_(data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(obb_demo.state.app_state,cljs.core.assoc,obb_demo.state.current_page(),data);
});
/**
 * Gets the data of the current page
 */
obb_demo.state.get_page_data = (function obb_demo$state$get_page_data(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(obb_demo.state.app_state) : cljs.core.deref.call(null,obb_demo.state.app_state)),obb_demo.state.current_page());
});
