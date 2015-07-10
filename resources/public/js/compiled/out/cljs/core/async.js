// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t25707 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25707 = (function (fn_handler,f,meta25708){
this.fn_handler = fn_handler;
this.f = f;
this.meta25708 = meta25708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25709,meta25708__$1){
var self__ = this;
var _25709__$1 = this;
return (new cljs.core.async.t25707(self__.fn_handler,self__.f,meta25708__$1));
});

cljs.core.async.t25707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25709){
var self__ = this;
var _25709__$1 = this;
return self__.meta25708;
});

cljs.core.async.t25707.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t25707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t25707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta25708","meta25708",126157446,null)], null);
});

cljs.core.async.t25707.cljs$lang$type = true;

cljs.core.async.t25707.cljs$lang$ctorStr = "cljs.core.async/t25707";

cljs.core.async.t25707.cljs$lang$ctorPrWriter = (function (this__16688__auto__,writer__16689__auto__,opt__16690__auto__){
return cljs.core._write.call(null,writer__16689__auto__,"cljs.core.async/t25707");
});

cljs.core.async.__GT_t25707 = (function cljs$core$async$fn_handler_$___GT_t25707(fn_handler__$1,f__$1,meta25708){
return (new cljs.core.async.t25707(fn_handler__$1,f__$1,meta25708));
});

}

return (new cljs.core.async.t25707(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25711 = buff;
if(G__25711){
var bit__16783__auto__ = null;
if(cljs.core.truth_((function (){var or__16109__auto__ = bit__16783__auto__;
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return G__25711.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__25711.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25711);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25711);
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
var G__25713 = arguments.length;
switch (G__25713) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var G__25716 = arguments.length;
switch (G__25716) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25718 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25718);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25718,ret){
return (function (){
return fn1.call(null,val_25718);
});})(val_25718,ret))
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
var G__25720 = arguments.length;
switch (G__25720) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var n__16994__auto___25722 = n;
var x_25723 = (0);
while(true){
if((x_25723 < n__16994__auto___25722)){
(a[x_25723] = (0));

var G__25724 = (x_25723 + (1));
x_25723 = G__25724;
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

var G__25725 = (i + (1));
i = G__25725;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t25729 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25729 = (function (alt_flag,flag,meta25730){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25730 = meta25730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25731,meta25730__$1){
var self__ = this;
var _25731__$1 = this;
return (new cljs.core.async.t25729(self__.alt_flag,self__.flag,meta25730__$1));
});})(flag))
;

cljs.core.async.t25729.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25731){
var self__ = this;
var _25731__$1 = this;
return self__.meta25730;
});})(flag))
;

cljs.core.async.t25729.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25729.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t25729.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t25729.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25730","meta25730",-1099177559,null)], null);
});})(flag))
;

cljs.core.async.t25729.cljs$lang$type = true;

cljs.core.async.t25729.cljs$lang$ctorStr = "cljs.core.async/t25729";

cljs.core.async.t25729.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16688__auto__,writer__16689__auto__,opt__16690__auto__){
return cljs.core._write.call(null,writer__16689__auto__,"cljs.core.async/t25729");
});})(flag))
;

cljs.core.async.__GT_t25729 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t25729(alt_flag__$1,flag__$1,meta25730){
return (new cljs.core.async.t25729(alt_flag__$1,flag__$1,meta25730));
});})(flag))
;

}

return (new cljs.core.async.t25729(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t25735 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25735 = (function (alt_handler,flag,cb,meta25736){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25736 = meta25736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25737,meta25736__$1){
var self__ = this;
var _25737__$1 = this;
return (new cljs.core.async.t25735(self__.alt_handler,self__.flag,self__.cb,meta25736__$1));
});

cljs.core.async.t25735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25737){
var self__ = this;
var _25737__$1 = this;
return self__.meta25736;
});

cljs.core.async.t25735.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25735.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t25735.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t25735.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25736","meta25736",-2111894359,null)], null);
});

cljs.core.async.t25735.cljs$lang$type = true;

cljs.core.async.t25735.cljs$lang$ctorStr = "cljs.core.async/t25735";

cljs.core.async.t25735.cljs$lang$ctorPrWriter = (function (this__16688__auto__,writer__16689__auto__,opt__16690__auto__){
return cljs.core._write.call(null,writer__16689__auto__,"cljs.core.async/t25735");
});

cljs.core.async.__GT_t25735 = (function cljs$core$async$alt_handler_$___GT_t25735(alt_handler__$1,flag__$1,cb__$1,meta25736){
return (new cljs.core.async.t25735(alt_handler__$1,flag__$1,cb__$1,meta25736));
});

}

return (new cljs.core.async.t25735(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25738_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25738_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25739_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25739_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16109__auto__ = wport;
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25740 = (i + (1));
i = G__25740;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16109__auto__ = ret;
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16097__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16097__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16097__auto__;
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
var argseq__17149__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17149__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25743){
var map__25744 = p__25743;
var map__25744__$1 = ((cljs.core.seq_QMARK_.call(null,map__25744))?cljs.core.apply.call(null,cljs.core.hash_map,map__25744):map__25744);
var opts = map__25744__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25741){
var G__25742 = cljs.core.first.call(null,seq25741);
var seq25741__$1 = cljs.core.next.call(null,seq25741);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25742,seq25741__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__25746 = arguments.length;
switch (G__25746) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19453__auto___25795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto___25795){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (c__19453__auto___25795){
return (function (state_25770){
var state_val_25771 = (state_25770[(1)]);
if((state_val_25771 === (7))){
var inst_25766 = (state_25770[(2)]);
var state_25770__$1 = state_25770;
var statearr_25772_25796 = state_25770__$1;
(statearr_25772_25796[(2)] = inst_25766);

(statearr_25772_25796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25771 === (1))){
var state_25770__$1 = state_25770;
var statearr_25773_25797 = state_25770__$1;
(statearr_25773_25797[(2)] = null);

(statearr_25773_25797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25771 === (4))){
var inst_25749 = (state_25770[(7)]);
var inst_25749__$1 = (state_25770[(2)]);
var inst_25750 = (inst_25749__$1 == null);
var state_25770__$1 = (function (){var statearr_25774 = state_25770;
(statearr_25774[(7)] = inst_25749__$1);

return statearr_25774;
})();
if(cljs.core.truth_(inst_25750)){
var statearr_25775_25798 = state_25770__$1;
(statearr_25775_25798[(1)] = (5));

} else {
var statearr_25776_25799 = state_25770__$1;
(statearr_25776_25799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25771 === (13))){
var state_25770__$1 = state_25770;
var statearr_25777_25800 = state_25770__$1;
(statearr_25777_25800[(2)] = null);

(statearr_25777_25800[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25771 === (6))){
var inst_25749 = (state_25770[(7)]);
var state_25770__$1 = state_25770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25770__$1,(11),to,inst_25749);
} else {
if((state_val_25771 === (3))){
var inst_25768 = (state_25770[(2)]);
var state_25770__$1 = state_25770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25770__$1,inst_25768);
} else {
if((state_val_25771 === (12))){
var state_25770__$1 = state_25770;
var statearr_25778_25801 = state_25770__$1;
(statearr_25778_25801[(2)] = null);

(statearr_25778_25801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25771 === (2))){
var state_25770__$1 = state_25770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25770__$1,(4),from);
} else {
if((state_val_25771 === (11))){
var inst_25759 = (state_25770[(2)]);
var state_25770__$1 = state_25770;
if(cljs.core.truth_(inst_25759)){
var statearr_25779_25802 = state_25770__$1;
(statearr_25779_25802[(1)] = (12));

} else {
var statearr_25780_25803 = state_25770__$1;
(statearr_25780_25803[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25771 === (9))){
var state_25770__$1 = state_25770;
var statearr_25781_25804 = state_25770__$1;
(statearr_25781_25804[(2)] = null);

(statearr_25781_25804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25771 === (5))){
var state_25770__$1 = state_25770;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25782_25805 = state_25770__$1;
(statearr_25782_25805[(1)] = (8));

} else {
var statearr_25783_25806 = state_25770__$1;
(statearr_25783_25806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25771 === (14))){
var inst_25764 = (state_25770[(2)]);
var state_25770__$1 = state_25770;
var statearr_25784_25807 = state_25770__$1;
(statearr_25784_25807[(2)] = inst_25764);

(statearr_25784_25807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25771 === (10))){
var inst_25756 = (state_25770[(2)]);
var state_25770__$1 = state_25770;
var statearr_25785_25808 = state_25770__$1;
(statearr_25785_25808[(2)] = inst_25756);

(statearr_25785_25808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25771 === (8))){
var inst_25753 = cljs.core.async.close_BANG_.call(null,to);
var state_25770__$1 = state_25770;
var statearr_25786_25809 = state_25770__$1;
(statearr_25786_25809[(2)] = inst_25753);

(statearr_25786_25809[(1)] = (10));


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
});})(c__19453__auto___25795))
;
return ((function (switch__19391__auto__,c__19453__auto___25795){
return (function() {
var cljs$core$async$state_machine__19392__auto__ = null;
var cljs$core$async$state_machine__19392__auto____0 = (function (){
var statearr_25790 = [null,null,null,null,null,null,null,null];
(statearr_25790[(0)] = cljs$core$async$state_machine__19392__auto__);

(statearr_25790[(1)] = (1));

return statearr_25790;
});
var cljs$core$async$state_machine__19392__auto____1 = (function (state_25770){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_25770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e25791){if((e25791 instanceof Object)){
var ex__19395__auto__ = e25791;
var statearr_25792_25810 = state_25770;
(statearr_25792_25810[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25811 = state_25770;
state_25770 = G__25811;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
cljs$core$async$state_machine__19392__auto__ = function(state_25770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19392__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19392__auto____1.call(this,state_25770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19392__auto____0;
cljs$core$async$state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19392__auto____1;
return cljs$core$async$state_machine__19392__auto__;
})()
;})(switch__19391__auto__,c__19453__auto___25795))
})();
var state__19455__auto__ = (function (){var statearr_25793 = f__19454__auto__.call(null);
(statearr_25793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto___25795);

return statearr_25793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto___25795))
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
return (function (p__25995){
var vec__25996 = p__25995;
var v = cljs.core.nth.call(null,vec__25996,(0),null);
var p = cljs.core.nth.call(null,vec__25996,(1),null);
var job = vec__25996;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19453__auto___26178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto___26178,res,vec__25996,v,p,job,jobs,results){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (c__19453__auto___26178,res,vec__25996,v,p,job,jobs,results){
return (function (state_26001){
var state_val_26002 = (state_26001[(1)]);
if((state_val_26002 === (1))){
var state_26001__$1 = state_26001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26001__$1,(2),res,v);
} else {
if((state_val_26002 === (2))){
var inst_25998 = (state_26001[(2)]);
var inst_25999 = cljs.core.async.close_BANG_.call(null,res);
var state_26001__$1 = (function (){var statearr_26003 = state_26001;
(statearr_26003[(7)] = inst_25998);

return statearr_26003;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26001__$1,inst_25999);
} else {
return null;
}
}
});})(c__19453__auto___26178,res,vec__25996,v,p,job,jobs,results))
;
return ((function (switch__19391__auto__,c__19453__auto___26178,res,vec__25996,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____0 = (function (){
var statearr_26007 = [null,null,null,null,null,null,null,null];
(statearr_26007[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__);

(statearr_26007[(1)] = (1));

return statearr_26007;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____1 = (function (state_26001){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_26001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e26008){if((e26008 instanceof Object)){
var ex__19395__auto__ = e26008;
var statearr_26009_26179 = state_26001;
(statearr_26009_26179[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26180 = state_26001;
state_26001 = G__26180;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__ = function(state_26001){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____1.call(this,state_26001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__;
})()
;})(switch__19391__auto__,c__19453__auto___26178,res,vec__25996,v,p,job,jobs,results))
})();
var state__19455__auto__ = (function (){var statearr_26010 = f__19454__auto__.call(null);
(statearr_26010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto___26178);

return statearr_26010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto___26178,res,vec__25996,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26011){
var vec__26012 = p__26011;
var v = cljs.core.nth.call(null,vec__26012,(0),null);
var p = cljs.core.nth.call(null,vec__26012,(1),null);
var job = vec__26012;
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
var n__16994__auto___26181 = n;
var __26182 = (0);
while(true){
if((__26182 < n__16994__auto___26181)){
var G__26013_26183 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26013_26183) {
case "compute":
var c__19453__auto___26185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26182,c__19453__auto___26185,G__26013_26183,n__16994__auto___26181,jobs,results,process,async){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (__26182,c__19453__auto___26185,G__26013_26183,n__16994__auto___26181,jobs,results,process,async){
return (function (state_26026){
var state_val_26027 = (state_26026[(1)]);
if((state_val_26027 === (1))){
var state_26026__$1 = state_26026;
var statearr_26028_26186 = state_26026__$1;
(statearr_26028_26186[(2)] = null);

(statearr_26028_26186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (2))){
var state_26026__$1 = state_26026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26026__$1,(4),jobs);
} else {
if((state_val_26027 === (3))){
var inst_26024 = (state_26026[(2)]);
var state_26026__$1 = state_26026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26026__$1,inst_26024);
} else {
if((state_val_26027 === (4))){
var inst_26016 = (state_26026[(2)]);
var inst_26017 = process.call(null,inst_26016);
var state_26026__$1 = state_26026;
if(cljs.core.truth_(inst_26017)){
var statearr_26029_26187 = state_26026__$1;
(statearr_26029_26187[(1)] = (5));

} else {
var statearr_26030_26188 = state_26026__$1;
(statearr_26030_26188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (5))){
var state_26026__$1 = state_26026;
var statearr_26031_26189 = state_26026__$1;
(statearr_26031_26189[(2)] = null);

(statearr_26031_26189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (6))){
var state_26026__$1 = state_26026;
var statearr_26032_26190 = state_26026__$1;
(statearr_26032_26190[(2)] = null);

(statearr_26032_26190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (7))){
var inst_26022 = (state_26026[(2)]);
var state_26026__$1 = state_26026;
var statearr_26033_26191 = state_26026__$1;
(statearr_26033_26191[(2)] = inst_26022);

(statearr_26033_26191[(1)] = (3));


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
});})(__26182,c__19453__auto___26185,G__26013_26183,n__16994__auto___26181,jobs,results,process,async))
;
return ((function (__26182,switch__19391__auto__,c__19453__auto___26185,G__26013_26183,n__16994__auto___26181,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____0 = (function (){
var statearr_26037 = [null,null,null,null,null,null,null];
(statearr_26037[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__);

(statearr_26037[(1)] = (1));

return statearr_26037;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____1 = (function (state_26026){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_26026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e26038){if((e26038 instanceof Object)){
var ex__19395__auto__ = e26038;
var statearr_26039_26192 = state_26026;
(statearr_26039_26192[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26193 = state_26026;
state_26026 = G__26193;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__ = function(state_26026){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____1.call(this,state_26026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__;
})()
;})(__26182,switch__19391__auto__,c__19453__auto___26185,G__26013_26183,n__16994__auto___26181,jobs,results,process,async))
})();
var state__19455__auto__ = (function (){var statearr_26040 = f__19454__auto__.call(null);
(statearr_26040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto___26185);

return statearr_26040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(__26182,c__19453__auto___26185,G__26013_26183,n__16994__auto___26181,jobs,results,process,async))
);


break;
case "async":
var c__19453__auto___26194 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26182,c__19453__auto___26194,G__26013_26183,n__16994__auto___26181,jobs,results,process,async){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (__26182,c__19453__auto___26194,G__26013_26183,n__16994__auto___26181,jobs,results,process,async){
return (function (state_26053){
var state_val_26054 = (state_26053[(1)]);
if((state_val_26054 === (1))){
var state_26053__$1 = state_26053;
var statearr_26055_26195 = state_26053__$1;
(statearr_26055_26195[(2)] = null);

(statearr_26055_26195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (2))){
var state_26053__$1 = state_26053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26053__$1,(4),jobs);
} else {
if((state_val_26054 === (3))){
var inst_26051 = (state_26053[(2)]);
var state_26053__$1 = state_26053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26053__$1,inst_26051);
} else {
if((state_val_26054 === (4))){
var inst_26043 = (state_26053[(2)]);
var inst_26044 = async.call(null,inst_26043);
var state_26053__$1 = state_26053;
if(cljs.core.truth_(inst_26044)){
var statearr_26056_26196 = state_26053__$1;
(statearr_26056_26196[(1)] = (5));

} else {
var statearr_26057_26197 = state_26053__$1;
(statearr_26057_26197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (5))){
var state_26053__$1 = state_26053;
var statearr_26058_26198 = state_26053__$1;
(statearr_26058_26198[(2)] = null);

(statearr_26058_26198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (6))){
var state_26053__$1 = state_26053;
var statearr_26059_26199 = state_26053__$1;
(statearr_26059_26199[(2)] = null);

(statearr_26059_26199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (7))){
var inst_26049 = (state_26053[(2)]);
var state_26053__$1 = state_26053;
var statearr_26060_26200 = state_26053__$1;
(statearr_26060_26200[(2)] = inst_26049);

(statearr_26060_26200[(1)] = (3));


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
});})(__26182,c__19453__auto___26194,G__26013_26183,n__16994__auto___26181,jobs,results,process,async))
;
return ((function (__26182,switch__19391__auto__,c__19453__auto___26194,G__26013_26183,n__16994__auto___26181,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____0 = (function (){
var statearr_26064 = [null,null,null,null,null,null,null];
(statearr_26064[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__);

(statearr_26064[(1)] = (1));

return statearr_26064;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____1 = (function (state_26053){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_26053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e26065){if((e26065 instanceof Object)){
var ex__19395__auto__ = e26065;
var statearr_26066_26201 = state_26053;
(statearr_26066_26201[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26202 = state_26053;
state_26053 = G__26202;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__ = function(state_26053){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____1.call(this,state_26053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__;
})()
;})(__26182,switch__19391__auto__,c__19453__auto___26194,G__26013_26183,n__16994__auto___26181,jobs,results,process,async))
})();
var state__19455__auto__ = (function (){var statearr_26067 = f__19454__auto__.call(null);
(statearr_26067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto___26194);

return statearr_26067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(__26182,c__19453__auto___26194,G__26013_26183,n__16994__auto___26181,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26203 = (__26182 + (1));
__26182 = G__26203;
continue;
} else {
}
break;
}

var c__19453__auto___26204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto___26204,jobs,results,process,async){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (c__19453__auto___26204,jobs,results,process,async){
return (function (state_26089){
var state_val_26090 = (state_26089[(1)]);
if((state_val_26090 === (1))){
var state_26089__$1 = state_26089;
var statearr_26091_26205 = state_26089__$1;
(statearr_26091_26205[(2)] = null);

(statearr_26091_26205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (2))){
var state_26089__$1 = state_26089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26089__$1,(4),from);
} else {
if((state_val_26090 === (3))){
var inst_26087 = (state_26089[(2)]);
var state_26089__$1 = state_26089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26089__$1,inst_26087);
} else {
if((state_val_26090 === (4))){
var inst_26070 = (state_26089[(7)]);
var inst_26070__$1 = (state_26089[(2)]);
var inst_26071 = (inst_26070__$1 == null);
var state_26089__$1 = (function (){var statearr_26092 = state_26089;
(statearr_26092[(7)] = inst_26070__$1);

return statearr_26092;
})();
if(cljs.core.truth_(inst_26071)){
var statearr_26093_26206 = state_26089__$1;
(statearr_26093_26206[(1)] = (5));

} else {
var statearr_26094_26207 = state_26089__$1;
(statearr_26094_26207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (5))){
var inst_26073 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26089__$1 = state_26089;
var statearr_26095_26208 = state_26089__$1;
(statearr_26095_26208[(2)] = inst_26073);

(statearr_26095_26208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (6))){
var inst_26070 = (state_26089[(7)]);
var inst_26075 = (state_26089[(8)]);
var inst_26075__$1 = cljs.core.async.chan.call(null,(1));
var inst_26076 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26077 = [inst_26070,inst_26075__$1];
var inst_26078 = (new cljs.core.PersistentVector(null,2,(5),inst_26076,inst_26077,null));
var state_26089__$1 = (function (){var statearr_26096 = state_26089;
(statearr_26096[(8)] = inst_26075__$1);

return statearr_26096;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26089__$1,(8),jobs,inst_26078);
} else {
if((state_val_26090 === (7))){
var inst_26085 = (state_26089[(2)]);
var state_26089__$1 = state_26089;
var statearr_26097_26209 = state_26089__$1;
(statearr_26097_26209[(2)] = inst_26085);

(statearr_26097_26209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (8))){
var inst_26075 = (state_26089[(8)]);
var inst_26080 = (state_26089[(2)]);
var state_26089__$1 = (function (){var statearr_26098 = state_26089;
(statearr_26098[(9)] = inst_26080);

return statearr_26098;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26089__$1,(9),results,inst_26075);
} else {
if((state_val_26090 === (9))){
var inst_26082 = (state_26089[(2)]);
var state_26089__$1 = (function (){var statearr_26099 = state_26089;
(statearr_26099[(10)] = inst_26082);

return statearr_26099;
})();
var statearr_26100_26210 = state_26089__$1;
(statearr_26100_26210[(2)] = null);

(statearr_26100_26210[(1)] = (2));


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
});})(c__19453__auto___26204,jobs,results,process,async))
;
return ((function (switch__19391__auto__,c__19453__auto___26204,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____0 = (function (){
var statearr_26104 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26104[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__);

(statearr_26104[(1)] = (1));

return statearr_26104;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____1 = (function (state_26089){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_26089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e26105){if((e26105 instanceof Object)){
var ex__19395__auto__ = e26105;
var statearr_26106_26211 = state_26089;
(statearr_26106_26211[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26212 = state_26089;
state_26089 = G__26212;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__ = function(state_26089){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____1.call(this,state_26089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__;
})()
;})(switch__19391__auto__,c__19453__auto___26204,jobs,results,process,async))
})();
var state__19455__auto__ = (function (){var statearr_26107 = f__19454__auto__.call(null);
(statearr_26107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto___26204);

return statearr_26107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto___26204,jobs,results,process,async))
);


var c__19453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto__,jobs,results,process,async){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (c__19453__auto__,jobs,results,process,async){
return (function (state_26145){
var state_val_26146 = (state_26145[(1)]);
if((state_val_26146 === (7))){
var inst_26141 = (state_26145[(2)]);
var state_26145__$1 = state_26145;
var statearr_26147_26213 = state_26145__$1;
(statearr_26147_26213[(2)] = inst_26141);

(statearr_26147_26213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (20))){
var state_26145__$1 = state_26145;
var statearr_26148_26214 = state_26145__$1;
(statearr_26148_26214[(2)] = null);

(statearr_26148_26214[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (1))){
var state_26145__$1 = state_26145;
var statearr_26149_26215 = state_26145__$1;
(statearr_26149_26215[(2)] = null);

(statearr_26149_26215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (4))){
var inst_26110 = (state_26145[(7)]);
var inst_26110__$1 = (state_26145[(2)]);
var inst_26111 = (inst_26110__$1 == null);
var state_26145__$1 = (function (){var statearr_26150 = state_26145;
(statearr_26150[(7)] = inst_26110__$1);

return statearr_26150;
})();
if(cljs.core.truth_(inst_26111)){
var statearr_26151_26216 = state_26145__$1;
(statearr_26151_26216[(1)] = (5));

} else {
var statearr_26152_26217 = state_26145__$1;
(statearr_26152_26217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (15))){
var inst_26123 = (state_26145[(8)]);
var state_26145__$1 = state_26145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26145__$1,(18),to,inst_26123);
} else {
if((state_val_26146 === (21))){
var inst_26136 = (state_26145[(2)]);
var state_26145__$1 = state_26145;
var statearr_26153_26218 = state_26145__$1;
(statearr_26153_26218[(2)] = inst_26136);

(statearr_26153_26218[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (13))){
var inst_26138 = (state_26145[(2)]);
var state_26145__$1 = (function (){var statearr_26154 = state_26145;
(statearr_26154[(9)] = inst_26138);

return statearr_26154;
})();
var statearr_26155_26219 = state_26145__$1;
(statearr_26155_26219[(2)] = null);

(statearr_26155_26219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (6))){
var inst_26110 = (state_26145[(7)]);
var state_26145__$1 = state_26145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26145__$1,(11),inst_26110);
} else {
if((state_val_26146 === (17))){
var inst_26131 = (state_26145[(2)]);
var state_26145__$1 = state_26145;
if(cljs.core.truth_(inst_26131)){
var statearr_26156_26220 = state_26145__$1;
(statearr_26156_26220[(1)] = (19));

} else {
var statearr_26157_26221 = state_26145__$1;
(statearr_26157_26221[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (3))){
var inst_26143 = (state_26145[(2)]);
var state_26145__$1 = state_26145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26145__$1,inst_26143);
} else {
if((state_val_26146 === (12))){
var inst_26120 = (state_26145[(10)]);
var state_26145__$1 = state_26145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26145__$1,(14),inst_26120);
} else {
if((state_val_26146 === (2))){
var state_26145__$1 = state_26145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26145__$1,(4),results);
} else {
if((state_val_26146 === (19))){
var state_26145__$1 = state_26145;
var statearr_26158_26222 = state_26145__$1;
(statearr_26158_26222[(2)] = null);

(statearr_26158_26222[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (11))){
var inst_26120 = (state_26145[(2)]);
var state_26145__$1 = (function (){var statearr_26159 = state_26145;
(statearr_26159[(10)] = inst_26120);

return statearr_26159;
})();
var statearr_26160_26223 = state_26145__$1;
(statearr_26160_26223[(2)] = null);

(statearr_26160_26223[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (9))){
var state_26145__$1 = state_26145;
var statearr_26161_26224 = state_26145__$1;
(statearr_26161_26224[(2)] = null);

(statearr_26161_26224[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (5))){
var state_26145__$1 = state_26145;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26162_26225 = state_26145__$1;
(statearr_26162_26225[(1)] = (8));

} else {
var statearr_26163_26226 = state_26145__$1;
(statearr_26163_26226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (14))){
var inst_26123 = (state_26145[(8)]);
var inst_26125 = (state_26145[(11)]);
var inst_26123__$1 = (state_26145[(2)]);
var inst_26124 = (inst_26123__$1 == null);
var inst_26125__$1 = cljs.core.not.call(null,inst_26124);
var state_26145__$1 = (function (){var statearr_26164 = state_26145;
(statearr_26164[(8)] = inst_26123__$1);

(statearr_26164[(11)] = inst_26125__$1);

return statearr_26164;
})();
if(inst_26125__$1){
var statearr_26165_26227 = state_26145__$1;
(statearr_26165_26227[(1)] = (15));

} else {
var statearr_26166_26228 = state_26145__$1;
(statearr_26166_26228[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (16))){
var inst_26125 = (state_26145[(11)]);
var state_26145__$1 = state_26145;
var statearr_26167_26229 = state_26145__$1;
(statearr_26167_26229[(2)] = inst_26125);

(statearr_26167_26229[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (10))){
var inst_26117 = (state_26145[(2)]);
var state_26145__$1 = state_26145;
var statearr_26168_26230 = state_26145__$1;
(statearr_26168_26230[(2)] = inst_26117);

(statearr_26168_26230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (18))){
var inst_26128 = (state_26145[(2)]);
var state_26145__$1 = state_26145;
var statearr_26169_26231 = state_26145__$1;
(statearr_26169_26231[(2)] = inst_26128);

(statearr_26169_26231[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (8))){
var inst_26114 = cljs.core.async.close_BANG_.call(null,to);
var state_26145__$1 = state_26145;
var statearr_26170_26232 = state_26145__$1;
(statearr_26170_26232[(2)] = inst_26114);

(statearr_26170_26232[(1)] = (10));


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
});})(c__19453__auto__,jobs,results,process,async))
;
return ((function (switch__19391__auto__,c__19453__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____0 = (function (){
var statearr_26174 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26174[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__);

(statearr_26174[(1)] = (1));

return statearr_26174;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____1 = (function (state_26145){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_26145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e26175){if((e26175 instanceof Object)){
var ex__19395__auto__ = e26175;
var statearr_26176_26233 = state_26145;
(statearr_26176_26233[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26234 = state_26145;
state_26145 = G__26234;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__ = function(state_26145){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____1.call(this,state_26145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19392__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19392__auto__;
})()
;})(switch__19391__auto__,c__19453__auto__,jobs,results,process,async))
})();
var state__19455__auto__ = (function (){var statearr_26177 = f__19454__auto__.call(null);
(statearr_26177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto__);

return statearr_26177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto__,jobs,results,process,async))
);

return c__19453__auto__;
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
var G__26236 = arguments.length;
switch (G__26236) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var G__26239 = arguments.length;
switch (G__26239) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var G__26242 = arguments.length;
switch (G__26242) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19453__auto___26294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto___26294,tc,fc){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (c__19453__auto___26294,tc,fc){
return (function (state_26268){
var state_val_26269 = (state_26268[(1)]);
if((state_val_26269 === (7))){
var inst_26264 = (state_26268[(2)]);
var state_26268__$1 = state_26268;
var statearr_26270_26295 = state_26268__$1;
(statearr_26270_26295[(2)] = inst_26264);

(statearr_26270_26295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (1))){
var state_26268__$1 = state_26268;
var statearr_26271_26296 = state_26268__$1;
(statearr_26271_26296[(2)] = null);

(statearr_26271_26296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (4))){
var inst_26245 = (state_26268[(7)]);
var inst_26245__$1 = (state_26268[(2)]);
var inst_26246 = (inst_26245__$1 == null);
var state_26268__$1 = (function (){var statearr_26272 = state_26268;
(statearr_26272[(7)] = inst_26245__$1);

return statearr_26272;
})();
if(cljs.core.truth_(inst_26246)){
var statearr_26273_26297 = state_26268__$1;
(statearr_26273_26297[(1)] = (5));

} else {
var statearr_26274_26298 = state_26268__$1;
(statearr_26274_26298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (13))){
var state_26268__$1 = state_26268;
var statearr_26275_26299 = state_26268__$1;
(statearr_26275_26299[(2)] = null);

(statearr_26275_26299[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (6))){
var inst_26245 = (state_26268[(7)]);
var inst_26251 = p.call(null,inst_26245);
var state_26268__$1 = state_26268;
if(cljs.core.truth_(inst_26251)){
var statearr_26276_26300 = state_26268__$1;
(statearr_26276_26300[(1)] = (9));

} else {
var statearr_26277_26301 = state_26268__$1;
(statearr_26277_26301[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (3))){
var inst_26266 = (state_26268[(2)]);
var state_26268__$1 = state_26268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26268__$1,inst_26266);
} else {
if((state_val_26269 === (12))){
var state_26268__$1 = state_26268;
var statearr_26278_26302 = state_26268__$1;
(statearr_26278_26302[(2)] = null);

(statearr_26278_26302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (2))){
var state_26268__$1 = state_26268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26268__$1,(4),ch);
} else {
if((state_val_26269 === (11))){
var inst_26245 = (state_26268[(7)]);
var inst_26255 = (state_26268[(2)]);
var state_26268__$1 = state_26268;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26268__$1,(8),inst_26255,inst_26245);
} else {
if((state_val_26269 === (9))){
var state_26268__$1 = state_26268;
var statearr_26279_26303 = state_26268__$1;
(statearr_26279_26303[(2)] = tc);

(statearr_26279_26303[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (5))){
var inst_26248 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26249 = cljs.core.async.close_BANG_.call(null,fc);
var state_26268__$1 = (function (){var statearr_26280 = state_26268;
(statearr_26280[(8)] = inst_26248);

return statearr_26280;
})();
var statearr_26281_26304 = state_26268__$1;
(statearr_26281_26304[(2)] = inst_26249);

(statearr_26281_26304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (14))){
var inst_26262 = (state_26268[(2)]);
var state_26268__$1 = state_26268;
var statearr_26282_26305 = state_26268__$1;
(statearr_26282_26305[(2)] = inst_26262);

(statearr_26282_26305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (10))){
var state_26268__$1 = state_26268;
var statearr_26283_26306 = state_26268__$1;
(statearr_26283_26306[(2)] = fc);

(statearr_26283_26306[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (8))){
var inst_26257 = (state_26268[(2)]);
var state_26268__$1 = state_26268;
if(cljs.core.truth_(inst_26257)){
var statearr_26284_26307 = state_26268__$1;
(statearr_26284_26307[(1)] = (12));

} else {
var statearr_26285_26308 = state_26268__$1;
(statearr_26285_26308[(1)] = (13));

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
});})(c__19453__auto___26294,tc,fc))
;
return ((function (switch__19391__auto__,c__19453__auto___26294,tc,fc){
return (function() {
var cljs$core$async$state_machine__19392__auto__ = null;
var cljs$core$async$state_machine__19392__auto____0 = (function (){
var statearr_26289 = [null,null,null,null,null,null,null,null,null];
(statearr_26289[(0)] = cljs$core$async$state_machine__19392__auto__);

(statearr_26289[(1)] = (1));

return statearr_26289;
});
var cljs$core$async$state_machine__19392__auto____1 = (function (state_26268){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_26268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e26290){if((e26290 instanceof Object)){
var ex__19395__auto__ = e26290;
var statearr_26291_26309 = state_26268;
(statearr_26291_26309[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26310 = state_26268;
state_26268 = G__26310;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
cljs$core$async$state_machine__19392__auto__ = function(state_26268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19392__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19392__auto____1.call(this,state_26268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19392__auto____0;
cljs$core$async$state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19392__auto____1;
return cljs$core$async$state_machine__19392__auto__;
})()
;})(switch__19391__auto__,c__19453__auto___26294,tc,fc))
})();
var state__19455__auto__ = (function (){var statearr_26292 = f__19454__auto__.call(null);
(statearr_26292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto___26294);

return statearr_26292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto___26294,tc,fc))
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
var c__19453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto__){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (c__19453__auto__){
return (function (state_26357){
var state_val_26358 = (state_26357[(1)]);
if((state_val_26358 === (1))){
var inst_26343 = init;
var state_26357__$1 = (function (){var statearr_26359 = state_26357;
(statearr_26359[(7)] = inst_26343);

return statearr_26359;
})();
var statearr_26360_26375 = state_26357__$1;
(statearr_26360_26375[(2)] = null);

(statearr_26360_26375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26358 === (2))){
var state_26357__$1 = state_26357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26357__$1,(4),ch);
} else {
if((state_val_26358 === (3))){
var inst_26355 = (state_26357[(2)]);
var state_26357__$1 = state_26357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26357__$1,inst_26355);
} else {
if((state_val_26358 === (4))){
var inst_26346 = (state_26357[(8)]);
var inst_26346__$1 = (state_26357[(2)]);
var inst_26347 = (inst_26346__$1 == null);
var state_26357__$1 = (function (){var statearr_26361 = state_26357;
(statearr_26361[(8)] = inst_26346__$1);

return statearr_26361;
})();
if(cljs.core.truth_(inst_26347)){
var statearr_26362_26376 = state_26357__$1;
(statearr_26362_26376[(1)] = (5));

} else {
var statearr_26363_26377 = state_26357__$1;
(statearr_26363_26377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26358 === (5))){
var inst_26343 = (state_26357[(7)]);
var state_26357__$1 = state_26357;
var statearr_26364_26378 = state_26357__$1;
(statearr_26364_26378[(2)] = inst_26343);

(statearr_26364_26378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26358 === (6))){
var inst_26346 = (state_26357[(8)]);
var inst_26343 = (state_26357[(7)]);
var inst_26350 = f.call(null,inst_26343,inst_26346);
var inst_26343__$1 = inst_26350;
var state_26357__$1 = (function (){var statearr_26365 = state_26357;
(statearr_26365[(7)] = inst_26343__$1);

return statearr_26365;
})();
var statearr_26366_26379 = state_26357__$1;
(statearr_26366_26379[(2)] = null);

(statearr_26366_26379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26358 === (7))){
var inst_26353 = (state_26357[(2)]);
var state_26357__$1 = state_26357;
var statearr_26367_26380 = state_26357__$1;
(statearr_26367_26380[(2)] = inst_26353);

(statearr_26367_26380[(1)] = (3));


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
});})(c__19453__auto__))
;
return ((function (switch__19391__auto__,c__19453__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19392__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19392__auto____0 = (function (){
var statearr_26371 = [null,null,null,null,null,null,null,null,null];
(statearr_26371[(0)] = cljs$core$async$reduce_$_state_machine__19392__auto__);

(statearr_26371[(1)] = (1));

return statearr_26371;
});
var cljs$core$async$reduce_$_state_machine__19392__auto____1 = (function (state_26357){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_26357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e26372){if((e26372 instanceof Object)){
var ex__19395__auto__ = e26372;
var statearr_26373_26381 = state_26357;
(statearr_26373_26381[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26382 = state_26357;
state_26357 = G__26382;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19392__auto__ = function(state_26357){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19392__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19392__auto____1.call(this,state_26357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19392__auto____0;
cljs$core$async$reduce_$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19392__auto____1;
return cljs$core$async$reduce_$_state_machine__19392__auto__;
})()
;})(switch__19391__auto__,c__19453__auto__))
})();
var state__19455__auto__ = (function (){var statearr_26374 = f__19454__auto__.call(null);
(statearr_26374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto__);

return statearr_26374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto__))
);

return c__19453__auto__;
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
var G__26384 = arguments.length;
switch (G__26384) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto__){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (c__19453__auto__){
return (function (state_26409){
var state_val_26410 = (state_26409[(1)]);
if((state_val_26410 === (7))){
var inst_26391 = (state_26409[(2)]);
var state_26409__$1 = state_26409;
var statearr_26411_26435 = state_26409__$1;
(statearr_26411_26435[(2)] = inst_26391);

(statearr_26411_26435[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (1))){
var inst_26385 = cljs.core.seq.call(null,coll);
var inst_26386 = inst_26385;
var state_26409__$1 = (function (){var statearr_26412 = state_26409;
(statearr_26412[(7)] = inst_26386);

return statearr_26412;
})();
var statearr_26413_26436 = state_26409__$1;
(statearr_26413_26436[(2)] = null);

(statearr_26413_26436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (4))){
var inst_26386 = (state_26409[(7)]);
var inst_26389 = cljs.core.first.call(null,inst_26386);
var state_26409__$1 = state_26409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26409__$1,(7),ch,inst_26389);
} else {
if((state_val_26410 === (13))){
var inst_26403 = (state_26409[(2)]);
var state_26409__$1 = state_26409;
var statearr_26414_26437 = state_26409__$1;
(statearr_26414_26437[(2)] = inst_26403);

(statearr_26414_26437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (6))){
var inst_26394 = (state_26409[(2)]);
var state_26409__$1 = state_26409;
if(cljs.core.truth_(inst_26394)){
var statearr_26415_26438 = state_26409__$1;
(statearr_26415_26438[(1)] = (8));

} else {
var statearr_26416_26439 = state_26409__$1;
(statearr_26416_26439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (3))){
var inst_26407 = (state_26409[(2)]);
var state_26409__$1 = state_26409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26409__$1,inst_26407);
} else {
if((state_val_26410 === (12))){
var state_26409__$1 = state_26409;
var statearr_26417_26440 = state_26409__$1;
(statearr_26417_26440[(2)] = null);

(statearr_26417_26440[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (2))){
var inst_26386 = (state_26409[(7)]);
var state_26409__$1 = state_26409;
if(cljs.core.truth_(inst_26386)){
var statearr_26418_26441 = state_26409__$1;
(statearr_26418_26441[(1)] = (4));

} else {
var statearr_26419_26442 = state_26409__$1;
(statearr_26419_26442[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (11))){
var inst_26400 = cljs.core.async.close_BANG_.call(null,ch);
var state_26409__$1 = state_26409;
var statearr_26420_26443 = state_26409__$1;
(statearr_26420_26443[(2)] = inst_26400);

(statearr_26420_26443[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (9))){
var state_26409__$1 = state_26409;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26421_26444 = state_26409__$1;
(statearr_26421_26444[(1)] = (11));

} else {
var statearr_26422_26445 = state_26409__$1;
(statearr_26422_26445[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (5))){
var inst_26386 = (state_26409[(7)]);
var state_26409__$1 = state_26409;
var statearr_26423_26446 = state_26409__$1;
(statearr_26423_26446[(2)] = inst_26386);

(statearr_26423_26446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (10))){
var inst_26405 = (state_26409[(2)]);
var state_26409__$1 = state_26409;
var statearr_26424_26447 = state_26409__$1;
(statearr_26424_26447[(2)] = inst_26405);

(statearr_26424_26447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (8))){
var inst_26386 = (state_26409[(7)]);
var inst_26396 = cljs.core.next.call(null,inst_26386);
var inst_26386__$1 = inst_26396;
var state_26409__$1 = (function (){var statearr_26425 = state_26409;
(statearr_26425[(7)] = inst_26386__$1);

return statearr_26425;
})();
var statearr_26426_26448 = state_26409__$1;
(statearr_26426_26448[(2)] = null);

(statearr_26426_26448[(1)] = (2));


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
});})(c__19453__auto__))
;
return ((function (switch__19391__auto__,c__19453__auto__){
return (function() {
var cljs$core$async$state_machine__19392__auto__ = null;
var cljs$core$async$state_machine__19392__auto____0 = (function (){
var statearr_26430 = [null,null,null,null,null,null,null,null];
(statearr_26430[(0)] = cljs$core$async$state_machine__19392__auto__);

(statearr_26430[(1)] = (1));

return statearr_26430;
});
var cljs$core$async$state_machine__19392__auto____1 = (function (state_26409){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_26409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e26431){if((e26431 instanceof Object)){
var ex__19395__auto__ = e26431;
var statearr_26432_26449 = state_26409;
(statearr_26432_26449[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26450 = state_26409;
state_26409 = G__26450;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
cljs$core$async$state_machine__19392__auto__ = function(state_26409){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19392__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19392__auto____1.call(this,state_26409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19392__auto____0;
cljs$core$async$state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19392__auto____1;
return cljs$core$async$state_machine__19392__auto__;
})()
;})(switch__19391__auto__,c__19453__auto__))
})();
var state__19455__auto__ = (function (){var statearr_26433 = f__19454__auto__.call(null);
(statearr_26433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto__);

return statearr_26433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto__))
);

return c__19453__auto__;
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

cljs.core.async.Mux = (function (){var obj26452 = {};
return obj26452;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__16097__auto__ = _;
if(and__16097__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__16097__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16745__auto__ = (((_ == null))?null:_);
return (function (){var or__16109__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16745__auto__)]);
if(or__16109__auto__){
return or__16109__auto__;
} else {
var or__16109__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__16109__auto____$1){
return or__16109__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj26454 = {};
return obj26454;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__16097__auto__ = m;
if(and__16097__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__16097__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16745__auto__ = (((m == null))?null:m);
return (function (){var or__16109__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16745__auto__)]);
if(or__16109__auto__){
return or__16109__auto__;
} else {
var or__16109__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__16109__auto____$1){
return or__16109__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__16097__auto__ = m;
if(and__16097__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__16097__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16745__auto__ = (((m == null))?null:m);
return (function (){var or__16109__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16745__auto__)]);
if(or__16109__auto__){
return or__16109__auto__;
} else {
var or__16109__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__16109__auto____$1){
return or__16109__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__16097__auto__ = m;
if(and__16097__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__16097__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16745__auto__ = (((m == null))?null:m);
return (function (){var or__16109__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16745__auto__)]);
if(or__16109__auto__){
return or__16109__auto__;
} else {
var or__16109__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__16109__auto____$1){
return or__16109__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
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
if(typeof cljs.core.async.t26676 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26676 = (function (mult,ch,cs,meta26677){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26677 = meta26677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26678,meta26677__$1){
var self__ = this;
var _26678__$1 = this;
return (new cljs.core.async.t26676(self__.mult,self__.ch,self__.cs,meta26677__$1));
});})(cs))
;

cljs.core.async.t26676.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26678){
var self__ = this;
var _26678__$1 = this;
return self__.meta26677;
});})(cs))
;

cljs.core.async.t26676.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26676.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t26676.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t26676.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t26676.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t26676.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t26676.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26677","meta26677",810140464,null)], null);
});})(cs))
;

cljs.core.async.t26676.cljs$lang$type = true;

cljs.core.async.t26676.cljs$lang$ctorStr = "cljs.core.async/t26676";

cljs.core.async.t26676.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16688__auto__,writer__16689__auto__,opt__16690__auto__){
return cljs.core._write.call(null,writer__16689__auto__,"cljs.core.async/t26676");
});})(cs))
;

cljs.core.async.__GT_t26676 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t26676(mult__$1,ch__$1,cs__$1,meta26677){
return (new cljs.core.async.t26676(mult__$1,ch__$1,cs__$1,meta26677));
});})(cs))
;

}

return (new cljs.core.async.t26676(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19453__auto___26897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto___26897,cs,m,dchan,dctr,done){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (c__19453__auto___26897,cs,m,dchan,dctr,done){
return (function (state_26809){
var state_val_26810 = (state_26809[(1)]);
if((state_val_26810 === (7))){
var inst_26805 = (state_26809[(2)]);
var state_26809__$1 = state_26809;
var statearr_26811_26898 = state_26809__$1;
(statearr_26811_26898[(2)] = inst_26805);

(statearr_26811_26898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (20))){
var inst_26710 = (state_26809[(7)]);
var inst_26720 = cljs.core.first.call(null,inst_26710);
var inst_26721 = cljs.core.nth.call(null,inst_26720,(0),null);
var inst_26722 = cljs.core.nth.call(null,inst_26720,(1),null);
var state_26809__$1 = (function (){var statearr_26812 = state_26809;
(statearr_26812[(8)] = inst_26721);

return statearr_26812;
})();
if(cljs.core.truth_(inst_26722)){
var statearr_26813_26899 = state_26809__$1;
(statearr_26813_26899[(1)] = (22));

} else {
var statearr_26814_26900 = state_26809__$1;
(statearr_26814_26900[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (27))){
var inst_26750 = (state_26809[(9)]);
var inst_26681 = (state_26809[(10)]);
var inst_26752 = (state_26809[(11)]);
var inst_26757 = (state_26809[(12)]);
var inst_26757__$1 = cljs.core._nth.call(null,inst_26750,inst_26752);
var inst_26758 = cljs.core.async.put_BANG_.call(null,inst_26757__$1,inst_26681,done);
var state_26809__$1 = (function (){var statearr_26815 = state_26809;
(statearr_26815[(12)] = inst_26757__$1);

return statearr_26815;
})();
if(cljs.core.truth_(inst_26758)){
var statearr_26816_26901 = state_26809__$1;
(statearr_26816_26901[(1)] = (30));

} else {
var statearr_26817_26902 = state_26809__$1;
(statearr_26817_26902[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (1))){
var state_26809__$1 = state_26809;
var statearr_26818_26903 = state_26809__$1;
(statearr_26818_26903[(2)] = null);

(statearr_26818_26903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (24))){
var inst_26710 = (state_26809[(7)]);
var inst_26727 = (state_26809[(2)]);
var inst_26728 = cljs.core.next.call(null,inst_26710);
var inst_26690 = inst_26728;
var inst_26691 = null;
var inst_26692 = (0);
var inst_26693 = (0);
var state_26809__$1 = (function (){var statearr_26819 = state_26809;
(statearr_26819[(13)] = inst_26693);

(statearr_26819[(14)] = inst_26692);

(statearr_26819[(15)] = inst_26691);

(statearr_26819[(16)] = inst_26690);

(statearr_26819[(17)] = inst_26727);

return statearr_26819;
})();
var statearr_26820_26904 = state_26809__$1;
(statearr_26820_26904[(2)] = null);

(statearr_26820_26904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (39))){
var state_26809__$1 = state_26809;
var statearr_26824_26905 = state_26809__$1;
(statearr_26824_26905[(2)] = null);

(statearr_26824_26905[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (4))){
var inst_26681 = (state_26809[(10)]);
var inst_26681__$1 = (state_26809[(2)]);
var inst_26682 = (inst_26681__$1 == null);
var state_26809__$1 = (function (){var statearr_26825 = state_26809;
(statearr_26825[(10)] = inst_26681__$1);

return statearr_26825;
})();
if(cljs.core.truth_(inst_26682)){
var statearr_26826_26906 = state_26809__$1;
(statearr_26826_26906[(1)] = (5));

} else {
var statearr_26827_26907 = state_26809__$1;
(statearr_26827_26907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (15))){
var inst_26693 = (state_26809[(13)]);
var inst_26692 = (state_26809[(14)]);
var inst_26691 = (state_26809[(15)]);
var inst_26690 = (state_26809[(16)]);
var inst_26706 = (state_26809[(2)]);
var inst_26707 = (inst_26693 + (1));
var tmp26821 = inst_26692;
var tmp26822 = inst_26691;
var tmp26823 = inst_26690;
var inst_26690__$1 = tmp26823;
var inst_26691__$1 = tmp26822;
var inst_26692__$1 = tmp26821;
var inst_26693__$1 = inst_26707;
var state_26809__$1 = (function (){var statearr_26828 = state_26809;
(statearr_26828[(13)] = inst_26693__$1);

(statearr_26828[(14)] = inst_26692__$1);

(statearr_26828[(15)] = inst_26691__$1);

(statearr_26828[(16)] = inst_26690__$1);

(statearr_26828[(18)] = inst_26706);

return statearr_26828;
})();
var statearr_26829_26908 = state_26809__$1;
(statearr_26829_26908[(2)] = null);

(statearr_26829_26908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (21))){
var inst_26731 = (state_26809[(2)]);
var state_26809__$1 = state_26809;
var statearr_26833_26909 = state_26809__$1;
(statearr_26833_26909[(2)] = inst_26731);

(statearr_26833_26909[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (31))){
var inst_26757 = (state_26809[(12)]);
var inst_26761 = done.call(null,null);
var inst_26762 = cljs.core.async.untap_STAR_.call(null,m,inst_26757);
var state_26809__$1 = (function (){var statearr_26834 = state_26809;
(statearr_26834[(19)] = inst_26761);

return statearr_26834;
})();
var statearr_26835_26910 = state_26809__$1;
(statearr_26835_26910[(2)] = inst_26762);

(statearr_26835_26910[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (32))){
var inst_26750 = (state_26809[(9)]);
var inst_26752 = (state_26809[(11)]);
var inst_26751 = (state_26809[(20)]);
var inst_26749 = (state_26809[(21)]);
var inst_26764 = (state_26809[(2)]);
var inst_26765 = (inst_26752 + (1));
var tmp26830 = inst_26750;
var tmp26831 = inst_26751;
var tmp26832 = inst_26749;
var inst_26749__$1 = tmp26832;
var inst_26750__$1 = tmp26830;
var inst_26751__$1 = tmp26831;
var inst_26752__$1 = inst_26765;
var state_26809__$1 = (function (){var statearr_26836 = state_26809;
(statearr_26836[(9)] = inst_26750__$1);

(statearr_26836[(11)] = inst_26752__$1);

(statearr_26836[(20)] = inst_26751__$1);

(statearr_26836[(22)] = inst_26764);

(statearr_26836[(21)] = inst_26749__$1);

return statearr_26836;
})();
var statearr_26837_26911 = state_26809__$1;
(statearr_26837_26911[(2)] = null);

(statearr_26837_26911[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (40))){
var inst_26777 = (state_26809[(23)]);
var inst_26781 = done.call(null,null);
var inst_26782 = cljs.core.async.untap_STAR_.call(null,m,inst_26777);
var state_26809__$1 = (function (){var statearr_26838 = state_26809;
(statearr_26838[(24)] = inst_26781);

return statearr_26838;
})();
var statearr_26839_26912 = state_26809__$1;
(statearr_26839_26912[(2)] = inst_26782);

(statearr_26839_26912[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (33))){
var inst_26768 = (state_26809[(25)]);
var inst_26770 = cljs.core.chunked_seq_QMARK_.call(null,inst_26768);
var state_26809__$1 = state_26809;
if(inst_26770){
var statearr_26840_26913 = state_26809__$1;
(statearr_26840_26913[(1)] = (36));

} else {
var statearr_26841_26914 = state_26809__$1;
(statearr_26841_26914[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (13))){
var inst_26700 = (state_26809[(26)]);
var inst_26703 = cljs.core.async.close_BANG_.call(null,inst_26700);
var state_26809__$1 = state_26809;
var statearr_26842_26915 = state_26809__$1;
(statearr_26842_26915[(2)] = inst_26703);

(statearr_26842_26915[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (22))){
var inst_26721 = (state_26809[(8)]);
var inst_26724 = cljs.core.async.close_BANG_.call(null,inst_26721);
var state_26809__$1 = state_26809;
var statearr_26843_26916 = state_26809__$1;
(statearr_26843_26916[(2)] = inst_26724);

(statearr_26843_26916[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (36))){
var inst_26768 = (state_26809[(25)]);
var inst_26772 = cljs.core.chunk_first.call(null,inst_26768);
var inst_26773 = cljs.core.chunk_rest.call(null,inst_26768);
var inst_26774 = cljs.core.count.call(null,inst_26772);
var inst_26749 = inst_26773;
var inst_26750 = inst_26772;
var inst_26751 = inst_26774;
var inst_26752 = (0);
var state_26809__$1 = (function (){var statearr_26844 = state_26809;
(statearr_26844[(9)] = inst_26750);

(statearr_26844[(11)] = inst_26752);

(statearr_26844[(20)] = inst_26751);

(statearr_26844[(21)] = inst_26749);

return statearr_26844;
})();
var statearr_26845_26917 = state_26809__$1;
(statearr_26845_26917[(2)] = null);

(statearr_26845_26917[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (41))){
var inst_26768 = (state_26809[(25)]);
var inst_26784 = (state_26809[(2)]);
var inst_26785 = cljs.core.next.call(null,inst_26768);
var inst_26749 = inst_26785;
var inst_26750 = null;
var inst_26751 = (0);
var inst_26752 = (0);
var state_26809__$1 = (function (){var statearr_26846 = state_26809;
(statearr_26846[(9)] = inst_26750);

(statearr_26846[(27)] = inst_26784);

(statearr_26846[(11)] = inst_26752);

(statearr_26846[(20)] = inst_26751);

(statearr_26846[(21)] = inst_26749);

return statearr_26846;
})();
var statearr_26847_26918 = state_26809__$1;
(statearr_26847_26918[(2)] = null);

(statearr_26847_26918[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (43))){
var state_26809__$1 = state_26809;
var statearr_26848_26919 = state_26809__$1;
(statearr_26848_26919[(2)] = null);

(statearr_26848_26919[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (29))){
var inst_26793 = (state_26809[(2)]);
var state_26809__$1 = state_26809;
var statearr_26849_26920 = state_26809__$1;
(statearr_26849_26920[(2)] = inst_26793);

(statearr_26849_26920[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (44))){
var inst_26802 = (state_26809[(2)]);
var state_26809__$1 = (function (){var statearr_26850 = state_26809;
(statearr_26850[(28)] = inst_26802);

return statearr_26850;
})();
var statearr_26851_26921 = state_26809__$1;
(statearr_26851_26921[(2)] = null);

(statearr_26851_26921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (6))){
var inst_26741 = (state_26809[(29)]);
var inst_26740 = cljs.core.deref.call(null,cs);
var inst_26741__$1 = cljs.core.keys.call(null,inst_26740);
var inst_26742 = cljs.core.count.call(null,inst_26741__$1);
var inst_26743 = cljs.core.reset_BANG_.call(null,dctr,inst_26742);
var inst_26748 = cljs.core.seq.call(null,inst_26741__$1);
var inst_26749 = inst_26748;
var inst_26750 = null;
var inst_26751 = (0);
var inst_26752 = (0);
var state_26809__$1 = (function (){var statearr_26852 = state_26809;
(statearr_26852[(9)] = inst_26750);

(statearr_26852[(30)] = inst_26743);

(statearr_26852[(11)] = inst_26752);

(statearr_26852[(29)] = inst_26741__$1);

(statearr_26852[(20)] = inst_26751);

(statearr_26852[(21)] = inst_26749);

return statearr_26852;
})();
var statearr_26853_26922 = state_26809__$1;
(statearr_26853_26922[(2)] = null);

(statearr_26853_26922[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (28))){
var inst_26768 = (state_26809[(25)]);
var inst_26749 = (state_26809[(21)]);
var inst_26768__$1 = cljs.core.seq.call(null,inst_26749);
var state_26809__$1 = (function (){var statearr_26854 = state_26809;
(statearr_26854[(25)] = inst_26768__$1);

return statearr_26854;
})();
if(inst_26768__$1){
var statearr_26855_26923 = state_26809__$1;
(statearr_26855_26923[(1)] = (33));

} else {
var statearr_26856_26924 = state_26809__$1;
(statearr_26856_26924[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (25))){
var inst_26752 = (state_26809[(11)]);
var inst_26751 = (state_26809[(20)]);
var inst_26754 = (inst_26752 < inst_26751);
var inst_26755 = inst_26754;
var state_26809__$1 = state_26809;
if(cljs.core.truth_(inst_26755)){
var statearr_26857_26925 = state_26809__$1;
(statearr_26857_26925[(1)] = (27));

} else {
var statearr_26858_26926 = state_26809__$1;
(statearr_26858_26926[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (34))){
var state_26809__$1 = state_26809;
var statearr_26859_26927 = state_26809__$1;
(statearr_26859_26927[(2)] = null);

(statearr_26859_26927[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (17))){
var state_26809__$1 = state_26809;
var statearr_26860_26928 = state_26809__$1;
(statearr_26860_26928[(2)] = null);

(statearr_26860_26928[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (3))){
var inst_26807 = (state_26809[(2)]);
var state_26809__$1 = state_26809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26809__$1,inst_26807);
} else {
if((state_val_26810 === (12))){
var inst_26736 = (state_26809[(2)]);
var state_26809__$1 = state_26809;
var statearr_26861_26929 = state_26809__$1;
(statearr_26861_26929[(2)] = inst_26736);

(statearr_26861_26929[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (2))){
var state_26809__$1 = state_26809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26809__$1,(4),ch);
} else {
if((state_val_26810 === (23))){
var state_26809__$1 = state_26809;
var statearr_26862_26930 = state_26809__$1;
(statearr_26862_26930[(2)] = null);

(statearr_26862_26930[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (35))){
var inst_26791 = (state_26809[(2)]);
var state_26809__$1 = state_26809;
var statearr_26863_26931 = state_26809__$1;
(statearr_26863_26931[(2)] = inst_26791);

(statearr_26863_26931[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (19))){
var inst_26710 = (state_26809[(7)]);
var inst_26714 = cljs.core.chunk_first.call(null,inst_26710);
var inst_26715 = cljs.core.chunk_rest.call(null,inst_26710);
var inst_26716 = cljs.core.count.call(null,inst_26714);
var inst_26690 = inst_26715;
var inst_26691 = inst_26714;
var inst_26692 = inst_26716;
var inst_26693 = (0);
var state_26809__$1 = (function (){var statearr_26864 = state_26809;
(statearr_26864[(13)] = inst_26693);

(statearr_26864[(14)] = inst_26692);

(statearr_26864[(15)] = inst_26691);

(statearr_26864[(16)] = inst_26690);

return statearr_26864;
})();
var statearr_26865_26932 = state_26809__$1;
(statearr_26865_26932[(2)] = null);

(statearr_26865_26932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (11))){
var inst_26690 = (state_26809[(16)]);
var inst_26710 = (state_26809[(7)]);
var inst_26710__$1 = cljs.core.seq.call(null,inst_26690);
var state_26809__$1 = (function (){var statearr_26866 = state_26809;
(statearr_26866[(7)] = inst_26710__$1);

return statearr_26866;
})();
if(inst_26710__$1){
var statearr_26867_26933 = state_26809__$1;
(statearr_26867_26933[(1)] = (16));

} else {
var statearr_26868_26934 = state_26809__$1;
(statearr_26868_26934[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (9))){
var inst_26738 = (state_26809[(2)]);
var state_26809__$1 = state_26809;
var statearr_26869_26935 = state_26809__$1;
(statearr_26869_26935[(2)] = inst_26738);

(statearr_26869_26935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (5))){
var inst_26688 = cljs.core.deref.call(null,cs);
var inst_26689 = cljs.core.seq.call(null,inst_26688);
var inst_26690 = inst_26689;
var inst_26691 = null;
var inst_26692 = (0);
var inst_26693 = (0);
var state_26809__$1 = (function (){var statearr_26870 = state_26809;
(statearr_26870[(13)] = inst_26693);

(statearr_26870[(14)] = inst_26692);

(statearr_26870[(15)] = inst_26691);

(statearr_26870[(16)] = inst_26690);

return statearr_26870;
})();
var statearr_26871_26936 = state_26809__$1;
(statearr_26871_26936[(2)] = null);

(statearr_26871_26936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (14))){
var state_26809__$1 = state_26809;
var statearr_26872_26937 = state_26809__$1;
(statearr_26872_26937[(2)] = null);

(statearr_26872_26937[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (45))){
var inst_26799 = (state_26809[(2)]);
var state_26809__$1 = state_26809;
var statearr_26873_26938 = state_26809__$1;
(statearr_26873_26938[(2)] = inst_26799);

(statearr_26873_26938[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (26))){
var inst_26741 = (state_26809[(29)]);
var inst_26795 = (state_26809[(2)]);
var inst_26796 = cljs.core.seq.call(null,inst_26741);
var state_26809__$1 = (function (){var statearr_26874 = state_26809;
(statearr_26874[(31)] = inst_26795);

return statearr_26874;
})();
if(inst_26796){
var statearr_26875_26939 = state_26809__$1;
(statearr_26875_26939[(1)] = (42));

} else {
var statearr_26876_26940 = state_26809__$1;
(statearr_26876_26940[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (16))){
var inst_26710 = (state_26809[(7)]);
var inst_26712 = cljs.core.chunked_seq_QMARK_.call(null,inst_26710);
var state_26809__$1 = state_26809;
if(inst_26712){
var statearr_26877_26941 = state_26809__$1;
(statearr_26877_26941[(1)] = (19));

} else {
var statearr_26878_26942 = state_26809__$1;
(statearr_26878_26942[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (38))){
var inst_26788 = (state_26809[(2)]);
var state_26809__$1 = state_26809;
var statearr_26879_26943 = state_26809__$1;
(statearr_26879_26943[(2)] = inst_26788);

(statearr_26879_26943[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (30))){
var state_26809__$1 = state_26809;
var statearr_26880_26944 = state_26809__$1;
(statearr_26880_26944[(2)] = null);

(statearr_26880_26944[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (10))){
var inst_26693 = (state_26809[(13)]);
var inst_26691 = (state_26809[(15)]);
var inst_26699 = cljs.core._nth.call(null,inst_26691,inst_26693);
var inst_26700 = cljs.core.nth.call(null,inst_26699,(0),null);
var inst_26701 = cljs.core.nth.call(null,inst_26699,(1),null);
var state_26809__$1 = (function (){var statearr_26881 = state_26809;
(statearr_26881[(26)] = inst_26700);

return statearr_26881;
})();
if(cljs.core.truth_(inst_26701)){
var statearr_26882_26945 = state_26809__$1;
(statearr_26882_26945[(1)] = (13));

} else {
var statearr_26883_26946 = state_26809__$1;
(statearr_26883_26946[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (18))){
var inst_26734 = (state_26809[(2)]);
var state_26809__$1 = state_26809;
var statearr_26884_26947 = state_26809__$1;
(statearr_26884_26947[(2)] = inst_26734);

(statearr_26884_26947[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (42))){
var state_26809__$1 = state_26809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26809__$1,(45),dchan);
} else {
if((state_val_26810 === (37))){
var inst_26768 = (state_26809[(25)]);
var inst_26681 = (state_26809[(10)]);
var inst_26777 = (state_26809[(23)]);
var inst_26777__$1 = cljs.core.first.call(null,inst_26768);
var inst_26778 = cljs.core.async.put_BANG_.call(null,inst_26777__$1,inst_26681,done);
var state_26809__$1 = (function (){var statearr_26885 = state_26809;
(statearr_26885[(23)] = inst_26777__$1);

return statearr_26885;
})();
if(cljs.core.truth_(inst_26778)){
var statearr_26886_26948 = state_26809__$1;
(statearr_26886_26948[(1)] = (39));

} else {
var statearr_26887_26949 = state_26809__$1;
(statearr_26887_26949[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (8))){
var inst_26693 = (state_26809[(13)]);
var inst_26692 = (state_26809[(14)]);
var inst_26695 = (inst_26693 < inst_26692);
var inst_26696 = inst_26695;
var state_26809__$1 = state_26809;
if(cljs.core.truth_(inst_26696)){
var statearr_26888_26950 = state_26809__$1;
(statearr_26888_26950[(1)] = (10));

} else {
var statearr_26889_26951 = state_26809__$1;
(statearr_26889_26951[(1)] = (11));

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
});})(c__19453__auto___26897,cs,m,dchan,dctr,done))
;
return ((function (switch__19391__auto__,c__19453__auto___26897,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19392__auto__ = null;
var cljs$core$async$mult_$_state_machine__19392__auto____0 = (function (){
var statearr_26893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26893[(0)] = cljs$core$async$mult_$_state_machine__19392__auto__);

(statearr_26893[(1)] = (1));

return statearr_26893;
});
var cljs$core$async$mult_$_state_machine__19392__auto____1 = (function (state_26809){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_26809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e26894){if((e26894 instanceof Object)){
var ex__19395__auto__ = e26894;
var statearr_26895_26952 = state_26809;
(statearr_26895_26952[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26953 = state_26809;
state_26809 = G__26953;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19392__auto__ = function(state_26809){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19392__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19392__auto____1.call(this,state_26809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19392__auto____0;
cljs$core$async$mult_$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19392__auto____1;
return cljs$core$async$mult_$_state_machine__19392__auto__;
})()
;})(switch__19391__auto__,c__19453__auto___26897,cs,m,dchan,dctr,done))
})();
var state__19455__auto__ = (function (){var statearr_26896 = f__19454__auto__.call(null);
(statearr_26896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto___26897);

return statearr_26896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto___26897,cs,m,dchan,dctr,done))
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
var G__26955 = arguments.length;
switch (G__26955) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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

cljs.core.async.Mix = (function (){var obj26958 = {};
return obj26958;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__16097__auto__ = m;
if(and__16097__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__16097__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16745__auto__ = (((m == null))?null:m);
return (function (){var or__16109__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16745__auto__)]);
if(or__16109__auto__){
return or__16109__auto__;
} else {
var or__16109__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__16109__auto____$1){
return or__16109__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__16097__auto__ = m;
if(and__16097__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__16097__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16745__auto__ = (((m == null))?null:m);
return (function (){var or__16109__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16745__auto__)]);
if(or__16109__auto__){
return or__16109__auto__;
} else {
var or__16109__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__16109__auto____$1){
return or__16109__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__16097__auto__ = m;
if(and__16097__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__16097__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16745__auto__ = (((m == null))?null:m);
return (function (){var or__16109__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16745__auto__)]);
if(or__16109__auto__){
return or__16109__auto__;
} else {
var or__16109__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__16109__auto____$1){
return or__16109__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__16097__auto__ = m;
if(and__16097__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__16097__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16745__auto__ = (((m == null))?null:m);
return (function (){var or__16109__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16745__auto__)]);
if(or__16109__auto__){
return or__16109__auto__;
} else {
var or__16109__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__16109__auto____$1){
return or__16109__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__16097__auto__ = m;
if(and__16097__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__16097__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16745__auto__ = (((m == null))?null:m);
return (function (){var or__16109__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16745__auto__)]);
if(or__16109__auto__){
return or__16109__auto__;
} else {
var or__16109__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__16109__auto____$1){
return or__16109__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__17149__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17149__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26963){
var map__26964 = p__26963;
var map__26964__$1 = ((cljs.core.seq_QMARK_.call(null,map__26964))?cljs.core.apply.call(null,cljs.core.hash_map,map__26964):map__26964);
var opts = map__26964__$1;
var statearr_26965_26968 = state;
(statearr_26965_26968[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__26964,map__26964__$1,opts){
return (function (val){
var statearr_26966_26969 = state;
(statearr_26966_26969[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26964,map__26964__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_26967_26970 = state;
(statearr_26967_26970[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26959){
var G__26960 = cljs.core.first.call(null,seq26959);
var seq26959__$1 = cljs.core.next.call(null,seq26959);
var G__26961 = cljs.core.first.call(null,seq26959__$1);
var seq26959__$2 = cljs.core.next.call(null,seq26959__$1);
var G__26962 = cljs.core.first.call(null,seq26959__$2);
var seq26959__$3 = cljs.core.next.call(null,seq26959__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26960,G__26961,G__26962,seq26959__$3);
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
if(typeof cljs.core.async.t27090 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27090 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27091){
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
this.meta27091 = meta27091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27092,meta27091__$1){
var self__ = this;
var _27092__$1 = this;
return (new cljs.core.async.t27090(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27091__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27090.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27092){
var self__ = this;
var _27092__$1 = this;
return self__.meta27091;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27090.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27090.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27090.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27090.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27090.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27090.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27090.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27090.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t27090.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27091","meta27091",188221561,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27090.cljs$lang$type = true;

cljs.core.async.t27090.cljs$lang$ctorStr = "cljs.core.async/t27090";

cljs.core.async.t27090.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16688__auto__,writer__16689__auto__,opt__16690__auto__){
return cljs.core._write.call(null,writer__16689__auto__,"cljs.core.async/t27090");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27090 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t27090(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27091){
return (new cljs.core.async.t27090(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27091));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27090(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19453__auto___27209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto___27209,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (c__19453__auto___27209,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27162){
var state_val_27163 = (state_27162[(1)]);
if((state_val_27163 === (7))){
var inst_27106 = (state_27162[(7)]);
var inst_27111 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27106);
var state_27162__$1 = state_27162;
var statearr_27164_27210 = state_27162__$1;
(statearr_27164_27210[(2)] = inst_27111);

(statearr_27164_27210[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (20))){
var inst_27121 = (state_27162[(8)]);
var state_27162__$1 = state_27162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27162__$1,(23),out,inst_27121);
} else {
if((state_val_27163 === (1))){
var inst_27096 = (state_27162[(9)]);
var inst_27096__$1 = calc_state.call(null);
var inst_27097 = cljs.core.seq_QMARK_.call(null,inst_27096__$1);
var state_27162__$1 = (function (){var statearr_27165 = state_27162;
(statearr_27165[(9)] = inst_27096__$1);

return statearr_27165;
})();
if(inst_27097){
var statearr_27166_27211 = state_27162__$1;
(statearr_27166_27211[(1)] = (2));

} else {
var statearr_27167_27212 = state_27162__$1;
(statearr_27167_27212[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (24))){
var inst_27114 = (state_27162[(10)]);
var inst_27106 = inst_27114;
var state_27162__$1 = (function (){var statearr_27168 = state_27162;
(statearr_27168[(7)] = inst_27106);

return statearr_27168;
})();
var statearr_27169_27213 = state_27162__$1;
(statearr_27169_27213[(2)] = null);

(statearr_27169_27213[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (4))){
var inst_27096 = (state_27162[(9)]);
var inst_27102 = (state_27162[(2)]);
var inst_27103 = cljs.core.get.call(null,inst_27102,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27104 = cljs.core.get.call(null,inst_27102,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27105 = cljs.core.get.call(null,inst_27102,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27106 = inst_27096;
var state_27162__$1 = (function (){var statearr_27170 = state_27162;
(statearr_27170[(11)] = inst_27105);

(statearr_27170[(12)] = inst_27104);

(statearr_27170[(13)] = inst_27103);

(statearr_27170[(7)] = inst_27106);

return statearr_27170;
})();
var statearr_27171_27214 = state_27162__$1;
(statearr_27171_27214[(2)] = null);

(statearr_27171_27214[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (15))){
var state_27162__$1 = state_27162;
var statearr_27172_27215 = state_27162__$1;
(statearr_27172_27215[(2)] = null);

(statearr_27172_27215[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (21))){
var inst_27114 = (state_27162[(10)]);
var inst_27106 = inst_27114;
var state_27162__$1 = (function (){var statearr_27173 = state_27162;
(statearr_27173[(7)] = inst_27106);

return statearr_27173;
})();
var statearr_27174_27216 = state_27162__$1;
(statearr_27174_27216[(2)] = null);

(statearr_27174_27216[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (13))){
var inst_27158 = (state_27162[(2)]);
var state_27162__$1 = state_27162;
var statearr_27175_27217 = state_27162__$1;
(statearr_27175_27217[(2)] = inst_27158);

(statearr_27175_27217[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (22))){
var inst_27156 = (state_27162[(2)]);
var state_27162__$1 = state_27162;
var statearr_27176_27218 = state_27162__$1;
(statearr_27176_27218[(2)] = inst_27156);

(statearr_27176_27218[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (6))){
var inst_27160 = (state_27162[(2)]);
var state_27162__$1 = state_27162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27162__$1,inst_27160);
} else {
if((state_val_27163 === (25))){
var state_27162__$1 = state_27162;
var statearr_27177_27219 = state_27162__$1;
(statearr_27177_27219[(2)] = null);

(statearr_27177_27219[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (17))){
var inst_27136 = (state_27162[(14)]);
var state_27162__$1 = state_27162;
var statearr_27178_27220 = state_27162__$1;
(statearr_27178_27220[(2)] = inst_27136);

(statearr_27178_27220[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (3))){
var inst_27096 = (state_27162[(9)]);
var state_27162__$1 = state_27162;
var statearr_27179_27221 = state_27162__$1;
(statearr_27179_27221[(2)] = inst_27096);

(statearr_27179_27221[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (12))){
var inst_27136 = (state_27162[(14)]);
var inst_27122 = (state_27162[(15)]);
var inst_27115 = (state_27162[(16)]);
var inst_27136__$1 = inst_27115.call(null,inst_27122);
var state_27162__$1 = (function (){var statearr_27180 = state_27162;
(statearr_27180[(14)] = inst_27136__$1);

return statearr_27180;
})();
if(cljs.core.truth_(inst_27136__$1)){
var statearr_27181_27222 = state_27162__$1;
(statearr_27181_27222[(1)] = (17));

} else {
var statearr_27182_27223 = state_27162__$1;
(statearr_27182_27223[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (2))){
var inst_27096 = (state_27162[(9)]);
var inst_27099 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27096);
var state_27162__$1 = state_27162;
var statearr_27183_27224 = state_27162__$1;
(statearr_27183_27224[(2)] = inst_27099);

(statearr_27183_27224[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (23))){
var inst_27147 = (state_27162[(2)]);
var state_27162__$1 = state_27162;
if(cljs.core.truth_(inst_27147)){
var statearr_27184_27225 = state_27162__$1;
(statearr_27184_27225[(1)] = (24));

} else {
var statearr_27185_27226 = state_27162__$1;
(statearr_27185_27226[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (19))){
var inst_27144 = (state_27162[(2)]);
var state_27162__$1 = state_27162;
if(cljs.core.truth_(inst_27144)){
var statearr_27186_27227 = state_27162__$1;
(statearr_27186_27227[(1)] = (20));

} else {
var statearr_27187_27228 = state_27162__$1;
(statearr_27187_27228[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (11))){
var inst_27121 = (state_27162[(8)]);
var inst_27127 = (inst_27121 == null);
var state_27162__$1 = state_27162;
if(cljs.core.truth_(inst_27127)){
var statearr_27188_27229 = state_27162__$1;
(statearr_27188_27229[(1)] = (14));

} else {
var statearr_27189_27230 = state_27162__$1;
(statearr_27189_27230[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (9))){
var inst_27114 = (state_27162[(10)]);
var inst_27114__$1 = (state_27162[(2)]);
var inst_27115 = cljs.core.get.call(null,inst_27114__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27116 = cljs.core.get.call(null,inst_27114__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27117 = cljs.core.get.call(null,inst_27114__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27162__$1 = (function (){var statearr_27190 = state_27162;
(statearr_27190[(17)] = inst_27116);

(statearr_27190[(10)] = inst_27114__$1);

(statearr_27190[(16)] = inst_27115);

return statearr_27190;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27162__$1,(10),inst_27117);
} else {
if((state_val_27163 === (5))){
var inst_27106 = (state_27162[(7)]);
var inst_27109 = cljs.core.seq_QMARK_.call(null,inst_27106);
var state_27162__$1 = state_27162;
if(inst_27109){
var statearr_27191_27231 = state_27162__$1;
(statearr_27191_27231[(1)] = (7));

} else {
var statearr_27192_27232 = state_27162__$1;
(statearr_27192_27232[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (14))){
var inst_27122 = (state_27162[(15)]);
var inst_27129 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27122);
var state_27162__$1 = state_27162;
var statearr_27193_27233 = state_27162__$1;
(statearr_27193_27233[(2)] = inst_27129);

(statearr_27193_27233[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (26))){
var inst_27152 = (state_27162[(2)]);
var state_27162__$1 = state_27162;
var statearr_27194_27234 = state_27162__$1;
(statearr_27194_27234[(2)] = inst_27152);

(statearr_27194_27234[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (16))){
var inst_27132 = (state_27162[(2)]);
var inst_27133 = calc_state.call(null);
var inst_27106 = inst_27133;
var state_27162__$1 = (function (){var statearr_27195 = state_27162;
(statearr_27195[(18)] = inst_27132);

(statearr_27195[(7)] = inst_27106);

return statearr_27195;
})();
var statearr_27196_27235 = state_27162__$1;
(statearr_27196_27235[(2)] = null);

(statearr_27196_27235[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (10))){
var inst_27121 = (state_27162[(8)]);
var inst_27122 = (state_27162[(15)]);
var inst_27120 = (state_27162[(2)]);
var inst_27121__$1 = cljs.core.nth.call(null,inst_27120,(0),null);
var inst_27122__$1 = cljs.core.nth.call(null,inst_27120,(1),null);
var inst_27123 = (inst_27121__$1 == null);
var inst_27124 = cljs.core._EQ_.call(null,inst_27122__$1,change);
var inst_27125 = (inst_27123) || (inst_27124);
var state_27162__$1 = (function (){var statearr_27197 = state_27162;
(statearr_27197[(8)] = inst_27121__$1);

(statearr_27197[(15)] = inst_27122__$1);

return statearr_27197;
})();
if(cljs.core.truth_(inst_27125)){
var statearr_27198_27236 = state_27162__$1;
(statearr_27198_27236[(1)] = (11));

} else {
var statearr_27199_27237 = state_27162__$1;
(statearr_27199_27237[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (18))){
var inst_27116 = (state_27162[(17)]);
var inst_27122 = (state_27162[(15)]);
var inst_27115 = (state_27162[(16)]);
var inst_27139 = cljs.core.empty_QMARK_.call(null,inst_27115);
var inst_27140 = inst_27116.call(null,inst_27122);
var inst_27141 = cljs.core.not.call(null,inst_27140);
var inst_27142 = (inst_27139) && (inst_27141);
var state_27162__$1 = state_27162;
var statearr_27200_27238 = state_27162__$1;
(statearr_27200_27238[(2)] = inst_27142);

(statearr_27200_27238[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (8))){
var inst_27106 = (state_27162[(7)]);
var state_27162__$1 = state_27162;
var statearr_27201_27239 = state_27162__$1;
(statearr_27201_27239[(2)] = inst_27106);

(statearr_27201_27239[(1)] = (9));


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
});})(c__19453__auto___27209,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19391__auto__,c__19453__auto___27209,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19392__auto__ = null;
var cljs$core$async$mix_$_state_machine__19392__auto____0 = (function (){
var statearr_27205 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27205[(0)] = cljs$core$async$mix_$_state_machine__19392__auto__);

(statearr_27205[(1)] = (1));

return statearr_27205;
});
var cljs$core$async$mix_$_state_machine__19392__auto____1 = (function (state_27162){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_27162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e27206){if((e27206 instanceof Object)){
var ex__19395__auto__ = e27206;
var statearr_27207_27240 = state_27162;
(statearr_27207_27240[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27241 = state_27162;
state_27162 = G__27241;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19392__auto__ = function(state_27162){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19392__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19392__auto____1.call(this,state_27162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19392__auto____0;
cljs$core$async$mix_$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19392__auto____1;
return cljs$core$async$mix_$_state_machine__19392__auto__;
})()
;})(switch__19391__auto__,c__19453__auto___27209,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19455__auto__ = (function (){var statearr_27208 = f__19454__auto__.call(null);
(statearr_27208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto___27209);

return statearr_27208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto___27209,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj27243 = {};
return obj27243;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__16097__auto__ = p;
if(and__16097__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__16097__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16745__auto__ = (((p == null))?null:p);
return (function (){var or__16109__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16745__auto__)]);
if(or__16109__auto__){
return or__16109__auto__;
} else {
var or__16109__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__16109__auto____$1){
return or__16109__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__16097__auto__ = p;
if(and__16097__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__16097__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16745__auto__ = (((p == null))?null:p);
return (function (){var or__16109__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16745__auto__)]);
if(or__16109__auto__){
return or__16109__auto__;
} else {
var or__16109__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__16109__auto____$1){
return or__16109__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__27245 = arguments.length;
switch (G__27245) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__16097__auto__ = p;
if(and__16097__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__16097__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16745__auto__ = (((p == null))?null:p);
return (function (){var or__16109__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16745__auto__)]);
if(or__16109__auto__){
return or__16109__auto__;
} else {
var or__16109__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16109__auto____$1){
return or__16109__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__16097__auto__ = p;
if(and__16097__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__16097__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16745__auto__ = (((p == null))?null:p);
return (function (){var or__16109__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16745__auto__)]);
if(or__16109__auto__){
return or__16109__auto__;
} else {
var or__16109__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16109__auto____$1){
return or__16109__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
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
var G__27249 = arguments.length;
switch (G__27249) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16109__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16109__auto__,mults){
return (function (p1__27247_SHARP_){
if(cljs.core.truth_(p1__27247_SHARP_.call(null,topic))){
return p1__27247_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27247_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16109__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t27250 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27250 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27251){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27251 = meta27251;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27252,meta27251__$1){
var self__ = this;
var _27252__$1 = this;
return (new cljs.core.async.t27250(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27251__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t27250.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27252){
var self__ = this;
var _27252__$1 = this;
return self__.meta27251;
});})(mults,ensure_mult))
;

cljs.core.async.t27250.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27250.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t27250.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t27250.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t27250.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t27250.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t27250.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t27250.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27251","meta27251",-1534913675,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t27250.cljs$lang$type = true;

cljs.core.async.t27250.cljs$lang$ctorStr = "cljs.core.async/t27250";

cljs.core.async.t27250.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16688__auto__,writer__16689__auto__,opt__16690__auto__){
return cljs.core._write.call(null,writer__16689__auto__,"cljs.core.async/t27250");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t27250 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t27250(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27251){
return (new cljs.core.async.t27250(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27251));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t27250(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19453__auto___27373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto___27373,mults,ensure_mult,p){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (c__19453__auto___27373,mults,ensure_mult,p){
return (function (state_27324){
var state_val_27325 = (state_27324[(1)]);
if((state_val_27325 === (7))){
var inst_27320 = (state_27324[(2)]);
var state_27324__$1 = state_27324;
var statearr_27326_27374 = state_27324__$1;
(statearr_27326_27374[(2)] = inst_27320);

(statearr_27326_27374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (20))){
var state_27324__$1 = state_27324;
var statearr_27327_27375 = state_27324__$1;
(statearr_27327_27375[(2)] = null);

(statearr_27327_27375[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (1))){
var state_27324__$1 = state_27324;
var statearr_27328_27376 = state_27324__$1;
(statearr_27328_27376[(2)] = null);

(statearr_27328_27376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (24))){
var inst_27303 = (state_27324[(7)]);
var inst_27312 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27303);
var state_27324__$1 = state_27324;
var statearr_27329_27377 = state_27324__$1;
(statearr_27329_27377[(2)] = inst_27312);

(statearr_27329_27377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (4))){
var inst_27255 = (state_27324[(8)]);
var inst_27255__$1 = (state_27324[(2)]);
var inst_27256 = (inst_27255__$1 == null);
var state_27324__$1 = (function (){var statearr_27330 = state_27324;
(statearr_27330[(8)] = inst_27255__$1);

return statearr_27330;
})();
if(cljs.core.truth_(inst_27256)){
var statearr_27331_27378 = state_27324__$1;
(statearr_27331_27378[(1)] = (5));

} else {
var statearr_27332_27379 = state_27324__$1;
(statearr_27332_27379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (15))){
var inst_27297 = (state_27324[(2)]);
var state_27324__$1 = state_27324;
var statearr_27333_27380 = state_27324__$1;
(statearr_27333_27380[(2)] = inst_27297);

(statearr_27333_27380[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (21))){
var inst_27317 = (state_27324[(2)]);
var state_27324__$1 = (function (){var statearr_27334 = state_27324;
(statearr_27334[(9)] = inst_27317);

return statearr_27334;
})();
var statearr_27335_27381 = state_27324__$1;
(statearr_27335_27381[(2)] = null);

(statearr_27335_27381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (13))){
var inst_27279 = (state_27324[(10)]);
var inst_27281 = cljs.core.chunked_seq_QMARK_.call(null,inst_27279);
var state_27324__$1 = state_27324;
if(inst_27281){
var statearr_27336_27382 = state_27324__$1;
(statearr_27336_27382[(1)] = (16));

} else {
var statearr_27337_27383 = state_27324__$1;
(statearr_27337_27383[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (22))){
var inst_27309 = (state_27324[(2)]);
var state_27324__$1 = state_27324;
if(cljs.core.truth_(inst_27309)){
var statearr_27338_27384 = state_27324__$1;
(statearr_27338_27384[(1)] = (23));

} else {
var statearr_27339_27385 = state_27324__$1;
(statearr_27339_27385[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (6))){
var inst_27255 = (state_27324[(8)]);
var inst_27303 = (state_27324[(7)]);
var inst_27305 = (state_27324[(11)]);
var inst_27303__$1 = topic_fn.call(null,inst_27255);
var inst_27304 = cljs.core.deref.call(null,mults);
var inst_27305__$1 = cljs.core.get.call(null,inst_27304,inst_27303__$1);
var state_27324__$1 = (function (){var statearr_27340 = state_27324;
(statearr_27340[(7)] = inst_27303__$1);

(statearr_27340[(11)] = inst_27305__$1);

return statearr_27340;
})();
if(cljs.core.truth_(inst_27305__$1)){
var statearr_27341_27386 = state_27324__$1;
(statearr_27341_27386[(1)] = (19));

} else {
var statearr_27342_27387 = state_27324__$1;
(statearr_27342_27387[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (25))){
var inst_27314 = (state_27324[(2)]);
var state_27324__$1 = state_27324;
var statearr_27343_27388 = state_27324__$1;
(statearr_27343_27388[(2)] = inst_27314);

(statearr_27343_27388[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (17))){
var inst_27279 = (state_27324[(10)]);
var inst_27288 = cljs.core.first.call(null,inst_27279);
var inst_27289 = cljs.core.async.muxch_STAR_.call(null,inst_27288);
var inst_27290 = cljs.core.async.close_BANG_.call(null,inst_27289);
var inst_27291 = cljs.core.next.call(null,inst_27279);
var inst_27265 = inst_27291;
var inst_27266 = null;
var inst_27267 = (0);
var inst_27268 = (0);
var state_27324__$1 = (function (){var statearr_27344 = state_27324;
(statearr_27344[(12)] = inst_27265);

(statearr_27344[(13)] = inst_27268);

(statearr_27344[(14)] = inst_27266);

(statearr_27344[(15)] = inst_27290);

(statearr_27344[(16)] = inst_27267);

return statearr_27344;
})();
var statearr_27345_27389 = state_27324__$1;
(statearr_27345_27389[(2)] = null);

(statearr_27345_27389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (3))){
var inst_27322 = (state_27324[(2)]);
var state_27324__$1 = state_27324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27324__$1,inst_27322);
} else {
if((state_val_27325 === (12))){
var inst_27299 = (state_27324[(2)]);
var state_27324__$1 = state_27324;
var statearr_27346_27390 = state_27324__$1;
(statearr_27346_27390[(2)] = inst_27299);

(statearr_27346_27390[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (2))){
var state_27324__$1 = state_27324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27324__$1,(4),ch);
} else {
if((state_val_27325 === (23))){
var state_27324__$1 = state_27324;
var statearr_27347_27391 = state_27324__$1;
(statearr_27347_27391[(2)] = null);

(statearr_27347_27391[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (19))){
var inst_27255 = (state_27324[(8)]);
var inst_27305 = (state_27324[(11)]);
var inst_27307 = cljs.core.async.muxch_STAR_.call(null,inst_27305);
var state_27324__$1 = state_27324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27324__$1,(22),inst_27307,inst_27255);
} else {
if((state_val_27325 === (11))){
var inst_27265 = (state_27324[(12)]);
var inst_27279 = (state_27324[(10)]);
var inst_27279__$1 = cljs.core.seq.call(null,inst_27265);
var state_27324__$1 = (function (){var statearr_27348 = state_27324;
(statearr_27348[(10)] = inst_27279__$1);

return statearr_27348;
})();
if(inst_27279__$1){
var statearr_27349_27392 = state_27324__$1;
(statearr_27349_27392[(1)] = (13));

} else {
var statearr_27350_27393 = state_27324__$1;
(statearr_27350_27393[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (9))){
var inst_27301 = (state_27324[(2)]);
var state_27324__$1 = state_27324;
var statearr_27351_27394 = state_27324__$1;
(statearr_27351_27394[(2)] = inst_27301);

(statearr_27351_27394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (5))){
var inst_27262 = cljs.core.deref.call(null,mults);
var inst_27263 = cljs.core.vals.call(null,inst_27262);
var inst_27264 = cljs.core.seq.call(null,inst_27263);
var inst_27265 = inst_27264;
var inst_27266 = null;
var inst_27267 = (0);
var inst_27268 = (0);
var state_27324__$1 = (function (){var statearr_27352 = state_27324;
(statearr_27352[(12)] = inst_27265);

(statearr_27352[(13)] = inst_27268);

(statearr_27352[(14)] = inst_27266);

(statearr_27352[(16)] = inst_27267);

return statearr_27352;
})();
var statearr_27353_27395 = state_27324__$1;
(statearr_27353_27395[(2)] = null);

(statearr_27353_27395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (14))){
var state_27324__$1 = state_27324;
var statearr_27357_27396 = state_27324__$1;
(statearr_27357_27396[(2)] = null);

(statearr_27357_27396[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (16))){
var inst_27279 = (state_27324[(10)]);
var inst_27283 = cljs.core.chunk_first.call(null,inst_27279);
var inst_27284 = cljs.core.chunk_rest.call(null,inst_27279);
var inst_27285 = cljs.core.count.call(null,inst_27283);
var inst_27265 = inst_27284;
var inst_27266 = inst_27283;
var inst_27267 = inst_27285;
var inst_27268 = (0);
var state_27324__$1 = (function (){var statearr_27358 = state_27324;
(statearr_27358[(12)] = inst_27265);

(statearr_27358[(13)] = inst_27268);

(statearr_27358[(14)] = inst_27266);

(statearr_27358[(16)] = inst_27267);

return statearr_27358;
})();
var statearr_27359_27397 = state_27324__$1;
(statearr_27359_27397[(2)] = null);

(statearr_27359_27397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (10))){
var inst_27265 = (state_27324[(12)]);
var inst_27268 = (state_27324[(13)]);
var inst_27266 = (state_27324[(14)]);
var inst_27267 = (state_27324[(16)]);
var inst_27273 = cljs.core._nth.call(null,inst_27266,inst_27268);
var inst_27274 = cljs.core.async.muxch_STAR_.call(null,inst_27273);
var inst_27275 = cljs.core.async.close_BANG_.call(null,inst_27274);
var inst_27276 = (inst_27268 + (1));
var tmp27354 = inst_27265;
var tmp27355 = inst_27266;
var tmp27356 = inst_27267;
var inst_27265__$1 = tmp27354;
var inst_27266__$1 = tmp27355;
var inst_27267__$1 = tmp27356;
var inst_27268__$1 = inst_27276;
var state_27324__$1 = (function (){var statearr_27360 = state_27324;
(statearr_27360[(12)] = inst_27265__$1);

(statearr_27360[(17)] = inst_27275);

(statearr_27360[(13)] = inst_27268__$1);

(statearr_27360[(14)] = inst_27266__$1);

(statearr_27360[(16)] = inst_27267__$1);

return statearr_27360;
})();
var statearr_27361_27398 = state_27324__$1;
(statearr_27361_27398[(2)] = null);

(statearr_27361_27398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (18))){
var inst_27294 = (state_27324[(2)]);
var state_27324__$1 = state_27324;
var statearr_27362_27399 = state_27324__$1;
(statearr_27362_27399[(2)] = inst_27294);

(statearr_27362_27399[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (8))){
var inst_27268 = (state_27324[(13)]);
var inst_27267 = (state_27324[(16)]);
var inst_27270 = (inst_27268 < inst_27267);
var inst_27271 = inst_27270;
var state_27324__$1 = state_27324;
if(cljs.core.truth_(inst_27271)){
var statearr_27363_27400 = state_27324__$1;
(statearr_27363_27400[(1)] = (10));

} else {
var statearr_27364_27401 = state_27324__$1;
(statearr_27364_27401[(1)] = (11));

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
});})(c__19453__auto___27373,mults,ensure_mult,p))
;
return ((function (switch__19391__auto__,c__19453__auto___27373,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19392__auto__ = null;
var cljs$core$async$state_machine__19392__auto____0 = (function (){
var statearr_27368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27368[(0)] = cljs$core$async$state_machine__19392__auto__);

(statearr_27368[(1)] = (1));

return statearr_27368;
});
var cljs$core$async$state_machine__19392__auto____1 = (function (state_27324){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_27324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e27369){if((e27369 instanceof Object)){
var ex__19395__auto__ = e27369;
var statearr_27370_27402 = state_27324;
(statearr_27370_27402[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27403 = state_27324;
state_27324 = G__27403;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
cljs$core$async$state_machine__19392__auto__ = function(state_27324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19392__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19392__auto____1.call(this,state_27324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19392__auto____0;
cljs$core$async$state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19392__auto____1;
return cljs$core$async$state_machine__19392__auto__;
})()
;})(switch__19391__auto__,c__19453__auto___27373,mults,ensure_mult,p))
})();
var state__19455__auto__ = (function (){var statearr_27371 = f__19454__auto__.call(null);
(statearr_27371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto___27373);

return statearr_27371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto___27373,mults,ensure_mult,p))
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
var G__27405 = arguments.length;
switch (G__27405) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var G__27408 = arguments.length;
switch (G__27408) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var G__27411 = arguments.length;
switch (G__27411) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var c__19453__auto___27481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto___27481,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (c__19453__auto___27481,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27450){
var state_val_27451 = (state_27450[(1)]);
if((state_val_27451 === (7))){
var state_27450__$1 = state_27450;
var statearr_27452_27482 = state_27450__$1;
(statearr_27452_27482[(2)] = null);

(statearr_27452_27482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (1))){
var state_27450__$1 = state_27450;
var statearr_27453_27483 = state_27450__$1;
(statearr_27453_27483[(2)] = null);

(statearr_27453_27483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (4))){
var inst_27414 = (state_27450[(7)]);
var inst_27416 = (inst_27414 < cnt);
var state_27450__$1 = state_27450;
if(cljs.core.truth_(inst_27416)){
var statearr_27454_27484 = state_27450__$1;
(statearr_27454_27484[(1)] = (6));

} else {
var statearr_27455_27485 = state_27450__$1;
(statearr_27455_27485[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (15))){
var inst_27446 = (state_27450[(2)]);
var state_27450__$1 = state_27450;
var statearr_27456_27486 = state_27450__$1;
(statearr_27456_27486[(2)] = inst_27446);

(statearr_27456_27486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (13))){
var inst_27439 = cljs.core.async.close_BANG_.call(null,out);
var state_27450__$1 = state_27450;
var statearr_27457_27487 = state_27450__$1;
(statearr_27457_27487[(2)] = inst_27439);

(statearr_27457_27487[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (6))){
var state_27450__$1 = state_27450;
var statearr_27458_27488 = state_27450__$1;
(statearr_27458_27488[(2)] = null);

(statearr_27458_27488[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (3))){
var inst_27448 = (state_27450[(2)]);
var state_27450__$1 = state_27450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27450__$1,inst_27448);
} else {
if((state_val_27451 === (12))){
var inst_27436 = (state_27450[(8)]);
var inst_27436__$1 = (state_27450[(2)]);
var inst_27437 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27436__$1);
var state_27450__$1 = (function (){var statearr_27459 = state_27450;
(statearr_27459[(8)] = inst_27436__$1);

return statearr_27459;
})();
if(cljs.core.truth_(inst_27437)){
var statearr_27460_27489 = state_27450__$1;
(statearr_27460_27489[(1)] = (13));

} else {
var statearr_27461_27490 = state_27450__$1;
(statearr_27461_27490[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (2))){
var inst_27413 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27414 = (0);
var state_27450__$1 = (function (){var statearr_27462 = state_27450;
(statearr_27462[(7)] = inst_27414);

(statearr_27462[(9)] = inst_27413);

return statearr_27462;
})();
var statearr_27463_27491 = state_27450__$1;
(statearr_27463_27491[(2)] = null);

(statearr_27463_27491[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (11))){
var inst_27414 = (state_27450[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27450,(10),Object,null,(9));
var inst_27423 = chs__$1.call(null,inst_27414);
var inst_27424 = done.call(null,inst_27414);
var inst_27425 = cljs.core.async.take_BANG_.call(null,inst_27423,inst_27424);
var state_27450__$1 = state_27450;
var statearr_27464_27492 = state_27450__$1;
(statearr_27464_27492[(2)] = inst_27425);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27450__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (9))){
var inst_27414 = (state_27450[(7)]);
var inst_27427 = (state_27450[(2)]);
var inst_27428 = (inst_27414 + (1));
var inst_27414__$1 = inst_27428;
var state_27450__$1 = (function (){var statearr_27465 = state_27450;
(statearr_27465[(7)] = inst_27414__$1);

(statearr_27465[(10)] = inst_27427);

return statearr_27465;
})();
var statearr_27466_27493 = state_27450__$1;
(statearr_27466_27493[(2)] = null);

(statearr_27466_27493[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (5))){
var inst_27434 = (state_27450[(2)]);
var state_27450__$1 = (function (){var statearr_27467 = state_27450;
(statearr_27467[(11)] = inst_27434);

return statearr_27467;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27450__$1,(12),dchan);
} else {
if((state_val_27451 === (14))){
var inst_27436 = (state_27450[(8)]);
var inst_27441 = cljs.core.apply.call(null,f,inst_27436);
var state_27450__$1 = state_27450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27450__$1,(16),out,inst_27441);
} else {
if((state_val_27451 === (16))){
var inst_27443 = (state_27450[(2)]);
var state_27450__$1 = (function (){var statearr_27468 = state_27450;
(statearr_27468[(12)] = inst_27443);

return statearr_27468;
})();
var statearr_27469_27494 = state_27450__$1;
(statearr_27469_27494[(2)] = null);

(statearr_27469_27494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (10))){
var inst_27418 = (state_27450[(2)]);
var inst_27419 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27450__$1 = (function (){var statearr_27470 = state_27450;
(statearr_27470[(13)] = inst_27418);

return statearr_27470;
})();
var statearr_27471_27495 = state_27450__$1;
(statearr_27471_27495[(2)] = inst_27419);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27450__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (8))){
var inst_27432 = (state_27450[(2)]);
var state_27450__$1 = state_27450;
var statearr_27472_27496 = state_27450__$1;
(statearr_27472_27496[(2)] = inst_27432);

(statearr_27472_27496[(1)] = (5));


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
});})(c__19453__auto___27481,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19391__auto__,c__19453__auto___27481,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19392__auto__ = null;
var cljs$core$async$state_machine__19392__auto____0 = (function (){
var statearr_27476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27476[(0)] = cljs$core$async$state_machine__19392__auto__);

(statearr_27476[(1)] = (1));

return statearr_27476;
});
var cljs$core$async$state_machine__19392__auto____1 = (function (state_27450){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_27450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e27477){if((e27477 instanceof Object)){
var ex__19395__auto__ = e27477;
var statearr_27478_27497 = state_27450;
(statearr_27478_27497[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27498 = state_27450;
state_27450 = G__27498;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
cljs$core$async$state_machine__19392__auto__ = function(state_27450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19392__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19392__auto____1.call(this,state_27450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19392__auto____0;
cljs$core$async$state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19392__auto____1;
return cljs$core$async$state_machine__19392__auto__;
})()
;})(switch__19391__auto__,c__19453__auto___27481,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19455__auto__ = (function (){var statearr_27479 = f__19454__auto__.call(null);
(statearr_27479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto___27481);

return statearr_27479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto___27481,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__27501 = arguments.length;
switch (G__27501) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19453__auto___27556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto___27556,out){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (c__19453__auto___27556,out){
return (function (state_27531){
var state_val_27532 = (state_27531[(1)]);
if((state_val_27532 === (7))){
var inst_27510 = (state_27531[(7)]);
var inst_27511 = (state_27531[(8)]);
var inst_27510__$1 = (state_27531[(2)]);
var inst_27511__$1 = cljs.core.nth.call(null,inst_27510__$1,(0),null);
var inst_27512 = cljs.core.nth.call(null,inst_27510__$1,(1),null);
var inst_27513 = (inst_27511__$1 == null);
var state_27531__$1 = (function (){var statearr_27533 = state_27531;
(statearr_27533[(9)] = inst_27512);

(statearr_27533[(7)] = inst_27510__$1);

(statearr_27533[(8)] = inst_27511__$1);

return statearr_27533;
})();
if(cljs.core.truth_(inst_27513)){
var statearr_27534_27557 = state_27531__$1;
(statearr_27534_27557[(1)] = (8));

} else {
var statearr_27535_27558 = state_27531__$1;
(statearr_27535_27558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27532 === (1))){
var inst_27502 = cljs.core.vec.call(null,chs);
var inst_27503 = inst_27502;
var state_27531__$1 = (function (){var statearr_27536 = state_27531;
(statearr_27536[(10)] = inst_27503);

return statearr_27536;
})();
var statearr_27537_27559 = state_27531__$1;
(statearr_27537_27559[(2)] = null);

(statearr_27537_27559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27532 === (4))){
var inst_27503 = (state_27531[(10)]);
var state_27531__$1 = state_27531;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27531__$1,(7),inst_27503);
} else {
if((state_val_27532 === (6))){
var inst_27527 = (state_27531[(2)]);
var state_27531__$1 = state_27531;
var statearr_27538_27560 = state_27531__$1;
(statearr_27538_27560[(2)] = inst_27527);

(statearr_27538_27560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27532 === (3))){
var inst_27529 = (state_27531[(2)]);
var state_27531__$1 = state_27531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27531__$1,inst_27529);
} else {
if((state_val_27532 === (2))){
var inst_27503 = (state_27531[(10)]);
var inst_27505 = cljs.core.count.call(null,inst_27503);
var inst_27506 = (inst_27505 > (0));
var state_27531__$1 = state_27531;
if(cljs.core.truth_(inst_27506)){
var statearr_27540_27561 = state_27531__$1;
(statearr_27540_27561[(1)] = (4));

} else {
var statearr_27541_27562 = state_27531__$1;
(statearr_27541_27562[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27532 === (11))){
var inst_27503 = (state_27531[(10)]);
var inst_27520 = (state_27531[(2)]);
var tmp27539 = inst_27503;
var inst_27503__$1 = tmp27539;
var state_27531__$1 = (function (){var statearr_27542 = state_27531;
(statearr_27542[(10)] = inst_27503__$1);

(statearr_27542[(11)] = inst_27520);

return statearr_27542;
})();
var statearr_27543_27563 = state_27531__$1;
(statearr_27543_27563[(2)] = null);

(statearr_27543_27563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27532 === (9))){
var inst_27511 = (state_27531[(8)]);
var state_27531__$1 = state_27531;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27531__$1,(11),out,inst_27511);
} else {
if((state_val_27532 === (5))){
var inst_27525 = cljs.core.async.close_BANG_.call(null,out);
var state_27531__$1 = state_27531;
var statearr_27544_27564 = state_27531__$1;
(statearr_27544_27564[(2)] = inst_27525);

(statearr_27544_27564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27532 === (10))){
var inst_27523 = (state_27531[(2)]);
var state_27531__$1 = state_27531;
var statearr_27545_27565 = state_27531__$1;
(statearr_27545_27565[(2)] = inst_27523);

(statearr_27545_27565[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27532 === (8))){
var inst_27503 = (state_27531[(10)]);
var inst_27512 = (state_27531[(9)]);
var inst_27510 = (state_27531[(7)]);
var inst_27511 = (state_27531[(8)]);
var inst_27515 = (function (){var cs = inst_27503;
var vec__27508 = inst_27510;
var v = inst_27511;
var c = inst_27512;
return ((function (cs,vec__27508,v,c,inst_27503,inst_27512,inst_27510,inst_27511,state_val_27532,c__19453__auto___27556,out){
return (function (p1__27499_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27499_SHARP_);
});
;})(cs,vec__27508,v,c,inst_27503,inst_27512,inst_27510,inst_27511,state_val_27532,c__19453__auto___27556,out))
})();
var inst_27516 = cljs.core.filterv.call(null,inst_27515,inst_27503);
var inst_27503__$1 = inst_27516;
var state_27531__$1 = (function (){var statearr_27546 = state_27531;
(statearr_27546[(10)] = inst_27503__$1);

return statearr_27546;
})();
var statearr_27547_27566 = state_27531__$1;
(statearr_27547_27566[(2)] = null);

(statearr_27547_27566[(1)] = (2));


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
});})(c__19453__auto___27556,out))
;
return ((function (switch__19391__auto__,c__19453__auto___27556,out){
return (function() {
var cljs$core$async$state_machine__19392__auto__ = null;
var cljs$core$async$state_machine__19392__auto____0 = (function (){
var statearr_27551 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27551[(0)] = cljs$core$async$state_machine__19392__auto__);

(statearr_27551[(1)] = (1));

return statearr_27551;
});
var cljs$core$async$state_machine__19392__auto____1 = (function (state_27531){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_27531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e27552){if((e27552 instanceof Object)){
var ex__19395__auto__ = e27552;
var statearr_27553_27567 = state_27531;
(statearr_27553_27567[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27568 = state_27531;
state_27531 = G__27568;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
cljs$core$async$state_machine__19392__auto__ = function(state_27531){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19392__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19392__auto____1.call(this,state_27531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19392__auto____0;
cljs$core$async$state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19392__auto____1;
return cljs$core$async$state_machine__19392__auto__;
})()
;})(switch__19391__auto__,c__19453__auto___27556,out))
})();
var state__19455__auto__ = (function (){var statearr_27554 = f__19454__auto__.call(null);
(statearr_27554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto___27556);

return statearr_27554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto___27556,out))
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
var G__27570 = arguments.length;
switch (G__27570) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19453__auto___27618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto___27618,out){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (c__19453__auto___27618,out){
return (function (state_27594){
var state_val_27595 = (state_27594[(1)]);
if((state_val_27595 === (7))){
var inst_27576 = (state_27594[(7)]);
var inst_27576__$1 = (state_27594[(2)]);
var inst_27577 = (inst_27576__$1 == null);
var inst_27578 = cljs.core.not.call(null,inst_27577);
var state_27594__$1 = (function (){var statearr_27596 = state_27594;
(statearr_27596[(7)] = inst_27576__$1);

return statearr_27596;
})();
if(inst_27578){
var statearr_27597_27619 = state_27594__$1;
(statearr_27597_27619[(1)] = (8));

} else {
var statearr_27598_27620 = state_27594__$1;
(statearr_27598_27620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27595 === (1))){
var inst_27571 = (0);
var state_27594__$1 = (function (){var statearr_27599 = state_27594;
(statearr_27599[(8)] = inst_27571);

return statearr_27599;
})();
var statearr_27600_27621 = state_27594__$1;
(statearr_27600_27621[(2)] = null);

(statearr_27600_27621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27595 === (4))){
var state_27594__$1 = state_27594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27594__$1,(7),ch);
} else {
if((state_val_27595 === (6))){
var inst_27589 = (state_27594[(2)]);
var state_27594__$1 = state_27594;
var statearr_27601_27622 = state_27594__$1;
(statearr_27601_27622[(2)] = inst_27589);

(statearr_27601_27622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27595 === (3))){
var inst_27591 = (state_27594[(2)]);
var inst_27592 = cljs.core.async.close_BANG_.call(null,out);
var state_27594__$1 = (function (){var statearr_27602 = state_27594;
(statearr_27602[(9)] = inst_27591);

return statearr_27602;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27594__$1,inst_27592);
} else {
if((state_val_27595 === (2))){
var inst_27571 = (state_27594[(8)]);
var inst_27573 = (inst_27571 < n);
var state_27594__$1 = state_27594;
if(cljs.core.truth_(inst_27573)){
var statearr_27603_27623 = state_27594__$1;
(statearr_27603_27623[(1)] = (4));

} else {
var statearr_27604_27624 = state_27594__$1;
(statearr_27604_27624[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27595 === (11))){
var inst_27571 = (state_27594[(8)]);
var inst_27581 = (state_27594[(2)]);
var inst_27582 = (inst_27571 + (1));
var inst_27571__$1 = inst_27582;
var state_27594__$1 = (function (){var statearr_27605 = state_27594;
(statearr_27605[(10)] = inst_27581);

(statearr_27605[(8)] = inst_27571__$1);

return statearr_27605;
})();
var statearr_27606_27625 = state_27594__$1;
(statearr_27606_27625[(2)] = null);

(statearr_27606_27625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27595 === (9))){
var state_27594__$1 = state_27594;
var statearr_27607_27626 = state_27594__$1;
(statearr_27607_27626[(2)] = null);

(statearr_27607_27626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27595 === (5))){
var state_27594__$1 = state_27594;
var statearr_27608_27627 = state_27594__$1;
(statearr_27608_27627[(2)] = null);

(statearr_27608_27627[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27595 === (10))){
var inst_27586 = (state_27594[(2)]);
var state_27594__$1 = state_27594;
var statearr_27609_27628 = state_27594__$1;
(statearr_27609_27628[(2)] = inst_27586);

(statearr_27609_27628[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27595 === (8))){
var inst_27576 = (state_27594[(7)]);
var state_27594__$1 = state_27594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27594__$1,(11),out,inst_27576);
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
});})(c__19453__auto___27618,out))
;
return ((function (switch__19391__auto__,c__19453__auto___27618,out){
return (function() {
var cljs$core$async$state_machine__19392__auto__ = null;
var cljs$core$async$state_machine__19392__auto____0 = (function (){
var statearr_27613 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27613[(0)] = cljs$core$async$state_machine__19392__auto__);

(statearr_27613[(1)] = (1));

return statearr_27613;
});
var cljs$core$async$state_machine__19392__auto____1 = (function (state_27594){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_27594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e27614){if((e27614 instanceof Object)){
var ex__19395__auto__ = e27614;
var statearr_27615_27629 = state_27594;
(statearr_27615_27629[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27630 = state_27594;
state_27594 = G__27630;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
cljs$core$async$state_machine__19392__auto__ = function(state_27594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19392__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19392__auto____1.call(this,state_27594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19392__auto____0;
cljs$core$async$state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19392__auto____1;
return cljs$core$async$state_machine__19392__auto__;
})()
;})(switch__19391__auto__,c__19453__auto___27618,out))
})();
var state__19455__auto__ = (function (){var statearr_27616 = f__19454__auto__.call(null);
(statearr_27616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto___27618);

return statearr_27616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto___27618,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t27638 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27638 = (function (map_LT_,f,ch,meta27639){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27639 = meta27639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27640,meta27639__$1){
var self__ = this;
var _27640__$1 = this;
return (new cljs.core.async.t27638(self__.map_LT_,self__.f,self__.ch,meta27639__$1));
});

cljs.core.async.t27638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27640){
var self__ = this;
var _27640__$1 = this;
return self__.meta27639;
});

cljs.core.async.t27638.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27638.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27638.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27638.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27638.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27641 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27641 = (function (map_LT_,f,ch,meta27639,_,fn1,meta27642){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27639 = meta27639;
this._ = _;
this.fn1 = fn1;
this.meta27642 = meta27642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27643,meta27642__$1){
var self__ = this;
var _27643__$1 = this;
return (new cljs.core.async.t27641(self__.map_LT_,self__.f,self__.ch,self__.meta27639,self__._,self__.fn1,meta27642__$1));
});})(___$1))
;

cljs.core.async.t27641.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27643){
var self__ = this;
var _27643__$1 = this;
return self__.meta27642;
});})(___$1))
;

cljs.core.async.t27641.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27641.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27641.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27631_SHARP_){
return f1.call(null,(((p1__27631_SHARP_ == null))?null:self__.f.call(null,p1__27631_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27641.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27639","meta27639",1850280114,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27642","meta27642",818023349,null)], null);
});})(___$1))
;

cljs.core.async.t27641.cljs$lang$type = true;

cljs.core.async.t27641.cljs$lang$ctorStr = "cljs.core.async/t27641";

cljs.core.async.t27641.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16688__auto__,writer__16689__auto__,opt__16690__auto__){
return cljs.core._write.call(null,writer__16689__auto__,"cljs.core.async/t27641");
});})(___$1))
;

cljs.core.async.__GT_t27641 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t27641(map_LT___$1,f__$1,ch__$1,meta27639__$1,___$2,fn1__$1,meta27642){
return (new cljs.core.async.t27641(map_LT___$1,f__$1,ch__$1,meta27639__$1,___$2,fn1__$1,meta27642));
});})(___$1))
;

}

return (new cljs.core.async.t27641(self__.map_LT_,self__.f,self__.ch,self__.meta27639,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16097__auto__ = ret;
if(cljs.core.truth_(and__16097__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16097__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t27638.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27638.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27639","meta27639",1850280114,null)], null);
});

cljs.core.async.t27638.cljs$lang$type = true;

cljs.core.async.t27638.cljs$lang$ctorStr = "cljs.core.async/t27638";

cljs.core.async.t27638.cljs$lang$ctorPrWriter = (function (this__16688__auto__,writer__16689__auto__,opt__16690__auto__){
return cljs.core._write.call(null,writer__16689__auto__,"cljs.core.async/t27638");
});

cljs.core.async.__GT_t27638 = (function cljs$core$async$map_LT__$___GT_t27638(map_LT___$1,f__$1,ch__$1,meta27639){
return (new cljs.core.async.t27638(map_LT___$1,f__$1,ch__$1,meta27639));
});

}

return (new cljs.core.async.t27638(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t27647 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27647 = (function (map_GT_,f,ch,meta27648){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27648 = meta27648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27649,meta27648__$1){
var self__ = this;
var _27649__$1 = this;
return (new cljs.core.async.t27647(self__.map_GT_,self__.f,self__.ch,meta27648__$1));
});

cljs.core.async.t27647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27649){
var self__ = this;
var _27649__$1 = this;
return self__.meta27648;
});

cljs.core.async.t27647.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27647.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27647.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27647.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27647.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27647.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27647.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27648","meta27648",2103034577,null)], null);
});

cljs.core.async.t27647.cljs$lang$type = true;

cljs.core.async.t27647.cljs$lang$ctorStr = "cljs.core.async/t27647";

cljs.core.async.t27647.cljs$lang$ctorPrWriter = (function (this__16688__auto__,writer__16689__auto__,opt__16690__auto__){
return cljs.core._write.call(null,writer__16689__auto__,"cljs.core.async/t27647");
});

cljs.core.async.__GT_t27647 = (function cljs$core$async$map_GT__$___GT_t27647(map_GT___$1,f__$1,ch__$1,meta27648){
return (new cljs.core.async.t27647(map_GT___$1,f__$1,ch__$1,meta27648));
});

}

return (new cljs.core.async.t27647(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t27653 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27653 = (function (filter_GT_,p,ch,meta27654){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27654 = meta27654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27655,meta27654__$1){
var self__ = this;
var _27655__$1 = this;
return (new cljs.core.async.t27653(self__.filter_GT_,self__.p,self__.ch,meta27654__$1));
});

cljs.core.async.t27653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27655){
var self__ = this;
var _27655__$1 = this;
return self__.meta27654;
});

cljs.core.async.t27653.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27653.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27653.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27653.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27653.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27653.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27653.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27653.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27654","meta27654",-440845788,null)], null);
});

cljs.core.async.t27653.cljs$lang$type = true;

cljs.core.async.t27653.cljs$lang$ctorStr = "cljs.core.async/t27653";

cljs.core.async.t27653.cljs$lang$ctorPrWriter = (function (this__16688__auto__,writer__16689__auto__,opt__16690__auto__){
return cljs.core._write.call(null,writer__16689__auto__,"cljs.core.async/t27653");
});

cljs.core.async.__GT_t27653 = (function cljs$core$async$filter_GT__$___GT_t27653(filter_GT___$1,p__$1,ch__$1,meta27654){
return (new cljs.core.async.t27653(filter_GT___$1,p__$1,ch__$1,meta27654));
});

}

return (new cljs.core.async.t27653(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27657 = arguments.length;
switch (G__27657) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19453__auto___27700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto___27700,out){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (c__19453__auto___27700,out){
return (function (state_27678){
var state_val_27679 = (state_27678[(1)]);
if((state_val_27679 === (7))){
var inst_27674 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
var statearr_27680_27701 = state_27678__$1;
(statearr_27680_27701[(2)] = inst_27674);

(statearr_27680_27701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (1))){
var state_27678__$1 = state_27678;
var statearr_27681_27702 = state_27678__$1;
(statearr_27681_27702[(2)] = null);

(statearr_27681_27702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (4))){
var inst_27660 = (state_27678[(7)]);
var inst_27660__$1 = (state_27678[(2)]);
var inst_27661 = (inst_27660__$1 == null);
var state_27678__$1 = (function (){var statearr_27682 = state_27678;
(statearr_27682[(7)] = inst_27660__$1);

return statearr_27682;
})();
if(cljs.core.truth_(inst_27661)){
var statearr_27683_27703 = state_27678__$1;
(statearr_27683_27703[(1)] = (5));

} else {
var statearr_27684_27704 = state_27678__$1;
(statearr_27684_27704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (6))){
var inst_27660 = (state_27678[(7)]);
var inst_27665 = p.call(null,inst_27660);
var state_27678__$1 = state_27678;
if(cljs.core.truth_(inst_27665)){
var statearr_27685_27705 = state_27678__$1;
(statearr_27685_27705[(1)] = (8));

} else {
var statearr_27686_27706 = state_27678__$1;
(statearr_27686_27706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (3))){
var inst_27676 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27678__$1,inst_27676);
} else {
if((state_val_27679 === (2))){
var state_27678__$1 = state_27678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27678__$1,(4),ch);
} else {
if((state_val_27679 === (11))){
var inst_27668 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
var statearr_27687_27707 = state_27678__$1;
(statearr_27687_27707[(2)] = inst_27668);

(statearr_27687_27707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (9))){
var state_27678__$1 = state_27678;
var statearr_27688_27708 = state_27678__$1;
(statearr_27688_27708[(2)] = null);

(statearr_27688_27708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (5))){
var inst_27663 = cljs.core.async.close_BANG_.call(null,out);
var state_27678__$1 = state_27678;
var statearr_27689_27709 = state_27678__$1;
(statearr_27689_27709[(2)] = inst_27663);

(statearr_27689_27709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (10))){
var inst_27671 = (state_27678[(2)]);
var state_27678__$1 = (function (){var statearr_27690 = state_27678;
(statearr_27690[(8)] = inst_27671);

return statearr_27690;
})();
var statearr_27691_27710 = state_27678__$1;
(statearr_27691_27710[(2)] = null);

(statearr_27691_27710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (8))){
var inst_27660 = (state_27678[(7)]);
var state_27678__$1 = state_27678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27678__$1,(11),out,inst_27660);
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
});})(c__19453__auto___27700,out))
;
return ((function (switch__19391__auto__,c__19453__auto___27700,out){
return (function() {
var cljs$core$async$state_machine__19392__auto__ = null;
var cljs$core$async$state_machine__19392__auto____0 = (function (){
var statearr_27695 = [null,null,null,null,null,null,null,null,null];
(statearr_27695[(0)] = cljs$core$async$state_machine__19392__auto__);

(statearr_27695[(1)] = (1));

return statearr_27695;
});
var cljs$core$async$state_machine__19392__auto____1 = (function (state_27678){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_27678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e27696){if((e27696 instanceof Object)){
var ex__19395__auto__ = e27696;
var statearr_27697_27711 = state_27678;
(statearr_27697_27711[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27712 = state_27678;
state_27678 = G__27712;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
cljs$core$async$state_machine__19392__auto__ = function(state_27678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19392__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19392__auto____1.call(this,state_27678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19392__auto____0;
cljs$core$async$state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19392__auto____1;
return cljs$core$async$state_machine__19392__auto__;
})()
;})(switch__19391__auto__,c__19453__auto___27700,out))
})();
var state__19455__auto__ = (function (){var statearr_27698 = f__19454__auto__.call(null);
(statearr_27698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto___27700);

return statearr_27698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto___27700,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__27714 = arguments.length;
switch (G__27714) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var c__19453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto__){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (c__19453__auto__){
return (function (state_27881){
var state_val_27882 = (state_27881[(1)]);
if((state_val_27882 === (7))){
var inst_27877 = (state_27881[(2)]);
var state_27881__$1 = state_27881;
var statearr_27883_27924 = state_27881__$1;
(statearr_27883_27924[(2)] = inst_27877);

(statearr_27883_27924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (20))){
var inst_27847 = (state_27881[(7)]);
var inst_27858 = (state_27881[(2)]);
var inst_27859 = cljs.core.next.call(null,inst_27847);
var inst_27833 = inst_27859;
var inst_27834 = null;
var inst_27835 = (0);
var inst_27836 = (0);
var state_27881__$1 = (function (){var statearr_27884 = state_27881;
(statearr_27884[(8)] = inst_27834);

(statearr_27884[(9)] = inst_27836);

(statearr_27884[(10)] = inst_27858);

(statearr_27884[(11)] = inst_27833);

(statearr_27884[(12)] = inst_27835);

return statearr_27884;
})();
var statearr_27885_27925 = state_27881__$1;
(statearr_27885_27925[(2)] = null);

(statearr_27885_27925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (1))){
var state_27881__$1 = state_27881;
var statearr_27886_27926 = state_27881__$1;
(statearr_27886_27926[(2)] = null);

(statearr_27886_27926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (4))){
var inst_27822 = (state_27881[(13)]);
var inst_27822__$1 = (state_27881[(2)]);
var inst_27823 = (inst_27822__$1 == null);
var state_27881__$1 = (function (){var statearr_27887 = state_27881;
(statearr_27887[(13)] = inst_27822__$1);

return statearr_27887;
})();
if(cljs.core.truth_(inst_27823)){
var statearr_27888_27927 = state_27881__$1;
(statearr_27888_27927[(1)] = (5));

} else {
var statearr_27889_27928 = state_27881__$1;
(statearr_27889_27928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (15))){
var state_27881__$1 = state_27881;
var statearr_27893_27929 = state_27881__$1;
(statearr_27893_27929[(2)] = null);

(statearr_27893_27929[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (21))){
var state_27881__$1 = state_27881;
var statearr_27894_27930 = state_27881__$1;
(statearr_27894_27930[(2)] = null);

(statearr_27894_27930[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (13))){
var inst_27834 = (state_27881[(8)]);
var inst_27836 = (state_27881[(9)]);
var inst_27833 = (state_27881[(11)]);
var inst_27835 = (state_27881[(12)]);
var inst_27843 = (state_27881[(2)]);
var inst_27844 = (inst_27836 + (1));
var tmp27890 = inst_27834;
var tmp27891 = inst_27833;
var tmp27892 = inst_27835;
var inst_27833__$1 = tmp27891;
var inst_27834__$1 = tmp27890;
var inst_27835__$1 = tmp27892;
var inst_27836__$1 = inst_27844;
var state_27881__$1 = (function (){var statearr_27895 = state_27881;
(statearr_27895[(8)] = inst_27834__$1);

(statearr_27895[(9)] = inst_27836__$1);

(statearr_27895[(11)] = inst_27833__$1);

(statearr_27895[(14)] = inst_27843);

(statearr_27895[(12)] = inst_27835__$1);

return statearr_27895;
})();
var statearr_27896_27931 = state_27881__$1;
(statearr_27896_27931[(2)] = null);

(statearr_27896_27931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (22))){
var state_27881__$1 = state_27881;
var statearr_27897_27932 = state_27881__$1;
(statearr_27897_27932[(2)] = null);

(statearr_27897_27932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (6))){
var inst_27822 = (state_27881[(13)]);
var inst_27831 = f.call(null,inst_27822);
var inst_27832 = cljs.core.seq.call(null,inst_27831);
var inst_27833 = inst_27832;
var inst_27834 = null;
var inst_27835 = (0);
var inst_27836 = (0);
var state_27881__$1 = (function (){var statearr_27898 = state_27881;
(statearr_27898[(8)] = inst_27834);

(statearr_27898[(9)] = inst_27836);

(statearr_27898[(11)] = inst_27833);

(statearr_27898[(12)] = inst_27835);

return statearr_27898;
})();
var statearr_27899_27933 = state_27881__$1;
(statearr_27899_27933[(2)] = null);

(statearr_27899_27933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (17))){
var inst_27847 = (state_27881[(7)]);
var inst_27851 = cljs.core.chunk_first.call(null,inst_27847);
var inst_27852 = cljs.core.chunk_rest.call(null,inst_27847);
var inst_27853 = cljs.core.count.call(null,inst_27851);
var inst_27833 = inst_27852;
var inst_27834 = inst_27851;
var inst_27835 = inst_27853;
var inst_27836 = (0);
var state_27881__$1 = (function (){var statearr_27900 = state_27881;
(statearr_27900[(8)] = inst_27834);

(statearr_27900[(9)] = inst_27836);

(statearr_27900[(11)] = inst_27833);

(statearr_27900[(12)] = inst_27835);

return statearr_27900;
})();
var statearr_27901_27934 = state_27881__$1;
(statearr_27901_27934[(2)] = null);

(statearr_27901_27934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (3))){
var inst_27879 = (state_27881[(2)]);
var state_27881__$1 = state_27881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27881__$1,inst_27879);
} else {
if((state_val_27882 === (12))){
var inst_27867 = (state_27881[(2)]);
var state_27881__$1 = state_27881;
var statearr_27902_27935 = state_27881__$1;
(statearr_27902_27935[(2)] = inst_27867);

(statearr_27902_27935[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (2))){
var state_27881__$1 = state_27881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27881__$1,(4),in$);
} else {
if((state_val_27882 === (23))){
var inst_27875 = (state_27881[(2)]);
var state_27881__$1 = state_27881;
var statearr_27903_27936 = state_27881__$1;
(statearr_27903_27936[(2)] = inst_27875);

(statearr_27903_27936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (19))){
var inst_27862 = (state_27881[(2)]);
var state_27881__$1 = state_27881;
var statearr_27904_27937 = state_27881__$1;
(statearr_27904_27937[(2)] = inst_27862);

(statearr_27904_27937[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (11))){
var inst_27847 = (state_27881[(7)]);
var inst_27833 = (state_27881[(11)]);
var inst_27847__$1 = cljs.core.seq.call(null,inst_27833);
var state_27881__$1 = (function (){var statearr_27905 = state_27881;
(statearr_27905[(7)] = inst_27847__$1);

return statearr_27905;
})();
if(inst_27847__$1){
var statearr_27906_27938 = state_27881__$1;
(statearr_27906_27938[(1)] = (14));

} else {
var statearr_27907_27939 = state_27881__$1;
(statearr_27907_27939[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (9))){
var inst_27869 = (state_27881[(2)]);
var inst_27870 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27881__$1 = (function (){var statearr_27908 = state_27881;
(statearr_27908[(15)] = inst_27869);

return statearr_27908;
})();
if(cljs.core.truth_(inst_27870)){
var statearr_27909_27940 = state_27881__$1;
(statearr_27909_27940[(1)] = (21));

} else {
var statearr_27910_27941 = state_27881__$1;
(statearr_27910_27941[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (5))){
var inst_27825 = cljs.core.async.close_BANG_.call(null,out);
var state_27881__$1 = state_27881;
var statearr_27911_27942 = state_27881__$1;
(statearr_27911_27942[(2)] = inst_27825);

(statearr_27911_27942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (14))){
var inst_27847 = (state_27881[(7)]);
var inst_27849 = cljs.core.chunked_seq_QMARK_.call(null,inst_27847);
var state_27881__$1 = state_27881;
if(inst_27849){
var statearr_27912_27943 = state_27881__$1;
(statearr_27912_27943[(1)] = (17));

} else {
var statearr_27913_27944 = state_27881__$1;
(statearr_27913_27944[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (16))){
var inst_27865 = (state_27881[(2)]);
var state_27881__$1 = state_27881;
var statearr_27914_27945 = state_27881__$1;
(statearr_27914_27945[(2)] = inst_27865);

(statearr_27914_27945[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (10))){
var inst_27834 = (state_27881[(8)]);
var inst_27836 = (state_27881[(9)]);
var inst_27841 = cljs.core._nth.call(null,inst_27834,inst_27836);
var state_27881__$1 = state_27881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27881__$1,(13),out,inst_27841);
} else {
if((state_val_27882 === (18))){
var inst_27847 = (state_27881[(7)]);
var inst_27856 = cljs.core.first.call(null,inst_27847);
var state_27881__$1 = state_27881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27881__$1,(20),out,inst_27856);
} else {
if((state_val_27882 === (8))){
var inst_27836 = (state_27881[(9)]);
var inst_27835 = (state_27881[(12)]);
var inst_27838 = (inst_27836 < inst_27835);
var inst_27839 = inst_27838;
var state_27881__$1 = state_27881;
if(cljs.core.truth_(inst_27839)){
var statearr_27915_27946 = state_27881__$1;
(statearr_27915_27946[(1)] = (10));

} else {
var statearr_27916_27947 = state_27881__$1;
(statearr_27916_27947[(1)] = (11));

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
});})(c__19453__auto__))
;
return ((function (switch__19391__auto__,c__19453__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19392__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19392__auto____0 = (function (){
var statearr_27920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27920[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19392__auto__);

(statearr_27920[(1)] = (1));

return statearr_27920;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19392__auto____1 = (function (state_27881){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_27881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e27921){if((e27921 instanceof Object)){
var ex__19395__auto__ = e27921;
var statearr_27922_27948 = state_27881;
(statearr_27922_27948[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27949 = state_27881;
state_27881 = G__27949;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19392__auto__ = function(state_27881){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19392__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19392__auto____1.call(this,state_27881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19392__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19392__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19392__auto__;
})()
;})(switch__19391__auto__,c__19453__auto__))
})();
var state__19455__auto__ = (function (){var statearr_27923 = f__19454__auto__.call(null);
(statearr_27923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto__);

return statearr_27923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto__))
);

return c__19453__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__27951 = arguments.length;
switch (G__27951) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var G__27954 = arguments.length;
switch (G__27954) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var G__27957 = arguments.length;
switch (G__27957) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19453__auto___28007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto___28007,out){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (c__19453__auto___28007,out){
return (function (state_27981){
var state_val_27982 = (state_27981[(1)]);
if((state_val_27982 === (7))){
var inst_27976 = (state_27981[(2)]);
var state_27981__$1 = state_27981;
var statearr_27983_28008 = state_27981__$1;
(statearr_27983_28008[(2)] = inst_27976);

(statearr_27983_28008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (1))){
var inst_27958 = null;
var state_27981__$1 = (function (){var statearr_27984 = state_27981;
(statearr_27984[(7)] = inst_27958);

return statearr_27984;
})();
var statearr_27985_28009 = state_27981__$1;
(statearr_27985_28009[(2)] = null);

(statearr_27985_28009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (4))){
var inst_27961 = (state_27981[(8)]);
var inst_27961__$1 = (state_27981[(2)]);
var inst_27962 = (inst_27961__$1 == null);
var inst_27963 = cljs.core.not.call(null,inst_27962);
var state_27981__$1 = (function (){var statearr_27986 = state_27981;
(statearr_27986[(8)] = inst_27961__$1);

return statearr_27986;
})();
if(inst_27963){
var statearr_27987_28010 = state_27981__$1;
(statearr_27987_28010[(1)] = (5));

} else {
var statearr_27988_28011 = state_27981__$1;
(statearr_27988_28011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (6))){
var state_27981__$1 = state_27981;
var statearr_27989_28012 = state_27981__$1;
(statearr_27989_28012[(2)] = null);

(statearr_27989_28012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (3))){
var inst_27978 = (state_27981[(2)]);
var inst_27979 = cljs.core.async.close_BANG_.call(null,out);
var state_27981__$1 = (function (){var statearr_27990 = state_27981;
(statearr_27990[(9)] = inst_27978);

return statearr_27990;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27981__$1,inst_27979);
} else {
if((state_val_27982 === (2))){
var state_27981__$1 = state_27981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27981__$1,(4),ch);
} else {
if((state_val_27982 === (11))){
var inst_27961 = (state_27981[(8)]);
var inst_27970 = (state_27981[(2)]);
var inst_27958 = inst_27961;
var state_27981__$1 = (function (){var statearr_27991 = state_27981;
(statearr_27991[(10)] = inst_27970);

(statearr_27991[(7)] = inst_27958);

return statearr_27991;
})();
var statearr_27992_28013 = state_27981__$1;
(statearr_27992_28013[(2)] = null);

(statearr_27992_28013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (9))){
var inst_27961 = (state_27981[(8)]);
var state_27981__$1 = state_27981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27981__$1,(11),out,inst_27961);
} else {
if((state_val_27982 === (5))){
var inst_27961 = (state_27981[(8)]);
var inst_27958 = (state_27981[(7)]);
var inst_27965 = cljs.core._EQ_.call(null,inst_27961,inst_27958);
var state_27981__$1 = state_27981;
if(inst_27965){
var statearr_27994_28014 = state_27981__$1;
(statearr_27994_28014[(1)] = (8));

} else {
var statearr_27995_28015 = state_27981__$1;
(statearr_27995_28015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (10))){
var inst_27973 = (state_27981[(2)]);
var state_27981__$1 = state_27981;
var statearr_27996_28016 = state_27981__$1;
(statearr_27996_28016[(2)] = inst_27973);

(statearr_27996_28016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (8))){
var inst_27958 = (state_27981[(7)]);
var tmp27993 = inst_27958;
var inst_27958__$1 = tmp27993;
var state_27981__$1 = (function (){var statearr_27997 = state_27981;
(statearr_27997[(7)] = inst_27958__$1);

return statearr_27997;
})();
var statearr_27998_28017 = state_27981__$1;
(statearr_27998_28017[(2)] = null);

(statearr_27998_28017[(1)] = (2));


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
});})(c__19453__auto___28007,out))
;
return ((function (switch__19391__auto__,c__19453__auto___28007,out){
return (function() {
var cljs$core$async$state_machine__19392__auto__ = null;
var cljs$core$async$state_machine__19392__auto____0 = (function (){
var statearr_28002 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28002[(0)] = cljs$core$async$state_machine__19392__auto__);

(statearr_28002[(1)] = (1));

return statearr_28002;
});
var cljs$core$async$state_machine__19392__auto____1 = (function (state_27981){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_27981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e28003){if((e28003 instanceof Object)){
var ex__19395__auto__ = e28003;
var statearr_28004_28018 = state_27981;
(statearr_28004_28018[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28019 = state_27981;
state_27981 = G__28019;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
cljs$core$async$state_machine__19392__auto__ = function(state_27981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19392__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19392__auto____1.call(this,state_27981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19392__auto____0;
cljs$core$async$state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19392__auto____1;
return cljs$core$async$state_machine__19392__auto__;
})()
;})(switch__19391__auto__,c__19453__auto___28007,out))
})();
var state__19455__auto__ = (function (){var statearr_28005 = f__19454__auto__.call(null);
(statearr_28005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto___28007);

return statearr_28005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto___28007,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__28021 = arguments.length;
switch (G__28021) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19453__auto___28090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto___28090,out){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (c__19453__auto___28090,out){
return (function (state_28059){
var state_val_28060 = (state_28059[(1)]);
if((state_val_28060 === (7))){
var inst_28055 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28061_28091 = state_28059__$1;
(statearr_28061_28091[(2)] = inst_28055);

(statearr_28061_28091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (1))){
var inst_28022 = (new Array(n));
var inst_28023 = inst_28022;
var inst_28024 = (0);
var state_28059__$1 = (function (){var statearr_28062 = state_28059;
(statearr_28062[(7)] = inst_28024);

(statearr_28062[(8)] = inst_28023);

return statearr_28062;
})();
var statearr_28063_28092 = state_28059__$1;
(statearr_28063_28092[(2)] = null);

(statearr_28063_28092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (4))){
var inst_28027 = (state_28059[(9)]);
var inst_28027__$1 = (state_28059[(2)]);
var inst_28028 = (inst_28027__$1 == null);
var inst_28029 = cljs.core.not.call(null,inst_28028);
var state_28059__$1 = (function (){var statearr_28064 = state_28059;
(statearr_28064[(9)] = inst_28027__$1);

return statearr_28064;
})();
if(inst_28029){
var statearr_28065_28093 = state_28059__$1;
(statearr_28065_28093[(1)] = (5));

} else {
var statearr_28066_28094 = state_28059__$1;
(statearr_28066_28094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (15))){
var inst_28049 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28067_28095 = state_28059__$1;
(statearr_28067_28095[(2)] = inst_28049);

(statearr_28067_28095[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (13))){
var state_28059__$1 = state_28059;
var statearr_28068_28096 = state_28059__$1;
(statearr_28068_28096[(2)] = null);

(statearr_28068_28096[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (6))){
var inst_28024 = (state_28059[(7)]);
var inst_28045 = (inst_28024 > (0));
var state_28059__$1 = state_28059;
if(cljs.core.truth_(inst_28045)){
var statearr_28069_28097 = state_28059__$1;
(statearr_28069_28097[(1)] = (12));

} else {
var statearr_28070_28098 = state_28059__$1;
(statearr_28070_28098[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (3))){
var inst_28057 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28059__$1,inst_28057);
} else {
if((state_val_28060 === (12))){
var inst_28023 = (state_28059[(8)]);
var inst_28047 = cljs.core.vec.call(null,inst_28023);
var state_28059__$1 = state_28059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28059__$1,(15),out,inst_28047);
} else {
if((state_val_28060 === (2))){
var state_28059__$1 = state_28059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28059__$1,(4),ch);
} else {
if((state_val_28060 === (11))){
var inst_28039 = (state_28059[(2)]);
var inst_28040 = (new Array(n));
var inst_28023 = inst_28040;
var inst_28024 = (0);
var state_28059__$1 = (function (){var statearr_28071 = state_28059;
(statearr_28071[(7)] = inst_28024);

(statearr_28071[(8)] = inst_28023);

(statearr_28071[(10)] = inst_28039);

return statearr_28071;
})();
var statearr_28072_28099 = state_28059__$1;
(statearr_28072_28099[(2)] = null);

(statearr_28072_28099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (9))){
var inst_28023 = (state_28059[(8)]);
var inst_28037 = cljs.core.vec.call(null,inst_28023);
var state_28059__$1 = state_28059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28059__$1,(11),out,inst_28037);
} else {
if((state_val_28060 === (5))){
var inst_28024 = (state_28059[(7)]);
var inst_28027 = (state_28059[(9)]);
var inst_28023 = (state_28059[(8)]);
var inst_28032 = (state_28059[(11)]);
var inst_28031 = (inst_28023[inst_28024] = inst_28027);
var inst_28032__$1 = (inst_28024 + (1));
var inst_28033 = (inst_28032__$1 < n);
var state_28059__$1 = (function (){var statearr_28073 = state_28059;
(statearr_28073[(11)] = inst_28032__$1);

(statearr_28073[(12)] = inst_28031);

return statearr_28073;
})();
if(cljs.core.truth_(inst_28033)){
var statearr_28074_28100 = state_28059__$1;
(statearr_28074_28100[(1)] = (8));

} else {
var statearr_28075_28101 = state_28059__$1;
(statearr_28075_28101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (14))){
var inst_28052 = (state_28059[(2)]);
var inst_28053 = cljs.core.async.close_BANG_.call(null,out);
var state_28059__$1 = (function (){var statearr_28077 = state_28059;
(statearr_28077[(13)] = inst_28052);

return statearr_28077;
})();
var statearr_28078_28102 = state_28059__$1;
(statearr_28078_28102[(2)] = inst_28053);

(statearr_28078_28102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (10))){
var inst_28043 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28079_28103 = state_28059__$1;
(statearr_28079_28103[(2)] = inst_28043);

(statearr_28079_28103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (8))){
var inst_28023 = (state_28059[(8)]);
var inst_28032 = (state_28059[(11)]);
var tmp28076 = inst_28023;
var inst_28023__$1 = tmp28076;
var inst_28024 = inst_28032;
var state_28059__$1 = (function (){var statearr_28080 = state_28059;
(statearr_28080[(7)] = inst_28024);

(statearr_28080[(8)] = inst_28023__$1);

return statearr_28080;
})();
var statearr_28081_28104 = state_28059__$1;
(statearr_28081_28104[(2)] = null);

(statearr_28081_28104[(1)] = (2));


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
});})(c__19453__auto___28090,out))
;
return ((function (switch__19391__auto__,c__19453__auto___28090,out){
return (function() {
var cljs$core$async$state_machine__19392__auto__ = null;
var cljs$core$async$state_machine__19392__auto____0 = (function (){
var statearr_28085 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28085[(0)] = cljs$core$async$state_machine__19392__auto__);

(statearr_28085[(1)] = (1));

return statearr_28085;
});
var cljs$core$async$state_machine__19392__auto____1 = (function (state_28059){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_28059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e28086){if((e28086 instanceof Object)){
var ex__19395__auto__ = e28086;
var statearr_28087_28105 = state_28059;
(statearr_28087_28105[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28106 = state_28059;
state_28059 = G__28106;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
cljs$core$async$state_machine__19392__auto__ = function(state_28059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19392__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19392__auto____1.call(this,state_28059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19392__auto____0;
cljs$core$async$state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19392__auto____1;
return cljs$core$async$state_machine__19392__auto__;
})()
;})(switch__19391__auto__,c__19453__auto___28090,out))
})();
var state__19455__auto__ = (function (){var statearr_28088 = f__19454__auto__.call(null);
(statearr_28088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto___28090);

return statearr_28088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto___28090,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__28108 = arguments.length;
switch (G__28108) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19453__auto___28181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto___28181,out){
return (function (){
var f__19454__auto__ = (function (){var switch__19391__auto__ = ((function (c__19453__auto___28181,out){
return (function (state_28150){
var state_val_28151 = (state_28150[(1)]);
if((state_val_28151 === (7))){
var inst_28146 = (state_28150[(2)]);
var state_28150__$1 = state_28150;
var statearr_28152_28182 = state_28150__$1;
(statearr_28152_28182[(2)] = inst_28146);

(statearr_28152_28182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (1))){
var inst_28109 = [];
var inst_28110 = inst_28109;
var inst_28111 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28150__$1 = (function (){var statearr_28153 = state_28150;
(statearr_28153[(7)] = inst_28111);

(statearr_28153[(8)] = inst_28110);

return statearr_28153;
})();
var statearr_28154_28183 = state_28150__$1;
(statearr_28154_28183[(2)] = null);

(statearr_28154_28183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (4))){
var inst_28114 = (state_28150[(9)]);
var inst_28114__$1 = (state_28150[(2)]);
var inst_28115 = (inst_28114__$1 == null);
var inst_28116 = cljs.core.not.call(null,inst_28115);
var state_28150__$1 = (function (){var statearr_28155 = state_28150;
(statearr_28155[(9)] = inst_28114__$1);

return statearr_28155;
})();
if(inst_28116){
var statearr_28156_28184 = state_28150__$1;
(statearr_28156_28184[(1)] = (5));

} else {
var statearr_28157_28185 = state_28150__$1;
(statearr_28157_28185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (15))){
var inst_28140 = (state_28150[(2)]);
var state_28150__$1 = state_28150;
var statearr_28158_28186 = state_28150__$1;
(statearr_28158_28186[(2)] = inst_28140);

(statearr_28158_28186[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (13))){
var state_28150__$1 = state_28150;
var statearr_28159_28187 = state_28150__$1;
(statearr_28159_28187[(2)] = null);

(statearr_28159_28187[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (6))){
var inst_28110 = (state_28150[(8)]);
var inst_28135 = inst_28110.length;
var inst_28136 = (inst_28135 > (0));
var state_28150__$1 = state_28150;
if(cljs.core.truth_(inst_28136)){
var statearr_28160_28188 = state_28150__$1;
(statearr_28160_28188[(1)] = (12));

} else {
var statearr_28161_28189 = state_28150__$1;
(statearr_28161_28189[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (3))){
var inst_28148 = (state_28150[(2)]);
var state_28150__$1 = state_28150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28150__$1,inst_28148);
} else {
if((state_val_28151 === (12))){
var inst_28110 = (state_28150[(8)]);
var inst_28138 = cljs.core.vec.call(null,inst_28110);
var state_28150__$1 = state_28150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28150__$1,(15),out,inst_28138);
} else {
if((state_val_28151 === (2))){
var state_28150__$1 = state_28150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28150__$1,(4),ch);
} else {
if((state_val_28151 === (11))){
var inst_28118 = (state_28150[(10)]);
var inst_28114 = (state_28150[(9)]);
var inst_28128 = (state_28150[(2)]);
var inst_28129 = [];
var inst_28130 = inst_28129.push(inst_28114);
var inst_28110 = inst_28129;
var inst_28111 = inst_28118;
var state_28150__$1 = (function (){var statearr_28162 = state_28150;
(statearr_28162[(7)] = inst_28111);

(statearr_28162[(8)] = inst_28110);

(statearr_28162[(11)] = inst_28130);

(statearr_28162[(12)] = inst_28128);

return statearr_28162;
})();
var statearr_28163_28190 = state_28150__$1;
(statearr_28163_28190[(2)] = null);

(statearr_28163_28190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (9))){
var inst_28110 = (state_28150[(8)]);
var inst_28126 = cljs.core.vec.call(null,inst_28110);
var state_28150__$1 = state_28150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28150__$1,(11),out,inst_28126);
} else {
if((state_val_28151 === (5))){
var inst_28111 = (state_28150[(7)]);
var inst_28118 = (state_28150[(10)]);
var inst_28114 = (state_28150[(9)]);
var inst_28118__$1 = f.call(null,inst_28114);
var inst_28119 = cljs.core._EQ_.call(null,inst_28118__$1,inst_28111);
var inst_28120 = cljs.core.keyword_identical_QMARK_.call(null,inst_28111,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28121 = (inst_28119) || (inst_28120);
var state_28150__$1 = (function (){var statearr_28164 = state_28150;
(statearr_28164[(10)] = inst_28118__$1);

return statearr_28164;
})();
if(cljs.core.truth_(inst_28121)){
var statearr_28165_28191 = state_28150__$1;
(statearr_28165_28191[(1)] = (8));

} else {
var statearr_28166_28192 = state_28150__$1;
(statearr_28166_28192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (14))){
var inst_28143 = (state_28150[(2)]);
var inst_28144 = cljs.core.async.close_BANG_.call(null,out);
var state_28150__$1 = (function (){var statearr_28168 = state_28150;
(statearr_28168[(13)] = inst_28143);

return statearr_28168;
})();
var statearr_28169_28193 = state_28150__$1;
(statearr_28169_28193[(2)] = inst_28144);

(statearr_28169_28193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (10))){
var inst_28133 = (state_28150[(2)]);
var state_28150__$1 = state_28150;
var statearr_28170_28194 = state_28150__$1;
(statearr_28170_28194[(2)] = inst_28133);

(statearr_28170_28194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (8))){
var inst_28110 = (state_28150[(8)]);
var inst_28118 = (state_28150[(10)]);
var inst_28114 = (state_28150[(9)]);
var inst_28123 = inst_28110.push(inst_28114);
var tmp28167 = inst_28110;
var inst_28110__$1 = tmp28167;
var inst_28111 = inst_28118;
var state_28150__$1 = (function (){var statearr_28171 = state_28150;
(statearr_28171[(7)] = inst_28111);

(statearr_28171[(14)] = inst_28123);

(statearr_28171[(8)] = inst_28110__$1);

return statearr_28171;
})();
var statearr_28172_28195 = state_28150__$1;
(statearr_28172_28195[(2)] = null);

(statearr_28172_28195[(1)] = (2));


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
});})(c__19453__auto___28181,out))
;
return ((function (switch__19391__auto__,c__19453__auto___28181,out){
return (function() {
var cljs$core$async$state_machine__19392__auto__ = null;
var cljs$core$async$state_machine__19392__auto____0 = (function (){
var statearr_28176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28176[(0)] = cljs$core$async$state_machine__19392__auto__);

(statearr_28176[(1)] = (1));

return statearr_28176;
});
var cljs$core$async$state_machine__19392__auto____1 = (function (state_28150){
while(true){
var ret_value__19393__auto__ = (function (){try{while(true){
var result__19394__auto__ = switch__19391__auto__.call(null,state_28150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19394__auto__;
}
break;
}
}catch (e28177){if((e28177 instanceof Object)){
var ex__19395__auto__ = e28177;
var statearr_28178_28196 = state_28150;
(statearr_28178_28196[(5)] = ex__19395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28197 = state_28150;
state_28150 = G__28197;
continue;
} else {
return ret_value__19393__auto__;
}
break;
}
});
cljs$core$async$state_machine__19392__auto__ = function(state_28150){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19392__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19392__auto____1.call(this,state_28150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19392__auto____0;
cljs$core$async$state_machine__19392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19392__auto____1;
return cljs$core$async$state_machine__19392__auto__;
})()
;})(switch__19391__auto__,c__19453__auto___28181,out))
})();
var state__19455__auto__ = (function (){var statearr_28179 = f__19454__auto__.call(null);
(statearr_28179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto___28181);

return statearr_28179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto___28181,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1436379818386