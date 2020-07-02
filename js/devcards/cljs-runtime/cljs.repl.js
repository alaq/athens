goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45100){
var map__45101 = p__45100;
var map__45101__$1 = (((((!((map__45101 == null))))?(((((map__45101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45101):map__45101);
var m = map__45101__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45101__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45101__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45103_45291 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45104_45292 = null;
var count__45105_45293 = (0);
var i__45106_45294 = (0);
while(true){
if((i__45106_45294 < count__45105_45293)){
var f_45298 = chunk__45104_45292.cljs$core$IIndexed$_nth$arity$2(null,i__45106_45294);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45298], 0));


var G__45299 = seq__45103_45291;
var G__45300 = chunk__45104_45292;
var G__45301 = count__45105_45293;
var G__45302 = (i__45106_45294 + (1));
seq__45103_45291 = G__45299;
chunk__45104_45292 = G__45300;
count__45105_45293 = G__45301;
i__45106_45294 = G__45302;
continue;
} else {
var temp__5735__auto___45303 = cljs.core.seq(seq__45103_45291);
if(temp__5735__auto___45303){
var seq__45103_45304__$1 = temp__5735__auto___45303;
if(cljs.core.chunked_seq_QMARK_(seq__45103_45304__$1)){
var c__4609__auto___45305 = cljs.core.chunk_first(seq__45103_45304__$1);
var G__45306 = cljs.core.chunk_rest(seq__45103_45304__$1);
var G__45307 = c__4609__auto___45305;
var G__45308 = cljs.core.count(c__4609__auto___45305);
var G__45309 = (0);
seq__45103_45291 = G__45306;
chunk__45104_45292 = G__45307;
count__45105_45293 = G__45308;
i__45106_45294 = G__45309;
continue;
} else {
var f_45310 = cljs.core.first(seq__45103_45304__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45310], 0));


var G__45311 = cljs.core.next(seq__45103_45304__$1);
var G__45312 = null;
var G__45313 = (0);
var G__45314 = (0);
seq__45103_45291 = G__45311;
chunk__45104_45292 = G__45312;
count__45105_45293 = G__45313;
i__45106_45294 = G__45314;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45315 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45315], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45315)))?cljs.core.second(arglists_45315):arglists_45315)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45108_45328 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45109_45329 = null;
var count__45110_45330 = (0);
var i__45111_45331 = (0);
while(true){
if((i__45111_45331 < count__45110_45330)){
var vec__45122_45332 = chunk__45109_45329.cljs$core$IIndexed$_nth$arity$2(null,i__45111_45331);
var name_45333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45122_45332,(0),null);
var map__45125_45334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45122_45332,(1),null);
var map__45125_45335__$1 = (((((!((map__45125_45334 == null))))?(((((map__45125_45334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45125_45334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45125_45334):map__45125_45334);
var doc_45336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45125_45335__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45125_45335__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45333], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45337], 0));

if(cljs.core.truth_(doc_45336)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45336], 0));
} else {
}


var G__45338 = seq__45108_45328;
var G__45339 = chunk__45109_45329;
var G__45340 = count__45110_45330;
var G__45341 = (i__45111_45331 + (1));
seq__45108_45328 = G__45338;
chunk__45109_45329 = G__45339;
count__45110_45330 = G__45340;
i__45111_45331 = G__45341;
continue;
} else {
var temp__5735__auto___45342 = cljs.core.seq(seq__45108_45328);
if(temp__5735__auto___45342){
var seq__45108_45343__$1 = temp__5735__auto___45342;
if(cljs.core.chunked_seq_QMARK_(seq__45108_45343__$1)){
var c__4609__auto___45344 = cljs.core.chunk_first(seq__45108_45343__$1);
var G__45345 = cljs.core.chunk_rest(seq__45108_45343__$1);
var G__45346 = c__4609__auto___45344;
var G__45347 = cljs.core.count(c__4609__auto___45344);
var G__45348 = (0);
seq__45108_45328 = G__45345;
chunk__45109_45329 = G__45346;
count__45110_45330 = G__45347;
i__45111_45331 = G__45348;
continue;
} else {
var vec__45127_45350 = cljs.core.first(seq__45108_45343__$1);
var name_45351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45127_45350,(0),null);
var map__45130_45352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45127_45350,(1),null);
var map__45130_45353__$1 = (((((!((map__45130_45352 == null))))?(((((map__45130_45352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45130_45352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45130_45352):map__45130_45352);
var doc_45354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45130_45353__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45130_45353__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45351], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45355], 0));

if(cljs.core.truth_(doc_45354)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45354], 0));
} else {
}


var G__45356 = cljs.core.next(seq__45108_45343__$1);
var G__45357 = null;
var G__45358 = (0);
var G__45359 = (0);
seq__45108_45328 = G__45356;
chunk__45109_45329 = G__45357;
count__45110_45330 = G__45358;
i__45111_45331 = G__45359;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__45133 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45134 = null;
var count__45135 = (0);
var i__45136 = (0);
while(true){
if((i__45136 < count__45135)){
var role = chunk__45134.cljs$core$IIndexed$_nth$arity$2(null,i__45136);
var temp__5735__auto___45361__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45361__$1)){
var spec_45362 = temp__5735__auto___45361__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45362)], 0));
} else {
}


var G__45363 = seq__45133;
var G__45364 = chunk__45134;
var G__45365 = count__45135;
var G__45366 = (i__45136 + (1));
seq__45133 = G__45363;
chunk__45134 = G__45364;
count__45135 = G__45365;
i__45136 = G__45366;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45133);
if(temp__5735__auto____$1){
var seq__45133__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45133__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45133__$1);
var G__45367 = cljs.core.chunk_rest(seq__45133__$1);
var G__45368 = c__4609__auto__;
var G__45369 = cljs.core.count(c__4609__auto__);
var G__45370 = (0);
seq__45133 = G__45367;
chunk__45134 = G__45368;
count__45135 = G__45369;
i__45136 = G__45370;
continue;
} else {
var role = cljs.core.first(seq__45133__$1);
var temp__5735__auto___45371__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45371__$2)){
var spec_45372 = temp__5735__auto___45371__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45372)], 0));
} else {
}


var G__45373 = cljs.core.next(seq__45133__$1);
var G__45374 = null;
var G__45375 = (0);
var G__45376 = (0);
seq__45133 = G__45373;
chunk__45134 = G__45374;
count__45135 = G__45375;
i__45136 = G__45376;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__45378 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45379 = cljs.core.ex_cause(t);
via = G__45378;
t = G__45379;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__45144 = datafied_throwable;
var map__45144__$1 = (((((!((map__45144 == null))))?(((((map__45144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45144):map__45144);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45144__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45144__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45144__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45145 = cljs.core.last(via);
var map__45145__$1 = (((((!((map__45145 == null))))?(((((map__45145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45145):map__45145);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45145__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45145__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45145__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45146 = data;
var map__45146__$1 = (((((!((map__45146 == null))))?(((((map__45146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45146):map__45146);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45146__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45146__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45146__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45147 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45147__$1 = (((((!((map__45147 == null))))?(((((map__45147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45147):map__45147);
var top_data = map__45147__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45147__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45152 = phase;
var G__45152__$1 = (((G__45152 instanceof cljs.core.Keyword))?G__45152.fqn:null);
switch (G__45152__$1) {
case "read-source":
var map__45153 = data;
var map__45153__$1 = (((((!((map__45153 == null))))?(((((map__45153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45153):map__45153);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45153__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45153__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45155 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45155__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45155,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45155);
var G__45155__$2 = (cljs.core.truth_((function (){var fexpr__45156 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45156.cljs$core$IFn$_invoke$arity$1 ? fexpr__45156.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45156.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45155__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45155__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45155__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45155__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45157 = top_data;
var G__45157__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45157,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45157);
var G__45157__$2 = (cljs.core.truth_((function (){var fexpr__45162 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45162.cljs$core$IFn$_invoke$arity$1 ? fexpr__45162.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45162.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45157__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45157__$1);
var G__45157__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45157__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45157__$2);
var G__45157__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45157__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45157__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45157__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45157__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45175 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45175,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45175,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45175,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45175,(3),null);
var G__45179 = top_data;
var G__45179__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45179,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45179);
var G__45179__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45179__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45179__$1);
var G__45179__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45179__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45179__$2);
var G__45179__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45179__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45179__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45179__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45179__$4;
}

break;
case "execution":
var vec__45180 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45180,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45180,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45180,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45180,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45143_SHARP_){
var or__4185__auto__ = (p1__45143_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45184 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45184.cljs$core$IFn$_invoke$arity$1 ? fexpr__45184.cljs$core$IFn$_invoke$arity$1(p1__45143_SHARP_) : fexpr__45184.call(null,p1__45143_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45185 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45185__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45185,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45185);
var G__45185__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45185__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45185__$1);
var G__45185__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45185__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45185__$2);
var G__45185__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45185__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45185__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45185__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45185__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45152__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45195){
var map__45200 = p__45195;
var map__45200__$1 = (((((!((map__45200 == null))))?(((((map__45200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45200):map__45200);
var triage_data = map__45200__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45200__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45200__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45200__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45200__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45200__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45200__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45200__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45200__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__45216 = phase;
var G__45216__$1 = (((G__45216 instanceof cljs.core.Keyword))?G__45216.fqn:null);
switch (G__45216__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45222 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45223 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45224 = loc;
var G__45225 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45232_45389 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45233_45390 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45234_45391 = true;
var _STAR_print_fn_STAR__temp_val__45235_45392 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45234_45391);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45235_45392);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45193_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45193_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45233_45390);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45232_45389);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45222,G__45223,G__45224,G__45225) : format.call(null,G__45222,G__45223,G__45224,G__45225));

break;
case "macroexpansion":
var G__45245 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45246 = cause_type;
var G__45247 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45248 = loc;
var G__45249 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45245,G__45246,G__45247,G__45248,G__45249) : format.call(null,G__45245,G__45246,G__45247,G__45248,G__45249));

break;
case "compile-syntax-check":
var G__45250 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45251 = cause_type;
var G__45252 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45253 = loc;
var G__45254 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45250,G__45251,G__45252,G__45253,G__45254) : format.call(null,G__45250,G__45251,G__45252,G__45253,G__45254));

break;
case "compilation":
var G__45255 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45256 = cause_type;
var G__45257 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45258 = loc;
var G__45259 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45255,G__45256,G__45257,G__45258,G__45259) : format.call(null,G__45255,G__45256,G__45257,G__45258,G__45259));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45260 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45261 = symbol;
var G__45262 = loc;
var G__45263 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45264_45397 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45265_45398 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45266_45399 = true;
var _STAR_print_fn_STAR__temp_val__45267_45400 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45266_45399);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45267_45400);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45194_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45194_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45265_45398);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45264_45397);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45260,G__45261,G__45262,G__45263) : format.call(null,G__45260,G__45261,G__45262,G__45263));
} else {
var G__45275 = "Execution error%s at %s(%s).\n%s\n";
var G__45276 = cause_type;
var G__45277 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45278 = loc;
var G__45279 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45275,G__45276,G__45277,G__45278,G__45279) : format.call(null,G__45275,G__45276,G__45277,G__45278,G__45279));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45216__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map