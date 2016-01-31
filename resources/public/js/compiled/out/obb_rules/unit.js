// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
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
obb_rules.unit.CombatUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6756__auto__,k__6757__auto__){
var self__ = this;
var this__6756__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6756__auto____$1,k__6757__auto__,null);
});

obb_rules.unit.CombatUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6758__auto__,k14483,else__6759__auto__){
var self__ = this;
var this__6758__auto____$1 = this;
var G__14485 = (((k14483 instanceof cljs.core.Keyword))?k14483.fqn:null);
switch (G__14485) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14483,else__6759__auto__);

}
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6770__auto__,writer__6771__auto__,opts__6772__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
var pr_pair__6773__auto__ = ((function (this__6770__auto____$1){
return (function (keyval__6774__auto__){
return cljs.core.pr_sequential_writer(writer__6771__auto__,cljs.core.pr_writer,""," ","",opts__6772__auto__,keyval__6774__auto__);
});})(this__6770__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6771__auto__,pr_pair__6773__auto__,"#obb-rules.unit.CombatUnit{",", ","}",opts__6772__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$code,self__.code],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attack,self__.attack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attack_DASH_type,self__.attack_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$range,self__.range],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$defense,self__.defense],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$bonus,self__.bonus],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$category,self__.category],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$displacement,self__.displacement],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$movement_DASH_type,self__.movement_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$movement_DASH_cost,self__.movement_cost],null))], null),self__.__extmap));
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IIterable$ = true;

obb_rules.unit.CombatUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14482){
var self__ = this;
var G__14482__$1 = this;
return (new cljs.core.RecordIter((0),G__14482__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$code,cljs.core.cst$kw$value,cljs.core.cst$kw$attack,cljs.core.cst$kw$attack_DASH_type,cljs.core.cst$kw$range,cljs.core.cst$kw$defense,cljs.core.cst$kw$bonus,cljs.core.cst$kw$type,cljs.core.cst$kw$category,cljs.core.cst$kw$displacement,cljs.core.cst$kw$movement_DASH_type,cljs.core.cst$kw$movement_DASH_cost], null),cljs.core._iterator(self__.__extmap)));
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6754__auto__){
var self__ = this;
var this__6754__auto____$1 = this;
return self__.__meta;
});

obb_rules.unit.CombatUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6750__auto__){
var self__ = this;
var this__6750__auto____$1 = this;
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,self__.__hash));
});

obb_rules.unit.CombatUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6760__auto__){
var self__ = this;
var this__6760__auto____$1 = this;
return (13 + cljs.core.count(self__.__extmap));
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6751__auto__){
var self__ = this;
var this__6751__auto____$1 = this;
var h__6577__auto__ = self__.__hash;
if(!((h__6577__auto__ == null))){
return h__6577__auto__;
} else {
var h__6577__auto____$1 = cljs.core.hash_imap(this__6751__auto____$1);
self__.__hash = h__6577__auto____$1;

return h__6577__auto____$1;
}
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6752__auto__,other__6753__auto__){
var self__ = this;
var this__6752__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6130__auto__ = other__6753__auto__;
if(cljs.core.truth_(and__6130__auto__)){
var and__6130__auto____$1 = (this__6752__auto____$1.constructor === other__6753__auto__.constructor);
if(and__6130__auto____$1){
return cljs.core.equiv_map(this__6752__auto____$1,other__6753__auto__);
} else {
return and__6130__auto____$1;
}
} else {
return and__6130__auto__;
}
})())){
return true;
} else {
return false;
}
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6765__auto__,k__6766__auto__){
var self__ = this;
var this__6765__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [cljs.core.cst$kw$category,null,cljs.core.cst$kw$displacement,null,cljs.core.cst$kw$attack_DASH_type,null,cljs.core.cst$kw$name,null,cljs.core.cst$kw$value,null,cljs.core.cst$kw$movement_DASH_cost,null,cljs.core.cst$kw$type,null,cljs.core.cst$kw$defense,null,cljs.core.cst$kw$bonus,null,cljs.core.cst$kw$code,null,cljs.core.cst$kw$movement_DASH_type,null,cljs.core.cst$kw$attack,null,cljs.core.cst$kw$range,null], null), null),k__6766__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6765__auto____$1),self__.__meta),k__6766__auto__);
} else {
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6766__auto__)),null));
}
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6763__auto__,k__6764__auto__,G__14482){
var self__ = this;
var this__6763__auto____$1 = this;
var pred__14486 = cljs.core.keyword_identical_QMARK_;
var expr__14487 = k__6764__auto__;
if(cljs.core.truth_((pred__14486.cljs$core$IFn$_invoke$arity$2 ? pred__14486.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,expr__14487) : pred__14486.call(null,cljs.core.cst$kw$name,expr__14487)))){
return (new obb_rules.unit.CombatUnit(G__14482,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14486.cljs$core$IFn$_invoke$arity$2 ? pred__14486.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$code,expr__14487) : pred__14486.call(null,cljs.core.cst$kw$code,expr__14487)))){
return (new obb_rules.unit.CombatUnit(self__.name,G__14482,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14486.cljs$core$IFn$_invoke$arity$2 ? pred__14486.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value,expr__14487) : pred__14486.call(null,cljs.core.cst$kw$value,expr__14487)))){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,G__14482,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14486.cljs$core$IFn$_invoke$arity$2 ? pred__14486.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$attack,expr__14487) : pred__14486.call(null,cljs.core.cst$kw$attack,expr__14487)))){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,G__14482,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14486.cljs$core$IFn$_invoke$arity$2 ? pred__14486.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$attack_DASH_type,expr__14487) : pred__14486.call(null,cljs.core.cst$kw$attack_DASH_type,expr__14487)))){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,G__14482,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14486.cljs$core$IFn$_invoke$arity$2 ? pred__14486.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$range,expr__14487) : pred__14486.call(null,cljs.core.cst$kw$range,expr__14487)))){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,G__14482,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14486.cljs$core$IFn$_invoke$arity$2 ? pred__14486.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$defense,expr__14487) : pred__14486.call(null,cljs.core.cst$kw$defense,expr__14487)))){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,G__14482,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14486.cljs$core$IFn$_invoke$arity$2 ? pred__14486.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$bonus,expr__14487) : pred__14486.call(null,cljs.core.cst$kw$bonus,expr__14487)))){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,G__14482,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14486.cljs$core$IFn$_invoke$arity$2 ? pred__14486.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type,expr__14487) : pred__14486.call(null,cljs.core.cst$kw$type,expr__14487)))){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,G__14482,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14486.cljs$core$IFn$_invoke$arity$2 ? pred__14486.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$category,expr__14487) : pred__14486.call(null,cljs.core.cst$kw$category,expr__14487)))){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,G__14482,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14486.cljs$core$IFn$_invoke$arity$2 ? pred__14486.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$displacement,expr__14487) : pred__14486.call(null,cljs.core.cst$kw$displacement,expr__14487)))){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,G__14482,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14486.cljs$core$IFn$_invoke$arity$2 ? pred__14486.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$movement_DASH_type,expr__14487) : pred__14486.call(null,cljs.core.cst$kw$movement_DASH_type,expr__14487)))){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,G__14482,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14486.cljs$core$IFn$_invoke$arity$2 ? pred__14486.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$movement_DASH_cost,expr__14487) : pred__14486.call(null,cljs.core.cst$kw$movement_DASH_cost,expr__14487)))){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,G__14482,self__.__meta,self__.__extmap,null));
} else {
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6764__auto__,G__14482),null));
}
}
}
}
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

obb_rules.unit.CombatUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$code,self__.code],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attack,self__.attack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attack_DASH_type,self__.attack_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$range,self__.range],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$defense,self__.defense],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$bonus,self__.bonus],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$category,self__.category],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$displacement,self__.displacement],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$movement_DASH_type,self__.movement_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$movement_DASH_cost,self__.movement_cost],null))], null),self__.__extmap));
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6755__auto__,G__14482){
var self__ = this;
var this__6755__auto____$1 = this;
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,G__14482,self__.__extmap,self__.__hash));
});

obb_rules.unit.CombatUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6761__auto__,entry__6762__auto__){
var self__ = this;
var this__6761__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6762__auto__)){
return cljs.core._assoc(this__6761__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6762__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6762__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6761__auto____$1,entry__6762__auto__);
}
});

obb_rules.unit.CombatUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$code,cljs.core.cst$sym$value,cljs.core.cst$sym$attack,cljs.core.cst$sym$attack_DASH_type,cljs.core.cst$sym$range,cljs.core.cst$sym$defense,cljs.core.cst$sym$bonus,cljs.core.cst$sym$type,cljs.core.cst$sym$category,cljs.core.cst$sym$displacement,cljs.core.cst$sym$movement_DASH_type,cljs.core.cst$sym$movement_DASH_cost], null);
});

obb_rules.unit.CombatUnit.cljs$lang$type = true;

obb_rules.unit.CombatUnit.cljs$lang$ctorPrSeq = (function (this__6790__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"obb-rules.unit/CombatUnit");
});

obb_rules.unit.CombatUnit.cljs$lang$ctorPrWriter = (function (this__6790__auto__,writer__6791__auto__){
return cljs.core._write(writer__6791__auto__,"obb-rules.unit/CombatUnit");
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
obb_rules.unit.map__GT_CombatUnit = (function obb_rules$unit$map__GT_CombatUnit(G__14484){
return (new obb_rules.unit.CombatUnit(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__14484),cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(G__14484),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__14484),cljs.core.cst$kw$attack.cljs$core$IFn$_invoke$arity$1(G__14484),cljs.core.cst$kw$attack_DASH_type.cljs$core$IFn$_invoke$arity$1(G__14484),cljs.core.cst$kw$range.cljs$core$IFn$_invoke$arity$1(G__14484),cljs.core.cst$kw$defense.cljs$core$IFn$_invoke$arity$1(G__14484),cljs.core.cst$kw$bonus.cljs$core$IFn$_invoke$arity$1(G__14484),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__14484),cljs.core.cst$kw$category.cljs$core$IFn$_invoke$arity$1(G__14484),cljs.core.cst$kw$displacement.cljs$core$IFn$_invoke$arity$1(G__14484),cljs.core.cst$kw$movement_DASH_type.cljs$core$IFn$_invoke$arity$1(G__14484),cljs.core.cst$kw$movement_DASH_cost.cljs$core$IFn$_invoke$arity$1(G__14484),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14484,cljs.core.cst$kw$name,cljs.core.array_seq([cljs.core.cst$kw$code,cljs.core.cst$kw$value,cljs.core.cst$kw$attack,cljs.core.cst$kw$attack_DASH_type,cljs.core.cst$kw$range,cljs.core.cst$kw$defense,cljs.core.cst$kw$bonus,cljs.core.cst$kw$type,cljs.core.cst$kw$category,cljs.core.cst$kw$displacement,cljs.core.cst$kw$movement_DASH_type,cljs.core.cst$kw$movement_DASH_cost], 0)),null));
});

/**
 * Gets all the available units
 */
obb_rules.unit.gather_units = (function obb_rules$unit$gather_units(){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14490_SHARP_){
return obb_rules.unit.map__GT_CombatUnit(p1__14490_SHARP_);
}),new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.units.rain.metadata,obb_rules.units.nova.metadata,obb_rules.units.pretorian.metadata,obb_rules.units.raptor.metadata,obb_rules.units.toxic.metadata,obb_rules.units.worm.metadata,obb_rules.units.vector.metadata,obb_rules.units.anubis.metadata,obb_rules.units.boozer.metadata,obb_rules.units.eagle.metadata,obb_rules.units.heavy_seeker.metadata,obb_rules.units.doomer.metadata,obb_rules.units.fenix.metadata,obb_rules.units.driller.metadata,obb_rules.units.krill.metadata,obb_rules.units.kahuna.metadata,obb_rules.units.panther.metadata,obb_rules.units.scarab.metadata,obb_rules.units.kamikaze.metadata,obb_rules.units.crusader.metadata], null));
});
obb_rules.unit.get_units = cljs.core.memoize(obb_rules.unit.gather_units);
obb_rules.unit.build_units = (function obb_rules$unit$build_units(units,selector){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__14491_SHARP_,p2__14492_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__14491_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(selector.cljs$core$IFn$_invoke$arity$1 ? selector.cljs$core$IFn$_invoke$arity$1(p2__14492_SHARP_) : selector.call(null,p2__14492_SHARP_)),p2__14492_SHARP_], null));
}),cljs.core.PersistentArrayMap.EMPTY,units);
});
obb_rules.unit.units_by_name = (new cljs.core.Delay((function (){
return obb_rules.unit.build_units((obb_rules.unit.get_units.cljs$core$IFn$_invoke$arity$0 ? obb_rules.unit.get_units.cljs$core$IFn$_invoke$arity$0() : obb_rules.unit.get_units.call(null)),cljs.core.cst$kw$name);
}),null));
obb_rules.unit.units_by_code = (new cljs.core.Delay((function (){
return obb_rules.unit.build_units((obb_rules.unit.get_units.cljs$core$IFn$_invoke$arity$0 ? obb_rules.unit.get_units.cljs$core$IFn$_invoke$arity$0() : obb_rules.unit.get_units.call(null)),cljs.core.cst$kw$code);
}),null));
/**
 * Gets a unit info given it's code
 */
obb_rules.unit.get_unit_by_code = (function obb_rules$unit$get_unit_by_code(code){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(obb_rules.unit.units_by_code) : cljs.core.deref.call(null,obb_rules.unit.units_by_code)).call(null,code);
});
/**
 * Gets a unit info given it's name
 */
obb_rules.unit.get_unit_by_name = (function obb_rules$unit$get_unit_by_name(name){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(obb_rules.unit.units_by_name) : cljs.core.deref.call(null,obb_rules.unit.units_by_name)).call(null,name);
});
/**
 * Gets a unit
 */
obb_rules.unit.fetch = (function obb_rules$unit$fetch(raw){
var identifier = cljs.core.name(raw);
var or__6142__auto__ = obb_rules.unit.get_unit_by_name(identifier);
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return obb_rules.unit.get_unit_by_code(identifier);
}
});
/**
 * Gets a unit's name
 */
obb_rules.unit.unit_name = (function obb_rules$unit$unit_name(unit){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's code
 */
obb_rules.unit.unit_code = (function obb_rules$unit$unit_code(unit){
return cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's attack
 */
obb_rules.unit.unit_attack = (function obb_rules$unit$unit_attack(unit){
return cljs.core.cst$kw$attack.cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's bonus
 */
obb_rules.unit.unit_bonus = (function obb_rules$unit$unit_bonus(unit){
return cljs.core.cst$kw$bonus.cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's range
 */
obb_rules.unit.unit_range = (function obb_rules$unit$unit_range(unit){
return cljs.core.cst$kw$range.cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's defense
 */
obb_rules.unit.unit_defense = (function obb_rules$unit$unit_defense(unit){
return cljs.core.cst$kw$defense.cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's movement cost
 */
obb_rules.unit.unit_movement_cost = (function obb_rules$unit$unit_movement_cost(unit){
return cljs.core.cst$kw$movement_DASH_cost.cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's movement type
 */
obb_rules.unit.unit_movement_type = (function obb_rules$unit$unit_movement_type(unit){
return cljs.core.cst$kw$movement_DASH_type.cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's category
 */
obb_rules.unit.unit_category = (function obb_rules$unit$unit_category(unit){
return cljs.core.cst$kw$category.cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's displacement
 */
obb_rules.unit.unit_displacement = (function obb_rules$unit$unit_displacement(unit){
return cljs.core.cst$kw$displacement.cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's type
 */
obb_rules.unit.unit_type = (function obb_rules$unit$unit_type(unit){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(unit);
});
/**
 * Gets a unit's hardcore value
 */
obb_rules.unit.unit_value = (function obb_rules$unit$unit_value(unit){
var or__6142__auto__ = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(unit);
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return (0);
}
});
/**
 * Gets the unit's attack type
 */
obb_rules.unit.attack_type = (function obb_rules$unit$attack_type(unit){
var or__6142__auto__ = cljs.core.cst$kw$attack_DASH_type.cljs$core$IFn$_invoke$arity$1(unit);
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return cljs.core.cst$kw$direct;
}
});
/**
 * Gets the hooks for an event
 */
obb_rules.unit.event_hooks = (function obb_rules$unit$event_hooks(unit,event){
return (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(unit) : event.call(null,unit));
});
/**
 * True if the unit has catapult
 */
obb_rules.unit.catapult_QMARK_ = (function obb_rules$unit$catapult_QMARK_(unit){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$catapult,obb_rules.unit.attack_type(unit));
});
/**
 * Gets all the units for a given category
 */
obb_rules.unit.units_by_category = (function obb_rules$unit$units_by_category(category){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (u){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(obb_rules.unit.unit_category(u),category);
}),(obb_rules.unit.get_units.cljs$core$IFn$_invoke$arity$0 ? obb_rules.unit.get_units.cljs$core$IFn$_invoke$arity$0() : obb_rules.unit.get_units.call(null)));
});
