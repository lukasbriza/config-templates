"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImportExtensionsRule = void 0;
var constants_1 = require("./constants");
var getImportExtensionsRecord = function (extensions) {
    var record = {};
    for (var _i = 0, extensions_1 = extensions; _i < extensions_1.length; _i++) {
        var extension = extensions_1[_i];
        record[extension.replace('.', '')] = 'never';
    }
    return record;
};
var getImportExtensionsRule = function () {
    var extensions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        extensions[_i] = arguments[_i];
    }
    return ({
        'import/extensions': [
            // Avoid unnecessary file extensions in imports
            'error',
            'ignorePackages',
            getImportExtensionsRecord(__spreadArray(__spreadArray([], constants_1.importExtensions, true), extensions, true)),
        ],
    });
};
exports.getImportExtensionsRule = getImportExtensionsRule;
