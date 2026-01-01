"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.javascript = void 0;
exports.javascript = {
    files: '*.cjs',
    rules: {
        '@typescript-eslint/no-var-requires': 'off', // Allow require() in CJS files
    },
};
