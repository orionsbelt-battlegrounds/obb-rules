// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_demo.views.units');
goog.require('cljs.core');
goog.require('obb_rules.unit');
goog.require('obb_demo.state');
/**
 * Writes info about a unit
 */
obb_demo.views.units.unit_info_panel = (function obb_demo$views$units$unit_info_panel(unit){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-info","div.panel.panel-info",1850762117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.panel-title","h3.panel-title",530261929),obb_rules.unit.unit_name.call(null,unit)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Attack: ",obb_rules.unit.unit_attack.call(null,unit)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Attack Type: ",cljs.core.name.call(null,obb_rules.unit.attack_type.call(null,unit))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"After Attack: ",cljs.core.map.call(null,(function (p1__33603_SHARP_){
return cljs.core.name.call(null,cljs.core.first.call(null,p1__33603_SHARP_));
}),new cljs.core.Keyword(null,"after-attack","after-attack",-1103058896).cljs$core$IFn$_invoke$arity$1(unit))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Range: ",obb_rules.unit.unit_range.call(null,unit)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Defense: ",obb_rules.unit.unit_defense.call(null,unit)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"After hit: ",cljs.core.map.call(null,(function (p1__33604_SHARP_){
return cljs.core.name.call(null,cljs.core.first.call(null,p1__33604_SHARP_));
}),new cljs.core.Keyword(null,"after-hit","after-hit",491119628).cljs$core$IFn$_invoke$arity$1(unit))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Movement Type: ",cljs.core.name.call(null,obb_rules.unit.unit_movement_type.call(null,unit))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Movement Cost: ",obb_rules.unit.unit_movement_cost.call(null,unit)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Type: ",cljs.core.name.call(null,obb_rules.unit.unit_type.call(null,unit))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Category: ",cljs.core.name.call(null,obb_rules.unit.unit_category.call(null,unit))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Displacement: ",cljs.core.name.call(null,obb_rules.unit.unit_displacement.call(null,unit))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Value: ",obb_rules.unit.unit_value.call(null,unit)], null)], null)], null)], null);
});
/**
 * Writes a panel with units by category
 */
obb_demo.views.units.units_panel = (function obb_demo$views$units$units_panel(category){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-primary","div.panel.panel-primary",-1076833638),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.panel-title","h3.panel-title",530261929),cljs.core.name.call(null,category)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.units","ul.units",-1301352355),(function (){var iter__16863__auto__ = (function obb_demo$views$units$units_panel_$_iter__33609(s__33610){
return (new cljs.core.LazySeq(null,(function (){
var s__33610__$1 = s__33610;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__33610__$1);
if(temp__4425__auto__){
var s__33610__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33610__$2)){
var c__16861__auto__ = cljs.core.chunk_first.call(null,s__33610__$2);
var size__16862__auto__ = cljs.core.count.call(null,c__16861__auto__);
var b__33612 = cljs.core.chunk_buffer.call(null,size__16862__auto__);
if((function (){var i__33611 = (0);
while(true){
if((i__33611 < size__16862__auto__)){
var unit = cljs.core._nth.call(null,c__16861__auto__,i__33611);
cljs.core.chunk_append.call(null,b__33612,(function (){var unit_name = obb_rules.unit.unit_name.call(null,unit);
var url = [cljs.core.str("http://orionsbelt.eu/public/units/"),cljs.core.str(unit_name),cljs.core.str("_n.png")].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),unit_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),url,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__33611,unit_name,url,unit,c__16861__auto__,size__16862__auto__,b__33612,s__33610__$2,temp__4425__auto__){
return (function (){
return obb_demo.state.set_page_data_BANG_.call(null,unit_name);
});})(i__33611,unit_name,url,unit,c__16861__auto__,size__16862__auto__,b__33612,s__33610__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"alt","alt",-3214426),unit_name], null)], null)], null);
})());

var G__33613 = (i__33611 + (1));
i__33611 = G__33613;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33612),obb_demo$views$units$units_panel_$_iter__33609.call(null,cljs.core.chunk_rest.call(null,s__33610__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33612),null);
}
} else {
var unit = cljs.core.first.call(null,s__33610__$2);
return cljs.core.cons.call(null,(function (){var unit_name = obb_rules.unit.unit_name.call(null,unit);
var url = [cljs.core.str("http://orionsbelt.eu/public/units/"),cljs.core.str(unit_name),cljs.core.str("_n.png")].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),unit_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),url,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (unit_name,url,unit,s__33610__$2,temp__4425__auto__){
return (function (){
return obb_demo.state.set_page_data_BANG_.call(null,unit_name);
});})(unit_name,url,unit,s__33610__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"alt","alt",-3214426),unit_name], null)], null)], null);
})(),obb_demo$views$units$units_panel_$_iter__33609.call(null,cljs.core.rest.call(null,s__33610__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16863__auto__.call(null,obb_rules.unit.units_by_category.call(null,category));
})()], null)], null)], null);
});
obb_demo.views.units.units_ul = (function obb_demo$views$units$units_ul(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.units.units_panel,new cljs.core.Keyword(null,"light","light",1918998747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.units.units_panel,new cljs.core.Keyword(null,"medium","medium",-1864319384)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.units.units_panel,new cljs.core.Keyword(null,"heavy","heavy",2126165008)], null)], null);
});
obb_demo.views.units.render = (function obb_demo$views$units$render(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",-519713955),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.units.units_ul], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-8","div.col-lg-8",383057431),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.units.unit_info_panel,obb_rules.unit.fetch.call(null,(function (){var or__16109__auto__ = new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return new cljs.core.Keyword(null,"rain","rain",166635710);
}
})())], null)], null)], null)], null);
});

//# sourceMappingURL=units.js.map?rel=1436517559451