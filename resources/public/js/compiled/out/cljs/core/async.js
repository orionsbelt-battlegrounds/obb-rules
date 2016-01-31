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
var args36221 = [];
var len__19428__auto___36227 = arguments.length;
var i__19429__auto___36228 = (0);
while(true){
if((i__19429__auto___36228 < len__19428__auto___36227)){
args36221.push((arguments[i__19429__auto___36228]));

var G__36229 = (i__19429__auto___36228 + (1));
i__19429__auto___36228 = G__36229;
continue;
} else {
}
break;
}

var G__36223 = args36221.length;
switch (G__36223) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36221.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async36224 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36224 = (function (f,blockable,meta36225){
this.f = f;
this.blockable = blockable;
this.meta36225 = meta36225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36226,meta36225__$1){
var self__ = this;
var _36226__$1 = this;
return (new cljs.core.async.t_cljs$core$async36224(self__.f,self__.blockable,meta36225__$1));
});

cljs.core.async.t_cljs$core$async36224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36226){
var self__ = this;
var _36226__$1 = this;
return self__.meta36225;
});

cljs.core.async.t_cljs$core$async36224.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36224.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36224.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async36224.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async36224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36225","meta36225",2138730193,null)], null);
});

cljs.core.async.t_cljs$core$async36224.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36224";

cljs.core.async.t_cljs$core$async36224.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async36224");
});

cljs.core.async.__GT_t_cljs$core$async36224 = (function cljs$core$async$__GT_t_cljs$core$async36224(f__$1,blockable__$1,meta36225){
return (new cljs.core.async.t_cljs$core$async36224(f__$1,blockable__$1,meta36225));
});

}

return (new cljs.core.async.t_cljs$core$async36224(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args36233 = [];
var len__19428__auto___36236 = arguments.length;
var i__19429__auto___36237 = (0);
while(true){
if((i__19429__auto___36237 < len__19428__auto___36236)){
args36233.push((arguments[i__19429__auto___36237]));

var G__36238 = (i__19429__auto___36237 + (1));
i__19429__auto___36237 = G__36238;
continue;
} else {
}
break;
}

var G__36235 = args36233.length;
switch (G__36235) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36233.length)].join('')));

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
var args36240 = [];
var len__19428__auto___36243 = arguments.length;
var i__19429__auto___36244 = (0);
while(true){
if((i__19429__auto___36244 < len__19428__auto___36243)){
args36240.push((arguments[i__19429__auto___36244]));

var G__36245 = (i__19429__auto___36244 + (1));
i__19429__auto___36244 = G__36245;
continue;
} else {
}
break;
}

var G__36242 = args36240.length;
switch (G__36242) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36240.length)].join('')));

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
var args36247 = [];
var len__19428__auto___36250 = arguments.length;
var i__19429__auto___36251 = (0);
while(true){
if((i__19429__auto___36251 < len__19428__auto___36250)){
args36247.push((arguments[i__19429__auto___36251]));

var G__36252 = (i__19429__auto___36251 + (1));
i__19429__auto___36251 = G__36252;
continue;
} else {
}
break;
}

var G__36249 = args36247.length;
switch (G__36249) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36247.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_36254 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_36254);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_36254,ret){
return (function (){
return fn1.call(null,val_36254);
});})(val_36254,ret))
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
var args36255 = [];
var len__19428__auto___36258 = arguments.length;
var i__19429__auto___36259 = (0);
while(true){
if((i__19429__auto___36259 < len__19428__auto___36258)){
args36255.push((arguments[i__19429__auto___36259]));

var G__36260 = (i__19429__auto___36259 + (1));
i__19429__auto___36259 = G__36260;
continue;
} else {
}
break;
}

var G__36257 = args36255.length;
switch (G__36257) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36255.length)].join('')));

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
var n__19273__auto___36262 = n;
var x_36263 = (0);
while(true){
if((x_36263 < n__19273__auto___36262)){
(a[x_36263] = (0));

var G__36264 = (x_36263 + (1));
x_36263 = G__36264;
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

var G__36265 = (i + (1));
i = G__36265;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async36269 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36269 = (function (alt_flag,flag,meta36270){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta36270 = meta36270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36271,meta36270__$1){
var self__ = this;
var _36271__$1 = this;
return (new cljs.core.async.t_cljs$core$async36269(self__.alt_flag,self__.flag,meta36270__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async36269.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36271){
var self__ = this;
var _36271__$1 = this;
return self__.meta36270;
});})(flag))
;

cljs.core.async.t_cljs$core$async36269.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36269.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async36269.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36269.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36269.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36270","meta36270",1341189309,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async36269.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36269";

cljs.core.async.t_cljs$core$async36269.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async36269");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async36269 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36269(alt_flag__$1,flag__$1,meta36270){
return (new cljs.core.async.t_cljs$core$async36269(alt_flag__$1,flag__$1,meta36270));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async36269(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async36275 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36275 = (function (alt_handler,flag,cb,meta36276){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta36276 = meta36276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36277,meta36276__$1){
var self__ = this;
var _36277__$1 = this;
return (new cljs.core.async.t_cljs$core$async36275(self__.alt_handler,self__.flag,self__.cb,meta36276__$1));
});

cljs.core.async.t_cljs$core$async36275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36277){
var self__ = this;
var _36277__$1 = this;
return self__.meta36276;
});

cljs.core.async.t_cljs$core$async36275.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36275.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async36275.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36275.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async36275.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36276","meta36276",284885716,null)], null);
});

cljs.core.async.t_cljs$core$async36275.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36275";

cljs.core.async.t_cljs$core$async36275.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async36275");
});

cljs.core.async.__GT_t_cljs$core$async36275 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36275(alt_handler__$1,flag__$1,cb__$1,meta36276){
return (new cljs.core.async.t_cljs$core$async36275(alt_handler__$1,flag__$1,cb__$1,meta36276));
});

}

return (new cljs.core.async.t_cljs$core$async36275(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__36278_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36278_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36279_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36279_SHARP_,port], null));
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
var G__36280 = (i + (1));
i = G__36280;
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
var len__19428__auto___36286 = arguments.length;
var i__19429__auto___36287 = (0);
while(true){
if((i__19429__auto___36287 < len__19428__auto___36286)){
args__19435__auto__.push((arguments[i__19429__auto___36287]));

var G__36288 = (i__19429__auto___36287 + (1));
i__19429__auto___36287 = G__36288;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((1) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19436__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36283){
var map__36284 = p__36283;
var map__36284__$1 = ((((!((map__36284 == null)))?((((map__36284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36284):map__36284);
var opts = map__36284__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36281){
var G__36282 = cljs.core.first.call(null,seq36281);
var seq36281__$1 = cljs.core.next.call(null,seq36281);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36282,seq36281__$1);
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
var args36289 = [];
var len__19428__auto___36339 = arguments.length;
var i__19429__auto___36340 = (0);
while(true){
if((i__19429__auto___36340 < len__19428__auto___36339)){
args36289.push((arguments[i__19429__auto___36340]));

var G__36341 = (i__19429__auto___36340 + (1));
i__19429__auto___36340 = G__36341;
continue;
} else {
}
break;
}

var G__36291 = args36289.length;
switch (G__36291) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36289.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21794__auto___36343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21794__auto___36343){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (c__21794__auto___36343){
return (function (state_36315){
var state_val_36316 = (state_36315[(1)]);
if((state_val_36316 === (7))){
var inst_36311 = (state_36315[(2)]);
var state_36315__$1 = state_36315;
var statearr_36317_36344 = state_36315__$1;
(statearr_36317_36344[(2)] = inst_36311);

(statearr_36317_36344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36316 === (1))){
var state_36315__$1 = state_36315;
var statearr_36318_36345 = state_36315__$1;
(statearr_36318_36345[(2)] = null);

(statearr_36318_36345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36316 === (4))){
var inst_36294 = (state_36315[(7)]);
var inst_36294__$1 = (state_36315[(2)]);
var inst_36295 = (inst_36294__$1 == null);
var state_36315__$1 = (function (){var statearr_36319 = state_36315;
(statearr_36319[(7)] = inst_36294__$1);

return statearr_36319;
})();
if(cljs.core.truth_(inst_36295)){
var statearr_36320_36346 = state_36315__$1;
(statearr_36320_36346[(1)] = (5));

} else {
var statearr_36321_36347 = state_36315__$1;
(statearr_36321_36347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36316 === (13))){
var state_36315__$1 = state_36315;
var statearr_36322_36348 = state_36315__$1;
(statearr_36322_36348[(2)] = null);

(statearr_36322_36348[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36316 === (6))){
var inst_36294 = (state_36315[(7)]);
var state_36315__$1 = state_36315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36315__$1,(11),to,inst_36294);
} else {
if((state_val_36316 === (3))){
var inst_36313 = (state_36315[(2)]);
var state_36315__$1 = state_36315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36315__$1,inst_36313);
} else {
if((state_val_36316 === (12))){
var state_36315__$1 = state_36315;
var statearr_36323_36349 = state_36315__$1;
(statearr_36323_36349[(2)] = null);

(statearr_36323_36349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36316 === (2))){
var state_36315__$1 = state_36315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36315__$1,(4),from);
} else {
if((state_val_36316 === (11))){
var inst_36304 = (state_36315[(2)]);
var state_36315__$1 = state_36315;
if(cljs.core.truth_(inst_36304)){
var statearr_36324_36350 = state_36315__$1;
(statearr_36324_36350[(1)] = (12));

} else {
var statearr_36325_36351 = state_36315__$1;
(statearr_36325_36351[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36316 === (9))){
var state_36315__$1 = state_36315;
var statearr_36326_36352 = state_36315__$1;
(statearr_36326_36352[(2)] = null);

(statearr_36326_36352[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36316 === (5))){
var state_36315__$1 = state_36315;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36327_36353 = state_36315__$1;
(statearr_36327_36353[(1)] = (8));

} else {
var statearr_36328_36354 = state_36315__$1;
(statearr_36328_36354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36316 === (14))){
var inst_36309 = (state_36315[(2)]);
var state_36315__$1 = state_36315;
var statearr_36329_36355 = state_36315__$1;
(statearr_36329_36355[(2)] = inst_36309);

(statearr_36329_36355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36316 === (10))){
var inst_36301 = (state_36315[(2)]);
var state_36315__$1 = state_36315;
var statearr_36330_36356 = state_36315__$1;
(statearr_36330_36356[(2)] = inst_36301);

(statearr_36330_36356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36316 === (8))){
var inst_36298 = cljs.core.async.close_BANG_.call(null,to);
var state_36315__$1 = state_36315;
var statearr_36331_36357 = state_36315__$1;
(statearr_36331_36357[(2)] = inst_36298);

(statearr_36331_36357[(1)] = (10));


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
});})(c__21794__auto___36343))
;
return ((function (switch__21682__auto__,c__21794__auto___36343){
return (function() {
var cljs$core$async$state_machine__21683__auto__ = null;
var cljs$core$async$state_machine__21683__auto____0 = (function (){
var statearr_36335 = [null,null,null,null,null,null,null,null];
(statearr_36335[(0)] = cljs$core$async$state_machine__21683__auto__);

(statearr_36335[(1)] = (1));

return statearr_36335;
});
var cljs$core$async$state_machine__21683__auto____1 = (function (state_36315){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_36315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e36336){if((e36336 instanceof Object)){
var ex__21686__auto__ = e36336;
var statearr_36337_36358 = state_36315;
(statearr_36337_36358[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36359 = state_36315;
state_36315 = G__36359;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
cljs$core$async$state_machine__21683__auto__ = function(state_36315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21683__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21683__auto____1.call(this,state_36315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21683__auto____0;
cljs$core$async$state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21683__auto____1;
return cljs$core$async$state_machine__21683__auto__;
})()
;})(switch__21682__auto__,c__21794__auto___36343))
})();
var state__21796__auto__ = (function (){var statearr_36338 = f__21795__auto__.call(null);
(statearr_36338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto___36343);

return statearr_36338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(c__21794__auto___36343))
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
return (function (p__36543){
var vec__36544 = p__36543;
var v = cljs.core.nth.call(null,vec__36544,(0),null);
var p = cljs.core.nth.call(null,vec__36544,(1),null);
var job = vec__36544;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21794__auto___36726 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21794__auto___36726,res,vec__36544,v,p,job,jobs,results){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (c__21794__auto___36726,res,vec__36544,v,p,job,jobs,results){
return (function (state_36549){
var state_val_36550 = (state_36549[(1)]);
if((state_val_36550 === (1))){
var state_36549__$1 = state_36549;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36549__$1,(2),res,v);
} else {
if((state_val_36550 === (2))){
var inst_36546 = (state_36549[(2)]);
var inst_36547 = cljs.core.async.close_BANG_.call(null,res);
var state_36549__$1 = (function (){var statearr_36551 = state_36549;
(statearr_36551[(7)] = inst_36546);

return statearr_36551;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36549__$1,inst_36547);
} else {
return null;
}
}
});})(c__21794__auto___36726,res,vec__36544,v,p,job,jobs,results))
;
return ((function (switch__21682__auto__,c__21794__auto___36726,res,vec__36544,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____0 = (function (){
var statearr_36555 = [null,null,null,null,null,null,null,null];
(statearr_36555[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__);

(statearr_36555[(1)] = (1));

return statearr_36555;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____1 = (function (state_36549){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_36549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e36556){if((e36556 instanceof Object)){
var ex__21686__auto__ = e36556;
var statearr_36557_36727 = state_36549;
(statearr_36557_36727[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36728 = state_36549;
state_36549 = G__36728;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__ = function(state_36549){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____1.call(this,state_36549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__;
})()
;})(switch__21682__auto__,c__21794__auto___36726,res,vec__36544,v,p,job,jobs,results))
})();
var state__21796__auto__ = (function (){var statearr_36558 = f__21795__auto__.call(null);
(statearr_36558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto___36726);

return statearr_36558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(c__21794__auto___36726,res,vec__36544,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36559){
var vec__36560 = p__36559;
var v = cljs.core.nth.call(null,vec__36560,(0),null);
var p = cljs.core.nth.call(null,vec__36560,(1),null);
var job = vec__36560;
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
var n__19273__auto___36729 = n;
var __36730 = (0);
while(true){
if((__36730 < n__19273__auto___36729)){
var G__36561_36731 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36561_36731) {
case "compute":
var c__21794__auto___36733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36730,c__21794__auto___36733,G__36561_36731,n__19273__auto___36729,jobs,results,process,async){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (__36730,c__21794__auto___36733,G__36561_36731,n__19273__auto___36729,jobs,results,process,async){
return (function (state_36574){
var state_val_36575 = (state_36574[(1)]);
if((state_val_36575 === (1))){
var state_36574__$1 = state_36574;
var statearr_36576_36734 = state_36574__$1;
(statearr_36576_36734[(2)] = null);

(statearr_36576_36734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (2))){
var state_36574__$1 = state_36574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36574__$1,(4),jobs);
} else {
if((state_val_36575 === (3))){
var inst_36572 = (state_36574[(2)]);
var state_36574__$1 = state_36574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36574__$1,inst_36572);
} else {
if((state_val_36575 === (4))){
var inst_36564 = (state_36574[(2)]);
var inst_36565 = process.call(null,inst_36564);
var state_36574__$1 = state_36574;
if(cljs.core.truth_(inst_36565)){
var statearr_36577_36735 = state_36574__$1;
(statearr_36577_36735[(1)] = (5));

} else {
var statearr_36578_36736 = state_36574__$1;
(statearr_36578_36736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (5))){
var state_36574__$1 = state_36574;
var statearr_36579_36737 = state_36574__$1;
(statearr_36579_36737[(2)] = null);

(statearr_36579_36737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (6))){
var state_36574__$1 = state_36574;
var statearr_36580_36738 = state_36574__$1;
(statearr_36580_36738[(2)] = null);

(statearr_36580_36738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (7))){
var inst_36570 = (state_36574[(2)]);
var state_36574__$1 = state_36574;
var statearr_36581_36739 = state_36574__$1;
(statearr_36581_36739[(2)] = inst_36570);

(statearr_36581_36739[(1)] = (3));


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
});})(__36730,c__21794__auto___36733,G__36561_36731,n__19273__auto___36729,jobs,results,process,async))
;
return ((function (__36730,switch__21682__auto__,c__21794__auto___36733,G__36561_36731,n__19273__auto___36729,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____0 = (function (){
var statearr_36585 = [null,null,null,null,null,null,null];
(statearr_36585[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__);

(statearr_36585[(1)] = (1));

return statearr_36585;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____1 = (function (state_36574){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_36574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e36586){if((e36586 instanceof Object)){
var ex__21686__auto__ = e36586;
var statearr_36587_36740 = state_36574;
(statearr_36587_36740[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36741 = state_36574;
state_36574 = G__36741;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__ = function(state_36574){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____1.call(this,state_36574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__;
})()
;})(__36730,switch__21682__auto__,c__21794__auto___36733,G__36561_36731,n__19273__auto___36729,jobs,results,process,async))
})();
var state__21796__auto__ = (function (){var statearr_36588 = f__21795__auto__.call(null);
(statearr_36588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto___36733);

return statearr_36588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(__36730,c__21794__auto___36733,G__36561_36731,n__19273__auto___36729,jobs,results,process,async))
);


break;
case "async":
var c__21794__auto___36742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36730,c__21794__auto___36742,G__36561_36731,n__19273__auto___36729,jobs,results,process,async){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (__36730,c__21794__auto___36742,G__36561_36731,n__19273__auto___36729,jobs,results,process,async){
return (function (state_36601){
var state_val_36602 = (state_36601[(1)]);
if((state_val_36602 === (1))){
var state_36601__$1 = state_36601;
var statearr_36603_36743 = state_36601__$1;
(statearr_36603_36743[(2)] = null);

(statearr_36603_36743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (2))){
var state_36601__$1 = state_36601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36601__$1,(4),jobs);
} else {
if((state_val_36602 === (3))){
var inst_36599 = (state_36601[(2)]);
var state_36601__$1 = state_36601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36601__$1,inst_36599);
} else {
if((state_val_36602 === (4))){
var inst_36591 = (state_36601[(2)]);
var inst_36592 = async.call(null,inst_36591);
var state_36601__$1 = state_36601;
if(cljs.core.truth_(inst_36592)){
var statearr_36604_36744 = state_36601__$1;
(statearr_36604_36744[(1)] = (5));

} else {
var statearr_36605_36745 = state_36601__$1;
(statearr_36605_36745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (5))){
var state_36601__$1 = state_36601;
var statearr_36606_36746 = state_36601__$1;
(statearr_36606_36746[(2)] = null);

(statearr_36606_36746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (6))){
var state_36601__$1 = state_36601;
var statearr_36607_36747 = state_36601__$1;
(statearr_36607_36747[(2)] = null);

(statearr_36607_36747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (7))){
var inst_36597 = (state_36601[(2)]);
var state_36601__$1 = state_36601;
var statearr_36608_36748 = state_36601__$1;
(statearr_36608_36748[(2)] = inst_36597);

(statearr_36608_36748[(1)] = (3));


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
});})(__36730,c__21794__auto___36742,G__36561_36731,n__19273__auto___36729,jobs,results,process,async))
;
return ((function (__36730,switch__21682__auto__,c__21794__auto___36742,G__36561_36731,n__19273__auto___36729,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____0 = (function (){
var statearr_36612 = [null,null,null,null,null,null,null];
(statearr_36612[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__);

(statearr_36612[(1)] = (1));

return statearr_36612;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____1 = (function (state_36601){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_36601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e36613){if((e36613 instanceof Object)){
var ex__21686__auto__ = e36613;
var statearr_36614_36749 = state_36601;
(statearr_36614_36749[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36750 = state_36601;
state_36601 = G__36750;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__ = function(state_36601){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____1.call(this,state_36601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__;
})()
;})(__36730,switch__21682__auto__,c__21794__auto___36742,G__36561_36731,n__19273__auto___36729,jobs,results,process,async))
})();
var state__21796__auto__ = (function (){var statearr_36615 = f__21795__auto__.call(null);
(statearr_36615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto___36742);

return statearr_36615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(__36730,c__21794__auto___36742,G__36561_36731,n__19273__auto___36729,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__36751 = (__36730 + (1));
__36730 = G__36751;
continue;
} else {
}
break;
}

var c__21794__auto___36752 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21794__auto___36752,jobs,results,process,async){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (c__21794__auto___36752,jobs,results,process,async){
return (function (state_36637){
var state_val_36638 = (state_36637[(1)]);
if((state_val_36638 === (1))){
var state_36637__$1 = state_36637;
var statearr_36639_36753 = state_36637__$1;
(statearr_36639_36753[(2)] = null);

(statearr_36639_36753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36638 === (2))){
var state_36637__$1 = state_36637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36637__$1,(4),from);
} else {
if((state_val_36638 === (3))){
var inst_36635 = (state_36637[(2)]);
var state_36637__$1 = state_36637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36637__$1,inst_36635);
} else {
if((state_val_36638 === (4))){
var inst_36618 = (state_36637[(7)]);
var inst_36618__$1 = (state_36637[(2)]);
var inst_36619 = (inst_36618__$1 == null);
var state_36637__$1 = (function (){var statearr_36640 = state_36637;
(statearr_36640[(7)] = inst_36618__$1);

return statearr_36640;
})();
if(cljs.core.truth_(inst_36619)){
var statearr_36641_36754 = state_36637__$1;
(statearr_36641_36754[(1)] = (5));

} else {
var statearr_36642_36755 = state_36637__$1;
(statearr_36642_36755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36638 === (5))){
var inst_36621 = cljs.core.async.close_BANG_.call(null,jobs);
var state_36637__$1 = state_36637;
var statearr_36643_36756 = state_36637__$1;
(statearr_36643_36756[(2)] = inst_36621);

(statearr_36643_36756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36638 === (6))){
var inst_36623 = (state_36637[(8)]);
var inst_36618 = (state_36637[(7)]);
var inst_36623__$1 = cljs.core.async.chan.call(null,(1));
var inst_36624 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36625 = [inst_36618,inst_36623__$1];
var inst_36626 = (new cljs.core.PersistentVector(null,2,(5),inst_36624,inst_36625,null));
var state_36637__$1 = (function (){var statearr_36644 = state_36637;
(statearr_36644[(8)] = inst_36623__$1);

return statearr_36644;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36637__$1,(8),jobs,inst_36626);
} else {
if((state_val_36638 === (7))){
var inst_36633 = (state_36637[(2)]);
var state_36637__$1 = state_36637;
var statearr_36645_36757 = state_36637__$1;
(statearr_36645_36757[(2)] = inst_36633);

(statearr_36645_36757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36638 === (8))){
var inst_36623 = (state_36637[(8)]);
var inst_36628 = (state_36637[(2)]);
var state_36637__$1 = (function (){var statearr_36646 = state_36637;
(statearr_36646[(9)] = inst_36628);

return statearr_36646;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36637__$1,(9),results,inst_36623);
} else {
if((state_val_36638 === (9))){
var inst_36630 = (state_36637[(2)]);
var state_36637__$1 = (function (){var statearr_36647 = state_36637;
(statearr_36647[(10)] = inst_36630);

return statearr_36647;
})();
var statearr_36648_36758 = state_36637__$1;
(statearr_36648_36758[(2)] = null);

(statearr_36648_36758[(1)] = (2));


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
});})(c__21794__auto___36752,jobs,results,process,async))
;
return ((function (switch__21682__auto__,c__21794__auto___36752,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____0 = (function (){
var statearr_36652 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36652[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__);

(statearr_36652[(1)] = (1));

return statearr_36652;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____1 = (function (state_36637){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_36637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e36653){if((e36653 instanceof Object)){
var ex__21686__auto__ = e36653;
var statearr_36654_36759 = state_36637;
(statearr_36654_36759[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36760 = state_36637;
state_36637 = G__36760;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__ = function(state_36637){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____1.call(this,state_36637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__;
})()
;})(switch__21682__auto__,c__21794__auto___36752,jobs,results,process,async))
})();
var state__21796__auto__ = (function (){var statearr_36655 = f__21795__auto__.call(null);
(statearr_36655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto___36752);

return statearr_36655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(c__21794__auto___36752,jobs,results,process,async))
);


var c__21794__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21794__auto__,jobs,results,process,async){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (c__21794__auto__,jobs,results,process,async){
return (function (state_36693){
var state_val_36694 = (state_36693[(1)]);
if((state_val_36694 === (7))){
var inst_36689 = (state_36693[(2)]);
var state_36693__$1 = state_36693;
var statearr_36695_36761 = state_36693__$1;
(statearr_36695_36761[(2)] = inst_36689);

(statearr_36695_36761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (20))){
var state_36693__$1 = state_36693;
var statearr_36696_36762 = state_36693__$1;
(statearr_36696_36762[(2)] = null);

(statearr_36696_36762[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (1))){
var state_36693__$1 = state_36693;
var statearr_36697_36763 = state_36693__$1;
(statearr_36697_36763[(2)] = null);

(statearr_36697_36763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (4))){
var inst_36658 = (state_36693[(7)]);
var inst_36658__$1 = (state_36693[(2)]);
var inst_36659 = (inst_36658__$1 == null);
var state_36693__$1 = (function (){var statearr_36698 = state_36693;
(statearr_36698[(7)] = inst_36658__$1);

return statearr_36698;
})();
if(cljs.core.truth_(inst_36659)){
var statearr_36699_36764 = state_36693__$1;
(statearr_36699_36764[(1)] = (5));

} else {
var statearr_36700_36765 = state_36693__$1;
(statearr_36700_36765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (15))){
var inst_36671 = (state_36693[(8)]);
var state_36693__$1 = state_36693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36693__$1,(18),to,inst_36671);
} else {
if((state_val_36694 === (21))){
var inst_36684 = (state_36693[(2)]);
var state_36693__$1 = state_36693;
var statearr_36701_36766 = state_36693__$1;
(statearr_36701_36766[(2)] = inst_36684);

(statearr_36701_36766[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (13))){
var inst_36686 = (state_36693[(2)]);
var state_36693__$1 = (function (){var statearr_36702 = state_36693;
(statearr_36702[(9)] = inst_36686);

return statearr_36702;
})();
var statearr_36703_36767 = state_36693__$1;
(statearr_36703_36767[(2)] = null);

(statearr_36703_36767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (6))){
var inst_36658 = (state_36693[(7)]);
var state_36693__$1 = state_36693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36693__$1,(11),inst_36658);
} else {
if((state_val_36694 === (17))){
var inst_36679 = (state_36693[(2)]);
var state_36693__$1 = state_36693;
if(cljs.core.truth_(inst_36679)){
var statearr_36704_36768 = state_36693__$1;
(statearr_36704_36768[(1)] = (19));

} else {
var statearr_36705_36769 = state_36693__$1;
(statearr_36705_36769[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (3))){
var inst_36691 = (state_36693[(2)]);
var state_36693__$1 = state_36693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36693__$1,inst_36691);
} else {
if((state_val_36694 === (12))){
var inst_36668 = (state_36693[(10)]);
var state_36693__$1 = state_36693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36693__$1,(14),inst_36668);
} else {
if((state_val_36694 === (2))){
var state_36693__$1 = state_36693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36693__$1,(4),results);
} else {
if((state_val_36694 === (19))){
var state_36693__$1 = state_36693;
var statearr_36706_36770 = state_36693__$1;
(statearr_36706_36770[(2)] = null);

(statearr_36706_36770[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (11))){
var inst_36668 = (state_36693[(2)]);
var state_36693__$1 = (function (){var statearr_36707 = state_36693;
(statearr_36707[(10)] = inst_36668);

return statearr_36707;
})();
var statearr_36708_36771 = state_36693__$1;
(statearr_36708_36771[(2)] = null);

(statearr_36708_36771[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (9))){
var state_36693__$1 = state_36693;
var statearr_36709_36772 = state_36693__$1;
(statearr_36709_36772[(2)] = null);

(statearr_36709_36772[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (5))){
var state_36693__$1 = state_36693;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36710_36773 = state_36693__$1;
(statearr_36710_36773[(1)] = (8));

} else {
var statearr_36711_36774 = state_36693__$1;
(statearr_36711_36774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (14))){
var inst_36671 = (state_36693[(8)]);
var inst_36673 = (state_36693[(11)]);
var inst_36671__$1 = (state_36693[(2)]);
var inst_36672 = (inst_36671__$1 == null);
var inst_36673__$1 = cljs.core.not.call(null,inst_36672);
var state_36693__$1 = (function (){var statearr_36712 = state_36693;
(statearr_36712[(8)] = inst_36671__$1);

(statearr_36712[(11)] = inst_36673__$1);

return statearr_36712;
})();
if(inst_36673__$1){
var statearr_36713_36775 = state_36693__$1;
(statearr_36713_36775[(1)] = (15));

} else {
var statearr_36714_36776 = state_36693__$1;
(statearr_36714_36776[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (16))){
var inst_36673 = (state_36693[(11)]);
var state_36693__$1 = state_36693;
var statearr_36715_36777 = state_36693__$1;
(statearr_36715_36777[(2)] = inst_36673);

(statearr_36715_36777[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (10))){
var inst_36665 = (state_36693[(2)]);
var state_36693__$1 = state_36693;
var statearr_36716_36778 = state_36693__$1;
(statearr_36716_36778[(2)] = inst_36665);

(statearr_36716_36778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (18))){
var inst_36676 = (state_36693[(2)]);
var state_36693__$1 = state_36693;
var statearr_36717_36779 = state_36693__$1;
(statearr_36717_36779[(2)] = inst_36676);

(statearr_36717_36779[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (8))){
var inst_36662 = cljs.core.async.close_BANG_.call(null,to);
var state_36693__$1 = state_36693;
var statearr_36718_36780 = state_36693__$1;
(statearr_36718_36780[(2)] = inst_36662);

(statearr_36718_36780[(1)] = (10));


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
});})(c__21794__auto__,jobs,results,process,async))
;
return ((function (switch__21682__auto__,c__21794__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____0 = (function (){
var statearr_36722 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36722[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__);

(statearr_36722[(1)] = (1));

return statearr_36722;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____1 = (function (state_36693){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_36693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e36723){if((e36723 instanceof Object)){
var ex__21686__auto__ = e36723;
var statearr_36724_36781 = state_36693;
(statearr_36724_36781[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36782 = state_36693;
state_36693 = G__36782;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__ = function(state_36693){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____1.call(this,state_36693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21683__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21683__auto__;
})()
;})(switch__21682__auto__,c__21794__auto__,jobs,results,process,async))
})();
var state__21796__auto__ = (function (){var statearr_36725 = f__21795__auto__.call(null);
(statearr_36725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto__);

return statearr_36725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(c__21794__auto__,jobs,results,process,async))
);

return c__21794__auto__;
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
var args36783 = [];
var len__19428__auto___36786 = arguments.length;
var i__19429__auto___36787 = (0);
while(true){
if((i__19429__auto___36787 < len__19428__auto___36786)){
args36783.push((arguments[i__19429__auto___36787]));

var G__36788 = (i__19429__auto___36787 + (1));
i__19429__auto___36787 = G__36788;
continue;
} else {
}
break;
}

var G__36785 = args36783.length;
switch (G__36785) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36783.length)].join('')));

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
var args36790 = [];
var len__19428__auto___36793 = arguments.length;
var i__19429__auto___36794 = (0);
while(true){
if((i__19429__auto___36794 < len__19428__auto___36793)){
args36790.push((arguments[i__19429__auto___36794]));

var G__36795 = (i__19429__auto___36794 + (1));
i__19429__auto___36794 = G__36795;
continue;
} else {
}
break;
}

var G__36792 = args36790.length;
switch (G__36792) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36790.length)].join('')));

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
var args36797 = [];
var len__19428__auto___36850 = arguments.length;
var i__19429__auto___36851 = (0);
while(true){
if((i__19429__auto___36851 < len__19428__auto___36850)){
args36797.push((arguments[i__19429__auto___36851]));

var G__36852 = (i__19429__auto___36851 + (1));
i__19429__auto___36851 = G__36852;
continue;
} else {
}
break;
}

var G__36799 = args36797.length;
switch (G__36799) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36797.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21794__auto___36854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21794__auto___36854,tc,fc){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (c__21794__auto___36854,tc,fc){
return (function (state_36825){
var state_val_36826 = (state_36825[(1)]);
if((state_val_36826 === (7))){
var inst_36821 = (state_36825[(2)]);
var state_36825__$1 = state_36825;
var statearr_36827_36855 = state_36825__$1;
(statearr_36827_36855[(2)] = inst_36821);

(statearr_36827_36855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36826 === (1))){
var state_36825__$1 = state_36825;
var statearr_36828_36856 = state_36825__$1;
(statearr_36828_36856[(2)] = null);

(statearr_36828_36856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36826 === (4))){
var inst_36802 = (state_36825[(7)]);
var inst_36802__$1 = (state_36825[(2)]);
var inst_36803 = (inst_36802__$1 == null);
var state_36825__$1 = (function (){var statearr_36829 = state_36825;
(statearr_36829[(7)] = inst_36802__$1);

return statearr_36829;
})();
if(cljs.core.truth_(inst_36803)){
var statearr_36830_36857 = state_36825__$1;
(statearr_36830_36857[(1)] = (5));

} else {
var statearr_36831_36858 = state_36825__$1;
(statearr_36831_36858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36826 === (13))){
var state_36825__$1 = state_36825;
var statearr_36832_36859 = state_36825__$1;
(statearr_36832_36859[(2)] = null);

(statearr_36832_36859[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36826 === (6))){
var inst_36802 = (state_36825[(7)]);
var inst_36808 = p.call(null,inst_36802);
var state_36825__$1 = state_36825;
if(cljs.core.truth_(inst_36808)){
var statearr_36833_36860 = state_36825__$1;
(statearr_36833_36860[(1)] = (9));

} else {
var statearr_36834_36861 = state_36825__$1;
(statearr_36834_36861[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36826 === (3))){
var inst_36823 = (state_36825[(2)]);
var state_36825__$1 = state_36825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36825__$1,inst_36823);
} else {
if((state_val_36826 === (12))){
var state_36825__$1 = state_36825;
var statearr_36835_36862 = state_36825__$1;
(statearr_36835_36862[(2)] = null);

(statearr_36835_36862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36826 === (2))){
var state_36825__$1 = state_36825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36825__$1,(4),ch);
} else {
if((state_val_36826 === (11))){
var inst_36802 = (state_36825[(7)]);
var inst_36812 = (state_36825[(2)]);
var state_36825__$1 = state_36825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36825__$1,(8),inst_36812,inst_36802);
} else {
if((state_val_36826 === (9))){
var state_36825__$1 = state_36825;
var statearr_36836_36863 = state_36825__$1;
(statearr_36836_36863[(2)] = tc);

(statearr_36836_36863[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36826 === (5))){
var inst_36805 = cljs.core.async.close_BANG_.call(null,tc);
var inst_36806 = cljs.core.async.close_BANG_.call(null,fc);
var state_36825__$1 = (function (){var statearr_36837 = state_36825;
(statearr_36837[(8)] = inst_36805);

return statearr_36837;
})();
var statearr_36838_36864 = state_36825__$1;
(statearr_36838_36864[(2)] = inst_36806);

(statearr_36838_36864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36826 === (14))){
var inst_36819 = (state_36825[(2)]);
var state_36825__$1 = state_36825;
var statearr_36839_36865 = state_36825__$1;
(statearr_36839_36865[(2)] = inst_36819);

(statearr_36839_36865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36826 === (10))){
var state_36825__$1 = state_36825;
var statearr_36840_36866 = state_36825__$1;
(statearr_36840_36866[(2)] = fc);

(statearr_36840_36866[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36826 === (8))){
var inst_36814 = (state_36825[(2)]);
var state_36825__$1 = state_36825;
if(cljs.core.truth_(inst_36814)){
var statearr_36841_36867 = state_36825__$1;
(statearr_36841_36867[(1)] = (12));

} else {
var statearr_36842_36868 = state_36825__$1;
(statearr_36842_36868[(1)] = (13));

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
});})(c__21794__auto___36854,tc,fc))
;
return ((function (switch__21682__auto__,c__21794__auto___36854,tc,fc){
return (function() {
var cljs$core$async$state_machine__21683__auto__ = null;
var cljs$core$async$state_machine__21683__auto____0 = (function (){
var statearr_36846 = [null,null,null,null,null,null,null,null,null];
(statearr_36846[(0)] = cljs$core$async$state_machine__21683__auto__);

(statearr_36846[(1)] = (1));

return statearr_36846;
});
var cljs$core$async$state_machine__21683__auto____1 = (function (state_36825){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_36825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e36847){if((e36847 instanceof Object)){
var ex__21686__auto__ = e36847;
var statearr_36848_36869 = state_36825;
(statearr_36848_36869[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36870 = state_36825;
state_36825 = G__36870;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
cljs$core$async$state_machine__21683__auto__ = function(state_36825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21683__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21683__auto____1.call(this,state_36825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21683__auto____0;
cljs$core$async$state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21683__auto____1;
return cljs$core$async$state_machine__21683__auto__;
})()
;})(switch__21682__auto__,c__21794__auto___36854,tc,fc))
})();
var state__21796__auto__ = (function (){var statearr_36849 = f__21795__auto__.call(null);
(statearr_36849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto___36854);

return statearr_36849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(c__21794__auto___36854,tc,fc))
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
var c__21794__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21794__auto__){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (c__21794__auto__){
return (function (state_36934){
var state_val_36935 = (state_36934[(1)]);
if((state_val_36935 === (7))){
var inst_36930 = (state_36934[(2)]);
var state_36934__$1 = state_36934;
var statearr_36936_36957 = state_36934__$1;
(statearr_36936_36957[(2)] = inst_36930);

(statearr_36936_36957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36935 === (1))){
var inst_36914 = init;
var state_36934__$1 = (function (){var statearr_36937 = state_36934;
(statearr_36937[(7)] = inst_36914);

return statearr_36937;
})();
var statearr_36938_36958 = state_36934__$1;
(statearr_36938_36958[(2)] = null);

(statearr_36938_36958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36935 === (4))){
var inst_36917 = (state_36934[(8)]);
var inst_36917__$1 = (state_36934[(2)]);
var inst_36918 = (inst_36917__$1 == null);
var state_36934__$1 = (function (){var statearr_36939 = state_36934;
(statearr_36939[(8)] = inst_36917__$1);

return statearr_36939;
})();
if(cljs.core.truth_(inst_36918)){
var statearr_36940_36959 = state_36934__$1;
(statearr_36940_36959[(1)] = (5));

} else {
var statearr_36941_36960 = state_36934__$1;
(statearr_36941_36960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36935 === (6))){
var inst_36914 = (state_36934[(7)]);
var inst_36917 = (state_36934[(8)]);
var inst_36921 = (state_36934[(9)]);
var inst_36921__$1 = f.call(null,inst_36914,inst_36917);
var inst_36922 = cljs.core.reduced_QMARK_.call(null,inst_36921__$1);
var state_36934__$1 = (function (){var statearr_36942 = state_36934;
(statearr_36942[(9)] = inst_36921__$1);

return statearr_36942;
})();
if(inst_36922){
var statearr_36943_36961 = state_36934__$1;
(statearr_36943_36961[(1)] = (8));

} else {
var statearr_36944_36962 = state_36934__$1;
(statearr_36944_36962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36935 === (3))){
var inst_36932 = (state_36934[(2)]);
var state_36934__$1 = state_36934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36934__$1,inst_36932);
} else {
if((state_val_36935 === (2))){
var state_36934__$1 = state_36934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36934__$1,(4),ch);
} else {
if((state_val_36935 === (9))){
var inst_36921 = (state_36934[(9)]);
var inst_36914 = inst_36921;
var state_36934__$1 = (function (){var statearr_36945 = state_36934;
(statearr_36945[(7)] = inst_36914);

return statearr_36945;
})();
var statearr_36946_36963 = state_36934__$1;
(statearr_36946_36963[(2)] = null);

(statearr_36946_36963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36935 === (5))){
var inst_36914 = (state_36934[(7)]);
var state_36934__$1 = state_36934;
var statearr_36947_36964 = state_36934__$1;
(statearr_36947_36964[(2)] = inst_36914);

(statearr_36947_36964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36935 === (10))){
var inst_36928 = (state_36934[(2)]);
var state_36934__$1 = state_36934;
var statearr_36948_36965 = state_36934__$1;
(statearr_36948_36965[(2)] = inst_36928);

(statearr_36948_36965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36935 === (8))){
var inst_36921 = (state_36934[(9)]);
var inst_36924 = cljs.core.deref.call(null,inst_36921);
var state_36934__$1 = state_36934;
var statearr_36949_36966 = state_36934__$1;
(statearr_36949_36966[(2)] = inst_36924);

(statearr_36949_36966[(1)] = (10));


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
});})(c__21794__auto__))
;
return ((function (switch__21682__auto__,c__21794__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21683__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21683__auto____0 = (function (){
var statearr_36953 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36953[(0)] = cljs$core$async$reduce_$_state_machine__21683__auto__);

(statearr_36953[(1)] = (1));

return statearr_36953;
});
var cljs$core$async$reduce_$_state_machine__21683__auto____1 = (function (state_36934){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_36934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e36954){if((e36954 instanceof Object)){
var ex__21686__auto__ = e36954;
var statearr_36955_36967 = state_36934;
(statearr_36955_36967[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36968 = state_36934;
state_36934 = G__36968;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21683__auto__ = function(state_36934){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21683__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21683__auto____1.call(this,state_36934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21683__auto____0;
cljs$core$async$reduce_$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21683__auto____1;
return cljs$core$async$reduce_$_state_machine__21683__auto__;
})()
;})(switch__21682__auto__,c__21794__auto__))
})();
var state__21796__auto__ = (function (){var statearr_36956 = f__21795__auto__.call(null);
(statearr_36956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto__);

return statearr_36956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(c__21794__auto__))
);

return c__21794__auto__;
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
var args36969 = [];
var len__19428__auto___37021 = arguments.length;
var i__19429__auto___37022 = (0);
while(true){
if((i__19429__auto___37022 < len__19428__auto___37021)){
args36969.push((arguments[i__19429__auto___37022]));

var G__37023 = (i__19429__auto___37022 + (1));
i__19429__auto___37022 = G__37023;
continue;
} else {
}
break;
}

var G__36971 = args36969.length;
switch (G__36971) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36969.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21794__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21794__auto__){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (c__21794__auto__){
return (function (state_36996){
var state_val_36997 = (state_36996[(1)]);
if((state_val_36997 === (7))){
var inst_36978 = (state_36996[(2)]);
var state_36996__$1 = state_36996;
var statearr_36998_37025 = state_36996__$1;
(statearr_36998_37025[(2)] = inst_36978);

(statearr_36998_37025[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36997 === (1))){
var inst_36972 = cljs.core.seq.call(null,coll);
var inst_36973 = inst_36972;
var state_36996__$1 = (function (){var statearr_36999 = state_36996;
(statearr_36999[(7)] = inst_36973);

return statearr_36999;
})();
var statearr_37000_37026 = state_36996__$1;
(statearr_37000_37026[(2)] = null);

(statearr_37000_37026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36997 === (4))){
var inst_36973 = (state_36996[(7)]);
var inst_36976 = cljs.core.first.call(null,inst_36973);
var state_36996__$1 = state_36996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36996__$1,(7),ch,inst_36976);
} else {
if((state_val_36997 === (13))){
var inst_36990 = (state_36996[(2)]);
var state_36996__$1 = state_36996;
var statearr_37001_37027 = state_36996__$1;
(statearr_37001_37027[(2)] = inst_36990);

(statearr_37001_37027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36997 === (6))){
var inst_36981 = (state_36996[(2)]);
var state_36996__$1 = state_36996;
if(cljs.core.truth_(inst_36981)){
var statearr_37002_37028 = state_36996__$1;
(statearr_37002_37028[(1)] = (8));

} else {
var statearr_37003_37029 = state_36996__$1;
(statearr_37003_37029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36997 === (3))){
var inst_36994 = (state_36996[(2)]);
var state_36996__$1 = state_36996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36996__$1,inst_36994);
} else {
if((state_val_36997 === (12))){
var state_36996__$1 = state_36996;
var statearr_37004_37030 = state_36996__$1;
(statearr_37004_37030[(2)] = null);

(statearr_37004_37030[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36997 === (2))){
var inst_36973 = (state_36996[(7)]);
var state_36996__$1 = state_36996;
if(cljs.core.truth_(inst_36973)){
var statearr_37005_37031 = state_36996__$1;
(statearr_37005_37031[(1)] = (4));

} else {
var statearr_37006_37032 = state_36996__$1;
(statearr_37006_37032[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36997 === (11))){
var inst_36987 = cljs.core.async.close_BANG_.call(null,ch);
var state_36996__$1 = state_36996;
var statearr_37007_37033 = state_36996__$1;
(statearr_37007_37033[(2)] = inst_36987);

(statearr_37007_37033[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36997 === (9))){
var state_36996__$1 = state_36996;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37008_37034 = state_36996__$1;
(statearr_37008_37034[(1)] = (11));

} else {
var statearr_37009_37035 = state_36996__$1;
(statearr_37009_37035[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36997 === (5))){
var inst_36973 = (state_36996[(7)]);
var state_36996__$1 = state_36996;
var statearr_37010_37036 = state_36996__$1;
(statearr_37010_37036[(2)] = inst_36973);

(statearr_37010_37036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36997 === (10))){
var inst_36992 = (state_36996[(2)]);
var state_36996__$1 = state_36996;
var statearr_37011_37037 = state_36996__$1;
(statearr_37011_37037[(2)] = inst_36992);

(statearr_37011_37037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36997 === (8))){
var inst_36973 = (state_36996[(7)]);
var inst_36983 = cljs.core.next.call(null,inst_36973);
var inst_36973__$1 = inst_36983;
var state_36996__$1 = (function (){var statearr_37012 = state_36996;
(statearr_37012[(7)] = inst_36973__$1);

return statearr_37012;
})();
var statearr_37013_37038 = state_36996__$1;
(statearr_37013_37038[(2)] = null);

(statearr_37013_37038[(1)] = (2));


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
});})(c__21794__auto__))
;
return ((function (switch__21682__auto__,c__21794__auto__){
return (function() {
var cljs$core$async$state_machine__21683__auto__ = null;
var cljs$core$async$state_machine__21683__auto____0 = (function (){
var statearr_37017 = [null,null,null,null,null,null,null,null];
(statearr_37017[(0)] = cljs$core$async$state_machine__21683__auto__);

(statearr_37017[(1)] = (1));

return statearr_37017;
});
var cljs$core$async$state_machine__21683__auto____1 = (function (state_36996){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_36996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e37018){if((e37018 instanceof Object)){
var ex__21686__auto__ = e37018;
var statearr_37019_37039 = state_36996;
(statearr_37019_37039[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37040 = state_36996;
state_36996 = G__37040;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
cljs$core$async$state_machine__21683__auto__ = function(state_36996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21683__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21683__auto____1.call(this,state_36996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21683__auto____0;
cljs$core$async$state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21683__auto____1;
return cljs$core$async$state_machine__21683__auto__;
})()
;})(switch__21682__auto__,c__21794__auto__))
})();
var state__21796__auto__ = (function (){var statearr_37020 = f__21795__auto__.call(null);
(statearr_37020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto__);

return statearr_37020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(c__21794__auto__))
);

return c__21794__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async37262 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37262 = (function (mult,ch,cs,meta37263){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta37263 = meta37263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37264,meta37263__$1){
var self__ = this;
var _37264__$1 = this;
return (new cljs.core.async.t_cljs$core$async37262(self__.mult,self__.ch,self__.cs,meta37263__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async37262.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37264){
var self__ = this;
var _37264__$1 = this;
return self__.meta37263;
});})(cs))
;

cljs.core.async.t_cljs$core$async37262.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37262.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async37262.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async37262.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37262.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37262.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37262.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37263","meta37263",336908905,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async37262.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37262.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37262";

cljs.core.async.t_cljs$core$async37262.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async37262");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async37262 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async37262(mult__$1,ch__$1,cs__$1,meta37263){
return (new cljs.core.async.t_cljs$core$async37262(mult__$1,ch__$1,cs__$1,meta37263));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async37262(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21794__auto___37483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21794__auto___37483,cs,m,dchan,dctr,done){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (c__21794__auto___37483,cs,m,dchan,dctr,done){
return (function (state_37395){
var state_val_37396 = (state_37395[(1)]);
if((state_val_37396 === (7))){
var inst_37391 = (state_37395[(2)]);
var state_37395__$1 = state_37395;
var statearr_37397_37484 = state_37395__$1;
(statearr_37397_37484[(2)] = inst_37391);

(statearr_37397_37484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (20))){
var inst_37296 = (state_37395[(7)]);
var inst_37306 = cljs.core.first.call(null,inst_37296);
var inst_37307 = cljs.core.nth.call(null,inst_37306,(0),null);
var inst_37308 = cljs.core.nth.call(null,inst_37306,(1),null);
var state_37395__$1 = (function (){var statearr_37398 = state_37395;
(statearr_37398[(8)] = inst_37307);

return statearr_37398;
})();
if(cljs.core.truth_(inst_37308)){
var statearr_37399_37485 = state_37395__$1;
(statearr_37399_37485[(1)] = (22));

} else {
var statearr_37400_37486 = state_37395__$1;
(statearr_37400_37486[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (27))){
var inst_37336 = (state_37395[(9)]);
var inst_37267 = (state_37395[(10)]);
var inst_37338 = (state_37395[(11)]);
var inst_37343 = (state_37395[(12)]);
var inst_37343__$1 = cljs.core._nth.call(null,inst_37336,inst_37338);
var inst_37344 = cljs.core.async.put_BANG_.call(null,inst_37343__$1,inst_37267,done);
var state_37395__$1 = (function (){var statearr_37401 = state_37395;
(statearr_37401[(12)] = inst_37343__$1);

return statearr_37401;
})();
if(cljs.core.truth_(inst_37344)){
var statearr_37402_37487 = state_37395__$1;
(statearr_37402_37487[(1)] = (30));

} else {
var statearr_37403_37488 = state_37395__$1;
(statearr_37403_37488[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (1))){
var state_37395__$1 = state_37395;
var statearr_37404_37489 = state_37395__$1;
(statearr_37404_37489[(2)] = null);

(statearr_37404_37489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (24))){
var inst_37296 = (state_37395[(7)]);
var inst_37313 = (state_37395[(2)]);
var inst_37314 = cljs.core.next.call(null,inst_37296);
var inst_37276 = inst_37314;
var inst_37277 = null;
var inst_37278 = (0);
var inst_37279 = (0);
var state_37395__$1 = (function (){var statearr_37405 = state_37395;
(statearr_37405[(13)] = inst_37276);

(statearr_37405[(14)] = inst_37313);

(statearr_37405[(15)] = inst_37278);

(statearr_37405[(16)] = inst_37279);

(statearr_37405[(17)] = inst_37277);

return statearr_37405;
})();
var statearr_37406_37490 = state_37395__$1;
(statearr_37406_37490[(2)] = null);

(statearr_37406_37490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (39))){
var state_37395__$1 = state_37395;
var statearr_37410_37491 = state_37395__$1;
(statearr_37410_37491[(2)] = null);

(statearr_37410_37491[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (4))){
var inst_37267 = (state_37395[(10)]);
var inst_37267__$1 = (state_37395[(2)]);
var inst_37268 = (inst_37267__$1 == null);
var state_37395__$1 = (function (){var statearr_37411 = state_37395;
(statearr_37411[(10)] = inst_37267__$1);

return statearr_37411;
})();
if(cljs.core.truth_(inst_37268)){
var statearr_37412_37492 = state_37395__$1;
(statearr_37412_37492[(1)] = (5));

} else {
var statearr_37413_37493 = state_37395__$1;
(statearr_37413_37493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (15))){
var inst_37276 = (state_37395[(13)]);
var inst_37278 = (state_37395[(15)]);
var inst_37279 = (state_37395[(16)]);
var inst_37277 = (state_37395[(17)]);
var inst_37292 = (state_37395[(2)]);
var inst_37293 = (inst_37279 + (1));
var tmp37407 = inst_37276;
var tmp37408 = inst_37278;
var tmp37409 = inst_37277;
var inst_37276__$1 = tmp37407;
var inst_37277__$1 = tmp37409;
var inst_37278__$1 = tmp37408;
var inst_37279__$1 = inst_37293;
var state_37395__$1 = (function (){var statearr_37414 = state_37395;
(statearr_37414[(13)] = inst_37276__$1);

(statearr_37414[(18)] = inst_37292);

(statearr_37414[(15)] = inst_37278__$1);

(statearr_37414[(16)] = inst_37279__$1);

(statearr_37414[(17)] = inst_37277__$1);

return statearr_37414;
})();
var statearr_37415_37494 = state_37395__$1;
(statearr_37415_37494[(2)] = null);

(statearr_37415_37494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (21))){
var inst_37317 = (state_37395[(2)]);
var state_37395__$1 = state_37395;
var statearr_37419_37495 = state_37395__$1;
(statearr_37419_37495[(2)] = inst_37317);

(statearr_37419_37495[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (31))){
var inst_37343 = (state_37395[(12)]);
var inst_37347 = done.call(null,null);
var inst_37348 = cljs.core.async.untap_STAR_.call(null,m,inst_37343);
var state_37395__$1 = (function (){var statearr_37420 = state_37395;
(statearr_37420[(19)] = inst_37347);

return statearr_37420;
})();
var statearr_37421_37496 = state_37395__$1;
(statearr_37421_37496[(2)] = inst_37348);

(statearr_37421_37496[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (32))){
var inst_37337 = (state_37395[(20)]);
var inst_37336 = (state_37395[(9)]);
var inst_37338 = (state_37395[(11)]);
var inst_37335 = (state_37395[(21)]);
var inst_37350 = (state_37395[(2)]);
var inst_37351 = (inst_37338 + (1));
var tmp37416 = inst_37337;
var tmp37417 = inst_37336;
var tmp37418 = inst_37335;
var inst_37335__$1 = tmp37418;
var inst_37336__$1 = tmp37417;
var inst_37337__$1 = tmp37416;
var inst_37338__$1 = inst_37351;
var state_37395__$1 = (function (){var statearr_37422 = state_37395;
(statearr_37422[(20)] = inst_37337__$1);

(statearr_37422[(22)] = inst_37350);

(statearr_37422[(9)] = inst_37336__$1);

(statearr_37422[(11)] = inst_37338__$1);

(statearr_37422[(21)] = inst_37335__$1);

return statearr_37422;
})();
var statearr_37423_37497 = state_37395__$1;
(statearr_37423_37497[(2)] = null);

(statearr_37423_37497[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (40))){
var inst_37363 = (state_37395[(23)]);
var inst_37367 = done.call(null,null);
var inst_37368 = cljs.core.async.untap_STAR_.call(null,m,inst_37363);
var state_37395__$1 = (function (){var statearr_37424 = state_37395;
(statearr_37424[(24)] = inst_37367);

return statearr_37424;
})();
var statearr_37425_37498 = state_37395__$1;
(statearr_37425_37498[(2)] = inst_37368);

(statearr_37425_37498[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (33))){
var inst_37354 = (state_37395[(25)]);
var inst_37356 = cljs.core.chunked_seq_QMARK_.call(null,inst_37354);
var state_37395__$1 = state_37395;
if(inst_37356){
var statearr_37426_37499 = state_37395__$1;
(statearr_37426_37499[(1)] = (36));

} else {
var statearr_37427_37500 = state_37395__$1;
(statearr_37427_37500[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (13))){
var inst_37286 = (state_37395[(26)]);
var inst_37289 = cljs.core.async.close_BANG_.call(null,inst_37286);
var state_37395__$1 = state_37395;
var statearr_37428_37501 = state_37395__$1;
(statearr_37428_37501[(2)] = inst_37289);

(statearr_37428_37501[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (22))){
var inst_37307 = (state_37395[(8)]);
var inst_37310 = cljs.core.async.close_BANG_.call(null,inst_37307);
var state_37395__$1 = state_37395;
var statearr_37429_37502 = state_37395__$1;
(statearr_37429_37502[(2)] = inst_37310);

(statearr_37429_37502[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (36))){
var inst_37354 = (state_37395[(25)]);
var inst_37358 = cljs.core.chunk_first.call(null,inst_37354);
var inst_37359 = cljs.core.chunk_rest.call(null,inst_37354);
var inst_37360 = cljs.core.count.call(null,inst_37358);
var inst_37335 = inst_37359;
var inst_37336 = inst_37358;
var inst_37337 = inst_37360;
var inst_37338 = (0);
var state_37395__$1 = (function (){var statearr_37430 = state_37395;
(statearr_37430[(20)] = inst_37337);

(statearr_37430[(9)] = inst_37336);

(statearr_37430[(11)] = inst_37338);

(statearr_37430[(21)] = inst_37335);

return statearr_37430;
})();
var statearr_37431_37503 = state_37395__$1;
(statearr_37431_37503[(2)] = null);

(statearr_37431_37503[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (41))){
var inst_37354 = (state_37395[(25)]);
var inst_37370 = (state_37395[(2)]);
var inst_37371 = cljs.core.next.call(null,inst_37354);
var inst_37335 = inst_37371;
var inst_37336 = null;
var inst_37337 = (0);
var inst_37338 = (0);
var state_37395__$1 = (function (){var statearr_37432 = state_37395;
(statearr_37432[(20)] = inst_37337);

(statearr_37432[(9)] = inst_37336);

(statearr_37432[(27)] = inst_37370);

(statearr_37432[(11)] = inst_37338);

(statearr_37432[(21)] = inst_37335);

return statearr_37432;
})();
var statearr_37433_37504 = state_37395__$1;
(statearr_37433_37504[(2)] = null);

(statearr_37433_37504[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (43))){
var state_37395__$1 = state_37395;
var statearr_37434_37505 = state_37395__$1;
(statearr_37434_37505[(2)] = null);

(statearr_37434_37505[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (29))){
var inst_37379 = (state_37395[(2)]);
var state_37395__$1 = state_37395;
var statearr_37435_37506 = state_37395__$1;
(statearr_37435_37506[(2)] = inst_37379);

(statearr_37435_37506[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (44))){
var inst_37388 = (state_37395[(2)]);
var state_37395__$1 = (function (){var statearr_37436 = state_37395;
(statearr_37436[(28)] = inst_37388);

return statearr_37436;
})();
var statearr_37437_37507 = state_37395__$1;
(statearr_37437_37507[(2)] = null);

(statearr_37437_37507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (6))){
var inst_37327 = (state_37395[(29)]);
var inst_37326 = cljs.core.deref.call(null,cs);
var inst_37327__$1 = cljs.core.keys.call(null,inst_37326);
var inst_37328 = cljs.core.count.call(null,inst_37327__$1);
var inst_37329 = cljs.core.reset_BANG_.call(null,dctr,inst_37328);
var inst_37334 = cljs.core.seq.call(null,inst_37327__$1);
var inst_37335 = inst_37334;
var inst_37336 = null;
var inst_37337 = (0);
var inst_37338 = (0);
var state_37395__$1 = (function (){var statearr_37438 = state_37395;
(statearr_37438[(29)] = inst_37327__$1);

(statearr_37438[(20)] = inst_37337);

(statearr_37438[(9)] = inst_37336);

(statearr_37438[(11)] = inst_37338);

(statearr_37438[(21)] = inst_37335);

(statearr_37438[(30)] = inst_37329);

return statearr_37438;
})();
var statearr_37439_37508 = state_37395__$1;
(statearr_37439_37508[(2)] = null);

(statearr_37439_37508[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (28))){
var inst_37354 = (state_37395[(25)]);
var inst_37335 = (state_37395[(21)]);
var inst_37354__$1 = cljs.core.seq.call(null,inst_37335);
var state_37395__$1 = (function (){var statearr_37440 = state_37395;
(statearr_37440[(25)] = inst_37354__$1);

return statearr_37440;
})();
if(inst_37354__$1){
var statearr_37441_37509 = state_37395__$1;
(statearr_37441_37509[(1)] = (33));

} else {
var statearr_37442_37510 = state_37395__$1;
(statearr_37442_37510[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (25))){
var inst_37337 = (state_37395[(20)]);
var inst_37338 = (state_37395[(11)]);
var inst_37340 = (inst_37338 < inst_37337);
var inst_37341 = inst_37340;
var state_37395__$1 = state_37395;
if(cljs.core.truth_(inst_37341)){
var statearr_37443_37511 = state_37395__$1;
(statearr_37443_37511[(1)] = (27));

} else {
var statearr_37444_37512 = state_37395__$1;
(statearr_37444_37512[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (34))){
var state_37395__$1 = state_37395;
var statearr_37445_37513 = state_37395__$1;
(statearr_37445_37513[(2)] = null);

(statearr_37445_37513[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (17))){
var state_37395__$1 = state_37395;
var statearr_37446_37514 = state_37395__$1;
(statearr_37446_37514[(2)] = null);

(statearr_37446_37514[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (3))){
var inst_37393 = (state_37395[(2)]);
var state_37395__$1 = state_37395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37395__$1,inst_37393);
} else {
if((state_val_37396 === (12))){
var inst_37322 = (state_37395[(2)]);
var state_37395__$1 = state_37395;
var statearr_37447_37515 = state_37395__$1;
(statearr_37447_37515[(2)] = inst_37322);

(statearr_37447_37515[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (2))){
var state_37395__$1 = state_37395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37395__$1,(4),ch);
} else {
if((state_val_37396 === (23))){
var state_37395__$1 = state_37395;
var statearr_37448_37516 = state_37395__$1;
(statearr_37448_37516[(2)] = null);

(statearr_37448_37516[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (35))){
var inst_37377 = (state_37395[(2)]);
var state_37395__$1 = state_37395;
var statearr_37449_37517 = state_37395__$1;
(statearr_37449_37517[(2)] = inst_37377);

(statearr_37449_37517[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (19))){
var inst_37296 = (state_37395[(7)]);
var inst_37300 = cljs.core.chunk_first.call(null,inst_37296);
var inst_37301 = cljs.core.chunk_rest.call(null,inst_37296);
var inst_37302 = cljs.core.count.call(null,inst_37300);
var inst_37276 = inst_37301;
var inst_37277 = inst_37300;
var inst_37278 = inst_37302;
var inst_37279 = (0);
var state_37395__$1 = (function (){var statearr_37450 = state_37395;
(statearr_37450[(13)] = inst_37276);

(statearr_37450[(15)] = inst_37278);

(statearr_37450[(16)] = inst_37279);

(statearr_37450[(17)] = inst_37277);

return statearr_37450;
})();
var statearr_37451_37518 = state_37395__$1;
(statearr_37451_37518[(2)] = null);

(statearr_37451_37518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (11))){
var inst_37276 = (state_37395[(13)]);
var inst_37296 = (state_37395[(7)]);
var inst_37296__$1 = cljs.core.seq.call(null,inst_37276);
var state_37395__$1 = (function (){var statearr_37452 = state_37395;
(statearr_37452[(7)] = inst_37296__$1);

return statearr_37452;
})();
if(inst_37296__$1){
var statearr_37453_37519 = state_37395__$1;
(statearr_37453_37519[(1)] = (16));

} else {
var statearr_37454_37520 = state_37395__$1;
(statearr_37454_37520[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (9))){
var inst_37324 = (state_37395[(2)]);
var state_37395__$1 = state_37395;
var statearr_37455_37521 = state_37395__$1;
(statearr_37455_37521[(2)] = inst_37324);

(statearr_37455_37521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (5))){
var inst_37274 = cljs.core.deref.call(null,cs);
var inst_37275 = cljs.core.seq.call(null,inst_37274);
var inst_37276 = inst_37275;
var inst_37277 = null;
var inst_37278 = (0);
var inst_37279 = (0);
var state_37395__$1 = (function (){var statearr_37456 = state_37395;
(statearr_37456[(13)] = inst_37276);

(statearr_37456[(15)] = inst_37278);

(statearr_37456[(16)] = inst_37279);

(statearr_37456[(17)] = inst_37277);

return statearr_37456;
})();
var statearr_37457_37522 = state_37395__$1;
(statearr_37457_37522[(2)] = null);

(statearr_37457_37522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (14))){
var state_37395__$1 = state_37395;
var statearr_37458_37523 = state_37395__$1;
(statearr_37458_37523[(2)] = null);

(statearr_37458_37523[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (45))){
var inst_37385 = (state_37395[(2)]);
var state_37395__$1 = state_37395;
var statearr_37459_37524 = state_37395__$1;
(statearr_37459_37524[(2)] = inst_37385);

(statearr_37459_37524[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (26))){
var inst_37327 = (state_37395[(29)]);
var inst_37381 = (state_37395[(2)]);
var inst_37382 = cljs.core.seq.call(null,inst_37327);
var state_37395__$1 = (function (){var statearr_37460 = state_37395;
(statearr_37460[(31)] = inst_37381);

return statearr_37460;
})();
if(inst_37382){
var statearr_37461_37525 = state_37395__$1;
(statearr_37461_37525[(1)] = (42));

} else {
var statearr_37462_37526 = state_37395__$1;
(statearr_37462_37526[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (16))){
var inst_37296 = (state_37395[(7)]);
var inst_37298 = cljs.core.chunked_seq_QMARK_.call(null,inst_37296);
var state_37395__$1 = state_37395;
if(inst_37298){
var statearr_37463_37527 = state_37395__$1;
(statearr_37463_37527[(1)] = (19));

} else {
var statearr_37464_37528 = state_37395__$1;
(statearr_37464_37528[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (38))){
var inst_37374 = (state_37395[(2)]);
var state_37395__$1 = state_37395;
var statearr_37465_37529 = state_37395__$1;
(statearr_37465_37529[(2)] = inst_37374);

(statearr_37465_37529[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (30))){
var state_37395__$1 = state_37395;
var statearr_37466_37530 = state_37395__$1;
(statearr_37466_37530[(2)] = null);

(statearr_37466_37530[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (10))){
var inst_37279 = (state_37395[(16)]);
var inst_37277 = (state_37395[(17)]);
var inst_37285 = cljs.core._nth.call(null,inst_37277,inst_37279);
var inst_37286 = cljs.core.nth.call(null,inst_37285,(0),null);
var inst_37287 = cljs.core.nth.call(null,inst_37285,(1),null);
var state_37395__$1 = (function (){var statearr_37467 = state_37395;
(statearr_37467[(26)] = inst_37286);

return statearr_37467;
})();
if(cljs.core.truth_(inst_37287)){
var statearr_37468_37531 = state_37395__$1;
(statearr_37468_37531[(1)] = (13));

} else {
var statearr_37469_37532 = state_37395__$1;
(statearr_37469_37532[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (18))){
var inst_37320 = (state_37395[(2)]);
var state_37395__$1 = state_37395;
var statearr_37470_37533 = state_37395__$1;
(statearr_37470_37533[(2)] = inst_37320);

(statearr_37470_37533[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (42))){
var state_37395__$1 = state_37395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37395__$1,(45),dchan);
} else {
if((state_val_37396 === (37))){
var inst_37354 = (state_37395[(25)]);
var inst_37267 = (state_37395[(10)]);
var inst_37363 = (state_37395[(23)]);
var inst_37363__$1 = cljs.core.first.call(null,inst_37354);
var inst_37364 = cljs.core.async.put_BANG_.call(null,inst_37363__$1,inst_37267,done);
var state_37395__$1 = (function (){var statearr_37471 = state_37395;
(statearr_37471[(23)] = inst_37363__$1);

return statearr_37471;
})();
if(cljs.core.truth_(inst_37364)){
var statearr_37472_37534 = state_37395__$1;
(statearr_37472_37534[(1)] = (39));

} else {
var statearr_37473_37535 = state_37395__$1;
(statearr_37473_37535[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (8))){
var inst_37278 = (state_37395[(15)]);
var inst_37279 = (state_37395[(16)]);
var inst_37281 = (inst_37279 < inst_37278);
var inst_37282 = inst_37281;
var state_37395__$1 = state_37395;
if(cljs.core.truth_(inst_37282)){
var statearr_37474_37536 = state_37395__$1;
(statearr_37474_37536[(1)] = (10));

} else {
var statearr_37475_37537 = state_37395__$1;
(statearr_37475_37537[(1)] = (11));

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
});})(c__21794__auto___37483,cs,m,dchan,dctr,done))
;
return ((function (switch__21682__auto__,c__21794__auto___37483,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21683__auto__ = null;
var cljs$core$async$mult_$_state_machine__21683__auto____0 = (function (){
var statearr_37479 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37479[(0)] = cljs$core$async$mult_$_state_machine__21683__auto__);

(statearr_37479[(1)] = (1));

return statearr_37479;
});
var cljs$core$async$mult_$_state_machine__21683__auto____1 = (function (state_37395){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_37395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e37480){if((e37480 instanceof Object)){
var ex__21686__auto__ = e37480;
var statearr_37481_37538 = state_37395;
(statearr_37481_37538[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37539 = state_37395;
state_37395 = G__37539;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21683__auto__ = function(state_37395){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21683__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21683__auto____1.call(this,state_37395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21683__auto____0;
cljs$core$async$mult_$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21683__auto____1;
return cljs$core$async$mult_$_state_machine__21683__auto__;
})()
;})(switch__21682__auto__,c__21794__auto___37483,cs,m,dchan,dctr,done))
})();
var state__21796__auto__ = (function (){var statearr_37482 = f__21795__auto__.call(null);
(statearr_37482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto___37483);

return statearr_37482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(c__21794__auto___37483,cs,m,dchan,dctr,done))
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
var args37540 = [];
var len__19428__auto___37543 = arguments.length;
var i__19429__auto___37544 = (0);
while(true){
if((i__19429__auto___37544 < len__19428__auto___37543)){
args37540.push((arguments[i__19429__auto___37544]));

var G__37545 = (i__19429__auto___37544 + (1));
i__19429__auto___37544 = G__37545;
continue;
} else {
}
break;
}

var G__37542 = args37540.length;
switch (G__37542) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37540.length)].join('')));

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
var len__19428__auto___37557 = arguments.length;
var i__19429__auto___37558 = (0);
while(true){
if((i__19429__auto___37558 < len__19428__auto___37557)){
args__19435__auto__.push((arguments[i__19429__auto___37558]));

var G__37559 = (i__19429__auto___37558 + (1));
i__19429__auto___37558 = G__37559;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((3) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19436__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37551){
var map__37552 = p__37551;
var map__37552__$1 = ((((!((map__37552 == null)))?((((map__37552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37552):map__37552);
var opts = map__37552__$1;
var statearr_37554_37560 = state;
(statearr_37554_37560[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__37552,map__37552__$1,opts){
return (function (val){
var statearr_37555_37561 = state;
(statearr_37555_37561[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__37552,map__37552__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_37556_37562 = state;
(statearr_37556_37562[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37547){
var G__37548 = cljs.core.first.call(null,seq37547);
var seq37547__$1 = cljs.core.next.call(null,seq37547);
var G__37549 = cljs.core.first.call(null,seq37547__$1);
var seq37547__$2 = cljs.core.next.call(null,seq37547__$1);
var G__37550 = cljs.core.first.call(null,seq37547__$2);
var seq37547__$3 = cljs.core.next.call(null,seq37547__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37548,G__37549,G__37550,seq37547__$3);
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
if(typeof cljs.core.async.t_cljs$core$async37726 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37726 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37727){
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
this.meta37727 = meta37727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37728,meta37727__$1){
var self__ = this;
var _37728__$1 = this;
return (new cljs.core.async.t_cljs$core$async37726(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37727__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37726.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37728){
var self__ = this;
var _37728__$1 = this;
return self__.meta37727;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37726.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37726.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37726.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async37726.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37726.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37726.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37726.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37726.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async37726.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37727","meta37727",-1063632507,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37726.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37726";

cljs.core.async.t_cljs$core$async37726.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async37726");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async37726 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async37726(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37727){
return (new cljs.core.async.t_cljs$core$async37726(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37727));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async37726(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21794__auto___37889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21794__auto___37889,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (c__21794__auto___37889,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37826){
var state_val_37827 = (state_37826[(1)]);
if((state_val_37827 === (7))){
var inst_37744 = (state_37826[(2)]);
var state_37826__$1 = state_37826;
var statearr_37828_37890 = state_37826__$1;
(statearr_37828_37890[(2)] = inst_37744);

(statearr_37828_37890[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (20))){
var inst_37756 = (state_37826[(7)]);
var state_37826__$1 = state_37826;
var statearr_37829_37891 = state_37826__$1;
(statearr_37829_37891[(2)] = inst_37756);

(statearr_37829_37891[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (27))){
var state_37826__$1 = state_37826;
var statearr_37830_37892 = state_37826__$1;
(statearr_37830_37892[(2)] = null);

(statearr_37830_37892[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (1))){
var inst_37732 = (state_37826[(8)]);
var inst_37732__$1 = calc_state.call(null);
var inst_37734 = (inst_37732__$1 == null);
var inst_37735 = cljs.core.not.call(null,inst_37734);
var state_37826__$1 = (function (){var statearr_37831 = state_37826;
(statearr_37831[(8)] = inst_37732__$1);

return statearr_37831;
})();
if(inst_37735){
var statearr_37832_37893 = state_37826__$1;
(statearr_37832_37893[(1)] = (2));

} else {
var statearr_37833_37894 = state_37826__$1;
(statearr_37833_37894[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (24))){
var inst_37786 = (state_37826[(9)]);
var inst_37779 = (state_37826[(10)]);
var inst_37800 = (state_37826[(11)]);
var inst_37800__$1 = inst_37779.call(null,inst_37786);
var state_37826__$1 = (function (){var statearr_37834 = state_37826;
(statearr_37834[(11)] = inst_37800__$1);

return statearr_37834;
})();
if(cljs.core.truth_(inst_37800__$1)){
var statearr_37835_37895 = state_37826__$1;
(statearr_37835_37895[(1)] = (29));

} else {
var statearr_37836_37896 = state_37826__$1;
(statearr_37836_37896[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (4))){
var inst_37747 = (state_37826[(2)]);
var state_37826__$1 = state_37826;
if(cljs.core.truth_(inst_37747)){
var statearr_37837_37897 = state_37826__$1;
(statearr_37837_37897[(1)] = (8));

} else {
var statearr_37838_37898 = state_37826__$1;
(statearr_37838_37898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (15))){
var inst_37773 = (state_37826[(2)]);
var state_37826__$1 = state_37826;
if(cljs.core.truth_(inst_37773)){
var statearr_37839_37899 = state_37826__$1;
(statearr_37839_37899[(1)] = (19));

} else {
var statearr_37840_37900 = state_37826__$1;
(statearr_37840_37900[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (21))){
var inst_37778 = (state_37826[(12)]);
var inst_37778__$1 = (state_37826[(2)]);
var inst_37779 = cljs.core.get.call(null,inst_37778__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37780 = cljs.core.get.call(null,inst_37778__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37781 = cljs.core.get.call(null,inst_37778__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37826__$1 = (function (){var statearr_37841 = state_37826;
(statearr_37841[(10)] = inst_37779);

(statearr_37841[(12)] = inst_37778__$1);

(statearr_37841[(13)] = inst_37780);

return statearr_37841;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_37826__$1,(22),inst_37781);
} else {
if((state_val_37827 === (31))){
var inst_37808 = (state_37826[(2)]);
var state_37826__$1 = state_37826;
if(cljs.core.truth_(inst_37808)){
var statearr_37842_37901 = state_37826__$1;
(statearr_37842_37901[(1)] = (32));

} else {
var statearr_37843_37902 = state_37826__$1;
(statearr_37843_37902[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (32))){
var inst_37785 = (state_37826[(14)]);
var state_37826__$1 = state_37826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37826__$1,(35),out,inst_37785);
} else {
if((state_val_37827 === (33))){
var inst_37778 = (state_37826[(12)]);
var inst_37756 = inst_37778;
var state_37826__$1 = (function (){var statearr_37844 = state_37826;
(statearr_37844[(7)] = inst_37756);

return statearr_37844;
})();
var statearr_37845_37903 = state_37826__$1;
(statearr_37845_37903[(2)] = null);

(statearr_37845_37903[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (13))){
var inst_37756 = (state_37826[(7)]);
var inst_37763 = inst_37756.cljs$lang$protocol_mask$partition0$;
var inst_37764 = (inst_37763 & (64));
var inst_37765 = inst_37756.cljs$core$ISeq$;
var inst_37766 = (inst_37764) || (inst_37765);
var state_37826__$1 = state_37826;
if(cljs.core.truth_(inst_37766)){
var statearr_37846_37904 = state_37826__$1;
(statearr_37846_37904[(1)] = (16));

} else {
var statearr_37847_37905 = state_37826__$1;
(statearr_37847_37905[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (22))){
var inst_37786 = (state_37826[(9)]);
var inst_37785 = (state_37826[(14)]);
var inst_37784 = (state_37826[(2)]);
var inst_37785__$1 = cljs.core.nth.call(null,inst_37784,(0),null);
var inst_37786__$1 = cljs.core.nth.call(null,inst_37784,(1),null);
var inst_37787 = (inst_37785__$1 == null);
var inst_37788 = cljs.core._EQ_.call(null,inst_37786__$1,change);
var inst_37789 = (inst_37787) || (inst_37788);
var state_37826__$1 = (function (){var statearr_37848 = state_37826;
(statearr_37848[(9)] = inst_37786__$1);

(statearr_37848[(14)] = inst_37785__$1);

return statearr_37848;
})();
if(cljs.core.truth_(inst_37789)){
var statearr_37849_37906 = state_37826__$1;
(statearr_37849_37906[(1)] = (23));

} else {
var statearr_37850_37907 = state_37826__$1;
(statearr_37850_37907[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (36))){
var inst_37778 = (state_37826[(12)]);
var inst_37756 = inst_37778;
var state_37826__$1 = (function (){var statearr_37851 = state_37826;
(statearr_37851[(7)] = inst_37756);

return statearr_37851;
})();
var statearr_37852_37908 = state_37826__$1;
(statearr_37852_37908[(2)] = null);

(statearr_37852_37908[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (29))){
var inst_37800 = (state_37826[(11)]);
var state_37826__$1 = state_37826;
var statearr_37853_37909 = state_37826__$1;
(statearr_37853_37909[(2)] = inst_37800);

(statearr_37853_37909[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (6))){
var state_37826__$1 = state_37826;
var statearr_37854_37910 = state_37826__$1;
(statearr_37854_37910[(2)] = false);

(statearr_37854_37910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (28))){
var inst_37796 = (state_37826[(2)]);
var inst_37797 = calc_state.call(null);
var inst_37756 = inst_37797;
var state_37826__$1 = (function (){var statearr_37855 = state_37826;
(statearr_37855[(15)] = inst_37796);

(statearr_37855[(7)] = inst_37756);

return statearr_37855;
})();
var statearr_37856_37911 = state_37826__$1;
(statearr_37856_37911[(2)] = null);

(statearr_37856_37911[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (25))){
var inst_37822 = (state_37826[(2)]);
var state_37826__$1 = state_37826;
var statearr_37857_37912 = state_37826__$1;
(statearr_37857_37912[(2)] = inst_37822);

(statearr_37857_37912[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (34))){
var inst_37820 = (state_37826[(2)]);
var state_37826__$1 = state_37826;
var statearr_37858_37913 = state_37826__$1;
(statearr_37858_37913[(2)] = inst_37820);

(statearr_37858_37913[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (17))){
var state_37826__$1 = state_37826;
var statearr_37859_37914 = state_37826__$1;
(statearr_37859_37914[(2)] = false);

(statearr_37859_37914[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (3))){
var state_37826__$1 = state_37826;
var statearr_37860_37915 = state_37826__$1;
(statearr_37860_37915[(2)] = false);

(statearr_37860_37915[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (12))){
var inst_37824 = (state_37826[(2)]);
var state_37826__$1 = state_37826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37826__$1,inst_37824);
} else {
if((state_val_37827 === (2))){
var inst_37732 = (state_37826[(8)]);
var inst_37737 = inst_37732.cljs$lang$protocol_mask$partition0$;
var inst_37738 = (inst_37737 & (64));
var inst_37739 = inst_37732.cljs$core$ISeq$;
var inst_37740 = (inst_37738) || (inst_37739);
var state_37826__$1 = state_37826;
if(cljs.core.truth_(inst_37740)){
var statearr_37861_37916 = state_37826__$1;
(statearr_37861_37916[(1)] = (5));

} else {
var statearr_37862_37917 = state_37826__$1;
(statearr_37862_37917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (23))){
var inst_37785 = (state_37826[(14)]);
var inst_37791 = (inst_37785 == null);
var state_37826__$1 = state_37826;
if(cljs.core.truth_(inst_37791)){
var statearr_37863_37918 = state_37826__$1;
(statearr_37863_37918[(1)] = (26));

} else {
var statearr_37864_37919 = state_37826__$1;
(statearr_37864_37919[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (35))){
var inst_37811 = (state_37826[(2)]);
var state_37826__$1 = state_37826;
if(cljs.core.truth_(inst_37811)){
var statearr_37865_37920 = state_37826__$1;
(statearr_37865_37920[(1)] = (36));

} else {
var statearr_37866_37921 = state_37826__$1;
(statearr_37866_37921[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (19))){
var inst_37756 = (state_37826[(7)]);
var inst_37775 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37756);
var state_37826__$1 = state_37826;
var statearr_37867_37922 = state_37826__$1;
(statearr_37867_37922[(2)] = inst_37775);

(statearr_37867_37922[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (11))){
var inst_37756 = (state_37826[(7)]);
var inst_37760 = (inst_37756 == null);
var inst_37761 = cljs.core.not.call(null,inst_37760);
var state_37826__$1 = state_37826;
if(inst_37761){
var statearr_37868_37923 = state_37826__$1;
(statearr_37868_37923[(1)] = (13));

} else {
var statearr_37869_37924 = state_37826__$1;
(statearr_37869_37924[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (9))){
var inst_37732 = (state_37826[(8)]);
var state_37826__$1 = state_37826;
var statearr_37870_37925 = state_37826__$1;
(statearr_37870_37925[(2)] = inst_37732);

(statearr_37870_37925[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (5))){
var state_37826__$1 = state_37826;
var statearr_37871_37926 = state_37826__$1;
(statearr_37871_37926[(2)] = true);

(statearr_37871_37926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (14))){
var state_37826__$1 = state_37826;
var statearr_37872_37927 = state_37826__$1;
(statearr_37872_37927[(2)] = false);

(statearr_37872_37927[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (26))){
var inst_37786 = (state_37826[(9)]);
var inst_37793 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_37786);
var state_37826__$1 = state_37826;
var statearr_37873_37928 = state_37826__$1;
(statearr_37873_37928[(2)] = inst_37793);

(statearr_37873_37928[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (16))){
var state_37826__$1 = state_37826;
var statearr_37874_37929 = state_37826__$1;
(statearr_37874_37929[(2)] = true);

(statearr_37874_37929[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (38))){
var inst_37816 = (state_37826[(2)]);
var state_37826__$1 = state_37826;
var statearr_37875_37930 = state_37826__$1;
(statearr_37875_37930[(2)] = inst_37816);

(statearr_37875_37930[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (30))){
var inst_37786 = (state_37826[(9)]);
var inst_37779 = (state_37826[(10)]);
var inst_37780 = (state_37826[(13)]);
var inst_37803 = cljs.core.empty_QMARK_.call(null,inst_37779);
var inst_37804 = inst_37780.call(null,inst_37786);
var inst_37805 = cljs.core.not.call(null,inst_37804);
var inst_37806 = (inst_37803) && (inst_37805);
var state_37826__$1 = state_37826;
var statearr_37876_37931 = state_37826__$1;
(statearr_37876_37931[(2)] = inst_37806);

(statearr_37876_37931[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (10))){
var inst_37732 = (state_37826[(8)]);
var inst_37752 = (state_37826[(2)]);
var inst_37753 = cljs.core.get.call(null,inst_37752,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37754 = cljs.core.get.call(null,inst_37752,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37755 = cljs.core.get.call(null,inst_37752,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37756 = inst_37732;
var state_37826__$1 = (function (){var statearr_37877 = state_37826;
(statearr_37877[(16)] = inst_37755);

(statearr_37877[(17)] = inst_37753);

(statearr_37877[(18)] = inst_37754);

(statearr_37877[(7)] = inst_37756);

return statearr_37877;
})();
var statearr_37878_37932 = state_37826__$1;
(statearr_37878_37932[(2)] = null);

(statearr_37878_37932[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (18))){
var inst_37770 = (state_37826[(2)]);
var state_37826__$1 = state_37826;
var statearr_37879_37933 = state_37826__$1;
(statearr_37879_37933[(2)] = inst_37770);

(statearr_37879_37933[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (37))){
var state_37826__$1 = state_37826;
var statearr_37880_37934 = state_37826__$1;
(statearr_37880_37934[(2)] = null);

(statearr_37880_37934[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37827 === (8))){
var inst_37732 = (state_37826[(8)]);
var inst_37749 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37732);
var state_37826__$1 = state_37826;
var statearr_37881_37935 = state_37826__$1;
(statearr_37881_37935[(2)] = inst_37749);

(statearr_37881_37935[(1)] = (10));


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
});})(c__21794__auto___37889,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21682__auto__,c__21794__auto___37889,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21683__auto__ = null;
var cljs$core$async$mix_$_state_machine__21683__auto____0 = (function (){
var statearr_37885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37885[(0)] = cljs$core$async$mix_$_state_machine__21683__auto__);

(statearr_37885[(1)] = (1));

return statearr_37885;
});
var cljs$core$async$mix_$_state_machine__21683__auto____1 = (function (state_37826){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_37826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e37886){if((e37886 instanceof Object)){
var ex__21686__auto__ = e37886;
var statearr_37887_37936 = state_37826;
(statearr_37887_37936[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37937 = state_37826;
state_37826 = G__37937;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21683__auto__ = function(state_37826){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21683__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21683__auto____1.call(this,state_37826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21683__auto____0;
cljs$core$async$mix_$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21683__auto____1;
return cljs$core$async$mix_$_state_machine__21683__auto__;
})()
;})(switch__21682__auto__,c__21794__auto___37889,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21796__auto__ = (function (){var statearr_37888 = f__21795__auto__.call(null);
(statearr_37888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto___37889);

return statearr_37888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(c__21794__auto___37889,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args37938 = [];
var len__19428__auto___37941 = arguments.length;
var i__19429__auto___37942 = (0);
while(true){
if((i__19429__auto___37942 < len__19428__auto___37941)){
args37938.push((arguments[i__19429__auto___37942]));

var G__37943 = (i__19429__auto___37942 + (1));
i__19429__auto___37942 = G__37943;
continue;
} else {
}
break;
}

var G__37940 = args37938.length;
switch (G__37940) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37938.length)].join('')));

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
var args37946 = [];
var len__19428__auto___38071 = arguments.length;
var i__19429__auto___38072 = (0);
while(true){
if((i__19429__auto___38072 < len__19428__auto___38071)){
args37946.push((arguments[i__19429__auto___38072]));

var G__38073 = (i__19429__auto___38072 + (1));
i__19429__auto___38072 = G__38073;
continue;
} else {
}
break;
}

var G__37948 = args37946.length;
switch (G__37948) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37946.length)].join('')));

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
return (function (p1__37945_SHARP_){
if(cljs.core.truth_(p1__37945_SHARP_.call(null,topic))){
return p1__37945_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__37945_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18370__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async37949 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37949 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37950){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37950 = meta37950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37951,meta37950__$1){
var self__ = this;
var _37951__$1 = this;
return (new cljs.core.async.t_cljs$core$async37949(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37950__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37949.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37951){
var self__ = this;
var _37951__$1 = this;
return self__.meta37950;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37949.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37949.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37949.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async37949.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37949.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async37949.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37949.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37949.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37950","meta37950",462855982,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37949.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37949.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37949";

cljs.core.async.t_cljs$core$async37949.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async37949");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async37949 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async37949(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37950){
return (new cljs.core.async.t_cljs$core$async37949(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37950));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async37949(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21794__auto___38075 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21794__auto___38075,mults,ensure_mult,p){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (c__21794__auto___38075,mults,ensure_mult,p){
return (function (state_38023){
var state_val_38024 = (state_38023[(1)]);
if((state_val_38024 === (7))){
var inst_38019 = (state_38023[(2)]);
var state_38023__$1 = state_38023;
var statearr_38025_38076 = state_38023__$1;
(statearr_38025_38076[(2)] = inst_38019);

(statearr_38025_38076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38024 === (20))){
var state_38023__$1 = state_38023;
var statearr_38026_38077 = state_38023__$1;
(statearr_38026_38077[(2)] = null);

(statearr_38026_38077[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38024 === (1))){
var state_38023__$1 = state_38023;
var statearr_38027_38078 = state_38023__$1;
(statearr_38027_38078[(2)] = null);

(statearr_38027_38078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38024 === (24))){
var inst_38002 = (state_38023[(7)]);
var inst_38011 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38002);
var state_38023__$1 = state_38023;
var statearr_38028_38079 = state_38023__$1;
(statearr_38028_38079[(2)] = inst_38011);

(statearr_38028_38079[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38024 === (4))){
var inst_37954 = (state_38023[(8)]);
var inst_37954__$1 = (state_38023[(2)]);
var inst_37955 = (inst_37954__$1 == null);
var state_38023__$1 = (function (){var statearr_38029 = state_38023;
(statearr_38029[(8)] = inst_37954__$1);

return statearr_38029;
})();
if(cljs.core.truth_(inst_37955)){
var statearr_38030_38080 = state_38023__$1;
(statearr_38030_38080[(1)] = (5));

} else {
var statearr_38031_38081 = state_38023__$1;
(statearr_38031_38081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38024 === (15))){
var inst_37996 = (state_38023[(2)]);
var state_38023__$1 = state_38023;
var statearr_38032_38082 = state_38023__$1;
(statearr_38032_38082[(2)] = inst_37996);

(statearr_38032_38082[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38024 === (21))){
var inst_38016 = (state_38023[(2)]);
var state_38023__$1 = (function (){var statearr_38033 = state_38023;
(statearr_38033[(9)] = inst_38016);

return statearr_38033;
})();
var statearr_38034_38083 = state_38023__$1;
(statearr_38034_38083[(2)] = null);

(statearr_38034_38083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38024 === (13))){
var inst_37978 = (state_38023[(10)]);
var inst_37980 = cljs.core.chunked_seq_QMARK_.call(null,inst_37978);
var state_38023__$1 = state_38023;
if(inst_37980){
var statearr_38035_38084 = state_38023__$1;
(statearr_38035_38084[(1)] = (16));

} else {
var statearr_38036_38085 = state_38023__$1;
(statearr_38036_38085[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38024 === (22))){
var inst_38008 = (state_38023[(2)]);
var state_38023__$1 = state_38023;
if(cljs.core.truth_(inst_38008)){
var statearr_38037_38086 = state_38023__$1;
(statearr_38037_38086[(1)] = (23));

} else {
var statearr_38038_38087 = state_38023__$1;
(statearr_38038_38087[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38024 === (6))){
var inst_38002 = (state_38023[(7)]);
var inst_38004 = (state_38023[(11)]);
var inst_37954 = (state_38023[(8)]);
var inst_38002__$1 = topic_fn.call(null,inst_37954);
var inst_38003 = cljs.core.deref.call(null,mults);
var inst_38004__$1 = cljs.core.get.call(null,inst_38003,inst_38002__$1);
var state_38023__$1 = (function (){var statearr_38039 = state_38023;
(statearr_38039[(7)] = inst_38002__$1);

(statearr_38039[(11)] = inst_38004__$1);

return statearr_38039;
})();
if(cljs.core.truth_(inst_38004__$1)){
var statearr_38040_38088 = state_38023__$1;
(statearr_38040_38088[(1)] = (19));

} else {
var statearr_38041_38089 = state_38023__$1;
(statearr_38041_38089[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38024 === (25))){
var inst_38013 = (state_38023[(2)]);
var state_38023__$1 = state_38023;
var statearr_38042_38090 = state_38023__$1;
(statearr_38042_38090[(2)] = inst_38013);

(statearr_38042_38090[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38024 === (17))){
var inst_37978 = (state_38023[(10)]);
var inst_37987 = cljs.core.first.call(null,inst_37978);
var inst_37988 = cljs.core.async.muxch_STAR_.call(null,inst_37987);
var inst_37989 = cljs.core.async.close_BANG_.call(null,inst_37988);
var inst_37990 = cljs.core.next.call(null,inst_37978);
var inst_37964 = inst_37990;
var inst_37965 = null;
var inst_37966 = (0);
var inst_37967 = (0);
var state_38023__$1 = (function (){var statearr_38043 = state_38023;
(statearr_38043[(12)] = inst_37965);

(statearr_38043[(13)] = inst_37964);

(statearr_38043[(14)] = inst_37967);

(statearr_38043[(15)] = inst_37966);

(statearr_38043[(16)] = inst_37989);

return statearr_38043;
})();
var statearr_38044_38091 = state_38023__$1;
(statearr_38044_38091[(2)] = null);

(statearr_38044_38091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38024 === (3))){
var inst_38021 = (state_38023[(2)]);
var state_38023__$1 = state_38023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38023__$1,inst_38021);
} else {
if((state_val_38024 === (12))){
var inst_37998 = (state_38023[(2)]);
var state_38023__$1 = state_38023;
var statearr_38045_38092 = state_38023__$1;
(statearr_38045_38092[(2)] = inst_37998);

(statearr_38045_38092[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38024 === (2))){
var state_38023__$1 = state_38023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38023__$1,(4),ch);
} else {
if((state_val_38024 === (23))){
var state_38023__$1 = state_38023;
var statearr_38046_38093 = state_38023__$1;
(statearr_38046_38093[(2)] = null);

(statearr_38046_38093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38024 === (19))){
var inst_38004 = (state_38023[(11)]);
var inst_37954 = (state_38023[(8)]);
var inst_38006 = cljs.core.async.muxch_STAR_.call(null,inst_38004);
var state_38023__$1 = state_38023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38023__$1,(22),inst_38006,inst_37954);
} else {
if((state_val_38024 === (11))){
var inst_37964 = (state_38023[(13)]);
var inst_37978 = (state_38023[(10)]);
var inst_37978__$1 = cljs.core.seq.call(null,inst_37964);
var state_38023__$1 = (function (){var statearr_38047 = state_38023;
(statearr_38047[(10)] = inst_37978__$1);

return statearr_38047;
})();
if(inst_37978__$1){
var statearr_38048_38094 = state_38023__$1;
(statearr_38048_38094[(1)] = (13));

} else {
var statearr_38049_38095 = state_38023__$1;
(statearr_38049_38095[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38024 === (9))){
var inst_38000 = (state_38023[(2)]);
var state_38023__$1 = state_38023;
var statearr_38050_38096 = state_38023__$1;
(statearr_38050_38096[(2)] = inst_38000);

(statearr_38050_38096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38024 === (5))){
var inst_37961 = cljs.core.deref.call(null,mults);
var inst_37962 = cljs.core.vals.call(null,inst_37961);
var inst_37963 = cljs.core.seq.call(null,inst_37962);
var inst_37964 = inst_37963;
var inst_37965 = null;
var inst_37966 = (0);
var inst_37967 = (0);
var state_38023__$1 = (function (){var statearr_38051 = state_38023;
(statearr_38051[(12)] = inst_37965);

(statearr_38051[(13)] = inst_37964);

(statearr_38051[(14)] = inst_37967);

(statearr_38051[(15)] = inst_37966);

return statearr_38051;
})();
var statearr_38052_38097 = state_38023__$1;
(statearr_38052_38097[(2)] = null);

(statearr_38052_38097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38024 === (14))){
var state_38023__$1 = state_38023;
var statearr_38056_38098 = state_38023__$1;
(statearr_38056_38098[(2)] = null);

(statearr_38056_38098[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38024 === (16))){
var inst_37978 = (state_38023[(10)]);
var inst_37982 = cljs.core.chunk_first.call(null,inst_37978);
var inst_37983 = cljs.core.chunk_rest.call(null,inst_37978);
var inst_37984 = cljs.core.count.call(null,inst_37982);
var inst_37964 = inst_37983;
var inst_37965 = inst_37982;
var inst_37966 = inst_37984;
var inst_37967 = (0);
var state_38023__$1 = (function (){var statearr_38057 = state_38023;
(statearr_38057[(12)] = inst_37965);

(statearr_38057[(13)] = inst_37964);

(statearr_38057[(14)] = inst_37967);

(statearr_38057[(15)] = inst_37966);

return statearr_38057;
})();
var statearr_38058_38099 = state_38023__$1;
(statearr_38058_38099[(2)] = null);

(statearr_38058_38099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38024 === (10))){
var inst_37965 = (state_38023[(12)]);
var inst_37964 = (state_38023[(13)]);
var inst_37967 = (state_38023[(14)]);
var inst_37966 = (state_38023[(15)]);
var inst_37972 = cljs.core._nth.call(null,inst_37965,inst_37967);
var inst_37973 = cljs.core.async.muxch_STAR_.call(null,inst_37972);
var inst_37974 = cljs.core.async.close_BANG_.call(null,inst_37973);
var inst_37975 = (inst_37967 + (1));
var tmp38053 = inst_37965;
var tmp38054 = inst_37964;
var tmp38055 = inst_37966;
var inst_37964__$1 = tmp38054;
var inst_37965__$1 = tmp38053;
var inst_37966__$1 = tmp38055;
var inst_37967__$1 = inst_37975;
var state_38023__$1 = (function (){var statearr_38059 = state_38023;
(statearr_38059[(12)] = inst_37965__$1);

(statearr_38059[(13)] = inst_37964__$1);

(statearr_38059[(14)] = inst_37967__$1);

(statearr_38059[(17)] = inst_37974);

(statearr_38059[(15)] = inst_37966__$1);

return statearr_38059;
})();
var statearr_38060_38100 = state_38023__$1;
(statearr_38060_38100[(2)] = null);

(statearr_38060_38100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38024 === (18))){
var inst_37993 = (state_38023[(2)]);
var state_38023__$1 = state_38023;
var statearr_38061_38101 = state_38023__$1;
(statearr_38061_38101[(2)] = inst_37993);

(statearr_38061_38101[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38024 === (8))){
var inst_37967 = (state_38023[(14)]);
var inst_37966 = (state_38023[(15)]);
var inst_37969 = (inst_37967 < inst_37966);
var inst_37970 = inst_37969;
var state_38023__$1 = state_38023;
if(cljs.core.truth_(inst_37970)){
var statearr_38062_38102 = state_38023__$1;
(statearr_38062_38102[(1)] = (10));

} else {
var statearr_38063_38103 = state_38023__$1;
(statearr_38063_38103[(1)] = (11));

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
});})(c__21794__auto___38075,mults,ensure_mult,p))
;
return ((function (switch__21682__auto__,c__21794__auto___38075,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21683__auto__ = null;
var cljs$core$async$state_machine__21683__auto____0 = (function (){
var statearr_38067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38067[(0)] = cljs$core$async$state_machine__21683__auto__);

(statearr_38067[(1)] = (1));

return statearr_38067;
});
var cljs$core$async$state_machine__21683__auto____1 = (function (state_38023){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_38023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e38068){if((e38068 instanceof Object)){
var ex__21686__auto__ = e38068;
var statearr_38069_38104 = state_38023;
(statearr_38069_38104[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38105 = state_38023;
state_38023 = G__38105;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
cljs$core$async$state_machine__21683__auto__ = function(state_38023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21683__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21683__auto____1.call(this,state_38023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21683__auto____0;
cljs$core$async$state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21683__auto____1;
return cljs$core$async$state_machine__21683__auto__;
})()
;})(switch__21682__auto__,c__21794__auto___38075,mults,ensure_mult,p))
})();
var state__21796__auto__ = (function (){var statearr_38070 = f__21795__auto__.call(null);
(statearr_38070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto___38075);

return statearr_38070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(c__21794__auto___38075,mults,ensure_mult,p))
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
var args38106 = [];
var len__19428__auto___38109 = arguments.length;
var i__19429__auto___38110 = (0);
while(true){
if((i__19429__auto___38110 < len__19428__auto___38109)){
args38106.push((arguments[i__19429__auto___38110]));

var G__38111 = (i__19429__auto___38110 + (1));
i__19429__auto___38110 = G__38111;
continue;
} else {
}
break;
}

var G__38108 = args38106.length;
switch (G__38108) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38106.length)].join('')));

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
var args38113 = [];
var len__19428__auto___38116 = arguments.length;
var i__19429__auto___38117 = (0);
while(true){
if((i__19429__auto___38117 < len__19428__auto___38116)){
args38113.push((arguments[i__19429__auto___38117]));

var G__38118 = (i__19429__auto___38117 + (1));
i__19429__auto___38117 = G__38118;
continue;
} else {
}
break;
}

var G__38115 = args38113.length;
switch (G__38115) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38113.length)].join('')));

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
var args38120 = [];
var len__19428__auto___38191 = arguments.length;
var i__19429__auto___38192 = (0);
while(true){
if((i__19429__auto___38192 < len__19428__auto___38191)){
args38120.push((arguments[i__19429__auto___38192]));

var G__38193 = (i__19429__auto___38192 + (1));
i__19429__auto___38192 = G__38193;
continue;
} else {
}
break;
}

var G__38122 = args38120.length;
switch (G__38122) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38120.length)].join('')));

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
var c__21794__auto___38195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21794__auto___38195,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (c__21794__auto___38195,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38161){
var state_val_38162 = (state_38161[(1)]);
if((state_val_38162 === (7))){
var state_38161__$1 = state_38161;
var statearr_38163_38196 = state_38161__$1;
(statearr_38163_38196[(2)] = null);

(statearr_38163_38196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38162 === (1))){
var state_38161__$1 = state_38161;
var statearr_38164_38197 = state_38161__$1;
(statearr_38164_38197[(2)] = null);

(statearr_38164_38197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38162 === (4))){
var inst_38125 = (state_38161[(7)]);
var inst_38127 = (inst_38125 < cnt);
var state_38161__$1 = state_38161;
if(cljs.core.truth_(inst_38127)){
var statearr_38165_38198 = state_38161__$1;
(statearr_38165_38198[(1)] = (6));

} else {
var statearr_38166_38199 = state_38161__$1;
(statearr_38166_38199[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38162 === (15))){
var inst_38157 = (state_38161[(2)]);
var state_38161__$1 = state_38161;
var statearr_38167_38200 = state_38161__$1;
(statearr_38167_38200[(2)] = inst_38157);

(statearr_38167_38200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38162 === (13))){
var inst_38150 = cljs.core.async.close_BANG_.call(null,out);
var state_38161__$1 = state_38161;
var statearr_38168_38201 = state_38161__$1;
(statearr_38168_38201[(2)] = inst_38150);

(statearr_38168_38201[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38162 === (6))){
var state_38161__$1 = state_38161;
var statearr_38169_38202 = state_38161__$1;
(statearr_38169_38202[(2)] = null);

(statearr_38169_38202[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38162 === (3))){
var inst_38159 = (state_38161[(2)]);
var state_38161__$1 = state_38161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38161__$1,inst_38159);
} else {
if((state_val_38162 === (12))){
var inst_38147 = (state_38161[(8)]);
var inst_38147__$1 = (state_38161[(2)]);
var inst_38148 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38147__$1);
var state_38161__$1 = (function (){var statearr_38170 = state_38161;
(statearr_38170[(8)] = inst_38147__$1);

return statearr_38170;
})();
if(cljs.core.truth_(inst_38148)){
var statearr_38171_38203 = state_38161__$1;
(statearr_38171_38203[(1)] = (13));

} else {
var statearr_38172_38204 = state_38161__$1;
(statearr_38172_38204[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38162 === (2))){
var inst_38124 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38125 = (0);
var state_38161__$1 = (function (){var statearr_38173 = state_38161;
(statearr_38173[(7)] = inst_38125);

(statearr_38173[(9)] = inst_38124);

return statearr_38173;
})();
var statearr_38174_38205 = state_38161__$1;
(statearr_38174_38205[(2)] = null);

(statearr_38174_38205[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38162 === (11))){
var inst_38125 = (state_38161[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38161,(10),Object,null,(9));
var inst_38134 = chs__$1.call(null,inst_38125);
var inst_38135 = done.call(null,inst_38125);
var inst_38136 = cljs.core.async.take_BANG_.call(null,inst_38134,inst_38135);
var state_38161__$1 = state_38161;
var statearr_38175_38206 = state_38161__$1;
(statearr_38175_38206[(2)] = inst_38136);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38161__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38162 === (9))){
var inst_38125 = (state_38161[(7)]);
var inst_38138 = (state_38161[(2)]);
var inst_38139 = (inst_38125 + (1));
var inst_38125__$1 = inst_38139;
var state_38161__$1 = (function (){var statearr_38176 = state_38161;
(statearr_38176[(7)] = inst_38125__$1);

(statearr_38176[(10)] = inst_38138);

return statearr_38176;
})();
var statearr_38177_38207 = state_38161__$1;
(statearr_38177_38207[(2)] = null);

(statearr_38177_38207[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38162 === (5))){
var inst_38145 = (state_38161[(2)]);
var state_38161__$1 = (function (){var statearr_38178 = state_38161;
(statearr_38178[(11)] = inst_38145);

return statearr_38178;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38161__$1,(12),dchan);
} else {
if((state_val_38162 === (14))){
var inst_38147 = (state_38161[(8)]);
var inst_38152 = cljs.core.apply.call(null,f,inst_38147);
var state_38161__$1 = state_38161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38161__$1,(16),out,inst_38152);
} else {
if((state_val_38162 === (16))){
var inst_38154 = (state_38161[(2)]);
var state_38161__$1 = (function (){var statearr_38179 = state_38161;
(statearr_38179[(12)] = inst_38154);

return statearr_38179;
})();
var statearr_38180_38208 = state_38161__$1;
(statearr_38180_38208[(2)] = null);

(statearr_38180_38208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38162 === (10))){
var inst_38129 = (state_38161[(2)]);
var inst_38130 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_38161__$1 = (function (){var statearr_38181 = state_38161;
(statearr_38181[(13)] = inst_38129);

return statearr_38181;
})();
var statearr_38182_38209 = state_38161__$1;
(statearr_38182_38209[(2)] = inst_38130);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38161__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38162 === (8))){
var inst_38143 = (state_38161[(2)]);
var state_38161__$1 = state_38161;
var statearr_38183_38210 = state_38161__$1;
(statearr_38183_38210[(2)] = inst_38143);

(statearr_38183_38210[(1)] = (5));


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
});})(c__21794__auto___38195,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21682__auto__,c__21794__auto___38195,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21683__auto__ = null;
var cljs$core$async$state_machine__21683__auto____0 = (function (){
var statearr_38187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38187[(0)] = cljs$core$async$state_machine__21683__auto__);

(statearr_38187[(1)] = (1));

return statearr_38187;
});
var cljs$core$async$state_machine__21683__auto____1 = (function (state_38161){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_38161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e38188){if((e38188 instanceof Object)){
var ex__21686__auto__ = e38188;
var statearr_38189_38211 = state_38161;
(statearr_38189_38211[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38212 = state_38161;
state_38161 = G__38212;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
cljs$core$async$state_machine__21683__auto__ = function(state_38161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21683__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21683__auto____1.call(this,state_38161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21683__auto____0;
cljs$core$async$state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21683__auto____1;
return cljs$core$async$state_machine__21683__auto__;
})()
;})(switch__21682__auto__,c__21794__auto___38195,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21796__auto__ = (function (){var statearr_38190 = f__21795__auto__.call(null);
(statearr_38190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto___38195);

return statearr_38190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(c__21794__auto___38195,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args38214 = [];
var len__19428__auto___38270 = arguments.length;
var i__19429__auto___38271 = (0);
while(true){
if((i__19429__auto___38271 < len__19428__auto___38270)){
args38214.push((arguments[i__19429__auto___38271]));

var G__38272 = (i__19429__auto___38271 + (1));
i__19429__auto___38271 = G__38272;
continue;
} else {
}
break;
}

var G__38216 = args38214.length;
switch (G__38216) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38214.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21794__auto___38274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21794__auto___38274,out){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (c__21794__auto___38274,out){
return (function (state_38246){
var state_val_38247 = (state_38246[(1)]);
if((state_val_38247 === (7))){
var inst_38225 = (state_38246[(7)]);
var inst_38226 = (state_38246[(8)]);
var inst_38225__$1 = (state_38246[(2)]);
var inst_38226__$1 = cljs.core.nth.call(null,inst_38225__$1,(0),null);
var inst_38227 = cljs.core.nth.call(null,inst_38225__$1,(1),null);
var inst_38228 = (inst_38226__$1 == null);
var state_38246__$1 = (function (){var statearr_38248 = state_38246;
(statearr_38248[(9)] = inst_38227);

(statearr_38248[(7)] = inst_38225__$1);

(statearr_38248[(8)] = inst_38226__$1);

return statearr_38248;
})();
if(cljs.core.truth_(inst_38228)){
var statearr_38249_38275 = state_38246__$1;
(statearr_38249_38275[(1)] = (8));

} else {
var statearr_38250_38276 = state_38246__$1;
(statearr_38250_38276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38247 === (1))){
var inst_38217 = cljs.core.vec.call(null,chs);
var inst_38218 = inst_38217;
var state_38246__$1 = (function (){var statearr_38251 = state_38246;
(statearr_38251[(10)] = inst_38218);

return statearr_38251;
})();
var statearr_38252_38277 = state_38246__$1;
(statearr_38252_38277[(2)] = null);

(statearr_38252_38277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38247 === (4))){
var inst_38218 = (state_38246[(10)]);
var state_38246__$1 = state_38246;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38246__$1,(7),inst_38218);
} else {
if((state_val_38247 === (6))){
var inst_38242 = (state_38246[(2)]);
var state_38246__$1 = state_38246;
var statearr_38253_38278 = state_38246__$1;
(statearr_38253_38278[(2)] = inst_38242);

(statearr_38253_38278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38247 === (3))){
var inst_38244 = (state_38246[(2)]);
var state_38246__$1 = state_38246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38246__$1,inst_38244);
} else {
if((state_val_38247 === (2))){
var inst_38218 = (state_38246[(10)]);
var inst_38220 = cljs.core.count.call(null,inst_38218);
var inst_38221 = (inst_38220 > (0));
var state_38246__$1 = state_38246;
if(cljs.core.truth_(inst_38221)){
var statearr_38255_38279 = state_38246__$1;
(statearr_38255_38279[(1)] = (4));

} else {
var statearr_38256_38280 = state_38246__$1;
(statearr_38256_38280[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38247 === (11))){
var inst_38218 = (state_38246[(10)]);
var inst_38235 = (state_38246[(2)]);
var tmp38254 = inst_38218;
var inst_38218__$1 = tmp38254;
var state_38246__$1 = (function (){var statearr_38257 = state_38246;
(statearr_38257[(11)] = inst_38235);

(statearr_38257[(10)] = inst_38218__$1);

return statearr_38257;
})();
var statearr_38258_38281 = state_38246__$1;
(statearr_38258_38281[(2)] = null);

(statearr_38258_38281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38247 === (9))){
var inst_38226 = (state_38246[(8)]);
var state_38246__$1 = state_38246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38246__$1,(11),out,inst_38226);
} else {
if((state_val_38247 === (5))){
var inst_38240 = cljs.core.async.close_BANG_.call(null,out);
var state_38246__$1 = state_38246;
var statearr_38259_38282 = state_38246__$1;
(statearr_38259_38282[(2)] = inst_38240);

(statearr_38259_38282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38247 === (10))){
var inst_38238 = (state_38246[(2)]);
var state_38246__$1 = state_38246;
var statearr_38260_38283 = state_38246__$1;
(statearr_38260_38283[(2)] = inst_38238);

(statearr_38260_38283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38247 === (8))){
var inst_38227 = (state_38246[(9)]);
var inst_38225 = (state_38246[(7)]);
var inst_38226 = (state_38246[(8)]);
var inst_38218 = (state_38246[(10)]);
var inst_38230 = (function (){var cs = inst_38218;
var vec__38223 = inst_38225;
var v = inst_38226;
var c = inst_38227;
return ((function (cs,vec__38223,v,c,inst_38227,inst_38225,inst_38226,inst_38218,state_val_38247,c__21794__auto___38274,out){
return (function (p1__38213_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__38213_SHARP_);
});
;})(cs,vec__38223,v,c,inst_38227,inst_38225,inst_38226,inst_38218,state_val_38247,c__21794__auto___38274,out))
})();
var inst_38231 = cljs.core.filterv.call(null,inst_38230,inst_38218);
var inst_38218__$1 = inst_38231;
var state_38246__$1 = (function (){var statearr_38261 = state_38246;
(statearr_38261[(10)] = inst_38218__$1);

return statearr_38261;
})();
var statearr_38262_38284 = state_38246__$1;
(statearr_38262_38284[(2)] = null);

(statearr_38262_38284[(1)] = (2));


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
});})(c__21794__auto___38274,out))
;
return ((function (switch__21682__auto__,c__21794__auto___38274,out){
return (function() {
var cljs$core$async$state_machine__21683__auto__ = null;
var cljs$core$async$state_machine__21683__auto____0 = (function (){
var statearr_38266 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38266[(0)] = cljs$core$async$state_machine__21683__auto__);

(statearr_38266[(1)] = (1));

return statearr_38266;
});
var cljs$core$async$state_machine__21683__auto____1 = (function (state_38246){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_38246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e38267){if((e38267 instanceof Object)){
var ex__21686__auto__ = e38267;
var statearr_38268_38285 = state_38246;
(statearr_38268_38285[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38286 = state_38246;
state_38246 = G__38286;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
cljs$core$async$state_machine__21683__auto__ = function(state_38246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21683__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21683__auto____1.call(this,state_38246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21683__auto____0;
cljs$core$async$state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21683__auto____1;
return cljs$core$async$state_machine__21683__auto__;
})()
;})(switch__21682__auto__,c__21794__auto___38274,out))
})();
var state__21796__auto__ = (function (){var statearr_38269 = f__21795__auto__.call(null);
(statearr_38269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto___38274);

return statearr_38269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(c__21794__auto___38274,out))
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
var args38287 = [];
var len__19428__auto___38336 = arguments.length;
var i__19429__auto___38337 = (0);
while(true){
if((i__19429__auto___38337 < len__19428__auto___38336)){
args38287.push((arguments[i__19429__auto___38337]));

var G__38338 = (i__19429__auto___38337 + (1));
i__19429__auto___38337 = G__38338;
continue;
} else {
}
break;
}

var G__38289 = args38287.length;
switch (G__38289) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38287.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21794__auto___38340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21794__auto___38340,out){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (c__21794__auto___38340,out){
return (function (state_38313){
var state_val_38314 = (state_38313[(1)]);
if((state_val_38314 === (7))){
var inst_38295 = (state_38313[(7)]);
var inst_38295__$1 = (state_38313[(2)]);
var inst_38296 = (inst_38295__$1 == null);
var inst_38297 = cljs.core.not.call(null,inst_38296);
var state_38313__$1 = (function (){var statearr_38315 = state_38313;
(statearr_38315[(7)] = inst_38295__$1);

return statearr_38315;
})();
if(inst_38297){
var statearr_38316_38341 = state_38313__$1;
(statearr_38316_38341[(1)] = (8));

} else {
var statearr_38317_38342 = state_38313__$1;
(statearr_38317_38342[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38314 === (1))){
var inst_38290 = (0);
var state_38313__$1 = (function (){var statearr_38318 = state_38313;
(statearr_38318[(8)] = inst_38290);

return statearr_38318;
})();
var statearr_38319_38343 = state_38313__$1;
(statearr_38319_38343[(2)] = null);

(statearr_38319_38343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38314 === (4))){
var state_38313__$1 = state_38313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38313__$1,(7),ch);
} else {
if((state_val_38314 === (6))){
var inst_38308 = (state_38313[(2)]);
var state_38313__$1 = state_38313;
var statearr_38320_38344 = state_38313__$1;
(statearr_38320_38344[(2)] = inst_38308);

(statearr_38320_38344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38314 === (3))){
var inst_38310 = (state_38313[(2)]);
var inst_38311 = cljs.core.async.close_BANG_.call(null,out);
var state_38313__$1 = (function (){var statearr_38321 = state_38313;
(statearr_38321[(9)] = inst_38310);

return statearr_38321;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38313__$1,inst_38311);
} else {
if((state_val_38314 === (2))){
var inst_38290 = (state_38313[(8)]);
var inst_38292 = (inst_38290 < n);
var state_38313__$1 = state_38313;
if(cljs.core.truth_(inst_38292)){
var statearr_38322_38345 = state_38313__$1;
(statearr_38322_38345[(1)] = (4));

} else {
var statearr_38323_38346 = state_38313__$1;
(statearr_38323_38346[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38314 === (11))){
var inst_38290 = (state_38313[(8)]);
var inst_38300 = (state_38313[(2)]);
var inst_38301 = (inst_38290 + (1));
var inst_38290__$1 = inst_38301;
var state_38313__$1 = (function (){var statearr_38324 = state_38313;
(statearr_38324[(10)] = inst_38300);

(statearr_38324[(8)] = inst_38290__$1);

return statearr_38324;
})();
var statearr_38325_38347 = state_38313__$1;
(statearr_38325_38347[(2)] = null);

(statearr_38325_38347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38314 === (9))){
var state_38313__$1 = state_38313;
var statearr_38326_38348 = state_38313__$1;
(statearr_38326_38348[(2)] = null);

(statearr_38326_38348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38314 === (5))){
var state_38313__$1 = state_38313;
var statearr_38327_38349 = state_38313__$1;
(statearr_38327_38349[(2)] = null);

(statearr_38327_38349[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38314 === (10))){
var inst_38305 = (state_38313[(2)]);
var state_38313__$1 = state_38313;
var statearr_38328_38350 = state_38313__$1;
(statearr_38328_38350[(2)] = inst_38305);

(statearr_38328_38350[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38314 === (8))){
var inst_38295 = (state_38313[(7)]);
var state_38313__$1 = state_38313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38313__$1,(11),out,inst_38295);
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
});})(c__21794__auto___38340,out))
;
return ((function (switch__21682__auto__,c__21794__auto___38340,out){
return (function() {
var cljs$core$async$state_machine__21683__auto__ = null;
var cljs$core$async$state_machine__21683__auto____0 = (function (){
var statearr_38332 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38332[(0)] = cljs$core$async$state_machine__21683__auto__);

(statearr_38332[(1)] = (1));

return statearr_38332;
});
var cljs$core$async$state_machine__21683__auto____1 = (function (state_38313){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_38313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e38333){if((e38333 instanceof Object)){
var ex__21686__auto__ = e38333;
var statearr_38334_38351 = state_38313;
(statearr_38334_38351[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38352 = state_38313;
state_38313 = G__38352;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
cljs$core$async$state_machine__21683__auto__ = function(state_38313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21683__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21683__auto____1.call(this,state_38313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21683__auto____0;
cljs$core$async$state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21683__auto____1;
return cljs$core$async$state_machine__21683__auto__;
})()
;})(switch__21682__auto__,c__21794__auto___38340,out))
})();
var state__21796__auto__ = (function (){var statearr_38335 = f__21795__auto__.call(null);
(statearr_38335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto___38340);

return statearr_38335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(c__21794__auto___38340,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38360 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38360 = (function (map_LT_,f,ch,meta38361){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38361 = meta38361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38362,meta38361__$1){
var self__ = this;
var _38362__$1 = this;
return (new cljs.core.async.t_cljs$core$async38360(self__.map_LT_,self__.f,self__.ch,meta38361__$1));
});

cljs.core.async.t_cljs$core$async38360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38362){
var self__ = this;
var _38362__$1 = this;
return self__.meta38361;
});

cljs.core.async.t_cljs$core$async38360.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38360.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38360.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38360.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38360.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async38363 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38363 = (function (map_LT_,f,ch,meta38361,_,fn1,meta38364){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38361 = meta38361;
this._ = _;
this.fn1 = fn1;
this.meta38364 = meta38364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38365,meta38364__$1){
var self__ = this;
var _38365__$1 = this;
return (new cljs.core.async.t_cljs$core$async38363(self__.map_LT_,self__.f,self__.ch,self__.meta38361,self__._,self__.fn1,meta38364__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async38363.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38365){
var self__ = this;
var _38365__$1 = this;
return self__.meta38364;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38363.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async38363.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38363.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38363.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__38353_SHARP_){
return f1.call(null,(((p1__38353_SHARP_ == null))?null:self__.f.call(null,p1__38353_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async38363.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38361","meta38361",929901912,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38360","cljs.core.async/t_cljs$core$async38360",1969170017,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38364","meta38364",-1820897567,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38363.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38363.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38363";

cljs.core.async.t_cljs$core$async38363.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async38363");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async38363 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38363(map_LT___$1,f__$1,ch__$1,meta38361__$1,___$2,fn1__$1,meta38364){
return (new cljs.core.async.t_cljs$core$async38363(map_LT___$1,f__$1,ch__$1,meta38361__$1,___$2,fn1__$1,meta38364));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async38363(self__.map_LT_,self__.f,self__.ch,self__.meta38361,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async38360.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38360.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async38360.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38361","meta38361",929901912,null)], null);
});

cljs.core.async.t_cljs$core$async38360.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38360";

cljs.core.async.t_cljs$core$async38360.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async38360");
});

cljs.core.async.__GT_t_cljs$core$async38360 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38360(map_LT___$1,f__$1,ch__$1,meta38361){
return (new cljs.core.async.t_cljs$core$async38360(map_LT___$1,f__$1,ch__$1,meta38361));
});

}

return (new cljs.core.async.t_cljs$core$async38360(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38369 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38369 = (function (map_GT_,f,ch,meta38370){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta38370 = meta38370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38371,meta38370__$1){
var self__ = this;
var _38371__$1 = this;
return (new cljs.core.async.t_cljs$core$async38369(self__.map_GT_,self__.f,self__.ch,meta38370__$1));
});

cljs.core.async.t_cljs$core$async38369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38371){
var self__ = this;
var _38371__$1 = this;
return self__.meta38370;
});

cljs.core.async.t_cljs$core$async38369.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38369.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38369.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38369.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38369.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38369.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async38369.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38370","meta38370",954045156,null)], null);
});

cljs.core.async.t_cljs$core$async38369.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38369.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38369";

cljs.core.async.t_cljs$core$async38369.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async38369");
});

cljs.core.async.__GT_t_cljs$core$async38369 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38369(map_GT___$1,f__$1,ch__$1,meta38370){
return (new cljs.core.async.t_cljs$core$async38369(map_GT___$1,f__$1,ch__$1,meta38370));
});

}

return (new cljs.core.async.t_cljs$core$async38369(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async38375 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38375 = (function (filter_GT_,p,ch,meta38376){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta38376 = meta38376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38377,meta38376__$1){
var self__ = this;
var _38377__$1 = this;
return (new cljs.core.async.t_cljs$core$async38375(self__.filter_GT_,self__.p,self__.ch,meta38376__$1));
});

cljs.core.async.t_cljs$core$async38375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38377){
var self__ = this;
var _38377__$1 = this;
return self__.meta38376;
});

cljs.core.async.t_cljs$core$async38375.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38375.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38375.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38375.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38375.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38375.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38375.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async38375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38376","meta38376",-719228628,null)], null);
});

cljs.core.async.t_cljs$core$async38375.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38375";

cljs.core.async.t_cljs$core$async38375.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async38375");
});

cljs.core.async.__GT_t_cljs$core$async38375 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38375(filter_GT___$1,p__$1,ch__$1,meta38376){
return (new cljs.core.async.t_cljs$core$async38375(filter_GT___$1,p__$1,ch__$1,meta38376));
});

}

return (new cljs.core.async.t_cljs$core$async38375(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args38378 = [];
var len__19428__auto___38422 = arguments.length;
var i__19429__auto___38423 = (0);
while(true){
if((i__19429__auto___38423 < len__19428__auto___38422)){
args38378.push((arguments[i__19429__auto___38423]));

var G__38424 = (i__19429__auto___38423 + (1));
i__19429__auto___38423 = G__38424;
continue;
} else {
}
break;
}

var G__38380 = args38378.length;
switch (G__38380) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38378.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21794__auto___38426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21794__auto___38426,out){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (c__21794__auto___38426,out){
return (function (state_38401){
var state_val_38402 = (state_38401[(1)]);
if((state_val_38402 === (7))){
var inst_38397 = (state_38401[(2)]);
var state_38401__$1 = state_38401;
var statearr_38403_38427 = state_38401__$1;
(statearr_38403_38427[(2)] = inst_38397);

(statearr_38403_38427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38402 === (1))){
var state_38401__$1 = state_38401;
var statearr_38404_38428 = state_38401__$1;
(statearr_38404_38428[(2)] = null);

(statearr_38404_38428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38402 === (4))){
var inst_38383 = (state_38401[(7)]);
var inst_38383__$1 = (state_38401[(2)]);
var inst_38384 = (inst_38383__$1 == null);
var state_38401__$1 = (function (){var statearr_38405 = state_38401;
(statearr_38405[(7)] = inst_38383__$1);

return statearr_38405;
})();
if(cljs.core.truth_(inst_38384)){
var statearr_38406_38429 = state_38401__$1;
(statearr_38406_38429[(1)] = (5));

} else {
var statearr_38407_38430 = state_38401__$1;
(statearr_38407_38430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38402 === (6))){
var inst_38383 = (state_38401[(7)]);
var inst_38388 = p.call(null,inst_38383);
var state_38401__$1 = state_38401;
if(cljs.core.truth_(inst_38388)){
var statearr_38408_38431 = state_38401__$1;
(statearr_38408_38431[(1)] = (8));

} else {
var statearr_38409_38432 = state_38401__$1;
(statearr_38409_38432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38402 === (3))){
var inst_38399 = (state_38401[(2)]);
var state_38401__$1 = state_38401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38401__$1,inst_38399);
} else {
if((state_val_38402 === (2))){
var state_38401__$1 = state_38401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38401__$1,(4),ch);
} else {
if((state_val_38402 === (11))){
var inst_38391 = (state_38401[(2)]);
var state_38401__$1 = state_38401;
var statearr_38410_38433 = state_38401__$1;
(statearr_38410_38433[(2)] = inst_38391);

(statearr_38410_38433[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38402 === (9))){
var state_38401__$1 = state_38401;
var statearr_38411_38434 = state_38401__$1;
(statearr_38411_38434[(2)] = null);

(statearr_38411_38434[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38402 === (5))){
var inst_38386 = cljs.core.async.close_BANG_.call(null,out);
var state_38401__$1 = state_38401;
var statearr_38412_38435 = state_38401__$1;
(statearr_38412_38435[(2)] = inst_38386);

(statearr_38412_38435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38402 === (10))){
var inst_38394 = (state_38401[(2)]);
var state_38401__$1 = (function (){var statearr_38413 = state_38401;
(statearr_38413[(8)] = inst_38394);

return statearr_38413;
})();
var statearr_38414_38436 = state_38401__$1;
(statearr_38414_38436[(2)] = null);

(statearr_38414_38436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38402 === (8))){
var inst_38383 = (state_38401[(7)]);
var state_38401__$1 = state_38401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38401__$1,(11),out,inst_38383);
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
});})(c__21794__auto___38426,out))
;
return ((function (switch__21682__auto__,c__21794__auto___38426,out){
return (function() {
var cljs$core$async$state_machine__21683__auto__ = null;
var cljs$core$async$state_machine__21683__auto____0 = (function (){
var statearr_38418 = [null,null,null,null,null,null,null,null,null];
(statearr_38418[(0)] = cljs$core$async$state_machine__21683__auto__);

(statearr_38418[(1)] = (1));

return statearr_38418;
});
var cljs$core$async$state_machine__21683__auto____1 = (function (state_38401){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_38401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e38419){if((e38419 instanceof Object)){
var ex__21686__auto__ = e38419;
var statearr_38420_38437 = state_38401;
(statearr_38420_38437[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38438 = state_38401;
state_38401 = G__38438;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
cljs$core$async$state_machine__21683__auto__ = function(state_38401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21683__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21683__auto____1.call(this,state_38401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21683__auto____0;
cljs$core$async$state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21683__auto____1;
return cljs$core$async$state_machine__21683__auto__;
})()
;})(switch__21682__auto__,c__21794__auto___38426,out))
})();
var state__21796__auto__ = (function (){var statearr_38421 = f__21795__auto__.call(null);
(statearr_38421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto___38426);

return statearr_38421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(c__21794__auto___38426,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args38439 = [];
var len__19428__auto___38442 = arguments.length;
var i__19429__auto___38443 = (0);
while(true){
if((i__19429__auto___38443 < len__19428__auto___38442)){
args38439.push((arguments[i__19429__auto___38443]));

var G__38444 = (i__19429__auto___38443 + (1));
i__19429__auto___38443 = G__38444;
continue;
} else {
}
break;
}

var G__38441 = args38439.length;
switch (G__38441) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38439.length)].join('')));

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
var c__21794__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21794__auto__){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (c__21794__auto__){
return (function (state_38611){
var state_val_38612 = (state_38611[(1)]);
if((state_val_38612 === (7))){
var inst_38607 = (state_38611[(2)]);
var state_38611__$1 = state_38611;
var statearr_38613_38654 = state_38611__$1;
(statearr_38613_38654[(2)] = inst_38607);

(statearr_38613_38654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38612 === (20))){
var inst_38577 = (state_38611[(7)]);
var inst_38588 = (state_38611[(2)]);
var inst_38589 = cljs.core.next.call(null,inst_38577);
var inst_38563 = inst_38589;
var inst_38564 = null;
var inst_38565 = (0);
var inst_38566 = (0);
var state_38611__$1 = (function (){var statearr_38614 = state_38611;
(statearr_38614[(8)] = inst_38588);

(statearr_38614[(9)] = inst_38564);

(statearr_38614[(10)] = inst_38565);

(statearr_38614[(11)] = inst_38563);

(statearr_38614[(12)] = inst_38566);

return statearr_38614;
})();
var statearr_38615_38655 = state_38611__$1;
(statearr_38615_38655[(2)] = null);

(statearr_38615_38655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38612 === (1))){
var state_38611__$1 = state_38611;
var statearr_38616_38656 = state_38611__$1;
(statearr_38616_38656[(2)] = null);

(statearr_38616_38656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38612 === (4))){
var inst_38552 = (state_38611[(13)]);
var inst_38552__$1 = (state_38611[(2)]);
var inst_38553 = (inst_38552__$1 == null);
var state_38611__$1 = (function (){var statearr_38617 = state_38611;
(statearr_38617[(13)] = inst_38552__$1);

return statearr_38617;
})();
if(cljs.core.truth_(inst_38553)){
var statearr_38618_38657 = state_38611__$1;
(statearr_38618_38657[(1)] = (5));

} else {
var statearr_38619_38658 = state_38611__$1;
(statearr_38619_38658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38612 === (15))){
var state_38611__$1 = state_38611;
var statearr_38623_38659 = state_38611__$1;
(statearr_38623_38659[(2)] = null);

(statearr_38623_38659[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38612 === (21))){
var state_38611__$1 = state_38611;
var statearr_38624_38660 = state_38611__$1;
(statearr_38624_38660[(2)] = null);

(statearr_38624_38660[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38612 === (13))){
var inst_38564 = (state_38611[(9)]);
var inst_38565 = (state_38611[(10)]);
var inst_38563 = (state_38611[(11)]);
var inst_38566 = (state_38611[(12)]);
var inst_38573 = (state_38611[(2)]);
var inst_38574 = (inst_38566 + (1));
var tmp38620 = inst_38564;
var tmp38621 = inst_38565;
var tmp38622 = inst_38563;
var inst_38563__$1 = tmp38622;
var inst_38564__$1 = tmp38620;
var inst_38565__$1 = tmp38621;
var inst_38566__$1 = inst_38574;
var state_38611__$1 = (function (){var statearr_38625 = state_38611;
(statearr_38625[(9)] = inst_38564__$1);

(statearr_38625[(14)] = inst_38573);

(statearr_38625[(10)] = inst_38565__$1);

(statearr_38625[(11)] = inst_38563__$1);

(statearr_38625[(12)] = inst_38566__$1);

return statearr_38625;
})();
var statearr_38626_38661 = state_38611__$1;
(statearr_38626_38661[(2)] = null);

(statearr_38626_38661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38612 === (22))){
var state_38611__$1 = state_38611;
var statearr_38627_38662 = state_38611__$1;
(statearr_38627_38662[(2)] = null);

(statearr_38627_38662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38612 === (6))){
var inst_38552 = (state_38611[(13)]);
var inst_38561 = f.call(null,inst_38552);
var inst_38562 = cljs.core.seq.call(null,inst_38561);
var inst_38563 = inst_38562;
var inst_38564 = null;
var inst_38565 = (0);
var inst_38566 = (0);
var state_38611__$1 = (function (){var statearr_38628 = state_38611;
(statearr_38628[(9)] = inst_38564);

(statearr_38628[(10)] = inst_38565);

(statearr_38628[(11)] = inst_38563);

(statearr_38628[(12)] = inst_38566);

return statearr_38628;
})();
var statearr_38629_38663 = state_38611__$1;
(statearr_38629_38663[(2)] = null);

(statearr_38629_38663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38612 === (17))){
var inst_38577 = (state_38611[(7)]);
var inst_38581 = cljs.core.chunk_first.call(null,inst_38577);
var inst_38582 = cljs.core.chunk_rest.call(null,inst_38577);
var inst_38583 = cljs.core.count.call(null,inst_38581);
var inst_38563 = inst_38582;
var inst_38564 = inst_38581;
var inst_38565 = inst_38583;
var inst_38566 = (0);
var state_38611__$1 = (function (){var statearr_38630 = state_38611;
(statearr_38630[(9)] = inst_38564);

(statearr_38630[(10)] = inst_38565);

(statearr_38630[(11)] = inst_38563);

(statearr_38630[(12)] = inst_38566);

return statearr_38630;
})();
var statearr_38631_38664 = state_38611__$1;
(statearr_38631_38664[(2)] = null);

(statearr_38631_38664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38612 === (3))){
var inst_38609 = (state_38611[(2)]);
var state_38611__$1 = state_38611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38611__$1,inst_38609);
} else {
if((state_val_38612 === (12))){
var inst_38597 = (state_38611[(2)]);
var state_38611__$1 = state_38611;
var statearr_38632_38665 = state_38611__$1;
(statearr_38632_38665[(2)] = inst_38597);

(statearr_38632_38665[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38612 === (2))){
var state_38611__$1 = state_38611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38611__$1,(4),in$);
} else {
if((state_val_38612 === (23))){
var inst_38605 = (state_38611[(2)]);
var state_38611__$1 = state_38611;
var statearr_38633_38666 = state_38611__$1;
(statearr_38633_38666[(2)] = inst_38605);

(statearr_38633_38666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38612 === (19))){
var inst_38592 = (state_38611[(2)]);
var state_38611__$1 = state_38611;
var statearr_38634_38667 = state_38611__$1;
(statearr_38634_38667[(2)] = inst_38592);

(statearr_38634_38667[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38612 === (11))){
var inst_38577 = (state_38611[(7)]);
var inst_38563 = (state_38611[(11)]);
var inst_38577__$1 = cljs.core.seq.call(null,inst_38563);
var state_38611__$1 = (function (){var statearr_38635 = state_38611;
(statearr_38635[(7)] = inst_38577__$1);

return statearr_38635;
})();
if(inst_38577__$1){
var statearr_38636_38668 = state_38611__$1;
(statearr_38636_38668[(1)] = (14));

} else {
var statearr_38637_38669 = state_38611__$1;
(statearr_38637_38669[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38612 === (9))){
var inst_38599 = (state_38611[(2)]);
var inst_38600 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_38611__$1 = (function (){var statearr_38638 = state_38611;
(statearr_38638[(15)] = inst_38599);

return statearr_38638;
})();
if(cljs.core.truth_(inst_38600)){
var statearr_38639_38670 = state_38611__$1;
(statearr_38639_38670[(1)] = (21));

} else {
var statearr_38640_38671 = state_38611__$1;
(statearr_38640_38671[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38612 === (5))){
var inst_38555 = cljs.core.async.close_BANG_.call(null,out);
var state_38611__$1 = state_38611;
var statearr_38641_38672 = state_38611__$1;
(statearr_38641_38672[(2)] = inst_38555);

(statearr_38641_38672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38612 === (14))){
var inst_38577 = (state_38611[(7)]);
var inst_38579 = cljs.core.chunked_seq_QMARK_.call(null,inst_38577);
var state_38611__$1 = state_38611;
if(inst_38579){
var statearr_38642_38673 = state_38611__$1;
(statearr_38642_38673[(1)] = (17));

} else {
var statearr_38643_38674 = state_38611__$1;
(statearr_38643_38674[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38612 === (16))){
var inst_38595 = (state_38611[(2)]);
var state_38611__$1 = state_38611;
var statearr_38644_38675 = state_38611__$1;
(statearr_38644_38675[(2)] = inst_38595);

(statearr_38644_38675[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38612 === (10))){
var inst_38564 = (state_38611[(9)]);
var inst_38566 = (state_38611[(12)]);
var inst_38571 = cljs.core._nth.call(null,inst_38564,inst_38566);
var state_38611__$1 = state_38611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38611__$1,(13),out,inst_38571);
} else {
if((state_val_38612 === (18))){
var inst_38577 = (state_38611[(7)]);
var inst_38586 = cljs.core.first.call(null,inst_38577);
var state_38611__$1 = state_38611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38611__$1,(20),out,inst_38586);
} else {
if((state_val_38612 === (8))){
var inst_38565 = (state_38611[(10)]);
var inst_38566 = (state_38611[(12)]);
var inst_38568 = (inst_38566 < inst_38565);
var inst_38569 = inst_38568;
var state_38611__$1 = state_38611;
if(cljs.core.truth_(inst_38569)){
var statearr_38645_38676 = state_38611__$1;
(statearr_38645_38676[(1)] = (10));

} else {
var statearr_38646_38677 = state_38611__$1;
(statearr_38646_38677[(1)] = (11));

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
});})(c__21794__auto__))
;
return ((function (switch__21682__auto__,c__21794__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21683__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21683__auto____0 = (function (){
var statearr_38650 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38650[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21683__auto__);

(statearr_38650[(1)] = (1));

return statearr_38650;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21683__auto____1 = (function (state_38611){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_38611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e38651){if((e38651 instanceof Object)){
var ex__21686__auto__ = e38651;
var statearr_38652_38678 = state_38611;
(statearr_38652_38678[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38679 = state_38611;
state_38611 = G__38679;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21683__auto__ = function(state_38611){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21683__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21683__auto____1.call(this,state_38611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21683__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21683__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21683__auto__;
})()
;})(switch__21682__auto__,c__21794__auto__))
})();
var state__21796__auto__ = (function (){var statearr_38653 = f__21795__auto__.call(null);
(statearr_38653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto__);

return statearr_38653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(c__21794__auto__))
);

return c__21794__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args38680 = [];
var len__19428__auto___38683 = arguments.length;
var i__19429__auto___38684 = (0);
while(true){
if((i__19429__auto___38684 < len__19428__auto___38683)){
args38680.push((arguments[i__19429__auto___38684]));

var G__38685 = (i__19429__auto___38684 + (1));
i__19429__auto___38684 = G__38685;
continue;
} else {
}
break;
}

var G__38682 = args38680.length;
switch (G__38682) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38680.length)].join('')));

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
var args38687 = [];
var len__19428__auto___38690 = arguments.length;
var i__19429__auto___38691 = (0);
while(true){
if((i__19429__auto___38691 < len__19428__auto___38690)){
args38687.push((arguments[i__19429__auto___38691]));

var G__38692 = (i__19429__auto___38691 + (1));
i__19429__auto___38691 = G__38692;
continue;
} else {
}
break;
}

var G__38689 = args38687.length;
switch (G__38689) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38687.length)].join('')));

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
var args38694 = [];
var len__19428__auto___38745 = arguments.length;
var i__19429__auto___38746 = (0);
while(true){
if((i__19429__auto___38746 < len__19428__auto___38745)){
args38694.push((arguments[i__19429__auto___38746]));

var G__38747 = (i__19429__auto___38746 + (1));
i__19429__auto___38746 = G__38747;
continue;
} else {
}
break;
}

var G__38696 = args38694.length;
switch (G__38696) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38694.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21794__auto___38749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21794__auto___38749,out){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (c__21794__auto___38749,out){
return (function (state_38720){
var state_val_38721 = (state_38720[(1)]);
if((state_val_38721 === (7))){
var inst_38715 = (state_38720[(2)]);
var state_38720__$1 = state_38720;
var statearr_38722_38750 = state_38720__$1;
(statearr_38722_38750[(2)] = inst_38715);

(statearr_38722_38750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (1))){
var inst_38697 = null;
var state_38720__$1 = (function (){var statearr_38723 = state_38720;
(statearr_38723[(7)] = inst_38697);

return statearr_38723;
})();
var statearr_38724_38751 = state_38720__$1;
(statearr_38724_38751[(2)] = null);

(statearr_38724_38751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (4))){
var inst_38700 = (state_38720[(8)]);
var inst_38700__$1 = (state_38720[(2)]);
var inst_38701 = (inst_38700__$1 == null);
var inst_38702 = cljs.core.not.call(null,inst_38701);
var state_38720__$1 = (function (){var statearr_38725 = state_38720;
(statearr_38725[(8)] = inst_38700__$1);

return statearr_38725;
})();
if(inst_38702){
var statearr_38726_38752 = state_38720__$1;
(statearr_38726_38752[(1)] = (5));

} else {
var statearr_38727_38753 = state_38720__$1;
(statearr_38727_38753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (6))){
var state_38720__$1 = state_38720;
var statearr_38728_38754 = state_38720__$1;
(statearr_38728_38754[(2)] = null);

(statearr_38728_38754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (3))){
var inst_38717 = (state_38720[(2)]);
var inst_38718 = cljs.core.async.close_BANG_.call(null,out);
var state_38720__$1 = (function (){var statearr_38729 = state_38720;
(statearr_38729[(9)] = inst_38717);

return statearr_38729;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38720__$1,inst_38718);
} else {
if((state_val_38721 === (2))){
var state_38720__$1 = state_38720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38720__$1,(4),ch);
} else {
if((state_val_38721 === (11))){
var inst_38700 = (state_38720[(8)]);
var inst_38709 = (state_38720[(2)]);
var inst_38697 = inst_38700;
var state_38720__$1 = (function (){var statearr_38730 = state_38720;
(statearr_38730[(10)] = inst_38709);

(statearr_38730[(7)] = inst_38697);

return statearr_38730;
})();
var statearr_38731_38755 = state_38720__$1;
(statearr_38731_38755[(2)] = null);

(statearr_38731_38755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (9))){
var inst_38700 = (state_38720[(8)]);
var state_38720__$1 = state_38720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38720__$1,(11),out,inst_38700);
} else {
if((state_val_38721 === (5))){
var inst_38700 = (state_38720[(8)]);
var inst_38697 = (state_38720[(7)]);
var inst_38704 = cljs.core._EQ_.call(null,inst_38700,inst_38697);
var state_38720__$1 = state_38720;
if(inst_38704){
var statearr_38733_38756 = state_38720__$1;
(statearr_38733_38756[(1)] = (8));

} else {
var statearr_38734_38757 = state_38720__$1;
(statearr_38734_38757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (10))){
var inst_38712 = (state_38720[(2)]);
var state_38720__$1 = state_38720;
var statearr_38735_38758 = state_38720__$1;
(statearr_38735_38758[(2)] = inst_38712);

(statearr_38735_38758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (8))){
var inst_38697 = (state_38720[(7)]);
var tmp38732 = inst_38697;
var inst_38697__$1 = tmp38732;
var state_38720__$1 = (function (){var statearr_38736 = state_38720;
(statearr_38736[(7)] = inst_38697__$1);

return statearr_38736;
})();
var statearr_38737_38759 = state_38720__$1;
(statearr_38737_38759[(2)] = null);

(statearr_38737_38759[(1)] = (2));


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
});})(c__21794__auto___38749,out))
;
return ((function (switch__21682__auto__,c__21794__auto___38749,out){
return (function() {
var cljs$core$async$state_machine__21683__auto__ = null;
var cljs$core$async$state_machine__21683__auto____0 = (function (){
var statearr_38741 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38741[(0)] = cljs$core$async$state_machine__21683__auto__);

(statearr_38741[(1)] = (1));

return statearr_38741;
});
var cljs$core$async$state_machine__21683__auto____1 = (function (state_38720){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_38720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e38742){if((e38742 instanceof Object)){
var ex__21686__auto__ = e38742;
var statearr_38743_38760 = state_38720;
(statearr_38743_38760[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38761 = state_38720;
state_38720 = G__38761;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
cljs$core$async$state_machine__21683__auto__ = function(state_38720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21683__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21683__auto____1.call(this,state_38720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21683__auto____0;
cljs$core$async$state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21683__auto____1;
return cljs$core$async$state_machine__21683__auto__;
})()
;})(switch__21682__auto__,c__21794__auto___38749,out))
})();
var state__21796__auto__ = (function (){var statearr_38744 = f__21795__auto__.call(null);
(statearr_38744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto___38749);

return statearr_38744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(c__21794__auto___38749,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args38762 = [];
var len__19428__auto___38832 = arguments.length;
var i__19429__auto___38833 = (0);
while(true){
if((i__19429__auto___38833 < len__19428__auto___38832)){
args38762.push((arguments[i__19429__auto___38833]));

var G__38834 = (i__19429__auto___38833 + (1));
i__19429__auto___38833 = G__38834;
continue;
} else {
}
break;
}

var G__38764 = args38762.length;
switch (G__38764) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38762.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21794__auto___38836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21794__auto___38836,out){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (c__21794__auto___38836,out){
return (function (state_38802){
var state_val_38803 = (state_38802[(1)]);
if((state_val_38803 === (7))){
var inst_38798 = (state_38802[(2)]);
var state_38802__$1 = state_38802;
var statearr_38804_38837 = state_38802__$1;
(statearr_38804_38837[(2)] = inst_38798);

(statearr_38804_38837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38803 === (1))){
var inst_38765 = (new Array(n));
var inst_38766 = inst_38765;
var inst_38767 = (0);
var state_38802__$1 = (function (){var statearr_38805 = state_38802;
(statearr_38805[(7)] = inst_38767);

(statearr_38805[(8)] = inst_38766);

return statearr_38805;
})();
var statearr_38806_38838 = state_38802__$1;
(statearr_38806_38838[(2)] = null);

(statearr_38806_38838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38803 === (4))){
var inst_38770 = (state_38802[(9)]);
var inst_38770__$1 = (state_38802[(2)]);
var inst_38771 = (inst_38770__$1 == null);
var inst_38772 = cljs.core.not.call(null,inst_38771);
var state_38802__$1 = (function (){var statearr_38807 = state_38802;
(statearr_38807[(9)] = inst_38770__$1);

return statearr_38807;
})();
if(inst_38772){
var statearr_38808_38839 = state_38802__$1;
(statearr_38808_38839[(1)] = (5));

} else {
var statearr_38809_38840 = state_38802__$1;
(statearr_38809_38840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38803 === (15))){
var inst_38792 = (state_38802[(2)]);
var state_38802__$1 = state_38802;
var statearr_38810_38841 = state_38802__$1;
(statearr_38810_38841[(2)] = inst_38792);

(statearr_38810_38841[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38803 === (13))){
var state_38802__$1 = state_38802;
var statearr_38811_38842 = state_38802__$1;
(statearr_38811_38842[(2)] = null);

(statearr_38811_38842[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38803 === (6))){
var inst_38767 = (state_38802[(7)]);
var inst_38788 = (inst_38767 > (0));
var state_38802__$1 = state_38802;
if(cljs.core.truth_(inst_38788)){
var statearr_38812_38843 = state_38802__$1;
(statearr_38812_38843[(1)] = (12));

} else {
var statearr_38813_38844 = state_38802__$1;
(statearr_38813_38844[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38803 === (3))){
var inst_38800 = (state_38802[(2)]);
var state_38802__$1 = state_38802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38802__$1,inst_38800);
} else {
if((state_val_38803 === (12))){
var inst_38766 = (state_38802[(8)]);
var inst_38790 = cljs.core.vec.call(null,inst_38766);
var state_38802__$1 = state_38802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38802__$1,(15),out,inst_38790);
} else {
if((state_val_38803 === (2))){
var state_38802__$1 = state_38802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38802__$1,(4),ch);
} else {
if((state_val_38803 === (11))){
var inst_38782 = (state_38802[(2)]);
var inst_38783 = (new Array(n));
var inst_38766 = inst_38783;
var inst_38767 = (0);
var state_38802__$1 = (function (){var statearr_38814 = state_38802;
(statearr_38814[(7)] = inst_38767);

(statearr_38814[(8)] = inst_38766);

(statearr_38814[(10)] = inst_38782);

return statearr_38814;
})();
var statearr_38815_38845 = state_38802__$1;
(statearr_38815_38845[(2)] = null);

(statearr_38815_38845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38803 === (9))){
var inst_38766 = (state_38802[(8)]);
var inst_38780 = cljs.core.vec.call(null,inst_38766);
var state_38802__$1 = state_38802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38802__$1,(11),out,inst_38780);
} else {
if((state_val_38803 === (5))){
var inst_38770 = (state_38802[(9)]);
var inst_38767 = (state_38802[(7)]);
var inst_38775 = (state_38802[(11)]);
var inst_38766 = (state_38802[(8)]);
var inst_38774 = (inst_38766[inst_38767] = inst_38770);
var inst_38775__$1 = (inst_38767 + (1));
var inst_38776 = (inst_38775__$1 < n);
var state_38802__$1 = (function (){var statearr_38816 = state_38802;
(statearr_38816[(12)] = inst_38774);

(statearr_38816[(11)] = inst_38775__$1);

return statearr_38816;
})();
if(cljs.core.truth_(inst_38776)){
var statearr_38817_38846 = state_38802__$1;
(statearr_38817_38846[(1)] = (8));

} else {
var statearr_38818_38847 = state_38802__$1;
(statearr_38818_38847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38803 === (14))){
var inst_38795 = (state_38802[(2)]);
var inst_38796 = cljs.core.async.close_BANG_.call(null,out);
var state_38802__$1 = (function (){var statearr_38820 = state_38802;
(statearr_38820[(13)] = inst_38795);

return statearr_38820;
})();
var statearr_38821_38848 = state_38802__$1;
(statearr_38821_38848[(2)] = inst_38796);

(statearr_38821_38848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38803 === (10))){
var inst_38786 = (state_38802[(2)]);
var state_38802__$1 = state_38802;
var statearr_38822_38849 = state_38802__$1;
(statearr_38822_38849[(2)] = inst_38786);

(statearr_38822_38849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38803 === (8))){
var inst_38775 = (state_38802[(11)]);
var inst_38766 = (state_38802[(8)]);
var tmp38819 = inst_38766;
var inst_38766__$1 = tmp38819;
var inst_38767 = inst_38775;
var state_38802__$1 = (function (){var statearr_38823 = state_38802;
(statearr_38823[(7)] = inst_38767);

(statearr_38823[(8)] = inst_38766__$1);

return statearr_38823;
})();
var statearr_38824_38850 = state_38802__$1;
(statearr_38824_38850[(2)] = null);

(statearr_38824_38850[(1)] = (2));


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
});})(c__21794__auto___38836,out))
;
return ((function (switch__21682__auto__,c__21794__auto___38836,out){
return (function() {
var cljs$core$async$state_machine__21683__auto__ = null;
var cljs$core$async$state_machine__21683__auto____0 = (function (){
var statearr_38828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38828[(0)] = cljs$core$async$state_machine__21683__auto__);

(statearr_38828[(1)] = (1));

return statearr_38828;
});
var cljs$core$async$state_machine__21683__auto____1 = (function (state_38802){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_38802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e38829){if((e38829 instanceof Object)){
var ex__21686__auto__ = e38829;
var statearr_38830_38851 = state_38802;
(statearr_38830_38851[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38852 = state_38802;
state_38802 = G__38852;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
cljs$core$async$state_machine__21683__auto__ = function(state_38802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21683__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21683__auto____1.call(this,state_38802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21683__auto____0;
cljs$core$async$state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21683__auto____1;
return cljs$core$async$state_machine__21683__auto__;
})()
;})(switch__21682__auto__,c__21794__auto___38836,out))
})();
var state__21796__auto__ = (function (){var statearr_38831 = f__21795__auto__.call(null);
(statearr_38831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto___38836);

return statearr_38831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(c__21794__auto___38836,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args38853 = [];
var len__19428__auto___38927 = arguments.length;
var i__19429__auto___38928 = (0);
while(true){
if((i__19429__auto___38928 < len__19428__auto___38927)){
args38853.push((arguments[i__19429__auto___38928]));

var G__38929 = (i__19429__auto___38928 + (1));
i__19429__auto___38928 = G__38929;
continue;
} else {
}
break;
}

var G__38855 = args38853.length;
switch (G__38855) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38853.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21794__auto___38931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21794__auto___38931,out){
return (function (){
var f__21795__auto__ = (function (){var switch__21682__auto__ = ((function (c__21794__auto___38931,out){
return (function (state_38897){
var state_val_38898 = (state_38897[(1)]);
if((state_val_38898 === (7))){
var inst_38893 = (state_38897[(2)]);
var state_38897__$1 = state_38897;
var statearr_38899_38932 = state_38897__$1;
(statearr_38899_38932[(2)] = inst_38893);

(statearr_38899_38932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38898 === (1))){
var inst_38856 = [];
var inst_38857 = inst_38856;
var inst_38858 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38897__$1 = (function (){var statearr_38900 = state_38897;
(statearr_38900[(7)] = inst_38857);

(statearr_38900[(8)] = inst_38858);

return statearr_38900;
})();
var statearr_38901_38933 = state_38897__$1;
(statearr_38901_38933[(2)] = null);

(statearr_38901_38933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38898 === (4))){
var inst_38861 = (state_38897[(9)]);
var inst_38861__$1 = (state_38897[(2)]);
var inst_38862 = (inst_38861__$1 == null);
var inst_38863 = cljs.core.not.call(null,inst_38862);
var state_38897__$1 = (function (){var statearr_38902 = state_38897;
(statearr_38902[(9)] = inst_38861__$1);

return statearr_38902;
})();
if(inst_38863){
var statearr_38903_38934 = state_38897__$1;
(statearr_38903_38934[(1)] = (5));

} else {
var statearr_38904_38935 = state_38897__$1;
(statearr_38904_38935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38898 === (15))){
var inst_38887 = (state_38897[(2)]);
var state_38897__$1 = state_38897;
var statearr_38905_38936 = state_38897__$1;
(statearr_38905_38936[(2)] = inst_38887);

(statearr_38905_38936[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38898 === (13))){
var state_38897__$1 = state_38897;
var statearr_38906_38937 = state_38897__$1;
(statearr_38906_38937[(2)] = null);

(statearr_38906_38937[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38898 === (6))){
var inst_38857 = (state_38897[(7)]);
var inst_38882 = inst_38857.length;
var inst_38883 = (inst_38882 > (0));
var state_38897__$1 = state_38897;
if(cljs.core.truth_(inst_38883)){
var statearr_38907_38938 = state_38897__$1;
(statearr_38907_38938[(1)] = (12));

} else {
var statearr_38908_38939 = state_38897__$1;
(statearr_38908_38939[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38898 === (3))){
var inst_38895 = (state_38897[(2)]);
var state_38897__$1 = state_38897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38897__$1,inst_38895);
} else {
if((state_val_38898 === (12))){
var inst_38857 = (state_38897[(7)]);
var inst_38885 = cljs.core.vec.call(null,inst_38857);
var state_38897__$1 = state_38897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38897__$1,(15),out,inst_38885);
} else {
if((state_val_38898 === (2))){
var state_38897__$1 = state_38897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38897__$1,(4),ch);
} else {
if((state_val_38898 === (11))){
var inst_38861 = (state_38897[(9)]);
var inst_38865 = (state_38897[(10)]);
var inst_38875 = (state_38897[(2)]);
var inst_38876 = [];
var inst_38877 = inst_38876.push(inst_38861);
var inst_38857 = inst_38876;
var inst_38858 = inst_38865;
var state_38897__$1 = (function (){var statearr_38909 = state_38897;
(statearr_38909[(7)] = inst_38857);

(statearr_38909[(11)] = inst_38875);

(statearr_38909[(8)] = inst_38858);

(statearr_38909[(12)] = inst_38877);

return statearr_38909;
})();
var statearr_38910_38940 = state_38897__$1;
(statearr_38910_38940[(2)] = null);

(statearr_38910_38940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38898 === (9))){
var inst_38857 = (state_38897[(7)]);
var inst_38873 = cljs.core.vec.call(null,inst_38857);
var state_38897__$1 = state_38897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38897__$1,(11),out,inst_38873);
} else {
if((state_val_38898 === (5))){
var inst_38861 = (state_38897[(9)]);
var inst_38858 = (state_38897[(8)]);
var inst_38865 = (state_38897[(10)]);
var inst_38865__$1 = f.call(null,inst_38861);
var inst_38866 = cljs.core._EQ_.call(null,inst_38865__$1,inst_38858);
var inst_38867 = cljs.core.keyword_identical_QMARK_.call(null,inst_38858,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38868 = (inst_38866) || (inst_38867);
var state_38897__$1 = (function (){var statearr_38911 = state_38897;
(statearr_38911[(10)] = inst_38865__$1);

return statearr_38911;
})();
if(cljs.core.truth_(inst_38868)){
var statearr_38912_38941 = state_38897__$1;
(statearr_38912_38941[(1)] = (8));

} else {
var statearr_38913_38942 = state_38897__$1;
(statearr_38913_38942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38898 === (14))){
var inst_38890 = (state_38897[(2)]);
var inst_38891 = cljs.core.async.close_BANG_.call(null,out);
var state_38897__$1 = (function (){var statearr_38915 = state_38897;
(statearr_38915[(13)] = inst_38890);

return statearr_38915;
})();
var statearr_38916_38943 = state_38897__$1;
(statearr_38916_38943[(2)] = inst_38891);

(statearr_38916_38943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38898 === (10))){
var inst_38880 = (state_38897[(2)]);
var state_38897__$1 = state_38897;
var statearr_38917_38944 = state_38897__$1;
(statearr_38917_38944[(2)] = inst_38880);

(statearr_38917_38944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38898 === (8))){
var inst_38861 = (state_38897[(9)]);
var inst_38857 = (state_38897[(7)]);
var inst_38865 = (state_38897[(10)]);
var inst_38870 = inst_38857.push(inst_38861);
var tmp38914 = inst_38857;
var inst_38857__$1 = tmp38914;
var inst_38858 = inst_38865;
var state_38897__$1 = (function (){var statearr_38918 = state_38897;
(statearr_38918[(14)] = inst_38870);

(statearr_38918[(7)] = inst_38857__$1);

(statearr_38918[(8)] = inst_38858);

return statearr_38918;
})();
var statearr_38919_38945 = state_38897__$1;
(statearr_38919_38945[(2)] = null);

(statearr_38919_38945[(1)] = (2));


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
});})(c__21794__auto___38931,out))
;
return ((function (switch__21682__auto__,c__21794__auto___38931,out){
return (function() {
var cljs$core$async$state_machine__21683__auto__ = null;
var cljs$core$async$state_machine__21683__auto____0 = (function (){
var statearr_38923 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38923[(0)] = cljs$core$async$state_machine__21683__auto__);

(statearr_38923[(1)] = (1));

return statearr_38923;
});
var cljs$core$async$state_machine__21683__auto____1 = (function (state_38897){
while(true){
var ret_value__21684__auto__ = (function (){try{while(true){
var result__21685__auto__ = switch__21682__auto__.call(null,state_38897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21685__auto__;
}
break;
}
}catch (e38924){if((e38924 instanceof Object)){
var ex__21686__auto__ = e38924;
var statearr_38925_38946 = state_38897;
(statearr_38925_38946[(5)] = ex__21686__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21684__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38947 = state_38897;
state_38897 = G__38947;
continue;
} else {
return ret_value__21684__auto__;
}
break;
}
});
cljs$core$async$state_machine__21683__auto__ = function(state_38897){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21683__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21683__auto____1.call(this,state_38897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21683__auto____0;
cljs$core$async$state_machine__21683__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21683__auto____1;
return cljs$core$async$state_machine__21683__auto__;
})()
;})(switch__21682__auto__,c__21794__auto___38931,out))
})();
var state__21796__auto__ = (function (){var statearr_38926 = f__21795__auto__.call(null);
(statearr_38926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21794__auto___38931);

return statearr_38926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21796__auto__);
});})(c__21794__auto___38931,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1454263147339