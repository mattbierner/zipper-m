/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/tree.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "akh/identity", "./trans/tree"], (function(require, exports, Identity, TreeZipperT) {
    "use strict";
    var TreeZipper;
    (TreeZipper = TreeZipperT(Identity));
    var x = TreeZipperT.runTreeZipperT,
        y = Identity.runIdentity;
    (TreeZipper.runTreeZipper = (function() {
        return y(x.apply(null, arguments));
    }));
    return TreeZipper;
}));