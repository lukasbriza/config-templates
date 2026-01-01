import type { Linter } from 'eslint'

export = {
  extends: [require.resolve('./base/config')],
  rules: {
    'unicorn/prefer-module': 'off',
  },
} satisfies Linter.Config
