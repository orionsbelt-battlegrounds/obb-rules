// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
goog.provide('obb_demo.views.units');
goog.require('cljs.core');
goog.require('obb_rules.unit');
goog.require('obb_demo.state');
/**
 * Writes info about a unit
 */
obb_demo.views.units.unit_info_panel = (function obb_demo$views$units$unit_info_panel(unit){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel$panel_DASH_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel_DASH_heading,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h3$panel_DASH_title,obb_rules.unit.unit_name(unit)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel_DASH_body,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ul,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,"Attack: ",obb_rules.unit.unit_attack(unit)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,"Attack Type: ",cljs.core.name(obb_rules.unit.attack_type(unit))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,"After Attack: ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11119_SHARP_){
return cljs.core.name(cljs.core.first(p1__11119_SHARP_));
}),cljs.core.constant$keyword$after_DASH_attack.cljs$core$IFn$_invoke$arity$1(unit))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,"Range: ",obb_rules.unit.unit_range(unit)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,"Defense: ",obb_rules.unit.unit_defense(unit)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,"After hit: ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11120_SHARP_){
return cljs.core.name(cljs.core.first(p1__11120_SHARP_));
}),cljs.core.constant$keyword$after_DASH_hit.cljs$core$IFn$_invoke$arity$1(unit))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,"Movement Type: ",cljs.core.name(obb_rules.unit.unit_movement_type(unit))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,"Movement Cost: ",obb_rules.unit.unit_movement_cost(unit)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,"Type: ",cljs.core.name(obb_rules.unit.unit_type(unit))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,"Category: ",cljs.core.name(obb_rules.unit.unit_category(unit))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,"Displacement: ",cljs.core.name(obb_rules.unit.unit_displacement(unit))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,"Value: ",obb_rules.unit.unit_value(unit)], null)], null)], null)], null);
});
/**
 * Writes a panel with units by category
 */
obb_demo.views.units.units_panel = (function obb_demo$views$units$units_panel(category){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel$panel_DASH_primary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel_DASH_heading,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h3$panel_DASH_title,cljs.core.name(category)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$panel_DASH_body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ul$units,(function (){var iter__7952__auto__ = (function obb_demo$views$units$units_panel_$_iter__11127(s__11128){
return (new cljs.core.LazySeq(null,(function (){
var s__11128__$1 = s__11128;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__11128__$1);
if(temp__4425__auto__){
var s__11128__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11128__$2)){
var c__7950__auto__ = cljs.core.chunk_first(s__11128__$2);
var size__7951__auto__ = cljs.core.count(c__7950__auto__);
var b__11130 = cljs.core.chunk_buffer(size__7951__auto__);
if((function (){var i__11129 = (0);
while(true){
if((i__11129 < size__7951__auto__)){
var unit = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7950__auto__,i__11129);
cljs.core.chunk_append(b__11130,(function (){var unit_name = obb_rules.unit.unit_name(unit);
var url = [cljs.core.str("http://orionsbelt.eu/public/units/"),cljs.core.str(unit_name),cljs.core.str("_n.png")].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$key,unit_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$src,url,cljs.core.constant$keyword$on_DASH_click,((function (i__11129,unit_name,url,unit,c__7950__auto__,size__7951__auto__,b__11130,s__11128__$2,temp__4425__auto__){
return (function (){
return obb_demo.state.set_page_data_BANG_(unit_name);
});})(i__11129,unit_name,url,unit,c__7950__auto__,size__7951__auto__,b__11130,s__11128__$2,temp__4425__auto__))
,cljs.core.constant$keyword$alt,unit_name], null)], null)], null);
})());

var G__11133 = (i__11129 + (1));
i__11129 = G__11133;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11130),obb_demo$views$units$units_panel_$_iter__11127(cljs.core.chunk_rest(s__11128__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11130),null);
}
} else {
var unit = cljs.core.first(s__11128__$2);
return cljs.core.cons((function (){var unit_name = obb_rules.unit.unit_name(unit);
var url = [cljs.core.str("http://orionsbelt.eu/public/units/"),cljs.core.str(unit_name),cljs.core.str("_n.png")].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$key,unit_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$src,url,cljs.core.constant$keyword$on_DASH_click,((function (unit_name,url,unit,s__11128__$2,temp__4425__auto__){
return (function (){
return obb_demo.state.set_page_data_BANG_(unit_name);
});})(unit_name,url,unit,s__11128__$2,temp__4425__auto__))
,cljs.core.constant$keyword$alt,unit_name], null)], null)], null);
})(),obb_demo$views$units$units_panel_$_iter__11127(cljs.core.rest(s__11128__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7952__auto__(obb_rules.unit.units_by_category(category));
})()], null)], null)], null);
});
obb_demo.views.units.units_ul = (function obb_demo$views$units$units_ul(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.units.units_panel,cljs.core.constant$keyword$light], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.units.units_panel,cljs.core.constant$keyword$medium], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.units.units_panel,cljs.core.constant$keyword$heavy], null)], null);
});
obb_demo.views.units.render = (function obb_demo$views$units$render(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_lg_DASH_4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.units.units_ul], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_lg_DASH_8,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_demo.views.units.unit_info_panel,obb_rules.unit.fetch((function (){var or__7199__auto__ = cljs.core.constant$keyword$units.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__7199__auto__)){
return or__7199__auto__;
} else {
return cljs.core.constant$keyword$rain;
}
})())], null)], null)], null)], null);
});
