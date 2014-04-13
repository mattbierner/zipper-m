/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/zipper.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "akh/identity", "./trans/zipper"], (function(require, exports, Identity, ZipperT) {
    "use strict";
    var Zipper;
    (Zipper = ZipperT(Identity));
    var x = ZipperT.runZipperT,
        y = Identity.runIdentity;
    (Zipper.runZipper = (function() {
        return y(x.apply(null, arguments));
    }));
    return Zipper;
}));