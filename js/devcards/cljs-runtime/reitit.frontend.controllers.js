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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__55644,match){
var map__55645 = p__55644;
var map__55645__$1 = (((((!((map__55645 == null))))?(((((map__55645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55645):map__55645);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55645__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55645__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55645__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__55647(s__55648){
return (new cljs.core.LazySeq(null,(function (){
var s__55648__$1 = s__55648;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55648__$1);
if(temp__5735__auto__){
var s__55648__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55648__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__55648__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__55650 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__55649 = (0);
while(true){
if((i__55649 < size__4581__auto__)){
var vec__55651 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__55649);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55651,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55651,(1),null);
cljs.core.chunk_append(b__55650,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__55669 = (i__55649 + (1));
i__55649 = G__55669;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55650),reitit$frontend$controllers$get_identity_$_iter__55647(cljs.core.chunk_rest(s__55648__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55650),null);
}
} else {
var vec__55654 = cljs.core.first(s__55648__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55654,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55654,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__55647(cljs.core.rest(s__55648__$2)));
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
var G__55657 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__55657) : f.call(null,G__55657));
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
var seq__55660_55671 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__55661_55672 = null;
var count__55662_55673 = (0);
var i__55663_55674 = (0);
while(true){
if((i__55663_55674 < count__55662_55673)){
var controller_55676 = chunk__55661_55672.cljs$core$IIndexed$_nth$arity$2(null,i__55663_55674);
reitit.frontend.controllers.apply_controller(controller_55676,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__55678 = seq__55660_55671;
var G__55679 = chunk__55661_55672;
var G__55680 = count__55662_55673;
var G__55681 = (i__55663_55674 + (1));
seq__55660_55671 = G__55678;
chunk__55661_55672 = G__55679;
count__55662_55673 = G__55680;
i__55663_55674 = G__55681;
continue;
} else {
var temp__5735__auto___55682 = cljs.core.seq(seq__55660_55671);
if(temp__5735__auto___55682){
var seq__55660_55683__$1 = temp__5735__auto___55682;
if(cljs.core.chunked_seq_QMARK_(seq__55660_55683__$1)){
var c__4609__auto___55684 = cljs.core.chunk_first(seq__55660_55683__$1);
var G__55685 = cljs.core.chunk_rest(seq__55660_55683__$1);
var G__55686 = c__4609__auto___55684;
var G__55687 = cljs.core.count(c__4609__auto___55684);
var G__55688 = (0);
seq__55660_55671 = G__55685;
chunk__55661_55672 = G__55686;
count__55662_55673 = G__55687;
i__55663_55674 = G__55688;
continue;
} else {
var controller_55689 = cljs.core.first(seq__55660_55683__$1);
reitit.frontend.controllers.apply_controller(controller_55689,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__55690 = cljs.core.next(seq__55660_55683__$1);
var G__55691 = null;
var G__55692 = (0);
var G__55693 = (0);
seq__55660_55671 = G__55690;
chunk__55661_55672 = G__55691;
count__55662_55673 = G__55692;
i__55663_55674 = G__55693;
continue;
}
} else {
}
}
break;
}

var seq__55665_55694 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__55666_55695 = null;
var count__55667_55696 = (0);
var i__55668_55697 = (0);
while(true){
if((i__55668_55697 < count__55667_55696)){
var controller_55698 = chunk__55666_55695.cljs$core$IIndexed$_nth$arity$2(null,i__55668_55697);
reitit.frontend.controllers.apply_controller(controller_55698,new cljs.core.Keyword(null,"start","start",-355208981));


var G__55699 = seq__55665_55694;
var G__55700 = chunk__55666_55695;
var G__55701 = count__55667_55696;
var G__55702 = (i__55668_55697 + (1));
seq__55665_55694 = G__55699;
chunk__55666_55695 = G__55700;
count__55667_55696 = G__55701;
i__55668_55697 = G__55702;
continue;
} else {
var temp__5735__auto___55703 = cljs.core.seq(seq__55665_55694);
if(temp__5735__auto___55703){
var seq__55665_55704__$1 = temp__5735__auto___55703;
if(cljs.core.chunked_seq_QMARK_(seq__55665_55704__$1)){
var c__4609__auto___55705 = cljs.core.chunk_first(seq__55665_55704__$1);
var G__55706 = cljs.core.chunk_rest(seq__55665_55704__$1);
var G__55707 = c__4609__auto___55705;
var G__55708 = cljs.core.count(c__4609__auto___55705);
var G__55709 = (0);
seq__55665_55694 = G__55706;
chunk__55666_55695 = G__55707;
count__55667_55696 = G__55708;
i__55668_55697 = G__55709;
continue;
} else {
var controller_55710 = cljs.core.first(seq__55665_55704__$1);
reitit.frontend.controllers.apply_controller(controller_55710,new cljs.core.Keyword(null,"start","start",-355208981));


var G__55711 = cljs.core.next(seq__55665_55704__$1);
var G__55712 = null;
var G__55713 = (0);
var G__55714 = (0);
seq__55665_55694 = G__55711;
chunk__55666_55695 = G__55712;
count__55667_55696 = G__55713;
i__55668_55697 = G__55714;
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
