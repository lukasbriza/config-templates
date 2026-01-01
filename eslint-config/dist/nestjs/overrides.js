"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.overrides = void 0;
exports.overrides = [
    {
        files: 'src/*/models/*.ts',
        rules: {
            'import/no-cycle': 'off', // Allow circular dependencies in models as they might reference each other
        },
    },
];
