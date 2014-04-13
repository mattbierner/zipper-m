/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/tree.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "neith/zipper", "neith/tree", "./zipper"], (function(require, exports, zipper, tree,
    ZipperT) {
    "use strict";
    var TreeZipperT, TreeZipperMonad = (function(Instance) {
            (Instance.node = Instance.inspect(tree.node));
            (Instance.child = (function(edge) {
                return Instance.move(tree.child.bind(null, edge));
            }));
            (Instance.sibling = (function(edge) {
                return Instance.move(tree.sibling.bind(null, edge));
            }));
            (Instance.modifyNode = (function(f) {
                return Instance.move(tree.modifyNode.bind(null, f));
            }));
            (Instance.setNode = (function(x) {
                return Instance.move(tree.setNode.bind(null, x));
            }));
            return Instance;
        });
    (TreeZipperT = (function(m) {
        var Instance = ZipperT(m);
        TreeZipperMonad(Instance);
        return Instance;
    }));
    (TreeZipperT.runTreeZipperT = ZipperT.runZipperT);
    return TreeZipperT;
}));