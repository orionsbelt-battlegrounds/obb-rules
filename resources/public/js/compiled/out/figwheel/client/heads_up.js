// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__17149__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17149__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__24547_24555 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__24548_24556 = null;
var count__24549_24557 = (0);
var i__24550_24558 = (0);
while(true){
if((i__24550_24558 < count__24549_24557)){
var k_24559 = cljs.core._nth.call(null,chunk__24548_24556,i__24550_24558);
e.setAttribute(cljs.core.name.call(null,k_24559),cljs.core.get.call(null,attrs,k_24559));

var G__24560 = seq__24547_24555;
var G__24561 = chunk__24548_24556;
var G__24562 = count__24549_24557;
var G__24563 = (i__24550_24558 + (1));
seq__24547_24555 = G__24560;
chunk__24548_24556 = G__24561;
count__24549_24557 = G__24562;
i__24550_24558 = G__24563;
continue;
} else {
var temp__4425__auto___24564 = cljs.core.seq.call(null,seq__24547_24555);
if(temp__4425__auto___24564){
var seq__24547_24565__$1 = temp__4425__auto___24564;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24547_24565__$1)){
var c__16894__auto___24566 = cljs.core.chunk_first.call(null,seq__24547_24565__$1);
var G__24567 = cljs.core.chunk_rest.call(null,seq__24547_24565__$1);
var G__24568 = c__16894__auto___24566;
var G__24569 = cljs.core.count.call(null,c__16894__auto___24566);
var G__24570 = (0);
seq__24547_24555 = G__24567;
chunk__24548_24556 = G__24568;
count__24549_24557 = G__24569;
i__24550_24558 = G__24570;
continue;
} else {
var k_24571 = cljs.core.first.call(null,seq__24547_24565__$1);
e.setAttribute(cljs.core.name.call(null,k_24571),cljs.core.get.call(null,attrs,k_24571));

var G__24572 = cljs.core.next.call(null,seq__24547_24565__$1);
var G__24573 = null;
var G__24574 = (0);
var G__24575 = (0);
seq__24547_24555 = G__24572;
chunk__24548_24556 = G__24573;
count__24549_24557 = G__24574;
i__24550_24558 = G__24575;
continue;
}
} else {
}
}
break;
}

var seq__24551_24576 = cljs.core.seq.call(null,children);
var chunk__24552_24577 = null;
var count__24553_24578 = (0);
var i__24554_24579 = (0);
while(true){
if((i__24554_24579 < count__24553_24578)){
var ch_24580 = cljs.core._nth.call(null,chunk__24552_24577,i__24554_24579);
e.appendChild(ch_24580);

var G__24581 = seq__24551_24576;
var G__24582 = chunk__24552_24577;
var G__24583 = count__24553_24578;
var G__24584 = (i__24554_24579 + (1));
seq__24551_24576 = G__24581;
chunk__24552_24577 = G__24582;
count__24553_24578 = G__24583;
i__24554_24579 = G__24584;
continue;
} else {
var temp__4425__auto___24585 = cljs.core.seq.call(null,seq__24551_24576);
if(temp__4425__auto___24585){
var seq__24551_24586__$1 = temp__4425__auto___24585;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24551_24586__$1)){
var c__16894__auto___24587 = cljs.core.chunk_first.call(null,seq__24551_24586__$1);
var G__24588 = cljs.core.chunk_rest.call(null,seq__24551_24586__$1);
var G__24589 = c__16894__auto___24587;
var G__24590 = cljs.core.count.call(null,c__16894__auto___24587);
var G__24591 = (0);
seq__24551_24576 = G__24588;
chunk__24552_24577 = G__24589;
count__24553_24578 = G__24590;
i__24554_24579 = G__24591;
continue;
} else {
var ch_24592 = cljs.core.first.call(null,seq__24551_24586__$1);
e.appendChild(ch_24592);

var G__24593 = cljs.core.next.call(null,seq__24551_24586__$1);
var G__24594 = null;
var G__24595 = (0);
var G__24596 = (0);
seq__24551_24576 = G__24593;
chunk__24552_24577 = G__24594;
count__24553_24578 = G__24595;
i__24554_24579 = G__24596;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq24544){
var G__24545 = cljs.core.first.call(null,seq24544);
var seq24544__$1 = cljs.core.next.call(null,seq24544);
var G__24546 = cljs.core.first.call(null,seq24544__$1);
var seq24544__$2 = cljs.core.next.call(null,seq24544__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__24545,G__24546,seq24544__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17004__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17005__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17006__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17007__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17008__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17004__auto__,prefer_table__17005__auto__,method_cache__17006__auto__,cached_hierarchy__17007__auto__,hierarchy__17008__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17004__auto__,prefer_table__17005__auto__,method_cache__17006__auto__,cached_hierarchy__17007__auto__,hierarchy__17008__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17008__auto__,method_table__17004__auto__,prefer_table__17005__auto__,method_cache__17006__auto__,cached_hierarchy__17007__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_24597 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_24597.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_24597.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_24597.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_24597);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__24598,st_map){
var map__24602 = p__24598;
var map__24602__$1 = ((cljs.core.seq_QMARK_.call(null,map__24602))?cljs.core.apply.call(null,cljs.core.hash_map,map__24602):map__24602);
var container_el = cljs.core.get.call(null,map__24602__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__24602,map__24602__$1,container_el){
return (function (p__24603){
var vec__24604 = p__24603;
var k = cljs.core.nth.call(null,vec__24604,(0),null);
var v = cljs.core.nth.call(null,vec__24604,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__24602,map__24602__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__24605,dom_str){
var map__24607 = p__24605;
var map__24607__$1 = ((cljs.core.seq_QMARK_.call(null,map__24607))?cljs.core.apply.call(null,cljs.core.hash_map,map__24607):map__24607);
var c = map__24607__$1;
var content_area_el = cljs.core.get.call(null,map__24607__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__24608){
var map__24610 = p__24608;
var map__24610__$1 = ((cljs.core.seq_QMARK_.call(null,map__24610))?cljs.core.apply.call(null,cljs.core.hash_map,map__24610):map__24610);
var content_area_el = cljs.core.get.call(null,map__24610__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto__){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (c__19342__auto__){
return (function (state_24652){
var state_val_24653 = (state_24652[(1)]);
if((state_val_24653 === (1))){
var inst_24637 = (state_24652[(7)]);
var inst_24637__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24638 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24639 = ["10px","10px","100%","68px","1.0"];
var inst_24640 = cljs.core.PersistentHashMap.fromArrays(inst_24638,inst_24639);
var inst_24641 = cljs.core.merge.call(null,inst_24640,style);
var inst_24642 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24637__$1,inst_24641);
var inst_24643 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24637__$1,msg);
var inst_24644 = cljs.core.async.timeout.call(null,(300));
var state_24652__$1 = (function (){var statearr_24654 = state_24652;
(statearr_24654[(7)] = inst_24637__$1);

(statearr_24654[(8)] = inst_24643);

(statearr_24654[(9)] = inst_24642);

return statearr_24654;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24652__$1,(2),inst_24644);
} else {
if((state_val_24653 === (2))){
var inst_24637 = (state_24652[(7)]);
var inst_24646 = (state_24652[(2)]);
var inst_24647 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_24648 = ["auto"];
var inst_24649 = cljs.core.PersistentHashMap.fromArrays(inst_24647,inst_24648);
var inst_24650 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24637,inst_24649);
var state_24652__$1 = (function (){var statearr_24655 = state_24652;
(statearr_24655[(10)] = inst_24646);

return statearr_24655;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24652__$1,inst_24650);
} else {
return null;
}
}
});})(c__19342__auto__))
;
return ((function (switch__19280__auto__,c__19342__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19281__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19281__auto____0 = (function (){
var statearr_24659 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24659[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19281__auto__);

(statearr_24659[(1)] = (1));

return statearr_24659;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19281__auto____1 = (function (state_24652){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_24652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e24660){if((e24660 instanceof Object)){
var ex__19284__auto__ = e24660;
var statearr_24661_24663 = state_24652;
(statearr_24661_24663[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24664 = state_24652;
state_24652 = G__24664;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19281__auto__ = function(state_24652){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19281__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19281__auto____1.call(this,state_24652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19281__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19281__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19281__auto__;
})()
;})(switch__19280__auto__,c__19342__auto__))
})();
var state__19344__auto__ = (function (){var statearr_24662 = f__19343__auto__.call(null);
(statearr_24662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto__);

return statearr_24662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto__))
);

return c__19342__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__24666 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__24666,(0),null);
var ln = cljs.core.nth.call(null,vec__24666,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__24669 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__24669,(0),null);
var file_line = cljs.core.nth.call(null,vec__24669,(1),null);
var file_column = cljs.core.nth.call(null,vec__24669,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__24669,file_name,file_line,file_column){
return (function (p1__24667_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__24667_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__24669,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16109__auto__ = file_line;
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
var and__16097__auto__ = cause;
if(cljs.core.truth_(and__16097__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16097__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__24671 = figwheel.client.heads_up.ensure_container.call(null);
var map__24671__$1 = ((cljs.core.seq_QMARK_.call(null,map__24671))?cljs.core.apply.call(null,cljs.core.hash_map,map__24671):map__24671);
var content_area_el = cljs.core.get.call(null,map__24671__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto__){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (c__19342__auto__){
return (function (state_24718){
var state_val_24719 = (state_24718[(1)]);
if((state_val_24719 === (1))){
var inst_24701 = (state_24718[(7)]);
var inst_24701__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24702 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24703 = ["0.0"];
var inst_24704 = cljs.core.PersistentHashMap.fromArrays(inst_24702,inst_24703);
var inst_24705 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24701__$1,inst_24704);
var inst_24706 = cljs.core.async.timeout.call(null,(300));
var state_24718__$1 = (function (){var statearr_24720 = state_24718;
(statearr_24720[(8)] = inst_24705);

(statearr_24720[(7)] = inst_24701__$1);

return statearr_24720;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24718__$1,(2),inst_24706);
} else {
if((state_val_24719 === (2))){
var inst_24701 = (state_24718[(7)]);
var inst_24708 = (state_24718[(2)]);
var inst_24709 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_24710 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_24711 = cljs.core.PersistentHashMap.fromArrays(inst_24709,inst_24710);
var inst_24712 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24701,inst_24711);
var inst_24713 = cljs.core.async.timeout.call(null,(200));
var state_24718__$1 = (function (){var statearr_24721 = state_24718;
(statearr_24721[(9)] = inst_24708);

(statearr_24721[(10)] = inst_24712);

return statearr_24721;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24718__$1,(3),inst_24713);
} else {
if((state_val_24719 === (3))){
var inst_24701 = (state_24718[(7)]);
var inst_24715 = (state_24718[(2)]);
var inst_24716 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24701,"");
var state_24718__$1 = (function (){var statearr_24722 = state_24718;
(statearr_24722[(11)] = inst_24715);

return statearr_24722;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24718__$1,inst_24716);
} else {
return null;
}
}
}
});})(c__19342__auto__))
;
return ((function (switch__19280__auto__,c__19342__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19281__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19281__auto____0 = (function (){
var statearr_24726 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24726[(0)] = figwheel$client$heads_up$clear_$_state_machine__19281__auto__);

(statearr_24726[(1)] = (1));

return statearr_24726;
});
var figwheel$client$heads_up$clear_$_state_machine__19281__auto____1 = (function (state_24718){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_24718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e24727){if((e24727 instanceof Object)){
var ex__19284__auto__ = e24727;
var statearr_24728_24730 = state_24718;
(statearr_24728_24730[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24731 = state_24718;
state_24718 = G__24731;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19281__auto__ = function(state_24718){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19281__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19281__auto____1.call(this,state_24718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19281__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19281__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19281__auto__;
})()
;})(switch__19280__auto__,c__19342__auto__))
})();
var state__19344__auto__ = (function (){var statearr_24729 = f__19343__auto__.call(null);
(statearr_24729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto__);

return statearr_24729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto__))
);

return c__19342__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto__){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (c__19342__auto__){
return (function (state_24763){
var state_val_24764 = (state_24763[(1)]);
if((state_val_24764 === (1))){
var inst_24753 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_24763__$1 = state_24763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24763__$1,(2),inst_24753);
} else {
if((state_val_24764 === (2))){
var inst_24755 = (state_24763[(2)]);
var inst_24756 = cljs.core.async.timeout.call(null,(400));
var state_24763__$1 = (function (){var statearr_24765 = state_24763;
(statearr_24765[(7)] = inst_24755);

return statearr_24765;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24763__$1,(3),inst_24756);
} else {
if((state_val_24764 === (3))){
var inst_24758 = (state_24763[(2)]);
var inst_24759 = figwheel.client.heads_up.clear.call(null);
var state_24763__$1 = (function (){var statearr_24766 = state_24763;
(statearr_24766[(8)] = inst_24758);

return statearr_24766;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24763__$1,(4),inst_24759);
} else {
if((state_val_24764 === (4))){
var inst_24761 = (state_24763[(2)]);
var state_24763__$1 = state_24763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24763__$1,inst_24761);
} else {
return null;
}
}
}
}
});})(c__19342__auto__))
;
return ((function (switch__19280__auto__,c__19342__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19281__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19281__auto____0 = (function (){
var statearr_24770 = [null,null,null,null,null,null,null,null,null];
(statearr_24770[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19281__auto__);

(statearr_24770[(1)] = (1));

return statearr_24770;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19281__auto____1 = (function (state_24763){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_24763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e24771){if((e24771 instanceof Object)){
var ex__19284__auto__ = e24771;
var statearr_24772_24774 = state_24763;
(statearr_24772_24774[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24775 = state_24763;
state_24763 = G__24775;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19281__auto__ = function(state_24763){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19281__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19281__auto____1.call(this,state_24763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19281__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19281__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19281__auto__;
})()
;})(switch__19280__auto__,c__19342__auto__))
})();
var state__19344__auto__ = (function (){var statearr_24773 = f__19343__auto__.call(null);
(statearr_24773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto__);

return statearr_24773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto__))
);

return c__19342__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1436104828021