/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/zipper.kep'
 * DO NOT EDIT
*/
"use strict";
var Trampoline = require("akh")["trampoline"],
    ZipperT = require("./trans/zipper"),
    Zipper;
(Zipper = ZipperT(Trampoline));
var x = ZipperT.runZipperT,
    y = Trampoline.run;
(Zipper.runZipper = (function() {
    return y(x.apply(null, arguments));
}));
(module.exports = Zipper);