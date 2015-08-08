// Compiled by ClojureScript 1.7.28 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t36842 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36842 = (function (fn_handler,f,meta36843){
this.fn_handler = fn_handler;
this.f = f;
this.meta36843 = meta36843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t36842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36844,meta36843__$1){
var self__ = this;
var _36844__$1 = this;
return (new cljs.core.async.t36842(self__.fn_handler,self__.f,meta36843__$1));
});

cljs.core.async.t36842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36844){
var self__ = this;
var _36844__$1 = this;
return self__.meta36843;
});

cljs.core.async.t36842.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36842.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t36842.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t36842.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta36843","meta36843",495750593,null)], null);
});

cljs.core.async.t36842.cljs$lang$type = true;

cljs.core.async.t36842.cljs$lang$ctorStr = "cljs.core.async/t36842";

cljs.core.async.t36842.cljs$lang$ctorPrWriter = (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t36842");
});

cljs.core.async.__GT_t36842 = (function cljs$core$async$fn_handler_$___GT_t36842(fn_handler__$1,f__$1,meta36843){
return (new cljs.core.async.t36842(fn_handler__$1,f__$1,meta36843));
});

}

return (new cljs.core.async.t36842(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var args36847 = [];
var len__17521__auto___36850 = arguments.length;
var i__17522__auto___36851 = (0);
while(true){
if((i__17522__auto___36851 < len__17521__auto___36850)){
args36847.push((arguments[i__17522__auto___36851]));

var G__36852 = (i__17522__auto___36851 + (1));
i__17522__auto___36851 = G__36852;
continue;
} else {
}
break;
}

var G__36849 = args36847.length;
switch (G__36849) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36847.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var args36854 = [];
var len__17521__auto___36857 = arguments.length;
var i__17522__auto___36858 = (0);
while(true){
if((i__17522__auto___36858 < len__17521__auto___36857)){
args36854.push((arguments[i__17522__auto___36858]));

var G__36859 = (i__17522__auto___36858 + (1));
i__17522__auto___36858 = G__36859;
continue;
} else {
}
break;
}

var G__36856 = args36854.length;
switch (G__36856) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36854.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_36861 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_36861);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_36861,ret){
return (function (){
return fn1.call(null,val_36861);
});})(val_36861,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var args36862 = [];
var len__17521__auto___36865 = arguments.length;
var i__17522__auto___36866 = (0);
while(true){
if((i__17522__auto___36866 < len__17521__auto___36865)){
args36862.push((arguments[i__17522__auto___36866]));

var G__36867 = (i__17522__auto___36866 + (1));
i__17522__auto___36866 = G__36867;
continue;
} else {
}
break;
}

var G__36864 = args36862.length;
switch (G__36864) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36862.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17366__auto___36869 = n;
var x_36870 = (0);
while(true){
if((x_36870 < n__17366__auto___36869)){
(a[x_36870] = (0));

var G__36871 = (x_36870 + (1));
x_36870 = G__36871;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__36872 = (i + (1));
i = G__36872;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t36876 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36876 = (function (alt_flag,flag,meta36877){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta36877 = meta36877;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t36876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36878,meta36877__$1){
var self__ = this;
var _36878__$1 = this;
return (new cljs.core.async.t36876(self__.alt_flag,self__.flag,meta36877__$1));
});})(flag))
;

cljs.core.async.t36876.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36878){
var self__ = this;
var _36878__$1 = this;
return self__.meta36877;
});})(flag))
;

cljs.core.async.t36876.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36876.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t36876.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t36876.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36877","meta36877",1994758376,null)], null);
});})(flag))
;

cljs.core.async.t36876.cljs$lang$type = true;

cljs.core.async.t36876.cljs$lang$ctorStr = "cljs.core.async/t36876";

cljs.core.async.t36876.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t36876");
});})(flag))
;

cljs.core.async.__GT_t36876 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t36876(alt_flag__$1,flag__$1,meta36877){
return (new cljs.core.async.t36876(alt_flag__$1,flag__$1,meta36877));
});})(flag))
;

}

return (new cljs.core.async.t36876(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t36882 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36882 = (function (alt_handler,flag,cb,meta36883){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta36883 = meta36883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t36882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36884,meta36883__$1){
var self__ = this;
var _36884__$1 = this;
return (new cljs.core.async.t36882(self__.alt_handler,self__.flag,self__.cb,meta36883__$1));
});

cljs.core.async.t36882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36884){
var self__ = this;
var _36884__$1 = this;
return self__.meta36883;
});

cljs.core.async.t36882.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36882.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t36882.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t36882.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36883","meta36883",-1561654979,null)], null);
});

cljs.core.async.t36882.cljs$lang$type = true;

cljs.core.async.t36882.cljs$lang$ctorStr = "cljs.core.async/t36882";

cljs.core.async.t36882.cljs$lang$ctorPrWriter = (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t36882");
});

cljs.core.async.__GT_t36882 = (function cljs$core$async$alt_handler_$___GT_t36882(alt_handler__$1,flag__$1,cb__$1,meta36883){
return (new cljs.core.async.t36882(alt_handler__$1,flag__$1,cb__$1,meta36883));
});

}

return (new cljs.core.async.t36882(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36885_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36885_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36886_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36886_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16482__auto__ = wport;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36887 = (i + (1));
i = G__36887;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16482__auto__ = ret;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16470__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16470__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var args__17528__auto__ = [];
var len__17521__auto___36893 = arguments.length;
var i__17522__auto___36894 = (0);
while(true){
if((i__17522__auto___36894 < len__17521__auto___36893)){
args__17528__auto__.push((arguments[i__17522__auto___36894]));

var G__36895 = (i__17522__auto___36894 + (1));
i__17522__auto___36894 = G__36895;
continue;
} else {
}
break;
}

var argseq__17529__auto__ = ((((1) < args__17528__auto__.length))?(new cljs.core.IndexedSeq(args__17528__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17529__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36890){
var map__36891 = p__36890;
var map__36891__$1 = ((((!((map__36891 == null)))?((((map__36891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36891):map__36891);
var opts = map__36891__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36888){
var G__36889 = cljs.core.first.call(null,seq36888);
var seq36888__$1 = cljs.core.next.call(null,seq36888);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36889,seq36888__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args36896 = [];
var len__17521__auto___36946 = arguments.length;
var i__17522__auto___36947 = (0);
while(true){
if((i__17522__auto___36947 < len__17521__auto___36946)){
args36896.push((arguments[i__17522__auto___36947]));

var G__36948 = (i__17522__auto___36947 + (1));
i__17522__auto___36947 = G__36948;
continue;
} else {
}
break;
}

var G__36898 = args36896.length;
switch (G__36898) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36896.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20431__auto___36950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20431__auto___36950){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (c__20431__auto___36950){
return (function (state_36922){
var state_val_36923 = (state_36922[(1)]);
if((state_val_36923 === (7))){
var inst_36918 = (state_36922[(2)]);
var state_36922__$1 = state_36922;
var statearr_36924_36951 = state_36922__$1;
(statearr_36924_36951[(2)] = inst_36918);

(statearr_36924_36951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (1))){
var state_36922__$1 = state_36922;
var statearr_36925_36952 = state_36922__$1;
(statearr_36925_36952[(2)] = null);

(statearr_36925_36952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (4))){
var inst_36901 = (state_36922[(7)]);
var inst_36901__$1 = (state_36922[(2)]);
var inst_36902 = (inst_36901__$1 == null);
var state_36922__$1 = (function (){var statearr_36926 = state_36922;
(statearr_36926[(7)] = inst_36901__$1);

return statearr_36926;
})();
if(cljs.core.truth_(inst_36902)){
var statearr_36927_36953 = state_36922__$1;
(statearr_36927_36953[(1)] = (5));

} else {
var statearr_36928_36954 = state_36922__$1;
(statearr_36928_36954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (13))){
var state_36922__$1 = state_36922;
var statearr_36929_36955 = state_36922__$1;
(statearr_36929_36955[(2)] = null);

(statearr_36929_36955[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (6))){
var inst_36901 = (state_36922[(7)]);
var state_36922__$1 = state_36922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36922__$1,(11),to,inst_36901);
} else {
if((state_val_36923 === (3))){
var inst_36920 = (state_36922[(2)]);
var state_36922__$1 = state_36922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36922__$1,inst_36920);
} else {
if((state_val_36923 === (12))){
var state_36922__$1 = state_36922;
var statearr_36930_36956 = state_36922__$1;
(statearr_36930_36956[(2)] = null);

(statearr_36930_36956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (2))){
var state_36922__$1 = state_36922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36922__$1,(4),from);
} else {
if((state_val_36923 === (11))){
var inst_36911 = (state_36922[(2)]);
var state_36922__$1 = state_36922;
if(cljs.core.truth_(inst_36911)){
var statearr_36931_36957 = state_36922__$1;
(statearr_36931_36957[(1)] = (12));

} else {
var statearr_36932_36958 = state_36922__$1;
(statearr_36932_36958[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (9))){
var state_36922__$1 = state_36922;
var statearr_36933_36959 = state_36922__$1;
(statearr_36933_36959[(2)] = null);

(statearr_36933_36959[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (5))){
var state_36922__$1 = state_36922;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36934_36960 = state_36922__$1;
(statearr_36934_36960[(1)] = (8));

} else {
var statearr_36935_36961 = state_36922__$1;
(statearr_36935_36961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (14))){
var inst_36916 = (state_36922[(2)]);
var state_36922__$1 = state_36922;
var statearr_36936_36962 = state_36922__$1;
(statearr_36936_36962[(2)] = inst_36916);

(statearr_36936_36962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (10))){
var inst_36908 = (state_36922[(2)]);
var state_36922__$1 = state_36922;
var statearr_36937_36963 = state_36922__$1;
(statearr_36937_36963[(2)] = inst_36908);

(statearr_36937_36963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (8))){
var inst_36905 = cljs.core.async.close_BANG_.call(null,to);
var state_36922__$1 = state_36922;
var statearr_36938_36964 = state_36922__$1;
(statearr_36938_36964[(2)] = inst_36905);

(statearr_36938_36964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20431__auto___36950))
;
return ((function (switch__20366__auto__,c__20431__auto___36950){
return (function() {
var cljs$core$async$state_machine__20367__auto__ = null;
var cljs$core$async$state_machine__20367__auto____0 = (function (){
var statearr_36942 = [null,null,null,null,null,null,null,null];
(statearr_36942[(0)] = cljs$core$async$state_machine__20367__auto__);

(statearr_36942[(1)] = (1));

return statearr_36942;
});
var cljs$core$async$state_machine__20367__auto____1 = (function (state_36922){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_36922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e36943){if((e36943 instanceof Object)){
var ex__20370__auto__ = e36943;
var statearr_36944_36965 = state_36922;
(statearr_36944_36965[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36966 = state_36922;
state_36922 = G__36966;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
cljs$core$async$state_machine__20367__auto__ = function(state_36922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20367__auto____1.call(this,state_36922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20367__auto____0;
cljs$core$async$state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20367__auto____1;
return cljs$core$async$state_machine__20367__auto__;
})()
;})(switch__20366__auto__,c__20431__auto___36950))
})();
var state__20433__auto__ = (function (){var statearr_36945 = f__20432__auto__.call(null);
(statearr_36945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto___36950);

return statearr_36945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(c__20431__auto___36950))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__37150){
var vec__37151 = p__37150;
var v = cljs.core.nth.call(null,vec__37151,(0),null);
var p = cljs.core.nth.call(null,vec__37151,(1),null);
var job = vec__37151;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20431__auto___37333 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20431__auto___37333,res,vec__37151,v,p,job,jobs,results){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (c__20431__auto___37333,res,vec__37151,v,p,job,jobs,results){
return (function (state_37156){
var state_val_37157 = (state_37156[(1)]);
if((state_val_37157 === (1))){
var state_37156__$1 = state_37156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37156__$1,(2),res,v);
} else {
if((state_val_37157 === (2))){
var inst_37153 = (state_37156[(2)]);
var inst_37154 = cljs.core.async.close_BANG_.call(null,res);
var state_37156__$1 = (function (){var statearr_37158 = state_37156;
(statearr_37158[(7)] = inst_37153);

return statearr_37158;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37156__$1,inst_37154);
} else {
return null;
}
}
});})(c__20431__auto___37333,res,vec__37151,v,p,job,jobs,results))
;
return ((function (switch__20366__auto__,c__20431__auto___37333,res,vec__37151,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____0 = (function (){
var statearr_37162 = [null,null,null,null,null,null,null,null];
(statearr_37162[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__);

(statearr_37162[(1)] = (1));

return statearr_37162;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____1 = (function (state_37156){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_37156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e37163){if((e37163 instanceof Object)){
var ex__20370__auto__ = e37163;
var statearr_37164_37334 = state_37156;
(statearr_37164_37334[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37335 = state_37156;
state_37156 = G__37335;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__ = function(state_37156){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____1.call(this,state_37156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__;
})()
;})(switch__20366__auto__,c__20431__auto___37333,res,vec__37151,v,p,job,jobs,results))
})();
var state__20433__auto__ = (function (){var statearr_37165 = f__20432__auto__.call(null);
(statearr_37165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto___37333);

return statearr_37165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(c__20431__auto___37333,res,vec__37151,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37166){
var vec__37167 = p__37166;
var v = cljs.core.nth.call(null,vec__37167,(0),null);
var p = cljs.core.nth.call(null,vec__37167,(1),null);
var job = vec__37167;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17366__auto___37336 = n;
var __37337 = (0);
while(true){
if((__37337 < n__17366__auto___37336)){
var G__37168_37338 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__37168_37338) {
case "compute":
var c__20431__auto___37340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37337,c__20431__auto___37340,G__37168_37338,n__17366__auto___37336,jobs,results,process,async){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (__37337,c__20431__auto___37340,G__37168_37338,n__17366__auto___37336,jobs,results,process,async){
return (function (state_37181){
var state_val_37182 = (state_37181[(1)]);
if((state_val_37182 === (1))){
var state_37181__$1 = state_37181;
var statearr_37183_37341 = state_37181__$1;
(statearr_37183_37341[(2)] = null);

(statearr_37183_37341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37182 === (2))){
var state_37181__$1 = state_37181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37181__$1,(4),jobs);
} else {
if((state_val_37182 === (3))){
var inst_37179 = (state_37181[(2)]);
var state_37181__$1 = state_37181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37181__$1,inst_37179);
} else {
if((state_val_37182 === (4))){
var inst_37171 = (state_37181[(2)]);
var inst_37172 = process.call(null,inst_37171);
var state_37181__$1 = state_37181;
if(cljs.core.truth_(inst_37172)){
var statearr_37184_37342 = state_37181__$1;
(statearr_37184_37342[(1)] = (5));

} else {
var statearr_37185_37343 = state_37181__$1;
(statearr_37185_37343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37182 === (5))){
var state_37181__$1 = state_37181;
var statearr_37186_37344 = state_37181__$1;
(statearr_37186_37344[(2)] = null);

(statearr_37186_37344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37182 === (6))){
var state_37181__$1 = state_37181;
var statearr_37187_37345 = state_37181__$1;
(statearr_37187_37345[(2)] = null);

(statearr_37187_37345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37182 === (7))){
var inst_37177 = (state_37181[(2)]);
var state_37181__$1 = state_37181;
var statearr_37188_37346 = state_37181__$1;
(statearr_37188_37346[(2)] = inst_37177);

(statearr_37188_37346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__37337,c__20431__auto___37340,G__37168_37338,n__17366__auto___37336,jobs,results,process,async))
;
return ((function (__37337,switch__20366__auto__,c__20431__auto___37340,G__37168_37338,n__17366__auto___37336,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____0 = (function (){
var statearr_37192 = [null,null,null,null,null,null,null];
(statearr_37192[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__);

(statearr_37192[(1)] = (1));

return statearr_37192;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____1 = (function (state_37181){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_37181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e37193){if((e37193 instanceof Object)){
var ex__20370__auto__ = e37193;
var statearr_37194_37347 = state_37181;
(statearr_37194_37347[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37348 = state_37181;
state_37181 = G__37348;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__ = function(state_37181){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____1.call(this,state_37181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__;
})()
;})(__37337,switch__20366__auto__,c__20431__auto___37340,G__37168_37338,n__17366__auto___37336,jobs,results,process,async))
})();
var state__20433__auto__ = (function (){var statearr_37195 = f__20432__auto__.call(null);
(statearr_37195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto___37340);

return statearr_37195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(__37337,c__20431__auto___37340,G__37168_37338,n__17366__auto___37336,jobs,results,process,async))
);


break;
case "async":
var c__20431__auto___37349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37337,c__20431__auto___37349,G__37168_37338,n__17366__auto___37336,jobs,results,process,async){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (__37337,c__20431__auto___37349,G__37168_37338,n__17366__auto___37336,jobs,results,process,async){
return (function (state_37208){
var state_val_37209 = (state_37208[(1)]);
if((state_val_37209 === (1))){
var state_37208__$1 = state_37208;
var statearr_37210_37350 = state_37208__$1;
(statearr_37210_37350[(2)] = null);

(statearr_37210_37350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37209 === (2))){
var state_37208__$1 = state_37208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37208__$1,(4),jobs);
} else {
if((state_val_37209 === (3))){
var inst_37206 = (state_37208[(2)]);
var state_37208__$1 = state_37208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37208__$1,inst_37206);
} else {
if((state_val_37209 === (4))){
var inst_37198 = (state_37208[(2)]);
var inst_37199 = async.call(null,inst_37198);
var state_37208__$1 = state_37208;
if(cljs.core.truth_(inst_37199)){
var statearr_37211_37351 = state_37208__$1;
(statearr_37211_37351[(1)] = (5));

} else {
var statearr_37212_37352 = state_37208__$1;
(statearr_37212_37352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37209 === (5))){
var state_37208__$1 = state_37208;
var statearr_37213_37353 = state_37208__$1;
(statearr_37213_37353[(2)] = null);

(statearr_37213_37353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37209 === (6))){
var state_37208__$1 = state_37208;
var statearr_37214_37354 = state_37208__$1;
(statearr_37214_37354[(2)] = null);

(statearr_37214_37354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37209 === (7))){
var inst_37204 = (state_37208[(2)]);
var state_37208__$1 = state_37208;
var statearr_37215_37355 = state_37208__$1;
(statearr_37215_37355[(2)] = inst_37204);

(statearr_37215_37355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__37337,c__20431__auto___37349,G__37168_37338,n__17366__auto___37336,jobs,results,process,async))
;
return ((function (__37337,switch__20366__auto__,c__20431__auto___37349,G__37168_37338,n__17366__auto___37336,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____0 = (function (){
var statearr_37219 = [null,null,null,null,null,null,null];
(statearr_37219[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__);

(statearr_37219[(1)] = (1));

return statearr_37219;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____1 = (function (state_37208){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_37208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e37220){if((e37220 instanceof Object)){
var ex__20370__auto__ = e37220;
var statearr_37221_37356 = state_37208;
(statearr_37221_37356[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37357 = state_37208;
state_37208 = G__37357;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__ = function(state_37208){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____1.call(this,state_37208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__;
})()
;})(__37337,switch__20366__auto__,c__20431__auto___37349,G__37168_37338,n__17366__auto___37336,jobs,results,process,async))
})();
var state__20433__auto__ = (function (){var statearr_37222 = f__20432__auto__.call(null);
(statearr_37222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto___37349);

return statearr_37222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(__37337,c__20431__auto___37349,G__37168_37338,n__17366__auto___37336,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__37358 = (__37337 + (1));
__37337 = G__37358;
continue;
} else {
}
break;
}

var c__20431__auto___37359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20431__auto___37359,jobs,results,process,async){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (c__20431__auto___37359,jobs,results,process,async){
return (function (state_37314){
var state_val_37315 = (state_37314[(1)]);
if((state_val_37315 === (1))){
var state_37314__$1 = state_37314;
var statearr_37316_37360 = state_37314__$1;
(statearr_37316_37360[(2)] = null);

(statearr_37316_37360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37315 === (2))){
var state_37314__$1 = state_37314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37314__$1,(4),from);
} else {
if((state_val_37315 === (3))){
var inst_37312 = (state_37314[(2)]);
var state_37314__$1 = state_37314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37314__$1,inst_37312);
} else {
if((state_val_37315 === (4))){
var inst_37295 = (state_37314[(7)]);
var inst_37295__$1 = (state_37314[(2)]);
var inst_37296 = (inst_37295__$1 == null);
var state_37314__$1 = (function (){var statearr_37317 = state_37314;
(statearr_37317[(7)] = inst_37295__$1);

return statearr_37317;
})();
if(cljs.core.truth_(inst_37296)){
var statearr_37318_37361 = state_37314__$1;
(statearr_37318_37361[(1)] = (5));

} else {
var statearr_37319_37362 = state_37314__$1;
(statearr_37319_37362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37315 === (5))){
var inst_37298 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37314__$1 = state_37314;
var statearr_37320_37363 = state_37314__$1;
(statearr_37320_37363[(2)] = inst_37298);

(statearr_37320_37363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37315 === (6))){
var inst_37300 = (state_37314[(8)]);
var inst_37295 = (state_37314[(7)]);
var inst_37300__$1 = cljs.core.async.chan.call(null,(1));
var inst_37301 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37302 = [inst_37295,inst_37300__$1];
var inst_37303 = (new cljs.core.PersistentVector(null,2,(5),inst_37301,inst_37302,null));
var state_37314__$1 = (function (){var statearr_37321 = state_37314;
(statearr_37321[(8)] = inst_37300__$1);

return statearr_37321;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37314__$1,(8),jobs,inst_37303);
} else {
if((state_val_37315 === (7))){
var inst_37310 = (state_37314[(2)]);
var state_37314__$1 = state_37314;
var statearr_37322_37364 = state_37314__$1;
(statearr_37322_37364[(2)] = inst_37310);

(statearr_37322_37364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37315 === (8))){
var inst_37300 = (state_37314[(8)]);
var inst_37305 = (state_37314[(2)]);
var state_37314__$1 = (function (){var statearr_37323 = state_37314;
(statearr_37323[(9)] = inst_37305);

return statearr_37323;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37314__$1,(9),results,inst_37300);
} else {
if((state_val_37315 === (9))){
var inst_37307 = (state_37314[(2)]);
var state_37314__$1 = (function (){var statearr_37324 = state_37314;
(statearr_37324[(10)] = inst_37307);

return statearr_37324;
})();
var statearr_37325_37365 = state_37314__$1;
(statearr_37325_37365[(2)] = null);

(statearr_37325_37365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__20431__auto___37359,jobs,results,process,async))
;
return ((function (switch__20366__auto__,c__20431__auto___37359,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____0 = (function (){
var statearr_37329 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37329[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__);

(statearr_37329[(1)] = (1));

return statearr_37329;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____1 = (function (state_37314){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_37314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e37330){if((e37330 instanceof Object)){
var ex__20370__auto__ = e37330;
var statearr_37331_37366 = state_37314;
(statearr_37331_37366[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37367 = state_37314;
state_37314 = G__37367;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__ = function(state_37314){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____1.call(this,state_37314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__;
})()
;})(switch__20366__auto__,c__20431__auto___37359,jobs,results,process,async))
})();
var state__20433__auto__ = (function (){var statearr_37332 = f__20432__auto__.call(null);
(statearr_37332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto___37359);

return statearr_37332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(c__20431__auto___37359,jobs,results,process,async))
);


var c__20431__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20431__auto__,jobs,results,process,async){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (c__20431__auto__,jobs,results,process,async){
return (function (state_37260){
var state_val_37261 = (state_37260[(1)]);
if((state_val_37261 === (7))){
var inst_37256 = (state_37260[(2)]);
var state_37260__$1 = state_37260;
var statearr_37262_37368 = state_37260__$1;
(statearr_37262_37368[(2)] = inst_37256);

(statearr_37262_37368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (20))){
var state_37260__$1 = state_37260;
var statearr_37263_37369 = state_37260__$1;
(statearr_37263_37369[(2)] = null);

(statearr_37263_37369[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (1))){
var state_37260__$1 = state_37260;
var statearr_37264_37370 = state_37260__$1;
(statearr_37264_37370[(2)] = null);

(statearr_37264_37370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (4))){
var inst_37225 = (state_37260[(7)]);
var inst_37225__$1 = (state_37260[(2)]);
var inst_37226 = (inst_37225__$1 == null);
var state_37260__$1 = (function (){var statearr_37265 = state_37260;
(statearr_37265[(7)] = inst_37225__$1);

return statearr_37265;
})();
if(cljs.core.truth_(inst_37226)){
var statearr_37266_37371 = state_37260__$1;
(statearr_37266_37371[(1)] = (5));

} else {
var statearr_37267_37372 = state_37260__$1;
(statearr_37267_37372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (15))){
var inst_37238 = (state_37260[(8)]);
var state_37260__$1 = state_37260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37260__$1,(18),to,inst_37238);
} else {
if((state_val_37261 === (21))){
var inst_37251 = (state_37260[(2)]);
var state_37260__$1 = state_37260;
var statearr_37268_37373 = state_37260__$1;
(statearr_37268_37373[(2)] = inst_37251);

(statearr_37268_37373[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (13))){
var inst_37253 = (state_37260[(2)]);
var state_37260__$1 = (function (){var statearr_37269 = state_37260;
(statearr_37269[(9)] = inst_37253);

return statearr_37269;
})();
var statearr_37270_37374 = state_37260__$1;
(statearr_37270_37374[(2)] = null);

(statearr_37270_37374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (6))){
var inst_37225 = (state_37260[(7)]);
var state_37260__$1 = state_37260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37260__$1,(11),inst_37225);
} else {
if((state_val_37261 === (17))){
var inst_37246 = (state_37260[(2)]);
var state_37260__$1 = state_37260;
if(cljs.core.truth_(inst_37246)){
var statearr_37271_37375 = state_37260__$1;
(statearr_37271_37375[(1)] = (19));

} else {
var statearr_37272_37376 = state_37260__$1;
(statearr_37272_37376[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (3))){
var inst_37258 = (state_37260[(2)]);
var state_37260__$1 = state_37260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37260__$1,inst_37258);
} else {
if((state_val_37261 === (12))){
var inst_37235 = (state_37260[(10)]);
var state_37260__$1 = state_37260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37260__$1,(14),inst_37235);
} else {
if((state_val_37261 === (2))){
var state_37260__$1 = state_37260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37260__$1,(4),results);
} else {
if((state_val_37261 === (19))){
var state_37260__$1 = state_37260;
var statearr_37273_37377 = state_37260__$1;
(statearr_37273_37377[(2)] = null);

(statearr_37273_37377[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (11))){
var inst_37235 = (state_37260[(2)]);
var state_37260__$1 = (function (){var statearr_37274 = state_37260;
(statearr_37274[(10)] = inst_37235);

return statearr_37274;
})();
var statearr_37275_37378 = state_37260__$1;
(statearr_37275_37378[(2)] = null);

(statearr_37275_37378[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (9))){
var state_37260__$1 = state_37260;
var statearr_37276_37379 = state_37260__$1;
(statearr_37276_37379[(2)] = null);

(statearr_37276_37379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (5))){
var state_37260__$1 = state_37260;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37277_37380 = state_37260__$1;
(statearr_37277_37380[(1)] = (8));

} else {
var statearr_37278_37381 = state_37260__$1;
(statearr_37278_37381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (14))){
var inst_37238 = (state_37260[(8)]);
var inst_37240 = (state_37260[(11)]);
var inst_37238__$1 = (state_37260[(2)]);
var inst_37239 = (inst_37238__$1 == null);
var inst_37240__$1 = cljs.core.not.call(null,inst_37239);
var state_37260__$1 = (function (){var statearr_37279 = state_37260;
(statearr_37279[(8)] = inst_37238__$1);

(statearr_37279[(11)] = inst_37240__$1);

return statearr_37279;
})();
if(inst_37240__$1){
var statearr_37280_37382 = state_37260__$1;
(statearr_37280_37382[(1)] = (15));

} else {
var statearr_37281_37383 = state_37260__$1;
(statearr_37281_37383[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (16))){
var inst_37240 = (state_37260[(11)]);
var state_37260__$1 = state_37260;
var statearr_37282_37384 = state_37260__$1;
(statearr_37282_37384[(2)] = inst_37240);

(statearr_37282_37384[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (10))){
var inst_37232 = (state_37260[(2)]);
var state_37260__$1 = state_37260;
var statearr_37283_37385 = state_37260__$1;
(statearr_37283_37385[(2)] = inst_37232);

(statearr_37283_37385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (18))){
var inst_37243 = (state_37260[(2)]);
var state_37260__$1 = state_37260;
var statearr_37284_37386 = state_37260__$1;
(statearr_37284_37386[(2)] = inst_37243);

(statearr_37284_37386[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (8))){
var inst_37229 = cljs.core.async.close_BANG_.call(null,to);
var state_37260__$1 = state_37260;
var statearr_37285_37387 = state_37260__$1;
(statearr_37285_37387[(2)] = inst_37229);

(statearr_37285_37387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20431__auto__,jobs,results,process,async))
;
return ((function (switch__20366__auto__,c__20431__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____0 = (function (){
var statearr_37289 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37289[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__);

(statearr_37289[(1)] = (1));

return statearr_37289;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____1 = (function (state_37260){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_37260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e37290){if((e37290 instanceof Object)){
var ex__20370__auto__ = e37290;
var statearr_37291_37388 = state_37260;
(statearr_37291_37388[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37389 = state_37260;
state_37260 = G__37389;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__ = function(state_37260){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____1.call(this,state_37260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20367__auto__;
})()
;})(switch__20366__auto__,c__20431__auto__,jobs,results,process,async))
})();
var state__20433__auto__ = (function (){var statearr_37292 = f__20432__auto__.call(null);
(statearr_37292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto__);

return statearr_37292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(c__20431__auto__,jobs,results,process,async))
);

return c__20431__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var args37390 = [];
var len__17521__auto___37393 = arguments.length;
var i__17522__auto___37394 = (0);
while(true){
if((i__17522__auto___37394 < len__17521__auto___37393)){
args37390.push((arguments[i__17522__auto___37394]));

var G__37395 = (i__17522__auto___37394 + (1));
i__17522__auto___37394 = G__37395;
continue;
} else {
}
break;
}

var G__37392 = args37390.length;
switch (G__37392) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37390.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var args37397 = [];
var len__17521__auto___37400 = arguments.length;
var i__17522__auto___37401 = (0);
while(true){
if((i__17522__auto___37401 < len__17521__auto___37400)){
args37397.push((arguments[i__17522__auto___37401]));

var G__37402 = (i__17522__auto___37401 + (1));
i__17522__auto___37401 = G__37402;
continue;
} else {
}
break;
}

var G__37399 = args37397.length;
switch (G__37399) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37397.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var args37404 = [];
var len__17521__auto___37457 = arguments.length;
var i__17522__auto___37458 = (0);
while(true){
if((i__17522__auto___37458 < len__17521__auto___37457)){
args37404.push((arguments[i__17522__auto___37458]));

var G__37459 = (i__17522__auto___37458 + (1));
i__17522__auto___37458 = G__37459;
continue;
} else {
}
break;
}

var G__37406 = args37404.length;
switch (G__37406) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37404.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20431__auto___37461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20431__auto___37461,tc,fc){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (c__20431__auto___37461,tc,fc){
return (function (state_37432){
var state_val_37433 = (state_37432[(1)]);
if((state_val_37433 === (7))){
var inst_37428 = (state_37432[(2)]);
var state_37432__$1 = state_37432;
var statearr_37434_37462 = state_37432__$1;
(statearr_37434_37462[(2)] = inst_37428);

(statearr_37434_37462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37433 === (1))){
var state_37432__$1 = state_37432;
var statearr_37435_37463 = state_37432__$1;
(statearr_37435_37463[(2)] = null);

(statearr_37435_37463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37433 === (4))){
var inst_37409 = (state_37432[(7)]);
var inst_37409__$1 = (state_37432[(2)]);
var inst_37410 = (inst_37409__$1 == null);
var state_37432__$1 = (function (){var statearr_37436 = state_37432;
(statearr_37436[(7)] = inst_37409__$1);

return statearr_37436;
})();
if(cljs.core.truth_(inst_37410)){
var statearr_37437_37464 = state_37432__$1;
(statearr_37437_37464[(1)] = (5));

} else {
var statearr_37438_37465 = state_37432__$1;
(statearr_37438_37465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37433 === (13))){
var state_37432__$1 = state_37432;
var statearr_37439_37466 = state_37432__$1;
(statearr_37439_37466[(2)] = null);

(statearr_37439_37466[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37433 === (6))){
var inst_37409 = (state_37432[(7)]);
var inst_37415 = p.call(null,inst_37409);
var state_37432__$1 = state_37432;
if(cljs.core.truth_(inst_37415)){
var statearr_37440_37467 = state_37432__$1;
(statearr_37440_37467[(1)] = (9));

} else {
var statearr_37441_37468 = state_37432__$1;
(statearr_37441_37468[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37433 === (3))){
var inst_37430 = (state_37432[(2)]);
var state_37432__$1 = state_37432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37432__$1,inst_37430);
} else {
if((state_val_37433 === (12))){
var state_37432__$1 = state_37432;
var statearr_37442_37469 = state_37432__$1;
(statearr_37442_37469[(2)] = null);

(statearr_37442_37469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37433 === (2))){
var state_37432__$1 = state_37432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37432__$1,(4),ch);
} else {
if((state_val_37433 === (11))){
var inst_37409 = (state_37432[(7)]);
var inst_37419 = (state_37432[(2)]);
var state_37432__$1 = state_37432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37432__$1,(8),inst_37419,inst_37409);
} else {
if((state_val_37433 === (9))){
var state_37432__$1 = state_37432;
var statearr_37443_37470 = state_37432__$1;
(statearr_37443_37470[(2)] = tc);

(statearr_37443_37470[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37433 === (5))){
var inst_37412 = cljs.core.async.close_BANG_.call(null,tc);
var inst_37413 = cljs.core.async.close_BANG_.call(null,fc);
var state_37432__$1 = (function (){var statearr_37444 = state_37432;
(statearr_37444[(8)] = inst_37412);

return statearr_37444;
})();
var statearr_37445_37471 = state_37432__$1;
(statearr_37445_37471[(2)] = inst_37413);

(statearr_37445_37471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37433 === (14))){
var inst_37426 = (state_37432[(2)]);
var state_37432__$1 = state_37432;
var statearr_37446_37472 = state_37432__$1;
(statearr_37446_37472[(2)] = inst_37426);

(statearr_37446_37472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37433 === (10))){
var state_37432__$1 = state_37432;
var statearr_37447_37473 = state_37432__$1;
(statearr_37447_37473[(2)] = fc);

(statearr_37447_37473[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37433 === (8))){
var inst_37421 = (state_37432[(2)]);
var state_37432__$1 = state_37432;
if(cljs.core.truth_(inst_37421)){
var statearr_37448_37474 = state_37432__$1;
(statearr_37448_37474[(1)] = (12));

} else {
var statearr_37449_37475 = state_37432__$1;
(statearr_37449_37475[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20431__auto___37461,tc,fc))
;
return ((function (switch__20366__auto__,c__20431__auto___37461,tc,fc){
return (function() {
var cljs$core$async$state_machine__20367__auto__ = null;
var cljs$core$async$state_machine__20367__auto____0 = (function (){
var statearr_37453 = [null,null,null,null,null,null,null,null,null];
(statearr_37453[(0)] = cljs$core$async$state_machine__20367__auto__);

(statearr_37453[(1)] = (1));

return statearr_37453;
});
var cljs$core$async$state_machine__20367__auto____1 = (function (state_37432){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_37432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e37454){if((e37454 instanceof Object)){
var ex__20370__auto__ = e37454;
var statearr_37455_37476 = state_37432;
(statearr_37455_37476[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37477 = state_37432;
state_37432 = G__37477;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
cljs$core$async$state_machine__20367__auto__ = function(state_37432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20367__auto____1.call(this,state_37432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20367__auto____0;
cljs$core$async$state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20367__auto____1;
return cljs$core$async$state_machine__20367__auto__;
})()
;})(switch__20366__auto__,c__20431__auto___37461,tc,fc))
})();
var state__20433__auto__ = (function (){var statearr_37456 = f__20432__auto__.call(null);
(statearr_37456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto___37461);

return statearr_37456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(c__20431__auto___37461,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20431__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20431__auto__){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (c__20431__auto__){
return (function (state_37524){
var state_val_37525 = (state_37524[(1)]);
if((state_val_37525 === (1))){
var inst_37510 = init;
var state_37524__$1 = (function (){var statearr_37526 = state_37524;
(statearr_37526[(7)] = inst_37510);

return statearr_37526;
})();
var statearr_37527_37542 = state_37524__$1;
(statearr_37527_37542[(2)] = null);

(statearr_37527_37542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37525 === (2))){
var state_37524__$1 = state_37524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37524__$1,(4),ch);
} else {
if((state_val_37525 === (3))){
var inst_37522 = (state_37524[(2)]);
var state_37524__$1 = state_37524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37524__$1,inst_37522);
} else {
if((state_val_37525 === (4))){
var inst_37513 = (state_37524[(8)]);
var inst_37513__$1 = (state_37524[(2)]);
var inst_37514 = (inst_37513__$1 == null);
var state_37524__$1 = (function (){var statearr_37528 = state_37524;
(statearr_37528[(8)] = inst_37513__$1);

return statearr_37528;
})();
if(cljs.core.truth_(inst_37514)){
var statearr_37529_37543 = state_37524__$1;
(statearr_37529_37543[(1)] = (5));

} else {
var statearr_37530_37544 = state_37524__$1;
(statearr_37530_37544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37525 === (5))){
var inst_37510 = (state_37524[(7)]);
var state_37524__$1 = state_37524;
var statearr_37531_37545 = state_37524__$1;
(statearr_37531_37545[(2)] = inst_37510);

(statearr_37531_37545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37525 === (6))){
var inst_37513 = (state_37524[(8)]);
var inst_37510 = (state_37524[(7)]);
var inst_37517 = f.call(null,inst_37510,inst_37513);
var inst_37510__$1 = inst_37517;
var state_37524__$1 = (function (){var statearr_37532 = state_37524;
(statearr_37532[(7)] = inst_37510__$1);

return statearr_37532;
})();
var statearr_37533_37546 = state_37524__$1;
(statearr_37533_37546[(2)] = null);

(statearr_37533_37546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37525 === (7))){
var inst_37520 = (state_37524[(2)]);
var state_37524__$1 = state_37524;
var statearr_37534_37547 = state_37524__$1;
(statearr_37534_37547[(2)] = inst_37520);

(statearr_37534_37547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20431__auto__))
;
return ((function (switch__20366__auto__,c__20431__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20367__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20367__auto____0 = (function (){
var statearr_37538 = [null,null,null,null,null,null,null,null,null];
(statearr_37538[(0)] = cljs$core$async$reduce_$_state_machine__20367__auto__);

(statearr_37538[(1)] = (1));

return statearr_37538;
});
var cljs$core$async$reduce_$_state_machine__20367__auto____1 = (function (state_37524){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_37524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e37539){if((e37539 instanceof Object)){
var ex__20370__auto__ = e37539;
var statearr_37540_37548 = state_37524;
(statearr_37540_37548[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37549 = state_37524;
state_37524 = G__37549;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20367__auto__ = function(state_37524){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20367__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20367__auto____1.call(this,state_37524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20367__auto____0;
cljs$core$async$reduce_$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20367__auto____1;
return cljs$core$async$reduce_$_state_machine__20367__auto__;
})()
;})(switch__20366__auto__,c__20431__auto__))
})();
var state__20433__auto__ = (function (){var statearr_37541 = f__20432__auto__.call(null);
(statearr_37541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto__);

return statearr_37541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(c__20431__auto__))
);

return c__20431__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var args37550 = [];
var len__17521__auto___37602 = arguments.length;
var i__17522__auto___37603 = (0);
while(true){
if((i__17522__auto___37603 < len__17521__auto___37602)){
args37550.push((arguments[i__17522__auto___37603]));

var G__37604 = (i__17522__auto___37603 + (1));
i__17522__auto___37603 = G__37604;
continue;
} else {
}
break;
}

var G__37552 = args37550.length;
switch (G__37552) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37550.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20431__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20431__auto__){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (c__20431__auto__){
return (function (state_37577){
var state_val_37578 = (state_37577[(1)]);
if((state_val_37578 === (7))){
var inst_37559 = (state_37577[(2)]);
var state_37577__$1 = state_37577;
var statearr_37579_37606 = state_37577__$1;
(statearr_37579_37606[(2)] = inst_37559);

(statearr_37579_37606[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (1))){
var inst_37553 = cljs.core.seq.call(null,coll);
var inst_37554 = inst_37553;
var state_37577__$1 = (function (){var statearr_37580 = state_37577;
(statearr_37580[(7)] = inst_37554);

return statearr_37580;
})();
var statearr_37581_37607 = state_37577__$1;
(statearr_37581_37607[(2)] = null);

(statearr_37581_37607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (4))){
var inst_37554 = (state_37577[(7)]);
var inst_37557 = cljs.core.first.call(null,inst_37554);
var state_37577__$1 = state_37577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37577__$1,(7),ch,inst_37557);
} else {
if((state_val_37578 === (13))){
var inst_37571 = (state_37577[(2)]);
var state_37577__$1 = state_37577;
var statearr_37582_37608 = state_37577__$1;
(statearr_37582_37608[(2)] = inst_37571);

(statearr_37582_37608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (6))){
var inst_37562 = (state_37577[(2)]);
var state_37577__$1 = state_37577;
if(cljs.core.truth_(inst_37562)){
var statearr_37583_37609 = state_37577__$1;
(statearr_37583_37609[(1)] = (8));

} else {
var statearr_37584_37610 = state_37577__$1;
(statearr_37584_37610[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (3))){
var inst_37575 = (state_37577[(2)]);
var state_37577__$1 = state_37577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37577__$1,inst_37575);
} else {
if((state_val_37578 === (12))){
var state_37577__$1 = state_37577;
var statearr_37585_37611 = state_37577__$1;
(statearr_37585_37611[(2)] = null);

(statearr_37585_37611[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (2))){
var inst_37554 = (state_37577[(7)]);
var state_37577__$1 = state_37577;
if(cljs.core.truth_(inst_37554)){
var statearr_37586_37612 = state_37577__$1;
(statearr_37586_37612[(1)] = (4));

} else {
var statearr_37587_37613 = state_37577__$1;
(statearr_37587_37613[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (11))){
var inst_37568 = cljs.core.async.close_BANG_.call(null,ch);
var state_37577__$1 = state_37577;
var statearr_37588_37614 = state_37577__$1;
(statearr_37588_37614[(2)] = inst_37568);

(statearr_37588_37614[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (9))){
var state_37577__$1 = state_37577;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37589_37615 = state_37577__$1;
(statearr_37589_37615[(1)] = (11));

} else {
var statearr_37590_37616 = state_37577__$1;
(statearr_37590_37616[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (5))){
var inst_37554 = (state_37577[(7)]);
var state_37577__$1 = state_37577;
var statearr_37591_37617 = state_37577__$1;
(statearr_37591_37617[(2)] = inst_37554);

(statearr_37591_37617[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (10))){
var inst_37573 = (state_37577[(2)]);
var state_37577__$1 = state_37577;
var statearr_37592_37618 = state_37577__$1;
(statearr_37592_37618[(2)] = inst_37573);

(statearr_37592_37618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (8))){
var inst_37554 = (state_37577[(7)]);
var inst_37564 = cljs.core.next.call(null,inst_37554);
var inst_37554__$1 = inst_37564;
var state_37577__$1 = (function (){var statearr_37593 = state_37577;
(statearr_37593[(7)] = inst_37554__$1);

return statearr_37593;
})();
var statearr_37594_37619 = state_37577__$1;
(statearr_37594_37619[(2)] = null);

(statearr_37594_37619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20431__auto__))
;
return ((function (switch__20366__auto__,c__20431__auto__){
return (function() {
var cljs$core$async$state_machine__20367__auto__ = null;
var cljs$core$async$state_machine__20367__auto____0 = (function (){
var statearr_37598 = [null,null,null,null,null,null,null,null];
(statearr_37598[(0)] = cljs$core$async$state_machine__20367__auto__);

(statearr_37598[(1)] = (1));

return statearr_37598;
});
var cljs$core$async$state_machine__20367__auto____1 = (function (state_37577){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_37577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e37599){if((e37599 instanceof Object)){
var ex__20370__auto__ = e37599;
var statearr_37600_37620 = state_37577;
(statearr_37600_37620[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37621 = state_37577;
state_37577 = G__37621;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
cljs$core$async$state_machine__20367__auto__ = function(state_37577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20367__auto____1.call(this,state_37577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20367__auto____0;
cljs$core$async$state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20367__auto____1;
return cljs$core$async$state_machine__20367__auto__;
})()
;})(switch__20366__auto__,c__20431__auto__))
})();
var state__20433__auto__ = (function (){var statearr_37601 = f__20432__auto__.call(null);
(statearr_37601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto__);

return statearr_37601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(c__20431__auto__))
);

return c__20431__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = {};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17118__auto__ = (((_ == null))?null:_);
var m__17119__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return m__17119__auto__.call(null,_);
} else {
var m__17119__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return m__17119__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


cljs.core.async.Mult = {};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17118__auto__ = (((m == null))?null:m);
var m__17119__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return m__17119__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17119__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return m__17119__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17118__auto__ = (((m == null))?null:m);
var m__17119__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return m__17119__auto__.call(null,m,ch);
} else {
var m__17119__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return m__17119__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17118__auto__ = (((m == null))?null:m);
var m__17119__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return m__17119__auto__.call(null,m);
} else {
var m__17119__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return m__17119__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t37847 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37847 = (function (mult,ch,cs,meta37848){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta37848 = meta37848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t37847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37849,meta37848__$1){
var self__ = this;
var _37849__$1 = this;
return (new cljs.core.async.t37847(self__.mult,self__.ch,self__.cs,meta37848__$1));
});})(cs))
;

cljs.core.async.t37847.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37849){
var self__ = this;
var _37849__$1 = this;
return self__.meta37848;
});})(cs))
;

cljs.core.async.t37847.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t37847.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t37847.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t37847.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t37847.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t37847.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t37847.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37848","meta37848",-1159030886,null)], null);
});})(cs))
;

cljs.core.async.t37847.cljs$lang$type = true;

cljs.core.async.t37847.cljs$lang$ctorStr = "cljs.core.async/t37847";

cljs.core.async.t37847.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t37847");
});})(cs))
;

cljs.core.async.__GT_t37847 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t37847(mult__$1,ch__$1,cs__$1,meta37848){
return (new cljs.core.async.t37847(mult__$1,ch__$1,cs__$1,meta37848));
});})(cs))
;

}

return (new cljs.core.async.t37847(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20431__auto___38068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20431__auto___38068,cs,m,dchan,dctr,done){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (c__20431__auto___38068,cs,m,dchan,dctr,done){
return (function (state_37980){
var state_val_37981 = (state_37980[(1)]);
if((state_val_37981 === (7))){
var inst_37976 = (state_37980[(2)]);
var state_37980__$1 = state_37980;
var statearr_37982_38069 = state_37980__$1;
(statearr_37982_38069[(2)] = inst_37976);

(statearr_37982_38069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (20))){
var inst_37881 = (state_37980[(7)]);
var inst_37891 = cljs.core.first.call(null,inst_37881);
var inst_37892 = cljs.core.nth.call(null,inst_37891,(0),null);
var inst_37893 = cljs.core.nth.call(null,inst_37891,(1),null);
var state_37980__$1 = (function (){var statearr_37983 = state_37980;
(statearr_37983[(8)] = inst_37892);

return statearr_37983;
})();
if(cljs.core.truth_(inst_37893)){
var statearr_37984_38070 = state_37980__$1;
(statearr_37984_38070[(1)] = (22));

} else {
var statearr_37985_38071 = state_37980__$1;
(statearr_37985_38071[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (27))){
var inst_37928 = (state_37980[(9)]);
var inst_37923 = (state_37980[(10)]);
var inst_37921 = (state_37980[(11)]);
var inst_37852 = (state_37980[(12)]);
var inst_37928__$1 = cljs.core._nth.call(null,inst_37921,inst_37923);
var inst_37929 = cljs.core.async.put_BANG_.call(null,inst_37928__$1,inst_37852,done);
var state_37980__$1 = (function (){var statearr_37986 = state_37980;
(statearr_37986[(9)] = inst_37928__$1);

return statearr_37986;
})();
if(cljs.core.truth_(inst_37929)){
var statearr_37987_38072 = state_37980__$1;
(statearr_37987_38072[(1)] = (30));

} else {
var statearr_37988_38073 = state_37980__$1;
(statearr_37988_38073[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (1))){
var state_37980__$1 = state_37980;
var statearr_37989_38074 = state_37980__$1;
(statearr_37989_38074[(2)] = null);

(statearr_37989_38074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (24))){
var inst_37881 = (state_37980[(7)]);
var inst_37898 = (state_37980[(2)]);
var inst_37899 = cljs.core.next.call(null,inst_37881);
var inst_37861 = inst_37899;
var inst_37862 = null;
var inst_37863 = (0);
var inst_37864 = (0);
var state_37980__$1 = (function (){var statearr_37990 = state_37980;
(statearr_37990[(13)] = inst_37898);

(statearr_37990[(14)] = inst_37861);

(statearr_37990[(15)] = inst_37863);

(statearr_37990[(16)] = inst_37864);

(statearr_37990[(17)] = inst_37862);

return statearr_37990;
})();
var statearr_37991_38075 = state_37980__$1;
(statearr_37991_38075[(2)] = null);

(statearr_37991_38075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (39))){
var state_37980__$1 = state_37980;
var statearr_37995_38076 = state_37980__$1;
(statearr_37995_38076[(2)] = null);

(statearr_37995_38076[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (4))){
var inst_37852 = (state_37980[(12)]);
var inst_37852__$1 = (state_37980[(2)]);
var inst_37853 = (inst_37852__$1 == null);
var state_37980__$1 = (function (){var statearr_37996 = state_37980;
(statearr_37996[(12)] = inst_37852__$1);

return statearr_37996;
})();
if(cljs.core.truth_(inst_37853)){
var statearr_37997_38077 = state_37980__$1;
(statearr_37997_38077[(1)] = (5));

} else {
var statearr_37998_38078 = state_37980__$1;
(statearr_37998_38078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (15))){
var inst_37861 = (state_37980[(14)]);
var inst_37863 = (state_37980[(15)]);
var inst_37864 = (state_37980[(16)]);
var inst_37862 = (state_37980[(17)]);
var inst_37877 = (state_37980[(2)]);
var inst_37878 = (inst_37864 + (1));
var tmp37992 = inst_37861;
var tmp37993 = inst_37863;
var tmp37994 = inst_37862;
var inst_37861__$1 = tmp37992;
var inst_37862__$1 = tmp37994;
var inst_37863__$1 = tmp37993;
var inst_37864__$1 = inst_37878;
var state_37980__$1 = (function (){var statearr_37999 = state_37980;
(statearr_37999[(14)] = inst_37861__$1);

(statearr_37999[(15)] = inst_37863__$1);

(statearr_37999[(19)] = inst_37877);

(statearr_37999[(16)] = inst_37864__$1);

(statearr_37999[(17)] = inst_37862__$1);

return statearr_37999;
})();
var statearr_38000_38079 = state_37980__$1;
(statearr_38000_38079[(2)] = null);

(statearr_38000_38079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (21))){
var inst_37902 = (state_37980[(2)]);
var state_37980__$1 = state_37980;
var statearr_38004_38080 = state_37980__$1;
(statearr_38004_38080[(2)] = inst_37902);

(statearr_38004_38080[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (31))){
var inst_37928 = (state_37980[(9)]);
var inst_37932 = done.call(null,null);
var inst_37933 = cljs.core.async.untap_STAR_.call(null,m,inst_37928);
var state_37980__$1 = (function (){var statearr_38005 = state_37980;
(statearr_38005[(18)] = inst_37932);

return statearr_38005;
})();
var statearr_38006_38081 = state_37980__$1;
(statearr_38006_38081[(2)] = inst_37933);

(statearr_38006_38081[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (32))){
var inst_37923 = (state_37980[(10)]);
var inst_37920 = (state_37980[(20)]);
var inst_37922 = (state_37980[(21)]);
var inst_37921 = (state_37980[(11)]);
var inst_37935 = (state_37980[(2)]);
var inst_37936 = (inst_37923 + (1));
var tmp38001 = inst_37920;
var tmp38002 = inst_37922;
var tmp38003 = inst_37921;
var inst_37920__$1 = tmp38001;
var inst_37921__$1 = tmp38003;
var inst_37922__$1 = tmp38002;
var inst_37923__$1 = inst_37936;
var state_37980__$1 = (function (){var statearr_38007 = state_37980;
(statearr_38007[(22)] = inst_37935);

(statearr_38007[(10)] = inst_37923__$1);

(statearr_38007[(20)] = inst_37920__$1);

(statearr_38007[(21)] = inst_37922__$1);

(statearr_38007[(11)] = inst_37921__$1);

return statearr_38007;
})();
var statearr_38008_38082 = state_37980__$1;
(statearr_38008_38082[(2)] = null);

(statearr_38008_38082[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (40))){
var inst_37948 = (state_37980[(23)]);
var inst_37952 = done.call(null,null);
var inst_37953 = cljs.core.async.untap_STAR_.call(null,m,inst_37948);
var state_37980__$1 = (function (){var statearr_38009 = state_37980;
(statearr_38009[(24)] = inst_37952);

return statearr_38009;
})();
var statearr_38010_38083 = state_37980__$1;
(statearr_38010_38083[(2)] = inst_37953);

(statearr_38010_38083[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (33))){
var inst_37939 = (state_37980[(25)]);
var inst_37941 = cljs.core.chunked_seq_QMARK_.call(null,inst_37939);
var state_37980__$1 = state_37980;
if(inst_37941){
var statearr_38011_38084 = state_37980__$1;
(statearr_38011_38084[(1)] = (36));

} else {
var statearr_38012_38085 = state_37980__$1;
(statearr_38012_38085[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (13))){
var inst_37871 = (state_37980[(26)]);
var inst_37874 = cljs.core.async.close_BANG_.call(null,inst_37871);
var state_37980__$1 = state_37980;
var statearr_38013_38086 = state_37980__$1;
(statearr_38013_38086[(2)] = inst_37874);

(statearr_38013_38086[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (22))){
var inst_37892 = (state_37980[(8)]);
var inst_37895 = cljs.core.async.close_BANG_.call(null,inst_37892);
var state_37980__$1 = state_37980;
var statearr_38014_38087 = state_37980__$1;
(statearr_38014_38087[(2)] = inst_37895);

(statearr_38014_38087[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (36))){
var inst_37939 = (state_37980[(25)]);
var inst_37943 = cljs.core.chunk_first.call(null,inst_37939);
var inst_37944 = cljs.core.chunk_rest.call(null,inst_37939);
var inst_37945 = cljs.core.count.call(null,inst_37943);
var inst_37920 = inst_37944;
var inst_37921 = inst_37943;
var inst_37922 = inst_37945;
var inst_37923 = (0);
var state_37980__$1 = (function (){var statearr_38015 = state_37980;
(statearr_38015[(10)] = inst_37923);

(statearr_38015[(20)] = inst_37920);

(statearr_38015[(21)] = inst_37922);

(statearr_38015[(11)] = inst_37921);

return statearr_38015;
})();
var statearr_38016_38088 = state_37980__$1;
(statearr_38016_38088[(2)] = null);

(statearr_38016_38088[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (41))){
var inst_37939 = (state_37980[(25)]);
var inst_37955 = (state_37980[(2)]);
var inst_37956 = cljs.core.next.call(null,inst_37939);
var inst_37920 = inst_37956;
var inst_37921 = null;
var inst_37922 = (0);
var inst_37923 = (0);
var state_37980__$1 = (function (){var statearr_38017 = state_37980;
(statearr_38017[(10)] = inst_37923);

(statearr_38017[(20)] = inst_37920);

(statearr_38017[(21)] = inst_37922);

(statearr_38017[(27)] = inst_37955);

(statearr_38017[(11)] = inst_37921);

return statearr_38017;
})();
var statearr_38018_38089 = state_37980__$1;
(statearr_38018_38089[(2)] = null);

(statearr_38018_38089[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (43))){
var state_37980__$1 = state_37980;
var statearr_38019_38090 = state_37980__$1;
(statearr_38019_38090[(2)] = null);

(statearr_38019_38090[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (29))){
var inst_37964 = (state_37980[(2)]);
var state_37980__$1 = state_37980;
var statearr_38020_38091 = state_37980__$1;
(statearr_38020_38091[(2)] = inst_37964);

(statearr_38020_38091[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (44))){
var inst_37973 = (state_37980[(2)]);
var state_37980__$1 = (function (){var statearr_38021 = state_37980;
(statearr_38021[(28)] = inst_37973);

return statearr_38021;
})();
var statearr_38022_38092 = state_37980__$1;
(statearr_38022_38092[(2)] = null);

(statearr_38022_38092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (6))){
var inst_37912 = (state_37980[(29)]);
var inst_37911 = cljs.core.deref.call(null,cs);
var inst_37912__$1 = cljs.core.keys.call(null,inst_37911);
var inst_37913 = cljs.core.count.call(null,inst_37912__$1);
var inst_37914 = cljs.core.reset_BANG_.call(null,dctr,inst_37913);
var inst_37919 = cljs.core.seq.call(null,inst_37912__$1);
var inst_37920 = inst_37919;
var inst_37921 = null;
var inst_37922 = (0);
var inst_37923 = (0);
var state_37980__$1 = (function (){var statearr_38023 = state_37980;
(statearr_38023[(29)] = inst_37912__$1);

(statearr_38023[(10)] = inst_37923);

(statearr_38023[(20)] = inst_37920);

(statearr_38023[(30)] = inst_37914);

(statearr_38023[(21)] = inst_37922);

(statearr_38023[(11)] = inst_37921);

return statearr_38023;
})();
var statearr_38024_38093 = state_37980__$1;
(statearr_38024_38093[(2)] = null);

(statearr_38024_38093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (28))){
var inst_37920 = (state_37980[(20)]);
var inst_37939 = (state_37980[(25)]);
var inst_37939__$1 = cljs.core.seq.call(null,inst_37920);
var state_37980__$1 = (function (){var statearr_38025 = state_37980;
(statearr_38025[(25)] = inst_37939__$1);

return statearr_38025;
})();
if(inst_37939__$1){
var statearr_38026_38094 = state_37980__$1;
(statearr_38026_38094[(1)] = (33));

} else {
var statearr_38027_38095 = state_37980__$1;
(statearr_38027_38095[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (25))){
var inst_37923 = (state_37980[(10)]);
var inst_37922 = (state_37980[(21)]);
var inst_37925 = (inst_37923 < inst_37922);
var inst_37926 = inst_37925;
var state_37980__$1 = state_37980;
if(cljs.core.truth_(inst_37926)){
var statearr_38028_38096 = state_37980__$1;
(statearr_38028_38096[(1)] = (27));

} else {
var statearr_38029_38097 = state_37980__$1;
(statearr_38029_38097[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (34))){
var state_37980__$1 = state_37980;
var statearr_38030_38098 = state_37980__$1;
(statearr_38030_38098[(2)] = null);

(statearr_38030_38098[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (17))){
var state_37980__$1 = state_37980;
var statearr_38031_38099 = state_37980__$1;
(statearr_38031_38099[(2)] = null);

(statearr_38031_38099[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (3))){
var inst_37978 = (state_37980[(2)]);
var state_37980__$1 = state_37980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37980__$1,inst_37978);
} else {
if((state_val_37981 === (12))){
var inst_37907 = (state_37980[(2)]);
var state_37980__$1 = state_37980;
var statearr_38032_38100 = state_37980__$1;
(statearr_38032_38100[(2)] = inst_37907);

(statearr_38032_38100[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (2))){
var state_37980__$1 = state_37980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37980__$1,(4),ch);
} else {
if((state_val_37981 === (23))){
var state_37980__$1 = state_37980;
var statearr_38033_38101 = state_37980__$1;
(statearr_38033_38101[(2)] = null);

(statearr_38033_38101[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (35))){
var inst_37962 = (state_37980[(2)]);
var state_37980__$1 = state_37980;
var statearr_38034_38102 = state_37980__$1;
(statearr_38034_38102[(2)] = inst_37962);

(statearr_38034_38102[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (19))){
var inst_37881 = (state_37980[(7)]);
var inst_37885 = cljs.core.chunk_first.call(null,inst_37881);
var inst_37886 = cljs.core.chunk_rest.call(null,inst_37881);
var inst_37887 = cljs.core.count.call(null,inst_37885);
var inst_37861 = inst_37886;
var inst_37862 = inst_37885;
var inst_37863 = inst_37887;
var inst_37864 = (0);
var state_37980__$1 = (function (){var statearr_38035 = state_37980;
(statearr_38035[(14)] = inst_37861);

(statearr_38035[(15)] = inst_37863);

(statearr_38035[(16)] = inst_37864);

(statearr_38035[(17)] = inst_37862);

return statearr_38035;
})();
var statearr_38036_38103 = state_37980__$1;
(statearr_38036_38103[(2)] = null);

(statearr_38036_38103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (11))){
var inst_37881 = (state_37980[(7)]);
var inst_37861 = (state_37980[(14)]);
var inst_37881__$1 = cljs.core.seq.call(null,inst_37861);
var state_37980__$1 = (function (){var statearr_38037 = state_37980;
(statearr_38037[(7)] = inst_37881__$1);

return statearr_38037;
})();
if(inst_37881__$1){
var statearr_38038_38104 = state_37980__$1;
(statearr_38038_38104[(1)] = (16));

} else {
var statearr_38039_38105 = state_37980__$1;
(statearr_38039_38105[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (9))){
var inst_37909 = (state_37980[(2)]);
var state_37980__$1 = state_37980;
var statearr_38040_38106 = state_37980__$1;
(statearr_38040_38106[(2)] = inst_37909);

(statearr_38040_38106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (5))){
var inst_37859 = cljs.core.deref.call(null,cs);
var inst_37860 = cljs.core.seq.call(null,inst_37859);
var inst_37861 = inst_37860;
var inst_37862 = null;
var inst_37863 = (0);
var inst_37864 = (0);
var state_37980__$1 = (function (){var statearr_38041 = state_37980;
(statearr_38041[(14)] = inst_37861);

(statearr_38041[(15)] = inst_37863);

(statearr_38041[(16)] = inst_37864);

(statearr_38041[(17)] = inst_37862);

return statearr_38041;
})();
var statearr_38042_38107 = state_37980__$1;
(statearr_38042_38107[(2)] = null);

(statearr_38042_38107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (14))){
var state_37980__$1 = state_37980;
var statearr_38043_38108 = state_37980__$1;
(statearr_38043_38108[(2)] = null);

(statearr_38043_38108[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (45))){
var inst_37970 = (state_37980[(2)]);
var state_37980__$1 = state_37980;
var statearr_38044_38109 = state_37980__$1;
(statearr_38044_38109[(2)] = inst_37970);

(statearr_38044_38109[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (26))){
var inst_37912 = (state_37980[(29)]);
var inst_37966 = (state_37980[(2)]);
var inst_37967 = cljs.core.seq.call(null,inst_37912);
var state_37980__$1 = (function (){var statearr_38045 = state_37980;
(statearr_38045[(31)] = inst_37966);

return statearr_38045;
})();
if(inst_37967){
var statearr_38046_38110 = state_37980__$1;
(statearr_38046_38110[(1)] = (42));

} else {
var statearr_38047_38111 = state_37980__$1;
(statearr_38047_38111[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (16))){
var inst_37881 = (state_37980[(7)]);
var inst_37883 = cljs.core.chunked_seq_QMARK_.call(null,inst_37881);
var state_37980__$1 = state_37980;
if(inst_37883){
var statearr_38048_38112 = state_37980__$1;
(statearr_38048_38112[(1)] = (19));

} else {
var statearr_38049_38113 = state_37980__$1;
(statearr_38049_38113[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (38))){
var inst_37959 = (state_37980[(2)]);
var state_37980__$1 = state_37980;
var statearr_38050_38114 = state_37980__$1;
(statearr_38050_38114[(2)] = inst_37959);

(statearr_38050_38114[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (30))){
var state_37980__$1 = state_37980;
var statearr_38051_38115 = state_37980__$1;
(statearr_38051_38115[(2)] = null);

(statearr_38051_38115[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (10))){
var inst_37864 = (state_37980[(16)]);
var inst_37862 = (state_37980[(17)]);
var inst_37870 = cljs.core._nth.call(null,inst_37862,inst_37864);
var inst_37871 = cljs.core.nth.call(null,inst_37870,(0),null);
var inst_37872 = cljs.core.nth.call(null,inst_37870,(1),null);
var state_37980__$1 = (function (){var statearr_38052 = state_37980;
(statearr_38052[(26)] = inst_37871);

return statearr_38052;
})();
if(cljs.core.truth_(inst_37872)){
var statearr_38053_38116 = state_37980__$1;
(statearr_38053_38116[(1)] = (13));

} else {
var statearr_38054_38117 = state_37980__$1;
(statearr_38054_38117[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (18))){
var inst_37905 = (state_37980[(2)]);
var state_37980__$1 = state_37980;
var statearr_38055_38118 = state_37980__$1;
(statearr_38055_38118[(2)] = inst_37905);

(statearr_38055_38118[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (42))){
var state_37980__$1 = state_37980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37980__$1,(45),dchan);
} else {
if((state_val_37981 === (37))){
var inst_37948 = (state_37980[(23)]);
var inst_37939 = (state_37980[(25)]);
var inst_37852 = (state_37980[(12)]);
var inst_37948__$1 = cljs.core.first.call(null,inst_37939);
var inst_37949 = cljs.core.async.put_BANG_.call(null,inst_37948__$1,inst_37852,done);
var state_37980__$1 = (function (){var statearr_38056 = state_37980;
(statearr_38056[(23)] = inst_37948__$1);

return statearr_38056;
})();
if(cljs.core.truth_(inst_37949)){
var statearr_38057_38119 = state_37980__$1;
(statearr_38057_38119[(1)] = (39));

} else {
var statearr_38058_38120 = state_37980__$1;
(statearr_38058_38120[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37981 === (8))){
var inst_37863 = (state_37980[(15)]);
var inst_37864 = (state_37980[(16)]);
var inst_37866 = (inst_37864 < inst_37863);
var inst_37867 = inst_37866;
var state_37980__$1 = state_37980;
if(cljs.core.truth_(inst_37867)){
var statearr_38059_38121 = state_37980__$1;
(statearr_38059_38121[(1)] = (10));

} else {
var statearr_38060_38122 = state_37980__$1;
(statearr_38060_38122[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20431__auto___38068,cs,m,dchan,dctr,done))
;
return ((function (switch__20366__auto__,c__20431__auto___38068,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20367__auto__ = null;
var cljs$core$async$mult_$_state_machine__20367__auto____0 = (function (){
var statearr_38064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38064[(0)] = cljs$core$async$mult_$_state_machine__20367__auto__);

(statearr_38064[(1)] = (1));

return statearr_38064;
});
var cljs$core$async$mult_$_state_machine__20367__auto____1 = (function (state_37980){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_37980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e38065){if((e38065 instanceof Object)){
var ex__20370__auto__ = e38065;
var statearr_38066_38123 = state_37980;
(statearr_38066_38123[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38124 = state_37980;
state_37980 = G__38124;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20367__auto__ = function(state_37980){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20367__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20367__auto____1.call(this,state_37980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20367__auto____0;
cljs$core$async$mult_$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20367__auto____1;
return cljs$core$async$mult_$_state_machine__20367__auto__;
})()
;})(switch__20366__auto__,c__20431__auto___38068,cs,m,dchan,dctr,done))
})();
var state__20433__auto__ = (function (){var statearr_38067 = f__20432__auto__.call(null);
(statearr_38067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto___38068);

return statearr_38067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(c__20431__auto___38068,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var args38125 = [];
var len__17521__auto___38128 = arguments.length;
var i__17522__auto___38129 = (0);
while(true){
if((i__17522__auto___38129 < len__17521__auto___38128)){
args38125.push((arguments[i__17522__auto___38129]));

var G__38130 = (i__17522__auto___38129 + (1));
i__17522__auto___38129 = G__38130;
continue;
} else {
}
break;
}

var G__38127 = args38125.length;
switch (G__38127) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38125.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = {};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17118__auto__ = (((m == null))?null:m);
var m__17119__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return m__17119__auto__.call(null,m,ch);
} else {
var m__17119__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return m__17119__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17118__auto__ = (((m == null))?null:m);
var m__17119__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return m__17119__auto__.call(null,m,ch);
} else {
var m__17119__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return m__17119__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17118__auto__ = (((m == null))?null:m);
var m__17119__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return m__17119__auto__.call(null,m);
} else {
var m__17119__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return m__17119__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17118__auto__ = (((m == null))?null:m);
var m__17119__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return m__17119__auto__.call(null,m,state_map);
} else {
var m__17119__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return m__17119__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17118__auto__ = (((m == null))?null:m);
var m__17119__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return m__17119__auto__.call(null,m,mode);
} else {
var m__17119__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return m__17119__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var args__17528__auto__ = [];
var len__17521__auto___38144 = arguments.length;
var i__17522__auto___38145 = (0);
while(true){
if((i__17522__auto___38145 < len__17521__auto___38144)){
args__17528__auto__.push((arguments[i__17522__auto___38145]));

var G__38146 = (i__17522__auto___38145 + (1));
i__17522__auto___38145 = G__38146;
continue;
} else {
}
break;
}

var argseq__17529__auto__ = ((((3) < args__17528__auto__.length))?(new cljs.core.IndexedSeq(args__17528__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17529__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38138){
var map__38139 = p__38138;
var map__38139__$1 = ((((!((map__38139 == null)))?((((map__38139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38139):map__38139);
var opts = map__38139__$1;
var statearr_38141_38147 = state;
(statearr_38141_38147[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__38139,map__38139__$1,opts){
return (function (val){
var statearr_38142_38148 = state;
(statearr_38142_38148[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__38139,map__38139__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_38143_38149 = state;
(statearr_38143_38149[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38134){
var G__38135 = cljs.core.first.call(null,seq38134);
var seq38134__$1 = cljs.core.next.call(null,seq38134);
var G__38136 = cljs.core.first.call(null,seq38134__$1);
var seq38134__$2 = cljs.core.next.call(null,seq38134__$1);
var G__38137 = cljs.core.first.call(null,seq38134__$2);
var seq38134__$3 = cljs.core.next.call(null,seq38134__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38135,G__38136,G__38137,seq38134__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t38313 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38313 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38314){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta38314 = meta38314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t38313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38315,meta38314__$1){
var self__ = this;
var _38315__$1 = this;
return (new cljs.core.async.t38313(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38314__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38313.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38315){
var self__ = this;
var _38315__$1 = this;
return self__.meta38314;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38313.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t38313.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38313.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t38313.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38313.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38313.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38313.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38313.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38313.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta38314","meta38314",2051999168,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38313.cljs$lang$type = true;

cljs.core.async.t38313.cljs$lang$ctorStr = "cljs.core.async/t38313";

cljs.core.async.t38313.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t38313");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t38313 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t38313(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38314){
return (new cljs.core.async.t38313(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38314));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t38313(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20431__auto___38476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20431__auto___38476,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (c__20431__auto___38476,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38413){
var state_val_38414 = (state_38413[(1)]);
if((state_val_38414 === (7))){
var inst_38331 = (state_38413[(2)]);
var state_38413__$1 = state_38413;
var statearr_38415_38477 = state_38413__$1;
(statearr_38415_38477[(2)] = inst_38331);

(statearr_38415_38477[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (20))){
var inst_38343 = (state_38413[(7)]);
var state_38413__$1 = state_38413;
var statearr_38416_38478 = state_38413__$1;
(statearr_38416_38478[(2)] = inst_38343);

(statearr_38416_38478[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (27))){
var state_38413__$1 = state_38413;
var statearr_38417_38479 = state_38413__$1;
(statearr_38417_38479[(2)] = null);

(statearr_38417_38479[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (1))){
var inst_38319 = (state_38413[(8)]);
var inst_38319__$1 = calc_state.call(null);
var inst_38321 = (inst_38319__$1 == null);
var inst_38322 = cljs.core.not.call(null,inst_38321);
var state_38413__$1 = (function (){var statearr_38418 = state_38413;
(statearr_38418[(8)] = inst_38319__$1);

return statearr_38418;
})();
if(inst_38322){
var statearr_38419_38480 = state_38413__$1;
(statearr_38419_38480[(1)] = (2));

} else {
var statearr_38420_38481 = state_38413__$1;
(statearr_38420_38481[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (24))){
var inst_38373 = (state_38413[(9)]);
var inst_38387 = (state_38413[(10)]);
var inst_38366 = (state_38413[(11)]);
var inst_38387__$1 = inst_38366.call(null,inst_38373);
var state_38413__$1 = (function (){var statearr_38421 = state_38413;
(statearr_38421[(10)] = inst_38387__$1);

return statearr_38421;
})();
if(cljs.core.truth_(inst_38387__$1)){
var statearr_38422_38482 = state_38413__$1;
(statearr_38422_38482[(1)] = (29));

} else {
var statearr_38423_38483 = state_38413__$1;
(statearr_38423_38483[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (4))){
var inst_38334 = (state_38413[(2)]);
var state_38413__$1 = state_38413;
if(cljs.core.truth_(inst_38334)){
var statearr_38424_38484 = state_38413__$1;
(statearr_38424_38484[(1)] = (8));

} else {
var statearr_38425_38485 = state_38413__$1;
(statearr_38425_38485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (15))){
var inst_38360 = (state_38413[(2)]);
var state_38413__$1 = state_38413;
if(cljs.core.truth_(inst_38360)){
var statearr_38426_38486 = state_38413__$1;
(statearr_38426_38486[(1)] = (19));

} else {
var statearr_38427_38487 = state_38413__$1;
(statearr_38427_38487[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (21))){
var inst_38365 = (state_38413[(12)]);
var inst_38365__$1 = (state_38413[(2)]);
var inst_38366 = cljs.core.get.call(null,inst_38365__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38367 = cljs.core.get.call(null,inst_38365__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38368 = cljs.core.get.call(null,inst_38365__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38413__$1 = (function (){var statearr_38428 = state_38413;
(statearr_38428[(12)] = inst_38365__$1);

(statearr_38428[(14)] = inst_38367);

(statearr_38428[(11)] = inst_38366);

return statearr_38428;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_38413__$1,(22),inst_38368);
} else {
if((state_val_38414 === (31))){
var inst_38395 = (state_38413[(2)]);
var state_38413__$1 = state_38413;
if(cljs.core.truth_(inst_38395)){
var statearr_38429_38488 = state_38413__$1;
(statearr_38429_38488[(1)] = (32));

} else {
var statearr_38430_38489 = state_38413__$1;
(statearr_38430_38489[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (32))){
var inst_38372 = (state_38413[(13)]);
var state_38413__$1 = state_38413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38413__$1,(35),out,inst_38372);
} else {
if((state_val_38414 === (33))){
var inst_38365 = (state_38413[(12)]);
var inst_38343 = inst_38365;
var state_38413__$1 = (function (){var statearr_38431 = state_38413;
(statearr_38431[(7)] = inst_38343);

return statearr_38431;
})();
var statearr_38432_38490 = state_38413__$1;
(statearr_38432_38490[(2)] = null);

(statearr_38432_38490[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (13))){
var inst_38343 = (state_38413[(7)]);
var inst_38350 = inst_38343.cljs$lang$protocol_mask$partition0$;
var inst_38351 = (inst_38350 & (64));
var inst_38352 = inst_38343.cljs$core$ISeq$;
var inst_38353 = (inst_38351) || (inst_38352);
var state_38413__$1 = state_38413;
if(cljs.core.truth_(inst_38353)){
var statearr_38433_38491 = state_38413__$1;
(statearr_38433_38491[(1)] = (16));

} else {
var statearr_38434_38492 = state_38413__$1;
(statearr_38434_38492[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (22))){
var inst_38373 = (state_38413[(9)]);
var inst_38372 = (state_38413[(13)]);
var inst_38371 = (state_38413[(2)]);
var inst_38372__$1 = cljs.core.nth.call(null,inst_38371,(0),null);
var inst_38373__$1 = cljs.core.nth.call(null,inst_38371,(1),null);
var inst_38374 = (inst_38372__$1 == null);
var inst_38375 = cljs.core._EQ_.call(null,inst_38373__$1,change);
var inst_38376 = (inst_38374) || (inst_38375);
var state_38413__$1 = (function (){var statearr_38435 = state_38413;
(statearr_38435[(9)] = inst_38373__$1);

(statearr_38435[(13)] = inst_38372__$1);

return statearr_38435;
})();
if(cljs.core.truth_(inst_38376)){
var statearr_38436_38493 = state_38413__$1;
(statearr_38436_38493[(1)] = (23));

} else {
var statearr_38437_38494 = state_38413__$1;
(statearr_38437_38494[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (36))){
var inst_38365 = (state_38413[(12)]);
var inst_38343 = inst_38365;
var state_38413__$1 = (function (){var statearr_38438 = state_38413;
(statearr_38438[(7)] = inst_38343);

return statearr_38438;
})();
var statearr_38439_38495 = state_38413__$1;
(statearr_38439_38495[(2)] = null);

(statearr_38439_38495[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (29))){
var inst_38387 = (state_38413[(10)]);
var state_38413__$1 = state_38413;
var statearr_38440_38496 = state_38413__$1;
(statearr_38440_38496[(2)] = inst_38387);

(statearr_38440_38496[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (6))){
var state_38413__$1 = state_38413;
var statearr_38441_38497 = state_38413__$1;
(statearr_38441_38497[(2)] = false);

(statearr_38441_38497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (28))){
var inst_38383 = (state_38413[(2)]);
var inst_38384 = calc_state.call(null);
var inst_38343 = inst_38384;
var state_38413__$1 = (function (){var statearr_38442 = state_38413;
(statearr_38442[(15)] = inst_38383);

(statearr_38442[(7)] = inst_38343);

return statearr_38442;
})();
var statearr_38443_38498 = state_38413__$1;
(statearr_38443_38498[(2)] = null);

(statearr_38443_38498[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (25))){
var inst_38409 = (state_38413[(2)]);
var state_38413__$1 = state_38413;
var statearr_38444_38499 = state_38413__$1;
(statearr_38444_38499[(2)] = inst_38409);

(statearr_38444_38499[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (34))){
var inst_38407 = (state_38413[(2)]);
var state_38413__$1 = state_38413;
var statearr_38445_38500 = state_38413__$1;
(statearr_38445_38500[(2)] = inst_38407);

(statearr_38445_38500[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (17))){
var state_38413__$1 = state_38413;
var statearr_38446_38501 = state_38413__$1;
(statearr_38446_38501[(2)] = false);

(statearr_38446_38501[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (3))){
var state_38413__$1 = state_38413;
var statearr_38447_38502 = state_38413__$1;
(statearr_38447_38502[(2)] = false);

(statearr_38447_38502[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (12))){
var inst_38411 = (state_38413[(2)]);
var state_38413__$1 = state_38413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38413__$1,inst_38411);
} else {
if((state_val_38414 === (2))){
var inst_38319 = (state_38413[(8)]);
var inst_38324 = inst_38319.cljs$lang$protocol_mask$partition0$;
var inst_38325 = (inst_38324 & (64));
var inst_38326 = inst_38319.cljs$core$ISeq$;
var inst_38327 = (inst_38325) || (inst_38326);
var state_38413__$1 = state_38413;
if(cljs.core.truth_(inst_38327)){
var statearr_38448_38503 = state_38413__$1;
(statearr_38448_38503[(1)] = (5));

} else {
var statearr_38449_38504 = state_38413__$1;
(statearr_38449_38504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (23))){
var inst_38372 = (state_38413[(13)]);
var inst_38378 = (inst_38372 == null);
var state_38413__$1 = state_38413;
if(cljs.core.truth_(inst_38378)){
var statearr_38450_38505 = state_38413__$1;
(statearr_38450_38505[(1)] = (26));

} else {
var statearr_38451_38506 = state_38413__$1;
(statearr_38451_38506[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (35))){
var inst_38398 = (state_38413[(2)]);
var state_38413__$1 = state_38413;
if(cljs.core.truth_(inst_38398)){
var statearr_38452_38507 = state_38413__$1;
(statearr_38452_38507[(1)] = (36));

} else {
var statearr_38453_38508 = state_38413__$1;
(statearr_38453_38508[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (19))){
var inst_38343 = (state_38413[(7)]);
var inst_38362 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38343);
var state_38413__$1 = state_38413;
var statearr_38454_38509 = state_38413__$1;
(statearr_38454_38509[(2)] = inst_38362);

(statearr_38454_38509[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (11))){
var inst_38343 = (state_38413[(7)]);
var inst_38347 = (inst_38343 == null);
var inst_38348 = cljs.core.not.call(null,inst_38347);
var state_38413__$1 = state_38413;
if(inst_38348){
var statearr_38455_38510 = state_38413__$1;
(statearr_38455_38510[(1)] = (13));

} else {
var statearr_38456_38511 = state_38413__$1;
(statearr_38456_38511[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (9))){
var inst_38319 = (state_38413[(8)]);
var state_38413__$1 = state_38413;
var statearr_38457_38512 = state_38413__$1;
(statearr_38457_38512[(2)] = inst_38319);

(statearr_38457_38512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (5))){
var state_38413__$1 = state_38413;
var statearr_38458_38513 = state_38413__$1;
(statearr_38458_38513[(2)] = true);

(statearr_38458_38513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (14))){
var state_38413__$1 = state_38413;
var statearr_38459_38514 = state_38413__$1;
(statearr_38459_38514[(2)] = false);

(statearr_38459_38514[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (26))){
var inst_38373 = (state_38413[(9)]);
var inst_38380 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38373);
var state_38413__$1 = state_38413;
var statearr_38460_38515 = state_38413__$1;
(statearr_38460_38515[(2)] = inst_38380);

(statearr_38460_38515[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (16))){
var state_38413__$1 = state_38413;
var statearr_38461_38516 = state_38413__$1;
(statearr_38461_38516[(2)] = true);

(statearr_38461_38516[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (38))){
var inst_38403 = (state_38413[(2)]);
var state_38413__$1 = state_38413;
var statearr_38462_38517 = state_38413__$1;
(statearr_38462_38517[(2)] = inst_38403);

(statearr_38462_38517[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (30))){
var inst_38373 = (state_38413[(9)]);
var inst_38367 = (state_38413[(14)]);
var inst_38366 = (state_38413[(11)]);
var inst_38390 = cljs.core.empty_QMARK_.call(null,inst_38366);
var inst_38391 = inst_38367.call(null,inst_38373);
var inst_38392 = cljs.core.not.call(null,inst_38391);
var inst_38393 = (inst_38390) && (inst_38392);
var state_38413__$1 = state_38413;
var statearr_38463_38518 = state_38413__$1;
(statearr_38463_38518[(2)] = inst_38393);

(statearr_38463_38518[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (10))){
var inst_38319 = (state_38413[(8)]);
var inst_38339 = (state_38413[(2)]);
var inst_38340 = cljs.core.get.call(null,inst_38339,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38341 = cljs.core.get.call(null,inst_38339,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38342 = cljs.core.get.call(null,inst_38339,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38343 = inst_38319;
var state_38413__$1 = (function (){var statearr_38464 = state_38413;
(statearr_38464[(16)] = inst_38341);

(statearr_38464[(7)] = inst_38343);

(statearr_38464[(17)] = inst_38340);

(statearr_38464[(18)] = inst_38342);

return statearr_38464;
})();
var statearr_38465_38519 = state_38413__$1;
(statearr_38465_38519[(2)] = null);

(statearr_38465_38519[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (18))){
var inst_38357 = (state_38413[(2)]);
var state_38413__$1 = state_38413;
var statearr_38466_38520 = state_38413__$1;
(statearr_38466_38520[(2)] = inst_38357);

(statearr_38466_38520[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (37))){
var state_38413__$1 = state_38413;
var statearr_38467_38521 = state_38413__$1;
(statearr_38467_38521[(2)] = null);

(statearr_38467_38521[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (8))){
var inst_38319 = (state_38413[(8)]);
var inst_38336 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38319);
var state_38413__$1 = state_38413;
var statearr_38468_38522 = state_38413__$1;
(statearr_38468_38522[(2)] = inst_38336);

(statearr_38468_38522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20431__auto___38476,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20366__auto__,c__20431__auto___38476,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20367__auto__ = null;
var cljs$core$async$mix_$_state_machine__20367__auto____0 = (function (){
var statearr_38472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38472[(0)] = cljs$core$async$mix_$_state_machine__20367__auto__);

(statearr_38472[(1)] = (1));

return statearr_38472;
});
var cljs$core$async$mix_$_state_machine__20367__auto____1 = (function (state_38413){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_38413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e38473){if((e38473 instanceof Object)){
var ex__20370__auto__ = e38473;
var statearr_38474_38523 = state_38413;
(statearr_38474_38523[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38524 = state_38413;
state_38413 = G__38524;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20367__auto__ = function(state_38413){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20367__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20367__auto____1.call(this,state_38413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20367__auto____0;
cljs$core$async$mix_$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20367__auto____1;
return cljs$core$async$mix_$_state_machine__20367__auto__;
})()
;})(switch__20366__auto__,c__20431__auto___38476,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20433__auto__ = (function (){var statearr_38475 = f__20432__auto__.call(null);
(statearr_38475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto___38476);

return statearr_38475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(c__20431__auto___38476,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = {};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17118__auto__ = (((p == null))?null:p);
var m__17119__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return m__17119__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17119__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return m__17119__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17118__auto__ = (((p == null))?null:p);
var m__17119__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return m__17119__auto__.call(null,p,v,ch);
} else {
var m__17119__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return m__17119__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var args38527 = [];
var len__17521__auto___38530 = arguments.length;
var i__17522__auto___38531 = (0);
while(true){
if((i__17522__auto___38531 < len__17521__auto___38530)){
args38527.push((arguments[i__17522__auto___38531]));

var G__38532 = (i__17522__auto___38531 + (1));
i__17522__auto___38531 = G__38532;
continue;
} else {
}
break;
}

var G__38529 = args38527.length;
switch (G__38529) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38527.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17118__auto__ = (((p == null))?null:p);
var m__17119__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return m__17119__auto__.call(null,p);
} else {
var m__17119__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return m__17119__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17118__auto__ = (((p == null))?null:p);
var m__17119__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return m__17119__auto__.call(null,p,v);
} else {
var m__17119__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return m__17119__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var args38535 = [];
var len__17521__auto___38660 = arguments.length;
var i__17522__auto___38661 = (0);
while(true){
if((i__17522__auto___38661 < len__17521__auto___38660)){
args38535.push((arguments[i__17522__auto___38661]));

var G__38662 = (i__17522__auto___38661 + (1));
i__17522__auto___38661 = G__38662;
continue;
} else {
}
break;
}

var G__38537 = args38535.length;
switch (G__38537) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38535.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16482__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16482__auto__,mults){
return (function (p1__38534_SHARP_){
if(cljs.core.truth_(p1__38534_SHARP_.call(null,topic))){
return p1__38534_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38534_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16482__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t38538 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38538 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38539){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38539 = meta38539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t38538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38540,meta38539__$1){
var self__ = this;
var _38540__$1 = this;
return (new cljs.core.async.t38538(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38539__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t38538.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38540){
var self__ = this;
var _38540__$1 = this;
return self__.meta38539;
});})(mults,ensure_mult))
;

cljs.core.async.t38538.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t38538.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t38538.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t38538.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t38538.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t38538.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t38538.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t38538.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38539","meta38539",-792876822,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t38538.cljs$lang$type = true;

cljs.core.async.t38538.cljs$lang$ctorStr = "cljs.core.async/t38538";

cljs.core.async.t38538.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t38538");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t38538 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t38538(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38539){
return (new cljs.core.async.t38538(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38539));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t38538(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20431__auto___38664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20431__auto___38664,mults,ensure_mult,p){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (c__20431__auto___38664,mults,ensure_mult,p){
return (function (state_38612){
var state_val_38613 = (state_38612[(1)]);
if((state_val_38613 === (7))){
var inst_38608 = (state_38612[(2)]);
var state_38612__$1 = state_38612;
var statearr_38614_38665 = state_38612__$1;
(statearr_38614_38665[(2)] = inst_38608);

(statearr_38614_38665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (20))){
var state_38612__$1 = state_38612;
var statearr_38615_38666 = state_38612__$1;
(statearr_38615_38666[(2)] = null);

(statearr_38615_38666[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (1))){
var state_38612__$1 = state_38612;
var statearr_38616_38667 = state_38612__$1;
(statearr_38616_38667[(2)] = null);

(statearr_38616_38667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (24))){
var inst_38591 = (state_38612[(7)]);
var inst_38600 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38591);
var state_38612__$1 = state_38612;
var statearr_38617_38668 = state_38612__$1;
(statearr_38617_38668[(2)] = inst_38600);

(statearr_38617_38668[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (4))){
var inst_38543 = (state_38612[(8)]);
var inst_38543__$1 = (state_38612[(2)]);
var inst_38544 = (inst_38543__$1 == null);
var state_38612__$1 = (function (){var statearr_38618 = state_38612;
(statearr_38618[(8)] = inst_38543__$1);

return statearr_38618;
})();
if(cljs.core.truth_(inst_38544)){
var statearr_38619_38669 = state_38612__$1;
(statearr_38619_38669[(1)] = (5));

} else {
var statearr_38620_38670 = state_38612__$1;
(statearr_38620_38670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (15))){
var inst_38585 = (state_38612[(2)]);
var state_38612__$1 = state_38612;
var statearr_38621_38671 = state_38612__$1;
(statearr_38621_38671[(2)] = inst_38585);

(statearr_38621_38671[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (21))){
var inst_38605 = (state_38612[(2)]);
var state_38612__$1 = (function (){var statearr_38622 = state_38612;
(statearr_38622[(9)] = inst_38605);

return statearr_38622;
})();
var statearr_38623_38672 = state_38612__$1;
(statearr_38623_38672[(2)] = null);

(statearr_38623_38672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (13))){
var inst_38567 = (state_38612[(10)]);
var inst_38569 = cljs.core.chunked_seq_QMARK_.call(null,inst_38567);
var state_38612__$1 = state_38612;
if(inst_38569){
var statearr_38624_38673 = state_38612__$1;
(statearr_38624_38673[(1)] = (16));

} else {
var statearr_38625_38674 = state_38612__$1;
(statearr_38625_38674[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (22))){
var inst_38597 = (state_38612[(2)]);
var state_38612__$1 = state_38612;
if(cljs.core.truth_(inst_38597)){
var statearr_38626_38675 = state_38612__$1;
(statearr_38626_38675[(1)] = (23));

} else {
var statearr_38627_38676 = state_38612__$1;
(statearr_38627_38676[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (6))){
var inst_38591 = (state_38612[(7)]);
var inst_38543 = (state_38612[(8)]);
var inst_38593 = (state_38612[(11)]);
var inst_38591__$1 = topic_fn.call(null,inst_38543);
var inst_38592 = cljs.core.deref.call(null,mults);
var inst_38593__$1 = cljs.core.get.call(null,inst_38592,inst_38591__$1);
var state_38612__$1 = (function (){var statearr_38628 = state_38612;
(statearr_38628[(7)] = inst_38591__$1);

(statearr_38628[(11)] = inst_38593__$1);

return statearr_38628;
})();
if(cljs.core.truth_(inst_38593__$1)){
var statearr_38629_38677 = state_38612__$1;
(statearr_38629_38677[(1)] = (19));

} else {
var statearr_38630_38678 = state_38612__$1;
(statearr_38630_38678[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (25))){
var inst_38602 = (state_38612[(2)]);
var state_38612__$1 = state_38612;
var statearr_38631_38679 = state_38612__$1;
(statearr_38631_38679[(2)] = inst_38602);

(statearr_38631_38679[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (17))){
var inst_38567 = (state_38612[(10)]);
var inst_38576 = cljs.core.first.call(null,inst_38567);
var inst_38577 = cljs.core.async.muxch_STAR_.call(null,inst_38576);
var inst_38578 = cljs.core.async.close_BANG_.call(null,inst_38577);
var inst_38579 = cljs.core.next.call(null,inst_38567);
var inst_38553 = inst_38579;
var inst_38554 = null;
var inst_38555 = (0);
var inst_38556 = (0);
var state_38612__$1 = (function (){var statearr_38632 = state_38612;
(statearr_38632[(12)] = inst_38553);

(statearr_38632[(13)] = inst_38556);

(statearr_38632[(14)] = inst_38555);

(statearr_38632[(15)] = inst_38578);

(statearr_38632[(16)] = inst_38554);

return statearr_38632;
})();
var statearr_38633_38680 = state_38612__$1;
(statearr_38633_38680[(2)] = null);

(statearr_38633_38680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (3))){
var inst_38610 = (state_38612[(2)]);
var state_38612__$1 = state_38612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38612__$1,inst_38610);
} else {
if((state_val_38613 === (12))){
var inst_38587 = (state_38612[(2)]);
var state_38612__$1 = state_38612;
var statearr_38634_38681 = state_38612__$1;
(statearr_38634_38681[(2)] = inst_38587);

(statearr_38634_38681[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (2))){
var state_38612__$1 = state_38612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38612__$1,(4),ch);
} else {
if((state_val_38613 === (23))){
var state_38612__$1 = state_38612;
var statearr_38635_38682 = state_38612__$1;
(statearr_38635_38682[(2)] = null);

(statearr_38635_38682[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (19))){
var inst_38543 = (state_38612[(8)]);
var inst_38593 = (state_38612[(11)]);
var inst_38595 = cljs.core.async.muxch_STAR_.call(null,inst_38593);
var state_38612__$1 = state_38612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38612__$1,(22),inst_38595,inst_38543);
} else {
if((state_val_38613 === (11))){
var inst_38553 = (state_38612[(12)]);
var inst_38567 = (state_38612[(10)]);
var inst_38567__$1 = cljs.core.seq.call(null,inst_38553);
var state_38612__$1 = (function (){var statearr_38636 = state_38612;
(statearr_38636[(10)] = inst_38567__$1);

return statearr_38636;
})();
if(inst_38567__$1){
var statearr_38637_38683 = state_38612__$1;
(statearr_38637_38683[(1)] = (13));

} else {
var statearr_38638_38684 = state_38612__$1;
(statearr_38638_38684[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (9))){
var inst_38589 = (state_38612[(2)]);
var state_38612__$1 = state_38612;
var statearr_38639_38685 = state_38612__$1;
(statearr_38639_38685[(2)] = inst_38589);

(statearr_38639_38685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (5))){
var inst_38550 = cljs.core.deref.call(null,mults);
var inst_38551 = cljs.core.vals.call(null,inst_38550);
var inst_38552 = cljs.core.seq.call(null,inst_38551);
var inst_38553 = inst_38552;
var inst_38554 = null;
var inst_38555 = (0);
var inst_38556 = (0);
var state_38612__$1 = (function (){var statearr_38640 = state_38612;
(statearr_38640[(12)] = inst_38553);

(statearr_38640[(13)] = inst_38556);

(statearr_38640[(14)] = inst_38555);

(statearr_38640[(16)] = inst_38554);

return statearr_38640;
})();
var statearr_38641_38686 = state_38612__$1;
(statearr_38641_38686[(2)] = null);

(statearr_38641_38686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (14))){
var state_38612__$1 = state_38612;
var statearr_38645_38687 = state_38612__$1;
(statearr_38645_38687[(2)] = null);

(statearr_38645_38687[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (16))){
var inst_38567 = (state_38612[(10)]);
var inst_38571 = cljs.core.chunk_first.call(null,inst_38567);
var inst_38572 = cljs.core.chunk_rest.call(null,inst_38567);
var inst_38573 = cljs.core.count.call(null,inst_38571);
var inst_38553 = inst_38572;
var inst_38554 = inst_38571;
var inst_38555 = inst_38573;
var inst_38556 = (0);
var state_38612__$1 = (function (){var statearr_38646 = state_38612;
(statearr_38646[(12)] = inst_38553);

(statearr_38646[(13)] = inst_38556);

(statearr_38646[(14)] = inst_38555);

(statearr_38646[(16)] = inst_38554);

return statearr_38646;
})();
var statearr_38647_38688 = state_38612__$1;
(statearr_38647_38688[(2)] = null);

(statearr_38647_38688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (10))){
var inst_38553 = (state_38612[(12)]);
var inst_38556 = (state_38612[(13)]);
var inst_38555 = (state_38612[(14)]);
var inst_38554 = (state_38612[(16)]);
var inst_38561 = cljs.core._nth.call(null,inst_38554,inst_38556);
var inst_38562 = cljs.core.async.muxch_STAR_.call(null,inst_38561);
var inst_38563 = cljs.core.async.close_BANG_.call(null,inst_38562);
var inst_38564 = (inst_38556 + (1));
var tmp38642 = inst_38553;
var tmp38643 = inst_38555;
var tmp38644 = inst_38554;
var inst_38553__$1 = tmp38642;
var inst_38554__$1 = tmp38644;
var inst_38555__$1 = tmp38643;
var inst_38556__$1 = inst_38564;
var state_38612__$1 = (function (){var statearr_38648 = state_38612;
(statearr_38648[(12)] = inst_38553__$1);

(statearr_38648[(13)] = inst_38556__$1);

(statearr_38648[(14)] = inst_38555__$1);

(statearr_38648[(17)] = inst_38563);

(statearr_38648[(16)] = inst_38554__$1);

return statearr_38648;
})();
var statearr_38649_38689 = state_38612__$1;
(statearr_38649_38689[(2)] = null);

(statearr_38649_38689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (18))){
var inst_38582 = (state_38612[(2)]);
var state_38612__$1 = state_38612;
var statearr_38650_38690 = state_38612__$1;
(statearr_38650_38690[(2)] = inst_38582);

(statearr_38650_38690[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (8))){
var inst_38556 = (state_38612[(13)]);
var inst_38555 = (state_38612[(14)]);
var inst_38558 = (inst_38556 < inst_38555);
var inst_38559 = inst_38558;
var state_38612__$1 = state_38612;
if(cljs.core.truth_(inst_38559)){
var statearr_38651_38691 = state_38612__$1;
(statearr_38651_38691[(1)] = (10));

} else {
var statearr_38652_38692 = state_38612__$1;
(statearr_38652_38692[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20431__auto___38664,mults,ensure_mult,p))
;
return ((function (switch__20366__auto__,c__20431__auto___38664,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20367__auto__ = null;
var cljs$core$async$state_machine__20367__auto____0 = (function (){
var statearr_38656 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38656[(0)] = cljs$core$async$state_machine__20367__auto__);

(statearr_38656[(1)] = (1));

return statearr_38656;
});
var cljs$core$async$state_machine__20367__auto____1 = (function (state_38612){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_38612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e38657){if((e38657 instanceof Object)){
var ex__20370__auto__ = e38657;
var statearr_38658_38693 = state_38612;
(statearr_38658_38693[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38694 = state_38612;
state_38612 = G__38694;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
cljs$core$async$state_machine__20367__auto__ = function(state_38612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20367__auto____1.call(this,state_38612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20367__auto____0;
cljs$core$async$state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20367__auto____1;
return cljs$core$async$state_machine__20367__auto__;
})()
;})(switch__20366__auto__,c__20431__auto___38664,mults,ensure_mult,p))
})();
var state__20433__auto__ = (function (){var statearr_38659 = f__20432__auto__.call(null);
(statearr_38659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto___38664);

return statearr_38659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(c__20431__auto___38664,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var args38695 = [];
var len__17521__auto___38698 = arguments.length;
var i__17522__auto___38699 = (0);
while(true){
if((i__17522__auto___38699 < len__17521__auto___38698)){
args38695.push((arguments[i__17522__auto___38699]));

var G__38700 = (i__17522__auto___38699 + (1));
i__17522__auto___38699 = G__38700;
continue;
} else {
}
break;
}

var G__38697 = args38695.length;
switch (G__38697) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38695.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var args38702 = [];
var len__17521__auto___38705 = arguments.length;
var i__17522__auto___38706 = (0);
while(true){
if((i__17522__auto___38706 < len__17521__auto___38705)){
args38702.push((arguments[i__17522__auto___38706]));

var G__38707 = (i__17522__auto___38706 + (1));
i__17522__auto___38706 = G__38707;
continue;
} else {
}
break;
}

var G__38704 = args38702.length;
switch (G__38704) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38702.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var args38709 = [];
var len__17521__auto___38780 = arguments.length;
var i__17522__auto___38781 = (0);
while(true){
if((i__17522__auto___38781 < len__17521__auto___38780)){
args38709.push((arguments[i__17522__auto___38781]));

var G__38782 = (i__17522__auto___38781 + (1));
i__17522__auto___38781 = G__38782;
continue;
} else {
}
break;
}

var G__38711 = args38709.length;
switch (G__38711) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38709.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20431__auto___38784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20431__auto___38784,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (c__20431__auto___38784,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38750){
var state_val_38751 = (state_38750[(1)]);
if((state_val_38751 === (7))){
var state_38750__$1 = state_38750;
var statearr_38752_38785 = state_38750__$1;
(statearr_38752_38785[(2)] = null);

(statearr_38752_38785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (1))){
var state_38750__$1 = state_38750;
var statearr_38753_38786 = state_38750__$1;
(statearr_38753_38786[(2)] = null);

(statearr_38753_38786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (4))){
var inst_38714 = (state_38750[(7)]);
var inst_38716 = (inst_38714 < cnt);
var state_38750__$1 = state_38750;
if(cljs.core.truth_(inst_38716)){
var statearr_38754_38787 = state_38750__$1;
(statearr_38754_38787[(1)] = (6));

} else {
var statearr_38755_38788 = state_38750__$1;
(statearr_38755_38788[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (15))){
var inst_38746 = (state_38750[(2)]);
var state_38750__$1 = state_38750;
var statearr_38756_38789 = state_38750__$1;
(statearr_38756_38789[(2)] = inst_38746);

(statearr_38756_38789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (13))){
var inst_38739 = cljs.core.async.close_BANG_.call(null,out);
var state_38750__$1 = state_38750;
var statearr_38757_38790 = state_38750__$1;
(statearr_38757_38790[(2)] = inst_38739);

(statearr_38757_38790[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (6))){
var state_38750__$1 = state_38750;
var statearr_38758_38791 = state_38750__$1;
(statearr_38758_38791[(2)] = null);

(statearr_38758_38791[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (3))){
var inst_38748 = (state_38750[(2)]);
var state_38750__$1 = state_38750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38750__$1,inst_38748);
} else {
if((state_val_38751 === (12))){
var inst_38736 = (state_38750[(8)]);
var inst_38736__$1 = (state_38750[(2)]);
var inst_38737 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38736__$1);
var state_38750__$1 = (function (){var statearr_38759 = state_38750;
(statearr_38759[(8)] = inst_38736__$1);

return statearr_38759;
})();
if(cljs.core.truth_(inst_38737)){
var statearr_38760_38792 = state_38750__$1;
(statearr_38760_38792[(1)] = (13));

} else {
var statearr_38761_38793 = state_38750__$1;
(statearr_38761_38793[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (2))){
var inst_38713 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38714 = (0);
var state_38750__$1 = (function (){var statearr_38762 = state_38750;
(statearr_38762[(7)] = inst_38714);

(statearr_38762[(10)] = inst_38713);

return statearr_38762;
})();
var statearr_38763_38794 = state_38750__$1;
(statearr_38763_38794[(2)] = null);

(statearr_38763_38794[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (11))){
var inst_38714 = (state_38750[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38750,(10),Object,null,(9));
var inst_38723 = chs__$1.call(null,inst_38714);
var inst_38724 = done.call(null,inst_38714);
var inst_38725 = cljs.core.async.take_BANG_.call(null,inst_38723,inst_38724);
var state_38750__$1 = state_38750;
var statearr_38764_38795 = state_38750__$1;
(statearr_38764_38795[(2)] = inst_38725);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38750__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (9))){
var inst_38714 = (state_38750[(7)]);
var inst_38727 = (state_38750[(2)]);
var inst_38728 = (inst_38714 + (1));
var inst_38714__$1 = inst_38728;
var state_38750__$1 = (function (){var statearr_38765 = state_38750;
(statearr_38765[(9)] = inst_38727);

(statearr_38765[(7)] = inst_38714__$1);

return statearr_38765;
})();
var statearr_38766_38796 = state_38750__$1;
(statearr_38766_38796[(2)] = null);

(statearr_38766_38796[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (5))){
var inst_38734 = (state_38750[(2)]);
var state_38750__$1 = (function (){var statearr_38767 = state_38750;
(statearr_38767[(11)] = inst_38734);

return statearr_38767;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38750__$1,(12),dchan);
} else {
if((state_val_38751 === (14))){
var inst_38736 = (state_38750[(8)]);
var inst_38741 = cljs.core.apply.call(null,f,inst_38736);
var state_38750__$1 = state_38750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38750__$1,(16),out,inst_38741);
} else {
if((state_val_38751 === (16))){
var inst_38743 = (state_38750[(2)]);
var state_38750__$1 = (function (){var statearr_38768 = state_38750;
(statearr_38768[(12)] = inst_38743);

return statearr_38768;
})();
var statearr_38769_38797 = state_38750__$1;
(statearr_38769_38797[(2)] = null);

(statearr_38769_38797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (10))){
var inst_38718 = (state_38750[(2)]);
var inst_38719 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_38750__$1 = (function (){var statearr_38770 = state_38750;
(statearr_38770[(13)] = inst_38718);

return statearr_38770;
})();
var statearr_38771_38798 = state_38750__$1;
(statearr_38771_38798[(2)] = inst_38719);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38750__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (8))){
var inst_38732 = (state_38750[(2)]);
var state_38750__$1 = state_38750;
var statearr_38772_38799 = state_38750__$1;
(statearr_38772_38799[(2)] = inst_38732);

(statearr_38772_38799[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20431__auto___38784,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20366__auto__,c__20431__auto___38784,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20367__auto__ = null;
var cljs$core$async$state_machine__20367__auto____0 = (function (){
var statearr_38776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38776[(0)] = cljs$core$async$state_machine__20367__auto__);

(statearr_38776[(1)] = (1));

return statearr_38776;
});
var cljs$core$async$state_machine__20367__auto____1 = (function (state_38750){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_38750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e38777){if((e38777 instanceof Object)){
var ex__20370__auto__ = e38777;
var statearr_38778_38800 = state_38750;
(statearr_38778_38800[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38801 = state_38750;
state_38750 = G__38801;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
cljs$core$async$state_machine__20367__auto__ = function(state_38750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20367__auto____1.call(this,state_38750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20367__auto____0;
cljs$core$async$state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20367__auto____1;
return cljs$core$async$state_machine__20367__auto__;
})()
;})(switch__20366__auto__,c__20431__auto___38784,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20433__auto__ = (function (){var statearr_38779 = f__20432__auto__.call(null);
(statearr_38779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto___38784);

return statearr_38779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(c__20431__auto___38784,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var args38803 = [];
var len__17521__auto___38859 = arguments.length;
var i__17522__auto___38860 = (0);
while(true){
if((i__17522__auto___38860 < len__17521__auto___38859)){
args38803.push((arguments[i__17522__auto___38860]));

var G__38861 = (i__17522__auto___38860 + (1));
i__17522__auto___38860 = G__38861;
continue;
} else {
}
break;
}

var G__38805 = args38803.length;
switch (G__38805) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38803.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20431__auto___38863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20431__auto___38863,out){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (c__20431__auto___38863,out){
return (function (state_38835){
var state_val_38836 = (state_38835[(1)]);
if((state_val_38836 === (7))){
var inst_38815 = (state_38835[(7)]);
var inst_38814 = (state_38835[(8)]);
var inst_38814__$1 = (state_38835[(2)]);
var inst_38815__$1 = cljs.core.nth.call(null,inst_38814__$1,(0),null);
var inst_38816 = cljs.core.nth.call(null,inst_38814__$1,(1),null);
var inst_38817 = (inst_38815__$1 == null);
var state_38835__$1 = (function (){var statearr_38837 = state_38835;
(statearr_38837[(9)] = inst_38816);

(statearr_38837[(7)] = inst_38815__$1);

(statearr_38837[(8)] = inst_38814__$1);

return statearr_38837;
})();
if(cljs.core.truth_(inst_38817)){
var statearr_38838_38864 = state_38835__$1;
(statearr_38838_38864[(1)] = (8));

} else {
var statearr_38839_38865 = state_38835__$1;
(statearr_38839_38865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38836 === (1))){
var inst_38806 = cljs.core.vec.call(null,chs);
var inst_38807 = inst_38806;
var state_38835__$1 = (function (){var statearr_38840 = state_38835;
(statearr_38840[(10)] = inst_38807);

return statearr_38840;
})();
var statearr_38841_38866 = state_38835__$1;
(statearr_38841_38866[(2)] = null);

(statearr_38841_38866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38836 === (4))){
var inst_38807 = (state_38835[(10)]);
var state_38835__$1 = state_38835;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38835__$1,(7),inst_38807);
} else {
if((state_val_38836 === (6))){
var inst_38831 = (state_38835[(2)]);
var state_38835__$1 = state_38835;
var statearr_38842_38867 = state_38835__$1;
(statearr_38842_38867[(2)] = inst_38831);

(statearr_38842_38867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38836 === (3))){
var inst_38833 = (state_38835[(2)]);
var state_38835__$1 = state_38835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38835__$1,inst_38833);
} else {
if((state_val_38836 === (2))){
var inst_38807 = (state_38835[(10)]);
var inst_38809 = cljs.core.count.call(null,inst_38807);
var inst_38810 = (inst_38809 > (0));
var state_38835__$1 = state_38835;
if(cljs.core.truth_(inst_38810)){
var statearr_38844_38868 = state_38835__$1;
(statearr_38844_38868[(1)] = (4));

} else {
var statearr_38845_38869 = state_38835__$1;
(statearr_38845_38869[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38836 === (11))){
var inst_38807 = (state_38835[(10)]);
var inst_38824 = (state_38835[(2)]);
var tmp38843 = inst_38807;
var inst_38807__$1 = tmp38843;
var state_38835__$1 = (function (){var statearr_38846 = state_38835;
(statearr_38846[(11)] = inst_38824);

(statearr_38846[(10)] = inst_38807__$1);

return statearr_38846;
})();
var statearr_38847_38870 = state_38835__$1;
(statearr_38847_38870[(2)] = null);

(statearr_38847_38870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38836 === (9))){
var inst_38815 = (state_38835[(7)]);
var state_38835__$1 = state_38835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38835__$1,(11),out,inst_38815);
} else {
if((state_val_38836 === (5))){
var inst_38829 = cljs.core.async.close_BANG_.call(null,out);
var state_38835__$1 = state_38835;
var statearr_38848_38871 = state_38835__$1;
(statearr_38848_38871[(2)] = inst_38829);

(statearr_38848_38871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38836 === (10))){
var inst_38827 = (state_38835[(2)]);
var state_38835__$1 = state_38835;
var statearr_38849_38872 = state_38835__$1;
(statearr_38849_38872[(2)] = inst_38827);

(statearr_38849_38872[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38836 === (8))){
var inst_38816 = (state_38835[(9)]);
var inst_38815 = (state_38835[(7)]);
var inst_38807 = (state_38835[(10)]);
var inst_38814 = (state_38835[(8)]);
var inst_38819 = (function (){var cs = inst_38807;
var vec__38812 = inst_38814;
var v = inst_38815;
var c = inst_38816;
return ((function (cs,vec__38812,v,c,inst_38816,inst_38815,inst_38807,inst_38814,state_val_38836,c__20431__auto___38863,out){
return (function (p1__38802_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__38802_SHARP_);
});
;})(cs,vec__38812,v,c,inst_38816,inst_38815,inst_38807,inst_38814,state_val_38836,c__20431__auto___38863,out))
})();
var inst_38820 = cljs.core.filterv.call(null,inst_38819,inst_38807);
var inst_38807__$1 = inst_38820;
var state_38835__$1 = (function (){var statearr_38850 = state_38835;
(statearr_38850[(10)] = inst_38807__$1);

return statearr_38850;
})();
var statearr_38851_38873 = state_38835__$1;
(statearr_38851_38873[(2)] = null);

(statearr_38851_38873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20431__auto___38863,out))
;
return ((function (switch__20366__auto__,c__20431__auto___38863,out){
return (function() {
var cljs$core$async$state_machine__20367__auto__ = null;
var cljs$core$async$state_machine__20367__auto____0 = (function (){
var statearr_38855 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38855[(0)] = cljs$core$async$state_machine__20367__auto__);

(statearr_38855[(1)] = (1));

return statearr_38855;
});
var cljs$core$async$state_machine__20367__auto____1 = (function (state_38835){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_38835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e38856){if((e38856 instanceof Object)){
var ex__20370__auto__ = e38856;
var statearr_38857_38874 = state_38835;
(statearr_38857_38874[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38875 = state_38835;
state_38835 = G__38875;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
cljs$core$async$state_machine__20367__auto__ = function(state_38835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20367__auto____1.call(this,state_38835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20367__auto____0;
cljs$core$async$state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20367__auto____1;
return cljs$core$async$state_machine__20367__auto__;
})()
;})(switch__20366__auto__,c__20431__auto___38863,out))
})();
var state__20433__auto__ = (function (){var statearr_38858 = f__20432__auto__.call(null);
(statearr_38858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto___38863);

return statearr_38858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(c__20431__auto___38863,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var args38876 = [];
var len__17521__auto___38925 = arguments.length;
var i__17522__auto___38926 = (0);
while(true){
if((i__17522__auto___38926 < len__17521__auto___38925)){
args38876.push((arguments[i__17522__auto___38926]));

var G__38927 = (i__17522__auto___38926 + (1));
i__17522__auto___38926 = G__38927;
continue;
} else {
}
break;
}

var G__38878 = args38876.length;
switch (G__38878) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38876.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20431__auto___38929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20431__auto___38929,out){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (c__20431__auto___38929,out){
return (function (state_38902){
var state_val_38903 = (state_38902[(1)]);
if((state_val_38903 === (7))){
var inst_38884 = (state_38902[(7)]);
var inst_38884__$1 = (state_38902[(2)]);
var inst_38885 = (inst_38884__$1 == null);
var inst_38886 = cljs.core.not.call(null,inst_38885);
var state_38902__$1 = (function (){var statearr_38904 = state_38902;
(statearr_38904[(7)] = inst_38884__$1);

return statearr_38904;
})();
if(inst_38886){
var statearr_38905_38930 = state_38902__$1;
(statearr_38905_38930[(1)] = (8));

} else {
var statearr_38906_38931 = state_38902__$1;
(statearr_38906_38931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38903 === (1))){
var inst_38879 = (0);
var state_38902__$1 = (function (){var statearr_38907 = state_38902;
(statearr_38907[(8)] = inst_38879);

return statearr_38907;
})();
var statearr_38908_38932 = state_38902__$1;
(statearr_38908_38932[(2)] = null);

(statearr_38908_38932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38903 === (4))){
var state_38902__$1 = state_38902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38902__$1,(7),ch);
} else {
if((state_val_38903 === (6))){
var inst_38897 = (state_38902[(2)]);
var state_38902__$1 = state_38902;
var statearr_38909_38933 = state_38902__$1;
(statearr_38909_38933[(2)] = inst_38897);

(statearr_38909_38933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38903 === (3))){
var inst_38899 = (state_38902[(2)]);
var inst_38900 = cljs.core.async.close_BANG_.call(null,out);
var state_38902__$1 = (function (){var statearr_38910 = state_38902;
(statearr_38910[(9)] = inst_38899);

return statearr_38910;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38902__$1,inst_38900);
} else {
if((state_val_38903 === (2))){
var inst_38879 = (state_38902[(8)]);
var inst_38881 = (inst_38879 < n);
var state_38902__$1 = state_38902;
if(cljs.core.truth_(inst_38881)){
var statearr_38911_38934 = state_38902__$1;
(statearr_38911_38934[(1)] = (4));

} else {
var statearr_38912_38935 = state_38902__$1;
(statearr_38912_38935[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38903 === (11))){
var inst_38879 = (state_38902[(8)]);
var inst_38889 = (state_38902[(2)]);
var inst_38890 = (inst_38879 + (1));
var inst_38879__$1 = inst_38890;
var state_38902__$1 = (function (){var statearr_38913 = state_38902;
(statearr_38913[(8)] = inst_38879__$1);

(statearr_38913[(10)] = inst_38889);

return statearr_38913;
})();
var statearr_38914_38936 = state_38902__$1;
(statearr_38914_38936[(2)] = null);

(statearr_38914_38936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38903 === (9))){
var state_38902__$1 = state_38902;
var statearr_38915_38937 = state_38902__$1;
(statearr_38915_38937[(2)] = null);

(statearr_38915_38937[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38903 === (5))){
var state_38902__$1 = state_38902;
var statearr_38916_38938 = state_38902__$1;
(statearr_38916_38938[(2)] = null);

(statearr_38916_38938[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38903 === (10))){
var inst_38894 = (state_38902[(2)]);
var state_38902__$1 = state_38902;
var statearr_38917_38939 = state_38902__$1;
(statearr_38917_38939[(2)] = inst_38894);

(statearr_38917_38939[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38903 === (8))){
var inst_38884 = (state_38902[(7)]);
var state_38902__$1 = state_38902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38902__$1,(11),out,inst_38884);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20431__auto___38929,out))
;
return ((function (switch__20366__auto__,c__20431__auto___38929,out){
return (function() {
var cljs$core$async$state_machine__20367__auto__ = null;
var cljs$core$async$state_machine__20367__auto____0 = (function (){
var statearr_38921 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38921[(0)] = cljs$core$async$state_machine__20367__auto__);

(statearr_38921[(1)] = (1));

return statearr_38921;
});
var cljs$core$async$state_machine__20367__auto____1 = (function (state_38902){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_38902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e38922){if((e38922 instanceof Object)){
var ex__20370__auto__ = e38922;
var statearr_38923_38940 = state_38902;
(statearr_38923_38940[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38941 = state_38902;
state_38902 = G__38941;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
cljs$core$async$state_machine__20367__auto__ = function(state_38902){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20367__auto____1.call(this,state_38902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20367__auto____0;
cljs$core$async$state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20367__auto____1;
return cljs$core$async$state_machine__20367__auto__;
})()
;})(switch__20366__auto__,c__20431__auto___38929,out))
})();
var state__20433__auto__ = (function (){var statearr_38924 = f__20432__auto__.call(null);
(statearr_38924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto___38929);

return statearr_38924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(c__20431__auto___38929,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t38949 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38949 = (function (map_LT_,f,ch,meta38950){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38950 = meta38950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t38949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38951,meta38950__$1){
var self__ = this;
var _38951__$1 = this;
return (new cljs.core.async.t38949(self__.map_LT_,self__.f,self__.ch,meta38950__$1));
});

cljs.core.async.t38949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38951){
var self__ = this;
var _38951__$1 = this;
return self__.meta38950;
});

cljs.core.async.t38949.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t38949.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t38949.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t38949.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t38949.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t38952 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38952 = (function (map_LT_,f,ch,meta38950,_,fn1,meta38953){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38950 = meta38950;
this._ = _;
this.fn1 = fn1;
this.meta38953 = meta38953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t38952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38954,meta38953__$1){
var self__ = this;
var _38954__$1 = this;
return (new cljs.core.async.t38952(self__.map_LT_,self__.f,self__.ch,self__.meta38950,self__._,self__.fn1,meta38953__$1));
});})(___$1))
;

cljs.core.async.t38952.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38954){
var self__ = this;
var _38954__$1 = this;
return self__.meta38953;
});})(___$1))
;

cljs.core.async.t38952.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t38952.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t38952.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__38942_SHARP_){
return f1.call(null,(((p1__38942_SHARP_ == null))?null:self__.f.call(null,p1__38942_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t38952.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38950","meta38950",-1645707242,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t38949","cljs.core.async/t38949",-1162331466,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38953","meta38953",311123211,null)], null);
});})(___$1))
;

cljs.core.async.t38952.cljs$lang$type = true;

cljs.core.async.t38952.cljs$lang$ctorStr = "cljs.core.async/t38952";

cljs.core.async.t38952.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t38952");
});})(___$1))
;

cljs.core.async.__GT_t38952 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t38952(map_LT___$1,f__$1,ch__$1,meta38950__$1,___$2,fn1__$1,meta38953){
return (new cljs.core.async.t38952(map_LT___$1,f__$1,ch__$1,meta38950__$1,___$2,fn1__$1,meta38953));
});})(___$1))
;

}

return (new cljs.core.async.t38952(self__.map_LT_,self__.f,self__.ch,self__.meta38950,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16470__auto__ = ret;
if(cljs.core.truth_(and__16470__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16470__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t38949.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t38949.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t38949.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38950","meta38950",-1645707242,null)], null);
});

cljs.core.async.t38949.cljs$lang$type = true;

cljs.core.async.t38949.cljs$lang$ctorStr = "cljs.core.async/t38949";

cljs.core.async.t38949.cljs$lang$ctorPrWriter = (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t38949");
});

cljs.core.async.__GT_t38949 = (function cljs$core$async$map_LT__$___GT_t38949(map_LT___$1,f__$1,ch__$1,meta38950){
return (new cljs.core.async.t38949(map_LT___$1,f__$1,ch__$1,meta38950));
});

}

return (new cljs.core.async.t38949(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t38958 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38958 = (function (map_GT_,f,ch,meta38959){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta38959 = meta38959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t38958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38960,meta38959__$1){
var self__ = this;
var _38960__$1 = this;
return (new cljs.core.async.t38958(self__.map_GT_,self__.f,self__.ch,meta38959__$1));
});

cljs.core.async.t38958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38960){
var self__ = this;
var _38960__$1 = this;
return self__.meta38959;
});

cljs.core.async.t38958.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t38958.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t38958.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t38958.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t38958.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t38958.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t38958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38959","meta38959",700009169,null)], null);
});

cljs.core.async.t38958.cljs$lang$type = true;

cljs.core.async.t38958.cljs$lang$ctorStr = "cljs.core.async/t38958";

cljs.core.async.t38958.cljs$lang$ctorPrWriter = (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t38958");
});

cljs.core.async.__GT_t38958 = (function cljs$core$async$map_GT__$___GT_t38958(map_GT___$1,f__$1,ch__$1,meta38959){
return (new cljs.core.async.t38958(map_GT___$1,f__$1,ch__$1,meta38959));
});

}

return (new cljs.core.async.t38958(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t38964 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38964 = (function (filter_GT_,p,ch,meta38965){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta38965 = meta38965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t38964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38966,meta38965__$1){
var self__ = this;
var _38966__$1 = this;
return (new cljs.core.async.t38964(self__.filter_GT_,self__.p,self__.ch,meta38965__$1));
});

cljs.core.async.t38964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38966){
var self__ = this;
var _38966__$1 = this;
return self__.meta38965;
});

cljs.core.async.t38964.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t38964.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t38964.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t38964.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t38964.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t38964.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t38964.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t38964.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38965","meta38965",-580792374,null)], null);
});

cljs.core.async.t38964.cljs$lang$type = true;

cljs.core.async.t38964.cljs$lang$ctorStr = "cljs.core.async/t38964";

cljs.core.async.t38964.cljs$lang$ctorPrWriter = (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t38964");
});

cljs.core.async.__GT_t38964 = (function cljs$core$async$filter_GT__$___GT_t38964(filter_GT___$1,p__$1,ch__$1,meta38965){
return (new cljs.core.async.t38964(filter_GT___$1,p__$1,ch__$1,meta38965));
});

}

return (new cljs.core.async.t38964(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var args38967 = [];
var len__17521__auto___39011 = arguments.length;
var i__17522__auto___39012 = (0);
while(true){
if((i__17522__auto___39012 < len__17521__auto___39011)){
args38967.push((arguments[i__17522__auto___39012]));

var G__39013 = (i__17522__auto___39012 + (1));
i__17522__auto___39012 = G__39013;
continue;
} else {
}
break;
}

var G__38969 = args38967.length;
switch (G__38969) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38967.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20431__auto___39015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20431__auto___39015,out){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (c__20431__auto___39015,out){
return (function (state_38990){
var state_val_38991 = (state_38990[(1)]);
if((state_val_38991 === (7))){
var inst_38986 = (state_38990[(2)]);
var state_38990__$1 = state_38990;
var statearr_38992_39016 = state_38990__$1;
(statearr_38992_39016[(2)] = inst_38986);

(statearr_38992_39016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38991 === (1))){
var state_38990__$1 = state_38990;
var statearr_38993_39017 = state_38990__$1;
(statearr_38993_39017[(2)] = null);

(statearr_38993_39017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38991 === (4))){
var inst_38972 = (state_38990[(7)]);
var inst_38972__$1 = (state_38990[(2)]);
var inst_38973 = (inst_38972__$1 == null);
var state_38990__$1 = (function (){var statearr_38994 = state_38990;
(statearr_38994[(7)] = inst_38972__$1);

return statearr_38994;
})();
if(cljs.core.truth_(inst_38973)){
var statearr_38995_39018 = state_38990__$1;
(statearr_38995_39018[(1)] = (5));

} else {
var statearr_38996_39019 = state_38990__$1;
(statearr_38996_39019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38991 === (6))){
var inst_38972 = (state_38990[(7)]);
var inst_38977 = p.call(null,inst_38972);
var state_38990__$1 = state_38990;
if(cljs.core.truth_(inst_38977)){
var statearr_38997_39020 = state_38990__$1;
(statearr_38997_39020[(1)] = (8));

} else {
var statearr_38998_39021 = state_38990__$1;
(statearr_38998_39021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38991 === (3))){
var inst_38988 = (state_38990[(2)]);
var state_38990__$1 = state_38990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38990__$1,inst_38988);
} else {
if((state_val_38991 === (2))){
var state_38990__$1 = state_38990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38990__$1,(4),ch);
} else {
if((state_val_38991 === (11))){
var inst_38980 = (state_38990[(2)]);
var state_38990__$1 = state_38990;
var statearr_38999_39022 = state_38990__$1;
(statearr_38999_39022[(2)] = inst_38980);

(statearr_38999_39022[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38991 === (9))){
var state_38990__$1 = state_38990;
var statearr_39000_39023 = state_38990__$1;
(statearr_39000_39023[(2)] = null);

(statearr_39000_39023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38991 === (5))){
var inst_38975 = cljs.core.async.close_BANG_.call(null,out);
var state_38990__$1 = state_38990;
var statearr_39001_39024 = state_38990__$1;
(statearr_39001_39024[(2)] = inst_38975);

(statearr_39001_39024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38991 === (10))){
var inst_38983 = (state_38990[(2)]);
var state_38990__$1 = (function (){var statearr_39002 = state_38990;
(statearr_39002[(8)] = inst_38983);

return statearr_39002;
})();
var statearr_39003_39025 = state_38990__$1;
(statearr_39003_39025[(2)] = null);

(statearr_39003_39025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38991 === (8))){
var inst_38972 = (state_38990[(7)]);
var state_38990__$1 = state_38990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38990__$1,(11),out,inst_38972);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20431__auto___39015,out))
;
return ((function (switch__20366__auto__,c__20431__auto___39015,out){
return (function() {
var cljs$core$async$state_machine__20367__auto__ = null;
var cljs$core$async$state_machine__20367__auto____0 = (function (){
var statearr_39007 = [null,null,null,null,null,null,null,null,null];
(statearr_39007[(0)] = cljs$core$async$state_machine__20367__auto__);

(statearr_39007[(1)] = (1));

return statearr_39007;
});
var cljs$core$async$state_machine__20367__auto____1 = (function (state_38990){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_38990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e39008){if((e39008 instanceof Object)){
var ex__20370__auto__ = e39008;
var statearr_39009_39026 = state_38990;
(statearr_39009_39026[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39027 = state_38990;
state_38990 = G__39027;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
cljs$core$async$state_machine__20367__auto__ = function(state_38990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20367__auto____1.call(this,state_38990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20367__auto____0;
cljs$core$async$state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20367__auto____1;
return cljs$core$async$state_machine__20367__auto__;
})()
;})(switch__20366__auto__,c__20431__auto___39015,out))
})();
var state__20433__auto__ = (function (){var statearr_39010 = f__20432__auto__.call(null);
(statearr_39010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto___39015);

return statearr_39010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(c__20431__auto___39015,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args39028 = [];
var len__17521__auto___39031 = arguments.length;
var i__17522__auto___39032 = (0);
while(true){
if((i__17522__auto___39032 < len__17521__auto___39031)){
args39028.push((arguments[i__17522__auto___39032]));

var G__39033 = (i__17522__auto___39032 + (1));
i__17522__auto___39032 = G__39033;
continue;
} else {
}
break;
}

var G__39030 = args39028.length;
switch (G__39030) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39028.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20431__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20431__auto__){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (c__20431__auto__){
return (function (state_39200){
var state_val_39201 = (state_39200[(1)]);
if((state_val_39201 === (7))){
var inst_39196 = (state_39200[(2)]);
var state_39200__$1 = state_39200;
var statearr_39202_39243 = state_39200__$1;
(statearr_39202_39243[(2)] = inst_39196);

(statearr_39202_39243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39201 === (20))){
var inst_39166 = (state_39200[(7)]);
var inst_39177 = (state_39200[(2)]);
var inst_39178 = cljs.core.next.call(null,inst_39166);
var inst_39152 = inst_39178;
var inst_39153 = null;
var inst_39154 = (0);
var inst_39155 = (0);
var state_39200__$1 = (function (){var statearr_39203 = state_39200;
(statearr_39203[(8)] = inst_39153);

(statearr_39203[(10)] = inst_39152);

(statearr_39203[(11)] = inst_39177);

(statearr_39203[(12)] = inst_39154);

(statearr_39203[(13)] = inst_39155);

return statearr_39203;
})();
var statearr_39204_39244 = state_39200__$1;
(statearr_39204_39244[(2)] = null);

(statearr_39204_39244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39201 === (1))){
var state_39200__$1 = state_39200;
var statearr_39205_39245 = state_39200__$1;
(statearr_39205_39245[(2)] = null);

(statearr_39205_39245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39201 === (4))){
var inst_39141 = (state_39200[(9)]);
var inst_39141__$1 = (state_39200[(2)]);
var inst_39142 = (inst_39141__$1 == null);
var state_39200__$1 = (function (){var statearr_39206 = state_39200;
(statearr_39206[(9)] = inst_39141__$1);

return statearr_39206;
})();
if(cljs.core.truth_(inst_39142)){
var statearr_39207_39246 = state_39200__$1;
(statearr_39207_39246[(1)] = (5));

} else {
var statearr_39208_39247 = state_39200__$1;
(statearr_39208_39247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39201 === (15))){
var state_39200__$1 = state_39200;
var statearr_39212_39248 = state_39200__$1;
(statearr_39212_39248[(2)] = null);

(statearr_39212_39248[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39201 === (21))){
var state_39200__$1 = state_39200;
var statearr_39213_39249 = state_39200__$1;
(statearr_39213_39249[(2)] = null);

(statearr_39213_39249[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39201 === (13))){
var inst_39153 = (state_39200[(8)]);
var inst_39152 = (state_39200[(10)]);
var inst_39154 = (state_39200[(12)]);
var inst_39155 = (state_39200[(13)]);
var inst_39162 = (state_39200[(2)]);
var inst_39163 = (inst_39155 + (1));
var tmp39209 = inst_39153;
var tmp39210 = inst_39152;
var tmp39211 = inst_39154;
var inst_39152__$1 = tmp39210;
var inst_39153__$1 = tmp39209;
var inst_39154__$1 = tmp39211;
var inst_39155__$1 = inst_39163;
var state_39200__$1 = (function (){var statearr_39214 = state_39200;
(statearr_39214[(8)] = inst_39153__$1);

(statearr_39214[(10)] = inst_39152__$1);

(statearr_39214[(14)] = inst_39162);

(statearr_39214[(12)] = inst_39154__$1);

(statearr_39214[(13)] = inst_39155__$1);

return statearr_39214;
})();
var statearr_39215_39250 = state_39200__$1;
(statearr_39215_39250[(2)] = null);

(statearr_39215_39250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39201 === (22))){
var state_39200__$1 = state_39200;
var statearr_39216_39251 = state_39200__$1;
(statearr_39216_39251[(2)] = null);

(statearr_39216_39251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39201 === (6))){
var inst_39141 = (state_39200[(9)]);
var inst_39150 = f.call(null,inst_39141);
var inst_39151 = cljs.core.seq.call(null,inst_39150);
var inst_39152 = inst_39151;
var inst_39153 = null;
var inst_39154 = (0);
var inst_39155 = (0);
var state_39200__$1 = (function (){var statearr_39217 = state_39200;
(statearr_39217[(8)] = inst_39153);

(statearr_39217[(10)] = inst_39152);

(statearr_39217[(12)] = inst_39154);

(statearr_39217[(13)] = inst_39155);

return statearr_39217;
})();
var statearr_39218_39252 = state_39200__$1;
(statearr_39218_39252[(2)] = null);

(statearr_39218_39252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39201 === (17))){
var inst_39166 = (state_39200[(7)]);
var inst_39170 = cljs.core.chunk_first.call(null,inst_39166);
var inst_39171 = cljs.core.chunk_rest.call(null,inst_39166);
var inst_39172 = cljs.core.count.call(null,inst_39170);
var inst_39152 = inst_39171;
var inst_39153 = inst_39170;
var inst_39154 = inst_39172;
var inst_39155 = (0);
var state_39200__$1 = (function (){var statearr_39219 = state_39200;
(statearr_39219[(8)] = inst_39153);

(statearr_39219[(10)] = inst_39152);

(statearr_39219[(12)] = inst_39154);

(statearr_39219[(13)] = inst_39155);

return statearr_39219;
})();
var statearr_39220_39253 = state_39200__$1;
(statearr_39220_39253[(2)] = null);

(statearr_39220_39253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39201 === (3))){
var inst_39198 = (state_39200[(2)]);
var state_39200__$1 = state_39200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39200__$1,inst_39198);
} else {
if((state_val_39201 === (12))){
var inst_39186 = (state_39200[(2)]);
var state_39200__$1 = state_39200;
var statearr_39221_39254 = state_39200__$1;
(statearr_39221_39254[(2)] = inst_39186);

(statearr_39221_39254[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39201 === (2))){
var state_39200__$1 = state_39200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39200__$1,(4),in$);
} else {
if((state_val_39201 === (23))){
var inst_39194 = (state_39200[(2)]);
var state_39200__$1 = state_39200;
var statearr_39222_39255 = state_39200__$1;
(statearr_39222_39255[(2)] = inst_39194);

(statearr_39222_39255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39201 === (19))){
var inst_39181 = (state_39200[(2)]);
var state_39200__$1 = state_39200;
var statearr_39223_39256 = state_39200__$1;
(statearr_39223_39256[(2)] = inst_39181);

(statearr_39223_39256[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39201 === (11))){
var inst_39152 = (state_39200[(10)]);
var inst_39166 = (state_39200[(7)]);
var inst_39166__$1 = cljs.core.seq.call(null,inst_39152);
var state_39200__$1 = (function (){var statearr_39224 = state_39200;
(statearr_39224[(7)] = inst_39166__$1);

return statearr_39224;
})();
if(inst_39166__$1){
var statearr_39225_39257 = state_39200__$1;
(statearr_39225_39257[(1)] = (14));

} else {
var statearr_39226_39258 = state_39200__$1;
(statearr_39226_39258[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39201 === (9))){
var inst_39188 = (state_39200[(2)]);
var inst_39189 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39200__$1 = (function (){var statearr_39227 = state_39200;
(statearr_39227[(15)] = inst_39188);

return statearr_39227;
})();
if(cljs.core.truth_(inst_39189)){
var statearr_39228_39259 = state_39200__$1;
(statearr_39228_39259[(1)] = (21));

} else {
var statearr_39229_39260 = state_39200__$1;
(statearr_39229_39260[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39201 === (5))){
var inst_39144 = cljs.core.async.close_BANG_.call(null,out);
var state_39200__$1 = state_39200;
var statearr_39230_39261 = state_39200__$1;
(statearr_39230_39261[(2)] = inst_39144);

(statearr_39230_39261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39201 === (14))){
var inst_39166 = (state_39200[(7)]);
var inst_39168 = cljs.core.chunked_seq_QMARK_.call(null,inst_39166);
var state_39200__$1 = state_39200;
if(inst_39168){
var statearr_39231_39262 = state_39200__$1;
(statearr_39231_39262[(1)] = (17));

} else {
var statearr_39232_39263 = state_39200__$1;
(statearr_39232_39263[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39201 === (16))){
var inst_39184 = (state_39200[(2)]);
var state_39200__$1 = state_39200;
var statearr_39233_39264 = state_39200__$1;
(statearr_39233_39264[(2)] = inst_39184);

(statearr_39233_39264[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39201 === (10))){
var inst_39153 = (state_39200[(8)]);
var inst_39155 = (state_39200[(13)]);
var inst_39160 = cljs.core._nth.call(null,inst_39153,inst_39155);
var state_39200__$1 = state_39200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39200__$1,(13),out,inst_39160);
} else {
if((state_val_39201 === (18))){
var inst_39166 = (state_39200[(7)]);
var inst_39175 = cljs.core.first.call(null,inst_39166);
var state_39200__$1 = state_39200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39200__$1,(20),out,inst_39175);
} else {
if((state_val_39201 === (8))){
var inst_39154 = (state_39200[(12)]);
var inst_39155 = (state_39200[(13)]);
var inst_39157 = (inst_39155 < inst_39154);
var inst_39158 = inst_39157;
var state_39200__$1 = state_39200;
if(cljs.core.truth_(inst_39158)){
var statearr_39234_39265 = state_39200__$1;
(statearr_39234_39265[(1)] = (10));

} else {
var statearr_39235_39266 = state_39200__$1;
(statearr_39235_39266[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20431__auto__))
;
return ((function (switch__20366__auto__,c__20431__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20367__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20367__auto____0 = (function (){
var statearr_39239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39239[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20367__auto__);

(statearr_39239[(1)] = (1));

return statearr_39239;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20367__auto____1 = (function (state_39200){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_39200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e39240){if((e39240 instanceof Object)){
var ex__20370__auto__ = e39240;
var statearr_39241_39267 = state_39200;
(statearr_39241_39267[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39268 = state_39200;
state_39200 = G__39268;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20367__auto__ = function(state_39200){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20367__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20367__auto____1.call(this,state_39200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20367__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20367__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20367__auto__;
})()
;})(switch__20366__auto__,c__20431__auto__))
})();
var state__20433__auto__ = (function (){var statearr_39242 = f__20432__auto__.call(null);
(statearr_39242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto__);

return statearr_39242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(c__20431__auto__))
);

return c__20431__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args39269 = [];
var len__17521__auto___39272 = arguments.length;
var i__17522__auto___39273 = (0);
while(true){
if((i__17522__auto___39273 < len__17521__auto___39272)){
args39269.push((arguments[i__17522__auto___39273]));

var G__39274 = (i__17522__auto___39273 + (1));
i__17522__auto___39273 = G__39274;
continue;
} else {
}
break;
}

var G__39271 = args39269.length;
switch (G__39271) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39269.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var args39276 = [];
var len__17521__auto___39279 = arguments.length;
var i__17522__auto___39280 = (0);
while(true){
if((i__17522__auto___39280 < len__17521__auto___39279)){
args39276.push((arguments[i__17522__auto___39280]));

var G__39281 = (i__17522__auto___39280 + (1));
i__17522__auto___39280 = G__39281;
continue;
} else {
}
break;
}

var G__39278 = args39276.length;
switch (G__39278) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39276.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var args39283 = [];
var len__17521__auto___39334 = arguments.length;
var i__17522__auto___39335 = (0);
while(true){
if((i__17522__auto___39335 < len__17521__auto___39334)){
args39283.push((arguments[i__17522__auto___39335]));

var G__39336 = (i__17522__auto___39335 + (1));
i__17522__auto___39335 = G__39336;
continue;
} else {
}
break;
}

var G__39285 = args39283.length;
switch (G__39285) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39283.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20431__auto___39338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20431__auto___39338,out){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (c__20431__auto___39338,out){
return (function (state_39309){
var state_val_39310 = (state_39309[(1)]);
if((state_val_39310 === (7))){
var inst_39304 = (state_39309[(2)]);
var state_39309__$1 = state_39309;
var statearr_39311_39339 = state_39309__$1;
(statearr_39311_39339[(2)] = inst_39304);

(statearr_39311_39339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (1))){
var inst_39286 = null;
var state_39309__$1 = (function (){var statearr_39312 = state_39309;
(statearr_39312[(7)] = inst_39286);

return statearr_39312;
})();
var statearr_39313_39340 = state_39309__$1;
(statearr_39313_39340[(2)] = null);

(statearr_39313_39340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (4))){
var inst_39289 = (state_39309[(8)]);
var inst_39289__$1 = (state_39309[(2)]);
var inst_39290 = (inst_39289__$1 == null);
var inst_39291 = cljs.core.not.call(null,inst_39290);
var state_39309__$1 = (function (){var statearr_39314 = state_39309;
(statearr_39314[(8)] = inst_39289__$1);

return statearr_39314;
})();
if(inst_39291){
var statearr_39315_39341 = state_39309__$1;
(statearr_39315_39341[(1)] = (5));

} else {
var statearr_39316_39342 = state_39309__$1;
(statearr_39316_39342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (6))){
var state_39309__$1 = state_39309;
var statearr_39317_39343 = state_39309__$1;
(statearr_39317_39343[(2)] = null);

(statearr_39317_39343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (3))){
var inst_39306 = (state_39309[(2)]);
var inst_39307 = cljs.core.async.close_BANG_.call(null,out);
var state_39309__$1 = (function (){var statearr_39318 = state_39309;
(statearr_39318[(9)] = inst_39306);

return statearr_39318;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39309__$1,inst_39307);
} else {
if((state_val_39310 === (2))){
var state_39309__$1 = state_39309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39309__$1,(4),ch);
} else {
if((state_val_39310 === (11))){
var inst_39289 = (state_39309[(8)]);
var inst_39298 = (state_39309[(2)]);
var inst_39286 = inst_39289;
var state_39309__$1 = (function (){var statearr_39319 = state_39309;
(statearr_39319[(7)] = inst_39286);

(statearr_39319[(10)] = inst_39298);

return statearr_39319;
})();
var statearr_39320_39344 = state_39309__$1;
(statearr_39320_39344[(2)] = null);

(statearr_39320_39344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (9))){
var inst_39289 = (state_39309[(8)]);
var state_39309__$1 = state_39309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39309__$1,(11),out,inst_39289);
} else {
if((state_val_39310 === (5))){
var inst_39286 = (state_39309[(7)]);
var inst_39289 = (state_39309[(8)]);
var inst_39293 = cljs.core._EQ_.call(null,inst_39289,inst_39286);
var state_39309__$1 = state_39309;
if(inst_39293){
var statearr_39322_39345 = state_39309__$1;
(statearr_39322_39345[(1)] = (8));

} else {
var statearr_39323_39346 = state_39309__$1;
(statearr_39323_39346[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (10))){
var inst_39301 = (state_39309[(2)]);
var state_39309__$1 = state_39309;
var statearr_39324_39347 = state_39309__$1;
(statearr_39324_39347[(2)] = inst_39301);

(statearr_39324_39347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (8))){
var inst_39286 = (state_39309[(7)]);
var tmp39321 = inst_39286;
var inst_39286__$1 = tmp39321;
var state_39309__$1 = (function (){var statearr_39325 = state_39309;
(statearr_39325[(7)] = inst_39286__$1);

return statearr_39325;
})();
var statearr_39326_39348 = state_39309__$1;
(statearr_39326_39348[(2)] = null);

(statearr_39326_39348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20431__auto___39338,out))
;
return ((function (switch__20366__auto__,c__20431__auto___39338,out){
return (function() {
var cljs$core$async$state_machine__20367__auto__ = null;
var cljs$core$async$state_machine__20367__auto____0 = (function (){
var statearr_39330 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39330[(0)] = cljs$core$async$state_machine__20367__auto__);

(statearr_39330[(1)] = (1));

return statearr_39330;
});
var cljs$core$async$state_machine__20367__auto____1 = (function (state_39309){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_39309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e39331){if((e39331 instanceof Object)){
var ex__20370__auto__ = e39331;
var statearr_39332_39349 = state_39309;
(statearr_39332_39349[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39350 = state_39309;
state_39309 = G__39350;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
cljs$core$async$state_machine__20367__auto__ = function(state_39309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20367__auto____1.call(this,state_39309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20367__auto____0;
cljs$core$async$state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20367__auto____1;
return cljs$core$async$state_machine__20367__auto__;
})()
;})(switch__20366__auto__,c__20431__auto___39338,out))
})();
var state__20433__auto__ = (function (){var statearr_39333 = f__20432__auto__.call(null);
(statearr_39333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto___39338);

return statearr_39333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(c__20431__auto___39338,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args39351 = [];
var len__17521__auto___39421 = arguments.length;
var i__17522__auto___39422 = (0);
while(true){
if((i__17522__auto___39422 < len__17521__auto___39421)){
args39351.push((arguments[i__17522__auto___39422]));

var G__39423 = (i__17522__auto___39422 + (1));
i__17522__auto___39422 = G__39423;
continue;
} else {
}
break;
}

var G__39353 = args39351.length;
switch (G__39353) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39351.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20431__auto___39425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20431__auto___39425,out){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (c__20431__auto___39425,out){
return (function (state_39391){
var state_val_39392 = (state_39391[(1)]);
if((state_val_39392 === (7))){
var inst_39387 = (state_39391[(2)]);
var state_39391__$1 = state_39391;
var statearr_39393_39426 = state_39391__$1;
(statearr_39393_39426[(2)] = inst_39387);

(statearr_39393_39426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39392 === (1))){
var inst_39354 = (new Array(n));
var inst_39355 = inst_39354;
var inst_39356 = (0);
var state_39391__$1 = (function (){var statearr_39394 = state_39391;
(statearr_39394[(7)] = inst_39355);

(statearr_39394[(9)] = inst_39356);

return statearr_39394;
})();
var statearr_39395_39427 = state_39391__$1;
(statearr_39395_39427[(2)] = null);

(statearr_39395_39427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39392 === (4))){
var inst_39359 = (state_39391[(8)]);
var inst_39359__$1 = (state_39391[(2)]);
var inst_39360 = (inst_39359__$1 == null);
var inst_39361 = cljs.core.not.call(null,inst_39360);
var state_39391__$1 = (function (){var statearr_39396 = state_39391;
(statearr_39396[(8)] = inst_39359__$1);

return statearr_39396;
})();
if(inst_39361){
var statearr_39397_39428 = state_39391__$1;
(statearr_39397_39428[(1)] = (5));

} else {
var statearr_39398_39429 = state_39391__$1;
(statearr_39398_39429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39392 === (15))){
var inst_39381 = (state_39391[(2)]);
var state_39391__$1 = state_39391;
var statearr_39399_39430 = state_39391__$1;
(statearr_39399_39430[(2)] = inst_39381);

(statearr_39399_39430[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39392 === (13))){
var state_39391__$1 = state_39391;
var statearr_39400_39431 = state_39391__$1;
(statearr_39400_39431[(2)] = null);

(statearr_39400_39431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39392 === (6))){
var inst_39356 = (state_39391[(9)]);
var inst_39377 = (inst_39356 > (0));
var state_39391__$1 = state_39391;
if(cljs.core.truth_(inst_39377)){
var statearr_39401_39432 = state_39391__$1;
(statearr_39401_39432[(1)] = (12));

} else {
var statearr_39402_39433 = state_39391__$1;
(statearr_39402_39433[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39392 === (3))){
var inst_39389 = (state_39391[(2)]);
var state_39391__$1 = state_39391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39391__$1,inst_39389);
} else {
if((state_val_39392 === (12))){
var inst_39355 = (state_39391[(7)]);
var inst_39379 = cljs.core.vec.call(null,inst_39355);
var state_39391__$1 = state_39391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39391__$1,(15),out,inst_39379);
} else {
if((state_val_39392 === (2))){
var state_39391__$1 = state_39391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39391__$1,(4),ch);
} else {
if((state_val_39392 === (11))){
var inst_39371 = (state_39391[(2)]);
var inst_39372 = (new Array(n));
var inst_39355 = inst_39372;
var inst_39356 = (0);
var state_39391__$1 = (function (){var statearr_39403 = state_39391;
(statearr_39403[(10)] = inst_39371);

(statearr_39403[(7)] = inst_39355);

(statearr_39403[(9)] = inst_39356);

return statearr_39403;
})();
var statearr_39404_39434 = state_39391__$1;
(statearr_39404_39434[(2)] = null);

(statearr_39404_39434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39392 === (9))){
var inst_39355 = (state_39391[(7)]);
var inst_39369 = cljs.core.vec.call(null,inst_39355);
var state_39391__$1 = state_39391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39391__$1,(11),out,inst_39369);
} else {
if((state_val_39392 === (5))){
var inst_39359 = (state_39391[(8)]);
var inst_39364 = (state_39391[(11)]);
var inst_39355 = (state_39391[(7)]);
var inst_39356 = (state_39391[(9)]);
var inst_39363 = (inst_39355[inst_39356] = inst_39359);
var inst_39364__$1 = (inst_39356 + (1));
var inst_39365 = (inst_39364__$1 < n);
var state_39391__$1 = (function (){var statearr_39405 = state_39391;
(statearr_39405[(11)] = inst_39364__$1);

(statearr_39405[(13)] = inst_39363);

return statearr_39405;
})();
if(cljs.core.truth_(inst_39365)){
var statearr_39406_39435 = state_39391__$1;
(statearr_39406_39435[(1)] = (8));

} else {
var statearr_39407_39436 = state_39391__$1;
(statearr_39407_39436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39392 === (14))){
var inst_39384 = (state_39391[(2)]);
var inst_39385 = cljs.core.async.close_BANG_.call(null,out);
var state_39391__$1 = (function (){var statearr_39409 = state_39391;
(statearr_39409[(12)] = inst_39384);

return statearr_39409;
})();
var statearr_39410_39437 = state_39391__$1;
(statearr_39410_39437[(2)] = inst_39385);

(statearr_39410_39437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39392 === (10))){
var inst_39375 = (state_39391[(2)]);
var state_39391__$1 = state_39391;
var statearr_39411_39438 = state_39391__$1;
(statearr_39411_39438[(2)] = inst_39375);

(statearr_39411_39438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39392 === (8))){
var inst_39364 = (state_39391[(11)]);
var inst_39355 = (state_39391[(7)]);
var tmp39408 = inst_39355;
var inst_39355__$1 = tmp39408;
var inst_39356 = inst_39364;
var state_39391__$1 = (function (){var statearr_39412 = state_39391;
(statearr_39412[(7)] = inst_39355__$1);

(statearr_39412[(9)] = inst_39356);

return statearr_39412;
})();
var statearr_39413_39439 = state_39391__$1;
(statearr_39413_39439[(2)] = null);

(statearr_39413_39439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20431__auto___39425,out))
;
return ((function (switch__20366__auto__,c__20431__auto___39425,out){
return (function() {
var cljs$core$async$state_machine__20367__auto__ = null;
var cljs$core$async$state_machine__20367__auto____0 = (function (){
var statearr_39417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39417[(0)] = cljs$core$async$state_machine__20367__auto__);

(statearr_39417[(1)] = (1));

return statearr_39417;
});
var cljs$core$async$state_machine__20367__auto____1 = (function (state_39391){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_39391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e39418){if((e39418 instanceof Object)){
var ex__20370__auto__ = e39418;
var statearr_39419_39440 = state_39391;
(statearr_39419_39440[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39441 = state_39391;
state_39391 = G__39441;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
cljs$core$async$state_machine__20367__auto__ = function(state_39391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20367__auto____1.call(this,state_39391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20367__auto____0;
cljs$core$async$state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20367__auto____1;
return cljs$core$async$state_machine__20367__auto__;
})()
;})(switch__20366__auto__,c__20431__auto___39425,out))
})();
var state__20433__auto__ = (function (){var statearr_39420 = f__20432__auto__.call(null);
(statearr_39420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto___39425);

return statearr_39420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(c__20431__auto___39425,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args39442 = [];
var len__17521__auto___39516 = arguments.length;
var i__17522__auto___39517 = (0);
while(true){
if((i__17522__auto___39517 < len__17521__auto___39516)){
args39442.push((arguments[i__17522__auto___39517]));

var G__39518 = (i__17522__auto___39517 + (1));
i__17522__auto___39517 = G__39518;
continue;
} else {
}
break;
}

var G__39444 = args39442.length;
switch (G__39444) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39442.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20431__auto___39520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20431__auto___39520,out){
return (function (){
var f__20432__auto__ = (function (){var switch__20366__auto__ = ((function (c__20431__auto___39520,out){
return (function (state_39486){
var state_val_39487 = (state_39486[(1)]);
if((state_val_39487 === (7))){
var inst_39482 = (state_39486[(2)]);
var state_39486__$1 = state_39486;
var statearr_39488_39521 = state_39486__$1;
(statearr_39488_39521[(2)] = inst_39482);

(statearr_39488_39521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (1))){
var inst_39445 = [];
var inst_39446 = inst_39445;
var inst_39447 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39486__$1 = (function (){var statearr_39489 = state_39486;
(statearr_39489[(7)] = inst_39446);

(statearr_39489[(9)] = inst_39447);

return statearr_39489;
})();
var statearr_39490_39522 = state_39486__$1;
(statearr_39490_39522[(2)] = null);

(statearr_39490_39522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (4))){
var inst_39450 = (state_39486[(8)]);
var inst_39450__$1 = (state_39486[(2)]);
var inst_39451 = (inst_39450__$1 == null);
var inst_39452 = cljs.core.not.call(null,inst_39451);
var state_39486__$1 = (function (){var statearr_39491 = state_39486;
(statearr_39491[(8)] = inst_39450__$1);

return statearr_39491;
})();
if(inst_39452){
var statearr_39492_39523 = state_39486__$1;
(statearr_39492_39523[(1)] = (5));

} else {
var statearr_39493_39524 = state_39486__$1;
(statearr_39493_39524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (15))){
var inst_39476 = (state_39486[(2)]);
var state_39486__$1 = state_39486;
var statearr_39494_39525 = state_39486__$1;
(statearr_39494_39525[(2)] = inst_39476);

(statearr_39494_39525[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (13))){
var state_39486__$1 = state_39486;
var statearr_39495_39526 = state_39486__$1;
(statearr_39495_39526[(2)] = null);

(statearr_39495_39526[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (6))){
var inst_39446 = (state_39486[(7)]);
var inst_39471 = inst_39446.length;
var inst_39472 = (inst_39471 > (0));
var state_39486__$1 = state_39486;
if(cljs.core.truth_(inst_39472)){
var statearr_39496_39527 = state_39486__$1;
(statearr_39496_39527[(1)] = (12));

} else {
var statearr_39497_39528 = state_39486__$1;
(statearr_39497_39528[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (3))){
var inst_39484 = (state_39486[(2)]);
var state_39486__$1 = state_39486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39486__$1,inst_39484);
} else {
if((state_val_39487 === (12))){
var inst_39446 = (state_39486[(7)]);
var inst_39474 = cljs.core.vec.call(null,inst_39446);
var state_39486__$1 = state_39486;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39486__$1,(15),out,inst_39474);
} else {
if((state_val_39487 === (2))){
var state_39486__$1 = state_39486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39486__$1,(4),ch);
} else {
if((state_val_39487 === (11))){
var inst_39454 = (state_39486[(10)]);
var inst_39450 = (state_39486[(8)]);
var inst_39464 = (state_39486[(2)]);
var inst_39465 = [];
var inst_39466 = inst_39465.push(inst_39450);
var inst_39446 = inst_39465;
var inst_39447 = inst_39454;
var state_39486__$1 = (function (){var statearr_39498 = state_39486;
(statearr_39498[(7)] = inst_39446);

(statearr_39498[(11)] = inst_39466);

(statearr_39498[(12)] = inst_39464);

(statearr_39498[(9)] = inst_39447);

return statearr_39498;
})();
var statearr_39499_39529 = state_39486__$1;
(statearr_39499_39529[(2)] = null);

(statearr_39499_39529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (9))){
var inst_39446 = (state_39486[(7)]);
var inst_39462 = cljs.core.vec.call(null,inst_39446);
var state_39486__$1 = state_39486;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39486__$1,(11),out,inst_39462);
} else {
if((state_val_39487 === (5))){
var inst_39454 = (state_39486[(10)]);
var inst_39447 = (state_39486[(9)]);
var inst_39450 = (state_39486[(8)]);
var inst_39454__$1 = f.call(null,inst_39450);
var inst_39455 = cljs.core._EQ_.call(null,inst_39454__$1,inst_39447);
var inst_39456 = cljs.core.keyword_identical_QMARK_.call(null,inst_39447,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39457 = (inst_39455) || (inst_39456);
var state_39486__$1 = (function (){var statearr_39500 = state_39486;
(statearr_39500[(10)] = inst_39454__$1);

return statearr_39500;
})();
if(cljs.core.truth_(inst_39457)){
var statearr_39501_39530 = state_39486__$1;
(statearr_39501_39530[(1)] = (8));

} else {
var statearr_39502_39531 = state_39486__$1;
(statearr_39502_39531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (14))){
var inst_39479 = (state_39486[(2)]);
var inst_39480 = cljs.core.async.close_BANG_.call(null,out);
var state_39486__$1 = (function (){var statearr_39504 = state_39486;
(statearr_39504[(13)] = inst_39479);

return statearr_39504;
})();
var statearr_39505_39532 = state_39486__$1;
(statearr_39505_39532[(2)] = inst_39480);

(statearr_39505_39532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (10))){
var inst_39469 = (state_39486[(2)]);
var state_39486__$1 = state_39486;
var statearr_39506_39533 = state_39486__$1;
(statearr_39506_39533[(2)] = inst_39469);

(statearr_39506_39533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (8))){
var inst_39454 = (state_39486[(10)]);
var inst_39446 = (state_39486[(7)]);
var inst_39450 = (state_39486[(8)]);
var inst_39459 = inst_39446.push(inst_39450);
var tmp39503 = inst_39446;
var inst_39446__$1 = tmp39503;
var inst_39447 = inst_39454;
var state_39486__$1 = (function (){var statearr_39507 = state_39486;
(statearr_39507[(14)] = inst_39459);

(statearr_39507[(7)] = inst_39446__$1);

(statearr_39507[(9)] = inst_39447);

return statearr_39507;
})();
var statearr_39508_39534 = state_39486__$1;
(statearr_39508_39534[(2)] = null);

(statearr_39508_39534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20431__auto___39520,out))
;
return ((function (switch__20366__auto__,c__20431__auto___39520,out){
return (function() {
var cljs$core$async$state_machine__20367__auto__ = null;
var cljs$core$async$state_machine__20367__auto____0 = (function (){
var statearr_39512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39512[(0)] = cljs$core$async$state_machine__20367__auto__);

(statearr_39512[(1)] = (1));

return statearr_39512;
});
var cljs$core$async$state_machine__20367__auto____1 = (function (state_39486){
while(true){
var ret_value__20368__auto__ = (function (){try{while(true){
var result__20369__auto__ = switch__20366__auto__.call(null,state_39486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20369__auto__;
}
break;
}
}catch (e39513){if((e39513 instanceof Object)){
var ex__20370__auto__ = e39513;
var statearr_39514_39535 = state_39486;
(statearr_39514_39535[(5)] = ex__20370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39536 = state_39486;
state_39486 = G__39536;
continue;
} else {
return ret_value__20368__auto__;
}
break;
}
});
cljs$core$async$state_machine__20367__auto__ = function(state_39486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20367__auto____1.call(this,state_39486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20367__auto____0;
cljs$core$async$state_machine__20367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20367__auto____1;
return cljs$core$async$state_machine__20367__auto__;
})()
;})(switch__20366__auto__,c__20431__auto___39520,out))
})();
var state__20433__auto__ = (function (){var statearr_39515 = f__20432__auto__.call(null);
(statearr_39515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20431__auto___39520);

return statearr_39515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20433__auto__);
});})(c__20431__auto___39520,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1439049327292