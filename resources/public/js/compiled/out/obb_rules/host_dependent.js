// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('obb_rules.host_dependent');
goog.require('cljs.core');
obb_rules.host_dependent.parse_int = (function obb_rules$host_dependent$parse_int(raw){
return parseInt(raw);
});
obb_rules.host_dependent.get_env = (function obb_rules$host_dependent$get_env(var_name,default_value){
return default_value;
});
obb_rules.host_dependent.scenarios_to_test = (function obb_rules$host_dependent$scenarios_to_test(){
return obb_rules.host_dependent.parse_int(obb_rules.host_dependent.get_env("OBB_SCENARIOS_TO_TEST","1"));
});
