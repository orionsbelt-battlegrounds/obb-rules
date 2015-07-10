// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_rules.actions.direction');
goog.require('cljs.core');
goog.require('obb_rules.simplifier');
/**
 * Returns and adjacent offset of a direction
 */
obb_rules.actions.direction.offset = (function obb_rules$actions$direction$offset(dir){
if(cljs.core._EQ_.call(null,cljs.core.keyword.call(null,dir),new cljs.core.Keyword(null,"south","south",1586796293))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.keyword.call(null,dir),new cljs.core.Keyword(null,"north","north",651323902))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.keyword.call(null,dir),new cljs.core.Keyword(null,"east","east",1189821678))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.keyword.call(null,dir),new cljs.core.Keyword(null,"west","west",708776677))){
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
obb_rules.actions.direction.update = (function obb_rules$actions$direction$update(dir,p__32878){
var vec__32881 = p__32878;
var x = cljs.core.nth.call(null,vec__32881,(0),null);
var y = cljs.core.nth.call(null,vec__32881,(1),null);
var vec__32882 = obb_rules.actions.direction.offset.call(null,dir);
var ox = cljs.core.nth.call(null,vec__32882,(0),null);
var oy = cljs.core.nth.call(null,vec__32882,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + ox),(y + oy)], null);
});
/**
 * Gets the perpendicular coords for the given one
 */
obb_rules.actions.direction.perpendicular = (function obb_rules$actions$direction$perpendicular(coord,direction){
if(cljs.core.truth_((function (){var or__16109__auto__ = obb_rules.simplifier.name_EQ_.call(null,direction,new cljs.core.Keyword(null,"south","south",1586796293));
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return obb_rules.simplifier.name_EQ_.call(null,direction,new cljs.core.Keyword(null,"north","north",651323902));
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.actions.direction.update.call(null,new cljs.core.Keyword(null,"west","west",708776677),coord),obb_rules.actions.direction.update.call(null,new cljs.core.Keyword(null,"east","east",1189821678),coord)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obb_rules.actions.direction.update.call(null,new cljs.core.Keyword(null,"south","south",1586796293),coord),obb_rules.actions.direction.update.call(null,new cljs.core.Keyword(null,"north","north",651323902),coord)], null);
}
});
/**
 * Given a direction, returns all the other possible directions
 */
obb_rules.actions.direction.other = (function obb_rules$actions$direction$other(dir){
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_.call(null,dir,new cljs.core.Keyword(null,"north","north",651323902)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"west","west",708776677)], null);
} else {
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_.call(null,dir,new cljs.core.Keyword(null,"south","south",1586796293)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"west","west",708776677)], null);
} else {
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_.call(null,dir,new cljs.core.Keyword(null,"west","west",708776677)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"south","south",1586796293)], null);
} else {
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_.call(null,dir,new cljs.core.Keyword(null,"east","east",1189821678)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.Keyword(null,"west","west",708776677)], null);
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
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_.call(null,dir1,new cljs.core.Keyword(null,"north","north",651323902)))){
return obb_rules.simplifier.name_EQ_.call(null,dir2,new cljs.core.Keyword(null,"south","south",1586796293));
} else {
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_.call(null,dir1,new cljs.core.Keyword(null,"south","south",1586796293)))){
return obb_rules.simplifier.name_EQ_.call(null,dir2,new cljs.core.Keyword(null,"north","north",651323902));
} else {
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_.call(null,dir1,new cljs.core.Keyword(null,"east","east",1189821678)))){
return obb_rules.simplifier.name_EQ_.call(null,dir2,new cljs.core.Keyword(null,"west","west",708776677));
} else {
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_.call(null,dir1,new cljs.core.Keyword(null,"west","west",708776677)))){
return obb_rules.simplifier.name_EQ_.call(null,dir2,new cljs.core.Keyword(null,"east","east",1189821678));
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
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_.call(null,dir,new cljs.core.Keyword(null,"north","north",651323902)))){
return new cljs.core.Keyword(null,"east","east",1189821678);
} else {
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_.call(null,dir,new cljs.core.Keyword(null,"south","south",1586796293)))){
return new cljs.core.Keyword(null,"west","west",708776677);
} else {
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_.call(null,dir,new cljs.core.Keyword(null,"west","west",708776677)))){
return new cljs.core.Keyword(null,"north","north",651323902);
} else {
if(cljs.core.truth_(obb_rules.simplifier.name_EQ_.call(null,dir,new cljs.core.Keyword(null,"east","east",1189821678)))){
return new cljs.core.Keyword(null,"south","south",1586796293);
} else {
return null;
}
}
}
}
});

//# sourceMappingURL=direction.js.map?rel=1436517556577