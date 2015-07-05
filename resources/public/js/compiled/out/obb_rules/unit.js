// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.unit');
goog.require('cljs.core');
goog.require('obb_rules.units.panther');
goog.require('obb_rules.units.crusader');
goog.require('obb_rules.units.doomer');
goog.require('obb_rules.units.eagle');
goog.require('obb_rules.units.driller');
goog.require('obb_rules.units.krill');
goog.require('obb_rules.units.kahuna');
goog.require('obb_rules.units.fenix');
goog.require('obb_rules.units.raptor');
goog.require('obb_rules.units.scarab');
goog.require('obb_rules.units.rain');
goog.require('obb_rules.units.anubis');
goog.require('obb_rules.units.kamikaze');
goog.require('obb_rules.units.toxic');
goog.require('obb_rules.units.worm');
goog.require('obb_rules.units.pretorian');
goog.require('obb_rules.units.heavy_seeker');
goog.require('obb_rules.units.nova');
goog.require('obb_rules.units.vector');
goog.require('obb_rules.units.boozer');

/**
* @constructor
* @param {*} name
* @param {*} code
* @param {*} value
* @param {*} attack
* @param {*} attack_type
* @param {*} range
* @param {*} defense
* @param {*} bonus
* @param {*} type
* @param {*} category
* @param {*} displacement
* @param {*} movement_type
* @param {*} movement_cost
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
obb_rules.unit.CombatUnit = (function (name,code,value,attack,attack_type,range,defense,bonus,type,category,displacement,movement_type,movement_cost,__meta,__extmap,__hash){
this.name = name;
this.code = code;
this.value = value;
this.attack = attack;
this.attack_type = attack_type;
this.range = range;
this.defense = defense;
this.bonus = bonus;
this.type = type;
this.category = category;
this.displacement = displacement;
this.movement_type = movement_type;
this.movement_cost = movement_cost;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
obb_rules.unit.CombatUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7395__auto__,k__7396__auto__){
var self__ = this;
var this__7395__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7395__auto____$1,k__7396__auto__,null);
});

obb_rules.unit.CombatUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7397__auto__,k12349,else__7398__auto__){
var self__ = this;
var this__7397__auto____$1 = this;
var G__12351 = (((k12349 instanceof cljs.core.Keyword))?k12349.fqn:null);
switch (G__12351) {
case "category":
return self__.category;

break;
case "displacement":
return self__.displacement;

break;
case "attack-type":
return self__.attack_type;

break;
case "name":
return self__.name;

break;
case "value":
return self__.value;

break;
case "movement-cost":
return self__.movement_cost;

break;
case "type":
return self__.type;

break;
case "defense":
return self__.defense;

break;
case "bonus":
return self__.bonus;

break;
case "code":
return self__.code;

break;
case "movement-type":
return self__.movement_type;

break;
case "attack":
return self__.attack;

break;
case "range":
return self__.range;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12349,else__7398__auto__);

}
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7409__auto__,writer__7410__auto__,opts__7411__auto__){
var self__ = this;
var this__7409__auto____$1 = this;
var pr_pair__7412__auto__ = ((function (this__7409__auto____$1){
return (function (keyval__7413__auto__){
return cljs.core.pr_sequential_writer(writer__7410__auto__,cljs.core.pr_writer,""," ","",opts__7411__auto__,keyval__7413__auto__);
});})(this__7409__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7410__auto__,pr_pair__7412__auto__,"#obb-rules.unit.CombatUnit{",", ","}",opts__7411__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$code,self__.code],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$value,self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$attack,self__.attack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$attack_DASH_type,self__.attack_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$range,self__.range],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$defense,self__.defense],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$bonus,self__.bonus],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$category,self__.category],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$displacement,self__.displacement],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$movement_DASH_type,self__.movement_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$movement_DASH_cost,self__.movement_cost],null))], null),self__.__extmap));
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7393__auto__){
var self__ = this;
var this__7393__auto____$1 = this;
return self__.__meta;
});

obb_rules.unit.CombatUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7389__auto__){
var self__ = this;
var this__7389__auto____$1 = this;
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,self__.__hash));
});

obb_rules.unit.CombatUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7399__auto__){
var self__ = this;
var this__7399__auto____$1 = this;
return (13 + cljs.core.count(self__.__extmap));
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7390__auto__){
var self__ = this;
var this__7390__auto____$1 = this;
var h__7216__auto__ = self__.__hash;
if(!((h__7216__auto__ == null))){
return h__7216__auto__;
} else {
var h__7216__auto____$1 = cljs.core.hash_imap(this__7390__auto____$1);
self__.__hash = h__7216__auto____$1;

return h__7216__auto____$1;
}
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7391__auto__,other__7392__auto__){
var self__ = this;
var this__7391__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6788__auto__ = other__7392__auto__;
if(cljs.core.truth_(and__6788__auto__)){
var and__6788__auto____$1 = (this__7391__auto____$1.constructor === other__7392__auto__.constructor);
if(and__6788__auto____$1){
return cljs.core.equiv_map(this__7391__auto____$1,other__7392__auto__);
} else {
return and__6788__auto____$1;
}
} else {
return and__6788__auto__;
}
})())){
return true;
} else {
return false;
}
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7404__auto__,k__7405__auto__){
var self__ = this;
var this__7404__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [cljs.core.constant$keyword$category,null,cljs.core.constant$keyword$displacement,null,cljs.core.constant$keyword$attack_DASH_type,null,cljs.core.constant$keyword$name,null,cljs.core.constant$keyword$value,null,cljs.core.constant$keyword$movement_DASH_cost,null,cljs.core.constant$keyword$type,null,cljs.core.constant$keyword$defense,null,cljs.core.constant$keyword$bonus,null,cljs.core.constant$keyword$code,null,cljs.core.constant$keyword$movement_DASH_type,null,cljs.core.constant$keyword$attack,null,cljs.core.constant$keyword$range,null], null), null),k__7405__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7404__auto____$1),self__.__meta),k__7405__auto__);
} else {
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7405__auto__)),null));
}
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7402__auto__,k__7403__auto__,G__12348){
var self__ = this;
var this__7402__auto____$1 = this;
var pred__12352 = cljs.core.keyword_identical_QMARK_;
var expr__12353 = k__7403__auto__;
if(cljs.core.truth_((function (){var G__12355 = cljs.core.constant$keyword$name;
var G__12356 = expr__12353;
return (pred__12352.cljs$core$IFn$_invoke$arity$2 ? pred__12352.cljs$core$IFn$_invoke$arity$2(G__12355,G__12356) : pred__12352.call(null,G__12355,G__12356));
})())){
return (new obb_rules.unit.CombatUnit(G__12348,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12357 = cljs.core.constant$keyword$code;
var G__12358 = expr__12353;
return (pred__12352.cljs$core$IFn$_invoke$arity$2 ? pred__12352.cljs$core$IFn$_invoke$arity$2(G__12357,G__12358) : pred__12352.call(null,G__12357,G__12358));
})())){
return (new obb_rules.unit.CombatUnit(self__.name,G__12348,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12359 = cljs.core.constant$keyword$value;
var G__12360 = expr__12353;
return (pred__12352.cljs$core$IFn$_invoke$arity$2 ? pred__12352.cljs$core$IFn$_invoke$arity$2(G__12359,G__12360) : pred__12352.call(null,G__12359,G__12360));
})())){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,G__12348,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12361 = cljs.core.constant$keyword$attack;
var G__12362 = expr__12353;
return (pred__12352.cljs$core$IFn$_invoke$arity$2 ? pred__12352.cljs$core$IFn$_invoke$arity$2(G__12361,G__12362) : pred__12352.call(null,G__12361,G__12362));
})())){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,G__12348,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12363 = cljs.core.constant$keyword$attack_DASH_type;
var G__12364 = expr__12353;
return (pred__12352.cljs$core$IFn$_invoke$arity$2 ? pred__12352.cljs$core$IFn$_invoke$arity$2(G__12363,G__12364) : pred__12352.call(null,G__12363,G__12364));
})())){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,G__12348,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12365 = cljs.core.constant$keyword$range;
var G__12366 = expr__12353;
return (pred__12352.cljs$core$IFn$_invoke$arity$2 ? pred__12352.cljs$core$IFn$_invoke$arity$2(G__12365,G__12366) : pred__12352.call(null,G__12365,G__12366));
})())){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,G__12348,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12367 = cljs.core.constant$keyword$defense;
var G__12368 = expr__12353;
return (pred__12352.cljs$core$IFn$_invoke$arity$2 ? pred__12352.cljs$core$IFn$_invoke$arity$2(G__12367,G__12368) : pred__12352.call(null,G__12367,G__12368));
})())){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,G__12348,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12369 = cljs.core.constant$keyword$bonus;
var G__12370 = expr__12353;
return (pred__12352.cljs$core$IFn$_invoke$arity$2 ? pred__12352.cljs$core$IFn$_invoke$arity$2(G__12369,G__12370) : pred__12352.call(null,G__12369,G__12370));
})())){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,G__12348,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12371 = cljs.core.constant$keyword$type;
var G__12372 = expr__12353;
return (pred__12352.cljs$core$IFn$_invoke$arity$2 ? pred__12352.cljs$core$IFn$_invoke$arity$2(G__12371,G__12372) : pred__12352.call(null,G__12371,G__12372));
})())){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,G__12348,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12373 = cljs.core.constant$keyword$category;
var G__12374 = expr__12353;
return (pred__12352.cljs$core$IFn$_invoke$arity$2 ? pred__12352.cljs$core$IFn$_invoke$arity$2(G__12373,G__12374) : pred__12352.call(null,G__12373,G__12374));
})())){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,G__12348,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12375 = cljs.core.constant$keyword$displacement;
var G__12376 = expr__12353;
return (pred__12352.cljs$core$IFn$_invoke$arity$2 ? pred__12352.cljs$core$IFn$_invoke$arity$2(G__12375,G__12376) : pred__12352.call(null,G__12375,G__12376));
})())){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,G__12348,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12377 = cljs.core.constant$keyword$movement_DASH_type;
var G__12378 = expr__12353;
return (pred__12352.cljs$core$IFn$_invoke$arity$2 ? pred__12352.cljs$core$IFn$_invoke$arity$2(G__12377,G__12378) : pred__12352.call(null,G__12377,G__12378));
})())){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,G__12348,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12379 = cljs.core.constant$keyword$movement_DASH_cost;
var G__12380 = expr__12353;
return (pred__12352.cljs$core$IFn$_invoke$arity$2 ? pred__12352.cljs$core$IFn$_invoke$arity$2(G__12379,G__12380) : pred__12352.call(null,G__12379,G__12380));
})())){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,G__12348,self__.__meta,self__.__extmap,null));
} else {
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7403__auto__,G__12348),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
});

obb_rules.unit.CombatUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7407__auto__){
var self__ = this;
var this__7407__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$code,self__.code],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$value,self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$attack,self__.attack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$attack_DASH_type,self__.attack_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$range,self__.range],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$defense,self__.defense],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$bonus,self__.bonus],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$category,self__.category],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$displacement,self__.displacement],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$movement_DASH_type,self__.movement_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$movement_DASH_cost,self__.movement_cost],null))], null),self__.__extmap));
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7394__auto__,G__12348){
var self__ = this;
var this__7394__auto____$1 = this;
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,G__12348,self__.__extmap,self__.__hash));
});

obb_rules.unit.CombatUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7400__auto__,entry__7401__auto__){
var self__ = this;
var this__7400__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7401__auto__)){
return cljs.core._assoc(this__7400__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7401__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7401__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7400__auto____$1,entry__7401__auto__);
}
});

obb_rules.unit.CombatUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"code","code",-1068142627,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"attack","attack",-697373981,null),new cljs.core.Symbol(null,"attack-type","attack-type",1000620106,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"defense","defense",-899420777,null),new cljs.core.Symbol(null,"bonus","bonus",-43859622,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"category","category",1047438695,null),new cljs.core.Symbol(null,"displacement","displacement",330930858,null),new cljs.core.Symbol(null,"movement-type","movement-type",299712382,null),new cljs.core.Symbol(null,"movement-cost","movement-cost",924230482,null)], null);
});

obb_rules.unit.CombatUnit.cljs$lang$type = true;

obb_rules.unit.CombatUnit.cljs$lang$ctorPrSeq = (function (this__7429__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"obb-rules.unit/CombatUnit");
});

obb_rules.unit.CombatUnit.cljs$lang$ctorPrWriter = (function (this__7429__auto__,writer__7430__auto__){
return cljs.core._write(writer__7430__auto__,"obb-rules.unit/CombatUnit");
});

/**
 * Represents a combat unit
 */
obb_rules.unit.__GT_CombatUnit = (function obb_rules$unit$__GT_CombatUnit(name,code,value,attack,attack_type,range,defense,bonus,type,category,displacement,movement_type,movement_cost){
return (new obb_rules.unit.CombatUnit(name,code,value,attack,attack_type,range,defense,bonus,type,category,displacement,movement_type,movement_cost,null,null,null));
});

/**
 * Represents a combat unit
 */
obb_rules.unit.map__GT_CombatUnit = (function obb_rules$unit$map__GT_CombatUnit(G__12350){
return (new obb_rules.unit.CombatUnit(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(G__12350),cljs.core.constant$keyword$code.cljs$core$IFn$_invoke$arity$1(G__12350),cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1(G__12350),cljs.core.constant$keyword$attack.cljs$core$IFn$_invoke$arity$1(G__12350),cljs.core.constant$keyword$attack_DASH_type.cljs$core$IFn$_invoke$arity$1(G__12350),cljs.core.constant$keyword$range.cljs$core$IFn$_invoke$arity$1(G__12350),cljs.core.constant$keyword$defense.cljs$core$IFn$_invoke$arity$1(G__12350),cljs.core.constant$keyword$bonus.cljs$core$IFn$_invoke$arity$1(G__12350),cljs.core.constant$keyword$type.cljs$core$IFn$_invoke$arity$1(G__12350),cljs.core.constant$keyword$category.cljs$core$IFn$_invoke$arity$1(G__12350),cljs.core.constant$keyword$displacement.cljs$core$IFn$_invoke$arity$1(G__12350),cljs.core.constant$keyword$movement_DASH_type.cljs$core$IFn$_invoke$arity$1(G__12350),cljs.core.constant$keyword$movement_DASH_cost.cljs$core$IFn$_invoke$arity$1(G__12350),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12350,cljs.core.constant$keyword$name,cljs.core.array_seq([cljs.core.constant$keyword$code,cljs.core.constant$keyword$value,cljs.core.constant$keyword$attack,cljs.core.constant$keyword$attack_DASH_type,cljs.core.constant$keyword$range,cljs.core.constant$keyword$defense,cljs.core.constant$keyword$bonus,cljs.core.constant$keyword$type,cljs.core.constant$keyword$category,cljs.core.constant$keyword$displacement,cljs.core.constant$keyword$movement_DASH_type,cljs.core.constant$keyword$movement_DASH_cost], 0)),null));
});

/**
 * Gets all the available units
 */
obb_rules.unit.gather_units = (function obb_rules$unit$gather_units(){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__12382_SHARP_){
return obb_rules.unit.map__GT_CombatUnit(p1__12382_SHARP_);
}),new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.units.rain.metadata,obb_rules.units.nova.metadata,obb_rules.units.pretorian.metadata,obb_rules.units.raptor.metadata,obb_rules.units.toxic.metadata,obb_rules.units.worm.metadata,obb_rules.units.vector.metadata,obb_rules.units.anubis.metadata,obb_rules.units.boozer.metadata,obb_rules.units.eagle.metadata,obb_rules.units.heavy_seeker.metadata,obb_rules.units.doomer.metadata,obb_rules.units.fenix.metadata,obb_rules.units.driller.metadata,obb_rules.units.krill.metadata,obb_rules.units.kahuna.metadata,obb_rules.units.panther.metadata,obb_rules.units.scarab.metadata,obb_rules.units.kamikaze.metadata,obb_rules.units.crusader.metadata], null));
});
obb_rules.unit.get_units = cljs.core.memoize(obb_rules.unit.gather_units);
obb_rules.unit.build_units = (function obb_rules$unit$build_units(units,selector){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__12383_SHARP_,p2__12384_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__12383_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12386 = p2__12384_SHARP_;
return (selector.cljs$core$IFn$_invoke$arity$1 ? selector.cljs$core$IFn$_invoke$arity$1(G__12386) : selector.call(null,G__12386));
})(),p2__12384_SHARP_], null));
}),cljs.core.PersistentArrayMap.EMPTY,units);
});
obb_rules.unit.units_by_name = (new cljs.core.Delay((function (){
return obb_rules.unit.build_units((function (){return (obb_rules.unit.get_units.cljs$core$IFn$_invoke$arity$0 ? obb_rules.unit.get_units.cljs$core$IFn$_invoke$arity$0() : obb_rules.unit.get_units.call(null));
})(),cljs.core.constant$keyword$name);
}),null));
obb_rules.unit.units_by_code = (new cljs.core.Delay((function (){
return obb_rules.unit.build_units((function (){return (obb_rules.unit.get_units.cljs$core$IFn$_invoke$arity$0 ? obb_rules.unit.get_units.cljs$core$IFn$_invoke$arity$0() : obb_rules.unit.get_units.call(null));
})(),cljs.core.constant$keyword$code);
}),null));
/**
 * Gets a unit info given it's code
 */
obb_rules.unit.get_unit_by_code = (function obb_rules$unit$get_unit_by_code(code){
return (function (){var G__12388 = obb_rules.unit.units_by_code;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12388) : cljs.core.deref.call(null,G__12388));
})().call(null,code);
});
/**
 * Gets a unit info given it's name
 */
obb_rules.unit.get_unit_by_name = (function obb_rules$unit$get_unit_by_name(name){
return (function (){var G__12390 = obb_rules.unit.units_by_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12390) : cljs.core.deref.call(null,G__12390));
})().call(null,name);
});
/**
 * Gets a unit
 */
obb_rules.unit.fetch = (function obb_rules$unit$fetch(raw){
var identifier = cljs.core.name(raw);
var or__6800__auto__ = obb_rules.unit.get_unit_by_name(identifier);
if(cljs.core.truth_(or__6800__auto__)){
return or__6800__auto__;
} else {
return obb_rules.unit.get_unit_by_code(identifier);
}
});
/**
 * Gets a unit's name
 */
obb_rules.unit.unit_name = (function obb_rules$unit$unit_name(unit){
return cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's code
 */
obb_rules.unit.unit_code = (function obb_rules$unit$unit_code(unit){
return cljs.core.constant$keyword$code.cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's attack
 */
obb_rules.unit.unit_attack = (function obb_rules$unit$unit_attack(unit){
return cljs.core.constant$keyword$attack.cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's bonus
 */
obb_rules.unit.unit_bonus = (function obb_rules$unit$unit_bonus(unit){
return cljs.core.constant$keyword$bonus.cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's range
 */
obb_rules.unit.unit_range = (function obb_rules$unit$unit_range(unit){
return cljs.core.constant$keyword$range.cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's defense
 */
obb_rules.unit.unit_defense = (function obb_rules$unit$unit_defense(unit){
return cljs.core.constant$keyword$defense.cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's movement cost
 */
obb_rules.unit.unit_movement_cost = (function obb_rules$unit$unit_movement_cost(unit){
return cljs.core.constant$keyword$movement_DASH_cost.cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's movement type
 */
obb_rules.unit.unit_movement_type = (function obb_rules$unit$unit_movement_type(unit){
return cljs.core.constant$keyword$movement_DASH_type.cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's category
 */
obb_rules.unit.unit_category = (function obb_rules$unit$unit_category(unit){
return cljs.core.constant$keyword$category.cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's displacement
 */
obb_rules.unit.unit_displacement = (function obb_rules$unit$unit_displacement(unit){
return cljs.core.constant$keyword$displacement.cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's type
 */
obb_rules.unit.unit_type = (function obb_rules$unit$unit_type(unit){
return cljs.core.constant$keyword$type.cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's hardcore value
 */
obb_rules.unit.unit_value = (function obb_rules$unit$unit_value(unit){
var or__6800__auto__ = cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1(unit);
if(cljs.core.truth_(or__6800__auto__)){
return or__6800__auto__;
} else {
return (0);
}
});
/**
 * Gets the unit's attack type
 */
obb_rules.unit.attack_type = (function obb_rules$unit$attack_type(unit){
var or__6800__auto__ = cljs.core.constant$keyword$attack_DASH_type.cljs$core$IFn$_invoke$arity$1(unit);
if(cljs.core.truth_(or__6800__auto__)){
return or__6800__auto__;
} else {
return cljs.core.constant$keyword$direct;
}
});
/**
 * Gets the hooks for an event
 */
obb_rules.unit.event_hooks = (function obb_rules$unit$event_hooks(unit,event){
var G__12392 = unit;
return (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(G__12392) : event.call(null,G__12392));
});
/**
 * True if the unit has catapult
 */
obb_rules.unit.catapult_QMARK_ = (function obb_rules$unit$catapult_QMARK_(unit){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$catapult,obb_rules.unit.attack_type(unit));
});
/**
 * Gets all the units for a given category
 */
obb_rules.unit.units_by_category = (function obb_rules$unit$units_by_category(category){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (u){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(obb_rules.unit.unit_category(u),category);
}),(function (){return (obb_rules.unit.get_units.cljs$core$IFn$_invoke$arity$0 ? obb_rules.unit.get_units.cljs$core$IFn$_invoke$arity$0() : obb_rules.unit.get_units.call(null));
})());
});
