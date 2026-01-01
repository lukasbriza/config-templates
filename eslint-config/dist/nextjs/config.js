"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var overrides_1 = require("./overrides");
exports.config = {
    extends: ['plugin:@next/next/recommended'],
    plugins: ['@next/next'],
    overrides: overrides_1.overrides,
};
