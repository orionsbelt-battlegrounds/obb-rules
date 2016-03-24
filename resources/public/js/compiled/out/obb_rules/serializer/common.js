// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.serializer.common');
goog.require('cljs.core');
/**
 * This marker separates each context of the dumped game
 *   (properties, deploy, turns,...)
 */
obb_rules.serializer.common.context_separator = "\n\n";
/**
 * This marker separates each action in a collection of actions
 */
obb_rules.serializer.common.action_separator = " ";
/**
 * This marker separates each stash unit/quantity in a stash coll
 */
obb_rules.serializer.common.stash_separator = " ";
/**
 * This marker separates key from value on the attributes
 */
obb_rules.serializer.common.attributes_separator = ":";
/**
 * This markers separates data in an action
 */
obb_rules.serializer.common.in_action_separator = "\\.";
