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
exports.overrides = void 0;
var javascript_1 = require("./javascript");
var typescript_1 = require("./typescript");
// WARNING: The order of these overrides matters. The most specific overrides should be last.
exports.overrides = __spreadArray([javascript_1.javascript], typescript_1.typescript, true);
