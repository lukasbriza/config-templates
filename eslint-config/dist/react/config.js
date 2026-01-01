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
exports.config = void 0;
var constants_1 = require("../constants");
var overrides_1 = require("./overrides");
var rules_1 = require("./rules");
exports.config = {
    env: { browser: true },
    extends: ['plugin:react-hooks/recommended', 'plugin:react/jsx-runtime', 'plugin:storybook/recommended'],
    plugins: ['formatjs', 'react', 'react-hooks', 'storybook'],
    parserOptions: {
        ecmaFeatures: { jsx: true },
        jsxPragma: null,
    },
    rules: rules_1.rules,
    overrides: overrides_1.overrides,
    settings: {
        'import/extensions': __spreadArray(__spreadArray([], constants_1.importExtensions, true), ['.tsx'], false),
        react: { version: 'detect' },
    },
};
