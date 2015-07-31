// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.actions.direction');
goog.require('cljs.core');
goog.require('obb_rules.simplifier');
/**
 * Returns and adjacent offset of a direction
 */
obb_rules.actions.direction.offset = (function obb_rules$actions$direction$offset(dir){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(dir),cljs.core.constant$keyword$south)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(dir),cljs.core.constant$keyword$north)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(dir),cljs.core.constant$keyword$east)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(dir),cljs.core.constant$keyword$west)){
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
obb_rules.actions.direction.update = (function obb_rules$actions$direction$update(dir,p__12685){
var vec__12688 = p__12685;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12688,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12688,(1),null);
var vec__12689 = obb_rules.actions.direction.offset(dir);
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12689,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12689,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + ox),(y + oy)], null);
});
/**
 * Gets the perpendicular coords for the given one
 */
obb_rules.actions.direction.perpendicular = (function obb_rules$actions$direction$perpendicular(coord,direction){
if(cljs.core.truth_((function (){var or__6936__auto__ = obb_rules.simplifier.name_EQ_(direction,cljs.core.constant$keyword$south);
if(cljs.core.truth_(or__6936__auto__)){
return or__6936__auto__;
} else {
return obb_rules.simplifier.name_EQ_(direction,cljs.core.constant$keyword$north);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.actions.direction.update(cljs.core.constant$keyword$west,coord),obb_rules.actions.direction.update(cljs.core.constant$keyword$east,coord)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.actions.direction.update(cljs.core.constant$keyword$south,coord),obb_rules.actions.direction.update(cljs.core.constant$keyword$north,coord)], null);
}
});
/**
 * Given a direction, returns all the other possible directions
 */
obb_rules.actions.direction.other = (function obb_rules$actions$direction$other(dir){
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(dir,cljs.core.constant$keyword$north))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$south,cljs.core.constant$keyword$east,cljs.core.constant$keyword$west], null);
} else {
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(dir,cljs.core.constant$keyword$south))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$north,cljs.core.constant$keyword$east,cljs.core.constant$keyword$west], null);
} else {
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(dir,cljs.core.constant$keyword$west))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$north,cljs.core.constant$keyword$east,cljs.core.constant$keyword$south], null);
} else {
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(dir,cljs.core.constant$keyword$east))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$north,cljs.core.constant$keyword$south,cljs.core.constant$keyword$west], null);
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
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(dir1,cljs.core.constant$keyword$north))){
return obb_rules.simplifier.name_EQ_(dir2,cljs.core.constant$keyword$south);
} else {
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(dir1,cljs.core.constant$keyword$south))){
return obb_rules.simplifier.name_EQ_(dir2,cljs.core.constant$keyword$north);
} else {
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(dir1,cljs.core.constant$keyword$east))){
return obb_rules.simplifier.name_EQ_(dir2,cljs.core.constant$keyword$west);
} else {
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(dir1,cljs.core.constant$keyword$west))){
return obb_rules.simplifier.name_EQ_(dir2,cljs.core.constant$keyword$east);
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
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(dir,cljs.core.constant$keyword$north))){
return cljs.core.constant$keyword$east;
} else {
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(dir,cljs.core.constant$keyword$south))){
return cljs.core.constant$keyword$west;
} else {
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(dir,cljs.core.constant$keyword$west))){
return cljs.core.constant$keyword$north;
} else {
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_(dir,cljs.core.constant$keyword$east))){
return cljs.core.constant$keyword$south;
} else {
return null;
}
}
}
}
});
