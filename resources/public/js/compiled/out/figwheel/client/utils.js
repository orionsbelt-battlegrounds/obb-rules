// Compiled by ClojureScript 1.7.28 {}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
goog.require('clojure.string');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return goog.inHtmlDocument_();
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
figwheel.client.utils.base_url_path = (function figwheel$client$utils$base_url_path(){
return clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__34795_SHARP_,p2__34794_SHARP_){
return [cljs.core.str(p2__34794_SHARP_)].join('');
}));
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
return new cljs.core.Keyword(null,"html","html",-998796897);

}
});
figwheel.client.utils.dispatch_custom_event = (function figwheel$client$utils$dispatch_custom_event(event_name,data){
if(cljs.core.truth_((function (){var and__16470__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__16470__auto__)){
return (window["CustomEvent"]);
} else {
return and__16470__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent(event_name,(function (){var obj34799 = {"detail":data};
return obj34799;
})())));
} else {
return null;
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = (((cljs.core.map_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o)))?cljs.core.prn_str.call(null,o):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(){
var args34804 = [];
var len__17521__auto___34810 = arguments.length;
var i__17522__auto___34811 = (0);
while(true){
if((i__17522__auto___34811 < len__17521__auto___34810)){
args34804.push((arguments[i__17522__auto___34811]));

var G__34812 = (i__17522__auto___34811 + (1));
i__17522__auto___34811 = G__34812;
continue;
} else {
}
break;
}

var G__34806 = args34804.length;
switch (G__34806) {
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34804.length)].join('')));

}
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),x);
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
var f = (function (){var pred__34807 = cljs.core._EQ_;
var expr__34808 = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__34807.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__34808))){
return ((function (pred__34807,expr__34808){
return (function (p1__34800_SHARP_){
return console.warn(p1__34800_SHARP_);
});
;})(pred__34807,expr__34808))
} else {
if(cljs.core.truth_(pred__34807.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__34808))){
return ((function (pred__34807,expr__34808){
return (function (p1__34801_SHARP_){
return console.debug(p1__34801_SHARP_);
});
;})(pred__34807,expr__34808))
} else {
if(cljs.core.truth_(pred__34807.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__34808))){
return ((function (pred__34807,expr__34808){
return (function (p1__34802_SHARP_){
return console.error(p1__34802_SHARP_);
});
;})(pred__34807,expr__34808))
} else {
return ((function (pred__34807,expr__34808){
return (function (p1__34803_SHARP_){
return console.log(p1__34803_SHARP_);
});
;})(pred__34807,expr__34808))
}
}
}
})();
return f.call(null,arg);
});

figwheel.client.utils.log.cljs$lang$maxFixedArity = 2;
figwheel.client.utils.eval_helper = (function figwheel$client$utils$eval_helper(code,p__34814){
var map__34817 = p__34814;
var map__34817__$1 = ((((!((map__34817 == null)))?((((map__34817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34817):map__34817);
var opts = map__34817__$1;
var eval_fn = cljs.core.get.call(null,map__34817__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
if(cljs.core.truth_(eval_fn)){
return eval_fn.call(null,code,opts);
} else {
return eval(code);
}
});

//# sourceMappingURL=utils.js.map?rel=1439049302815