// Compiled by ClojureScript 1.7.228 {}
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
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
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
obb_rules.unit.CombatUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18984__auto__,k__18985__auto__){
var self__ = this;
var this__18984__auto____$1 = this;
return cljs.core._lookup.call(null,this__18984__auto____$1,k__18985__auto__,null);
});

obb_rules.unit.CombatUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18986__auto__,k40998,else__18987__auto__){
var self__ = this;
var this__18986__auto____$1 = this;
var G__41000 = (((k40998 instanceof cljs.core.Keyword))?k40998.fqn:null);
switch (G__41000) {
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
return cljs.core.get.call(null,self__.__extmap,k40998,else__18987__auto__);

}
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18998__auto__,writer__18999__auto__,opts__19000__auto__){
var self__ = this;
var this__18998__auto____$1 = this;
var pr_pair__19001__auto__ = ((function (this__18998__auto____$1){
return (function (keyval__19002__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18999__auto__,cljs.core.pr_writer,""," ","",opts__19000__auto__,keyval__19002__auto__);
});})(this__18998__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18999__auto__,pr_pair__19001__auto__,"#obb-rules.unit.CombatUnit{",", ","}",opts__19000__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attack","attack",1957061788),self__.attack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attack-type","attack-type",-639911421),self__.attack_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"range","range",1639692286),self__.range],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"defense","defense",1755014992),self__.defense],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bonus","bonus",-1684391149),self__.bonus],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"category","category",-593092832),self__.category],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"displacement","displacement",-1309600669),self__.displacement],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"movement-type","movement-type",-1340819145),self__.movement_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"movement-cost","movement-cost",-716301045),self__.movement_cost],null))], null),self__.__extmap));
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IIterable$ = true;

obb_rules.unit.CombatUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40997){
var self__ = this;
var G__40997__$1 = this;
return (new cljs.core.RecordIter((0),G__40997__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"attack","attack",1957061788),new cljs.core.Keyword(null,"attack-type","attack-type",-639911421),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"defense","defense",1755014992),new cljs.core.Keyword(null,"bonus","bonus",-1684391149),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"displacement","displacement",-1309600669),new cljs.core.Keyword(null,"movement-type","movement-type",-1340819145),new cljs.core.Keyword(null,"movement-cost","movement-cost",-716301045)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18982__auto__){
var self__ = this;
var this__18982__auto____$1 = this;
return self__.__meta;
});

obb_rules.unit.CombatUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18978__auto__){
var self__ = this;
var this__18978__auto____$1 = this;
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,self__.__hash));
});

obb_rules.unit.CombatUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18988__auto__){
var self__ = this;
var this__18988__auto____$1 = this;
return (13 + cljs.core.count.call(null,self__.__extmap));
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18979__auto__){
var self__ = this;
var this__18979__auto____$1 = this;
var h__18805__auto__ = self__.__hash;
if(!((h__18805__auto__ == null))){
return h__18805__auto__;
} else {
var h__18805__auto____$1 = cljs.core.hash_imap.call(null,this__18979__auto____$1);
self__.__hash = h__18805__auto____$1;

return h__18805__auto____$1;
}
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18980__auto__,other__18981__auto__){
var self__ = this;
var this__18980__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18358__auto__ = other__18981__auto__;
if(cljs.core.truth_(and__18358__auto__)){
var and__18358__auto____$1 = (this__18980__auto____$1.constructor === other__18981__auto__.constructor);
if(and__18358__auto____$1){
return cljs.core.equiv_map.call(null,this__18980__auto____$1,other__18981__auto__);
} else {
return and__18358__auto____$1;
}
} else {
return and__18358__auto__;
}
})())){
return true;
} else {
return false;
}
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18993__auto__,k__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"category","category",-593092832),null,new cljs.core.Keyword(null,"displacement","displacement",-1309600669),null,new cljs.core.Keyword(null,"attack-type","attack-type",-639911421),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"movement-cost","movement-cost",-716301045),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"defense","defense",1755014992),null,new cljs.core.Keyword(null,"bonus","bonus",-1684391149),null,new cljs.core.Keyword(null,"code","code",1586293142),null,new cljs.core.Keyword(null,"movement-type","movement-type",-1340819145),null,new cljs.core.Keyword(null,"attack","attack",1957061788),null,new cljs.core.Keyword(null,"range","range",1639692286),null], null), null),k__18994__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18993__auto____$1),self__.__meta),k__18994__auto__);
} else {
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18994__auto__)),null));
}
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18991__auto__,k__18992__auto__,G__40997){
var self__ = this;
var this__18991__auto____$1 = this;
var pred__41001 = cljs.core.keyword_identical_QMARK_;
var expr__41002 = k__18992__auto__;
if(cljs.core.truth_(pred__41001.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__41002))){
return (new obb_rules.unit.CombatUnit(G__40997,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41001.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__41002))){
return (new obb_rules.unit.CombatUnit(self__.name,G__40997,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41001.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__41002))){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,G__40997,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41001.call(null,new cljs.core.Keyword(null,"attack","attack",1957061788),expr__41002))){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,G__40997,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41001.call(null,new cljs.core.Keyword(null,"attack-type","attack-type",-639911421),expr__41002))){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,G__40997,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41001.call(null,new cljs.core.Keyword(null,"range","range",1639692286),expr__41002))){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,G__40997,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41001.call(null,new cljs.core.Keyword(null,"defense","defense",1755014992),expr__41002))){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,G__40997,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41001.call(null,new cljs.core.Keyword(null,"bonus","bonus",-1684391149),expr__41002))){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,G__40997,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41001.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__41002))){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,G__40997,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41001.call(null,new cljs.core.Keyword(null,"category","category",-593092832),expr__41002))){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,G__40997,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41001.call(null,new cljs.core.Keyword(null,"displacement","displacement",-1309600669),expr__41002))){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,G__40997,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41001.call(null,new cljs.core.Keyword(null,"movement-type","movement-type",-1340819145),expr__41002))){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,G__40997,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41001.call(null,new cljs.core.Keyword(null,"movement-cost","movement-cost",-716301045),expr__41002))){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,G__40997,self__.__meta,self__.__extmap,null));
} else {
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18992__auto__,G__40997),null));
}
}
}
}
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

obb_rules.unit.CombatUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18996__auto__){
var self__ = this;
var this__18996__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attack","attack",1957061788),self__.attack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attack-type","attack-type",-639911421),self__.attack_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"range","range",1639692286),self__.range],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"defense","defense",1755014992),self__.defense],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bonus","bonus",-1684391149),self__.bonus],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"category","category",-593092832),self__.category],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"displacement","displacement",-1309600669),self__.displacement],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"movement-type","movement-type",-1340819145),self__.movement_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"movement-cost","movement-cost",-716301045),self__.movement_cost],null))], null),self__.__extmap));
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18983__auto__,G__40997){
var self__ = this;
var this__18983__auto____$1 = this;
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,G__40997,self__.__extmap,self__.__hash));
});

obb_rules.unit.CombatUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18989__auto__,entry__18990__auto__){
var self__ = this;
var this__18989__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18990__auto__)){
return cljs.core._assoc.call(null,this__18989__auto____$1,cljs.core._nth.call(null,entry__18990__auto__,(0)),cljs.core._nth.call(null,entry__18990__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18989__auto____$1,entry__18990__auto__);
}
});

obb_rules.unit.CombatUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"code","code",-1068142627,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"attack","attack",-697373981,null),new cljs.core.Symbol(null,"attack-type","attack-type",1000620106,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"defense","defense",-899420777,null),new cljs.core.Symbol(null,"bonus","bonus",-43859622,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"category","category",1047438695,null),new cljs.core.Symbol(null,"displacement","displacement",330930858,null),new cljs.core.Symbol(null,"movement-type","movement-type",299712382,null),new cljs.core.Symbol(null,"movement-cost","movement-cost",924230482,null)], null);
});

obb_rules.unit.CombatUnit.cljs$lang$type = true;

obb_rules.unit.CombatUnit.cljs$lang$ctorPrSeq = (function (this__19018__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"obb-rules.unit/CombatUnit");
});

obb_rules.unit.CombatUnit.cljs$lang$ctorPrWriter = (function (this__19018__auto__,writer__19019__auto__){
return cljs.core._write.call(null,writer__19019__auto__,"obb-rules.unit/CombatUnit");
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
obb_rules.unit.map__GT_CombatUnit = (function obb_rules$unit$map__GT_CombatUnit(G__40999){
return (new obb_rules.unit.CombatUnit(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__40999),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__40999),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__40999),new cljs.core.Keyword(null,"attack","attack",1957061788).cljs$core$IFn$_invoke$arity$1(G__40999),new cljs.core.Keyword(null,"attack-type","attack-type",-639911421).cljs$core$IFn$_invoke$arity$1(G__40999),new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(G__40999),new cljs.core.Keyword(null,"defense","defense",1755014992).cljs$core$IFn$_invoke$arity$1(G__40999),new cljs.core.Keyword(null,"bonus","bonus",-1684391149).cljs$core$IFn$_invoke$arity$1(G__40999),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__40999),new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(G__40999),new cljs.core.Keyword(null,"displacement","displacement",-1309600669).cljs$core$IFn$_invoke$arity$1(G__40999),new cljs.core.Keyword(null,"movement-type","movement-type",-1340819145).cljs$core$IFn$_invoke$arity$1(G__40999),new cljs.core.Keyword(null,"movement-cost","movement-cost",-716301045).cljs$core$IFn$_invoke$arity$1(G__40999),null,cljs.core.dissoc.call(null,G__40999,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"attack","attack",1957061788),new cljs.core.Keyword(null,"attack-type","attack-type",-639911421),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"defense","defense",1755014992),new cljs.core.Keyword(null,"bonus","bonus",-1684391149),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"displacement","displacement",-1309600669),new cljs.core.Keyword(null,"movement-type","movement-type",-1340819145),new cljs.core.Keyword(null,"movement-cost","movement-cost",-716301045)),null));
});

/**
 * Gets all the available units
 */
obb_rules.unit.gather_units = (function obb_rules$unit$gather_units(){
return cljs.core.mapv.call(null,(function (p1__41005_SHARP_){
return obb_rules.unit.map__GT_CombatUnit.call(null,p1__41005_SHARP_);
}),new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.units.rain.metadata,obb_rules.units.nova.metadata,obb_rules.units.pretorian.metadata,obb_rules.units.raptor.metadata,obb_rules.units.toxic.metadata,obb_rules.units.worm.metadata,obb_rules.units.vector.metadata,obb_rules.units.anubis.metadata,obb_rules.units.boozer.metadata,obb_rules.units.eagle.metadata,obb_rules.units.heavy_seeker.metadata,obb_rules.units.doomer.metadata,obb_rules.units.fenix.metadata,obb_rules.units.driller.metadata,obb_rules.units.krill.metadata,obb_rules.units.kahuna.metadata,obb_rules.units.panther.metadata,obb_rules.units.scarab.metadata,obb_rules.units.kamikaze.metadata,obb_rules.units.crusader.metadata], null));
});
obb_rules.unit.get_units = cljs.core.memoize.call(null,obb_rules.unit.gather_units);
obb_rules.unit.build_units = (function obb_rules$unit$build_units(units,selector){
return cljs.core.reduce.call(null,(function (p1__41006_SHARP_,p2__41007_SHARP_){
return cljs.core.conj.call(null,p1__41006_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector.call(null,p2__41007_SHARP_),p2__41007_SHARP_], null));
}),cljs.core.PersistentArrayMap.EMPTY,units);
});
obb_rules.unit.units_by_name = (new cljs.core.Delay((function (){
return obb_rules.unit.build_units.call(null,obb_rules.unit.get_units.call(null),new cljs.core.Keyword(null,"name","name",1843675177));
}),null));
obb_rules.unit.units_by_code = (new cljs.core.Delay((function (){
return obb_rules.unit.build_units.call(null,obb_rules.unit.get_units.call(null),new cljs.core.Keyword(null,"code","code",1586293142));
}),null));
/**
 * Gets a unit info given it's code
 */
obb_rules.unit.get_unit_by_code = (function obb_rules$unit$get_unit_by_code(code){
return cljs.core.deref.call(null,obb_rules.unit.units_by_code).call(null,code);
});
/**
 * Gets a unit info given it's name
 */
obb_rules.unit.get_unit_by_name = (function obb_rules$unit$get_unit_by_name(name){
return cljs.core.deref.call(null,obb_rules.unit.units_by_name).call(null,name);
});
/**
 * Gets a unit
 */
obb_rules.unit.fetch = (function obb_rules$unit$fetch(raw){
var identifier = cljs.core.name.call(null,raw);
var or__18370__auto__ = obb_rules.unit.get_unit_by_name.call(null,identifier);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return obb_rules.unit.get_unit_by_code.call(null,identifier);
}
});
/**
 * Gets a unit's name
 */
obb_rules.unit.unit_name = (function obb_rules$unit$unit_name(unit){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's code
 */
obb_rules.unit.unit_code = (function obb_rules$unit$unit_code(unit){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's attack
 */
obb_rules.unit.unit_attack = (function obb_rules$unit$unit_attack(unit){
return new cljs.core.Keyword(null,"attack","attack",1957061788).cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's bonus
 */
obb_rules.unit.unit_bonus = (function obb_rules$unit$unit_bonus(unit){
return new cljs.core.Keyword(null,"bonus","bonus",-1684391149).cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's range
 */
obb_rules.unit.unit_range = (function obb_rules$unit$unit_range(unit){
return new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's defense
 */
obb_rules.unit.unit_defense = (function obb_rules$unit$unit_defense(unit){
return new cljs.core.Keyword(null,"defense","defense",1755014992).cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's movement cost
 */
obb_rules.unit.unit_movement_cost = (function obb_rules$unit$unit_movement_cost(unit){
return new cljs.core.Keyword(null,"movement-cost","movement-cost",-716301045).cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's movement type
 */
obb_rules.unit.unit_movement_type = (function obb_rules$unit$unit_movement_type(unit){
return new cljs.core.Keyword(null,"movement-type","movement-type",-1340819145).cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's category
 */
obb_rules.unit.unit_category = (function obb_rules$unit$unit_category(unit){
return new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's displacement
 */
obb_rules.unit.unit_displacement = (function obb_rules$unit$unit_displacement(unit){
return new cljs.core.Keyword(null,"displacement","displacement",-1309600669).cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's type
 */
obb_rules.unit.unit_type = (function obb_rules$unit$unit_type(unit){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's hardcore value
 */
obb_rules.unit.unit_value = (function obb_rules$unit$unit_value(unit){
var or__18370__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(unit);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return (0);
}
});
/**
 * Gets the unit's attack type
 */
obb_rules.unit.attack_type = (function obb_rules$unit$attack_type(unit){
var or__18370__auto__ = new cljs.core.Keyword(null,"attack-type","attack-type",-639911421).cljs$core$IFn$_invoke$arity$1(unit);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return new cljs.core.Keyword(null,"direct","direct",-1775717856);
}
});
/**
 * Gets the hooks for an event
 */
obb_rules.unit.event_hooks = (function obb_rules$unit$event_hooks(unit,event){
return event.call(null,unit);
});
/**
 * True if the unit has catapult
 */
obb_rules.unit.catapult_QMARK_ = (function obb_rules$unit$catapult_QMARK_(unit){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"catapult","catapult",-369050119),obb_rules.unit.attack_type.call(null,unit));
});
/**
 * Gets all the units for a given category
 */
obb_rules.unit.units_by_category = (function obb_rules$unit$units_by_category(category){
return cljs.core.filter.call(null,(function (u){
return cljs.core._EQ_.call(null,obb_rules.unit.unit_category.call(null,u),category);
}),obb_rules.unit.get_units.call(null));
});

//# sourceMappingURL=unit.js.map?rel=1458852288994