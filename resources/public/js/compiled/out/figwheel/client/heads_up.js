// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19435__auto__ = [];
var len__19428__auto___40241 = arguments.length;
var i__19429__auto___40242 = (0);
while(true){
if((i__19429__auto___40242 < len__19428__auto___40241)){
args__19435__auto__.push((arguments[i__19429__auto___40242]));

var G__40243 = (i__19429__auto___40242 + (1));
i__19429__auto___40242 = G__40243;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((2) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19436__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__40233_40244 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__40234_40245 = null;
var count__40235_40246 = (0);
var i__40236_40247 = (0);
while(true){
if((i__40236_40247 < count__40235_40246)){
var k_40248 = cljs.core._nth.call(null,chunk__40234_40245,i__40236_40247);
e.setAttribute(cljs.core.name.call(null,k_40248),cljs.core.get.call(null,attrs,k_40248));

var G__40249 = seq__40233_40244;
var G__40250 = chunk__40234_40245;
var G__40251 = count__40235_40246;
var G__40252 = (i__40236_40247 + (1));
seq__40233_40244 = G__40249;
chunk__40234_40245 = G__40250;
count__40235_40246 = G__40251;
i__40236_40247 = G__40252;
continue;
} else {
var temp__4657__auto___40253 = cljs.core.seq.call(null,seq__40233_40244);
if(temp__4657__auto___40253){
var seq__40233_40254__$1 = temp__4657__auto___40253;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40233_40254__$1)){
var c__19173__auto___40255 = cljs.core.chunk_first.call(null,seq__40233_40254__$1);
var G__40256 = cljs.core.chunk_rest.call(null,seq__40233_40254__$1);
var G__40257 = c__19173__auto___40255;
var G__40258 = cljs.core.count.call(null,c__19173__auto___40255);
var G__40259 = (0);
seq__40233_40244 = G__40256;
chunk__40234_40245 = G__40257;
count__40235_40246 = G__40258;
i__40236_40247 = G__40259;
continue;
} else {
var k_40260 = cljs.core.first.call(null,seq__40233_40254__$1);
e.setAttribute(cljs.core.name.call(null,k_40260),cljs.core.get.call(null,attrs,k_40260));

var G__40261 = cljs.core.next.call(null,seq__40233_40254__$1);
var G__40262 = null;
var G__40263 = (0);
var G__40264 = (0);
seq__40233_40244 = G__40261;
chunk__40234_40245 = G__40262;
count__40235_40246 = G__40263;
i__40236_40247 = G__40264;
continue;
}
} else {
}
}
break;
}

var seq__40237_40265 = cljs.core.seq.call(null,children);
var chunk__40238_40266 = null;
var count__40239_40267 = (0);
var i__40240_40268 = (0);
while(true){
if((i__40240_40268 < count__40239_40267)){
var ch_40269 = cljs.core._nth.call(null,chunk__40238_40266,i__40240_40268);
e.appendChild(ch_40269);

var G__40270 = seq__40237_40265;
var G__40271 = chunk__40238_40266;
var G__40272 = count__40239_40267;
var G__40273 = (i__40240_40268 + (1));
seq__40237_40265 = G__40270;
chunk__40238_40266 = G__40271;
count__40239_40267 = G__40272;
i__40240_40268 = G__40273;
continue;
} else {
var temp__4657__auto___40274 = cljs.core.seq.call(null,seq__40237_40265);
if(temp__4657__auto___40274){
var seq__40237_40275__$1 = temp__4657__auto___40274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40237_40275__$1)){
var c__19173__auto___40276 = cljs.core.chunk_first.call(null,seq__40237_40275__$1);
var G__40277 = cljs.core.chunk_rest.call(null,seq__40237_40275__$1);
var G__40278 = c__19173__auto___40276;
var G__40279 = cljs.core.count.call(null,c__19173__auto___40276);
var G__40280 = (0);
seq__40237_40265 = G__40277;
chunk__40238_40266 = G__40278;
count__40239_40267 = G__40279;
i__40240_40268 = G__40280;
continue;
} else {
var ch_40281 = cljs.core.first.call(null,seq__40237_40275__$1);
e.appendChild(ch_40281);

var G__40282 = cljs.core.next.call(null,seq__40237_40275__$1);
var G__40283 = null;
var G__40284 = (0);
var G__40285 = (0);
seq__40237_40265 = G__40282;
chunk__40238_40266 = G__40283;
count__40239_40267 = G__40284;
i__40240_40268 = G__40285;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq40230){
var G__40231 = cljs.core.first.call(null,seq40230);
var seq40230__$1 = cljs.core.next.call(null,seq40230);
var G__40232 = cljs.core.first.call(null,seq40230__$1);
var seq40230__$2 = cljs.core.next.call(null,seq40230__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__40231,G__40232,seq40230__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19283__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19284__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19285__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19286__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19287__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19283__auto__,prefer_table__19284__auto__,method_cache__19285__auto__,cached_hierarchy__19286__auto__,hierarchy__19287__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19283__auto__,prefer_table__19284__auto__,method_cache__19285__auto__,cached_hierarchy__19286__auto__,hierarchy__19287__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19287__auto__,method_table__19283__auto__,prefer_table__19284__auto__,method_cache__19285__auto__,cached_hierarchy__19286__auto__));
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
var el_40286 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_40286.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_40286.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_40286.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_40286);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__40287,st_map){
var map__40292 = p__40287;
var map__40292__$1 = ((((!((map__40292 == null)))?((((map__40292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40292):map__40292);
var container_el = cljs.core.get.call(null,map__40292__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__40292,map__40292__$1,container_el){
return (function (p__40294){
var vec__40295 = p__40294;
var k = cljs.core.nth.call(null,vec__40295,(0),null);
var v = cljs.core.nth.call(null,vec__40295,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__40292,map__40292__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__40296,dom_str){
var map__40299 = p__40296;
var map__40299__$1 = ((((!((map__40299 == null)))?((((map__40299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40299):map__40299);
var c = map__40299__$1;
var content_area_el = cljs.core.get.call(null,map__40299__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__40301){
var map__40304 = p__40301;
var map__40304__$1 = ((((!((map__40304 == null)))?((((map__40304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40304):map__40304);
var content_area_el = cljs.core.get.call(null,map__40304__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21794__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21794__auto__){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (c__21794__auto__){
return (function (state_40347){
var state_val_40348 = (state_40347[(1)]);
if((state_val_40348 === (1))){
var inst_40332 = (state_40347[(7)]);
var inst_40332__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_40333 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_40334 = ["10px","10px","100%","68px","1.0"];
var inst_40335 = cljs.core.PersistentHashMap.fromArrays(inst_40333,inst_40334);
var inst_40336 = cljs.core.merge.call(null,inst_40335,style);
var inst_40337 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_40332__$1,inst_40336);
var inst_40338 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_40332__$1,msg);
var inst_40339 = cljs.core.async.timeout.call(null,(300));
var state_40347__$1 = (function (){var statearr_40349 = state_40347;
(statearr_40349[(8)] = inst_40338);

(statearr_40349[(9)] = inst_40337);

(statearr_40349[(7)] = inst_40332__$1);

return statearr_40349;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40347__$1,(2),inst_40339);
} else {
if((state_val_40348 === (2))){
var inst_40332 = (state_40347[(7)]);
var inst_40341 = (state_40347[(2)]);
var inst_40342 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_40343 = ["auto"];
var inst_40344 = cljs.core.PersistentHashMap.fromArrays(inst_40342,inst_40343);
var inst_40345 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_40332,inst_40344);
var state_40347__$1 = (function (){var statearr_40350 = state_40347;
(statearr_40350[(10)] = inst_40341);

return statearr_40350;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40347__$1,inst_40345);
} else {
return null;
}
}
});})(c__21794__auto__))
;
return ((function (switch__21682__auto__,c__21794__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21683__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21683__auto____0 = (function (){
var statearr_40354 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40354[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21683__auto__);

(statearr_40354[(1)] = (1));

return statearr_40354;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21683__auto____1 = (function (state_40347){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_40347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e40355){if((e40355 instanceof Object)){
var ex__21686__auto__ = e40355;
var statearr_40356_40358 = state_40347;
(statearr_40356_40358[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40359 = state_40347;
state_40347 = G__40359;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21683__auto__ = function(state_40347){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21683__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21683__auto____1.call(this,state_40347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21683__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21683__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21683__auto__;
})()
;})(switch__21682__auto__,c__21794__auto__))
})();
var state__21796__auto__ = (function (){var statearr_40357 = f__21795__auto__.call(null);
(statearr_40357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto__);

return statearr_40357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(c__21794__auto__))
);

return c__21794__auto__;
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
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__40361 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__40361,(0),null);
var ln = cljs.core.nth.call(null,vec__40361,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__40364 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__40364,(0),null);
var file_line = cljs.core.nth.call(null,vec__40364,(1),null);
var file_column = cljs.core.nth.call(null,vec__40364,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__40364,file_name,file_line,file_column){
return (function (p1__40362_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__40362_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__40364,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18370__auto__ = file_line;
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
var and__18358__auto__ = cause;
if(cljs.core.truth_(and__18358__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18358__auto__;
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
var map__40367 = figwheel.client.heads_up.ensure_container.call(null);
var map__40367__$1 = ((((!((map__40367 == null)))?((((map__40367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40367):map__40367);
var content_area_el = cljs.core.get.call(null,map__40367__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21794__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21794__auto__){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (c__21794__auto__){
return (function (state_40415){
var state_val_40416 = (state_40415[(1)]);
if((state_val_40416 === (1))){
var inst_40398 = (state_40415[(7)]);
var inst_40398__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_40399 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_40400 = ["0.0"];
var inst_40401 = cljs.core.PersistentHashMap.fromArrays(inst_40399,inst_40400);
var inst_40402 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_40398__$1,inst_40401);
var inst_40403 = cljs.core.async.timeout.call(null,(300));
var state_40415__$1 = (function (){var statearr_40417 = state_40415;
(statearr_40417[(8)] = inst_40402);

(statearr_40417[(7)] = inst_40398__$1);

return statearr_40417;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40415__$1,(2),inst_40403);
} else {
if((state_val_40416 === (2))){
var inst_40398 = (state_40415[(7)]);
var inst_40405 = (state_40415[(2)]);
var inst_40406 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_40407 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_40408 = cljs.core.PersistentHashMap.fromArrays(inst_40406,inst_40407);
var inst_40409 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_40398,inst_40408);
var inst_40410 = cljs.core.async.timeout.call(null,(200));
var state_40415__$1 = (function (){var statearr_40418 = state_40415;
(statearr_40418[(9)] = inst_40409);

(statearr_40418[(10)] = inst_40405);

return statearr_40418;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40415__$1,(3),inst_40410);
} else {
if((state_val_40416 === (3))){
var inst_40398 = (state_40415[(7)]);
var inst_40412 = (state_40415[(2)]);
var inst_40413 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_40398,"");
var state_40415__$1 = (function (){var statearr_40419 = state_40415;
(statearr_40419[(11)] = inst_40412);

return statearr_40419;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40415__$1,inst_40413);
} else {
return null;
}
}
}
});})(c__21794__auto__))
;
return ((function (switch__21682__auto__,c__21794__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21683__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21683__auto____0 = (function (){
var statearr_40423 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40423[(0)] = figwheel$client$heads_up$clear_$_state_machine__21683__auto__);

(statearr_40423[(1)] = (1));

return statearr_40423;
});
var figwheel$client$heads_up$clear_$_state_machine__21683__auto____1 = (function (state_40415){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_40415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e40424){if((e40424 instanceof Object)){
var ex__21686__auto__ = e40424;
var statearr_40425_40427 = state_40415;
(statearr_40425_40427[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40428 = state_40415;
state_40415 = G__40428;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21683__auto__ = function(state_40415){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21683__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21683__auto____1.call(this,state_40415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21683__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21683__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21683__auto__;
})()
;})(switch__21682__auto__,c__21794__auto__))
})();
var state__21796__auto__ = (function (){var statearr_40426 = f__21795__auto__.call(null);
(statearr_40426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto__);

return statearr_40426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(c__21794__auto__))
);

return c__21794__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21794__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21794__auto__){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (c__21794__auto__){
return (function (state_40460){
var state_val_40461 = (state_40460[(1)]);
if((state_val_40461 === (1))){
var inst_40450 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_40460__$1 = state_40460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40460__$1,(2),inst_40450);
} else {
if((state_val_40461 === (2))){
var inst_40452 = (state_40460[(2)]);
var inst_40453 = cljs.core.async.timeout.call(null,(400));
var state_40460__$1 = (function (){var statearr_40462 = state_40460;
(statearr_40462[(7)] = inst_40452);

return statearr_40462;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40460__$1,(3),inst_40453);
} else {
if((state_val_40461 === (3))){
var inst_40455 = (state_40460[(2)]);
var inst_40456 = figwheel.client.heads_up.clear.call(null);
var state_40460__$1 = (function (){var statearr_40463 = state_40460;
(statearr_40463[(8)] = inst_40455);

return statearr_40463;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40460__$1,(4),inst_40456);
} else {
if((state_val_40461 === (4))){
var inst_40458 = (state_40460[(2)]);
var state_40460__$1 = state_40460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40460__$1,inst_40458);
} else {
return null;
}
}
}
}
});})(c__21794__auto__))
;
return ((function (switch__21682__auto__,c__21794__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21683__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21683__auto____0 = (function (){
var statearr_40467 = [null,null,null,null,null,null,null,null,null];
(statearr_40467[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21683__auto__);

(statearr_40467[(1)] = (1));

return statearr_40467;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21683__auto____1 = (function (state_40460){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_40460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e40468){if((e40468 instanceof Object)){
var ex__21686__auto__ = e40468;
var statearr_40469_40471 = state_40460;
(statearr_40469_40471[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40472 = state_40460;
state_40460 = G__40472;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21683__auto__ = function(state_40460){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21683__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21683__auto____1.call(this,state_40460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21683__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21683__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21683__auto__;
})()
;})(switch__21682__auto__,c__21794__auto__))
})();
var state__21796__auto__ = (function (){var statearr_40470 = f__21795__auto__.call(null);
(statearr_40470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto__);

return statearr_40470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(c__21794__auto__))
);

return c__21794__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1454263150043