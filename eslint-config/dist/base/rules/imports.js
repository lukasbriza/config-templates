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
exports.imports = void 0;
var utils_1 = require("../../utils");
exports.imports = __assign(__assign({}, (0, utils_1.getImportExtensionsRule)()), { 'import/order': [
        // Sort and group imports by type
        'error',
        {
            alphabetize: {
                caseInsensitive: true,
                order: 'asc',
            },
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            'newlines-between': 'always',
        },
    ], 'import/prefer-default-export': 'off', 'unused-imports/no-unused-imports': 'error', 'unused-imports/no-unused-vars': ['error', { ignoreRestSiblings: true }] });
