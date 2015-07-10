// Compiled by ClojureScript 0.0-3308 {}
goog.provide('obb_rules.host_dependent');
goog.require('cljs.core');
obb_rules.host_dependent.parse_int = (function obb_rules$host_dependent$parse_int(raw){
return parseInt(raw);
});
obb_rules.host_dependent.get_env = (function obb_rules$host_dependent$get_env(var_name,default_value){
return default_value;
});
obb_rules.host_dependent.scenarios_to_test = (function obb_rules$host_dependent$scenarios_to_test(){
return obb_rules.host_dependent.parse_int.call(null,obb_rules.host_dependent.get_env.call(null,"OBB_SCENARIOS_TO_TEST","10"));
});

//# sourceMappingURL=host_dependent.js.map?rel=1436517556157