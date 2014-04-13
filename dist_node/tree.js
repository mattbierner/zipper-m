/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/tree.kep'
 * DO NOT EDIT
*/
"use strict";
var Identity = require("akh")["identity"],
    TreeZipperT = require("./trans/tree"),
    Zipper;
(Zipper = TreeZipperT(Identity));
var x = TreeZipperT.runTreeZipperT,
    y = Identity.runIdentity;
(Zipper.runZipper = (function() {
    return y(x.apply(null, arguments));
}));
(module.exports = Zipper);