/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/zipper.kep'
 * DO NOT EDIT
*/
"use strict";
var Trampoline = require("akh")["trampoline"],
    ZipperT = require("./trans/zipper"),
    Zipper;
(Zipper = ZipperT(Trampoline));
(Zipper.runZipper = (function(m, ctx) {
    return Trampoline.run(ZipperT.run(m, ctx));
}));
(module.exports = Zipper);