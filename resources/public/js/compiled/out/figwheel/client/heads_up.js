// Compiled by ClojureScript 1.7.28 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var args__17528__auto__ = [];
var len__17521__auto___35786 = arguments.length;
var i__17522__auto___35787 = (0);
while(true){
if((i__17522__auto___35787 < len__17521__auto___35786)){
args__17528__auto__.push((arguments[i__17522__auto___35787]));

var G__35788 = (i__17522__auto___35787 + (1));
i__17522__auto___35787 = G__35788;
continue;
} else {
}
break;
}

var argseq__17529__auto__ = ((((2) < args__17528__auto__.length))?(new cljs.core.IndexedSeq(args__17528__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17529__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__35778_35789 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__35779_35790 = null;
var count__35780_35791 = (0);
var i__35781_35792 = (0);
while(true){
if((i__35781_35792 < count__35780_35791)){
var k_35793 = cljs.core._nth.call(null,chunk__35779_35790,i__35781_35792);
e.setAttribute(cljs.core.name.call(null,k_35793),cljs.core.get.call(null,attrs,k_35793));

var G__35794 = seq__35778_35789;
var G__35795 = chunk__35779_35790;
var G__35796 = count__35780_35791;
var G__35797 = (i__35781_35792 + (1));
seq__35778_35789 = G__35794;
chunk__35779_35790 = G__35795;
count__35780_35791 = G__35796;
i__35781_35792 = G__35797;
continue;
} else {
var temp__4425__auto___35798 = cljs.core.seq.call(null,seq__35778_35789);
if(temp__4425__auto___35798){
var seq__35778_35799__$1 = temp__4425__auto___35798;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35778_35799__$1)){
var c__17266__auto___35800 = cljs.core.chunk_first.call(null,seq__35778_35799__$1);
var G__35801 = cljs.core.chunk_rest.call(null,seq__35778_35799__$1);
var G__35802 = c__17266__auto___35800;
var G__35803 = cljs.core.count.call(null,c__17266__auto___35800);
var G__35804 = (0);
seq__35778_35789 = G__35801;
chunk__35779_35790 = G__35802;
count__35780_35791 = G__35803;
i__35781_35792 = G__35804;
continue;
} else {
var k_35805 = cljs.core.first.call(null,seq__35778_35799__$1);
e.setAttribute(cljs.core.name.call(null,k_35805),cljs.core.get.call(null,attrs,k_35805));

var G__35806 = cljs.core.next.call(null,seq__35778_35799__$1);
var G__35807 = null;
var G__35808 = (0);
var G__35809 = (0);
seq__35778_35789 = G__35806;
chunk__35779_35790 = G__35807;
count__35780_35791 = G__35808;
i__35781_35792 = G__35809;
continue;
}
} else {
}
}
break;
}

var seq__35782_35810 = cljs.core.seq.call(null,children);
var chunk__35783_35811 = null;
var count__35784_35812 = (0);
var i__35785_35813 = (0);
while(true){
if((i__35785_35813 < count__35784_35812)){
var ch_35814 = cljs.core._nth.call(null,chunk__35783_35811,i__35785_35813);
e.appendChild(ch_35814);

var G__35815 = seq__35782_35810;
var G__35816 = chunk__35783_35811;
var G__35817 = count__35784_35812;
var G__35818 = (i__35785_35813 + (1));
seq__35782_35810 = G__35815;
chunk__35783_35811 = G__35816;
count__35784_35812 = G__35817;
i__35785_35813 = G__35818;
continue;
} else {
var temp__4425__auto___35819 = cljs.core.seq.call(null,seq__35782_35810);
if(temp__4425__auto___35819){
var seq__35782_35820__$1 = temp__4425__auto___35819;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35782_35820__$1)){
var c__17266__auto___35821 = cljs.core.chunk_first.call(null,seq__35782_35820__$1);
var G__35822 = cljs.core.chunk_rest.call(null,seq__35782_35820__$1);
var G__35823 = c__17266__auto___35821;
var G__35824 = cljs.core.count.call(null,c__17266__auto___35821);
var G__35825 = (0);
seq__35782_35810 = G__35822;
chunk__35783_35811 = G__35823;
count__35784_35812 = G__35824;
i__35785_35813 = G__35825;
continue;
} else {
var ch_35826 = cljs.core.first.call(null,seq__35782_35820__$1);
e.appendChild(ch_35826);

var G__35827 = cljs.core.next.call(null,seq__35782_35820__$1);
var G__35828 = null;
var G__35829 = (0);
var G__35830 = (0);
seq__35782_35810 = G__35827;
chunk__35783_35811 = G__35828;
count__35784_35812 = G__35829;
i__35785_35813 = G__35830;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq35775){
var G__35776 = cljs.core.first.call(null,seq35775);
var seq35775__$1 = cljs.core.next.call(null,seq35775);
var G__35777 = cljs.core.first.call(null,seq35775__$1);
var seq35775__$2 = cljs.core.next.call(null,seq35775__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__35776,G__35777,seq35775__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17376__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17377__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17378__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17379__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17380__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__,hierarchy__17380__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__,hierarchy__17380__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17380__auto__,method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__));
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
var el_35831 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_35831.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_35831.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_35831.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_35831);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__35832,st_map){
var map__35837 = p__35832;
var map__35837__$1 = ((((!((map__35837 == null)))?((((map__35837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35837):map__35837);
var container_el = cljs.core.get.call(null,map__35837__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__35837,map__35837__$1,container_el){
return (function (p__35839){
var vec__35840 = p__35839;
var k = cljs.core.nth.call(null,vec__35840,(0),null);
var v = cljs.core.nth.call(null,vec__35840,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__35837,map__35837__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__35841,dom_str){
var map__35844 = p__35841;
var map__35844__$1 = ((((!((map__35844 == null)))?((((map__35844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35844):map__35844);
var c = map__35844__$1;
var content_area_el = cljs.core.get.call(null,map__35844__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__35846){
var map__35849 = p__35846;
var map__35849__$1 = ((((!((map__35849 == null)))?((((map__35849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35849):map__35849);
var content_area_el = cljs.core.get.call(null,map__35849__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20431__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20431__auto__){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (c__20431__auto__){
return (function (state_35892){
var state_val_35893 = (state_35892[(1)]);
if((state_val_35893 === (1))){
var inst_35877 = (state_35892[(7)]);
var inst_35877__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_35878 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_35879 = ["10px","10px","100%","68px","1.0"];
var inst_35880 = cljs.core.PersistentHashMap.fromArrays(inst_35878,inst_35879);
var inst_35881 = cljs.core.merge.call(null,inst_35880,style);
var inst_35882 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35877__$1,inst_35881);
var inst_35883 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_35877__$1,msg);
var inst_35884 = cljs.core.async.timeout.call(null,(300));
var state_35892__$1 = (function (){var statearr_35894 = state_35892;
(statearr_35894[(8)] = inst_35883);

(statearr_35894[(10)] = inst_35882);

(statearr_35894[(7)] = inst_35877__$1);

return statearr_35894;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35892__$1,(2),inst_35884);
} else {
if((state_val_35893 === (2))){
var inst_35877 = (state_35892[(7)]);
var inst_35886 = (state_35892[(2)]);
var inst_35887 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_35888 = ["auto"];
var inst_35889 = cljs.core.PersistentHashMap.fromArrays(inst_35887,inst_35888);
var inst_35890 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35877,inst_35889);
var state_35892__$1 = (function (){var statearr_35895 = state_35892;
(statearr_35895[(9)] = inst_35886);

return statearr_35895;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35892__$1,inst_35890);
} else {
return null;
}
}
});})(c__20431__auto__))
;
return ((function (switch__20366__auto__,c__20431__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20367__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20367__auto____0 = (function (){
var statearr_35899 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35899[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20367__auto__);

(statearr_35899[(1)] = (1));

return statearr_35899;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20367__auto____1 = (function (state_35892){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_35892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e35900){if((e35900 instanceof Object)){
var ex__20370__auto__ = e35900;
var statearr_35901_35903 = state_35892;
(statearr_35901_35903[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35904 = state_35892;
state_35892 = G__35904;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20367__auto__ = function(state_35892){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20367__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20367__auto____1.call(this,state_35892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20367__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20367__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20367__auto__;
})()
;})(switch__20366__auto__,c__20431__auto__))
})();
var state__20433__auto__ = (function (){var statearr_35902 = f__20432__auto__.call(null);
(statearr_35902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto__);

return statearr_35902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(c__20431__auto__))
);

return c__20431__auto__;
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
var vec__35906 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__35906,(0),null);
var ln = cljs.core.nth.call(null,vec__35906,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__35909 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__35909,(0),null);
var file_line = cljs.core.nth.call(null,vec__35909,(1),null);
var file_column = cljs.core.nth.call(null,vec__35909,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__35909,file_name,file_line,file_column){
return (function (p1__35907_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__35907_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__35909,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16482__auto__ = file_line;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
var and__16470__auto__ = cause;
if(cljs.core.truth_(and__16470__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16470__auto__;
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
var map__35912 = figwheel.client.heads_up.ensure_container.call(null);
var map__35912__$1 = ((((!((map__35912 == null)))?((((map__35912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35912):map__35912);
var content_area_el = cljs.core.get.call(null,map__35912__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20431__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20431__auto__){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (c__20431__auto__){
return (function (state_35960){
var state_val_35961 = (state_35960[(1)]);
if((state_val_35961 === (1))){
var inst_35943 = (state_35960[(7)]);
var inst_35943__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_35944 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_35945 = ["0.0"];
var inst_35946 = cljs.core.PersistentHashMap.fromArrays(inst_35944,inst_35945);
var inst_35947 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35943__$1,inst_35946);
var inst_35948 = cljs.core.async.timeout.call(null,(300));
var state_35960__$1 = (function (){var statearr_35962 = state_35960;
(statearr_35962[(8)] = inst_35947);

(statearr_35962[(7)] = inst_35943__$1);

return statearr_35962;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35960__$1,(2),inst_35948);
} else {
if((state_val_35961 === (2))){
var inst_35943 = (state_35960[(7)]);
var inst_35950 = (state_35960[(2)]);
var inst_35951 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_35952 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_35953 = cljs.core.PersistentHashMap.fromArrays(inst_35951,inst_35952);
var inst_35954 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35943,inst_35953);
var inst_35955 = cljs.core.async.timeout.call(null,(200));
var state_35960__$1 = (function (){var statearr_35963 = state_35960;
(statearr_35963[(9)] = inst_35954);

(statearr_35963[(11)] = inst_35950);

return statearr_35963;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35960__$1,(3),inst_35955);
} else {
if((state_val_35961 === (3))){
var inst_35943 = (state_35960[(7)]);
var inst_35957 = (state_35960[(2)]);
var inst_35958 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_35943,"");
var state_35960__$1 = (function (){var statearr_35964 = state_35960;
(statearr_35964[(10)] = inst_35957);

return statearr_35964;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35960__$1,inst_35958);
} else {
return null;
}
}
}
});})(c__20431__auto__))
;
return ((function (switch__20366__auto__,c__20431__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20367__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20367__auto____0 = (function (){
var statearr_35968 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35968[(0)] = figwheel$client$heads_up$clear_$_state_machine__20367__auto__);

(statearr_35968[(1)] = (1));

return statearr_35968;
});
var figwheel$client$heads_up$clear_$_state_machine__20367__auto____1 = (function (state_35960){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_35960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e35969){if((e35969 instanceof Object)){
var ex__20370__auto__ = e35969;
var statearr_35970_35972 = state_35960;
(statearr_35970_35972[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35973 = state_35960;
state_35960 = G__35973;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20367__auto__ = function(state_35960){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20367__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20367__auto____1.call(this,state_35960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20367__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20367__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20367__auto__;
})()
;})(switch__20366__auto__,c__20431__auto__))
})();
var state__20433__auto__ = (function (){var statearr_35971 = f__20432__auto__.call(null);
(statearr_35971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto__);

return statearr_35971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(c__20431__auto__))
);

return c__20431__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20431__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20431__auto__){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (c__20431__auto__){
return (function (state_36005){
var state_val_36006 = (state_36005[(1)]);
if((state_val_36006 === (1))){
var inst_35995 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_36005__$1 = state_36005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36005__$1,(2),inst_35995);
} else {
if((state_val_36006 === (2))){
var inst_35997 = (state_36005[(2)]);
var inst_35998 = cljs.core.async.timeout.call(null,(400));
var state_36005__$1 = (function (){var statearr_36007 = state_36005;
(statearr_36007[(7)] = inst_35997);

return statearr_36007;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36005__$1,(3),inst_35998);
} else {
if((state_val_36006 === (3))){
var inst_36000 = (state_36005[(2)]);
var inst_36001 = figwheel.client.heads_up.clear.call(null);
var state_36005__$1 = (function (){var statearr_36008 = state_36005;
(statearr_36008[(8)] = inst_36000);

return statearr_36008;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36005__$1,(4),inst_36001);
} else {
if((state_val_36006 === (4))){
var inst_36003 = (state_36005[(2)]);
var state_36005__$1 = state_36005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36005__$1,inst_36003);
} else {
return null;
}
}
}
}
});})(c__20431__auto__))
;
return ((function (switch__20366__auto__,c__20431__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20367__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20367__auto____0 = (function (){
var statearr_36012 = [null,null,null,null,null,null,null,null,null];
(statearr_36012[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20367__auto__);

(statearr_36012[(1)] = (1));

return statearr_36012;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20367__auto____1 = (function (state_36005){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_36005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e36013){if((e36013 instanceof Object)){
var ex__20370__auto__ = e36013;
var statearr_36014_36016 = state_36005;
(statearr_36014_36016[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36017 = state_36005;
state_36005 = G__36017;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20367__auto__ = function(state_36005){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20367__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20367__auto____1.call(this,state_36005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20367__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20367__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20367__auto__;
})()
;})(switch__20366__auto__,c__20431__auto__))
})();
var state__20433__auto__ = (function (){var statearr_36015 = f__20432__auto__.call(null);
(statearr_36015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto__);

return statearr_36015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(c__20431__auto__))
);

return c__20431__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1439049324989