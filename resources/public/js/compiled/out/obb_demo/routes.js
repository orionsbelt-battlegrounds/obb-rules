// Compiled by ClojureScript 1.7.228 {}
goog.provide('obb_demo.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('obb_demo.views.units');
goog.require('obb_demo.views.index');
goog.require('obb_demo.state');
goog.require('obb_demo.views.play');
var action__20764__auto___46143 = (function (params__20765__auto__){
if(cljs.core.map_QMARK_.call(null,params__20765__auto__)){
var map__46140 = params__20765__auto__;
var map__46140__$1 = ((((!((map__46140 == null)))?((((map__46140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46140):map__46140);
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915));
} else {
if(cljs.core.vector_QMARK_.call(null,params__20765__auto__)){
var vec__46142 = params__20765__auto__;
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__20764__auto___46143);

var action__20764__auto___46147 = (function (params__20765__auto__){
if(cljs.core.map_QMARK_.call(null,params__20765__auto__)){
var map__46144 = params__20765__auto__;
var map__46144__$1 = ((((!((map__46144 == null)))?((((map__46144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46144):map__46144);
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"player","player",-97687400));
} else {
if(cljs.core.vector_QMARK_.call(null,params__20765__auto__)){
var vec__46146 = params__20765__auto__;
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"player","player",-97687400));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/play",action__20764__auto___46147);

var action__20764__auto___46151 = (function (params__20765__auto__){
if(cljs.core.map_QMARK_.call(null,params__20765__auto__)){
var map__46148 = params__20765__auto__;
var map__46148__$1 = ((((!((map__46148 == null)))?((((map__46148.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46148.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46148):map__46148);
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"many-games","many-games",1856139136));
} else {
if(cljs.core.vector_QMARK_.call(null,params__20765__auto__)){
var vec__46150 = params__20765__auto__;
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"many-games","many-games",1856139136));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/many-games",action__20764__auto___46151);

var action__20764__auto___46155 = (function (params__20765__auto__){
if(cljs.core.map_QMARK_.call(null,params__20765__auto__)){
var map__46152 = params__20765__auto__;
var map__46152__$1 = ((((!((map__46152 == null)))?((((map__46152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46152):map__46152);
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"units","units",-533089095));
} else {
if(cljs.core.vector_QMARK_.call(null,params__20765__auto__)){
var vec__46154 = params__20765__auto__;
return obb_demo.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"units","units",-533089095));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/units",action__20764__auto___46155);


//# sourceMappingURL=routes.js.map?rel=1458852301310