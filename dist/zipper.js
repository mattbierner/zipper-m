/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/zipper.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "akh/trampoline", "./trans/zipper"], (function(require, exports, Trampoline, ZipperT) {
    "use strict";
    var Zipper;
    (Zipper = ZipperT(Trampoline));
    (Zipper.runZipper = (function(m, ctx) {
        return Trampoline.run(ZipperT.run(m, ctx));
    }));
    return Zipper;
}));