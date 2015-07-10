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
var seq__34356_34364 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__34357_34365 = null;
var count__34358_34366 = (0);
var i__34359_34367 = (0);
while(true){
if((i__34359_34367 < count__34358_34366)){
var k_34368 = cljs.core._nth.call(null,chunk__34357_34365,i__34359_34367);
e.setAttribute(cljs.core.name.call(null,k_34368),cljs.core.get.call(null,attrs,k_34368));

var G__34369 = seq__34356_34364;
var G__34370 = chunk__34357_34365;
var G__34371 = count__34358_34366;
var G__34372 = (i__34359_34367 + (1));
seq__34356_34364 = G__34369;
chunk__34357_34365 = G__34370;
count__34358_34366 = G__34371;
i__34359_34367 = G__34372;
continue;
} else {
var temp__4425__auto___34373 = cljs.core.seq.call(null,seq__34356_34364);
if(temp__4425__auto___34373){
var seq__34356_34374__$1 = temp__4425__auto___34373;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34356_34374__$1)){
var c__16894__auto___34375 = cljs.core.chunk_first.call(null,seq__34356_34374__$1);
var G__34376 = cljs.core.chunk_rest.call(null,seq__34356_34374__$1);
var G__34377 = c__16894__auto___34375;
var G__34378 = cljs.core.count.call(null,c__16894__auto___34375);
var G__34379 = (0);
seq__34356_34364 = G__34376;
chunk__34357_34365 = G__34377;
count__34358_34366 = G__34378;
i__34359_34367 = G__34379;
continue;
} else {
var k_34380 = cljs.core.first.call(null,seq__34356_34374__$1);
e.setAttribute(cljs.core.name.call(null,k_34380),cljs.core.get.call(null,attrs,k_34380));

var G__34381 = cljs.core.next.call(null,seq__34356_34374__$1);
var G__34382 = null;
var G__34383 = (0);
var G__34384 = (0);
seq__34356_34364 = G__34381;
chunk__34357_34365 = G__34382;
count__34358_34366 = G__34383;
i__34359_34367 = G__34384;
continue;
}
} else {
}
}
break;
}

var seq__34360_34385 = cljs.core.seq.call(null,children);
var chunk__34361_34386 = null;
var count__34362_34387 = (0);
var i__34363_34388 = (0);
while(true){
if((i__34363_34388 < count__34362_34387)){
var ch_34389 = cljs.core._nth.call(null,chunk__34361_34386,i__34363_34388);
e.appendChild(ch_34389);

var G__34390 = seq__34360_34385;
var G__34391 = chunk__34361_34386;
var G__34392 = count__34362_34387;
var G__34393 = (i__34363_34388 + (1));
seq__34360_34385 = G__34390;
chunk__34361_34386 = G__34391;
count__34362_34387 = G__34392;
i__34363_34388 = G__34393;
continue;
} else {
var temp__4425__auto___34394 = cljs.core.seq.call(null,seq__34360_34385);
if(temp__4425__auto___34394){
var seq__34360_34395__$1 = temp__4425__auto___34394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34360_34395__$1)){
var c__16894__auto___34396 = cljs.core.chunk_first.call(null,seq__34360_34395__$1);
var G__34397 = cljs.core.chunk_rest.call(null,seq__34360_34395__$1);
var G__34398 = c__16894__auto___34396;
var G__34399 = cljs.core.count.call(null,c__16894__auto___34396);
var G__34400 = (0);
seq__34360_34385 = G__34397;
chunk__34361_34386 = G__34398;
count__34362_34387 = G__34399;
i__34363_34388 = G__34400;
continue;
} else {
var ch_34401 = cljs.core.first.call(null,seq__34360_34395__$1);
e.appendChild(ch_34401);

var G__34402 = cljs.core.next.call(null,seq__34360_34395__$1);
var G__34403 = null;
var G__34404 = (0);
var G__34405 = (0);
seq__34360_34385 = G__34402;
chunk__34361_34386 = G__34403;
count__34362_34387 = G__34404;
i__34363_34388 = G__34405;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq34353){
var G__34354 = cljs.core.first.call(null,seq34353);
var seq34353__$1 = cljs.core.next.call(null,seq34353);
var G__34355 = cljs.core.first.call(null,seq34353__$1);
var seq34353__$2 = cljs.core.next.call(null,seq34353__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__34354,G__34355,seq34353__$2);
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
var el_34406 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_34406.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_34406.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_34406.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_34406);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__34407,st_map){
var map__34411 = p__34407;
var map__34411__$1 = ((cljs.core.seq_QMARK_.call(null,map__34411))?cljs.core.apply.call(null,cljs.core.hash_map,map__34411):map__34411);
var container_el = cljs.core.get.call(null,map__34411__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__34411,map__34411__$1,container_el){
return (function (p__34412){
var vec__34413 = p__34412;
var k = cljs.core.nth.call(null,vec__34413,(0),null);
var v = cljs.core.nth.call(null,vec__34413,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__34411,map__34411__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__34414,dom_str){
var map__34416 = p__34414;
var map__34416__$1 = ((cljs.core.seq_QMARK_.call(null,map__34416))?cljs.core.apply.call(null,cljs.core.hash_map,map__34416):map__34416);
var c = map__34416__$1;
var content_area_el = cljs.core.get.call(null,map__34416__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__34417){
var map__34419 = p__34417;
var map__34419__$1 = ((cljs.core.seq_QMARK_.call(null,map__34419))?cljs.core.apply.call(null,cljs.core.hash_map,map__34419):map__34419);
var content_area_el = cljs.core.get.call(null,map__34419__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto__){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (c__19453__auto__){
return (function (state_34461){
var state_val_34462 = (state_34461[(1)]);
if((state_val_34462 === (1))){
var inst_34446 = (state_34461[(7)]);
var inst_34446__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34447 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34448 = ["10px","10px","100%","68px","1.0"];
var inst_34449 = cljs.core.PersistentHashMap.fromArrays(inst_34447,inst_34448);
var inst_34450 = cljs.core.merge.call(null,inst_34449,style);
var inst_34451 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34446__$1,inst_34450);
var inst_34452 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34446__$1,msg);
var inst_34453 = cljs.core.async.timeout.call(null,(300));
var state_34461__$1 = (function (){var statearr_34463 = state_34461;
(statearr_34463[(8)] = inst_34451);

(statearr_34463[(9)] = inst_34452);

(statearr_34463[(7)] = inst_34446__$1);

return statearr_34463;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34461__$1,(2),inst_34453);
} else {
if((state_val_34462 === (2))){
var inst_34446 = (state_34461[(7)]);
var inst_34455 = (state_34461[(2)]);
var inst_34456 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_34457 = ["auto"];
var inst_34458 = cljs.core.PersistentHashMap.fromArrays(inst_34456,inst_34457);
var inst_34459 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34446,inst_34458);
var state_34461__$1 = (function (){var statearr_34464 = state_34461;
(statearr_34464[(10)] = inst_34455);

return statearr_34464;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34461__$1,inst_34459);
} else {
return null;
}
}
});})(c__19453__auto__))
;
return ((function (switch__19391__auto__,c__19453__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19392__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19392__auto____0 = (function (){
var statearr_34468 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34468[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19392__auto__);

(statearr_34468[(1)] = (1));

return statearr_34468;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19392__auto____1 = (function (state_34461){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_34461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e34469){if((e34469 instanceof Object)){
var ex__19395__auto__ = e34469;
var statearr_34470_34472 = state_34461;
(statearr_34470_34472[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34473 = state_34461;
state_34461 = G__34473;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19392__auto__ = function(state_34461){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19392__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19392__auto____1.call(this,state_34461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19392__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19392__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19392__auto__;
})()
;})(switch__19391__auto__,c__19453__auto__))
})();
var state__19455__auto__ = (function (){var statearr_34471 = f__19454__auto__.call(null);
(statearr_34471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto__);

return statearr_34471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto__))
);

return c__19453__auto__;
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
var vec__34475 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__34475,(0),null);
var ln = cljs.core.nth.call(null,vec__34475,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__34478 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__34478,(0),null);
var file_line = cljs.core.nth.call(null,vec__34478,(1),null);
var file_column = cljs.core.nth.call(null,vec__34478,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__34478,file_name,file_line,file_column){
return (function (p1__34476_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__34476_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__34478,file_name,file_line,file_column))
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
var map__34480 = figwheel.client.heads_up.ensure_container.call(null);
var map__34480__$1 = ((cljs.core.seq_QMARK_.call(null,map__34480))?cljs.core.apply.call(null,cljs.core.hash_map,map__34480):map__34480);
var content_area_el = cljs.core.get.call(null,map__34480__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto__){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (c__19453__auto__){
return (function (state_34527){
var state_val_34528 = (state_34527[(1)]);
if((state_val_34528 === (1))){
var inst_34510 = (state_34527[(7)]);
var inst_34510__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34511 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34512 = ["0.0"];
var inst_34513 = cljs.core.PersistentHashMap.fromArrays(inst_34511,inst_34512);
var inst_34514 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34510__$1,inst_34513);
var inst_34515 = cljs.core.async.timeout.call(null,(300));
var state_34527__$1 = (function (){var statearr_34529 = state_34527;
(statearr_34529[(8)] = inst_34514);

(statearr_34529[(7)] = inst_34510__$1);

return statearr_34529;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34527__$1,(2),inst_34515);
} else {
if((state_val_34528 === (2))){
var inst_34510 = (state_34527[(7)]);
var inst_34517 = (state_34527[(2)]);
var inst_34518 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_34519 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_34520 = cljs.core.PersistentHashMap.fromArrays(inst_34518,inst_34519);
var inst_34521 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34510,inst_34520);
var inst_34522 = cljs.core.async.timeout.call(null,(200));
var state_34527__$1 = (function (){var statearr_34530 = state_34527;
(statearr_34530[(9)] = inst_34521);

(statearr_34530[(10)] = inst_34517);

return statearr_34530;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34527__$1,(3),inst_34522);
} else {
if((state_val_34528 === (3))){
var inst_34510 = (state_34527[(7)]);
var inst_34524 = (state_34527[(2)]);
var inst_34525 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34510,"");
var state_34527__$1 = (function (){var statearr_34531 = state_34527;
(statearr_34531[(11)] = inst_34524);

return statearr_34531;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34527__$1,inst_34525);
} else {
return null;
}
}
}
});})(c__19453__auto__))
;
return ((function (switch__19391__auto__,c__19453__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19392__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19392__auto____0 = (function (){
var statearr_34535 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34535[(0)] = figwheel$client$heads_up$clear_$_state_machine__19392__auto__);

(statearr_34535[(1)] = (1));

return statearr_34535;
});
var figwheel$client$heads_up$clear_$_state_machine__19392__auto____1 = (function (state_34527){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_34527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e34536){if((e34536 instanceof Object)){
var ex__19395__auto__ = e34536;
var statearr_34537_34539 = state_34527;
(statearr_34537_34539[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34540 = state_34527;
state_34527 = G__34540;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19392__auto__ = function(state_34527){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19392__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19392__auto____1.call(this,state_34527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19392__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19392__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19392__auto__;
})()
;})(switch__19391__auto__,c__19453__auto__))
})();
var state__19455__auto__ = (function (){var statearr_34538 = f__19454__auto__.call(null);
(statearr_34538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto__);

return statearr_34538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto__))
);

return c__19453__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto__){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (c__19453__auto__){
return (function (state_34572){
var state_val_34573 = (state_34572[(1)]);
if((state_val_34573 === (1))){
var inst_34562 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_34572__$1 = state_34572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34572__$1,(2),inst_34562);
} else {
if((state_val_34573 === (2))){
var inst_34564 = (state_34572[(2)]);
var inst_34565 = cljs.core.async.timeout.call(null,(400));
var state_34572__$1 = (function (){var statearr_34574 = state_34572;
(statearr_34574[(7)] = inst_34564);

return statearr_34574;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34572__$1,(3),inst_34565);
} else {
if((state_val_34573 === (3))){
var inst_34567 = (state_34572[(2)]);
var inst_34568 = figwheel.client.heads_up.clear.call(null);
var state_34572__$1 = (function (){var statearr_34575 = state_34572;
(statearr_34575[(8)] = inst_34567);

return statearr_34575;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34572__$1,(4),inst_34568);
} else {
if((state_val_34573 === (4))){
var inst_34570 = (state_34572[(2)]);
var state_34572__$1 = state_34572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34572__$1,inst_34570);
} else {
return null;
}
}
}
}
});})(c__19453__auto__))
;
return ((function (switch__19391__auto__,c__19453__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19392__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19392__auto____0 = (function (){
var statearr_34579 = [null,null,null,null,null,null,null,null,null];
(statearr_34579[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19392__auto__);

(statearr_34579[(1)] = (1));

return statearr_34579;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19392__auto____1 = (function (state_34572){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_34572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e34580){if((e34580 instanceof Object)){
var ex__19395__auto__ = e34580;
var statearr_34581_34583 = state_34572;
(statearr_34581_34583[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34584 = state_34572;
state_34572 = G__34584;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19392__auto__ = function(state_34572){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19392__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19392__auto____1.call(this,state_34572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19392__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19392__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19392__auto__;
})()
;})(switch__19391__auto__,c__19453__auto__))
})();
var state__19455__auto__ = (function (){var statearr_34582 = f__19454__auto__.call(null);
(statearr_34582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto__);

return statearr_34582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto__))
);

return c__19453__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1436517560648