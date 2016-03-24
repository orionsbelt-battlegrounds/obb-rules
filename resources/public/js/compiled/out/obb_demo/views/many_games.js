// Compiled by ClojureScript 1.7.228 {}
goog.provide('obb_demo.views.many_games');
goog.require('cljs.core');
goog.require('obb_demo.processor');
goog.require('obb_rules.math');
goog.require('obb_rules.evaluator');
goog.require('obb_demo.boardground');
goog.require('obb_rules.result');
goog.require('obb_rules.game');
goog.require('obb_rules.turn');
goog.require('obb_demo.state');
goog.require('obb_rules.stash');
goog.require('obb_demo.views.power_bar');
/**
 * Gets the current games or setups them
 */
obb_demo.views.many_games.get_games_data = (function obb_demo$views$many_games$get_games_data(state){
var temp__4655__auto__ = new cljs.core.Keyword(null,"many-games","many-games",1856139136).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__4655__auto__)){
var datas = temp__4655__auto__;
return datas;
} else {
var games = cljs.core.take.call(null,(6),cljs.core.repeatedly.call(null,obb_demo.processor.deployed_game));
var datas = cljs.core.mapv.call(null,((function (games,temp__4655__auto__){
return (function (game){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game","game",-441523833),game], null);
});})(games,temp__4655__auto__))
,games);
obb_demo.state.set_page_data_BANG_.call(null,datas);

return datas;
}
});
/**
 * Generates and restarts a new game
 */
obb_demo.views.many_games.restart_game = (function obb_demo$views$many_games$restart_game(){
return obb_demo.state.set_page_data_BANG_.call(null,null);
});
obb_demo.views.many_games.render = (function obb_demo$views$many_games$render(state){
var datas = obb_demo.views.many_games.get_games_data.call(null,state);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-12","div.col-lg-12",1588800498),(function (){var iter__19142__auto__ = ((function (datas){
return (function obb_demo$views$many_games$render_$_iter__46124(s__46125){
return (new cljs.core.LazySeq(null,((function (datas){
return (function (){
var s__46125__$1 = s__46125;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__46125__$1);
if(temp__4657__auto__){
var s__46125__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46125__$2)){
var c__19140__auto__ = cljs.core.chunk_first.call(null,s__46125__$2);
var size__19141__auto__ = cljs.core.count.call(null,c__19140__auto__);
var b__46127 = cljs.core.chunk_buffer.call(null,size__19141__auto__);
if((function (){var i__46126 = (0);
while(true){
if((i__46126 < size__19141__auto__)){
var game_data = cljs.core._nth.call(null,c__19140__auto__,i__46126);
cljs.core.chunk_append.call(null,b__46127,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",-519713955),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand_int.call(null,(10000))], null),obb_demo.views.power_bar.render.call(null,new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(game_data)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.render,cljs.core.PersistentArrayMap.EMPTY,game_data], null)], null));

var G__46128 = (i__46126 + (1));
i__46126 = G__46128;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46127),obb_demo$views$many_games$render_$_iter__46124.call(null,cljs.core.chunk_rest.call(null,s__46125__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46127),null);
}
} else {
var game_data = cljs.core.first.call(null,s__46125__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",-519713955),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand_int.call(null,(10000))], null),obb_demo.views.power_bar.render.call(null,new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(game_data)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.boardground.render,cljs.core.PersistentArrayMap.EMPTY,game_data], null)], null),obb_demo$views$many_games$render_$_iter__46124.call(null,cljs.core.rest.call(null,s__46125__$2)));
}
} else {
return null;
}
break;
}
});})(datas))
,null,null));
});})(datas))
;
return iter__19142__auto__.call(null,datas);
})()], null)], null);
});

//# sourceMappingURL=many_games.js.map?rel=1458852301221