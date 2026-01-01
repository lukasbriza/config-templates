"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typescript = void 0;
exports.typescript = [
    {
        files: '*.ts',
        extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking', 'plugin:@typescript-eslint/strict'],
        rules: {
            '@typescript-eslint/consistent-type-assertions': 'error', // Enforce consistent usage of type assertions
            '@typescript-eslint/consistent-type-definitions': ['error', 'type'], // Prefer type to interface
            '@typescript-eslint/consistent-type-exports': 'error', // Enforce consistent usage of type exports
            '@typescript-eslint/consistent-type-imports': 'error', // Enforce types being imported with `type` keyword
            '@typescript-eslint/no-empty-interface': 'error', // Disallow empty interfaces
            '@typescript-eslint/no-unsafe-declaration-merging': 'error', // Guard declaration merging against unsafe usage
            '@typescript-eslint/sort-type-constituents': 'error', // Sort union or intersection type members alphabetically
        },
    },
    {
        files: '*.d.ts',
        rules: {
            '@typescript-eslint/consistent-type-imports': 'off', // Allow inconsistent usage of type imports in declaration files
        },
    },
];
