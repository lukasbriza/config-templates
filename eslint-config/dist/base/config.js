"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var constants_1 = require("../constants");
var overrides_1 = require("./overrides");
var rules_1 = require("./rules");
exports.config = {
    env: { es2024: true, node: true },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
        'plugin:unicorn/recommended',
        'prettier',
        'turbo',
    ],
    ignorePatterns: ['.idea', '.vscode', 'build', 'coverage', 'dist', 'node_modules'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: { modules: true },
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'import', 'prettier', 'unicorn', 'unused-imports', 'prettier', 'turbo'],
    rules: rules_1.rules,
    overrides: overrides_1.overrides,
    settings: {
        'import/extensions': constants_1.importExtensions,
        'import/resolver': { typescript: {} },
    },
};
