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
exports.rules = void 0;
var constants_1 = require("../constants");
exports.rules = {
    'react/jsx-props-no-spreading': 'off',
    'unicorn/prefer-module': 'off',
    'import/no-extraneous-dependencies': [
        // Avoid importing devDependencies in production code
        'error',
        { devDependencies: __spreadArray([], constants_1.extraneousDependenciesPatterns, true) },
    ],
};
