// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.actions.direction');
goog.require('cljs.core');
goog.require('obb_rules.simplifier');
/**
 * Returns and adjacent offset of a direction
 */
obb_rules.actions.direction.offset = (function obb_rules$actions$direction$offset(dir){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(dir),cljs.core.cst$kw$south)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(dir),cljs.core.cst$kw$north)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(dir),cljs.core.cst$kw$east)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(dir),cljs.core.cst$kw$west)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);
} else {
return null;
}
}
}
}
});
/**
 * Moves a coord given a direction
 */
obb_rules.actions.direction.update = (function obb_rules$actions$direction$update(dir,p__15151){
var vec__15154 = p__15151;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15154,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15154,(1),null);
var vec__15155 = obb_rules.actions.direction.offset(dir);
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15155,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15155,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + ox),(y + oy)], null);
});
/**
 * Gets the perpendicular coords for the given one
 */
obb_rules.actions.direction.perpendicular = (function obb_rules$actions$direction$perpendicular(coord,direction){
if(cljs.core.truth_((function (){var or__6156__auto__ = obb_rules.simplifier.name_EQ_(direction,cljs.core.cst$kw$south);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return obb_rules.simplifier.name_EQ_(direction,cljs.core.cst$kw$north);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.actions.direction.update(cljs.core.cst$kw$west,coord),obb_rules.actions.direction.update(cljs.core.cst$kw$east,coord)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.actions.direction.update(cljs.core.cst$kw$south,coord),obb_rules.actions.direction.update(cljs.core.cst$kw$north,coord)], null);
}
});
/**
 * Given a direction, returns all the other possible directions
 */
obb_rules.actions.direction.other = (function obb_rules$actions$direction$other(dir){
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(dir,cljs.core.cst$kw$north))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$south,cljs.core.cst$kw$east,cljs.core.cst$kw$west], null);
} else {
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(dir,cljs.core.cst$kw$south))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$north,cljs.core.cst$kw$east,cljs.core.cst$kw$west], null);
} else {
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(dir,cljs.core.cst$kw$west))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$north,cljs.core.cst$kw$east,cljs.core.cst$kw$south], null);
} else {
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(dir,cljs.core.cst$kw$east))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$north,cljs.core.cst$kw$south,cljs.core.cst$kw$west], null);
} else {
return null;
}
}
}
}
});
/**
 * True if the two given directions are facing each other
 */
obb_rules.actions.direction.facing_QMARK_ = (function obb_rules$actions$direction$facing_QMARK_(dir1,dir2){
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(dir1,cljs.core.cst$kw$north))){
return obb_rules.simplifier.name_EQ_(dir2,cljs.core.cst$kw$south);
} else {
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(dir1,cljs.core.cst$kw$south))){
return obb_rules.simplifier.name_EQ_(dir2,cljs.core.cst$kw$north);
} else {
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(dir1,cljs.core.cst$kw$east))){
return obb_rules.simplifier.name_EQ_(dir2,cljs.core.cst$kw$west);
} else {
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(dir1,cljs.core.cst$kw$west))){
return obb_rules.simplifier.name_EQ_(dir2,cljs.core.cst$kw$east);
} else {
return null;
}
}
}
}
});
/**
 * Gets the direction achieved rotating the given direction clockwise
 */
obb_rules.actions.direction.clockwise = (function obb_rules$actions$direction$clockwise(dir){
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(dir,cljs.core.cst$kw$north))){
return cljs.core.cst$kw$east;
} else {
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(dir,cljs.core.cst$kw$south))){
return cljs.core.cst$kw$west;
} else {
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(dir,cljs.core.cst$kw$west))){
return cljs.core.cst$kw$north;
} else {
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(dir,cljs.core.cst$kw$east))){
return cljs.core.cst$kw$south;
} else {
return null;
}
}
}
}
});
