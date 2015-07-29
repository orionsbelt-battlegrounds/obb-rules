// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(obb_demo.state.app_state,cljs.core.assoc,cljs.core.constant$keyword$page,page);
});
/**
 * Gets the current page
 */
obb_demo.state.current_page = (function obb_demo$state$current_page(){
return cljs.core.constant$keyword$page.cljs$core$IFn$_invoke$arity$1((function (){var G__13420 = obb_demo.state.app_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13420) : cljs.core.deref.call(null,G__13420));
})());
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__13422 = obb_demo.state.app_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13422) : cljs.core.deref.call(null,G__13422));
})(),obb_demo.state.current_page());
});
