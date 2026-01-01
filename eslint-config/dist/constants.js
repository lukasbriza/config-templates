"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importExtensions = exports.extraneousDependenciesPatterns = void 0;
exports.extraneousDependenciesPatterns = [
    '**/*.config.cjs',
    '**/*.config.js',
    '**/*.config.mjs',
    '**/*.config.ts',
    '**/codegen.ts',
    '**/scripts/**/*',
    '**/tests/**/*',
    '**/types/*.d.ts',
    '**/vite.config.ts',
];
exports.importExtensions = ['.cjs', '.js', '.ts'];
