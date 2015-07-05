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
if(typeof cljs.core.async.t25506 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25506 = (function (fn_handler,f,meta25507){
this.fn_handler = fn_handler;
this.f = f;
this.meta25507 = meta25507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25508,meta25507__$1){
var self__ = this;
var _25508__$1 = this;
return (new cljs.core.async.t25506(self__.fn_handler,self__.f,meta25507__$1));
});

cljs.core.async.t25506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25508){
var self__ = this;
var _25508__$1 = this;
return self__.meta25507;
});

cljs.core.async.t25506.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25506.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t25506.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t25506.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta25507","meta25507",-403727827,null)], null);
});

cljs.core.async.t25506.cljs$lang$type = true;

cljs.core.async.t25506.cljs$lang$ctorStr = "cljs.core.async/t25506";

cljs.core.async.t25506.cljs$lang$ctorPrWriter = (function (this__16688__auto__,writer__16689__auto__,opt__16690__auto__){
return cljs.core._write.call(null,writer__16689__auto__,"cljs.core.async/t25506");
});

cljs.core.async.__GT_t25506 = (function cljs$core$async$fn_handler_$___GT_t25506(fn_handler__$1,f__$1,meta25507){
return (new cljs.core.async.t25506(fn_handler__$1,f__$1,meta25507));
});

}

return (new cljs.core.async.t25506(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25510 = buff;
if(G__25510){
var bit__16783__auto__ = null;
if(cljs.core.truth_((function (){var or__16109__auto__ = bit__16783__auto__;
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return G__25510.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__25510.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25510);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25510);
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
var G__25512 = arguments.length;
switch (G__25512) {
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
var G__25515 = arguments.length;
switch (G__25515) {
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
var val_25517 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25517);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25517,ret){
return (function (){
return fn1.call(null,val_25517);
});})(val_25517,ret))
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
var G__25519 = arguments.length;
switch (G__25519) {
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
var n__16994__auto___25521 = n;
var x_25522 = (0);
while(true){
if((x_25522 < n__16994__auto___25521)){
(a[x_25522] = (0));

var G__25523 = (x_25522 + (1));
x_25522 = G__25523;
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

var G__25524 = (i + (1));
i = G__25524;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t25528 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25528 = (function (alt_flag,flag,meta25529){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25529 = meta25529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25530,meta25529__$1){
var self__ = this;
var _25530__$1 = this;
return (new cljs.core.async.t25528(self__.alt_flag,self__.flag,meta25529__$1));
});})(flag))
;

cljs.core.async.t25528.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25530){
var self__ = this;
var _25530__$1 = this;
return self__.meta25529;
});})(flag))
;

cljs.core.async.t25528.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25528.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t25528.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t25528.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25529","meta25529",804529618,null)], null);
});})(flag))
;

cljs.core.async.t25528.cljs$lang$type = true;

cljs.core.async.t25528.cljs$lang$ctorStr = "cljs.core.async/t25528";

cljs.core.async.t25528.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16688__auto__,writer__16689__auto__,opt__16690__auto__){
return cljs.core._write.call(null,writer__16689__auto__,"cljs.core.async/t25528");
});})(flag))
;

cljs.core.async.__GT_t25528 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t25528(alt_flag__$1,flag__$1,meta25529){
return (new cljs.core.async.t25528(alt_flag__$1,flag__$1,meta25529));
});})(flag))
;

}

return (new cljs.core.async.t25528(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t25534 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25534 = (function (alt_handler,flag,cb,meta25535){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25535 = meta25535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25536,meta25535__$1){
var self__ = this;
var _25536__$1 = this;
return (new cljs.core.async.t25534(self__.alt_handler,self__.flag,self__.cb,meta25535__$1));
});

cljs.core.async.t25534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25536){
var self__ = this;
var _25536__$1 = this;
return self__.meta25535;
});

cljs.core.async.t25534.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25534.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t25534.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t25534.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25535","meta25535",917254940,null)], null);
});

cljs.core.async.t25534.cljs$lang$type = true;

cljs.core.async.t25534.cljs$lang$ctorStr = "cljs.core.async/t25534";

cljs.core.async.t25534.cljs$lang$ctorPrWriter = (function (this__16688__auto__,writer__16689__auto__,opt__16690__auto__){
return cljs.core._write.call(null,writer__16689__auto__,"cljs.core.async/t25534");
});

cljs.core.async.__GT_t25534 = (function cljs$core$async$alt_handler_$___GT_t25534(alt_handler__$1,flag__$1,cb__$1,meta25535){
return (new cljs.core.async.t25534(alt_handler__$1,flag__$1,cb__$1,meta25535));
});

}

return (new cljs.core.async.t25534(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25537_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25537_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25538_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25538_SHARP_,port], null));
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
var G__25539 = (i + (1));
i = G__25539;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25542){
var map__25543 = p__25542;
var map__25543__$1 = ((cljs.core.seq_QMARK_.call(null,map__25543))?cljs.core.apply.call(null,cljs.core.hash_map,map__25543):map__25543);
var opts = map__25543__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25540){
var G__25541 = cljs.core.first.call(null,seq25540);
var seq25540__$1 = cljs.core.next.call(null,seq25540);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25541,seq25540__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__25545 = arguments.length;
switch (G__25545) {
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
var c__19342__auto___25594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___25594){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (c__19342__auto___25594){
return (function (state_25569){
var state_val_25570 = (state_25569[(1)]);
if((state_val_25570 === (7))){
var inst_25565 = (state_25569[(2)]);
var state_25569__$1 = state_25569;
var statearr_25571_25595 = state_25569__$1;
(statearr_25571_25595[(2)] = inst_25565);

(statearr_25571_25595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25570 === (1))){
var state_25569__$1 = state_25569;
var statearr_25572_25596 = state_25569__$1;
(statearr_25572_25596[(2)] = null);

(statearr_25572_25596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25570 === (4))){
var inst_25548 = (state_25569[(7)]);
var inst_25548__$1 = (state_25569[(2)]);
var inst_25549 = (inst_25548__$1 == null);
var state_25569__$1 = (function (){var statearr_25573 = state_25569;
(statearr_25573[(7)] = inst_25548__$1);

return statearr_25573;
})();
if(cljs.core.truth_(inst_25549)){
var statearr_25574_25597 = state_25569__$1;
(statearr_25574_25597[(1)] = (5));

} else {
var statearr_25575_25598 = state_25569__$1;
(statearr_25575_25598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25570 === (13))){
var state_25569__$1 = state_25569;
var statearr_25576_25599 = state_25569__$1;
(statearr_25576_25599[(2)] = null);

(statearr_25576_25599[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25570 === (6))){
var inst_25548 = (state_25569[(7)]);
var state_25569__$1 = state_25569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25569__$1,(11),to,inst_25548);
} else {
if((state_val_25570 === (3))){
var inst_25567 = (state_25569[(2)]);
var state_25569__$1 = state_25569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25569__$1,inst_25567);
} else {
if((state_val_25570 === (12))){
var state_25569__$1 = state_25569;
var statearr_25577_25600 = state_25569__$1;
(statearr_25577_25600[(2)] = null);

(statearr_25577_25600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25570 === (2))){
var state_25569__$1 = state_25569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25569__$1,(4),from);
} else {
if((state_val_25570 === (11))){
var inst_25558 = (state_25569[(2)]);
var state_25569__$1 = state_25569;
if(cljs.core.truth_(inst_25558)){
var statearr_25578_25601 = state_25569__$1;
(statearr_25578_25601[(1)] = (12));

} else {
var statearr_25579_25602 = state_25569__$1;
(statearr_25579_25602[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25570 === (9))){
var state_25569__$1 = state_25569;
var statearr_25580_25603 = state_25569__$1;
(statearr_25580_25603[(2)] = null);

(statearr_25580_25603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25570 === (5))){
var state_25569__$1 = state_25569;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25581_25604 = state_25569__$1;
(statearr_25581_25604[(1)] = (8));

} else {
var statearr_25582_25605 = state_25569__$1;
(statearr_25582_25605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25570 === (14))){
var inst_25563 = (state_25569[(2)]);
var state_25569__$1 = state_25569;
var statearr_25583_25606 = state_25569__$1;
(statearr_25583_25606[(2)] = inst_25563);

(statearr_25583_25606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25570 === (10))){
var inst_25555 = (state_25569[(2)]);
var state_25569__$1 = state_25569;
var statearr_25584_25607 = state_25569__$1;
(statearr_25584_25607[(2)] = inst_25555);

(statearr_25584_25607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25570 === (8))){
var inst_25552 = cljs.core.async.close_BANG_.call(null,to);
var state_25569__$1 = state_25569;
var statearr_25585_25608 = state_25569__$1;
(statearr_25585_25608[(2)] = inst_25552);

(statearr_25585_25608[(1)] = (10));


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
});})(c__19342__auto___25594))
;
return ((function (switch__19280__auto__,c__19342__auto___25594){
return (function() {
var cljs$core$async$state_machine__19281__auto__ = null;
var cljs$core$async$state_machine__19281__auto____0 = (function (){
var statearr_25589 = [null,null,null,null,null,null,null,null];
(statearr_25589[(0)] = cljs$core$async$state_machine__19281__auto__);

(statearr_25589[(1)] = (1));

return statearr_25589;
});
var cljs$core$async$state_machine__19281__auto____1 = (function (state_25569){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_25569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e25590){if((e25590 instanceof Object)){
var ex__19284__auto__ = e25590;
var statearr_25591_25609 = state_25569;
(statearr_25591_25609[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25610 = state_25569;
state_25569 = G__25610;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
cljs$core$async$state_machine__19281__auto__ = function(state_25569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19281__auto____1.call(this,state_25569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19281__auto____0;
cljs$core$async$state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19281__auto____1;
return cljs$core$async$state_machine__19281__auto__;
})()
;})(switch__19280__auto__,c__19342__auto___25594))
})();
var state__19344__auto__ = (function (){var statearr_25592 = f__19343__auto__.call(null);
(statearr_25592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___25594);

return statearr_25592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___25594))
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
return (function (p__25794){
var vec__25795 = p__25794;
var v = cljs.core.nth.call(null,vec__25795,(0),null);
var p = cljs.core.nth.call(null,vec__25795,(1),null);
var job = vec__25795;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19342__auto___25977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___25977,res,vec__25795,v,p,job,jobs,results){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (c__19342__auto___25977,res,vec__25795,v,p,job,jobs,results){
return (function (state_25800){
var state_val_25801 = (state_25800[(1)]);
if((state_val_25801 === (1))){
var state_25800__$1 = state_25800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25800__$1,(2),res,v);
} else {
if((state_val_25801 === (2))){
var inst_25797 = (state_25800[(2)]);
var inst_25798 = cljs.core.async.close_BANG_.call(null,res);
var state_25800__$1 = (function (){var statearr_25802 = state_25800;
(statearr_25802[(7)] = inst_25797);

return statearr_25802;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25800__$1,inst_25798);
} else {
return null;
}
}
});})(c__19342__auto___25977,res,vec__25795,v,p,job,jobs,results))
;
return ((function (switch__19280__auto__,c__19342__auto___25977,res,vec__25795,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____0 = (function (){
var statearr_25806 = [null,null,null,null,null,null,null,null];
(statearr_25806[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__);

(statearr_25806[(1)] = (1));

return statearr_25806;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____1 = (function (state_25800){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_25800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e25807){if((e25807 instanceof Object)){
var ex__19284__auto__ = e25807;
var statearr_25808_25978 = state_25800;
(statearr_25808_25978[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25979 = state_25800;
state_25800 = G__25979;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__ = function(state_25800){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____1.call(this,state_25800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__;
})()
;})(switch__19280__auto__,c__19342__auto___25977,res,vec__25795,v,p,job,jobs,results))
})();
var state__19344__auto__ = (function (){var statearr_25809 = f__19343__auto__.call(null);
(statearr_25809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___25977);

return statearr_25809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___25977,res,vec__25795,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25810){
var vec__25811 = p__25810;
var v = cljs.core.nth.call(null,vec__25811,(0),null);
var p = cljs.core.nth.call(null,vec__25811,(1),null);
var job = vec__25811;
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
var n__16994__auto___25980 = n;
var __25981 = (0);
while(true){
if((__25981 < n__16994__auto___25980)){
var G__25812_25982 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25812_25982) {
case "compute":
var c__19342__auto___25984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25981,c__19342__auto___25984,G__25812_25982,n__16994__auto___25980,jobs,results,process,async){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (__25981,c__19342__auto___25984,G__25812_25982,n__16994__auto___25980,jobs,results,process,async){
return (function (state_25825){
var state_val_25826 = (state_25825[(1)]);
if((state_val_25826 === (1))){
var state_25825__$1 = state_25825;
var statearr_25827_25985 = state_25825__$1;
(statearr_25827_25985[(2)] = null);

(statearr_25827_25985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25826 === (2))){
var state_25825__$1 = state_25825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25825__$1,(4),jobs);
} else {
if((state_val_25826 === (3))){
var inst_25823 = (state_25825[(2)]);
var state_25825__$1 = state_25825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25825__$1,inst_25823);
} else {
if((state_val_25826 === (4))){
var inst_25815 = (state_25825[(2)]);
var inst_25816 = process.call(null,inst_25815);
var state_25825__$1 = state_25825;
if(cljs.core.truth_(inst_25816)){
var statearr_25828_25986 = state_25825__$1;
(statearr_25828_25986[(1)] = (5));

} else {
var statearr_25829_25987 = state_25825__$1;
(statearr_25829_25987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25826 === (5))){
var state_25825__$1 = state_25825;
var statearr_25830_25988 = state_25825__$1;
(statearr_25830_25988[(2)] = null);

(statearr_25830_25988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25826 === (6))){
var state_25825__$1 = state_25825;
var statearr_25831_25989 = state_25825__$1;
(statearr_25831_25989[(2)] = null);

(statearr_25831_25989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25826 === (7))){
var inst_25821 = (state_25825[(2)]);
var state_25825__$1 = state_25825;
var statearr_25832_25990 = state_25825__$1;
(statearr_25832_25990[(2)] = inst_25821);

(statearr_25832_25990[(1)] = (3));


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
});})(__25981,c__19342__auto___25984,G__25812_25982,n__16994__auto___25980,jobs,results,process,async))
;
return ((function (__25981,switch__19280__auto__,c__19342__auto___25984,G__25812_25982,n__16994__auto___25980,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____0 = (function (){
var statearr_25836 = [null,null,null,null,null,null,null];
(statearr_25836[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__);

(statearr_25836[(1)] = (1));

return statearr_25836;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____1 = (function (state_25825){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_25825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e25837){if((e25837 instanceof Object)){
var ex__19284__auto__ = e25837;
var statearr_25838_25991 = state_25825;
(statearr_25838_25991[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25992 = state_25825;
state_25825 = G__25992;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__ = function(state_25825){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____1.call(this,state_25825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__;
})()
;})(__25981,switch__19280__auto__,c__19342__auto___25984,G__25812_25982,n__16994__auto___25980,jobs,results,process,async))
})();
var state__19344__auto__ = (function (){var statearr_25839 = f__19343__auto__.call(null);
(statearr_25839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___25984);

return statearr_25839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(__25981,c__19342__auto___25984,G__25812_25982,n__16994__auto___25980,jobs,results,process,async))
);


break;
case "async":
var c__19342__auto___25993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25981,c__19342__auto___25993,G__25812_25982,n__16994__auto___25980,jobs,results,process,async){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (__25981,c__19342__auto___25993,G__25812_25982,n__16994__auto___25980,jobs,results,process,async){
return (function (state_25852){
var state_val_25853 = (state_25852[(1)]);
if((state_val_25853 === (1))){
var state_25852__$1 = state_25852;
var statearr_25854_25994 = state_25852__$1;
(statearr_25854_25994[(2)] = null);

(statearr_25854_25994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25853 === (2))){
var state_25852__$1 = state_25852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25852__$1,(4),jobs);
} else {
if((state_val_25853 === (3))){
var inst_25850 = (state_25852[(2)]);
var state_25852__$1 = state_25852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25852__$1,inst_25850);
} else {
if((state_val_25853 === (4))){
var inst_25842 = (state_25852[(2)]);
var inst_25843 = async.call(null,inst_25842);
var state_25852__$1 = state_25852;
if(cljs.core.truth_(inst_25843)){
var statearr_25855_25995 = state_25852__$1;
(statearr_25855_25995[(1)] = (5));

} else {
var statearr_25856_25996 = state_25852__$1;
(statearr_25856_25996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25853 === (5))){
var state_25852__$1 = state_25852;
var statearr_25857_25997 = state_25852__$1;
(statearr_25857_25997[(2)] = null);

(statearr_25857_25997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25853 === (6))){
var state_25852__$1 = state_25852;
var statearr_25858_25998 = state_25852__$1;
(statearr_25858_25998[(2)] = null);

(statearr_25858_25998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25853 === (7))){
var inst_25848 = (state_25852[(2)]);
var state_25852__$1 = state_25852;
var statearr_25859_25999 = state_25852__$1;
(statearr_25859_25999[(2)] = inst_25848);

(statearr_25859_25999[(1)] = (3));


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
});})(__25981,c__19342__auto___25993,G__25812_25982,n__16994__auto___25980,jobs,results,process,async))
;
return ((function (__25981,switch__19280__auto__,c__19342__auto___25993,G__25812_25982,n__16994__auto___25980,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____0 = (function (){
var statearr_25863 = [null,null,null,null,null,null,null];
(statearr_25863[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__);

(statearr_25863[(1)] = (1));

return statearr_25863;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____1 = (function (state_25852){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_25852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e25864){if((e25864 instanceof Object)){
var ex__19284__auto__ = e25864;
var statearr_25865_26000 = state_25852;
(statearr_25865_26000[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26001 = state_25852;
state_25852 = G__26001;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__ = function(state_25852){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____1.call(this,state_25852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__;
})()
;})(__25981,switch__19280__auto__,c__19342__auto___25993,G__25812_25982,n__16994__auto___25980,jobs,results,process,async))
})();
var state__19344__auto__ = (function (){var statearr_25866 = f__19343__auto__.call(null);
(statearr_25866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___25993);

return statearr_25866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(__25981,c__19342__auto___25993,G__25812_25982,n__16994__auto___25980,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26002 = (__25981 + (1));
__25981 = G__26002;
continue;
} else {
}
break;
}

var c__19342__auto___26003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___26003,jobs,results,process,async){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (c__19342__auto___26003,jobs,results,process,async){
return (function (state_25888){
var state_val_25889 = (state_25888[(1)]);
if((state_val_25889 === (1))){
var state_25888__$1 = state_25888;
var statearr_25890_26004 = state_25888__$1;
(statearr_25890_26004[(2)] = null);

(statearr_25890_26004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25889 === (2))){
var state_25888__$1 = state_25888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25888__$1,(4),from);
} else {
if((state_val_25889 === (3))){
var inst_25886 = (state_25888[(2)]);
var state_25888__$1 = state_25888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25888__$1,inst_25886);
} else {
if((state_val_25889 === (4))){
var inst_25869 = (state_25888[(7)]);
var inst_25869__$1 = (state_25888[(2)]);
var inst_25870 = (inst_25869__$1 == null);
var state_25888__$1 = (function (){var statearr_25891 = state_25888;
(statearr_25891[(7)] = inst_25869__$1);

return statearr_25891;
})();
if(cljs.core.truth_(inst_25870)){
var statearr_25892_26005 = state_25888__$1;
(statearr_25892_26005[(1)] = (5));

} else {
var statearr_25893_26006 = state_25888__$1;
(statearr_25893_26006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25889 === (5))){
var inst_25872 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25888__$1 = state_25888;
var statearr_25894_26007 = state_25888__$1;
(statearr_25894_26007[(2)] = inst_25872);

(statearr_25894_26007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25889 === (6))){
var inst_25874 = (state_25888[(8)]);
var inst_25869 = (state_25888[(7)]);
var inst_25874__$1 = cljs.core.async.chan.call(null,(1));
var inst_25875 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25876 = [inst_25869,inst_25874__$1];
var inst_25877 = (new cljs.core.PersistentVector(null,2,(5),inst_25875,inst_25876,null));
var state_25888__$1 = (function (){var statearr_25895 = state_25888;
(statearr_25895[(8)] = inst_25874__$1);

return statearr_25895;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25888__$1,(8),jobs,inst_25877);
} else {
if((state_val_25889 === (7))){
var inst_25884 = (state_25888[(2)]);
var state_25888__$1 = state_25888;
var statearr_25896_26008 = state_25888__$1;
(statearr_25896_26008[(2)] = inst_25884);

(statearr_25896_26008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25889 === (8))){
var inst_25874 = (state_25888[(8)]);
var inst_25879 = (state_25888[(2)]);
var state_25888__$1 = (function (){var statearr_25897 = state_25888;
(statearr_25897[(9)] = inst_25879);

return statearr_25897;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25888__$1,(9),results,inst_25874);
} else {
if((state_val_25889 === (9))){
var inst_25881 = (state_25888[(2)]);
var state_25888__$1 = (function (){var statearr_25898 = state_25888;
(statearr_25898[(10)] = inst_25881);

return statearr_25898;
})();
var statearr_25899_26009 = state_25888__$1;
(statearr_25899_26009[(2)] = null);

(statearr_25899_26009[(1)] = (2));


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
});})(c__19342__auto___26003,jobs,results,process,async))
;
return ((function (switch__19280__auto__,c__19342__auto___26003,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____0 = (function (){
var statearr_25903 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25903[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__);

(statearr_25903[(1)] = (1));

return statearr_25903;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____1 = (function (state_25888){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_25888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e25904){if((e25904 instanceof Object)){
var ex__19284__auto__ = e25904;
var statearr_25905_26010 = state_25888;
(statearr_25905_26010[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26011 = state_25888;
state_25888 = G__26011;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__ = function(state_25888){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____1.call(this,state_25888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__;
})()
;})(switch__19280__auto__,c__19342__auto___26003,jobs,results,process,async))
})();
var state__19344__auto__ = (function (){var statearr_25906 = f__19343__auto__.call(null);
(statearr_25906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___26003);

return statearr_25906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___26003,jobs,results,process,async))
);


var c__19342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto__,jobs,results,process,async){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (c__19342__auto__,jobs,results,process,async){
return (function (state_25944){
var state_val_25945 = (state_25944[(1)]);
if((state_val_25945 === (7))){
var inst_25940 = (state_25944[(2)]);
var state_25944__$1 = state_25944;
var statearr_25946_26012 = state_25944__$1;
(statearr_25946_26012[(2)] = inst_25940);

(statearr_25946_26012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (20))){
var state_25944__$1 = state_25944;
var statearr_25947_26013 = state_25944__$1;
(statearr_25947_26013[(2)] = null);

(statearr_25947_26013[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (1))){
var state_25944__$1 = state_25944;
var statearr_25948_26014 = state_25944__$1;
(statearr_25948_26014[(2)] = null);

(statearr_25948_26014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (4))){
var inst_25909 = (state_25944[(7)]);
var inst_25909__$1 = (state_25944[(2)]);
var inst_25910 = (inst_25909__$1 == null);
var state_25944__$1 = (function (){var statearr_25949 = state_25944;
(statearr_25949[(7)] = inst_25909__$1);

return statearr_25949;
})();
if(cljs.core.truth_(inst_25910)){
var statearr_25950_26015 = state_25944__$1;
(statearr_25950_26015[(1)] = (5));

} else {
var statearr_25951_26016 = state_25944__$1;
(statearr_25951_26016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (15))){
var inst_25922 = (state_25944[(8)]);
var state_25944__$1 = state_25944;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25944__$1,(18),to,inst_25922);
} else {
if((state_val_25945 === (21))){
var inst_25935 = (state_25944[(2)]);
var state_25944__$1 = state_25944;
var statearr_25952_26017 = state_25944__$1;
(statearr_25952_26017[(2)] = inst_25935);

(statearr_25952_26017[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (13))){
var inst_25937 = (state_25944[(2)]);
var state_25944__$1 = (function (){var statearr_25953 = state_25944;
(statearr_25953[(9)] = inst_25937);

return statearr_25953;
})();
var statearr_25954_26018 = state_25944__$1;
(statearr_25954_26018[(2)] = null);

(statearr_25954_26018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (6))){
var inst_25909 = (state_25944[(7)]);
var state_25944__$1 = state_25944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25944__$1,(11),inst_25909);
} else {
if((state_val_25945 === (17))){
var inst_25930 = (state_25944[(2)]);
var state_25944__$1 = state_25944;
if(cljs.core.truth_(inst_25930)){
var statearr_25955_26019 = state_25944__$1;
(statearr_25955_26019[(1)] = (19));

} else {
var statearr_25956_26020 = state_25944__$1;
(statearr_25956_26020[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (3))){
var inst_25942 = (state_25944[(2)]);
var state_25944__$1 = state_25944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25944__$1,inst_25942);
} else {
if((state_val_25945 === (12))){
var inst_25919 = (state_25944[(10)]);
var state_25944__$1 = state_25944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25944__$1,(14),inst_25919);
} else {
if((state_val_25945 === (2))){
var state_25944__$1 = state_25944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25944__$1,(4),results);
} else {
if((state_val_25945 === (19))){
var state_25944__$1 = state_25944;
var statearr_25957_26021 = state_25944__$1;
(statearr_25957_26021[(2)] = null);

(statearr_25957_26021[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (11))){
var inst_25919 = (state_25944[(2)]);
var state_25944__$1 = (function (){var statearr_25958 = state_25944;
(statearr_25958[(10)] = inst_25919);

return statearr_25958;
})();
var statearr_25959_26022 = state_25944__$1;
(statearr_25959_26022[(2)] = null);

(statearr_25959_26022[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (9))){
var state_25944__$1 = state_25944;
var statearr_25960_26023 = state_25944__$1;
(statearr_25960_26023[(2)] = null);

(statearr_25960_26023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (5))){
var state_25944__$1 = state_25944;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25961_26024 = state_25944__$1;
(statearr_25961_26024[(1)] = (8));

} else {
var statearr_25962_26025 = state_25944__$1;
(statearr_25962_26025[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (14))){
var inst_25924 = (state_25944[(11)]);
var inst_25922 = (state_25944[(8)]);
var inst_25922__$1 = (state_25944[(2)]);
var inst_25923 = (inst_25922__$1 == null);
var inst_25924__$1 = cljs.core.not.call(null,inst_25923);
var state_25944__$1 = (function (){var statearr_25963 = state_25944;
(statearr_25963[(11)] = inst_25924__$1);

(statearr_25963[(8)] = inst_25922__$1);

return statearr_25963;
})();
if(inst_25924__$1){
var statearr_25964_26026 = state_25944__$1;
(statearr_25964_26026[(1)] = (15));

} else {
var statearr_25965_26027 = state_25944__$1;
(statearr_25965_26027[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (16))){
var inst_25924 = (state_25944[(11)]);
var state_25944__$1 = state_25944;
var statearr_25966_26028 = state_25944__$1;
(statearr_25966_26028[(2)] = inst_25924);

(statearr_25966_26028[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (10))){
var inst_25916 = (state_25944[(2)]);
var state_25944__$1 = state_25944;
var statearr_25967_26029 = state_25944__$1;
(statearr_25967_26029[(2)] = inst_25916);

(statearr_25967_26029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (18))){
var inst_25927 = (state_25944[(2)]);
var state_25944__$1 = state_25944;
var statearr_25968_26030 = state_25944__$1;
(statearr_25968_26030[(2)] = inst_25927);

(statearr_25968_26030[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (8))){
var inst_25913 = cljs.core.async.close_BANG_.call(null,to);
var state_25944__$1 = state_25944;
var statearr_25969_26031 = state_25944__$1;
(statearr_25969_26031[(2)] = inst_25913);

(statearr_25969_26031[(1)] = (10));


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
});})(c__19342__auto__,jobs,results,process,async))
;
return ((function (switch__19280__auto__,c__19342__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____0 = (function (){
var statearr_25973 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25973[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__);

(statearr_25973[(1)] = (1));

return statearr_25973;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____1 = (function (state_25944){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_25944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e25974){if((e25974 instanceof Object)){
var ex__19284__auto__ = e25974;
var statearr_25975_26032 = state_25944;
(statearr_25975_26032[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26033 = state_25944;
state_25944 = G__26033;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__ = function(state_25944){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____1.call(this,state_25944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19281__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19281__auto__;
})()
;})(switch__19280__auto__,c__19342__auto__,jobs,results,process,async))
})();
var state__19344__auto__ = (function (){var statearr_25976 = f__19343__auto__.call(null);
(statearr_25976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto__);

return statearr_25976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto__,jobs,results,process,async))
);

return c__19342__auto__;
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
var G__26035 = arguments.length;
switch (G__26035) {
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
var G__26038 = arguments.length;
switch (G__26038) {
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
var G__26041 = arguments.length;
switch (G__26041) {
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
var c__19342__auto___26093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___26093,tc,fc){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (c__19342__auto___26093,tc,fc){
return (function (state_26067){
var state_val_26068 = (state_26067[(1)]);
if((state_val_26068 === (7))){
var inst_26063 = (state_26067[(2)]);
var state_26067__$1 = state_26067;
var statearr_26069_26094 = state_26067__$1;
(statearr_26069_26094[(2)] = inst_26063);

(statearr_26069_26094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (1))){
var state_26067__$1 = state_26067;
var statearr_26070_26095 = state_26067__$1;
(statearr_26070_26095[(2)] = null);

(statearr_26070_26095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (4))){
var inst_26044 = (state_26067[(7)]);
var inst_26044__$1 = (state_26067[(2)]);
var inst_26045 = (inst_26044__$1 == null);
var state_26067__$1 = (function (){var statearr_26071 = state_26067;
(statearr_26071[(7)] = inst_26044__$1);

return statearr_26071;
})();
if(cljs.core.truth_(inst_26045)){
var statearr_26072_26096 = state_26067__$1;
(statearr_26072_26096[(1)] = (5));

} else {
var statearr_26073_26097 = state_26067__$1;
(statearr_26073_26097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (13))){
var state_26067__$1 = state_26067;
var statearr_26074_26098 = state_26067__$1;
(statearr_26074_26098[(2)] = null);

(statearr_26074_26098[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (6))){
var inst_26044 = (state_26067[(7)]);
var inst_26050 = p.call(null,inst_26044);
var state_26067__$1 = state_26067;
if(cljs.core.truth_(inst_26050)){
var statearr_26075_26099 = state_26067__$1;
(statearr_26075_26099[(1)] = (9));

} else {
var statearr_26076_26100 = state_26067__$1;
(statearr_26076_26100[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (3))){
var inst_26065 = (state_26067[(2)]);
var state_26067__$1 = state_26067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26067__$1,inst_26065);
} else {
if((state_val_26068 === (12))){
var state_26067__$1 = state_26067;
var statearr_26077_26101 = state_26067__$1;
(statearr_26077_26101[(2)] = null);

(statearr_26077_26101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (2))){
var state_26067__$1 = state_26067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26067__$1,(4),ch);
} else {
if((state_val_26068 === (11))){
var inst_26044 = (state_26067[(7)]);
var inst_26054 = (state_26067[(2)]);
var state_26067__$1 = state_26067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26067__$1,(8),inst_26054,inst_26044);
} else {
if((state_val_26068 === (9))){
var state_26067__$1 = state_26067;
var statearr_26078_26102 = state_26067__$1;
(statearr_26078_26102[(2)] = tc);

(statearr_26078_26102[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (5))){
var inst_26047 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26048 = cljs.core.async.close_BANG_.call(null,fc);
var state_26067__$1 = (function (){var statearr_26079 = state_26067;
(statearr_26079[(8)] = inst_26047);

return statearr_26079;
})();
var statearr_26080_26103 = state_26067__$1;
(statearr_26080_26103[(2)] = inst_26048);

(statearr_26080_26103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (14))){
var inst_26061 = (state_26067[(2)]);
var state_26067__$1 = state_26067;
var statearr_26081_26104 = state_26067__$1;
(statearr_26081_26104[(2)] = inst_26061);

(statearr_26081_26104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (10))){
var state_26067__$1 = state_26067;
var statearr_26082_26105 = state_26067__$1;
(statearr_26082_26105[(2)] = fc);

(statearr_26082_26105[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (8))){
var inst_26056 = (state_26067[(2)]);
var state_26067__$1 = state_26067;
if(cljs.core.truth_(inst_26056)){
var statearr_26083_26106 = state_26067__$1;
(statearr_26083_26106[(1)] = (12));

} else {
var statearr_26084_26107 = state_26067__$1;
(statearr_26084_26107[(1)] = (13));

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
});})(c__19342__auto___26093,tc,fc))
;
return ((function (switch__19280__auto__,c__19342__auto___26093,tc,fc){
return (function() {
var cljs$core$async$state_machine__19281__auto__ = null;
var cljs$core$async$state_machine__19281__auto____0 = (function (){
var statearr_26088 = [null,null,null,null,null,null,null,null,null];
(statearr_26088[(0)] = cljs$core$async$state_machine__19281__auto__);

(statearr_26088[(1)] = (1));

return statearr_26088;
});
var cljs$core$async$state_machine__19281__auto____1 = (function (state_26067){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_26067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e26089){if((e26089 instanceof Object)){
var ex__19284__auto__ = e26089;
var statearr_26090_26108 = state_26067;
(statearr_26090_26108[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26109 = state_26067;
state_26067 = G__26109;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
cljs$core$async$state_machine__19281__auto__ = function(state_26067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19281__auto____1.call(this,state_26067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19281__auto____0;
cljs$core$async$state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19281__auto____1;
return cljs$core$async$state_machine__19281__auto__;
})()
;})(switch__19280__auto__,c__19342__auto___26093,tc,fc))
})();
var state__19344__auto__ = (function (){var statearr_26091 = f__19343__auto__.call(null);
(statearr_26091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___26093);

return statearr_26091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___26093,tc,fc))
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
var c__19342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto__){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (c__19342__auto__){
return (function (state_26156){
var state_val_26157 = (state_26156[(1)]);
if((state_val_26157 === (1))){
var inst_26142 = init;
var state_26156__$1 = (function (){var statearr_26158 = state_26156;
(statearr_26158[(7)] = inst_26142);

return statearr_26158;
})();
var statearr_26159_26174 = state_26156__$1;
(statearr_26159_26174[(2)] = null);

(statearr_26159_26174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26157 === (2))){
var state_26156__$1 = state_26156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26156__$1,(4),ch);
} else {
if((state_val_26157 === (3))){
var inst_26154 = (state_26156[(2)]);
var state_26156__$1 = state_26156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26156__$1,inst_26154);
} else {
if((state_val_26157 === (4))){
var inst_26145 = (state_26156[(8)]);
var inst_26145__$1 = (state_26156[(2)]);
var inst_26146 = (inst_26145__$1 == null);
var state_26156__$1 = (function (){var statearr_26160 = state_26156;
(statearr_26160[(8)] = inst_26145__$1);

return statearr_26160;
})();
if(cljs.core.truth_(inst_26146)){
var statearr_26161_26175 = state_26156__$1;
(statearr_26161_26175[(1)] = (5));

} else {
var statearr_26162_26176 = state_26156__$1;
(statearr_26162_26176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26157 === (5))){
var inst_26142 = (state_26156[(7)]);
var state_26156__$1 = state_26156;
var statearr_26163_26177 = state_26156__$1;
(statearr_26163_26177[(2)] = inst_26142);

(statearr_26163_26177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26157 === (6))){
var inst_26142 = (state_26156[(7)]);
var inst_26145 = (state_26156[(8)]);
var inst_26149 = f.call(null,inst_26142,inst_26145);
var inst_26142__$1 = inst_26149;
var state_26156__$1 = (function (){var statearr_26164 = state_26156;
(statearr_26164[(7)] = inst_26142__$1);

return statearr_26164;
})();
var statearr_26165_26178 = state_26156__$1;
(statearr_26165_26178[(2)] = null);

(statearr_26165_26178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26157 === (7))){
var inst_26152 = (state_26156[(2)]);
var state_26156__$1 = state_26156;
var statearr_26166_26179 = state_26156__$1;
(statearr_26166_26179[(2)] = inst_26152);

(statearr_26166_26179[(1)] = (3));


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
});})(c__19342__auto__))
;
return ((function (switch__19280__auto__,c__19342__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19281__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19281__auto____0 = (function (){
var statearr_26170 = [null,null,null,null,null,null,null,null,null];
(statearr_26170[(0)] = cljs$core$async$reduce_$_state_machine__19281__auto__);

(statearr_26170[(1)] = (1));

return statearr_26170;
});
var cljs$core$async$reduce_$_state_machine__19281__auto____1 = (function (state_26156){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_26156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e26171){if((e26171 instanceof Object)){
var ex__19284__auto__ = e26171;
var statearr_26172_26180 = state_26156;
(statearr_26172_26180[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26181 = state_26156;
state_26156 = G__26181;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19281__auto__ = function(state_26156){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19281__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19281__auto____1.call(this,state_26156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19281__auto____0;
cljs$core$async$reduce_$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19281__auto____1;
return cljs$core$async$reduce_$_state_machine__19281__auto__;
})()
;})(switch__19280__auto__,c__19342__auto__))
})();
var state__19344__auto__ = (function (){var statearr_26173 = f__19343__auto__.call(null);
(statearr_26173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto__);

return statearr_26173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto__))
);

return c__19342__auto__;
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
var G__26183 = arguments.length;
switch (G__26183) {
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
var c__19342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto__){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (c__19342__auto__){
return (function (state_26208){
var state_val_26209 = (state_26208[(1)]);
if((state_val_26209 === (7))){
var inst_26190 = (state_26208[(2)]);
var state_26208__$1 = state_26208;
var statearr_26210_26234 = state_26208__$1;
(statearr_26210_26234[(2)] = inst_26190);

(statearr_26210_26234[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26209 === (1))){
var inst_26184 = cljs.core.seq.call(null,coll);
var inst_26185 = inst_26184;
var state_26208__$1 = (function (){var statearr_26211 = state_26208;
(statearr_26211[(7)] = inst_26185);

return statearr_26211;
})();
var statearr_26212_26235 = state_26208__$1;
(statearr_26212_26235[(2)] = null);

(statearr_26212_26235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26209 === (4))){
var inst_26185 = (state_26208[(7)]);
var inst_26188 = cljs.core.first.call(null,inst_26185);
var state_26208__$1 = state_26208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26208__$1,(7),ch,inst_26188);
} else {
if((state_val_26209 === (13))){
var inst_26202 = (state_26208[(2)]);
var state_26208__$1 = state_26208;
var statearr_26213_26236 = state_26208__$1;
(statearr_26213_26236[(2)] = inst_26202);

(statearr_26213_26236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26209 === (6))){
var inst_26193 = (state_26208[(2)]);
var state_26208__$1 = state_26208;
if(cljs.core.truth_(inst_26193)){
var statearr_26214_26237 = state_26208__$1;
(statearr_26214_26237[(1)] = (8));

} else {
var statearr_26215_26238 = state_26208__$1;
(statearr_26215_26238[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26209 === (3))){
var inst_26206 = (state_26208[(2)]);
var state_26208__$1 = state_26208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26208__$1,inst_26206);
} else {
if((state_val_26209 === (12))){
var state_26208__$1 = state_26208;
var statearr_26216_26239 = state_26208__$1;
(statearr_26216_26239[(2)] = null);

(statearr_26216_26239[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26209 === (2))){
var inst_26185 = (state_26208[(7)]);
var state_26208__$1 = state_26208;
if(cljs.core.truth_(inst_26185)){
var statearr_26217_26240 = state_26208__$1;
(statearr_26217_26240[(1)] = (4));

} else {
var statearr_26218_26241 = state_26208__$1;
(statearr_26218_26241[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26209 === (11))){
var inst_26199 = cljs.core.async.close_BANG_.call(null,ch);
var state_26208__$1 = state_26208;
var statearr_26219_26242 = state_26208__$1;
(statearr_26219_26242[(2)] = inst_26199);

(statearr_26219_26242[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26209 === (9))){
var state_26208__$1 = state_26208;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26220_26243 = state_26208__$1;
(statearr_26220_26243[(1)] = (11));

} else {
var statearr_26221_26244 = state_26208__$1;
(statearr_26221_26244[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26209 === (5))){
var inst_26185 = (state_26208[(7)]);
var state_26208__$1 = state_26208;
var statearr_26222_26245 = state_26208__$1;
(statearr_26222_26245[(2)] = inst_26185);

(statearr_26222_26245[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26209 === (10))){
var inst_26204 = (state_26208[(2)]);
var state_26208__$1 = state_26208;
var statearr_26223_26246 = state_26208__$1;
(statearr_26223_26246[(2)] = inst_26204);

(statearr_26223_26246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26209 === (8))){
var inst_26185 = (state_26208[(7)]);
var inst_26195 = cljs.core.next.call(null,inst_26185);
var inst_26185__$1 = inst_26195;
var state_26208__$1 = (function (){var statearr_26224 = state_26208;
(statearr_26224[(7)] = inst_26185__$1);

return statearr_26224;
})();
var statearr_26225_26247 = state_26208__$1;
(statearr_26225_26247[(2)] = null);

(statearr_26225_26247[(1)] = (2));


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
});})(c__19342__auto__))
;
return ((function (switch__19280__auto__,c__19342__auto__){
return (function() {
var cljs$core$async$state_machine__19281__auto__ = null;
var cljs$core$async$state_machine__19281__auto____0 = (function (){
var statearr_26229 = [null,null,null,null,null,null,null,null];
(statearr_26229[(0)] = cljs$core$async$state_machine__19281__auto__);

(statearr_26229[(1)] = (1));

return statearr_26229;
});
var cljs$core$async$state_machine__19281__auto____1 = (function (state_26208){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_26208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e26230){if((e26230 instanceof Object)){
var ex__19284__auto__ = e26230;
var statearr_26231_26248 = state_26208;
(statearr_26231_26248[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26249 = state_26208;
state_26208 = G__26249;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
cljs$core$async$state_machine__19281__auto__ = function(state_26208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19281__auto____1.call(this,state_26208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19281__auto____0;
cljs$core$async$state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19281__auto____1;
return cljs$core$async$state_machine__19281__auto__;
})()
;})(switch__19280__auto__,c__19342__auto__))
})();
var state__19344__auto__ = (function (){var statearr_26232 = f__19343__auto__.call(null);
(statearr_26232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto__);

return statearr_26232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto__))
);

return c__19342__auto__;
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

cljs.core.async.Mux = (function (){var obj26251 = {};
return obj26251;
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


cljs.core.async.Mult = (function (){var obj26253 = {};
return obj26253;
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
if(typeof cljs.core.async.t26475 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26475 = (function (mult,ch,cs,meta26476){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26476 = meta26476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26477,meta26476__$1){
var self__ = this;
var _26477__$1 = this;
return (new cljs.core.async.t26475(self__.mult,self__.ch,self__.cs,meta26476__$1));
});})(cs))
;

cljs.core.async.t26475.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26477){
var self__ = this;
var _26477__$1 = this;
return self__.meta26476;
});})(cs))
;

cljs.core.async.t26475.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26475.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t26475.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t26475.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t26475.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t26475.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t26475.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26476","meta26476",-1361506077,null)], null);
});})(cs))
;

cljs.core.async.t26475.cljs$lang$type = true;

cljs.core.async.t26475.cljs$lang$ctorStr = "cljs.core.async/t26475";

cljs.core.async.t26475.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16688__auto__,writer__16689__auto__,opt__16690__auto__){
return cljs.core._write.call(null,writer__16689__auto__,"cljs.core.async/t26475");
});})(cs))
;

cljs.core.async.__GT_t26475 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t26475(mult__$1,ch__$1,cs__$1,meta26476){
return (new cljs.core.async.t26475(mult__$1,ch__$1,cs__$1,meta26476));
});})(cs))
;

}

return (new cljs.core.async.t26475(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19342__auto___26696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___26696,cs,m,dchan,dctr,done){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (c__19342__auto___26696,cs,m,dchan,dctr,done){
return (function (state_26608){
var state_val_26609 = (state_26608[(1)]);
if((state_val_26609 === (7))){
var inst_26604 = (state_26608[(2)]);
var state_26608__$1 = state_26608;
var statearr_26610_26697 = state_26608__$1;
(statearr_26610_26697[(2)] = inst_26604);

(statearr_26610_26697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (20))){
var inst_26509 = (state_26608[(7)]);
var inst_26519 = cljs.core.first.call(null,inst_26509);
var inst_26520 = cljs.core.nth.call(null,inst_26519,(0),null);
var inst_26521 = cljs.core.nth.call(null,inst_26519,(1),null);
var state_26608__$1 = (function (){var statearr_26611 = state_26608;
(statearr_26611[(8)] = inst_26520);

return statearr_26611;
})();
if(cljs.core.truth_(inst_26521)){
var statearr_26612_26698 = state_26608__$1;
(statearr_26612_26698[(1)] = (22));

} else {
var statearr_26613_26699 = state_26608__$1;
(statearr_26613_26699[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (27))){
var inst_26551 = (state_26608[(9)]);
var inst_26556 = (state_26608[(10)]);
var inst_26480 = (state_26608[(11)]);
var inst_26549 = (state_26608[(12)]);
var inst_26556__$1 = cljs.core._nth.call(null,inst_26549,inst_26551);
var inst_26557 = cljs.core.async.put_BANG_.call(null,inst_26556__$1,inst_26480,done);
var state_26608__$1 = (function (){var statearr_26614 = state_26608;
(statearr_26614[(10)] = inst_26556__$1);

return statearr_26614;
})();
if(cljs.core.truth_(inst_26557)){
var statearr_26615_26700 = state_26608__$1;
(statearr_26615_26700[(1)] = (30));

} else {
var statearr_26616_26701 = state_26608__$1;
(statearr_26616_26701[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (1))){
var state_26608__$1 = state_26608;
var statearr_26617_26702 = state_26608__$1;
(statearr_26617_26702[(2)] = null);

(statearr_26617_26702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (24))){
var inst_26509 = (state_26608[(7)]);
var inst_26526 = (state_26608[(2)]);
var inst_26527 = cljs.core.next.call(null,inst_26509);
var inst_26489 = inst_26527;
var inst_26490 = null;
var inst_26491 = (0);
var inst_26492 = (0);
var state_26608__$1 = (function (){var statearr_26618 = state_26608;
(statearr_26618[(13)] = inst_26492);

(statearr_26618[(14)] = inst_26526);

(statearr_26618[(15)] = inst_26491);

(statearr_26618[(16)] = inst_26490);

(statearr_26618[(17)] = inst_26489);

return statearr_26618;
})();
var statearr_26619_26703 = state_26608__$1;
(statearr_26619_26703[(2)] = null);

(statearr_26619_26703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (39))){
var state_26608__$1 = state_26608;
var statearr_26623_26704 = state_26608__$1;
(statearr_26623_26704[(2)] = null);

(statearr_26623_26704[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (4))){
var inst_26480 = (state_26608[(11)]);
var inst_26480__$1 = (state_26608[(2)]);
var inst_26481 = (inst_26480__$1 == null);
var state_26608__$1 = (function (){var statearr_26624 = state_26608;
(statearr_26624[(11)] = inst_26480__$1);

return statearr_26624;
})();
if(cljs.core.truth_(inst_26481)){
var statearr_26625_26705 = state_26608__$1;
(statearr_26625_26705[(1)] = (5));

} else {
var statearr_26626_26706 = state_26608__$1;
(statearr_26626_26706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (15))){
var inst_26492 = (state_26608[(13)]);
var inst_26491 = (state_26608[(15)]);
var inst_26490 = (state_26608[(16)]);
var inst_26489 = (state_26608[(17)]);
var inst_26505 = (state_26608[(2)]);
var inst_26506 = (inst_26492 + (1));
var tmp26620 = inst_26491;
var tmp26621 = inst_26490;
var tmp26622 = inst_26489;
var inst_26489__$1 = tmp26622;
var inst_26490__$1 = tmp26621;
var inst_26491__$1 = tmp26620;
var inst_26492__$1 = inst_26506;
var state_26608__$1 = (function (){var statearr_26627 = state_26608;
(statearr_26627[(13)] = inst_26492__$1);

(statearr_26627[(18)] = inst_26505);

(statearr_26627[(15)] = inst_26491__$1);

(statearr_26627[(16)] = inst_26490__$1);

(statearr_26627[(17)] = inst_26489__$1);

return statearr_26627;
})();
var statearr_26628_26707 = state_26608__$1;
(statearr_26628_26707[(2)] = null);

(statearr_26628_26707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (21))){
var inst_26530 = (state_26608[(2)]);
var state_26608__$1 = state_26608;
var statearr_26632_26708 = state_26608__$1;
(statearr_26632_26708[(2)] = inst_26530);

(statearr_26632_26708[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (31))){
var inst_26556 = (state_26608[(10)]);
var inst_26560 = done.call(null,null);
var inst_26561 = cljs.core.async.untap_STAR_.call(null,m,inst_26556);
var state_26608__$1 = (function (){var statearr_26633 = state_26608;
(statearr_26633[(19)] = inst_26560);

return statearr_26633;
})();
var statearr_26634_26709 = state_26608__$1;
(statearr_26634_26709[(2)] = inst_26561);

(statearr_26634_26709[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (32))){
var inst_26551 = (state_26608[(9)]);
var inst_26549 = (state_26608[(12)]);
var inst_26548 = (state_26608[(20)]);
var inst_26550 = (state_26608[(21)]);
var inst_26563 = (state_26608[(2)]);
var inst_26564 = (inst_26551 + (1));
var tmp26629 = inst_26549;
var tmp26630 = inst_26548;
var tmp26631 = inst_26550;
var inst_26548__$1 = tmp26630;
var inst_26549__$1 = tmp26629;
var inst_26550__$1 = tmp26631;
var inst_26551__$1 = inst_26564;
var state_26608__$1 = (function (){var statearr_26635 = state_26608;
(statearr_26635[(9)] = inst_26551__$1);

(statearr_26635[(22)] = inst_26563);

(statearr_26635[(12)] = inst_26549__$1);

(statearr_26635[(20)] = inst_26548__$1);

(statearr_26635[(21)] = inst_26550__$1);

return statearr_26635;
})();
var statearr_26636_26710 = state_26608__$1;
(statearr_26636_26710[(2)] = null);

(statearr_26636_26710[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (40))){
var inst_26576 = (state_26608[(23)]);
var inst_26580 = done.call(null,null);
var inst_26581 = cljs.core.async.untap_STAR_.call(null,m,inst_26576);
var state_26608__$1 = (function (){var statearr_26637 = state_26608;
(statearr_26637[(24)] = inst_26580);

return statearr_26637;
})();
var statearr_26638_26711 = state_26608__$1;
(statearr_26638_26711[(2)] = inst_26581);

(statearr_26638_26711[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (33))){
var inst_26567 = (state_26608[(25)]);
var inst_26569 = cljs.core.chunked_seq_QMARK_.call(null,inst_26567);
var state_26608__$1 = state_26608;
if(inst_26569){
var statearr_26639_26712 = state_26608__$1;
(statearr_26639_26712[(1)] = (36));

} else {
var statearr_26640_26713 = state_26608__$1;
(statearr_26640_26713[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (13))){
var inst_26499 = (state_26608[(26)]);
var inst_26502 = cljs.core.async.close_BANG_.call(null,inst_26499);
var state_26608__$1 = state_26608;
var statearr_26641_26714 = state_26608__$1;
(statearr_26641_26714[(2)] = inst_26502);

(statearr_26641_26714[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (22))){
var inst_26520 = (state_26608[(8)]);
var inst_26523 = cljs.core.async.close_BANG_.call(null,inst_26520);
var state_26608__$1 = state_26608;
var statearr_26642_26715 = state_26608__$1;
(statearr_26642_26715[(2)] = inst_26523);

(statearr_26642_26715[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (36))){
var inst_26567 = (state_26608[(25)]);
var inst_26571 = cljs.core.chunk_first.call(null,inst_26567);
var inst_26572 = cljs.core.chunk_rest.call(null,inst_26567);
var inst_26573 = cljs.core.count.call(null,inst_26571);
var inst_26548 = inst_26572;
var inst_26549 = inst_26571;
var inst_26550 = inst_26573;
var inst_26551 = (0);
var state_26608__$1 = (function (){var statearr_26643 = state_26608;
(statearr_26643[(9)] = inst_26551);

(statearr_26643[(12)] = inst_26549);

(statearr_26643[(20)] = inst_26548);

(statearr_26643[(21)] = inst_26550);

return statearr_26643;
})();
var statearr_26644_26716 = state_26608__$1;
(statearr_26644_26716[(2)] = null);

(statearr_26644_26716[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (41))){
var inst_26567 = (state_26608[(25)]);
var inst_26583 = (state_26608[(2)]);
var inst_26584 = cljs.core.next.call(null,inst_26567);
var inst_26548 = inst_26584;
var inst_26549 = null;
var inst_26550 = (0);
var inst_26551 = (0);
var state_26608__$1 = (function (){var statearr_26645 = state_26608;
(statearr_26645[(9)] = inst_26551);

(statearr_26645[(27)] = inst_26583);

(statearr_26645[(12)] = inst_26549);

(statearr_26645[(20)] = inst_26548);

(statearr_26645[(21)] = inst_26550);

return statearr_26645;
})();
var statearr_26646_26717 = state_26608__$1;
(statearr_26646_26717[(2)] = null);

(statearr_26646_26717[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (43))){
var state_26608__$1 = state_26608;
var statearr_26647_26718 = state_26608__$1;
(statearr_26647_26718[(2)] = null);

(statearr_26647_26718[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (29))){
var inst_26592 = (state_26608[(2)]);
var state_26608__$1 = state_26608;
var statearr_26648_26719 = state_26608__$1;
(statearr_26648_26719[(2)] = inst_26592);

(statearr_26648_26719[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (44))){
var inst_26601 = (state_26608[(2)]);
var state_26608__$1 = (function (){var statearr_26649 = state_26608;
(statearr_26649[(28)] = inst_26601);

return statearr_26649;
})();
var statearr_26650_26720 = state_26608__$1;
(statearr_26650_26720[(2)] = null);

(statearr_26650_26720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (6))){
var inst_26540 = (state_26608[(29)]);
var inst_26539 = cljs.core.deref.call(null,cs);
var inst_26540__$1 = cljs.core.keys.call(null,inst_26539);
var inst_26541 = cljs.core.count.call(null,inst_26540__$1);
var inst_26542 = cljs.core.reset_BANG_.call(null,dctr,inst_26541);
var inst_26547 = cljs.core.seq.call(null,inst_26540__$1);
var inst_26548 = inst_26547;
var inst_26549 = null;
var inst_26550 = (0);
var inst_26551 = (0);
var state_26608__$1 = (function (){var statearr_26651 = state_26608;
(statearr_26651[(30)] = inst_26542);

(statearr_26651[(29)] = inst_26540__$1);

(statearr_26651[(9)] = inst_26551);

(statearr_26651[(12)] = inst_26549);

(statearr_26651[(20)] = inst_26548);

(statearr_26651[(21)] = inst_26550);

return statearr_26651;
})();
var statearr_26652_26721 = state_26608__$1;
(statearr_26652_26721[(2)] = null);

(statearr_26652_26721[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (28))){
var inst_26567 = (state_26608[(25)]);
var inst_26548 = (state_26608[(20)]);
var inst_26567__$1 = cljs.core.seq.call(null,inst_26548);
var state_26608__$1 = (function (){var statearr_26653 = state_26608;
(statearr_26653[(25)] = inst_26567__$1);

return statearr_26653;
})();
if(inst_26567__$1){
var statearr_26654_26722 = state_26608__$1;
(statearr_26654_26722[(1)] = (33));

} else {
var statearr_26655_26723 = state_26608__$1;
(statearr_26655_26723[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (25))){
var inst_26551 = (state_26608[(9)]);
var inst_26550 = (state_26608[(21)]);
var inst_26553 = (inst_26551 < inst_26550);
var inst_26554 = inst_26553;
var state_26608__$1 = state_26608;
if(cljs.core.truth_(inst_26554)){
var statearr_26656_26724 = state_26608__$1;
(statearr_26656_26724[(1)] = (27));

} else {
var statearr_26657_26725 = state_26608__$1;
(statearr_26657_26725[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (34))){
var state_26608__$1 = state_26608;
var statearr_26658_26726 = state_26608__$1;
(statearr_26658_26726[(2)] = null);

(statearr_26658_26726[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (17))){
var state_26608__$1 = state_26608;
var statearr_26659_26727 = state_26608__$1;
(statearr_26659_26727[(2)] = null);

(statearr_26659_26727[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (3))){
var inst_26606 = (state_26608[(2)]);
var state_26608__$1 = state_26608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26608__$1,inst_26606);
} else {
if((state_val_26609 === (12))){
var inst_26535 = (state_26608[(2)]);
var state_26608__$1 = state_26608;
var statearr_26660_26728 = state_26608__$1;
(statearr_26660_26728[(2)] = inst_26535);

(statearr_26660_26728[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (2))){
var state_26608__$1 = state_26608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26608__$1,(4),ch);
} else {
if((state_val_26609 === (23))){
var state_26608__$1 = state_26608;
var statearr_26661_26729 = state_26608__$1;
(statearr_26661_26729[(2)] = null);

(statearr_26661_26729[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (35))){
var inst_26590 = (state_26608[(2)]);
var state_26608__$1 = state_26608;
var statearr_26662_26730 = state_26608__$1;
(statearr_26662_26730[(2)] = inst_26590);

(statearr_26662_26730[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (19))){
var inst_26509 = (state_26608[(7)]);
var inst_26513 = cljs.core.chunk_first.call(null,inst_26509);
var inst_26514 = cljs.core.chunk_rest.call(null,inst_26509);
var inst_26515 = cljs.core.count.call(null,inst_26513);
var inst_26489 = inst_26514;
var inst_26490 = inst_26513;
var inst_26491 = inst_26515;
var inst_26492 = (0);
var state_26608__$1 = (function (){var statearr_26663 = state_26608;
(statearr_26663[(13)] = inst_26492);

(statearr_26663[(15)] = inst_26491);

(statearr_26663[(16)] = inst_26490);

(statearr_26663[(17)] = inst_26489);

return statearr_26663;
})();
var statearr_26664_26731 = state_26608__$1;
(statearr_26664_26731[(2)] = null);

(statearr_26664_26731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (11))){
var inst_26509 = (state_26608[(7)]);
var inst_26489 = (state_26608[(17)]);
var inst_26509__$1 = cljs.core.seq.call(null,inst_26489);
var state_26608__$1 = (function (){var statearr_26665 = state_26608;
(statearr_26665[(7)] = inst_26509__$1);

return statearr_26665;
})();
if(inst_26509__$1){
var statearr_26666_26732 = state_26608__$1;
(statearr_26666_26732[(1)] = (16));

} else {
var statearr_26667_26733 = state_26608__$1;
(statearr_26667_26733[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (9))){
var inst_26537 = (state_26608[(2)]);
var state_26608__$1 = state_26608;
var statearr_26668_26734 = state_26608__$1;
(statearr_26668_26734[(2)] = inst_26537);

(statearr_26668_26734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (5))){
var inst_26487 = cljs.core.deref.call(null,cs);
var inst_26488 = cljs.core.seq.call(null,inst_26487);
var inst_26489 = inst_26488;
var inst_26490 = null;
var inst_26491 = (0);
var inst_26492 = (0);
var state_26608__$1 = (function (){var statearr_26669 = state_26608;
(statearr_26669[(13)] = inst_26492);

(statearr_26669[(15)] = inst_26491);

(statearr_26669[(16)] = inst_26490);

(statearr_26669[(17)] = inst_26489);

return statearr_26669;
})();
var statearr_26670_26735 = state_26608__$1;
(statearr_26670_26735[(2)] = null);

(statearr_26670_26735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (14))){
var state_26608__$1 = state_26608;
var statearr_26671_26736 = state_26608__$1;
(statearr_26671_26736[(2)] = null);

(statearr_26671_26736[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (45))){
var inst_26598 = (state_26608[(2)]);
var state_26608__$1 = state_26608;
var statearr_26672_26737 = state_26608__$1;
(statearr_26672_26737[(2)] = inst_26598);

(statearr_26672_26737[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (26))){
var inst_26540 = (state_26608[(29)]);
var inst_26594 = (state_26608[(2)]);
var inst_26595 = cljs.core.seq.call(null,inst_26540);
var state_26608__$1 = (function (){var statearr_26673 = state_26608;
(statearr_26673[(31)] = inst_26594);

return statearr_26673;
})();
if(inst_26595){
var statearr_26674_26738 = state_26608__$1;
(statearr_26674_26738[(1)] = (42));

} else {
var statearr_26675_26739 = state_26608__$1;
(statearr_26675_26739[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (16))){
var inst_26509 = (state_26608[(7)]);
var inst_26511 = cljs.core.chunked_seq_QMARK_.call(null,inst_26509);
var state_26608__$1 = state_26608;
if(inst_26511){
var statearr_26676_26740 = state_26608__$1;
(statearr_26676_26740[(1)] = (19));

} else {
var statearr_26677_26741 = state_26608__$1;
(statearr_26677_26741[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (38))){
var inst_26587 = (state_26608[(2)]);
var state_26608__$1 = state_26608;
var statearr_26678_26742 = state_26608__$1;
(statearr_26678_26742[(2)] = inst_26587);

(statearr_26678_26742[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (30))){
var state_26608__$1 = state_26608;
var statearr_26679_26743 = state_26608__$1;
(statearr_26679_26743[(2)] = null);

(statearr_26679_26743[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (10))){
var inst_26492 = (state_26608[(13)]);
var inst_26490 = (state_26608[(16)]);
var inst_26498 = cljs.core._nth.call(null,inst_26490,inst_26492);
var inst_26499 = cljs.core.nth.call(null,inst_26498,(0),null);
var inst_26500 = cljs.core.nth.call(null,inst_26498,(1),null);
var state_26608__$1 = (function (){var statearr_26680 = state_26608;
(statearr_26680[(26)] = inst_26499);

return statearr_26680;
})();
if(cljs.core.truth_(inst_26500)){
var statearr_26681_26744 = state_26608__$1;
(statearr_26681_26744[(1)] = (13));

} else {
var statearr_26682_26745 = state_26608__$1;
(statearr_26682_26745[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (18))){
var inst_26533 = (state_26608[(2)]);
var state_26608__$1 = state_26608;
var statearr_26683_26746 = state_26608__$1;
(statearr_26683_26746[(2)] = inst_26533);

(statearr_26683_26746[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (42))){
var state_26608__$1 = state_26608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26608__$1,(45),dchan);
} else {
if((state_val_26609 === (37))){
var inst_26576 = (state_26608[(23)]);
var inst_26567 = (state_26608[(25)]);
var inst_26480 = (state_26608[(11)]);
var inst_26576__$1 = cljs.core.first.call(null,inst_26567);
var inst_26577 = cljs.core.async.put_BANG_.call(null,inst_26576__$1,inst_26480,done);
var state_26608__$1 = (function (){var statearr_26684 = state_26608;
(statearr_26684[(23)] = inst_26576__$1);

return statearr_26684;
})();
if(cljs.core.truth_(inst_26577)){
var statearr_26685_26747 = state_26608__$1;
(statearr_26685_26747[(1)] = (39));

} else {
var statearr_26686_26748 = state_26608__$1;
(statearr_26686_26748[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (8))){
var inst_26492 = (state_26608[(13)]);
var inst_26491 = (state_26608[(15)]);
var inst_26494 = (inst_26492 < inst_26491);
var inst_26495 = inst_26494;
var state_26608__$1 = state_26608;
if(cljs.core.truth_(inst_26495)){
var statearr_26687_26749 = state_26608__$1;
(statearr_26687_26749[(1)] = (10));

} else {
var statearr_26688_26750 = state_26608__$1;
(statearr_26688_26750[(1)] = (11));

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
});})(c__19342__auto___26696,cs,m,dchan,dctr,done))
;
return ((function (switch__19280__auto__,c__19342__auto___26696,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19281__auto__ = null;
var cljs$core$async$mult_$_state_machine__19281__auto____0 = (function (){
var statearr_26692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26692[(0)] = cljs$core$async$mult_$_state_machine__19281__auto__);

(statearr_26692[(1)] = (1));

return statearr_26692;
});
var cljs$core$async$mult_$_state_machine__19281__auto____1 = (function (state_26608){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_26608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e26693){if((e26693 instanceof Object)){
var ex__19284__auto__ = e26693;
var statearr_26694_26751 = state_26608;
(statearr_26694_26751[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26752 = state_26608;
state_26608 = G__26752;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19281__auto__ = function(state_26608){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19281__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19281__auto____1.call(this,state_26608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19281__auto____0;
cljs$core$async$mult_$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19281__auto____1;
return cljs$core$async$mult_$_state_machine__19281__auto__;
})()
;})(switch__19280__auto__,c__19342__auto___26696,cs,m,dchan,dctr,done))
})();
var state__19344__auto__ = (function (){var statearr_26695 = f__19343__auto__.call(null);
(statearr_26695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___26696);

return statearr_26695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___26696,cs,m,dchan,dctr,done))
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
var G__26754 = arguments.length;
switch (G__26754) {
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

cljs.core.async.Mix = (function (){var obj26757 = {};
return obj26757;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26762){
var map__26763 = p__26762;
var map__26763__$1 = ((cljs.core.seq_QMARK_.call(null,map__26763))?cljs.core.apply.call(null,cljs.core.hash_map,map__26763):map__26763);
var opts = map__26763__$1;
var statearr_26764_26767 = state;
(statearr_26764_26767[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__26763,map__26763__$1,opts){
return (function (val){
var statearr_26765_26768 = state;
(statearr_26765_26768[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26763,map__26763__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_26766_26769 = state;
(statearr_26766_26769[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26758){
var G__26759 = cljs.core.first.call(null,seq26758);
var seq26758__$1 = cljs.core.next.call(null,seq26758);
var G__26760 = cljs.core.first.call(null,seq26758__$1);
var seq26758__$2 = cljs.core.next.call(null,seq26758__$1);
var G__26761 = cljs.core.first.call(null,seq26758__$2);
var seq26758__$3 = cljs.core.next.call(null,seq26758__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26759,G__26760,G__26761,seq26758__$3);
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
if(typeof cljs.core.async.t26889 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26889 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26890){
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
this.meta26890 = meta26890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26891,meta26890__$1){
var self__ = this;
var _26891__$1 = this;
return (new cljs.core.async.t26889(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26890__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26889.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26891){
var self__ = this;
var _26891__$1 = this;
return self__.meta26890;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26889.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26889.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26889.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t26889.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26889.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26889.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26889.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26889.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t26889.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26890","meta26890",-191841352,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26889.cljs$lang$type = true;

cljs.core.async.t26889.cljs$lang$ctorStr = "cljs.core.async/t26889";

cljs.core.async.t26889.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16688__auto__,writer__16689__auto__,opt__16690__auto__){
return cljs.core._write.call(null,writer__16689__auto__,"cljs.core.async/t26889");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t26889 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t26889(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26890){
return (new cljs.core.async.t26889(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26890));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t26889(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19342__auto___27008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___27008,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (c__19342__auto___27008,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26961){
var state_val_26962 = (state_26961[(1)]);
if((state_val_26962 === (7))){
var inst_26905 = (state_26961[(7)]);
var inst_26910 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26905);
var state_26961__$1 = state_26961;
var statearr_26963_27009 = state_26961__$1;
(statearr_26963_27009[(2)] = inst_26910);

(statearr_26963_27009[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (20))){
var inst_26920 = (state_26961[(8)]);
var state_26961__$1 = state_26961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26961__$1,(23),out,inst_26920);
} else {
if((state_val_26962 === (1))){
var inst_26895 = (state_26961[(9)]);
var inst_26895__$1 = calc_state.call(null);
var inst_26896 = cljs.core.seq_QMARK_.call(null,inst_26895__$1);
var state_26961__$1 = (function (){var statearr_26964 = state_26961;
(statearr_26964[(9)] = inst_26895__$1);

return statearr_26964;
})();
if(inst_26896){
var statearr_26965_27010 = state_26961__$1;
(statearr_26965_27010[(1)] = (2));

} else {
var statearr_26966_27011 = state_26961__$1;
(statearr_26966_27011[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (24))){
var inst_26913 = (state_26961[(10)]);
var inst_26905 = inst_26913;
var state_26961__$1 = (function (){var statearr_26967 = state_26961;
(statearr_26967[(7)] = inst_26905);

return statearr_26967;
})();
var statearr_26968_27012 = state_26961__$1;
(statearr_26968_27012[(2)] = null);

(statearr_26968_27012[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (4))){
var inst_26895 = (state_26961[(9)]);
var inst_26901 = (state_26961[(2)]);
var inst_26902 = cljs.core.get.call(null,inst_26901,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26903 = cljs.core.get.call(null,inst_26901,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26904 = cljs.core.get.call(null,inst_26901,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26905 = inst_26895;
var state_26961__$1 = (function (){var statearr_26969 = state_26961;
(statearr_26969[(11)] = inst_26903);

(statearr_26969[(12)] = inst_26902);

(statearr_26969[(13)] = inst_26904);

(statearr_26969[(7)] = inst_26905);

return statearr_26969;
})();
var statearr_26970_27013 = state_26961__$1;
(statearr_26970_27013[(2)] = null);

(statearr_26970_27013[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (15))){
var state_26961__$1 = state_26961;
var statearr_26971_27014 = state_26961__$1;
(statearr_26971_27014[(2)] = null);

(statearr_26971_27014[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (21))){
var inst_26913 = (state_26961[(10)]);
var inst_26905 = inst_26913;
var state_26961__$1 = (function (){var statearr_26972 = state_26961;
(statearr_26972[(7)] = inst_26905);

return statearr_26972;
})();
var statearr_26973_27015 = state_26961__$1;
(statearr_26973_27015[(2)] = null);

(statearr_26973_27015[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (13))){
var inst_26957 = (state_26961[(2)]);
var state_26961__$1 = state_26961;
var statearr_26974_27016 = state_26961__$1;
(statearr_26974_27016[(2)] = inst_26957);

(statearr_26974_27016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (22))){
var inst_26955 = (state_26961[(2)]);
var state_26961__$1 = state_26961;
var statearr_26975_27017 = state_26961__$1;
(statearr_26975_27017[(2)] = inst_26955);

(statearr_26975_27017[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (6))){
var inst_26959 = (state_26961[(2)]);
var state_26961__$1 = state_26961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26961__$1,inst_26959);
} else {
if((state_val_26962 === (25))){
var state_26961__$1 = state_26961;
var statearr_26976_27018 = state_26961__$1;
(statearr_26976_27018[(2)] = null);

(statearr_26976_27018[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (17))){
var inst_26935 = (state_26961[(14)]);
var state_26961__$1 = state_26961;
var statearr_26977_27019 = state_26961__$1;
(statearr_26977_27019[(2)] = inst_26935);

(statearr_26977_27019[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (3))){
var inst_26895 = (state_26961[(9)]);
var state_26961__$1 = state_26961;
var statearr_26978_27020 = state_26961__$1;
(statearr_26978_27020[(2)] = inst_26895);

(statearr_26978_27020[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (12))){
var inst_26914 = (state_26961[(15)]);
var inst_26935 = (state_26961[(14)]);
var inst_26921 = (state_26961[(16)]);
var inst_26935__$1 = inst_26914.call(null,inst_26921);
var state_26961__$1 = (function (){var statearr_26979 = state_26961;
(statearr_26979[(14)] = inst_26935__$1);

return statearr_26979;
})();
if(cljs.core.truth_(inst_26935__$1)){
var statearr_26980_27021 = state_26961__$1;
(statearr_26980_27021[(1)] = (17));

} else {
var statearr_26981_27022 = state_26961__$1;
(statearr_26981_27022[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (2))){
var inst_26895 = (state_26961[(9)]);
var inst_26898 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26895);
var state_26961__$1 = state_26961;
var statearr_26982_27023 = state_26961__$1;
(statearr_26982_27023[(2)] = inst_26898);

(statearr_26982_27023[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (23))){
var inst_26946 = (state_26961[(2)]);
var state_26961__$1 = state_26961;
if(cljs.core.truth_(inst_26946)){
var statearr_26983_27024 = state_26961__$1;
(statearr_26983_27024[(1)] = (24));

} else {
var statearr_26984_27025 = state_26961__$1;
(statearr_26984_27025[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (19))){
var inst_26943 = (state_26961[(2)]);
var state_26961__$1 = state_26961;
if(cljs.core.truth_(inst_26943)){
var statearr_26985_27026 = state_26961__$1;
(statearr_26985_27026[(1)] = (20));

} else {
var statearr_26986_27027 = state_26961__$1;
(statearr_26986_27027[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (11))){
var inst_26920 = (state_26961[(8)]);
var inst_26926 = (inst_26920 == null);
var state_26961__$1 = state_26961;
if(cljs.core.truth_(inst_26926)){
var statearr_26987_27028 = state_26961__$1;
(statearr_26987_27028[(1)] = (14));

} else {
var statearr_26988_27029 = state_26961__$1;
(statearr_26988_27029[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (9))){
var inst_26913 = (state_26961[(10)]);
var inst_26913__$1 = (state_26961[(2)]);
var inst_26914 = cljs.core.get.call(null,inst_26913__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26915 = cljs.core.get.call(null,inst_26913__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26916 = cljs.core.get.call(null,inst_26913__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26961__$1 = (function (){var statearr_26989 = state_26961;
(statearr_26989[(15)] = inst_26914);

(statearr_26989[(10)] = inst_26913__$1);

(statearr_26989[(17)] = inst_26915);

return statearr_26989;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26961__$1,(10),inst_26916);
} else {
if((state_val_26962 === (5))){
var inst_26905 = (state_26961[(7)]);
var inst_26908 = cljs.core.seq_QMARK_.call(null,inst_26905);
var state_26961__$1 = state_26961;
if(inst_26908){
var statearr_26990_27030 = state_26961__$1;
(statearr_26990_27030[(1)] = (7));

} else {
var statearr_26991_27031 = state_26961__$1;
(statearr_26991_27031[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (14))){
var inst_26921 = (state_26961[(16)]);
var inst_26928 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26921);
var state_26961__$1 = state_26961;
var statearr_26992_27032 = state_26961__$1;
(statearr_26992_27032[(2)] = inst_26928);

(statearr_26992_27032[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (26))){
var inst_26951 = (state_26961[(2)]);
var state_26961__$1 = state_26961;
var statearr_26993_27033 = state_26961__$1;
(statearr_26993_27033[(2)] = inst_26951);

(statearr_26993_27033[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (16))){
var inst_26931 = (state_26961[(2)]);
var inst_26932 = calc_state.call(null);
var inst_26905 = inst_26932;
var state_26961__$1 = (function (){var statearr_26994 = state_26961;
(statearr_26994[(18)] = inst_26931);

(statearr_26994[(7)] = inst_26905);

return statearr_26994;
})();
var statearr_26995_27034 = state_26961__$1;
(statearr_26995_27034[(2)] = null);

(statearr_26995_27034[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (10))){
var inst_26920 = (state_26961[(8)]);
var inst_26921 = (state_26961[(16)]);
var inst_26919 = (state_26961[(2)]);
var inst_26920__$1 = cljs.core.nth.call(null,inst_26919,(0),null);
var inst_26921__$1 = cljs.core.nth.call(null,inst_26919,(1),null);
var inst_26922 = (inst_26920__$1 == null);
var inst_26923 = cljs.core._EQ_.call(null,inst_26921__$1,change);
var inst_26924 = (inst_26922) || (inst_26923);
var state_26961__$1 = (function (){var statearr_26996 = state_26961;
(statearr_26996[(8)] = inst_26920__$1);

(statearr_26996[(16)] = inst_26921__$1);

return statearr_26996;
})();
if(cljs.core.truth_(inst_26924)){
var statearr_26997_27035 = state_26961__$1;
(statearr_26997_27035[(1)] = (11));

} else {
var statearr_26998_27036 = state_26961__$1;
(statearr_26998_27036[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (18))){
var inst_26914 = (state_26961[(15)]);
var inst_26921 = (state_26961[(16)]);
var inst_26915 = (state_26961[(17)]);
var inst_26938 = cljs.core.empty_QMARK_.call(null,inst_26914);
var inst_26939 = inst_26915.call(null,inst_26921);
var inst_26940 = cljs.core.not.call(null,inst_26939);
var inst_26941 = (inst_26938) && (inst_26940);
var state_26961__$1 = state_26961;
var statearr_26999_27037 = state_26961__$1;
(statearr_26999_27037[(2)] = inst_26941);

(statearr_26999_27037[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (8))){
var inst_26905 = (state_26961[(7)]);
var state_26961__$1 = state_26961;
var statearr_27000_27038 = state_26961__$1;
(statearr_27000_27038[(2)] = inst_26905);

(statearr_27000_27038[(1)] = (9));


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
});})(c__19342__auto___27008,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19280__auto__,c__19342__auto___27008,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19281__auto__ = null;
var cljs$core$async$mix_$_state_machine__19281__auto____0 = (function (){
var statearr_27004 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27004[(0)] = cljs$core$async$mix_$_state_machine__19281__auto__);

(statearr_27004[(1)] = (1));

return statearr_27004;
});
var cljs$core$async$mix_$_state_machine__19281__auto____1 = (function (state_26961){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_26961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e27005){if((e27005 instanceof Object)){
var ex__19284__auto__ = e27005;
var statearr_27006_27039 = state_26961;
(statearr_27006_27039[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27040 = state_26961;
state_26961 = G__27040;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19281__auto__ = function(state_26961){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19281__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19281__auto____1.call(this,state_26961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19281__auto____0;
cljs$core$async$mix_$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19281__auto____1;
return cljs$core$async$mix_$_state_machine__19281__auto__;
})()
;})(switch__19280__auto__,c__19342__auto___27008,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19344__auto__ = (function (){var statearr_27007 = f__19343__auto__.call(null);
(statearr_27007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___27008);

return statearr_27007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___27008,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj27042 = {};
return obj27042;
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
var G__27044 = arguments.length;
switch (G__27044) {
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
var G__27048 = arguments.length;
switch (G__27048) {
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
return (function (p1__27046_SHARP_){
if(cljs.core.truth_(p1__27046_SHARP_.call(null,topic))){
return p1__27046_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27046_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16109__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t27049 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27049 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27050){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27050 = meta27050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27051,meta27050__$1){
var self__ = this;
var _27051__$1 = this;
return (new cljs.core.async.t27049(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27050__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t27049.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27051){
var self__ = this;
var _27051__$1 = this;
return self__.meta27050;
});})(mults,ensure_mult))
;

cljs.core.async.t27049.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27049.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t27049.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t27049.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t27049.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t27049.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t27049.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t27049.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27050","meta27050",-705807748,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t27049.cljs$lang$type = true;

cljs.core.async.t27049.cljs$lang$ctorStr = "cljs.core.async/t27049";

cljs.core.async.t27049.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16688__auto__,writer__16689__auto__,opt__16690__auto__){
return cljs.core._write.call(null,writer__16689__auto__,"cljs.core.async/t27049");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t27049 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t27049(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27050){
return (new cljs.core.async.t27049(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27050));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t27049(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19342__auto___27172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___27172,mults,ensure_mult,p){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (c__19342__auto___27172,mults,ensure_mult,p){
return (function (state_27123){
var state_val_27124 = (state_27123[(1)]);
if((state_val_27124 === (7))){
var inst_27119 = (state_27123[(2)]);
var state_27123__$1 = state_27123;
var statearr_27125_27173 = state_27123__$1;
(statearr_27125_27173[(2)] = inst_27119);

(statearr_27125_27173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27124 === (20))){
var state_27123__$1 = state_27123;
var statearr_27126_27174 = state_27123__$1;
(statearr_27126_27174[(2)] = null);

(statearr_27126_27174[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27124 === (1))){
var state_27123__$1 = state_27123;
var statearr_27127_27175 = state_27123__$1;
(statearr_27127_27175[(2)] = null);

(statearr_27127_27175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27124 === (24))){
var inst_27102 = (state_27123[(7)]);
var inst_27111 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27102);
var state_27123__$1 = state_27123;
var statearr_27128_27176 = state_27123__$1;
(statearr_27128_27176[(2)] = inst_27111);

(statearr_27128_27176[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27124 === (4))){
var inst_27054 = (state_27123[(8)]);
var inst_27054__$1 = (state_27123[(2)]);
var inst_27055 = (inst_27054__$1 == null);
var state_27123__$1 = (function (){var statearr_27129 = state_27123;
(statearr_27129[(8)] = inst_27054__$1);

return statearr_27129;
})();
if(cljs.core.truth_(inst_27055)){
var statearr_27130_27177 = state_27123__$1;
(statearr_27130_27177[(1)] = (5));

} else {
var statearr_27131_27178 = state_27123__$1;
(statearr_27131_27178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27124 === (15))){
var inst_27096 = (state_27123[(2)]);
var state_27123__$1 = state_27123;
var statearr_27132_27179 = state_27123__$1;
(statearr_27132_27179[(2)] = inst_27096);

(statearr_27132_27179[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27124 === (21))){
var inst_27116 = (state_27123[(2)]);
var state_27123__$1 = (function (){var statearr_27133 = state_27123;
(statearr_27133[(9)] = inst_27116);

return statearr_27133;
})();
var statearr_27134_27180 = state_27123__$1;
(statearr_27134_27180[(2)] = null);

(statearr_27134_27180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27124 === (13))){
var inst_27078 = (state_27123[(10)]);
var inst_27080 = cljs.core.chunked_seq_QMARK_.call(null,inst_27078);
var state_27123__$1 = state_27123;
if(inst_27080){
var statearr_27135_27181 = state_27123__$1;
(statearr_27135_27181[(1)] = (16));

} else {
var statearr_27136_27182 = state_27123__$1;
(statearr_27136_27182[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27124 === (22))){
var inst_27108 = (state_27123[(2)]);
var state_27123__$1 = state_27123;
if(cljs.core.truth_(inst_27108)){
var statearr_27137_27183 = state_27123__$1;
(statearr_27137_27183[(1)] = (23));

} else {
var statearr_27138_27184 = state_27123__$1;
(statearr_27138_27184[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27124 === (6))){
var inst_27102 = (state_27123[(7)]);
var inst_27104 = (state_27123[(11)]);
var inst_27054 = (state_27123[(8)]);
var inst_27102__$1 = topic_fn.call(null,inst_27054);
var inst_27103 = cljs.core.deref.call(null,mults);
var inst_27104__$1 = cljs.core.get.call(null,inst_27103,inst_27102__$1);
var state_27123__$1 = (function (){var statearr_27139 = state_27123;
(statearr_27139[(7)] = inst_27102__$1);

(statearr_27139[(11)] = inst_27104__$1);

return statearr_27139;
})();
if(cljs.core.truth_(inst_27104__$1)){
var statearr_27140_27185 = state_27123__$1;
(statearr_27140_27185[(1)] = (19));

} else {
var statearr_27141_27186 = state_27123__$1;
(statearr_27141_27186[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27124 === (25))){
var inst_27113 = (state_27123[(2)]);
var state_27123__$1 = state_27123;
var statearr_27142_27187 = state_27123__$1;
(statearr_27142_27187[(2)] = inst_27113);

(statearr_27142_27187[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27124 === (17))){
var inst_27078 = (state_27123[(10)]);
var inst_27087 = cljs.core.first.call(null,inst_27078);
var inst_27088 = cljs.core.async.muxch_STAR_.call(null,inst_27087);
var inst_27089 = cljs.core.async.close_BANG_.call(null,inst_27088);
var inst_27090 = cljs.core.next.call(null,inst_27078);
var inst_27064 = inst_27090;
var inst_27065 = null;
var inst_27066 = (0);
var inst_27067 = (0);
var state_27123__$1 = (function (){var statearr_27143 = state_27123;
(statearr_27143[(12)] = inst_27066);

(statearr_27143[(13)] = inst_27065);

(statearr_27143[(14)] = inst_27064);

(statearr_27143[(15)] = inst_27089);

(statearr_27143[(16)] = inst_27067);

return statearr_27143;
})();
var statearr_27144_27188 = state_27123__$1;
(statearr_27144_27188[(2)] = null);

(statearr_27144_27188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27124 === (3))){
var inst_27121 = (state_27123[(2)]);
var state_27123__$1 = state_27123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27123__$1,inst_27121);
} else {
if((state_val_27124 === (12))){
var inst_27098 = (state_27123[(2)]);
var state_27123__$1 = state_27123;
var statearr_27145_27189 = state_27123__$1;
(statearr_27145_27189[(2)] = inst_27098);

(statearr_27145_27189[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27124 === (2))){
var state_27123__$1 = state_27123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27123__$1,(4),ch);
} else {
if((state_val_27124 === (23))){
var state_27123__$1 = state_27123;
var statearr_27146_27190 = state_27123__$1;
(statearr_27146_27190[(2)] = null);

(statearr_27146_27190[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27124 === (19))){
var inst_27104 = (state_27123[(11)]);
var inst_27054 = (state_27123[(8)]);
var inst_27106 = cljs.core.async.muxch_STAR_.call(null,inst_27104);
var state_27123__$1 = state_27123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27123__$1,(22),inst_27106,inst_27054);
} else {
if((state_val_27124 === (11))){
var inst_27064 = (state_27123[(14)]);
var inst_27078 = (state_27123[(10)]);
var inst_27078__$1 = cljs.core.seq.call(null,inst_27064);
var state_27123__$1 = (function (){var statearr_27147 = state_27123;
(statearr_27147[(10)] = inst_27078__$1);

return statearr_27147;
})();
if(inst_27078__$1){
var statearr_27148_27191 = state_27123__$1;
(statearr_27148_27191[(1)] = (13));

} else {
var statearr_27149_27192 = state_27123__$1;
(statearr_27149_27192[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27124 === (9))){
var inst_27100 = (state_27123[(2)]);
var state_27123__$1 = state_27123;
var statearr_27150_27193 = state_27123__$1;
(statearr_27150_27193[(2)] = inst_27100);

(statearr_27150_27193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27124 === (5))){
var inst_27061 = cljs.core.deref.call(null,mults);
var inst_27062 = cljs.core.vals.call(null,inst_27061);
var inst_27063 = cljs.core.seq.call(null,inst_27062);
var inst_27064 = inst_27063;
var inst_27065 = null;
var inst_27066 = (0);
var inst_27067 = (0);
var state_27123__$1 = (function (){var statearr_27151 = state_27123;
(statearr_27151[(12)] = inst_27066);

(statearr_27151[(13)] = inst_27065);

(statearr_27151[(14)] = inst_27064);

(statearr_27151[(16)] = inst_27067);

return statearr_27151;
})();
var statearr_27152_27194 = state_27123__$1;
(statearr_27152_27194[(2)] = null);

(statearr_27152_27194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27124 === (14))){
var state_27123__$1 = state_27123;
var statearr_27156_27195 = state_27123__$1;
(statearr_27156_27195[(2)] = null);

(statearr_27156_27195[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27124 === (16))){
var inst_27078 = (state_27123[(10)]);
var inst_27082 = cljs.core.chunk_first.call(null,inst_27078);
var inst_27083 = cljs.core.chunk_rest.call(null,inst_27078);
var inst_27084 = cljs.core.count.call(null,inst_27082);
var inst_27064 = inst_27083;
var inst_27065 = inst_27082;
var inst_27066 = inst_27084;
var inst_27067 = (0);
var state_27123__$1 = (function (){var statearr_27157 = state_27123;
(statearr_27157[(12)] = inst_27066);

(statearr_27157[(13)] = inst_27065);

(statearr_27157[(14)] = inst_27064);

(statearr_27157[(16)] = inst_27067);

return statearr_27157;
})();
var statearr_27158_27196 = state_27123__$1;
(statearr_27158_27196[(2)] = null);

(statearr_27158_27196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27124 === (10))){
var inst_27066 = (state_27123[(12)]);
var inst_27065 = (state_27123[(13)]);
var inst_27064 = (state_27123[(14)]);
var inst_27067 = (state_27123[(16)]);
var inst_27072 = cljs.core._nth.call(null,inst_27065,inst_27067);
var inst_27073 = cljs.core.async.muxch_STAR_.call(null,inst_27072);
var inst_27074 = cljs.core.async.close_BANG_.call(null,inst_27073);
var inst_27075 = (inst_27067 + (1));
var tmp27153 = inst_27066;
var tmp27154 = inst_27065;
var tmp27155 = inst_27064;
var inst_27064__$1 = tmp27155;
var inst_27065__$1 = tmp27154;
var inst_27066__$1 = tmp27153;
var inst_27067__$1 = inst_27075;
var state_27123__$1 = (function (){var statearr_27159 = state_27123;
(statearr_27159[(12)] = inst_27066__$1);

(statearr_27159[(17)] = inst_27074);

(statearr_27159[(13)] = inst_27065__$1);

(statearr_27159[(14)] = inst_27064__$1);

(statearr_27159[(16)] = inst_27067__$1);

return statearr_27159;
})();
var statearr_27160_27197 = state_27123__$1;
(statearr_27160_27197[(2)] = null);

(statearr_27160_27197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27124 === (18))){
var inst_27093 = (state_27123[(2)]);
var state_27123__$1 = state_27123;
var statearr_27161_27198 = state_27123__$1;
(statearr_27161_27198[(2)] = inst_27093);

(statearr_27161_27198[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27124 === (8))){
var inst_27066 = (state_27123[(12)]);
var inst_27067 = (state_27123[(16)]);
var inst_27069 = (inst_27067 < inst_27066);
var inst_27070 = inst_27069;
var state_27123__$1 = state_27123;
if(cljs.core.truth_(inst_27070)){
var statearr_27162_27199 = state_27123__$1;
(statearr_27162_27199[(1)] = (10));

} else {
var statearr_27163_27200 = state_27123__$1;
(statearr_27163_27200[(1)] = (11));

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
});})(c__19342__auto___27172,mults,ensure_mult,p))
;
return ((function (switch__19280__auto__,c__19342__auto___27172,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19281__auto__ = null;
var cljs$core$async$state_machine__19281__auto____0 = (function (){
var statearr_27167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27167[(0)] = cljs$core$async$state_machine__19281__auto__);

(statearr_27167[(1)] = (1));

return statearr_27167;
});
var cljs$core$async$state_machine__19281__auto____1 = (function (state_27123){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_27123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e27168){if((e27168 instanceof Object)){
var ex__19284__auto__ = e27168;
var statearr_27169_27201 = state_27123;
(statearr_27169_27201[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27202 = state_27123;
state_27123 = G__27202;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
cljs$core$async$state_machine__19281__auto__ = function(state_27123){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19281__auto____1.call(this,state_27123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19281__auto____0;
cljs$core$async$state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19281__auto____1;
return cljs$core$async$state_machine__19281__auto__;
})()
;})(switch__19280__auto__,c__19342__auto___27172,mults,ensure_mult,p))
})();
var state__19344__auto__ = (function (){var statearr_27170 = f__19343__auto__.call(null);
(statearr_27170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___27172);

return statearr_27170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___27172,mults,ensure_mult,p))
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
var G__27204 = arguments.length;
switch (G__27204) {
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
var G__27207 = arguments.length;
switch (G__27207) {
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
var G__27210 = arguments.length;
switch (G__27210) {
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
var c__19342__auto___27280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___27280,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (c__19342__auto___27280,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27249){
var state_val_27250 = (state_27249[(1)]);
if((state_val_27250 === (7))){
var state_27249__$1 = state_27249;
var statearr_27251_27281 = state_27249__$1;
(statearr_27251_27281[(2)] = null);

(statearr_27251_27281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (1))){
var state_27249__$1 = state_27249;
var statearr_27252_27282 = state_27249__$1;
(statearr_27252_27282[(2)] = null);

(statearr_27252_27282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (4))){
var inst_27213 = (state_27249[(7)]);
var inst_27215 = (inst_27213 < cnt);
var state_27249__$1 = state_27249;
if(cljs.core.truth_(inst_27215)){
var statearr_27253_27283 = state_27249__$1;
(statearr_27253_27283[(1)] = (6));

} else {
var statearr_27254_27284 = state_27249__$1;
(statearr_27254_27284[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (15))){
var inst_27245 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27255_27285 = state_27249__$1;
(statearr_27255_27285[(2)] = inst_27245);

(statearr_27255_27285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (13))){
var inst_27238 = cljs.core.async.close_BANG_.call(null,out);
var state_27249__$1 = state_27249;
var statearr_27256_27286 = state_27249__$1;
(statearr_27256_27286[(2)] = inst_27238);

(statearr_27256_27286[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (6))){
var state_27249__$1 = state_27249;
var statearr_27257_27287 = state_27249__$1;
(statearr_27257_27287[(2)] = null);

(statearr_27257_27287[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (3))){
var inst_27247 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27249__$1,inst_27247);
} else {
if((state_val_27250 === (12))){
var inst_27235 = (state_27249[(8)]);
var inst_27235__$1 = (state_27249[(2)]);
var inst_27236 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27235__$1);
var state_27249__$1 = (function (){var statearr_27258 = state_27249;
(statearr_27258[(8)] = inst_27235__$1);

return statearr_27258;
})();
if(cljs.core.truth_(inst_27236)){
var statearr_27259_27288 = state_27249__$1;
(statearr_27259_27288[(1)] = (13));

} else {
var statearr_27260_27289 = state_27249__$1;
(statearr_27260_27289[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (2))){
var inst_27212 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27213 = (0);
var state_27249__$1 = (function (){var statearr_27261 = state_27249;
(statearr_27261[(7)] = inst_27213);

(statearr_27261[(9)] = inst_27212);

return statearr_27261;
})();
var statearr_27262_27290 = state_27249__$1;
(statearr_27262_27290[(2)] = null);

(statearr_27262_27290[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (11))){
var inst_27213 = (state_27249[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27249,(10),Object,null,(9));
var inst_27222 = chs__$1.call(null,inst_27213);
var inst_27223 = done.call(null,inst_27213);
var inst_27224 = cljs.core.async.take_BANG_.call(null,inst_27222,inst_27223);
var state_27249__$1 = state_27249;
var statearr_27263_27291 = state_27249__$1;
(statearr_27263_27291[(2)] = inst_27224);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27249__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (9))){
var inst_27213 = (state_27249[(7)]);
var inst_27226 = (state_27249[(2)]);
var inst_27227 = (inst_27213 + (1));
var inst_27213__$1 = inst_27227;
var state_27249__$1 = (function (){var statearr_27264 = state_27249;
(statearr_27264[(7)] = inst_27213__$1);

(statearr_27264[(10)] = inst_27226);

return statearr_27264;
})();
var statearr_27265_27292 = state_27249__$1;
(statearr_27265_27292[(2)] = null);

(statearr_27265_27292[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (5))){
var inst_27233 = (state_27249[(2)]);
var state_27249__$1 = (function (){var statearr_27266 = state_27249;
(statearr_27266[(11)] = inst_27233);

return statearr_27266;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27249__$1,(12),dchan);
} else {
if((state_val_27250 === (14))){
var inst_27235 = (state_27249[(8)]);
var inst_27240 = cljs.core.apply.call(null,f,inst_27235);
var state_27249__$1 = state_27249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27249__$1,(16),out,inst_27240);
} else {
if((state_val_27250 === (16))){
var inst_27242 = (state_27249[(2)]);
var state_27249__$1 = (function (){var statearr_27267 = state_27249;
(statearr_27267[(12)] = inst_27242);

return statearr_27267;
})();
var statearr_27268_27293 = state_27249__$1;
(statearr_27268_27293[(2)] = null);

(statearr_27268_27293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (10))){
var inst_27217 = (state_27249[(2)]);
var inst_27218 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27249__$1 = (function (){var statearr_27269 = state_27249;
(statearr_27269[(13)] = inst_27217);

return statearr_27269;
})();
var statearr_27270_27294 = state_27249__$1;
(statearr_27270_27294[(2)] = inst_27218);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27249__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (8))){
var inst_27231 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27271_27295 = state_27249__$1;
(statearr_27271_27295[(2)] = inst_27231);

(statearr_27271_27295[(1)] = (5));


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
});})(c__19342__auto___27280,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19280__auto__,c__19342__auto___27280,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19281__auto__ = null;
var cljs$core$async$state_machine__19281__auto____0 = (function (){
var statearr_27275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27275[(0)] = cljs$core$async$state_machine__19281__auto__);

(statearr_27275[(1)] = (1));

return statearr_27275;
});
var cljs$core$async$state_machine__19281__auto____1 = (function (state_27249){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_27249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e27276){if((e27276 instanceof Object)){
var ex__19284__auto__ = e27276;
var statearr_27277_27296 = state_27249;
(statearr_27277_27296[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27297 = state_27249;
state_27249 = G__27297;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
cljs$core$async$state_machine__19281__auto__ = function(state_27249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19281__auto____1.call(this,state_27249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19281__auto____0;
cljs$core$async$state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19281__auto____1;
return cljs$core$async$state_machine__19281__auto__;
})()
;})(switch__19280__auto__,c__19342__auto___27280,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19344__auto__ = (function (){var statearr_27278 = f__19343__auto__.call(null);
(statearr_27278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___27280);

return statearr_27278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___27280,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__27300 = arguments.length;
switch (G__27300) {
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
var c__19342__auto___27355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___27355,out){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (c__19342__auto___27355,out){
return (function (state_27330){
var state_val_27331 = (state_27330[(1)]);
if((state_val_27331 === (7))){
var inst_27309 = (state_27330[(7)]);
var inst_27310 = (state_27330[(8)]);
var inst_27309__$1 = (state_27330[(2)]);
var inst_27310__$1 = cljs.core.nth.call(null,inst_27309__$1,(0),null);
var inst_27311 = cljs.core.nth.call(null,inst_27309__$1,(1),null);
var inst_27312 = (inst_27310__$1 == null);
var state_27330__$1 = (function (){var statearr_27332 = state_27330;
(statearr_27332[(9)] = inst_27311);

(statearr_27332[(7)] = inst_27309__$1);

(statearr_27332[(8)] = inst_27310__$1);

return statearr_27332;
})();
if(cljs.core.truth_(inst_27312)){
var statearr_27333_27356 = state_27330__$1;
(statearr_27333_27356[(1)] = (8));

} else {
var statearr_27334_27357 = state_27330__$1;
(statearr_27334_27357[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27331 === (1))){
var inst_27301 = cljs.core.vec.call(null,chs);
var inst_27302 = inst_27301;
var state_27330__$1 = (function (){var statearr_27335 = state_27330;
(statearr_27335[(10)] = inst_27302);

return statearr_27335;
})();
var statearr_27336_27358 = state_27330__$1;
(statearr_27336_27358[(2)] = null);

(statearr_27336_27358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27331 === (4))){
var inst_27302 = (state_27330[(10)]);
var state_27330__$1 = state_27330;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27330__$1,(7),inst_27302);
} else {
if((state_val_27331 === (6))){
var inst_27326 = (state_27330[(2)]);
var state_27330__$1 = state_27330;
var statearr_27337_27359 = state_27330__$1;
(statearr_27337_27359[(2)] = inst_27326);

(statearr_27337_27359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27331 === (3))){
var inst_27328 = (state_27330[(2)]);
var state_27330__$1 = state_27330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27330__$1,inst_27328);
} else {
if((state_val_27331 === (2))){
var inst_27302 = (state_27330[(10)]);
var inst_27304 = cljs.core.count.call(null,inst_27302);
var inst_27305 = (inst_27304 > (0));
var state_27330__$1 = state_27330;
if(cljs.core.truth_(inst_27305)){
var statearr_27339_27360 = state_27330__$1;
(statearr_27339_27360[(1)] = (4));

} else {
var statearr_27340_27361 = state_27330__$1;
(statearr_27340_27361[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27331 === (11))){
var inst_27302 = (state_27330[(10)]);
var inst_27319 = (state_27330[(2)]);
var tmp27338 = inst_27302;
var inst_27302__$1 = tmp27338;
var state_27330__$1 = (function (){var statearr_27341 = state_27330;
(statearr_27341[(10)] = inst_27302__$1);

(statearr_27341[(11)] = inst_27319);

return statearr_27341;
})();
var statearr_27342_27362 = state_27330__$1;
(statearr_27342_27362[(2)] = null);

(statearr_27342_27362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27331 === (9))){
var inst_27310 = (state_27330[(8)]);
var state_27330__$1 = state_27330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27330__$1,(11),out,inst_27310);
} else {
if((state_val_27331 === (5))){
var inst_27324 = cljs.core.async.close_BANG_.call(null,out);
var state_27330__$1 = state_27330;
var statearr_27343_27363 = state_27330__$1;
(statearr_27343_27363[(2)] = inst_27324);

(statearr_27343_27363[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27331 === (10))){
var inst_27322 = (state_27330[(2)]);
var state_27330__$1 = state_27330;
var statearr_27344_27364 = state_27330__$1;
(statearr_27344_27364[(2)] = inst_27322);

(statearr_27344_27364[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27331 === (8))){
var inst_27311 = (state_27330[(9)]);
var inst_27302 = (state_27330[(10)]);
var inst_27309 = (state_27330[(7)]);
var inst_27310 = (state_27330[(8)]);
var inst_27314 = (function (){var cs = inst_27302;
var vec__27307 = inst_27309;
var v = inst_27310;
var c = inst_27311;
return ((function (cs,vec__27307,v,c,inst_27311,inst_27302,inst_27309,inst_27310,state_val_27331,c__19342__auto___27355,out){
return (function (p1__27298_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27298_SHARP_);
});
;})(cs,vec__27307,v,c,inst_27311,inst_27302,inst_27309,inst_27310,state_val_27331,c__19342__auto___27355,out))
})();
var inst_27315 = cljs.core.filterv.call(null,inst_27314,inst_27302);
var inst_27302__$1 = inst_27315;
var state_27330__$1 = (function (){var statearr_27345 = state_27330;
(statearr_27345[(10)] = inst_27302__$1);

return statearr_27345;
})();
var statearr_27346_27365 = state_27330__$1;
(statearr_27346_27365[(2)] = null);

(statearr_27346_27365[(1)] = (2));


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
});})(c__19342__auto___27355,out))
;
return ((function (switch__19280__auto__,c__19342__auto___27355,out){
return (function() {
var cljs$core$async$state_machine__19281__auto__ = null;
var cljs$core$async$state_machine__19281__auto____0 = (function (){
var statearr_27350 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27350[(0)] = cljs$core$async$state_machine__19281__auto__);

(statearr_27350[(1)] = (1));

return statearr_27350;
});
var cljs$core$async$state_machine__19281__auto____1 = (function (state_27330){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_27330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e27351){if((e27351 instanceof Object)){
var ex__19284__auto__ = e27351;
var statearr_27352_27366 = state_27330;
(statearr_27352_27366[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27367 = state_27330;
state_27330 = G__27367;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
cljs$core$async$state_machine__19281__auto__ = function(state_27330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19281__auto____1.call(this,state_27330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19281__auto____0;
cljs$core$async$state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19281__auto____1;
return cljs$core$async$state_machine__19281__auto__;
})()
;})(switch__19280__auto__,c__19342__auto___27355,out))
})();
var state__19344__auto__ = (function (){var statearr_27353 = f__19343__auto__.call(null);
(statearr_27353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___27355);

return statearr_27353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___27355,out))
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
var G__27369 = arguments.length;
switch (G__27369) {
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
var c__19342__auto___27417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___27417,out){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (c__19342__auto___27417,out){
return (function (state_27393){
var state_val_27394 = (state_27393[(1)]);
if((state_val_27394 === (7))){
var inst_27375 = (state_27393[(7)]);
var inst_27375__$1 = (state_27393[(2)]);
var inst_27376 = (inst_27375__$1 == null);
var inst_27377 = cljs.core.not.call(null,inst_27376);
var state_27393__$1 = (function (){var statearr_27395 = state_27393;
(statearr_27395[(7)] = inst_27375__$1);

return statearr_27395;
})();
if(inst_27377){
var statearr_27396_27418 = state_27393__$1;
(statearr_27396_27418[(1)] = (8));

} else {
var statearr_27397_27419 = state_27393__$1;
(statearr_27397_27419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (1))){
var inst_27370 = (0);
var state_27393__$1 = (function (){var statearr_27398 = state_27393;
(statearr_27398[(8)] = inst_27370);

return statearr_27398;
})();
var statearr_27399_27420 = state_27393__$1;
(statearr_27399_27420[(2)] = null);

(statearr_27399_27420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (4))){
var state_27393__$1 = state_27393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27393__$1,(7),ch);
} else {
if((state_val_27394 === (6))){
var inst_27388 = (state_27393[(2)]);
var state_27393__$1 = state_27393;
var statearr_27400_27421 = state_27393__$1;
(statearr_27400_27421[(2)] = inst_27388);

(statearr_27400_27421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (3))){
var inst_27390 = (state_27393[(2)]);
var inst_27391 = cljs.core.async.close_BANG_.call(null,out);
var state_27393__$1 = (function (){var statearr_27401 = state_27393;
(statearr_27401[(9)] = inst_27390);

return statearr_27401;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27393__$1,inst_27391);
} else {
if((state_val_27394 === (2))){
var inst_27370 = (state_27393[(8)]);
var inst_27372 = (inst_27370 < n);
var state_27393__$1 = state_27393;
if(cljs.core.truth_(inst_27372)){
var statearr_27402_27422 = state_27393__$1;
(statearr_27402_27422[(1)] = (4));

} else {
var statearr_27403_27423 = state_27393__$1;
(statearr_27403_27423[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (11))){
var inst_27370 = (state_27393[(8)]);
var inst_27380 = (state_27393[(2)]);
var inst_27381 = (inst_27370 + (1));
var inst_27370__$1 = inst_27381;
var state_27393__$1 = (function (){var statearr_27404 = state_27393;
(statearr_27404[(10)] = inst_27380);

(statearr_27404[(8)] = inst_27370__$1);

return statearr_27404;
})();
var statearr_27405_27424 = state_27393__$1;
(statearr_27405_27424[(2)] = null);

(statearr_27405_27424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (9))){
var state_27393__$1 = state_27393;
var statearr_27406_27425 = state_27393__$1;
(statearr_27406_27425[(2)] = null);

(statearr_27406_27425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (5))){
var state_27393__$1 = state_27393;
var statearr_27407_27426 = state_27393__$1;
(statearr_27407_27426[(2)] = null);

(statearr_27407_27426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (10))){
var inst_27385 = (state_27393[(2)]);
var state_27393__$1 = state_27393;
var statearr_27408_27427 = state_27393__$1;
(statearr_27408_27427[(2)] = inst_27385);

(statearr_27408_27427[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (8))){
var inst_27375 = (state_27393[(7)]);
var state_27393__$1 = state_27393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27393__$1,(11),out,inst_27375);
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
});})(c__19342__auto___27417,out))
;
return ((function (switch__19280__auto__,c__19342__auto___27417,out){
return (function() {
var cljs$core$async$state_machine__19281__auto__ = null;
var cljs$core$async$state_machine__19281__auto____0 = (function (){
var statearr_27412 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27412[(0)] = cljs$core$async$state_machine__19281__auto__);

(statearr_27412[(1)] = (1));

return statearr_27412;
});
var cljs$core$async$state_machine__19281__auto____1 = (function (state_27393){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_27393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e27413){if((e27413 instanceof Object)){
var ex__19284__auto__ = e27413;
var statearr_27414_27428 = state_27393;
(statearr_27414_27428[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27429 = state_27393;
state_27393 = G__27429;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
cljs$core$async$state_machine__19281__auto__ = function(state_27393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19281__auto____1.call(this,state_27393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19281__auto____0;
cljs$core$async$state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19281__auto____1;
return cljs$core$async$state_machine__19281__auto__;
})()
;})(switch__19280__auto__,c__19342__auto___27417,out))
})();
var state__19344__auto__ = (function (){var statearr_27415 = f__19343__auto__.call(null);
(statearr_27415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___27417);

return statearr_27415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___27417,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t27437 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27437 = (function (map_LT_,f,ch,meta27438){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27438 = meta27438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27439,meta27438__$1){
var self__ = this;
var _27439__$1 = this;
return (new cljs.core.async.t27437(self__.map_LT_,self__.f,self__.ch,meta27438__$1));
});

cljs.core.async.t27437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27439){
var self__ = this;
var _27439__$1 = this;
return self__.meta27438;
});

cljs.core.async.t27437.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27437.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27437.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27437.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27437.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27440 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27440 = (function (map_LT_,f,ch,meta27438,_,fn1,meta27441){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27438 = meta27438;
this._ = _;
this.fn1 = fn1;
this.meta27441 = meta27441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27442,meta27441__$1){
var self__ = this;
var _27442__$1 = this;
return (new cljs.core.async.t27440(self__.map_LT_,self__.f,self__.ch,self__.meta27438,self__._,self__.fn1,meta27441__$1));
});})(___$1))
;

cljs.core.async.t27440.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27442){
var self__ = this;
var _27442__$1 = this;
return self__.meta27441;
});})(___$1))
;

cljs.core.async.t27440.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27440.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27440.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27430_SHARP_){
return f1.call(null,(((p1__27430_SHARP_ == null))?null:self__.f.call(null,p1__27430_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27440.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27438","meta27438",621496292,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27441","meta27441",-570966059,null)], null);
});})(___$1))
;

cljs.core.async.t27440.cljs$lang$type = true;

cljs.core.async.t27440.cljs$lang$ctorStr = "cljs.core.async/t27440";

cljs.core.async.t27440.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16688__auto__,writer__16689__auto__,opt__16690__auto__){
return cljs.core._write.call(null,writer__16689__auto__,"cljs.core.async/t27440");
});})(___$1))
;

cljs.core.async.__GT_t27440 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t27440(map_LT___$1,f__$1,ch__$1,meta27438__$1,___$2,fn1__$1,meta27441){
return (new cljs.core.async.t27440(map_LT___$1,f__$1,ch__$1,meta27438__$1,___$2,fn1__$1,meta27441));
});})(___$1))
;

}

return (new cljs.core.async.t27440(self__.map_LT_,self__.f,self__.ch,self__.meta27438,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t27437.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27437.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27438","meta27438",621496292,null)], null);
});

cljs.core.async.t27437.cljs$lang$type = true;

cljs.core.async.t27437.cljs$lang$ctorStr = "cljs.core.async/t27437";

cljs.core.async.t27437.cljs$lang$ctorPrWriter = (function (this__16688__auto__,writer__16689__auto__,opt__16690__auto__){
return cljs.core._write.call(null,writer__16689__auto__,"cljs.core.async/t27437");
});

cljs.core.async.__GT_t27437 = (function cljs$core$async$map_LT__$___GT_t27437(map_LT___$1,f__$1,ch__$1,meta27438){
return (new cljs.core.async.t27437(map_LT___$1,f__$1,ch__$1,meta27438));
});

}

return (new cljs.core.async.t27437(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t27446 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27446 = (function (map_GT_,f,ch,meta27447){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27447 = meta27447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27448,meta27447__$1){
var self__ = this;
var _27448__$1 = this;
return (new cljs.core.async.t27446(self__.map_GT_,self__.f,self__.ch,meta27447__$1));
});

cljs.core.async.t27446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27448){
var self__ = this;
var _27448__$1 = this;
return self__.meta27447;
});

cljs.core.async.t27446.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27446.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27446.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27446.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27446.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27446.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27446.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27447","meta27447",1086358293,null)], null);
});

cljs.core.async.t27446.cljs$lang$type = true;

cljs.core.async.t27446.cljs$lang$ctorStr = "cljs.core.async/t27446";

cljs.core.async.t27446.cljs$lang$ctorPrWriter = (function (this__16688__auto__,writer__16689__auto__,opt__16690__auto__){
return cljs.core._write.call(null,writer__16689__auto__,"cljs.core.async/t27446");
});

cljs.core.async.__GT_t27446 = (function cljs$core$async$map_GT__$___GT_t27446(map_GT___$1,f__$1,ch__$1,meta27447){
return (new cljs.core.async.t27446(map_GT___$1,f__$1,ch__$1,meta27447));
});

}

return (new cljs.core.async.t27446(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t27452 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27452 = (function (filter_GT_,p,ch,meta27453){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27453 = meta27453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27454,meta27453__$1){
var self__ = this;
var _27454__$1 = this;
return (new cljs.core.async.t27452(self__.filter_GT_,self__.p,self__.ch,meta27453__$1));
});

cljs.core.async.t27452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27454){
var self__ = this;
var _27454__$1 = this;
return self__.meta27453;
});

cljs.core.async.t27452.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27452.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27452.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27452.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27452.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27452.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27452.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27452.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27453","meta27453",858132283,null)], null);
});

cljs.core.async.t27452.cljs$lang$type = true;

cljs.core.async.t27452.cljs$lang$ctorStr = "cljs.core.async/t27452";

cljs.core.async.t27452.cljs$lang$ctorPrWriter = (function (this__16688__auto__,writer__16689__auto__,opt__16690__auto__){
return cljs.core._write.call(null,writer__16689__auto__,"cljs.core.async/t27452");
});

cljs.core.async.__GT_t27452 = (function cljs$core$async$filter_GT__$___GT_t27452(filter_GT___$1,p__$1,ch__$1,meta27453){
return (new cljs.core.async.t27452(filter_GT___$1,p__$1,ch__$1,meta27453));
});

}

return (new cljs.core.async.t27452(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27456 = arguments.length;
switch (G__27456) {
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
var c__19342__auto___27499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___27499,out){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (c__19342__auto___27499,out){
return (function (state_27477){
var state_val_27478 = (state_27477[(1)]);
if((state_val_27478 === (7))){
var inst_27473 = (state_27477[(2)]);
var state_27477__$1 = state_27477;
var statearr_27479_27500 = state_27477__$1;
(statearr_27479_27500[(2)] = inst_27473);

(statearr_27479_27500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27478 === (1))){
var state_27477__$1 = state_27477;
var statearr_27480_27501 = state_27477__$1;
(statearr_27480_27501[(2)] = null);

(statearr_27480_27501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27478 === (4))){
var inst_27459 = (state_27477[(7)]);
var inst_27459__$1 = (state_27477[(2)]);
var inst_27460 = (inst_27459__$1 == null);
var state_27477__$1 = (function (){var statearr_27481 = state_27477;
(statearr_27481[(7)] = inst_27459__$1);

return statearr_27481;
})();
if(cljs.core.truth_(inst_27460)){
var statearr_27482_27502 = state_27477__$1;
(statearr_27482_27502[(1)] = (5));

} else {
var statearr_27483_27503 = state_27477__$1;
(statearr_27483_27503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27478 === (6))){
var inst_27459 = (state_27477[(7)]);
var inst_27464 = p.call(null,inst_27459);
var state_27477__$1 = state_27477;
if(cljs.core.truth_(inst_27464)){
var statearr_27484_27504 = state_27477__$1;
(statearr_27484_27504[(1)] = (8));

} else {
var statearr_27485_27505 = state_27477__$1;
(statearr_27485_27505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27478 === (3))){
var inst_27475 = (state_27477[(2)]);
var state_27477__$1 = state_27477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27477__$1,inst_27475);
} else {
if((state_val_27478 === (2))){
var state_27477__$1 = state_27477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27477__$1,(4),ch);
} else {
if((state_val_27478 === (11))){
var inst_27467 = (state_27477[(2)]);
var state_27477__$1 = state_27477;
var statearr_27486_27506 = state_27477__$1;
(statearr_27486_27506[(2)] = inst_27467);

(statearr_27486_27506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27478 === (9))){
var state_27477__$1 = state_27477;
var statearr_27487_27507 = state_27477__$1;
(statearr_27487_27507[(2)] = null);

(statearr_27487_27507[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27478 === (5))){
var inst_27462 = cljs.core.async.close_BANG_.call(null,out);
var state_27477__$1 = state_27477;
var statearr_27488_27508 = state_27477__$1;
(statearr_27488_27508[(2)] = inst_27462);

(statearr_27488_27508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27478 === (10))){
var inst_27470 = (state_27477[(2)]);
var state_27477__$1 = (function (){var statearr_27489 = state_27477;
(statearr_27489[(8)] = inst_27470);

return statearr_27489;
})();
var statearr_27490_27509 = state_27477__$1;
(statearr_27490_27509[(2)] = null);

(statearr_27490_27509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27478 === (8))){
var inst_27459 = (state_27477[(7)]);
var state_27477__$1 = state_27477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27477__$1,(11),out,inst_27459);
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
});})(c__19342__auto___27499,out))
;
return ((function (switch__19280__auto__,c__19342__auto___27499,out){
return (function() {
var cljs$core$async$state_machine__19281__auto__ = null;
var cljs$core$async$state_machine__19281__auto____0 = (function (){
var statearr_27494 = [null,null,null,null,null,null,null,null,null];
(statearr_27494[(0)] = cljs$core$async$state_machine__19281__auto__);

(statearr_27494[(1)] = (1));

return statearr_27494;
});
var cljs$core$async$state_machine__19281__auto____1 = (function (state_27477){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_27477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e27495){if((e27495 instanceof Object)){
var ex__19284__auto__ = e27495;
var statearr_27496_27510 = state_27477;
(statearr_27496_27510[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27511 = state_27477;
state_27477 = G__27511;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
cljs$core$async$state_machine__19281__auto__ = function(state_27477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19281__auto____1.call(this,state_27477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19281__auto____0;
cljs$core$async$state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19281__auto____1;
return cljs$core$async$state_machine__19281__auto__;
})()
;})(switch__19280__auto__,c__19342__auto___27499,out))
})();
var state__19344__auto__ = (function (){var statearr_27497 = f__19343__auto__.call(null);
(statearr_27497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___27499);

return statearr_27497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___27499,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__27513 = arguments.length;
switch (G__27513) {
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
var c__19342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto__){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (c__19342__auto__){
return (function (state_27680){
var state_val_27681 = (state_27680[(1)]);
if((state_val_27681 === (7))){
var inst_27676 = (state_27680[(2)]);
var state_27680__$1 = state_27680;
var statearr_27682_27723 = state_27680__$1;
(statearr_27682_27723[(2)] = inst_27676);

(statearr_27682_27723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27681 === (20))){
var inst_27646 = (state_27680[(7)]);
var inst_27657 = (state_27680[(2)]);
var inst_27658 = cljs.core.next.call(null,inst_27646);
var inst_27632 = inst_27658;
var inst_27633 = null;
var inst_27634 = (0);
var inst_27635 = (0);
var state_27680__$1 = (function (){var statearr_27683 = state_27680;
(statearr_27683[(8)] = inst_27633);

(statearr_27683[(9)] = inst_27635);

(statearr_27683[(10)] = inst_27632);

(statearr_27683[(11)] = inst_27657);

(statearr_27683[(12)] = inst_27634);

return statearr_27683;
})();
var statearr_27684_27724 = state_27680__$1;
(statearr_27684_27724[(2)] = null);

(statearr_27684_27724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27681 === (1))){
var state_27680__$1 = state_27680;
var statearr_27685_27725 = state_27680__$1;
(statearr_27685_27725[(2)] = null);

(statearr_27685_27725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27681 === (4))){
var inst_27621 = (state_27680[(13)]);
var inst_27621__$1 = (state_27680[(2)]);
var inst_27622 = (inst_27621__$1 == null);
var state_27680__$1 = (function (){var statearr_27686 = state_27680;
(statearr_27686[(13)] = inst_27621__$1);

return statearr_27686;
})();
if(cljs.core.truth_(inst_27622)){
var statearr_27687_27726 = state_27680__$1;
(statearr_27687_27726[(1)] = (5));

} else {
var statearr_27688_27727 = state_27680__$1;
(statearr_27688_27727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27681 === (15))){
var state_27680__$1 = state_27680;
var statearr_27692_27728 = state_27680__$1;
(statearr_27692_27728[(2)] = null);

(statearr_27692_27728[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27681 === (21))){
var state_27680__$1 = state_27680;
var statearr_27693_27729 = state_27680__$1;
(statearr_27693_27729[(2)] = null);

(statearr_27693_27729[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27681 === (13))){
var inst_27633 = (state_27680[(8)]);
var inst_27635 = (state_27680[(9)]);
var inst_27632 = (state_27680[(10)]);
var inst_27634 = (state_27680[(12)]);
var inst_27642 = (state_27680[(2)]);
var inst_27643 = (inst_27635 + (1));
var tmp27689 = inst_27633;
var tmp27690 = inst_27632;
var tmp27691 = inst_27634;
var inst_27632__$1 = tmp27690;
var inst_27633__$1 = tmp27689;
var inst_27634__$1 = tmp27691;
var inst_27635__$1 = inst_27643;
var state_27680__$1 = (function (){var statearr_27694 = state_27680;
(statearr_27694[(8)] = inst_27633__$1);

(statearr_27694[(9)] = inst_27635__$1);

(statearr_27694[(14)] = inst_27642);

(statearr_27694[(10)] = inst_27632__$1);

(statearr_27694[(12)] = inst_27634__$1);

return statearr_27694;
})();
var statearr_27695_27730 = state_27680__$1;
(statearr_27695_27730[(2)] = null);

(statearr_27695_27730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27681 === (22))){
var state_27680__$1 = state_27680;
var statearr_27696_27731 = state_27680__$1;
(statearr_27696_27731[(2)] = null);

(statearr_27696_27731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27681 === (6))){
var inst_27621 = (state_27680[(13)]);
var inst_27630 = f.call(null,inst_27621);
var inst_27631 = cljs.core.seq.call(null,inst_27630);
var inst_27632 = inst_27631;
var inst_27633 = null;
var inst_27634 = (0);
var inst_27635 = (0);
var state_27680__$1 = (function (){var statearr_27697 = state_27680;
(statearr_27697[(8)] = inst_27633);

(statearr_27697[(9)] = inst_27635);

(statearr_27697[(10)] = inst_27632);

(statearr_27697[(12)] = inst_27634);

return statearr_27697;
})();
var statearr_27698_27732 = state_27680__$1;
(statearr_27698_27732[(2)] = null);

(statearr_27698_27732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27681 === (17))){
var inst_27646 = (state_27680[(7)]);
var inst_27650 = cljs.core.chunk_first.call(null,inst_27646);
var inst_27651 = cljs.core.chunk_rest.call(null,inst_27646);
var inst_27652 = cljs.core.count.call(null,inst_27650);
var inst_27632 = inst_27651;
var inst_27633 = inst_27650;
var inst_27634 = inst_27652;
var inst_27635 = (0);
var state_27680__$1 = (function (){var statearr_27699 = state_27680;
(statearr_27699[(8)] = inst_27633);

(statearr_27699[(9)] = inst_27635);

(statearr_27699[(10)] = inst_27632);

(statearr_27699[(12)] = inst_27634);

return statearr_27699;
})();
var statearr_27700_27733 = state_27680__$1;
(statearr_27700_27733[(2)] = null);

(statearr_27700_27733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27681 === (3))){
var inst_27678 = (state_27680[(2)]);
var state_27680__$1 = state_27680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27680__$1,inst_27678);
} else {
if((state_val_27681 === (12))){
var inst_27666 = (state_27680[(2)]);
var state_27680__$1 = state_27680;
var statearr_27701_27734 = state_27680__$1;
(statearr_27701_27734[(2)] = inst_27666);

(statearr_27701_27734[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27681 === (2))){
var state_27680__$1 = state_27680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27680__$1,(4),in$);
} else {
if((state_val_27681 === (23))){
var inst_27674 = (state_27680[(2)]);
var state_27680__$1 = state_27680;
var statearr_27702_27735 = state_27680__$1;
(statearr_27702_27735[(2)] = inst_27674);

(statearr_27702_27735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27681 === (19))){
var inst_27661 = (state_27680[(2)]);
var state_27680__$1 = state_27680;
var statearr_27703_27736 = state_27680__$1;
(statearr_27703_27736[(2)] = inst_27661);

(statearr_27703_27736[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27681 === (11))){
var inst_27646 = (state_27680[(7)]);
var inst_27632 = (state_27680[(10)]);
var inst_27646__$1 = cljs.core.seq.call(null,inst_27632);
var state_27680__$1 = (function (){var statearr_27704 = state_27680;
(statearr_27704[(7)] = inst_27646__$1);

return statearr_27704;
})();
if(inst_27646__$1){
var statearr_27705_27737 = state_27680__$1;
(statearr_27705_27737[(1)] = (14));

} else {
var statearr_27706_27738 = state_27680__$1;
(statearr_27706_27738[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27681 === (9))){
var inst_27668 = (state_27680[(2)]);
var inst_27669 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27680__$1 = (function (){var statearr_27707 = state_27680;
(statearr_27707[(15)] = inst_27668);

return statearr_27707;
})();
if(cljs.core.truth_(inst_27669)){
var statearr_27708_27739 = state_27680__$1;
(statearr_27708_27739[(1)] = (21));

} else {
var statearr_27709_27740 = state_27680__$1;
(statearr_27709_27740[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27681 === (5))){
var inst_27624 = cljs.core.async.close_BANG_.call(null,out);
var state_27680__$1 = state_27680;
var statearr_27710_27741 = state_27680__$1;
(statearr_27710_27741[(2)] = inst_27624);

(statearr_27710_27741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27681 === (14))){
var inst_27646 = (state_27680[(7)]);
var inst_27648 = cljs.core.chunked_seq_QMARK_.call(null,inst_27646);
var state_27680__$1 = state_27680;
if(inst_27648){
var statearr_27711_27742 = state_27680__$1;
(statearr_27711_27742[(1)] = (17));

} else {
var statearr_27712_27743 = state_27680__$1;
(statearr_27712_27743[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27681 === (16))){
var inst_27664 = (state_27680[(2)]);
var state_27680__$1 = state_27680;
var statearr_27713_27744 = state_27680__$1;
(statearr_27713_27744[(2)] = inst_27664);

(statearr_27713_27744[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27681 === (10))){
var inst_27633 = (state_27680[(8)]);
var inst_27635 = (state_27680[(9)]);
var inst_27640 = cljs.core._nth.call(null,inst_27633,inst_27635);
var state_27680__$1 = state_27680;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27680__$1,(13),out,inst_27640);
} else {
if((state_val_27681 === (18))){
var inst_27646 = (state_27680[(7)]);
var inst_27655 = cljs.core.first.call(null,inst_27646);
var state_27680__$1 = state_27680;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27680__$1,(20),out,inst_27655);
} else {
if((state_val_27681 === (8))){
var inst_27635 = (state_27680[(9)]);
var inst_27634 = (state_27680[(12)]);
var inst_27637 = (inst_27635 < inst_27634);
var inst_27638 = inst_27637;
var state_27680__$1 = state_27680;
if(cljs.core.truth_(inst_27638)){
var statearr_27714_27745 = state_27680__$1;
(statearr_27714_27745[(1)] = (10));

} else {
var statearr_27715_27746 = state_27680__$1;
(statearr_27715_27746[(1)] = (11));

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
});})(c__19342__auto__))
;
return ((function (switch__19280__auto__,c__19342__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19281__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19281__auto____0 = (function (){
var statearr_27719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27719[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19281__auto__);

(statearr_27719[(1)] = (1));

return statearr_27719;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19281__auto____1 = (function (state_27680){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_27680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e27720){if((e27720 instanceof Object)){
var ex__19284__auto__ = e27720;
var statearr_27721_27747 = state_27680;
(statearr_27721_27747[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27748 = state_27680;
state_27680 = G__27748;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19281__auto__ = function(state_27680){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19281__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19281__auto____1.call(this,state_27680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19281__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19281__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19281__auto__;
})()
;})(switch__19280__auto__,c__19342__auto__))
})();
var state__19344__auto__ = (function (){var statearr_27722 = f__19343__auto__.call(null);
(statearr_27722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto__);

return statearr_27722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto__))
);

return c__19342__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__27750 = arguments.length;
switch (G__27750) {
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
var G__27753 = arguments.length;
switch (G__27753) {
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
var G__27756 = arguments.length;
switch (G__27756) {
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
var c__19342__auto___27806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___27806,out){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (c__19342__auto___27806,out){
return (function (state_27780){
var state_val_27781 = (state_27780[(1)]);
if((state_val_27781 === (7))){
var inst_27775 = (state_27780[(2)]);
var state_27780__$1 = state_27780;
var statearr_27782_27807 = state_27780__$1;
(statearr_27782_27807[(2)] = inst_27775);

(statearr_27782_27807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27781 === (1))){
var inst_27757 = null;
var state_27780__$1 = (function (){var statearr_27783 = state_27780;
(statearr_27783[(7)] = inst_27757);

return statearr_27783;
})();
var statearr_27784_27808 = state_27780__$1;
(statearr_27784_27808[(2)] = null);

(statearr_27784_27808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27781 === (4))){
var inst_27760 = (state_27780[(8)]);
var inst_27760__$1 = (state_27780[(2)]);
var inst_27761 = (inst_27760__$1 == null);
var inst_27762 = cljs.core.not.call(null,inst_27761);
var state_27780__$1 = (function (){var statearr_27785 = state_27780;
(statearr_27785[(8)] = inst_27760__$1);

return statearr_27785;
})();
if(inst_27762){
var statearr_27786_27809 = state_27780__$1;
(statearr_27786_27809[(1)] = (5));

} else {
var statearr_27787_27810 = state_27780__$1;
(statearr_27787_27810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27781 === (6))){
var state_27780__$1 = state_27780;
var statearr_27788_27811 = state_27780__$1;
(statearr_27788_27811[(2)] = null);

(statearr_27788_27811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27781 === (3))){
var inst_27777 = (state_27780[(2)]);
var inst_27778 = cljs.core.async.close_BANG_.call(null,out);
var state_27780__$1 = (function (){var statearr_27789 = state_27780;
(statearr_27789[(9)] = inst_27777);

return statearr_27789;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27780__$1,inst_27778);
} else {
if((state_val_27781 === (2))){
var state_27780__$1 = state_27780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27780__$1,(4),ch);
} else {
if((state_val_27781 === (11))){
var inst_27760 = (state_27780[(8)]);
var inst_27769 = (state_27780[(2)]);
var inst_27757 = inst_27760;
var state_27780__$1 = (function (){var statearr_27790 = state_27780;
(statearr_27790[(7)] = inst_27757);

(statearr_27790[(10)] = inst_27769);

return statearr_27790;
})();
var statearr_27791_27812 = state_27780__$1;
(statearr_27791_27812[(2)] = null);

(statearr_27791_27812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27781 === (9))){
var inst_27760 = (state_27780[(8)]);
var state_27780__$1 = state_27780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27780__$1,(11),out,inst_27760);
} else {
if((state_val_27781 === (5))){
var inst_27757 = (state_27780[(7)]);
var inst_27760 = (state_27780[(8)]);
var inst_27764 = cljs.core._EQ_.call(null,inst_27760,inst_27757);
var state_27780__$1 = state_27780;
if(inst_27764){
var statearr_27793_27813 = state_27780__$1;
(statearr_27793_27813[(1)] = (8));

} else {
var statearr_27794_27814 = state_27780__$1;
(statearr_27794_27814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27781 === (10))){
var inst_27772 = (state_27780[(2)]);
var state_27780__$1 = state_27780;
var statearr_27795_27815 = state_27780__$1;
(statearr_27795_27815[(2)] = inst_27772);

(statearr_27795_27815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27781 === (8))){
var inst_27757 = (state_27780[(7)]);
var tmp27792 = inst_27757;
var inst_27757__$1 = tmp27792;
var state_27780__$1 = (function (){var statearr_27796 = state_27780;
(statearr_27796[(7)] = inst_27757__$1);

return statearr_27796;
})();
var statearr_27797_27816 = state_27780__$1;
(statearr_27797_27816[(2)] = null);

(statearr_27797_27816[(1)] = (2));


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
});})(c__19342__auto___27806,out))
;
return ((function (switch__19280__auto__,c__19342__auto___27806,out){
return (function() {
var cljs$core$async$state_machine__19281__auto__ = null;
var cljs$core$async$state_machine__19281__auto____0 = (function (){
var statearr_27801 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27801[(0)] = cljs$core$async$state_machine__19281__auto__);

(statearr_27801[(1)] = (1));

return statearr_27801;
});
var cljs$core$async$state_machine__19281__auto____1 = (function (state_27780){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_27780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e27802){if((e27802 instanceof Object)){
var ex__19284__auto__ = e27802;
var statearr_27803_27817 = state_27780;
(statearr_27803_27817[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27818 = state_27780;
state_27780 = G__27818;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
cljs$core$async$state_machine__19281__auto__ = function(state_27780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19281__auto____1.call(this,state_27780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19281__auto____0;
cljs$core$async$state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19281__auto____1;
return cljs$core$async$state_machine__19281__auto__;
})()
;})(switch__19280__auto__,c__19342__auto___27806,out))
})();
var state__19344__auto__ = (function (){var statearr_27804 = f__19343__auto__.call(null);
(statearr_27804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___27806);

return statearr_27804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___27806,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__27820 = arguments.length;
switch (G__27820) {
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
var c__19342__auto___27889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___27889,out){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (c__19342__auto___27889,out){
return (function (state_27858){
var state_val_27859 = (state_27858[(1)]);
if((state_val_27859 === (7))){
var inst_27854 = (state_27858[(2)]);
var state_27858__$1 = state_27858;
var statearr_27860_27890 = state_27858__$1;
(statearr_27860_27890[(2)] = inst_27854);

(statearr_27860_27890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (1))){
var inst_27821 = (new Array(n));
var inst_27822 = inst_27821;
var inst_27823 = (0);
var state_27858__$1 = (function (){var statearr_27861 = state_27858;
(statearr_27861[(7)] = inst_27823);

(statearr_27861[(8)] = inst_27822);

return statearr_27861;
})();
var statearr_27862_27891 = state_27858__$1;
(statearr_27862_27891[(2)] = null);

(statearr_27862_27891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (4))){
var inst_27826 = (state_27858[(9)]);
var inst_27826__$1 = (state_27858[(2)]);
var inst_27827 = (inst_27826__$1 == null);
var inst_27828 = cljs.core.not.call(null,inst_27827);
var state_27858__$1 = (function (){var statearr_27863 = state_27858;
(statearr_27863[(9)] = inst_27826__$1);

return statearr_27863;
})();
if(inst_27828){
var statearr_27864_27892 = state_27858__$1;
(statearr_27864_27892[(1)] = (5));

} else {
var statearr_27865_27893 = state_27858__$1;
(statearr_27865_27893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (15))){
var inst_27848 = (state_27858[(2)]);
var state_27858__$1 = state_27858;
var statearr_27866_27894 = state_27858__$1;
(statearr_27866_27894[(2)] = inst_27848);

(statearr_27866_27894[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (13))){
var state_27858__$1 = state_27858;
var statearr_27867_27895 = state_27858__$1;
(statearr_27867_27895[(2)] = null);

(statearr_27867_27895[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (6))){
var inst_27823 = (state_27858[(7)]);
var inst_27844 = (inst_27823 > (0));
var state_27858__$1 = state_27858;
if(cljs.core.truth_(inst_27844)){
var statearr_27868_27896 = state_27858__$1;
(statearr_27868_27896[(1)] = (12));

} else {
var statearr_27869_27897 = state_27858__$1;
(statearr_27869_27897[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (3))){
var inst_27856 = (state_27858[(2)]);
var state_27858__$1 = state_27858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27858__$1,inst_27856);
} else {
if((state_val_27859 === (12))){
var inst_27822 = (state_27858[(8)]);
var inst_27846 = cljs.core.vec.call(null,inst_27822);
var state_27858__$1 = state_27858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27858__$1,(15),out,inst_27846);
} else {
if((state_val_27859 === (2))){
var state_27858__$1 = state_27858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27858__$1,(4),ch);
} else {
if((state_val_27859 === (11))){
var inst_27838 = (state_27858[(2)]);
var inst_27839 = (new Array(n));
var inst_27822 = inst_27839;
var inst_27823 = (0);
var state_27858__$1 = (function (){var statearr_27870 = state_27858;
(statearr_27870[(10)] = inst_27838);

(statearr_27870[(7)] = inst_27823);

(statearr_27870[(8)] = inst_27822);

return statearr_27870;
})();
var statearr_27871_27898 = state_27858__$1;
(statearr_27871_27898[(2)] = null);

(statearr_27871_27898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (9))){
var inst_27822 = (state_27858[(8)]);
var inst_27836 = cljs.core.vec.call(null,inst_27822);
var state_27858__$1 = state_27858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27858__$1,(11),out,inst_27836);
} else {
if((state_val_27859 === (5))){
var inst_27826 = (state_27858[(9)]);
var inst_27823 = (state_27858[(7)]);
var inst_27831 = (state_27858[(11)]);
var inst_27822 = (state_27858[(8)]);
var inst_27830 = (inst_27822[inst_27823] = inst_27826);
var inst_27831__$1 = (inst_27823 + (1));
var inst_27832 = (inst_27831__$1 < n);
var state_27858__$1 = (function (){var statearr_27872 = state_27858;
(statearr_27872[(12)] = inst_27830);

(statearr_27872[(11)] = inst_27831__$1);

return statearr_27872;
})();
if(cljs.core.truth_(inst_27832)){
var statearr_27873_27899 = state_27858__$1;
(statearr_27873_27899[(1)] = (8));

} else {
var statearr_27874_27900 = state_27858__$1;
(statearr_27874_27900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (14))){
var inst_27851 = (state_27858[(2)]);
var inst_27852 = cljs.core.async.close_BANG_.call(null,out);
var state_27858__$1 = (function (){var statearr_27876 = state_27858;
(statearr_27876[(13)] = inst_27851);

return statearr_27876;
})();
var statearr_27877_27901 = state_27858__$1;
(statearr_27877_27901[(2)] = inst_27852);

(statearr_27877_27901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (10))){
var inst_27842 = (state_27858[(2)]);
var state_27858__$1 = state_27858;
var statearr_27878_27902 = state_27858__$1;
(statearr_27878_27902[(2)] = inst_27842);

(statearr_27878_27902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (8))){
var inst_27831 = (state_27858[(11)]);
var inst_27822 = (state_27858[(8)]);
var tmp27875 = inst_27822;
var inst_27822__$1 = tmp27875;
var inst_27823 = inst_27831;
var state_27858__$1 = (function (){var statearr_27879 = state_27858;
(statearr_27879[(7)] = inst_27823);

(statearr_27879[(8)] = inst_27822__$1);

return statearr_27879;
})();
var statearr_27880_27903 = state_27858__$1;
(statearr_27880_27903[(2)] = null);

(statearr_27880_27903[(1)] = (2));


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
});})(c__19342__auto___27889,out))
;
return ((function (switch__19280__auto__,c__19342__auto___27889,out){
return (function() {
var cljs$core$async$state_machine__19281__auto__ = null;
var cljs$core$async$state_machine__19281__auto____0 = (function (){
var statearr_27884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27884[(0)] = cljs$core$async$state_machine__19281__auto__);

(statearr_27884[(1)] = (1));

return statearr_27884;
});
var cljs$core$async$state_machine__19281__auto____1 = (function (state_27858){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_27858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e27885){if((e27885 instanceof Object)){
var ex__19284__auto__ = e27885;
var statearr_27886_27904 = state_27858;
(statearr_27886_27904[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27905 = state_27858;
state_27858 = G__27905;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
cljs$core$async$state_machine__19281__auto__ = function(state_27858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19281__auto____1.call(this,state_27858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19281__auto____0;
cljs$core$async$state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19281__auto____1;
return cljs$core$async$state_machine__19281__auto__;
})()
;})(switch__19280__auto__,c__19342__auto___27889,out))
})();
var state__19344__auto__ = (function (){var statearr_27887 = f__19343__auto__.call(null);
(statearr_27887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___27889);

return statearr_27887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___27889,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__27907 = arguments.length;
switch (G__27907) {
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
var c__19342__auto___27980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___27980,out){
return (function (){
var f__19343__auto__ = (function (){var switch__19280__auto__ = ((function (c__19342__auto___27980,out){
return (function (state_27949){
var state_val_27950 = (state_27949[(1)]);
if((state_val_27950 === (7))){
var inst_27945 = (state_27949[(2)]);
var state_27949__$1 = state_27949;
var statearr_27951_27981 = state_27949__$1;
(statearr_27951_27981[(2)] = inst_27945);

(statearr_27951_27981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (1))){
var inst_27908 = [];
var inst_27909 = inst_27908;
var inst_27910 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27949__$1 = (function (){var statearr_27952 = state_27949;
(statearr_27952[(7)] = inst_27910);

(statearr_27952[(8)] = inst_27909);

return statearr_27952;
})();
var statearr_27953_27982 = state_27949__$1;
(statearr_27953_27982[(2)] = null);

(statearr_27953_27982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (4))){
var inst_27913 = (state_27949[(9)]);
var inst_27913__$1 = (state_27949[(2)]);
var inst_27914 = (inst_27913__$1 == null);
var inst_27915 = cljs.core.not.call(null,inst_27914);
var state_27949__$1 = (function (){var statearr_27954 = state_27949;
(statearr_27954[(9)] = inst_27913__$1);

return statearr_27954;
})();
if(inst_27915){
var statearr_27955_27983 = state_27949__$1;
(statearr_27955_27983[(1)] = (5));

} else {
var statearr_27956_27984 = state_27949__$1;
(statearr_27956_27984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (15))){
var inst_27939 = (state_27949[(2)]);
var state_27949__$1 = state_27949;
var statearr_27957_27985 = state_27949__$1;
(statearr_27957_27985[(2)] = inst_27939);

(statearr_27957_27985[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (13))){
var state_27949__$1 = state_27949;
var statearr_27958_27986 = state_27949__$1;
(statearr_27958_27986[(2)] = null);

(statearr_27958_27986[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (6))){
var inst_27909 = (state_27949[(8)]);
var inst_27934 = inst_27909.length;
var inst_27935 = (inst_27934 > (0));
var state_27949__$1 = state_27949;
if(cljs.core.truth_(inst_27935)){
var statearr_27959_27987 = state_27949__$1;
(statearr_27959_27987[(1)] = (12));

} else {
var statearr_27960_27988 = state_27949__$1;
(statearr_27960_27988[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (3))){
var inst_27947 = (state_27949[(2)]);
var state_27949__$1 = state_27949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27949__$1,inst_27947);
} else {
if((state_val_27950 === (12))){
var inst_27909 = (state_27949[(8)]);
var inst_27937 = cljs.core.vec.call(null,inst_27909);
var state_27949__$1 = state_27949;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27949__$1,(15),out,inst_27937);
} else {
if((state_val_27950 === (2))){
var state_27949__$1 = state_27949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27949__$1,(4),ch);
} else {
if((state_val_27950 === (11))){
var inst_27917 = (state_27949[(10)]);
var inst_27913 = (state_27949[(9)]);
var inst_27927 = (state_27949[(2)]);
var inst_27928 = [];
var inst_27929 = inst_27928.push(inst_27913);
var inst_27909 = inst_27928;
var inst_27910 = inst_27917;
var state_27949__$1 = (function (){var statearr_27961 = state_27949;
(statearr_27961[(11)] = inst_27929);

(statearr_27961[(7)] = inst_27910);

(statearr_27961[(8)] = inst_27909);

(statearr_27961[(12)] = inst_27927);

return statearr_27961;
})();
var statearr_27962_27989 = state_27949__$1;
(statearr_27962_27989[(2)] = null);

(statearr_27962_27989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (9))){
var inst_27909 = (state_27949[(8)]);
var inst_27925 = cljs.core.vec.call(null,inst_27909);
var state_27949__$1 = state_27949;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27949__$1,(11),out,inst_27925);
} else {
if((state_val_27950 === (5))){
var inst_27910 = (state_27949[(7)]);
var inst_27917 = (state_27949[(10)]);
var inst_27913 = (state_27949[(9)]);
var inst_27917__$1 = f.call(null,inst_27913);
var inst_27918 = cljs.core._EQ_.call(null,inst_27917__$1,inst_27910);
var inst_27919 = cljs.core.keyword_identical_QMARK_.call(null,inst_27910,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27920 = (inst_27918) || (inst_27919);
var state_27949__$1 = (function (){var statearr_27963 = state_27949;
(statearr_27963[(10)] = inst_27917__$1);

return statearr_27963;
})();
if(cljs.core.truth_(inst_27920)){
var statearr_27964_27990 = state_27949__$1;
(statearr_27964_27990[(1)] = (8));

} else {
var statearr_27965_27991 = state_27949__$1;
(statearr_27965_27991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (14))){
var inst_27942 = (state_27949[(2)]);
var inst_27943 = cljs.core.async.close_BANG_.call(null,out);
var state_27949__$1 = (function (){var statearr_27967 = state_27949;
(statearr_27967[(13)] = inst_27942);

return statearr_27967;
})();
var statearr_27968_27992 = state_27949__$1;
(statearr_27968_27992[(2)] = inst_27943);

(statearr_27968_27992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (10))){
var inst_27932 = (state_27949[(2)]);
var state_27949__$1 = state_27949;
var statearr_27969_27993 = state_27949__$1;
(statearr_27969_27993[(2)] = inst_27932);

(statearr_27969_27993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (8))){
var inst_27917 = (state_27949[(10)]);
var inst_27909 = (state_27949[(8)]);
var inst_27913 = (state_27949[(9)]);
var inst_27922 = inst_27909.push(inst_27913);
var tmp27966 = inst_27909;
var inst_27909__$1 = tmp27966;
var inst_27910 = inst_27917;
var state_27949__$1 = (function (){var statearr_27970 = state_27949;
(statearr_27970[(7)] = inst_27910);

(statearr_27970[(14)] = inst_27922);

(statearr_27970[(8)] = inst_27909__$1);

return statearr_27970;
})();
var statearr_27971_27994 = state_27949__$1;
(statearr_27971_27994[(2)] = null);

(statearr_27971_27994[(1)] = (2));


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
});})(c__19342__auto___27980,out))
;
return ((function (switch__19280__auto__,c__19342__auto___27980,out){
return (function() {
var cljs$core$async$state_machine__19281__auto__ = null;
var cljs$core$async$state_machine__19281__auto____0 = (function (){
var statearr_27975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27975[(0)] = cljs$core$async$state_machine__19281__auto__);

(statearr_27975[(1)] = (1));

return statearr_27975;
});
var cljs$core$async$state_machine__19281__auto____1 = (function (state_27949){
while(true){
var ret_value__19282__auto__ = (function (){try{while(true){
var result__19283__auto__ = switch__19280__auto__.call(null,state_27949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19283__auto__;
}
break;
}
}catch (e27976){if((e27976 instanceof Object)){
var ex__19284__auto__ = e27976;
var statearr_27977_27995 = state_27949;
(statearr_27977_27995[(5)] = ex__19284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27996 = state_27949;
state_27949 = G__27996;
continue;
} else {
return ret_value__19282__auto__;
}
break;
}
});
cljs$core$async$state_machine__19281__auto__ = function(state_27949){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19281__auto____1.call(this,state_27949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19281__auto____0;
cljs$core$async$state_machine__19281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19281__auto____1;
return cljs$core$async$state_machine__19281__auto__;
})()
;})(switch__19280__auto__,c__19342__auto___27980,out))
})();
var state__19344__auto__ = (function (){var statearr_27978 = f__19343__auto__.call(null);
(statearr_27978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___27980);

return statearr_27978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___27980,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1436104830644