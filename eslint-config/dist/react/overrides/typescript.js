"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typescript = void 0;
var typescript_1 = require("../../base/overrides/typescript");
var ts = typescript_1.typescript[0], dts = typescript_1.typescript[1];
exports.typescript = [
    __assign(__assign({}, ts), { files: [ts.files, '*.tsx'] }),
    dts,
];
