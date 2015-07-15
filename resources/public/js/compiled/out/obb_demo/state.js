// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_demo.state');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof obb_demo.state.app_state !== 'undefined'){
} else {
obb_demo.state.app_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Sets the current page to be displayed
 */
obb_demo.state.set_page_BANG_ = (function obb_demo$state$set_page_BANG_(page){
return cljs.core.swap_BANG_.call(null,obb_demo.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),page);
});
/**
 * Gets the current page
 */
obb_demo.state.current_page = (function obb_demo$state$current_page(){
return new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obb_demo.state.app_state));
});
/**
 * Sets data for the current page
 */
obb_demo.state.set_page_data_BANG_ = (function obb_demo$state$set_page_data_BANG_(data){
return cljs.core.swap_BANG_.call(null,obb_demo.state.app_state,cljs.core.assoc,obb_demo.state.current_page.call(null),data);
});
/**
 * Gets the data of the current page
 */
obb_demo.state.get_page_data = (function obb_demo$state$get_page_data(){
return cljs.core.get.call(null,cljs.core.deref.call(null,obb_demo.state.app_state),obb_demo.state.current_page.call(null));
});

//# sourceMappingURL=state.js.map?rel=1436994408986