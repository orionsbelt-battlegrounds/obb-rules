// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args42339 = [];
var len__19428__auto___42345 = arguments.length;
var i__19429__auto___42346 = (0);
while(true){
if((i__19429__auto___42346 < len__19428__auto___42345)){
args42339.push((arguments[i__19429__auto___42346]));

var G__42347 = (i__19429__auto___42346 + (1));
i__19429__auto___42346 = G__42347;
continue;
} else {
}
break;
}

var G__42341 = args42339.length;
switch (G__42341) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42339.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async42342 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42342 = (function (f,blockable,meta42343){
this.f = f;
this.blockable = blockable;
this.meta42343 = meta42343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42344,meta42343__$1){
var self__ = this;
var _42344__$1 = this;
return (new cljs.core.async.t_cljs$core$async42342(self__.f,self__.blockable,meta42343__$1));
});

cljs.core.async.t_cljs$core$async42342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42344){
var self__ = this;
var _42344__$1 = this;
return self__.meta42343;
});

cljs.core.async.t_cljs$core$async42342.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async42342.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42342.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async42342.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async42342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42343","meta42343",-894622236,null)], null);
});

cljs.core.async.t_cljs$core$async42342.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42342";

cljs.core.async.t_cljs$core$async42342.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async42342");
});

cljs.core.async.__GT_t_cljs$core$async42342 = (function cljs$core$async$__GT_t_cljs$core$async42342(f__$1,blockable__$1,meta42343){
return (new cljs.core.async.t_cljs$core$async42342(f__$1,blockable__$1,meta42343));
});

}

return (new cljs.core.async.t_cljs$core$async42342(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
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
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args42351 = [];
var len__19428__auto___42354 = arguments.length;
var i__19429__auto___42355 = (0);
while(true){
if((i__19429__auto___42355 < len__19428__auto___42354)){
args42351.push((arguments[i__19429__auto___42355]));

var G__42356 = (i__19429__auto___42355 + (1));
i__19429__auto___42355 = G__42356;
continue;
} else {
}
break;
}

var G__42353 = args42351.length;
switch (G__42353) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42351.length)].join('')));

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
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args42358 = [];
var len__19428__auto___42361 = arguments.length;
var i__19429__auto___42362 = (0);
while(true){
if((i__19429__auto___42362 < len__19428__auto___42361)){
args42358.push((arguments[i__19429__auto___42362]));

var G__42363 = (i__19429__auto___42362 + (1));
i__19429__auto___42362 = G__42363;
continue;
} else {
}
break;
}

var G__42360 = args42358.length;
switch (G__42360) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42358.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args42365 = [];
var len__19428__auto___42368 = arguments.length;
var i__19429__auto___42369 = (0);
while(true){
if((i__19429__auto___42369 < len__19428__auto___42368)){
args42365.push((arguments[i__19429__auto___42369]));

var G__42370 = (i__19429__auto___42369 + (1));
i__19429__auto___42369 = G__42370;
continue;
} else {
}
break;
}

var G__42367 = args42365.length;
switch (G__42367) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42365.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_42372 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_42372);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_42372,ret){
return (function (){
return fn1.call(null,val_42372);
});})(val_42372,ret))
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
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args42373 = [];
var len__19428__auto___42376 = arguments.length;
var i__19429__auto___42377 = (0);
while(true){
if((i__19429__auto___42377 < len__19428__auto___42376)){
args42373.push((arguments[i__19429__auto___42377]));

var G__42378 = (i__19429__auto___42377 + (1));
i__19429__auto___42377 = G__42378;
continue;
} else {
}
break;
}

var G__42375 = args42373.length;
switch (G__42375) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42373.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__19273__auto___42380 = n;
var x_42381 = (0);
while(true){
if((x_42381 < n__19273__auto___42380)){
(a[x_42381] = (0));

var G__42382 = (x_42381 + (1));
x_42381 = G__42382;
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

var G__42383 = (i + (1));
i = G__42383;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async42387 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42387 = (function (alt_flag,flag,meta42388){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta42388 = meta42388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_42389,meta42388__$1){
var self__ = this;
var _42389__$1 = this;
return (new cljs.core.async.t_cljs$core$async42387(self__.alt_flag,self__.flag,meta42388__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async42387.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_42389){
var self__ = this;
var _42389__$1 = this;
return self__.meta42388;
});})(flag))
;

cljs.core.async.t_cljs$core$async42387.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async42387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async42387.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42387.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42388","meta42388",63794029,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async42387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42387";

cljs.core.async.t_cljs$core$async42387.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async42387");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async42387 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42387(alt_flag__$1,flag__$1,meta42388){
return (new cljs.core.async.t_cljs$core$async42387(alt_flag__$1,flag__$1,meta42388));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async42387(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async42393 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42393 = (function (alt_handler,flag,cb,meta42394){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta42394 = meta42394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42395,meta42394__$1){
var self__ = this;
var _42395__$1 = this;
return (new cljs.core.async.t_cljs$core$async42393(self__.alt_handler,self__.flag,self__.cb,meta42394__$1));
});

cljs.core.async.t_cljs$core$async42393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42395){
var self__ = this;
var _42395__$1 = this;
return self__.meta42394;
});

cljs.core.async.t_cljs$core$async42393.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async42393.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async42393.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42393.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async42393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42394","meta42394",176473421,null)], null);
});

cljs.core.async.t_cljs$core$async42393.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42393";

cljs.core.async.t_cljs$core$async42393.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async42393");
});

cljs.core.async.__GT_t_cljs$core$async42393 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42393(alt_handler__$1,flag__$1,cb__$1,meta42394){
return (new cljs.core.async.t_cljs$core$async42393(alt_handler__$1,flag__$1,cb__$1,meta42394));
});

}

return (new cljs.core.async.t_cljs$core$async42393(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__42396_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42396_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42397_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42397_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18370__auto__ = wport;
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return port;
}
})()], null));
} else {
var G__42398 = (i + (1));
i = G__42398;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18370__auto__ = ret;
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18358__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18358__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18358__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19435__auto__ = [];
var len__19428__auto___42404 = arguments.length;
var i__19429__auto___42405 = (0);
while(true){
if((i__19429__auto___42405 < len__19428__auto___42404)){
args__19435__auto__.push((arguments[i__19429__auto___42405]));

var G__42406 = (i__19429__auto___42405 + (1));
i__19429__auto___42405 = G__42406;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((1) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19436__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42401){
var map__42402 = p__42401;
var map__42402__$1 = ((((!((map__42402 == null)))?((((map__42402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42402):map__42402);
var opts = map__42402__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42399){
var G__42400 = cljs.core.first.call(null,seq42399);
var seq42399__$1 = cljs.core.next.call(null,seq42399);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42400,seq42399__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args42407 = [];
var len__19428__auto___42457 = arguments.length;
var i__19429__auto___42458 = (0);
while(true){
if((i__19429__auto___42458 < len__19428__auto___42457)){
args42407.push((arguments[i__19429__auto___42458]));

var G__42459 = (i__19429__auto___42458 + (1));
i__19429__auto___42458 = G__42459;
continue;
} else {
}
break;
}

var G__42409 = args42407.length;
switch (G__42409) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42407.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21866__auto___42461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21866__auto___42461){
return (function (){
var f__21867__auto__ = (function (){var switch__21754__auto__ = ((function (c__21866__auto___42461){
return (function (state_42433){
var state_val_42434 = (state_42433[(1)]);
if((state_val_42434 === (7))){
var inst_42429 = (state_42433[(2)]);
var state_42433__$1 = state_42433;
var statearr_42435_42462 = state_42433__$1;
(statearr_42435_42462[(2)] = inst_42429);

(statearr_42435_42462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42434 === (1))){
var state_42433__$1 = state_42433;
var statearr_42436_42463 = state_42433__$1;
(statearr_42436_42463[(2)] = null);

(statearr_42436_42463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42434 === (4))){
var inst_42412 = (state_42433[(7)]);
var inst_42412__$1 = (state_42433[(2)]);
var inst_42413 = (inst_42412__$1 == null);
var state_42433__$1 = (function (){var statearr_42437 = state_42433;
(statearr_42437[(7)] = inst_42412__$1);

return statearr_42437;
})();
if(cljs.core.truth_(inst_42413)){
var statearr_42438_42464 = state_42433__$1;
(statearr_42438_42464[(1)] = (5));

} else {
var statearr_42439_42465 = state_42433__$1;
(statearr_42439_42465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42434 === (13))){
var state_42433__$1 = state_42433;
var statearr_42440_42466 = state_42433__$1;
(statearr_42440_42466[(2)] = null);

(statearr_42440_42466[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42434 === (6))){
var inst_42412 = (state_42433[(7)]);
var state_42433__$1 = state_42433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42433__$1,(11),to,inst_42412);
} else {
if((state_val_42434 === (3))){
var inst_42431 = (state_42433[(2)]);
var state_42433__$1 = state_42433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42433__$1,inst_42431);
} else {
if((state_val_42434 === (12))){
var state_42433__$1 = state_42433;
var statearr_42441_42467 = state_42433__$1;
(statearr_42441_42467[(2)] = null);

(statearr_42441_42467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42434 === (2))){
var state_42433__$1 = state_42433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42433__$1,(4),from);
} else {
if((state_val_42434 === (11))){
var inst_42422 = (state_42433[(2)]);
var state_42433__$1 = state_42433;
if(cljs.core.truth_(inst_42422)){
var statearr_42442_42468 = state_42433__$1;
(statearr_42442_42468[(1)] = (12));

} else {
var statearr_42443_42469 = state_42433__$1;
(statearr_42443_42469[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42434 === (9))){
var state_42433__$1 = state_42433;
var statearr_42444_42470 = state_42433__$1;
(statearr_42444_42470[(2)] = null);

(statearr_42444_42470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42434 === (5))){
var state_42433__$1 = state_42433;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42445_42471 = state_42433__$1;
(statearr_42445_42471[(1)] = (8));

} else {
var statearr_42446_42472 = state_42433__$1;
(statearr_42446_42472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42434 === (14))){
var inst_42427 = (state_42433[(2)]);
var state_42433__$1 = state_42433;
var statearr_42447_42473 = state_42433__$1;
(statearr_42447_42473[(2)] = inst_42427);

(statearr_42447_42473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42434 === (10))){
var inst_42419 = (state_42433[(2)]);
var state_42433__$1 = state_42433;
var statearr_42448_42474 = state_42433__$1;
(statearr_42448_42474[(2)] = inst_42419);

(statearr_42448_42474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42434 === (8))){
var inst_42416 = cljs.core.async.close_BANG_.call(null,to);
var state_42433__$1 = state_42433;
var statearr_42449_42475 = state_42433__$1;
(statearr_42449_42475[(2)] = inst_42416);

(statearr_42449_42475[(1)] = (10));


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
});})(c__21866__auto___42461))
;
return ((function (switch__21754__auto__,c__21866__auto___42461){
return (function() {
var cljs$core$async$state_machine__21755__auto__ = null;
var cljs$core$async$state_machine__21755__auto____0 = (function (){
var statearr_42453 = [null,null,null,null,null,null,null,null];
(statearr_42453[(0)] = cljs$core$async$state_machine__21755__auto__);

(statearr_42453[(1)] = (1));

return statearr_42453;
});
var cljs$core$async$state_machine__21755__auto____1 = (function (state_42433){
while(true){
var ret_value__21756__auto__ = (function (){try{while(true){
var result__21757__auto__ = switch__21754__auto__.call(null,state_42433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21757__auto__;
}
break;
}
}catch (e42454){if((e42454 instanceof Object)){
var ex__21758__auto__ = e42454;
var statearr_42455_42476 = state_42433;
(statearr_42455_42476[(5)] = ex__21758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42477 = state_42433;
state_42433 = G__42477;
continue;
} else {
return ret_value__21756__auto__;
}
break;
}
});
cljs$core$async$state_machine__21755__auto__ = function(state_42433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21755__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21755__auto____1.call(this,state_42433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21755__auto____0;
cljs$core$async$state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21755__auto____1;
return cljs$core$async$state_machine__21755__auto__;
})()
;})(switch__21754__auto__,c__21866__auto___42461))
})();
var state__21868__auto__ = (function (){var statearr_42456 = f__21867__auto__.call(null);
(statearr_42456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21866__auto___42461);

return statearr_42456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21868__auto__);
});})(c__21866__auto___42461))
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
return (function (p__42661){
var vec__42662 = p__42661;
var v = cljs.core.nth.call(null,vec__42662,(0),null);
var p = cljs.core.nth.call(null,vec__42662,(1),null);
var job = vec__42662;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21866__auto___42844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21866__auto___42844,res,vec__42662,v,p,job,jobs,results){
return (function (){
var f__21867__auto__ = (function (){var switch__21754__auto__ = ((function (c__21866__auto___42844,res,vec__42662,v,p,job,jobs,results){
return (function (state_42667){
var state_val_42668 = (state_42667[(1)]);
if((state_val_42668 === (1))){
var state_42667__$1 = state_42667;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42667__$1,(2),res,v);
} else {
if((state_val_42668 === (2))){
var inst_42664 = (state_42667[(2)]);
var inst_42665 = cljs.core.async.close_BANG_.call(null,res);
var state_42667__$1 = (function (){var statearr_42669 = state_42667;
(statearr_42669[(7)] = inst_42664);

return statearr_42669;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42667__$1,inst_42665);
} else {
return null;
}
}
});})(c__21866__auto___42844,res,vec__42662,v,p,job,jobs,results))
;
return ((function (switch__21754__auto__,c__21866__auto___42844,res,vec__42662,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____0 = (function (){
var statearr_42673 = [null,null,null,null,null,null,null,null];
(statearr_42673[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__);

(statearr_42673[(1)] = (1));

return statearr_42673;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____1 = (function (state_42667){
while(true){
var ret_value__21756__auto__ = (function (){try{while(true){
var result__21757__auto__ = switch__21754__auto__.call(null,state_42667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21757__auto__;
}
break;
}
}catch (e42674){if((e42674 instanceof Object)){
var ex__21758__auto__ = e42674;
var statearr_42675_42845 = state_42667;
(statearr_42675_42845[(5)] = ex__21758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42846 = state_42667;
state_42667 = G__42846;
continue;
} else {
return ret_value__21756__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__ = function(state_42667){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____1.call(this,state_42667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__;
})()
;})(switch__21754__auto__,c__21866__auto___42844,res,vec__42662,v,p,job,jobs,results))
})();
var state__21868__auto__ = (function (){var statearr_42676 = f__21867__auto__.call(null);
(statearr_42676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21866__auto___42844);

return statearr_42676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21868__auto__);
});})(c__21866__auto___42844,res,vec__42662,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__42677){
var vec__42678 = p__42677;
var v = cljs.core.nth.call(null,vec__42678,(0),null);
var p = cljs.core.nth.call(null,vec__42678,(1),null);
var job = vec__42678;
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
var n__19273__auto___42847 = n;
var __42848 = (0);
while(true){
if((__42848 < n__19273__auto___42847)){
var G__42679_42849 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__42679_42849) {
case "compute":
var c__21866__auto___42851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42848,c__21866__auto___42851,G__42679_42849,n__19273__auto___42847,jobs,results,process,async){
return (function (){
var f__21867__auto__ = (function (){var switch__21754__auto__ = ((function (__42848,c__21866__auto___42851,G__42679_42849,n__19273__auto___42847,jobs,results,process,async){
return (function (state_42692){
var state_val_42693 = (state_42692[(1)]);
if((state_val_42693 === (1))){
var state_42692__$1 = state_42692;
var statearr_42694_42852 = state_42692__$1;
(statearr_42694_42852[(2)] = null);

(statearr_42694_42852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42693 === (2))){
var state_42692__$1 = state_42692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42692__$1,(4),jobs);
} else {
if((state_val_42693 === (3))){
var inst_42690 = (state_42692[(2)]);
var state_42692__$1 = state_42692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42692__$1,inst_42690);
} else {
if((state_val_42693 === (4))){
var inst_42682 = (state_42692[(2)]);
var inst_42683 = process.call(null,inst_42682);
var state_42692__$1 = state_42692;
if(cljs.core.truth_(inst_42683)){
var statearr_42695_42853 = state_42692__$1;
(statearr_42695_42853[(1)] = (5));

} else {
var statearr_42696_42854 = state_42692__$1;
(statearr_42696_42854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42693 === (5))){
var state_42692__$1 = state_42692;
var statearr_42697_42855 = state_42692__$1;
(statearr_42697_42855[(2)] = null);

(statearr_42697_42855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42693 === (6))){
var state_42692__$1 = state_42692;
var statearr_42698_42856 = state_42692__$1;
(statearr_42698_42856[(2)] = null);

(statearr_42698_42856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42693 === (7))){
var inst_42688 = (state_42692[(2)]);
var state_42692__$1 = state_42692;
var statearr_42699_42857 = state_42692__$1;
(statearr_42699_42857[(2)] = inst_42688);

(statearr_42699_42857[(1)] = (3));


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
});})(__42848,c__21866__auto___42851,G__42679_42849,n__19273__auto___42847,jobs,results,process,async))
;
return ((function (__42848,switch__21754__auto__,c__21866__auto___42851,G__42679_42849,n__19273__auto___42847,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____0 = (function (){
var statearr_42703 = [null,null,null,null,null,null,null];
(statearr_42703[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__);

(statearr_42703[(1)] = (1));

return statearr_42703;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____1 = (function (state_42692){
while(true){
var ret_value__21756__auto__ = (function (){try{while(true){
var result__21757__auto__ = switch__21754__auto__.call(null,state_42692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21757__auto__;
}
break;
}
}catch (e42704){if((e42704 instanceof Object)){
var ex__21758__auto__ = e42704;
var statearr_42705_42858 = state_42692;
(statearr_42705_42858[(5)] = ex__21758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42859 = state_42692;
state_42692 = G__42859;
continue;
} else {
return ret_value__21756__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__ = function(state_42692){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____1.call(this,state_42692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__;
})()
;})(__42848,switch__21754__auto__,c__21866__auto___42851,G__42679_42849,n__19273__auto___42847,jobs,results,process,async))
})();
var state__21868__auto__ = (function (){var statearr_42706 = f__21867__auto__.call(null);
(statearr_42706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21866__auto___42851);

return statearr_42706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21868__auto__);
});})(__42848,c__21866__auto___42851,G__42679_42849,n__19273__auto___42847,jobs,results,process,async))
);


break;
case "async":
var c__21866__auto___42860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42848,c__21866__auto___42860,G__42679_42849,n__19273__auto___42847,jobs,results,process,async){
return (function (){
var f__21867__auto__ = (function (){var switch__21754__auto__ = ((function (__42848,c__21866__auto___42860,G__42679_42849,n__19273__auto___42847,jobs,results,process,async){
return (function (state_42719){
var state_val_42720 = (state_42719[(1)]);
if((state_val_42720 === (1))){
var state_42719__$1 = state_42719;
var statearr_42721_42861 = state_42719__$1;
(statearr_42721_42861[(2)] = null);

(statearr_42721_42861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42720 === (2))){
var state_42719__$1 = state_42719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42719__$1,(4),jobs);
} else {
if((state_val_42720 === (3))){
var inst_42717 = (state_42719[(2)]);
var state_42719__$1 = state_42719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42719__$1,inst_42717);
} else {
if((state_val_42720 === (4))){
var inst_42709 = (state_42719[(2)]);
var inst_42710 = async.call(null,inst_42709);
var state_42719__$1 = state_42719;
if(cljs.core.truth_(inst_42710)){
var statearr_42722_42862 = state_42719__$1;
(statearr_42722_42862[(1)] = (5));

} else {
var statearr_42723_42863 = state_42719__$1;
(statearr_42723_42863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42720 === (5))){
var state_42719__$1 = state_42719;
var statearr_42724_42864 = state_42719__$1;
(statearr_42724_42864[(2)] = null);

(statearr_42724_42864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42720 === (6))){
var state_42719__$1 = state_42719;
var statearr_42725_42865 = state_42719__$1;
(statearr_42725_42865[(2)] = null);

(statearr_42725_42865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42720 === (7))){
var inst_42715 = (state_42719[(2)]);
var state_42719__$1 = state_42719;
var statearr_42726_42866 = state_42719__$1;
(statearr_42726_42866[(2)] = inst_42715);

(statearr_42726_42866[(1)] = (3));


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
});})(__42848,c__21866__auto___42860,G__42679_42849,n__19273__auto___42847,jobs,results,process,async))
;
return ((function (__42848,switch__21754__auto__,c__21866__auto___42860,G__42679_42849,n__19273__auto___42847,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____0 = (function (){
var statearr_42730 = [null,null,null,null,null,null,null];
(statearr_42730[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__);

(statearr_42730[(1)] = (1));

return statearr_42730;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____1 = (function (state_42719){
while(true){
var ret_value__21756__auto__ = (function (){try{while(true){
var result__21757__auto__ = switch__21754__auto__.call(null,state_42719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21757__auto__;
}
break;
}
}catch (e42731){if((e42731 instanceof Object)){
var ex__21758__auto__ = e42731;
var statearr_42732_42867 = state_42719;
(statearr_42732_42867[(5)] = ex__21758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42868 = state_42719;
state_42719 = G__42868;
continue;
} else {
return ret_value__21756__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__ = function(state_42719){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____1.call(this,state_42719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__;
})()
;})(__42848,switch__21754__auto__,c__21866__auto___42860,G__42679_42849,n__19273__auto___42847,jobs,results,process,async))
})();
var state__21868__auto__ = (function (){var statearr_42733 = f__21867__auto__.call(null);
(statearr_42733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21866__auto___42860);

return statearr_42733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21868__auto__);
});})(__42848,c__21866__auto___42860,G__42679_42849,n__19273__auto___42847,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__42869 = (__42848 + (1));
__42848 = G__42869;
continue;
} else {
}
break;
}

var c__21866__auto___42870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21866__auto___42870,jobs,results,process,async){
return (function (){
var f__21867__auto__ = (function (){var switch__21754__auto__ = ((function (c__21866__auto___42870,jobs,results,process,async){
return (function (state_42755){
var state_val_42756 = (state_42755[(1)]);
if((state_val_42756 === (1))){
var state_42755__$1 = state_42755;
var statearr_42757_42871 = state_42755__$1;
(statearr_42757_42871[(2)] = null);

(statearr_42757_42871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42756 === (2))){
var state_42755__$1 = state_42755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42755__$1,(4),from);
} else {
if((state_val_42756 === (3))){
var inst_42753 = (state_42755[(2)]);
var state_42755__$1 = state_42755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42755__$1,inst_42753);
} else {
if((state_val_42756 === (4))){
var inst_42736 = (state_42755[(7)]);
var inst_42736__$1 = (state_42755[(2)]);
var inst_42737 = (inst_42736__$1 == null);
var state_42755__$1 = (function (){var statearr_42758 = state_42755;
(statearr_42758[(7)] = inst_42736__$1);

return statearr_42758;
})();
if(cljs.core.truth_(inst_42737)){
var statearr_42759_42872 = state_42755__$1;
(statearr_42759_42872[(1)] = (5));

} else {
var statearr_42760_42873 = state_42755__$1;
(statearr_42760_42873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42756 === (5))){
var inst_42739 = cljs.core.async.close_BANG_.call(null,jobs);
var state_42755__$1 = state_42755;
var statearr_42761_42874 = state_42755__$1;
(statearr_42761_42874[(2)] = inst_42739);

(statearr_42761_42874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42756 === (6))){
var inst_42736 = (state_42755[(7)]);
var inst_42741 = (state_42755[(8)]);
var inst_42741__$1 = cljs.core.async.chan.call(null,(1));
var inst_42742 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42743 = [inst_42736,inst_42741__$1];
var inst_42744 = (new cljs.core.PersistentVector(null,2,(5),inst_42742,inst_42743,null));
var state_42755__$1 = (function (){var statearr_42762 = state_42755;
(statearr_42762[(8)] = inst_42741__$1);

return statearr_42762;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42755__$1,(8),jobs,inst_42744);
} else {
if((state_val_42756 === (7))){
var inst_42751 = (state_42755[(2)]);
var state_42755__$1 = state_42755;
var statearr_42763_42875 = state_42755__$1;
(statearr_42763_42875[(2)] = inst_42751);

(statearr_42763_42875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42756 === (8))){
var inst_42741 = (state_42755[(8)]);
var inst_42746 = (state_42755[(2)]);
var state_42755__$1 = (function (){var statearr_42764 = state_42755;
(statearr_42764[(9)] = inst_42746);

return statearr_42764;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42755__$1,(9),results,inst_42741);
} else {
if((state_val_42756 === (9))){
var inst_42748 = (state_42755[(2)]);
var state_42755__$1 = (function (){var statearr_42765 = state_42755;
(statearr_42765[(10)] = inst_42748);

return statearr_42765;
})();
var statearr_42766_42876 = state_42755__$1;
(statearr_42766_42876[(2)] = null);

(statearr_42766_42876[(1)] = (2));


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
});})(c__21866__auto___42870,jobs,results,process,async))
;
return ((function (switch__21754__auto__,c__21866__auto___42870,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____0 = (function (){
var statearr_42770 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42770[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__);

(statearr_42770[(1)] = (1));

return statearr_42770;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____1 = (function (state_42755){
while(true){
var ret_value__21756__auto__ = (function (){try{while(true){
var result__21757__auto__ = switch__21754__auto__.call(null,state_42755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21757__auto__;
}
break;
}
}catch (e42771){if((e42771 instanceof Object)){
var ex__21758__auto__ = e42771;
var statearr_42772_42877 = state_42755;
(statearr_42772_42877[(5)] = ex__21758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42878 = state_42755;
state_42755 = G__42878;
continue;
} else {
return ret_value__21756__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__ = function(state_42755){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____1.call(this,state_42755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__;
})()
;})(switch__21754__auto__,c__21866__auto___42870,jobs,results,process,async))
})();
var state__21868__auto__ = (function (){var statearr_42773 = f__21867__auto__.call(null);
(statearr_42773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21866__auto___42870);

return statearr_42773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21868__auto__);
});})(c__21866__auto___42870,jobs,results,process,async))
);


var c__21866__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21866__auto__,jobs,results,process,async){
return (function (){
var f__21867__auto__ = (function (){var switch__21754__auto__ = ((function (c__21866__auto__,jobs,results,process,async){
return (function (state_42811){
var state_val_42812 = (state_42811[(1)]);
if((state_val_42812 === (7))){
var inst_42807 = (state_42811[(2)]);
var state_42811__$1 = state_42811;
var statearr_42813_42879 = state_42811__$1;
(statearr_42813_42879[(2)] = inst_42807);

(statearr_42813_42879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42812 === (20))){
var state_42811__$1 = state_42811;
var statearr_42814_42880 = state_42811__$1;
(statearr_42814_42880[(2)] = null);

(statearr_42814_42880[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42812 === (1))){
var state_42811__$1 = state_42811;
var statearr_42815_42881 = state_42811__$1;
(statearr_42815_42881[(2)] = null);

(statearr_42815_42881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42812 === (4))){
var inst_42776 = (state_42811[(7)]);
var inst_42776__$1 = (state_42811[(2)]);
var inst_42777 = (inst_42776__$1 == null);
var state_42811__$1 = (function (){var statearr_42816 = state_42811;
(statearr_42816[(7)] = inst_42776__$1);

return statearr_42816;
})();
if(cljs.core.truth_(inst_42777)){
var statearr_42817_42882 = state_42811__$1;
(statearr_42817_42882[(1)] = (5));

} else {
var statearr_42818_42883 = state_42811__$1;
(statearr_42818_42883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42812 === (15))){
var inst_42789 = (state_42811[(8)]);
var state_42811__$1 = state_42811;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42811__$1,(18),to,inst_42789);
} else {
if((state_val_42812 === (21))){
var inst_42802 = (state_42811[(2)]);
var state_42811__$1 = state_42811;
var statearr_42819_42884 = state_42811__$1;
(statearr_42819_42884[(2)] = inst_42802);

(statearr_42819_42884[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42812 === (13))){
var inst_42804 = (state_42811[(2)]);
var state_42811__$1 = (function (){var statearr_42820 = state_42811;
(statearr_42820[(9)] = inst_42804);

return statearr_42820;
})();
var statearr_42821_42885 = state_42811__$1;
(statearr_42821_42885[(2)] = null);

(statearr_42821_42885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42812 === (6))){
var inst_42776 = (state_42811[(7)]);
var state_42811__$1 = state_42811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42811__$1,(11),inst_42776);
} else {
if((state_val_42812 === (17))){
var inst_42797 = (state_42811[(2)]);
var state_42811__$1 = state_42811;
if(cljs.core.truth_(inst_42797)){
var statearr_42822_42886 = state_42811__$1;
(statearr_42822_42886[(1)] = (19));

} else {
var statearr_42823_42887 = state_42811__$1;
(statearr_42823_42887[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42812 === (3))){
var inst_42809 = (state_42811[(2)]);
var state_42811__$1 = state_42811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42811__$1,inst_42809);
} else {
if((state_val_42812 === (12))){
var inst_42786 = (state_42811[(10)]);
var state_42811__$1 = state_42811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42811__$1,(14),inst_42786);
} else {
if((state_val_42812 === (2))){
var state_42811__$1 = state_42811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42811__$1,(4),results);
} else {
if((state_val_42812 === (19))){
var state_42811__$1 = state_42811;
var statearr_42824_42888 = state_42811__$1;
(statearr_42824_42888[(2)] = null);

(statearr_42824_42888[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42812 === (11))){
var inst_42786 = (state_42811[(2)]);
var state_42811__$1 = (function (){var statearr_42825 = state_42811;
(statearr_42825[(10)] = inst_42786);

return statearr_42825;
})();
var statearr_42826_42889 = state_42811__$1;
(statearr_42826_42889[(2)] = null);

(statearr_42826_42889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42812 === (9))){
var state_42811__$1 = state_42811;
var statearr_42827_42890 = state_42811__$1;
(statearr_42827_42890[(2)] = null);

(statearr_42827_42890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42812 === (5))){
var state_42811__$1 = state_42811;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42828_42891 = state_42811__$1;
(statearr_42828_42891[(1)] = (8));

} else {
var statearr_42829_42892 = state_42811__$1;
(statearr_42829_42892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42812 === (14))){
var inst_42789 = (state_42811[(8)]);
var inst_42791 = (state_42811[(11)]);
var inst_42789__$1 = (state_42811[(2)]);
var inst_42790 = (inst_42789__$1 == null);
var inst_42791__$1 = cljs.core.not.call(null,inst_42790);
var state_42811__$1 = (function (){var statearr_42830 = state_42811;
(statearr_42830[(8)] = inst_42789__$1);

(statearr_42830[(11)] = inst_42791__$1);

return statearr_42830;
})();
if(inst_42791__$1){
var statearr_42831_42893 = state_42811__$1;
(statearr_42831_42893[(1)] = (15));

} else {
var statearr_42832_42894 = state_42811__$1;
(statearr_42832_42894[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42812 === (16))){
var inst_42791 = (state_42811[(11)]);
var state_42811__$1 = state_42811;
var statearr_42833_42895 = state_42811__$1;
(statearr_42833_42895[(2)] = inst_42791);

(statearr_42833_42895[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42812 === (10))){
var inst_42783 = (state_42811[(2)]);
var state_42811__$1 = state_42811;
var statearr_42834_42896 = state_42811__$1;
(statearr_42834_42896[(2)] = inst_42783);

(statearr_42834_42896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42812 === (18))){
var inst_42794 = (state_42811[(2)]);
var state_42811__$1 = state_42811;
var statearr_42835_42897 = state_42811__$1;
(statearr_42835_42897[(2)] = inst_42794);

(statearr_42835_42897[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42812 === (8))){
var inst_42780 = cljs.core.async.close_BANG_.call(null,to);
var state_42811__$1 = state_42811;
var statearr_42836_42898 = state_42811__$1;
(statearr_42836_42898[(2)] = inst_42780);

(statearr_42836_42898[(1)] = (10));


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
});})(c__21866__auto__,jobs,results,process,async))
;
return ((function (switch__21754__auto__,c__21866__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____0 = (function (){
var statearr_42840 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42840[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__);

(statearr_42840[(1)] = (1));

return statearr_42840;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____1 = (function (state_42811){
while(true){
var ret_value__21756__auto__ = (function (){try{while(true){
var result__21757__auto__ = switch__21754__auto__.call(null,state_42811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21757__auto__;
}
break;
}
}catch (e42841){if((e42841 instanceof Object)){
var ex__21758__auto__ = e42841;
var statearr_42842_42899 = state_42811;
(statearr_42842_42899[(5)] = ex__21758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42900 = state_42811;
state_42811 = G__42900;
continue;
} else {
return ret_value__21756__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__ = function(state_42811){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____1.call(this,state_42811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21755__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21755__auto__;
})()
;})(switch__21754__auto__,c__21866__auto__,jobs,results,process,async))
})();
var state__21868__auto__ = (function (){var statearr_42843 = f__21867__auto__.call(null);
(statearr_42843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21866__auto__);

return statearr_42843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21868__auto__);
});})(c__21866__auto__,jobs,results,process,async))
);

return c__21866__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args42901 = [];
var len__19428__auto___42904 = arguments.length;
var i__19429__auto___42905 = (0);
while(true){
if((i__19429__auto___42905 < len__19428__auto___42904)){
args42901.push((arguments[i__19429__auto___42905]));

var G__42906 = (i__19429__auto___42905 + (1));
i__19429__auto___42905 = G__42906;
continue;
} else {
}
break;
}

var G__42903 = args42901.length;
switch (G__42903) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42901.length)].join('')));

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
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args42908 = [];
var len__19428__auto___42911 = arguments.length;
var i__19429__auto___42912 = (0);
while(true){
if((i__19429__auto___42912 < len__19428__auto___42911)){
args42908.push((arguments[i__19429__auto___42912]));

var G__42913 = (i__19429__auto___42912 + (1));
i__19429__auto___42912 = G__42913;
continue;
} else {
}
break;
}

var G__42910 = args42908.length;
switch (G__42910) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42908.length)].join('')));

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
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args42915 = [];
var len__19428__auto___42968 = arguments.length;
var i__19429__auto___42969 = (0);
while(true){
if((i__19429__auto___42969 < len__19428__auto___42968)){
args42915.push((arguments[i__19429__auto___42969]));

var G__42970 = (i__19429__auto___42969 + (1));
i__19429__auto___42969 = G__42970;
continue;
} else {
}
break;
}

var G__42917 = args42915.length;
switch (G__42917) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42915.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21866__auto___42972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21866__auto___42972,tc,fc){
return (function (){
var f__21867__auto__ = (function (){var switch__21754__auto__ = ((function (c__21866__auto___42972,tc,fc){
return (function (state_42943){
var state_val_42944 = (state_42943[(1)]);
if((state_val_42944 === (7))){
var inst_42939 = (state_42943[(2)]);
var state_42943__$1 = state_42943;
var statearr_42945_42973 = state_42943__$1;
(statearr_42945_42973[(2)] = inst_42939);

(statearr_42945_42973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42944 === (1))){
var state_42943__$1 = state_42943;
var statearr_42946_42974 = state_42943__$1;
(statearr_42946_42974[(2)] = null);

(statearr_42946_42974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42944 === (4))){
var inst_42920 = (state_42943[(7)]);
var inst_42920__$1 = (state_42943[(2)]);
var inst_42921 = (inst_42920__$1 == null);
var state_42943__$1 = (function (){var statearr_42947 = state_42943;
(statearr_42947[(7)] = inst_42920__$1);

return statearr_42947;
})();
if(cljs.core.truth_(inst_42921)){
var statearr_42948_42975 = state_42943__$1;
(statearr_42948_42975[(1)] = (5));

} else {
var statearr_42949_42976 = state_42943__$1;
(statearr_42949_42976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42944 === (13))){
var state_42943__$1 = state_42943;
var statearr_42950_42977 = state_42943__$1;
(statearr_42950_42977[(2)] = null);

(statearr_42950_42977[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42944 === (6))){
var inst_42920 = (state_42943[(7)]);
var inst_42926 = p.call(null,inst_42920);
var state_42943__$1 = state_42943;
if(cljs.core.truth_(inst_42926)){
var statearr_42951_42978 = state_42943__$1;
(statearr_42951_42978[(1)] = (9));

} else {
var statearr_42952_42979 = state_42943__$1;
(statearr_42952_42979[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42944 === (3))){
var inst_42941 = (state_42943[(2)]);
var state_42943__$1 = state_42943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42943__$1,inst_42941);
} else {
if((state_val_42944 === (12))){
var state_42943__$1 = state_42943;
var statearr_42953_42980 = state_42943__$1;
(statearr_42953_42980[(2)] = null);

(statearr_42953_42980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42944 === (2))){
var state_42943__$1 = state_42943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42943__$1,(4),ch);
} else {
if((state_val_42944 === (11))){
var inst_42920 = (state_42943[(7)]);
var inst_42930 = (state_42943[(2)]);
var state_42943__$1 = state_42943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42943__$1,(8),inst_42930,inst_42920);
} else {
if((state_val_42944 === (9))){
var state_42943__$1 = state_42943;
var statearr_42954_42981 = state_42943__$1;
(statearr_42954_42981[(2)] = tc);

(statearr_42954_42981[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42944 === (5))){
var inst_42923 = cljs.core.async.close_BANG_.call(null,tc);
var inst_42924 = cljs.core.async.close_BANG_.call(null,fc);
var state_42943__$1 = (function (){var statearr_42955 = state_42943;
(statearr_42955[(8)] = inst_42923);

return statearr_42955;
})();
var statearr_42956_42982 = state_42943__$1;
(statearr_42956_42982[(2)] = inst_42924);

(statearr_42956_42982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42944 === (14))){
var inst_42937 = (state_42943[(2)]);
var state_42943__$1 = state_42943;
var statearr_42957_42983 = state_42943__$1;
(statearr_42957_42983[(2)] = inst_42937);

(statearr_42957_42983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42944 === (10))){
var state_42943__$1 = state_42943;
var statearr_42958_42984 = state_42943__$1;
(statearr_42958_42984[(2)] = fc);

(statearr_42958_42984[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42944 === (8))){
var inst_42932 = (state_42943[(2)]);
var state_42943__$1 = state_42943;
if(cljs.core.truth_(inst_42932)){
var statearr_42959_42985 = state_42943__$1;
(statearr_42959_42985[(1)] = (12));

} else {
var statearr_42960_42986 = state_42943__$1;
(statearr_42960_42986[(1)] = (13));

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
});})(c__21866__auto___42972,tc,fc))
;
return ((function (switch__21754__auto__,c__21866__auto___42972,tc,fc){
return (function() {
var cljs$core$async$state_machine__21755__auto__ = null;
var cljs$core$async$state_machine__21755__auto____0 = (function (){
var statearr_42964 = [null,null,null,null,null,null,null,null,null];
(statearr_42964[(0)] = cljs$core$async$state_machine__21755__auto__);

(statearr_42964[(1)] = (1));

return statearr_42964;
});
var cljs$core$async$state_machine__21755__auto____1 = (function (state_42943){
while(true){
var ret_value__21756__auto__ = (function (){try{while(true){
var result__21757__auto__ = switch__21754__auto__.call(null,state_42943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21757__auto__;
}
break;
}
}catch (e42965){if((e42965 instanceof Object)){
var ex__21758__auto__ = e42965;
var statearr_42966_42987 = state_42943;
(statearr_42966_42987[(5)] = ex__21758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42988 = state_42943;
state_42943 = G__42988;
continue;
} else {
return ret_value__21756__auto__;
}
break;
}
});
cljs$core$async$state_machine__21755__auto__ = function(state_42943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21755__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21755__auto____1.call(this,state_42943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21755__auto____0;
cljs$core$async$state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21755__auto____1;
return cljs$core$async$state_machine__21755__auto__;
})()
;})(switch__21754__auto__,c__21866__auto___42972,tc,fc))
})();
var state__21868__auto__ = (function (){var statearr_42967 = f__21867__auto__.call(null);
(statearr_42967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21866__auto___42972);

return statearr_42967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21868__auto__);
});})(c__21866__auto___42972,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21866__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21866__auto__){
return (function (){
var f__21867__auto__ = (function (){var switch__21754__auto__ = ((function (c__21866__auto__){
return (function (state_43052){
var state_val_43053 = (state_43052[(1)]);
if((state_val_43053 === (7))){
var inst_43048 = (state_43052[(2)]);
var state_43052__$1 = state_43052;
var statearr_43054_43075 = state_43052__$1;
(statearr_43054_43075[(2)] = inst_43048);

(statearr_43054_43075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (1))){
var inst_43032 = init;
var state_43052__$1 = (function (){var statearr_43055 = state_43052;
(statearr_43055[(7)] = inst_43032);

return statearr_43055;
})();
var statearr_43056_43076 = state_43052__$1;
(statearr_43056_43076[(2)] = null);

(statearr_43056_43076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (4))){
var inst_43035 = (state_43052[(8)]);
var inst_43035__$1 = (state_43052[(2)]);
var inst_43036 = (inst_43035__$1 == null);
var state_43052__$1 = (function (){var statearr_43057 = state_43052;
(statearr_43057[(8)] = inst_43035__$1);

return statearr_43057;
})();
if(cljs.core.truth_(inst_43036)){
var statearr_43058_43077 = state_43052__$1;
(statearr_43058_43077[(1)] = (5));

} else {
var statearr_43059_43078 = state_43052__$1;
(statearr_43059_43078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (6))){
var inst_43039 = (state_43052[(9)]);
var inst_43035 = (state_43052[(8)]);
var inst_43032 = (state_43052[(7)]);
var inst_43039__$1 = f.call(null,inst_43032,inst_43035);
var inst_43040 = cljs.core.reduced_QMARK_.call(null,inst_43039__$1);
var state_43052__$1 = (function (){var statearr_43060 = state_43052;
(statearr_43060[(9)] = inst_43039__$1);

return statearr_43060;
})();
if(inst_43040){
var statearr_43061_43079 = state_43052__$1;
(statearr_43061_43079[(1)] = (8));

} else {
var statearr_43062_43080 = state_43052__$1;
(statearr_43062_43080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (3))){
var inst_43050 = (state_43052[(2)]);
var state_43052__$1 = state_43052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43052__$1,inst_43050);
} else {
if((state_val_43053 === (2))){
var state_43052__$1 = state_43052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43052__$1,(4),ch);
} else {
if((state_val_43053 === (9))){
var inst_43039 = (state_43052[(9)]);
var inst_43032 = inst_43039;
var state_43052__$1 = (function (){var statearr_43063 = state_43052;
(statearr_43063[(7)] = inst_43032);

return statearr_43063;
})();
var statearr_43064_43081 = state_43052__$1;
(statearr_43064_43081[(2)] = null);

(statearr_43064_43081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (5))){
var inst_43032 = (state_43052[(7)]);
var state_43052__$1 = state_43052;
var statearr_43065_43082 = state_43052__$1;
(statearr_43065_43082[(2)] = inst_43032);

(statearr_43065_43082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (10))){
var inst_43046 = (state_43052[(2)]);
var state_43052__$1 = state_43052;
var statearr_43066_43083 = state_43052__$1;
(statearr_43066_43083[(2)] = inst_43046);

(statearr_43066_43083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (8))){
var inst_43039 = (state_43052[(9)]);
var inst_43042 = cljs.core.deref.call(null,inst_43039);
var state_43052__$1 = state_43052;
var statearr_43067_43084 = state_43052__$1;
(statearr_43067_43084[(2)] = inst_43042);

(statearr_43067_43084[(1)] = (10));


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
});})(c__21866__auto__))
;
return ((function (switch__21754__auto__,c__21866__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21755__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21755__auto____0 = (function (){
var statearr_43071 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43071[(0)] = cljs$core$async$reduce_$_state_machine__21755__auto__);

(statearr_43071[(1)] = (1));

return statearr_43071;
});
var cljs$core$async$reduce_$_state_machine__21755__auto____1 = (function (state_43052){
while(true){
var ret_value__21756__auto__ = (function (){try{while(true){
var result__21757__auto__ = switch__21754__auto__.call(null,state_43052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21757__auto__;
}
break;
}
}catch (e43072){if((e43072 instanceof Object)){
var ex__21758__auto__ = e43072;
var statearr_43073_43085 = state_43052;
(statearr_43073_43085[(5)] = ex__21758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43086 = state_43052;
state_43052 = G__43086;
continue;
} else {
return ret_value__21756__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21755__auto__ = function(state_43052){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21755__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21755__auto____1.call(this,state_43052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21755__auto____0;
cljs$core$async$reduce_$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21755__auto____1;
return cljs$core$async$reduce_$_state_machine__21755__auto__;
})()
;})(switch__21754__auto__,c__21866__auto__))
})();
var state__21868__auto__ = (function (){var statearr_43074 = f__21867__auto__.call(null);
(statearr_43074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21866__auto__);

return statearr_43074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21868__auto__);
});})(c__21866__auto__))
);

return c__21866__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args43087 = [];
var len__19428__auto___43139 = arguments.length;
var i__19429__auto___43140 = (0);
while(true){
if((i__19429__auto___43140 < len__19428__auto___43139)){
args43087.push((arguments[i__19429__auto___43140]));

var G__43141 = (i__19429__auto___43140 + (1));
i__19429__auto___43140 = G__43141;
continue;
} else {
}
break;
}

var G__43089 = args43087.length;
switch (G__43089) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43087.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21866__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21866__auto__){
return (function (){
var f__21867__auto__ = (function (){var switch__21754__auto__ = ((function (c__21866__auto__){
return (function (state_43114){
var state_val_43115 = (state_43114[(1)]);
if((state_val_43115 === (7))){
var inst_43096 = (state_43114[(2)]);
var state_43114__$1 = state_43114;
var statearr_43116_43143 = state_43114__$1;
(statearr_43116_43143[(2)] = inst_43096);

(statearr_43116_43143[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43115 === (1))){
var inst_43090 = cljs.core.seq.call(null,coll);
var inst_43091 = inst_43090;
var state_43114__$1 = (function (){var statearr_43117 = state_43114;
(statearr_43117[(7)] = inst_43091);

return statearr_43117;
})();
var statearr_43118_43144 = state_43114__$1;
(statearr_43118_43144[(2)] = null);

(statearr_43118_43144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43115 === (4))){
var inst_43091 = (state_43114[(7)]);
var inst_43094 = cljs.core.first.call(null,inst_43091);
var state_43114__$1 = state_43114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43114__$1,(7),ch,inst_43094);
} else {
if((state_val_43115 === (13))){
var inst_43108 = (state_43114[(2)]);
var state_43114__$1 = state_43114;
var statearr_43119_43145 = state_43114__$1;
(statearr_43119_43145[(2)] = inst_43108);

(statearr_43119_43145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43115 === (6))){
var inst_43099 = (state_43114[(2)]);
var state_43114__$1 = state_43114;
if(cljs.core.truth_(inst_43099)){
var statearr_43120_43146 = state_43114__$1;
(statearr_43120_43146[(1)] = (8));

} else {
var statearr_43121_43147 = state_43114__$1;
(statearr_43121_43147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43115 === (3))){
var inst_43112 = (state_43114[(2)]);
var state_43114__$1 = state_43114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43114__$1,inst_43112);
} else {
if((state_val_43115 === (12))){
var state_43114__$1 = state_43114;
var statearr_43122_43148 = state_43114__$1;
(statearr_43122_43148[(2)] = null);

(statearr_43122_43148[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43115 === (2))){
var inst_43091 = (state_43114[(7)]);
var state_43114__$1 = state_43114;
if(cljs.core.truth_(inst_43091)){
var statearr_43123_43149 = state_43114__$1;
(statearr_43123_43149[(1)] = (4));

} else {
var statearr_43124_43150 = state_43114__$1;
(statearr_43124_43150[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43115 === (11))){
var inst_43105 = cljs.core.async.close_BANG_.call(null,ch);
var state_43114__$1 = state_43114;
var statearr_43125_43151 = state_43114__$1;
(statearr_43125_43151[(2)] = inst_43105);

(statearr_43125_43151[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43115 === (9))){
var state_43114__$1 = state_43114;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43126_43152 = state_43114__$1;
(statearr_43126_43152[(1)] = (11));

} else {
var statearr_43127_43153 = state_43114__$1;
(statearr_43127_43153[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43115 === (5))){
var inst_43091 = (state_43114[(7)]);
var state_43114__$1 = state_43114;
var statearr_43128_43154 = state_43114__$1;
(statearr_43128_43154[(2)] = inst_43091);

(statearr_43128_43154[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43115 === (10))){
var inst_43110 = (state_43114[(2)]);
var state_43114__$1 = state_43114;
var statearr_43129_43155 = state_43114__$1;
(statearr_43129_43155[(2)] = inst_43110);

(statearr_43129_43155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43115 === (8))){
var inst_43091 = (state_43114[(7)]);
var inst_43101 = cljs.core.next.call(null,inst_43091);
var inst_43091__$1 = inst_43101;
var state_43114__$1 = (function (){var statearr_43130 = state_43114;
(statearr_43130[(7)] = inst_43091__$1);

return statearr_43130;
})();
var statearr_43131_43156 = state_43114__$1;
(statearr_43131_43156[(2)] = null);

(statearr_43131_43156[(1)] = (2));


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
});})(c__21866__auto__))
;
return ((function (switch__21754__auto__,c__21866__auto__){
return (function() {
var cljs$core$async$state_machine__21755__auto__ = null;
var cljs$core$async$state_machine__21755__auto____0 = (function (){
var statearr_43135 = [null,null,null,null,null,null,null,null];
(statearr_43135[(0)] = cljs$core$async$state_machine__21755__auto__);

(statearr_43135[(1)] = (1));

return statearr_43135;
});
var cljs$core$async$state_machine__21755__auto____1 = (function (state_43114){
while(true){
var ret_value__21756__auto__ = (function (){try{while(true){
var result__21757__auto__ = switch__21754__auto__.call(null,state_43114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21757__auto__;
}
break;
}
}catch (e43136){if((e43136 instanceof Object)){
var ex__21758__auto__ = e43136;
var statearr_43137_43157 = state_43114;
(statearr_43137_43157[(5)] = ex__21758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43158 = state_43114;
state_43114 = G__43158;
continue;
} else {
return ret_value__21756__auto__;
}
break;
}
});
cljs$core$async$state_machine__21755__auto__ = function(state_43114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21755__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21755__auto____1.call(this,state_43114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21755__auto____0;
cljs$core$async$state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21755__auto____1;
return cljs$core$async$state_machine__21755__auto__;
})()
;})(switch__21754__auto__,c__21866__auto__))
})();
var state__21868__auto__ = (function (){var statearr_43138 = f__21867__auto__.call(null);
(statearr_43138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21866__auto__);

return statearr_43138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21868__auto__);
});})(c__21866__auto__))
);

return c__21866__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19025__auto__ = (((_ == null))?null:_);
var m__19026__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,_);
} else {
var m__19026__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19026__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,ch);
} else {
var m__19026__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,ch);
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
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m);
} else {
var m__19026__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async43380 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43380 = (function (mult,ch,cs,meta43381){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta43381 = meta43381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_43382,meta43381__$1){
var self__ = this;
var _43382__$1 = this;
return (new cljs.core.async.t_cljs$core$async43380(self__.mult,self__.ch,self__.cs,meta43381__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async43380.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_43382){
var self__ = this;
var _43382__$1 = this;
return self__.meta43381;
});})(cs))
;

cljs.core.async.t_cljs$core$async43380.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async43380.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async43380.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async43380.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async43380.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async43380.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async43380.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta43381","meta43381",-457606102,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async43380.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43380.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43380";

cljs.core.async.t_cljs$core$async43380.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async43380");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async43380 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async43380(mult__$1,ch__$1,cs__$1,meta43381){
return (new cljs.core.async.t_cljs$core$async43380(mult__$1,ch__$1,cs__$1,meta43381));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async43380(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21866__auto___43601 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21866__auto___43601,cs,m,dchan,dctr,done){
return (function (){
var f__21867__auto__ = (function (){var switch__21754__auto__ = ((function (c__21866__auto___43601,cs,m,dchan,dctr,done){
return (function (state_43513){
var state_val_43514 = (state_43513[(1)]);
if((state_val_43514 === (7))){
var inst_43509 = (state_43513[(2)]);
var state_43513__$1 = state_43513;
var statearr_43515_43602 = state_43513__$1;
(statearr_43515_43602[(2)] = inst_43509);

(statearr_43515_43602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (20))){
var inst_43414 = (state_43513[(7)]);
var inst_43424 = cljs.core.first.call(null,inst_43414);
var inst_43425 = cljs.core.nth.call(null,inst_43424,(0),null);
var inst_43426 = cljs.core.nth.call(null,inst_43424,(1),null);
var state_43513__$1 = (function (){var statearr_43516 = state_43513;
(statearr_43516[(8)] = inst_43425);

return statearr_43516;
})();
if(cljs.core.truth_(inst_43426)){
var statearr_43517_43603 = state_43513__$1;
(statearr_43517_43603[(1)] = (22));

} else {
var statearr_43518_43604 = state_43513__$1;
(statearr_43518_43604[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (27))){
var inst_43461 = (state_43513[(9)]);
var inst_43454 = (state_43513[(10)]);
var inst_43385 = (state_43513[(11)]);
var inst_43456 = (state_43513[(12)]);
var inst_43461__$1 = cljs.core._nth.call(null,inst_43454,inst_43456);
var inst_43462 = cljs.core.async.put_BANG_.call(null,inst_43461__$1,inst_43385,done);
var state_43513__$1 = (function (){var statearr_43519 = state_43513;
(statearr_43519[(9)] = inst_43461__$1);

return statearr_43519;
})();
if(cljs.core.truth_(inst_43462)){
var statearr_43520_43605 = state_43513__$1;
(statearr_43520_43605[(1)] = (30));

} else {
var statearr_43521_43606 = state_43513__$1;
(statearr_43521_43606[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (1))){
var state_43513__$1 = state_43513;
var statearr_43522_43607 = state_43513__$1;
(statearr_43522_43607[(2)] = null);

(statearr_43522_43607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (24))){
var inst_43414 = (state_43513[(7)]);
var inst_43431 = (state_43513[(2)]);
var inst_43432 = cljs.core.next.call(null,inst_43414);
var inst_43394 = inst_43432;
var inst_43395 = null;
var inst_43396 = (0);
var inst_43397 = (0);
var state_43513__$1 = (function (){var statearr_43523 = state_43513;
(statearr_43523[(13)] = inst_43431);

(statearr_43523[(14)] = inst_43397);

(statearr_43523[(15)] = inst_43394);

(statearr_43523[(16)] = inst_43396);

(statearr_43523[(17)] = inst_43395);

return statearr_43523;
})();
var statearr_43524_43608 = state_43513__$1;
(statearr_43524_43608[(2)] = null);

(statearr_43524_43608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (39))){
var state_43513__$1 = state_43513;
var statearr_43528_43609 = state_43513__$1;
(statearr_43528_43609[(2)] = null);

(statearr_43528_43609[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (4))){
var inst_43385 = (state_43513[(11)]);
var inst_43385__$1 = (state_43513[(2)]);
var inst_43386 = (inst_43385__$1 == null);
var state_43513__$1 = (function (){var statearr_43529 = state_43513;
(statearr_43529[(11)] = inst_43385__$1);

return statearr_43529;
})();
if(cljs.core.truth_(inst_43386)){
var statearr_43530_43610 = state_43513__$1;
(statearr_43530_43610[(1)] = (5));

} else {
var statearr_43531_43611 = state_43513__$1;
(statearr_43531_43611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (15))){
var inst_43397 = (state_43513[(14)]);
var inst_43394 = (state_43513[(15)]);
var inst_43396 = (state_43513[(16)]);
var inst_43395 = (state_43513[(17)]);
var inst_43410 = (state_43513[(2)]);
var inst_43411 = (inst_43397 + (1));
var tmp43525 = inst_43394;
var tmp43526 = inst_43396;
var tmp43527 = inst_43395;
var inst_43394__$1 = tmp43525;
var inst_43395__$1 = tmp43527;
var inst_43396__$1 = tmp43526;
var inst_43397__$1 = inst_43411;
var state_43513__$1 = (function (){var statearr_43532 = state_43513;
(statearr_43532[(14)] = inst_43397__$1);

(statearr_43532[(15)] = inst_43394__$1);

(statearr_43532[(18)] = inst_43410);

(statearr_43532[(16)] = inst_43396__$1);

(statearr_43532[(17)] = inst_43395__$1);

return statearr_43532;
})();
var statearr_43533_43612 = state_43513__$1;
(statearr_43533_43612[(2)] = null);

(statearr_43533_43612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (21))){
var inst_43435 = (state_43513[(2)]);
var state_43513__$1 = state_43513;
var statearr_43537_43613 = state_43513__$1;
(statearr_43537_43613[(2)] = inst_43435);

(statearr_43537_43613[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (31))){
var inst_43461 = (state_43513[(9)]);
var inst_43465 = done.call(null,null);
var inst_43466 = cljs.core.async.untap_STAR_.call(null,m,inst_43461);
var state_43513__$1 = (function (){var statearr_43538 = state_43513;
(statearr_43538[(19)] = inst_43465);

return statearr_43538;
})();
var statearr_43539_43614 = state_43513__$1;
(statearr_43539_43614[(2)] = inst_43466);

(statearr_43539_43614[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (32))){
var inst_43455 = (state_43513[(20)]);
var inst_43454 = (state_43513[(10)]);
var inst_43453 = (state_43513[(21)]);
var inst_43456 = (state_43513[(12)]);
var inst_43468 = (state_43513[(2)]);
var inst_43469 = (inst_43456 + (1));
var tmp43534 = inst_43455;
var tmp43535 = inst_43454;
var tmp43536 = inst_43453;
var inst_43453__$1 = tmp43536;
var inst_43454__$1 = tmp43535;
var inst_43455__$1 = tmp43534;
var inst_43456__$1 = inst_43469;
var state_43513__$1 = (function (){var statearr_43540 = state_43513;
(statearr_43540[(20)] = inst_43455__$1);

(statearr_43540[(10)] = inst_43454__$1);

(statearr_43540[(22)] = inst_43468);

(statearr_43540[(21)] = inst_43453__$1);

(statearr_43540[(12)] = inst_43456__$1);

return statearr_43540;
})();
var statearr_43541_43615 = state_43513__$1;
(statearr_43541_43615[(2)] = null);

(statearr_43541_43615[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (40))){
var inst_43481 = (state_43513[(23)]);
var inst_43485 = done.call(null,null);
var inst_43486 = cljs.core.async.untap_STAR_.call(null,m,inst_43481);
var state_43513__$1 = (function (){var statearr_43542 = state_43513;
(statearr_43542[(24)] = inst_43485);

return statearr_43542;
})();
var statearr_43543_43616 = state_43513__$1;
(statearr_43543_43616[(2)] = inst_43486);

(statearr_43543_43616[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (33))){
var inst_43472 = (state_43513[(25)]);
var inst_43474 = cljs.core.chunked_seq_QMARK_.call(null,inst_43472);
var state_43513__$1 = state_43513;
if(inst_43474){
var statearr_43544_43617 = state_43513__$1;
(statearr_43544_43617[(1)] = (36));

} else {
var statearr_43545_43618 = state_43513__$1;
(statearr_43545_43618[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (13))){
var inst_43404 = (state_43513[(26)]);
var inst_43407 = cljs.core.async.close_BANG_.call(null,inst_43404);
var state_43513__$1 = state_43513;
var statearr_43546_43619 = state_43513__$1;
(statearr_43546_43619[(2)] = inst_43407);

(statearr_43546_43619[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (22))){
var inst_43425 = (state_43513[(8)]);
var inst_43428 = cljs.core.async.close_BANG_.call(null,inst_43425);
var state_43513__$1 = state_43513;
var statearr_43547_43620 = state_43513__$1;
(statearr_43547_43620[(2)] = inst_43428);

(statearr_43547_43620[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (36))){
var inst_43472 = (state_43513[(25)]);
var inst_43476 = cljs.core.chunk_first.call(null,inst_43472);
var inst_43477 = cljs.core.chunk_rest.call(null,inst_43472);
var inst_43478 = cljs.core.count.call(null,inst_43476);
var inst_43453 = inst_43477;
var inst_43454 = inst_43476;
var inst_43455 = inst_43478;
var inst_43456 = (0);
var state_43513__$1 = (function (){var statearr_43548 = state_43513;
(statearr_43548[(20)] = inst_43455);

(statearr_43548[(10)] = inst_43454);

(statearr_43548[(21)] = inst_43453);

(statearr_43548[(12)] = inst_43456);

return statearr_43548;
})();
var statearr_43549_43621 = state_43513__$1;
(statearr_43549_43621[(2)] = null);

(statearr_43549_43621[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (41))){
var inst_43472 = (state_43513[(25)]);
var inst_43488 = (state_43513[(2)]);
var inst_43489 = cljs.core.next.call(null,inst_43472);
var inst_43453 = inst_43489;
var inst_43454 = null;
var inst_43455 = (0);
var inst_43456 = (0);
var state_43513__$1 = (function (){var statearr_43550 = state_43513;
(statearr_43550[(27)] = inst_43488);

(statearr_43550[(20)] = inst_43455);

(statearr_43550[(10)] = inst_43454);

(statearr_43550[(21)] = inst_43453);

(statearr_43550[(12)] = inst_43456);

return statearr_43550;
})();
var statearr_43551_43622 = state_43513__$1;
(statearr_43551_43622[(2)] = null);

(statearr_43551_43622[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (43))){
var state_43513__$1 = state_43513;
var statearr_43552_43623 = state_43513__$1;
(statearr_43552_43623[(2)] = null);

(statearr_43552_43623[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (29))){
var inst_43497 = (state_43513[(2)]);
var state_43513__$1 = state_43513;
var statearr_43553_43624 = state_43513__$1;
(statearr_43553_43624[(2)] = inst_43497);

(statearr_43553_43624[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (44))){
var inst_43506 = (state_43513[(2)]);
var state_43513__$1 = (function (){var statearr_43554 = state_43513;
(statearr_43554[(28)] = inst_43506);

return statearr_43554;
})();
var statearr_43555_43625 = state_43513__$1;
(statearr_43555_43625[(2)] = null);

(statearr_43555_43625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (6))){
var inst_43445 = (state_43513[(29)]);
var inst_43444 = cljs.core.deref.call(null,cs);
var inst_43445__$1 = cljs.core.keys.call(null,inst_43444);
var inst_43446 = cljs.core.count.call(null,inst_43445__$1);
var inst_43447 = cljs.core.reset_BANG_.call(null,dctr,inst_43446);
var inst_43452 = cljs.core.seq.call(null,inst_43445__$1);
var inst_43453 = inst_43452;
var inst_43454 = null;
var inst_43455 = (0);
var inst_43456 = (0);
var state_43513__$1 = (function (){var statearr_43556 = state_43513;
(statearr_43556[(20)] = inst_43455);

(statearr_43556[(29)] = inst_43445__$1);

(statearr_43556[(10)] = inst_43454);

(statearr_43556[(21)] = inst_43453);

(statearr_43556[(12)] = inst_43456);

(statearr_43556[(30)] = inst_43447);

return statearr_43556;
})();
var statearr_43557_43626 = state_43513__$1;
(statearr_43557_43626[(2)] = null);

(statearr_43557_43626[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (28))){
var inst_43472 = (state_43513[(25)]);
var inst_43453 = (state_43513[(21)]);
var inst_43472__$1 = cljs.core.seq.call(null,inst_43453);
var state_43513__$1 = (function (){var statearr_43558 = state_43513;
(statearr_43558[(25)] = inst_43472__$1);

return statearr_43558;
})();
if(inst_43472__$1){
var statearr_43559_43627 = state_43513__$1;
(statearr_43559_43627[(1)] = (33));

} else {
var statearr_43560_43628 = state_43513__$1;
(statearr_43560_43628[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (25))){
var inst_43455 = (state_43513[(20)]);
var inst_43456 = (state_43513[(12)]);
var inst_43458 = (inst_43456 < inst_43455);
var inst_43459 = inst_43458;
var state_43513__$1 = state_43513;
if(cljs.core.truth_(inst_43459)){
var statearr_43561_43629 = state_43513__$1;
(statearr_43561_43629[(1)] = (27));

} else {
var statearr_43562_43630 = state_43513__$1;
(statearr_43562_43630[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (34))){
var state_43513__$1 = state_43513;
var statearr_43563_43631 = state_43513__$1;
(statearr_43563_43631[(2)] = null);

(statearr_43563_43631[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (17))){
var state_43513__$1 = state_43513;
var statearr_43564_43632 = state_43513__$1;
(statearr_43564_43632[(2)] = null);

(statearr_43564_43632[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (3))){
var inst_43511 = (state_43513[(2)]);
var state_43513__$1 = state_43513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43513__$1,inst_43511);
} else {
if((state_val_43514 === (12))){
var inst_43440 = (state_43513[(2)]);
var state_43513__$1 = state_43513;
var statearr_43565_43633 = state_43513__$1;
(statearr_43565_43633[(2)] = inst_43440);

(statearr_43565_43633[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (2))){
var state_43513__$1 = state_43513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43513__$1,(4),ch);
} else {
if((state_val_43514 === (23))){
var state_43513__$1 = state_43513;
var statearr_43566_43634 = state_43513__$1;
(statearr_43566_43634[(2)] = null);

(statearr_43566_43634[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (35))){
var inst_43495 = (state_43513[(2)]);
var state_43513__$1 = state_43513;
var statearr_43567_43635 = state_43513__$1;
(statearr_43567_43635[(2)] = inst_43495);

(statearr_43567_43635[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (19))){
var inst_43414 = (state_43513[(7)]);
var inst_43418 = cljs.core.chunk_first.call(null,inst_43414);
var inst_43419 = cljs.core.chunk_rest.call(null,inst_43414);
var inst_43420 = cljs.core.count.call(null,inst_43418);
var inst_43394 = inst_43419;
var inst_43395 = inst_43418;
var inst_43396 = inst_43420;
var inst_43397 = (0);
var state_43513__$1 = (function (){var statearr_43568 = state_43513;
(statearr_43568[(14)] = inst_43397);

(statearr_43568[(15)] = inst_43394);

(statearr_43568[(16)] = inst_43396);

(statearr_43568[(17)] = inst_43395);

return statearr_43568;
})();
var statearr_43569_43636 = state_43513__$1;
(statearr_43569_43636[(2)] = null);

(statearr_43569_43636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (11))){
var inst_43394 = (state_43513[(15)]);
var inst_43414 = (state_43513[(7)]);
var inst_43414__$1 = cljs.core.seq.call(null,inst_43394);
var state_43513__$1 = (function (){var statearr_43570 = state_43513;
(statearr_43570[(7)] = inst_43414__$1);

return statearr_43570;
})();
if(inst_43414__$1){
var statearr_43571_43637 = state_43513__$1;
(statearr_43571_43637[(1)] = (16));

} else {
var statearr_43572_43638 = state_43513__$1;
(statearr_43572_43638[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (9))){
var inst_43442 = (state_43513[(2)]);
var state_43513__$1 = state_43513;
var statearr_43573_43639 = state_43513__$1;
(statearr_43573_43639[(2)] = inst_43442);

(statearr_43573_43639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (5))){
var inst_43392 = cljs.core.deref.call(null,cs);
var inst_43393 = cljs.core.seq.call(null,inst_43392);
var inst_43394 = inst_43393;
var inst_43395 = null;
var inst_43396 = (0);
var inst_43397 = (0);
var state_43513__$1 = (function (){var statearr_43574 = state_43513;
(statearr_43574[(14)] = inst_43397);

(statearr_43574[(15)] = inst_43394);

(statearr_43574[(16)] = inst_43396);

(statearr_43574[(17)] = inst_43395);

return statearr_43574;
})();
var statearr_43575_43640 = state_43513__$1;
(statearr_43575_43640[(2)] = null);

(statearr_43575_43640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (14))){
var state_43513__$1 = state_43513;
var statearr_43576_43641 = state_43513__$1;
(statearr_43576_43641[(2)] = null);

(statearr_43576_43641[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (45))){
var inst_43503 = (state_43513[(2)]);
var state_43513__$1 = state_43513;
var statearr_43577_43642 = state_43513__$1;
(statearr_43577_43642[(2)] = inst_43503);

(statearr_43577_43642[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (26))){
var inst_43445 = (state_43513[(29)]);
var inst_43499 = (state_43513[(2)]);
var inst_43500 = cljs.core.seq.call(null,inst_43445);
var state_43513__$1 = (function (){var statearr_43578 = state_43513;
(statearr_43578[(31)] = inst_43499);

return statearr_43578;
})();
if(inst_43500){
var statearr_43579_43643 = state_43513__$1;
(statearr_43579_43643[(1)] = (42));

} else {
var statearr_43580_43644 = state_43513__$1;
(statearr_43580_43644[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (16))){
var inst_43414 = (state_43513[(7)]);
var inst_43416 = cljs.core.chunked_seq_QMARK_.call(null,inst_43414);
var state_43513__$1 = state_43513;
if(inst_43416){
var statearr_43581_43645 = state_43513__$1;
(statearr_43581_43645[(1)] = (19));

} else {
var statearr_43582_43646 = state_43513__$1;
(statearr_43582_43646[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (38))){
var inst_43492 = (state_43513[(2)]);
var state_43513__$1 = state_43513;
var statearr_43583_43647 = state_43513__$1;
(statearr_43583_43647[(2)] = inst_43492);

(statearr_43583_43647[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (30))){
var state_43513__$1 = state_43513;
var statearr_43584_43648 = state_43513__$1;
(statearr_43584_43648[(2)] = null);

(statearr_43584_43648[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (10))){
var inst_43397 = (state_43513[(14)]);
var inst_43395 = (state_43513[(17)]);
var inst_43403 = cljs.core._nth.call(null,inst_43395,inst_43397);
var inst_43404 = cljs.core.nth.call(null,inst_43403,(0),null);
var inst_43405 = cljs.core.nth.call(null,inst_43403,(1),null);
var state_43513__$1 = (function (){var statearr_43585 = state_43513;
(statearr_43585[(26)] = inst_43404);

return statearr_43585;
})();
if(cljs.core.truth_(inst_43405)){
var statearr_43586_43649 = state_43513__$1;
(statearr_43586_43649[(1)] = (13));

} else {
var statearr_43587_43650 = state_43513__$1;
(statearr_43587_43650[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (18))){
var inst_43438 = (state_43513[(2)]);
var state_43513__$1 = state_43513;
var statearr_43588_43651 = state_43513__$1;
(statearr_43588_43651[(2)] = inst_43438);

(statearr_43588_43651[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (42))){
var state_43513__$1 = state_43513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43513__$1,(45),dchan);
} else {
if((state_val_43514 === (37))){
var inst_43472 = (state_43513[(25)]);
var inst_43481 = (state_43513[(23)]);
var inst_43385 = (state_43513[(11)]);
var inst_43481__$1 = cljs.core.first.call(null,inst_43472);
var inst_43482 = cljs.core.async.put_BANG_.call(null,inst_43481__$1,inst_43385,done);
var state_43513__$1 = (function (){var statearr_43589 = state_43513;
(statearr_43589[(23)] = inst_43481__$1);

return statearr_43589;
})();
if(cljs.core.truth_(inst_43482)){
var statearr_43590_43652 = state_43513__$1;
(statearr_43590_43652[(1)] = (39));

} else {
var statearr_43591_43653 = state_43513__$1;
(statearr_43591_43653[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43514 === (8))){
var inst_43397 = (state_43513[(14)]);
var inst_43396 = (state_43513[(16)]);
var inst_43399 = (inst_43397 < inst_43396);
var inst_43400 = inst_43399;
var state_43513__$1 = state_43513;
if(cljs.core.truth_(inst_43400)){
var statearr_43592_43654 = state_43513__$1;
(statearr_43592_43654[(1)] = (10));

} else {
var statearr_43593_43655 = state_43513__$1;
(statearr_43593_43655[(1)] = (11));

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
});})(c__21866__auto___43601,cs,m,dchan,dctr,done))
;
return ((function (switch__21754__auto__,c__21866__auto___43601,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21755__auto__ = null;
var cljs$core$async$mult_$_state_machine__21755__auto____0 = (function (){
var statearr_43597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43597[(0)] = cljs$core$async$mult_$_state_machine__21755__auto__);

(statearr_43597[(1)] = (1));

return statearr_43597;
});
var cljs$core$async$mult_$_state_machine__21755__auto____1 = (function (state_43513){
while(true){
var ret_value__21756__auto__ = (function (){try{while(true){
var result__21757__auto__ = switch__21754__auto__.call(null,state_43513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21757__auto__;
}
break;
}
}catch (e43598){if((e43598 instanceof Object)){
var ex__21758__auto__ = e43598;
var statearr_43599_43656 = state_43513;
(statearr_43599_43656[(5)] = ex__21758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43657 = state_43513;
state_43513 = G__43657;
continue;
} else {
return ret_value__21756__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21755__auto__ = function(state_43513){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21755__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21755__auto____1.call(this,state_43513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21755__auto____0;
cljs$core$async$mult_$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21755__auto____1;
return cljs$core$async$mult_$_state_machine__21755__auto__;
})()
;})(switch__21754__auto__,c__21866__auto___43601,cs,m,dchan,dctr,done))
})();
var state__21868__auto__ = (function (){var statearr_43600 = f__21867__auto__.call(null);
(statearr_43600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21866__auto___43601);

return statearr_43600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21868__auto__);
});})(c__21866__auto___43601,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args43658 = [];
var len__19428__auto___43661 = arguments.length;
var i__19429__auto___43662 = (0);
while(true){
if((i__19429__auto___43662 < len__19428__auto___43661)){
args43658.push((arguments[i__19429__auto___43662]));

var G__43663 = (i__19429__auto___43662 + (1));
i__19429__auto___43662 = G__43663;
continue;
} else {
}
break;
}

var G__43660 = args43658.length;
switch (G__43660) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43658.length)].join('')));

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

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,ch);
} else {
var m__19026__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,ch);
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
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,ch);
} else {
var m__19026__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,ch);
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
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m);
} else {
var m__19026__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m);
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
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,state_map);
} else {
var m__19026__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,state_map);
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
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,mode);
} else {
var m__19026__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19435__auto__ = [];
var len__19428__auto___43675 = arguments.length;
var i__19429__auto___43676 = (0);
while(true){
if((i__19429__auto___43676 < len__19428__auto___43675)){
args__19435__auto__.push((arguments[i__19429__auto___43676]));

var G__43677 = (i__19429__auto___43676 + (1));
i__19429__auto___43676 = G__43677;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((3) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19436__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43669){
var map__43670 = p__43669;
var map__43670__$1 = ((((!((map__43670 == null)))?((((map__43670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43670):map__43670);
var opts = map__43670__$1;
var statearr_43672_43678 = state;
(statearr_43672_43678[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__43670,map__43670__$1,opts){
return (function (val){
var statearr_43673_43679 = state;
(statearr_43673_43679[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__43670,map__43670__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_43674_43680 = state;
(statearr_43674_43680[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43665){
var G__43666 = cljs.core.first.call(null,seq43665);
var seq43665__$1 = cljs.core.next.call(null,seq43665);
var G__43667 = cljs.core.first.call(null,seq43665__$1);
var seq43665__$2 = cljs.core.next.call(null,seq43665__$1);
var G__43668 = cljs.core.first.call(null,seq43665__$2);
var seq43665__$3 = cljs.core.next.call(null,seq43665__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43666,G__43667,G__43668,seq43665__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
if(typeof cljs.core.async.t_cljs$core$async43844 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43844 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43845){
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
this.meta43845 = meta43845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43846,meta43845__$1){
var self__ = this;
var _43846__$1 = this;
return (new cljs.core.async.t_cljs$core$async43844(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43845__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43844.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43846){
var self__ = this;
var _43846__$1 = this;
return self__.meta43845;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43844.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async43844.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43844.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async43844.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43844.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43844.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43844.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43844.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async43844.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43845","meta43845",2061610229,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43844.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43844";

cljs.core.async.t_cljs$core$async43844.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async43844");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async43844 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async43844(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43845){
return (new cljs.core.async.t_cljs$core$async43844(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43845));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async43844(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21866__auto___44007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21866__auto___44007,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21867__auto__ = (function (){var switch__21754__auto__ = ((function (c__21866__auto___44007,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_43944){
var state_val_43945 = (state_43944[(1)]);
if((state_val_43945 === (7))){
var inst_43862 = (state_43944[(2)]);
var state_43944__$1 = state_43944;
var statearr_43946_44008 = state_43944__$1;
(statearr_43946_44008[(2)] = inst_43862);

(statearr_43946_44008[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (20))){
var inst_43874 = (state_43944[(7)]);
var state_43944__$1 = state_43944;
var statearr_43947_44009 = state_43944__$1;
(statearr_43947_44009[(2)] = inst_43874);

(statearr_43947_44009[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (27))){
var state_43944__$1 = state_43944;
var statearr_43948_44010 = state_43944__$1;
(statearr_43948_44010[(2)] = null);

(statearr_43948_44010[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (1))){
var inst_43850 = (state_43944[(8)]);
var inst_43850__$1 = calc_state.call(null);
var inst_43852 = (inst_43850__$1 == null);
var inst_43853 = cljs.core.not.call(null,inst_43852);
var state_43944__$1 = (function (){var statearr_43949 = state_43944;
(statearr_43949[(8)] = inst_43850__$1);

return statearr_43949;
})();
if(inst_43853){
var statearr_43950_44011 = state_43944__$1;
(statearr_43950_44011[(1)] = (2));

} else {
var statearr_43951_44012 = state_43944__$1;
(statearr_43951_44012[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (24))){
var inst_43918 = (state_43944[(9)]);
var inst_43904 = (state_43944[(10)]);
var inst_43897 = (state_43944[(11)]);
var inst_43918__$1 = inst_43897.call(null,inst_43904);
var state_43944__$1 = (function (){var statearr_43952 = state_43944;
(statearr_43952[(9)] = inst_43918__$1);

return statearr_43952;
})();
if(cljs.core.truth_(inst_43918__$1)){
var statearr_43953_44013 = state_43944__$1;
(statearr_43953_44013[(1)] = (29));

} else {
var statearr_43954_44014 = state_43944__$1;
(statearr_43954_44014[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (4))){
var inst_43865 = (state_43944[(2)]);
var state_43944__$1 = state_43944;
if(cljs.core.truth_(inst_43865)){
var statearr_43955_44015 = state_43944__$1;
(statearr_43955_44015[(1)] = (8));

} else {
var statearr_43956_44016 = state_43944__$1;
(statearr_43956_44016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (15))){
var inst_43891 = (state_43944[(2)]);
var state_43944__$1 = state_43944;
if(cljs.core.truth_(inst_43891)){
var statearr_43957_44017 = state_43944__$1;
(statearr_43957_44017[(1)] = (19));

} else {
var statearr_43958_44018 = state_43944__$1;
(statearr_43958_44018[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (21))){
var inst_43896 = (state_43944[(12)]);
var inst_43896__$1 = (state_43944[(2)]);
var inst_43897 = cljs.core.get.call(null,inst_43896__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43898 = cljs.core.get.call(null,inst_43896__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43899 = cljs.core.get.call(null,inst_43896__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43944__$1 = (function (){var statearr_43959 = state_43944;
(statearr_43959[(12)] = inst_43896__$1);

(statearr_43959[(13)] = inst_43898);

(statearr_43959[(11)] = inst_43897);

return statearr_43959;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_43944__$1,(22),inst_43899);
} else {
if((state_val_43945 === (31))){
var inst_43926 = (state_43944[(2)]);
var state_43944__$1 = state_43944;
if(cljs.core.truth_(inst_43926)){
var statearr_43960_44019 = state_43944__$1;
(statearr_43960_44019[(1)] = (32));

} else {
var statearr_43961_44020 = state_43944__$1;
(statearr_43961_44020[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (32))){
var inst_43903 = (state_43944[(14)]);
var state_43944__$1 = state_43944;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43944__$1,(35),out,inst_43903);
} else {
if((state_val_43945 === (33))){
var inst_43896 = (state_43944[(12)]);
var inst_43874 = inst_43896;
var state_43944__$1 = (function (){var statearr_43962 = state_43944;
(statearr_43962[(7)] = inst_43874);

return statearr_43962;
})();
var statearr_43963_44021 = state_43944__$1;
(statearr_43963_44021[(2)] = null);

(statearr_43963_44021[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (13))){
var inst_43874 = (state_43944[(7)]);
var inst_43881 = inst_43874.cljs$lang$protocol_mask$partition0$;
var inst_43882 = (inst_43881 & (64));
var inst_43883 = inst_43874.cljs$core$ISeq$;
var inst_43884 = (inst_43882) || (inst_43883);
var state_43944__$1 = state_43944;
if(cljs.core.truth_(inst_43884)){
var statearr_43964_44022 = state_43944__$1;
(statearr_43964_44022[(1)] = (16));

} else {
var statearr_43965_44023 = state_43944__$1;
(statearr_43965_44023[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (22))){
var inst_43903 = (state_43944[(14)]);
var inst_43904 = (state_43944[(10)]);
var inst_43902 = (state_43944[(2)]);
var inst_43903__$1 = cljs.core.nth.call(null,inst_43902,(0),null);
var inst_43904__$1 = cljs.core.nth.call(null,inst_43902,(1),null);
var inst_43905 = (inst_43903__$1 == null);
var inst_43906 = cljs.core._EQ_.call(null,inst_43904__$1,change);
var inst_43907 = (inst_43905) || (inst_43906);
var state_43944__$1 = (function (){var statearr_43966 = state_43944;
(statearr_43966[(14)] = inst_43903__$1);

(statearr_43966[(10)] = inst_43904__$1);

return statearr_43966;
})();
if(cljs.core.truth_(inst_43907)){
var statearr_43967_44024 = state_43944__$1;
(statearr_43967_44024[(1)] = (23));

} else {
var statearr_43968_44025 = state_43944__$1;
(statearr_43968_44025[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (36))){
var inst_43896 = (state_43944[(12)]);
var inst_43874 = inst_43896;
var state_43944__$1 = (function (){var statearr_43969 = state_43944;
(statearr_43969[(7)] = inst_43874);

return statearr_43969;
})();
var statearr_43970_44026 = state_43944__$1;
(statearr_43970_44026[(2)] = null);

(statearr_43970_44026[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (29))){
var inst_43918 = (state_43944[(9)]);
var state_43944__$1 = state_43944;
var statearr_43971_44027 = state_43944__$1;
(statearr_43971_44027[(2)] = inst_43918);

(statearr_43971_44027[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (6))){
var state_43944__$1 = state_43944;
var statearr_43972_44028 = state_43944__$1;
(statearr_43972_44028[(2)] = false);

(statearr_43972_44028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (28))){
var inst_43914 = (state_43944[(2)]);
var inst_43915 = calc_state.call(null);
var inst_43874 = inst_43915;
var state_43944__$1 = (function (){var statearr_43973 = state_43944;
(statearr_43973[(15)] = inst_43914);

(statearr_43973[(7)] = inst_43874);

return statearr_43973;
})();
var statearr_43974_44029 = state_43944__$1;
(statearr_43974_44029[(2)] = null);

(statearr_43974_44029[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (25))){
var inst_43940 = (state_43944[(2)]);
var state_43944__$1 = state_43944;
var statearr_43975_44030 = state_43944__$1;
(statearr_43975_44030[(2)] = inst_43940);

(statearr_43975_44030[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (34))){
var inst_43938 = (state_43944[(2)]);
var state_43944__$1 = state_43944;
var statearr_43976_44031 = state_43944__$1;
(statearr_43976_44031[(2)] = inst_43938);

(statearr_43976_44031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (17))){
var state_43944__$1 = state_43944;
var statearr_43977_44032 = state_43944__$1;
(statearr_43977_44032[(2)] = false);

(statearr_43977_44032[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (3))){
var state_43944__$1 = state_43944;
var statearr_43978_44033 = state_43944__$1;
(statearr_43978_44033[(2)] = false);

(statearr_43978_44033[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (12))){
var inst_43942 = (state_43944[(2)]);
var state_43944__$1 = state_43944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43944__$1,inst_43942);
} else {
if((state_val_43945 === (2))){
var inst_43850 = (state_43944[(8)]);
var inst_43855 = inst_43850.cljs$lang$protocol_mask$partition0$;
var inst_43856 = (inst_43855 & (64));
var inst_43857 = inst_43850.cljs$core$ISeq$;
var inst_43858 = (inst_43856) || (inst_43857);
var state_43944__$1 = state_43944;
if(cljs.core.truth_(inst_43858)){
var statearr_43979_44034 = state_43944__$1;
(statearr_43979_44034[(1)] = (5));

} else {
var statearr_43980_44035 = state_43944__$1;
(statearr_43980_44035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (23))){
var inst_43903 = (state_43944[(14)]);
var inst_43909 = (inst_43903 == null);
var state_43944__$1 = state_43944;
if(cljs.core.truth_(inst_43909)){
var statearr_43981_44036 = state_43944__$1;
(statearr_43981_44036[(1)] = (26));

} else {
var statearr_43982_44037 = state_43944__$1;
(statearr_43982_44037[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (35))){
var inst_43929 = (state_43944[(2)]);
var state_43944__$1 = state_43944;
if(cljs.core.truth_(inst_43929)){
var statearr_43983_44038 = state_43944__$1;
(statearr_43983_44038[(1)] = (36));

} else {
var statearr_43984_44039 = state_43944__$1;
(statearr_43984_44039[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (19))){
var inst_43874 = (state_43944[(7)]);
var inst_43893 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43874);
var state_43944__$1 = state_43944;
var statearr_43985_44040 = state_43944__$1;
(statearr_43985_44040[(2)] = inst_43893);

(statearr_43985_44040[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (11))){
var inst_43874 = (state_43944[(7)]);
var inst_43878 = (inst_43874 == null);
var inst_43879 = cljs.core.not.call(null,inst_43878);
var state_43944__$1 = state_43944;
if(inst_43879){
var statearr_43986_44041 = state_43944__$1;
(statearr_43986_44041[(1)] = (13));

} else {
var statearr_43987_44042 = state_43944__$1;
(statearr_43987_44042[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (9))){
var inst_43850 = (state_43944[(8)]);
var state_43944__$1 = state_43944;
var statearr_43988_44043 = state_43944__$1;
(statearr_43988_44043[(2)] = inst_43850);

(statearr_43988_44043[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (5))){
var state_43944__$1 = state_43944;
var statearr_43989_44044 = state_43944__$1;
(statearr_43989_44044[(2)] = true);

(statearr_43989_44044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (14))){
var state_43944__$1 = state_43944;
var statearr_43990_44045 = state_43944__$1;
(statearr_43990_44045[(2)] = false);

(statearr_43990_44045[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (26))){
var inst_43904 = (state_43944[(10)]);
var inst_43911 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_43904);
var state_43944__$1 = state_43944;
var statearr_43991_44046 = state_43944__$1;
(statearr_43991_44046[(2)] = inst_43911);

(statearr_43991_44046[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (16))){
var state_43944__$1 = state_43944;
var statearr_43992_44047 = state_43944__$1;
(statearr_43992_44047[(2)] = true);

(statearr_43992_44047[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (38))){
var inst_43934 = (state_43944[(2)]);
var state_43944__$1 = state_43944;
var statearr_43993_44048 = state_43944__$1;
(statearr_43993_44048[(2)] = inst_43934);

(statearr_43993_44048[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (30))){
var inst_43898 = (state_43944[(13)]);
var inst_43904 = (state_43944[(10)]);
var inst_43897 = (state_43944[(11)]);
var inst_43921 = cljs.core.empty_QMARK_.call(null,inst_43897);
var inst_43922 = inst_43898.call(null,inst_43904);
var inst_43923 = cljs.core.not.call(null,inst_43922);
var inst_43924 = (inst_43921) && (inst_43923);
var state_43944__$1 = state_43944;
var statearr_43994_44049 = state_43944__$1;
(statearr_43994_44049[(2)] = inst_43924);

(statearr_43994_44049[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (10))){
var inst_43850 = (state_43944[(8)]);
var inst_43870 = (state_43944[(2)]);
var inst_43871 = cljs.core.get.call(null,inst_43870,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43872 = cljs.core.get.call(null,inst_43870,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43873 = cljs.core.get.call(null,inst_43870,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43874 = inst_43850;
var state_43944__$1 = (function (){var statearr_43995 = state_43944;
(statearr_43995[(16)] = inst_43872);

(statearr_43995[(17)] = inst_43871);

(statearr_43995[(18)] = inst_43873);

(statearr_43995[(7)] = inst_43874);

return statearr_43995;
})();
var statearr_43996_44050 = state_43944__$1;
(statearr_43996_44050[(2)] = null);

(statearr_43996_44050[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (18))){
var inst_43888 = (state_43944[(2)]);
var state_43944__$1 = state_43944;
var statearr_43997_44051 = state_43944__$1;
(statearr_43997_44051[(2)] = inst_43888);

(statearr_43997_44051[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (37))){
var state_43944__$1 = state_43944;
var statearr_43998_44052 = state_43944__$1;
(statearr_43998_44052[(2)] = null);

(statearr_43998_44052[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (8))){
var inst_43850 = (state_43944[(8)]);
var inst_43867 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43850);
var state_43944__$1 = state_43944;
var statearr_43999_44053 = state_43944__$1;
(statearr_43999_44053[(2)] = inst_43867);

(statearr_43999_44053[(1)] = (10));


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
});})(c__21866__auto___44007,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21754__auto__,c__21866__auto___44007,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21755__auto__ = null;
var cljs$core$async$mix_$_state_machine__21755__auto____0 = (function (){
var statearr_44003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44003[(0)] = cljs$core$async$mix_$_state_machine__21755__auto__);

(statearr_44003[(1)] = (1));

return statearr_44003;
});
var cljs$core$async$mix_$_state_machine__21755__auto____1 = (function (state_43944){
while(true){
var ret_value__21756__auto__ = (function (){try{while(true){
var result__21757__auto__ = switch__21754__auto__.call(null,state_43944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21757__auto__;
}
break;
}
}catch (e44004){if((e44004 instanceof Object)){
var ex__21758__auto__ = e44004;
var statearr_44005_44054 = state_43944;
(statearr_44005_44054[(5)] = ex__21758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44055 = state_43944;
state_43944 = G__44055;
continue;
} else {
return ret_value__21756__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21755__auto__ = function(state_43944){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21755__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21755__auto____1.call(this,state_43944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21755__auto____0;
cljs$core$async$mix_$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21755__auto____1;
return cljs$core$async$mix_$_state_machine__21755__auto__;
})()
;})(switch__21754__auto__,c__21866__auto___44007,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21868__auto__ = (function (){var statearr_44006 = f__21867__auto__.call(null);
(statearr_44006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21866__auto___44007);

return statearr_44006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21868__auto__);
});})(c__21866__auto___44007,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
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

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19025__auto__ = (((p == null))?null:p);
var m__19026__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19026__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__19025__auto__ = (((p == null))?null:p);
var m__19026__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,p,v,ch);
} else {
var m__19026__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args44056 = [];
var len__19428__auto___44059 = arguments.length;
var i__19429__auto___44060 = (0);
while(true){
if((i__19429__auto___44060 < len__19428__auto___44059)){
args44056.push((arguments[i__19429__auto___44060]));

var G__44061 = (i__19429__auto___44060 + (1));
i__19429__auto___44060 = G__44061;
continue;
} else {
}
break;
}

var G__44058 = args44056.length;
switch (G__44058) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44056.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19025__auto__ = (((p == null))?null:p);
var m__19026__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,p);
} else {
var m__19026__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,p);
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
var x__19025__auto__ = (((p == null))?null:p);
var m__19026__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,p,v);
} else {
var m__19026__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args44064 = [];
var len__19428__auto___44189 = arguments.length;
var i__19429__auto___44190 = (0);
while(true){
if((i__19429__auto___44190 < len__19428__auto___44189)){
args44064.push((arguments[i__19429__auto___44190]));

var G__44191 = (i__19429__auto___44190 + (1));
i__19429__auto___44190 = G__44191;
continue;
} else {
}
break;
}

var G__44066 = args44064.length;
switch (G__44066) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44064.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18370__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18370__auto__,mults){
return (function (p1__44063_SHARP_){
if(cljs.core.truth_(p1__44063_SHARP_.call(null,topic))){
return p1__44063_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__44063_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18370__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async44067 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44067 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44068){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44068 = meta44068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_44069,meta44068__$1){
var self__ = this;
var _44069__$1 = this;
return (new cljs.core.async.t_cljs$core$async44067(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44068__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44067.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_44069){
var self__ = this;
var _44069__$1 = this;
return self__.meta44068;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44067.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async44067.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44067.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async44067.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44067.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44067.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44067.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44067.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44068","meta44068",388953818,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44067.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44067.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44067";

cljs.core.async.t_cljs$core$async44067.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async44067");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async44067 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async44067(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44068){
return (new cljs.core.async.t_cljs$core$async44067(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44068));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async44067(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21866__auto___44193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21866__auto___44193,mults,ensure_mult,p){
return (function (){
var f__21867__auto__ = (function (){var switch__21754__auto__ = ((function (c__21866__auto___44193,mults,ensure_mult,p){
return (function (state_44141){
var state_val_44142 = (state_44141[(1)]);
if((state_val_44142 === (7))){
var inst_44137 = (state_44141[(2)]);
var state_44141__$1 = state_44141;
var statearr_44143_44194 = state_44141__$1;
(statearr_44143_44194[(2)] = inst_44137);

(statearr_44143_44194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44142 === (20))){
var state_44141__$1 = state_44141;
var statearr_44144_44195 = state_44141__$1;
(statearr_44144_44195[(2)] = null);

(statearr_44144_44195[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44142 === (1))){
var state_44141__$1 = state_44141;
var statearr_44145_44196 = state_44141__$1;
(statearr_44145_44196[(2)] = null);

(statearr_44145_44196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44142 === (24))){
var inst_44120 = (state_44141[(7)]);
var inst_44129 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_44120);
var state_44141__$1 = state_44141;
var statearr_44146_44197 = state_44141__$1;
(statearr_44146_44197[(2)] = inst_44129);

(statearr_44146_44197[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44142 === (4))){
var inst_44072 = (state_44141[(8)]);
var inst_44072__$1 = (state_44141[(2)]);
var inst_44073 = (inst_44072__$1 == null);
var state_44141__$1 = (function (){var statearr_44147 = state_44141;
(statearr_44147[(8)] = inst_44072__$1);

return statearr_44147;
})();
if(cljs.core.truth_(inst_44073)){
var statearr_44148_44198 = state_44141__$1;
(statearr_44148_44198[(1)] = (5));

} else {
var statearr_44149_44199 = state_44141__$1;
(statearr_44149_44199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44142 === (15))){
var inst_44114 = (state_44141[(2)]);
var state_44141__$1 = state_44141;
var statearr_44150_44200 = state_44141__$1;
(statearr_44150_44200[(2)] = inst_44114);

(statearr_44150_44200[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44142 === (21))){
var inst_44134 = (state_44141[(2)]);
var state_44141__$1 = (function (){var statearr_44151 = state_44141;
(statearr_44151[(9)] = inst_44134);

return statearr_44151;
})();
var statearr_44152_44201 = state_44141__$1;
(statearr_44152_44201[(2)] = null);

(statearr_44152_44201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44142 === (13))){
var inst_44096 = (state_44141[(10)]);
var inst_44098 = cljs.core.chunked_seq_QMARK_.call(null,inst_44096);
var state_44141__$1 = state_44141;
if(inst_44098){
var statearr_44153_44202 = state_44141__$1;
(statearr_44153_44202[(1)] = (16));

} else {
var statearr_44154_44203 = state_44141__$1;
(statearr_44154_44203[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44142 === (22))){
var inst_44126 = (state_44141[(2)]);
var state_44141__$1 = state_44141;
if(cljs.core.truth_(inst_44126)){
var statearr_44155_44204 = state_44141__$1;
(statearr_44155_44204[(1)] = (23));

} else {
var statearr_44156_44205 = state_44141__$1;
(statearr_44156_44205[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44142 === (6))){
var inst_44122 = (state_44141[(11)]);
var inst_44072 = (state_44141[(8)]);
var inst_44120 = (state_44141[(7)]);
var inst_44120__$1 = topic_fn.call(null,inst_44072);
var inst_44121 = cljs.core.deref.call(null,mults);
var inst_44122__$1 = cljs.core.get.call(null,inst_44121,inst_44120__$1);
var state_44141__$1 = (function (){var statearr_44157 = state_44141;
(statearr_44157[(11)] = inst_44122__$1);

(statearr_44157[(7)] = inst_44120__$1);

return statearr_44157;
})();
if(cljs.core.truth_(inst_44122__$1)){
var statearr_44158_44206 = state_44141__$1;
(statearr_44158_44206[(1)] = (19));

} else {
var statearr_44159_44207 = state_44141__$1;
(statearr_44159_44207[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44142 === (25))){
var inst_44131 = (state_44141[(2)]);
var state_44141__$1 = state_44141;
var statearr_44160_44208 = state_44141__$1;
(statearr_44160_44208[(2)] = inst_44131);

(statearr_44160_44208[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44142 === (17))){
var inst_44096 = (state_44141[(10)]);
var inst_44105 = cljs.core.first.call(null,inst_44096);
var inst_44106 = cljs.core.async.muxch_STAR_.call(null,inst_44105);
var inst_44107 = cljs.core.async.close_BANG_.call(null,inst_44106);
var inst_44108 = cljs.core.next.call(null,inst_44096);
var inst_44082 = inst_44108;
var inst_44083 = null;
var inst_44084 = (0);
var inst_44085 = (0);
var state_44141__$1 = (function (){var statearr_44161 = state_44141;
(statearr_44161[(12)] = inst_44082);

(statearr_44161[(13)] = inst_44107);

(statearr_44161[(14)] = inst_44083);

(statearr_44161[(15)] = inst_44084);

(statearr_44161[(16)] = inst_44085);

return statearr_44161;
})();
var statearr_44162_44209 = state_44141__$1;
(statearr_44162_44209[(2)] = null);

(statearr_44162_44209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44142 === (3))){
var inst_44139 = (state_44141[(2)]);
var state_44141__$1 = state_44141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44141__$1,inst_44139);
} else {
if((state_val_44142 === (12))){
var inst_44116 = (state_44141[(2)]);
var state_44141__$1 = state_44141;
var statearr_44163_44210 = state_44141__$1;
(statearr_44163_44210[(2)] = inst_44116);

(statearr_44163_44210[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44142 === (2))){
var state_44141__$1 = state_44141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44141__$1,(4),ch);
} else {
if((state_val_44142 === (23))){
var state_44141__$1 = state_44141;
var statearr_44164_44211 = state_44141__$1;
(statearr_44164_44211[(2)] = null);

(statearr_44164_44211[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44142 === (19))){
var inst_44122 = (state_44141[(11)]);
var inst_44072 = (state_44141[(8)]);
var inst_44124 = cljs.core.async.muxch_STAR_.call(null,inst_44122);
var state_44141__$1 = state_44141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44141__$1,(22),inst_44124,inst_44072);
} else {
if((state_val_44142 === (11))){
var inst_44082 = (state_44141[(12)]);
var inst_44096 = (state_44141[(10)]);
var inst_44096__$1 = cljs.core.seq.call(null,inst_44082);
var state_44141__$1 = (function (){var statearr_44165 = state_44141;
(statearr_44165[(10)] = inst_44096__$1);

return statearr_44165;
})();
if(inst_44096__$1){
var statearr_44166_44212 = state_44141__$1;
(statearr_44166_44212[(1)] = (13));

} else {
var statearr_44167_44213 = state_44141__$1;
(statearr_44167_44213[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44142 === (9))){
var inst_44118 = (state_44141[(2)]);
var state_44141__$1 = state_44141;
var statearr_44168_44214 = state_44141__$1;
(statearr_44168_44214[(2)] = inst_44118);

(statearr_44168_44214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44142 === (5))){
var inst_44079 = cljs.core.deref.call(null,mults);
var inst_44080 = cljs.core.vals.call(null,inst_44079);
var inst_44081 = cljs.core.seq.call(null,inst_44080);
var inst_44082 = inst_44081;
var inst_44083 = null;
var inst_44084 = (0);
var inst_44085 = (0);
var state_44141__$1 = (function (){var statearr_44169 = state_44141;
(statearr_44169[(12)] = inst_44082);

(statearr_44169[(14)] = inst_44083);

(statearr_44169[(15)] = inst_44084);

(statearr_44169[(16)] = inst_44085);

return statearr_44169;
})();
var statearr_44170_44215 = state_44141__$1;
(statearr_44170_44215[(2)] = null);

(statearr_44170_44215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44142 === (14))){
var state_44141__$1 = state_44141;
var statearr_44174_44216 = state_44141__$1;
(statearr_44174_44216[(2)] = null);

(statearr_44174_44216[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44142 === (16))){
var inst_44096 = (state_44141[(10)]);
var inst_44100 = cljs.core.chunk_first.call(null,inst_44096);
var inst_44101 = cljs.core.chunk_rest.call(null,inst_44096);
var inst_44102 = cljs.core.count.call(null,inst_44100);
var inst_44082 = inst_44101;
var inst_44083 = inst_44100;
var inst_44084 = inst_44102;
var inst_44085 = (0);
var state_44141__$1 = (function (){var statearr_44175 = state_44141;
(statearr_44175[(12)] = inst_44082);

(statearr_44175[(14)] = inst_44083);

(statearr_44175[(15)] = inst_44084);

(statearr_44175[(16)] = inst_44085);

return statearr_44175;
})();
var statearr_44176_44217 = state_44141__$1;
(statearr_44176_44217[(2)] = null);

(statearr_44176_44217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44142 === (10))){
var inst_44082 = (state_44141[(12)]);
var inst_44083 = (state_44141[(14)]);
var inst_44084 = (state_44141[(15)]);
var inst_44085 = (state_44141[(16)]);
var inst_44090 = cljs.core._nth.call(null,inst_44083,inst_44085);
var inst_44091 = cljs.core.async.muxch_STAR_.call(null,inst_44090);
var inst_44092 = cljs.core.async.close_BANG_.call(null,inst_44091);
var inst_44093 = (inst_44085 + (1));
var tmp44171 = inst_44082;
var tmp44172 = inst_44083;
var tmp44173 = inst_44084;
var inst_44082__$1 = tmp44171;
var inst_44083__$1 = tmp44172;
var inst_44084__$1 = tmp44173;
var inst_44085__$1 = inst_44093;
var state_44141__$1 = (function (){var statearr_44177 = state_44141;
(statearr_44177[(12)] = inst_44082__$1);

(statearr_44177[(17)] = inst_44092);

(statearr_44177[(14)] = inst_44083__$1);

(statearr_44177[(15)] = inst_44084__$1);

(statearr_44177[(16)] = inst_44085__$1);

return statearr_44177;
})();
var statearr_44178_44218 = state_44141__$1;
(statearr_44178_44218[(2)] = null);

(statearr_44178_44218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44142 === (18))){
var inst_44111 = (state_44141[(2)]);
var state_44141__$1 = state_44141;
var statearr_44179_44219 = state_44141__$1;
(statearr_44179_44219[(2)] = inst_44111);

(statearr_44179_44219[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44142 === (8))){
var inst_44084 = (state_44141[(15)]);
var inst_44085 = (state_44141[(16)]);
var inst_44087 = (inst_44085 < inst_44084);
var inst_44088 = inst_44087;
var state_44141__$1 = state_44141;
if(cljs.core.truth_(inst_44088)){
var statearr_44180_44220 = state_44141__$1;
(statearr_44180_44220[(1)] = (10));

} else {
var statearr_44181_44221 = state_44141__$1;
(statearr_44181_44221[(1)] = (11));

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
});})(c__21866__auto___44193,mults,ensure_mult,p))
;
return ((function (switch__21754__auto__,c__21866__auto___44193,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21755__auto__ = null;
var cljs$core$async$state_machine__21755__auto____0 = (function (){
var statearr_44185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44185[(0)] = cljs$core$async$state_machine__21755__auto__);

(statearr_44185[(1)] = (1));

return statearr_44185;
});
var cljs$core$async$state_machine__21755__auto____1 = (function (state_44141){
while(true){
var ret_value__21756__auto__ = (function (){try{while(true){
var result__21757__auto__ = switch__21754__auto__.call(null,state_44141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21757__auto__;
}
break;
}
}catch (e44186){if((e44186 instanceof Object)){
var ex__21758__auto__ = e44186;
var statearr_44187_44222 = state_44141;
(statearr_44187_44222[(5)] = ex__21758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44223 = state_44141;
state_44141 = G__44223;
continue;
} else {
return ret_value__21756__auto__;
}
break;
}
});
cljs$core$async$state_machine__21755__auto__ = function(state_44141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21755__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21755__auto____1.call(this,state_44141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21755__auto____0;
cljs$core$async$state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21755__auto____1;
return cljs$core$async$state_machine__21755__auto__;
})()
;})(switch__21754__auto__,c__21866__auto___44193,mults,ensure_mult,p))
})();
var state__21868__auto__ = (function (){var statearr_44188 = f__21867__auto__.call(null);
(statearr_44188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21866__auto___44193);

return statearr_44188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21868__auto__);
});})(c__21866__auto___44193,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args44224 = [];
var len__19428__auto___44227 = arguments.length;
var i__19429__auto___44228 = (0);
while(true){
if((i__19429__auto___44228 < len__19428__auto___44227)){
args44224.push((arguments[i__19429__auto___44228]));

var G__44229 = (i__19429__auto___44228 + (1));
i__19429__auto___44228 = G__44229;
continue;
} else {
}
break;
}

var G__44226 = args44224.length;
switch (G__44226) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44224.length)].join('')));

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
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args44231 = [];
var len__19428__auto___44234 = arguments.length;
var i__19429__auto___44235 = (0);
while(true){
if((i__19429__auto___44235 < len__19428__auto___44234)){
args44231.push((arguments[i__19429__auto___44235]));

var G__44236 = (i__19429__auto___44235 + (1));
i__19429__auto___44235 = G__44236;
continue;
} else {
}
break;
}

var G__44233 = args44231.length;
switch (G__44233) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44231.length)].join('')));

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
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args44238 = [];
var len__19428__auto___44309 = arguments.length;
var i__19429__auto___44310 = (0);
while(true){
if((i__19429__auto___44310 < len__19428__auto___44309)){
args44238.push((arguments[i__19429__auto___44310]));

var G__44311 = (i__19429__auto___44310 + (1));
i__19429__auto___44310 = G__44311;
continue;
} else {
}
break;
}

var G__44240 = args44238.length;
switch (G__44240) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44238.length)].join('')));

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
var c__21866__auto___44313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21866__auto___44313,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21867__auto__ = (function (){var switch__21754__auto__ = ((function (c__21866__auto___44313,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_44279){
var state_val_44280 = (state_44279[(1)]);
if((state_val_44280 === (7))){
var state_44279__$1 = state_44279;
var statearr_44281_44314 = state_44279__$1;
(statearr_44281_44314[(2)] = null);

(statearr_44281_44314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44280 === (1))){
var state_44279__$1 = state_44279;
var statearr_44282_44315 = state_44279__$1;
(statearr_44282_44315[(2)] = null);

(statearr_44282_44315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44280 === (4))){
var inst_44243 = (state_44279[(7)]);
var inst_44245 = (inst_44243 < cnt);
var state_44279__$1 = state_44279;
if(cljs.core.truth_(inst_44245)){
var statearr_44283_44316 = state_44279__$1;
(statearr_44283_44316[(1)] = (6));

} else {
var statearr_44284_44317 = state_44279__$1;
(statearr_44284_44317[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44280 === (15))){
var inst_44275 = (state_44279[(2)]);
var state_44279__$1 = state_44279;
var statearr_44285_44318 = state_44279__$1;
(statearr_44285_44318[(2)] = inst_44275);

(statearr_44285_44318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44280 === (13))){
var inst_44268 = cljs.core.async.close_BANG_.call(null,out);
var state_44279__$1 = state_44279;
var statearr_44286_44319 = state_44279__$1;
(statearr_44286_44319[(2)] = inst_44268);

(statearr_44286_44319[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44280 === (6))){
var state_44279__$1 = state_44279;
var statearr_44287_44320 = state_44279__$1;
(statearr_44287_44320[(2)] = null);

(statearr_44287_44320[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44280 === (3))){
var inst_44277 = (state_44279[(2)]);
var state_44279__$1 = state_44279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44279__$1,inst_44277);
} else {
if((state_val_44280 === (12))){
var inst_44265 = (state_44279[(8)]);
var inst_44265__$1 = (state_44279[(2)]);
var inst_44266 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_44265__$1);
var state_44279__$1 = (function (){var statearr_44288 = state_44279;
(statearr_44288[(8)] = inst_44265__$1);

return statearr_44288;
})();
if(cljs.core.truth_(inst_44266)){
var statearr_44289_44321 = state_44279__$1;
(statearr_44289_44321[(1)] = (13));

} else {
var statearr_44290_44322 = state_44279__$1;
(statearr_44290_44322[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44280 === (2))){
var inst_44242 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_44243 = (0);
var state_44279__$1 = (function (){var statearr_44291 = state_44279;
(statearr_44291[(9)] = inst_44242);

(statearr_44291[(7)] = inst_44243);

return statearr_44291;
})();
var statearr_44292_44323 = state_44279__$1;
(statearr_44292_44323[(2)] = null);

(statearr_44292_44323[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44280 === (11))){
var inst_44243 = (state_44279[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44279,(10),Object,null,(9));
var inst_44252 = chs__$1.call(null,inst_44243);
var inst_44253 = done.call(null,inst_44243);
var inst_44254 = cljs.core.async.take_BANG_.call(null,inst_44252,inst_44253);
var state_44279__$1 = state_44279;
var statearr_44293_44324 = state_44279__$1;
(statearr_44293_44324[(2)] = inst_44254);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44279__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44280 === (9))){
var inst_44243 = (state_44279[(7)]);
var inst_44256 = (state_44279[(2)]);
var inst_44257 = (inst_44243 + (1));
var inst_44243__$1 = inst_44257;
var state_44279__$1 = (function (){var statearr_44294 = state_44279;
(statearr_44294[(7)] = inst_44243__$1);

(statearr_44294[(10)] = inst_44256);

return statearr_44294;
})();
var statearr_44295_44325 = state_44279__$1;
(statearr_44295_44325[(2)] = null);

(statearr_44295_44325[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44280 === (5))){
var inst_44263 = (state_44279[(2)]);
var state_44279__$1 = (function (){var statearr_44296 = state_44279;
(statearr_44296[(11)] = inst_44263);

return statearr_44296;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44279__$1,(12),dchan);
} else {
if((state_val_44280 === (14))){
var inst_44265 = (state_44279[(8)]);
var inst_44270 = cljs.core.apply.call(null,f,inst_44265);
var state_44279__$1 = state_44279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44279__$1,(16),out,inst_44270);
} else {
if((state_val_44280 === (16))){
var inst_44272 = (state_44279[(2)]);
var state_44279__$1 = (function (){var statearr_44297 = state_44279;
(statearr_44297[(12)] = inst_44272);

return statearr_44297;
})();
var statearr_44298_44326 = state_44279__$1;
(statearr_44298_44326[(2)] = null);

(statearr_44298_44326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44280 === (10))){
var inst_44247 = (state_44279[(2)]);
var inst_44248 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_44279__$1 = (function (){var statearr_44299 = state_44279;
(statearr_44299[(13)] = inst_44247);

return statearr_44299;
})();
var statearr_44300_44327 = state_44279__$1;
(statearr_44300_44327[(2)] = inst_44248);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44279__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44280 === (8))){
var inst_44261 = (state_44279[(2)]);
var state_44279__$1 = state_44279;
var statearr_44301_44328 = state_44279__$1;
(statearr_44301_44328[(2)] = inst_44261);

(statearr_44301_44328[(1)] = (5));


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
});})(c__21866__auto___44313,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21754__auto__,c__21866__auto___44313,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21755__auto__ = null;
var cljs$core$async$state_machine__21755__auto____0 = (function (){
var statearr_44305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44305[(0)] = cljs$core$async$state_machine__21755__auto__);

(statearr_44305[(1)] = (1));

return statearr_44305;
});
var cljs$core$async$state_machine__21755__auto____1 = (function (state_44279){
while(true){
var ret_value__21756__auto__ = (function (){try{while(true){
var result__21757__auto__ = switch__21754__auto__.call(null,state_44279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21757__auto__;
}
break;
}
}catch (e44306){if((e44306 instanceof Object)){
var ex__21758__auto__ = e44306;
var statearr_44307_44329 = state_44279;
(statearr_44307_44329[(5)] = ex__21758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44330 = state_44279;
state_44279 = G__44330;
continue;
} else {
return ret_value__21756__auto__;
}
break;
}
});
cljs$core$async$state_machine__21755__auto__ = function(state_44279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21755__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21755__auto____1.call(this,state_44279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21755__auto____0;
cljs$core$async$state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21755__auto____1;
return cljs$core$async$state_machine__21755__auto__;
})()
;})(switch__21754__auto__,c__21866__auto___44313,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21868__auto__ = (function (){var statearr_44308 = f__21867__auto__.call(null);
(statearr_44308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21866__auto___44313);

return statearr_44308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21868__auto__);
});})(c__21866__auto___44313,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args44332 = [];
var len__19428__auto___44388 = arguments.length;
var i__19429__auto___44389 = (0);
while(true){
if((i__19429__auto___44389 < len__19428__auto___44388)){
args44332.push((arguments[i__19429__auto___44389]));

var G__44390 = (i__19429__auto___44389 + (1));
i__19429__auto___44389 = G__44390;
continue;
} else {
}
break;
}

var G__44334 = args44332.length;
switch (G__44334) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44332.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21866__auto___44392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21866__auto___44392,out){
return (function (){
var f__21867__auto__ = (function (){var switch__21754__auto__ = ((function (c__21866__auto___44392,out){
return (function (state_44364){
var state_val_44365 = (state_44364[(1)]);
if((state_val_44365 === (7))){
var inst_44343 = (state_44364[(7)]);
var inst_44344 = (state_44364[(8)]);
var inst_44343__$1 = (state_44364[(2)]);
var inst_44344__$1 = cljs.core.nth.call(null,inst_44343__$1,(0),null);
var inst_44345 = cljs.core.nth.call(null,inst_44343__$1,(1),null);
var inst_44346 = (inst_44344__$1 == null);
var state_44364__$1 = (function (){var statearr_44366 = state_44364;
(statearr_44366[(7)] = inst_44343__$1);

(statearr_44366[(9)] = inst_44345);

(statearr_44366[(8)] = inst_44344__$1);

return statearr_44366;
})();
if(cljs.core.truth_(inst_44346)){
var statearr_44367_44393 = state_44364__$1;
(statearr_44367_44393[(1)] = (8));

} else {
var statearr_44368_44394 = state_44364__$1;
(statearr_44368_44394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44365 === (1))){
var inst_44335 = cljs.core.vec.call(null,chs);
var inst_44336 = inst_44335;
var state_44364__$1 = (function (){var statearr_44369 = state_44364;
(statearr_44369[(10)] = inst_44336);

return statearr_44369;
})();
var statearr_44370_44395 = state_44364__$1;
(statearr_44370_44395[(2)] = null);

(statearr_44370_44395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44365 === (4))){
var inst_44336 = (state_44364[(10)]);
var state_44364__$1 = state_44364;
return cljs.core.async.ioc_alts_BANG_.call(null,state_44364__$1,(7),inst_44336);
} else {
if((state_val_44365 === (6))){
var inst_44360 = (state_44364[(2)]);
var state_44364__$1 = state_44364;
var statearr_44371_44396 = state_44364__$1;
(statearr_44371_44396[(2)] = inst_44360);

(statearr_44371_44396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44365 === (3))){
var inst_44362 = (state_44364[(2)]);
var state_44364__$1 = state_44364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44364__$1,inst_44362);
} else {
if((state_val_44365 === (2))){
var inst_44336 = (state_44364[(10)]);
var inst_44338 = cljs.core.count.call(null,inst_44336);
var inst_44339 = (inst_44338 > (0));
var state_44364__$1 = state_44364;
if(cljs.core.truth_(inst_44339)){
var statearr_44373_44397 = state_44364__$1;
(statearr_44373_44397[(1)] = (4));

} else {
var statearr_44374_44398 = state_44364__$1;
(statearr_44374_44398[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44365 === (11))){
var inst_44336 = (state_44364[(10)]);
var inst_44353 = (state_44364[(2)]);
var tmp44372 = inst_44336;
var inst_44336__$1 = tmp44372;
var state_44364__$1 = (function (){var statearr_44375 = state_44364;
(statearr_44375[(11)] = inst_44353);

(statearr_44375[(10)] = inst_44336__$1);

return statearr_44375;
})();
var statearr_44376_44399 = state_44364__$1;
(statearr_44376_44399[(2)] = null);

(statearr_44376_44399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44365 === (9))){
var inst_44344 = (state_44364[(8)]);
var state_44364__$1 = state_44364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44364__$1,(11),out,inst_44344);
} else {
if((state_val_44365 === (5))){
var inst_44358 = cljs.core.async.close_BANG_.call(null,out);
var state_44364__$1 = state_44364;
var statearr_44377_44400 = state_44364__$1;
(statearr_44377_44400[(2)] = inst_44358);

(statearr_44377_44400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44365 === (10))){
var inst_44356 = (state_44364[(2)]);
var state_44364__$1 = state_44364;
var statearr_44378_44401 = state_44364__$1;
(statearr_44378_44401[(2)] = inst_44356);

(statearr_44378_44401[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44365 === (8))){
var inst_44343 = (state_44364[(7)]);
var inst_44345 = (state_44364[(9)]);
var inst_44336 = (state_44364[(10)]);
var inst_44344 = (state_44364[(8)]);
var inst_44348 = (function (){var cs = inst_44336;
var vec__44341 = inst_44343;
var v = inst_44344;
var c = inst_44345;
return ((function (cs,vec__44341,v,c,inst_44343,inst_44345,inst_44336,inst_44344,state_val_44365,c__21866__auto___44392,out){
return (function (p1__44331_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__44331_SHARP_);
});
;})(cs,vec__44341,v,c,inst_44343,inst_44345,inst_44336,inst_44344,state_val_44365,c__21866__auto___44392,out))
})();
var inst_44349 = cljs.core.filterv.call(null,inst_44348,inst_44336);
var inst_44336__$1 = inst_44349;
var state_44364__$1 = (function (){var statearr_44379 = state_44364;
(statearr_44379[(10)] = inst_44336__$1);

return statearr_44379;
})();
var statearr_44380_44402 = state_44364__$1;
(statearr_44380_44402[(2)] = null);

(statearr_44380_44402[(1)] = (2));


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
});})(c__21866__auto___44392,out))
;
return ((function (switch__21754__auto__,c__21866__auto___44392,out){
return (function() {
var cljs$core$async$state_machine__21755__auto__ = null;
var cljs$core$async$state_machine__21755__auto____0 = (function (){
var statearr_44384 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44384[(0)] = cljs$core$async$state_machine__21755__auto__);

(statearr_44384[(1)] = (1));

return statearr_44384;
});
var cljs$core$async$state_machine__21755__auto____1 = (function (state_44364){
while(true){
var ret_value__21756__auto__ = (function (){try{while(true){
var result__21757__auto__ = switch__21754__auto__.call(null,state_44364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21757__auto__;
}
break;
}
}catch (e44385){if((e44385 instanceof Object)){
var ex__21758__auto__ = e44385;
var statearr_44386_44403 = state_44364;
(statearr_44386_44403[(5)] = ex__21758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44404 = state_44364;
state_44364 = G__44404;
continue;
} else {
return ret_value__21756__auto__;
}
break;
}
});
cljs$core$async$state_machine__21755__auto__ = function(state_44364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21755__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21755__auto____1.call(this,state_44364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21755__auto____0;
cljs$core$async$state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21755__auto____1;
return cljs$core$async$state_machine__21755__auto__;
})()
;})(switch__21754__auto__,c__21866__auto___44392,out))
})();
var state__21868__auto__ = (function (){var statearr_44387 = f__21867__auto__.call(null);
(statearr_44387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21866__auto___44392);

return statearr_44387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21868__auto__);
});})(c__21866__auto___44392,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args44405 = [];
var len__19428__auto___44454 = arguments.length;
var i__19429__auto___44455 = (0);
while(true){
if((i__19429__auto___44455 < len__19428__auto___44454)){
args44405.push((arguments[i__19429__auto___44455]));

var G__44456 = (i__19429__auto___44455 + (1));
i__19429__auto___44455 = G__44456;
continue;
} else {
}
break;
}

var G__44407 = args44405.length;
switch (G__44407) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44405.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21866__auto___44458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21866__auto___44458,out){
return (function (){
var f__21867__auto__ = (function (){var switch__21754__auto__ = ((function (c__21866__auto___44458,out){
return (function (state_44431){
var state_val_44432 = (state_44431[(1)]);
if((state_val_44432 === (7))){
var inst_44413 = (state_44431[(7)]);
var inst_44413__$1 = (state_44431[(2)]);
var inst_44414 = (inst_44413__$1 == null);
var inst_44415 = cljs.core.not.call(null,inst_44414);
var state_44431__$1 = (function (){var statearr_44433 = state_44431;
(statearr_44433[(7)] = inst_44413__$1);

return statearr_44433;
})();
if(inst_44415){
var statearr_44434_44459 = state_44431__$1;
(statearr_44434_44459[(1)] = (8));

} else {
var statearr_44435_44460 = state_44431__$1;
(statearr_44435_44460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44432 === (1))){
var inst_44408 = (0);
var state_44431__$1 = (function (){var statearr_44436 = state_44431;
(statearr_44436[(8)] = inst_44408);

return statearr_44436;
})();
var statearr_44437_44461 = state_44431__$1;
(statearr_44437_44461[(2)] = null);

(statearr_44437_44461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44432 === (4))){
var state_44431__$1 = state_44431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44431__$1,(7),ch);
} else {
if((state_val_44432 === (6))){
var inst_44426 = (state_44431[(2)]);
var state_44431__$1 = state_44431;
var statearr_44438_44462 = state_44431__$1;
(statearr_44438_44462[(2)] = inst_44426);

(statearr_44438_44462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44432 === (3))){
var inst_44428 = (state_44431[(2)]);
var inst_44429 = cljs.core.async.close_BANG_.call(null,out);
var state_44431__$1 = (function (){var statearr_44439 = state_44431;
(statearr_44439[(9)] = inst_44428);

return statearr_44439;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44431__$1,inst_44429);
} else {
if((state_val_44432 === (2))){
var inst_44408 = (state_44431[(8)]);
var inst_44410 = (inst_44408 < n);
var state_44431__$1 = state_44431;
if(cljs.core.truth_(inst_44410)){
var statearr_44440_44463 = state_44431__$1;
(statearr_44440_44463[(1)] = (4));

} else {
var statearr_44441_44464 = state_44431__$1;
(statearr_44441_44464[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44432 === (11))){
var inst_44408 = (state_44431[(8)]);
var inst_44418 = (state_44431[(2)]);
var inst_44419 = (inst_44408 + (1));
var inst_44408__$1 = inst_44419;
var state_44431__$1 = (function (){var statearr_44442 = state_44431;
(statearr_44442[(10)] = inst_44418);

(statearr_44442[(8)] = inst_44408__$1);

return statearr_44442;
})();
var statearr_44443_44465 = state_44431__$1;
(statearr_44443_44465[(2)] = null);

(statearr_44443_44465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44432 === (9))){
var state_44431__$1 = state_44431;
var statearr_44444_44466 = state_44431__$1;
(statearr_44444_44466[(2)] = null);

(statearr_44444_44466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44432 === (5))){
var state_44431__$1 = state_44431;
var statearr_44445_44467 = state_44431__$1;
(statearr_44445_44467[(2)] = null);

(statearr_44445_44467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44432 === (10))){
var inst_44423 = (state_44431[(2)]);
var state_44431__$1 = state_44431;
var statearr_44446_44468 = state_44431__$1;
(statearr_44446_44468[(2)] = inst_44423);

(statearr_44446_44468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44432 === (8))){
var inst_44413 = (state_44431[(7)]);
var state_44431__$1 = state_44431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44431__$1,(11),out,inst_44413);
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
});})(c__21866__auto___44458,out))
;
return ((function (switch__21754__auto__,c__21866__auto___44458,out){
return (function() {
var cljs$core$async$state_machine__21755__auto__ = null;
var cljs$core$async$state_machine__21755__auto____0 = (function (){
var statearr_44450 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44450[(0)] = cljs$core$async$state_machine__21755__auto__);

(statearr_44450[(1)] = (1));

return statearr_44450;
});
var cljs$core$async$state_machine__21755__auto____1 = (function (state_44431){
while(true){
var ret_value__21756__auto__ = (function (){try{while(true){
var result__21757__auto__ = switch__21754__auto__.call(null,state_44431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21757__auto__;
}
break;
}
}catch (e44451){if((e44451 instanceof Object)){
var ex__21758__auto__ = e44451;
var statearr_44452_44469 = state_44431;
(statearr_44452_44469[(5)] = ex__21758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44470 = state_44431;
state_44431 = G__44470;
continue;
} else {
return ret_value__21756__auto__;
}
break;
}
});
cljs$core$async$state_machine__21755__auto__ = function(state_44431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21755__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21755__auto____1.call(this,state_44431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21755__auto____0;
cljs$core$async$state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21755__auto____1;
return cljs$core$async$state_machine__21755__auto__;
})()
;})(switch__21754__auto__,c__21866__auto___44458,out))
})();
var state__21868__auto__ = (function (){var statearr_44453 = f__21867__auto__.call(null);
(statearr_44453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21866__auto___44458);

return statearr_44453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21868__auto__);
});})(c__21866__auto___44458,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async44478 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44478 = (function (map_LT_,f,ch,meta44479){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta44479 = meta44479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44480,meta44479__$1){
var self__ = this;
var _44480__$1 = this;
return (new cljs.core.async.t_cljs$core$async44478(self__.map_LT_,self__.f,self__.ch,meta44479__$1));
});

cljs.core.async.t_cljs$core$async44478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44480){
var self__ = this;
var _44480__$1 = this;
return self__.meta44479;
});

cljs.core.async.t_cljs$core$async44478.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async44478.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async44478.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async44478.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async44478.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async44481 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44481 = (function (map_LT_,f,ch,meta44479,_,fn1,meta44482){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta44479 = meta44479;
this._ = _;
this.fn1 = fn1;
this.meta44482 = meta44482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_44483,meta44482__$1){
var self__ = this;
var _44483__$1 = this;
return (new cljs.core.async.t_cljs$core$async44481(self__.map_LT_,self__.f,self__.ch,self__.meta44479,self__._,self__.fn1,meta44482__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async44481.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_44483){
var self__ = this;
var _44483__$1 = this;
return self__.meta44482;
});})(___$1))
;

cljs.core.async.t_cljs$core$async44481.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44481.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async44481.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async44481.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__44471_SHARP_){
return f1.call(null,(((p1__44471_SHARP_ == null))?null:self__.f.call(null,p1__44471_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async44481.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44479","meta44479",1113084524,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async44478","cljs.core.async/t_cljs$core$async44478",1681476905,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta44482","meta44482",1140499941,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async44481.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44481.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44481";

cljs.core.async.t_cljs$core$async44481.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async44481");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async44481 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44481(map_LT___$1,f__$1,ch__$1,meta44479__$1,___$2,fn1__$1,meta44482){
return (new cljs.core.async.t_cljs$core$async44481(map_LT___$1,f__$1,ch__$1,meta44479__$1,___$2,fn1__$1,meta44482));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async44481(self__.map_LT_,self__.f,self__.ch,self__.meta44479,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18358__auto__ = ret;
if(cljs.core.truth_(and__18358__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18358__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async44478.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async44478.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async44478.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44479","meta44479",1113084524,null)], null);
});

cljs.core.async.t_cljs$core$async44478.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44478.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44478";

cljs.core.async.t_cljs$core$async44478.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async44478");
});

cljs.core.async.__GT_t_cljs$core$async44478 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44478(map_LT___$1,f__$1,ch__$1,meta44479){
return (new cljs.core.async.t_cljs$core$async44478(map_LT___$1,f__$1,ch__$1,meta44479));
});

}

return (new cljs.core.async.t_cljs$core$async44478(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async44487 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44487 = (function (map_GT_,f,ch,meta44488){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta44488 = meta44488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44489,meta44488__$1){
var self__ = this;
var _44489__$1 = this;
return (new cljs.core.async.t_cljs$core$async44487(self__.map_GT_,self__.f,self__.ch,meta44488__$1));
});

cljs.core.async.t_cljs$core$async44487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44489){
var self__ = this;
var _44489__$1 = this;
return self__.meta44488;
});

cljs.core.async.t_cljs$core$async44487.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async44487.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async44487.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async44487.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async44487.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async44487.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async44487.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44488","meta44488",-1374192801,null)], null);
});

cljs.core.async.t_cljs$core$async44487.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44487.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44487";

cljs.core.async.t_cljs$core$async44487.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async44487");
});

cljs.core.async.__GT_t_cljs$core$async44487 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async44487(map_GT___$1,f__$1,ch__$1,meta44488){
return (new cljs.core.async.t_cljs$core$async44487(map_GT___$1,f__$1,ch__$1,meta44488));
});

}

return (new cljs.core.async.t_cljs$core$async44487(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async44493 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44493 = (function (filter_GT_,p,ch,meta44494){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta44494 = meta44494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44495,meta44494__$1){
var self__ = this;
var _44495__$1 = this;
return (new cljs.core.async.t_cljs$core$async44493(self__.filter_GT_,self__.p,self__.ch,meta44494__$1));
});

cljs.core.async.t_cljs$core$async44493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44495){
var self__ = this;
var _44495__$1 = this;
return self__.meta44494;
});

cljs.core.async.t_cljs$core$async44493.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async44493.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async44493.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async44493.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async44493.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async44493.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async44493.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async44493.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44494","meta44494",-1936328810,null)], null);
});

cljs.core.async.t_cljs$core$async44493.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44493.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44493";

cljs.core.async.t_cljs$core$async44493.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async44493");
});

cljs.core.async.__GT_t_cljs$core$async44493 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async44493(filter_GT___$1,p__$1,ch__$1,meta44494){
return (new cljs.core.async.t_cljs$core$async44493(filter_GT___$1,p__$1,ch__$1,meta44494));
});

}

return (new cljs.core.async.t_cljs$core$async44493(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args44496 = [];
var len__19428__auto___44540 = arguments.length;
var i__19429__auto___44541 = (0);
while(true){
if((i__19429__auto___44541 < len__19428__auto___44540)){
args44496.push((arguments[i__19429__auto___44541]));

var G__44542 = (i__19429__auto___44541 + (1));
i__19429__auto___44541 = G__44542;
continue;
} else {
}
break;
}

var G__44498 = args44496.length;
switch (G__44498) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44496.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21866__auto___44544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21866__auto___44544,out){
return (function (){
var f__21867__auto__ = (function (){var switch__21754__auto__ = ((function (c__21866__auto___44544,out){
return (function (state_44519){
var state_val_44520 = (state_44519[(1)]);
if((state_val_44520 === (7))){
var inst_44515 = (state_44519[(2)]);
var state_44519__$1 = state_44519;
var statearr_44521_44545 = state_44519__$1;
(statearr_44521_44545[(2)] = inst_44515);

(statearr_44521_44545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44520 === (1))){
var state_44519__$1 = state_44519;
var statearr_44522_44546 = state_44519__$1;
(statearr_44522_44546[(2)] = null);

(statearr_44522_44546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44520 === (4))){
var inst_44501 = (state_44519[(7)]);
var inst_44501__$1 = (state_44519[(2)]);
var inst_44502 = (inst_44501__$1 == null);
var state_44519__$1 = (function (){var statearr_44523 = state_44519;
(statearr_44523[(7)] = inst_44501__$1);

return statearr_44523;
})();
if(cljs.core.truth_(inst_44502)){
var statearr_44524_44547 = state_44519__$1;
(statearr_44524_44547[(1)] = (5));

} else {
var statearr_44525_44548 = state_44519__$1;
(statearr_44525_44548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44520 === (6))){
var inst_44501 = (state_44519[(7)]);
var inst_44506 = p.call(null,inst_44501);
var state_44519__$1 = state_44519;
if(cljs.core.truth_(inst_44506)){
var statearr_44526_44549 = state_44519__$1;
(statearr_44526_44549[(1)] = (8));

} else {
var statearr_44527_44550 = state_44519__$1;
(statearr_44527_44550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44520 === (3))){
var inst_44517 = (state_44519[(2)]);
var state_44519__$1 = state_44519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44519__$1,inst_44517);
} else {
if((state_val_44520 === (2))){
var state_44519__$1 = state_44519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44519__$1,(4),ch);
} else {
if((state_val_44520 === (11))){
var inst_44509 = (state_44519[(2)]);
var state_44519__$1 = state_44519;
var statearr_44528_44551 = state_44519__$1;
(statearr_44528_44551[(2)] = inst_44509);

(statearr_44528_44551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44520 === (9))){
var state_44519__$1 = state_44519;
var statearr_44529_44552 = state_44519__$1;
(statearr_44529_44552[(2)] = null);

(statearr_44529_44552[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44520 === (5))){
var inst_44504 = cljs.core.async.close_BANG_.call(null,out);
var state_44519__$1 = state_44519;
var statearr_44530_44553 = state_44519__$1;
(statearr_44530_44553[(2)] = inst_44504);

(statearr_44530_44553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44520 === (10))){
var inst_44512 = (state_44519[(2)]);
var state_44519__$1 = (function (){var statearr_44531 = state_44519;
(statearr_44531[(8)] = inst_44512);

return statearr_44531;
})();
var statearr_44532_44554 = state_44519__$1;
(statearr_44532_44554[(2)] = null);

(statearr_44532_44554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44520 === (8))){
var inst_44501 = (state_44519[(7)]);
var state_44519__$1 = state_44519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44519__$1,(11),out,inst_44501);
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
});})(c__21866__auto___44544,out))
;
return ((function (switch__21754__auto__,c__21866__auto___44544,out){
return (function() {
var cljs$core$async$state_machine__21755__auto__ = null;
var cljs$core$async$state_machine__21755__auto____0 = (function (){
var statearr_44536 = [null,null,null,null,null,null,null,null,null];
(statearr_44536[(0)] = cljs$core$async$state_machine__21755__auto__);

(statearr_44536[(1)] = (1));

return statearr_44536;
});
var cljs$core$async$state_machine__21755__auto____1 = (function (state_44519){
while(true){
var ret_value__21756__auto__ = (function (){try{while(true){
var result__21757__auto__ = switch__21754__auto__.call(null,state_44519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21757__auto__;
}
break;
}
}catch (e44537){if((e44537 instanceof Object)){
var ex__21758__auto__ = e44537;
var statearr_44538_44555 = state_44519;
(statearr_44538_44555[(5)] = ex__21758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44556 = state_44519;
state_44519 = G__44556;
continue;
} else {
return ret_value__21756__auto__;
}
break;
}
});
cljs$core$async$state_machine__21755__auto__ = function(state_44519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21755__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21755__auto____1.call(this,state_44519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21755__auto____0;
cljs$core$async$state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21755__auto____1;
return cljs$core$async$state_machine__21755__auto__;
})()
;})(switch__21754__auto__,c__21866__auto___44544,out))
})();
var state__21868__auto__ = (function (){var statearr_44539 = f__21867__auto__.call(null);
(statearr_44539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21866__auto___44544);

return statearr_44539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21868__auto__);
});})(c__21866__auto___44544,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args44557 = [];
var len__19428__auto___44560 = arguments.length;
var i__19429__auto___44561 = (0);
while(true){
if((i__19429__auto___44561 < len__19428__auto___44560)){
args44557.push((arguments[i__19429__auto___44561]));

var G__44562 = (i__19429__auto___44561 + (1));
i__19429__auto___44561 = G__44562;
continue;
} else {
}
break;
}

var G__44559 = args44557.length;
switch (G__44559) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44557.length)].join('')));

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
var c__21866__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21866__auto__){
return (function (){
var f__21867__auto__ = (function (){var switch__21754__auto__ = ((function (c__21866__auto__){
return (function (state_44729){
var state_val_44730 = (state_44729[(1)]);
if((state_val_44730 === (7))){
var inst_44725 = (state_44729[(2)]);
var state_44729__$1 = state_44729;
var statearr_44731_44772 = state_44729__$1;
(statearr_44731_44772[(2)] = inst_44725);

(statearr_44731_44772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44730 === (20))){
var inst_44695 = (state_44729[(7)]);
var inst_44706 = (state_44729[(2)]);
var inst_44707 = cljs.core.next.call(null,inst_44695);
var inst_44681 = inst_44707;
var inst_44682 = null;
var inst_44683 = (0);
var inst_44684 = (0);
var state_44729__$1 = (function (){var statearr_44732 = state_44729;
(statearr_44732[(8)] = inst_44683);

(statearr_44732[(9)] = inst_44684);

(statearr_44732[(10)] = inst_44681);

(statearr_44732[(11)] = inst_44706);

(statearr_44732[(12)] = inst_44682);

return statearr_44732;
})();
var statearr_44733_44773 = state_44729__$1;
(statearr_44733_44773[(2)] = null);

(statearr_44733_44773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44730 === (1))){
var state_44729__$1 = state_44729;
var statearr_44734_44774 = state_44729__$1;
(statearr_44734_44774[(2)] = null);

(statearr_44734_44774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44730 === (4))){
var inst_44670 = (state_44729[(13)]);
var inst_44670__$1 = (state_44729[(2)]);
var inst_44671 = (inst_44670__$1 == null);
var state_44729__$1 = (function (){var statearr_44735 = state_44729;
(statearr_44735[(13)] = inst_44670__$1);

return statearr_44735;
})();
if(cljs.core.truth_(inst_44671)){
var statearr_44736_44775 = state_44729__$1;
(statearr_44736_44775[(1)] = (5));

} else {
var statearr_44737_44776 = state_44729__$1;
(statearr_44737_44776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44730 === (15))){
var state_44729__$1 = state_44729;
var statearr_44741_44777 = state_44729__$1;
(statearr_44741_44777[(2)] = null);

(statearr_44741_44777[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44730 === (21))){
var state_44729__$1 = state_44729;
var statearr_44742_44778 = state_44729__$1;
(statearr_44742_44778[(2)] = null);

(statearr_44742_44778[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44730 === (13))){
var inst_44683 = (state_44729[(8)]);
var inst_44684 = (state_44729[(9)]);
var inst_44681 = (state_44729[(10)]);
var inst_44682 = (state_44729[(12)]);
var inst_44691 = (state_44729[(2)]);
var inst_44692 = (inst_44684 + (1));
var tmp44738 = inst_44683;
var tmp44739 = inst_44681;
var tmp44740 = inst_44682;
var inst_44681__$1 = tmp44739;
var inst_44682__$1 = tmp44740;
var inst_44683__$1 = tmp44738;
var inst_44684__$1 = inst_44692;
var state_44729__$1 = (function (){var statearr_44743 = state_44729;
(statearr_44743[(8)] = inst_44683__$1);

(statearr_44743[(9)] = inst_44684__$1);

(statearr_44743[(10)] = inst_44681__$1);

(statearr_44743[(14)] = inst_44691);

(statearr_44743[(12)] = inst_44682__$1);

return statearr_44743;
})();
var statearr_44744_44779 = state_44729__$1;
(statearr_44744_44779[(2)] = null);

(statearr_44744_44779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44730 === (22))){
var state_44729__$1 = state_44729;
var statearr_44745_44780 = state_44729__$1;
(statearr_44745_44780[(2)] = null);

(statearr_44745_44780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44730 === (6))){
var inst_44670 = (state_44729[(13)]);
var inst_44679 = f.call(null,inst_44670);
var inst_44680 = cljs.core.seq.call(null,inst_44679);
var inst_44681 = inst_44680;
var inst_44682 = null;
var inst_44683 = (0);
var inst_44684 = (0);
var state_44729__$1 = (function (){var statearr_44746 = state_44729;
(statearr_44746[(8)] = inst_44683);

(statearr_44746[(9)] = inst_44684);

(statearr_44746[(10)] = inst_44681);

(statearr_44746[(12)] = inst_44682);

return statearr_44746;
})();
var statearr_44747_44781 = state_44729__$1;
(statearr_44747_44781[(2)] = null);

(statearr_44747_44781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44730 === (17))){
var inst_44695 = (state_44729[(7)]);
var inst_44699 = cljs.core.chunk_first.call(null,inst_44695);
var inst_44700 = cljs.core.chunk_rest.call(null,inst_44695);
var inst_44701 = cljs.core.count.call(null,inst_44699);
var inst_44681 = inst_44700;
var inst_44682 = inst_44699;
var inst_44683 = inst_44701;
var inst_44684 = (0);
var state_44729__$1 = (function (){var statearr_44748 = state_44729;
(statearr_44748[(8)] = inst_44683);

(statearr_44748[(9)] = inst_44684);

(statearr_44748[(10)] = inst_44681);

(statearr_44748[(12)] = inst_44682);

return statearr_44748;
})();
var statearr_44749_44782 = state_44729__$1;
(statearr_44749_44782[(2)] = null);

(statearr_44749_44782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44730 === (3))){
var inst_44727 = (state_44729[(2)]);
var state_44729__$1 = state_44729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44729__$1,inst_44727);
} else {
if((state_val_44730 === (12))){
var inst_44715 = (state_44729[(2)]);
var state_44729__$1 = state_44729;
var statearr_44750_44783 = state_44729__$1;
(statearr_44750_44783[(2)] = inst_44715);

(statearr_44750_44783[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44730 === (2))){
var state_44729__$1 = state_44729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44729__$1,(4),in$);
} else {
if((state_val_44730 === (23))){
var inst_44723 = (state_44729[(2)]);
var state_44729__$1 = state_44729;
var statearr_44751_44784 = state_44729__$1;
(statearr_44751_44784[(2)] = inst_44723);

(statearr_44751_44784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44730 === (19))){
var inst_44710 = (state_44729[(2)]);
var state_44729__$1 = state_44729;
var statearr_44752_44785 = state_44729__$1;
(statearr_44752_44785[(2)] = inst_44710);

(statearr_44752_44785[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44730 === (11))){
var inst_44695 = (state_44729[(7)]);
var inst_44681 = (state_44729[(10)]);
var inst_44695__$1 = cljs.core.seq.call(null,inst_44681);
var state_44729__$1 = (function (){var statearr_44753 = state_44729;
(statearr_44753[(7)] = inst_44695__$1);

return statearr_44753;
})();
if(inst_44695__$1){
var statearr_44754_44786 = state_44729__$1;
(statearr_44754_44786[(1)] = (14));

} else {
var statearr_44755_44787 = state_44729__$1;
(statearr_44755_44787[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44730 === (9))){
var inst_44717 = (state_44729[(2)]);
var inst_44718 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_44729__$1 = (function (){var statearr_44756 = state_44729;
(statearr_44756[(15)] = inst_44717);

return statearr_44756;
})();
if(cljs.core.truth_(inst_44718)){
var statearr_44757_44788 = state_44729__$1;
(statearr_44757_44788[(1)] = (21));

} else {
var statearr_44758_44789 = state_44729__$1;
(statearr_44758_44789[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44730 === (5))){
var inst_44673 = cljs.core.async.close_BANG_.call(null,out);
var state_44729__$1 = state_44729;
var statearr_44759_44790 = state_44729__$1;
(statearr_44759_44790[(2)] = inst_44673);

(statearr_44759_44790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44730 === (14))){
var inst_44695 = (state_44729[(7)]);
var inst_44697 = cljs.core.chunked_seq_QMARK_.call(null,inst_44695);
var state_44729__$1 = state_44729;
if(inst_44697){
var statearr_44760_44791 = state_44729__$1;
(statearr_44760_44791[(1)] = (17));

} else {
var statearr_44761_44792 = state_44729__$1;
(statearr_44761_44792[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44730 === (16))){
var inst_44713 = (state_44729[(2)]);
var state_44729__$1 = state_44729;
var statearr_44762_44793 = state_44729__$1;
(statearr_44762_44793[(2)] = inst_44713);

(statearr_44762_44793[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44730 === (10))){
var inst_44684 = (state_44729[(9)]);
var inst_44682 = (state_44729[(12)]);
var inst_44689 = cljs.core._nth.call(null,inst_44682,inst_44684);
var state_44729__$1 = state_44729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44729__$1,(13),out,inst_44689);
} else {
if((state_val_44730 === (18))){
var inst_44695 = (state_44729[(7)]);
var inst_44704 = cljs.core.first.call(null,inst_44695);
var state_44729__$1 = state_44729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44729__$1,(20),out,inst_44704);
} else {
if((state_val_44730 === (8))){
var inst_44683 = (state_44729[(8)]);
var inst_44684 = (state_44729[(9)]);
var inst_44686 = (inst_44684 < inst_44683);
var inst_44687 = inst_44686;
var state_44729__$1 = state_44729;
if(cljs.core.truth_(inst_44687)){
var statearr_44763_44794 = state_44729__$1;
(statearr_44763_44794[(1)] = (10));

} else {
var statearr_44764_44795 = state_44729__$1;
(statearr_44764_44795[(1)] = (11));

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
});})(c__21866__auto__))
;
return ((function (switch__21754__auto__,c__21866__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21755__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21755__auto____0 = (function (){
var statearr_44768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44768[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21755__auto__);

(statearr_44768[(1)] = (1));

return statearr_44768;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21755__auto____1 = (function (state_44729){
while(true){
var ret_value__21756__auto__ = (function (){try{while(true){
var result__21757__auto__ = switch__21754__auto__.call(null,state_44729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21757__auto__;
}
break;
}
}catch (e44769){if((e44769 instanceof Object)){
var ex__21758__auto__ = e44769;
var statearr_44770_44796 = state_44729;
(statearr_44770_44796[(5)] = ex__21758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44797 = state_44729;
state_44729 = G__44797;
continue;
} else {
return ret_value__21756__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21755__auto__ = function(state_44729){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21755__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21755__auto____1.call(this,state_44729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21755__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21755__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21755__auto__;
})()
;})(switch__21754__auto__,c__21866__auto__))
})();
var state__21868__auto__ = (function (){var statearr_44771 = f__21867__auto__.call(null);
(statearr_44771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21866__auto__);

return statearr_44771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21868__auto__);
});})(c__21866__auto__))
);

return c__21866__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args44798 = [];
var len__19428__auto___44801 = arguments.length;
var i__19429__auto___44802 = (0);
while(true){
if((i__19429__auto___44802 < len__19428__auto___44801)){
args44798.push((arguments[i__19429__auto___44802]));

var G__44803 = (i__19429__auto___44802 + (1));
i__19429__auto___44802 = G__44803;
continue;
} else {
}
break;
}

var G__44800 = args44798.length;
switch (G__44800) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44798.length)].join('')));

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
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args44805 = [];
var len__19428__auto___44808 = arguments.length;
var i__19429__auto___44809 = (0);
while(true){
if((i__19429__auto___44809 < len__19428__auto___44808)){
args44805.push((arguments[i__19429__auto___44809]));

var G__44810 = (i__19429__auto___44809 + (1));
i__19429__auto___44809 = G__44810;
continue;
} else {
}
break;
}

var G__44807 = args44805.length;
switch (G__44807) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44805.length)].join('')));

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
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args44812 = [];
var len__19428__auto___44863 = arguments.length;
var i__19429__auto___44864 = (0);
while(true){
if((i__19429__auto___44864 < len__19428__auto___44863)){
args44812.push((arguments[i__19429__auto___44864]));

var G__44865 = (i__19429__auto___44864 + (1));
i__19429__auto___44864 = G__44865;
continue;
} else {
}
break;
}

var G__44814 = args44812.length;
switch (G__44814) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44812.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21866__auto___44867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21866__auto___44867,out){
return (function (){
var f__21867__auto__ = (function (){var switch__21754__auto__ = ((function (c__21866__auto___44867,out){
return (function (state_44838){
var state_val_44839 = (state_44838[(1)]);
if((state_val_44839 === (7))){
var inst_44833 = (state_44838[(2)]);
var state_44838__$1 = state_44838;
var statearr_44840_44868 = state_44838__$1;
(statearr_44840_44868[(2)] = inst_44833);

(statearr_44840_44868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44839 === (1))){
var inst_44815 = null;
var state_44838__$1 = (function (){var statearr_44841 = state_44838;
(statearr_44841[(7)] = inst_44815);

return statearr_44841;
})();
var statearr_44842_44869 = state_44838__$1;
(statearr_44842_44869[(2)] = null);

(statearr_44842_44869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44839 === (4))){
var inst_44818 = (state_44838[(8)]);
var inst_44818__$1 = (state_44838[(2)]);
var inst_44819 = (inst_44818__$1 == null);
var inst_44820 = cljs.core.not.call(null,inst_44819);
var state_44838__$1 = (function (){var statearr_44843 = state_44838;
(statearr_44843[(8)] = inst_44818__$1);

return statearr_44843;
})();
if(inst_44820){
var statearr_44844_44870 = state_44838__$1;
(statearr_44844_44870[(1)] = (5));

} else {
var statearr_44845_44871 = state_44838__$1;
(statearr_44845_44871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44839 === (6))){
var state_44838__$1 = state_44838;
var statearr_44846_44872 = state_44838__$1;
(statearr_44846_44872[(2)] = null);

(statearr_44846_44872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44839 === (3))){
var inst_44835 = (state_44838[(2)]);
var inst_44836 = cljs.core.async.close_BANG_.call(null,out);
var state_44838__$1 = (function (){var statearr_44847 = state_44838;
(statearr_44847[(9)] = inst_44835);

return statearr_44847;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44838__$1,inst_44836);
} else {
if((state_val_44839 === (2))){
var state_44838__$1 = state_44838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44838__$1,(4),ch);
} else {
if((state_val_44839 === (11))){
var inst_44818 = (state_44838[(8)]);
var inst_44827 = (state_44838[(2)]);
var inst_44815 = inst_44818;
var state_44838__$1 = (function (){var statearr_44848 = state_44838;
(statearr_44848[(10)] = inst_44827);

(statearr_44848[(7)] = inst_44815);

return statearr_44848;
})();
var statearr_44849_44873 = state_44838__$1;
(statearr_44849_44873[(2)] = null);

(statearr_44849_44873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44839 === (9))){
var inst_44818 = (state_44838[(8)]);
var state_44838__$1 = state_44838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44838__$1,(11),out,inst_44818);
} else {
if((state_val_44839 === (5))){
var inst_44818 = (state_44838[(8)]);
var inst_44815 = (state_44838[(7)]);
var inst_44822 = cljs.core._EQ_.call(null,inst_44818,inst_44815);
var state_44838__$1 = state_44838;
if(inst_44822){
var statearr_44851_44874 = state_44838__$1;
(statearr_44851_44874[(1)] = (8));

} else {
var statearr_44852_44875 = state_44838__$1;
(statearr_44852_44875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44839 === (10))){
var inst_44830 = (state_44838[(2)]);
var state_44838__$1 = state_44838;
var statearr_44853_44876 = state_44838__$1;
(statearr_44853_44876[(2)] = inst_44830);

(statearr_44853_44876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44839 === (8))){
var inst_44815 = (state_44838[(7)]);
var tmp44850 = inst_44815;
var inst_44815__$1 = tmp44850;
var state_44838__$1 = (function (){var statearr_44854 = state_44838;
(statearr_44854[(7)] = inst_44815__$1);

return statearr_44854;
})();
var statearr_44855_44877 = state_44838__$1;
(statearr_44855_44877[(2)] = null);

(statearr_44855_44877[(1)] = (2));


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
});})(c__21866__auto___44867,out))
;
return ((function (switch__21754__auto__,c__21866__auto___44867,out){
return (function() {
var cljs$core$async$state_machine__21755__auto__ = null;
var cljs$core$async$state_machine__21755__auto____0 = (function (){
var statearr_44859 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44859[(0)] = cljs$core$async$state_machine__21755__auto__);

(statearr_44859[(1)] = (1));

return statearr_44859;
});
var cljs$core$async$state_machine__21755__auto____1 = (function (state_44838){
while(true){
var ret_value__21756__auto__ = (function (){try{while(true){
var result__21757__auto__ = switch__21754__auto__.call(null,state_44838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21757__auto__;
}
break;
}
}catch (e44860){if((e44860 instanceof Object)){
var ex__21758__auto__ = e44860;
var statearr_44861_44878 = state_44838;
(statearr_44861_44878[(5)] = ex__21758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44879 = state_44838;
state_44838 = G__44879;
continue;
} else {
return ret_value__21756__auto__;
}
break;
}
});
cljs$core$async$state_machine__21755__auto__ = function(state_44838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21755__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21755__auto____1.call(this,state_44838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21755__auto____0;
cljs$core$async$state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21755__auto____1;
return cljs$core$async$state_machine__21755__auto__;
})()
;})(switch__21754__auto__,c__21866__auto___44867,out))
})();
var state__21868__auto__ = (function (){var statearr_44862 = f__21867__auto__.call(null);
(statearr_44862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21866__auto___44867);

return statearr_44862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21868__auto__);
});})(c__21866__auto___44867,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args44880 = [];
var len__19428__auto___44950 = arguments.length;
var i__19429__auto___44951 = (0);
while(true){
if((i__19429__auto___44951 < len__19428__auto___44950)){
args44880.push((arguments[i__19429__auto___44951]));

var G__44952 = (i__19429__auto___44951 + (1));
i__19429__auto___44951 = G__44952;
continue;
} else {
}
break;
}

var G__44882 = args44880.length;
switch (G__44882) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44880.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21866__auto___44954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21866__auto___44954,out){
return (function (){
var f__21867__auto__ = (function (){var switch__21754__auto__ = ((function (c__21866__auto___44954,out){
return (function (state_44920){
var state_val_44921 = (state_44920[(1)]);
if((state_val_44921 === (7))){
var inst_44916 = (state_44920[(2)]);
var state_44920__$1 = state_44920;
var statearr_44922_44955 = state_44920__$1;
(statearr_44922_44955[(2)] = inst_44916);

(statearr_44922_44955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (1))){
var inst_44883 = (new Array(n));
var inst_44884 = inst_44883;
var inst_44885 = (0);
var state_44920__$1 = (function (){var statearr_44923 = state_44920;
(statearr_44923[(7)] = inst_44885);

(statearr_44923[(8)] = inst_44884);

return statearr_44923;
})();
var statearr_44924_44956 = state_44920__$1;
(statearr_44924_44956[(2)] = null);

(statearr_44924_44956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (4))){
var inst_44888 = (state_44920[(9)]);
var inst_44888__$1 = (state_44920[(2)]);
var inst_44889 = (inst_44888__$1 == null);
var inst_44890 = cljs.core.not.call(null,inst_44889);
var state_44920__$1 = (function (){var statearr_44925 = state_44920;
(statearr_44925[(9)] = inst_44888__$1);

return statearr_44925;
})();
if(inst_44890){
var statearr_44926_44957 = state_44920__$1;
(statearr_44926_44957[(1)] = (5));

} else {
var statearr_44927_44958 = state_44920__$1;
(statearr_44927_44958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (15))){
var inst_44910 = (state_44920[(2)]);
var state_44920__$1 = state_44920;
var statearr_44928_44959 = state_44920__$1;
(statearr_44928_44959[(2)] = inst_44910);

(statearr_44928_44959[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (13))){
var state_44920__$1 = state_44920;
var statearr_44929_44960 = state_44920__$1;
(statearr_44929_44960[(2)] = null);

(statearr_44929_44960[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (6))){
var inst_44885 = (state_44920[(7)]);
var inst_44906 = (inst_44885 > (0));
var state_44920__$1 = state_44920;
if(cljs.core.truth_(inst_44906)){
var statearr_44930_44961 = state_44920__$1;
(statearr_44930_44961[(1)] = (12));

} else {
var statearr_44931_44962 = state_44920__$1;
(statearr_44931_44962[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (3))){
var inst_44918 = (state_44920[(2)]);
var state_44920__$1 = state_44920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44920__$1,inst_44918);
} else {
if((state_val_44921 === (12))){
var inst_44884 = (state_44920[(8)]);
var inst_44908 = cljs.core.vec.call(null,inst_44884);
var state_44920__$1 = state_44920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44920__$1,(15),out,inst_44908);
} else {
if((state_val_44921 === (2))){
var state_44920__$1 = state_44920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44920__$1,(4),ch);
} else {
if((state_val_44921 === (11))){
var inst_44900 = (state_44920[(2)]);
var inst_44901 = (new Array(n));
var inst_44884 = inst_44901;
var inst_44885 = (0);
var state_44920__$1 = (function (){var statearr_44932 = state_44920;
(statearr_44932[(7)] = inst_44885);

(statearr_44932[(10)] = inst_44900);

(statearr_44932[(8)] = inst_44884);

return statearr_44932;
})();
var statearr_44933_44963 = state_44920__$1;
(statearr_44933_44963[(2)] = null);

(statearr_44933_44963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (9))){
var inst_44884 = (state_44920[(8)]);
var inst_44898 = cljs.core.vec.call(null,inst_44884);
var state_44920__$1 = state_44920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44920__$1,(11),out,inst_44898);
} else {
if((state_val_44921 === (5))){
var inst_44888 = (state_44920[(9)]);
var inst_44885 = (state_44920[(7)]);
var inst_44893 = (state_44920[(11)]);
var inst_44884 = (state_44920[(8)]);
var inst_44892 = (inst_44884[inst_44885] = inst_44888);
var inst_44893__$1 = (inst_44885 + (1));
var inst_44894 = (inst_44893__$1 < n);
var state_44920__$1 = (function (){var statearr_44934 = state_44920;
(statearr_44934[(12)] = inst_44892);

(statearr_44934[(11)] = inst_44893__$1);

return statearr_44934;
})();
if(cljs.core.truth_(inst_44894)){
var statearr_44935_44964 = state_44920__$1;
(statearr_44935_44964[(1)] = (8));

} else {
var statearr_44936_44965 = state_44920__$1;
(statearr_44936_44965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (14))){
var inst_44913 = (state_44920[(2)]);
var inst_44914 = cljs.core.async.close_BANG_.call(null,out);
var state_44920__$1 = (function (){var statearr_44938 = state_44920;
(statearr_44938[(13)] = inst_44913);

return statearr_44938;
})();
var statearr_44939_44966 = state_44920__$1;
(statearr_44939_44966[(2)] = inst_44914);

(statearr_44939_44966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (10))){
var inst_44904 = (state_44920[(2)]);
var state_44920__$1 = state_44920;
var statearr_44940_44967 = state_44920__$1;
(statearr_44940_44967[(2)] = inst_44904);

(statearr_44940_44967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (8))){
var inst_44893 = (state_44920[(11)]);
var inst_44884 = (state_44920[(8)]);
var tmp44937 = inst_44884;
var inst_44884__$1 = tmp44937;
var inst_44885 = inst_44893;
var state_44920__$1 = (function (){var statearr_44941 = state_44920;
(statearr_44941[(7)] = inst_44885);

(statearr_44941[(8)] = inst_44884__$1);

return statearr_44941;
})();
var statearr_44942_44968 = state_44920__$1;
(statearr_44942_44968[(2)] = null);

(statearr_44942_44968[(1)] = (2));


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
});})(c__21866__auto___44954,out))
;
return ((function (switch__21754__auto__,c__21866__auto___44954,out){
return (function() {
var cljs$core$async$state_machine__21755__auto__ = null;
var cljs$core$async$state_machine__21755__auto____0 = (function (){
var statearr_44946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44946[(0)] = cljs$core$async$state_machine__21755__auto__);

(statearr_44946[(1)] = (1));

return statearr_44946;
});
var cljs$core$async$state_machine__21755__auto____1 = (function (state_44920){
while(true){
var ret_value__21756__auto__ = (function (){try{while(true){
var result__21757__auto__ = switch__21754__auto__.call(null,state_44920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21757__auto__;
}
break;
}
}catch (e44947){if((e44947 instanceof Object)){
var ex__21758__auto__ = e44947;
var statearr_44948_44969 = state_44920;
(statearr_44948_44969[(5)] = ex__21758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44970 = state_44920;
state_44920 = G__44970;
continue;
} else {
return ret_value__21756__auto__;
}
break;
}
});
cljs$core$async$state_machine__21755__auto__ = function(state_44920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21755__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21755__auto____1.call(this,state_44920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21755__auto____0;
cljs$core$async$state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21755__auto____1;
return cljs$core$async$state_machine__21755__auto__;
})()
;})(switch__21754__auto__,c__21866__auto___44954,out))
})();
var state__21868__auto__ = (function (){var statearr_44949 = f__21867__auto__.call(null);
(statearr_44949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21866__auto___44954);

return statearr_44949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21868__auto__);
});})(c__21866__auto___44954,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args44971 = [];
var len__19428__auto___45045 = arguments.length;
var i__19429__auto___45046 = (0);
while(true){
if((i__19429__auto___45046 < len__19428__auto___45045)){
args44971.push((arguments[i__19429__auto___45046]));

var G__45047 = (i__19429__auto___45046 + (1));
i__19429__auto___45046 = G__45047;
continue;
} else {
}
break;
}

var G__44973 = args44971.length;
switch (G__44973) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44971.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21866__auto___45049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21866__auto___45049,out){
return (function (){
var f__21867__auto__ = (function (){var switch__21754__auto__ = ((function (c__21866__auto___45049,out){
return (function (state_45015){
var state_val_45016 = (state_45015[(1)]);
if((state_val_45016 === (7))){
var inst_45011 = (state_45015[(2)]);
var state_45015__$1 = state_45015;
var statearr_45017_45050 = state_45015__$1;
(statearr_45017_45050[(2)] = inst_45011);

(statearr_45017_45050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45016 === (1))){
var inst_44974 = [];
var inst_44975 = inst_44974;
var inst_44976 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45015__$1 = (function (){var statearr_45018 = state_45015;
(statearr_45018[(7)] = inst_44976);

(statearr_45018[(8)] = inst_44975);

return statearr_45018;
})();
var statearr_45019_45051 = state_45015__$1;
(statearr_45019_45051[(2)] = null);

(statearr_45019_45051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45016 === (4))){
var inst_44979 = (state_45015[(9)]);
var inst_44979__$1 = (state_45015[(2)]);
var inst_44980 = (inst_44979__$1 == null);
var inst_44981 = cljs.core.not.call(null,inst_44980);
var state_45015__$1 = (function (){var statearr_45020 = state_45015;
(statearr_45020[(9)] = inst_44979__$1);

return statearr_45020;
})();
if(inst_44981){
var statearr_45021_45052 = state_45015__$1;
(statearr_45021_45052[(1)] = (5));

} else {
var statearr_45022_45053 = state_45015__$1;
(statearr_45022_45053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45016 === (15))){
var inst_45005 = (state_45015[(2)]);
var state_45015__$1 = state_45015;
var statearr_45023_45054 = state_45015__$1;
(statearr_45023_45054[(2)] = inst_45005);

(statearr_45023_45054[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45016 === (13))){
var state_45015__$1 = state_45015;
var statearr_45024_45055 = state_45015__$1;
(statearr_45024_45055[(2)] = null);

(statearr_45024_45055[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45016 === (6))){
var inst_44975 = (state_45015[(8)]);
var inst_45000 = inst_44975.length;
var inst_45001 = (inst_45000 > (0));
var state_45015__$1 = state_45015;
if(cljs.core.truth_(inst_45001)){
var statearr_45025_45056 = state_45015__$1;
(statearr_45025_45056[(1)] = (12));

} else {
var statearr_45026_45057 = state_45015__$1;
(statearr_45026_45057[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45016 === (3))){
var inst_45013 = (state_45015[(2)]);
var state_45015__$1 = state_45015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45015__$1,inst_45013);
} else {
if((state_val_45016 === (12))){
var inst_44975 = (state_45015[(8)]);
var inst_45003 = cljs.core.vec.call(null,inst_44975);
var state_45015__$1 = state_45015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45015__$1,(15),out,inst_45003);
} else {
if((state_val_45016 === (2))){
var state_45015__$1 = state_45015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45015__$1,(4),ch);
} else {
if((state_val_45016 === (11))){
var inst_44983 = (state_45015[(10)]);
var inst_44979 = (state_45015[(9)]);
var inst_44993 = (state_45015[(2)]);
var inst_44994 = [];
var inst_44995 = inst_44994.push(inst_44979);
var inst_44975 = inst_44994;
var inst_44976 = inst_44983;
var state_45015__$1 = (function (){var statearr_45027 = state_45015;
(statearr_45027[(11)] = inst_44995);

(statearr_45027[(7)] = inst_44976);

(statearr_45027[(12)] = inst_44993);

(statearr_45027[(8)] = inst_44975);

return statearr_45027;
})();
var statearr_45028_45058 = state_45015__$1;
(statearr_45028_45058[(2)] = null);

(statearr_45028_45058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45016 === (9))){
var inst_44975 = (state_45015[(8)]);
var inst_44991 = cljs.core.vec.call(null,inst_44975);
var state_45015__$1 = state_45015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45015__$1,(11),out,inst_44991);
} else {
if((state_val_45016 === (5))){
var inst_44976 = (state_45015[(7)]);
var inst_44983 = (state_45015[(10)]);
var inst_44979 = (state_45015[(9)]);
var inst_44983__$1 = f.call(null,inst_44979);
var inst_44984 = cljs.core._EQ_.call(null,inst_44983__$1,inst_44976);
var inst_44985 = cljs.core.keyword_identical_QMARK_.call(null,inst_44976,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44986 = (inst_44984) || (inst_44985);
var state_45015__$1 = (function (){var statearr_45029 = state_45015;
(statearr_45029[(10)] = inst_44983__$1);

return statearr_45029;
})();
if(cljs.core.truth_(inst_44986)){
var statearr_45030_45059 = state_45015__$1;
(statearr_45030_45059[(1)] = (8));

} else {
var statearr_45031_45060 = state_45015__$1;
(statearr_45031_45060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45016 === (14))){
var inst_45008 = (state_45015[(2)]);
var inst_45009 = cljs.core.async.close_BANG_.call(null,out);
var state_45015__$1 = (function (){var statearr_45033 = state_45015;
(statearr_45033[(13)] = inst_45008);

return statearr_45033;
})();
var statearr_45034_45061 = state_45015__$1;
(statearr_45034_45061[(2)] = inst_45009);

(statearr_45034_45061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45016 === (10))){
var inst_44998 = (state_45015[(2)]);
var state_45015__$1 = state_45015;
var statearr_45035_45062 = state_45015__$1;
(statearr_45035_45062[(2)] = inst_44998);

(statearr_45035_45062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45016 === (8))){
var inst_44975 = (state_45015[(8)]);
var inst_44983 = (state_45015[(10)]);
var inst_44979 = (state_45015[(9)]);
var inst_44988 = inst_44975.push(inst_44979);
var tmp45032 = inst_44975;
var inst_44975__$1 = tmp45032;
var inst_44976 = inst_44983;
var state_45015__$1 = (function (){var statearr_45036 = state_45015;
(statearr_45036[(7)] = inst_44976);

(statearr_45036[(14)] = inst_44988);

(statearr_45036[(8)] = inst_44975__$1);

return statearr_45036;
})();
var statearr_45037_45063 = state_45015__$1;
(statearr_45037_45063[(2)] = null);

(statearr_45037_45063[(1)] = (2));


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
});})(c__21866__auto___45049,out))
;
return ((function (switch__21754__auto__,c__21866__auto___45049,out){
return (function() {
var cljs$core$async$state_machine__21755__auto__ = null;
var cljs$core$async$state_machine__21755__auto____0 = (function (){
var statearr_45041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45041[(0)] = cljs$core$async$state_machine__21755__auto__);

(statearr_45041[(1)] = (1));

return statearr_45041;
});
var cljs$core$async$state_machine__21755__auto____1 = (function (state_45015){
while(true){
var ret_value__21756__auto__ = (function (){try{while(true){
var result__21757__auto__ = switch__21754__auto__.call(null,state_45015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21757__auto__;
}
break;
}
}catch (e45042){if((e45042 instanceof Object)){
var ex__21758__auto__ = e45042;
var statearr_45043_45064 = state_45015;
(statearr_45043_45064[(5)] = ex__21758__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45065 = state_45015;
state_45015 = G__45065;
continue;
} else {
return ret_value__21756__auto__;
}
break;
}
});
cljs$core$async$state_machine__21755__auto__ = function(state_45015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21755__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21755__auto____1.call(this,state_45015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21755__auto____0;
cljs$core$async$state_machine__21755__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21755__auto____1;
return cljs$core$async$state_machine__21755__auto__;
})()
;})(switch__21754__auto__,c__21866__auto___45049,out))
})();
var state__21868__auto__ = (function (){var statearr_45044 = f__21867__auto__.call(null);
(statearr_45044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21866__auto___45049);

return statearr_45044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21868__auto__);
});})(c__21866__auto___45049,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1458852299824