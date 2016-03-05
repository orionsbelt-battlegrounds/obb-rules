// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.views.units');
goog.require('cljs.core');
goog.require('obb_rules.unit');
goog.require('obb_demo.state');
/**
 * Writes info about a unit
 */
obb_demo.views.units.unit_info_panel = (function obb_demo$views$units$unit_info_panel(unit){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$panel$panel_DASH_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$panel_DASH_heading,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$panel_DASH_title,obb_rules.unit.unit_name(unit)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$panel_DASH_body,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Attack: ",obb_rules.unit.unit_attack(unit)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Attack Type: ",cljs.core.name(obb_rules.unit.attack_type(unit))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"After Attack: ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16116_SHARP_){
return cljs.core.name(cljs.core.first(p1__16116_SHARP_));
}),cljs.core.cst$kw$after_DASH_attack.cljs$core$IFn$_invoke$arity$1(unit))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Range: ",obb_rules.unit.unit_range(unit)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Defense: ",obb_rules.unit.unit_defense(unit)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"After hit: ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16117_SHARP_){
return cljs.core.name(cljs.core.first(p1__16117_SHARP_));
}),cljs.core.cst$kw$after_DASH_hit.cljs$core$IFn$_invoke$arity$1(unit))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Movement Type: ",cljs.core.name(obb_rules.unit.unit_movement_type(unit))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Movement Cost: ",obb_rules.unit.unit_movement_cost(unit)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Type: ",cljs.core.name(obb_rules.unit.unit_type(unit))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Category: ",cljs.core.name(obb_rules.unit.unit_category(unit))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Displacement: ",cljs.core.name(obb_rules.unit.unit_displacement(unit))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Value: ",obb_rules.unit.unit_value(unit)], null)], null)], null)], null);
});
/**
 * Writes a panel with units by category
 */
obb_demo.views.units.units_panel = (function obb_demo$views$units$units_panel(category){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$panel$panel_DASH_primary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$panel_DASH_heading,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$panel_DASH_title,cljs.core.name(category)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$panel_DASH_body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$units,(function (){var iter__6928__auto__ = (function obb_demo$views$units$units_panel_$_iter__16124(s__16125){
return (new cljs.core.LazySeq(null,(function (){
var s__16125__$1 = s__16125;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__16125__$1);
if(temp__4657__auto__){
var s__16125__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16125__$2)){
var c__6926__auto__ = cljs.core.chunk_first(s__16125__$2);
var size__6927__auto__ = cljs.core.count(c__6926__auto__);
var b__16127 = cljs.core.chunk_buffer(size__6927__auto__);
if((function (){var i__16126 = (0);
while(true){
if((i__16126 < size__6927__auto__)){
var unit = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6926__auto__,i__16126);
cljs.core.chunk_append(b__16127,(function (){var unit_name = obb_rules.unit.unit_name(unit);
var url = [cljs.core.str("http://orionsbelt.eu/public/units/"),cljs.core.str(unit_name),cljs.core.str("_n.png")].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,unit_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,url,cljs.core.cst$kw$on_DASH_click,((function (i__16126,unit_name,url,unit,c__6926__auto__,size__6927__auto__,b__16127,s__16125__$2,temp__4657__auto__){
return (function (){
return obb_demo.state.set_page_data_BANG_(unit_name);
});})(i__16126,unit_name,url,unit,c__6926__auto__,size__6927__auto__,b__16127,s__16125__$2,temp__4657__auto__))
,cljs.core.cst$kw$alt,unit_name], null)], null)], null);
})());

var G__16130 = (i__16126 + (1));
i__16126 = G__16130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16127),obb_demo$views$units$units_panel_$_iter__16124(cljs.core.chunk_rest(s__16125__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16127),null);
}
} else {
var unit = cljs.core.first(s__16125__$2);
return cljs.core.cons((function (){var unit_name = obb_rules.unit.unit_name(unit);
var url = [cljs.core.str("http://orionsbelt.eu/public/units/"),cljs.core.str(unit_name),cljs.core.str("_n.png")].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,unit_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,url,cljs.core.cst$kw$on_DASH_click,((function (unit_name,url,unit,s__16125__$2,temp__4657__auto__){
return (function (){
return obb_demo.state.set_page_data_BANG_(unit_name);
});})(unit_name,url,unit,s__16125__$2,temp__4657__auto__))
,cljs.core.cst$kw$alt,unit_name], null)], null)], null);
})(),obb_demo$views$units$units_panel_$_iter__16124(cljs.core.rest(s__16125__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6928__auto__(obb_rules.unit.units_by_category(category));
})()], null)], null)], null);
});
obb_demo.views.units.units_ul = (function obb_demo$views$units$units_ul(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.units.units_panel,cljs.core.cst$kw$light], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.units.units_panel,cljs.core.cst$kw$medium], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.units.units_panel,cljs.core.cst$kw$heavy], null)], null);
});
obb_demo.views.units.render = (function obb_demo$views$units$render(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.units.units_ul], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_8,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.units.unit_info_panel,obb_rules.unit.fetch((function (){var or__6156__auto__ = cljs.core.cst$kw$units.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core.cst$kw$rain;
}
})())], null)], null)], null)], null);
});
