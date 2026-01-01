"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var overrides_1 = require("./overrides");
var rules_1 = require("./rules");
exports.config = {
    env: { browser: false },
    rules: rules_1.rules,
    overrides: overrides_1.overrides,
};
