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
obb_rules.unit.CombatUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7531__auto__,k__7532__auto__){
var self__ = this;
var this__7531__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7531__auto____$1,k__7532__auto__,null);
});

obb_rules.unit.CombatUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7533__auto__,k12485,else__7534__auto__){
var self__ = this;
var this__7533__auto____$1 = this;
var G__12487 = (((k12485 instanceof cljs.core.Keyword))?k12485.fqn:null);
switch (G__12487) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12485,else__7534__auto__);

}
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7545__auto__,writer__7546__auto__,opts__7547__auto__){
var self__ = this;
var this__7545__auto____$1 = this;
var pr_pair__7548__auto__ = ((function (this__7545__auto____$1){
return (function (keyval__7549__auto__){
return cljs.core.pr_sequential_writer(writer__7546__auto__,cljs.core.pr_writer,""," ","",opts__7547__auto__,keyval__7549__auto__);
});})(this__7545__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7546__auto__,pr_pair__7548__auto__,"#obb-rules.unit.CombatUnit{",", ","}",opts__7547__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$code,self__.code],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$value,self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$attack,self__.attack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$attack_DASH_type,self__.attack_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$range,self__.range],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$defense,self__.defense],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$bonus,self__.bonus],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$category,self__.category],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$displacement,self__.displacement],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$movement_DASH_type,self__.movement_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$movement_DASH_cost,self__.movement_cost],null))], null),self__.__extmap));
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7529__auto__){
var self__ = this;
var this__7529__auto____$1 = this;
return self__.__meta;
});

obb_rules.unit.CombatUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7525__auto__){
var self__ = this;
var this__7525__auto____$1 = this;
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,self__.__hash));
});

obb_rules.unit.CombatUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7535__auto__){
var self__ = this;
var this__7535__auto____$1 = this;
return (13 + cljs.core.count(self__.__extmap));
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7526__auto__){
var self__ = this;
var this__7526__auto____$1 = this;
var h__7352__auto__ = self__.__hash;
if(!((h__7352__auto__ == null))){
return h__7352__auto__;
} else {
var h__7352__auto____$1 = cljs.core.hash_imap(this__7526__auto____$1);
self__.__hash = h__7352__auto____$1;

return h__7352__auto____$1;
}
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7527__auto__,other__7528__auto__){
var self__ = this;
var this__7527__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6924__auto__ = other__7528__auto__;
if(cljs.core.truth_(and__6924__auto__)){
var and__6924__auto____$1 = (this__7527__auto____$1.constructor === other__7528__auto__.constructor);
if(and__6924__auto____$1){
return cljs.core.equiv_map(this__7527__auto____$1,other__7528__auto__);
} else {
return and__6924__auto____$1;
}
} else {
return and__6924__auto__;
}
})())){
return true;
} else {
return false;
}
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7540__auto__,k__7541__auto__){
var self__ = this;
var this__7540__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [cljs.core.constant$keyword$category,null,cljs.core.constant$keyword$displacement,null,cljs.core.constant$keyword$attack_DASH_type,null,cljs.core.constant$keyword$name,null,cljs.core.constant$keyword$value,null,cljs.core.constant$keyword$movement_DASH_cost,null,cljs.core.constant$keyword$type,null,cljs.core.constant$keyword$defense,null,cljs.core.constant$keyword$bonus,null,cljs.core.constant$keyword$code,null,cljs.core.constant$keyword$movement_DASH_type,null,cljs.core.constant$keyword$attack,null,cljs.core.constant$keyword$range,null], null), null),k__7541__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7540__auto____$1),self__.__meta),k__7541__auto__);
} else {
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7541__auto__)),null));
}
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7538__auto__,k__7539__auto__,G__12484){
var self__ = this;
var this__7538__auto____$1 = this;
var pred__12488 = cljs.core.keyword_identical_QMARK_;
var expr__12489 = k__7539__auto__;
if(cljs.core.truth_((function (){var G__12491 = cljs.core.constant$keyword$name;
var G__12492 = expr__12489;
return (pred__12488.cljs$core$IFn$_invoke$arity$2 ? pred__12488.cljs$core$IFn$_invoke$arity$2(G__12491,G__12492) : pred__12488.call(null,G__12491,G__12492));
})())){
return (new obb_rules.unit.CombatUnit(G__12484,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12493 = cljs.core.constant$keyword$code;
var G__12494 = expr__12489;
return (pred__12488.cljs$core$IFn$_invoke$arity$2 ? pred__12488.cljs$core$IFn$_invoke$arity$2(G__12493,G__12494) : pred__12488.call(null,G__12493,G__12494));
})())){
return (new obb_rules.unit.CombatUnit(self__.name,G__12484,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12495 = cljs.core.constant$keyword$value;
var G__12496 = expr__12489;
return (pred__12488.cljs$core$IFn$_invoke$arity$2 ? pred__12488.cljs$core$IFn$_invoke$arity$2(G__12495,G__12496) : pred__12488.call(null,G__12495,G__12496));
})())){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,G__12484,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12497 = cljs.core.constant$keyword$attack;
var G__12498 = expr__12489;
return (pred__12488.cljs$core$IFn$_invoke$arity$2 ? pred__12488.cljs$core$IFn$_invoke$arity$2(G__12497,G__12498) : pred__12488.call(null,G__12497,G__12498));
})())){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,G__12484,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12499 = cljs.core.constant$keyword$attack_DASH_type;
var G__12500 = expr__12489;
return (pred__12488.cljs$core$IFn$_invoke$arity$2 ? pred__12488.cljs$core$IFn$_invoke$arity$2(G__12499,G__12500) : pred__12488.call(null,G__12499,G__12500));
})())){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,G__12484,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12501 = cljs.core.constant$keyword$range;
var G__12502 = expr__12489;
return (pred__12488.cljs$core$IFn$_invoke$arity$2 ? pred__12488.cljs$core$IFn$_invoke$arity$2(G__12501,G__12502) : pred__12488.call(null,G__12501,G__12502));
})())){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,G__12484,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12503 = cljs.core.constant$keyword$defense;
var G__12504 = expr__12489;
return (pred__12488.cljs$core$IFn$_invoke$arity$2 ? pred__12488.cljs$core$IFn$_invoke$arity$2(G__12503,G__12504) : pred__12488.call(null,G__12503,G__12504));
})())){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,G__12484,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12505 = cljs.core.constant$keyword$bonus;
var G__12506 = expr__12489;
return (pred__12488.cljs$core$IFn$_invoke$arity$2 ? pred__12488.cljs$core$IFn$_invoke$arity$2(G__12505,G__12506) : pred__12488.call(null,G__12505,G__12506));
})())){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,G__12484,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12507 = cljs.core.constant$keyword$type;
var G__12508 = expr__12489;
return (pred__12488.cljs$core$IFn$_invoke$arity$2 ? pred__12488.cljs$core$IFn$_invoke$arity$2(G__12507,G__12508) : pred__12488.call(null,G__12507,G__12508));
})())){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,G__12484,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12509 = cljs.core.constant$keyword$category;
var G__12510 = expr__12489;
return (pred__12488.cljs$core$IFn$_invoke$arity$2 ? pred__12488.cljs$core$IFn$_invoke$arity$2(G__12509,G__12510) : pred__12488.call(null,G__12509,G__12510));
})())){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,G__12484,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12511 = cljs.core.constant$keyword$displacement;
var G__12512 = expr__12489;
return (pred__12488.cljs$core$IFn$_invoke$arity$2 ? pred__12488.cljs$core$IFn$_invoke$arity$2(G__12511,G__12512) : pred__12488.call(null,G__12511,G__12512));
})())){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,G__12484,self__.movement_type,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12513 = cljs.core.constant$keyword$movement_DASH_type;
var G__12514 = expr__12489;
return (pred__12488.cljs$core$IFn$_invoke$arity$2 ? pred__12488.cljs$core$IFn$_invoke$arity$2(G__12513,G__12514) : pred__12488.call(null,G__12513,G__12514));
})())){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,G__12484,self__.movement_cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12515 = cljs.core.constant$keyword$movement_DASH_cost;
var G__12516 = expr__12489;
return (pred__12488.cljs$core$IFn$_invoke$arity$2 ? pred__12488.cljs$core$IFn$_invoke$arity$2(G__12515,G__12516) : pred__12488.call(null,G__12515,G__12516));
})())){
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,G__12484,self__.__meta,self__.__extmap,null));
} else {
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7539__auto__,G__12484),null));
}
}
}
}
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

obb_rules.unit.CombatUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7543__auto__){
var self__ = this;
var this__7543__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$code,self__.code],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$value,self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$attack,self__.attack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$attack_DASH_type,self__.attack_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$range,self__.range],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$defense,self__.defense],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$bonus,self__.bonus],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$category,self__.category],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$displacement,self__.displacement],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$movement_DASH_type,self__.movement_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$movement_DASH_cost,self__.movement_cost],null))], null),self__.__extmap));
});

obb_rules.unit.CombatUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7530__auto__,G__12484){
var self__ = this;
var this__7530__auto____$1 = this;
return (new obb_rules.unit.CombatUnit(self__.name,self__.code,self__.value,self__.attack,self__.attack_type,self__.range,self__.defense,self__.bonus,self__.type,self__.category,self__.displacement,self__.movement_type,self__.movement_cost,G__12484,self__.__extmap,self__.__hash));
});

obb_rules.unit.CombatUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7536__auto__,entry__7537__auto__){
var self__ = this;
var this__7536__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7537__auto__)){
return cljs.core._assoc(this__7536__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7537__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7537__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7536__auto____$1,entry__7537__auto__);
}
});

obb_rules.unit.CombatUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"code","code",-1068142627,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"attack","attack",-697373981,null),new cljs.core.Symbol(null,"attack-type","attack-type",1000620106,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"defense","defense",-899420777,null),new cljs.core.Symbol(null,"bonus","bonus",-43859622,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"category","category",1047438695,null),new cljs.core.Symbol(null,"displacement","displacement",330930858,null),new cljs.core.Symbol(null,"movement-type","movement-type",299712382,null),new cljs.core.Symbol(null,"movement-cost","movement-cost",924230482,null)], null);
});

obb_rules.unit.CombatUnit.cljs$lang$type = true;

obb_rules.unit.CombatUnit.cljs$lang$ctorPrSeq = (function (this__7565__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"obb-rules.unit/CombatUnit");
});

obb_rules.unit.CombatUnit.cljs$lang$ctorPrWriter = (function (this__7565__auto__,writer__7566__auto__){
return cljs.core._write(writer__7566__auto__,"obb-rules.unit/CombatUnit");
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
obb_rules.unit.map__GT_CombatUnit = (function obb_rules$unit$map__GT_CombatUnit(G__12486){
return (new obb_rules.unit.CombatUnit(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(G__12486),cljs.core.constant$keyword$code.cljs$core$IFn$_invoke$arity$1(G__12486),cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1(G__12486),cljs.core.constant$keyword$attack.cljs$core$IFn$_invoke$arity$1(G__12486),cljs.core.constant$keyword$attack_DASH_type.cljs$core$IFn$_invoke$arity$1(G__12486),cljs.core.constant$keyword$range.cljs$core$IFn$_invoke$arity$1(G__12486),cljs.core.constant$keyword$defense.cljs$core$IFn$_invoke$arity$1(G__12486),cljs.core.constant$keyword$bonus.cljs$core$IFn$_invoke$arity$1(G__12486),cljs.core.constant$keyword$type.cljs$core$IFn$_invoke$arity$1(G__12486),cljs.core.constant$keyword$category.cljs$core$IFn$_invoke$arity$1(G__12486),cljs.core.constant$keyword$displacement.cljs$core$IFn$_invoke$arity$1(G__12486),cljs.core.constant$keyword$movement_DASH_type.cljs$core$IFn$_invoke$arity$1(G__12486),cljs.core.constant$keyword$movement_DASH_cost.cljs$core$IFn$_invoke$arity$1(G__12486),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12486,cljs.core.constant$keyword$name,cljs.core.array_seq([cljs.core.constant$keyword$code,cljs.core.constant$keyword$value,cljs.core.constant$keyword$attack,cljs.core.constant$keyword$attack_DASH_type,cljs.core.constant$keyword$range,cljs.core.constant$keyword$defense,cljs.core.constant$keyword$bonus,cljs.core.constant$keyword$type,cljs.core.constant$keyword$category,cljs.core.constant$keyword$displacement,cljs.core.constant$keyword$movement_DASH_type,cljs.core.constant$keyword$movement_DASH_cost], 0)),null));
});

/**
 * Gets all the available units
 */
obb_rules.unit.gather_units = (function obb_rules$unit$gather_units(){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__12518_SHARP_){
return obb_rules.unit.map__GT_CombatUnit(p1__12518_SHARP_);
}),new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.units.rain.metadata,obb_rules.units.nova.metadata,obb_rules.units.pretorian.metadata,obb_rules.units.raptor.metadata,obb_rules.units.toxic.metadata,obb_rules.units.worm.metadata,obb_rules.units.vector.metadata,obb_rules.units.anubis.metadata,obb_rules.units.boozer.metadata,obb_rules.units.eagle.metadata,obb_rules.units.heavy_seeker.metadata,obb_rules.units.doomer.metadata,obb_rules.units.fenix.metadata,obb_rules.units.driller.metadata,obb_rules.units.krill.metadata,obb_rules.units.kahuna.metadata,obb_rules.units.panther.metadata,obb_rules.units.scarab.metadata,obb_rules.units.kamikaze.metadata,obb_rules.units.crusader.metadata], null));
});
obb_rules.unit.get_units = cljs.core.memoize(obb_rules.unit.gather_units);
obb_rules.unit.build_units = (function obb_rules$unit$build_units(units,selector){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__12519_SHARP_,p2__12520_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__12519_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12522 = p2__12520_SHARP_;
return (selector.cljs$core$IFn$_invoke$arity$1 ? selector.cljs$core$IFn$_invoke$arity$1(G__12522) : selector.call(null,G__12522));
})(),p2__12520_SHARP_], null));
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
return (function (){var G__12524 = obb_rules.unit.units_by_code;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12524) : cljs.core.deref.call(null,G__12524));
})().call(null,code);
});
/**
 * Gets a unit info given it's name
 */
obb_rules.unit.get_unit_by_name = (function obb_rules$unit$get_unit_by_name(name){
return (function (){var G__12526 = obb_rules.unit.units_by_name;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12526) : cljs.core.deref.call(null,G__12526));
})().call(null,name);
});
/**
 * Gets a unit
 */
obb_rules.unit.fetch = (function obb_rules$unit$fetch(raw){
var identifier = cljs.core.name(raw);
var or__6936__auto__ = obb_rules.unit.get_unit_by_name(identifier);
if(cljs.core.truth_(or__6936__auto__)){
return or__6936__auto__;
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
var or__6936__auto__ = cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1(unit);
if(cljs.core.truth_(or__6936__auto__)){
return or__6936__auto__;
} else {
return (0);
}
});
/**
 * Gets the unit's attack type
 */
obb_rules.unit.attack_type = (function obb_rules$unit$attack_type(unit){
var or__6936__auto__ = cljs.core.constant$keyword$attack_DASH_type.cljs$core$IFn$_invoke$arity$1(unit);
if(cljs.core.truth_(or__6936__auto__)){
return or__6936__auto__;
} else {
return cljs.core.constant$keyword$direct;
}
});
/**
 * Gets the hooks for an event
 */
obb_rules.unit.event_hooks = (function obb_rules$unit$event_hooks(unit,event){
var G__12528 = unit;
return (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(G__12528) : event.call(null,G__12528));
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
