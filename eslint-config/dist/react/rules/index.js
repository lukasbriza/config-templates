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
exports.rules = void 0;
var common_1 = require("./common");
var hooks_1 = require("./hooks");
var imports_1 = require("./imports");
var jsx_1 = require("./jsx");
exports.rules = __assign(__assign(__assign(__assign({}, common_1.common), hooks_1.hooks), imports_1.imports), jsx_1.jsx);
