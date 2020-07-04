goog.provide('reitit.frontend.controllers');
goog.require('cljs.core');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__57945,match){
var map__57946 = p__57945;
var map__57946__$1 = (((((!((map__57946 == null))))?(((((map__57946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57946):map__57946);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57946__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57946__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57946__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4174__auto__ = identity;
if(cljs.core.truth_(and__4174__auto__)){
return parameters;
} else {
return and__4174__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__57949(s__57950){
return (new cljs.core.LazySeq(null,(function (){
var s__57950__$1 = s__57950;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57950__$1);
if(temp__5735__auto__){
var s__57950__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57950__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57950__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57952 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57951 = (0);
while(true){
if((i__57951 < size__4581__auto__)){
var vec__57954 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57951);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57954,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57954,(1),null);
cljs.core.chunk_append(b__57952,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__57972 = (i__57951 + (1));
i__57951 = G__57972;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57952),reitit$frontend$controllers$get_identity_$_iter__57949(cljs.core.chunk_rest(s__57950__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57952),null);
}
} else {
var vec__57957 = cljs.core.first(s__57950__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57957,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57957,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__57949(cljs.core.rest(s__57950__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__57960 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57960) : f.call(null,G__57960));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__57961_57973 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__57962_57974 = null;
var count__57963_57975 = (0);
var i__57964_57976 = (0);
while(true){
if((i__57964_57976 < count__57963_57975)){
var controller_57977 = chunk__57962_57974.cljs$core$IIndexed$_nth$arity$2(null,i__57964_57976);
reitit.frontend.controllers.apply_controller(controller_57977,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57978 = seq__57961_57973;
var G__57979 = chunk__57962_57974;
var G__57980 = count__57963_57975;
var G__57981 = (i__57964_57976 + (1));
seq__57961_57973 = G__57978;
chunk__57962_57974 = G__57979;
count__57963_57975 = G__57980;
i__57964_57976 = G__57981;
continue;
} else {
var temp__5735__auto___57982 = cljs.core.seq(seq__57961_57973);
if(temp__5735__auto___57982){
var seq__57961_57983__$1 = temp__5735__auto___57982;
if(cljs.core.chunked_seq_QMARK_(seq__57961_57983__$1)){
var c__4609__auto___57984 = cljs.core.chunk_first(seq__57961_57983__$1);
var G__57985 = cljs.core.chunk_rest(seq__57961_57983__$1);
var G__57986 = c__4609__auto___57984;
var G__57987 = cljs.core.count(c__4609__auto___57984);
var G__57988 = (0);
seq__57961_57973 = G__57985;
chunk__57962_57974 = G__57986;
count__57963_57975 = G__57987;
i__57964_57976 = G__57988;
continue;
} else {
var controller_57989 = cljs.core.first(seq__57961_57983__$1);
reitit.frontend.controllers.apply_controller(controller_57989,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57991 = cljs.core.next(seq__57961_57983__$1);
var G__57992 = null;
var G__57993 = (0);
var G__57994 = (0);
seq__57961_57973 = G__57991;
chunk__57962_57974 = G__57992;
count__57963_57975 = G__57993;
i__57964_57976 = G__57994;
continue;
}
} else {
}
}
break;
}

var seq__57965_57995 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__57966_57996 = null;
var count__57967_57997 = (0);
var i__57968_57998 = (0);
while(true){
if((i__57968_57998 < count__57967_57997)){
var controller_57999 = chunk__57966_57996.cljs$core$IIndexed$_nth$arity$2(null,i__57968_57998);
reitit.frontend.controllers.apply_controller(controller_57999,new cljs.core.Keyword(null,"start","start",-355208981));


var G__58000 = seq__57965_57995;
var G__58001 = chunk__57966_57996;
var G__58002 = count__57967_57997;
var G__58003 = (i__57968_57998 + (1));
seq__57965_57995 = G__58000;
chunk__57966_57996 = G__58001;
count__57967_57997 = G__58002;
i__57968_57998 = G__58003;
continue;
} else {
var temp__5735__auto___58004 = cljs.core.seq(seq__57965_57995);
if(temp__5735__auto___58004){
var seq__57965_58005__$1 = temp__5735__auto___58004;
if(cljs.core.chunked_seq_QMARK_(seq__57965_58005__$1)){
var c__4609__auto___58006 = cljs.core.chunk_first(seq__57965_58005__$1);
var G__58007 = cljs.core.chunk_rest(seq__57965_58005__$1);
var G__58008 = c__4609__auto___58006;
var G__58009 = cljs.core.count(c__4609__auto___58006);
var G__58010 = (0);
seq__57965_57995 = G__58007;
chunk__57966_57996 = G__58008;
count__57967_57997 = G__58009;
i__57968_57998 = G__58010;
continue;
} else {
var controller_58011 = cljs.core.first(seq__57965_58005__$1);
reitit.frontend.controllers.apply_controller(controller_58011,new cljs.core.Keyword(null,"start","start",-355208981));


var G__58012 = cljs.core.next(seq__57965_58005__$1);
var G__58013 = null;
var G__58014 = (0);
var G__58015 = (0);
seq__57965_57995 = G__58012;
chunk__57966_57996 = G__58013;
count__57967_57997 = G__58014;
i__57968_57998 = G__58015;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map